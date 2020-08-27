<?php

namespace App\Exports;

use App\Models\Product;
use App\Models\Stock;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class StockReport implements FromCollection, WithHeadings
{

    protected $from;
    protected $to;
    protected $income;

    public function __construct($from, $to, $income)
    {
        $this->from = $from;
        $this->to = $to;
        $this->income = $income;
    }

    public function headings(): array
    {
        return ['#', 'Товар', 'На складе', 'Кол-во ящиков', 'Кол-во в ящике', 'Вес полного ящика', "Объём ящика"];
    }

    /**
    * @return Collection
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
            ->join('products AS p', 'p.id', '=', 'stock.product_id')
            ->leftJoin('plan AS pl', 'pl.product_id', '=', 'stock.product_id');

        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();

        $builder->whereNotIn('p.id', array_filter($parentIds));

        return $builder->orderBy('stock.updated_at', 'desc')->get();
    }
}
