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
                    <th>@lang('Partition')</th>
                    <th>@lang('Count')</th>
                    <th class="actions">@lang('Actions')</th>
                </tr>
                <tr>
                    <th>@include('layouts.filter-col', ['filterType' => 'int', 'field' => 'id'])</th>
                    <th>@include('layouts.filter-col', ['filterType' => 'string', 'field' => 'name'])</th>
                    <th></th>
                    <th></th>
                    <th class="filter-actions">@include('layouts.filter-col', ['filterType' => 'actions'])</th>
                </tr>
            </thead>
            <tbody class="fast-save-page-container">
            @php
              $cnt = 1;
            @endphp
            @foreach($data as $item)
                    <tr>
                        <td>{{ $cnt++ }}</td>
                        <td>{{ $item->product ? $item->product->name : '' }}</td>
                        <td>{{ $item->partition }}</td>
                        <td>
                          @if($item->plan_count)
                          <div style="height: 40px;background: #d9534f">
                            <div class="progress-bar" style="width: {{ $item->count / $item->plan_count * 100 }}%">
                              {{ $item->count / $item->plan_count * 100 }}%
                            </div>
                          </div>
                          <div class="pull-right">{{ $item->plan_count }}</div>
                          <div class="pull-left">{{ $item->count }}</div>
                          @else
                          {{ $item->count }}
                          @endif
                        </td>
                        <td></td>
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
