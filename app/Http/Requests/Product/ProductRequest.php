<?php

namespace App\Http\Requests\Product;

use App\Http\Requests\FormRequest;
use App\Models\Cms\Product;
use App\Traits\Requests\Authorize;
use Illuminate\Validation\Rule;

/**
 * Class ProductRequest
 */
class ProductRequest extends FormRequest
{

    use Authorize;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'           => 'required|string|max:150',
            'description'    => 'nullable|string',
            'box_size'       => 'required|numeric',
            'parent_product' => 'nullable|exists:products,id',
        ];
    }
}
