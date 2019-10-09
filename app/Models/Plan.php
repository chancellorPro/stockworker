<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Plan
 */
class Plan extends Model
{

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'plan';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'product_id',
        'count',
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
