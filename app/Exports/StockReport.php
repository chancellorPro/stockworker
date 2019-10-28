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
    protected $hasParent;

    public function __construct($from, $to, $income, $hasParent = null)
    {
        $this->from = $from;
        $this->to = $to;
        $this->income = $income;
        $this->hasParent = $hasParent;
    }

    public function headings(): array
    {
        return ['#', 'Наименование', 'На складе', 'План', 'Кол-во ящиков', 'Вес ящика'];
    }

    /**
    * @return Collection
    */
    public function collection()
    {
        $builder = Stock::selectRaw('
        stock.product_id,
        max(p.name) as p_name,
        max(stock.count) as s_count, 
        max(pl.count) as pl_count, 
        round(max(stock.count) / max(p.box_size)) as boxes_count, 
        max(p.box_weight) as box_weight,
        max(stock.updated_at) as s_updated_at,
        max(p.box_id) as box_id')
            ->leftJoin('products AS p', 'p.id', '=', 'stock.product_id')
            ->leftJoin('plan AS pl', 'pl.product_id', '=', 'stock.product_id');

        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();

        if($this->hasParent) {
//            $builder->whereNull('p.parent_product');
        } else {
            $builder->whereNotIn('p.id', array_filter($parentIds));
        }

        return $builder->orderBy('s_updated_at', 'desc')->groupBy('stock.product_id')->get();
    }
}
