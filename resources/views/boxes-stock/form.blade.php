@php
    $currentModel = isset($model) ? $model : null;
@endphp

{{-- Count --}}
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'count',
    'label' => __('Count'),
])

{{-- Description --}}
@include('layouts.form-fields.text', [
    'model' => $currentModel,
    'name'  => 'description',
    'label' => __('Description'),
])
