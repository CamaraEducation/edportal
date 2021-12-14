@extends('layout.app')
@section('title', 'create App')
@section('header')
    <link rel="stylesheet" href="/assets/vendor/toastr/css/toastr.min.css">
	<script src="/assets/vendor/jquery/321/jquery.js"></script>
@endsection
@section('content')
	<div class="content-body">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12 col-lg-12">
					<div class="card">
						<div class="card-header">
							<h4 class="card-title">Add a new Application</h4>
						</div>
						<div class="card-body">
							<div class="basic-form">
								<form id="add_app" name="add_app" action="/create/app" method="POST" enctype='multipart/form-data' onsubmit="return submitted()">
									<div class="form-row">
										<div class="form-group col-md-6">
											<label>App Name</label>
											<input type="text" name="app_name" id="app_name" class="form-control" placeholder="enter app name i.e. wikipedia" >
										</div>
										<div class="form-group col-md-6">
											<label>App type</label>
											<select name="app_type" id="app_type" class="form-control default-select" >
												<option value="" hidden>select app type</option>
												<option valaue='hosted'>Hosted</option>
												<option value="linked">Linked</option>
											</select>
										</div>
										<div class="form-group col-md-6">
											<label>App Path</label>
											<input type="text" name="app_path" id="app_path" class="form-control" placeholder="folder or Link" >
										</div>
										<div class="form-group col-md-6">
											<label>Thumbnail</label>
											<input type="file" name="thumbnail" id="thumbnail" class="form-control">
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-md-12">
											<label>App Description</label>
											<textarea class="form-control" name="description" rows="4" id="description" ></textarea>
										</div>
									</div>
									<button type="submit" id="create_app" data-dismiss="modal" class="btn btn-primary">Add App</button>
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
	@js('/assets/vendor/toastr/js/toastr.min.js')
	<script>
		function submitted(){
			toastr.warning("Please stay put the Application is being added to the system", "Please Wait", {
				positionClass: "toast-bottom-right", timeOut: 5e3, closeButton: !0, debug: !1,
				newestOnTop: !0, progressBar: !0, preventDuplicates: !0, onclick: null,
				showDuration: "300", hideDuration: "1000", extendedTimeOut: "1000", showEasing: "swing",
				hideEasing: "linear", showMethod: "fadeIn", hideMethod: "fadeOut", tapToDismiss: !1
			});	
		}
	</script>

		<!--script>
			//ajax form submissions
			$("form#add_app").ready(function () {
				$('#create_app').on('click', function () {
					$("#create_app").attr("disabled", "disabled");
					var app_name    = $('#app_name').val();
					var app_type    = $('#app_type').val();
					var app_path    = $('#app_path').val();
					var thumbnail   = $('#thumbnail').val();
					var description = $('#description').val();
					
					if(app_name != "" && app_type != "" && app_path != "" && thumbnail != "" && description != ""){
						alert('am here');
						$.ajax({
							url: "/create/app",
							type: "POST",
							data: {
								app_name	: app_name,
								app_type	: app_type,
								app_path	: app_path,
								thumbnail	: thumbnail,
								description : description
							},
							cache: false,
							contentType: false,
							processData: false,
							success: function (dataResult) {
								var dataResult = JSON.parse(dataResult);
								if (dataResult.statusCode == 200) {
									toastr.success("The app has been successfully added", "Action Succesfully", {
										positionClass: "toast-bottom-right", timeOut: 5e3, closeButton: !0, debug: !1,
										newestOnTop: !0, progressBar: !0, preventDuplicates: !0, onclick: null,
										showDuration: "300", hideDuration: "1000", extendedTimeOut: "1000", showEasing: "swing",
										hideEasing: "linear", showMethod: "fadeIn", hideMethod: "fadeOut", tapToDismiss: !1
									});
									$("#create_app").removeAttr("disabled");
								} else if (dataResult.statusCode == 201) {
									toastr.error("Make sure all form data are right formated, if error persist report the Error", "Unknown error", {
										positionClass: "toast-bottom-right", timeOut: 5e3, closeButton: !0, debug: !1,
										newestOnTop: !0, progressBar: !0, preventDuplicates: !0, onclick: null,
										showDuration: "300", hideDuration: "1000", extendedTimeOut: "1000", showEasing: "swing",
										hideEasing: "linear", showMethod: "fadeIn", hideMethod: "fadeOut", tapToDismiss: !1
									});
								}
							}
						});
					} else {
						toastr.warning("Make sure all fields are filled with the required data", "All Field are Required", {
							positionClass: "toast-bottom-right", timeOut: 5e3, closeButton: !0, debug: !1,
							newestOnTop: !0, progressBar: !0, preventDuplicates: !0, onclick: null,
							showDuration: "300", hideDuration: "1000", extendedTimeOut: "1000", showEasing: "swing",
							hideEasing: "linear", showMethod: "fadeIn", hideMethod: "fadeOut", tapToDismiss: !1
						});						
						$("#create_app").removeAttr("disabled");
					}
				});
			});
		</script--> 
@endsection