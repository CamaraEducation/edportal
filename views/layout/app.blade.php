@if (!empty($_SESSION))
@php LogsController::log_page_visit(); 
@endphp
<!DOCTYPE html>
<html>
	<head>
		<!-- please do not remove this section -->
		<meta charset="utf-8">
		<meta content="user-scalable=no, width=device-width, initial-scale=1.0" name="viewport">
		<meta name="generator" content="Dynamic Framework">
		<title>@yield('title')</title>
		<meta content="{{$_ENV['AUTHOR']}}" name="description">
		<meta name="description" content="{{$_ENV['DESCRIPTION']}}">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/brand/fav.png">
		<!-- please do not remove this section -->
		@yield('header')
		@css('/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css')
		@css('/assets/css/style.css')
		@css('/assets/css/custom.css')
		@css('/assets/css/mobile.css')
		@css('/assets/vendor/toastr/css/toastr.min.css')
		<script> startTime = new Date(); </script>

	</head>
	<body class="deznav-scroll">
		<div id="preloader">
			<div class="sk-three-bounce">
				<div class="sk-child sk-bounce1"></div>
				<div class="sk-child sk-bounce2"></div>
				<div class="sk-child sk-bounce3"></div>
			</div>
		</div>
		
		<div id="main-wrapper">

			<!-- logo banner -->
			<div class="nav-header">
				<a href="/" class="brand-logo">
					<img class="logo-small" src="/assets/img/brand/mini-light.png" alt="logo" width="60px"/>
					<img class="logo-big" src="/assets/img/brand/logo-light.png" alt="logo" width="200px"/>
				</a>
				<div class="nav-control">
					<div class="hamburger">
						<span class="line"></span><span class="line"></span><span class="line"></span>
					</div>
				</div>
			</div>

			@include('layout.chatbox')
			@include('layout.topbar')
			@include('layout.sidebar')
			@yield('content')

			<div class="footer">
				<div class="copyright">
					<p>© {{date('Y')}} Camara Education | All rights Reserved</p>
				</div>
			</div>

			@include('layout.mobile')
			@include('layout.model.menu')
		</div>
		
		@js('/assets/vendor/global/global.min.js') 
		@js('/assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js')
		@js('/assets/vendor/peity/jquery.peity.min.js')
		<!--@ js('/assets/js/dashboard/dashboard-1.js') -->
		@js('/assets/js/custom.min.js')
		@js('/assets/js/deznav-init.js')
		@js('/assets/js/demo.js')

		<script src="/assets/vendor/toastr/js/toastr.min.js"></script>

		<script>
			var uri = '{{$_SERVER["REQUEST_URI"]}}';
			function log_live_time(){
				$.post("/log/time", {
					uri: uri
				},
				function(data, status){
					//console.log(data);
				});
			}
			setInterval(function(){
				log_live_time()
			}, 3200);
		</script>

		@yield('footer')
	</body>
</html>
@else @php header('Location: /login') @endphp 
@endif