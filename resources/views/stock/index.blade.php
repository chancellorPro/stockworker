@extends('layouts.pages.config', [
    'title' => 'Stock',
    'data' => $data,
    'filter' => $filter,
])

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="id">@lang('Id')</th>
                <th class="col-md-3">@lang('Product')</th>
                <th>@lang('Stock state')</th>
                <th>@lang('Box count')</th>
                <th>@lang('Box size')</th>
                <th>@lang('Box weight')</th>
                <th>@lang('Box volume')</th>
                <th>@lang('Description')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'stock_product_id'])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'stock_product_id', 'filterCollection' => $products])</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @foreach($data as $item)
                <tr>
                    <td>{{ $item->product_id }}</td>
                    <td>{{ $item->product ? $item->product->name : '' }}</td>
                    <td>{{ $item->count }}</td>
                    <td>
                        @if(is_object($item->product) )
                            {{ ceil($item->count / $item->product->box_size) }}
                        @endif
                    </td>
                    <td>
                        @if(is_object($item->product) )
                            {{ $item->product->box_size }}
                        @endif
                    </td>
                    <td>{{ $item->product->box_weight }}</td>
                    <td>{{ (isset($item->product) && isset($boxes[$item->product->box_id])) ? $boxes[$item->product->box_id]->capacity : '' }}</td>
                    <td>{{ $item->description }}</td>
                    <td>
                        <a href="{{ route('stock.edit', ['stock' => $item->product_id]) }}" title="Править" class="ajax-modal-action show-form" data-header="">
                            <button class="btn btn-primary btn-sm">
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                Править
                            </button>
                        </a>
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
            init_filter_col("{{ route('stock.index') }}");
        })
    </script>
@endpush
