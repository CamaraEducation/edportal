@extends('layout.app')
@section('title', 'Camara EdPortal')
@section('content')		
        <div class="content-body">
			<div class="container-fluid">
				<div class="row">
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/pc.png" class="mb-3 vector-icon" width="80" height="80">
								<h2 class="text-black mb-2 font-w600">118,471
								</h2>
								<h4 class="mb-0 fs-14">
									Computers Installed
								</h4>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/school.png" class="mb-3 vector-icon" width="80" height="80">
								<h2 class="text-black mb-2 font-w600">11,943</h2>
								<h4 class="mb-0 fs-13">
									Schools Supplied
								</h4>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/teacher.png" class="mb-3 vector-icon" width="80" height="80">
								<h2 class="text-black mb-2 font-w600">60,648</h2>
								<p class="mb-0 fs-14">
									Teachers Trained
								</p>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/students.png" class="mb-3 vector-icon" width="80" height="80">
								<h2 class="text-black mb-2 font-w600">3,751,749</h2>
								<h4 class="mb-0 fs-14">
									Children Impacted
								</h4>	
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-xl-9 col-xxl-8">
						<div class="card">
							<div class="card-header border-0 flex-wrap pb-0">
								<div class="mb-3">
									<h4 class="fs-20 text-black">Camara Education Portal</h4>
								</div>
							</div>
							<div class="card-body pb-2 px-3">
								<p>Camara Education is a charity that provides computers, teacher training and innovative learning programmes to schools across Africa. We exist because we believe the world would be a better place if all young people were empowered through innovative education to create the life they want to lead.</p>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-xxl-4">
						<div class="card">
							<div class="card-header border-0 pb-0">
								<h4 class="fs-20 text-black">News & Information</h4>
							</div>
							<div class="card-body widget-media ">
								<ul class="timeline">
                                    <li>
                                        <div class="timeline-panel">
                                            <div class="media mr-2 media-info">
                                                KG
                                            </div>
                                            <div class="media-body">
                                                <h6 class="mb-1">Wishing you luck on your exams</h6>
                                                <small class="d-block">29 July 2020 - 02:26 PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="timeline-panel">
                                            <div class="media mr-2 media-info">
                                                HS
                                            </div>
                                            <div class="media-body">
                                                <h6 class="mb-1">A message from head of School</h6>
                                                <small class="d-block">29 July 2020 - 02:26 PM</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="timeline-panel">
                                            <div class="media mr-2 media-success">
                                                <i class="fa fa-home"></i>
                                            </div>
                                            <div class="media-body">
                                                <h6 class="mb-1">Reminder : Student Election!</h6>
                                                <small class="d-block">29 July 2020 - 02:26 PM</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
@endsection	