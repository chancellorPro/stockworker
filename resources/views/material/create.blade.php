<form method="POST" action="{{ route('material.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('material.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'material.store',
            'name' => __('Create'),
        ])
    </div>
</form>
