<?php

namespace App\Exports;

use App\Models\BoxesStock;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class BoxReport implements FromCollection, WithHeadings
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
        return ['#', 'Ящик', 'На складе'];
    }

    /**
     * @return string
     */
    public function collection()
    {
        $data = BoxesStock::selectRaw('boxes_stock.box_id, b.name, boxes_stock.count')
            ->join('boxes AS b', 'b.id', '=', 'boxes_stock.box_id')
            ->orderBy('boxes_stock.updated_at', 'desc')
            ->get()->map(function ($item){
                return [$item->box_id, $item->name, $item->count];
            })->toArray();

        return json_encode([
            'header'  => 'Склад ящиков за ' . str_replace('00:00:00', '', $this->from),
            'columns' => $this->headings(),
            'values'  => $data,
            'format'  => 'xls',
            'token'   => env('REPORT_TOKEN'),
        ]);
    }
}
