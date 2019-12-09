<form method="POST" action="{{ route('product-material.update', ['id' => $model->id]) }}" class="form-horizontal">
    {{ method_field('PATCH') }}
    {{ csrf_field() }}

    @include ('product-material.form', [
        'model' => $model,
    ])

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'product-material.update',
            'route_params' => [
                'id' => $model->id,
            ],
            'dataset' => [
                'method' => 'PATCH',
            ],
        ])
    </div>
</form>
