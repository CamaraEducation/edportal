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
                    <span class="nav-text">Applications</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="/video">Video</a></li>
                    <li><a href="/document">Publication</a></li>
                    @php $application = AppsControl::fetch() @endphp
                    @foreach ($application as $app)
                    <li><a href="/view/app/{{$app['id']}}/{{str_replace(' ','-',$app['name'])}}">{{$app['name']}}</a></li>   
                    @endforeach
                </ul>
            </li>
            @if (viewer() == 1)
                @include('layout.menu.admin')
            @else @if             
            @endif
            
            <li>
                <a class="ai-icon" href="https://camtics.camara.org" aria-expanded="false">
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