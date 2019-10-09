@extends('layouts.pages.config', [
    'title' => 'Action log',
    'data' => $data,
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'action-log.create',
        'name' => __('Action log'),
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create action'),
            'reload' => 1,
        ],
    ])

    {{-- Export --}}
    @include('common.buttons.save', [
        'route' => 'export',
        'name' => __('Export'),
        'fa_class' => 'fa-save',
        'class' => '',
        'dataset' => [
            'method' => 'GET',
            'header' => __('Export action'),
            'reload' => 1,
        ],
    ])
@endsection

@section('content')
    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th class="id">@lang('Income')</th>
                    <th>@lang('Product')</th>
                    <th>@lang('Date')</th>
                    <th>@lang('Count')</th>
                    <th>@lang('Partition')</th>
                    <th>@lang('Customer')</th>
                    <th>@lang('Description')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                <tr>
                    <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'income'])</th>
                    <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'product'])</th>
                    <th>@include('layouts.filter-col', ['filterType' => 'date_range', 'field' => 'created_at'])</th>
                    <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'count'])</th>
                    <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'partition'])</th>
                    <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'customer'])</th>
                    <th></th>
                    <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                </tr>
            </thead>
            <tbody class="fast-save-page-container">
                @foreach($data as $item)
                    <tr>
                        <td class="income" style="{{ $item->income ? 'background:#ff897b' : 'background:#1abb9c' }}" title="{{ $item->income ? __('Outcome') : __('Income') }}">
                          <b><i>
                            {{ $item->income ? __('Outcome') : __('Income') }}
                          </i></b>
                        </td>
                        <td>{{ $item->product->name }}</td>
                        <td>{{ $item->date }}</td>
                        <td>{{ $item->count }}</td>
                        <td>{{ $item->partition }}</td>
                        <td>{{ $item->customer->name ?? '' }}</td>
                        <td>{{ $item->description }}</td>
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
        })
    </script>
@endpush
