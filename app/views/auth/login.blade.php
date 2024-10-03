@extends('layouts.auth')
@section('content')
	<div class="auth-main v2">
		<div class="bg-overlay bg-dark"></div>
		<div class="auth-wrapper">
			<div class="auth-sidecontent">
				<div class="auth-sidefooter">
					<div>
						<span>EdPortal is an educational tools container designed to provide a comprehensive and centralized platform for learning resources. It offers access to a wide range of educational tools, including videos, books, and literature, along with notes and a Learning Management System (LMS). The platform aims to enhance the learning experience by offering structured resources for both students and educators. With a focus on flexibility and accessibility, EdPortal serves as a hub where users can engage with various types of content to support their educational journey.</span>
					</div>
					<hr class="mb-3 mt-4" />
					<div class="row">
						<div class="col my-1">
							<p class="m-0">A product of <a class="fw-bold" href="https://camara.org" target="_blank">Camara Education</a></p>
						</div>
						<div class="col-auto my-1">
							<ul class="list-inline footer-link mb-0">
								<li class="list-inline-item"><a href="javascript:void(0)" class="text-primary fw-bold">edPortal V3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="auth-form">
				<div class="card my-5 mx-3" style="min-height: unset !important">
					<div class="card-body">

						<div class="text-center my-2 mb-4">
							<a href="/">
								<img src="/assets/images/brand/logo-dark.png" width="200" alt="img" />
							</a>
						</div>

						<h4 class="f-w-500 mb-3 text-center">Login into your Account</h4>
						
						<form name="{{ route('login') }}" method="POST" onsubmit="submitForm(event)">

							@csrf
							<!-- email input -->
							<div class="form-group mb-3">
								<input type="text" class="form-control" id="username" name="username" placeholder="Username" required>
							</div>

							<!-- password input -->
							<div class="form-group mb-3 position-relative">
								<input type="password" class="form-control" name="password" placeholder="••••••••••••" required autocomplete='false'>
                                <i class="fa fa-eye pass-view" onclick="togglePassword(this)"></i>
							</div>

							<!-- form submission -->
							<div class="d-grid my-4">
								<button type="submit" id="btnAuth" class="btn btn-primary">{{__('Login')}}</button>
							</div>

						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection

@section('scripts')
	<script>
		$("form[name='login']").submit(function(event) {
			
			event.preventDefault();
			buttonState('#btnAuth', 'loading');
			
			$.ajax({
				url: '/auth/login',
				type: 'POST',
				data: $(this).serialize(),
				success: function(response) {
					if(response.status == 'success') {
						Swal.fire({ icon: 'success', title: 'Success', text: response.message }).then(() => {
							location.reload();
						});
					} else {
						Swal.fire({ icon: 'error', title: 'Oops...', text: response.message });
					}
				},
				error: function() {
					Swal.fire({ icon: 'error', title: 'Oops...', text: 'An error occurred. Please try again later.' });
				},
				complete: function() {
					buttonState('#btnAuth', 'reset', 'Login');
				}
			});
			
		});
	</script>
@endsection