@extends('layout.app')
@section('title', 'Portal Lms')
@section('header')
	<style>
		.cover-photo {
			background: url('/assets/img/lms.webp');
			background-size: cover;
			background-position: center;
			min-height: 250px;
			width: 100%;
		}
	</style> 
@endsection
@section('content')
	<div class="content-body">
		<div class="container-fluid">
			
			<div class="row">
			@php $courses = LmsController::index(); @endphp
			@foreach($courses as $course)
				@php $color = loadColor($course->id); @endphp
				<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
					<div class="card flip-card" style="background-color:{{$color}}">
						<div class="card-body">
							<div class="flip-card-inner">
								<div class="flip-card-front">
									<h3 class="text-white">{{$course->name}}</h3>
									<img src="{{$course->thumb}}" alt="Avatar" style="width:50px;">
								</div>
								<div class="flip-card-back">
									<div class="row">
										<div class="col-xs-6 col-sm-6 pad-1">
											<br>
										</div>
									</div>
									<div class=<div class="d-flex justify-content-end pad-1">
										<a href="lms/s/{{$course->id}}" class="text-danger">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
												<path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			@endforeach
			</div>
			
		</div>
	</div>
@endsection	
@section('footer') 

@endsection
