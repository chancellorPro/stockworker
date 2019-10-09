<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductRequest;
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
            Product::with('product_ref')->oldest('id')
        )->get();

        return view('product.index', [
            'rows'         => $data,
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
        return view('product.create', [
            'products' => Product::all(),
            'boxes'    => config('presets.boxes'),
            'colors'    => config('presets.color'),
            'materials' => config('presets.material'),
        ]);
    }

    /**
     * Save new product
     *
     * @param ProductRequest $request Request
     *
     * @return JsonResponse
     */
    public function store(ProductRequest $request)
    {
        Product::create($request->all());

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
        return view('product.edit', [
            'model' => Product::find($id),
            'products' => Product::all(),
            'boxes'    => config('presets.boxes'),
            'colors'    => config('presets.color'),
            'materials' => config('presets.material'),
        ]);
    }

    /**
     * Update product
     *
     * @param ProductRequest $request Request
     * @param integer        $id      ID
     *
     * @return JsonResponse
     */
    public function update(ProductRequest $request, int $id)
    {
        $resource = Product::findOrFail($id);
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
        Product::destroy($id);

        return $this->success();
    }

    /**
     * Get upload folder
     *
     * @return string
     */
    protected static function getUploadFolder(): string
    {
        return Product::getUploadFolder();
    }

}
