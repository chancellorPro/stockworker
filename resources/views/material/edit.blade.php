<form method="POST" action="{{ route('material.update', ['id' => $model->id]) }}" class="form-horizontal">
    {{ method_field('PATCH') }}
    {{ csrf_field() }}

    @include ('material.form', [
        'model' => $model,
    ])

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'material.update',
            'route_params' => [
                'id' => $model->id,
            ],
            'dataset' => [
                'method' => 'PATCH',
            ],
        ])
    </div>
</form>
