@extends('layout.app')
@section('title', 'Update system')
@section('header')
<style>
    .update{
        background: black;
        max-width: 560px;
        color: rgb(121, 212, 107);
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
        color: #72a54d !important;
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
                    <center>
                        <button id="update" class="btn btn-lg btn-primary">Start Update</button>
                    </center>
                    <br>
                    <div class="log">
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
            });
        }, 1000);

        setTimeout(() => {
            $.ajax({
                url: '/update/portal/pull',
                type: 'POST',
                data: x,
                success: function(data){
                    if(data != ''){
                        $('#log').append('<li>Pulling Changes</li>');
                        $('#progress').append(data);
                    }
                }
            });
        }, 1000);

        setTimeout(() => {
            $.ajax({
                url: '/update/portal/apply',
                type: 'POST',
                data: x,
                success: function(data){
                    if(data != ''){
                        $('#log').append('<li>Installing Changes</li>');
                        $('#progress').append(data);
                    }
                }
            });
        }, 1000);

        //enable the button
        $('#update').html('Update Complete');

    });
</script>

@endsection