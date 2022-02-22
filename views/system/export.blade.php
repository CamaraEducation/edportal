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
        <script src="https://cdn.jsdelivr.net/gh/linways/table-to-excel@v1.0.4/dist/tableToExcel.js"></script>
	</head>
    <style>
        .export{
            margin: 10px;
        }
    </style>
	<body>
		<div class="bg-dark" style="position:fixed; width:100%; top:0">
			<a href="/" ><img src="/assets/img/logo.png" style="height: 60px"></a>
			<a class="btn btn-success float-right export" onclick="exportReportToExcel(this)">
                <i class="fa fa-upload"></i>
                Export
            </a>
		</div>
		<div class="wrapper" style="padding-top:10px;">
            @php 
                $school = Portal::configs();
                $applytics = array_merge(PortalExport::apps(), PortalExport::video(), PortalExport::doc());
                $portlytics = PortalExport::all();
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
                            <td>{{$analytic['title']}}</td>
                            <td>{{$analytic['con_type']}}</td>
                            <td>{{$analytic['age'] - UsersControl::fetch_data($analytic['visitor'], 'user_age', 'data')}}</td>
                            <td>{{role(UsersControl::fetch_data($analytic['visitor'], 'user_role', 'main'))}}</td>
                            <td>{{$analytic['time']}}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            
            <table class="table bordered" id="general">
                <thead class="thead-dark">
                    <tr>
                        <th>school</th>                        
                        <th hidden>category</th>
                        <th hidden>ownership</th>
                        <th hidden>region</th>
                        <th hidden>country</th>
                        <th>uri</th>
                        <th>identifier</th>
                        <th>age</th>
                        <th>role</th>
                        <th>time</th>
                        <th>date</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($portlytics as $analytic)
                        <tr>
                            <td>{{$school['school']}}</td>
                            <td hidden>{{$school['category']}}</td>
                            <td hidden>{{$school['ownership']}}</td>
                            <td hidden>{{$school['region']}}</td>
                            <td hidden>{{$school['country']}}</td>
                            <td>{{$analytic['uri']}}</td>
                            <td>{{$analytic['identifier']}}</td>                            
                            <td>{{$analytic['age'] - UsersControl::fetch_data($analytic['visitor'], 'user_age', 'data')}}</td>
                            <td>{{role(UsersControl::fetch_data($analytic['visitor'], 'user_role', 'main'))}}</td>
                            <td>{{$analytic['live']}}</td>
                            <td>{{$analytic['time']}}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
		</div>

        <script>

		    function exportReportToExcel() {
                let table = document.getElementsByTagName("table"); // you can use document.getElementById('tableId') as well by providing id to the table tag
                TableToExcel.convert(table[0], { // html code may contain multiple tables so here we are refering to 1st table tag
                    name: '{{"applets_analysis_".date("Y-m-d-h-i-s")}}.xlsx', // fileName you could use any name
                    sheet: {
                        name: 'Sheet 1' // sheetName
                    }
                });

                TableToExcel.convert(table[1], { // html code may contain multiple tables so here we are refering to 1st table tag
                    name: '{{"portal_analysis_".date("Y-m-d-h-i-s")}}.xlsx', // fileName you could use any name
                    sheet: {
                        name: 'Sheet 1' // sheetName
                    }
                });
            }

        </script>
</html>