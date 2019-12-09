@php
    $currentModel = isset($model) ? $model : null;
@endphp

@include('layouts.form-fields.select2', [
    'fieldId' => 'product_id',
    'label' => __('Product'),
    'model' => $currentModel,
    'name' => 'product_id',
    'collection' => $products,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

@include('layouts.form-fields.select2', [
    'label' => __('Material'),
    'model' => $currentModel,
    'name' => 'material_id',
    'collection' => $materials,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'color',
    'label' => __('Color'),
])
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'height',
    'inputType' => 'number',
    'label' => __('Height'),
])
@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'width',
    'inputType' => 'number',
    'label' => __('Width'),
])

@include('layouts.form-fields.input', [
    'value' => auth()->user()->id,
    'name'  => 'created_by',
    'label' => false,
    'inputType' => 'hidden',
])
<script type="text/javascript">
    $(document).ready(function () {
        $('.modal-content').find('select.select2').select2();
    });
</script>
