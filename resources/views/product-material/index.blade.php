@extends('layouts.pages.config', [
    'title' => 'Product Material Relation',
    'data' => $data,
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'product-material.create',
        'name' => __('Product Material'),
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create Product Material'),
            'reload' => 1,
        ],
    ])
@endsection

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="id">@lang('Id')</th>
                <th>@lang('Product')</th>
                <th>@lang('Material')</th>
                <th>@lang('Color')</th>
                <th>@lang('Height')</th>
                <th>@lang('Width')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @foreach($data as $item)
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>{{ $item->product->name }}</td>
                    <td>{{ $item->material->name }}</td>
                    <td>{{ $item->color }}</td>
                    <td>{{ $item->height }}</td>
                    <td>{{ $item->width }}</td>
                    <td>
                        @include('common.buttons.edit', [
                            'route' => 'material.edit',
                            'route_params' => [
                                'id' => $item->id,
                            ],
                            'class' => 'ajax-modal-action show-form',
                            'dataset' => [
                                'header' => $item->name,
                            ],
                        ])
                        @include('common.buttons.delete', [
                            'route' => 'material.destroy',
                            'route_params' => [
                                'id' => $item->id,
                            ],
                            'dataset' => [
                                'header' => $item->name,
                            ],
                        ])
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>

@endsection

@push('scripts')
    <script src="{{ asset("js/filter-col.js") }}"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            init_filter_col("{{ route('material.index') }}");
        })
    </script>
@endpush
