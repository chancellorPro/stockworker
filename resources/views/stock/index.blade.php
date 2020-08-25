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
                <th>@lang('Count')</th>
                <th>@lang('Box count')</th>
                <th>@lang('Box size')</th>
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
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @foreach($data as $item)
                <tr>
                    <td>{{ $item->product_id }}</td>
                    <td>{{ $item->product ? $item->product->name : '' }}</td>
                    <td>
                        @if($item->plan_count)
                            <div class="progress-bar"
                                 style="background:#fff;padding:1px 0;margin-top: 20px;width:{{ ($item->progress - $item->count) / $item->plan_count * 100 }}%"></div>
                            <div class="pull-left"
                                 style="background:#337ab7;color:#fff;padding:2px 5px">@lang('Stock state')
                                : {{ $item->count }}</div>
                            <div class="clearfix"></div>
                            <div style="height: 23px;background: #d9534f">
                                <div class="progress-bar"
                                     style="background:#1abb9c;width: {{ ($item->progress - $item->count) / $item->plan_count * 100 }}%">
                                    <div
                                        style="padding:2px 5px">{{ round(($item->progress - $item->count) / $item->plan_count * 100) }}
                                        %
                                    </div>
                                </div>
                                @php
                                    $progress = round($item->count / $item->plan_count * 100);
                                    $progress > 100 ? $progress = 100 : null;
                                @endphp
                                <div class="progress-bar" style="width: {{ $progress }}%">
                                    <div style="padding:2px 5px">{{ $progress }}%</div>
                                </div>
                            </div>
                            <div class="pull-right" style="background:#d9534f;color:#fff;padding:2px 5px">@lang('Plan')
                                : {{ $item->plan_count }}</div>
                            <div class="pull-left" style="background:#1abb9c;color:#fff;padding:2px 5px">@lang('Sent')
                                : {{ $item->outcome_sum }}</div>
                        @else
                            {{ $item->count }}
                        @endif
                    </td>
                    <td>{{ ceil($item->count / $item->product->box_size) }}</td>
                    <td>{{ $item->product->box_size }}</td>
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
