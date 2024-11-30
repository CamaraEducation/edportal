function fullscreenErrorHandler() {
    if (self != top) {
        return "The frame is blocking full screen mode. Click on 'remove frame' button above and try to go full screen again.";
    }
}

function getOptions() {
    // Get source from local storage
    var pdfSource = localStorage.getItem('pdfSource');
    if (!pdfSource) {
        console.log('No PDF source found');
        return;
    }

    return {
        height: 1024,
        width: 725 * 2,
        pdf: pdfSource,
        pdfFind: true,
        pdfTextSelectable: true,
        lightbox: ".book-link",  // Updated this to be tied to the trigger dynamically
        lightboxClass: "lightbox-pdf",
        centeredWhenClosed: true,
        hardcovers: true,
        curl: false,
        toolbar: "lastLeft, left, currentPage, right, lastRight, find, toc, zoomin, zoomout, fullscreen",
        responsiveHandleWidth: 50,
        onFullscreenError: fullscreenErrorHandler,
    };
}

function initWowBook(event){
    event.preventDefault();

    var docId = $(event.currentTarget).data('doc-id');
    var docHash = $(event.currentTarget).data('doc-hash');
    var pdfSource = $(event.currentTarget).data('doc-source');
    var pageResume = $(event.currentTarget).data('page-resume');

    // crate a new element inside #docList with the id of the document hash
    var hash = '#' + docHash;
    var newElement = '<div id="' + docHash + '"></div>';
    $('#docsList').append(newElement);

    // record document access
    recordDocumentAccess(docId);

    // uri structure: /app/literature/docs#hash/23
    var uri = window.location.href;
    if(uri.includes('#')){
        var uri = uri.split('#')[0];
        if(uri.endsWith('/')){ uri = uri.slice(0, -1); }

        uri += hash + '/' + pageResume;
        window.location.href = uri;
    }    

    localStorage.setItem('documentId', docId);
    localStorage.setItem('pdfSource', pdfSource);

    // buildBook("#page");
    buildBook(hash)
}

function buildBook(elem) {
    // Check if the element exists
    if (!$(elem).length) {
        console.error("Element not found:", elem);
        return;
    }

    var book = $.wowBook(elem);

    // If book doesn't exist, initialize WowBook with options
    if (!book) {
        $(elem).wowBook(getOptions());
        book = $.wowBook(elem);  // Re-fetch the book instance after initialization
    }

    if (!book) {
        console.error("WowBook instance not initialized properly.");
        return;
    }

    book.opts.onHideLightbox = function(){
        setTimeout( function(){ 
            book.destroy();
            localStorage.removeItem('pdfSource');
            localStorage.removeItem('documentId');
        }, 100);
    }

    // Show the lightbox
    book.showLightbox();
}

// record document view
function recordDocumentAccess(docId) {
        
    let route = "{{ route('docs.show', ':docId') }}";

    try {
        $.ajax({
            url: route.replace(':docId', docId),
            type: 'POST',
            data: {
                _token: csrf_token
            },
            error: function(error) {
                console.error('An error occurred while recording document access:', error);
            }
        });
    }
    
    catch (error) { console.error(error); }
}

$(document).ready(function() {

    // clear the localstorage
    localStorage.removeItem('pdfSource')
    localStorage.removeItem('documentId')


    setInterval(function(){
        var docId = localStorage.getItem('documentId');
        if(docId){
    
            // extract page number from url
            const page = Number(window.location.href.split('/').pop());
    
            let route = "{{ route('content.track') }}";
            $.ajax({
                url: route,
                type: 'POST',
                data: {
                    _token: csrf_token,
                    content_id: docId,
                    content_type: 'document',
                    current_state: page
                },
                success: function(response) {
                    if(response.status){
                        // find book-link with data-doc-id and update page-resume
                        var bookLink = $('.book-link[data-doc-id="' + docId + '"]');
                        if(bookLink){
                            bookLink.data('page-resume', page);
                        }
                    }
                },
                error: function(error) {
                    console.error('An error occurred while tracking document access')
                }
            });
        }
    }, 3000);    
});