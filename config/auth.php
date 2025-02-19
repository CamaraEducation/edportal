<?php

use Leaf\Helpers\Password;

return [
    /*
    |--------------------------------------------------------------------------
    | Database table
    |--------------------------------------------------------------------------
    |
    | This is the table that leaf auth will perform authentication
    | checks on and edit/retrieve users from.
    |
    */
    'DB_TABLE' => 'users',

    /*
    |--------------------------------------------------------------------------
    | Use session
    |--------------------------------------------------------------------------
    |
    | Use session based authentication instead of the default JWT based auth.
    |
    */
    'USE_SESSION' => true,

    /*
    |--------------------------------------------------------------------------
    | REDIRECT ON LOGIN
    |--------------------------------------------------------------------------
    |
    | Redirect to a page after login
    |
    */
    'SESSION_REDIRECT_ON_LOGIN' => false,

    /* 
    |--------------------------------------------------------------------------
    | REDIRECT ON REGISTER
    |--------------------------------------------------------------------------
    |
    | Redirect to a page after register
    |
    */
    'REDIRECT_ON_REGISTER' => false,

    /*
    |--------------------------------------------------------------------------
    | Generate timestamps
    |--------------------------------------------------------------------------
    |
    | Automatically generate created_at/updated_at timestamps for register
    | and update methods
    |
    */
    'USE_TIMESTAMPS' => false,

    /*
    |--------------------------------------------------------------------------
    | Encode password
    |--------------------------------------------------------------------------
    |
    | Password encode is run when leaf wants to encode passwords on register
    | This exact method is used by default in Leaf, so you can set it to null
    | if you want to.
    |
    | You can set your own implementation instead of Password::hash
    |
    */
    'PASSWORD_ENCODE' => function ($password) {
        return Password::hash($password);
    },

    /*
    |--------------------------------------------------------------------------
    | Verify Password
    |--------------------------------------------------------------------------
    |
    | This function is run to verify the password. This implementation is done
    | by default, so you can set it to null, and it will still work fine.
    |
    | You can add your own implementation instead of Password::verify
    |
    */
    'PASSWORD_VERIFY' => function ($password, $hashedPassword) {
        return Password::verify($password, $hashedPassword);
    },

    /*
    |--------------------------------------------------------------------------
    | Password Key
    |--------------------------------------------------------------------------
    |
    | The default password key. Leaf will expect this key to hold passwords
    | in your database.
    |
    */
    'PASSWORD_KEY' => 'password',

    /*
    |--------------------------------------------------------------------------
    | Hide id
    |--------------------------------------------------------------------------
    |
    | Hide id field from user object returned in login, register and update
    |
    */
    'HIDE_ID' => true,

    /*
    |--------------------------------------------------------------------------
    | Hide password
    |--------------------------------------------------------------------------
    |
    | Hide password from user object returned in login, register and update
    |
    */
    'HIDE_PASSWORD' => true,

    /*
    |--------------------------------------------------------------------------
    | Login params error
    |--------------------------------------------------------------------------
    |
    | Error to show when the login params aren't found in db
    |
    */
    'LOGIN_PARAMS_ERROR' => 'Username not registered!',

    /*
    |--------------------------------------------------------------------------
    | Password error
    |--------------------------------------------------------------------------
    |
    | Error to show when the login password is wrong
    |
    */
    'LOGIN_PASSWORD_ERROR' => 'Password is incorrect!',

    /*
    |--------------------------------------------------------------------------
    | Session on register
    |--------------------------------------------------------------------------
    |
    | If true, a session will be created on a successful registration, else
    | you it'll be created on login rather.
    |
    */
    'SESSION_ON_REGISTER' => false,

    /*
    |--------------------------------------------------------------------------
    | Login page route
    |--------------------------------------------------------------------------
    */
    'GUARD_LOGIN' => '/auth/login',

    /*
    |--------------------------------------------------------------------------
    | Register page route
    |--------------------------------------------------------------------------
    */
    'GUARD_REGISTER' => '/auth/register',

    /*
    |--------------------------------------------------------------------------
    | Logout route
    |--------------------------------------------------------------------------
    */
    'GUARD_LOGOUT' => '/auth/logout',

    /*
    |--------------------------------------------------------------------------
    | Home page route
    |--------------------------------------------------------------------------
    */
    'GUARD_HOME' => '/app/home',

    /*
    |--------------------------------------------------------------------------
    | JWT + Session
    |--------------------------------------------------------------------------
    |
    | Add an auth token to the auth session?
    |
    */
    'SAVE_SESSION_JWT' => false,

    /*
    |--------------------------------------------------------------------------
    | JWT Token Secret
    |--------------------------------------------------------------------------
    |
    | Secret string to encode JWT
    |
    */
    'TOKEN_SECRET' => _env('app_key'),

    /*
    |--------------------------------------------------------------------------
    | JWT Lifetime
    |--------------------------------------------------------------------------
    |
    | How long should JWT be valid for?
    |
    */
    'TOKEN_LIFETIME' => 60 * 60 * 24 * 365,

    /*
    |--------------------------------------------------------------------------
    | SESSION COOKIE PARAMS
    |--------------------------------------------------------------------------
    |
    | Set the session cookie params
    | Read more: https://www.php.net/manual/en/function.session-set-cookie-params.php
    |
    | secure: cookie should only be sent over secure connections (https)
    | httponly: cookie should only be accessible through HTTP requests
    | samesite: cookie should be sent with "SameSite" directives :-
    |       Possible values for samesite: 'strict', 'lax', 'none' or null
    |
    |
    */
    'SESSION_COOKIE_PARAMS' => ['secure' => false, 'httponly' => true, 'samesite' => 'lax']
];
