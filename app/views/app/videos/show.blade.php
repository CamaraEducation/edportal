@extends('layouts.app')	
@section('content')
	<div class="pc-container">
		<div class="pc-content pt-1">

            <div class="row">
                <div class="col-xl-8 col-md-12 col-sm-12">
                    <div class="card border-0">
                        <div class="card-body pt-2 pb-3 px-2">
                            <div class="video-player border rounded-3 overflow-hidden">
                                <video autoplay id="video-player" class="video-js vjs-big-play-centered vjs-fluid rounded-3 overflow-hidden trackStamp" controls
                                    preload="auto" width="640" height="264"  allow="autoplay"
                                    data-video-resume="{{ $videoActivity->resume }}"
                                    data-setup='{"poster": "{{ urlPath($video->thumbnail) }}"}' >
                                    
                                    <source src="{{ urlPath($video->source) }}" type="video/mp4">
                                </video>
                            </div>
                        </div>

                        <div class="card-footer pt-0 mb-3 border-0 row">
                            <div class="col-12 p-0">
                                <h4>{{ $video->title }}</h4>
                            </div>
                            <div class="col-12 p-0 mt-1 position-relative mb-3">
                                <!-- tags -->
                                @foreach($tags as $tag)
                                    <a href="javascript:void(0)" class="fw-bold">#{{ $tag }}</a>
                                @endforeach

                                <div class="video-actions-btns text-end p-0">
                                    <a href="javascript:void(0)" class="btn btn-light-info btn-sm border">
                                        <i class="ph-duotone text-primary ph-bookmark"></i>
                                    </a>

                                    @if($handler::owns($canEditVideo->scope, $video->author == $loggedUser->id))
                                        <a href="javascript:void(0)" class="btn btn-light-warning btn-sm border">
                                            <i class="ph-duotone ph-pencil"></i>
                                        </a>

                                        <a href="javascript:void(0)" class="btn btn-light-danger btn-sm border">
                                            <i class="ph-duotone ph-trash"></i>
                                        </a>

                                        <a href="{{ route('videos.timestamp', $video->id) }}" class="btn btn-primary btn-sm">
                                            <i class="ph-duotone ph-magic-wand"></i> &nbsp;
                                            <span class="d-none d-md-inline"> {{ __('Enhance') }}</span>
                                        </a>
                                    @endif
                                </div>
                            </div>
                            <div class="video-description col-12 pt-3 border-top">
                                <p>{{ $video->description }}</p>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- tabs: keynotes, suggestions -->
                <div class="col-xl-4 col-md-12">
                    <div class="card border-0 h-100">
                        <div class="card-body p-2">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="suggested-tab" data-bs-toggle="tab" data-bs-target="#suggested" type="button" role="tab" aria-controls="suggested" aria-selected="true">{{ __('Suggested') }}</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="keynotes-tab" data-bs-toggle="tab" data-bs-target="#keynotes" type="button" role="tab" aria-controls="keynotes" aria-selected="false">{{ __('keynotes') }}</button>
                                </li>
                            </ul>

                            <!-- tabs: keynotes|suggested -->
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade" id="keynotes" role="tabpanel" aria-labelledby="keynotes-tab">
                                    <div class="card-body">
                                        @if(count($video->keynotes))
                                            @foreach($video->keynotes as $keynote)
                                                <a href="javascript:void(0)" class="keynoteSeek" data-time="{{ $keynote['time'] }}">
                                                    <div class="row mb-3 position-relative">
                                                        <div class="col-md-4 col-sm-3 col-4 px-2 position-relative">
                                                            <div class="video-thumb rounded-3 col-4 ratio ratio-16x9"
                                                                style="width:100%; background: url('{{ urlPath($keynote['thumbnail']) }}') center center / cover no-repeat">     
                                                            </div>
                                                            <span class="badge rounded-pill bg-light-primary video-duration position-absolute"
                                                                style="bottom: 5px; right: 12px;">
                                                                {{ carbon()::parse(floatval($keynote['time']))->format('H:i:s') }}
                                                            </span>
                                                        </div>
                                                        <div class="col-md-8 col-sm-9 col-8 pt-2">
                                                            <h6 class="fw-bold mb-0">{{ $keynote['title'] }}</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            @endforeach
                                        @else
                                            @include('app.partials.empty', [
                                                'emptyText' => __('No keynotes added yet.')
                                            ])
                                        @endif
                                    </div>
                                </div>

                                <div class="tab-pane fade show active" id="suggested" role="tabpanel" aria-labelledby="suggested-tab">
                                    <div class="card-body" style="max-height: 100%; overflow-y: auto;">
                                        @if(count($similarVideos))
                                            @foreach($similarVideos as $similarVideo)
                                                <div class="row mb-3 position-relative">
                                                    <div class="col-md-4 col-sm-3 col-4 px-2 position-relative">
                                                        <div class="video-thumb rounded-3 col-4 ratio ratio-16x9"
                                                            style="width:100%; background: url('{{ urlPath($similarVideo->thumbnail) }}') center center / cover no-repeat">     
                                                        </div>
                                                        <span class="badge rounded-pill bg-light-primary video-duration position-absolute"
                                                            style="bottom: 5px; right: 12px;">
                                                            {{ carbon()::parse($similarVideo->duration)->format('H:i:s') }}
                                                        </span>
                                                    </div>
                                                    <div class="col-md-8 col-sm-9 col-8">
                                                        <a href="{{ route('videos.show', $similarVideo->id) }}" class="text-dark text-container tl-2 mb-1">
                                                            <h6 class="fw-bold mb-0">{{ $similarVideo->title }}</h6>
                                                        </a>
                                                        @foreach (array_slice(array_map('trim', explode(',', $similarVideo->tags)), 0, 3) as $taggy)
                                                            <a href="{{ route('videos.group', $taggy) }}" class="badge bg-light text-dark">#{{ $taggy }}</a>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            @endforeach
                                        @else
                                            @include('app.partials.empty', [
                                                'emptyText' => __('No related videos found.')
                                            ])
                                        @endif
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
@script('/assets/js/plugins/video.min.js','src')
@script('app.videos.scripts.show')