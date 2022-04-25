@php $app = AppsControl::app($id); @endphp
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta content="{{$_ENV['AUTHOR']}}" name="description">
		<meta name="description" content="{{$_ENV['DESCRIPTION']}}">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon.png">
		<title>{{$app['name']}}</title>
		@css('/assets/css/bootstrap')
		<style>
			iframe {
				width: 100%;
				height: 90vh;
				border: 0;
			}
			/* hide body scrollbar */
			body::-webkit-scrollbar {
				display: none
			}
			.pad-top{
				padding-top:26px !important;
			}
			a{
				text-decoration: none;
			}
			a:hover{
				color: aliceblue;
			}
		</style>
		<base target="_parent">
	</head>
	<body>
		<div class="w3-bar w3-black">
			<a href="/" class="w3-bar-item w3-button"><img src="/assets/img/logo.png" style="height: 60px"></a>
			<a href="/" class="w3-bar-item w3-hide-small pad-top w3-right">Home</a>
		</div>
		<div class="wrapper">
			<iframe src="/apps/{{$app['path']}}" id="myFrame" onload="log_app_visit()" sandbox="allow-same-origin allow-scripts allow-popups allow-forms">
			</iframe>
		</div>
		@js('/assets/js/jquery36.min')
		<script>
			console.log('{{$app['name']}}');
			
			function log_app_visit(){
				var iframe = document.getElementById("myFrame");
				var uri     = iframe.contentWindow.location.pathname;
				var app_id  = "{{$id}}";
				var user_id = "{{$_SESSION['id']}}";

				$.post("/log/app", {
					uri: uri, 
					app_id: app_id, 
					user_id: user_id
				},
				function(data, status){
					//alert("Data: " + data + "\nStatus: " + status);
				});
			}
			
			function log_live_time(){
				var iframe = document.getElementById("myFrame");
				var uri     = iframe.contentWindow.location.pathname;
				
				$.post("/log/time", {
					uri: uri
				},
				function(data, status){
					//console.log(data);
				});
			}
			
			setInterval(function(){
				log_live_time()
			}, 3200);
			
		</script>
</html>
