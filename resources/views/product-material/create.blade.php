<form method="POST" action="{{ route('product-material.store') }}" class="form-horizontal">
    {{ csrf_field() }}

    @include ('product-material.form')

    <div class="pull-right">
        @include('common.buttons.cancel')
        @include('common.buttons.save', [
            'route' => 'product-material.store',
            'name' => __('Create'),
        ])
    </div>
</form>
