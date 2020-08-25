@extends('layouts.pages.mail')

@section('main_container')
    <div style="position: relative">
        <div class="html-content-holder">
            <div class="wrapper">
                <table
                    style="padding: 20px;margin: 20px;border-collapse: collapse;border-left: 1px solid black;border-bottom: 1px solid black;">
                    <thead>
                    <tr>
                        <th class="text-center" colspan="7">Состояние склада на {{ $dateTo }}</th>
                    </tr>
                    <tr>
                        <th>#</th>
                        <th style="width: 356px;">Наименование</th>
                        <th>На складе</th>
                        <th>План</th>
                        <th>Кол-во ящиков</th>
                        <th>Вес ящика</th>
                        <th>Объём ящиков</th>
                    </tr>
                    </thead>
                    @foreach($data as $row)
                        <tr>
                            <td> {{ $row->product_id ?? '' }} </td>
                            <td> {{ $row->p_name ?? '' }} </td>
                            <td> {{ $row->s_count ?? '' }} </td>
                            <td> {{ $row->pl_count ?? '' }} </td>
                            <td> {{ $row->boxes_count }} </td>
                            <td> {{ $row->box_weight ?? '' }} </td>
                            <td> {{ (isset($row->product) && isset($boxes[$row->product->box_id])) ? $boxes[$row->product->box_id] : '' }} </td>
                        </tr>
                    @endforeach
                </table>
            </div>
        </div>
    </div>
@endsection

