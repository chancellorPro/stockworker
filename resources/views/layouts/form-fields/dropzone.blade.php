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
        <div
            {{ !empty($fieldId) ? "id=$fieldId" : "" }}
            class="dropzone {{ $class ?? '' }}"
            data-url="{{ route('settings.upload', [
                'config' => request()->route()->parameters['config']
            ]) }}"
            data-folder="{{environment()}}/settings/{{request()->route()->parameters['config']}}"
        >
            <input
                type="hidden"
                name="{{ $formName ?? $name }}"
                value="{{ old($name, $value ?? $model->{$name} ?? '') }}">

            <a class="close dropzone-cancel">
                <span>×</span>
            </a>
        </div>
        {!! $errors->first($name, '<p class="help-block">:message</p>') !!}
    </div>
</div>
