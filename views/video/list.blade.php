@extends('layout.app')
@section('title', 'Videos')
@section('header')
    <style>
        .video-bg{
            background-size: cover !important;
            height: 200px;
            width: 100%;
        }
        .video-card{
            border-radius: 1rem;    
        }
    </style>    
@endsection
@section('header')
    
@endsection

@section('content')
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                @php $videos = VideosControl::fetch(); @endphp
                <div class="col-xl-3 video-card">
                    <div class="card mb-3">
                        <div id="over" class="video-bg" alt="Card image cap" style="background: url('/assets/img/ict.png') center no-repeat;">
                            <a href="/view/video/ict">
                                <img class="play" src="/assets/img/play.png" alt="play">
                            </a>
                        </div>
                        <div class="card-header">
                            <a href="/view/video/ict">
                                <h5 class="card-title">ICT CLUB VIDEOS</h5>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 video-card">
                    <div class="card mb-3">
                        <div id="over" class="video-bg" alt="Card image cap" style="background: url('/assets/img/ubongo.png') center no-repeat;">
                            <a href="/view/video/ubongo">
                                <img class="play" src="/assets/img/play.png" alt="play">
                            </a>
                        </div>
                        <div class="card-header">
                            <a href="/view/video/ict">
                                <h5 class="card-title">UBONGO KIDS</h5>
                            </a>
                        </div>
                    </div>
                </div>
                @foreach ($videos as $video)
                <div class="col-xl-3 video-card">
                    <div class="card mb-3">
                        <div id="over" class="video-bg" alt="Card image cap" style="background: url({{$video['thumbnail']}}) center no-repeat;">
                            <a href="/view/video/{{$video['id']}}/{{str_replace(' ', '-', $video['title'])}}">
                                <img class="play" src="/assets/img/play.png" alt="play">
                            </a>
                        </div>
                        <div class="card-header">
                            <a href="/view/video/{{$video['id']}}/{{str_replace(' ', '-', $video['title'])}}">
                                <h5 class="card-title">{{$video['title']}}</h5>
                            </a>
                        </div>
                        <div class="card-footer">
                            <p class="card-text d-inline">
                                <i class="fa fa-eye"></i> 
                                {{VideosControl::views($video['id'])}}
                            </p>
                            <a href="javascript:void(0);" class="card-link float-right">
                                {{span_count($video['span'])}}
                            </a>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>    
@endsection

@section('footer')
    
@endsection
