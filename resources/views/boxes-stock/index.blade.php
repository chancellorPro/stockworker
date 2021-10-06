@extends('layouts.pages.config', [
    'title' => 'Box stock',
    'data' => $data,
    'filter' => $filter,
])

@section('content')

    <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th class="id">@lang('Id')</th>
                <th class="col-md-3">@lang('Box')</th>
                <th>@lang('Box count')</th>
                <th>@lang('Description')</th>
                <th class="actions">@lang('Actions')</th>
            </tr>
            <tr>
                <th></th>
                <th>@include('layouts.filter-col', ['filterType' => 'select', 'field' => 'box_id', 'filterCollection' => $boxes])</th>
                <th></th>
                <th></th>
                <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
            </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @foreach($data as $item)
                <tr>
                    <td>{{ $item->box_id }}</td>
                    <td>{{ $item->box ? $item->box->name : '' }}</td>
                    <td>
                            {{ $item->count }}
                    </td>
                    <td>{{ $item->description }}</td>
                    <td>
                        <a href="{{ route('box-stock.edit', ['box-stock' => $item->box_id]) }}" title="Править" class="ajax-modal-action show-form" data-header="">
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
            init_filter_col("{{ route('box-stock.index') }}");
        })
    </script>
@endpush
