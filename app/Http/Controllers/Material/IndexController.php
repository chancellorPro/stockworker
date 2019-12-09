<?php

namespace App\Http\Controllers\Material;

use App\Http\Controllers\Controller;
use App\Models\Material;
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
     * List of materials
     *
     * @param Request $request Request
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {
        $data = $this->applyFilter($request, Material::query())->paginate($this->perPage);

        return view('material.index', [
            'data'   => $data,
            'filter' => $this->getFilter(),
        ]);
    }

    /**
     * Create new material view
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('material.create');
    }

    /**
     * Save new material
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        try {
            Material::create($request->all());
        } catch (QueryException $e) {
            Log::info(json_encode($e->getMessage()));
            return $this->error(['message' => $e->getMessage()]);
        }

        pushNotify('success', __('Material') . ' ' . __('common.action.added'));
        return $this->success();
    }

    /**
     * Edit material view
     *
     * @param integer $id ID
     *
     * @return Factory|View
     */
    public function edit(int $id)
    {
        return view('material.edit', [
            'model' => Material::find($id),
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
        $action = Material::findOrFail($id);
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
        Material::destroy($id);

        return $this->success();
    }
}
