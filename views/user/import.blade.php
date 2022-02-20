@extends('layout.app')
@section('title', 'Import Users')
@section('header')
<style>
    .outer-container {
        background: #F0F0F0;
        border: #e0dfdf 1px solid;
        padding: 40px 20px;
        border-radius: 2px;
    }

    .btn-submit {
        background: #333;
        border: #1d1d1d 1px solid;
        border-radius: 2px;
        color: #f0f0f0;
        cursor: pointer;
        padding: 5px 20px;
        font-size:0.9em;
    }

    .tutorial-table {
        margin-top: 40px;
        font-size: 0.8em;
        border-collapse: collapse;
        width: 100%;
    }

    .tutorial-table th {
        background: #f0f0f0;
        border-bottom: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
    }

    .tutorial-table td {
        background: #FFF;
        border-bottom: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
    }

    #response {
        padding: 10px;
        margin-top: 10px;
        border-radius: 2px;
        display:none;
    }

    .success {
        background: #c7efd9;
        border: #bbe2cd 1px solid;
    }

    .error {
        background: #fbcfcf;
        border: #f3c6c7 1px solid;
    }

    div#response.display-block {
        display: block;
    }
</style>
@endsection
@section('content')
    <div class="content-body" style="margin:auto; padding-top:30vh; max-width:550px;">
        <h2 class="text-primary">Import the students' Excel File</h2>
        <div class="outer-container">
            <form id="import_users" name="import_users" action="/create/users" method="POST" enctype='multipart/form-data'>
                <div>
                    <label>Choose Excel File</label> 
                    <input type="file" name="file" id="file">
                    <input type="submit" id="submit" name="import" class="btn-submit" value="Import">
                </div>
            </form>
            
        </div>
    </div>	
@endsection
@section('footer')
    @js('/assets/vendor/datatables/js/jquery.dataTables.min.js')
    @js('/assets/js/plugins-init/datatables.init.js')
@endsection