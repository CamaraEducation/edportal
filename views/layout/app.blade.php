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
		<!-- please do not remove this section -->

		<link rel="icon" type="image/png" sizes="16x16" href="images/favicon.png">		
		@css('/assets/vendor/chartist/css/chartist.min.css')
		@css('/assets/vendor/bootstrap-select/dist/css/bootstrap-select.min.css')
		@css('/assets/vendor/owl-carousel/owl.carousel.css')
		@css('/assets/css/style.css')
		@css('/assets/css/custom.css')

	</head>
	<body data-typography="HelveticaNeue" data-theme-version="light" data-layout="horizontal" data-nav-headerbg="color_1" data-headerbg="color_1" data-sidebar-style="full" data-sibebarbg="color_1" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" direction="ltr" data-primary="color_12">
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
				<a href="index.html" class="brand-logo">
					<img src="/assets/img/logo.png" alt="logo" width="200px"/>
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
		@js('/assets/vendor/chart.js/Chart.bundle.min.js') 
		@js('/assets/vendor/peity/jquery.peity.min.js') 
		@js('/assets/vendor/apexchart/apexchart.js') 
		@js('/assets/js/dashboard/dashboard-1.js') 
		@js('/assets/vendor/owl-carousel/owl.carousel.js')
		@if (!isset($_COOKIE['loaded']))
			@php setcookie('loaded', 'true', time() + (86400 * 30), "/");
			header("Refresh:1"); @endphp
			@else
				@js('/assets/js/custom.min.js')
		@endif
		@js('/assets/js/deznav-init.js') 
		@js('/assets/js/demo.js') -->
	</body>
</html>