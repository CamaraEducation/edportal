@extends('layout.app')
@section('title', 'Camara EdPortal')
@section('header')
@css('/assets/plugins/pills/pills.css')
@css('/assets/plugins/videojs/videojs.min')
@css('/assets/plugins/videojs/videojs-fantasy.min')
@endsection
@section('content')
	<div class="content-body">
		<div class="container-fluid container-lms">
			
            <div class="row">
                <div class="col-md-8 card card-body">
                    <video
                        id="my-video"
                        class="video-js vjs-theme-fantasy"
                        controls
                        preload="auto"
                        width="640"
                        poster="/upload/course/166676599841426.jpg"
                        data-setup="{}"
                    >

                    <source src="/upload/course/166676599825518.mkv" type="video/mp4" />
                    <!--source src="MY_VIDEO.webm" type="video/webm" /-->
                    <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a
                        web browser that support HTML5 video
                    </p>
                    </video>
                </div>
                <div class="col-md-4">description</div>
            </div>

            
            <div class="row">
                <div class="col-md-12">
                    <div class="tabs">
                        <input type="radio" id="radio-1" name="tabs" checked />
                        <label class="tab" for="radio-1">Upcoming</label>
                        <input type="radio" id="radio-2" name="tabs" />
                        <label class="tab" for="radio-2">Development</label>
                        <input type="radio" id="radio-3" name="tabs" />
                        <label class="tab" for="radio-3">Completed</label>
                        <span class="glider"></span>
                    </div>
                </div>
            </div>
			
		</div>
	</div>
@endsection	
@section('footer') 
@js('/assets/plugins/videojs/video.min')
@endsection
