@extends('layouts.pages.config', [
	'title' => 'Action log',
	'data' => $data,
	'filter' => $filter,
])

@section('controls')
    <div class="pull-right col-sm-10">
        @php
            use Carbon\Carbon as Carbon;
            $field = 'today';
            $selected = request()->get('date_range') ?? '';
            $inputsStyle = 'style="visibility: hidden; height: 0"';
            $currentDay = Carbon::now()->startOfDay()->format('Y-m-d');
        @endphp
        <div class="col-sm-7">
            <div class="col-sm-4">
                <label class="pull-right">@lang('Create report'): </label>
            </div>
            <div class="col-sm-4">
                <input
                    type="text"
                    class="form-control filter datepicker filter-from"
                    name="{{$field}}[from]"
                    autocomplete="off"
                    placeholder="from"
                    value="{{ $dateFrom ?? $currentDay }}"
                >
            </div>
            <div class="col-sm-4">
                <input
                    type="text"
                    class="form-control filter datepicker filter-to"
                    name="{{$field}}[to]"
                    autocomplete="off"
                    placeholder="to"
                    value="{{ $dateTo?? $currentDay }}"
                >
            </div>
        </div>

        {{-- Income report --}}
        @include('common.buttons.save', [
            'route' => 'export',
            'id' => 'income',
            'route_params' => [
                'income' => \App\Models\ActionLog::INCOME,
                'has_parent' => false,
                'orderType' => __('Income report'),
            ],
            'name' => __('Income report'),
            'fa_class' => 'fa-save',
            'class' => 'reports',
            'dataset' => [
                'method' => 'GET',
            ],
        ])
        {{-- Outcome report --}}
        @include('common.buttons.save', [
            'route' => 'export',
            'id' => 'outcome',
            'route_params' => [
                'income'     => \App\Models\ActionLog::OUTOME,
                'has_parent' => true,
                'orderType' => __('Outcome report'),
            ],
            'name' => __('Outcome report'),
            'fa_class' => 'fa-save',
            'class' => 'reports',
            'dataset' => [
                'method' => 'GET',
            ],
        ])
        {{-- Stock state report --}}
        @include('common.buttons.save', [
            'route' => 'export',
            'id' => 'stock',
            'route_params' => [
                'has_parent' => false,
                'orderType' => __('Stock state report'),
            ],
            'name' => __('Stock state report'),
            'fa_class' => 'fa-save',
            'class' => 'reports',
            'dataset' => [
                'method' => 'GET',
            ],
        ])
    </div>
    <div class="col-sm-1">
        {{-- Create --}}
        @include('common.buttons.create', [
            'route' => 'action-log.create',
            'name' => __('Create action'),
            'class' => 'ajax-modal-action show-form',
            'dataset' => [
                'header' => __('Create action'),
            ],
        ])
    </div>
@endsection

@section('content')
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>@lang('Income')</th>
                <th>@lang('Product')</th>
                <th>@lang('Date')</th>
                <th>@lang('Count')</th>
                <th>@lang('Partition')</th>
                <th>@lang('Customer')</th>
                <th>@lang('Description')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'income', 'filterCollection' => $transaction_type])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'product', 'filterCollection' => $products])</th>
                <th>@include('layouts.filter-col', ['filterType' => 'date_range', 'field' => 'date'])</th>
                <th></th>
                <th></th>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'customer', 'filterCollection' => $customers])</th>
                <th></th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @php
                $currentDate = Carbon::now();
            @endphp
            @foreach($data as $item)
                <tr>
                    <td style="background: #1abb9c;text-align: left;color: #fff;font-size: 17px;font-weight: bold;vertical-align: middle;{{ $item->income ? 'background:#ff897b' : 'background:#1abb9c' }}"
                        title="{{ $item->income ? __('Outcome') : __('Income') }}">
                        {{ $item->income ? __('Outcome') : __('Income') }}
                    </td>
                    <td>{{ $item->product ? $item->product->name : '' }}</td>
                    <td style="{{ $currentDate > Carbon::createFromFormat('Y-m-d', $item->date) ? 'background:silver' : '' }}">{{ $item->date }}</td>
                    <td>{{ $item->count }}</td>
                    <td>{{ $item->partition }}</td>
                    <td>{{ $item->customer ? $item->customer->name : '' }}</td>
                    <td>
                        {{ $item->description }}
                        {{ isset($item->product) ? (int)$item->product->parent_product > 0 ? 'Зависимый товар' : '' : '' }}
                    </td>
                    <td>
                        @include('common.buttons.edit', [
                            'route' => 'action-log.edit',
                            'route_params' => [
                                'id' => $item->id,
                            ],
                            'class' => 'ajax-modal-action show-form',
                            'dataset' => [
                                'header' => $item->name,
                            ],
                        ])
                        @include('common.buttons.delete', [
                            'route' => 'action-log.destroy',
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
            init_filter_col("{{ route('action-log.index') }}");
        });

        $(document)
            .on('input', '[name="count"]', function (e) {
                if($(this).val().length > 0) {
                    $('[name="box_count"]').attr('disabled', true);
                } else {
                    $('[name="box_count"]').attr('disabled', false);
                }
            });
        $(document)
            .on('input', '[name="box_count"]', function (e) {
                if($(this).val().length > 0) {
                    $('[name="count"]').attr('disabled', true);
                } else {
                    $('[name="count"]').attr('disabled', false);
                }
            });

        $(document)
            .on('click', '.reports', function (e) {
                e.preventDefault();
                var dateFrom = $('[name="today[from]"]').val();
                var dateTo = $('[name="today[to]"]').val();
                var data = {from: dateFrom, to: dateTo};

                if (Object.keys(data).length) {
                    $.ajax({
                        url: $(this).attr('href'),
                        type: 'GET',
                        data: data,
                        error: response => {
                            if (!!response.responseJSON) {
                                this._error(response.responseJSON);
                            }
                        },
                        success: function (r) {
                            if (r.hasOwnProperty('success')) {
                                window.location.href = location.protocol + "//" + location.host + location.pathname +
                                    '?dateFrom=' + r.dateFrom + '&dateTo=' + r.dateTo
                            } else {
                                console.log(r);
                            }
                        },
                        complete: function (r) {
                            console.log(r);
                        },
                    });
                }

                return false;
            });

    </script>
@endpush
