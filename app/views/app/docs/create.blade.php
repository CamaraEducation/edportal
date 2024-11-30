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
                    <form action="{{ route('docs.store') }}" class="row" enctype="multipart/form-data" onsubmit="submitForm(event)">
                        @csrf

                        <div class="col-md-6 col-sm-12 form-group">
                            <label for="doc-name" class="form-label">{{ __('Document Name') }}</label>
                            <input type="text" value="" class="form-control" id="docName" name="doc-name" placeholder="{{ __('Josh and Hamlet, The story ...') }}" required>
                        </div>

                        <div class="col-md-6 col-sm-12 form-group">
                            <label for="doc-tags" class="form-label">{{ __('Document Tags') }} <small class="text-muted">({{ __('max 5') }})</small></label>
                            <select class="form-select" id="docTags" name="doc-tags[]" multiple required
                                data-placeholder="{{ __('Select document tags') }}"
                                data-maximum-selection-length="5"
                                data-allow-clear="true">
                                @foreach($tags as $tag)
                                    <option value="{{ $tag->slug }}">{{ $tag->name }}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="col-md-12 form-group">
                            <label for="doc-description" class="form-label">{{ __('Document Description') }}</label>
                            <textarea class="form-control" id="docDescription" name="doc-description" rows="3" placeholder="{{ __('lorem ipsum dolor sit amet ...') }}" required></textarea>
                        </div>

                        <!-- pdf only -->
                        <div class="col-md-12 form-group">
                            <label for="doc-file" class="form-label">{{ __('Document File') }}</label>
                            <input type="file" class="form-control" id="docFile" name="doc-file" accept=".pdf" required>
                        </div>

                        <div class="col-12 text-center card card-body border-0 pb-0">
                            <div class="form-group">
                                <button type="reset" class="btn btn-light-secondary me-2">
                                    <i class="ph-duotone ph-x-circle"></i>
                                    <span class="d-none d-md-inline ms-1">{{ __('Clear') }}</span>
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
@endsection
@script('app.docs.scripts.create')
