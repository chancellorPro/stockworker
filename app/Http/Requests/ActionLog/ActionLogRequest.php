<?php

namespace App\Http\Requests\ActionLog;

use App\Http\Requests\FormRequest;

/**
 * ActionLogRequest
 */
class ActionLogRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'income' => 'integer',
            'product_id' => 'required',
            'date' => 'required|string',
            'description' => 'nullable|string',
        ];
    }

    /**
     * @return array
     */
    public function messages():array
    {
        $messages = parent::messages();

        $messages = [
            'income.integer' => 'Не указано направление',
            'product_id.required' => 'Не выбран товар',
            'date.required' => 'Не указана дата',
        ];

        return $messages;
    }
}
