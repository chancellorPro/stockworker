<?php

namespace App\Http\Controllers\BoxLog;

use App\Exports\BoxReport;
use App\Exports\IncomeReport;
use App\Exports\OutcomeReport;
use App\Exports\StockReport;
use App\Http\Controllers\Controller;
use App\Http\Requests\BoxLog\BoxLogRequest;
use App\Models\Box;
use App\Models\BoxesStock;
use App\Models\BoxLog;
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
        'box_id'      => 'equal',
        'action_type' => 'equal',
        'date'        => 'date_range',
        'page_limit'  => 'manual'
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
            BoxLog::selectRaw('box_log.id as id, box_log.box_id, box_log.date, box_log.action_type, box_log.count')->with('box')
                ->orderBy('box_log.date', 'desc')
                ->orderBy('box_log.id', 'desc')
        )->paginate($this->perPage);

        return view('box-log.index', [
            'data'             => $data,
            'filter'           => $this->getFilter(),
            'transaction_type' => config('presets.transaction_type'),
            'dateFrom'         => $request->get('dateFrom'),
            'dateTo'           => $request->get('dateTo'),
            'boxes'            => Box::where('actual', 1)->get(),
        ]);
    }

    /**
     * Create new action view
     *
     * @return Factory|View
     */
    public function create()
    {

        return view('box-log.create', [
            'transaction_type' => config('presets.transaction_type'),
            'boxes'            => Box::where('actual', 1)->get(),
        ]);
    }

    /**
     * Save new action
     *
     * @param BoxLogRequest $request
     * @return JsonResponse
     */
    public function store(BoxLogRequest $request)
    {
        try {
            $boxesStock = BoxesStock::where(['box_id' => (int)$request->get('box_id')])->first();

            if (!$boxesStock) {
                BoxesStock::create([
                    'box_id' => (int)$request->get('box_id'),
                    'count'  => 0,
                ]);
                $boxesStock = BoxesStock::where(['box_id' => (int)$request->get('box_id')])->first();
            }

            if ((int)$request->get('action_type') === BoxLog::INCOME) {
                /** INCOME */
                $insertData = [
                    'count' => $boxesStock->count + (int)$request->get('count'),
                ];

                if (!empty($boxesStock)) {
                    $boxesStock->update($insertData);
                    $boxesStock->save();
                }
            } else {
                /** OUTCOME */
                if (!empty($boxesStock)) {
                    $count = $boxesStock->count -= (int)$request->get('count');
                    if ($count < 0) {
                        return $this->error(['message' => 'Такого количества нет на складе!']);
                    }
                    $insertData = [
                        'count' => $count,
                    ];

                    $boxesStock->update($insertData);
                    $boxesStock->save();
                }
            }

            BoxLog::create($request->all());
        } catch (QueryException $e) {
            Log::info(json_encode($e->getMessage()));
            return $this->error(['message' => 'Такого количества нет на складе!']);
        }

        pushNotify('success', __('Box') . ' ' . __('common.action.added'));
        return $this->success();
    }

    /**
     * Edit box view
     *
     * @param integer $id ID
     *
     * @return Factory|View
     */
    public function edit(int $id)
    {
        $oldBoxes = [];

        return view('box-log.edit', [
            'model'            => BoxLog::find($id),
            'transaction_type' => config('presets.transaction_type'),
            'boxes'            => Box::where('actual', 1)->get(),
        ]);
    }

    /**
     * Update box
     *
     * @param Request $request
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function update(Request $request, int $id)
    {
        $action = BoxLog::findOrFail($id);

        $boxesStock = BoxesStock::where(['box_id' => $action->box->id])->first();

        if ($request->get('count') == 0) {
            if ($request->has('description')) {
                $boxesStock->update([
                    'description' => $request->get('description')
                ]);
            }
        } else {

            if ((int)$request->get('action_type') === BoxLog::INCOME) {
                /** INCOME */
                if (!empty($boxesStock)) {
                    $boxesStock->update([
                        'count' => $boxesStock->count + ((int)$request->get('count') - $action->count),
                    ]);
                }
            } else {
                /** OUTCOME */
                if (!empty($boxesStock)) {
                    $boxesStock->update([
                        'count' => $boxesStock->count + ($action->count - (int)$request->get('count')),
                    ]);
                }
            }
        }

        $action->update($request->all());

        return $this->success();
    }

    /**
     * Delete box
     *
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function destroy(int $id)
    {
        try {
            $action = BoxLog::findOrFail($id);
            $boxesStock = BoxesStock::where(['box_id' => $action->box->id])->first();

            if ($action->action_type == BoxLog::INCOME) {
                /** INCOME */
                if (!empty($boxesStock)) {
                    $boxesStock->update([
                        'count' => $boxesStock->count - $action->count,
                    ]);
                }
            } else {
                /** OUTCOME */
                if (!empty($boxesStock)) {
                    $boxesStock->update([
                        'count' => $boxesStock->count + $action->count,
                    ]);
                }
            }
        } catch (QueryException $e) {
            Log::info(json_encode($e->getMessage()));
            return $this->error(['message' => 'Такого количества ящиков нет на складе!']);
        }

        BoxLog::destroy($id);

        return $this->success();
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function report(Request $request)
    {
        $date_from = Carbon::createFromFormat('Y-m-d', $request->get('from'));
        $date_to = Carbon::createFromFormat('Y-m-d', $request->get('to'));
        $dateFrom = $date_from->startOfDay()->format('Y-m-d H:i:s');
        $dateTo = $date_to->endOfDay()->format('Y-m-d H:i:s');

        try {
            $entity = new BoxReport($dateFrom, $dateTo);
            $response = $this->sendReportData($entity->collection());
        } catch (Exception $e) {
            pushNotify('error', $e->getMessage());
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }

        pushNotify('success', __('Report sent! ' . var_export($response, 1)));

        return response()->json([
            'response' => $response,
            'dateFrom' => $request->get('from'),
            'dateTo'   => $request->get('to'),
            'success'  => __('Report sent! ' . var_export($response, 1)),
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
