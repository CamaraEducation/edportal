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
							<h3 class="card-title text-primary">Upload a new File to Dropbox</h3>
						</div>
						<div class="card-body">
							<div class="basic-form">
								<form id="add_app" name="app" action="/create/dropbox" method="POST" enctype='multipart/form-data' onsubmit="return submitted()">
									<div class="form-row">
										<div class="form-group col-md-6">
											<label>Title</label>
											<input type="text" name="name" id="name" class="form-control" placeholder="File title  i.e Nox Emulator" required>
										</div>
										<div class="form-group col-md-6">
											<label>Type</label>	
											<select name="type" id="type" class="form-control default-select" required>
												<option value="" hidden>Select File Type</option>
												<option value="exe.png">Executable (Windows)</option>
												<option value="deb.png">Executable (Linux)</option>
												<option value="rar.png">Compressed</option>
											</select>
										</div>									
									</div>

									<div class="form-row">
										<div class="form-group col-md-12">
											<label>File</label>
											<input type="file" name="file" id="file" class="form-control" 
												accept="application/exe, application/deb, application/rar, application/zip"
											required>
										</div>
									</div>

									<div class="form-row">
										<div class="form-group col">
											<label> Description</label>
											<textarea class="form-control" name="desc" rows="4" id="desc" ></textarea>
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
		//on submit #add_app
		$('#submit').click(function(){
			//check if file is selected
			if($('#file').val() == ''){
				toastr.error('Please select a file to upload', 'Error');
				return false;
			}
			//check if title is set
			if($('#name').val() == ''){
				toastr.error('Please enter a title for the file', 'Title is required');
				return false;
			}
			//check if category is selected
			if($('#type').val() == ''){
				toastr.error('Please select the file Type', 'Type is Required');
				return false;
			}
			//check if description is set
			if($('#desc').val() == ''){
				toastr.error('Please enter a description for the file', 'Description Required');
				return false;
			}
			//submit form
			$('#add_app').submit();
		});

		function submitted(){
			toastr.success("Please stay put the Application is being added to the system", "Please Wait", {
				positionClass: "toast-bottom-right", timeOut: 5e3, closeButton: !0, debug: !1,
				newestOnTop: !0, progressBar: !0, preventDuplicates: !0, onclick: null,
				showDuration: "300", hideDuration: "1000", extendedTimeOut: "1000", showEasing: "swing",
				hideEasing: "linear", showMethod: "fadeIn", hideMethod: "fadeOut", tapToDismiss: !1
			});	
		}
	</script>
@endsection