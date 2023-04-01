<div class="deznav">
	<div class="deznav-scroll">
		<ul class="metismenu" id="menu">
			<li class="nav-label first">Main Menu</li>

			<li>
				<a class="ai-icon" href="/" aria-expanded="false" data-toggle="tooltip" data-placement="right" title="Home">
					<i class="bi bi-grid-fill"></i>
					<span class="nav-text">Dashboard</span>
				</a>
			</li>

			<li>
				<a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
					<i class="bi bi-collection-play-fill"></i>
					<span class="nav-text">Utilities</span>
				</a>
				<ul aria-expanded="false">
					<li><a href="javascript:void()">ICT Tools</a>
						<ul aria-expanded="false">
							@php $application = AppsControl::fetch('ict') @endphp
							@foreach ($application as $app)
							<li><a href="/view/app/{{$app['id']}}/{{str_replace(' ','-',$app['name'])}}">{{$app['name']}}</a></li>   
							@endforeach
						</ul>
					</li>
					<li><a href="javascript:void()">Educational Repository</a>
						<ul aria-expanded="false">
							@php $application = AppsControl::fetch('rep') @endphp
							@foreach ($application as $app)
							<li><a href="/view/app/{{$app['id']}}/{{str_replace(' ','-',$app['name'])}}">{{$app['name']}}</a></li>   
							@endforeach
						</ul>
					</li>
					<li><a href="/video">Video</a></li>
					<li><a href="/document">Documents</a></li>
				</ul>
			</li>

			<li>
				<a class="has-arrow ai-icon" href="/lms" aria-expanded="false">
					<i class="bi bi-clipboard"></i>
					<span class="nav-text">LMS</span>
				</a>
				<ul aria-expanded="false">
					<!--li><a href="/lms">Learning Studio</a></li-->					
					<!--li><a href="/lms">Quiz & Assesment</a></li-->
					<li><a href="/lms/board">WhiteBoard</a></li>
				</ul>
			<li>
				<a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
					<i class="bi bi-ui-checks"></i>
					<span class="nav-text">Systems</span>
				</a>
				<ul aria-expanded="false">
					<li><a href="/dropbox">Dropbox</a></li>
				</ul>
			</li>
			@if (viewer() == 1)
				@include('layout.menu.admin')
			@elseif (viewer() == 2)
				@include('layout.menu.admin')
			@endif
			
			<li>
				<a class="ai-icon" href="/support" aria-expanded="false">
					<i class="bi bi-headset"></i>
					<span class="nav-text">Support</span>
				</a>
				<ul aria-expanded="false">
					<li><a href="/support">Support</a></li>
				</ul>
			</li>            
		</ul>
		<div class="copyright">
			<p><strong>Camara Education Portal</strong></p>
		</div>
	</div>
</div>
