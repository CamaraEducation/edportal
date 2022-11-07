<div class="deznav">
    <div class="deznav-scroll">
        <ul class="metismenu" id="menu">
            <li class="nav-label first">Main Menu</li>
            <li>
                <a class="ai-icon" href="/" aria-expanded="false">
                    <i class="flaticon-144-layout"></i>
                    <span class="nav-text">Dashboard</span>
                </a>
            </li>
            <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <i class="flaticon-077-menu-1"></i>
                    <span class="nav-text">Utilities</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="javascript:void()">ICT Tools</a>
                        <ul aria-expanded="false">
                            @php $application = AppsControl::fetch('ict') @endphp
                            @foreach ($application as $app)
                            <li><a href="/view/app/{{$app['id']}}/{{str_replace(' ','-',$app['name'])}}">{{$app['name']}}</a></li>   
                            @endforeach
                        </ul>
                    </li>
                    <li><a href="javascript:void()">Educational Repository</a>
                        <ul aria-expanded="false">
                            @php $application = AppsControl::fetch('rep') @endphp
                            @foreach ($application as $app)
                            <li><a href="/view/app/{{$app['id']}}/{{str_replace(' ','-',$app['name'])}}">{{$app['name']}}</a></li>   
                            @endforeach
                        </ul>
                    </li>
                    <li><a href="/video">Video</a></li>
                    <li><a href="/document">Documents</a></li>
                </ul>
            </li>
            <li><a href="javascript:void()" class="has-arrow ai-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="stroke:#969BA0" class="bi bi-boxes" viewBox="0 0 16 16">
                    <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
                </svg> &nbsp;
                Systems</a>
                <ul aria-expanded="false">
                    <li><a href="/dropbox">Dropbox</a></li>
                    <li hidden><a href="/lms">Camara Learning Studio</a></li>
                    <li><a href="//smis.camara.site" target='_blank'>School Management System</a></li>
                </ul>
            </li>
            @if (viewer() == 1)
                @include('layout.menu.admin')
            @elseif (viewer() == 2)
                @include('layout.menu.admin')
            @endif
            
            <li>
                <a class="ai-icon" href="/support" aria-expanded="false">
                    <i class="flaticon-049-copy"></i>
                    <span class="nav-text">Support</span>
                </a>
            </li>            
        </ul>
        <div class="copyright">
            <p><strong>Camara Education Portal</strong></p>
        </div>
    </div>
</div>
