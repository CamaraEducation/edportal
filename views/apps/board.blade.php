@extends('layout.app')
@section('title', 'Camara EdPortal')
@section('header')
    <style>
        body { overflow: hidden; }
    </style>
@endsection
@section('content')
	<div class="content-body" style="padding-top: 70px !important">
        @php $boardUrl = "http://{$_SERVER['HTTP_HOST']}:8080"; @endphp
        <iframe 
            src="javascript:void" id="board"
            style="width: 100%; height: 97vh; border: none;"
            data-id="{{role()}}"
            data-url="{{$boardUrl}}?whiteboardid="
            data-user="{{account('first_name')}} {{account('last_name')}}"
            >
        </iframe>
	</div>
@endsection	
@section('footer') 
    <script>
        $(document).ready(function(){
            var boardID = prompt("Enter the white board ID");
            var userRole = document.getElementById("board").getAttribute("data-id");
            var boardUrl = document.getElementById("board").getAttribute("data-url");
            var boardUser = document.getElementById("board").getAttribute("data-user");

            if(boardID == null){
                window.location.href = "/";
            }else { 
                if(userRole == "Student"){
                    // send a get request to the server to check if the board exists
                    var apiRoute = "/lms/board/" + boardID;
                    $.get(apiRoute, function(data, status){
                        if(status == "success"){
                            if(data == "false"){
                                alert("The white board ID you entered does not exist");
                                window.location.href = "/";
                            }else{
                                document.getElementById("board").src = boardUrl + data + "&username=" + boardUser;
                            }
                        }
                    });
                }
                else{
                    document.getElementById("board").src = boardUrl + boardID + "&username=" + boardUser;
                }
            }
        });
    </script>
@endsection