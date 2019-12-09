<?php

namespace App\Http\Controllers\Color;

use App\Http\Controllers\Controller;
use App\Models\Color;
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
        'color' => 'manual',
    ];

    /**
     * List of colors
     *
     * @param Request $request Request
     *
     * @return Factory|View
     */
    public function index(Request $request)
    {
        $data = $this->applyFilter($request, Color::query())->paginate($this->perPage);

        return view('color.index', [
            'data'   => $data,
            'filter' => $this->getFilter(),
        ]);
    }

    /**
     * Create new color view
     *
     * @return Factory|View
     */
    public function create()
    {
        return view('color.create');
    }

    /**
     * Save new color
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        try {
            Color::create($request->all());
        } catch (QueryException $e) {
            Log::info(json_encode($e->getMessage()));
            return $this->error(['message' => $e->getMessage()]);
        }

        pushNotify('success', __('Color') . ' ' . __('common.action.added'));
        return $this->success();
    }

    /**
     * Edit color view
     *
     * @param integer $id ID
     *
     * @return Factory|View
     */
    public function edit(int $id)
    {
        return view('color.edit', [
            'model' => Color::find($id),
        ]);
    }

    /**
     * Update color
     *
     * @param Request $request
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function update(Request $request, int $id)
    {
        $action = Color::findOrFail($id);
        $action->update($request->all());

        return $this->success();
    }

    /**
     * Delete color
     *
     * @param integer $id ID
     *
     * @return JsonResponse
     */
    public function destroy(int $id)
    {
        Color::destroy($id);

        return $this->success();
    }
}
