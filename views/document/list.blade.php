@extends('layout.app')
@section('title', 'Publication')
@section('header')
    @css('/assets/css/document')    
@endsection
@section('header')
    
@endsection

@section('content')
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                @php $documents = DocsControl::fetch(); @endphp
                @foreach ($documents as $doc)
                <div class="col-sm-2">
                    <a href="/view/document/{{$doc['id']}}/{{str_replace(' ', '-', $doc['name'])}}" title="{{$doc['name']}}">
                        <img class="img-skew" src="{{$doc['thumbnail']}}" alt="">
                    </a>
                </div>                    
                @endforeach
            </div>
        </div>
    </div>    
@endsection

@section('footer')
    
@endsection