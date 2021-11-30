@if (!empty($_SESSION))
@php LogsController::log_page_visit(); @endphp
<!DOCTYPE html>
<html>
	<head>
		<!-- please do not remove this section -->
		<meta charset="utf-8">
		<meta content="width=device-width, initial-scale=1.0" name="viewport">
		<meta name="generator" content="Dynamic Framework">
		<title>@yield('title')</title>
		<meta content="{{$_ENV['AUTHOR']}}" name="description">
		<meta name="description" content="{{$_ENV['DESCRIPTION']}}">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon.png">
		<!-- please do not remove this section -->
		@yield('header')
		@css('/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css')
		@css('/assets/css/style.css')
		@css('/assets/css/custom.css')
		<script> startTime = new Date(); </script>

	</head>
	<body>
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
					<img class="logo-small" src="/assets/img/favicon.png" alt="logo" width="50"/>
					<img class="logo-big" src="/assets/img/logo.png" alt="logo" width="200px"/>
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
					<p>© {{date('Y')}} Camara Education | All rights Reserved 2021</p>
				</div>
			</div>
		</div>
		
		@js('/assets/vendor/global/global.min.js') 
		@js('/assets/vendor/bootstrap-select/dist/js/bootstrap-select.min.js')
		@js('/assets/vendor/peity/jquery.peity.min.js')
		<!--@ js('/assets/js/dashboard/dashboard-1.js') -->
		@if (!isset($_COOKIE['loaded']))
			@php setcookie('loaded', 'true', time() + (86400 * 30), "/");
			header("Refresh:1"); @endphp
			@else @js('/assets/js/custom.min.js')
		@endif
		@js('/assets/js/custom.min.js')
		@js('/assets/js/deznav-init.js')
		@js('/assets/js/demo.js')

		<script>
			/*function myFunc(){
				endTime = new Date();
				$.ajax({
					url:'addDur.php',
					method:'POST',
					data:{
				  		duration:endTime - startTime,
					}
			  	});
			}*/
		</script>

		@yield('footer')
	</body>
</html>
@else @php header('Location: /login') @endphp 
@endif