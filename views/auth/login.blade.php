@extends('layout.auth')
@section('title', 'Login')
@section('content')
    <div class="forny-container">
        <div class="forny-inner">
            <div class="forny-form">
                <div class="mb-8 text-center forny-logo">
                    <img style="max-width:200px" src="/assets/img/brand/logo.png">
                </div>
                <div class="text-center">
                    <h4>Login into account</h4>
                </div>
                <form action="/authorize/login" method="POST">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="bi bi-person-fill"></i>
                                </span>
                            </div>
                            <input required class="form-control" name="email" id="login_id" type="text" placeholder="Username">
                        </div>
                    </div>
                    <div class="form-group password-field">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="bi bi-key-fill"></i>
                                </span>
                            </div>
                            <input required class="form-control" name="password" id="password" type="password" placeholder="Password">
                            <div class="input-group-append cursor-pointer">
                                <span class="input-group-text">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                                        <g transform="translate(0 0)">
                                            <g transform="translate(0 0)">
                                                <path d="M23.609,117.568a15.656,15.656,0,0,0-5.045-4.859,12.823,12.823,0,0,0-6.38-1.811c-.062,0-.309,0-.371,0a12.823,12.823,0,0,0-6.38,1.811,15.656,15.656,0,0,0-5.045,4.859,2.464,2.464,0,0,0,0,2.658,15.656,15.656,0,0,0,5.045,4.859,12.822,12.822,0,0,0,6.38,1.811c.062,0,.309,0,.371,0a12.823,12.823,0,0,0,6.38-1.811,15.656,15.656,0,0,0,5.045-4.859A2.464,2.464,0,0,0,23.609,117.568Zm-17.74,6.489a14.622,14.622,0,0,1-4.712-4.538,1.155,1.155,0,0,1,0-1.245,14.621,14.621,0,0,1,4.712-4.538,12.747,12.747,0,0,1,1.586-.79,8.964,8.964,0,0,0,0,11.9A12.748,12.748,0,0,1,5.869,124.057ZM12,125.75c-3.213,0-5.827-3.074-5.827-6.853s2.614-6.853,5.827-6.853,5.827,3.074,5.827,6.853S15.211,125.75,12,125.75Zm10.841-6.23a14.621,14.621,0,0,1-4.712,4.538,12.737,12.737,0,0,1-1.585.788,8.964,8.964,0,0,0,0-11.9,12.74,12.74,0,0,1,1.587.791,14.622,14.622,0,0,1,4.712,4.538A1.155,1.155,0,0,1,22.839,119.52Z" transform="translate(0.002 -110.897)" />
                                            </g>
                                            <g transform="translate(9.565 5.565)">
                                                <path d="M205.24,202.8a2.435,2.435,0,1,0,2.435,2.435A2.438,2.438,0,0,0,205.24,202.8Zm0,3.917a1.482,1.482,0,1,1,1.482-1.482A1.483,1.483,0,0,1,205.24,206.721Z" transform="translate(-202.805 -202.804)" />
                                            </g>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-6 mb-6">
                        <div class="col-6 d-flex align-items-center">
                            <!--div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="cb1">
                                <label class="custom-control-label" for="cb1">Remember me
                                </label>
                            </div-->
                        </div>
                        <!--div class="col-6 text-right">
                            <a href="/reset">Forgot password?</a>
                        </div-->
                    </div>
                    <div>
                        <button type="button" id="login" class="btn btn-primary btn-block">Login</button>
                    </div>
                    <div class="mt-10 mb-6 text-center">
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        function login(){
            $("#login").attr("disabled", true);
            var login_id = $('[name=email]').val();
            var password = $('#password').val();
            if(login_id != '' && password != ''){
                $.ajax({
                    type: "POST",
                    url: '/authorize/login',
                    data: {
                        email : $('#login_id').val(),
                        password : $('#password').val()
                    },
                    success: function(data){
                        if(data == 200){
                            toastr["success"]("Successfully loged in to the system", "Please Wait")
                            window.location.href = "/";
                        } else{
                            toastr["error"]("Please make sure the credentials provided are correct", "Wrong Credentials")
                            $("#login").removeAttr("disabled");
                        }
                    }
                });
            }else{
                toastr["warning"]("One or more form field is empty, All fields are required", "Empty Fields")
                $("#login").removeAttr("disabled");
            }
        }

        $('#login').click(function(){
            login();
        });

        // when enter is pressed
        $(document).keypress(function(e) {
            if(e.which == 13) {
                login();
            }
        });
    </script>
@endsection