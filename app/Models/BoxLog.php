<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Class BoxLog
 */
class BoxLog extends Model
{

    const INCOME = 0;
    const OUTOME = 1;
    const STOCK = 3;

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'box_log';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'box_id',
        'date',
        'count',
        'action_type',
    ];

    /**
     * Product relation
     *
     * @return BelongsTo
     */
    public function box()
    {
        return $this->belongsTo(Box::class, 'box_id');
    }
}
