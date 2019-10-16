<?php

namespace App\Http\Controllers\Plan;

use App\Http\Controllers\Controller;
use App\Models\PlanHistory;
use App\Models\Product;
use App\Traits\FilterBuilder;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\View\View;

/**
 * Class IndexController
 */
class HistoryController extends Controller
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
            PlanHistory::orderBy('plan_history.updated_at', 'desc')
        )->paginate($this->perPage);

        return view('plan.history', [
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
                ->leftJoin('products', 'plan_history.product_id', '=', 'products.id')
                ->where('products.id', $product_id);
        }

        return $builder;
    }

}
