@php
	$video = $videos = VideosControl::get($id);
	LogsController::log_video_view($id);
@endphp
@extends('layout.app')
@section('title', $title)
@section('header')    
	@css('/assets/vendor/toastr/css/toastr.min')
@endsection
@section('content')
	<div class="content-body">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="profile card card-body px-3 pt-3 pb-0">
							<div class="video-container" id="video-container">
								<div class="playback-animation" id="playback-animation">
								  <svg class="playback-icons">
									<use class="hidden" href="#play-icon"></use>
									<use href="#pause"></use>
								  </svg>
								</div>
								<center>
									<video controls class="video" id="video" preload="metadata" poster="{{$video['thumbnail']}}" autoplay>
										<source src="{{$video['source']}} " type="video/mp4" /> 
									</video>
								</center>
						  
								<div class="video-controls hidden" id="video-controls">
								  <div class="video-progress">
									<progress id="progress-bar" value="0" min="0"></progress>
									<input class="seek" id="seek" value="0" min="0" type="range" step="1">
									<div class="seek-tooltip" id="seek-tooltip">00:00</div>
								  </div>
						  
								  <div class="bottom-controls">
									<div class="left-controls">
									  <button data-title="Play (k)" id="play">
										<svg class="playback-icons">
										  <use href="#play-icon"></use>
										  <use class="hidden" href="#pause"></use>
										</svg>
									  </button>
						  
									  <div class="volume-controls">
										<button data-title="Mute (m)" class="volume-button" id="volume-button">
										  <svg>
											<use class="hidden" href="#volume-mute"></use>
											<use class="hidden" href="#volume-low"></use>
											<use href="#volume-high"></use>
										  </svg>
										</button>
						  
										<input class="volume" id="volume" value="1"
										data-mute="0.5" type="range" max="1" min="0" step="0.01">
									  </div>
						  
									  <div class="time">
										<time id="time-elapsed">00:00</time>
										<span> / </span>
										<time id="duration">00:00</time>
									  </div>
									</div>
						  
									<div class="right-controls">
									  <button data-title="PIP (p)" class="pip-button" id="pip-button">
										<svg>
										  <use href="#pip"></use>
										</svg>
									  </button>
									  <button data-title="Full screen (f)" class="fullscreen-button" id="fullscreen-button">
										<svg>
										  <use href="#fullscreen"></use>
										  <use href="#fullscreen-exit" class="hidden"></use>
										</svg>
									  </button>
									</div>
								  </div>
								</div>
							  </div>
							</div>
						  
							<svg style="display: none">
							  <defs>
								<symbol id="pause" viewBox="0 0 24 24">
								  <path d="M14.016 5.016h3.984v13.969h-3.984v-13.969zM6 18.984v-13.969h3.984v13.969h-3.984z"></path>
								</symbol>
						  
								<symbol id="play-icon" viewBox="0 0 24 24">
								  <path d="M8.016 5.016l10.969 6.984-10.969 6.984v-13.969z"></path>
								</symbol>
						  
								<symbol id="volume-high" viewBox="0 0 24 24">
								<path d="M14.016 3.234q3.047 0.656 5.016 3.117t1.969 5.648-1.969 5.648-5.016 3.117v-2.063q2.203-0.656 3.586-2.484t1.383-4.219-1.383-4.219-3.586-2.484v-2.063zM16.5 12q0 2.813-2.484 4.031v-8.063q1.031 0.516 1.758 1.688t0.727 2.344zM3 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6z"></path>
								</symbol>
						  
								<symbol id="volume-low" viewBox="0 0 24 24">
								<path d="M5.016 9h3.984l5.016-5.016v16.031l-5.016-5.016h-3.984v-6zM18.516 12q0 2.766-2.531 4.031v-8.063q1.031 0.516 1.781 1.711t0.75 2.32z"></path>
								</symbol>
						  
								<symbol id="volume-mute" viewBox="0 0 24 24">
								<path d="M12 3.984v4.219l-2.109-2.109zM4.266 3l16.734 16.734-1.266 1.266-2.063-2.063q-1.547 1.313-3.656 1.828v-2.063q1.172-0.328 2.25-1.172l-4.266-4.266v6.75l-5.016-5.016h-3.984v-6h4.734l-4.734-4.734zM18.984 12q0-2.391-1.383-4.219t-3.586-2.484v-2.063q3.047 0.656 5.016 3.117t1.969 5.648q0 2.203-1.031 4.172l-1.5-1.547q0.516-1.266 0.516-2.625zM16.5 12q0 0.422-0.047 0.609l-2.438-2.438v-2.203q1.031 0.516 1.758 1.688t0.727 2.344z"></path>
								</symbol>
						  
								<symbol id="fullscreen" viewBox="0 0 24 24">
								<path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
								</symbol>
						  
								<symbol id="fullscreen-exit" viewBox="0 0 24 24">
								<path d="M15.984 8.016h3v1.969h-4.969v-4.969h1.969v3zM14.016 18.984v-4.969h4.969v1.969h-3v3h-1.969zM8.016 8.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 15.984v-1.969h4.969v4.969h-1.969v-3h-3z"></path>
								</symbol>
						  
								<symbol id="pip" viewBox="0 0 24 24">
								<path d="M21 19.031v-14.063h-18v14.063h18zM23.016 18.984q0 0.797-0.609 1.406t-1.406 0.609h-18q-0.797 0-1.406-0.609t-0.609-1.406v-14.016q0-0.797 0.609-1.383t1.406-0.586h18q0.797 0 1.406 0.586t0.609 1.383v14.016zM18.984 11.016v6h-7.969v-6h7.969z"></path>
								</symbol>
							  </defs>
							</svg>
							  
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-4">
						<div class="row">
							<div class="col-xl-12">
								<div class="card">
									<div class="card-body">
										<div class="profile-statistics">
											<div class="text-center">
												<h4 class="text-primary mb-0 pad-1">Video Statistic</h4>
												<div class="row">
													<div class="col">
														<h3 class="m-b-0">{{VideosControl::video_activity($id)}}</h3>
														<span>Bookmarks</span>
													</div>
													<div class="col">
														<h3 class="m-b-0">{{VideosControl::views($id)}}</h3>
														<span>ViewS</span>
													</div>
												</div>
												<div class="mt-4">
													@if (VideosControl::video_bookmark($id) == 0)
														<a href="javascript:void(0);" class="btn btn-secondary mb-1" onclick="return log_video_activity('save')">
															<i class="flaticon-381-bookmark"></i> Bookmark
														</a>
													@else
														<a href="javascript:void(0);" class="btn btn-primary mb-1" onclick="return log_video_activity('dsave')">
															<i class="flaticon-381-bookmark"></i> Saved
														</a>
													@endif
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-8">
						<div class="card">
							<div class="card-body">
								<div class="profile-tab">
									<div class="custom-tab-1">
										<ul class="nav nav-tabs">
											<li class="nav-item"><a href="#about-me" data-toggle="tab" class="nav-link active show">Description</a>
											</li>
											<!--li class="nav-item"><a href="#profile-settings" data-toggle="tab" class="nav-link">Setting</a>
											</li-->
										</ul>
										<div class="tab-content">
											<div id="about-me" class="tab-pane fade active show">
												<div class="profile-about-me">
													<div class="pt-4 border-bottom-1 pb-3">
														<h4 class="text-primary">Application Description</h4>
														<p class="mb-2">big bunny</p>
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
@endsection
@section('footer')
	@js('/assets/js/videos.js')
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