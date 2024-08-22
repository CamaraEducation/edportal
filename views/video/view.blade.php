@php
	$video = VideosControl::get($id);
	LogsController::log_video_view($id);
	$videoTimestamps = json_decode($video['timestamps']);
@endphp
@extends('layout.app')
@section('title', $title)
@section('header')    
	@css('/assets/vendor/toastr/css/toastr.min')
	@css('/assets/plugins/videojs/videojs.min')
	@css('/assets/plugins/videojs/videojs-fantasy.min')
@endsection
@section('content')
	<div class="content-body">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-8 col-sm-12">
						<div>
							<div class="p-1">
								<div class="video-img style-1">
									<div class="ratio ratio-16x9">
										<video class="video-js vjs-theme-fantasy"
											id="my-video" class="video-js" controls preload="auto"
											width="100%" height="100%" poster="{{$video['thumbnail']}}" data-setup="{}">
											<source src="{{$video['source']}}" type="video/mp4" />
											<p class="vjs-no-js">
												To view this video please enable JavaScript, and consider upgrading to a
												web browser that
												<a href="https://videojs.com/html5-video-support/" target="_blank">
													supports HTML5 video
												</a>
											</p>
										</video>
									</div>	
								</div>
		
							</div>
						</div>
					</div>

					<div class="col-md-4 col-sm-12">
						<div class="card">
							<div class="card-header">
								<h4 class="mt-2 ps-1">Timestamps</h4>
								@if($_SESSION['id'] == $video['author'] or $_SESSION['user_role'] == 1)
									<a href="/edit/video/{{$video['id']}}/{{str_replace(' ', '-', $video['title'])}}" class="btn btn-light">
										Edit timestamps
									</a>
								@endif
							</div>
							<div class="card-body p-2 row">
								<div>
									@if(is_array($videoTimestamps) and count($videoTimestamps))
										@foreach ($videoTimestamps as $timestamp)
											<div class="col-12 border-1 position-relative border rounded mb-2">
												<div class="row stamp-group form-group" data-index="0">
													<div class="col-8">
														<button type="button" class="btn playStamp w-100 text-start" data-video-stamp="{{$timestamp->time}}"  style="position: absolute;left: 12px;">
															<span class="fw-bold">{{$timestamp->title}}</span> <br>
															<span>{{ \Carbon\Carbon::parse(floatval($timestamp->time))->format('H:i:s') }}</span>
														</button>
													</div>
													<div class="col-4">
														<img src="{{$timestamp->thumbnail}}" class="img-fluid btn mt-3 p-0 w-100 playStamp" data-video-stamp="{{$timestamp->time}}" alt="thumbnail">
													</div>
												</div>

											</div>
										@endforeach
									@else
										<div class="col-12 d-grid" style="min-height:350px">
											<div class="d-flex justify-content-center align-items-center">
												<div>
													<h4 class="text-center">
														<i class="fa fa-clock-o fa-5x text-muted"></i><br>
														No Timestamps
													</h4>
													<p class="text-center">No timestamps have been added to this video yet.</p>
												</div>
											</div>
										</div>
									@endif
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</div>
@endsection
@section('footer')
	@js('/assets/plugins/videojs/video.min')
	@js('/assets/vendor/toastr/js/toastr.min.js')
	<script>
		
		$(document).ready(function(){
			$('.playStamp').on('click', function(){
				let time = $(this).data('video-stamp');
				let videoPlayer = videojs('my-video'); // Use the Video.js instance

				videoPlayer.currentTime(time);
				videoPlayer.play();
			});
		});


	</script>
@endsection