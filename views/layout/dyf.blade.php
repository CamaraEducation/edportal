<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- please do not remove this section -->
		<meta charset="utf-8">
		<meta content="width=device-width, initial-scale=1.0" name="viewport">
		<meta name="generator" content="Dynamic Framework">
		<title>@yield('title')</title>
		<!-- please do not remove this section -->
		<meta content="Dynamic Framework, A php starter kit you must have" name="description">
		<meta content="dynamic, framework, php, blade template, imap, smtp, smpp" name="keywords">
		<!-- Favicons -->
		<link href="/assets/img/favicon.png" rel="icon">
		<link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon">
		<!-- Google Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Roboto:100,300,400,500,700|Philosopher:400,400i,700,700i" rel="stylesheet">
		<!-- Vendor CSS Files -->
		@css("/assets/vendor/aos/aos.css")
		@css("/assets/vendor/bootstrap/css/bootstrap.min")
		@css("/assets/vendor/bootstrap-icons/bootstrap-icons")
		@css("/assets/vendor/glightbox/css/glightbox.min")
		@css("/assets/vendor/swiper/swiper-bundle.min")
		@css("/assets/css/style")
	</head>
	<body>
		@yield('content')
		<!-- Vendor JS Files -->
		@js('/assets/vendor/aos/aos')
		@js('/assets/vendor/bootstrap/js/bootstrap.bundle.min')
		@js('/assets/vendor/glightbox/js/glightbox.min')
		@js('/assets/vendor/php-email-form/validate')
		@js('/assets/vendor/swiper/swiper-bundle.min')
		@js('/assets/js/main')
	</body>
</html>