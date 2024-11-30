// injectStylesheet('/assets/css/utils/docs.css')

$(document).ready(function() {
    generatePattern('.book-cover');

    $('#searchDocs').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        
        // send the search query to the server
        $.ajax({
            url: "{{ route('docs.search') }}",
            method: 'POST',
            data: {
                _token: csrf_token,
                search: value
            },
            success: function(response) {
                if (response.status) {
                    $('#docsList').html(response.html);
                    generatePattern('.book-cover');
                }else{
                    toast.error({ message: response.message ?? 'An error occured while trying to search for documents' });                  
                }
            }
        });
    });
});

function generatePattern(target){
    $(target).each(function() {
        var pattern = GeoPattern.generate($(this).data('pattern-id'));
        $(this).css('background-image', pattern.toDataUrl());
    });
}

function editDocument(data){
    const route = "{{ route('docs.edit', ':docId') }}";
    toast.info({ message: 'Loading document for editing...' });

    $.ajax({
        url: route.replace(':docId', data.id),
        method: 'GET',
        success: function(response){

            if(!response.status){
                toast.error(response.message);
                return;
            }

            $('#dispensableModalLabel').html('Edit Document');
            $('#dispensableModalBody').html(response.html);
            $('#dispensableModal').modal('show');
        },
        error: function(error){
            toast.error({ message: 'An error occured while trying to load the document for editing' });
        }
    });
}

function deleteDocument(data){
    var route = ("{{ route('docs.delete', ':docId') }}").replace(':docId', data.id);
    
    // confirm the delete action
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete this document, this action cannot be undone.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

        // cursor loading state
        $('body').css('cursor', 'wait');

        if (result.isConfirmed) {
            $.ajax({
                url: route,
                method: 'GET',
                success: function(response){
                    if(response.status){
                        toast.success({ message: response.message });
                        $('#docCol-'+data.id).remove();
                    }else{
                        toast.error({message: response.message ?? 'An error occured while trying to delete the document'});
                    }
                },
                error: function(error){
                    toast.error({ message: 'An error occured while trying to delete the document' });
                },
                complete: function(){
                    $('body').css('cursor', 'default');
                }
            });
        }
    });
}

function bookmarkDocument(docId) {
    const route = ("{{ route('docs.bookmark', ':id') }}").replace(":id", docId);

    $.get(route, function(response) {
        if (response.status){
            toast.success({ message: response.message });
        }else{
            toast.error({ message: response.message ?? 'An error occured while trying to bookmark the document' });
        }
    });
}