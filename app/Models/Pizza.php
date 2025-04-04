<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pizza extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $appends = [
        'chef',
        'last_updated',
    ];

    // translates db to appilcation. data will be array in the backend but presented as json

    // this is not stored in the DB
    protected $casts = [
        'toppings' => 'array',
    ];

    protected $hidden = [
        'user',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getChefAttribute(): string
    {
        return $this->user->name;
    }

    public function getLastUpdatedAttribute(): string
    {
        return $this->updated_at->diffForHumans();
    }
}