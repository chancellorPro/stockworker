<?php

namespace App\Exports;

use App\Models\ActionLog;
use App\Models\Product;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class OutcomeReport implements FromCollection, WithHeadings
{
    const DIRECTION = ActionLog::OUTOME;

    protected $from;
    protected $to;

    public function __construct($from, $to)
    {
        $this->from = $from;
        $this->to = $to;
    }

    public function headings(): array
    {
        return ['#', 'Товар', 'Количество', 'Заказчик'];
    }

    /**
    * @return string
    */
    public function collection(): string
    {
        $builder = ActionLog::selectRaw('
        action_log.product_id,
        max(p.name) as p_name,
        sum(action_log.count) as al_count,
        max(c.name) as c_name')
            ->leftJoin('products AS p', 'p.id', '=', 'action_log.product_id')
            ->leftJoin('customers AS c', 'c.id', '=', 'action_log.customer_id')
            ->whereBetween('action_log.date', [$this->from, $this->to])
            ->where(['income' => self::DIRECTION]);

        return json_encode([
            'header'  => 'Отгрузка за ' . str_replace('00:00:00', '', $this->from),
            'columns' => $this->headings(),
            'values'  => $builder->orderBy('c.id')->groupBy('c.id', 'action_log.product_id')->get()->map(function ($item){
                return [$item->product_id, $item->p_name, $item->al_count, $item->c_name];
            })->toArray(),
            'token'   => env('REPORT_TOKEN'),
        ]);
    }
}
