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
		@css('/assets/css/style')
	</head>
    <style>
        .export{
            margin: 10px;
        }
    </style>
	<body>
		<div class="bg-dark">
			<a href="/" ><img src="/assets/img/logo.png" style="height: 60px"></a>
			<a href="/" class="btn btn-success float-right export">
                <i class="fa fa-upload"></i>
                Export
            </a>
		</div>
		<div class="wrapper">
            @php 
                $school = Portal::configs();
                $applytics = PortalExport::apps();
                $vidlytics = '';
                $doclytics = '';
            @endphp
            <table class="table bordered" id="applets">
                <thead class="thead-dark">
                    <tr>
                        <th>school</th>                        
                        <th hidden>Category</th>
                        <th hidden>Ownership</th>
                        <th hidden>Region</th>
                        <th hidden>Country</th>
                        <th>applet</th>
                        <th>uri</th>
                        <th>type</th>
                        <th>age</th>
                        <th>role</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($applytics as $analytic)
                        <tr>
                            <td>{{$school['school']}}</td>
                            <td hidden>{{$school['category']}}</td>
                            <td hidden>{{$school['ownership']}}</td>
                            <td hidden>{{$school['region']}}</td>
                            <td hidden>{{$school['country']}}</td>
                            <td>{{$analytic['applet']}}</td>
                            <td>{{$analytic['uri']}}</td>
                            <td>{{$analytic['con_type']}}</td>
                            <td></td>
                            <td></td>
                            <td>{{$analytic['time']}}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            
            <table class="table bordered" id="general">
                <thead class="thead-dark">
                    <tr>
                        <th>school</th>                        
                        <th hidden>Category</th>
                        <th hidden>Ownership</th>
                        <th hidden>Region</th>
                        <th hidden>Country</th>
                        <th>uri</th>
                        <th>age</th>
                        <th>role</th>
                        <th>time</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{$school['school']}}</td>
                        <td hidden>{{$school['category']}}</td>
                        <td hidden>{{$school['ownership']}}</td>
                        <td hidden>{{$school['region']}}</td>
                        <td hidden>{{$school['country']}}</td>
                    </tr>
                </tbody>
            </table>
		</div>

        <script>

        </script>
</html>