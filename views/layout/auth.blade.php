<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta content="width=device-width, initial-scale=1.0" name="viewport">
		<meta name="generator" content="Dynamic Framework">
		<title>@yield('title')</title>
		<meta name="author" content="{{$_ENV['AUTHOR']}}"> 
		<meta name="description" content="{{$_ENV['DESCRIPTION']}}">
		<link rel="icon" href="/assets/img/favicon.png">     
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;display=swap" rel="stylesheet">
        @css('/assets/auth/css/bootstrap.min')
        @css('/assets/auth/css/common')
        @css('/assets/auth/css/auth')
	</head>
	<body>

        @yield('content')
        @js('/assets/auth/js/jquery.min')
        @js('/assets/auth/js/bootstrap.min')
        @js('/assets/auth/js/main')

	</body>
</html>