<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta content="user-scalable=no, width=device-width, initial-scale=1.0" name="viewport">
		<meta name="generator" content="Dynamic Framework">
		<title>@yield('title')</title>
		<meta name="author" content="{{$_ENV['AUTHOR']}}"> 
		<meta name="description" content="{{$_ENV['DESCRIPTION']}}">
		<link rel="icon" href="/assets/img/brand/fav.png">
        @css('/assets/auth/css/bootstrap.min')
        @css('/assets/auth/css/common')
        @css('/assets/auth/css/auth')
		@css('/assets/css/toastr.min')
		@css('/assets/vendor/bootstrap-icons/bootstrap-icons')
	</head>
	<body>

        @yield('content')
        @js('/assets/auth/js/jquery.min')
        @js('/assets/auth/js/bootstrap.min')
        @js('/assets/auth/js/main')
		@js('/assets/js/toastr.min')
		@yield('scripts')

	</body>
</html>