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