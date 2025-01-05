<!-- To have a default hidden sidebar, add the class `pc-sidebar-hide` -->
<nav class="pc-sidebar {{ !$sidebar ? 'pc-sidebar-hide' : '' }}">
    <div class="navbar-wrapper">

        <div class="m-header">
            <a href="javascript:void(0)" class="b-brand text-primary">
                <img src="{{ urlPath($settings->logo_dark) }}" class="img-brand"/>
            </a>
        </div>

        <div class="navbar-content pc-trigger">
        
            <ul class="pc-navbar">
                @include('layouts.app.menu.dashboard')
                @include('layouts.app.menu.media')
                @include('layouts.app.menu.literature')
                @include('layouts.app.menu.lms')
                <?php /* @include('layouts.app.menu.applets') */ ?>
            </ul>
        </div>
    </div>
</nav>