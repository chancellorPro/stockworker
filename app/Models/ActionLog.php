<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class ActionLog
 */
class ActionLog extends Model
{

    const INCOME = 0;
    const OUTOME = 1;
    const STOCK = 3;

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'action_log';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'date',
        'income',
        'product_id',
        'count',
        'partition',
        'customer_id',
        'description',
        'created_by',
    ];

    /**
     * Product relation
     *
     * @return BelongsTo
     */
    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    /**
     * Customer relation
     *
     * @return BelongsTo
     */
    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }
}
