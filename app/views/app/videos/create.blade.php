@extends('layouts.app')	
@section('content')
	<div class="pc-container">
		<div class="pc-content">

            <div class="row mb-3">
                <div class="col-12">
                    <div class="progress">
                        <div id="upload-progress" class="progress-bar" role="progressbar" style="width: 0%;">0%</div>
                    </div>
                </div>
            </div>

            <div class="card border-0">
                <div class="card-body">
                    <form action="{{ route('videos.store') }}" class="row" id="uploadVideoForm" enctype="multipart/form-data" onsubmit="submitForm(event)">
                        @csrf
                        <div class="col-md-6 col-12 mb-2">
                            <div class="form-group">
                                <label for="video-title" class="form-label">{{ __('Video Title') }}</label>
                                <input type="text" name="video-title" id="videoTitle" class="form-control" placeholder="{{ __('Josh and Hamlet, The story ...') }}" required>
                            </div>
                        </div>
                        <div class="col-md-6 col-12 mb-2">
                            <div class="form-group">
                                <label for="video-tags" class="form-label">
                                    {{ __('Video Tags') }}
                                    <small class="text-muted fw-normal">({{ __('max 5') }})</small>
                                </label>
                                <select name="video-tags[]" id="videoTags" class="form-select" multiple required
                                    data-placeholder="{{ __('Select video Tags') }}" data-allow-clear="true" data-maximum-selection-length="5">
                                    @foreach($categories as $category)
                                        <option value="{{ $category->slug }}">{{ $category->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <!-- description -->
                        <div class="col-12 mb-2">
                            <div class="form-group">
                                <label for="video-description" class="form-label">{{ __('Video Description') }}</label>
                                <textarea name="video-description" id="videoDescription" class="form-control" rows="5" placeholder="{{ __('lorem ipsum dolor sit amet ...') }}" required></textarea>
                            </div>
                        </div>
                        <!-- thumbnail: accept only jpg, jpeg, png -->
                        <div class="col-md-6 col-12 mb-2">
                            <div class="form-group">
                                <label for="video-thumbnail" class="form-label">{{ __('Video Thumbnail') }}</label>
                                <input type="file" name="video-thumbnail" id="videoThumbnail" class="form-control" accept="image/*" required>
                            </div>
                        </div>
                        <!-- video source accept all video formats -->
                        <div class="col-md-6 col-12 mb-2">
                            <div class="form-group">
                                <label for="video-source" class="form-label">{{ __('Video Source') }}</label>
                                <input type="file" name="video-source" id="videoSource" class="form-control" accept="video/*" required>
                            </div>
                        </div>

                        <!-- video duration: auto calculated -->
                        <input type="hidden" name="video-duration" id="videoDuration" value="00:00:00">

                        <!-- buttons: clear, preview, submit -->
                        <div class="col-12 text-center card card-body border-0 pb-0">
                            <div class="form-group">
                                <button type="reset" class="btn btn-light-secondary me-2">
                                    <i class="ph-duotone ph-x-circle"></i>
                                    <span class="d-none d-md-inline ms-1">{{ __('Clear') }}</span>
                                </button>
                                <button type="button" class="btn btn-light-info me-2" onclick="previewVideo()">
                                    <i class="ph-duotone ph-eye"></i>
                                    <span class="d-none d-md-inline ms-1">{{ __('Preview') }}</span>
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    <i class="ph-duotone ph-upload"></i>
                                    <span class="ms-1">{{ __('Upload') }}</span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>

    @include('app.videos.partials.preview')
@endsection
@script('app.videos.scripts.create')