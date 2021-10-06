<?php

namespace App\Http\Requests\BoxLog;

use App\Http\Requests\FormRequest;

/**
 * BoxLogRequest
 */
class BoxLogRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'box_id'      => 'required|integer',
            'count'       => 'required|integer',
            'date'        => 'required|string',
            'action_type' => 'required|integer',
        ];
    }

    /**
     * @return array
     */
    public function messages(): array
    {
        $messages = parent::messages();

        $messages = [
            'action_type.integer' => 'Не указано направление',
            'box_id.required'     => 'Не выбран ящик',
            'date.required'       => 'Не указана дата',
            'count.required'      => 'Не выбрано кол-во',
        ];

        return $messages;
    }
}
