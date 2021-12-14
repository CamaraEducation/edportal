@extends('layout.app')
@section('title', 'Make Announcement')

@section('header')
    
@endsection

@section('content')
    <div class="content-body">
        
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12 col-lg-12">
					<div class="card">
						<div class="card-header">
							<h4 class="card-title">Create a new Announcement</h4>
						</div>
						<div class="card-body">
							<div class="basic-form">
								<form id="add_notice" name="add_notice" action="/add/notice" method="POST" enctype='multipart/form-data' onsubmit="return submitted()">
									<div class="form-row">
										<div class="form-group col-md-12">
											<label>Title</label>
											<input type="text" name="title" id="title" class="form-control" placeholder="eg. Terminal Exams">
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-md-12">
											<label>Message</label>
											<textarea name="message" class="form-control" name="description" rows="4" id="description" placeholder="convey your message here" ></textarea>
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
        toastr.warning("Adding your announcement to server", "Please Wait", {
            positionClass: "toast-bottom-right", timeOut: 5e3, closeButton: !0, debug: !1,
            newestOnTop: !0, progressBar: !0, preventDuplicates: !0, onclick: null,
            showDuration: "300", hideDuration: "1000", extendedTimeOut: "1000", showEasing: "swing",
            hideEasing: "linear", showMethod: "fadeIn", hideMethod: "fadeOut", tapToDismiss: !1
        });	
    }
</script>
@endsection