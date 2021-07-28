@extends('layouts.pages.mail')

@section('main_container')
    <div style="position: relative">
        <div class="html-content-holder">
            <div class="wrapper">
                <table id="report-table"
                    style="padding: 20px;margin: 20px;border-collapse: collapse;border-left: 1px solid black;border-bottom: 1px solid black;">
                    <thead>
                    <tr>
                        <th class="text-center" colspan="6">Приход за {{ $dateFrom }} - {{ $dateTo }}</th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th style="width: 356px;">Товар</th>
                        <th>Количество</th>
                        <th>На складе</th>
                        <th>План</th>
                        <th>Заказчик</th>
                    </tr>
                    </thead>
                    @foreach($data as $row)
                        <tr>
                            <td> {{ $row->product_id ?? '' }} </td>
                            <td> {{ $row->p_name ?? '' }} </td>
                            <td> {{ $row->al_count ?? '' }} </td>
                            <td> {{ $row->s_count ?? '' }} </td>
                            <td> {{ $row->pl_count ?? '' }} </td>
                            <td> {{ $row->c_name ?? '' }} </td>
                        </tr>
                    @endforeach
                </table>
            </div>
        </div>
    </div>
@endsection
