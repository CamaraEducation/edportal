    @extends('layout.app')
@section('title', 'Videos')
@section('header')
    <style>
        .video-bg{
            background: url(/upload/apps/cover.jpg) center no-repeat;
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
                <div class="col-xl-3 video-card">
                    <div class="card mb-3">
                        <div id="over" class="video-bg" alt="Card image cap">
                            <img class="play" src="/assets/img/play.png" alt="">
                        </div>
                        <div class="card-header">
                            <h5 class="card-title">Big Buck bunny</h5>
                        </div>
                        <div class="card-footer">
                            <p class="card-text d-inline"><i class="fa fa-eye"> 150 view</i></p>
                            <a href="javascript:void(0);" class="card-link float-right">2 months ago</a>
                        </div>
                    </div>
                </div>

                
                <div class="col-xl-3 video-card">
                    <div class="card mb-3">
                        <div id="over" class="video-bg" alt="Card image cap">
                            <img class="play" src="/assets/img/play.png" alt="">
                        </div>
                        <div class="card-header">
                            <h5 class="card-title">Big Buck bunny</h5>
                        </div>
                        <div class="card-footer">
                            <p class="card-text d-inline"><i class="fa fa-eye"> 150 view</i></p>
                            <a href="javascript:void(0);" class="card-link float-right">2 months ago</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-3 video-card">
                    <div class="card mb-3">
                        <div id="over" class="video-bg" alt="Card image cap">
                            <img class="play" src="/assets/img/play.png" alt="">
                        </div>
                        <div class="card-header">
                            <h5 class="card-title">Big Buck bunny</h5>
                        </div>
                        <div class="card-footer">
                            <p class="card-text d-inline"><i class="fa fa-eye"> 150 view</i></p>
                            <a href="javascript:void(0);" class="card-link float-right">2 months ago</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>    
@endsection

@section('footer')
    
@endsection