const csrf_token = $('meta[name="csrf-token"]').attr('content');

function submitForm(event, responseHandler = null){
    event.preventDefault();

    const form = $(event.target); // Get the form element
    const isMultipart = form.attr('enctype') === 'multipart/form-data'; // Check if it's a multipart form

    // Create a FormData object if multipart, else serialize the form
    let formData;
    if (isMultipart) {
        formData = new FormData(event.target);
    } else {
        formData = form.serialize();
    }

    // find the submit button
    const submitButton = form.find('button[type="submit"]');
    const buttonLabel = submitButton.html() ?? null;
    
    if (submitButton) {
        buttonState(submitButton, 'loading');
    }

    $.ajax({
        url: form.attr('action'),
        method: form.attr('method') ?? 'POST',
        // headers: {
            // 'X-CSRF-TOKEN': csrf_token
        // },
        data: formData,
        processData: !isMultipart, // Don't process the data if it's multipart (FormData handles that)
        contentType: isMultipart ? false : 'application/x-www-form-urlencoded; charset=UTF-8', // Set content type accordingly
        success: function(response) {
            if (responseHandler && typeof responseHandler === 'function') {
                responseHandler(response);
            }else{
                if (response.status) {
                    toast.success({ message: response.message });
                }else{
                    toast.error({ message: response.message });
                }

                if(response.redirect){
                    setTimeout(() => {
                        window.location.href = response.redirect;
                    }, 1000);
                }
            }
        },
        error: function() {
            toast.error({ message: 'Unknown Error Occurred' });
        },
        complete: function() {
            // Reset button state if buttonId is provided
            if (submitButton) {
                buttonState(submitButton, 'reset', buttonLabel);
            }
        }
    });
}

// initializers and settings
const toast = iziToast;
toast.settings({
    timeout: 15000,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
    position: 'bottomCenter',
    close: true,
    progressBar: true,
    pauseOnHover: true
});