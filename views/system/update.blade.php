<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta content="{{$_ENV['AUTHOR']}}" name="description">
		<meta name="description" content="{{$_ENV['DESCRIPTION']}}">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon.png">
		<title>UPDATE APPLICATION</title>
		@css('/assets/css/bootstrap')
	</head>
	<body>
		<div class="w3-bar w3-black">
			<a href="/" class="w3-bar-item w3-button"><img src="/assets/img/logo.png" style="height: 60px"></a>            
			<p class="w3-bar-item w3-hide-small pad-top w3-right">Updating portal, wait ...</p>
			<p class="w3-bar-item w3-hide-small pad-top w3-right">Update Complete</p>
		</div>
		<div class="wrapper">
            @php $ls = shell_exec('ls'); var_dump($ls); @endphp
		</div>
</html>