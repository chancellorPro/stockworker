<div class="row form-group {{ $errors->has($name) ? 'has-error' : ''}}">
    @if ((isset($label) && $label !== false) || !isset($label))
        <label class="col-xs-2 col-md-2 control-label">
            @if (!empty($label))
                {{ $label }}
            @else
                @formFieldLabel($name)
            @endif
        </label>
    @endif
    <div class="@if (isset($label) && $label === false) col-md-10 @else col-xs-10 col-md-10 @endif">
        <span class="form-control info {{ $class ?? '' }}">
            @if (isset($autoEscape) && $autoEscape === false)
                {!! $value ?? $model->{$name} ?? '' !!}
            @elseif(isset($collection))
                {{ $collection->get($model->{$name})->name ?? '' }}
            @else
                {{ $value ?? $model->{$name} ?? '' }}
            @endif
        </span>
    </div>
</div>
