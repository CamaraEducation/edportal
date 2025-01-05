<li class="pc-item pc-caption">
    <label>{{__('LMS')}}</label>
    <i class="ph-duotone ph-student {{ $menuLink == 'lms' ? 'activate' : '' }}"></i>
</li>

<li class="pc-item {{ active($active, 'courses') }}">
    <a href="@route('courses.index')" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-tray"></i>
        </span>
        <span class="pc-mtext">{{__('Courses')}}</span>
    </a>
</li>

<!--li class="pc-item">
    <a href="" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-puzzle-piece"></i>
        </span>
        <span class="pc-mtext">{{__('Assessments')}}</span>
    </a>
</li>

<li class="pc-item">
    <a href="" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-chart-bar"></i>
        </span>
        <span class="pc-mtext">{{__('Reports')}}</span>
    </a>
</li-->

<li class="pc-item {{ active($active, 'my-courses') }}">
    <a href="@route('courses.mine')" class="pc-link">
        <span class="pc-micon">
            <i class="ph-duotone ph-textbox"></i>
        </span>
        <span class="pc-mtext">{{__('My Courses')}}</span>
    </a>
</li>