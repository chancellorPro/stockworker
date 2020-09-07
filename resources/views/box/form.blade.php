@php
    $currentModel = isset($model) ? $model : null;
@endphp

{{-- Name --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'inputType'  => 'number',
    'name'  => 'volume',
    'label' => __('Name'),
])

{{-- Name --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'name',
    'label' => __('Chars'),
])
