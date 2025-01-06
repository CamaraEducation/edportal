<div class="row">
    @if($documents->count())
        @foreach ($documents as $document)
            <div class="col-xl-2 col-md-3 col-sm-4 col-6 mb-4 position-relative" data-item-title="{{ $document->name }}" id="docCol-{{ $document->id }}"
                data-bs-toggle="tooltip" data-bs-placement="bottom" title="{!! $document->name !!}">
                <a href="javascript:void(0)" class="book-link cm-toggle" data-cm-target="#manageDocCm" onclick="initWowBook(event)"
                   data-cm-bind='{"id": {{ $document->id }}, "name": "{{ $document->name }}"}'
                   data-page-resume="{{ $document->user_activity->resume ?? null }}"
                   data-doc-source="{{ urlPath($document->source) }}"
                   data-doc-hash="{{ md5($document->id) }}"
                   data-doc-id="{{ $document->id }}">

                    <div class="book-card">
                        <div class="book-cover" data-pattern-id="{{ md5($document->name . $document->id) }}"></div>
                        <div class="book-info">
                            <h5 class="text-container tl-2">{!! $document->name !!}</h5>
                        </div>
                    </div>

                </a>
                <button class="btn btn-light position-absolute start-20 top-10 bookmarkDoc" onclick="bookmarkDocument('{{ $document->id }}')"
                    data-bs-toggle="tooltip" data-bs-placement="right" title="Bookmark" >
                    <i class="ph-duotone ph-bookmark"></i>
                </button>
            </div>
        @endforeach

    @else
        <div class="p5">
            @include('app.partials.empty', [
                'emptyTitle' => 'No documents found',
                'emptyText' => 'There are no documents available at the moment.'
            ])
        </div>
    @endif
</div>

<div class="context-menu-dialog" id="manageDocCm">
    <ul>
        <li data-cm-callback="editDocument">{{ __('Edit Document') }}</li>
        <li data-cm-callback="deleteDocument">{{ __('Delete Document') }}</li>
    </ul>
</div>

@if(request()->isAjax())
    <script>
        $(".book-link").on("click", function(e) {
            initWowBook(e);
        });
    </script>
@endif
