/*
Preview Plugin
*/

(function () {
  if(typeof _cb === 'undefined') return;

  var _screenwidth = window.innerWidth;
  if (_screenwidth <= 640) return;

  var html =
    '<div class="is-modal is-modal-content previewcontent" style="z-index:10004;" tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true">' +
    '<div style="width:100%;height:100%;position: relative;display: flex;flex-direction: column;align-items: center;padding: 0px;">' +
    '<div class="is-modal-close" style="z-index:2;width:30px;height:30px;position:absolute;top:0px;right:0px;box-sizing:border-box;padding:0;line-height:30px;font-size: 12px;color:#777;text-align:center;cursor:pointer;"><svg class="is-icon-flex" style="width:30px;height:30px;"><use xlink:href="#ion-ios-close-empty"></use></svg></div>' +
    '<div class="is-modal-bar" style="position: absolute;top: 0;left: 0;width: 100%;z-index:1;line-height:1.5;height:32px;padding:0;">' +
    '<div style="width:100%;height:100%;display:flex;justify-content:center;">' +
    '<div class="size-control" data-width="1440" style="width:1440px;border-left: none; border-right: none;">' +
    '<div class="size-control" data-width="1024" style="width:1024px;">' +
    '<div class="size-control" data-width="768" style="width:768px;">' +
    '<div class="size-control" data-width="425" style="width:425px;">' +
    '<div class="size-control" data-width="375" style="width:375px;">' +
    '<div class="size-control" data-width="320" style="width:320px;">' +
    '<div class="size-control-info" style="line-height:32px;">1440px</div>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>" +
    '<iframe tabindex="0" data-width="1440" style="width:100%;height:100%;max-width:1440px;border:none;border-top:32px solid transparent;margin:0;box-sizing:border-box;background:#fff;" src="about:blank"></iframe>' +
    "</div>" +
    "</div>";

  _cb.addHtml(html);

  // var css =
  //   "<style>" +
  //   ".size-control {cursor:pointer;background:#ddd;border-left:#fff 2px solid;border-right:#fff 2px solid;height:100%;display:flex;justify-content:center;}" +
  //   ".size-control-info {text-align:center;color:#000;}" +
  //   ".size-control.hover {background:rgb(170,170,170);}" +
  //   "</style>";

  // _cb.addCss(css);

  var button_html =
    '<button class="previewcontent-button" title="' + _cb.out('Preview') + '" style="font-size:15px;vertical-align:bottom;">' +
    '<svg class="is-icon-flex"><use xlink:href="#ion-eye"></use></svg>' +
    "</button>";

  _cb.addButton('preview', button_html, '.previewcontent-button', function (e) {

    showPreviewWindow();
    e.preventDefault();

  });
  _cb.addButton2('preview', button_html, '.previewcontent-button', function (e) {

    showPreviewWindow();
    e.preventDefault();

  });

  var modal = document.querySelector(".is-modal.previewcontent");
  if(!modal) return; // in case builder is destroyed
  
  var btnClose = modal.querySelector('.is-modal-close');
  btnClose.addEventListener('click', function(e){
      _cb.hideModal(modal);
  });

  var removeClass = function(element, classname) {
      if(!element) return;
      if(element.classList.length>0) {
          element.className = element.className.replace(new RegExp('\\b'+ classname+'\\b', 'g'), '');
          element.className = element.className.replace(/  +/g, ' ');
          if(element.className === ' ') element.removeAttribute('class');
      }
  }

  var addClass = function(element, classname) {
      if(!element) return;
      if(hasClass(element,classname)) return;
      if(element.classList.length===0) element.className = classname;
      else element.className = element.className + ' ' + classname;
      element.className = element.className.replace(/  +/g, ' ');
  }

  var hasClass = function(element, classname) {
      if(!element) return false;
      try{
          let s = element.getAttribute('class');
          return new RegExp('\\b'+ classname+'\\b').test(s);
      } catch(e) {
          0;
      }
  }

  var sizeControls = modal.querySelectorAll(".size-control");
  Array.prototype.forEach.call(sizeControls, function(sizeControl){

    sizeControl.addEventListener('mouseover', function(e) {

      var elms = modal.querySelectorAll(".size-control");
      Array.prototype.forEach.call(elms, function(elm){
        // elm.style.background = "#ddd";
        removeClass(elm, 'hover');
      });
      // sizeControl.style.background = "#aaa";
      addClass(sizeControl, 'hover');

      elms = sizeControl.querySelectorAll(".size-control");
      Array.prototype.forEach.call(elms, function(elm){
        // elm.style.background = "#aaa";
        addClass(elm, 'hover');
      });
      
      // modal.querySelector(".size-control-info").style.color = '#fff';

      var w = sizeControl.getAttribute('data-width');
      modal.querySelector(".size-control-info").innerHTML = w + 'px';
      e.preventDefault();
      e.stopImmediatePropagation();

    });

    sizeControl.addEventListener('mouseout', function(e) {

      var elms = modal.querySelectorAll(".size-control");
      Array.prototype.forEach.call(elms, function(elm){
        // elm.style.background = "#ddd";
        removeClass(elm, 'hover');
      });
      // modal.querySelector(".size-control-info").style.color = '#000';

      var currW = modal.querySelector("iframe").getAttribute('data-width');
      modal.querySelector(".size-control-info").innerText = currW + 'px';

    });

    sizeControl.addEventListener('click', function(e) {

      var w = sizeControl.getAttribute('data-width');
      
      modal.querySelector("iframe").style.maxWidth = w + 'px';
      modal.querySelector("iframe").setAttribute('data-width', w);

      e.preventDefault();
      e.stopImmediatePropagation();

    });

  });
      
})();

function showPreviewWindow() {
    
    var modal = document.querySelector(".is-modal.previewcontent");
    _cb.showModal(modal);

    if (!this._cb.doc.querySelector(".is-wrapper") && _cb.previewURL) {
      var html = _cb.html();
      localStorage.setItem('preview-html', html); 

      modal.querySelector('iframe').src = _cb.previewURL;
      return;
    } 

    //check if builder is inside iframe
    if(window.frameElement) {
      var c = getFramedWindow(window.frameElement);
      var doc = c.document;  
    } else {
      var doc = parent.document;
    }

    var basehref = "";
    var base = doc.querySelectorAll("base[href]");
    if (base.length > 0) {
      basehref = '<base href="' + base[0].href + '" />';
    }

    var csslinks = "";
    var styles = doc.querySelectorAll("link[href]");
    for (var i = 0; i < styles.length; i++) {
      if (
        styles[i].href.indexOf(".css") != -1 &&
        styles[i].href.indexOf("contentbox.css") == -1 &&
        styles[i].href.indexOf("contentbuilder.css") == -1
      ) {
        csslinks +=
          '<link href="' +
          styles[i].href +
          '" rel="stylesheet" type="text/css" />';
      }
    }

    var jsincludes1 = "";
    var scripts = doc.head.querySelectorAll("script[src]");
    for (var i = 0; i < scripts.length; i++) {
      if (
        scripts[i].src.indexOf(".js") != -1 &&
        scripts[i].src.indexOf("_next/") == -1 && //next
        scripts[i].src.indexOf("static/js/") == -1 && //react
        scripts[i].src.indexOf("src/") == -1 && //vue
        scripts[i].src.indexOf("index") == -1 &&
        scripts[i].src.indexOf("contentbox.js") == -1 &&
        scripts[i].src.indexOf("contentbox.min.js") == -1 &&
        scripts[i].src.indexOf("contentbuilder.js") == -1 &&
        scripts[i].src.indexOf("contentbuilder.min.js") == -1 &&
        scripts[i].src.indexOf("plugin.js") == -1 &&
        scripts[i].src.indexOf("config.js") == -1 &&
        scripts[i].src.indexOf("en.js") == -1 &&
        scripts[i].src.indexOf("rangy") == -1 &&
        scripts[i].src.indexOf("minimalist-blocks") == -1 
      ) {
        jsincludes1 +=
          '<script src="' +
          scripts[i].src +
          '" type="text/javascript"></script>';
      }
    }

    var jsincludes2 = "";
    var scripts = doc.body.querySelectorAll("script[src]");
    for (var i = 0; i < scripts.length; i++) {
      // console.log(scripts[i].src)
      if (
        scripts[i].src.indexOf(".js") != -1 &&
        scripts[i].src.indexOf("_next/") == -1 && //next
        scripts[i].src.indexOf("static/js/") == -1 && //react
        scripts[i].src.indexOf("src/") == -1 && //vue
        scripts[i].src.indexOf("index") == -1 &&
        scripts[i].src.indexOf("contentbox.js") == -1 &&
        scripts[i].src.indexOf("contentbox.min.js") == -1 &&
        scripts[i].src.indexOf("contentbuilder.js") == -1 &&
        scripts[i].src.indexOf("contentbuilder.min.js") == -1 &&
        scripts[i].src.indexOf("plugin.js") == -1 &&
        scripts[i].src.indexOf("config.js") == -1 &&
        scripts[i].src.indexOf("en.js") == -1 &&
        scripts[i].src.indexOf("rangy") == -1 &&
        scripts[i].src.indexOf("minimalist-blocks") == -1 
      ) {
        jsincludes2 +=
          '<script src="' +
          scripts[i].src +
          '" type="text/javascript"></script>';
      }
    }

    var escHtml = `
      <script>
      document.addEventListener('keydown', (e)=>{
        if(e.keyCode === 27) { // escape key

            var modal = parent.document.querySelector(".is-modal.previewcontent");
            parent._cb.hideModal(modal);
        }
    });
    </script>`;

    /* Get Page */
    if (!this._cb.doc.querySelector(".is-wrapper")) {
      var maxwidth = "800px";
      var maxw = window.getComputedStyle(this._cb.doc.querySelector(".is-builder")).getPropertyValue('max-width');
      if (!isNaN(parseInt(maxw))) maxwidth = maxw;

      var content = _cb.html();

      var doc = modal.querySelector('iframe').contentWindow.document;
      doc.open();
      doc.write(
        "<html>" +
        "<head>" +
        basehref +
        '<meta charset="utf-8">' +
        "<title></title>" +
        "<style>#_cbhtml > *:not(.is-lightbox) {display:none}</style>" +
        csslinks +
        (_cb.useLightbox? '<link href="'+_cb.assetPath+'scripts/lightbox/lightbox.css" rel="stylesheet" type="text/css" />':'') +
        "<style>" +
        ".slider-image { display:block !important; }" +
        ".container {margin:35px auto 0; max-width: " +
        maxwidth +
        "; width:100%; padding:0 20px; box-sizing: border-box;}" +
        "</style>" +
        '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>' +
        jsincludes1 +
        "</head>" +
        "<body>" +
        '<div class="container preview">' +
        content +
        "</div>" +
        jsincludes2 +
        (_cb.useLightbox? '<script src="'+_cb.assetPath+'scripts/lightbox/lightbox.js"></script><script>window.lightbox.init();</script>':'') +
        escHtml +
        "</body>" +
        "</html>"
      );
      doc.close();

    } else {
      // ContentBox
      var content = parent.contentbox.html();

      if(parent.contentbox.previewPage) {
        let html = parent.contentbox.html();
        localStorage.setItem('preview-html', html); 
        let mainCss = parent.contentbox.mainCss(); 
        localStorage.setItem('preview-maincss', mainCss); 
        let sectionCss = parent.contentbox.sectionCss();
        localStorage.setItem('preview-sectioncss', sectionCss);
        modal.querySelector('iframe').src = parent.contentbox.previewPage; //'/preview.html';
        return;
      }

      // var doc = modal.querySelector('iframe').contentWindow.document;
      // doc.open();
      // doc.write(
      //   "<html>" +
      //   "<head>" +
      //   basehref +
      //   '<meta charset="utf-8">' +
      //   "<title></title>" +
      //   csslinks +
      //   (_cb.useLightbox? '<link href="'+_cb.assetPath+'scripts/lightbox/lightbox.css" rel="stylesheet" type="text/css" />':'') +
      //   "<style>" +
      //   ".slider-image { display:block !important; }" +
      //   "#_cbhtml > *:not(.is-lightbox) {display:none}" +
      //   "</style>" +
      //   '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>' +
      //   jsincludes1 +
      //   "</head>" +
      //   "<body>" +
      //   '<div class="is-wrapper preview">' +
      //   content +
      //   "</div>" +
      //   jsincludes2 +
      //   escHtml +
      //   "</body>" +
      //   "</html>"
      // );
      // doc.close();

      let html = parent.contentbox.html();
      localStorage.setItem('preview-html', html); 
      let mainCss = parent.contentbox.mainCss(); 
      localStorage.setItem('preview-maincss', mainCss); 
      let sectionCss = parent.contentbox.sectionCss();
      localStorage.setItem('preview-sectioncss', sectionCss);

      if(parent.contentbox.previewURL) {
        modal.querySelector('iframe').src = parent.contentbox.previewURL;
      } else {
        modal.querySelector('iframe').src = '/app/literature/slides/preview';
      }
    }
    //Or you can specify your custom preview page:
    //modal.find('iframe').attr('src','preview.html');
}

function getFramedWindow(f) {
    if(f.parentNode == null)
        f = document.body.appendChild(f);
    var w = (f.contentWindow || f.contentDocument);
    if(w && w.nodeType && w.nodeType==9)
        w = (w.defaultView || w.parentWindow);
    return w;
}