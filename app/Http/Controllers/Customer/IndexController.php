<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Traits\FilterBuilder;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

/**
 * Class IndexController
customer*/
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
            Customer::oldest('id')
        )->paginate($this->perPage);

        return view('customer.index', [
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
        return view('customer.create', [
            'products' => Customer::all(),
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
        Customer::create($request->all());

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
        return view('customer.edit', [
            'model' => Customer::find($id),
            'products' => Customer::all(),
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
        $resource = Customer::findOrFail($id);
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
        Customer::destroy($id);

        return $this->success();
    }
}
