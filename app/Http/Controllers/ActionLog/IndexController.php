<?php

namespace App\Http\Controllers\ActionLog;

use App\Exports\IncomeReport;
use App\Exports\OutcomeReport;
use App\Exports\StockReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\ActionLog\ActionLogRequest;
use App\Models\ActionLog;
use App\Models\Box;
use App\Models\Customer;
use App\Models\Plan;
use App\Models\PlanHistory;
use App\Models\Product;
use App\Models\Stock;
use App\Traits\FilterBuilder;
use Carbon\Carbon;
use Exception;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\View\View;
use Swift_TransportException;
use Illuminate\Support\Facades\Storage;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'income'     => 'equal',
        'product'    => 'manual',
        'date'       => 'date_range',
        'customer'   => 'manual',
        'page_limit' => 'manual'
    ];

    /**
     * List of products
     *
     * @param Request $request Request
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {
//        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();
//                ->whereNotIn('id', array_filter($parentIds))

        $data = $this->applyFilter(
            $request,
            ActionLog::selectRaw('action_log.id as id, action_log.date, action_log.income, action_log.product_id, action_log.count, action_log.customer_id')->with('product', 'customer')
                ->orderBy('action_log.date', 'desc')
                ->orderBy('action_log.id', 'desc')
        )->paginate($this->perPage);

        return view('action-log.index', [
            'data'             => $data,
            'filter'           => $this->getFilter(),
            'transaction_type' => config('presets.transaction_type'),
            'dateFrom'         => $request->get('dateFrom'),
            'dateTo'           => $request->get('dateTo'),
            'products'         => Product::all()->keyBy('id'),
            'customers'        => Customer::all()->keyBy('id'),
            'boxes'            => Box::all()->keyBy('id'),
        ]);
    }

    /**
     * Product filter
     *
     * @param Request $request
     * @param $builder
     * @return mixed
     */
    private function applyProductFilter(Request $request, $builder)
    {
        $product_id = $request->get('product');

        if (!empty($product_id)) {
            $builder
                ->leftJoin('products', 'action_log.product_id', '=', 'products.id')
                ->where('products.id', $product_id);
        }

        return $builder;
    }

    /**
     * Customer filter
     *
     * @param Request $request
     * @param $builder
     * @return mixed
     */
    private function applyCustomerFilter(Request $request, $builder)
    {
        $customer_id = $request->get('customer');

        if (!empty($customer_id)) {
            $builder
                ->leftJoin('customers', 'action_log.customer_id', '=', 'customers.id')
                ->where('customers.id', $customer_id);
        }

        return $builder;
    }

    /**
     * Create new product view
     *
     * @return Factory|View
     */
    public function create()
    {
        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();

        return view('action-log.create', [
            'transaction_type' => config('presets.transaction_type'),
            'products'         => Product::whereNotIn('products.id', array_filter($parentIds))->get(),
            'customers'        => Customer::all(),
        ]);
    }

    /**
     * Save new action
     *
     * @param ActionLogRequest $request
     * @return JsonResponse
     */
    public function store(ActionLogRequest $request)
    {
        try {
            $plan = Plan::where(['product_id' => (int)$request->get('product_id')])->first();
            $stock = Stock::where(['product_id' => (int)$request->get('product_id')])->first();
            $product = Product::whereId((int)$request->get('product_id'))->first();

            if ($request->has('box_count')) {
                $request->merge(['count' => (int)$request->get('box_count') * $product->box_size]);
                $request->offsetUnset('box_count');
            }

            $description = $stock->description;
            if ($request->has('description')) {
                $description .= $request->get('description');
            }

            if ((int)$request->get('income') === ActionLog::INCOME) {
                $insertData = [
                    'count'       => $stock->count + (int)$request->get('count'),
                    'description' => $stock->description . ' ' . $request->get('description')
                ];

                if (!empty($request->get('partition'))) {
                    $insertData['partition'] = $request->get('partition');
                }
                if (!empty($stock)) {
                    $stock->update($insertData);
                }
                if (!empty($plan)) {
                    $plan->progress += (int)$request->get('count');
                    if ($plan->progress >= $plan->count) {
                        PlanHistory::create([
                            'product_id' => (int)$request->get('product_id'),
                            'count'      => $plan->count,
                            'updated_at' => Carbon::now()->format('Y-m-d'),
                            'created_at' => $plan->created_at
                        ]);
                    }
                    $plan->delete();
                    pushNotify('success', __('План по товару #' . $request->get('product_id') . ' закрыт'));

                }
            } else {
                /** OUTCOME */
                if (!empty($stock)) {
                    $count = $stock->count -= (int)$request->get('count');
                    if ($count < 0) {
                        return $this->error(['message' => 'Такого количества нет на складе!']);
                    }
                    $insertData = [
                        'count'       => $count,
                        'description' => $description
                    ];

                    if (!empty($request->get('partition'))) {
                        $insertData['partition'] = $request->get('partition');
                    }

                    $stock->update($insertData);
                }
            }

            ActionLog::create($request->all());
        } catch (QueryException $e) {
            Log::info(json_encode($e->getMessage()));
            return $this->error(['message' => 'Такого количества нет на складе!']);
        }

        pushNotify('success', __('Product') . ' ' . __('common.action.added'));
        return $this->success();
    }

    /**
     * Edit product view
     *
     * @param integer $id ID
     *
     * @return Factory|View
     */
    public function edit(int $id)
    {
        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();

        return view('action-log.edit', [
            'model'            => ActionLog::find($id),
            'transaction_type' => config('presets.transaction_type'),
            'products'         => Product::whereNotIn('products.id', array_filter($parentIds))->get(),
            'customers'        => Customer::all(),
        ]);
    }

    /**
     * Update product
     *
     * @param Request $request
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function update(Request $request, int $id)
    {
        $action = ActionLog::findOrFail($id);

        if ($request->has('box_count')) {
            $request->merge(['count' => (int)$request->get('box_count') * $action->product->box_size]);
            $request->offsetUnset('box_count');
        }

        $stock = Stock::where(['product_id' => $action->product->id])->first();

        if ($request->get('count') == 0) {
            if ($request->has('description')) {
                $stock->update([
                    'description' => $request->get('description')
                ]);
            }
            $request->offsetUnset('count');
        } else {

            if ((int)$request->get('income') === ActionLog::INCOME) {
                Log::info(json_encode($request->all()));

                if (!empty($stock)) {
                    $stock->update([
                        'count'       => $stock->count + ((int)$request->get('count') - $action->count),
                        'description' => $request->get('description')
                    ]);
                }
            } else {
                /** OUTCOME */
                if (!empty($stock)) {
                    $stock->update([
                        'count'       => $stock->count + ($action->count - (int)$request->get('count')),
                        'description' => $request->get('description')
                    ]);
                }
            }
        }

        $action->update($request->all());

        return $this->success();
    }

    /**
     * Delete product
     *
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function destroy(int $id)
    {
        ActionLog::destroy($id);

        return $this->success();
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function reportSend(Request $request)
    {
        $date_from = Carbon::createFromFormat('Y-m-d', $request->get('from'));
        $date_to = Carbon::createFromFormat('Y-m-d', $request->get('to'));
        $dateFrom = $date_from->startOfDay()->format('Y-m-d H:i:s');
        $dateTo = $date_to->endOfDay()->format('Y-m-d H:i:s');
        $direction = (int)$request->get('direction');

        try {
            if ($direction == ActionLog::INCOME) {
                $entity = new IncomeReport($dateFrom, $dateTo);
            } elseif ($direction === ActionLog::OUTOME) {
                $entity = new OutcomeReport($dateFrom, $dateTo);
            } elseif ($direction === ActionLog::STOCK) {
                $entity = new StockReport($dateFrom, $dateTo);
            }

            $response = $this->sendReportData($entity->collection());

        } catch (Exception $e) {
            pushNotify('error', $e->getMessage());
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }

        pushNotify('success', __('Report sent! ' . var_export($response, 1)));

        return response()->json([
            'response'     => $response,
            'direction'    => $direction,
            'dateFrom'     => $request->get('from'),
            'dateTo'       => $request->get('to'),
            'success'      => __('Report sent! ' . var_export($response, 1)),
        ]);
    }

    /**
     * @param $reportData
     * @return bool|string
     */
    function sendReportData($reportData)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL            => env('REPORT_SERVICE'),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => "",
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST  => "POST",
            CURLOPT_POSTFIELDS     => $reportData,

            CURLOPT_HTTPHEADER => array(
                "Cache-Control: no-cache",
                "Content-Type: application/json",
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            return "cURL Error #:" . $err;
        } else {
            return $response;
        }
    }

}
