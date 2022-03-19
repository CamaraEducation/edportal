@extends('layout.app')
@section('title', 'Camara EdPortal')
@section('header')

@endsection
@section('content')
	<div class="content-body">
		<div class="container-fluid">
			
			<h2 class="card-title mb-2 text-primary">Camara Statistics</h3>
			<div class="row">
				<div class="col-xl-3 col-sm-6 m-t35">
					<div class="card card-coin">
						<div class="card-body text-center">
							<img src="/assets/img/pc.png" class="mb-3 vector-icon" width="70" height="70">
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
							<img src="/assets/img/school.png" class="mb-3 vector-icon" width="70" height="70">
							<h2 class="text-black mb-2 font-w600">11,943</h2>
							<h4 class="mb-0 fs-13">
								Schools Supported
							</h4>	
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-sm-6 m-t35">
					<div class="card card-coin">
						<div class="card-body text-center">
							<img src="/assets/img/teacher.png" class="mb-3 vector-icon" width="70" height="70">
							<h2 class="text-black mb-2 font-w600">60,648</h2>
							<h4 class="mb-0 fs-14">
								Teachers Trained
							</h4>	
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-sm-6 m-t35">
					<div class="card card-coin">
						<div class="card-body text-center">
							<img src="/assets/img/students.png" class="mb-3 vector-icon" width="70" height="70">
							<h2 class="text-black mb-2 font-w600">3,751,749</h2>
							<h4 class="mb-0 fs-14">
								Learners Impacted
							</h4>	
						</div>
					</div>
				</div>
			</div>
			
			
			<h2 class="card-title mb-2 text-primary">Portal Statistics</h3>
			<div class="row">
				<div class="col-xl-3 col-sm-6 m-t35">
					<div class="widget-stat card bg-danger">
						<div class="card-body  p-4">
							<div class="media">
								<span class="mr-3">
									<i class="flaticon-381-video-clip"></i>
								</span>
								<div class="media-body text-white text-right">
									<p class="mb-1">Videos</p>
									<h3 class="text-white">{{getFileCount(upload.'video/')-StatsController::count_video()}}</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-sm-6 m-t35">
					<div class="widget-stat card bg-success">
						<div class="card-body  p-4">
							<div class="media">
								<span class="mr-3">
									<i class="flaticon-381-notepad"></i>
								</span>
								<div class="media-body text-white text-right">
									<p class="mb-1">Documents</p>
									<h3 class="text-white">{{StatsController::count_document()}}</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-sm-6 m-t35">
					<div class="widget-stat card bg-warning">
						<div class="card-body  p-4">
							<div class="media">
								<span class="mr-3">
									<i class="flaticon-381-cloud-computing"></i>
								</span>
								<div class="media-body text-white text-right">
									<p class="mb-1">Systems</p>
									<h3 class="text-white">{{StatsController::count_apps()}}</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-sm-6 m-t35">
					<div class="widget-stat card bg-secondary">
						<div class="card-body  p-4">
							<div class="media">
								<span class="mr-3">
									<i class="flaticon-381-user"></i>
								</span>
								<div class="media-body text-white text-right">
									<p class="mb-1">Users</p>
									<h3 class="text-white">{{StatsController::count_user()}}</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-xl-9 col-xxl-8">
					<div class="card">
						<div class="card-header border-0 flex-wrap pb-0">
							<div class="mb-3">
								<h2 class="card-title mb-2 text-primary pad-2">Visitor Activity</h2>
							</div>
						</div>
						<div class="card-body">
							<canvas id="areaChart_2"></canvas>
						</div>
					</div>
				</div>
				<div class="col-xl-3 col-xxl-4">
					<div class="row">
						<div class="card col-sm-12">
							<div class="card-header border-0 pb-0">
								<h2 class="card-title mb-2 text-primary pad-2">Camara Education Portal</h2>
							</div>
							<div class="card-body pb-2 px-3">
								<p>Camara Education is a charity that provides computers, teacher training and innovative learning programmes to schools across Africa. We exist because we believe the world would be a better place if all young people were empowered through innovative education to create the life they want to lead.</p>
								<p>Camara Education portal is an education tools container that aims to provide ease of access to different education tools</p>
							</div>
						</div>
						<div class="card col-sm-12">
							<div class="card-header border-0 pb-0">
								<h2 class="card-title mb-2 text-primary pad-2">System Live Time</h2>
							</div>
							<div class="card-body pb-2 px-3">
								@php $livetime = StatsController::count_live_time() @endphp
								<h6>Today 		: {{TimeController::convert_sec_min_hrs($livetime['today']/1000)}}</h6>
								<h6>This Month  : {{TimeController::convert_sec_min_hrs($livetime['monthly']/1000)}}</h6>
								<h6>This Year 	: {{TimeController::convert_sec_min_hrs($livetime['all_time']/1000)}}</h6>
								<div class="space"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection	
@section('footer') 
@js('/assets/vendor/chart.js/Chart.bundle.min.js')
<!--@js('/assets/js/plugins-init/chartjs-init.js')-->

@php $user_activity = StatsController::count_users_activity(); 
    $max = max($user_activity);
    if($max < 250){ $max = 250;
        }else if($max < 500){ $max = 500;
    }else{ $max = 1000;
}
@endphp

<script>
(function($) {
    "use strict" 

 var dzSparkLine = function(){
	let draw = Chart.controllers.line.__super__.draw; //draw shadow
	
	var screenWidth = $(window).width();
	var visitor_activity = function(){	
		//gradient area chart
		if(jQuery('#areaChart_2').length > 0 ){
			const areaChart_2 = document.getElementById("areaChart_2").getContext('2d');
			//generate gradient
			const areaChart_2gradientStroke = areaChart_2.createLinearGradient(1, 1, 0, 500);
			areaChart_2gradientStroke.addColorStop(0, "rgb(85, 139, 47)");
			areaChart_2gradientStroke.addColorStop(1, "rgb(85, 139, 47, 0)");
			
			areaChart_2.height = 100;

			new Chart(areaChart_2, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: [
						{
							label: "User Activities",
							data: [
								@foreach($user_activity as $key => $value)
									{{$value}},
								@endforeach
							],
							borderColor: "rgb(85, 139, 47)",
							borderWidth: "4",
							backgroundColor: areaChart_2gradientStroke
						}
					]
				},
				options: {
					legend: false, 
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true, 
								max: {{$max}}, 
								min: 0, 
								stepSize: 50, 
								padding: 5
							}
						}],
						xAxes: [{ 
							ticks: {
								padding: 5
							}
						}]
					}
				}
			});
		}    
	}



	/* Function ============ */
	return {
		init:function(){
		},
		
		
		load:function(){
			visitor_activity();
		},
		
		resize:function(){
		}
	}

}();


	
jQuery(window).on('load',function(){
	dzSparkLine.load();
});

jQuery(window).on('resize',function(){
	//dzSparkLine.resize();
	setTimeout(function(){ dzSparkLine.resize(); }, 1000);
});
	
})(jQuery);
</script>
@endsection
