<?php

namespace App\Http\Controllers\BoxesStock;

use App\Http\Controllers\Controller;
use App\Models\ActionLog;
use App\Models\Box;
use App\Models\BoxesStock;
use App\Traits\FilterBuilder;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'box_id'     => 'equal',
        'page_limit' => 'manual'
    ];

//    const FILTER_FIELDS_ALIAS = [
//        'stock.box_id' => 'stock_box_id',
//        'stock.box'    => 'stock_box',
//    ];

    /**
     * List of boxes
     *
     * @param Request $request Request
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {
        $builder = BoxesStock::selectRaw('boxes_stock.box_id, boxes_stock.count, boxes_stock.description')
            ->orderBy('boxes_stock.updated_at', 'desc');

        $data = $this->applyFilter($request, $builder)->paginate($this->perPage);

        return view('boxes-stock.index', [
            'data'   => $data,
            'boxes'  => Box::all()->keyBy('id'),
            'filter' => $this->getFilter(),
        ]);
    }

    /**
     * Create new box view
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('stock.create', [
            'boxes' => BoxesStock::all(),
        ]);
    }

    /**
     * Save new box
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        BoxesStock::create($request->all());

        pushNotify('success', __('Product') . ' ' . __('common.action.added'));

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
        return view('stock.edit', [
            'model' => BoxesStock::find($id),
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
        $resource = BoxesStock::where(['box_id' => $id])->first();
        $resource->update($request->all());

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
        BoxesStock::destroy($id);

        return $this->success();
    }
}
