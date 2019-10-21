<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class PlanHistory
 */
class PlanHistory extends Model
{

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'plan_history';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'product_id',
        'count',
        'created_at',
        'updated_at'
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

}
