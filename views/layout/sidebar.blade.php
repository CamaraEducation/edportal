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
            <li><a href="javascript:void()" class="has-arrow ai-icon">Systems</a>
                <ul aria-expanded="false">
                    <li><a href="//camara.portal:8085" target='_blank'>Camara Learning Studio</a></li>
                    <li><a href="//smis.camara.site" target='_blank'>School Management System</a></li>
                    <li><a href="//camara.portal:3000" target='_blank'>Kiwix</a></li>
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
