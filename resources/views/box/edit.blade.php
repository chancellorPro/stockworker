<form method="POST" action="{{ route('box.update', ['id' => $model->id]) }}" class="form-horizontal">
    {{ method_field('PATCH') }}
    {{ csrf_field() }}

    @include ('box.form', [
        'model' => $model,
    ])

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'box.update',
            'route_params' => [
                'id' => $model->id,
            ],
            'dataset' => [
                'method' => 'PATCH',
            ],
        ])
    </div>
</form>
