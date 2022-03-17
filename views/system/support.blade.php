@extends('layout.app')
@section('title', 'Support')	
@section('content')
    <div class="content-body">
        <div class="container-fluid">
            @switch(ConfigsController::get('country'))
                @case('Tanzania')
                    @include('system.support.tz')
                    @break
            
                @case('Kenya')
                    @include('system.support.ky')
                    @break

                @case('Ethiopia')
                    @include('system.support.et')
                    @break

                @case('Lesotho')
                    @include('system.support.ls')
                    @break

                @case('Zambia')
                    @include('system.support.zb')
                    @break
            @endswitch
        </div>
    </div>
@endsection