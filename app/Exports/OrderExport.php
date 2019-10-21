<?php

namespace App\Exports;

use App\Models\ActionLog;
use App\Models\Product;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class OrderExport implements FromCollection, WithHeadings
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
        return ['№', 'Товар', 'План', 'Выполнено', 'Заказчик'];
    }

    /**
    * @return Collection
    */
    public function collection()
    {
        $builder = ActionLog::selectRaw('action_log.product_id, max(p.box_id) as box_id, max(p.box_size) as box_size, 
        max(p.box_weight) as box_weight, max(p.name) as p_name, max(s.count) as s_count, max(pl.count) as pl_count, 
        sum(action_log.count) as al_count, max(c.name) as c_name')
            ->leftJoin('products AS p', 'p.id', '=', 'action_log.product_id')
            ->leftJoin('plan AS pl', 'pl.product_id', '=', 'action_log.product_id')
            ->leftJoin('customers AS c', 'c.id', '=', 'action_log.customer_id')
            ->leftJoin('stock AS s', 'p.id', '=', 's.product_id')
            ->whereBetween('action_log.date', [$this->from, $this->to])
            ->where(['income' => $this->income])
            ->groupBy('c.id');

        $parentIds = Product::selectRaw('distinct parent_product')->get()->pluck('parent_product')->toArray();

        if($this->hasParent) {
//            $builder->whereNull('p.parent_product');
        } else {
            $builder->whereNotIn('p.id', array_filter($parentIds));
        }

        return $builder->orderBy('pl_count')->groupBy('action_log.product_id')->get();
    }
}
