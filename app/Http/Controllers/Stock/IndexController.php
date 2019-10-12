<?php

namespace App\Http\Controllers\Stock;

use App\Http\Controllers\Controller;
use App\Models\Stock;
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
        'id'   => 'equal',
        'name' => 'like_right',
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
            Stock::selectRaw('count(a.id) as aggregate, stock.product_id, max(stock.partition) as partition_number, max(stock.count) as count, max(stock.description) as description, max(p.count) as plan_count, max(p.progress) as progress')
                ->leftJoin('plan AS p', 'p.product_id', '=', 'stock.product_id')
                ->leftJoin('action_log AS a', 'a.product_id', '=', 'stock.product_id')
                ->join('products AS pr', 'pr.id', '=', 'stock.product_id')
                ->orderBy('p.product_id', 'desc')
                ->orderBy('aggregate', 'desc')
                ->orderBy('stock.product_id')
                ->groupBy('a.product_id', 'stock.product_id', 'p.product_id')
        )->paginate($this->perPage);

        return view('stock.index', [
            'data'         => $data,
            'filter'       => $this->getFilter(),
        ]);
    }

    /**
     * Create new product view
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('stock.create', [
            'products' => Stock::all(),
        ]);
    }

    /**
     * Save new product
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        Stock::create($request->all());

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
        return view('stock.edit', [
            'model' => Stock::find($id),
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
        $resource = Stock::findOrFail($id);
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
        Stock::destroy($id);

        return $this->success();
    }
}
