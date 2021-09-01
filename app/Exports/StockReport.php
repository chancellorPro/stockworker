<?php

namespace App\Exports;

use App\Models\Stock;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class StockReport implements FromCollection, WithHeadings
{
    protected $from;
    protected $to;

    public function __construct($from, $to)
    {
        $this->from = $from;
        $this->to = $to;
    }

    public function headings(): array
    {
        return ['#', 'Товар', 'На складе', 'Кол-во ящиков', 'Кол-во в ящике', 'Вес полного ящика']; // , "Объём ящика"
    }

    /**
    * @return string
    */
    public function collection()
    {
        $builder = Stock::selectRaw('
        stock.product_id,
        p.name as p_name,
        stock.count as s_count,
        round(stock.count / p.box_size) as boxes_count,
        p.box_size,
        p.box_weight as box_weight')
            ->join('products AS p', 'p.id', '=', 'stock.product_id');

        return json_encode([
            'header'  => 'Склад за ' . str_replace('00:00:00', '', $this->from),
            'columns' => $this->headings(),
            'values'  => $builder->orderBy('stock.updated_at', 'desc')->get()->map(function ($item){
                return [$item->product_id, $item->p_name, $item->s_count, $item->boxes_count, $item->box_size, $item->box_weight ?? ''];
            })->toArray(),
            'token'   => env('REPORT_TOKEN'),
        ]);
    }
}
