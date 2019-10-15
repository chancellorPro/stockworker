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
use Swift_TransportException;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Revolution\Google\Sheets\Sheets;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'id' => 'equal',
        'name' => 'like_right',
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
            ActionLog::with('product', 'customer')
                ->orderBy('date', 'desc')
                ->orderBy('id', 'desc')
        )->paginate($this->perPage);

        return view('action-log.index', [
            'data' => $data,
            'filter' => $this->getFilter(),
            'transaction_type' => config('presets.transaction_type'),
            'dateFrom' => $request->get('dateFrom'),
            'dateTo' => $request->get('dateTo')
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
            'products' => Product::all(),
            'customers' => Customer::all(),
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
        $product = Product::whereId((int)$request->get('product_id'))->first();

        if ($request->has('box_count')) {
            $request->merge(['count' => (int)$request->get('box_count') * $product->box_size]);
            $request->offsetUnset('box_count');
        }

        if ((int)$request->get('income') === ActionLog::INCOME) {
            if (!empty($stock)) {
                $stock->update([
                    'count' => $stock->count + (int)$request->get('count')
                ]);
            }
            if (!empty($plan)) {
                $plan->progress += (int)$request->get('count');
                $plan->save();
            }
        } else {
            if (!empty($stock)) {
                $stock->count -= (int)$request->get('count');
            }
        }

        ActionLog::create($request->all());
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
        return view('action-log.edit', [
            'model' => ActionLog::find($id),
            'transaction_type' => config('presets.transaction_type'),
            'products' => Product::all(),
            'customers' => Customer::all(),
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
     * @return void //return Excel::download(new OrderExport($from, $to, $income, $hasParent), 'file.xlsx');
     * //return Excel::download(new OrderExport($from, $to, $income, $hasParent), 'file.xlsx');
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

        $entity = new OrderExport($from, $to, $income, $hasParent);
        $emailData = [
            'boxes' => config('presets.boxes'),
            'orderType' => $orderType,
            'data' => $entity->collection(),
            'dateFrom' => $request->get('from'),
            'dateTo' => $request->get('to'),
        ];

        $template = 'stock';
        if ($request->has('income')) {
            switch ($request->get('income')) {
                case 0:
                    $template = 'income';
                    break;
                case 1:
                    $template = 'outcome';
                    break;
            }
        }

        try {
            $excel = App::make('excel');
            $attach = $excel->raw($entity, Excel::XLSX);

            Mail::send('emails.' . $template, $emailData, function ($message) use ($attach, $orderType) {
                $message->subject($orderType);
                $message->from('stockworker100@gmail.com', 'Stock-worker');
                $message->to('pavel@zolotarev.pp.ua');
                $message->cc(['alexander@zolotarev.pp.ua']); // garantpak@gmail.com, korreks@meta.ua, cyr@zolotarev.pp.ua
                $message->attachData($attach, 'report.xlsx', $options = []);
            });
        } catch (Swift_TransportException $e) {
            return view('emails.' . $template, $emailData);
        }

        pushNotify('success', __('Report sent!'));
        return response()->json([
            'dateFrom' => $request->get('from'),
            'dateTo' => $request->get('to'),
            'success' => __('Report sent!'),
        ]);
    }
}
