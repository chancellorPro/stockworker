<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Customer
 */
class Customer extends Model
{

    /**
     * Fillable
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
    ];

}
