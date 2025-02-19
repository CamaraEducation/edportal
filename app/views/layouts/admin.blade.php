<!DOCTYPE html>
<html lang="en">
	<head>
		<title>{{$title ?? _env('APP_NAME')}}</title>
		<!-- [Meta] -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="author" content="{{_env('app_author')}}">
		<meta name="csrf-token" content="{{ csrf_token() }}">
		
		<link rel="icon" href="{{ $settings->favicon }}" type="image/x-icon">
		<link rel="stylesheet" href="/assets/fonts/inter/inter.css" id="main-font-link" />
		<link rel="stylesheet" href="/assets/fonts/tabler-icons.min.css" />
		<link rel="stylesheet" href="/assets/fonts/feather.css" />
		<link rel="stylesheet" href="/assets/fonts/fontawesome.css" />		
		<link rel="stylesheet" href="/assets/fonts/phosphor/duotone/style.css" />
		<link rel="stylesheet" href="/assets/fonts/material.css" />
		
		<link rel="stylesheet" href="/assets/css/plugins/toastr.min.css" />
		<link rel="stylesheet" href="/assets/css/plugins/select2.min.css">
		
		<link rel="stylesheet" href="/assets/css/style.css" id="main-style-link" />
		<link rel="stylesheet" href="/assets/css/style-preset.css" />
		<link rel="stylesheet" href="/assets/css/custom.css" />
	</head>
	
	<body
		data-pc-theme_contrast="true"
		data-pc-sidebar-caption="true"
		data-pc-preset="{{ $settings->theme_color }}" 
		data-pc-theme="{{cookie()->get('theme_color') ?? 'light' }}" 
		data-pc-direction="{{ $langs::fetch(cookie()->get('lang'))->layout ?? $settings->theme_layout }}" >

		<div class="loader-bg">
			<div class="loader-track">
				<div class="loader-fill"></div>
			</div>
		</div>
		
		@include('layouts.admin.sidebar')
		@include('layouts.admin.topbar')

        @yield('content')

		@include('admin.partials.announcements')
		@include('layouts.app.basebar')

		<!-- Required Js -->
        <script src="/assets/js/plugins/jquery-3.7.1.min.js"></script>
		<script src="/assets/js/simplebar.min.js"></script>
		<script src="/assets/js/plugins/popper.min.js"></script>
		<script src="/assets/js/plugins/simplebar.min.js"></script>
		<script src="/assets/js/plugins/bootstrap.min.js"></script>
		<script src="/assets/js/fonts/custom-font.js"></script>
		<script src="/assets/js/pcoded.js"></script>
		<script src="/assets/js/plugins/feather.min.js"></script>
		<script src="/assets/js/plugins/sweetalert2.all.min.js"></script>
        <script src="/assets/js/plugins/toastr.min.js"></script>
		<script src="/assets/js/plugins/select2.min.js"></script>
		<script src="/assets/js/app.js"></script>
		<script src="/admin/script"></script>
		<script>localStorage.setItem('layout', 'vertical');</script>

		@yield('scripts')

	</body>
</html>