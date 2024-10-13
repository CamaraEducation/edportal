function previewVideo() {
    const videoSource = document.getElementById('videoSource').files[0];
    const videoPreview = document.getElementById('videoPreview');
    const videoPreviewModal = new bootstrap.Modal(document.getElementById('videoPreviewModal'));

    if (videoSource) {
        const videoURL = URL.createObjectURL(videoSource);
        videoPreview.src = videoURL;
        videoPreviewModal.show();
    }
}

// extract title from the video source
$('#videoSource').on('change', function() {
    const videoSource = document.getElementById('videoSource').files[0];
    const videoTitle = document.getElementById('videoTitle');
    const videoDuration = document.getElementById('videoDuration');

    if(videoTitle.value === '' && videoSource) {
        const videoSourceName = videoSource.name.split('.').slice(0, -1).join('.');
        videoTitle.value = videoSourceName.replace(/[^a-zA-Z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
    }

    // calculate the video duration: <input type="hidden" name="video-duration" id="videoDuration" value="0"></input>
    const video = document.createElement('video');
    video.src = URL.createObjectURL(videoSource);
    video.onloadedmetadata = function() {
        videoDuration.value = video.duration;
    };

    video.load();    
});