@extends('layouts.pages.config', [
    'title' => 'Color',
    'data' => $data,
    'filter' => $filter,
])

@section('controls')
    {{-- Create --}}
    @include('common.buttons.create', [
        'route' => 'color.create',
        'name' => __('Color'),
        'class' => 'ajax-modal-action show-form',
        'dataset' => [
            'header' => __('Create Color'),
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
                <th>@lang('Name')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @foreach($data as $item)
                <tr>
                    <td>{{ $item->id }}</td>
                    <td>
                        @include('layouts.form-fields.input', [
                            'name' => "color[{$item->id}][name]",
                            'label' => false,
                            'value' => $item->name ?? ''
                        ])
                    </td>
                    <td>
                        @include('common.buttons.edit', [
                            'route' => 'color.edit',
                            'route_params' => [
                                'id' => $item->id,
                            ],
                            'class' => 'ajax-modal-action show-form',
                            'dataset' => [
                                'header' => $item->name,
                            ],
                        ])
                        @include('common.buttons.delete', [
                            'route' => 'color.destroy',
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
            init_filter_col("{{ route('color.index') }}");
        })
    </script>
@endpush
