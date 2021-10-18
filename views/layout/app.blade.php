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

		<!-- Favicons -->
		<link href="/assets/img/favicon.png" rel="icon">
		<link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon">
		<!-- Google Fonts -->
		<style type="text/css">
			body {
			background-color: #eee;
			}
			body, h1, p {
			font-family: "Helvetica Neue", "Segoe UI", Segoe, Helvetica, Arial, "Lucida Grande", sans-serif;
			font-weight: normal;
			margin: 0;
			padding: 0;
			text-align: center;
			}
			.container {
			margin-left:  auto;
			margin-right:  auto;
			margin-top: 177px;
			max-width: 1170px;
			padding-right: 15px;
			padding-left: 15px;
			}
			.row:before, .row:after {
			display: table;
			content: " ";
			}
			.col-md-6 {
			width: 50%;
			}
			.col-md-push-3 {
			margin-left: 25%;
			}
			h1 {
			font-size: 48px;
			font-weight: 300;
			margin: 0 0 20px 0;
			}
			.lead {
			font-size: 21px;
			font-weight: 200;
			margin-bottom: 20px;
			}
			p {
			margin: 0 0 10px;
			}
			a {
			color: #3282e6;
			text-decoration: none;
			}
		</style>
	</head>
	<body>
		@yield('content')
	</body>
</html>