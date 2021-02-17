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

    <div class="@if (isset($label) && $label === false) col-md-10 @else col-xs-10 col-md-10 @endif cp2 input-group colorpicker-component">
        <input
            type="{{ $inputType ?? 'text' }}"
            class="form-control {{ $class ?? '' }}"
            name="{{ $formName ?? $name }}"
            {{ !empty($fieldId) ? "id=$fieldId" : "" }}
            value="{{ old($name, $value ?? $model->{$name} ?? '') }}"
            {{ !empty($disabled) ? 'disabled' : '' }}
            placeholder="{{ $placeholder ?? '' }}"
            {{ !empty($attrs) ? implode(parameterizeArray($attrs), ' ') : '' }}
        >
        <span class="input-group-addon"><i></i></span>
        {!! $errors->first($name, '<p class="help-block">:message</p>') !!}
    </div>
</div>


