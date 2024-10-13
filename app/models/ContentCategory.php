<?php

namespace App\Models;

class ContentCategory extends Model
{
    protected $table = 'content_categories';
    protected $fillable = ['slug', 'name'];
    public $timestamps = true;
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];
}