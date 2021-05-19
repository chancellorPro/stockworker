<div class="row form-group {{ $errors->has($name) ? 'has-error' : ''}}">
    @if ((isset($label) && $label !== false) || !isset($label))
        <label {{ !empty($fieldId) ? "for=$fieldId" : "" }} class="control-label col-xs-2 col-md-2 col-sm-2">
            @if (!empty($sortable))
                @php
                $fieldsName = $formName ?? $name;
                $direction = '';

                if (request()->has('sort') && request()->get('sort') === $fieldsName) {
                    $direction = '-';
                }
                @endphp
                <a href="{{request()->fullUrlWithQuery(['sort' => $direction . $fieldsName])}}">
            @endif

            @if (!empty($label))
                {{ __($label) }}
            @else
                @formFieldLabel($name)
            @endif

            @if (!empty($sortable))
                </a>
            @endif
        </label>
    @endif

    <div class="@if (isset($label) && $label !== false) col-md-10 col-xs-10 col-sm-10 @else col-md-12 col-xs-12 col-sm-12 @endif">
        <input
            type="{{ $inputType ?? 'text' }}"
            class="form-control {{ $class ?? '' }}"
            name="{{ $formName ?? $name }}"
            {{ !empty($fieldId) ? "id=$fieldId" : "" }}
            value="{{ old($name, $value ?? $model->{$name} ?? '') }}"
            {{ !empty($disabled) ? 'disabled' : '' }}
            placeholder="{{ $placeholder ?? '' }}"
            {{ !empty($attrs) ? implode(' ', parameterizeArray($attrs)) : '' }}
        >
        {!! $errors->first($name, '<p class="help-block">:message</p>') !!}
    </div>
</div>
