<?php

namespace App\Http\Requests\Product;

use App\Http\Requests\FormRequest;
use App\Traits\Requests\Authorize;

/**
 * FastSaveRequest
 */
class FastSaveRequest extends FormRequest
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
            'product.*.name'        => 'string|min:1',
            'product.*.description' => 'string',
            'product.*.price'       => 'integer|min:0',
            'product.*.enabled'     => 'boolean',
        ];
    }

    /**
     * Get products
     *
     * @return mixed
     */
    public function getProducts()
    {
        return $this->get('product', []);
    }
}
