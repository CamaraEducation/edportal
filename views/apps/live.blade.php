@extends('layout.frame')
@section('title', 'Camara EdPortal')
@section('header')
    <style>
        iframe {
            width: 100%;
            height: 100vh;
            border: none;
        }

        body {
            overflow: hidden;
        }
    </style>
@endsection
@section('content')
	<div class="content-body" style="padding-top: 0 !important;">
        @php $app = AppsControl::app($id); @endphp
        <iframe src="/apps/{{$app['path']}}" id="myFrame" onload="log_app_visit()" sandbox="allow-same-origin allow-scripts allow-popups allow-forms">
        </iframe>
	</div>
@endsection	
@section('footer') 

@endsection