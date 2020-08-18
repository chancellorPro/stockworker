<form method="POST" action="{{ route('box.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('box.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'box.store',
            'name' => __('Create'),
        ])
    </div>
</form>
