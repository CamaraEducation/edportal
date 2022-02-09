<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta content="{{$_ENV['AUTHOR']}}" name="description">
		<meta name="description" content="{{$_ENV['DESCRIPTION']}}">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon.png">
		<title>Portal Update</title>
        @js('/assets/js/typewriter')
		@css('/assets/css/bootstrap')
        <style>
            body{
                background-color: black;
            }
            
            .mag{
                margin-left: 70%;
            }
            .wrapper{
                color : #81BC00;
                width: 100%;
                height: 100%;
                padding: 0 30px;
            }
        </style>
	</head>
	<body>
		<div class="w3-bar w3-black">
			<a href="/" class="w3-bar-item w3-button"><img src="/assets/img/logo.png" style="height: 60px"></a>            
			<p class="w3-bar-item w3-hide-small pad-top mag" id="loading"><span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ "updating portal", "please wait ...!"]'></span>
            </p>
			<p class="w3-bar-item w3-hide-small pad-top w3-right" id="loaded" style="display: none">Update Complete</p>
		</div>
        @php flush(); ob_flush(); @endphp
		<div class="wrapper">
            <pre>@php $exec = shell_exec('sudo git pull origin main'); echo $exec; flush(); ob_flush(); @endphp</pre>
		</div>

        <script>
            document.getElementById("loading").style.display = "none";
            document.getElementById("loaded").style.display = "block";
        </script>
    </body>
</html>