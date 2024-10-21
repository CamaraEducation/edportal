// videojs.min.css
injectStylesheet('/assets/css/plugins/videojs.min.css');
injectStylesheet('/assets/css/plugins/videojs-fantasy.min.css');


localStorage.setItem('lastTracked', 0);
const videoPlayer = videojs('video-player');

$('.keynoteSeek').on('click', function() {
    let time = $(this).data('time');
    let _videoPlayer = videojs('video-player');
    _videoPlayer.currentTime(time);
    _videoPlayer.play();
});

if(videoPlayer.hasClass('trackStamp')){

    // resume video data-video-resume
    let resume = $('.trackStamp').data('video-resume');
    if(resume){
        videoPlayer.currentTime(resume);
        // TODO: videoPlayer.play();
    }


    // video play track
    videoPlayer.on('timeupdate', function() {
        let currentTime = Number(videoPlayer.currentTime().toFixed(0));
        
        // when video cur time is is divisible by 5, send a request to the server
        if(currentTime % 5 === 0 && currentTime > 0){

            // check if localstorage 'lastTracked' exists
            let lastTracked = localStorage.getItem('lastTracked');
            if(lastTracked && currentTime - lastTracked < 5){
                return;
            }

            localStorage.setItem('lastTracked', currentTime);

            $.ajax({
                url: "{{ route('content.track') }}",
                method: 'POST',
                data: {
                    _token: csrf_token,
                    content_id: "{{ $video->id }}",
                    content_type: 'video',
                    current_state: currentTime
                }
            });
        }
    });
}