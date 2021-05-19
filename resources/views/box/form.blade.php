@php
    $currentModel = isset($model) ? $model : null;
@endphp

{{-- Title --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'title',
    'label' => __('Title'),
])

{{-- Capacity --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'inputType'  => 'number',
    'name'  => 'capacity',
    'label' => __('Capacity'),
])

{{-- Size --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'size',
    'label' => __('Size'),
])

{{-- Weight --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'weight',
    'label' => __('Weight'),
])
