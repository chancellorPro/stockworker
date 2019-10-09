<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Product
 */
class Product extends Model
{

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'box_id',
        'box_size',
        'box_weight',
        'parent_product',
    ];

    /**
     * Product relation
     *
     * @return BelongsTo
     */
    public function product_ref()
    {
        return $this->belongsTo(Product::class, 'parent_product');
    }

}
