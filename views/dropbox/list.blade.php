@extends('layout.app')
@section('title', 'DrobBox')
@section('header')
@endsection

@section('content')
    @php $dropItems = DropboxControl::list(); @endphp
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                @foreach ($dropItems as $item)
                <div class="col-6">
                    <div class="card drop-card">
                        <div class="col-4 drop-image">
                            <img src="/assets/img/{{$item['type']}}" alt="" width="80px">
                        </div>
                        <div class="dropbox-style">
                            <h3 class="primary">{{$item['name']}}</h3> 
                            <p>{{$item['description']}}</p>
                            <a href="{{$item['path']}}" class="btn btn-primary">
                                <i class="fa fa-download"></i> Download
                            </a>
                        </div>
                    </div>  
                </div>
                @endforeach
            </div>
        </div>
    </div>  
@endsection

@section('footer') @endsection