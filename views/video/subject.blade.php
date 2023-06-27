@extends('layout.app')
@section('title', 'Video Category')
@section('header')
<style>
	.subject-card {
		height: 200px;
		background-size: cover !important;
		background-position: center!important;
		background-repeat: no-repeat !important;
	}

	.subject-banner{
		width: 97%;
		background-color:white;
		height: 70px;
		position: absolute;
		bottom: 0;
	}

	.subject-img{
		width: 60px;
		position: absolute;
		bottom: 4px;
	}

	.subject-title{
		position: absolute;
		bottom: 4px;
	}
</style>
@endsection

@section('content')
	<div class="content-body">
		<div class="container-fluid">
			<div class="row">
				@foreach(SubjectsController::content('vid') as $subjects)
				@php $id = $subjects['category']; $subject = SubjectsController::get($id); @endphp
				<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
					<div class="subject-card" style="background:url({{$subject['cover']}})">
						<a href="/video/{{$subject['id']}}/{{str_replace(' ', '-', $subject['name'])}}">
							<div class="subject-banner row">
								<div class="col-md-3 col-sm-3 col-xs-3">
									<img class="subject-img" src="{{$subject['thumb']}}" alt="">
								</div>
								<div class="col-md-9 col-sm-9 col-xs-9">
									<h4 class="subject-title text-primary">{{$subject['name']}}</h4>
								</div>
							</div>
						</a>
					</div>
				</div>
				@endforeach

				<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
					<div class="subject-card" style="background:url(/upload/video/cover/ict.jpg)">
						<a href="/view/video/ict">
							<div class="subject-banner row">
								<div class="col-md-3 col-sm-3 col-xs-3">
									<img class="subject-img" src="/upload/subject/thumb/def.jpg" alt="">
								</div>
								<div class="col-md-9 col-sm-9 col-xs-9">
									<h4 class="subject-title text-primary">ICT Tutorials</h4>
								</div>
							</div>
						</a>
					</div>
				</div>

				<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
					<div class="subject-card" style="background:url(/upload/video/cover/ubongo.png)">
						<a href="/view/video/ubongo">
							<div class="subject-banner row">
								<div class="col-md-3 col-sm-3 col-xs-3">
									<img class="subject-img" src="/upload/subject/thumb/def.jpg" alt="">
								</div>
								<div class="col-md-9 col-sm-9 col-xs-9">
									<h4 class="subject-title text-primary">Ubongo Kids</h4>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>  
@endsection

@section('footer')

@endsection