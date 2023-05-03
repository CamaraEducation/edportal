@php
	$video = $videos = VideosControl::get($id);
	LogsController::log_video_view($id);
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
					<div class="col-lg-8">
						<div class="card">
							<div class="profile card-body px-3 pt-3 pb-0">
								<div class="video-img style-1">
									<div class="ratio ratio-16x9">
										<video class="video-js vjs-theme-fantasy"
											id="my-video"
											class="video-js"
											controls
											preload="auto"
											width="100%"
											height="100%"
											poster="{{$video['thumbnail']}}"
											data-setup="{}"
											>
											<source src="{{$video['source']}}" type="video/mp4" />
											<p class="vjs-no-js">
											To view this video please enable JavaScript, and consider upgrading to a
											web browser that
											<a href="https://videojs.com/html5-video-support/" target="_blank"
												>supports HTML5 video</a
											>
											</p>
										</video>
									</div>	
								</div>
		
							</div>
						</div>
					</div>

					<div class="col-xl-4 col-md-12">
								<div class="card">
									<div class="card-header">
										<div class="profile-statistics">
											<div class="pt-2 pl-2">
												<h3>
													<span class="text-start text-primary">Video Statistic</span>
													<span class="end">{{VideosControl::views($id)}}
														<span class="font-12 text-muted">Views</span>
													</span>
												</h3>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div class="profile-tab">
											<div class="custom-tab-1">
												<!--ul class="nav nav-tabs">
													<li class="nav-item"><a href="#about-me" data-toggle="tab" class="nav-link active show">Description</a>
													</li>
													<!--li class="nav-item"><a href="#profile-settings" data-toggle="tab" class="nav-link">Setting</a>
													</li->
												</ul-->
												<div class="tab-content">
													<div id="about-me" class="tab-pane fade active show">
														<div class="profile-about-me">
															<div class="pt-4 border-bottom-1 pb-3">
																{{$video['description']}}
															</div>
														</div>
													</div>
													<div id="profile-settings" class="tab-pane fade">
														<div class="pt-3">
															<div class="settings-form">
																<h4 class="text-primary">Account Setting</h4>
																<form>
																	<div class="form-row">
																		<div class="form-group col-md-6">
																			<label>Email</label>
																			<input type="email" placeholder="Email" class="form-control">
																		</div>
																		<div class="form-group col-md-6">
																			<label>Password</label>
																			<input type="password" placeholder="Password" class="form-control">
																		</div>
																	</div>
																	<div class="form-group">
																		<label>Address</label>
																		<input type="text" placeholder="1234 Main St" class="form-control">
																	</div>
																	<div class="form-group">
																		<label>Address 2</label>
																		<input type="text" placeholder="Apartment, studio, or floor" class="form-control">
																	</div>
																	<div class="form-row">
																		<div class="form-group col-md-6">
																			<label>City</label>
																			<input type="text" class="form-control">
																		</div>
																		<div class="form-group col-md-4">
																			<label>State</label>
																			<select class="form-control default-select" id="inputState">
																				<option selected="">Choose...</option>
																				<option>Option 1</option>
																				<option>Option 2</option>
																				<option>Option 3</option>
																			</select>
																		</div>
																		<div class="form-group col-md-2">
																			<label>Zip</label>
																			<input type="text" class="form-control">
																		</div>
																	</div>
																	<div class="form-group">
																		<div class="custom-control custom-checkbox">
																			<input type="checkbox" class="custom-control-input" id="gridCheck">
																			<label class="custom-control-label" for="gridCheck"> Check me out</label>
																		</div>
																	</div>
																	<button class="btn btn-primary" type="submit">Sign
																		in</button>
																</form>
															</div>
														</div>
													</div>
												</div>
											</div>
											<!-- Modal -->
											<div class="modal fade" id="replyModal">
												<div class="modal-dialog modal-dialog-centered" role="document">
													<div class="modal-content">
														<div class="modal-header">
															<h5 class="modal-title">Post Reply</h5>
															<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
														</div>
														<div class="modal-body">
															<form>
																<textarea class="form-control" rows="4">Message</textarea>
															</form>
														</div>
														<div class="modal-footer">
															<button type="button" class="btn btn-danger light" data-dismiss="modal">Close</button>
															<button type="button" class="btn btn-primary">Reply</button>
														</div>
													</div>
												</div>
											</div>
										</div>
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
		function log_video_activity(action){

				var action	  = action;
				var user_id	  = "{{$_SESSION['id']}}";
				var video_id  = "{{$id}}";

				//alert(uri +' | '+ app_id +' | '+ user_id);
				$.post("/test.php", {
					action	: action,
					user_id	: user_id,
					video_id : video_id
				},
				function(data, status){
					toastr.success(data, "Activity Recorded", {
						positionClass: "toast-top-right", timeOut: 5e3, closeButton: !0, debug: !1,
						newestOnTop: !0, progressBar: !0, preventDuplicates: !0, onclick: null,
						showDuration: "300", hideDuration: "1000", extendedTimeOut: "1000", showEasing: "swing",
						hideEasing: "linear", showMethod: "fadeIn", hideMethod: "fadeOut", tapToDismiss: !1
					});
				});
			}
	</script>
@endsection