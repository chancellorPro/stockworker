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
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\View\View;
use Maatwebsite\Excel\Excel;
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
                    $plan->progress += ((int)$request->get('count') - $action->count);
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
     * @return Application|Factory|View|void
     */
    public function getExportData(Request $request)
    {
        $date_from = $request->has('from') ? Carbon::createFromFormat('Y-m-d', $request->get('from')) : Carbon::now();
        $date_to = $request->has('to') ? Carbon::createFromFormat('Y-m-d', $request->get('to')) : Carbon::now();
        $from = $date_from->startOfDay()->format('Y-m-d H:i:s');
        $to = $date_to->endOfDay()->format('Y-m-d H:i:s');
        $orderType = $request->get('orderType');

        if ($request->get('income') == ActionLog::INCOME) {
            $entity = new IncomeReport($from, $to, $request->get('income'));
        } elseif ((int)$request->get('income') === ActionLog::OUTOME) {
            $entity = new OutcomeReport($from, $to, $request->get('income'));
        } elseif ((int)$request->get('income') === ActionLog::STOCK) {
            $entity = new StockReport($from, $to, $request->get('income'));
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
            'boxes'     => Box::all()->keyBy('id'),
            'orderType' => $orderType,
            'data'      => $entity->collection(),
            'dateFrom'  => $request->get('from'),
            'dateTo'    => $request->get('to'),
            'direction' => $request->get('income'),
            'template'  => $template,
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
        $canvas = $request->get('canvas');
        $direction = $request->get('direction');
        $template = $request->get('template');
        $orderType = $request->get('orderType');

        try {
            $currentDate = Carbon::now()->format('Y-m-d');

            if ($direction == ActionLog::INCOME) {
                $reportName = $currentDate . '_Отчет_о_прибытии';
                $entity = new IncomeReport($dateFrom, $dateTo, $direction);
            } elseif ((int)$direction === ActionLog::OUTOME) {
                $reportName = $currentDate . '_Отчет_об_отгрузке';
                $entity = new OutcomeReport($dateFrom, $dateTo, $direction);
            } elseif ((int)$direction === ActionLog::STOCK) {
                $reportName = $currentDate . '_Отчет_о_состоянии_склада';
                $entity = new StockReport($dateFrom, $dateTo, $direction);
            }

            $request->merge(['data' => $entity->collection()]);
            $request->merge(['boxes' => Box::all()->keyBy('id')]);
            $request->merge(['hide_button' => true]);

            $excel = App::make('excel');
            $attach = $excel->raw($entity, Excel::XLSX);

//            Mail::send('emails.' . $template, $request->all(), function ($message) use ($attach, $orderType) {
//                $message->subject($orderType);
//                $message->from('alexander@zolotarev.pp.ua', 'Stock-worker');
//                $message->to('pavel@zolotarev.pp.ua');
//                $message->cc(['alexander@zolotarev.pp.ua', 'stockworker100@gmail.com']); // garantpak@gmail.com, korreks@meta.ua, cyr@zolotarev.pp.ua
//                $message->attachData($attach, 'report.xlsx', $options = []);
//            });

            $telegramResponse = $this->sendMessage($attach, $canvas, $reportName);
        } catch (Swift_TransportException $e) {
            pushNotify('error', __('Mail service is not supported!'));
            return response()->json([
                'error' => __('Mail service is not supported!'),
            ]);
        }

        pushNotify('success', __('Report sent!'));
        return response()->json([
            'telegramResponse' => $direction,
            'dateFrom'         => $request->get('from'),
            'dateTo'           => $request->get('to'),
            'success'          => __('Отчет отправлен!'),
        ]);
    }

    /**
     * Send Telegram message
     *
     * @param $attach binary
     * @param $canvas binary
     * @param $reportName
     * @return bool|string
     */
    function sendMessage($attach, $canvas, $reportName)
    {
        $xls_file_path = "/reports/$reportName.xlsx";
        $file = fopen(public_path() . $xls_file_path, 'wb');
        fwrite($file, $attach);
        fclose($file);

        $png_file_path = "/reports/$reportName.png";
        $file = fopen(public_path() . $png_file_path, 'wb');
        $img = str_replace(['data:image/png;base64,', 'data:application/octet-stream;base64,'], [''], $canvas);
        $img = str_replace(' ', '+', $img);
        $fileData = base64_decode($img);
        fwrite($file, $fileData);
        fclose($file);

        $viberReceiverIDs = [
//            'VCvoJZRu3ZC9F24LosVBOw==', // я
            'Lm9+v/ecMk90fl7tHAStjA==', // Папа
            'ldy/JYvJ/jQzmjRvbnmK8A==', // Олег
            'mn9R76qex9RbhHj6MUu/4w==', // Гевоян Борис
        ];

        foreach ($viberReceiverIDs as $user_id) {
            $this->send_message($user_id, 'http://' . $_SERVER['HTTP_HOST'] . $png_file_path. ' | '. $_SERVER['HTTP_HOST'] . $xls_file_path);
        }

        $url = "https://api.telegram.org/bot" . env('TELEGRAM_TOKEN') . "/sendMessage?chat_id=" . env('CHAT_ID');
        $url = $url . "&text=" . $_SERVER['HTTP_HOST'] . $png_file_path . ' | '. $_SERVER['HTTP_HOST'] . $xls_file_path;
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

    function send_message($receiverID, $TextMessage)
    {
        $curl = curl_init();
        $json_data = '{
"receiver":"' . $receiverID . '",
"min_api_version":1,
"sender":{
"name":"stockReport",
"avatar":"avatar.example.com"
},
"tracking_data":"tracking data",
"type":"text",
"text":"' . $TextMessage . '"
}
';
        $data = json_decode($json_data);

        curl_setopt_array($curl, array(
            CURLOPT_URL            => "https://chatapi.viber.com/pa/send_message",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING       => "",
            CURLOPT_MAXREDIRS      => 10,
            CURLOPT_TIMEOUT        => 30,
            CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST  => "POST",
            CURLOPT_POSTFIELDS     => json_encode($data),

            CURLOPT_HTTPHEADER => array(
                "Cache-Control: no-cache",
                "Content-Type: application/JSON",
                "X-Viber-Auth-Token: " . env('VIBER_AUTH_TOKEN')
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            echo $response;
        }
    }

}
