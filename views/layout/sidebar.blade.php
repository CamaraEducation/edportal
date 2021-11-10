<div class="deznav">
    <div class="deznav-scroll">
        <div class="main-profile">
            <div class="image-bx">
                <img src="/assets/img/favicon.png" alt="">
                <a href="javascript:void(0);"><i class="fa fa-cog" aria-hidden="true"></i></a>
            </div>
            <h5 class="name"><span class="font-w400">Hello,</span> Marquez</h5>
            <p class="email">marquezzzz@mail.com</p>
        </div>
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
                    <li><a href="/view/app/{{$app['id']}}">{{$app['name']}}</a></li>   
                    @endforeach
                </ul>
            </li>
            <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <i class="flaticon-061-puzzle"></i>
                    <span class="nav-text">Management</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="users">Users</a></li>
                </ul>
            </li>
            <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <i class="flaticon-381-settings-2"></i>
                    <span class="nav-text">Administration</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="/add/app">Applications</a></li>
                    <li><a href="javascript:void()">video</a>
                        <ul aria-expanded="false">
                            <li><a href="/stats/video">statistics</a></li>
                            <li><a href="/add/video">Upload</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void()">Publications</a>
                        <ul aria-expanded="false">
                            <li><a href="/stats/document">statistics</a></li>
                            <li><a href="/add/document">Upload</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
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