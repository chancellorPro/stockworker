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
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;

/**
 * Class IndexController
 */
class IndexController extends Controller
{
    use FilterBuilder;

    const FILTER_FIELDS = [
        'stock_product_id' => 'equal',
        'page_limit'       => 'manual'
    ];

    const FILTER_FIELDS_ALIAS = [
        'stock.product_id' => 'stock_product_id',
        'stock.product'    => 'stock_product',
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
        $builder = Stock::selectRaw('sum(a.count) as outcome_sum, stock.product_id, max(stock.partition) as partition_number,
        max(stock.count) as count, max(stock.description) as description, max(p.count) as plan_count, max(p.progress) as progress')
            ->leftJoin('plan AS p', 'p.product_id', '=', 'stock.product_id')
            ->leftJoin('action_log AS a', function($join) {
                $join->on('a.product_id', '=', 'stock.product_id')
                    ->where('a.income', '=', ActionLog::OUTOME)
                    ->where('a.date', '>', DB::raw('p.start'));
            })
            ->join('products AS pr', 'pr.id', '=', 'stock.product_id')
            ->orderBy('p.product_id', 'desc')
            ->orderBy('stock.updated_at', 'desc')
            ->groupBy('stock.updated_at', 'a.product_id', 'stock.product_id', 'p.product_id');

        $data = $this->applyFilter($request,$builder)->paginate($this->perPage);
        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();

        return view('stock.index', [
            'data'     => $data,
            'products' => Product::whereNotIn('products.id', array_filter($parentIds))->get(),
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
        $resource = Stock::where(['product_id' => $id])->first();
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
