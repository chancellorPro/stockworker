<form method="POST" action="{{ route('box-log.update', ['id' => $model->id]) }}" class="form-horizontal">
    {{ method_field('PATCH') }}
    {{ csrf_field() }}

    @include ('box-log.form', [
        'model' => $model,
    ])

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'box-log.update',
            'route_params' => [
                'id' => $model->id,
            ],
            'dataset' => [
                'reload' => 1,
                'method' => 'PATCH',
            ],
        ])
    </div>
</form>
