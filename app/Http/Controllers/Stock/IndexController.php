<?php

namespace App\Http\Controllers\Stock;

use App\Http\Controllers\Controller;
use App\Models\ActionLog;
use App\Models\Product;
use App\Models\Stock;
use App\Traits\FilterBuilder;
use Carbon\Carbon;
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
        'id'         => 'equal',
        'product'    => 'manual',
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
            Stock::selectRaw('count(a.count) as aggregate, stock.product_id, max(stock.partition) as partition_number, max(stock.count) as count, max(stock.description) as description, max(p.count) as plan_count, max(p.progress) as progress')
                ->leftJoin('plan AS p', 'p.product_id', '=', 'stock.product_id')
                ->leftJoin('action_log AS a', function($join) {
                    $join->on('a.product_id', '=', 'stock.product_id')
                        ->where('a.income', '=', ActionLog::INCOME)
                        ->where(['date' => Carbon::now()->format('Y-m-d')]);
                })
                ->join('products AS pr', 'pr.id', '=', 'stock.product_id')
                ->orderBy('p.product_id', 'desc')
                ->orderBy('aggregate', 'desc')
                ->groupBy('a.product_id', 'stock.product_id', 'p.product_id')
        )->paginate($this->perPage);

        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();

        return view('stock.index', [
            'data'     => $data,
            'products' => Product::whereNotIn('id', array_filter($parentIds))->get(),
            'filter'   => $this->getFilter(),
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
                ->leftJoin('products', 'stock.product_id', '=', 'products.id')
                ->where('products.id', $product_id);
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
