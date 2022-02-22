@extends('layout.app')
@section('title', 'Create User')
@section('header') @endsection
@section('content')
    <div class="content-body">
		<div class="container-fluid">
			<div class="row">
				<div class="col-xl-12 col-lg-12">
					<div class="card">
						<div class="card-header">
							<h2 class="card-title mb-2 text-primary">Create New User</h2>
						</div>
						<div class="card-body">
							<div class="basic-form">
								<form id="add_video" name="add_video" action="/create/user" method="POST" onsubmit="return submitted()">
									<div class="form-row">
										<div class="form-group col-md-6">
											<label>First Name</label>
											<input type="text" name="fname" id="fname" class="form-control" placeholder="First Name eg. Hamisi">
										</div>
										<div class="form-group col-md-6">
											<label>Last Name</label>
											<input type="text" name="lname" id="lname" class="form-control" placeholder="Last Name eg. John">
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-md-6">
											<label>Username / id Number</label>
											<input type="text" name="username" id="username" class="form-control" placeholder="ie. registration id eg. ST001, T4743 etc." >
										</div>
										<div class="form-group col-md-6">
											<label>User Role</label>
											<select name="role" id="role" class="form-control default-select" >
												<option value="" hidden>select User Type</option>
                                                <option value="1">Administrator</option>
                                                <option value="2">Teacher</option>
                                                <option value="3">Student</option>
											</select>
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-md-6">
											<label>User Gender</label>
											<select name="gender" id="gender" class="form-control default-select" >
												<option value="" hidden>select User Gender</option>
                                                <option value="male">male</option>
												<option value="female">female</option>
											</select>
										</div>
										<div class="form-group col-md-6">
											<label>Password</label>
											<input type="text" class="form-control" value="123456" disabled>
											<input type="text" name="pass" id="pass" value="123456" hidden>
										</div>
									</div>
									<button style="margin: auto;" type="submit" id="submit" class="btn btn-primary">Create User</button>
								<form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection
@section('footer') @endsection