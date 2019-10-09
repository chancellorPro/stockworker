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
                    <th>@lang('Product')</th>
                    <th>@lang('Count')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                <tr>
                    <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'id'])</th>
                    <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'name'])</th>
                    <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                </tr>
            </thead>
            <tbody class="fast-save-page-container">
                @foreach($data as $item)
                    <tr>
                        <td>{{ $item->product->name ?? '' }}</td>
                        <td>
                          <div style="height: 40px;background: #d9534f">
                            <div class="progress-bar" style="width: {{ $item->progress / $item->count * 100 }}%">
                              {{ $item->progress / $item->count * 100 }}%
                            </div>
                          </div>
                          <div class="pull-right">{{ $item->count }}</div>
                          <div class="pull-left">{{ $item->progress }}</div>
                        </td>
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
