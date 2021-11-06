@php $title = str_replace("-"," ",$title); @endphp
@extends('layout.app')
@section('title', $title)
@section('header')   
@endsection
@section('content')
    <div class="content-body">
			<div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="profile card card-body px-3 pt-3 pb-0">
                            <figure id="videoContainer" data-fullscreen="false">
                                <video id="video" preload="metadata" poster="img/poster.jpg">
                                    <source src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" type="video/mp4">
                                    <source src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.webm" type="video/webm">
                                    <source src="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.ogg" type="video/ogg">
                                    <!-- Flash fallback -->
                                    <object type="application/x-shockwave-flash" data="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4" width="1024" height="576">
                                        <param name="movie" value="flash-player.swf?videoUrl=http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">
                                        <param name="allowfullscreen" value="true">
                                        <param name="wmode" value="transparent">
                                        <param name="flashvars" value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?http://iandevlin.github.io/mdn/video-player/videoUrl=video/tears-of-steel-battle-clip-medium.mp4">
                                        <img alt="Tears of Steel poster image" src="img/poster.jpg" width="1024" height="428" title="No video playback possible, please download the video from the link below">
                                    </object>
                                    <!-- Offer download -->
                                    <a href="http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.mp4">Download MP4</a>
                                </video>
                                <div id="video-controls" class="controls" data-state="visible">
                                    <button id="playpause" type="button" data-state="play">Play/Pause</button>
                                    <button id="stop" type="button" data-state="stop">Stop</button>
                                    <div class="progress">
                                        <progress id="progress" value="0" min="0" max="70.542222">
                                            <span id="progress-bar" style="width: 0%;"></span>
                                        </progress>
                                    </div>
                                    <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
                                    <button id="volinc" type="button" data-state="volup">Vol+</button>
                                    <button id="voldec" type="button" data-state="voldown">Vol-</button>
                                    <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>
                                </div>
                                <figcaption>
                                    © Blender Foundation | <a href="http://mango.blender.org">mango.blender.org</a>
                                </figcaption>
                            </figure>
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
												<h4 class="text-primary mb-0 pad-1">Visitor Statistic</h4>
												<div class="row">
													<div class="col">
														<h3 class="m-b-0">1500</h3><span>All Time</span>
													</div>
													<div class="col">
														<h3 class="m-b-0">340</h3><span>This Month</span>
													</div>
													<div class="col">
														<h3 class="m-b-0">57</h3><span>Today</span>
													</div>
												</div>
												<div class="mt-4"> 
													<a href="javascript:void(0);" class="btn btn-primary mb-1">Visit App</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!--div class="col-xl-12">
								<div class="card">
									<div class="card-body">
										<div class="profile-news">
											<h5 class="text-primary d-inline">Related Projects</h5>
											<div class="media pt-3 pb-3">
												<img src="images/profile/5.jpg" alt="image" class="mr-3 rounded" width="75">
												<div class="media-body">
													<h5 class="m-b-5"><a href="post-details.html" class="text-black">Collection of textile samples</a></h5>
													<p class="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
												</div>
											</div>
											<div class="media pt-3 pb-3">
												<img src="images/profile/6.jpg" alt="image" class="mr-3 rounded" width="75">
												<div class="media-body">
													<h5 class="m-b-5"><a href="post-details.html" class="text-black">Collection of textile samples</a></h5>
													<p class="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
												</div>
											</div>
											<div class="media pt-3 pb-3">
												<img src="images/profile/7.jpg" alt="image" class="mr-3 rounded" width="75">
												<div class="media-body">
													<h5 class="m-b-5"><a href="post-details.html" class="text-black">Collection of textile samples</a></h5>
													<p class="mb-0">I shared this on my fb wall a few months back, and I thought.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div-->
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
                                            <li class="nav-item"><a href="#profile-settings" data-toggle="tab" class="nav-link">Setting</a>
                                            </li>
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
    <script src="/assets/js/video.js"></script>
@endsection