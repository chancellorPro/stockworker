@extends('layouts.pages.mail')

@section('main_container')
    <div style="position: relative">
        <h3>За {{ $dateFrom }} - {{ $dateTo }}</h3>
        <table id="html-content-holder">
            <thead>
            <tr>
                <th>#</th>
                <th style="width: 356px;">Наименование</th>
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
@endsection
