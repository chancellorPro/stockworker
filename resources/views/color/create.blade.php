<form method="POST" action="{{ route('color.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('color.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'color.store',
            'name' => __('Create'),
        ])
    </div>
</form>
