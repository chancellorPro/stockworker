<?php

namespace App\Exports;

use App\Models\ActionLog;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class OrderExport implements FromCollection, WithHeadings
{

    protected $from;
    protected $to;
    protected $income;
    protected $hasParent;

    public function __construct($from, $to, $income, $hasParent)
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
        return ActionLog::selectRaw('action_log.product_id, max(p.name) as p_name, max(pl.count) as pl_count, sum(action_log.count) as al_count, max(c.name) as c_name')
            ->leftJoin('products AS p', 'p.id', '=', 'action_log.product_id')
            ->leftJoin('plan AS pl', 'pl.product_id', '=', 'action_log.product_id')
            ->leftJoin('customers AS c', 'c.id', '=', 'action_log.customer_id')
            ->whereBetween('action_log.date', [$this->from, $this->to])
            ->where(['income' => $this->income])
            ->where(['p.parent_product', ($this->hasParent > 0 ? '>' : '='), 0])
            ->orderBy('pl_count')
            ->groupBy('action_log.product_id')
            ->get();
    }
}
