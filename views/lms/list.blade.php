@php $subject = SubjectsController::get($id); @endphp
@extends('layout.app')
@section('title', 'Camara EdPortal')
@section('header')
<style>
    .photo-content .cover-photo {
        background: url({{$subject['cover']}});
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
                <div class="col-lg-12">
                    <div class="profile card card-body px-3 pt-3 pb-0">
                        <div class="profile-head">
                            <div class="photo-content">
                                <div class="cover-photo"></div>
                            </div>
                            <div class="profile-info">
                                <div class="profile-details">
                                    <div class="profile-name px-3 pt-2">
                                        <h4 class="text-primary mb-0">{{$app['name']}}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

            @if(LmsController::count_course($id)->courses > 0):
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
                                                <a href="lms/{{$course->id}}" class="btn-light btn-sm btn-block ">explore</a>	
                                            </div>
                                        </div>
                                        <div class=<div class="d-flex justify-content-end pad-1">
                                            <a href="lms/s/{{$course->id}}" class="text-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
                @else
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="alert alert-danger" role="alert">
                                    <h4 class="alert-heading">No course found!</h4>
                                    <p>There is no course available for this subject.</p>
                                    <hr>
                                    <p class="mb-0">Please contact your administrator.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            @endif
			</div>
			
			
		</div>
	</div>
@endsection	
@section('footer') 

@endsection