<!-- To have a default hidden sidebar, add the class `pc-sidebar-hide` -->
<nav class="pc-sidebar">
    <div class="navbar-wrapper">

        <div class="m-header text-center">
            <a href="javascript:void(0)" class="b-brand text-primary">
                <img src="{{ urlPath($settings->logo_dark) }}" class="w-75"/>
            </a>
        </div>

        <div class="navbar-content pc-trigger">
        
            <ul class="pc-navbar">
                <li class="pc-item pc-caption">
                    <label>{{__('Navigation')}}</label>
                    <i class="ph-duotone ph-gauge"></i>
                </li>
                
                <li class="pc-item">
                    <a href="/app/home" class="pc-link">
                        <span class="pc-micon">
                            <i class="ph-duotone ph-squares-four"></i>
                        </span>
                        <span class="pc-mtext">{{__('Dashboard')}}</span>
                    </a>
                </li>

                <!-- videos -->
                <!--li class="pc-item">
                    <a href="/app/videos" class="pc-link">
                        <span class="pc-micon">
                            <i class="ph-duotone ph-video"></i>
                        </span>
                        <span class="pc-mtext">{{__('Videos')}}</span>
                    </a>
                </li-->
                <li class="pc-item pc-hasmenu">
                    <a href="javascript:void(0)" class="pc-link">
                        <span class="pc-micon">
                            <i class="ph-duotone ph-video"></i>
                        </span>
                        <span class="pc-mtext">{{__('Videos')}}</span>
                        <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                    </a>
                    <ul class="pc-submenu">
                        <li class="pc-item">
                            <a href="{{ route('videos.list') }}" class="pc-link"> {{__('Videos')}} </a>
                        </li>
                        <li class="pc-item">
                            <a href="{{ route('videos.history') }}" class="pc-link"> {{__('History')}} </a>
                        </li>
                        <li class="pc-item">
                            <a href="{{ route('videos.bookmarks') }}" class="pc-link"> {{__('Bookmarks')}} </a>
                        </li>

                        @if($handler::can('video', 'create'))
                            <li class="pc-item">
                                <a href="{{ route('videos.upload') }}" class="pc-link"> {{__('Upload')}} </a>
                            </li>
                        @endif
                    </ul>
                </li>

                <!-- books -->
                <li class="pc-item">
                    <a href="/app/books" class="pc-link">
                        <span class="pc-micon">
                            <i class="ph-duotone ph-book"></i>
                        </span>
                        <span class="pc-mtext">{{__('Books')}}</span>
                    </a>
                </li>

                <!-- notes -->
                <li class="pc-item">
                    <a href="/app/notes" class="pc-link">
                        <span class="pc-micon">
                            <i class="ph-duotone ph-pencil-circle"></i>
                        </span>
                        <span class="pc-mtext">{{__('Notes')}}</span>
                    </a>
                </li>

                @if($modules->sync)
                    <li class="pc-item pc-hasmenu">
                        <a href="javascript:void(0)" class="pc-link">
                            <span class="pc-micon">
                                <i class="ph-duotone ph-chart-donut"></i>
                            </span>
                            <span class="pc-mtext">{{__('Synchronization')}}</span>
                            <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                        </a>
                        <ul class="pc-submenu">
                            <!-- portal usage -->
                            <li class="pc-item">
                                <a href="/app/sync/portal" class="pc-link"> {{__('Portal Usage')}} </a>
                            </li>
                            <!-- pc usage -->
                            <li class="pc-item">
                                <a href="/app/sync/pc" class="pc-link"> {{__('PC Usage')}} </a>
                            </li>
                        </ul>
                    </li>
                @endif
                                
                <li class="pc-item pc-hasmenu">
                    <a href="javascript:void(0)" class="pc-link">
                        <span class="pc-micon">
                            <i class="ph-duotone ph-rocket"></i>
                        </span>
                        <span class="pc-mtext">{{__('Apps')}}</span>
                        <span class="pc-arrow"><i data-feather="chevron-right"></i></span>
                    </a>
                    <ul class="pc-submenu">
                        <!-- studio -->
                        <li class="pc-item">
                            <a href="/app/studio" class="pc-link"> {{__('Studio')}} </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>