<?php

namespace App\Http\Controllers\ProductMaterial;

use App\Http\Controllers\Controller;
use App\Models\Material;
use App\Models\Product;
use App\Models\ProductMaterial;
use App\Traits\FilterBuilder;
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
        'material' => 'manual',
    ];

    /**
     * List of product-materials
     *
     * @param Request $request Request
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {
        $data = $this->applyFilter($request, ProductMaterial::query())->paginate($this->perPage);

        return view('product-material.index', [
            'data'   => $data,
            'filter' => $this->getFilter(),
        ]);
    }

    /**
     * Create new product-material view
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('product-material.create', [
            'products' => Product::all(),
            'materials' => Material::all(),
        ]);
    }

    /**
     * Save new product-material
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        try {
            ProductMaterial::create($request->all());
        } catch (QueryException $e) {
            Log::info(json_encode($e->getMessage()));
            return $this->error(['message' => $e->getMessage()]);
        }

        pushNotify('success', __('ProductMaterial') . ' ' . __('common.action.added'));
        return $this->success();
    }

    /**
     * Edit product-material view
     *
     * @param integer $id ID
     *
     * @return Factory|View
     */
    public function edit(int $id)
    {
        return view('product-material.edit', [
            'model' => ProductMaterial::find($id),
        ]);
    }

    /**
     * Update material
     *
     * @param Request $request
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function update(Request $request, int $id)
    {
        $action = ProductMaterial::findOrFail($id);
        $action->update($request->all());

        return $this->success();
    }

    /**
     * Delete material
     *
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function destroy(int $id)
    {
        ProductMaterial::destroy($id);

        return $this->success();
    }
}
