<form method="POST" action="{{ route('box-log.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('box-log.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'box-log.store',
            'name' => __('Create'),
            'dataset' => [
                'reload' => 1,
            ],
        ])
    </div>
</form>
