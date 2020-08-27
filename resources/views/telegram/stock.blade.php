<table>
    <thead>
    <tr>
        <th>#</th>
        <th>Товар</th>
        <th>На складе</th>
        <th>Кол-во ящиков</th>
        <th>Вес полного ящика</th>
        <th>Объём ящика</th>
    </tr>
    </thead>
    @foreach($data as $row)
        <tr>
            <td> {{ $row->product_id ?? '' }} </td>
            <td> {{ $row->p_name ?? '' }} </td>
            <td> {{ $row->s_count ?? '' }} </td>
            <td> {{ $row->boxes_count }} </td>
            <td> {{ $row->box_weight ?? '' }} </td>
            <td> {{ (isset($row->product) && isset($boxes[$row->product->box_id])) ? $boxes[$row->product->box_id] : '' }} </td>
        </tr>
    @endforeach
</table>
