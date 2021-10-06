<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Box
 */
class Box extends Model
{

    /**
     * Custom table name
     *
     * @var string
     */
    protected $table = 'boxes';

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'capacity',
        'size',
        'weight',
        'actual',
    ];

}
