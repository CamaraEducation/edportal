@extends('layout.app')
@section('title', 'Statistics')
@section('header')
	@css('/assets/vendor/datatables/css/jquery.dataTables.min')
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
									{{StatsController::count_document()}}
								</h2>
								<h4 class="mb-0 fs-14">
									Documents Available
								</h4>	
							</div>
						</div>
					</div>
					@php $doc_views = StatsController::count_doc_view() @endphp
					<div class="col-xl-3 col-sm-6 m-t35">
						<div class="card card-coin">
							<div class="card-body text-center">
								<img src="/assets/img/app-stick.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{$doc_views['today']}}
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
								<img src="/assets/img/app-color.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{$doc_views['monthly']}}
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
								<img src="/assets/img/app-outline.png" class="mb-3 vector-icon" width="70" height="70">
								<h2 class="text-black mb-2 font-w600">
									{{$doc_views['all_time']}}
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
							<h2 class="card-title mb-2 text-primary">Document Statistics/h2>
							<p class="card-title mb-2 text-secondary">...</p>
						</div>
						<div class="card-body">
							<div class="table-responsive">
								@php $popularity = DocsControl::popular() @endphp
								<table class="table table-hover table-responsive-sm">
									<thead>
										<tr>
											<th>Title</th>
											<th>Thumbnail</th>
											<th>Views</th>
										</tr>
									</thead>
									<tbody>
										@foreach ($popularity as $doc)
											<tr>
												<td>{{$doc['title']}}</td>
												<td><img style="width: 100px"  src="{{$doc['thumbnail']}}" alt="{{$doc['title']}}"></td>
												<td>{{$doc['views']}}</td>
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
								@php $popularity = DocsControl::obscured() @endphp
								<table class="table table-hover table-responsive-sm">
									<thead>
										<tr>
											<th>Title</th>
											<th>Thumbnail</th>
											<th>Views</th>
										</tr>
									</thead>
									<tbody>
										@foreach ($popularity as $doc)
											<tr>
												<td>{{$doc['title']}}</td>
												<td><img style="width: 100px"  src="{{$doc['thumbnail']}}" alt="{{$doc['title']}}"></td>
												<td>{{$doc['views']}}</td>
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