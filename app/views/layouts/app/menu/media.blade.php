<li class="pc-item pc-caption">
    <label>{{__('Media')}}</label>
    <i class="ph-duotone ph-video {{ $menuLink == 'media' ? 'activate' : '' }}"></i>
</li>

<li class="pc-item {{ active($active, 'videos') }}">
    <a href="/app/videos" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-video"></i>
        </span>
        <span class="pc-mtext">{{__('Videos')}}</span>
    </a>
</li>
<li class="pc-item {{ active($active, 'video-history') }}">
    <a href="/app/videos/history" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-timer"></i>
        </span>
        <span class="pc-mtext">{{__('History')}}</span>
    </a>
</li>
<li class="pc-item {{ active($active, 'video-bookmark') }} ">
    <a href="/app/videos/bookmarks" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-bookmark"></i>
        </span>
        <span class="pc-mtext">{{__('Bookmarks')}}</span>
    </a>
</li>
@if($handler::can('video', 'create'))
    <li class="pc-item">
        <a href="/app/videos/upload" class="pc-link">
            <span class="pc-micon">
                <i class="ph-duotone ph-upload"></i>
            </span>
            <span class="pc-mtext">{{__('Upload')}}</span>
        </a>
    </li>
@endif