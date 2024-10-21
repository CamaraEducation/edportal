const videoLength = document.getElementById('video-player');
videoLength.onloadedmetadata = function() {
    $('.stamp-slider').attr('max', videoLength.duration);
};

// delete timestamp
$(document).on('click', '#removeTimestampButton', function() {
    $(this).closest('.stamp-group').remove();
});

// add timestamp
$(document).on('click', '#addTimestampButton', function() {
    var index = $('.stamp-group').length;
    var newStamp = `
        <div class="row mb-3 stamp-group form-group" data-index="${index}">
            <div class="col-md-8 col-sm-12 position-relative">
                <button type="button" class="btn btn-danger" id="removeTimestampButton" style="position: absolute;right: 16px;top: 4px;">
                    <i class="fa fa-trash"></i>
                </button>
                <input type="text" class="form-control mb-2 stamp-title" placeholder="Enter Title" required>
                <input type="range" class="form-range custom-range stamp-slider" min="0" max="${videoLength.duration}" value="0" step="0.1">
                <button type="button" class="btn btn-light timeInMin">00:00:00</button>
                <button type="button" class="btn btn-info captureNow">{{ __('Current Time') }}</button>
            </div>
            <div class="col-md-4 col-sm-12 bg-light">
                <img src="/assets/images/loading.gif" class="img-fluid stamp-preview" alt="Preview">
            </div>
        </div>
    `
    // newStamp = newStamp.replace(/0/g, index);
    $('#timestampContainer').append(newStamp);
});

// listen to range input change event
$(document).on('input', '.stamp-slider', function() {
    var time = $(this).val();
    var index = $(this).closest('.stamp-group').data('index');
    var preview = $(this).closest('.stamp-group').find('.stamp-preview');
    preview.show();
    preview.attr('src', '/assets/images/loading.gif');
    
    // buffer thumbnail from timestampGen video
    var video = document.getElementById('timestampGen');
    video.currentTime = time;
    video.onseeked = function() {
        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        preview.attr('src', canvas.toDataURL());
    };
    
    // set the time in human readable format
    let readableTime = sec2HumanTime(time);
    $(this).closest('.stamp-group').find('.timeInMin').text(readableTime);
});

// capture current time
$(document).on('click', '.captureNow', function() {
    var time = videoLength.currentTime;
    var index = $(this).closest('.stamp-group').data('index');
    var preview = $(this).closest('.stamp-group').find('.stamp-preview');
    preview.show();
    preview.attr('src', '/assets/images/loading.gif');
    
    // buffer thumbnail from timestampGen video
    var video = document.getElementById('timestampGen');
    video.currentTime = time;
    video.onseeked = function() {
        var canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        preview.attr('src', canvas.toDataURL());
    };

    // update the range input value
    $(this).closest('.stamp-group').find('.stamp-slider').val(time);

    
    // set the time in human readable format
    let readableTime = sec2HumanTime(time);
    $(this).closest('.stamp-group').find('.timeInMin').text(readableTime);
});

// save timestamps: [...[title: string, time: number, thumbnail: string]]
$(document).on('click', '#saveTimestampsButton', function() {
    const timestamps = [];
    $('.stamp-group').each(function() {
        var title = $(this).find('.stamp-title').val();
        var time = $(this).find('.stamp-slider').val();

        // validation
        if (!title || time == 0) {
            toast.error({ message: 'Please fill all fields' })
            return;
        }

        var thumbnail = $(this).find('.stamp-preview').attr('src');
        timestamps.push({title, time, thumbnail});
    });
    
    // save to db
    $.ajax({
        url: "{{ route('videos.timestamp', $video->id) }}",
        type: 'POST',
        data: {
            _token: csrf_token,
            timestamps: timestamps
        },
        success: function(response) {
            if(response.status) {
                toast.success({ message: 'Timestamps saved successfully' });
            } else {
                toast.error({ message: 'An error occurred' });
                // console.log(response);
            }
        },
        error: function(error) {
            toast.error({ message: 'An error occurred' });
        }
    });
});

function sec2HumanTime(seconds) {
    var date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(11, 8);
}