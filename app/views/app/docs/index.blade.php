@extends('layouts.app')

@style('/assets/js/plugins/flipper/wow_book.css','src')
@style('/assets/css/utils/docs.css','src')

@style('app.docs.styles.show')

@section('content')
	<div class="pc-container">
		<div class="pc-content">

            <div class="row mb-3">
                <div class="col-md-12">
                    <div class="card-body position-relative">
                        <input type="text" class="form-control" id="searchDocs" placeholder="Search documents...">
                        <div class="position-absolute floating-action">
                            <a href="{{ route('docs.create') }}" class="btn btn-primary">
                                <span class="d-md-none"><i class="fa fa-plus"></i></span>
                                <span class="d-none d-md-block">{{ __('Upload Document') }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="docsList" class="mb-3">
                @include('app.docs.partials.list')
            </div>

            <div class="text-center">
                {!! $pagination->render() !!}
            </div>

        </div>
    </div>
@endsection

@script('/assets/js/plugins/geopattern.min.js','src')
@script('/assets/js/plugins/flipper/jquery.easing.min.js','src')
@script('/assets/js/plugins/flipper/jquery.fittext.js','src')
@script('/assets/js/plugins/flipper/pdf.combined.min.js','src')
@script('/assets/js/plugins/flipper/wow_book.min.js','src')

@script('app.docs.scripts.index')
@script('app.docs.scripts.show')