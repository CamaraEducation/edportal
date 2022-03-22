@extends('layout.app')
@section('title', 'Video list')
@section('header')
<style>
	.subject-card {
		height: 300px;
		background-size: cover !important;
		background-position: center!important;
		background-repeat: no-repeat !important;
	}

	.subject-banner{
		width: 97%;
		background-color:white;
		height: 70px;
		position: absolute;
		bottom: 0;
	}

	.subject-img{
		width: 60px;
		position: absolute;
		bottom: 4px;
	}

	.subject-title{
		position: absolute;
		bottom: 4px;
        text-align: center;
	}
</style>
@endsection

@section('content')
    @php $subject = SubjectsController::get($id); @endphp
    <div class="content-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="profile card card-body px-3 pt-3 pb-0">
                        <div class="profile-head">
                            <div class="photo-content">
                                <div class="cover-photo" style="background:url({{$subject['cover']}}); height:140px; background-size:cover;"></div>
                            </div>
                            <div class="profile-info">
                                <div class="profile-photo">
                                    <img src="{{$subject['thumb']}}" class="img-fluid rounded-circle" alt="{{$subject['name']}}">
                                </div>
                                <div class="profile-details">
                                    <div class="profile-name px-3 pt-2">
                                        <h4 class="text-primary mb-0">{{$subject['name']}}</h4>
                                        <p></p>
                                    </div>
                                    <div class="profile-email px-2 pt-2">
                                        <h4 class="text-muted mb-0">---</h4>
                                        <p></p>
                                    </div>
                                    <!--div class="dropdown ml-auto">
                                        <a href="#" class="btn btn-primary light sharp" data-toggle="dropdown" aria-expanded="true"><svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg></a>
                                        < ul class="dropdown-menu dropdown-menu-right">
                                            <li class="dropdown-item"><i class="fa fa-user-circle text-primary mr-2"></i> View profile</li>
                                            <li class="dropdown-item"><i class="fa fa-users text-primary mr-2"></i> Add to close friends</li>
                                            <li class="dropdown-item"><i class="fa fa-plus text-primary mr-2"></i> Add to group</li>
                                            <li class="dropdown-item"><i class="fa fa-ban text-primary mr-2"></i> Block</li>
                                        </ul>
                                    </div-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="profile-tab">
                                <div class="custom-tab-1">
                                    <div class="tab-content">
                                        <div id="my-posts" class="tab-pane fade active show">
                                            <h5 class="text-primary" style="padding-bottom:1rem">Videos</h5>
                                            <div class="row">
                                                @php $videos = VideosControl::fetch($id); @endphp
                                                @foreach ($videos as $video)
                                                @php $video_id = $video['id'] @endphp
                                                <div class="col-xl-3 video-card" id="video-{{$video_id}}">
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
                                                            <a href="javascript:void(0);" class="card-link float-right" onclick="return delete_video('{{$video_id}}')">
                                                                <i class="fa fa-trash text-red"></i>
                                                            </a>
                                                            <p class="card-text d-inline float-right">
                                                                {{span_count($video['span'])}} &nbsp;
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
@endsection

@section('footer')
<script>
function delete_video(id){
    confirm('Are you sure you want to delete this video?');

    if(confirm){
        $.ajax({
            url: '/delete/video/'+id,
            type: 'GET',
            success: function(data){
                if(data == 'deleted'){
                    $('#video-'+id).remove();
                }
            }
        });
    }else{
        console.log('not deleted');
    }

}

</script>
@endsection