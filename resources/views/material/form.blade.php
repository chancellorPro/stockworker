@php
    $currentModel = isset($model) ? $model : null;
@endphp

@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'name',
    'label' => __('Name'),
    'attrs' => ['autocomplete' => 'off'],
])
