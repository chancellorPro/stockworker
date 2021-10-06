<form method="POST" action="{{ route('stock.update', ['id' => $model->product_id]) }}" class="form-horizontal">
    {{ method_field('PATCH') }}
    {{ csrf_field() }}

    @include ('stock.form', [
        'model' => $model,
    ])

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'stock.update',
            'route_params' => [
                'id' => $model->product_id,
            ],
            'dataset' => [
                'method' => 'PATCH',
            ],
        ])
    </div>
</form>
