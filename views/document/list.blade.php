@extends('layout.app')
@section('title', 'Publication')
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

    .actions{
        position: absolute;
        top: 40%;
        left: 20%;
        width:60%;
        border-radius: 10px;
    }

    .action-btn{

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
                                            <h5 class="text-primary" style="padding-bottom:1rem">Books and Documents</h5>
                                            <div class="row">
                                                @php $documents = DocsControl::fetch($id); @endphp
                                                @foreach ($documents as $doc)
                                                @php $doc_id = $doc['id'] @endphp
                                                <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6" id="doc-{{$doc_id}}">
                                                    <div class="subject-card" style="background:url({{$doc['thumbnail']}})">
                                                        <a href="/view/document/{{$doc['id']}}/{{str_replace(' ', '-', $doc['name'])}}" title="{{$doc['name']}}">                        
                                                        <div class="subject-banner row">
                                                            <h6 class="subject-title text-primary">{{$doc['name']}}</h6>
                                                        </div>
                                                        </a>
                                                    </div>
                                                    <center>
                                                    <div class="actions">
                                                        <a href="/view/document/{{$doc['id']}}/{{str_replace(' ', '-', $doc['name'])}}" title="{{$doc['name']}}" class="btn btn-primary">
                                                            <i class="fa fa-eye text-white"></i>
                                                        </a>
                                                        <a class="btn btn-danger" onclick="return doc_delete('{{$doc_id}}')">
                                                            <i class="fa fa-trash text-white"></i>
                                                        </a>
                                                    </div>
                                                    </center>
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
    function doc_delete(id){
        confirm('Are you sure you want to delete this document?');
    
        if(confirm){
            $.ajax({
                url: '/delete/document/'+id,
                type: 'GET',
                success: function(data){
                    if(data == 'deleted'){
                        $('#doc-'+id).remove();
                    }
                }
            });
        }else{
            console.log('not deleted');
        }    
    }
    
    </script>
@endsection