<?php

namespace App\Controllers\Base;

use App\Controllers\Controller;
use App\Models\User;
use Leaf\Helpers\Password;

class UsersController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index($role)
    {
        if(auth()->user()['role'] === 'student') return response()->redirect('/');
        if(!in_array($role, ['student', 'teacher'])) return $this->errorPage(404);

        $role == 'student' ? $roles = ['student'] : $roles = ['teacher', 'moderator'];
        
        $users = User::whereIn('role', $roles)->get();
        $this->users = $users;
        

        return $this->renderPage(ucfirst("{$role}s"), 'app.users.index');
    }

    public function store()
    {
        try{
            if(auth()->user()['role'] === 'student') return response()->redirect('/');
            $data = [
                'fullname' => request()->params('fullname'),
                'username' => request()->params('username'),
                'role' => request()->params('role')
            ];

            if(in_array('', $data))
                return $this->jsonError('All fields are required');

            if($data['role'] != 'student' && auth()->user()['role'] != 'admin')
                return $this->jsonError('You do not have permission to create this user');

            if($this->checkUser($data['username']))
                return $this->jsonError('Username already exists');

            $data['password'] = Password::hash($data['username']);
            $user = User::create($data);

            if(!$user)
                return $this->jsonError('Failed to create user');

            $this->redirect = route('users.list', $data['role']);
            return $this->jsonSuccess('User created successfully');
        }

        catch(\Exception $e){
            return response()->json(['status'=>false, 'message'=>'Failed to create user']);
        }
    }

    public function checkUser($username) :bool
    {
        return User::where('username', $username)->exists();
    }

    public static function routes(){
        app()::get('/list/{role}', ['name'=>'users.list', 'UsersController@index']);
        app()::post('/store', ['name'=>'users.store', 'UsersController@store']);
    }
}