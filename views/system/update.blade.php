@extends('layout.app')
@section('title', 'Update system')
@section('header')
<style>
    .update{
        background: black;
        max-width: 560px;
        min-height: 300px;
        border-radius: 10px;
    }

    .log{
        background: #9d9e9f;
        width: 95%;
        color: black;
        min-height: 100px;
        border-radius: 10px;
    }

    pre{
        color: white !important;
        font-weight: bold !important;
        text-align: left;
        overflow: hidden !important;
        overflow-wrap: anywhere;
    }
</style>
@endsection

@section('content')
	<div class="content-body">
		<div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <div class="row">
                        <div class="col-md-12 pad-1">
                            <button id="update" class="btn btn-lg btn-primary w-100 text-bold">Start Portal Update</button>
                        </div>

                        <div class="col-md-12 pad-1">
                            <a href="/export/portal"  class="btn btn-lg btn-warning w-100 text-bold">Export Portal Data</a>
                        </div>

                        <div class="col-md-12 pad-1">
                            <button id="ccnms" class="btn btn-lg btn-info w-100 text-bold">Export CCNMS Data</button>
                        </div>
                        
                    </div>
                    <div class="log" hidden>
                        <ol class="pad-half" id="log">
                            
                        </ol>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8">
                    <center>
                        <div class="update pad-half" id="progress">
                            
                        </div>
                    </center>
                </div>
            </div>
		</div>
	</div>  
@endsection

@section('footer')

<script>
    //when the button update is clicked
    $('#update').click(function(){
        var x = '';
        $('#update').prop('disabled', true);
        $('#update').html('please wait')
        
        //append the log to log list
        $('#log').append('<li>Starting Update</li>');
        $('#progress').append('<pre>Commencing update</pre>');
        
        setTimeout(() => {
            $.ajax({
                url: '/update/portal/stash',
                type: 'POST',
                data: x,
                success: function(data){
                    if(data != ''){
                        $('#log').append('<li>Stashing Changes</li>');
                        $('#progress').append(data);
                    }
                }
            }).then(function(){
                $.ajax({
                    url: '/update/portal/pull',
                    type: 'POST',
                    data: x,
                    success: function(data){
                        if(data != ''){
                            $('#log').append('<li>Pulling Changes</li>');
                            $('#progress').append(data);

                            $.ajax({
                                url: '/update/portal/apply',
                                type: 'POST',
                                data: x,
                                success: function(data){
                                    if(data != ''){
                                        $('#log').append('<li>Installing Changes</li>');
                                        $('#progress').append(data);
                                        $('#update').html('Update Complete');
                                    }
                                }
                            });
                        }
                    }
                });
            });
        }, 1000);
        $('#update').prop('disabled', false);

    });

    //when the button ccnms is clicked
    $('#ccnms').click(function(){
        
        //info toast
        toastr.success('Please Wait, CCNMS sync sequence has been initialized', 'Exporting CCNMS Data');

        $.get('/ccnms/sync', function(data){
            //if data is not empty
            if(data == 'OK'){
                //info toast
                toastr.success('CCNMS sync sequence has been completed', 'Syncronization Complete');
            }else{
                //error toast
                toastr.error('CCNMS sync sequence has failed', 'Syncronization Error');
            }
        });

        $('#ccnms').prop('disabled', false);
    });
</script>

@endsection