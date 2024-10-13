<?php

namespace App\Models;

class User extends Model
{
    protected $table = 'users';
    protected $fillable = [ 'username', 'fullname', 'email', 'phone', 'password', 'remember_token', 'status', 'avatar', 'role', 'about', 'recommend' ];
    protected $hidden = [ 'password', 'remember_token' ];
    protected $with = ['user_role'];

    public $timestamps = true;

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime'
    ];

    public static $adminRoles = ['admin', 'moderator'];

    public static function non_admins(){
        return self::whereNotIn('role', static::$adminRoles)->orderBy('created_at', 'desc')->get();
    }

    public static function admins(){
        return self::whereIn('role', static::$adminRoles)->get();
    }
    
    public static function updateDetails($user, $columns){
        return self::where('id', $user)->update($columns);
    }

    public static function getUser($user_id){
        return self::where('id', $user_id)->get()->first();
    }

    # belongs to a single role
    public function user_role(){
        return $this->belongsTo(Role::class, 'role', 'name');
    }
}