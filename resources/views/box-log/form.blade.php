@php
    $currentModel = isset($model) ? $model : null;
@endphp

@include('layouts.form-fields.select2', [
    'label' => __('Action type'),
    'model' => $currentModel,
    'name' => 'action_type',
    'collection' => $transaction_type,
    'id' => 'id',
    'value' => 'name',
    'addempty' => false,
])

@include('layouts.form-fields.select2', [
    'fieldId' => 'box_id',
    'label' => __('Box'),
    'model' => $currentModel,
    'name' => 'box_id',
    'collection' => $boxes,
    'id' => 'id',
    'value' => 'name',
    'addempty' => true,
])

@include('layouts.form-fields.input', [
    'model' => $currentModel,
    'name'  => 'date',
    'class'  => 'datepicker',
    'label' => __('Date'),
    'attrs' => ['autocomplete' => 'off'],
])

<div class="row form-group">
    <label class="control-label col-md-2 col-sm-2 col-xs-2">{{ __('Count') }}</label>
    <div class="col-md-5">
        @include('layouts.form-fields.input', [
            'model' => $currentModel,
            'name'  => 'count',
            'inputType' => 'number',
            'placeholder' => 'Единицы товара',
            'label' => false,
        ])
    </div>
</div>

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
