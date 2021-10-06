<form method="POST" action="{{ route('action-log.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('action-log.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'action-log.store',
            'name' => __('Create'),
            'dataset' => [
                'reload' => 1,
            ],])
    </div>
</form>
