<?php

namespace App\Http\Controllers\ActionLog;

use App\Exports\OrderExport;
use App\Http\Controllers\Controller;
use App\Models\ActionLog;
use App\Models\Customer;
use App\Models\Plan;
use App\Models\Product;
use App\Models\Stock;
use App\Traits\FilterBuilder;
use Carbon\Carbon;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Mail;
use Illuminate\View\View;
use Maatwebsite\Excel\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'id'         => 'equal',
        'name'       => 'like_right',
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
            ActionLog::with('product', 'customer')->oldest('id')
        )->paginate($this->perPage);

        return view('action-log.index', [
            'data'             => $data,
            'filter'           => $this->getFilter(),
            'transaction_type' => config('presets.transaction_type'),
        ]);
    }

    /**
     * Create new product view
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('action-log.create', [
            'transaction_type' => config('presets.transaction_type'),
            'products'         => Product::all(),
            'customers'        => Customer::all(),
        ]);
    }

    /**
     * Save new action
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $plan = Plan::where(['product_id' => (int)$request->get('product_id')])->first();
        $stock = Stock::where(['product_id' => (int)$request->get('product_id')])->first();
        if ((int)$request->get('income') === ActionLog::INCOME) {
            $stock->update([
                'count' => $stock->count + (int)$request->get('count')
            ]);
            if (!empty($plan)) {
                $plan->progress += (int)$request->get('count');
                $plan->save();
            }
        } else {
            $stock->count -= (int)$request->get('count');
        }

        ActionLog::create($request->all());

        pushNotify('success', __('Product') . ' ' . __('common.action.added'));

//        return response()->json([
//            'response' => json_encode($request->all()),
//        ]);

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
        return view('action-log.edit', [
            'model'            => ActionLog::find($id),
            'transaction_type' => config('presets.transaction_type'),
            'products'         => Product::all(),
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
        $resource = ActionLog::findOrFail($id);
        $resource->update($request->all());

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
     * @return BinaryFileResponse
     */
    public function getExportData(Request $request)
    {
        $date_from = $request->has('date_from') ? Carbon::createFromFormat('Y-m-d', $request->get('date_from')) : Carbon::now();
        $date_to = $request->has('date_to') ? Carbon::createFromFormat('Y-m-d', $request->get('date_to')) : Carbon::now();
        $from = $date_from->startOfDay()->format('Y-m-d H:i:s');
        $to = $date_to->endOfDay()->format('Y-m-d H:i:s');
        $income = $request->get('income') == ActionLog::INCOME ? ActionLog::INCOME : ActionLog::OUTOME;
        $hasParent = $request->get('hasParent') == 1 ? 1 : 0;

        $excel = App::make('excel');
        $attach = $excel->raw(new OrderExport($from, $to, $income, $hasParent), Excel::XLSX);

        Mail::send('welcome', [
            'name' => 'Pavel',
            'email' => 'pavel@zolotarev.pp.ua',
            'user_message' => 'pavel@zolotarev.pp.ua'
        ], function ($message) {
            $message->from('stockworker100@gmail.com', 'Stock-worker');
            $message->to('pavel@zolotarev.pp.ua');
        });
//        Mail::send('welcome', [
//            'name' => 'Pavel',
//            'email' => 'pavel@zolotarev.pp.ua',
//            'user_message' => 'pavel@zolotarev.pp.ua'
//        ], function ($message) use ($attach) {
//            $message->from('stockworker100@gmail.com', 'Stock-worker');
//            $message->to('pavel@zolotarev.pp.ua');
//            $message->attachData($attach, 'report.xlsx', $options = []);
//        });

        return response()->json([
            'response' => $attach,
        ]);

//        return Excel::download(new OrderExport($from, $to, $income, $hasParent), 'file.xlsx');
    }

    /**
     * getCsv
     *
     * @param $data
     * @param $headers
     * @return \Symfony\Component\HttpFoundation\StreamedResponse
     */
    public function getCsv($data, $headers): \Symfony\Component\HttpFoundation\StreamedResponse
    {
        $data = array_merge([$headers], $data);

        return (new \LaravelCsvGenerator\LaravelCsvGenerator())
            ->setData($data)
            ->renderStream();
    }
}
