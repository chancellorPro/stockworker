<?php

namespace App\Http\Controllers\Box;

use App\Http\Controllers\Controller;
use App\Models\Box;
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
        'id'         => 'equal',
        'name'       => 'like_right',
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
            Box::oldest('id')
        )->paginate($this->perPage);

        return view('box.index', [
            'data'   => $data,
            'filter' => $this->getFilter(),
        ]);
    }

    /**
     * Create new product view
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('box.create');
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
        Box::create([
            'name'   => $request->get('name'),
            'volume' => (float)$request->get('name'),
        ]);

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
        return view('box.edit', [
            'model' => Box::find($id),
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
        $resource = Box::findOrFail($id);
        $resource->update([
            'name'  => $request->get('name'),
            'value' => (float)$request->get('name'),
        ]);

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
        Box::destroy($id);

        return $this->success();
    }
}
