@extends('layout.dyf')
@section('title', 'Dynamic Framework')
@section('content')
	<header id="header" class="header fixed-top d-flex align-items-center">
		<div class="container d-flex align-items-center justify-content-between">
			<div id="logo">
				<a href="index.html"><img src="assets/img/small.png" alt="Dynamic Framework" title="Dynamic Framework" /></a>
			</div>
			<nav id="navbar" class="navbar">
				<ul>
					<li><a class="nav-link scrollto" href="#get-started">About</a></li>
					<li><a class="nav-link scrollto" href="#features">Documentation</a></li>
				</ul>
				<i class="bi bi-list mobile-nav-toggle"></i>
			</nav>
			<!-- .navbar -->
		</div>
	</header>
	<!-- End Header -->
	<!-- ======= Hero Section ======= -->
	<section id="hero">
		<div class="hero-container" data-aos="fade-in">
			<h1><span>D</span>ynamic Framework</h1>
			<h2>A php starter kit for Noobs 🥴</h2>
			<img src="assets/img/hero-img.png" alt="Hero Imgs" data-aos="zoom-out" data-aos-delay="100">
			<a href="#get-started" class="btn-get-started scrollto">Documentation</a>
		</div>
	</section>
@endsection