@php
    $currentModel = isset($model) ? $model : null;
@endphp

{{-- product --}}
@include('layouts.form-fields.select2', [
    'label' => __('Product'),
    'model' => $currentModel,
    'name' => 'product_id',
    'collection' => $products,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

{{-- count --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'count',
    'inputType' => 'number',
    'label' => __('Count'),
])
