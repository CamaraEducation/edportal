@extends('layouts.app')	
@section('content')
	<div class="pc-container">
		<div class="pc-content">

            <div class="row mb-3">
                <div class="col-md-12">
                    <div class="card-body position-relative">
                        <input type="text" class="form-control" id="searchDocs" placeholder="Search content ...">
                        <div class="position-absolute floating-action">
                            <button class="btn btn-primary">
                                <span class="d-md-none">
                                    <i class="fa fa-plus"></i>
                                </span>
                                <span class="d-none d-md-block">
                                    {{ __('Upload Video') }}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            @if(isset($popularTags) && count($popularTags))
                <div class="row mt-3 mb-1">
                    <div class="col-md-12">
                        <div class="card border-0">
                            <div class="card-body pt-2 p-0">
                                <div class="tags py-3">
                                    @foreach($popularTags as $tag)
                                        <a href="{{ route('videos.group', $tag) }}" class="btn btn-light rounded-3 tag d-inline">{{ $tag }}</a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            @endif

            <div id="docsList" class="mb-3">
                @include('app.videos.partials.list')
            </div>

            {!! $pagination->render() !!}
            
        </div>
    </div>
@endsection
@script('app.videos.scripts.index')