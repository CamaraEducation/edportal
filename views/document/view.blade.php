@php 
	$doc = DocsControl::get($id); 
	LogsController::log_doc_visit($id);
@endphp
@extends('layout.app')
@section('title', $doc['name'])

@section('header')
	<link rel="stylesheet" href="https://previews.customer.envatousercontent.com/files/308385206/css/animate.min.css" type="text/css">
@endsection

@section('content')
	<div class="content-body">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="profile card card-body px-3 pt-3 pb-0">
							<div class="container">
								<div id='page-trigger' class="text-center">
									<div class="service-box" style="padding-bottom: 30px">
										<a href="#" class="btn btn-primary">Read the Book</a>
									</div>
								</div>
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
											<!--li class="nav-item"><a href="#profile-settings" data-toggle="tab" class="nav-link">Statistics</a>
											</li-->
										</ul>
										<div class="tab-content">
											<div id="about-me" class="tab-pane fade active show">
												<div class="profile-about-me">
													<div class="pt-4 border-bottom-1 pb-3">
														<h4 class="text-primary">{{$doc['name']}}</h4>
														<p class="mb-2">{{$doc['description']}} </p>
													</div>
												</div>
											</div>
											<div id="profile-settings" class="tab-pane fade">
												<div class="pt-3">
													...
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

			<div id='page'></div>
		</div>
@endsection
@section('footer')
		<!-- wow flip plugin stylesheet -->
		@js('/assets/vendor/flipper/jquery.easing.min.js')
		@js('/assets/vendor/flipper/jquery.fittext.js')
		@js('/assets/vendor/flipper/wow.min.js')
		@css('/assets/vendor/flipper/wow_book.css')

		<style>
			.wowbook-right .wowbook-gutter-shadow {
			background-image: url("/assets/vendor/flipper/gutter_shadow_right.png");
			background-position: 0 0;
			width: 75px;
			}
			.wowbook-left .wowbook-gutter-shadow {
			background-image: url("/assets/vendor/flipper/gutter_shadow_left.png");
			opacity: 0.5;
			width: 60px;
			}
			.wowbook-control-currentPage {
			font-family: "Segoe UI",Helvetica,Arial,sans-serif;
			}
		</style>

	
		@js('/assets/vendor/flipper/pdf.combined.min.js')
		@js('/assets/vendor/flipper/wow_book.min.js')
		
		<script type="text/javascript">
			$(function(){
			
			    function fullscreenErrorHandler(){
			        if (self!=top) return "The frame is blocking full screen mode. Click on 'remove frame' button above and try to go full screen again."
			    }
			
			    var optionspage = {
			         height   : 1024
			        ,width    : 725*2
			        // ,maxWidth : 800
			        // ,maxHeight : 400
			        ,pageNumbers: false
			
			        ,pdf: "{{$doc['source']}}"
			        ,pdfFind: true
			        ,pdfTextSelectable: true
			
			        ,lightbox : "#page-trigger"
			        ,lightboxClass : "lightbox-pdf"
			        ,centeredWhenClosed : true
			        ,hardcovers : true
			        ,curl: false
			        ,toolbar: "lastLeft, left, currentPage, right, lastRight, find, toc, zoomin, zoomout, fullscreen"
			        //,thumbnailsPosition : 'bottom'
			        ,responsiveHandleWidth : 50
			        ,onFullscreenError: fullscreenErrorHandler
			    };
			
			    var books = {
			        "#page" : optionspage
			    };

			    $("#page-trigger").on("click",function(){
			        buildBook( "#"+this.id.replace("-trigger", "") );
			    })
			
			    function buildBook( elem ){
			        var book=$.wowBook(elem);
			        if (!book) {
			            $(elem).wowBook( books[elem] );
			            book=$.wowBook(elem);
			        }
			        // book.opts.onHideLightbox = function(){
			        //     setTimeout( function(){ book.destroy(); }, 1000);
			        // }
			        book.showLightbox();
			    }
			});
		</script>
@endsection