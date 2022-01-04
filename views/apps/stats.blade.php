@extends('layout.app')
@section('title', 'Statistics')
@section('header')
	@css('/assets/vendor/datatables/css/jquery.dataTables.min')
@endsection
@section('header')
	
@endsection

@section('content')
	<div class="content-body">
		<div class="container-fluid">
			<h2 class="card-title mb-2 text-primary">General Statistics</h3>
				<div class="row">
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/app.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{StatsController::count_apps()}}
								</h2>
								<h4 class="mb-0 fs-14">
									Systems Integrated
								</h4>	
							</div>
						</div>
					</div>
					@php $app_visits = StatsController::count_app_visits() @endphp
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/app-stick.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{$app_visits['today']}}
								</h2>
								<h4 class="mb-0 fs-13">
									Visits Today
								</h4>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/app-color.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{$app_visits['monthly']}}
								</h2>
								<h4 class="mb-0 fs-14">
									Visits This Month
								</h4>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/app-outline.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{$app_visits['all_time']}}
								</h2>
								<h4 class="mb-0 fs-14">
									Visits All Time
								</h4>	
							</div>
						</div>
					</div>
				</div>
			<div class="row">
				@php $application = AppsControl::fetch() @endphp
                @foreach ($application as $app)
                <div class="col-xl-4 col-lg-12">
					<div class="card project-card">
						<div class="card-body">
							<div class="d-flex mb-4 align-items-start">
								<div class="dz-media mr-3">
									<img src="{{$app['banner']}}" class="img-fluid" alt="">
								</div>
								<div class="mr-auto">
									<p class="text-primary mb-1"></p>
									<h5 class="title font-w600 mb-2">
										<a href="jaFvascript:void()" class="text-black">{{$app['name']}}</a>
									</h5>
									<!-- span>We Create Your Dream</span-->
								</div>
								<!--span class="badge badge-success d-sm-inline-block d-none">Compeleted</span-->
							</div>
							<p class="mb-4">{{substr($app['description'], 0, 130)}} ...</p>
							<div class="row mb-4">
								<div class="col-sm-6 mb-sm-0 mb-3 d-flex">
									<div class="dt-icon bgl-info mr-3">
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M19 5H18V3C18 2.73478 17.8946 2.48043 17.7071 2.29289C17.5196 2.10536 17.2652 2 17 2C16.7348 2 16.4804 2.10536 16.2929 2.29289C16.1054 2.48043 16 2.73478 16 3V5H8V3C8 2.73478 7.89464 2.48043 7.70711 2.29289C7.51957 2.10536 7.26522 2 7 2C6.73478 2 6.48043 2.10536 6.29289 2.29289C6.10536 2.48043 6 2.73478 6 3V5H5C4.20435 5 3.44129 5.31607 2.87868 5.87868C2.31607 6.44129 2 7.20435 2 8V9H22V8C22 7.20435 21.6839 6.44129 21.1213 5.87868C20.5587 5.31607 19.7957 5 19 5Z" fill="#92caff"/>
											<path d="M2 19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7957 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V11H2V19Z" fill="#51A6F5"/>
										</svg>
									</div>
									<div>
										<span>Date Added</span>
										<p class="mb-0 pt-1 font-w500 text-black">{{$app['created']}}</p>
									</div>
								</div>
								<div class="col-sm-6 d-flex">
									<div class="dt-icon mr-3 bgl-danger">
										<svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M18.6601 8.6858C18.5437 8.44064 18.2965 8.28427 18.025 8.28427H10.9728L15.2413 1.06083C15.3697 0.843469 15.3718 0.573844 15.2466 0.354609C15.1214 0.135375 14.8884 -9.37014e-05 14.6359 4.86277e-08L8.61084 0.000656299C8.3608 0.000750049 8.12957 0.1335 8.00362 0.349453L0.0958048 13.905C-0.0310859 14.1224 -0.0319764 14.3911 0.0934142 14.6094C0.218805 14.8277 0.451352 14.9624 0.703117 14.9624H7.71037L5.66943 23.1263C5.58955 23.4457 5.74213 23.7779 6.03651 23.9255C6.13691 23.9757 6.24459 24 6.35123 24C6.55729 24 6.75923 23.9094 6.89638 23.7413L18.5699 9.43186C18.7415 9.22148 18.7766 8.93105 18.6601 8.6858V8.6858Z" fill="#FF4C41"/>
										</svg>
									</div>
									<div>
										<span>Lat Active</span>
										<p class="mb-0 pt-1 font-w500 text-black">2021-{{rand(11,12)}}-{{rand(1,16)}}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>  
                @endforeach
			</div>
		</div>
	</div>    
@endsection

@section('footer')
@js('/assets/vendor/datatables/js/jquery.dataTables.min')
@js('/assets/js/plugins-init/datatables.init')
@endsection