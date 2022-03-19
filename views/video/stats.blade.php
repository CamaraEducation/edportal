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
								<img src="/assets/img/video.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{getFileCount(upload.'video/')-StatsController::count_video()}}
								</h2>
								<h4 class="mb-0 fs-14">
									Videos Available
								</h4>	
							</div>
						</div>
					</div>
					@php $video_views = StatsController::count_video_view() @endphp
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/calendar-stick.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{$video_views['today']}}
								</h2>
								<h4 class="mb-0 fs-13">
									Views Today
								</h4>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/calendar-color.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{$video_views['monthly']}}
								</h2>
								<h4 class="mb-0 fs-14">
									Views This Month
								</h4>	
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/calendar-outline.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{$video_views['all_time']}}
								</h2>
								<h4 class="mb-0 fs-14">
									Views All Time
								</h4>	
							</div>
						</div>
					</div>
				</div>
			<div class="row">
				<div class="col-sm-6">
					<div class="card">
						<div class="card-header">
							<h2 class="card-title mb-2 text-primary">Highly Popular</h2>
							<p class="card-title mb-2 text-secondary">filtered on a weekly basis</p>
						</div>
						<div class="card-body">
							<div class="table-responsive">
								@php $popularity = VideosControl::popular() @endphp
								<table class="table table-hover table-responsive-sm">
									<thead>
										<tr>
											<th>Title</th>
											<th>Thumbnail</th>
											<th>Views</th>
										</tr>
									</thead>
									<tbody>
										@foreach ($popularity as $video)
											<tr>
												<td>{{$video['title']}}</td>
												<td><img style="width: 100px"  src="{{$video['thumbnail']}}" alt="{{$video['title']}}"></td>
												<td>{{$video['views']}}</td>
											</tr>                                            
										@endforeach
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="card">
						<div class="card-header">
							<h2 class="card-title mb-2 text-primary">Least Popular</h2>
							<p class="card-title mb-2 text-secondary">filtered on all time basis</p>
						</div>
						<div class="card-body">
							<div class="table-responsive">
								@php $popularity = VideosControl::obscured() @endphp
								<table class="table table-hover table-responsive-sm">
									<thead>
										<tr>
											<th>Title</th>
											<th>Thumbnail</th>
											<th>Views</th>
										</tr>
									</thead>
									<tbody>
										@foreach ($popularity as $video)
											<tr>
												<td>{{$video['title']}}</td>
												<td><img style="width: 100px"  src="{{$video['thumbnail']}}" alt="{{$video['title']}}"></td>
												<td>{{$video['views']}}</td>
											</tr>                                            
										@endforeach
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>    
@endsection

@section('footer')
@js('/assets/vendor/datatables/js/jquery.dataTables.min')
@js('/assets/js/plugins-init/datatables.init')
@endsection
