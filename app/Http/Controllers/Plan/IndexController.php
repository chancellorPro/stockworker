<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Plan;
use App\Models\Product;
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
            Plan::orderBy('plan.updated_at', 'desc')
        )->paginate($this->perPage);

        return view('plan.index', [
            'data'     => $data,
            'products' => Product::all(),
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
                ->leftJoin('products', 'plan.product_id', '=', 'products.id')
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
        return view('plan.create', [
            'products'  => Product::all(),
            'customers' => Customer::all(),
        ]);
    }

    /**
     * Save new product
     *
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        Plan::create($request->all());

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
        return view('plan.edit', [
            'model'     => Plan::find($id),
            'products'  => Product::all(),
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
        $resource = Plan::findOrFail($id);
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
        Plan::destroy($id);

        return $this->success();
    }
}
