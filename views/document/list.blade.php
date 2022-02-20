@extends('layout.app')
@section('title', 'Publication')
@section('header')
    @css('/assets/css/document')   
    @css('/assets/vendor/flipper/wow_book.css')     
    @js('/assets/vendor/flipper/jquery-1.7.1.min.js')
    @js('/assets/vendor/flipper/pdf.combined.min.js')
    @js('/assets/vendor/flipper/wow_book.min.js')
@endsection
@section('header')
    
@endsection

@section('content')
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                @php $documents = DocsControl::fetch(); @endphp
                @foreach ($documents as $doc)
                <div class="col-lg-2 col-md-4 col-sm-3 col-xs-6">
                    <center>
                        <a href="/view/document/{{$doc['id']}}/{{str_replace(' ', '-', $doc['name'])}}" title="{{$doc['name']}}">
                            <img class="img-skew" src="{{$doc['thumbnail']}}" alt="">
                        </a>
                        <h6 class="">{{$doc['name']}}</h6>
                    </center>
                </div>                    
                @endforeach
            </div>
            
            <!--@ foreach ($documents as $doc)
            <div id="{ {str_replace(' ', '-', $doc['name'])}}"></div>
            @ endforeach-->
        </div>
    </div>  
@endsection

@section('footer')

@endsection