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

	<style>
		input[type=range]:focus {
			background: #bbbbbb;
		}
	</style>
@endsection
@section('content')
	<div class="content-body">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="card">
							<div class="profile card-body px-3 pt-3 pb-0">
								<div class="video-img style-1">
									<video id="timestampGen" class="d-none" src="{{$video['source']}}"></video>
									<div class="ratio ratio-16x9" style="max-height: calc(100vh - 10rem)">
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

					<div class="col-md-12">

						<div class="card">
							<div class="card-body">
								<form id="timestampForm" class="mt-4">
									@if(is_array($videoTimestamps) and count($videoTimestamps))

										@foreach ($videoTimestamps as $timestamp)

											<div id="timestampContainer">
												<div class="row mb-3 stamp-group form-group" data-index="0">
													<div class="col-md-8 col-sm-12">
														<button type="button" class="btn btn-danger" id="removeTimestampButton" style="position: absolute;right: 12px;top: 4px;">
															<i class="fa fa-trash"></i>
														</button>
														<input type="text" class="form-control mb-2 stamp-title" placeholder="Enter Title" required value="{{$timestamp->title}}">
														<input type="range" class="custom-range stamp-slider" min="0" value="{{$timestamp->time}}" step="0.1">
														<button type="button" class="btn btn-info timeInMin">
															{{ \Carbon\Carbon::parse(floatval($timestamp->time))->format('H:i:s') }}
														</button>
													</div>
													<div class="col-md-4 col-sm-12">
														<img src="{{$timestamp->thumbnail}}" class="img-fluid stamp-preview" alt="Preview">
													</div>
												</div>
											</div>
											
										@endforeach

									@else
										<div id="timestampContainer">
											<div class="row mb-3 stamp-group form-group" data-index="0">
												<div class="col-md-8 col-sm-12">
													<button type="button" class="btn btn-danger" id="removeTimestampButton" style="position: absolute;right: 12px;top: 4px;">
														<i class="fa fa-trash"></i>
													</button>
													<input type="text" class="form-control mb-2 stamp-title" placeholder="Enter Title" required>
													<input type="range" class="custom-range stamp-slider" min="0" value="0" step="0.1">
													<button type="button" class="btn btn-info w-50 timeInMin">00:00:00</button>
												</div>
												<div class="col-md-4 col-sm-12">
													<img src="" class="img-fluid stamp-preview" alt="Preview" style="display:none;">
												</div>
											</div>
										</div>
									@endif

									<button type="button" class="btn btn-secondary" id="addTimestampButton">Add Another Timestamp</button>
        							<button type="button" class="btn btn-primary" id="saveTimestampsButton">Save Timestamps</button>
								</form>
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
		
		// get video duration in seconds and set it to the max value of the range input
		const videoLength = document.getElementById('my-video');
		videoLength.onloadedmetadata = function() {
			$('.stamp-slider').attr('max', videoLength.duration);
		};

		// delete timestamp
		$(document).on('click', '#removeTimestampButton', function() {
			$(this).closest('.stamp-group').remove();
		});

		// add timestamp
		$(document).on('click', '#addTimestampButton', function() {
			var index = $('.stamp-group').length;
			var newStamp = `
				<div class="row mb-3 stamp-group form-group" data-index="${index}">
					<div class="col-md-8 col-sm-12">
						<button type="button" class="btn btn-danger" id="removeTimestampButton" style="position: absolute;right: 12px;top: 4px;">
							<i class="fa fa-trash"></i>
						</button>
						<input type="text" class="form-control mb-2 stamp-title" placeholder="Enter Title" required>
						<input type="range" class="custom-range stamp-slider" min="0" max="${videoLength.duration}" value="0" step="0.1">
						<button type="button" class="btn btn-info w-50 timeInMin">00:00:00</button>
					</div>
					<div class="col-md-4 col-sm-12">
						<img src="/assets/img/loading.gif" class="img-fluid stamp-preview" alt="Preview">
					</div>
				</div>
			`
			// newStamp = newStamp.replace(/0/g, index);
			$('#timestampContainer').append(newStamp);
		});

		// listen to range input change event
		$(document).on('input', '.stamp-slider', function() {
			var time = $(this).val();
			var index = $(this).closest('.stamp-group').data('index');
			var preview = $(this).closest('.stamp-group').find('.stamp-preview');
			preview.show();
			preview.attr('src', '/assets/img/loading.gif');
			
			// buffer thumbnail from timestampGen video
			var video = document.getElementById('timestampGen');
			video.currentTime = time;
			video.onseeked = function() {
				var canvas = document.createElement('canvas');
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
				var ctx = canvas.getContext('2d');
				ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
				preview.attr('src', canvas.toDataURL());
			};
			
			// set the time in human readable format
			let readableTime = sec2HumanTime(time);
			$(this).closest('.stamp-group').find('.timeInMin').text(readableTime);
		});

		// save timestamps: [...[title: string, time: number, thumbnail: string]]
		$(document).on('click', '#saveTimestampsButton', function() {
			const timestamps = [];
			$('.stamp-group').each(function() {
				var title = $(this).find('.stamp-title').val();
				var time = $(this).find('.stamp-slider').val();

				// validation
				if (!title || time == 0) {
					toastr.error('Please fill all fields');
					return;
				}

				var thumbnail = $(this).find('.stamp-preview').attr('src');
				timestamps.push({title, time, thumbnail});
			});
			
			// save to db
			$.ajax({
				url: '/add/video/timestamps',
				type: 'POST',
				data: {
					videoId: {{$id}},
					timestamps: timestamps
				},
				success: function(response) {
					if(response.status == 'success') {
						toastr.success('Timestamps saved successfully');
					} else {
						toastr.error('An error occurred');
						console.log(response);
					}
				},
				error: function(error) {
					toastr.error('An error occurred');
				}
			});
		});

		function sec2HumanTime(seconds) {
			var date = new Date(null);
			date.setSeconds(seconds);
			return date.toISOString().substr(11, 8);
		}

	</script>
@endsection