<div class="row form-group {{ $errors->has($name) ? 'has-error' : ''}}">
    @if ((isset($label) && $label !== false) || !isset($label))
        <label {{ !empty($fieldId) ? "for=$fieldId" : "" }} class="col-xs-2 col-md-2 control-label">
            @if (!empty($label))
                {{ __($label) }}
            @else
                @formFieldLabel($name)
            @endif
        </label>
    @endif

    <div class="@if (isset($label) && $label === false) col-md-10 @else col-xs-10 col-md-10 @endif">
        <textarea class="form-control" name="{{ $formName ?? $name }}" {{ !empty($fieldId) ? "id=$fieldId" : "" }} {{ !empty($attrs) ? implode(parameterizeArray($attrs), ' ') : '' }}>{{ old($name, $value ?? $model->{$name} ?? '') }}</textarea>
        {!! $errors->first($name, '<p class="help-block">:message</p>') !!}
    </div>
</div>
