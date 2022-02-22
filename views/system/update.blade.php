<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta content="{{$_ENV['AUTHOR']}}" name="description">
		<meta name="description" content="{{$_ENV['DESCRIPTION']}}">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicon.png">
		<title>Portal Update</title>
		@css('/assets/css/bootstrap')
        <style>
            body{
                background-color: black;
            }
            
            .mag{
                margin-left: 70%;
            }
            .wrapper{
                color : #81BC00;
                width: 100%;
                height: 100%;
                padding: 0 30px;
            }
        </style>
	</head>
	<body>
		<div class="w3-bar w3-black">
			<a href="/" class="w3-bar-item w3-button"><img src="/assets/img/logo.png" style="height: 60px"></a>            
			<p class="w3-bar-item w3-hide-small pad-top mag" id="loading"><span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ "updating portal", "please wait ...!"]'></span>
            </p>
			<p class="w3-bar-item w3-hide-small pad-top w3-right" id="loaded" style="display: none">Update Complete</p>
		</div>
        <script>
            var TxtRotate = function(el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            };

            TxtRotate.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 300 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function() {
                that.tick();
            }, delta);
            };

            window.onload = function() {
            var elements = document.getElementsByClassName('txt-rotate');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-rotate');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
            document.body.appendChild(css);
            };
        </script>        
        @php flush(); ob_flush(); @endphp
		<div class="wrapper">
            @if (PHP_OS_FAMILY == 'Windows')
                <pre>@php $exec = shell_exec('git reset --hard HEAD'); echo $exec; flush(); ob_flush(); @endphp</pre>
                <pre>@php $exec = shell_exec('git stash'); echo $exec; flush(); ob_flush(); @endphp</pre>
                <pre>@php $exec = shell_exec('git pull origin main'); echo $exec; flush(); ob_flush(); @endphp</pre>
            @else
                <pre>@php $exec = shell_exec('sudo git reset --hard HEAD'); echo $exec; flush(); ob_flush(); @endphp</pre>
                <pre>@php $exec = shell_exec('sudo git stash'); echo $exec; flush(); ob_flush(); @endphp</pre>
                <pre>@php $exec = shell_exec('sudo git pull origin main'); echo $exec; flush(); ob_flush(); @endphp</pre>
            @endif
		</div>

        <script>
            document.getElementById("loading").style.display = "none";
            document.getElementById("loaded").style.display = "block";
        </script>
    </body>
</html>