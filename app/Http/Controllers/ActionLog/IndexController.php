<?php

namespace App\Http\Controllers\ActionLog;

use App\Exports\IncomeReport;
use App\Exports\OutcomeReport;
use App\Exports\StockReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\ActionLog\ActionLogRequest;
use App\Models\ActionLog;
use App\Models\Box;
use App\Models\BoxesStock;
use App\Models\Customer;
use App\Models\Plan;
use App\Models\PlanHistory;
use App\Models\Product;
use App\Models\Stock;
use App\Traits\FilterBuilder;
use Carbon\Carbon;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\View\View;

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
            $stock = Stock::where(['product_id' => (int)$request->get('product_id')])->first();
            $product = Product::whereId((int)$request->get('product_id'))->first();

            if ($request->has('box_count')) {
                $box_count = (int)$request->get('box_count');
                $request->merge(['count' => $box_count * $product->box_size]);
                $request->offsetUnset('box_count');
            } else {
                $box_count = (int)$request->get('count') / $product->box_size;
            }

            $description = $stock->description;
            if ($request->has('description')) {
                $description .= $request->get('description');
            }

            if ((int)$request->get('income') === ActionLog::INCOME) {
                /** INCOME */
                $insertData = [
                    'count'       => $stock->count + (int)$request->get('count'),
                    'description' => $stock->description . ' ' . $request->get('description')
                ];

                if (!empty($stock)) {
                    $stock->update($insertData);
                }
            } else {
                /** OUTCOME */

                if (!$request->get('ignore_boxes_stock')) {
                    $boxesStock = BoxesStock::where(['box_id' => $product->box_id])->first();
                    if (!$boxesStock) {
                        BoxesStock::create([
                            'box_id' => $product->box_id,
                            'count'  => 0,
                        ]);
                        $boxesStock = BoxesStock::where(['box_id' => $product->box_id])->first();
                    }

                    $boxesStock->update([
                        'count' => $boxesStock->count - $box_count
                    ]);
                }

                if (!empty($stock)) {
                    $count = $stock->count -= (int)$request->get('count');
                    if ($count < 0) {
                        return $this->error(['message' => 'Такого количества товара нет на складе! 1']);
                    }
                    $insertData = [
                        'count'       => $count,
                        'description' => $description
                    ];

                    $stock->update($insertData);
                }
            }

            ActionLog::create($request->all());
        } catch (QueryException $e) {
            Log::info(json_encode($e->getMessage()));
            return $this->error(['message' => 'Такого количества товара нет на складе! 2']);
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
        $action = ActionLog::findOrFail($id);
        $stock = Stock::where(['product_id' => $action->product->id])->first();

        if ($action->income === ActionLog::INCOME) {
            /** INCOME */
            if (!empty($stock)) {
                $stock->update([
                    'count' => $stock->count - $action->count,
                ]);
            }
        } else {
            /** OUTCOME */
            if (!empty($stock)) {
                $stock->update([
                    'count' => $stock->count + $action->count,
                ]);
            }
        }

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
            'response'  => $response,
            'direction' => $direction,
            'dateFrom'  => $request->get('from'),
            'dateTo'    => $request->get('to'),
            'success'   => __('Report sent! ' . var_export($response, 1)),
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
