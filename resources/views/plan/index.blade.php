@extends('layouts.pages.config', [
    'title' => 'Plan',
    'data' => $data,
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'plan.create',
        'name' => __('Plan'),
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create plan'),
            'reload' => 1,
        ],
    ])
@endsection

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th class="col-sm-3">@lang('Product')</th>
                    <th class="col-sm-5">@lang('Count')</th>
                    <th class="col-sm-1">@lang('Created At')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                <tr>
                    <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'product', 'filterCollection' => $products])</th>
                    <th></th>
                    <th></th>
                    <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                </tr>
            </thead>
            <tbody class="fast-save-page-container">
                @foreach($data as $item)
                    <tr>
                        <td>{{ $item->product->name ?? '' }}</td>
                        <td>
                          <div style="height: 40px;background: #d9534f">
                            <div class="progress-bar" style="width: {{ $item->count > 0 ? $item->progress / $item->count * 100 : 0 }}%">
                              {{ $item->count > 0 ? $item->progress / $item->count * 100 : '' }}%
                            </div>
                          </div>
                          <div class="pull-right">{{ $item->count }}</div>
                          <div class="pull-left">{{ $item->progress }}</div>
                        </td>
                        <td>{{ $item->updated_at }}</td>
                        <td>
                            @include('common.buttons.edit', [
                                'route' => 'plan.edit',
                                'route_params' => [
                                    'id' => $item->id,
                                ],
                                'class' => 'ajax-modal-action show-form',
                                'dataset' => [
                                    'header' => $item->name,
                                ],
                            ])
                            @include('common.buttons.delete', [
                                'route' => 'plan.destroy',
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
            init_filter_col("{{ route('plan.index') }}");
        })
    </script>
@endpush
