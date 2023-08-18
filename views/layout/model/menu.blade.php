<div class="modal fade" id="applets" tabindex="-1" role="dialog" aria-labelledby="appletsTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
	  <div class="modal-content">
		<div class="modal-body">
			<ul>
				@php $application = AppsControl::fetch('ict') @endphp
				@foreach ($application as $app)
				<a href="/view/app/{{$app['id']}}/{{str_replace(' ','-',$app['name'])}}">
					<li class="mobimenu">{{$app['name']}}</li>
				</a>
				@endforeach

				@php $application = AppsControl::fetch('rep') @endphp
				@foreach ($application as $app)
				<a href="/view/app/{{$app['id']}}/{{str_replace(' ','-',$app['name'])}}">
					<li class="mobimenu">{{$app['name']}}</li>
				</a>
				@endforeach
			</ul>
		</div>
	  </div>
	</div>
</div>

<div class="modal fade" id="clientsModal" tabindex="-1" role="dialog" aria-labelledby="clientsModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Clients List</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
		@php $clients = StatsController::count_clients(); @endphp
		@if($clients->getRowCount() > 0)
			<table class="table table-hover">
				<tbody>
					@foreach ($clients as $client)
						<tr>
							<td>{{$client->DeviceName}}</td>
						</tr>						
					@endforeach
				</tbody>
			</table>
			@else
			<p> No clients Recorded</p>
		@endif
      </div>
    </div>
  </div>
</div>