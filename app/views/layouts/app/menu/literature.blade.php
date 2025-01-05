<!-- literatures -->
<li class="pc-item pc-caption">
    <label>{{__('Literature')}}</label>
    <i class="ph-duotone ph-books {{ $menuLink == 'literature' ? 'activate' : '' }}"></i>
</li>

<li class="pc-item {{ active($active, 'docs') }}">
    <a href="{{ route('books.list') }}" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-book"></i>
        </span>
        <span class="pc-mtext">{{__('Docs')}}</span>
    </a>
</li>
<!--li class="pc-item">
    <a href="{{ route('slides.list') }}" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-cards"></i>
        </span>
        <span class="pc-mtext">{{__('Slides')}}</span>
    </a>
</li-->
<!--li class="pc-item {{ active($active, 'notes') }}">
    <a href="{{ route('notes.list') }}" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-pencil-circle"></i>
        </span>
        <span class="pc-mtext">{{__('Notes')}}</span>
    </a>
</li-->
<li class="pc-item">
    <a href="{{ route('literature.history') }}" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-timer"></i>
        </span>
        <span class="pc-mtext">{{__('History')}}</span>
    </a>
</li>
<li class="pc-item">
    <a href="{{ route('literature.bookmarks') }}" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-bookmark"></i>
        </span>
        <span class="pc-mtext">{{__('Bookmarks')}}</span>
    </a>
</li>

@if(in_array(auth()->user()['role'], ['student', 'admin']))
    <!--li class="pc-item pc-hasmenu">
        <a href="javascript:void(0)" class="pc-link">
            <span class="pc-micon">
                <i class="ph-duotone ph-archive"></i>
            </span>
            <span class="pc-mtext">{{ __('My Content') }}</span>
            <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
        </a>
        <ul class="pc-submenu">
            <li class="pc-item">
                <a href="@route('notes.mine')" class="pc-link">
                    <span class="pc-mtext">{{ __('Notes') }}</span>
                </a>
            </li>
            <li class="pc-item">
                <a href="@route('slides.my')" class="pc-link">
                    <span class="pc-mtext">{{ __('Slides') }}</span>
                </a>
            </li>
            <li class="pc-item">
                <a href="@route('notes.my')" class="pc-link">
                    <span class="pc-mtext">{{ __('Documents') }}</span>
                </a>
            </li>
        </ul>
    </li-->
@endif