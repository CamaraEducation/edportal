$('#searchDocs').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    
    // send the search query to the server
    $.ajax({
        url: "{{ route('videos.search') }}",
        method: 'POST',
        data: {
            _token: csrf_token,
            search: value
        },
        success: function(response) {
            if (response.status) {
                $('#docsList').html(response.html);
            }else{
                toast.error(response.message);                    
            }
        }
    });
});