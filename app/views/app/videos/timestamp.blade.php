@extends('layouts.app')	
@section('content')
	<div class="pc-container">
		<div class="pc-content pt-1">

            <div class="row">
                <div class="col-md-12 col-sm-12 mx-auto">
                    <div class="card mb-1 border-0">
                        <div class="card-body pt-2 pb-3 px-2">
                            <video id="timestampGen" class="d-none" src="{{ urlPath($video->source) }}"></video>
                            <div class="video-player border border-3 rounded-3 overflow-hidden" style="max-height: calc(100vh - 140px);">
                                <video id="video-player" class="video-js vjs-big-play-centered vjs-fluid rounded-3 overflow-hidden" controls
                                    preload="auto" width="640" height="264" data-setup='{"poster": "{{ urlPath($video->thumbnail) }}"}' style="max-height: calc(100vh - 142px);">
                                    <source src="{{ urlPath($video->source) }}" type="video/mp4">
                                </video>
                            </div>
                        </div>

                        <div class="card-footer pt-0 mb-1 border-0 row">
                            <div class="col-12 p-0">
                                <h4>{{ $video->title }}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="card border-0">
                        <div class="card-body">
                            <form id="timestampForm">
                                
                                <div id="timestampContainer">
                                    @if(count($video->keynotes))
                                        @foreach ($video->keynotes as $timestamp)
                                            <div class="row mb-3 stamp-group form-group" data-index="0">
                                                <div class="col-md-8 col-sm-12 position-relative">
                                                    <button type="button" class="btn btn-danger" id="removeTimestampButton" 
                                                        style="position: absolute;right: 16px;top: 4px;">
                                                        <i class="fa fa-trash"></i>
                                                    </button>

                                                    <input type="text" class="form-control mb-2 stamp-title" placeholder="Enter Title" required
                                                        value="{{$timestamp['title']}}">

                                                    <input type="range" class="custom-range stamp-slider" min="0" value="{{$timestamp['time']}}" step="0.1">
                                                    <button type="button" class="btn btn-info timeInMin">
                                                        {{ carbon()::parse(floatval($timestamp['time']))->format('H:i:s') }}
                                                    </button>
                                                </div>
                                                <div class="col-md-4 col-sm-12">
                                                    <img src="{{urlPath($timestamp['thumbnail'])}}" class="img-fluid stamp-preview" alt="Preview">
                                                </div>
                                            </div>                                        
                                        @endforeach

                                    @else
                                        <div class="row mb-3 stamp-group form-group" data-index="0">
                                            <div class="col-xl-10 col-md-8 col-sm-12 position-relative">
                                                <button type="button" class="btn btn-danger" id="removeTimestampButton"
                                                    style="position: absolute;right: 16px;top: 4px;">
                                                    <i class="fa fa-trash"></i>
                                                </button>

                                                <input type="text" class="form-control mb-2 stamp-title" placeholder="Enter Title" required>
                                                <input type="range" class="form-range custom-range stamp-slider" min="0" value="0" step="0.1">

                                                <button type="button" class="btn btn-light timeInMin">00:00:00</button>
                                                <button type="button" class="btn btn-info captureNow">{{ __('Current Time') }}</button>
                                            </div>
                                            <div class="col-xl-2 col-md-4 col-sm-12 bg-light rounded">
                                                <img src="" class="img-fluid stamp-preview" alt="Preview" style="display:none;">
                                            </div>
                                        </div>
                                    @endif
                                </div>

                                <button type="button" class="btn btn-secondary" id="addTimestampButton">Add Another Timestamp</button>
                                <button type="button" class="btn btn-primary" id="saveTimestampsButton">Save Timestamps</button>
                            </form>
                        </div>
                    </div>
                </div>
				
            </div>

        </div>
    </div>
@endsection
@script('/assets/js/plugins/video.min.js','src')
@script('app.videos.scripts.show')
@script('app.videos.scripts.timestamp')