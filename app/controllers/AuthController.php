<?php

namespace App\Controllers;

use App\Models\User;

use Leaf\Helpers\Password;
use App\Helpers\MailSender;
use App\Controllers\Controller;

class AuthController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @method signin
     * @return void
     */
    public function signin(){
        render('auth.login');
    }

    /**
     * @method signup
     * @return void
     */
    public function signup(){
        render('auth.register');
    }

    /**
     * @method login
     * @param bool $api
     * @return void
     */
    public function login(){
        $data = auth()->login([
            'username' => request()->get('username'),
            'password' => request()->get('password')
        ]);

        return $this->jsonResponse($data, 'Login successful', 'Invalid login credentials', '/app/home');
    }

    /**
     * @method register
     * @return void
     */
    public static function register(){

        // check if user exists
        if(User::where('email', request()->get('email'))->first())
            exit(response()->json(['status'=>false, 'message'=>'User already exists']));
        
        $data = auth()->register([
            'email' => request()->get('email'),
            'fullname' => request()->get('name'),
            'password' => request()->get('password')
        ]);

        if($data) {
            $message = ['status' => true, 'message' => 'Registration successful'];
        }else{
            $message = ['status' => false, 'message' => 'Registration failed'];
        }

        response()->json($message);

    }

    /**
     * @method forgot
     * @return void
     */
    public function forgot(){
        render('auth.reset');
    }

    /**
     * @method reset
     * @return void
     */
    public function reset(){
        
        try{
            $email = request()->get('email');
            
            // get user data by email
            $userData = User::where('email', $email)->first();
            if(!$userData)
                exit(response()->json(['status'=>false, 'message'=>'User with such email does not exist']));

            // if reset_token is present and updated time is less than a minute
            if($userData->remember_token && (time() - strtotime($userData->updated_at)) < 60)
                exit(response()->json(['status'=>false, 'message'=>'Password reset link already sent, check spam folder']));

            // generate reset token
            $resetToken = Password::hash($userData->id.time());
            User::where('email', $email)->update([
                'remember_token' => $resetToken
            ]);

            // send reset email
            $mail = new MailSender();
            $mail->sendHtml(
                'Password Reset',
                view('mail.reset', ['name'=>$userData->fullname, 'token'=>base64_encode($resetToken)]),
                $email, $userData->fullname
            );

            response()->json(['status'=>true, 'message'=>'Password reset link sent to your email']);

        }catch(\Exception $e){
            
            (getenv('app_debug') == 'true') ?
                response()->json(['status'=>false, 'message'=>$e->getMessage()]) :
                response()->json(['status'=>false, 'message'=>'An error occurred']);
        }
    }

    /**
     * @method changePassword
     * @param string $token
     * @return void
     */
    public function changePassword($token)
    {
        $token = base64_decode($token);
        $userData = User::where('remember_token', $token)->first();

        if(!$userData)
            return response()->markup(view('errors.400'), 400);

        if((time() - strtotime($userData->updated_at)) > 7200)
            return response()->markup(view('errors.400'), 400);

        $this->data->token = $token;

        render('auth.password', (array) $this->data);
    }

    /**
     * @method updatePassword
     * @param string $token
     * @return void
     */
    public function updatePassword($token){
        $token = base64_decode($token);
        $userData = User::where('remember_token', $token)->first();

        if(!$userData)
            exit(response()->json(['status'=>false, 'message'=>'Invalid token submitted']));

        // token issued more than 2 hours ago
        if((time() - strtotime($userData->updated_at)) > 7200)
            exit(response()->json(['status'=>false, 'message'=>'Token expired']));

        $password = request()->get('password');
        User::where('remember_token', $token)->update([
            'password' => Password::hash($password),
            'remember_token' => null
        ]);

        response()->json(['status'=>true, 'message'=>'Password updated successfully']);
    }

    /**
     * @method logout
     * @return void
     */
    public static function logout(){
        auth()->logout();
        response()->redirect('/');
    }

    public function testi(){
        echo getenv('GOOGLE_CLIENT_ID');
    }


}