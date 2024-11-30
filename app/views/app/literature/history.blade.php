@extends('layouts.app')	
@style('/assets/js/plugins/flipper/wow_book.css','src')
@style('/assets/css/utils/docs.css','src')

@style('app.docs.styles.show')
@section('content')
	<div class="pc-container">
		<div class="pc-content">
            <div>
                <h5>Documents</h5>
                <p>Documents Recently opened</p>
            </div>
            <div class="row" id="docsList">
                @if($documents->count())
                    @foreach ($documents as $history)
                        <div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4 position-relative" data-item-title="{{ $history->document->name }}" id="docCol-{{ $history->document->id }}"
                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="{!! $history->document->name !!}">
                            <a href="javascript:void(0)" class="book-link cm-toggle" data-cm-target="#manageDocCm" onclick="initWowBook(event)"
                            data-cm-bind='{"id": {{ $history->document->id }}, "name": "{{ $history->document->name }}"}'
                            data-page-resume="{{ $history->document->user_activity->resume ?? null }}"
                            data-doc-source="{{ urlPath($history->document->source) }}"
                            data-doc-hash="{{ md5($history->document->id) }}"
                            data-doc-id="{{ $history->document->id }}">

                                <div class="book-card">
                                    <div class="book-cover" data-pattern-id="{{ md5($history->document->name . $history->document->id) }}"></div>
                                    <div class="book-info">
                                        <h5>{!! strip_tags($history->document->name) !!}</h5>
                                    </div>
                                </div>

                            </a>
                            <button class="btn btn-light position-absolute start-20 top-10" id="bookmarkDoc" onclick="bookmarkDocument('{{ $history->document->id }}')"
                                data-bs-toggle="tooltip" data-bs-placement="right" title="Bookmark">
                                <i class="ph-duotone ph-bookmark"></i>
                            </button>
                        </div>
                    @endforeach

                @else
                    <div class="p-5">
                        @include('app.partials.empty', [
                            'title' => 'No documents found',
                            'message' => 'There are no documents available at the moment.'
                        ])
                    </div>
                @endif
            </div>

            <div class="context-menu-dialog" id="manageDocCm">
                <ul>
                    <li data-cm-callback="editDocument">{{ __('Edit Document') }}</li>
                    <li data-cm-callback="deleteDocument" class="text-danger">{{ __('Delete Document') }}</li>
                </ul>
            </div>

            @if(request()->isAjax())
                <script>
                    $(".book-link").on("click", function(e) {
                        initWowBook(e);
                    });
                </script>
            @endif

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