@php
	$doc = DocsControl::get($id);
@endphp
@extends('layout.app')
@section('title', $doc['name'])
@section('header')
	<style>
		div#container1 {
			height: 100vh;
		}
	</style>

@endsection
@section('content')
	<div class="content-body">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="profile card card-body px-3 pt-3 pb-0">
							<div class="container" id="container1">

							</div>							  
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-12">
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
@endsection
@section('footer')
	@js('/assets/vendor/flipjs/js/jquery.min.js')
    @js('/assets/vendor/flipjs/js/html2canvas.min.js')
    @js('/assets/vendor/flipjs/js/pdf.worker.js')
    @js('/assets/vendor/flipjs/js/three.min.js')
    @js('/assets/vendor/flipjs/js/pdf.min.js')
    @js('/assets/vendor/flipjs/js/3dflipbook.min.js')

	<script type="text/javascript">

		var template = {
		  html: '/assets/vendor/flipjs/templates/book.html',
		  links: [{
			rel: 'stylesheet',
			href: '/assets/vendor/flipjs/css/font-awesome.min.css'
		  }],
		  styles: [
			'/assets/vendor/flipjs/css/short-black-book-view.css'
		  ],
		  script: '/assets/vendor/flipjs/js/default-book-view.js'
		};
  
		// Book 1
		$('#container1').FlipBook({
		  pdf: '{{$doc["source"]}}',
		  template: template
		});
		
  
	</script>
@endsection