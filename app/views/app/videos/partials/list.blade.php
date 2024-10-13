<div class="row">
    @if($videos->count())
        @foreach($videos as $video)
            <div class="col-xl-3 col-md-4 col-sm-6 col-12">
                <div class="card border-0">
                    <div class="card-body p-1">
                        <div class="video-thumb">
                            <a href="{{ route('videos.show', $video->id) }}" class="aspect-ratio aspect-ratio-16x9">
                                <div style="
                                    background: url('{{ urlPath($video->thumbnail) }}') center center / cover no-repeat;
                                    width: 100%; height: 150px;" class="video-list-cover rounded position-relative border mb-2">

                                    <div class="action-stats position-absolute start-10 bottom-10 bg-light p-1 rounded">
                                    </div>

                                    <div class="duration position-absolute end-10 bottom-10 bg-light p-1 rounded">
                                        <span class="video-duration">{{ carbon()::parse($video->duration)->format('H:i:s') }}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="video-content">
                            <h4 class="video-title">
                                <a href="{{ route('videos.show', $video->id) }}" title="{{ $video->title }}">{{ substring($video->title, 40) }}</a>
                            </h4>
                            <p class="video-meta">
                                <span class="video-date">{{ $video->created_at->diffForHumans() }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    @else
        @include('layouts.app.empty', [
            'title' => 'No videos found',
            'message' => 'There are no videos available at the moment.'
        ])
    @endif
</div>