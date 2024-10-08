documentReady(function(){
    let wrapper = document.querySelector('.is-wrapper');

    const nextSection = function(currentSection) {
        let next = currentSection.nextElementSibling;
        if(!next) return false;
        if(next.classList.contains('is-section')) {
            return next;
        } else {
            return nextSection(next);
        }
    }

    let scrollArrow = document.querySelectorAll('.is-arrow-down a');
    scrollArrow.forEach(function(btn){
        btn.addEventListener('click', function(e){
            let currentSection = e.target.closest('.is-section');
            if(currentSection) {
                let gotoSection = nextSection(currentSection);
                if(gotoSection) {
                    scrollIt(gotoSection, 1000, 'easeInQuad'); // stable
                }
            }
            e.preventDefault();
            e.stopImmediatePropagation();
        });
    });

    if(wrapper) if(!hasClass(wrapper,'is-edit')) { // run this only if not in edit mode
        let links = wrapper.querySelectorAll('a');
        links.forEach(function(link){
            link.addEventListener('click', function(e){
    
                let url = link.getAttribute('href');
                if(url) {
                    // Will go to the link
                    if(url.indexOf('#')===0) {
                        if(url.indexOf('#section')===0) {
                            let num = url.replace('#section','');
                            if(!isNaN(parseInt(num))) {

                                // let section = document.querySelector(`.is-section:nth-child(${num})`);
                                // if(section) scrollIt(section, 1000, 'easeInQuad');

                                let sections = document.querySelectorAll('.is-section');
                                let gotoSection;
                                let x = 0;
                                sections.forEach(function(section){
                                    if(!hasClass(section, 'is-section-navbar')) {
                                        if(x===num-1) {
                                            gotoSection = section;
                                        }
                                        x++;
                                    }
                                });
                                if(gotoSection) scrollIt(gotoSection, 1000, 'easeInQuad');

                                e.preventDefault();
                            }
                        } else {
                            try{
                                let bookmark = document.querySelector(url);
                                if(bookmark) {
                                    scrollIt(bookmark, 1000, 'easeInQuad');
                                    e.preventDefault();
                                }
                            } catch(e) {
                                // Do Nothing
                            }
                        }
    
                    } 
    
                }
                        
            });
        });
    }

    let elms = document.querySelectorAll('.is-animated,.is-scale-animated');
    elms.forEach(function(elm){
        if(elm.classList.contains('once')) {
            elm.removeAttribute('data-scroll','');
            elm.setAttribute('data-scroll-once','');
        } else {
            elm.removeAttribute('data-scroll-once','');
            elm.setAttribute('data-scroll','');
        }
    });

    // Auto add delays
    elms = document.querySelectorAll('.is-container > div');
    elms.forEach(function(row){
        let animElms = row.querySelectorAll('.is-animated[data-scroll],.is-animated[data-scroll-once]');
        let n = 0;
        if(animElms.length>1) animElms.forEach(function(elm){
            if(elm.className.indexOf('delay-')===-1) {
                if(n>0) {
                    elm.style.transitionDelay = n+'s';
                    elm.style.animationDelay = n+'s';
                }
                n=n+0.2;
            }
        });
    });

    // Animation
    skrollrSetup();

    adjustBgPos();

    function debounce(func){
        var timer;
        return function(event){
          if(timer) clearTimeout(timer);
          timer = setTimeout(func,100,event);
        };
    }
    let viewportWidth = window.innerWidth;
    window.addEventListener("resize",debounce(function(e){
        if (window.innerWidth != viewportWidth) {

            viewportWidth = window.innerWidth;

            skrollrSetup();
            adjustBgPos();
            
            if(window.skrollrr) window.skrollrr.refresh();
        }
    }));

});

function adjustBgPos() {

    const saveOri = (elm) => {
        const div = document.createElement('div');
        div.style.backgroundPositionX = elm.style.backgroundPositionX;
        div.style.backgroundPositionY = elm.style.backgroundPositionY;
        div.style.backgroundSize = elm.style.backgroundSize;
        if(!elm.hasAttribute('data-bg-ori')) elm.setAttribute('data-bg-ori', div.style.cssText);
    };
    const loadOri = (elm) => {
        if(elm.hasAttribute('data-bg-ori')) {
            const div = document.createElement('div');
            div.style.cssText = elm.getAttribute('data-bg-ori');
            elm.style.backgroundPositionX = div.style.backgroundPositionX;
            elm.style.backgroundPositionY = div.style.backgroundPositionY;
            elm.style.backgroundSize = div.style.backgroundSize;
            elm.removeAttribute('data-bg-ori');
        }
    }

    // Adjust Bg Pos
    let viewportWidth = window.innerWidth;
    const elmBg = document.querySelectorAll('[data-bg-xs],[data-bg-sm],[data-bg-md],[data-bg-lg]');
    elmBg.forEach(elm=>{
        saveOri(elm);
        if(viewportWidth<=414) {
            if(elm.hasAttribute('data-bg-xs')){
                elm.style.cssText = elm.style.cssText+ ';'+elm.getAttribute('data-bg-xs');
            } else {
                loadOri(elm);
            }
        }
        if(viewportWidth>414 && viewportWidth<=970) {
            if(elm.hasAttribute('data-bg-sm')){
                elm.style.cssText = elm.style.cssText+ ';'+elm.getAttribute('data-bg-sm');
            } else {
                loadOri(elm);
            }
        }
        if(viewportWidth>970 && viewportWidth<=1180) {
            if(elm.hasAttribute('data-bg-md')){
                elm.style.cssText = elm.style.cssText+ ';'+elm.getAttribute('data-bg-md');
            } else {
                loadOri(elm);
            }
        }
        if(viewportWidth>1180) {
            if(elm.hasAttribute('data-bg-lg')){
                elm.style.cssText = elm.style.cssText+ ';'+elm.getAttribute('data-bg-lg');
            } else {
                loadOri(elm);
            }
        }
    });
}

function skrollrSetup() {

    // Reset
    let pinWraps = document.querySelectorAll('.pin-wrap');
    pinWraps.forEach(pinWrap=>{
        pinWrap.outerHTML = pinWrap.innerHTML;
    });
    if(pinWraps.length>0) {
        const sections = document.querySelectorAll('.is-section');
        sections.forEach( section => {
            if(section.hasAttribute('data-section-clone')) section.parentNode.removeChild(section);
            if(section.hasAttribute('data-section-original')) {
                section.style.display = '';
                section.removeAttribute('data-section-original')
            }
        });
    }

    let viewportWidth = window.innerWidth;
    
    // section-wrap
    if(viewportWidth<=760) { // disable on mobile /* mobile update */
        let sectionWraps = document.querySelectorAll('.section-wrap');
        sectionWraps.forEach(wrap=>{
            wrap.outerHTML = wrap.innerHTML;
        });
    }

    // pin section
    let pins = document.querySelectorAll('.is-wrapper:not(.is-edit) .section-pin');
    if(viewportWidth<=760) pins = document.querySelectorAll('.is-wrapper:not(.is-edit) .section-pin:not(.m-skrollrr-off):not(.m-pin-off)'); // do not apply skrollrr if .m-skrollrr-off found on mobile /* mobile update */
    if(pins.length>0) window.scrollTo(0, 0);

    // Re-structure multi boxes 
    pins.forEach(function(sectionPin){
        if(viewportWidth<=970 && (sectionPin.querySelector('.is-boxes > .is-box'))) { /* mobile update (not needed) */

            let boxes = sectionPin.querySelectorAll('.is-boxes > .is-box');
            boxes.forEach(box=>{
                const cloneSection = sectionPin.cloneNode(false);
                box.getAttributeNames().map(name => {
                    if(name.indexOf('data-')!==-1) {
                        cloneSection.setAttribute(name,box.getAttribute(name));
                    }
                });
                cloneSection.classList.add('is-box');
                box.classList.forEach(item=>{
                    if(item.indexOf('is-box-')!==-1 ||
                        item.indexOf('is-content-')!==-1 ||
                        item.indexOf('box-autofit')!==-1 ||
                        item.indexOf('is-light-text')!==-1 ||
                        item.indexOf('is-dark-text')!==-1 ||
                        item.indexOf('is-align-')!==-1 ||
                        item.indexOf('type-')!==-1 ||
                        item.indexOf('block-click')!==-1 ||
                        item.indexOf('hover-zoom')!==-1) cloneSection.classList.add(item);
                });
                cloneSection.setAttribute('data-section-clone','');
                cloneSection.innerHTML = box.innerHTML;
                sectionPin.parentNode.insertBefore(cloneSection, sectionPin);
            })
            // sectionPin.parentNode.removeChild(sectionPin);
            sectionPin.setAttribute('data-section-original','');
            sectionPin.style.display = 'none';
        }
    });
    pins = document.querySelectorAll('.is-wrapper:not(.is-edit) .section-pin');
    if(viewportWidth<=760) pins = document.querySelectorAll('.is-wrapper:not(.is-edit) .section-pin:not(.m-skrollrr-off):not(.m-pin-off)'); /* mobile update */

    pins.forEach(function(sectionPin){
        if(sectionPin.parentNode.closest('.section-wrap')) return; // section-wrap
        if(viewportWidth<=970 && sectionPin.hasAttribute('data-section-original')) return; /* mobile update (not needed) */

        const pinWrap = document.createElement('div');
        pinWrap.classList.add('pin-wrap');
        if(sectionPin.classList.contains('pin-space-lg')) pinWrap.classList.add('pin-space-lg');
        if(sectionPin.classList.contains('pin-space-xl')) pinWrap.classList.add('pin-space-xl');

        // Section Visibility
        if(sectionPin.classList.contains('xs-hidden')) pinWrap.classList.add('xs-hidden');
        if(sectionPin.classList.contains('sm-hidden')) pinWrap.classList.add('sm-hidden');
        if(sectionPin.classList.contains('desktop-hidden')) pinWrap.classList.add('desktop-hidden');

        sectionPin.after(pinWrap);
        pinWrap.appendChild(sectionPin);
    });
    
    // no-spacing (adding .section-inview)
    let wrapper = document.querySelector('.is-wrapper');
    if(!hasClass(wrapper,'is-edit')) window.addEventListener('scroll', (e) => {

        const sections = document.querySelectorAll('.is-section');
        sections.forEach( section => {

            const topDistance = section.getBoundingClientRect().top;

            let nextSection;
            let prevSection;
            if(section.parentNode.classList.contains('pin-wrap')) {
                nextSection = section.parentNode.nextElementSibling;
                prevSection = section.parentNode.previousElementSibling;
            } else {
                nextSection = section.nextElementSibling;
                prevSection = section.previousElementSibling;
            }
            if(nextSection) {
                if(nextSection.classList.contains('pin-wrap')) {
                    nextSection = nextSection.querySelector('.is-section');
                } 
            }
            if(prevSection) {
                if(prevSection.classList.contains('pin-wrap')) {
                    prevSection = prevSection.querySelector('.is-section');
                } 
            }

            if (topDistance<=0) {
                // const sections = document.querySelectorAll('.is-section');
                // sections.forEach( section => {
                //     section.classList.remove('section-inview');
                // });

                if(section.classList.contains('no-spacing')||section.classList.contains('pin-overlap')) section.classList.add('section-inview');

                const sections = document.querySelectorAll('.is-section');
                sections.forEach( elm => {
                    if(elm!==section) elm.classList.remove('section-inview');
                });
            } else {
                // section.classList.remove('section-inview');
            }
            
        });
    });

    // if(window.skrollrr) window.skrollrr.refresh();
}

function inViewSetup() {
    
    let videoBg = document.querySelectorAll('.is-overlay-content');
    videoBg.forEach(elm=>{
        if(elm.querySelector('video.is-video-bg')) elm.setAttribute('data-scroll','');
    });

    let videoContent = document.querySelectorAll('.is-container video'); //make embedded video auto play/pause on view
    videoContent.forEach(elm=>{
        elm.parentNode.setAttribute('data-scroll','');
    });

    const trigger = new ScrollTrigger.default({
        trigger: {
            once: true,
            offset: {
                element: {
                    x: 0,
                    y: (trigger, rect, direction) => {
                        return 0.1
                    }
                },
                viewport: {
                    x: 0,
                    y: (trigger, frame, direction) => {
                        return trigger.visible ? 0 : 0.1
                    }
                }
            },
            toggle: {
                class: {
                    in: 'is-inview',
                    out: ['']
                },
                callback: {
                    in: (trigger) => { 
                        let videos = trigger.element.querySelectorAll('video');
                        videos.forEach(video=>{
                            let btnPlay = video.parentNode.querySelector('.video-bg-play');
                            if(video.autoplay) {
                                if(btnPlay) {
                                    if(btnPlay.innerHTML.indexOf('play')===-1) { // meant to play
                                        // video.currentTime = 0;
                                        video.play();
                                    }
                                } else {
                                    // video.currentTime = 0;
                                    video.play();
                                }
                            } else {
                                if(btnPlay) {
                                    if(btnPlay.innerHTML.indexOf('play')===-1) { // meant to play
                                        // video.currentTime = 0;
                                        video.play();
                                    }
                                } 
                            }
                        });
                    },
                    out: (trigger) => { 
                        let videos = trigger.element.querySelectorAll('video');
                        videos.forEach(video=>{
                            if (!video.paused) {
                                video.pause();
                            }
                        });
                    }
                }
            },
        }
    });
    trigger.add('[data-scroll-once]');
    trigger.add('[data-scroll]', { once: false });
    
    window.trigger = trigger;
}

function _scrollTo(el, yOffset = 0){
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function scrollIt(destination, duration = 200, easing = 'linear', callback) {
    _scrollTo(destination);
}

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}

function documentReady(fn) {
    var stateCheck = setInterval(function () {
        if (document.readyState === "interactive" || document.readyState === "complete") {
            clearInterval(stateCheck);
            try {
                fn()
            } catch (e) {}
        } 
    }, 1);
};

/* 
Skrollrr | 2022 InnovaStudio.
Inspired by Skrollr (https://github.com/Prinzhorn/skrollr | MIT license)
Powered by Lax.js (https://github.com/alexfoxy/lax.js | MIT license) 
*/
var Skrollrr=function(){"use strict";var t={exports:{}};!function(t){function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var a=[],s=!0,n=!1,i=void 0;try{for(var r,l=t[Symbol.iterator]();!(s=(r=l.next()).done)&&(a.push(r.value),!e||a.length!==e);s=!0);}catch(t){n=!0,i=t}finally{try{s||null==l.return||l.return()}finally{if(n)throw i}}return a}}(t,e)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?a(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}!function(){function a(t){return["elInY+elHeight","elCenterY-".concat(t=0<arguments.length&&void 0!==t?t:30),"elCenterY","elCenterY+".concat(t),"elOutY-elHeight"]}var i,r,l,d,h,o,b={fadeInOut:function(t,e){return e=1<arguments.length&&void 0!==e?e:0,{opacity:[a(0<arguments.length&&void 0!==t?t:30),[e,1,1,1,e]]}},fadeIn:function(t,e){return{opacity:[["elInY+elHeight",0<arguments.length&&void 0!==t?t:"elCenterY"],[1<arguments.length&&void 0!==e?e:0,1]]}},fadeOut:function(t,e){return{opacity:[[0<arguments.length&&void 0!==t?t:"elCenterY","elOutY-elHeight"],[1,1<arguments.length&&void 0!==e?e:0]]}},blurInOut:function(t,e){return e=1<arguments.length&&void 0!==e?e:20,{blur:[a(0<arguments.length&&void 0!==t?t:100),[e,0,0,0,e]]}},blurIn:function(t,e){return{blur:[["elInY+elHeight",0<arguments.length&&void 0!==t?t:"elCenterY"],[1<arguments.length&&void 0!==e?e:20,0]]}},blurOut:function(t,e){return{opacity:[[0<arguments.length&&void 0!==t?t:"elCenterY","elOutY-elHeight"],[0,1<arguments.length&&void 0!==e?e:20]]}},scaleInOut:function(t,e){return e=1<arguments.length&&void 0!==e?e:.6,{scale:[a(0<arguments.length&&void 0!==t?t:100),[e,1,1,1,e]]}},scaleIn:function(t,e){return{scale:[["elInY+elHeight",0<arguments.length&&void 0!==t?t:"elCenterY"],[1<arguments.length&&void 0!==e?e:.6,1]]}},scaleOut:function(t,e){return{scale:[[0<arguments.length&&void 0!==t?t:"elCenterY","elOutY-elHeight"],[1,1<arguments.length&&void 0!==e?e:.6]]}},slideX:function(t,e){return{translateX:[["elInY",0<arguments.length&&void 0!==t?t:0],[0,1<arguments.length&&void 0!==e?e:500]]}},slideY:function(t,e){return{translateY:[["elInY",0<arguments.length&&void 0!==t?t:0],[0,1<arguments.length&&void 0!==e?e:500]]}},spin:function(t,e){return{rotate:[[0,t=0<arguments.length&&void 0!==t?t:1e3],[0,1<arguments.length&&void 0!==e?e:360],{modValue:t}]}},flipX:function(t,e){return{rotateX:[[0,t=0<arguments.length&&void 0!==t?t:1e3],[0,1<arguments.length&&void 0!==e?e:360],{modValue:t}]}},flipY:function(t,e){return{rotateY:[[0,t=0<arguments.length&&void 0!==t?t:1e3],[0,1<arguments.length&&void 0!==e?e:360],{modValue:t}]}},jiggle:function(t,e){return{skewX:[[0,+(t=0<arguments.length&&void 0!==t?t:50),2*t,3*t,4*t],[0,e=1<arguments.length&&void 0!==e?e:40,0,-e,0],{modValue:4*t}]}},seesaw:function(t,e){return{skewY:[[0,+(t=0<arguments.length&&void 0!==t?t:50),2*t,3*t,4*t],[0,e=1<arguments.length&&void 0!==e?e:40,0,-e,0],{modValue:4*t}]}},zigzag:function(t,e){return{translateX:[[0,+(t=0<arguments.length&&void 0!==t?t:100),2*t,3*t,4*t],[0,e=1<arguments.length&&void 0!==e?e:100,0,-e,0],{modValue:4*t}]}},hueRotate:function(t,e){return{"hue-rotate":[[0,t=0<arguments.length&&void 0!==t?t:600],[0,1<arguments.length&&void 0!==e?e:360],{modValue:t}]}}},u=(i=["perspective","scaleX","scaleY","scale","skewX","skewY","skew","rotateX","rotateY","rotate"],r=["blur","hue-rotate","brightness"],l=["translateX","translateY","translateZ"],d=["perspective","border-radius","blur","translateX","translateY","translateZ"],h=["hue-rotate","rotate","rotateX","rotateY","skew","skewX","skewY"],o={easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},easeOutBounce:function(t){var e=7.5625,a=2.75;return t<1/a?e*t*t:t<2/a?e*(t-=1.5/a)*t+.75:t<2.5/a?e*(t-=2.25/a)*t+.9375:e*(t-=2.625/a)*t+.984375},easeInBounce:function(t){return 1-o.easeOutBounce(1-t)},easeOutBack:function(t){return 1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2)},easeInBack:function(t){return 2.70158*t*t*t-1.70158*t*t}},new function t(){var e=this;s(this,t),n(this,"drivers",[]),n(this,"elements",[]),n(this,"frame",0),n(this,"debug",!1),n(this,"windowWidth",0),n(this,"windowHeight",0),n(this,"presets",b),n(this,"debugData",{frameLengths:[]}),n(this,"init",(function(){e.findAndAddElements(),window.requestAnimationFrame(e.onAnimationFrame),e.windowWidth=document.body.clientWidth,e.windowHeight=document.body.clientHeight,window.onresize=e.onWindowResize})),n(this,"onWindowResize",(function(){document.body.clientWidth===e.windowWidth&&document.body.clientHeight===e.windowHeight||(e.windowWidth=document.body.clientWidth,e.windowHeight=document.body.clientHeight,e.elements.forEach((function(t){return t.calculateTransforms()})))})),n(this,"onAnimationFrame",(function(t){e.debug&&(e.debugData.frameStart=Date.now());var a,s={};e.drivers.forEach((function(t){s[t.name]=t.getValue(e.frame)})),e.elements.forEach((function(t){t.update(s,e.frame)})),e.debug&&e.debugData.frameLengths.push(Date.now()-e.debugData.frameStart),e.frame%60==0&&e.debug&&(a=Math.ceil(e.debugData.frameLengths.reduce((function(t,e){return t+e}),0)/60),console.log("Average frame calculation time: ".concat(a,"ms")),e.debugData.frameLengths=[]),e.frame++,window.requestAnimationFrame(e.onAnimationFrame)})),n(this,"addDriver",(function(t,a){var s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e.drivers.push(new O(t,a,s))})),n(this,"removeDriver",(function(t){e.drivers=e.drivers.filter((function(e){return e.name!==t}))})),n(this,"findAndAddElements",(function(){e.elements=[],document.querySelectorAll(".lax").forEach((function(t){var a=[];t.classList.forEach((function(t){t.includes("lax_preset")&&(t=t.replace("lax_preset_",""),a.push(t))}));var s=n({},"scrollY",{presets:a});e.elements.push(new m(".lax",e,t,s,0,{}))}))})),n(this,"addElements",(function(t,a,s){document.querySelectorAll(t).forEach((function(n,i){e.elements.push(new m(t,e,n,a,i,s))}))})),n(this,"removeElements",(function(t){e.elements=e.elements.filter((function(e){return e.selector!==t}))})),n(this,"addElement",(function(t,a,s){e.elements.push(new m("",e,t,a,0,s))})),n(this,"removeElement",(function(t){e.elements=e.elements.filter((function(e){return e.domElement!==t}))}))});function c(t,e){if(Array.isArray(t))return t;for(var a=Object.keys(t).map((function(t){return parseInt(t)})).sort((function(t,e){return e<t?1:-1})),s=a[a.length-1],n=0;n<a.length;n++){var i=a[n];if(e<i){s=i;break}}return t[s]}function g(t,e,a){var s=e.width,n=e.height,i=e.x,r=e.y;if("number"==typeof t)return t;var l=document.body.scrollHeight,d=document.body.scrollWidth,h=window.innerWidth,o=window.innerHeight,b=window.scrollY;i=(e=i+window.scrollX)+s,b=(r=r+b)+n;return Function("return ".concat(t.replace(/screenWidth/g,h).replace(/screenHeight/g,o).replace(/pageHeight/g,l).replace(/pageWidth/g,d).replace(/elWidth/g,s).replace(/elHeight/g,n).replace(/elInY/g,r-o).replace(/elOutY/g,b).replace(/elCenterY/g,r+n/2-o/2).replace(/elInX/g,e-h).replace(/elOutX/g,i).replace(/elCenterX/g,e+s/2-h/2).replace(/index/g,a)))()}function O(t,e){var a=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};s(this,O),n(this,"getValueFn",void 0),n(this,"name",""),n(this,"lastValue",0),n(this,"frameStep",1),n(this,"m1",0),n(this,"m2",0),n(this,"inertia",0),n(this,"inertiaEnabled",!1),n(this,"getValue",(function(t){var e=a.lastValue;return t%a.frameStep==0&&(e=a.getValueFn()),a.inertiaEnabled&&(t=e-a.lastValue,a.m1=.8*a.m1+t*(1-.8),a.m2=.8*a.m2+a.m1*(1-.8),a.inertia=Math.round(5e3*a.m2)/15e3),a.lastValue=e,[a.lastValue,a.inertia]})),this.name=t,this.getValueFn=e,Object.keys(i).forEach((function(t){a[t]=i[t]})),this.lastValue=this.getValueFn()}function m(t,a,b,u){var O=this,j=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=5<arguments.length&&void 0!==arguments[5]?arguments[5]:{};s(this,m),n(this,"domElement",void 0),n(this,"transformsData",void 0),n(this,"styles",{}),n(this,"selector",""),n(this,"groupIndex",0),n(this,"laxInstance",void 0),n(this,"onUpdate",void 0),n(this,"update",(function(t,a){var s,n=O.transforms,i={};for(s in n){var r=n[s];t[s]||console.error("No lax driver with name: ",s);var l,b=e(t[s],2),u=b[0],c=b[1];for(l in r){var g,m=(y=e(r[l],3))[0],j=y[1],f=(Y=void 0===(A=y[2])?{}:A).modValue,p=void 0===(v=Y.frameStep)?1:v,V=Y.easing,y=Y.inertia,A=Y.inertiaMode,v=Y.cssFn,Y=void 0===(Y=Y.cssUnit)?"":Y;V=o[V];a%p==0&&(V=function(t,e,a,s){var n=0;if(t.forEach((function(t){t<a&&n++})),n<=0)return e[0];if(n>=t.length)return e[t.length-1];var i,r=(r=t[i=n-1],t=t[n],(a-r)/(t-r));return s&&(r=s(r)),(i=e[i])*(1-r)+(e=e[n])*r}(m,j,f?u%f:u,V),y&&(g=c*y,"absolute"===A&&(g=Math.abs(g)),V+=g),g="px"==(Y||d.includes(l)?"px":h.includes(l)?"deg":"")?0:3,g=V.toFixed(g),i[l]=v?v(g,O.domElement):g+Y)}}O.applyStyles(i),O.onUpdate&&O.onUpdate(t,O.domElement)})),n(this,"calculateTransforms",(function(){O.transforms={};var t,a=O.laxInstance.windowWidth;for(t in O.transformsData)!function(t){var s=O.transformsData[t],n={},i=s.presets;for(var r in(void 0===i?[]:i).forEach((function(t){var a,n,i=(n=e(t.split("-"),3))[0],r=n[1];t=n[2];(n=window.lax.presets[i])?(a=n(r,t),Object.keys(a).forEach((function(t){s[t]=a[t]}))):console.error("Lax preset cannot be found with name: ",i)})),delete s.presets,s)!function(t){var i=void 0===(r=(l=e(s[t],3))[0])?[-1e9,1e9]:r,r=void 0===(r=l[1])?[-1e9,1e9]:r,l=void 0===(l=l[2])?{}:l,d=O.domElement.getBoundingClientRect();i=c(i,a).map((function(t){return g(t,d,O.groupIndex)})),r=c(r,a).map((function(t){return g(t,d,O.groupIndex)}));n[t]=[i,r,l]}(r);O.transforms[t]=n}(t)})),n(this,"applyStyles",(function(t){var e,a,s,n=(e=t,a={transform:"",filter:""},s={translateX:1e-5,translateY:1e-5,translateZ:1e-5},Object.keys(e).forEach((function(t){var n=e[t],o=d.includes(t)?"px":h.includes(t)?"deg":"";l.includes(t)?s[t]=n:i.includes(t)?a.transform+="".concat(t,"(").concat(n).concat(o,") "):r.includes(t)?a.filter+="".concat(t,"(").concat(n).concat(o,") "):a[t]="".concat(n).concat(o," ")})),a.transform="translate3d(".concat(s.translateX,"px, ").concat(s.translateY,"px, ").concat(s.translateZ,"px) ").concat(a.transform),a);Object.keys(n).forEach((function(t){O.domElement.style.setProperty(t,n[t])}))})),this.selector=t,this.laxInstance=a,this.domElement=b,this.transformsData=u,this.groupIndex=j;var p=void 0===(j=f.style)?{}:j;f=f.onUpdate;Object.keys(p).forEach((function(t){b.style.setProperty(t,p[t])})),f&&(this.onUpdate=f),this.calculateTransforms()}void 0!==t.exports?t.exports=u:window.lax=u}()}(t);var e=t.exports;return class{constructor(t={}){this.settings=Object.assign(this,{},t),this.elements=[]}init(){e.init(),e.addDriver("scrollY",(function(){return window.scrollY})),this.refresh(),this.lax=e,Object.assign(this,e)}refresh(){let t=!1;document.body.hasAttribute("data-skrollrr-off")&&(t=!0),this.elements.forEach((t=>{e.removeElement(t),t.style&&(t.style.transition&&(t.style.transition=""),t.style.transform&&(t.style.transform=""))})),this.elements=[];let a=window.innerWidth;document.querySelectorAll("[data-bottom-top],[data-center],[data-center-bottom],[data-100-top],[data-50-top],[data-top],[data-top-bottom],[data-center-top],[data--300-bottom],[data--150-bottom],[data--50-bottom],[data-bottom],[data-100-bottom],[data-150-bottom],[data-400-bottom],[data--400-bottom],[data--200-bottom],[data--100-bottom],[data-50-bottom],[data-200-bottom],[data-300-bottom],[data-in],[data-in-150],[data-in-300],[data-cen--150],[data-cen],[data-cen-150],[data-out--300],[data-out--150],[data-out][data-t],[data-t-100],[data-t-200],[data-t-300],[data-t-400],[data-t-500],[data-t-600],[data-t-700],[data-t-800],[data-t-900],[data-t-1000],[data-t-1100],[data-t-1200],[data-t-1300],[data-t-1400],[data-t-1500],[data-t-1600],[data-t-1700],[data-t-1800],[data-t-1900],[data-t-2000],[data-t-2100],[data-t-2200],[data-t-2300],[data-t-2400],[data-t-2500],[data-t-2600],[data-t-2700],[data-t-2800]").forEach((s=>{let n=!1;if(a<=760&&s.closest(".m-skrollrr-off")&&(n=!0),t||n)return s.style.transform="",s.style.transition="",void(s.style.opacity="");s.style.transform="";let i=this.getObjVal(s,"data-top-bottom"),r=this.getObjVal(s,"data-top"),l=this.getObjVal(s,"data-50-top"),d=this.getObjVal(s,"data-100-top"),h=this.getObjVal(s,"data-center-bottom"),o=this.getObjVal(s,"data-center"),b=this.getObjVal(s,"data-center-top"),u=this.getObjVal(s,"data--400-bottom"),c=this.getObjVal(s,"data--300-bottom"),g=this.getObjVal(s,"data--200-bottom"),O=this.getObjVal(s,"data--150-bottom"),m=this.getObjVal(s,"data--100-bottom"),j=this.getObjVal(s,"data--50-bottom"),f=this.getObjVal(s,"data-bottom"),p=this.getObjVal(s,"data-50-bottom"),V=this.getObjVal(s,"data-100-bottom"),y=this.getObjVal(s,"data-150-bottom"),A=this.getObjVal(s,"data-200-bottom"),v=this.getObjVal(s,"data-300-bottom"),Y=this.getObjVal(s,"data-400-bottom"),x=this.getObjVal(s,"data-bottom-top"),I=this.getObjVal(s,"data-in"),k=this.getObjVal(s,"data-in-150"),w=this.getObjVal(s,"data-in-300"),E=this.getObjVal(s,"data-cen--150"),X=this.getObjVal(s,"data-cen"),C=this.getObjVal(s,"data-cen-150"),H=this.getObjVal(s,"data-out--300"),F=this.getObjVal(s,"data-out--150"),S=this.getObjVal(s,"data-out"),W=!1;s.hasAttribute("data-xs")&&(W=!0);let D=!1;s.hasAttribute("data-sm")&&(D=!0);let Q=!1;s.hasAttribute("data-md")&&(Q=!0),s.hasAttribute("data-lg"),s.hasAttribute("data-xl");let T={},M={},U={},q={},B={},L={},z={},P={},R={},Z={},_={},N={},$={},G={},J={},K={},tt={},et={},at={},st={},nt={},it={},rt={},lt={},dt={},ht={},ot={},bt={},ut={},ct={},gt={},Ot={},mt={};(a>1280||a>970&&a<=1280&&!Q||a>760&&a<=970&&!D||a<=760&&!W)&&(U=this.getObjVal(s,"data-t"),q=this.getObjVal(s,"data-t-100"),B=this.getObjVal(s,"data-t-200"),L=this.getObjVal(s,"data-t-300"),z=this.getObjVal(s,"data-t-400"),P=this.getObjVal(s,"data-t-500"),R=this.getObjVal(s,"data-t-600"),Z=this.getObjVal(s,"data-t-700"),_=this.getObjVal(s,"data-t-800"),N=this.getObjVal(s,"data-t-900"),$=this.getObjVal(s,"data-t-1000"),G=this.getObjVal(s,"data-t-1100"),J=this.getObjVal(s,"data-t-1200"),K=this.getObjVal(s,"data-t-1300"),tt=this.getObjVal(s,"data-t-1400"),et=this.getObjVal(s,"data-t-1500"),at=this.getObjVal(s,"data-t-1600"),st=this.getObjVal(s,"data-t-1700"),nt=this.getObjVal(s,"data-t-1800"),it=this.getObjVal(s,"data-t-1900"),rt=this.getObjVal(s,"data-t-2000"),lt=this.getObjVal(s,"data-t-2100"),dt=this.getObjVal(s,"data-t-2200"),ht=this.getObjVal(s,"data-t-2300"),ot=this.getObjVal(s,"data-t-2400"),bt=this.getObjVal(s,"data-t-2500"),ut=this.getObjVal(s,"data-t-2600"),ct=this.getObjVal(s,"data-t-2700"),gt=this.getObjVal(s,"data-t-2800")),a>970&&a<=1280&&Q&&(s.hasAttribute("data-md-t")&&(U=this.getObjVal(s,"data-md-t")),s.hasAttribute("data-md-t-100")&&(q=this.getObjVal(s,"data-md-t-100")),s.hasAttribute("data-md-t-200")&&(B=this.getObjVal(s,"data-md-t-200")),s.hasAttribute("data-md-t-300")&&(L=this.getObjVal(s,"data-md-t-300")),s.hasAttribute("data-md-t-400")&&(z=this.getObjVal(s,"data-md-t-400")),s.hasAttribute("data-md-t-500")&&(P=this.getObjVal(s,"data-md-t-500")),s.hasAttribute("data-md-t-600")&&(R=this.getObjVal(s,"data-md-t-600")),s.hasAttribute("data-md-t-700")&&(Z=this.getObjVal(s,"data-md-t-700")),s.hasAttribute("data-md-t-800")&&(_=this.getObjVal(s,"data-md-t-800")),s.hasAttribute("data-md-t-900")&&(N=this.getObjVal(s,"data-md-t-900")),s.hasAttribute("data-md-t-1000")&&($=this.getObjVal(s,"data-md-t-1000")),s.hasAttribute("data-md-t-1100")&&(G=this.getObjVal(s,"data-md-t-1100")),s.hasAttribute("data-md-t-1200")&&(J=this.getObjVal(s,"data-md-t-1200")),s.hasAttribute("data-md-t-1300")&&(K=this.getObjVal(s,"data-md-t-1300")),s.hasAttribute("data-md-t-1400")&&(tt=this.getObjVal(s,"data-md-t-1400")),s.hasAttribute("data-md-t-1500")&&(et=this.getObjVal(s,"data-md-t-1500")),s.hasAttribute("data-md-t-1600")&&(at=this.getObjVal(s,"data-md-t-1600")),s.hasAttribute("data-md-t-1700")&&(st=this.getObjVal(s,"data-md-t-1700")),s.hasAttribute("data-md-t-1800")&&(nt=this.getObjVal(s,"data-md-t-1800")),s.hasAttribute("data-md-t-1900")&&(it=this.getObjVal(s,"data-md-t-1900")),s.hasAttribute("data-md-t-2000")&&(rt=this.getObjVal(s,"data-md-t-2000")),s.hasAttribute("data-md-t-2100")&&(lt=this.getObjVal(s,"data-md-t-2100")),s.hasAttribute("data-md-t-2200")&&(dt=this.getObjVal(s,"data-md-t-2200")),s.hasAttribute("data-md-t-2300")&&(ht=this.getObjVal(s,"data-md-t-2300")),s.hasAttribute("data-md-t-2400")&&(ot=this.getObjVal(s,"data-md-t-2400")),s.hasAttribute("data-md-t-2500")&&(bt=this.getObjVal(s,"data-md-t-2500")),s.hasAttribute("data-md-t-2600")&&(ut=this.getObjVal(s,"data-md-t-2600")),s.hasAttribute("data-md-t-2700")&&(ct=this.getObjVal(s,"data-md-t-2700")),s.hasAttribute("data-md-t-2800")&&(gt=this.getObjVal(s,"data-md-t-2800"))),a<=970&&s.hasAttribute("m-data-out")&&(S=this.getObjVal(s,"m-data-out")),(a>760&&a<=970&&D||a<=760&&!W&&D)&&(s.hasAttribute("data-sm-t")&&(U=this.getObjVal(s,"data-sm-t")),s.hasAttribute("data-sm-t-100")&&(q=this.getObjVal(s,"data-sm-t-100")),s.hasAttribute("data-sm-t-200")&&(B=this.getObjVal(s,"data-sm-t-200")),s.hasAttribute("data-sm-t-300")&&(L=this.getObjVal(s,"data-sm-t-300")),s.hasAttribute("data-sm-t-400")&&(z=this.getObjVal(s,"data-sm-t-400")),s.hasAttribute("data-sm-t-500")&&(P=this.getObjVal(s,"data-sm-t-500")),s.hasAttribute("data-sm-t-600")&&(R=this.getObjVal(s,"data-sm-t-600")),s.hasAttribute("data-sm-t-700")&&(Z=this.getObjVal(s,"data-sm-t-700")),s.hasAttribute("data-sm-t-800")&&(_=this.getObjVal(s,"data-sm-t-800")),s.hasAttribute("data-sm-t-900")&&(N=this.getObjVal(s,"data-sm-t-900")),s.hasAttribute("data-sm-t-1000")&&($=this.getObjVal(s,"data-sm-t-1000")),s.hasAttribute("data-sm-t-1100")&&(G=this.getObjVal(s,"data-sm-t-1100")),s.hasAttribute("data-sm-t-1200")&&(J=this.getObjVal(s,"data-sm-t-1200")),s.hasAttribute("data-sm-t-1300")&&(K=this.getObjVal(s,"data-sm-t-1300")),s.hasAttribute("data-sm-t-1400")&&(tt=this.getObjVal(s,"data-sm-t-1400")),s.hasAttribute("data-sm-t-1500")&&(et=this.getObjVal(s,"data-sm-t-1500")),s.hasAttribute("data-sm-t-1600")&&(at=this.getObjVal(s,"data-sm-t-1600")),s.hasAttribute("data-sm-t-1700")&&(st=this.getObjVal(s,"data-sm-t-1700")),s.hasAttribute("data-sm-t-1800")&&(nt=this.getObjVal(s,"data-sm-t-1800")),s.hasAttribute("data-sm-t-1900")&&(it=this.getObjVal(s,"data-sm-t-1900")),s.hasAttribute("data-sm-t-2000")&&(rt=this.getObjVal(s,"data-sm-t-2000")),s.hasAttribute("data-sm-t-2100")&&(lt=this.getObjVal(s,"data-sm-t-2100")),s.hasAttribute("data-sm-t-2200")&&(dt=this.getObjVal(s,"data-sm-t-2200")),s.hasAttribute("data-sm-t-2300")&&(ht=this.getObjVal(s,"data-sm-t-2300")),s.hasAttribute("data-sm-t-2400")&&(ot=this.getObjVal(s,"data-sm-t-2400")),s.hasAttribute("data-sm-t-2500")&&(bt=this.getObjVal(s,"data-sm-t-2500")),s.hasAttribute("data-sm-t-2600")&&(ut=this.getObjVal(s,"data-sm-t-2600")),s.hasAttribute("data-sm-t-2700")&&(ct=this.getObjVal(s,"data-sm-t-2700")),s.hasAttribute("data-sm-t-2800")&&(gt=this.getObjVal(s,"data-sm-t-2800"))),a<=414&&W&&(s.hasAttribute("data-xs-t")&&(U=this.getObjVal(s,"data-xs-t")),s.hasAttribute("data-xs-t-100")&&(q=this.getObjVal(s,"data-xs-t-100")),s.hasAttribute("data-xs-t-200")&&(B=this.getObjVal(s,"data-xs-t-200")),s.hasAttribute("data-xs-t-300")&&(L=this.getObjVal(s,"data-xs-t-300")),s.hasAttribute("data-xs-t-400")&&(z=this.getObjVal(s,"data-xs-t-400")),s.hasAttribute("data-xs-t-500")&&(P=this.getObjVal(s,"data-xs-t-500")),s.hasAttribute("data-xs-t-600")&&(R=this.getObjVal(s,"data-xs-t-600")),s.hasAttribute("data-xs-t-700")&&(Z=this.getObjVal(s,"data-xs-t-700")),s.hasAttribute("data-xs-t-800")&&(_=this.getObjVal(s,"data-xs-t-800")),s.hasAttribute("data-xs-t-900")&&(N=this.getObjVal(s,"data-xs-t-900")),s.hasAttribute("data-xs-t-1000")&&($=this.getObjVal(s,"data-xs-t-1000")),s.hasAttribute("data-xs-t-1100")&&(G=this.getObjVal(s,"data-xs-t-1100")),s.hasAttribute("data-xs-t-1200")&&(J=this.getObjVal(s,"data-xs-t-1200")),s.hasAttribute("data-xs-t-1300")&&(K=this.getObjVal(s,"data-xs-t-1300")),s.hasAttribute("data-xs-t-1400")&&(tt=this.getObjVal(s,"data-xs-t-1400")),s.hasAttribute("data-xs-t-1500")&&(et=this.getObjVal(s,"data-xs-t-1500")),s.hasAttribute("data-xs-t-1600")&&(at=this.getObjVal(s,"data-xs-t-1600")),s.hasAttribute("data-xs-t-1700")&&(st=this.getObjVal(s,"data-xs-t-1700")),s.hasAttribute("data-xs-t-1800")&&(nt=this.getObjVal(s,"data-xs-t-1800")),s.hasAttribute("data-xs-t-1900")&&(it=this.getObjVal(s,"data-xs-t-1900")),s.hasAttribute("data-xs-t-2000")&&(rt=this.getObjVal(s,"data-xs-t-2000")),s.hasAttribute("data-xs-t-2100")&&(lt=this.getObjVal(s,"data-xs-t-2100")),s.hasAttribute("data-xs-t-2200")&&(dt=this.getObjVal(s,"data-xs-t-2200")),s.hasAttribute("data-xs-t-2300")&&(ht=this.getObjVal(s,"data-xs-t-2300")),s.hasAttribute("data-xs-t-2400")&&(ot=this.getObjVal(s,"data-xs-t-2400")),s.hasAttribute("data-xs-t-2500")&&(bt=this.getObjVal(s,"data-xs-t-2500")),s.hasAttribute("data-xs-t-2600")&&(ut=this.getObjVal(s,"data-xs-t-2600")),s.hasAttribute("data-xs-t-2700")&&(ct=this.getObjVal(s,"data-xs-t-2700")),s.hasAttribute("data-xs-t-2800")&&(gt=this.getObjVal(s,"data-xs-t-2800")));let jt=U,ft=q,pt=B,Vt=L,yt=z,At=P,vt=R,Yt=Z,xt=_,It=N,kt=$,wt=G,Et=J,Xt=K,Ct=tt,Ht=et,Ft=at,St=st,Wt=nt,Dt=it,Qt=rt,Tt=lt,Mt=dt,Ut=ht,qt=ot,Bt=bt,Lt=ut,zt=ct,Pt=gt,Rt=window.innerHeight;Rt<730?(T=jt,M=ft,U=pt,q=Vt,B=yt,L=At,z=vt,P=Yt,R=xt,Z=It,_=kt,N=wt,$=Et,G=Xt,J=Ct,K=Ht,tt=Ft,et=St,at=Wt,st=Dt,nt=Qt,it=Tt,rt=Mt,lt=Ut,dt=qt,ht=Bt,ot=Lt,bt=zt,ut=Pt,ct={},gt={}):Rt>=730&&Rt<790?(M=jt,U=ft,q=pt,B=Vt,L=yt,z=At,P=vt,R=Yt,Z=xt,_=It,N=kt,$=wt,G=Et,J=Xt,K=Ct,tt=Ht,et=Ft,at=St,st=Wt,nt=Dt,it=Qt,rt=Tt,lt=Mt,dt=Ut,ht=qt,ot=Bt,bt=Lt,ut=zt,ct=Pt,gt={}):Rt>=790&&Rt<840||(Rt>=840&&Rt<1125?(U={},q=jt,B=ft,L=pt,z=Vt,P=yt,R=At,Z=vt,_=Yt,N=xt,$=It,G=kt,J=wt,K=Et,tt=Xt,et=Ct,at=Ht,st=Ft,nt=St,it=Wt,rt=Dt,lt=Qt,dt=Tt,ht=Mt,ot=Ut,bt=qt,ut=Bt,ct=Lt,gt=zt,Ot=Pt):(U={},q={},B=jt,L=ft,z=pt,P=Vt,R=yt,Z=At,_=vt,N=Yt,$=xt,G=It,J=kt,K=wt,tt=Et,et=Xt,at=Ct,st=Ht,nt=Ft,it=St,rt=Wt,lt=Dt,dt=Qt,ht=Tt,ot=Mt,bt=Ut,ut=qt,ct=Bt,gt=Lt,Ot=zt,mt=Pt));let Zt={};0!==Object.keys(x).length&&(Zt=this.parseObj(x,"elInY",Zt)),0!==Object.keys(Y).length&&(Zt=this.parseObj(Y,"elInY+50",Zt)),0!==Object.keys(v).length&&(Zt=this.parseObj(v,"elInY+100",Zt)),0!==Object.keys(A).length&&(Zt=this.parseObj(A,"elInY+150",Zt)),0!==Object.keys(y).length&&(Zt=this.parseObj(y,"elInY+200",Zt)),0!==Object.keys(V).length&&(Zt=this.parseObj(V,"elInY+250",Zt)),0!==Object.keys(p).length&&(Zt=this.parseObj(p,"elInY+300",Zt)),0!==Object.keys(f).length&&(Zt=this.parseObj(f,"elInY+350",Zt)),0!==Object.keys(j).length&&(Zt=this.parseObj(j,"elInY+400",Zt)),0!==Object.keys(m).length&&(Zt=this.parseObj(m,"elInY+450",Zt)),0!==Object.keys(O).length&&(Zt=this.parseObj(O,"elInY+500",Zt)),0!==Object.keys(g).length&&(Zt=this.parseObj(g,"elInY+550",Zt)),0!==Object.keys(c).length&&(Zt=this.parseObj(c,"elInY+600",Zt)),0!==Object.keys(u).length&&(Zt=this.parseObj(u,"elInY+650",Zt)),0!==Object.keys(b).length&&(Zt=this.parseObj(b,"elCenterY-300",Zt)),0!==Object.keys(o).length&&(Zt=this.parseObj(o,"elCenterY",Zt)),0!==Object.keys(h).length&&(Zt=this.parseObj(h,"elCenterY+100",Zt)),0!==Object.keys(d).length&&(Zt=this.parseObj(d,"elCenterY+200",Zt)),0!==Object.keys(l).length&&(Zt=this.parseObj(l,"elCenterY+300",Zt)),0!==Object.keys(r).length&&(Zt=this.parseObj(r,"elOutY-300",Zt)),0!==Object.keys(i).length&&(Zt=this.parseObj(i,"elOutY",Zt)),0!==Object.keys(I).length&&(Zt=this.parseObj(I,"elInY",Zt)),0!==Object.keys(k).length&&(Zt=this.parseObj(k,"elInY+150",Zt)),0!==Object.keys(w).length&&(Zt=this.parseObj(w,"elInY+300 ",Zt)),0!==Object.keys(E).length&&(Zt=this.parseObj(E,"elCenterY-150",Zt)),0!==Object.keys(X).length&&(Zt=this.parseObj(X,"elCenterY",Zt)),0!==Object.keys(C).length&&(Zt=this.parseObj(C,"elCenterY+150",Zt)),0!==Object.keys(H).length&&(Zt=this.parseObj(H,"elOutY-300 ",Zt)),0!==Object.keys(F).length&&(Zt=this.parseObj(F,"elOutY-150  ",Zt)),0!==Object.keys(S).length&&(Zt=this.parseObj(S,"elOutY",Zt)),0!==Object.keys(T).length&&(Zt=this.parseObj(T,"elInY-200",Zt)),0!==Object.keys(M).length&&(Zt=this.parseObj(M,"elInY-100",Zt)),0!==Object.keys(U).length&&(Zt=this.parseObj(U,"elInY",Zt)),0!==Object.keys(q).length&&(Zt=this.parseObj(q,"elInY+100",Zt)),0!==Object.keys(B).length&&(Zt=this.parseObj(B,"elInY+200",Zt)),0!==Object.keys(L).length&&(Zt=this.parseObj(L,"elInY+300 ",Zt)),0!==Object.keys(z).length&&(Zt=this.parseObj(z,"elInY+400 ",Zt)),0!==Object.keys(P).length&&(Zt=this.parseObj(P,"elInY+500 ",Zt)),0!==Object.keys(R).length&&(Zt=this.parseObj(R,"elInY+600 ",Zt)),0!==Object.keys(Z).length&&(Zt=this.parseObj(Z,"elInY+700 ",Zt)),0!==Object.keys(_).length&&(Zt=this.parseObj(_,"elInY+800 ",Zt)),0!==Object.keys(N).length&&(Zt=this.parseObj(N,"elInY+900 ",Zt)),0!==Object.keys($).length&&(Zt=this.parseObj($,"elInY+1000 ",Zt)),0!==Object.keys(G).length&&(Zt=this.parseObj(G,"elInY+1100 ",Zt)),0!==Object.keys(J).length&&(Zt=this.parseObj(J,"elInY+1200 ",Zt)),0!==Object.keys(K).length&&(Zt=this.parseObj(K,"elInY+1300 ",Zt)),0!==Object.keys(tt).length&&(Zt=this.parseObj(tt,"elInY+1400 ",Zt)),0!==Object.keys(et).length&&(Zt=this.parseObj(et,"elInY+1500 ",Zt)),0!==Object.keys(at).length&&(Zt=this.parseObj(at,"elInY+1600 ",Zt)),0!==Object.keys(st).length&&(Zt=this.parseObj(st,"elInY+1700 ",Zt)),0!==Object.keys(nt).length&&(Zt=this.parseObj(nt,"elInY+1800 ",Zt)),0!==Object.keys(it).length&&(Zt=this.parseObj(it,"elInY+1900 ",Zt)),0!==Object.keys(rt).length&&(Zt=this.parseObj(rt,"elInY+2000 ",Zt)),0!==Object.keys(lt).length&&(Zt=this.parseObj(lt,"elInY+2100 ",Zt)),0!==Object.keys(dt).length&&(Zt=this.parseObj(dt,"elInY+2200 ",Zt)),0!==Object.keys(ht).length&&(Zt=this.parseObj(ht,"elInY+2300 ",Zt)),0!==Object.keys(ot).length&&(Zt=this.parseObj(ot,"elInY+2400 ",Zt)),0!==Object.keys(bt).length&&(Zt=this.parseObj(bt,"elInY+2500 ",Zt)),0!==Object.keys(ut).length&&(Zt=this.parseObj(ut,"elInY+2600 ",Zt)),0!==Object.keys(ct).length&&(Zt=this.parseObj(ct,"elInY+2700 ",Zt)),0!==Object.keys(gt).length&&(Zt=this.parseObj(gt,"elInY+2800 ",Zt)),0!==Object.keys(Ot).length&&(Zt=this.parseObj(Ot,"elInY+2900 ",Zt)),0!==Object.keys(mt).length&&(Zt=this.parseObj(mt,"elInY+3000 ",Zt)),s.style.transition="",s.setAttribute("data-dummy-selector","1"),e.addElements("[data-dummy-selector]",{scrollY:Zt}),this.elements.push(document.querySelector("[data-dummy-selector]")),s.removeAttribute("data-dummy-selector"),setTimeout((()=>{s.style.opacity=1,"off"===s.getAttribute("data-smooth-scrolling")||this.settings.transition&&(s.style.transition=this.settings.transition)}),100)}))}parseTransformProperty(t){for(var e,a=/(\w+)\((.+?)\)/g,s={};e=a.exec(t);)s[e[1]]=s[e[1]]?s[e[1]].concat([e[2]]):[e[2]];return s}getObjVal(t,e){let a={},s=t.getAttribute(e);if(s){s.split(";").forEach((t=>{if(-1!==t.indexOf("transform")&&(a=this.parseTransformProperty(t)),-1!==t.indexOf("opacity")){let e=t.replace("opacity:","").replace(";","");a.opacity=[parseFloat(e)]}}))}return a}parseObj(t,e,a){if(t.translateY){let s;s=-1!==t.translateY[0].indexOf("%")?parseFloat(t.translateY[0])/100*window.innerHeight:parseFloat(t.translateY[0]),a.translateY||(a.translateY=[[],[]]),a.translateY[0].push(e),a.translateY[1].push(s)}if(t.translateX){let s;s=-1!==t.translateX[0].indexOf("%")?parseFloat(t.translateX[0])/100*window.innerWidth:parseFloat(t.translateX[0]),a.translateX||(a.translateX=[[],[]]),a.translateX[0].push(e),a.translateX[1].push(s)}if(t.scale){let s=parseFloat(t.scale[0]);a.scale||(a.scale=[[],[]]),a.scale[0].push(e),a.scale[1].push(s)}if(t.rotate){let s=parseFloat(t.rotate[0]);a.rotate||(a.rotate=[[],[]]),a.rotate[0].push(e),a.rotate[1].push(s)}if(t.opacity){let s=parseFloat(t.opacity[0]);a.opacity||(a.opacity=[[],[]]),a.opacity[0].push(e),a.opacity[1].push(s)}return a}}}();


documentReady(function(){

    // Change filter from is-overlay-bg to is-overlay (to prevent conflict with animation)
    var overlayBgs = document.querySelectorAll('.is-overlay-bg');
    overlayBgs.forEach((elm)=>{
        if(elm.style) if(elm.style.filter) {
            if(elm.style.filter.indexOf('grayscale')!==-1) {
                elm.parentNode.style.filter = 'grayscale(1)';
            }
        }
    });
    const skrollrr = new Skrollrr({
        transition: 'all 0.3s ease-out'
    });
    skrollrr.init();

    window.skrollrr = skrollrr;

});


if(window.contentbox||parent.contentbox) {

    let old;
    if(window.contentbox) {
        old = window.contentbox.onRender;
    } else if(parent.contentbox) {
        old = parent.contentbox.onRender;
    }

    const onRender = () =>{
        old.call(this); 
        
        // if(window.skrollrr) window.skrollrr.refresh();

        try {
            if(window.trigger) window.trigger.kill();
        } catch(e) {}
    
        let elms = document.querySelectorAll('.is-animated,.is-scale-animated');
        elms.forEach(function(elm){
            if(elm.classList.contains('once')) {
                elm.removeAttribute('data-scroll','');
                elm.setAttribute('data-scroll-once','');
            } else {
                elm.removeAttribute('data-scroll-once','');
                elm.setAttribute('data-scroll','');
            }
        });
    
        // Auto add delays
        elms = document.querySelectorAll('.is-container > div');
        elms.forEach(function(row){
            let animElms = row.querySelectorAll('.is-animated[data-scroll],.is-animated[data-scroll-once]');
            let n = 0;
            if(animElms.length>1) animElms.forEach(function(elm){
                if(elm.className.indexOf('delay-')===-1) {
                    if(n>0) {
                        elm.style.transitionDelay = n+'s';
                        elm.style.animationDelay = n+'s';
                    }
                    n=n+0.2;
                }
            });
        });

        setTimeout(()=>{
            inViewSetup();
        }, 100);
        
    }

    if(window.contentbox) {
        window.contentbox.onRender = onRender;
    } else if(parent.contentbox) {
        parent.contentbox.onRender = onRender;
    }
}


/* AOS (Animate on scroll) | Copyright (c) 2015 Michał Sajnóg | The MIT License (MIT) */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});
AOS.init({
    duration: 1200
});

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("ScrollTrigger",[],e):"object"==typeof exports?exports.ScrollTrigger=e():t.ScrollTrigger=e()}(window,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e){
    /*!
     * object-extend
     * A well-tested function to deep extend (or merge) JavaScript objects without further dependencies.
     *
     * http://github.com/bernhardw
     *
     * Copyright 2013, Bernhard Wanger <mail@bernhardwanger.com>
     * Released under the MIT license.
     *
     * Date: 2013-04-10
     */
    t.exports=function t(e,i){return null==e||null==i?e:(Object.keys(i).forEach((function(n){"[object Object]"==Object.prototype.toString.call(i[n])?"[object Object]"!=Object.prototype.toString.call(e[n])?e[n]=i[n]:e[n]=t(e[n],i[n]):e[n]=i[n]})),e)}},function(t,e){Array.prototype.each=function(t){for(var e=this.length,i=0;i<e;i++){var n=this[i];n&&t(n,i)}},NodeList.prototype.each=Array.prototype.each,NodeList.prototype.filter=Array.prototype.filter},function(t,e,i){"use strict";i.r(e);var n=function(){this.trigger={once:!1,offset:{viewport:{x:0,y:0},element:{x:0,y:0}},toggle:{class:{in:"visible",out:"invisible"},callback:{in:null,visible:null,out:null}}},this.scroll={sustain:300,element:window,callback:function(){},start:function(){},stop:function(){},directionChange:function(){}}},o=i(0),s=i.n(o);i(1);function r(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function l(t){return Number(t)===t&&t%1==0}function c(t){return Number(t)===t&&t%1!=0}var a=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=e,i=s()((new n).trigger,i),this.offset=i.offset,this.toggle=i.toggle,this.once=i.once,this.visible=null,this.active=!0}var e,i,o;return e=t,(i=[{key:"checkVisibility",value:function(t,e){if(!this.active)return this.visible;var i={w:t.offsetWidth||t.innerWidth||0,h:t.offsetHeight||t.innerHeight||0},n=this.getBounds(),o=this._checkVisibility(n,i,e);if(o!==this.visible){this.visible=o;var s=this._toggleCallback();s instanceof Promise?s.then(this._toggleClass.bind(this)).catch((function(t){console.error("Trigger promise failed"),console.error(t)})):this._toggleClass(),this.visible&&this.once&&(this.active=!1)}else if(o&&"function"==typeof this.toggle.callback.visible)return this.toggle.callback.visible.call(this.element,this);return o}},{key:"getBounds",value:function(){return this.element.getBoundingClientRect()}},{key:"_getElementOffset",value:function(t,e){var i={x:0,y:0};return"function"==typeof this.offset.element.x?i.x=t.width*this.offset.element.x(this,t,e):c(this.offset.element.x)?i.x=t.width*this.offset.element.x:l(this.offset.element.x)&&(i.x=this.offset.element.x),"function"==typeof this.offset.element.y?i.y=t.height*this.offset.element.y(this,t,e):c(this.offset.element.y)?i.y=t.height*this.offset.element.y:l(this.offset.element.y)&&(i.y=this.offset.element.y),i}},{key:"_getViewportOffset",value:function(t,e){var i={x:0,y:0};return"function"==typeof this.offset.viewport.x?i.x=t.w*this.offset.viewport.x(this,t,e):c(this.offset.viewport.x)?i.x=t.w*this.offset.viewport.x:l(this.offset.viewport.x)&&(i.x=this.offset.viewport.x),"function"==typeof this.offset.viewport.y?i.y=t.h*this.offset.viewport.y(this,t,e):c(this.offset.viewport.y)?i.y=t.h*this.offset.viewport.y:l(this.offset.viewport.y)&&(i.y=this.offset.viewport.y),i}},{key:"_checkVisibility",value:function(t,e,i){var n=this._getElementOffset(t,i),o=this._getViewportOffset(e,i),s=!0;return t.left-o.x<-(t.width-n.x)&&(s=!1),t.left+o.x>e.w-n.x&&(s=!1),t.top-o.y<-(t.height-n.y)&&(s=!1),t.top+o.y>e.h-n.y&&(s=!1),s}},{key:"_toggleClass",value:function(){var t=this;if(this.visible)return Array.isArray(this.toggle.class.in)?this.toggle.class.in.each((function(e){t.element.classList.add(e)})):this.element.classList.add(this.toggle.class.in),void(Array.isArray(this.toggle.class.out)?this.toggle.class.out.each((function(e){t.element.classList.remove(e)})):this.element.classList.remove(this.toggle.class.out));Array.isArray(this.toggle.class.in)?this.toggle.class.in.each((function(e){t.element.classList.remove(e)})):this.element.classList.remove(this.toggle.class.in),Array.isArray(this.toggle.class.out)?this.toggle.class.out.each((function(e){t.element.classList.add(e)})):this.element.classList.add(this.toggle.class.out)}},{key:"_toggleCallback",value:function(){if(this.visible){if("function"==typeof this.toggle.callback.in)return this.toggle.callback.in.call(this.element,this)}else if("function"==typeof this.toggle.callback.out)return this.toggle.callback.out.call(this.element,this)}}])&&r(e.prototype,i),o&&r(e,o),t}();function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.triggers=e instanceof Array?e:[]}var e,i,n;return e=t,(i=[{key:"add",value:function(t){var e=this;if(t instanceof a)return this.triggers.push(t);t.each((function(t){t instanceof a?e.triggers.push(t):console.error("Object added to TriggerCollection is not a Trigger. Object: ",t)}))}},{key:"remove",value:function(t){t instanceof a&&(t=[t]),this.triggers=this.triggers.filter((function(e){var i=!1;return t.each((function(t){t==e&&(i=!0)})),!i}))}},{key:"query",value:function(t){return this.triggers.filter((function(e){var i=e.element,n=i.parentNode;return[].slice.call(n.querySelectorAll(t)).indexOf(i)>-1}))}},{key:"search",value:function(t){var e=this.triggers.filter((function(e){if(t instanceof NodeList||Array.isArray(t)){var i=!1;return t.each((function(t){e.element==t&&(i=!0)})),i}return e.element==t}));return 0==e.length?null:e.length>1?e:e[0]}},{key:"call",value:function(t){this.triggers.each(t)}}])&&u(e.prototype,i),n&&u(e,n),t}();function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var g=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._parseOptions(e),"function"==typeof i&&(this.callback=i),this.direction="none",this.position=this.getPosition(),this.lastAction=this._getTimestamp(),this._startRun(),this._boundListener=this._didScroll.bind(this),this.element.addEventListener("scroll",this._boundListener)}var e,i,o;return e=t,(i=[{key:"_parseOptions",value:function(t){var e=(new n).scroll;"function"!=typeof t?(e.callback=function(){},e=s()(e,t)):e.callback=t,this.element=e.element,this.sustain=e.sustain,this.callback=e.callback,this.startCallback=e.start,this.stopCallback=e.stop,this.directionChange=e.directionChange}},{key:"_didScroll",value:function(){var t=this.getPosition();if(this.position!==t){var e=this.direction;(e=t.x!==this.position.x?t.x>this.position.x?"right":"left":t.y!==this.position.y?t.y>this.position.y?"bottom":"top":"none")!==this.direction&&(this.direction=e,"function"==typeof this.directionChange&&this.directionChange(this.direction)),this.position=t,this.lastAction=this._getTimestamp()}else this.direction="none";this.running||this._startRun()}},{key:"_startRun",value:function(){this.running=!0,"function"==typeof this.startCallback&&this.startCallback(),this._loop()}},{key:"_stopRun",value:function(){this.running=!1,"function"==typeof this.stopCallback&&this.stopCallback()}},{key:"getPosition",value:function(){return{x:this.element.pageXOffset||this.element.scrollLeft||document.documentElement.scrollLeft||0,y:this.element.pageYOffset||this.element.scrollTop||document.documentElement.scrollTop||0}}},{key:"_getTimestamp",value:function(){return Number(Date.now())}},{key:"_tick",value:function(){this.callback(this.position,this.direction),this._getTimestamp()-this.lastAction>this.sustain&&this._stopRun(),this.running&&this._loop()}},{key:"_loop",value:function(){(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)})(this._tick.bind(this))}},{key:"kill",value:function(){this.running=!1,this.element.removeEventListener("scroll",this._boundListener)}}])&&f(e.prototype,i),o&&f(e,o),t}();function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.d(e,"Trigger",(function(){return p})),i.d(e,"TriggerCollection",(function(){return v})),i.d(e,"ScrollAnimationLoop",(function(){return d})),i.d(e,"default",(function(){return m}));
    /*!
     * ScrollTrigger
     *
     *
     * http://github.com/terwanerik
     *
     * Copyright 2017, Erik Terwan <erik@erikterwan.com>
     * Released under the MIT license.
     *
     * Date: 2017-07-09
     */
    var p=a,v=h,d=g,m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._parseOptions(e),this._initCollection(),this._initLoop()}var e,i,o;return e=t,(i=[{key:"_parseOptions",value:function(t){t=s()(new n,t),this.defaultTrigger=t.trigger,this.scrollOptions=t.scroll}},{key:"_initCollection",value:function(){var t=document.querySelectorAll("[data-scroll]"),e=[];t.length>0&&(e=this.createTriggers(t)),this.collection=new v(e)}},{key:"_initLoop",value:function(){var t=this;this.loop=new d({sustain:this.scrollOptions.sustain,element:this.scrollOptions.element,callback:function(e,i){t._scrollCallback(e,i)},start:function(){t._scrollStart()},stop:function(){t._scrollStop()},directionChange:function(e){t._scrollDirectionChange(e)}})}},{key:"_scrollCallback",value:function(t,e){var i=this;this.collection.call((function(t){t.checkVisibility(i.scrollOptions.element,e)})),this.scrollOptions.callback(t,e)}},{key:"_scrollStart",value:function(){this.scrollOptions.start()}},{key:"_scrollStop",value:function(){this.scrollOptions.stop()}},{key:"_scrollDirectionChange",value:function(t){this.scrollOptions.directionChange(t)}},{key:"createTrigger",value:function(t,e){return new p(t,s()(this.defaultTrigger,e))}},{key:"createTriggers",value:function(t,e){var i=this,n=[];return t.each((function(t){n.push(i.createTrigger(t,e))})),n}},{key:"add",value:function(t,e){return t instanceof HTMLElement?(this.collection.add(this.createTrigger(t,e)),this):t instanceof p?(this.collection.add(t),this):t instanceof NodeList?(this.collection.add(this.createTriggers(t,e)),this):Array.isArray(t)&&t.length&&t[0]instanceof p?(this.collection.add(t),this):Array.isArray(t)&&t.length&&t[0]instanceof HTMLElement?(this.collection.add(this.createTriggers(t,e)),this):(this.collection.add(this.createTriggers(document.querySelectorAll(t),e)),this)}},{key:"remove",value:function(t){return t instanceof p?(this.collection.remove(t),this):Array.isArray(t)&&t.length&&t[0]instanceof p?(this.collection.remove(t),this):t instanceof HTMLElement?(this.collection.remove(this.search(t)),this):Array.isArray(t)&&t.length&&t[0]instanceof HTMLElement?(this.collection.remove(this.search(t)),this):t instanceof NodeList?(this.collection.remove(this.search(t)),this):Array.isArray(t)&&t.length&&t[0]instanceof p?(this.collection.remove(t),this):(this.collection.remove(this.query(t.toString())),this)}},{key:"query",value:function(t){return this.collection.query(t)}},{key:"search",value:function(t){return this.collection.search(t)}},{key:"listen",value:function(){this.loop||this._initLoop()}},{key:"kill",value:function(){this.loop.kill(),this.loop=null}}])&&y(e.prototype,i),o&&y(e,o),t}()}])}));

/* Lightbox */
var Lightbox=function(){"use strict";const e=new class{createElement(e){return document.createElement(e)}appendChild(e,t){e&&e.appendChild(t)}appendHtml(e,t){e&&e.insertAdjacentHTML("beforeend",t)}addEventListener(e,t,o){e&&e.addEventListener(t,o)}addClass(e,t){e&&(this.hasClass(e,t)||(0===e.classList.length?e.className=t:e.className=e.className+" "+t,e.className=e.className.replace(/  +/g," ")))}removeClass(e,t){if(e&&e.classList.length>0){let o,l,i,r,a=t.split(" ");for(o=0,i=a.length;o<i;++o){if(!a[o])continue;let t=a[o],i="",s=e.className.split(" ");for(l=0,r=s.length;l<r;++l)s[l]&&s[l]!==t&&(i+=s[l]+" ");e.className=i.trim()}""===e.className&&e.removeAttribute("class")}}hasClass(e,t){if(!e)return!1;try{let o=e.getAttribute("class");return new RegExp("\\b"+t+"\\b").test(o)}catch(e){}}moveAfter(e,t){t.parentNode.insertBefore(e,t),t.parentNode.insertBefore(t,t.previousElementSibling)}elementChildren(e){const t=e.childNodes;let o=[],l=t.length;for(;l--;)1===t[l].nodeType&&o.unshift(t[l]);return o}parentsHasClass(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;if(this.hasClass(e,t))return!0;e=e.parentNode}}parentsHasId(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;if(e.id===t)return!0;e=e.parentNode}}parentsHasTag(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;if(e.tagName.toLowerCase()===t.toLowerCase())return!0;e=e.parentNode}}parentsHasAttribute(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;try{if(e.hasAttribute(t))return!0}catch(e){}e=e.parentNode}}parentsHasElement(e,t){for(;e;){if(!e.tagName)return!1;if("BODY"===e.tagName||"HTML"===e.tagName)return!1;if(!(e=e.parentNode))return!1;if(!e.tagName)return!1;if(e.tagName.toLowerCase()===t)return!0}}removeClasses(e,t){for(let o=0;o<e.length;o++)e[o].classList.remove(t)}removeAttributes(e,t){for(let o=0;o<e.length;o++)e[o].removeAttribute(t)}removeElements(e){Array.prototype.forEach.call(e,(e=>{e.parentNode.removeChild(e)}))}getStyle(e,t){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):e.style[t.replace(/-([a-z])/g,(function(e){return e[1].toUpperCase()}))]}};class t{constructor(t={}){this.opts=Object.assign(this,{arrow:!0},t),this.arrow=this.opts.arrow;let o=document.querySelector("#_cbhtml");if(o||(o=e.createElement("div"),o.id="_cbhtml",o.className="is-ui",e.appendChild(document.body,o)),this.builderStuff=o,!this.builderStuff.querySelector("#_lightbox")){let e='\n\n                <div class="is-lightbox lightbox-all" tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true">\n                    <button class="cmd-lightbox-close" title="Close" type="button">\n                        <svg><use xlink:href="#_svgLightboxClose"></use></svg>\n                    </button>\n\n                    <div class="lightbox-content" style="width:100%;">\n                    </div>\n\n                    <button class="cmd-lightbox-prev" title="Previous" type="button" style="top:50%;left:3px;">\n                        <svg><use xlink:href="#_svgLightboxLeft"></use></svg>\n                    </button>\n                    <button class="cmd-lightbox-next" title="Next" type="button" style="top:50%;left:auto;right:3px">\n                        <svg><use xlink:href="#_svgLightboxRight"></use></svg>\n                    </button>\n                </div>\n\n                <svg width="0" height="0" style="position:absolute;display:none;">\n                    <defs>\n                        <symbol viewBox="0 0 24 24" id="_svgLightboxClose" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>\n                        </symbol>\n                        <symbol viewBox="0 0 24 24" id="_svgLightboxLeft" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                            <polyline points="15 6 9 12 15 18"></polyline>\n                        </symbol>\n                        <symbol viewBox="0 0 24 24" id="_svgLightboxRight" stroke-width="0.7" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">\n                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n                            <polyline points="9 6 15 12 9 18"></polyline>\n                        </symbol>\n                    </defs>\n                </svg>\n            ';this.builderStuff.insertAdjacentHTML("afterbegin",e)}const l=()=>{let t=document.querySelector(".is-lightbox.lightbox-all.active");e.removeClass(t,"active");t.querySelector(".cmd-lightbox-close").style.opacity=0,document.body.style.overflowY="",setTimeout((()=>{let e=t.querySelector("iframe");e&&e.setAttribute("src","about:blank");const o=t.querySelector(".lightbox-content");t.querySelector("video")&&(o.innerHTML=""),t.style.display="",this.elmFocus&&this.elmFocus.focus()}),300)},i=()=>{const e=this.getList();let t=document.querySelector(".is-lightbox.lightbox-all.active"),o=t.getAttribute("data-url");e.forEach((l=>{if(o===l.url){let o;o=(e.indexOf(l)-1)%e.length,-1===o&&(o=e.length-1),this.openThen(e[o]);t.querySelector(".cmd-lightbox-prev").focus()}}))},r=()=>{const e=this.getList();let t=document.querySelector(".is-lightbox.lightbox-all.active"),o=t.getAttribute("data-url");e.forEach((l=>{if(o===l.url){const o=(e.indexOf(l)+1)%e.length;this.openThen(e[o]);t.querySelector(".cmd-lightbox-next").focus()}}))},a=e=>{27===e.keyCode&&(l(),e.preventDefault()),this.arrow&&(37!==e.which||e.shiftKey||i(),39!==e.which||e.shiftKey||r())};this.builderStuff.querySelectorAll("div.is-lightbox.lightbox-all").forEach((t=>{t.addEventListener("keydown",a),t.addEventListener("click",(t=>{e.parentsHasClass(t.target,"lightbox-content")||(l(),t.preventDefault())}));const o=t.querySelector(".cmd-lightbox-close");o.addEventListener("click",(e=>{l(),e.preventDefault(),e.stopImmediatePropagation()})),o.addEventListener("keydown",(e=>{13!==e.keyCode&&32!==e.keyCode||(l(),e.preventDefault())}));const s=t.querySelector(".cmd-lightbox-prev");s&&s.addEventListener("click",(e=>{i(),e.preventDefault(),e.stopImmediatePropagation()})),s&&s.addEventListener("keydown",(e=>{13!==e.keyCode&&32!==e.keyCode||(i(),e.preventDefault())}));const n=t.querySelector(".cmd-lightbox-next");n&&n.addEventListener("click",(e=>{r(),e.preventDefault(),e.stopImmediatePropagation()})),n&&n.addEventListener("keydown",(e=>{13!==e.keyCode&&32!==e.keyCode||(r(),e.preventDefault())}))}))}init(){let e=document.querySelectorAll(".block-click,.button-click,.is-lightbox");this.parent&&(e=this.parent.querySelectorAll(".block-click,.button-click,.is-lightbox")),e.forEach((e=>{e.addEventListener("click",(t=>{let o,l;if("a"===e.tagName.toLowerCase())o=e.getAttribute("href"),l=o.split(".").pop().split("?")[0].split("#")[0];else if(e.getAttribute("data-modal-url"))o=e.getAttribute("data-modal-url"),l=o.split(".").pop().split("?")[0].split("#")[0];else if(!(e.getAttribute("data-modal-image")||e.getAttribute("data-modal-video")||e.getAttribute("data-modal-externalvideo")))return;let i=e.getAttribute("data-modal-theme");i||(i="light");const r=e.getAttribute("data-modal-color");"jpg"===l||"jpeg"===l||"png"===l||"gif"===l||"webm"===l?this.openImage(o,i,r):"mp4"===l?this.openVideo(o,"dark",r):-1!==o.toLowerCase().indexOf("youtube.com")||-1!==o.toLowerCase().indexOf("youtube-nocookie.com")||-1!==o.toLowerCase().indexOf("vimeo.com")?this.openExternalVideo(o,"dark",r):e.getAttribute("data-modal-image")?(o=e.getAttribute("data-modal-image"),this.openImage(o,i,r)):e.getAttribute("data-modal-video")?(o=e.getAttribute("data-modal-video"),this.openVideo(o,"dark",r)):e.getAttribute("data-modal-externalvideo")?(o=e.getAttribute("data-modal-externalvideo"),this.openExternalVideo(o,"dark",r)):window.location.href=o,t.preventDefault()}))}))}openThen(e){"image"===e.type&&(this.programmatically=!0,this.openImage(e.url,e.theme,e.color)),"video"===e.type&&(this.programmatically=!0,this.openVideo(e.url,e.theme,e.color)),"externalvideo"===e.type&&(this.programmatically=!0,this.openExternalVideo(e.url,e.theme,e.color))}openImage(t,o,l){if(document.activeElement&&(this.elmFocus=document.activeElement,!this.programmatically)){const e=document.activeElement.closest("[data-gallery]");this.parent=e}let i=this.builderStuff.querySelector("div.is-lightbox.lightbox-all");if(window.frameElement&&!i&&(i=parent.document.querySelector(".is-lightbox.lightbox-all")),!this.programmatically){const t=this.getList(),o=i.querySelector(".cmd-lightbox-prev");o.style.opacity=0;const l=i.querySelector(".cmd-lightbox-next");l.style.opacity=0,o.style.display="none",l.style.display="none",t.length>1&&this.arrow&&(o.style.display="flex",l.style.display="flex",setTimeout((()=>{i.querySelector(".cmd-lightbox-prev").style.opacity=1;i.querySelector(".cmd-lightbox-next").style.opacity=1}),500));const r=i.querySelector(".cmd-lightbox-close");r.style.opacity=0,setTimeout((()=>{e.addClass(i,"active"),setTimeout((()=>{r.style.opacity=1}),450)}),10)}i.setAttribute("data-url",t),i.classList.remove("lightbox-video"),i.classList.remove("lightbox-externalvideo"),i.classList.add("lightbox-image"),l&&(i.style.backgroundColor=l);const r=i.querySelector(".lightbox-content");this.programmatically?(r.style.transition="all 200ms ease",r.style.opacity="0",setTimeout((()=>{r.innerHTML=`<img src="${t}">`,r.style.opacity="1"}),200)):r.innerHTML=`<img src="${t}">`,"light"===o?(e.addClass(i,"light"),e.removeClass(i,"dark")):(e.addClass(i,"dark"),e.removeClass(i,"light")),i.style.display="flex",window.frameElement||(document.body.style.overflowY="hidden"),i.focus({preventScroll:!0}),this.programmatically=!1}openVideo(t,o,l){if(document.activeElement&&(this.elmFocus=document.activeElement,!this.programmatically)){const e=document.activeElement.closest("[data-gallery]");this.parent=e}let i=document.querySelector(".is-lightbox.lightbox-all");if(window.frameElement&&!i&&(i=parent.document.querySelector(".is-lightbox.lightbox-all")),!this.programmatically){const t=this.getList(),o=i.querySelector(".cmd-lightbox-prev");o.style.opacity=0;const l=i.querySelector(".cmd-lightbox-next");l.style.opacity=0,o.style.display="none",l.style.display="none",t.length>1&&this.arrow&&(o.style.display="flex",l.style.display="flex",setTimeout((()=>{i.querySelector(".cmd-lightbox-prev").style.opacity=1;i.querySelector(".cmd-lightbox-next").style.opacity=1}),450));const r=i.querySelector(".cmd-lightbox-close");r.style.opacity=0,setTimeout((()=>{e.addClass(i,"active"),setTimeout((()=>{r.style.opacity=1}),450)}),10)}i.setAttribute("data-url",t),i.classList.add("lightbox-video"),i.classList.remove("lightbox-externalvideo"),i.classList.remove("lightbox-image"),l&&(i.style.backgroundColor=l);const r=i.querySelector(".lightbox-content");this.programmatically?(r.style.transition="all 200ms ease",r.style.opacity="0",setTimeout((()=>{r.innerHTML=`<video playsinline controls autoplay width="100%">\n                    <source src="${t}" type="video/mp4">\n                </video>`,r.style.opacity="1"}),200)):r.innerHTML=`<video playsinline controls autoplay width="100%">\n                <source src="${t}" type="video/mp4">\n            </video>`,"light"===o?(e.addClass(i,"light"),e.removeClass(i,"dark")):(e.addClass(i,"dark"),e.removeClass(i,"light")),i.style.display="flex",window.frameElement||(document.body.style.overflowY="hidden"),i.focus({preventScroll:!0}),this.programmatically=!1}openExternalVideo(t,o,l){if(document.activeElement&&(this.elmFocus=document.activeElement,!this.programmatically)){const e=document.activeElement.closest("[data-gallery]");this.parent=e}let i=document.querySelector(".is-lightbox.lightbox-all");if(window.frameElement&&!i&&(i=parent.document.querySelector(".is-lightbox.lightbox-all")),!this.programmatically){const t=this.getList(),o=i.querySelector(".cmd-lightbox-prev");o.style.opacity=0;const l=i.querySelector(".cmd-lightbox-next");l.style.opacity=0,o.style.display="none",l.style.display="none",t.length>1&&this.arrow&&(o.style.display="flex",l.style.display="flex",setTimeout((()=>{i.querySelector(".cmd-lightbox-prev").style.opacity=1;i.querySelector(".cmd-lightbox-next").style.opacity=1}),500));const r=i.querySelector(".cmd-lightbox-close");r.style.opacity=0,setTimeout((()=>{e.addClass(i,"active"),setTimeout((()=>{r.style.opacity=1}),450)}),10)}i.setAttribute("data-url",t),i.classList.remove("lightbox-video"),i.classList.add("lightbox-externalvideo"),i.classList.remove("lightbox-image"),l&&(i.style.backgroundColor=l),"light"===o?(e.addClass(i,"light"),e.removeClass(i,"dark")):(e.addClass(i,"dark"),e.removeClass(i,"light"));const r=i.querySelector(".lightbox-content");if(this.programmatically)r.style.transition="all 200ms ease",r.style.opacity="0",setTimeout((()=>{r.innerHTML='<div class="embed-responsive embed-responsive-16by9" style="width:100%;">\n                    <iframe width="560" height="315" src="about:blank" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n                </div>',r.style.opacity="1";const e=i.querySelector("iframe");""!==(t=this.getIframeVideoUrl(t))&&e.setAttribute("src",t)}),200);else{r.innerHTML='<div class="embed-responsive embed-responsive-16by9" style="width:100%;">\n                <iframe width="560" height="315" src="about:blank" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n            </div>';const e=i.querySelector("iframe");""!==(t=this.getIframeVideoUrl(t))&&e.setAttribute("src",t)}i.style.display="flex",window.frameElement||(document.body.style.overflowY="hidden"),i.focus({preventScroll:!0}),this.programmatically=!1}getIframeVideoUrl(e){let t=e.match(/^.*(?:https?:)?(?:\/\/)?(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/\S*?[^\w\s-])((?!videoseries)[\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/),o=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/)|(video\/))?([0-9]+)\/?/.exec(e);if(null===t&&null===o||-1!==e.indexOf("player.vimeo.com")||-1!==e.indexOf("youtube.com/embed/")||-1!==e.indexOf("youtube-nocookie.com/embed/"))-1!==e.indexOf("youtube-nocookie.com/embed/")&&-1===e.indexOf("?")&&(e+="?rel=0&autoplay=1&color=white");else{if(null!==t){e="https://www.youtube-nocookie.com/embed/"+t[1]+"?rel=0&autoplay=1&color=white"}if(null!==o&&o.length>=7){e="https://player.vimeo.com/video/"+o[6]}}return e}getList(){const e=[];let t=document.querySelectorAll(".block-click,.button-click,.is-lightbox");return this.parent&&(t=this.parent.querySelectorAll(".block-click,.button-click,.is-lightbox")),t.forEach((t=>{if(!this.parent&&t.closest("[data-gallery"))return;let o,l;"a"===t.tagName.toLowerCase()?(o=t.getAttribute("href"),l=o.split(".").pop().split("?")[0].split("#")[0]):t.getAttribute("data-modal-url")&&(o=t.getAttribute("data-modal-url"),l=o.split(".").pop().split("?")[0].split("#")[0]);let i=t.getAttribute("data-modal-theme");i||(i="light");const r=t.getAttribute("data-modal-color");o&&("jpg"===l||"jpeg"===l||"png"===l||"gif"===l||"webm"===l?e.push({type:"image",url:o,theme:i,color:r}):"mp4"===l?e.push({type:"video",url:o,theme:"dark",color:r}):-1===o.toLowerCase().indexOf("youtube.com")&&-1===o.toLowerCase().indexOf("youtube-nocookie.com")&&-1===o.toLowerCase().indexOf("vimeo.com")||e.push({type:"externalvideo",url:o,theme:"dark",color:r})),t.getAttribute("data-modal-image")?(o=t.getAttribute("data-modal-image"),e.push({type:"image",url:o,theme:i,color:r})):t.getAttribute("data-modal-video")?(o=t.getAttribute("data-modal-video"),e.push({type:"video",url:o,theme:"dark",color:r})):t.getAttribute("data-modal-externalvideo")&&(o=t.getAttribute("data-modal-externalvideo"),e.push({type:"externalvideo",url:o,theme:"dark",color:r}))})),e}}return window.lightbox=new t,t}();

documentReady(function(){
    let wrapper = document.querySelector('.is-wrapper');
    if(wrapper) if(!hasClass(wrapper,'is-edit')) { // run this only if not in edit mode
        window.lightbox.init();
    }

    inViewSetup();
});