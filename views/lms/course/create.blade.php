@extends('layout.app')
@section('title', 'Create Course')
@section('header')

@endsection
@section('content')
	<div class="content-body">
		<div class="container-fluid">
			
			<div class="row">
				<div class="col-xl-12 col-lg-12">
					<div class="card">
						<div class="card-header">
							<h3 class="card-title text-primary">Create a New Course</h3>
						</div>
						<div class="card-body">
							<div class="basic-form">
								<form name="course" enctype="multipart/form-data">
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="name">Course Name</label>
											<input type="text" name="name" id="name" class="form-control" placeholder="Title i.e Biology Form 1" required>
										</div>
										<div class="form-group col-md-6">
											<label for="">Course Tags</label>
											<input type="text" name="tags" id="tags" placeholder="tags i.e mechanics, c++, morphims" class="form-control">											
										</div>
									</div>

									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="subject">Subject</label>
											<select name="subject" id="subject" class="form-control form-select" required>
												<option value="" hidden>Select Subject/Category</option>
                                                @foreach (LmsController::index(); as $subject)
                                                    <option value="{{$subject->id}}">{{$subject->name}}</option>
                                                @endforeach
											</select>
										</div>
										<div class="form-group col-md-6">
											<label for="class">Class</label>
											<select name="class" id="class" class="form-control form-select" required>
												<option value="" hidden>Select Class</option>
												@php $classes = Category::fetch('class') @endphp
												@foreach ($classes as $class)
													<option value="{{$class['id']}}">{{$class['name']}}</option>
												@endforeach
											</select>
										</div>
									</div>

									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="cover">Cover Photor</label>
											<input type="file" name="cover" placeholder="cover photo" id="cover" class="form-control" accept="image/*" required>
										</div>
										<div class="form-group col-md-6">
											<label for="cover">Intro Banner (photo or video)</label>
											<input type="file" name="banner" placeholder="Intro banner" id="banner" class="form-control" accept="image/*, video/*, .mkv" required>
										</div>
									</div>

									<div class="form-row">
										<div class="form-group col-md-12">
											<label> Description</label>
											<textarea class="form-control" name="description" rows="4" id="description" placeholder="course description"></textarea required>
										</div>
									</div>

									<div class="form-row">
										<div class="form-group col-md-12 text-center">
											<button type="submit" id="submit" class="btn btn-primary">Create Course</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
		</div>
	</div>
@endsection	
@section('footer') 
<script>
	$(document).ready(function(){
		$('form[name="course"]').submit(function(e){
			$('#submit').attr('disabled', true);
			e.preventDefault();
			var formData = new FormData(this);
			$.ajax({
				url: "/lms/c/create",
				type: "POST",
				data: formData,
				contentType: false,
				cache: false,
				processData: false,
				success: function(data){
					if(data == 'success'){
						toastr.success('Course has been successfully created');
						window.location.href = "/lms/c/my";
					}else{
						$('#submit').attr('disabled', false);
						toastr.error('Unknown Error occured while creating course');
					}
				},
				error: function(data){
					$('#submit').attr('disabled', false);
					toastr.error('Unknown Error occured while creating course');
				}
			});
		});
	});
</script>
@endsection
