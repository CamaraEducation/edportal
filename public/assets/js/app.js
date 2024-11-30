const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

layout_sidebar_change('false')
change_box_container('false')
layout_caption_change('true')

// Darkmode Switch
function change_theme_color(color){
    document.cookie = `theme_color=${color}; max-age=${60*60*24*365*30}; path=/`;
    layout_change(color);
}

const DarkModeState = document.cookie.split('; ').find(row => row.startsWith('theme_color='));
const switchDarkMode = document.getElementById('switchDarkMode');
if (switchDarkMode) {
    if (DarkModeState) {
        const theme_color = DarkModeState.split('=')[1];
        if (theme_color === 'dark') {
            switchDarkMode.checked = true;
        }
    }

    switchDarkMode.addEventListener('change', function() {
        if (this.checked) {
            change_theme_color('dark');
        } else {
            change_theme_color('light');
        }
    });
}

function change_theme_color(color){
    document.cookie = `theme_color=${color}; max-age=${60*60*24*365*30}; path=/`;
    layout_change(color);
}

// Under Development Alert
function underDevelopment(event){
    // prevent default action
    event.preventDefault();

    Swal.fire({
        title: 'Under Development',
        text: 'This feature is under development and will be available soon.',
        icon: 'info',
        confirmButtonText: 'OK'
    });
}


// Styles and Scripts Injection
function injectStylesheet(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.head.appendChild(link);
}

function injectScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function copyToClipboard(text) {
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
}

function submitForm(event, responseHandler = null) {
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
        headers: { 'X-CSRF-TOKEN': csrf_token },
        data: formData,
        processData: !isMultipart, // Don't process the data if it's multipart (FormData handles that)
        contentType: isMultipart ? false : 'application/x-www-form-urlencoded; charset=UTF-8', // Set content type accordingly
        xhr: function() {
            const xhr = new window.XMLHttpRequest();
            
            if (isMultipart) {
                // Upload progress for all files
                xhr.upload.addEventListener('progress', function(event) {
                    if (event.lengthComputable) {
                        const percentComplete = (event.loaded / event.total) * 100;
                        // Update progress UI for overall progress
                        $('#upload-progress').css('width', percentComplete + '%').text(Math.round(percentComplete) + '%');
                    }
                }, false);
            }

            return xhr;
        },
        success: function(response) {
            if (responseHandler && typeof responseHandler === 'function') {
                responseHandler(response);
            } else {
                if (response.status) {
                    toast.success({ message: response.message });
                } else {
                    toast.error({ message: response.message ?? 'An Unknown error occurred' });
                }

                if (response.redirect) {
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
            // Hide or reset progress bar after upload completion
            $('#upload-progress').css('width', '0%').text('');
        },
        // Only needed if multipart data
        cache: false,
        contentType: false,
        processData: false
    });
}

function simulateClick(identifier) {
    //document.querySelector(identifier).click();
    $(identifier).click();
}

// initializers and settings
const toast = iziToast;
toast.settings({
    timeout: 1500,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
    position: 'bottomCenter',
    close: true,
    progressBar: true,
    pauseOnHover: true
});

$(document).ready(function() {
    
    new kursor()
    $('.form-select').addClass('d-none');

    setTimeout(() => {
        $('.form-select').removeClass('d-none');
        $('.form-select').select2();
    }, 300);

    // Datepicker
    if($('.datepicker').length) {
        $('.datepicker').datepicker({
            format: 'yyyy-mm-dd',
            autoclose: true,
            todayHighlight: true
        });
    }

    // Media Preview
    $('.media-preview').click(function() {
        $(this).siblings('input[type="file"]').click();

        $(this).siblings('input[type="file"]').change(function() {
            var file = this.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                $('.media-preview').css('background-image', 'url(' + e.target.result + ')');
            }
            reader.readAsDataURL(file);
        });

    });

    // Language Switch
    $('#inputChangeLang').on('change', function() {
        let lang = $(this).val();
        document.cookie = "lang=" + lang + "; max-age=" + 60 * 60 * 24 * 365 + "; path=/";
        toast.success({
            message: 'Language changed successfully',
            position: 'bottomCenter'
        });
        setTimeout(() => { location.reload();}, 1000);
    });

    // sidebar setup
    setTimeout(() => {
        
        var activateParent = $('.activate').parent();
        if (activateParent) {
            $('.activate').parent().addClass('active');
            var activateParentDataTarget = activateParent.data('bs-target');
            $(activateParentDataTarget).addClass('active show');
        }
        
    }, 100);
}); 