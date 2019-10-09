<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Stock
 */
class Stock extends Model
{

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'stock';

    /**
     * PK
     *
     * @var string
     */
    protected $primaryKey = 'product_id';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'product_id',
        'partition',
        'count',
        'description',
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
