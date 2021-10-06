<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class BoxesStock
 */
class BoxesStock extends Model
{

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'boxes_stock';

    /**
     * PK
     *
     * @var string
     */
    protected $primaryKey = 'box_id';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'box_id',
        'count',
        'description',
    ];

    /**
     * Box relation
     *
     * @return BelongsTo
     */
    public function box()
    {
        return $this->belongsTo(Box::class, 'box_id');
    }

}
