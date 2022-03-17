<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta content="{{$_ENV['AUTHOR']}}" name="description">
		<meta name="description" content="{{$_ENV['DESCRIPTION']}}">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon.png">
		<title>Export Data</title>
	</head>
	<body>
		<div class="wrapper" style="padding-top:10px;">
			@php 
				$school = Portal::configs();
				$sync = SysSyncController::init();
				$applytics = $sync['cdata'];
				$portlytics = $sync['gdata'];
			@endphp
			
			<!-- preparing the content data -->
			@php $cdata = ''; $no = 0; @endphp
			@foreach ($applytics as $analytic)
				@php 
					$age = $analytic['age'] - UsersControl::fetch_data($analytic['visitor'], 'user_age', 'data');
					$cdata .= ' "'.$no.'" : {
						"school" : "' .$school['school']. '",
						"category" : "' .$school['category']. '",
						"ownership" : "' .$school['ownership']. '",
						"region" : "' .$school['region']. '",
						"country" : "' .$school['country']. '",
						"title" : "' .$analytic['title']. '",
						"type" : "' .$analytic['con_type']. '",
						"class" : "' .UsersControl::fetch_data($analytic['visitor'], 'user_class', 'data'). '",
						"age" : "' .$age. '",
						"role" : "' .get_user_role(UsersControl::fetch_data($analytic['visitor'], 'user_role', 'main')). '",
						"created" : "' .$analytic['time']. '"
					},'; $no++
				@endphp
			@endforeach
			@php $cdata = '{'. $cdata .'"":""}' @endphp
			
			<!-- preparing the general data -->
			@php $adata = ''; $no = 0; @endphp
			@foreach ($portlytics as $analytic)
				@php 
					$age = $analytic['age'] - UsersControl::fetch_data($analytic['visitor'], 'user_age', 'data');
					$adata .= ' "'.$no.'" : {
						"school" : "' .$school['school']. '",
						"category" : "' .$school['category']. '",
						"ownership" : "' .$school['ownership']. '",
						"region" : "' .$school['region']. '",
						"country" : "' .$school['country']. '",
						"uri" : "' .$analytic['uri']. '",
						"identifier " : "' .$analytic['identifier']. '",
						"class" : "' .UsersControl::fetch_data($analytic['visitor'], 'user_class', 'data'). '",
						"age" : "' .$age. '",
						"role " : "' .get_user_role(UsersControl::fetch_data($analytic['visitor'], 'user_role', 'main')). '",
						"time " : "' .$analytic['live']. '",
						"created " : "' .$analytic['time']. '"
					},'; $no++
				@endphp
			@endforeach
			@php $adata = '{'. $adata .'"":""}'; @endphp
			
			<form>
				<input type="text" name="cdata" value="{{$cdata}}" id="cdata" hidden>
				<input type="text" name="adata" value="{{$adata}}" id="adata" hidden>
			</form>

		</div>

		@js('/assets/js/jquery36.min')
		<script>
			$(document).ready(function(){
				var cdata = $('#cdata').val();
				var adata = $('#adata').val();
				$.ajax({
					url: '/test2',
					type: 'POST',
					data: {
						cdata: cdata,
						adata: adata
					},
					success: function(data){
						console.log(data);
					}
				});
			});
		</script>

</html>