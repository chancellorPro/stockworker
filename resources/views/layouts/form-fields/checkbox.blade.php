<div class="row form-group {{ $errors->has($name) ? 'has-error' : ''}}">
    @if ((isset($label) && $label !== false) || !isset($label))
    <label
        class="col-xs-2 col-md-2 control-label {{ $labelClass ?? '' }}"
        {{ !empty($fieldId) ? "for=$fieldId" : "" }}>
        @if (!empty($label))
            {{ $label }}
        @else
            @formFieldLabel($name)
        @endif
    </label>
    @endif
    <div class="@if (isset($label) && $label === false) col-md-10 @else col-xs-10 col-md-10 @endif template-checkbox">
        @if (empty($notSendIfFalse))
        <input type="hidden" name="{{ $formName ?? $name }}" value="0">
        @endif
        <input
               autocomplete="off"
               type="checkbox" {{ !empty($fieldId) ? "id=$fieldId" : "" }}
               name="{{ $name }}"
               class="form-control {{ $class ?? '' }}"
               value="{{ $checkboxValue ?? 1 }}"
               {{ ((isset($model) && 1 == $model->{$name}) || !empty($value)) ? 'checked' : '' }} {{ !empty($attrs) ? implode(parameterizeArray($attrs), ' ') : '' }} />
        {!! $errors->first($name, '<p class="help-block">:message</p>') !!}
    </div>
</div>
