@extends('layout.app')
@section('title', 'Upload video')
@section('header')
    <link rel="stylesheet" href="/assets/vendor/toastr/css/toastr.min.css">
@endsection
@section('content')
	<div class="content-body">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12 col-lg-12">
					<div class="card">
						<div class="card-header">
							<h3 class="card-title text-primary">Upload a new Video</h3>
						</div>
						<div class="card-body">
							<div class="basic-form">
								<form id="add_video" name="add_video" action="/create/video" method="POST" enctype='multipart/form-data' onsubmit="return submitted()">
									<div class="form-row">
										<div class="form-group col-md-6">
											<label>Title</label>
											<input type="text" name="title" id="title" class="form-control" placeholder="video title i.e. Big buck bunny" >
										</div>
										<div class="form-group col-md-6">
											<label>Subject</label>
											<select name="category" id="category" class="form-control default-select" >
												<option value="" hidden>select subject category</option>    
                                                @php $categories = Category::fetch() @endphp
                                                @foreach ($categories as $category)
                                                    <option value="{{$category['id']}}">{{$category['name']}}</option>
                                                @endforeach
											</select>
										</div>
										<div class="form-group col-md-6">
											<label>Class</label>
											<select name="class" id="class" class="form-control default-select" >
												<option value="" hidden>select class</option>    
                                                @php $categories = Category::fetch('class') @endphp
                                                @foreach ($categories as $category)
                                                    <option value="{{$category['id']}}">{{$category['name']}}</option>
                                                @endforeach
											</select>
										</div>
										<div class="form-group col-md-6">
											<label>Thumbnail / Poster</label>
											<input type="file" name="thumbnail" id="thumbnail" class="form-control" accept="image/*" required>
										</div>
									</div>

                                    <div class="form-row">
										<div class="form-group col-md-12">
											<label>Video File</label>
											<input type="file" name="video" id="videoUpload" class="form-control" required accept="video/*">
										</div>
									</div>

									<div class="form-row">
										<div class="form-group col">
											<label> Description</label>
											<textarea class="form-control" name="description" rows="4" id="description" ></textarea>
										</div>
                                        <div class="form-group col-3" style="display:none" id="preview">
                                            <video width="100%" autoplay class="preview">
                                                Your browser does not support the video tag.
                                            </video>
                                        </div>
									</div>
									<button type="submit" id="submit" class="btn btn-primary">Upload</button>
								<form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
@section('footer')
	<script src="/assets/vendor/toastr/js/toastr.min.js"></script>
	<script>
		function submitted(){
			toastr.success("Please stay put the Application is being added to the system", "Please Wait", {
				positionClass: "toast-bottom-right", timeOut: 5e3, closeButton: !0, debug: !1,
				newestOnTop: !0, progressBar: !0, preventDuplicates: !0, onclick: null,
				showDuration: "300", hideDuration: "1000", extendedTimeOut: "1000", showEasing: "swing",
				hideEasing: "linear", showMethod: "fadeIn", hideMethod: "fadeOut", tapToDismiss: !1
		});	
		}

        document.getElementById("videoUpload").onchange = function(event) {
            let file = event.target.files[0];
            let blobURL = URL.createObjectURL(file);
            document.querySelector("#preview").style.display = 'block';
            document.querySelector("video").src = blobURL;
        }
	</script>
@endsection