@extends('layouts.app')	
@section('content')
	<div class="pc-container">
		<div class="pc-content">

            <div id="docsList" class="mb-3">
                @include('app.videos.partials.activity', ['type' => 'history'])
            </div>
            
        </div>
    </div>
@endsection