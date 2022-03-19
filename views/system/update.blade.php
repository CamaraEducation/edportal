@extends('layout.app')
@section('title', 'Video Category')
@section('header')
<style>
	.update-btn{
        background-color: #81BC00;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .update-btn:hover{
        background-color: #81BC00;
        color: white;
        border: none;
        padding: 10px;
        border-radius: 5px;
        margin-top: 10px;
        margin-left: 10px;
    }

    .update{
        background: black;
        max-width: 560px;
        color: white; 
    }
</style>
@endsection

@section('content')
	<div class="content-body">
		<div class="container-fluid">
			<center>
                <div class="update">

                </div>
            </center>
		</div>
	</div>  
@endsection

@section('footer')

@endsection