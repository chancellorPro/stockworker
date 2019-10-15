@extends('layouts.pages.mail')

@section('main_container')
    <h3>За {{ $dateFrom }} - {{ $dateTo }}</h3>
    <table>
        <thead>
        <tr>
            <th>#</th>
            <th>Наименование</th>
            <th>Количество</th>
            <th>План</th>
            <th>На складе</th>
            <th>Заказчик</th>
        </tr>
        </thead>
        @foreach($data as $row)
            <tr>
                <td> {{ $row->product_id ?? '' }} </td>
                <td> {{ $row->p_name ?? '' }} </td>
                <td> {{ $row->al_count ?? '' }} </td>
                <td> {{ $row->pl_count ?? '' }} </td>
                <td> {{ $row->pl_count ?? '' }} </td>
                <td> {{ $row->c_name ?? '' }} </td>
            </tr>
        @endforeach
    </table>
@endsection
