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
        return ['#', 'Наименование', 'На складе', 'План', 'Кол-во ящиков', 'Вес ящика', 'Заказчик'];
    }

    /**
    * @return Collection
    */
    public function collection()
    {
        $builder = Stock::selectRaw('
        stock.product_id,
        max(p.name) as p_name,
        max(s.count) as s_count, 
        max(pl.count) as pl_count, 
        (max(s.count) as s_count / max(p.box_size) as box_size) as boxes_count, 
        max(p.box_weight) as box_weight, 
        max(c.name) as c_name')
            ->leftJoin('products AS p', 'p.id', '=', 'action_log.product_id')
            ->leftJoin('plan AS pl', 'pl.product_id', '=', 'action_log.product_id')
            ->leftJoin('customers AS c', 'c.id', '=', 'action_log.customer_id')
            ->whereBetween('action_log.date', [$this->from, $this->to])
            ->where(['income' => $this->income]);


        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();

        if($this->hasParent) {
//            $builder->whereNull('p.parent_product');
        } else {
            $builder->whereNotIn('p.id', array_filter($parentIds));
        }

        return $builder->orderBy('c.id')->groupBy('c.id', 'action_log.product_id')->get();
    }
}
