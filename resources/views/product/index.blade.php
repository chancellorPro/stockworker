@extends('layouts.pages.config', [
    'title' => 'Products',
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'product.create',
        'name' => __('Product'),
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create product'),
            'reload' => 1,
        ],
    ])
@endsection

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>@lang('Id')</th>
                    <th>@lang('Name')</th>
                    <th class="id">@lang('Box size')</th>
                    <th class="id">@lang('Box')</th>
                    <th class="id">@lang('Box weight')</th>
                    <th>@lang('Parent product')</th>
                    <th>@lang('Description')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                <tr>
                    <th>#</th>
                    <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'name'])</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @php
              $cnt = 1;
            @endphp
                @foreach($rows as $item)
                    <tr>
                        <td>{{ $cnt++ }}</td>
                        <td>{{ $item->name }}</td>
                        <td>{{ $item->box_size }}</td>
                        <td>{{ $item->box_id }}</td>
                        <td>{{ $item->box_weight }}</td>
                        <td>{{ $item->product_ref->name ?? '' }}</td>
                        <td>{{ $item->description ?? '' }}</td>
                        <td>
                            @include('common.buttons.edit', [
                                'route' => 'product.edit',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'class' => 'ajax-modal-action show-form',
                                'dataset' => [
                                    'header' => $item->name,
                                ],
                            ])
                            @include('common.buttons.delete', [
                                'route' => 'product.destroy',
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
            init_filter_col("{{ route('product.index') }}");
        })
    </script>
@endpush