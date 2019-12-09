<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class Material
 */
class ProductMaterial extends Model
{

    /**
     * Turn off auto updated_at
     */
    public $timestamps = false;

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'materials_to_product';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'material_id',
        'product_id',
        'color_id',
        'height',
        'width',
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
     * Product relation
     *
     * @return BelongsTo
     */
    public function material()
    {
        return $this->belongsTo(Material::class, 'material_id');
    }

    /**
     * Product relation
     *
     * @return BelongsTo
     */
    public function color()
    {
        return $this->belongsTo(Color::class, 'color_id');
    }
}
