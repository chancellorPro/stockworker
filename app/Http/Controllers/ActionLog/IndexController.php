<?php

namespace App\Http\Controllers\ActionLog;

use App\Exports\IncomeReport;
use App\Exports\OutcomeReport;
use App\Exports\StockReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\ActionLog\ActionLogRequest;
use App\Models\ActionLog;
use App\Models\Customer;
use App\Models\Plan;
use App\Models\PlanHistory;
use App\Models\Product;
use App\Models\Stock;
use App\Traits\FilterBuilder;
use Carbon\Carbon;
use CURLFile;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\View\View;
use Maatwebsite\Excel\Excel;
use Matrix\Exception;
use Swift_TransportException;

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
        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();

        $data = $this->applyFilter(
            $request,
            ActionLog::with('product', 'customer')
                ->whereNotIn('id', array_filter($parentIds))
                ->orderBy('action_log.date', 'desc')
                ->orderBy('action_log.id', 'desc')
        )->paginate($this->perPage);

        return view('action-log.index', [
            'data'             => $data,
            'filter'           => $this->getFilter(),
            'transaction_type' => config('presets.transaction_type'),
            'dateFrom'         => $request->get('dateFrom'),
            'dateTo'           => $request->get('dateTo'),
            'products'         => Product::whereNotIn('products.id', array_filter($parentIds))->get(),
            'customers'        => Customer::all(),
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

        if (!empty($product_id)) {
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

            if ((int)$request->get('income') === ActionLog::INCOME) {
                if (!empty($stock)) {
                    $stock->update([
                        'count'       => $stock->count + (int)$request->get('count'),
                        'description' => $request->get('description')
                    ]);
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
                        $plan->progress = 0;
                        $plan->count = 0;
                    }
                    $plan->save();
                }
            } else {
                /** OUTCOME */
                if (!empty($stock)) {
                    $stock->update([
                        'count'       => $stock->count -= (int)$request->get('count'),
                        'description' => $request->get('description')
                    ]);
                }
            }

            ActionLog::create($request->all());
        } catch (Exception $e) {
            Log::info(json_encode($e->getMessage()));
            return $this->error($e->getMessage());
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

        $plan = Plan::where(['product_id' => $action->product->id])->first();
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

                if (!empty($plan)) {
                    $plan->progress += $plan->progress + ((int)$request->get('count') - $action->count);
                    if ($plan->progress >= $plan->count) {
                        PlanHistory::create([
                            'product_id' => (int)$request->get('product_id'),
                            'count'      => $plan->count,
                            'updated_at' => Carbon::now()->format('Y-m-d'),
                            'created_at' => $plan->created_at
                        ]);
                    }
                    $plan->destroy();
                }
            } else {
                /** OUTCOME */
                if (!empty($stock)) {
                    $stock->update([
                        'count'       => $stock->count + ((int)$request->get('count') - $action->count),
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
     * getExportData
     *
     * @param Request $request
     * @return void //return Excel::download(new OrderExport($from, $to, $income, $hasParent), 'file.xlsx');
     */
    public function getExportData(Request $request)
    {
        $date_from = $request->has('from') ? Carbon::createFromFormat('Y-m-d', $request->get('from')) : Carbon::now();
        $date_to = $request->has('to') ? Carbon::createFromFormat('Y-m-d', $request->get('to')) : Carbon::now();
        $from = $date_from->startOfDay()->format('Y-m-d H:i:s');
        $to = $date_to->endOfDay()->format('Y-m-d H:i:s');
        $income = $request->get('income') == ActionLog::INCOME ? ActionLog::INCOME : ActionLog::OUTOME;
        $hasParent = null;
        $orderType = $request->get('orderType');

        if ($request->has('has_parent')) {
            $hasParent = $request->get('has_parent');
        }

        if ($request->has('income')) {
            if ($request->get('income') == ActionLog::INCOME) {
                $entity = new IncomeReport($from, $to, $income, $hasParent);
            } elseif ((int)$request->get('income') === ActionLog::OUTOME) {
                $entity = new OutcomeReport($from, $to, $income, $hasParent);
            }
        } else {
            $entity = new StockReport($from, $to, $income, $hasParent);
        }

        $template = 'stock';
        if ($request->has('income')) {
            switch ((int)$request->get('income')) {
                case 0:
                    $template = 'income';
                    break;
                case 1:
                    $template = 'outcome';
                    break;
            }
        }

        return view('emails.' . $template, [
            'boxes'     => arrayToKeyValue(config('presets.boxes'), 'id', 'name'),
            'orderType' => $orderType,
            'data'      => $entity->collection(),
            'dateFrom'  => $request->get('from'),
            'dateTo'    => $request->get('to'),
            'direction' => $income,
            'template'  => $template,
            'hasParent' => $hasParent
        ]);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function orderSend(Request $request)
    {
        $dateFrom = $request->get('dateFrom');
        $dateTo = $request->get('dateTo');
        $direction = $request->get('direction');
        $template = $request->get('template');
        $hasParent = $request->get('hasParent');
        $orderType = $request->get('orderType');

        try {
            $currentDate = Carbon::now()->format('Y-m-d');
            if ($direction !== null) {
                if ($direction == ActionLog::INCOME) {
                    $reportName = $currentDate . '_Отчет_о_прибытии';
                    $entity = new IncomeReport($dateFrom, $dateTo, $direction, $hasParent);
                } elseif ((int)$direction === ActionLog::OUTOME) {
                    $reportName = $currentDate . '_Отчет_об_отгрузке';
                    $entity = new OutcomeReport($dateFrom, $dateTo, $direction, $hasParent);
                }
            } else {
                $reportName = $currentDate . '_Отчет_о_состоянии_склада';
                $entity = new StockReport($dateFrom, $dateTo, $direction, $hasParent);
            }
            $request->merge(['data' => $entity->collection()]);
            $request->merge(['boxes' => arrayToKeyValue(config('presets.boxes'), 'id', 'name')]);
            $request->merge(['hide_button' => true]);

            $excel = App::make('excel');
            $attach = $excel->raw($entity, Excel::XLSX);

            Mail::send('emails.' . $template, $request->all(), function ($message) use ($attach, $orderType) {
                $message->subject($orderType);
                $message->from('alexander@zolotarev.pp.ua', 'Stock-worker');
                $message->to('pavel@zolotarev.pp.ua');
                $message->cc(['alexander@zolotarev.pp.ua', 'stockworker100@gmail.com']); // garantpak@gmail.com, korreks@meta.ua, cyr@zolotarev.pp.ua
                $message->attachData($attach, 'report.xlsx', $options = []);
            });

            $telegramResponse = $this->sendMessage($attach, $reportName);
        } catch (Swift_TransportException $e) {
            pushNotify('error', __('Mail service is not supported!'));
            return response()->json([
                'error' => __('Mail service is not supported!'),
            ]);
        }

        pushNotify('success', __('Report sent!'));
        return response()->json([
            'telegramResponse' => $telegramResponse,
            'dateFrom'         => $request->get('from'),
            'dateTo'           => $request->get('to'),
            'success'          => __('Отчет отправлен!'),
        ]);
    }

    /**
     * Send Telegram message
     *
     * @param $binary
     * @param $reportName
     * @return bool|string
     */
    function sendMessage($binary, $reportName)
    {
        $file_path = "/reports/$reportName.xlsx";
        $file = fopen(public_path() . $file_path, 'wb');
        fwrite($file, $binary);
        fclose($file);

        $url = "https://api.telegram.org/bot" . env('TELEGRAM_TOKEN', '949058805:AAFSTcX3WAeLnXamodAY3GvqrQUjfA7CBcM') . "/sendMessage?chat_id=" . env('CHAT_ID', '@stock_reports');
        $url = $url . "&text=" . $_SERVER['HTTP_HOST'] . $file_path;
        $ch = curl_init();
        $optArray = array(
            CURLOPT_URL            => $url,
            CURLOPT_RETURNTRANSFER => true,
        );
        curl_setopt_array($ch, $optArray);
        $result = curl_exec($ch);
        curl_close($ch);

        return $result;
    }
}
