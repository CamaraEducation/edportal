/*
    Insert HTML Symbols Plugin
*/

(function () {
    if(typeof _cb === 'undefined') return;

    var html = '<div class="is-modal is-side' + (_cb.settings.sidePanel == 'right' ? '' : ' fromleft') + ' viewsymbols" style="width:280px;z-index:10004;" tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true">' +
                    '<button tabindex="-1" title="' + _cb.out('Close') + '" class="is-side-close" style="z-index:1;width:25px;height:25px;position:absolute;top:10px;right:13px;box-sizing:border-box;padding:0;line-height:25px;font-size: 12px;text-align:center;cursor:pointer;background:transparent"><svg class="is-icon-flex" style="width:25px;height:25px;"><use xlink:href="#ion-ios-close-empty"></use></svg></button>' +
                    
                    '' +
                    '<iframe tabindex="0" src="about:blank" style="display:none;width:100%;height:100%;position:absolute;top:0;left:0;border: none;"></iframe>' +
                    '' +
                '</div>'; // iframe tabindex not working, so set display=none.

    _cb.addHtml(html);

    var css = '<style>' +
            '.viewsymbols.active iframe {display: block !important}' +
        '</style>';

    _cb.addCss(css);

    var button = '<button class="insertsymbol-button" title="' + _cb.out('Symbol') + '" style="font-size:14px;vertical-align:bottom;">' +
                    '&#8486;' +
                '</button>';

    _cb.addButton('symbols', button, '.insertsymbol-button', function () {

        var modal = document.querySelector('.is-side.viewsymbols');
        _cb.showSidePanel(modal);
        var btnClose = modal.querySelector('.is-side-close');
        btnClose.addEventListener('click', function(e){
            _cb.hideSidePanel(modal);
        });

        // var scriptPath = _cb.getScriptPath();
        // modal.querySelector('iframe').src = scriptPath + 'plugins/symbols/symbols.html';

        var html = getSymbolHTML();
        html = html.replace(/<script>/g, `${_cb.nonce?`<script nonce="${_cb.nonce}">`:'<script>'}`);

        iframe = modal.querySelector('iframe');
        doc = iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();

    });

    function getSymbolHTML() {

        _cb.styleDark = false;
        if(document.body.getAttribute('class')) {
            if(document.body.getAttribute('class').indexOf('dark')!==-1) {
                _cb.styleDark = true;
            }
            if(document.body.getAttribute('class').indexOf('colored')!==-1) {
                _cb.styleColored = true;
            }
        }

        const html = `
        <!DOCTYPE HTML>
        <html>
        <head>
            <meta charset="utf-8">
            <title></title>
            <style>
                body {margin:0;overflow-x:hidden;overflow-y:auto;}
                .container {}
                .container > button {
                    background: transparent;
                    text-align:center;font-size:16px;cursor:pointer;margin: 0;display:inline-block;float:left;width:25%;height:50px;line-height:50px;
                    border:${_cb.styleSeparatorColor} 1px solid;
                    color: ${_cb.styleButtonClassicColor};
                    box-sizing:border-box;
                    outline:none;
                }
                .container > button:hover,
                .container > button:focus {
                    background: ${_cb.styleButtonClassicBackground};
                }
                .clearfix:before, .clearfix:after {content: " ";display: table;}
                .clearfix:after {clear: both;}
                .clearfix {*zoom: 1;}
        
                .is-tabs  {
                    white-space:nowrap;
                    padding:20px 15px;padding-bottom:5px;padding-top: 10px;
                    box-sizing:border-box;
                    font-family: sans-serif;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 2px;  
                    // background: #f9f9f9;
                    background: ${_cb.styleTabsBackground};
                }
                .is-tabs a {
                    display: inline-block;
                    float:left;
                    padding: 3px 0px 1px 1px;
                    // color: #4a4a4a;
                    color: ${_cb.styleTabItemColor};
                    border-bottom: transparent 1px solid;
                    
                    margin: 0 16px 10px 0;
                    text-decoration: none;
                    transition: box-shadow ease 0.3s;
                }
                .is-tabs a svg {
                    fill: ${_cb.styleTabItemColor};
                    pointer-events: none;
                }
                .is-tabs a.active {
                    background: transparent;
                    box-shadow: none;
                    cursor:default;
                    // border-bottom: rgba(103, 103, 103, 0.72) 1px solid;
                    border-bottom: ${_cb.styleTabItemBorderBottomActive};
                }
                .is-tabs a:focus {
                    outline: none;
                    background: rgba(0,0,0,0.05);
                }
                
                .is-tab-content {
                    position:fixed;width:100%;height:calc((100% - 84px));top:84px;left:0;overflow-x:hidden;overflow-y:auto;
                    display: none;
                    flex-flow: wrap;
                    align-content: start;
                }
                .is-tab-content > button {min-width:65px}
                
                .is-tabs-more {
                    font-family: sans-serif;
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 2px; 

                    box-sizing: border-box;
                    width: 180px;
                    position: absolute;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    top: 0;
                    left: 0;
                    background: ${_cb.styleTabsMoreBackground};
                    display: none;
                    z-index: 1;
                    border: ${_cb.styleTabsMoreBorder};
                    outline: none;
                    }
                .is-tabs-more > li {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-family: sans-serif;
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1px;  
                    color: ${_cb.styleTabsMoreItemColor};
                    padding: 10px;
                    text-decoration: none;
                    text-align: center;
                    cursor: pointer;
                    outline: none;
                }
                .is-tabs-more li.active {
                    background: transparent;
                    box-shadow: none;
                    cursor: default;
                }
                .is-tabs-more > li:hover, 
                .is-tabs-more > li.active,
                .is-tabs-more > li:focus {
                    // background: #f3f3f3;
                    background: ${_cb.styleTabsMoreBackgroundHover}; 
                }

                /* Scrollbar for panel */

                .dark * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(255, 255, 255, 0.3) auto;
                }
                .dark *::-webkit-scrollbar {
                    width: 12px;
                }
                .dark *::-webkit-scrollbar-track {
                    background: transparent;
                }
                .dark *::-webkit-scrollbar-thumb {
                    background-color:rgba(255, 255, 255, 0.3);
                } 
        
                .colored-dark * {
                    scrollbar-width: thin;
                    scrollbar-color: rgb(100, 100, 100) auto;
                }
                .colored-dark *::-webkit-scrollbar {
                    width: 12px;
                }
                .colored-dark *::-webkit-scrollbar-track {
                    background: transparent;
                }
                .colored-dark *::-webkit-scrollbar-thumb {
                    background-color:rgb(100, 100, 100);
                } 
        
                .colored * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(0, 0, 0, 0.4) auto;
                }
                .colored *::-webkit-scrollbar {
                    width: 12px;
                }
                .colored *::-webkit-scrollbar-track {
                    background: transparent;
                }
                .colored *::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 0, 0, 0.4);
                } 
        
                .light * {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(0, 0, 0, 0.4) auto;
                }
                .light *::-webkit-scrollbar {
                    width: 12px;
                }
                .light *::-webkit-scrollbar-track {
                    background: transparent;
                }
                .light *::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 0, 0, 0.4);
                } 
            </style>
        </head>
        <body${_cb.styleDark?' class="dark"':''}${_cb.styleColored?' class="colored"':''}${_cb.styleColoredDark?' class="colored-dark"':''}${_cb.styleLight?' class="light"':''}>
        
        
        <svg width="0" height="0" style="position:absolute;display:none;">
            <defs>
                <symbol viewBox="0 0 512 512" id="ion-more"><path d="M113.7 304C86.2 304 64 282.6 64 256c0-26.5 22.2-48 49.7-48 27.6 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48zM256 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.3-48 49.8-48 27.5 0 49.7 21.5 49.7 48 0 26.6-22.2 48-49.7 48zM398.2 304c-27.5 0-49.8-21.4-49.8-48 0-26.5 22.2-48 49.8-48 27.5 0 49.8 21.5 49.8 48 0 26.6-22.2 48-49.8 48z"></path></symbol>
            </defs>
        </svg>
                                '
        <div class="is-tabs" data-group="symbol" style="position:fixed;top:0;left:0;right:0;height:84px;padding-top:48px;box-sizing:border-box;">
            <a href="" data-content="divArrow" class="active">Arrow</a>
            <a href="" data-content="divEmojiSmileys">Smileys</a>
            <a href="" data-content="divMiscSymbols">Misc</a>
            <a title="More" id="divMore" data-menu="divTabsMore" href=""><svg class="is-icon-flex" style="width:15px;height:15px;"><use xlink:href="#ion-more"></use></svg></a>
        </div>
        
        <ul id="divTabsMore" class="is-tabs-more" style="top:80px;left:90px;" data-group="symbol" tabindex="-1" role="dialog" aria-modal="true" aria-hidden="true">
            <li role="button" tabindex="0" href="" data-content="divBlockElements">Block</li>
            <li role="button" tabindex="0" href="" data-content="divBoxDrawings">Box</li>
            <li role="button" tabindex="0" href="" data-content="divCurrencySymbols">Currency</li>
            <li role="button" tabindex="0" href="" data-content="divDingbats">Dingbats</li>
            <!--
            <li role="button" tabindex="0" href="" data-content="divEmoji">Emoji</li>
            <li role="button" tabindex="0" href="" data-content="divEmojiSkinTones">Emoji Skin Tones</li>
            -->
            <li role="button" tabindex="0" href="" data-content="divGeometricShapes">Geometric</li>
            <li role="button" tabindex="0" href="" data-content="divLetterlikeSymbols">Letterlike</li>
            <li role="button" tabindex="0" href="" data-content="divMathOperators">Math</li>
            <li role="button" tabindex="0" href="" data-content="divGeneralPunctuation">Punctuation</li>
            <li role="button" tabindex="0" href="" data-content="divLatinBasic">Latin Basic</li>
            <li role="button" tabindex="0" href="" data-content="divLatinSupplement">Latin Supplement</li>
            <li role="button" tabindex="0" href="" data-content="divLatinExtendedA">Latin Extended A</li>
            <li role="button" tabindex="0" href="" data-content="divLatinExtendedB">Latin Extended B</li>
            <li role="button" tabindex="0" href="" data-content="divModifierLetters">Modifier Letters</li>
            <li role="button" tabindex="0" href="" data-content="divDiacriticalMarks">Diacritical Marks</li>
            <li role="button" tabindex="0" href="" data-content="divGreekAndCoptic">Greek & Coptic</li>
            <li role="button" tabindex="0" href="" data-content="divCyrillicBasic">Cyrillic Basic</li>
            <li role="button" tabindex="0" href="" data-content="divCyrillicSupplement">Cyrillic Supplement</li>
        </ul>
        
        <div id="divArrow" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix active" style="display:flex">
            
            <!-- Arrows: https://www.w3schools.com/charsets/ref_utf_arrows.asp -->
            <button title="LEFTWARDS ARROW">&larr;</button>
            <button title="UPWARDS ARROW">&uarr;</button>
            <button title="RIGHTWARDS ARROW">&rarr;</button>
            <button title="DOWNWARDS ARROW">&darr;</button>
            <button title="LEFT RIGHT ARROW">&harr;</button>
            <button title="UP DOWN ARROW">&#8597;</button>
            <button title="NORTH WEST ARROW">&#8598;</button>
            <button title="NORTH EAST ARROW">&#8599;</button>
            <button title="SOUTH EAST ARROW">&#8600;</button>
            <button title="SOUTH WEST ARROW">&#8601;</button>
            <button title="LEFTWARDS ARROW WITH STROKE">&#8602;</button>
            <button title="RIGHTWARDS ARROW WITH STROKE">&#8603;</button>
            <button title="LEFTWARDS WAVE ARROW">&#8604;</button>
            <button title="RIGHTWARDS WAVE ARROW">&#8605;</button>
            <button title="LEFTWARDS TWO HEADED ARROW">&#8606;</button>
            <button title="UPWARDS TWO HEADED ARROW">&#8607;</button>
            <button title="RIGHTWARDS TWO HEADED ARROW">&#8608;</button>
            <button title="DOWNWARDS TWO HEADED ARROW">&#8609;</button>
            <button title="LEFTWARDS ARROW WITH TAIL">&#8610;</button>
            <button title="RIGHTWARDS ARROW WITH TAIL">&#8611;</button>
            <button title="LEFTWARDS ARROW FROM BAR">&#8612;</button>
            <button title="UPWARDS ARROW FROM BAR">&#8613;</button>
            <button title="RIGHTWARDS ARROW FROM BAR">&#8614;</button>
            <button title="DOWNWARDS ARROW FROM BAR">&#8615;</button>
            <button title="UP DOWN ARROW WITH BASE">&#8616;</button>
            <button title="LEFTWARDS ARROW WITH HOOK">&#8617;</button>
            <button title="RIGHTWARDS ARROW WITH HOOK">&#8618;</button>
            <button title="LEFTWARDS ARROW WITH LOOP">&#8619;</button>
            <button title="RIGHTWARDS ARROW WITH LOOP">&#8620;</button>
            <button title="LEFT RIGHT WAVE ARROW">&#8621;</button>
            <button title="LEFT RIGHT ARROW WITH STROKE">&#8622;</button>
            <button title="DOWNWARDS ZIGZAG ARROW">&#8623;</button>
            <button title="UPWARDS ARROW WITH TIP LEFTWARDS">&#8624;</button>
            <button title="UPWARDS ARROW WITH TIP RIGHTWARDS">&#8625;</button>
            <button title="DOWNWARDS ARROW WITH TIP LEFTWARDS">&#8626;</button>
            <button title="DOWNWARDS ARROW WITH TIP RIGHTWARDS">&#8627;</button>
            <button title="RIGHTWARDS ARROW WITH CORNER DOWNWARDS">&#8628;</button>
            <button title="DOWNWARDS ARROW WITH CORNER LEFTWARDS">&crarr;</button>
            <button title="ANTICLOCKWISE TOP SEMICIRCLE ARROW">&#8630;</button>
            <button title="CLOCKWISE TOP SEMICIRCLE ARROW">&#8631;</button>
            <button title="NORTH WEST ARROW TO LONG BAR">&#8632;</button>
            <button title="LEFTWARDS ARROW TO BAR OVER RIGHTWARDS ARROW TO BAR">&#8633;</button>
            <button title="ANTICLOCKWISE OPEN CIRCLE ARROW">&#8634;</button>
            <button title="CLOCKWISE OPEN CIRCLE ARROW">&#8635;</button>
            <button title="LEFTWARDS HARPOON WITH BARB UPWARDS">&#8636;</button>
            <button title="LEFTWARDS HARPOON WITH BARB DOWNWARDS">&#8637;</button>
            <button title="UPWARDS HARPOON WITH BARB RIGHTWARDS">&#8638;</button>
            <button title="UPWARDS HARPOON WITH BARB LEFTWARDS">&#8639;</button>
            <button title="RIGHTWARDS HARPOON WITH BARB UPWARDS">&#8640;</button>
            <button title="RIGHTWARDS HARPOON WITH BARB DOWNWARDS">&#8641;</button>
            <button title="DOWNWARDS HARPOON WITH BARB RIGHTWARDS">&#8642;</button>
            <button title="DOWNWARDS HARPOON WITH BARB LEFTWARDS">&#8643;</button>
            <button title="RIGHTWARDS ARROW OVER LEFTWARDS ARROW">&#8644;</button>
            <button title="UPWARDS ARROW LEFTWARDS OF DOWNWARDS ARROW">&#8645;</button>
            <button title="LEFTWARDS ARROW OVER RIGHTWARDS ARROW">&#8646;</button>
            <button title="LEFTWARDS PAIRED ARROWS">&#8647;</button>
            <button title="UPWARDS PAIRED ARROWS">&#8648;</button>
            <button title="RIGHTWARDS PAIRED ARROWS">&#8649;</button>
            <button title="DOWNWARDS PAIRED ARROWS">&#8650;</button>
            <button title="LEFTWARDS HARPOON OVER RIGHTWARDS HARPOON">&#8651;</button>
            <button title="RIGHTWARDS HARPOON OVER LEFTWARDS HARPOON">&#8652;</button>
            <button title="LEFTWARDS DOUBLE ARROW WITH STROKE">&#8653;</button>
            <button title="LEFT RIGHT DOUBLE ARROW WITH STROKE">&#8654;</button>
            <button title="RIGHTWARDS DOUBLE ARROW WITH STROKE">&#8655;</button>
            <button title="LEFTWARDS DOUBLE ARROW">&lArr;</button>
            <button title="UPWARDS DOUBLE ARROW">&uArr;</button>
            <button title="RIGHTWARDS DOUBLE ARROW">&rArr;</button>
            <button title="DOWNWARDS DOUBLE ARROW">&dArr;</button>
            <button title="LEFT RIGHT DOUBLE ARROW">&hArr;</button>
            <button title="UP DOWN DOUBLE ARROW">&#8661;</button>
            <button title="NORTH WEST DOUBLE ARROW">&#8662;</button>
            <button title="NORTH EAST DOUBLE ARROW">&#8663;</button>
            <button title="SOUTH EAST DOUBLE ARROW">&#8664;</button>
            <button title="SOUTH WEST DOUBLE ARROW">&#8665;</button>
            <button title="LEFTWARDS TRIPLE ARROW">&#8666;</button>
            <button title="RIGHTWARDS TRIPLE ARROW">&#8667;</button>
            <button title="LEFTWARDS SQUIGGLE ARROW">&#8668;</button>
            <button title="RIGHTWARDS SQUIGGLE ARROW">&#8669;</button>
            <button title="UPWARDS ARROW WITH DOUBLE STROKE">&#8670;</button>
            <button title="DOWNWARDS ARROW WITH DOUBLE STROKE">&#8671;</button>
            <button title="LEFTWARDS DASHED ARROW">&#8672;</button>
            <button title="UPWARDS DASHED ARROW">&#8673;</button>
            <button title="RIGHTWARDS DASHED ARROW">&#8674;</button>
            <button title="DOWNWARDS DASHED ARROW">&#8675;</button>
            <button title="LEFTWARDS ARROW TO BAR">&#8676;</button>
            <button title="RIGHTWARDS ARROW TO BAR">&#8677;</button>
            <button title="LEFTWARDS WHITE ARROW">&#8678;</button>
            <button title="UPWARDS WHITE ARROW">&#8679;</button>
            <button title="RIGHTWARDS WHITE ARROW">&#8680;</button>
            <button title="DOWNWARDS WHITE ARROW">&#8681;</button>
            <button title="UPWARDS WHITE ARROW FROM BAR">&#8682;</button>
            <button title="UPWARDS WHITE ARROW ON PEDESTAL">&#8683;</button>
            <button title="UPWARDS WHITE ARROW ON PEDESTAL WITH HORIZONTAL BAR">&#8684;</button>
            <button title="UPWARDS WHITE ARROW ON PEDESTAL WITH VERTICAL BAR">&#8685;</button>
            <button title="UPWARDS WHITE DOUBLE ARROW">&#8686;</button>
            <button title="UPWARDS WHITE DOUBLE ARROW ON PEDESTAL">&#8687;</button>
            <button title="RIGHTWARDS WHITE ARROW FROM WALL">&#8688;</button>
            <button title="NORTH WEST ARROW TO CORNER">&#8689;</button>
            <button title="SOUTH EAST ARROW TO CORNER">&#8690;</button>
            <button title="UP DOWN WHITE ARROW">&#8691;</button>
            <button title="RIGHT ARROW WITH SMALL CIRCLE">&#8692;</button>
            <button title="DOWNWARDS ARROW LEFTWARDS OF UPWARDS ARROW">&#8693;</button>
            <button title="THREE RIGHTWARDS ARROWS">&#8694;</button>
            <button title="LEFTWARDS ARROW WITH VERTICAL STROKE">&#8695;</button>
            <button title="RIGHTWARDS ARROW WITH VERTICAL STROKE">&#8696;</button>
            <button title="LEFT RIGHT ARROW WITH VERTICAL STROKE">&#8697;</button>
            <button title="LEFTWARDS ARROW WITH DOUBLE VERTICAL STROKE">&#8698;</button>
            <button title="RIGHTWARDS ARROW WITH DOUBLE VERTICAL STROKE">&#8699;</button>
            <button title="LEFT RIGHT ARROW WITH DOUBLE VERTICAL STROKE">&#8700;</button>
            <button title="LEFTWARDS OPEN-HEADED ARROW">&#8701;</button>
            <button title="RIGHTWARDS OPEN-HEADED ARROW">&#8702;</button>
            <button title="LEFT RIGHT OPEN-HEADED ARROW">&#8703;</button>
        
        </div>
        
        <div id="divBlockElements" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Block Elements https://www.w3schools.com/charsets/ref_utf_block.asp -->
            <button title="UPPER HALF BLOCK">&#9600;</button>
            <button title="LOWER ONE EIGHTH BLOCK">&#9601;</button>
            <button title="LOWER ONE QUARTER BLOCK">&#9602;</button>
            <button title="LOWER THREE EIGHTHS BLOCK">&#9603;</button>
            <button title="LOWER HALF BLOCK">&#9604;</button>
            <button title="LOWER FIVE EIGHTHS BLOCK">&#9605;</button>
            <button title="LOWER THREE QUARTERS BLOCK">&#9606;</button>
            <button title="LOWER SEVEN EIGHTHS BLOCK">&#9607;</button>
            <button title="FULL BLOCK">&#9608;</button>
            <button title="LEFT SEVEN EIGHTHS BLOCK">&#9609;</button>
            <button title="LEFT THREE QUARTERS BLOCK">&#9610;</button>
            <button title="LEFT FIVE EIGHTHS BLOCK">&#9611;</button>
            <button title="LEFT HALF BLOCK">&#9612;</button>
            <button title="LEFT THREE EIGHTHS BLOCK">&#9613;</button>
            <button title="LEFT ONE QUARTER BLOCK">&#9614;</button>
            <button title="LEFT ONE EIGHTH BLOCK">&#9615;</button>
            <button title="RIGHT HALF BLOCK">&#9616;</button>
            <button title="LIGHT SHADE">&#9617;</button>
            <button title="MEDIUM SHADE">&#9618;</button>
            <button title="DARK SHADE">&#9619;</button>
            <button title="UPPER ONE EIGHTH BLOCK">&#9620;</button>
            <button title="RIGHT ONE EIGHTH BLOCK">&#9621;</button>
            <button title="QUADRANT LOWER LEFT">&#9622;</button>
            <button title="QUADRANT LOWER RIGHT">&#9623;</button>
            <button title="QUADRANT UPPER LEFT">&#9624;</button>
            <button title="QUADRANT UPPER LEFT AND LOWER LEFT AND LOWER RIGHT">&#9625;</button>
            <button title="QUADRANT UPPER LEFT AND LOWER RIGHT">&#9626;</button>
            <button title="QUADRANT UPPER LEFT AND UPPER RIGHT AND LOWER LEFT">&#9627;</button>
            <button title="QUADRANT UPPER LEFT AND UPPER RIGHT AND LOWER RIGHT">&#9628;</button>
            <button title="QUADRANT UPPER RIGHT">&#9629;</button>
            <button title="QUADRANT UPPER RIGHT AND LOWER LEFT">&#9630;</button>
            <button title="QUADRANT UPPER RIGHT AND LOWER LEFT AND LOWER RIGHT">&#9631;</button>
            
        
        </div>
        
        <div id="divBoxDrawings" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
            
            <!-- Box Drawings https://www.w3schools.com/charsets/ref_utf_box.asp -->
            <button title="BOX DRAWINGS LIGHT HORIZONTAL">&#9472;</button>
            <button title="BOX DRAWINGS HEAVY HORIZONTAL">&#9473;</button>
            <button title="BOX DRAWINGS LIGHT VERTICAL">&#9474;</button>
            <button title="BOX DRAWINGS HEAVY VERTICAL">&#9475;</button>
            <button title="BOX DRAWINGS LIGHT TRIPLE DASH HORIZONTAL">&#9476;</button>
            <button title="BOX DRAWINGS HEAVY TRIPLE DASH HORIZONTAL">&#9477;</button>
            <button title="BOX DRAWINGS LIGHT TRIPLE DASH VERTICAL">&#9478;</button>
            <button title="BOX DRAWINGS HEAVY TRIPLE DASH VERTICAL">&#9479;</button>
            <button title="BOX DRAWINGS LIGHT QUADRUPLE DASH HORIZONTAL">&#9480;</button>
            <button title="BOX DRAWINGS HEAVY QUADRUPLE DASH HORIZONTAL">&#9481;</button>
            <button title="BOX DRAWINGS LIGHT QUADRUPLE DASH VERTICAL">&#9482;</button>
            <button title="BOX DRAWINGS HEAVY QUADRUPLE DASH VERTICAL">&#9483;</button>
            <button title="BOX DRAWINGS LIGHT DOWN AND RIGHT">&#9484;</button>
            <button title="BOX DRAWINGS DOWN LIGHT AND RIGHT HEAVY">&#9485;</button>
            <button title="BOX DRAWINGS DOWN HEAVY AND RIGHT LIGHT">&#9486;</button>
            <button title="BOX DRAWINGS HEAVY DOWN AND RIGHT">&#9487;</button>
            <button title="BOX DRAWINGS LIGHT DOWN AND LEFT">&#9488;</button>
            <button title="BOX DRAWINGS DOWN LIGHT AND LEFT HEAVY">&#9489;</button>
            <button title="BOX DRAWINGS DOWN HEAVY AND LEFT LIGHT">&#9490;</button>
            <button title="BOX DRAWINGS HEAVY DOWN AND LEFT">&#9491;</button>
            <button title="BOX DRAWINGS LIGHT UP AND RIGHT">&#9492;</button>
            <button title="BOX DRAWINGS UP LIGHT AND RIGHT HEAVY">&#9493;</button>
            <button title="BOX DRAWINGS UP HEAVY AND RIGHT LIGHT">&#9494;</button>
            <button title="BOX DRAWINGS HEAVY UP AND RIGHT">&#9495;</button>
            <button title="BOX DRAWINGS LIGHT UP AND LEFT">&#9496;</button>
            <button title="BOX DRAWINGS UP LIGHT AND LEFT HEAVY">&#9497;</button>
            <button title="BOX DRAWINGS UP HEAVY AND LEFT LIGHT">&#9498;</button>
            <button title="BOX DRAWINGS HEAVY UP AND LEFT">&#9499;</button>
            <button title="BOX DRAWINGS LIGHT VERTICAL AND RIGHT">&#9500;</button>
            <button title="BOX DRAWINGS VERTICAL LIGHT AND RIGHT HEAVY">&#9501;</button>
            <button title="BOX DRAWINGS UP HEAVY AND RIGHT DOWN LIGHT">&#9502;</button>
            <button title="BOX DRAWINGS DOWN HEAVY AND RIGHT UP LIGHT">&#9503;</button>
            <button title="BOX DRAWINGS VERTICAL HEAVY AND RIGHT LIGHT">&#9504;</button>
            <button title="BOX DRAWINGS DOWN LIGHT AND RIGHT UP HEAVY">&#9505;</button>
            <button title="BOX DRAWINGS UP LIGHT AND RIGHT DOWN HEAVY">&#9506;</button>
            <button title="BOX DRAWINGS HEAVY VERTICAL AND RIGHT">&#9507;</button>
            <button title="BOX DRAWINGS LIGHT VERTICAL AND LEFT">&#9508;</button>
            <button title="BOX DRAWINGS VERTICAL LIGHT AND LEFT HEAVY">&#9509;</button>
            <button title="BOX DRAWINGS UP HEAVY AND LEFT DOWN LIGHT">&#9510;</button>
            <button title="BOX DRAWINGS DOWN HEAVY AND LEFT UP LIGHT">&#9511;</button>
            <button title="BOX DRAWINGS VERTICAL HEAVY AND LEFT LIGHT">&#9512;</button>
            <button title="BOX DRAWINGS DOWN LIGHT AND LEFT UP HEAVY">&#9513;</button>
            <button title="BOX DRAWINGS UP LIGHT AND LEFT DOWN HEAVY">&#9514;</button>
            <button title="BOX DRAWINGS HEAVY VERTICAL AND LEFT">&#9515;</button>
            <button title="BOX DRAWINGS LIGHT DOWN AND HORIZONTAL">&#9516;</button>
            <button title="BOX DRAWINGS LEFT HEAVY AND RIGHT DOWN LIGHT">&#9517;</button>
            <button title="BOX DRAWINGS RIGHT HEAVY AND LEFT DOWN LIGHT">&#9518;</button>
            <button title="BOX DRAWINGS DOWN LIGHT AND HORIZONTAL HEAVY">&#9519;</button>
            <button title="BOX DRAWINGS DOWN HEAVY AND HORIZONTAL LIGHT">&#9520;</button>
            <button title="BOX DRAWINGS RIGHT LIGHT AND LEFT DOWN HEAVY">&#9521;</button>
            <button title="BOX DRAWINGS LEFT LIGHT AND RIGHT DOWN HEAVY">&#9522;</button>
            <button title="BOX DRAWINGS HEAVY DOWN AND HORIZONTAL">&#9523;</button>
            <button title="BOX DRAWINGS LIGHT UP AND HORIZONTAL">&#9524;</button>
            <button title="BOX DRAWINGS LEFT HEAVY AND RIGHT UP LIGHT">&#9525;</button>
            <button title="BOX DRAWINGS RIGHT HEAVY AND LEFT UP LIGHT">&#9526;</button>
            <button title="BOX DRAWINGS UP LIGHT AND HORIZONTAL HEAVY">&#9527;</button>
            <button title="BOX DRAWINGS UP HEAVY AND HORIZONTAL LIGHT">&#9528;</button>
            <button title="BOX DRAWINGS RIGHT LIGHT AND LEFT UP HEAVY">&#9529;</button>
            <button title="BOX DRAWINGS LEFT LIGHT AND RIGHT UP HEAVY">&#9530;</button>
            <button title="BOX DRAWINGS HEAVY UP AND HORIZONTAL">&#9531;</button>
            <button title="BOX DRAWINGS LIGHT VERTICAL AND HORIZONTAL">&#9532;</button>
            <button title="BOX DRAWINGS LEFT HEAVY AND RIGHT VERTICAL LIGHT">&#9533;</button>
            <button title="BOX DRAWINGS RIGHT HEAVY AND LEFT VERTICAL LIGHT">&#9534;</button>
            <button title="BOX DRAWINGS VERTICAL LIGHT AND HORIZONTAL HEAVY">&#9535;</button>
            <button title="BOX DRAWINGS UP HEAVY AND DOWN HORIZONTAL LIGHT">&#9536;</button>
            <button title="BOX DRAWINGS DOWN HEAVY AND UP HORIZONTAL LIGHT">&#9537;</button>
            <button title="BOX DRAWINGS VERTICAL HEAVY AND HORIZONTAL LIGHT">&#9538;</button>
            <button title="BOX DRAWINGS LEFT UP HEAVY AND RIGHT DOWN LIGHT">&#9539;</button>
            <button title="BOX DRAWINGS RIGHT UP HEAVY AND LEFT DOWN LIGHT">&#9540;</button>
            <button title="BOX DRAWINGS LEFT DOWN HEAVY AND RIGHT UP LIGHT">&#9541;</button>
            <button title="BOX DRAWINGS RIGHT DOWN HEAVY AND LEFT UP LIGHT">&#9542;</button>
            <button title="BOX DRAWINGS DOWN LIGHT AND UP HORIZONTAL HEAVY">&#9543;</button>
            <button title="BOX DRAWINGS UP LIGHT AND DOWN HORIZONTAL HEAVY">&#9544;</button>
            <button title="BOX DRAWINGS RIGHT LIGHT AND LEFT VERTICAL HEAVY">&#9545;</button>
            <button title="BOX DRAWINGS LEFT LIGHT AND RIGHT VERTICAL HEAVY">&#9546;</button>
            <button title="BOX DRAWINGS HEAVY VERTICAL AND HORIZONTAL">&#9547;</button>
            <button title="BOX DRAWINGS LIGHT DOUBLE DASH HORIZONTAL">&#9548;</button>
            <button title="BOX DRAWINGS HEAVY DOUBLE DASH HORIZONTAL">&#9549;</button>
            <button title="BOX DRAWINGS LIGHT DOUBLE DASH VERTICAL">&#9550;</button>
            <button title="BOX DRAWINGS HEAVY DOUBLE DASH VERTICAL">&#9551;</button>
            <button title="BOX DRAWINGS DOUBLE HORIZONTAL">&#9552;</button>
            <button title="BOX DRAWINGS DOUBLE VERTICAL">&#9553;</button>
            <button title="BOX DRAWINGS DOWN SINGLE AND RIGHT DOUBLE">&#9554;</button>
            <button title="BOX DRAWINGS DOWN DOUBLE AND RIGHT SINGLE">&#9555;</button>
            <button title="BOX DRAWINGS DOUBLE DOWN AND RIGHT">&#9556;</button>
            <button title="BOX DRAWINGS DOWN SINGLE AND LEFT DOUBLE">&#9557;</button>
            <button title="BOX DRAWINGS DOWN DOUBLE AND LEFT SINGLE">&#9558;</button>
            <button title="BOX DRAWINGS DOUBLE DOWN AND LEFT">&#9559;</button>
            <button title="BOX DRAWINGS UP SINGLE AND RIGHT DOUBLE">&#9560;</button>
            <button title="BOX DRAWINGS UP DOUBLE AND RIGHT SINGLE">&#9561;</button>
            <button title="BOX DRAWINGS DOUBLE UP AND RIGHT">&#9562;</button>
            <button title="BOX DRAWINGS UP SINGLE AND LEFT DOUBLE">&#9563;</button>
            <button title="BOX DRAWINGS UP DOUBLE AND LEFT SINGLE">&#9564;</button>
            <button title="BOX DRAWINGS DOUBLE UP AND LEFT">&#9565;</button>
            <button title="BOX DRAWINGS VERTICAL SINGLE AND RIGHT DOUBLE">&#9566;</button>
            <button title="BOX DRAWINGS VERTICAL DOUBLE AND RIGHT SINGLE">&#9567;</button>
            <button title="BOX DRAWINGS DOUBLE VERTICAL AND RIGHT">&#9568;</button>
            <button title="BOX DRAWINGS VERTICAL SINGLE AND LEFT DOUBLE">&#9569;</button>
            <button title="BOX DRAWINGS VERTICAL DOUBLE AND LEFT SINGLE">&#9570;</button>
            <button title="BOX DRAWINGS DOUBLE VERTICAL AND LEFT">&#9571;</button>
            <button title="BOX DRAWINGS DOWN SINGLE AND HORIZONTAL DOUBLE">&#9572;</button>
            <button title="BOX DRAWINGS DOWN DOUBLE AND HORIZONTAL SINGLE">&#9573;</button>
            <button title="BOX DRAWINGS DOUBLE DOWN AND HORIZONTAL">&#9574;</button>
            <button title="BOX DRAWINGS UP SINGLE AND HORIZONTAL DOUBLE">&#9575;</button>
            <button title="BOX DRAWINGS UP DOUBLE AND HORIZONTAL SINGLE">&#9576;</button>
            <button title="BOX DRAWINGS DOUBLE UP AND HORIZONTAL">&#9577;</button>
            <button title="BOX DRAWINGS VERTICAL SINGLE AND HORIZONTAL DOUBLE">&#9578;</button>
            <button title="BOX DRAWINGS VERTICAL DOUBLE AND HORIZONTAL SINGLE">&#9579;</button>
            <button title="BOX DRAWINGS DOUBLE VERTICAL AND HORIZONTAL">&#9580;</button>
            <button title="BOX DRAWINGS LIGHT ARC DOWN AND RIGHT">&#9581;</button>
            <button title="BOX DRAWINGS LIGHT ARC DOWN AND LEFT">&#9582;</button>
            <button title="BOX DRAWINGS LIGHT ARC UP AND LEFT">&#9583;</button>
            <button title="BOX DRAWINGS LIGHT ARC UP AND RIGHT">&#9584;</button>
            <button title="BOX DRAWINGS LIGHT DIAGONAL UPPER RIGHT TO LOWER LEFT">&#9585;</button>
            <button title="BOX DRAWINGS LIGHT DIAGONAL UPPER LEFT TO LOWER RIGHT">&#9586;</button>
            <button title="BOX DRAWINGS LIGHT DIAGONAL CROSS">&#9587;</button>
            <button title="BOX DRAWINGS LIGHT LEFT">&#9588;</button>
            <button title="BOX DRAWINGS LIGHT UP">&#9589;</button>
            <button title="BOX DRAWINGS LIGHT RIGHT">&#9590;</button>
            <button title="BOX DRAWINGS LIGHT DOWN">&#9591;</button>
            <button title="BOX DRAWINGS HEAVY LEFT">&#9592;</button>
            <button title="BOX DRAWINGS HEAVY UP">&#9593;</button>
            <button title="BOX DRAWINGS HEAVY RIGHT">&#9594;</button>
            <button title="BOX DRAWINGS HEAVY DOWN">&#9595;</button>
            <button title="BOX DRAWINGS LIGHT LEFT AND HEAVY RIGHT">&#9596;</button>
            <button title="BOX DRAWINGS LIGHT UP AND HEAVY DOWN">&#9597;</button>
            <button title="BOX DRAWINGS HEAVY LEFT AND LIGHT RIGHT">&#9598;</button>
            <button title="BOX DRAWINGS HEAVY UP AND LIGHT DOWN">&#9599;</button>
            
        </div>
        
        <div id="divCurrencySymbols" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Currency Symbols: https://www.w3schools.com/charsets/ref_utf_currency.asp -->
            <button title="EURO-CURRENCY SIGN">&#8352;</button>
            <button title="COLON SIGN">&#8353;</button>
            <button title="CRUZEIRO SIGN">&#8354;</button>
            <button title="FRENCH FRANC SIGN">&#8355;</button>
            <button title="LIRA SIGN">&#8356;</button>
            <button title="MILL SIGN">&#8357;</button>
            <button title="NAIRA SIGN">&#8358;</button>
            <button title="PESETA SIGN">&#8359;</button>
            <button title="RUPEE SIGN">&#8360;</button>
            <button title="WON SIGN">&#8361;</button>
            <button title="NEW SIGN">&#8362;</button>
            <button title="DONG SIGN">&#8363;</button>
            <button title="EURO SIGN">&euro;</button>
            <button title="KIP SIGN">&#8365;</button>
            <button title="TUGRIK SIGN">&#8366;</button>
            <button title="DRACHMA SIGN">&#8367;</button>
            <button title="GERMAN PENNY SYMBOL">&#8368;</button>
            <button title="PESO SIGN">&#8369;</button>
            <button title="GUARANI SIGN">&#8370;</button>
            <button title="AUSTRAL SIGN">&#8371;</button>
            <button title="HRYVNIA SIGN">&#8372;</button>
            <button title="CEDI SIGN">&#8373;</button>
            <button title="LIVRE TOURNOIS SIGN">&#8374;</button>
            <button title="SPESMILO  SIGN">&#8375;</button>
            <button title="TENGE SIGN">&#8376;</button>
            <button title="INDIAN RUPEE SIGN">&#8377;</button>
            <button title="TURKISH LIRA SIGN">&#8378;</button>
            <!--<button>&#8379;</button>
            <button>&#8380;</button>-->
            <button title="RUBLE SIGN">&#8381;</button>
            <!--<button>&#8382;</button>
            <button>&#8383;</button>-->
        
        </div>
        
        <div id="divDingbats" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Dingbats https://www.w3schools.com/charsets/ref_utf_dingbats.asp -->
            <button title="UPPER BLADE SCISSORS">&#9985;</button>
            <button title="BLACK SCISSORS">&#9986;</button>
            <button title="LOWER BLADE SCISSORS">&#9987;</button>
            <button title="WHITE SCISSORS">&#9988;</button>
            <button title="WHITE HEAVY CHECK MARK">&#9989;</button>
            <button title="TELEPHONE LOCATION SIGN">&#9990;</button>
            <button title="TAPE DRIVE">&#9991;</button>
            <button title="AIRPLANE">&#9992;</button>
            <button title="ENVELOPE">&#9993;</button>
            <button title="RAISED FIST">&#9994;</button>
            <button title="RAISED HAND">&#9995;</button>
            <button title="VICTORY HAND">&#9996;</button>
            <button title="WRITING HAND">&#9997;</button>
            <button title="LOWER RIGHT PENCIL">&#9998;</button>
            <button title="PENCIL">&#9999;</button>
            <button title="UPPER RIGHT PENCIL">&#10000;</button>
            <button title="WHITE NIB">&#10001;</button>
            <button title="BLACK NIB">&#10002;</button>
            <button title="CHECK MARK">&#10003;</button>
            <button title="HEAVY CHECK MARK">&#10004;</button>
            <button title="MULTIPLICATION X">&#10005;</button>
            <button title="HEAVY MULTIPLICATION X">&#10006;</button>
            <button title="BALLOT X">&#10007;</button>
            <button title="HEAVY BALLOT X">&#10008;</button>
            <button title="OUTLINED GREEK CROSS">&#10009;</button>
            <button title="HEAVY GREEK CROSS">&#10010;</button>
            <button title="OPEN CENTRE CROSS">&#10011;</button>
            <button title="HEAVY OPEN CENTRE CROSS">&#10012;</button>
            <button title="LATIN CROSS">&#10013;</button>
            <button title="SHADOWED WHITE LATIN CROSS">&#10014;</button>
            <button title="OUTLINED LATIN CROSS">&#10015;</button>
            <button title="MALTESE CROSS">&#10016;</button>
            <button title="STAR OF DAVID">&#10017;</button>
            <button title="FOUR TEARDROP-SPOKED ASTERISK">&#10018;</button>
            <button title="FOUR BALLOON-SPOKED ASTERISK">&#10019;</button>
            <button title="HEAVY FOUR BALLOON-SPOKED ASTERISK">&#10020;</button>
            <button title="FOUR CLUB-SPOKED ASTERISK">&#10021;</button>
            <button title="BLACK FOUR POINTED STAR">&#10022;</button>
            <button title="WHITE FOUR POINTED STAR">&#10023;</button>
            <button title="SPARKLES">&#10024;</button>
            <button title="STRESS OUTLINED WHITE STAR">&#10025;</button>
            <button title="CIRCLED WHITE STAR">&#10026;</button>
            <button title="OPEN CENTRE BLACK STAR">&#10027;</button>
            <button title="BLACK CENTRE WHITE STAR">&#10028;</button>
            <button title="OUTLINED BLACK STAR">&#10029;</button>
            <button title="HEAVY OUTLINED BLACK STAR">&#10030;</button>
            <button title="PINWHEEL STAR">&#10031;</button>
            <button title="SHADOWED WHITE STAR">&#10032;</button>
            <button title="HEAVY ASTERISK">&#10033;</button>
            <button title="OPEN CENTRE ASTERISK">&#10034;</button>
            <button title="EIGHT SPOKED ASTERISK">&#10035;</button>
            <button title="EIGHT POINTED BLACK STAR">&#10036;</button>
            <button title="EIGHT POINTED PINWHEEL STAR">&#10037;</button>
            <button title="SIX POINTED BLACK STAR">&#10038;</button>
            <button title="EIGHT POINTED RECTILINEAR BLACK STAR">&#10039;</button>
            <button title="HEAVY EIGHT POINTED RECTILINEAR BLACK STAR">&#10040;</button>
            <button title="TWELVE POINTED BLACK STAR">&#10041;</button>
            <button title="SIXTEEN POINTED ASTERISK">&#10042;</button>
            <button title="TEARDROP-SPOKED ASTERISK">&#10043;</button>
            <button title="OPEN CENTRE TEARDROP-SPOKED ASTERISK">&#10044;</button>
            <button title="HEAVY TEARDROP-SPOKED ASTERISK">&#10045;</button>
            <button title="SIX PETALLED BLACK AND WHITE FLORETTE">&#10046;</button>
            <button title="BLACK FLORETTE">&#10047;</button>
            <button title="WHITE FLORETTE">&#10048;</button>
            <button title="EIGHT PETALLED OUTLINED BLACK FLORETTE">&#10049;</button>
            <button title="CIRCLED OPEN CENTRE EIGHT POINTED STAR">&#10050;</button>
            <button title="HEAVY TEARDROP-SPOKED PINWHEEL ASTERISK">&#10051;</button>
            <button title="SNOWFLAKE">&#10052;</button>
            <button title="TIGHT TRIFOLIATE SNOWFLAKE">&#10053;</button>
            <button title="HEAVY CHEVRON SNOWFLAKE">&#10054;</button>
            <button title="SPARKLE">&#10055;</button>
            <button title="HEAVY SPARKLE">&#10056;</button>
            <button title="BALLOON-SPOKED ASTERISK">&#10057;</button>
            <button title="EIGHT TEARDROP-SPOKED PROPELLER ASTERISK">&#10058;</button>
            <button title="HEAVY EIGHT TEARDROP-SPOKED PROPELLER ASTERISK">&#10059;</button>
            <button title="CROSS MARK">&#10060;</button>
            <button title="SHADOWED WHITE CIRCLE">&#10061;</button>
            <button title="NEGATIVE SQUARED CROSS MARK">&#10062;</button>
            <button title="LOWER RIGHT DROP-SHADOWED WHITE SQUARE">&#10063;</button>
            <button title="UPPER RIGHT DROP-SHADOWED WHITE SQUARE">&#10064;</button>
            <button title="LOWER RIGHT SHADOWED WHITE SQUARE">&#10065;</button>
            <button title="UPPER RIGHT SHADOWED WHITE SQUARE">&#10066;</button>
            <button title="BLACK QUESTION MARK ORNAMENT">&#10067;</button>
            <button title="WHITE QUESTION MARK ORNAMENT">&#10068;</button>
            <button title="WHITE EXCLAMATION MARK ORNAMENT">&#10069;</button>
            <button title="BLACK DIAMOND MINUS WHITE X">&#10070;</button>
            <button title="HEAVY EXCLAMATION MARK SYMBOL">&#10071;</button>
            <button title="LIGHT VERTICAL BAR">&#10072;</button>
            <button title="MEDIUM VERTICAL BAR">&#10073;</button>
            <button title="HEAVY VERTICAL BAR">&#10074;</button>
            <button title="HEAVY SINGLE TURNED COMMA QUOTATION MARK ORNAMENT">&#10075;</button>
            <button title="HEAVY SINGLE COMMA QUOTATION MARK ORNAMENT">&#10076;</button>
            <button title="HEAVY DOUBLE TURNED COMMA QUOTATION MARK ORNAMENT">&#10077;</button>
            <button title="HEAVY DOUBLE COMMA QUOTATION MARK ORNAMENT">&#10078;</button>
            <button title="HEAVY LOW SINGLE COMMA QUOTATION MARK ORNAMENT">&#10079;</button>
            <button title="HEAVY LOW DOUBLE COMMA QUOTATION MARK ORNAMENT">&#10080;</button>
            <button title="CURVED STEM PARAGRAPH SIGN ORNAMENT">&#10081;</button>
            <button title="HEAVY EXCLAMATION MARK ORNAMENT">&#10082;</button>
            <button title="HEAVY HEART EXCLAMATION MARK ORNAMENT">&#10083;</button>
            <button title="HEAVY BLACK HEART">&#10084;</button>
            <button title="ROTATED HEAVY BLACK HEART BULLET">&#10085;</button>
            <button title="FLORAL HEART">&#10086;</button>
            <button title="ROTATED FLORAL HEART BULLET">&#10087;</button>
            <button title="MEDIUM LEFT PARENTHESIS ORNAMENT">&#10088;</button>
            <button title="MEDIUM RIGHT PARENTHESIS ORNAMENT">&#10089;</button>
            <button title="MEDIUM FLATTENED LEFT PARENTHESIS ORNAMENT">&#10090;</button>
            <button title="MEDIUM FLATTENED RIGHT PARENTHESIS ORNAMENT">&#10091;</button>
            <button title="MEDIUM LEFT-POINTING ANGLE BRACKET ORNAMENT">&#10092;</button>
            <button title="MEDIUM RIGHT-POINTING ANGLE BRACKET ORNAMENT">&#10093;</button>
            <button title="HEAVY LEFT-POINTING ANGLE QUOTATION MARK ORNAMENT">&#10094;</button>
            <button title="HEAVY RIGHT-POINTING ANGLE QUOTATION MARK ORNAMENT">&#10095;</button>
            <button title="HEAVY LEFT-POINTING ANGLE BRACKET ORNAMENT">&#10096;</button>
            <button title="HEAVY RIGHT-POINTING ANGLE BRACKET ORNAMENT">&#10097;</button>
            <button title="LIGHT LEFT TORTOISE SHELL BRACKET ORNAMENT">&#10098;</button>
            <button title="LIGHT RIGHT TORTOISE SHELL BRACKET ORNAMENT">&#10099;</button>
            <button title="MEDIUM LEFT CURLY BRACKET ORNAMENT">&#10100;</button>
            <button title="MEDIUM RIGHT CURLY BRACKET ORNAMENT">&#10101;</button>
            <button title="DINGBAT NEGATIVE CIRCLED DIGIT ONE">&#10102;</button>
            <button title="DINGBAT NEGATIVE CIRCLED DIGIT TWO">&#10103;</button>
            <button title="DINGBAT NEGATIVE CIRCLED DIGIT THREE">&#10104;</button>
            <button title="DINGBAT NEGATIVE CIRCLED DIGIT FOUR">&#10105;</button>
            <button title="DINGBAT NEGATIVE CIRCLED DIGIT FIVE">&#10106;</button>
            <button title="DINGBAT NEGATIVE CIRCLED DIGIT SIX">&#10107;</button>
            <button title="DINGBAT NEGATIVE CIRCLED DIGIT SEVEN">&#10108;</button>
            <button title="DINGBAT NEGATIVE CIRCLED DIGIT EIGHT">&#10109;</button>
            <button title="DINGBAT NEGATIVE CIRCLED DIGIT NINE">&#10110;</button>
            <button title="DINGBAT NEGATIVE CIRCLED NUMBER TEN">&#10111;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT ONE">&#10112;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT TWO">&#10113;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT THREE">&#10114;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT FOUR">&#10115;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT FIVE">&#10116;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT SIX">&#10117;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT SEVEN">&#10118;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT EIGHT">&#10119;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT NINE">&#10120;</button>
            <button title="DINGBAT CIRCLED SANS-SERIF DIGIT TEN">&#10121;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT ONE">&#10122;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT TWO">&#10123;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT THREE">&#10124;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FOUR">&#10125;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT FIVE">&#10126;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SIX">&#10127;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT SEVEN">&#10128;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT EIGHT">&#10129;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT NINE">&#10130;</button>
            <button title="DINGBAT NEGATIVE CIRCLED SANS-SERIF DIGIT TEN">&#10131;</button>
            <button title="HEAVY WIDE-HEADED RIGHTWARDS ARROW">&#10132;</button>
            <button title="HEAVY PLUS SIGN">&#10133;</button>
            <button title="HEAVY MINUS SIGN">&#10134;</button>
            <button title="HEAVY DIVISION SIGN">&#10135;</button>
            <button title="HEAVY SOUTH EAST ARROW">&#10136;</button>
            <button title="HEAVY RIGHTWARDS ARROW">&#10137;</button>
            <button title="HEAVY NORTH EAST ARROW">&#10138;</button>
            <button title="DRAFTING POINT RIGHTWARDS ARROW">&#10139;</button>
            <button title="HEAVY ROUND-TIPPED RIGHTWARDS ARROW">&#10140;</button>
            <button title="TRIANGLE-HEADED RIGHTWARDS ARROW">&#10141;</button>
            <button title="HEAVY TRIANGLE-HEADED RIGHTWARDS ARROW">&#10142;</button>
            <button title="DASHED TRIANGLE-HEADED RIGHTWARDS ARROW">&#10143;</button>
            <button title="HEAVY DASHED TRIANGLE-HEADED RIGHTWARDS ARROW">&#10144;</button>
            <button title="BLACK RIGHTWARDS ARROW">&#10145;</button>
            <button title="THREE-D TOP-LIGHTED RIGHTWARDS ARROWHEAD">&#10146;</button>
            <button title="THREE-D BOTTOM-LIGHTED RIGHTWARDS ARROWHEAD">&#10147;</button>
            <button title="BLACK RIGHTWARDS ARROWHEAD">&#10148;</button>
            <button title="HEAVY BLACK CURVED DOWNWARDS AND RIGHTWARDS ARROW">&#10149;</button>
            <button title="HEAVY BLACK CURVED UPWARDS AND RIGHTWARDS ARROW">&#10150;</button>
            <button title="SQUAT BLACK RIGHTWARDS ARROW">&#10151;</button>
            <button title="HEAVY CONCAVE-POINTED BLACK RIGHTWARDS ARROW">&#10152;</button>
            <button title="RIGHT-SHADED WHITE RIGHTWARDS ARROW">&#10153;</button>
            <button title="LEFT-SHADED WHITE RIGHTWARDS ARROW">&#10154;</button>
            <button title="BACK-TILTED SHADOWED WHITE RIGHTWARDS ARROW">&#10155;</button>
            <button title="FRONT-TILTED SHADOWED WHITE RIGHTWARDS ARROW">&#10156;</button>
            <button title="HEAVY LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW">&#10157;</button>
            <button title="HEAVY UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW">&#10158;</button>
            <button title="NOTCHED LOWER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW">&#10159;</button>
            <button title="CURLY LOOP">&#10160;</button>
            <button title="NOTCHED UPPER RIGHT-SHADOWED WHITE RIGHTWARDS ARROW">&#10161;</button>
            <button title="CIRCLED HEAVY WHITE RIGHTWARDS ARROW">&#10162;</button>
            <button title="WHITE-FEATHERED RIGHTWARDS ARROW">&#10163;</button>
            <button title="BLACK-FEATHERED SOUTH EAST ARROW">&#10164;</button>
            <button title="BLACK-FEATHERED RIGHTWARDS ARROW">&#10165;</button>
            <button title="BLACK-FEATHERED NORTH EAST ARROW">&#10166;</button>
            <button title="HEAVY BLACK-FEATHERED SOUTH EAST ARROW">&#10167;</button>
            <button title="HEAVY BLACK-FEATHERED RIGHTWARDS ARROW">&#10168;</button>
            <button title="HEAVY BLACK-FEATHERED NORTH EAST ARROW">&#10169;</button>
            <button title="TEARDROP-BARBED RIGHTWARDS ARROW">&#10170;</button>
            <button title="HEAVY TEARDROP-SHANKED RIGHTWARDS ARROW">&#10171;</button>
            <button title="WEDGE-TAILED RIGHTWARDS ARROW">&#10172;</button>
            <button title="HEAVY WEDGE-TAILED RIGHTWARDS ARROW">&#10173;</button>
            <button title="OPEN-OUTLINED RIGHTWARDS ARROW">&#10174;</button>
            <button title="DOUBLE CURLY LOOP">&#10175;</button>
        </div>
        
        <!--
        <div id="divEmoji" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
        </div>
        <div id="divEmojiSkinTones" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
        </div>
        -->
        
        <div id="divEmojiSmileys" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Emoji Smileys https://www.w3schools.com/charsets/ref_emoji_smileys.asp -->
            <button title="GRINNING FACE">&#128512;</button>
            <button title="GRINNING FACE WITH SMILING EYES">&#128513;</button>
            <button title="FACE WITH TEARS OF JOY">&#128514;</button>
            <button title="SMILING FACE WITH OPEN MOUTH">&#128515;</button>
            <button title="SMILING FACE WITH OPEN MOUTH AND SMILING EYES">&#128516;</button>
            <button title="SMILING FACE WITH OPEN MOUTH AND COLD SWEAT">&#128517;</button>
            <button title="SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES">&#128518;</button>
            <button title="SMILING FACE WITH HALO">&#128519;</button>
            <button title="SMILING FACE WITH HORNS">&#128520;</button>
            <button title="WINKING FACE">&#128521;</button>
            <button title="SMILING FACE WITH SMILING EYES">&#128522;</button>
            <button title="FACE SAVOURING DELICIOUS FOOD">&#128523;</button>
            <button title="RELIEVED FACE">&#128524;</button>
            <button title="SMILING FACE WITH HEART-SHAPED EYES">&#128525;</button>
            <button title="SMILING FACE WITH SUNGLASSES">&#128526;</button>
            <button title="SMIRKING FACE">&#128527;</button>
            <button title="NEUTRAL FACE">&#128528;</button>
            <button title="EXPRESSIONLESS FACE">&#128529;</button>
            <button title="UNAMUSED FACE">&#128530;</button>
            <button title="FACE WITH COLD SWEAT">&#128531;</button>
            <button title="PENSIVE FACE">&#128532;</button>
            <button title="CONFUSED FACE">&#128533;</button>
            <button title="CONFOUNDED FACE">&#128534;</button>
            <button title="KISSING FACE">&#128535;</button>
            <button title="FACE THROWING A KISS">&#128536;</button>
            <button title="KISSING FACE WITH SMILING EYES">&#128537;</button>
            <button title="KISSING FACE WITH CLOSED EYES">&#128538;</button>
            <button title="FACE WITH STUCK-OUT TONGUE">&#128539;</button>
            <button title="FACE WITH STUCK-OUT TONGUE AND WINKING EYE">&#128540;</button>
            <button title="FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES">&#128541;</button>
            <button title="DISAPPOINTED FACE">&#128542;</button>
            <button title="WORRIED FACE">&#128543;</button>
            <button title="ANGRY FACE">&#128544;</button>
            <button title="POUTING FACE">&#128545;</button>
            <button title="CRYING FACE">&#128546;</button>
            <button title="PERSEVERING FACE">&#128547;</button>
            <button title="FACE WITH LOOK OF TRIUMPH">&#128548;</button>
            <button title="DISAPPOINTED BUT RELIEVED FACE">&#128549;</button>
            <button title="FROWNING FACE WITH OPEN MOUTH">&#128550;</button>
            <button title="ANGUISHED FACE">&#128551;</button>
            <button title="FEARFUL FACE">&#128552;</button>
            <button title="WEARY FACE">&#128553;</button>
            <button title="SLEEPY FACE">&#128554;</button>
            <button title="TIRED FACE">&#128555;</button>
            <button title="GRIMACING FACE">&#128556;</button>
            <button title="LOUDLY CRYING FACE">&#128557;</button>
            <button title="FACE WITH OPEN MOUTH">&#128558;</button>
            <button title="HUSHED FACE">&#128559;</button>
            <button title="FACE WITH OPEN MOUTH AND COLD SWEAT">&#128560;</button>
            <button title="FACE SCREAMING IN FEAR">&#128561;</button>
            <button title="ASTONISHED FACE">&#128562;</button>
            <button title="FLUSHED FACE">&#128563;</button>
            <button title="SLEEPING FACE">&#128564;</button>
            <button title="DIZZY FACE">&#128565;</button>
            <button title="FACE WITHOUT MOUTH">&#128566;</button>
            <button title="FACE WITH MEDICAL MASK">&#128567;</button>
            <button title="">&#128568;</button>
            <button title="">&#128569;</button>
            <button title="">&#128570;</button>
            <button title="">&#128571;</button>
            <button title="">&#128572;</button>
            <button title="">&#128573;</button>
            <button title="">&#128574;</button>
            <button title="">&#128575;</button>
            <button title="">&#128576;</button>
            <!--<button>&#128577;</button>
            <button>&#128578;</button>
            <button>&#128579;</button>
            <button>&#128580;</button>
            <button>&#129296;</button>
            <button>&#129297;</button>
            <button>&#129298;</button>
            <button>&#129299;</button>
            <button>&#129300;</button>
            <button>&#129301;</button>
            <button>&#129312;</button>
            <button>&#129313;</button>
            <button>&#129314;</button>
            <button>&#129315;</button>
            <button>&#129316;</button>
            <button>&#129317;</button>
            <button>&#129319;</button>
            <button>&#129320;</button>
            <button>&#129321;</button>
            <button>&#129322;</button>
            <button>&#129323;</button>
            <button>&#129324;</button>
            <button>&#129325;</button>
            <button>&#129326;</button>
            <button>&#129327;</button>
            <button>&#129488;</button>-->
        </div>
        
        <div id="divGeneralPunctuation" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- General Punctuation: https://www.w3schools.com/charsets/ref_utf_punctuation.asp -->
            <!--<button>&#8192;</button>
            <button>&#8193;</button>
            <button>&ensp;</button>
            <button>&emsp;</button>
            <button>&#8196;</button>
            <button>&#8197;</button>
            <button>&#8198;</button>
            <button>&#8199;</button>
            <button>&#8200;</button>
            <button>&thinsp;</button>
            <button>&#8202;</button>
            <button>&#8203;</button>
            <button>&zwnj;</button>
            <button>&zwj;</button>
            <button>&lrm;</button>
            <button>&rlm;</button>-->
            <button title="HYPHEN">&#8208;</button>
            <button title="NON-BREAKING HYPHEN">&#8209;</button>
            <button title="FIGURE DASH">&#8210;</button>
            <button title="EN DASH">&ndash;</button>
            <button title="EM DASH">&mdash;</button>
            <button title="HORIZONTAL BAR">&#8213;</button>
            <button title="DOUBLE VERTICAL LINE">&#8214;</button>
            <button title="DOUBLE LOW LINE">&#8215;</button>
            <button title="LEFT SINGLE QUOTATION MARK">&lsquo;</button>
            <button title="RIGHT SINGLE QUOTATION MARK">&rsquo;</button>
            <button title="SINGLE LOW-9 QUOTATION MARK">&sbquo;</button>
            <button title="SINGLE HIGH-REVERSED-9 QUOTATION MARK">&#8219;</button>
            <button title="LEFT DOUBLE QUOTATION MARK">&ldquo;</button>
            <button title="RIGHT DOUBLE QUOTATION MARK">&rdquo;</button>
            <button title="DOUBLE LOW-9 QUOTATION MARK">&bdquo;</button>
            <button title="DOUBLE HIGH-REVERSED-9 QUOTATION MARK">&#8223;</button>
            <button title="DAGGER">&dagger;</button>
            <button title="DOUBLE DAGGER">&Dagger;</button>
            <button title="BULLET">&bull;</button>
            <button title="TRIANGULAR BULLET">&#8227;</button>
            <button title="ONE DOT LEADER">&#8228;</button>
            <button title="TWO DOT LEADER">&#8229;</button>
            <button title="HORIZONTAL ELLIPSIS">&hellip;</button>
            <button title="HYPHENATION POINT">&#8231;</button>
            <!--<button>&#8232;</button>
            <button>&#8233;</button>
            <button>&#8234;</button>
            <button>&#8235;</button>
            <button>&#8236;</button>
            <button>&#8237;</button>
            <button>&#8238;</button>
            <button>&#8239;</button>-->
            <button title="PER MILLE SIGN">&permil;</button>
            <button title="PER TEN THOUSAND SIGN">&#8241;</button>
            <button title="PRIME">&prime;</button>
            <button title="DOUBLE PRIME">&Prime;</button>
            <button title="TRIPLE PRIME">&#8244;</button>
            <button title="REVERSED PRIME">&#8245;</button>
            <button title="REVERSED DOUBLE PRIME">&#8246;</button>
            <button title="REVERSED TRIPLE PRIME">&#8247;</button>
            <button title="CARET">&#8248;</button>
            <button title="SINGLE LEFT-POINTING ANGLE QUOTATION MARK">&lsaquo;</button>
            <button title="SINGLE RIGHT-POINTING ANGLE QUOTATION MARK">&rsaquo;</button>
            <button title="REFERENCE MARK">&#8251;</button>
            <button title="DOUBLE EXCLAMATION MARK">&#8252;</button>
            <button title="INTERROBANG">&#8253;</button>
            <button title="OVERLINE">&oline;</button>
            <button title="UNDERTIE">&#8255;</button>
            <button title="CHARACTER TIE">&#8256;</button>
            <button title="CARET INSERTION POINT">&#8257;</button>
            <button title="ASTERISM">&#8258;</button>
            <button title="HYPHEN BULLET">&#8259;</button>
            <button title="FRACTION SLASH">&frasl;</button>
            <button title="LEFT SQUARE BRACKET WITH QUILL">&#8261;</button>
            <button title="RIGHT SQUARE BRACKET WITH QUILL">&#8262;</button>
            <button title="DOUBLE QUESTION MARK">&#8263;</button>
            <button title="QUESTION EXCLAMATION MARK">&#8264;</button>
            <button title="EXCLAMATION QUESTION MARK">&#8265;</button>
            <button title="TIRONIAN SIGN ET">&#8266;</button>
            <button title="REVERSED PILCROW SIGN">&#8267;</button>
            <button title="BLACK LEFTWARDS BULLET">&#8268;</button>
            <button title="BLACK RIGHTWARDS BULLET">&#8269;</button>
            <button title="LOW ASTERISK">&#8270;</button>
            <button title="REVERSED SEMICOLON">&#8271;</button>
            <button title="CLOSE UP">&#8272;</button>
            <button title="TWO ASTERISKS ALIGNED VERTICALLY">&#8273;</button>
            <button title="COMMERCIAL MINUS SIGN">&#8274;</button>
            <button title="SWUNG DASH">&#8275;</button>
            <button title="INVERTED UNDERTIE">&#8276;</button>
            <button title="FLOWER PUNCTUATION MARK">&#8277;</button>
            <button title="THREE DOT PUNCTUATION">&#8278;</button>
            <button title="QUADRUPLE PRIME">&#8279;</button>
            <button title="FOUR DOT PUNCTUATION">&#8280;</button>
            <button title="FIVE DOT PUNCTUATION">&#8281;</button>
            <button title="TWO DOT PUNCTUATION">&#8282;</button>
            <button title="FOUR DOT MARK">&#8283;</button>
            <button title="DOTTED CROSS">&#8284;</button>
            <button title="TRICOLON">&#8285;</button>
            <button title="VERTICAL FOUR DOTS">&#8286;</button>
            <!--<button>&#8287;</button>
            <button>&#8288;</button>
            <button>&#8289;</button>
            <button>&#8290;</button>
            <button>&#8291;</button>
            <button>&#8292;</button>
            <button>&#8294;</button>
            <button>&#8295;</button>
            <button>&#8296;</button>
            <button>&#8297;</button>
            <button>&#8298;</button>
            <button>&#8299;</button>
            <button>&#8300;</button>
            <button>&#8301;</button>
            <button>&#8302;</button>
            <button>&#8303;</button>-->
        </div>
        
        <div id="divGeometricShapes" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
            
            <!-- Geometric Shapes https://www.w3schools.com/charsets/ref_utf_geometric.asp -->
            <button title="BLACK SQUARE">&#9632;</button>
            <button title="WHITE SQUARE">&#9633;</button>
            <button title="WHITE SQUARE WITH ROUNDED CORNERS">&#9634;</button>
            <button title="WHITE SQUARE CONTAINING BLACK SMALL SQUARE">&#9635;</button>
            <button title="SQUARE WITH HORIZONTAL FILL">&#9636;</button>
            <button title="SQUARE WITH VERTICAL FILL">&#9637;</button>
            <button title="SQUARE WITH ORTHOGONAL CROSSHATCH FILL">&#9638;</button>
            <button title="SQUARE WITH UPPER LEFT TO LOWER RIGHT FILL">&#9639;</button>
            <button title="SQUARE WITH UPPER RIGHT TO LOWER LEFT FILL">&#9640;</button>
            <button title="SQUARE WITH DIAGONAL CROSSHATCH FILL">&#9641;</button>
            <button title="BLACK SMALL SQUARE">&#9642;</button>
            <button title="WHITE SMALL SQUARE">&#9643;</button>
            <button title="BLACK RECTANGLE">&#9644;</button>
            <button title="WHITE RECTANGLE">&#9645;</button>
            <button title="BLACK VERTICAL RECTANGLE">&#9646;</button>
            <button title="WHITE VERTICAL RECTANGLE">&#9647;</button>
            <button title="BLACK PARALLELOGRAM">&#9648;</button>
            <button title="WHITE PARALLELOGRAM">&#9649;</button>
            <button title="BLACK UP-POINTING TRIANGLE">&#9650;</button>
            <button title="WHITE UP-POINTING TRIANGLE">&#9651;</button>
            <button title="BLACK UP-POINTING SMALL TRIANGLE">&#9652;</button>
            <button title="WHITE UP-POINTING SMALL TRIANGLE">&#9653;</button>
            <button title="BLACK RIGHT-POINTING TRIANGLE">&#9654;</button>
            <button title="WHITE RIGHT-POINTING TRIANGLE">&#9655;</button>
            <button title="BLACK RIGHT-POINTING SMALL TRIANGLE">&#9656;</button>
            <button title="WHITE RIGHT-POINTING SMALL TRIANGLE">&#9657;</button>
            <button title="BLACK RIGHT-POINTING POINTER">&#9658;</button>
            <button title="WHITE RIGHT-POINTING POINTER">&#9659;</button>
            <button title="BLACK DOWN-POINTING TRIANGLE">&#9660;</button>
            <button title="WHITE DOWN-POINTING TRIANGLE">&#9661;</button>
            <button title="BLACK DOWN-POINTING SMALL TRIANGLE">&#9662;</button>
            <button title="WHITE DOWN-POINTING SMALL TRIANGLE">&#9663;</button>
            <button title="BLACK LEFT-POINTING TRIANGLE">&#9664;</button>
            <button title="WHITE LEFT-POINTING TRIANGLE">&#9665;</button>
            <button title="BLACK LEFT-POINTING SMALL TRIANGLE">&#9666;</button>
            <button title="WHITE LEFT-POINTING SMALL TRIANGLE">&#9667;</button>
            <button title="BLACK LEFT-POINTING POINTER">&#9668;</button>
            <button title="WHITE LEFT-POINTING POINTER">&#9669;</button>
            <button title="BLACK DIAMOND">&#9670;</button>
            <button title="WHITE DIAMOND">&#9671;</button>
            <button title="WHITE DIAMOND CONTAINING BLACK SMALL DIAMOND">&#9672;</button>
            <button title="FISHEYE">&#9673;</button>
            <button title="LOZENGE">&loz;</button>
            <button title="WHITE CIRCLE">&#9675;</button>
            <button title="DOTTED CIRCLE">&#9676;</button>
            <button title="CIRCLE WITH VERTICAL FILL">&#9677;</button>
            <button title="BULLSEYE">&#9678;</button>
            <button title="BLACK CIRCLE">&#9679;</button>
            <button title="CIRCLE WITH LEFT HALF BLACK">&#9680;</button>
            <button title="CIRCLE WITH RIGHT HALF BLACK">&#9681;</button>
            <button title="CIRCLE WITH LOWER HALF BLACK">&#9682;</button>
            <button title="CIRCLE WITH UPPER HALF BLACK">&#9683;</button>
            <button title="CIRCLE WITH UPPER RIGHT QUADRANT BLACK">&#9684;</button>
            <button title="CIRCLE WITH ALL BUT UPPER LEFT QUADRANT BLACK">&#9685;</button>
            <button title="LEFT HALF BLACK CIRCLE">&#9686;</button>
            <button title="RIGHT HALF BLACK CIRCLE">&#9687;</button>
            <button title="INVERSE BULLET">&#9688;</button>
            <button title="INVERSE WHITE CIRCLE">&#9689;</button>
            <button title="UPPER HALF INVERSE WHITE CIRCLE">&#9690;</button>
            <button title="LOWER HALF INVERSE WHITE CIRCLE">&#9691;</button>
            <button title="UPPER LEFT QUADRANT CIRCULAR ARC">&#9692;</button>
            <button title="UPPER RIGHT QUADRANT CIRCULAR ARC">&#9693;</button>
            <button title="LOWER RIGHT QUADRANT CIRCULAR ARC">&#9694;</button>
            <button title="LOWER LEFT QUADRANT CIRCULAR ARC">&#9695;</button>
            <button title="UPPER HALF CIRCLE">&#9696;</button>
            <button title="LOWER HALF CIRCLE">&#9697;</button>
            <button title="BLACK LOWER RIGHT TRIANGLE">&#9698;</button>
            <button title="BLACK LOWER LEFT TRIANGLE">&#9699;</button>
            <button title="BLACK UPPER LEFT TRIANGLE">&#9700;</button>
            <button title="BLACK UPPER RIGHT TRIANGLE">&#9701;</button>
            <button title="WHITE BULLET">&#9702;</button>
            <button title="SQUARE WITH LEFT HALF BLACK">&#9703;</button>
            <button title="SQUARE WITH RIGHT HALF BLACK">&#9704;</button>
            <button title="SQUARE WITH UPPER LEFT DIAGONAL HALF BLACK">&#9705;</button>
            <button title="SQUARE WITH LOWER RIGHT DIAGONAL HALF BLACK">&#9706;</button>
            <button title="WHITE SQUARE WITH VERTICAL BISECTING LINE">&#9707;</button>
            <button title="WHITE UP-POINTING TRIANGLE WITH DOT">&#9708;</button>
            <button title="UP-POINTING TRIANGLE WITH LEFT HALF BLACK">&#9709;</button>
            <button title="UP-POINTING TRIANGLE WITH RIGHT HALF BLACK">&#9710;</button>
            <button title="LARGE CIRCLE">&#9711;</button>
            <button title="WHITE SQUARE WITH UPPER LEFT QUADRANT">&#9712;</button>
            <button title="WHITE SQUARE WITH LOWER LEFT QUADRANT">&#9713;</button>
            <button title="WHITE SQUARE WITH LOWER RIGHT QUADRANT">&#9714;</button>
            <button title="WHITE SQUARE WITH UPPER RIGHT QUADRANT">&#9715;</button>
            <button title="WHITE CIRCLE WITH UPPER LEFT QUADRANT">&#9716;</button>
            <button title="WHITE CIRCLE WITH LOWER LEFT QUADRANT">&#9717;</button>
            <button title="WHITE CIRCLE WITH LOWER RIGHT QUADRANT">&#9718;</button>
            <button title="WHITE CIRCLE WITH UPPER RIGHT QUADRANT">&#9719;</button>
            <button title="UPPER LEFT TRIANGLE">&#9720;</button>
            <button title="UPPER RIGHT TRIANGLE">&#9721;</button>
            <button title="LOWER LEFT TRIANGLE">&#9722;</button>
            <button title="WHITE MEDIUM SQUARE">&#9723;</button>
            <button title="BLACK MEDIUM SQUARE">&#9724;</button>
            <button title="WHITE MEDIUM SMALL SQUARE">&#9725;</button>
            <button title="BLACK MEDIUM SMALL SQUARE">&#9726;</button>
            <button title="LOWER RIGHT TRIANGLE">&#9727;</button>
        </div>
        
        <div id="divLetterlikeSymbols" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Letterlike Symbols: https://www.w3schools.com/charsets/ref_utf_letterlike.asp -->
            <button title="ACCOUNT OF">&#8448;</button>
            <button title="ADDRESSED TO THE SUBJECT">&#8449;</button>
            <button title="DOUBLE-STRUCK CAPITAL C">&#8450;</button>
            <button title="DEGREE CELSIUS">&#8451;</button>
            <button title="CENTRE LINE SYMBOL">&#8452;</button>
            <button title="CARE OF">&#8453;</button>
            <button title="CADA UNA">&#8454;</button>
            <button title="EULER CONSTANT">&#8455;</button>
            <button title="SCRUPLE">&#8456;</button>
            <button title="DEGREE FAHRENHEIT">&#8457;</button>
            <button title="SCRIPT SMALL G">&#8458;</button>
            <button title="SCRIPT CAPITAL H">&#8459;</button>
            <button title="BLACK-LETTER CAPITAL H">&#8460;</button>
            <button title="DOUBLE-STRUCK CAPITAL H">&#8461;</button>
            <button title="PLANCK CONSTANT">&#8462;</button>
            <button title="PLANCK CONSTANT OVER TWO PI">&#8463;</button>
            <button title="SCRIPT CAPITAL I">&#8464;</button>
            <button title="BLACK-LETTER CAPITAL I">&image;</button>
            <button title="SCRIPT CAPITAL L">&#8466;</button>
            <button title="SCRIPT SMALL L">&#8467;</button>
            <button title="L B BAR SYMBOL">&#8468;</button>
            <button title="DOUBLE-STRUCK CAPITAL N">&#8469;</button>
            <button title="NUMERO SIGN">&#8470;</button>
            <button title="SOUND RECORDING COPYRIGHT">&#8471;</button>
            <button title="SCRIPT CAPITAL P">&weierp;</button>
            <button title="DOUBLE-STRUCK CAPITAL P">&#8473;</button>
            <button title="DOUBLE-STRUCK CAPITAL Q">&#8474;</button>
            <button title="SCRIPT CAPITAL R">&#8475;</button>
            <button title="BLACK-LETTER CAPITAL R">&real;</button>
            <button title="DOUBLE-STRUCK CAPITAL R">&#8477;</button>
            <button title="PRESCRIPTION TAKE">&#8478;</button>
            <button title="RESPONSE">&#8479;</button>
            <button title="SERVICE MARK">&#8480;</button>
            <button title="TELEPHONE SIGN">&#8481;</button>
            <button title="TRADE MARK SIGN">&trade;</button>
            <button title="VERSICLE">&#8483;</button>
            <button title="DOUBLE-STRUCK CAPITAL Z">&#8484;</button>
            <button title="OUNCE SIGN">&#8485;</button>
            <button title="OHM SIGN">&ohm;</button>
            <button title="INVERTED OHM SIGN">&mho;</button>
            <button title="BLACK-LETTER CAPITAL Z">&#8488;</button>
            <button title="TURNED GREEK SMALL LETTER IOTA">&#8489;</button>
            <button title="KELVIN SIGN">&#8490;</button>
            <button title="ANGSTROM SIGN">&#8491;</button>
            <button title="SCRIPT CAPITAL B">&#8492;</button>
            <button title="BLACK-LETTER CAPITAL C">&#8493;</button>
            <button title="ESTIMATED SYMBOL">&#8494;</button>
            <button title="SCRIPT SMALL E">&#8495;</button>
            <button title="SCRIPT CAPITAL E">&#8496;</button>
            <button title="SCRIPT CAPITAL F">&#8497;</button>
            <button title="TURNED CAPITAL F">&#8498;</button>
            <button title="SCRIPT CAPITAL M">&#8499;</button>
            <button title="SCRIPT SMALL O">&#8500;</button>
            <button title="ALEF SYMBOL">&alefsym;</button>
            <button title="BET SYMBOL">&#8502;</button>
            <button title="GIMEL SYMBOL">&#8503;</button>
            <button title="DALET SYMBOL">&#8504;</button>
            <button title="INFORMATION SOURCE">&#8505;</button>
            <button title="ROTATED CAPITAL Q">&#8506;</button>
            <button title="FACSIMILE SIGN">&#8507;</button>
            <button title="DOUBLE-STRUCK SMALL PI">&#8508;</button>
            <button title="DOUBLE-STRUCK SMALL GAMMA">&#8509;</button>
            <button title="DOUBLE-STRUCK CAPITAL GAMMA">&#8510;</button>
            <button title="DOUBLE-STRUCK CAPITAL PI">&#8511;</button>
            <button title="DOUBLE-STRUCK N-ARY SUMMATION">&#8512;</button>
            <button title="TURNED SANS-SERIF CAPITAL G">&#8513;</button>
            <button title="TURNED SANS-SERIF CAPITAL L">&#8514;</button>
            <button title="REVERSED SANS-SERIF CAPITAL L">&#8515;</button>
            <button title="TURNED SANS-SERIF CAPITAL Y">&#8516;</button>
            <button title="DOUBLE-STRUCK ITALIC CAPITAL D">&#8517;</button>
            <button title="DOUBLE-STRUCK ITALIC SMALL D">&#8518;</button>
            <button title="DOUBLE-STRUCK ITALIC SMALL E">&#8519;</button>
            <button title="DOUBLE-STRUCK ITALIC SMALL I">&#8520;</button>
            <button title="DOUBLE-STRUCK ITALIC SMALL J">&#8521;</button>
            <button title="PROPERTY LINE">&#8522;</button>
            <button title="TURNED AMPERSAND">&#8523;</button>
            <button title="PER SIGN">&#8524;</button>
            <button title="AKTIESELSKAB">&#8525;</button>
            <button title="TURNED SMALL F">&#8526;</button>
            <button title="SYMBOL FOR SAMARITAN SOURCE">&#8527;</button>
            
        </div>
        
        <div id="divMathOperators" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Math Operators https://www.w3schools.com/charsets/ref_utf_math.asp -->
            <button title="FOR ALL">&forall;</button>
            <button title="COMPLEMENT">&#8705;</button>
            <button title="PARTIAL DIFFERENTIAL">&part;</button>
            <button title="THERE EXISTS">&exist;</button>
            <button title="THERE DOES NOT EXIST">&#8708;</button>
            <button title="EMPTY SET">&empty;</button>
            <button title="INCREMENT">&#8710;</button>
            <button title="NABLA">&nabla;</button>
            <button title="ELEMENT OF">&isin;</button>
            <button title="NOT AN ELEMENT OF">&notin;</button>
            <button title="SMALL ELEMENT OF">&#8714;</button>
            <button title="CONTAINS AS MEMBER">&ni;</button>
            <button title="DOES NOT CONTAIN AS MEMBER">&#8716;</button>
            <button title="SMALL CONTAINS AS MEMBER">&#8717;</button>
            <button title="END OF PROOF">&#8718;</button>
            <button title="N-ARY PRODUCT">&prod;</button>
            <button title="N-ARY COPRODUCT">&#8720;</button>
            <button title="N-ARY SUMMATION">&sum;</button>
            <button title="MINUS SIGN">&minus;</button>
            <button title="MINUS-OR-PLUS SIGN">&#8723;</button>
            <button title="DOT PLUS">&#8724;</button>
            <button title="DIVISION SLASH">&#8725;</button>
            <button title="SET MINUS">&#8726;</button>
            <button title="ASTERISK OPERATOR">&lowast;</button>
            <button title="RING OPERATOR">&#8728;</button>
            <button title="BULLET OPERATOR">&#8729;</button>
            <button title="SQUARE ROOT">&radic;</button>
            <button title="CUBE ROOT">&#8731;</button>
            <button title="FOURTH ROOT">&#8732;</button>
            <button title="PROPORTIONAL TO">&prop;</button>
            <button title="INFINITY">&infin;</button>
            <button title="RIGHT ANGLE">&#8735;</button>
            <button title="ANGLE">&ang;</button>
            <button title="MEASURED ANGLE">&#8737;</button>
            <button title="SPHERICAL ANGLE">&#8738;</button>
            <button title="DIVIDES">&#8739;</button>
            <button title="DOES NOT DIVIDE">&#8740;</button>
            <button title="PARALLEL TO">&#8741;</button>
            <button title="NOT PARALLEL TO">&#8742;</button>
            <button title="LOGICAL AND">&and;</button>
            <button title="LOGICAL OR">&or;</button>
            <button title="INTERSECTION">&cap;</button>
            <button title="UNION">&cup;</button>
            <button title="INTEGRAL">&int;</button>
            <button title="DOUBLE INTEGRAL">&#8748;</button>
            <button title="TRIPLE INTEGRAL">&#8749;</button>
            <button title="CONTOUR INTEGRAL">&#8750;</button>
            <button title="SURFACE INTEGRAL">&#8751;</button>
            <button title="VOLUME INTEGRAL">&#8752;</button>
            <button title="CLOCKWISE INTEGRAL">&#8753;</button>
            <button title="CLOCKWISE CONTOUR INTEGRAL">&#8754;</button>
            <button title="ANTICLOCKWISE CONTOUR INTEGRAL">&#8755;</button>
            <button title="THEREFORE">&there4;</button>
            <button title="BECAUSE">&#8757;</button>
            <button title="RATIO">&#8758;</button>
            <button title="PROPORTION">&#8759;</button>
            <button title="DOT MINUS">&#8760;</button>
            <button title="EXCESS">&#8761;</button>
            <button title="GEOMETRIC PROPORTION">&#8762;</button>
            <button title="HOMOTHETIC">&#8763;</button>
            <button title="TILDE OPERATOR">&sim;</button>
            <button title="REVERSED TILDE">&#8765;</button>
            <button title="INVERTED LAZY S">&#8766;</button>
            <button title="SINE WAVE">&#8767;</button>
            <button title="WREATH PRODUCT">&#8768;</button>
            <button title="NOT TILDE">&#8769;</button>
            <button title="MINUS TILDE">&#8770;</button>
            <button title="ASYMPTOTICALLY EQUAL TO">&#8771;</button>
            <button title="NOT ASYMPTOTICALLY EQUAL TO">&#8772;</button>
            <button title="APPROXIMATELY EQUAL TO">&cong;</button>
            <button title="APPROXIMATELY BUT NOT ACTUALLY EQUAL TO">&#8774;</button>
            <button title="NEITHER APPROXIMATELY NOR ACTUALLY EQUAL TO">&#8775;</button>
            <button title="ALMOST EQUAL TO">&asymp;</button>
            <button title="NOT ALMOST EQUAL TO">&#8777;</button>
            <button title="ALMOST EQUAL OR EQUAL TO">&#8778;</button>
            <button title="TRIPLE TILDE">&#8779;</button>
            <button title="ALL EQUAL TO">&#8780;</button>
            <button title="EQUIVALENT TO">&#8781;</button>
            <button title="GEOMETRICALLY EQUIVALENT TO">&#8782;</button>
            <button title="DIFFERENCE BETWEEN">&#8783;</button>
            <button title="APPROACHES THE LIMIT">&#8784;</button>
            <button title="GEOMETRICALLY EQUAL TO">&#8785;</button>
            <button title="APPROXIMATELY EQUAL TO OR THE IMAGE OF">&#8786;</button>
            <button title="IMAGE OF OR APPROXIMATELY EQUAL TO">&#8787;</button>
            <button title="COLON EQUALS">&#8788;</button>
            <button title="EQUALS COLON">&#8789;</button>
            <button title="RING IN EQUAL TO">&#8790;</button>
            <button title="RING EQUAL TO">&#8791;</button>
            <button title="CORRESPONDS TO">&#8792;</button>
            <button title="ESTIMATES">&#8793;</button>
            <button title="EQUIANGULAR TO">&#8794;</button>
            <button title="STAR EQUALS">&#8795;</button>
            <button title="DELTA EQUAL TO">&#8796;</button>
            <button title="EQUAL TO BY DEFINITION">&#8797;</button>
            <button title="MEASURED BY">&#8798;</button>
            <button title="QUESTIONED EQUAL TO">&#8799;</button>
            <button title="NOT EQUAL TO">&ne;</button>
            <button title="IDENTICAL TO">&equiv;</button>
            <button title="NOT IDENTICAL TO">&#8802;</button>
            <button title="STRICTLY EQUIVALENT TO">&#8803;</button>
            <button title="LESS-THAN OR EQUAL TO">&le;</button>
            <button title="GREATER-THAN OR EQUAL TO">&ge;</button>
            <button title="LESS-THAN OVER EQUAL TO">&#8806;</button>
            <button title="GREATER-THAN OVER EQUAL TO">&#8807;</button>
            <button title="LESS-THAN BUT NOT EQUAL TO">&#8808;</button>
            <button title="GREATER-THAN BUT NOT EQUAL TO">&#8809;</button>
            <button title="MUCH LESS-THAN">&#8810;</button>
            <button title="MUCH GREATER-THAN">&#8811;</button>
            <button title="BETWEEN">&#8812;</button>
            <button title="NOT EQUIVALENT TO">&#8813;</button>
            <button title="NOT LESS-THAN">&#8814;</button>
            <button title="NOT GREATER-THAN">&#8815;</button>
            <button title="NEITHER LESS-THAN NOR EQUAL TO">&#8816;</button>
            <button title="NEITHER GREATER-THAN NOR EQUAL TO">&#8817;</button>
            <button title="LESS-THAN OR EQUIVALENT TO">&#8818;</button>
            <button title="GREATER-THAN OR EQUIVALENT TO">&#8819;</button>
            <button title="NEITHER LESS-THAN NOR EQUIVALENT TO">&#8820;</button>
            <button title="NEITHER GREATER-THAN NOR EQUIVALENT TO">&#8821;</button>
            <button title="LESS-THAN OR GREATER-THAN">&#8822;</button>
            <button title="GREATER-THAN OR LESS-THAN">&#8823;</button>
            <button title="NEITHER LESS-THAN NOR GREATER-THAN">&#8824;</button>
            <button title="NEITHER GREATER-THAN NOR LESS-THAN">&#8825;</button>
            <button title="PRECEDES">&#8826;</button>
            <button title="SUCCEEDS">&#8827;</button>
            <button title="PRECEDES OR EQUAL TO">&#8828;</button>
            <button title="SUCCEEDS OR EQUAL TO">&#8829;</button>
            <button title="PRECEDES OR EQUIVALENT TO">&#8830;</button>
            <button title="SUCCEEDS OR EQUIVALENT TO">&#8831;</button>
            <button title="DOES NOT PRECEDE">&#8832;</button>
            <button title="DOES NOT SUCCEED">&#8833;</button>
            <button title="SUBSET OF">&sub;</button>
            <button title="SUPERSET OF">&sup;</button>
            <button title="NOT A SUBSET OF">&nsub;</button>
            <button title="NOT A SUPERSET OF">&#8837;</button>
            <button title="SUBSET OF OR EQUAL TO">&sube;</button>
            <button title="SUPERSET OF OR EQUAL TO">&supe;</button>
            <button title="NEITHER A SUBSET OF NOR EQUAL TO">&#8840;</button>
            <button title="NEITHER A SUPERSET OF NOR EQUAL TO">&#8841;</button>
            <button title="SUBSET OF WITH NOT EQUAL TO">&#8842;</button>
            <button title="SUPERSET OF WITH NOT EQUAL TO">&#8843;</button>
            <button title="MULTISET">&#8844;</button>
            <button title="MULTISET MULTIPLICATION">&#8845;</button>
            <button title="MULTISET UNION">&#8846;</button>
            <button title="SQUARE IMAGE OF">&#8847;</button>
            <button title="SQUARE ORIGINAL OF">&#8848;</button>
            <button title="SQUARE IMAGE OF OR EQUAL TO">&#8849;</button>
            <button title="SQUARE ORIGINAL OF OR EQUAL TO">&#8850;</button>
            <button title="SQUARE CAP">&#8851;</button>
            <button title="SQUARE CUP">&#8852;</button>
            <button title="CIRCLED PLUS">&oplus;</button>
            <button title="CIRCLED MINUS">&#8854;</button>
            <button title="CIRCLED TIMES">&otimes;</button>
            <button title="CIRCLED DIVISION SLASH">&#8856;</button>
            <button title="CIRCLED DOT OPERATOR">&#8857;</button>
            <button title="CIRCLED RING OPERATOR">&#8858;</button>
            <button title="CIRCLED ASTERISK OPERATOR">&#8859;</button>
            <button title="CIRCLED EQUALS">&#8860;</button>
            <button title="CIRCLED DASH">&#8861;</button>
            <button title="SQUARED PLUS">&#8862;</button>
            <button title="SQUARED MINUS">&#8863;</button>
            <button title="SQUARED TIMES">&#8864;</button>
            <button title="SQUARED DOT OPERATOR">&#8865;</button>
            <button title="RIGHT TACK">&#8866;</button>
            <button title="LEFT TACK">&#8867;</button>
            <button title="DOWN TACK">&#8868;</button>
            <button title="UP TACK">&perp;</button>
            <button title="ASSERTION">&#8870;</button>
            <button title="MODELS">&#8871;</button>
            <button title="TRUE">&#8872;</button>
            <button title="FORCES">&#8873;</button>
            <button title="TRIPLE VERTICAL BAR RIGHT TURNSTILE">&#8874;</button>
            <button title="DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE">&#8875;</button>
            <button title="DOES NOT PROVE">&#8876;</button>
            <button title="NOT TRUE">&#8877;</button>
            <button title="DOES NOT FORCE">&#8878;</button>
            <button title="NEGATED DOUBLE VERTICAL BAR DOUBLE RIGHT TURNSTILE">&#8879;</button>
            <button title="PRECEDES UNDER RELATION">&#8880;</button>
            <button title="SUCCEEDS UNDER RELATION">&#8881;</button>
            <button title="NORMAL SUBGROUP OF">&#8882;</button>
            <button title="CONTAINS AS NORMAL SUBGROUP">&#8883;</button>
            <button title="NORMAL SUBGROUP OF OR EQUAL TO">&#8884;</button>
            <button title="CONTAINS AS NORMAL SUBGROUP OR EQUAL TO">&#8885;</button>
            <button title="ORIGINAL OF">&#8886;</button>
            <button title="IMAGE OF">&#8887;</button>
            <button title="MULTIMAP">&#8888;</button>
            <button title="HERMITIAN CONJUGATE MATRIX">&#8889;</button>
            <button title="INTERCALATE">&#8890;</button>
            <button title="XOR">&#8891;</button>
            <button title="NAND">&#8892;</button>
            <button title="NOR">&#8893;</button>
            <button title="RIGHT ANGLE WITH ARC">&#8894;</button>
            <button title="RIGHT TRIANGLE">&#8895;</button>
            <button title="N-ARY LOGICAL AND">&#8896;</button>
            <button title="N-ARY LOGICAL OR">&#8897;</button>
            <button title="N-ARY INTERSECTION">&#8898;</button>
            <button title="N-ARY UNION">&#8899;</button>
            <button title="DIAMOND OPERATOR">&#8900;</button>
            <button title="DOT OPERATOR">&sdot;</button>
            <button title="STAR OPERATOR">&#8902;</button>
            <button title="DIVISION TIMES">&#8903;</button>
            <button title="BOWTIE">&#8904;</button>
            <button title="LEFT NORMAL FACTOR SEMIDIRECT PRODUCT">&#8905;</button>
            <button title="RIGHT NORMAL FACTOR SEMIDIRECT PRODUCT">&#8906;</button>
            <button title="LEFT SEMIDIRECT PRODUCT">&#8907;</button>
            <button title="RIGHT SEMIDIRECT PRODUCT">&#8908;</button>
            <button title="REVERSED TILDE EQUALS">&#8909;</button>
            <button title="CURLY LOGICAL OR">&#8910;</button>
            <button title="CURLY LOGICAL AND">&#8911;</button>
            <button title="DOUBLE SUBSET">&#8912;</button>
            <button title="DOUBLE SUPERSET">&#8913;</button>
            <button title="DOUBLE INTERSECTION">&#8914;</button>
            <button title="DOUBLE UNION">&#8915;</button>
            <button title="PITCHFORK">&#8916;</button>
            <button title="EQUAL AND PARALLEL TO">&#8917;</button>
            <button title="LESS-THAN WITH DOT">&#8918;</button>
            <button title="GREATER-THAN WITH DOT">&#8919;</button>
            <button title="VERY MUCH LESS-THAN">&#8920;</button>
            <button title="VERY MUCH GREATER-THAN">&#8921;</button>
            <button title="LESS-THAN EQUAL TO OR GREATER-THAN">&#8922;</button>
            <button title="GREATER-THAN EQUAL TO OR LESS-THAN">&#8923;</button>
            <button title="EQUAL TO OR LESS-THAN">&#8924;</button>
            <button title="EQUAL TO OR GREATER-THAN">&#8925;</button>
            <button title="EQUAL TO OR PRECEDES">&#8926;</button>
            <button title="EQUAL TO OR SUCCEEDS">&#8927;</button>
            <button title="DOES NOT PRECEDE OR EQUAL">&#8928;</button>
            <button title="DOES NOT SUCCEED OR EQUAL">&#8929;</button>
            <button title="NOT SQUARE IMAGE OF OR EQUAL TO">&#8930;</button>
            <button title="NOT SQUARE ORIGINAL OF OR EQUAL TO">&#8931;</button>
            <button title="SQUARE IMAGE OF OR NOT EQUAL TO">&#8932;</button>
            <button title="SQUARE ORIGINAL OF OR NOT EQUAL TO">&#8933;</button>
            <button title="LESS-THAN BUT NOT EQUIVALENT TO">&#8934;</button>
            <button title="GREATER-THAN BUT NOT EQUIVALENT TO">&#8935;</button>
            <button title="PRECEDES BUT NOT EQUIVALENT TO">&#8936;</button>
            <button title="SUCCEEDS BUT NOT EQUIVALENT TO">&#8937;</button>
            <button title="NOT NORMAL SUBGROUP OF">&#8938;</button>
            <button title="DOES NOT CONTAIN AS NORMAL SUBGROUP">&#8939;</button>
            <button title="NOT NORMAL SUBGROUP OF OR EQUAL TO">&#8940;</button>
            <button title="DOES NOT CONTAIN AS NORMAL SUBGROUP OR EQUAL">&#8941;</button>
            <button title="VERTICAL ELLIPSIS">&#8942;</button>
            <button title="MIDLINE HORIZONTAL ELLIPSIS">&#8943;</button>
            <button title="UP RIGHT DIAGONAL ELLIPSIS">&#8944;</button>
            <button title="DOWN RIGHT DIAGONAL ELLIPSIS">&#8945;</button>
            <button title="ELEMENT OF WITH LONG HORIZONTAL STROKE">&#8946;</button>
            <button title="ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE">&#8947;</button>
            <button title="SMALL ELEMENT OF WITH VERTICAL BAR AT END OF HORIZONTAL STROKE">&#8948;</button>
            <button title="ELEMENT OF WITH DOT ABOVE">&#8949;</button>
            <button title="ELEMENT OF WITH OVERBAR">&#8950;</button>
            <button title="SMALL ELEMENT OF WITH OVERBAR">&#8951;</button>
            <button title="ELEMENT OF WITH UNDERBAR">&#8952;</button>
            <button title="ELEMENT OF WITH TWO HORIZONTAL STROKES">&#8953;</button>
            <button title="CONTAINS WITH LONG HORIZONTAL STROKE">&#8954;</button>
            <button title="CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE">&#8955;</button>
            <button title="SMALL CONTAINS WITH VERTICAL BAR AT END OF HORIZONTAL STROKE">&#8956;</button>
            <button title="CONTAINS WITH OVERBAR">&#8957;</button>
            <button title="SMALL CONTAINS WITH OVERBAR">&#8958;</button>
            <button title="Z NOTATION BAG MEMBERSHIP">&#8959;</button>
        </div>
        
        <div id="divMiscSymbols" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Misc Symbols https://www.w3schools.com/charsets/ref_utf_symbols.asp -->
            <button title="BLACK SUN WITH RAYS">&#9728;</button>
            <button title="CLOUD">&#9729;</button>
            <button title="UMBRELLA">&#9730;</button>
            <button title="SNOWMAN">&#9731;</button>
            <button title="COMET">&#9732;</button>
            <button title="BLACK STAR">&#9733;</button>
            <button title="WHITE STAR">&#9734;</button>
            <button title="LIGHTNING">&#9735;</button>
            <button title="THUNDERSTORM">&#9736;</button>
            <button title="SUN">&#9737;</button>
            <button title="ASCENDING NODE">&#9738;</button>
            <button title="DESCENDING NODE">&#9739;</button>
            <button title="CONJUNCTION">&#9740;</button>
            <button title="OPPOSITION">&#9741;</button>
            <button title="BLACK TELEPHONE">&#9742;</button>
            <button title="WHITE TELEPHONE">&#9743;</button>
            <button title="BALLOT BOX">&#9744;</button>
            <button title="BALLOT BOX WITH CHECK">&#9745;</button>
            <button title="BALLOT BOX WITH X">&#9746;</button>
            <button title="SALTIRE">&#9747;</button>
            <button title="UMBRELLA WITH RAIN DROPS">&#9748;</button>
            <button title="HOT BEVERAGE">&#9749;</button>
            <button title="WHITE SHOGI PIECE">&#9750;</button>
            <button title="BLACK SHOGI PIECE">&#9751;</button>
            <button title="SHAMROCK">&#9752;</button>
            <button title="REVERSED ROTATED FLORAL HEART BULLET">&#9753;</button>
            <button title="BLACK LEFT POINTING INDEX">&#9754;</button>
            <button title="BLACK RIGHT POINTING INDEX">&#9755;</button>
            <button title="WHITE LEFT POINTING INDEX">&#9756;</button>
            <button title="WHITE UP POINTING INDEX">&#9757;</button>
            <button title="WHITE RIGHT POINTING INDEX">&#9758;</button>
            <button title="WHITE DOWN POINTING INDEX">&#9759;</button>
            <button title="SKULL AND CROSSBONES">&#9760;</button>
            <button title="CAUTION SIGN">&#9761;</button>
            <button title="RADIOACTIVE SIGN">&#9762;</button>
            <button title="BIOHAZARD SIGN">&#9763;</button>
            <button title="WHITE SUN WITH RAYS">&#9788;</button>
            <button title="FIRST QUARTER MOON">&#9789;</button>
            <button title="LAST QUARTER MOON">&#9790;</button>
            <button title="MERCURY">&#9791;</button>
            <button title="FEMALE SIGN">&#9792;</button>
            <button title="EARTH">&#9793;</button>
            <button title="MALE SIGN">&#9794;</button>
            <button title="JUPITER">&#9795;</button>
            <button title="SATURN">&#9796;</button>
            <button title="URANUS">&#9797;</button>
            <button title="NEPTUNE">&#9798;</button>
            <button title="PLUTO">&#9799;</button>
            <button title="ARIES">&#9800;</button>
            <button title="TAURUS">&#9801;</button>
            <button title="GEMINI">&#9802;</button>
            <button title="CANCER">&#9803;</button>
            <button title="LEO">&#9804;</button>
            <button title="VIRGO">&#9805;</button>
            <button title="LIBRA">&#9806;</button>
            <button title="SCORPIUS">&#9807;</button>
            <button title="SAGITTARIUS">&#9808;</button>
            <button title="CAPRICORN">&#9809;</button>
            <button title="AQUARIUS">&#9810;</button>
            <button title="PISCES">&#9811;</button>
            <button title="WHITE CHESS KING">&#9812;</button>
            <button title="WHITE CHESS QUEEN">&#9813;</button>
            <button title="WHITE CHESS ROOK">&#9814;</button>
            <button title="WHITE CHESS BISHOP">&#9815;</button>
            <button title="WHITE CHESS KNIGHT">&#9816;</button>
            <button title="WHITE CHESS PAWN">&#9817;</button>
            <button title="BLACK CHESS KING">&#9818;</button>
            <button title="BLACK CHESS QUEEN">&#9819;</button>
            <button title="BLACK CHESS ROOK">&#9820;</button>
            <button title="BLACK CHESS BISHOP">&#9821;</button>
            <button title="BLACK CHESS KNIGHT">&#9822;</button>
            <button title="BLACK CHESS PAWN">&#9823;</button>
            <button title="BLACK SPADE SUIT">&spades;</button>
            <button title="WHITE HEART SUIT">&#9825;</button>
            <button title="WHITE DIAMOND SUIT">&#9826;</button>
            <button title="BLACK CLUB SUIT">&clubs;</button>
            <button title="WHITE SPADE SUIT">&#9828;</button>
            <button title="BLACK HEART SUIT">&hearts;</button>
            <button title="BLACK DIAMOND SUIT">&diams;</button>
            <button title="WHITE CLUB SUIT">&#9831;</button>
            <button title="HOT SPRINGS">&#9832;</button>
            <button title="QUARTER NOTE">&#9833;</button>
            <button title="EIGHTH NOTE">&#9834;</button>
            <button title="BEAMED EIGHTH NOTES">&#9835;</button>
            <button title="BEAMED SIXTEENTH NOTES">&#9836;</button>
            <button title="MUSIC FLAT SIGN">&#9837;</button>
            <button title="MUSIC NATURAL SIGN">&#9838;</button>
            <button title="MUSIC SHARP SIGN">&#9839;</button>
            <button title="WEST SYRIAC CROSS">&#9840;</button>
            <button title="EAST SYRIAC CROSS">&#9841;</button>
            <button title="UNIVERSAL RECYCLING SYMBOL">&#9842;</button>
            <button title="RECYCLING SYMBOL FOR TYPE-1 PLASTICS">&#9843;</button>
            <button title="RECYCLING SYMBOL FOR TYPE-2 PLASTICS">&#9844;</button>
            <button title="RECYCLING SYMBOL FOR TYPE-3 PLASTICS">&#9845;</button>
            <button title="RECYCLING SYMBOL FOR TYPE-4 PLASTICS">&#9846;</button>
            <button title="RECYCLING SYMBOL FOR TYPE-5 PLASTICS">&#9847;</button>
            <button title="RECYCLING SYMBOL FOR TYPE-6 PLASTICS">&#9848;</button>
            <button title="RECYCLING SYMBOL FOR TYPE-7 PLASTICS">&#9849;</button>
            <button title="RECYCLING SYMBOL FOR GENERIC MATERIALS">&#9850;</button>
            <button title="BLACK UNIVERSAL RECYCLING SYMBOL">&#9851;</button>
            <button title="RECYCLED PAPER SYMBOL">&#9852;</button>
            <button title="PARTIALLY-RECYCLED PAPER SYMBOL">&#9853;</button>
            <button title="PERMANENT PAPER SIGN">&#9854;</button>
            <button title="WHEELCHAIR SYMBOL">&#9855;</button>
            <button title="DIE FACE-1">&#9856;</button>
            <button title="DIE FACE-2">&#9857;</button>
            <button title="DIE FACE-3">&#9858;</button>
            <button title="DIE FACE-4">&#9859;</button>
            <button title="DIE FACE-5">&#9860;</button>
            <button title="DIE FACE-6">&#9861;</button>
            <button title="WHITE CIRCLE WITH DOT RIGHT">&#9862;</button>
            <button title="WHITE CIRCLE WITH TWO DOTS">&#9863;</button>
            <button title="BLACK CIRCLE WITH WHITE DOT RIGHT">&#9864;</button>
            <button title="BLACK CIRCLE WITH TWO WHITE DOTS">&#9865;</button>
            <button title="MONOGRAM FOR YANG">&#9866;</button>
            <button title="MONOGRAM FOR YIN">&#9867;</button>
            <button title="DIGRAM FOR GREATER YANG">&#9868;</button>
            <button title="DIGRAM FOR LESSER YIN">&#9869;</button>
            <button title="DIGRAM FOR LESSER YANG">&#9870;</button>
            <button title="DIGRAM FOR GREATER YIN">&#9871;</button>
            <button title="WHITE FLAG">&#9872;</button>
            <button title="BLACK FLAG">&#9873;</button>
            <button title="HAMMER AND PICK">&#9874;</button>
            <button title="ANCHOR">&#9875;</button>
            <button title="CROSSED SWORDS">&#9876;</button>
            <button title="STAFF OF AESCULAPIUS">&#9877;</button>
            <button title="SCALES">&#9878;</button>
            <button title="ALEMBIC">&#9879;</button>
            <button title="FLOWER">&#9880;</button>
            <button title="GEAR">&#9881;</button>
            <button title="STAFF OF HERMES">&#9882;</button>
            <button title="ATOM SYMBOL">&#9883;</button>
            <button title="FLEUR-DE-LIS">&#9884;</button>
            <button title="OUTLINED WHITE STAR">&#9885;</button>
            <button title="THREE LINES CONVERGING RIGHT">&#9886;</button>
            <button title="THREE LINES CONVERGING LEFT">&#9887;</button>
            <button title="WARNING SIGN">&#9888;</button>
            <button title="HIGH VOLTAGE SIGN">&#9889;</button>
            <button title="DOUBLED FEMALE SIGN">&#9890;</button>
            <button title="DOUBLED MALE SIGN">&#9891;</button>
            <button title="INTERLOCKED FEMALE AND MALE SIGN">&#9892;</button>
            <button title="MALE AND FEMALE SIGN">&#9893;</button>
            <button title="MALE WITH STROKE SIGN">&#9894;</button>
            <button title="MALE WITH STROKE AND MALE AND FEMALE SIGN">&#9895;</button>
            <button title="VERTICAL MALE WITH STROKE SIGN">&#9896;</button>
            <button title="HORIZONTAL MALE WITH STROKE SIGN">&#9897;</button>
            <button title="MEDIUM WHITE CIRCLE">&#9898;</button>
            <button title="MEDIUM BLACK CIRCLE">&#9899;</button>
            <button title="MEDIUM SMALL WHITE CIRCLE">&#9900;</button>
            <button title="MARRIAGE SYMBOL">&#9901;</button>
            <button title="DIVORCE SYMBOL">&#9902;</button>
            <button title="UNMARRIED PARTNERSHIP SYMBOL">&#9903;</button>
        </div>
        
        <div id="divCyrillicBasic" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Cyrillic: https://www.w3schools.com/charsets/ref_utf_cyrillic.asp -->
            <button title="CYRILLIC CAPITAL LETTER IE WITH GRAVE">&#1024;</button>
            <button title="CYRILLIC CAPITAL LETTER IO">&#1025;</button>
            <button title="CYRILLIC CAPITAL LETTER DJE">&#1026;</button>
            <button title="CYRILLIC CAPITAL LETTER GJE">&#1027;</button>
            <button title="CYRILLIC CAPITAL LETTER UKRAINIAN IE">&#1028;</button>
            <button title="CYRILLIC CAPITAL LETTER DZE">&#1029;</button>
            <button title="CYRILLIC CAPITAL LETTER BYELORUSSIAN-UKRAINIAN I">&#1030;</button>
            <button title="CYRILLIC CAPITAL LETTER YI">&#1031;</button>
            <button title="CYRILLIC CAPITAL LETTER JE">&#1032;</button>
            <button title="CYRILLIC CAPITAL LETTER LJE">&#1033;</button>
            <button title="CYRILLIC CAPITAL LETTER NJE">&#1034;</button>
            <button title="CYRILLIC CAPITAL LETTER TSHE">&#1035;</button>
            <button title="CYRILLIC CAPITAL LETTER KJE">&#1036;</button>
            <button title="CYRILLIC CAPITAL LETTER I WITH GRAVE">&#1037;</button>
            <button title="CYRILLIC CAPITAL LETTER SHORT U">&#1038;</button>
            <button title="CYRILLIC CAPITAL LETTER DZHE">&#1039;</button>
            <button title="CYRILLIC CAPITAL LETTER A">&#1040;</button>
            <button title="CYRILLIC CAPITAL LETTER BE">&#1041;</button>
            <button title="CYRILLIC CAPITAL LETTER VE">&#1042;</button>
            <button title="CYRILLIC CAPITAL LETTER GHE">&#1043;</button>
            <button title="CYRILLIC CAPITAL LETTER DE">&#1044;</button>
            <button title="CYRILLIC CAPITAL LETTER IE">&#1045;</button>
            <button title="CYRILLIC CAPITAL LETTER ZHE">&#1046;</button>
            <button title="CYRILLIC CAPITAL LETTER ZE">&#1047;</button>
            <button title="CYRILLIC CAPITAL LETTER I">&#1048;</button>
            <button title="CYRILLIC CAPITAL LETTER SHORT I">&#1049;</button>
            <button title="CYRILLIC CAPITAL LETTER KA">&#1050;</button>
            <button title="CYRILLIC CAPITAL LETTER EL">&#1051;</button>
            <button title="CYRILLIC CAPITAL LETTER EM">&#1052;</button>
            <button title="CYRILLIC CAPITAL LETTER EN">&#1053;</button>
            <button title="CYRILLIC CAPITAL LETTER O">&#1054;</button>
            <button title="CYRILLIC CAPITAL LETTER PE">&#1055;</button>
            <button title="CYRILLIC CAPITAL LETTER ER">&#1056;</button>
            <button title="CYRILLIC CAPITAL LETTER ES">&#1057;</button>
            <button title="CYRILLIC CAPITAL LETTER TE">&#1058;</button>
            <button title="CYRILLIC CAPITAL LETTER U">&#1059;</button>
            <button title="CYRILLIC CAPITAL LETTER EF">&#1060;</button>
            <button title="CYRILLIC CAPITAL LETTER HA">&#1061;</button>
            <button title="CYRILLIC CAPITAL LETTER TSE">&#1062;</button>
            <button title="CYRILLIC CAPITAL LETTER CHE">&#1063;</button>
            <button title="CYRILLIC CAPITAL LETTER SHA">&#1064;</button>
            <button title="CYRILLIC CAPITAL LETTER SHCHA">&#1065;</button>
            <button title="CYRILLIC CAPITAL LETTER HARD SIGN">&#1066;</button>
            <button title="CYRILLIC CAPITAL LETTER YERU">&#1067;</button>
            <button title="CYRILLIC CAPITAL LETTER SOFT SIGN">&#1068;</button>
            <button title="CYRILLIC CAPITAL LETTER E">&#1069;</button>
            <button title="CYRILLIC CAPITAL LETTER YU">&#1070;</button>
            <button title="CYRILLIC CAPITAL LETTER YA">&#1071;</button>
            <button title="CYRILLIC SMALL LETTER A">&#1072;</button>
            <button title="CYRILLIC SMALL LETTER BE">&#1073;</button>
            <button title="CYRILLIC SMALL LETTER VE">&#1074;</button>
            <button title="CYRILLIC SMALL LETTER GHE">&#1075;</button>
            <button title="CYRILLIC SMALL LETTER DE">&#1076;</button>
            <button title="CYRILLIC SMALL LETTER IE">&#1077;</button>
            <button title="CYRILLIC SMALL LETTER ZHE">&#1078;</button>
            <button title="CYRILLIC SMALL LETTER ZE">&#1079;</button>
            <button title="CYRILLIC SMALL LETTER I">&#1080;</button>
            <button title="CYRILLIC SMALL LETTER SHORT I">&#1081;</button>
            <button title="CYRILLIC SMALL LETTER KA">&#1082;</button>
            <button title="CYRILLIC SMALL LETTER EL">&#1083;</button>
            <button title="CYRILLIC SMALL LETTER EM">&#1084;</button>
            <button title="CYRILLIC SMALL LETTER EN">&#1085;</button>
            <button title="CYRILLIC SMALL LETTER O">&#1086;</button>
            <button title="CYRILLIC SMALL LETTER PE">&#1087;</button>
            <button title="CYRILLIC SMALL LETTER ER">&#1088;</button>
            <button title="CYRILLIC SMALL LETTER ES">&#1089;</button>
            <button title="CYRILLIC SMALL LETTER TE">&#1090;</button>
            <button title="CYRILLIC SMALL LETTER U">&#1091;</button>
            <button title="CYRILLIC SMALL LETTER EF">&#1092;</button>
            <button title="CYRILLIC SMALL LETTER HA">&#1093;</button>
            <button title="CYRILLIC SMALL LETTER TSE">&#1094;</button>
            <button title="CYRILLIC SMALL LETTER CHE">&#1095;</button>
            <button title="CYRILLIC SMALL LETTER SHA">&#1096;</button>
            <button title="CYRILLIC SMALL LETTER SHCHA">&#1097;</button>
            <button title="CYRILLIC SMALL LETTER HARD SIGN">&#1098;</button>
            <button title="CYRILLIC SMALL LETTER YERU">&#1099;</button>
            <button title="CYRILLIC SMALL LETTER SOFT SIGN">&#1100;</button>
            <button title="CYRILLIC SMALL LETTER E">&#1101;</button>
            <button title="CYRILLIC SMALL LETTER YU">&#1102;</button>
            <button title="CYRILLIC SMALL LETTER YA">&#1103;</button>
            <button title="CYRILLIC SMALL LETTER IE WITH GRAVE">&#1104;</button>
            <button title="CYRILLIC SMALL LETTER IO">&#1105;</button>
            <button title="CYRILLIC SMALL LETTER DJE">&#1106;</button>
            <button title="CYRILLIC SMALL LETTER GJE">&#1107;</button>
            <button title="CYRILLIC SMALL LETTER UKRAINIAN IE">&#1108;</button>
            <button title="CYRILLIC SMALL LETTER DZE">&#1109;</button>
            <button title="CYRILLIC SMALL LETTER BYELORUSSIAN-UKRAINIAN I">&#1110;</button>
            <button title="CYRILLIC SMALL LETTER YI">&#1111;</button>
            <button title="CYRILLIC SMALL LETTER JE">&#1112;</button>
            <button title="CYRILLIC SMALL LETTER LJE">&#1113;</button>
            <button title="CYRILLIC SMALL LETTER NJE">&#1114;</button>
            <button title="CYRILLIC SMALL LETTER TSHE">&#1115;</button>
            <button title="CYRILLIC SMALL LETTER KJE">&#1116;</button>
            <button title="CYRILLIC SMALL LETTER I WITH GRAVE">&#1117;</button>
            <button title="CYRILLIC SMALL LETTER SHORT U">&#1118;</button>
            <button title="CYRILLIC SMALL LETTER DZHE">&#1119;</button>
            <button title="CYRILLIC CAPITAL LETTER OMEGA">&#1120;</button>
            <button title="CYRILLIC SMALL LETTER OMEGA">&#1121;</button>
            <button title="CYRILLIC CAPITAL LETTER YAT">&#1122;</button>
            <button title="CYRILLIC SMALL LETTER YAT">&#1123;</button>
            <button title="CYRILLIC CAPITAL LETTER IOTIFIED E">&#1124;</button>
            <button title="CYRILLIC SMALL LETTER IOTIFIED E">&#1125;</button>
            <button title="CYRILLIC CAPITAL LETTER LITTLE YUS">&#1126;</button>
            <button title="CYRILLIC SMALL LETTER LITTLE YUS">&#1127;</button>
            <button title="CYRILLIC CAPITAL LETTER IOTIFIED LITTLE YUS">&#1128;</button>
            <button title="CYRILLIC SMALL LETTER IOTIFIED LITTLE YUS">&#1129;</button>
            <button title="CYRILLIC CAPITAL LETTER BIG YUS">&#1130;</button>
            <button title="CYRILLIC SMALL LETTER BIG YUS">&#1131;</button>
            <button title="CYRILLIC CAPITAL LETTER IOTIFIED BIG YUS">&#1132;</button>
            <button title="CYRILLIC SMALL LETTER IOTIFIED BIG YUS">&#1133;</button>
            <button title="CYRILLIC CAPITAL LETTER KSI">&#1134;</button>
            <button title="CYRILLIC SMALL LETTER KSI">&#1135;</button>
            <button title="CYRILLIC CAPITAL LETTER PSI">&#1136;</button>
            <button title="CYRILLIC SMALL LETTER PSI">&#1137;</button>
            <button title="CYRILLIC CAPITAL LETTER FITA">&#1138;</button>
            <button title="CYRILLIC SMALL LETTER FITA">&#1139;</button>
            <button title="CYRILLIC CAPITAL LETTER IZHITSA">&#1140;</button>
            <button title="CYRILLIC SMALL LETTER IZHITSA">&#1141;</button>
            <button title="CYRILLIC CAPITAL LETTER IZHITSA WITH DOUBLE GRAVE ACCENT">&#1142;</button>
            <button title="CYRILLIC SMALL LETTER IZHITSA WITH DOUBLE GRAVE ACCENT">&#1143;</button>
            <button title="CYRILLIC CAPITAL LETTER UK">&#1144;</button>
            <button title="CYRILLIC SMALL LETTER UK">&#1145;</button>
            <button title="CYRILLIC CAPITAL LETTER ROUND OMEGA">&#1146;</button>
            <button title="CYRILLIC SMALL LETTER ROUND OMEGA">&#1147;</button>
            <button title="CYRILLIC CAPITAL LETTER OMEGA WITH TITLO">&#1148;</button>
            <button title="CYRILLIC SMALL LETTER OMEGA WITH TITLO">&#1149;</button>
            <button title="CYRILLIC CAPITAL LETTER OT">&#1150;</button>
            <button title="CYRILLIC SMALL LETTER OT">&#1151;</button>
            <button title="CYRILLIC CAPITAL LETTER KOPPA">&#1152;</button>
            <button title="CYRILLIC SMALL LETTER KOPPA">&#1153;</button>
            <button title="CYRILLIC THOUSANDS SIGN">&#1154;</button>
            <button title="COMBINING CYRILLIC TITLO (combined with о)">&#1155;</button>
            <button title="COMBINING CYRILLIC PALATALIZATION (combined with о)">&#1156;</button>
            <button title="COMBINING CYRILLIC DASIA PNEUMATA (combined with о)">&#1157;</button>
            <button title="COMBINING CYRILLIC PSILI PNEUMATA (combined with о)">&#1158;</button>
            <button title="COMBINING CYRILLIC POKRYTIE (combined with о)">&#1159;</button>
            <button title="COMBINING CYRILLIC HUNDRED THOUSANDS SIGN (combined with о)">&#1160;</button>
            <button title="COMBINING CYRILLIC MILLIONS SIGN (combined with о)">&#1161;</button>
            <button title="CYRILLIC CAPITAL LETTER SHORT I WITH TAIL">&#1162;</button>
            <button title="CYRILLIC SMALL LETTER SHORT I WITH TAIL">&#1163;</button>
            <button title="CYRILLIC CAPITAL LETTER SEMISOFT SIGN">&#1164;</button>
            <button title="CYRILLIC SMALL LETTER SEMISOFT SIGN">&#1165;</button>
            <button title="CYRILLIC CAPITAL LETTER ER WITH TICK">&#1166;</button>
            <button title="CYRILLIC SMALL LETTER ER WITH TICK">&#1167;</button>
            <button title="CYRILLIC CAPITAL LETTER GHE WITH UPTURN">&#1168;</button>
            <button title="CYRILLIC SMALL LETTER GHE WITH UPTURN">&#1169;</button>
            <button title="CYRILLIC CAPITAL LETTER GHE WITH STROKE">&#1170;</button>
            <button title="CYRILLIC SMALL LETTER GHE WITH STROKE">&#1171;</button>
            <button title="CYRILLIC CAPITAL LETTER GHE WITH MIDDLE HOOK">&#1172;</button>
            <button title="CYRILLIC SMALL LETTER GHE WITH MIDDLE HOOK">&#1173;</button>
            <button title="CYRILLIC CAPITAL LETTER ZHE WITH DESCENDER">&#1174;</button>
            <button title="CYRILLIC SMALL LETTER ZHE WITH DESCENDER">&#1175;</button>
            <button title="CYRILLIC CAPITAL LETTER ZE WITH DESCENDER">&#1176;</button>
            <button title="CYRILLIC SMALL LETTER ZE WITH DESCENDER">&#1177;</button>
            <button title="CYRILLIC CAPITAL LETTER KA WITH DESCENDER">&#1178;</button>
            <button title="CYRILLIC SMALL LETTER KA WITH DESCENDER">&#1179;</button>
            <button title="CYRILLIC CAPITAL LETTER KA WITH VERTICAL STROKE">&#1180;</button>
            <button title="CYRILLIC SMALL LETTER KA WITH VERTICAL STROKE">&#1181;</button>
            <button title="CYRILLIC CAPITAL LETTER KA WITH STROKE">&#1182;</button>
            <button title="CYRILLIC SMALL LETTER KA WITH STROKE">&#1183;</button>
            <button title="CYRILLIC CAPITAL LETTER BASHKIR KA">&#1184;</button>
            <button title="CYRILLIC SMALL LETTER BASHKIR KA">&#1185;</button>
            <button title="CYRILLIC CAPITAL LETTER EN WITH DESCENDER">&#1186;</button>
            <button title="CYRILLIC SMALL LETTER EN WITH DESCENDER">&#1187;</button>
            <button title="CYRILLIC CAPITAL LIGATURE EN GHE">&#1188;</button>
            <button title="CYRILLIC SMALL LIGATURE EN GHE">&#1189;</button>
            <button title="CYRILLIC CAPITAL LETTER PE WITH MIDDLE HOOK">&#1190;</button>
            <button title="CYRILLIC SMALL LETTER PE WITH MIDDLE HOOK">&#1191;</button>
            <button title="CYRILLIC CAPITAL LETTER ABKHASIAN HA">&#1192;</button>
            <button title="CYRILLIC SMALL LETTER ABKHASIAN HA">&#1193;</button>
            <button title="CYRILLIC CAPITAL LETTER ES WITH DESCENDER">&#1194;</button>
            <button title="CYRILLIC SMALL LETTER ES WITH DESCENDER">&#1195;</button>
            <button title="CYRILLIC CAPITAL LETTER TE WITH DESCENDER">&#1196;</button>
            <button title="CYRILLIC SMALL LETTER TE WITH DESCENDER">&#1197;</button>
            <button title="CYRILLIC CAPITAL LETTER STRAIGHT U">&#1198;</button>
            <button title="CYRILLIC SMALL LETTER STRAIGHT U">&#1199;</button>
            <button title="CYRILLIC CAPITAL LETTER STRAIGHT U WITH STROKE">&#1200;</button>
            <button title="CYRILLIC SMALL LETTER STRAIGHT U WITH STROKE">&#1201;</button>
            <button title="CYRILLIC CAPITAL LETTER HA WITH DESCENDER">&#1202;</button>
            <button title="CYRILLIC SMALL LETTER HA WITH DESCENDER">&#1203;</button>
            <button title="CYRILLIC CAPITAL LIGATURE TE TSE">&#1204;</button>
            <button title="CYRILLIC SMALL LIGATURE TE TSE">&#1205;</button>
            <button title="CYRILLIC CAPITAL LETTER CHE WITH DESCENDER">&#1206;</button>
            <button title="CYRILLIC SMALL LETTER CHE WITH DESCENDER">&#1207;</button>
            <button title="CYRILLIC CAPITAL LETTER CHE WITH VERTICAL STROKE">&#1208;</button>
            <button title="CYRILLIC SMALL LETTER CHE WITH VERTICAL STROKE">&#1209;</button>
            <button title="CYRILLIC CAPITAL LETTER SHHA">&#1210;</button>
            <button title="CYRILLIC SMALL LETTER SHHA">&#1211;</button>
            <button title="CYRILLIC CAPITAL LETTER ABKHASIAN CHE">&#1212;</button>
            <button title="CYRILLIC SMALL LETTER ABKHASIAN CHE">&#1213;</button>
            <button title="CYRILLIC CAPITAL LETTER ABKHASIAN CHE WITH DESCENDER">&#1214;</button>
            <button title="CYRILLIC SMALL LETTER ABKHASIAN CHE WITH DESCENDER">&#1215;</button>
            <button title="CYRILLIC LETTER PALOCHKA">&#1216;</button>
            <button title="CYRILLIC CAPITAL LETTER ZHE WITH BREVE">&#1217;</button>
            <button title="CYRILLIC SMALL LETTER ZHE WITH BREVE">&#1218;</button>
            <button title="CYRILLIC CAPITAL LETTER KA WITH HOOK">&#1219;</button>
            <button title="CYRILLIC SMALL LETTER KA WITH HOOK">&#1220;</button>
            <button title="CYRILLIC CAPITAL LETTER EL WITH TAIL">&#1221;</button>
            <button title="CYRILLIC SMALL LETTER EL WITH TAIL">&#1222;</button>
            <button title="CYRILLIC CAPITAL LETTER EN WITH HOOK">&#1223;</button>
            <button title="CYRILLIC SMALL LETTER EN WITH HOOK">&#1224;</button>
            <button title="CYRILLIC CAPITAL LETTER EN WITH TAIL">&#1225;</button>
            <button title="CYRILLIC SMALL LETTER EN WITH TAIL">&#1226;</button>
            <button title="CYRILLIC CAPITAL LETTER KHAKASSIAN CHE">&#1227;</button>
            <button title="CYRILLIC SMALL LETTER KHAKASSIAN CHE">&#1228;</button>
            <button title="CYRILLIC CAPITAL LETTER EM WITH TAIL">&#1229;</button>
            <button title="CYRILLIC SMALL LETTER EM WITH TAIL">&#1230;</button>
            <button title="CYRILLIC SMALL LETTER PALOCHKA">&#1231;</button>
            <button title="CYRILLIC CAPITAL LETTER A WITH BREVE">&#1232;</button>
            <button title="CYRILLIC SMALL LETTER A WITH BREVE">&#1233;</button>
            <button title="CYRILLIC CAPITAL LETTER A WITH DIAERESIS">&#1234;</button>
            <button title="CYRILLIC SMALL LETTER A WITH DIAERESIS">&#1235;</button>
            <button title="CYRILLIC CAPITAL LIGATURE A IE">&#1236;</button>
            <button title="CYRILLIC SMALL LIGATURE A IE">&#1237;</button>
            <button title="CYRILLIC CAPITAL LETTER IE WITH BREVE">&#1238;</button>
            <button title="CYRILLIC SMALL LETTER IE WITH BREVE">&#1239;</button>
            <button title="CYRILLIC CAPITAL LETTER SCHWA">&#1240;</button>
            <button title="CYRILLIC SMALL LETTER SCHWA">&#1241;</button>
            <button title="CYRILLIC CAPITAL LETTER SCHWA WITH DIAERESIS">&#1242;</button>
            <button title="CYRILLIC SMALL LETTER SCHWA WITH DIAERESIS">&#1243;</button>
            <button title="CYRILLIC CAPITAL LETTER ZHE WITH DIAERESIS">&#1244;</button>
            <button title="CYRILLIC SMALL LETTER ZHE WITH DIAERESIS">&#1245;</button>
            <button title="CYRILLIC CAPITAL LETTER ZE WITH DIAERESIS">&#1246;</button>
            <button title="CYRILLIC SMALL LETTER ZE WITH DIAERESIS">&#1247;</button>
            <button title="CYRILLIC CAPITAL LETTER ABKHASIAN DZE">&#1248;</button>
            <button title="CYRILLIC SMALL LETTER ABKHASIAN DZE">&#1249;</button>
            <button title="CYRILLIC CAPITAL LETTER I WITH MACRON">&#1250;</button>
            <button title="CYRILLIC SMALL LETTER I WITH MACRON">&#1251;</button>
            <button title="CYRILLIC CAPITAL LETTER I WITH DIAERESIS">&#1252;</button>
            <button title="CYRILLIC SMALL LETTER I WITH DIAERESIS">&#1253;</button>
            <button title="CYRILLIC CAPITAL LETTER O WITH DIAERESIS">&#1254;</button>
            <button title="CYRILLIC SMALL LETTER O WITH DIAERESIS">&#1255;</button>
            <button title="CYRILLIC CAPITAL LETTER BARRED O">&#1256;</button>
            <button title="CYRILLIC SMALL LETTER BARRED O">&#1257;</button>
            <button title="CYRILLIC CAPITAL LETTER BARRED O WITH DIAERESIS">&#1258;</button>
            <button title="CYRILLIC SMALL LETTER BARRED O WITH DIAERESIS">&#1259;</button>
            <button title="CYRILLIC CAPITAL LETTER E WITH DIAERESIS">&#1260;</button>
            <button title="CYRILLIC SMALL LETTER E WITH DIAERESIS">&#1261;</button>
            <button title="CYRILLIC CAPITAL LETTER U WITH MACRON">&#1262;</button>
            <button title="CYRILLIC SMALL LETTER U WITH MACRON">&#1263;</button>
            <button title="CYRILLIC CAPITAL LETTER U WITH DIAERESIS">&#1264;</button>
            <button title="CYRILLIC SMALL LETTER U WITH DIAERESIS">&#1265;</button>
            <button title="CYRILLIC CAPITAL LETTER U WITH DOUBLE ACUTE">&#1266;</button>
            <button title="CYRILLIC SMALL LETTER U WITH DOUBLE ACUTE">&#1267;</button>
            <button title="CYRILLIC CAPITAL LETTER CHE WITH DIAERESIS">&#1268;</button>
            <button title="CYRILLIC SMALL LETTER CHE WITH DIAERESIS">&#1269;</button>
            <button title="CYRILLIC CAPITAL LETTER GHE WITH DESCENDER">&#1270;</button>
            <button title="CYRILLIC SMALL LETTER GHE WITH DESCENDER">&#1271;</button>
            <button title="CYRILLIC CAPITAL LETTER YERU WITH DIAERESIS">&#1272;</button>
            <button title="CYRILLIC SMALL LETTER YERU WITH DIAERESIS">&#1273;</button>
            <button title="CYRILLIC CAPITAL LETTER GHE WITH STROKE AND HOOK">&#1274;</button>
            <button title="CYRILLIC SMALL LETTER GHE WITH STROKE AND HOOK">&#1275;</button>
            <button title="CYRILLIC CAPITAL LETTER HA WITH HOOK">&#1276;</button>
            <button title="CYRILLIC SMALL LETTER HA WITH HOOK">&#1277;</button>
            <button title="CYRILLIC CAPITAL LETTER HA WITH STROKE">&#1278;</button>
            <button title="CYRILLIC SMALL LETTER HA WITH STROKE">&#1279;</button>
            
        </div>
        
        <div id="divDiacriticalMarks" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Diacritical Marks: https://www.w3schools.com/charsets/ref_utf_diacritical.asp -->
            <button title="GRAVE ACCENT">&#768;</button>
            <button title="ACUTE ACCENT">&#769;</button>
            <button title="CIRCUMFLEX ACCENT">&#770;</button>
            <button title="TILDE">&#771;</button>
            <button title="MACRON">&#772;</button>
            <button title="OVERLINE">&#773;</button>
            <button title="BREVE">&#774;</button>
            <button title="DOT ABOVE">&#775;</button>
            <button title="DIAERESIS">&#776;</button>
            <button title="HOOK ABOVE">&#777;</button>
            <button title="RING ABOVE">&#778;</button>
            <button title="DOUBLE ACUTE ACCENT">&#779;</button>
            <button title="CARON">&#780;</button>
            <button title="VERTICAL LINE ABOVE">&#781;</button>
            <button title="DOUBLE VERTICAL LINE ABOVE">&#782;</button>
            <button title="DOUBLE GRAVE ACCENT">&#783;</button>
            <button title="CANDRABINDU">&#784;</button>
            <button title="INVERTED BREVE">&#785;</button>
            <button title="TURNED COMMA ABOVE">&#786;</button>
            <button title="COMMA ABOVE">&#787;</button>
            <button title="REVERSED COMMA ABOVE">&#788;</button>
            <button title="COMMA ABOVE RIGHT">&#789;</button>
            <button title="GRAVE ACCENT BELOW">&#790;</button>
            <button title="ACUTE ACCENT BELOW>&#791;</button>
            <button title="LEFT TACK BELOW">&#792;</button>
            <button title="RIGHT TACK BELOW">&#793;</button>
            <button title="LEFT ANGLE ABOVE">&#794;</button>
            <button title="HORN">&#795;</button>
            <button title="LEFT HALF RING BELOW">&#796;</button>
            <button title="UP TACK BELOW">&#797;</button>
            <button title="DOWN TACK BELOW">&#798;</button>
            <button title="PLUS SIGN BELOW">&#799;</button>
            <button title="MINUS SIGN BELOW">&#800;</button>
            <button title="PALATALIZED HOOK BELOW">&#801;</button>
            <button title="RETROFLEX HOOK BELOW">&#802;</button>
            <button title="DOT BELOW">&#803;</button>
            <button title="DIAERESIS BELOW">&#804;</button>
            <button title="RING BELOW">&#805;</button>
            <button title="COMMA BELOW">&#806;</button>
            <button title="CEDILLA">&#807;</button>
            <button title="OGONEK">&#808;</button>
            <button title="VERTICAL LINE BELOW">&#809;</button>
            <button title="BRIDGE BELOW">&#810;</button>
            <button title="INVERTED DOUBLE ARCH BELOW">&#811;</button>
            <button title="CARON BELOW">&#812;</button>
            <button title="CIRCUMFLEX ACCENT BELOW">&#813;</button>
            <button title="BREVE BELOW">&#814;</button>
            <button title="INVERTED BREVE BELOW">&#815;</button>
            <button title="TILDE BELOW">&#816;</button>
            <button title="MACRON BELOW">&#817;</button>
            <button title="LOW LINE">&#818;</button>
            <button title="DOUBLE LOW LINE">&#819;</button>
            <button title="TILDE OVERLAY">&#820;</button>
            <button title="SHORT STROKE OVERLAY">&#821;</button>
            <button title="LONG STROKE OVERLAY">&#822;</button>
            <button title="SHORT SOLIDUS OVERLAY">&#823;</button>
            <button title="LONG SOLIDUS OVERLAY">&#824;</button>
            <button title="RIGHT HALF RING BELOW">&#825;</button>
            <button title="INVERTED BRIDGE BELOW">&#826;</button>
            <button title="SQUARE BELOW">&#827;</button>
            <button title="SEAGULL BELOW">&#828;</button>
            <button title="X ABOVE">&#829;</button>
            <button title="VERTICAL TILDE">&#830;</button>
            <button title="DOUBLE OVERLINE">&#831;</button>
            <button title="GRAVE TONE MARK">&#832;</button>
            <button title="ACUTE TONE MARK">&#833;</button>
            <button title="GREEK PERISPOMENI (combined with theta)">&#834;</button>
            <button title="GREEK KORONIS (combined with theta)">&#835;</button>
            <button title="GREEK DIALYTIKA TONOS (combined with theta)">&#836;</button>
            <button title="GREEK YPOGEGRAMMENI (combined with theta)">&#837;</button>
            <button title="BRIDGE ABOVE">&#838;</button>
            <button title="EQUALS SIGN BELOW">&#839;</button>
            <button title="DOUBLE VERTICAL LINE BELOW">&#840;</button>
            <button title="LEFT ANGLE BELOW">&#841;</button>
            <button title="NOT TILDE ABOVE">&#842;</button>
            <button title="HOMOTHETIC ABOVE">&#843;</button>
            <button title="ALMOST EQUAL TO ABOVE">&#844;</button>
            <button title="LEFT RIGHT ARROW BELOW">&#845;</button>
            <button title="UPWARDS ARROW BELOW">&#846;</button>
            <button title="GRAPHEME JOINER">&#847;</button>
            <button title="RIGHT ARROWHEAD ABOVE">&#848;</button>
            <button title="LEFT HALF RING ABOVE">&#849;</button>
            <button title="FERMATA">&#850;</button>
            <button title="X BELOW">&#851;</button>
            <button title="LEFT ARROWHEAD BELOW">&#852;</button>
            <button title="RIGHT ARROWHEAD BELOW">&#853;</button>
            <button title="RIGHT ARROWHEAD AND UP ARROWHEAD BELOW">&#854;</button>
            <button title="RIGHT HALF RING ABOVE">&#855;</button>
            <button title="DOT ABOVE RIGHT">&#856;</button>
            <button title="ASTERISK BELOW">&#857;</button>
            <button title="DOUBLE RING BELOW">&#858;</button>
            <button title="ZIGZAG ABOVE">&#859;</button>
            <button title="DOUBLE BREVE BELOW">&#860;</button>
            <button title="DOUBLE BREVE">&#861;</button>
            <button title="DOUBLE MACRON">&#862;</button>
            <button title="DOUBLE MACRON BELOW">&#863;</button>
            <button title="DOUBLE TILDE">&#864;</button>
            <button title="DOUBLE INVERTED BREVE">&#865;</button>
            <button title="DOUBLE RIGHTWARDS ARROW BELOW">&#866;</button>
            <button title="LATIN SMALL LETTER A">&#867;</button>
            <button title="LATIN SMALL LETTER E">&#868;</button>
            <button title="LATIN SMALL LETTER I">&#869;</button>
            <button title="LATIN SMALL LETTER O">&#870;</button>
            <button title="LATIN SMALL LETTER U">&#871;</button>
            <button title="LATIN SMALL LETTER C">&#872;</button>
            <button title="LATIN SMALL LETTER D">&#873;</button>
            <button title="LATIN SMALL LETTER H">&#874;</button>
            <button title="LATIN SMALL LETTER M">&#875;</button>
            <button title="LATIN SMALL LETTER R">&#876;</button>
            <button title="LATIN SMALL LETTER T">&#877;</button>
            <button title="LATIN SMALL LETTER V">&#878;</button>
            <button title="LATIN SMALL LETTER X">&#879;</button>
        </div>
        
        <div id="divGreekAndCoptic" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Greek and Coptic: https://www.w3schools.com/charsets/ref_utf_greek.asp -->
        
            <button title="GREEK CAPITAL LETTER HETA">&#880;</button>
            <button title="GREEK SMALL LETTER HETA">&#881;</button>
            <button title="GREEK CAPITAL LETTER ARCHAIC SAMPI">&#882;</button>
            <button title="GREEK SMALL LETTER ARCHAIC SAMPI">&#883;</button>
            <button title="GREEK NUMERAL SIGN">&#884;</button>
            <button title="GREEK LOWER NUMERAL SIGN">&#885;</button>
            <button title="GREEK CAPITAL LETTER PAMPHYLIAN DIGAMMA">&#886;</button>
            <button title="GREEK SMALL LETTER PAMPHYLIAN DIGAMMA">&#887;</button>
            <button title="GREEK YPOGEGRAMMENI">&#890;</button>
            <button title="GREEK SMALL REVERSED LUNATE SIGMA SYMBOL">&#891;</button>
            <button title="GREEK SMALL DOTTED LUNATE SIGMA SYMBOL">&#892;</button>
            <button title="GREEK SMALL REVERSED DOTTED LUNATE SIGMA SYMBOL">&#893;</button>
            <button title="GREEK QUESTION MARK">&#894;</button>
            <button title="GREEK TONOS">&#900;</button>
            <button title="GREEK DIALYTIKA TONOS">&#901;</button>
            <button title="GREEK CAPITAL LETTER ALPHA WITH TONOS">&#902;</button>
            <button title="GREEK ANO TELEIA">&#903;</button>
            <button title="GREEK CAPITAL LETTER EPSILON WITH TONOS">&#904;</button>
            <button title="GREEK CAPITAL LETTER ETA WITH TONOS">&#905;</button>
            <button title="GREEK CAPITAL LETTER IOTA WITH TONOS">&#906;</button>
            <button title="GREEK CAPITAL LETTER OMICRON WITH TONOS">&#908;</button>
            <button title="GREEK CAPITAL LETTER UPSILON WITH TONOS">&#910;</button>
            <button title="GREEK CAPITAL LETTER OMEGA WITH TONOS">&#911;</button>
            <button title="GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS">&#912;</button>
            <button title="GREEK CAPITAL LETTER ALPHA">&Alpha;</button>
            <button title="GREEK CAPITAL LETTER BETA">&Beta;</button>
            <button title="GREEK CAPITAL LETTER GAMMA">&Gamma;</button>
            <button title="GREEK CAPITAL LETTER DELTA">&Delta;</button>
            <button title="GREEK CAPITAL LETTER EPSILON">&Epsilon;</button>
            <button title="GREEK CAPITAL LETTER ZETA">&Zeta;</button>
            <button title="GREEK CAPITAL LETTER ETA">&Eta;</button>
            <button title="GREEK CAPITAL LETTER THETA">&Theta;</button>
            <button title="GREEK CAPITAL LETTER IOTA">&Iota;</button>
            <button title="GREEK CAPITAL LETTER KAPPA">&Kappa;</button>
            <button title="GREEK CAPITAL LETTER LAMBDA">&Lambda;</button>
            <button title="GREEK CAPITAL LETTER MU">&Mu;</button>
            <button title="GREEK CAPITAL LETTER NU">&Nu;</button>
            <button title="GREEK CAPITAL LETTER XI">&Xi;</button>
            <button title="GREEK CAPITAL LETTER OMICRON">&Omicron;</button>
            <button title="GREEK CAPITAL LETTER PI">&Pi;</button>
            <button title="GREEK CAPITAL LETTER RHO">&Rho;</button>
            <button title="GREEK CAPITAL LETTER SIGMA">&Sigma;</button>
            <button title="GREEK CAPITAL LETTER TAU">&Tau;</button>
            <button title="GREEK CAPITAL LETTER UPSILON">&Upsilon;</button>
            <button title="GREEK CAPITAL LETTER PHI">&Phi;</button>
            <button title="GREEK CAPITAL LETTER CHI">&Chi;</button>
            <button title="GREEK CAPITAL LETTER PSI">&Psi;</button>
            <button title="GREEK CAPITAL LETTER OMEGA">&Omega;</button>
            <button title="GREEK CAPITAL LETTER IOTA WITH DIALYTIKA">&#938;</button>
            <button title="GREEK CAPITAL LETTER UPSILON WITH DIALYTIKA">&#939;</button>
            <button title="GREEK SMALL LETTER ALPHA WITH TONOS">&#940;</button>
            <button title="GREEK SMALL LETTER EPSILON WITH TONOS">&#941;</button>
            <button title="GREEK SMALL LETTER ETA WITH TONOS">&#942;</button>
            <button title="GREEK SMALL LETTER IOTA WITH TONOS">&#943;</button>
            <button title="GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS">&#944;</button>
            <button title="GREEK SMALL LETTER ALPHA">&alpha;</button>
            <button title="GREEK SMALL LETTER BETA">&beta;</button>
            <button title="GREEK SMALL LETTER GAMMA">&gamma;</button>
            <button title="GREEK SMALL LETTER DELTA">&delta;</button>
            <button title="GREEK SMALL LETTER EPSILON">&epsilon;</button>
            <button title="GREEK SMALL LETTER ZETA">&zeta;</button>
            <button title="GREEK SMALL LETTER ETA">&eta;</button>
            <button title="GREEK SMALL LETTER THETA">&theta;</button>
            <button title="GREEK SMALL LETTER IOTA">&iota;</button>
            <button title="GREEK SMALL LETTER KAPPA">&kappa;</button>
            <button title="GREEK SMALL LETTER LAMBDA">&lambda;</button>
            <button title="GREEK SMALL LETTER MU">&mu;</button>
            <button title="GREEK SMALL LETTER NU">&nu;</button>
            <button title="GREEK SMALL LETTER XI">&xi;</button>
            <button title="GREEK SMALL LETTER OMIMCRON">&omicron;</button>
            <button title="GREEK SMALL LETTER PI">&pi;</button>
            <button title="GREEK SMALL LETTER RHO">&rho;</button>
            <button title="GREEK SMALL LETTER FINAL SIGMA">&sigmaf;</button>
            <button title="GREEK SMALL LETTER SIGMA">&sigma;</button>
            <button title="GREEK SMALL LETTER TAU">&tau;</button>
            <button title="GREEK SMALL LETTER UPSILON">&upsilon;</button>
            <button title="GREEK SMALL LETTER PHI">&phi;</button>
            <button title="GREEK SMALL LETTER CHI">&chi;</button>
            <button title="GREEK SMALL LETTER PSI">&psi;</button>
            <button title="GREEK SMALL LETTER OMEGA">&omega;</button>
            <button title="GREEK SMALL LETTER IOTA WITH DIALYTIKA">&#970;</button>
            <button title="GREEK SMALL LETTER UPSILON WITH DIALYTIKA">&#971;</button>
            <button title="GREEK SMALL LETTER OMICRON WITH TONOS">&#972;</button>
            <button title="GREEK SMALL LETTER UPSILON WITH TONOS">&#973;</button>
            <button title="GREEK SMALL LETTER OMEGA WITH TONOS">&#974;</button>
            <button title="GREEK CAPITAL KAI SYMBOL">&#975;</button>
            <button title="GREEK BETA SYMBOL">&#976;</button>
            <button title="GREEK THETA SYMBOL">&thetasym;</button>
            <button title="GREEK UPSILON WITH HOOK SYMBOL">&upsih;</button>
            <button title="GREEK UPSILON WITH ACUTE AND HOOK SYMBOL">&#979;</button>
            <button title="GREEK UPSILON WITH DIAERESIS AND HOOK SYMBOL">&#980;</button>
            <button title="GREEK PHI SYMBOL">&straightphi;</button>
            <button title="GREEK PI SYMBOL">&piv;</button>
            <button title="GREEK KAI SYMBOL">&#983;</button>
            <button title="GREEK LETTER ARCHAIC KOPPA">&#984;</button>
            <button title="GREEK SMALL LETTER ARCHAIC KOPPA">&#985;</button>
            <button title="GREEK LETTER STIGMA">&#986;</button>
            <button title="GREEK SMALL LETTER STIGMA">&#987;</button>
            <button title="GREEK LETTER DIGAMMA">&Gammad;</button>
            <button title="GREEK SMALL LETTER DIGAMMA">&gammad;</button>
            <button title="GREEK LETTER KOPPA">&#990;</button>
            <button title="GREEK SMALL LETTER KOPPA">&#991;</button>
            <button title="GREEK LETTER SAMPI">&#992;</button>
            <button title="GREEK SMALL LETTER SAMPI">&#993;</button>
            <button title="COPTIC CAPITAL LETTER SHEI">&#994;</button>
            <button title="COPTIC SMALL LETTER SHEI">&#995;</button>
            <button title="COPTIC CAPITAL LETTER FEI">&#996;</button>
            <button title="COPTIC SMALL LETTER FEI">&#997;</button>
            <button title="COPTIC CAPITAL LETTER KHEI">&#998;</button>
            <button title="COPTIC SMALL LETTER KHEI">&#999;</button>
            <button title="COPTIC CAPITAL LETTER HORI">&#1000;</button>
            <button title="COPTIC SMALL LETTER HORI">&#1001;</button>
            <button title="COPTIC CAPITAL LETTER GANGIA">&#1002;</button>
            <button title="COPTIC SMALL LETTER GANGIA">&#1003;</button>
            <button title="COPTIC CAPITAL LETTER SHIMA">&#1004;</button>
            <button title="COPTIC SMALL LETTER SHIMA">&#1005;</button>
            <button title="COPTIC CAPITAL LETTER DEI">&#1006;</button>
            <button title="COPTIC SMALL LETTER DEI">&#1007;</button>
            <button title="GREEK KAPPA SYMBOL">&varkappa;</button>
            <button title="GREEK RHO SYMBOL">&varrho;</button>
            <button title="GREEK LUNATE SIGMA SYMBOL">&#1010;</button>
            <button title="GREEK LETTER YOT">&#1011;</button>
            <button title="GREEK CAPITAL THETA SYMBOL">&#1012;</button>
            <button title="GREEK LUNATE EPSILON SYMBOL">&straightepsilon;</button>
            <button title="GREEK REVERSED LUNATE EPSILON SYMBOL">&backepsilon;</button>
            <button title="GREEK CAPITAL LETTER SHO">&#1015;</button>
            <button title="GREEK SMALL LETTER SHO">&#1016;</button>
            <button title="GREEK CAPITAL LUNATE SIGMA SYMBOL">&#1017;</button>
            <button title="GREEK CAPITAL LETTER SAN">&#1018;</button>
            <button title="GREEK SMALL LETTER SAN">&#1019;</button>
            <button title="GREEK RHO WITH STROKE SYMBOL">&#1020;</button>
            <button title="GREEK CAPITAL REVERSED LUNATE SIGMA SYMBOL">&#1021;</button>
            <button title="GREEK CAPITAL DOTTED LUNATE SIGMA SYMBOL">&#1022;</button>
            <button title="GREEK CAPITAL REVERSED DOTTED LUNATE SIGMA SYMBOL">&#1023;</button>
            
        </div>
        
        <div id="divLatinExtendedA" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Latin Extended A: https://www.w3schools.com/charsets/ref_utf_latin_extended_a.asp -->
            <button title="LATIN CAPITAL LETTER A WITH MACRON">&Amacr;</button>
            <button title="LATIN SMALL LETTER A WITH MACRON">&amacr;</button>
            <button title="LATIN CAPITAL LETTER A WITH BREVE">&Abreve;</button>
            <button title="LATIN SMALL LETTER A WITH BREVE">&abreve;</button>
            <button title="LATIN CAPITAL LETTER A WITH OGONEK">&Aogon;</button>
            <button title="LATIN SMALL LETTER A WITH OGONEK">&aogon;</button>
            <button title="LATIN CAPITAL LETTER C WITH ACUTE">&Cacute;</button>
            <button title="LATIN SMALL LETTER C WITH ACUTE">&cacute;</button>
            <button title="LATIN CAPITAL LETTER C WITH CIRCUMFLEX">&Ccirc;</button>
            <button title="LATIN SMALL LETTER C WITH CIRCUMFLEX">&ccirc;</button>
            <button title="LATIN CAPITAL LETTER C WITH DOT ABOVE">&#266;</button>
            <button title="LATIN SMALL LETTER C WITH DOT ABOVE">&cdot;</button>
            <button title="LATIN CAPITAL LETTER C WITH CARON">&Ccaron;</button>
            <button title="LATIN SMALL LETTER C WITH CARON">&ccaron;</button>
            <button title="LATIN CAPITAL LETTER D WITH CARON">&Dcaron;</button>
            <button title="LATIN SMALL LETTER D WITH CARON">&dcaron;</button>
            <button title="LATIN CAPITAL LETTER D WITH STROKE">&Dstrok;</button>
            <button title="LATIN SMALL LETTER D WITH STROKE">&dstrok;</button>
            <button title="LATIN CAPITAL LETTER E WITH MACRON">&Emacr;</button>
            <button title="LATIN SMALL LETTER E WITH MACRON">&emacr;</button>
            <button title="LATIN CAPITAL LETTER E WITH BREVE">&#276;</button>
            <button title="LATIN SMALL LETTER E WITH BREVE">&#277;</button>
            <button title="LATIN CAPITAL LETTER E WITH DOT ABOVE">&Edot;</button>
            <button title="LATIN SMALL LETTER E WITH DOT ABOVE">&edot;</button>
            <button title="LATIN CAPITAL LETTER E WITH OGONEK">&Eogon;</button>
            <button title="LATIN SMALL LETTER E WITH OGONEK">&eogon;</button>
            <button title="LATIN CAPITAL LETTER E WITH CARON">&Ecaron;</button>
            <button title="LATIN SMALL LETTER E WITH CARON">&ecaron;</button>
            <button title="LATIN CAPITAL LETTER G WITH CIRCUMFLEX">&Gcirc;</button>
            <button title="LATIN SMALL LETTER G WITH CIRCUMFLEX">&gcirc;</button>
            <button title="LATIN CAPITAL LETTER G WITH BREVE">&Gbreve;</button>
            <button title="LATIN SMALL LETTER G WITH BREVE">&gbreve;</button>
            <button title="LATIN CAPITAL LETTER G WITH DOT ABOVE">&Gdot;</button>
            <button title="LATIN SMALL LETTER G WITH DOT ABOVE">&gdot;</button>
            <button title="LATIN CAPITAL LETTER G WITH CEDILLA">&Gcedil;</button>
            <button title="LATIN SMALL LETTER G WITH CEDILLA">&#291;</button>
            <button title="LATIN CAPITAL LETTER H WITH CIRCUMFLEX">&Hcirc;</button>
            <button title="LATIN SMALL LETTER H WITH CIRCUMFLEX">&hcirc;</button>
            <button title="LATIN CAPITAL LETTER H WITH STROKE">&Hstrok;</button>
            <button title="LATIN SMALL LETTER H WITH STROKE">&hstrok;</button>
            <button title="LATIN CAPITAL LETTER I WITH TILDE">&Itilde;</button>
            <button title="LATIN SMALL LETTER I WITH TILDE">&itilde;</button>
            <button title="LATIN CAPITAL LETTER I WITH MACRON">&Imacr;</button>
            <button title="LATIN SMALL LETTER I WITH MACRON">&imacr;</button>
            <button title="LATIN CAPITAL LETTER I WITH BREVE">&#300;</button>
            <button title="LATIN SMALL LETTER I WITH BREVE">&#301;</button>
            <button title="LATIN CAPITAL LETTER I WITH OGONEK">&Iogon;</button>
            <button title="LATIN SMALL LETTER I WITH OGONEK">&iogon;</button>
            <button title="LATIN CAPITAL LETTER I WITH DOT ABOVE">&Idot;</button>
            <button title="LATIN SMALL LETTER DOTLESS I">&inodot;</button>
            <button title="LATIN CAPITAL LIGATURE IJ">&#306;</button>
            <button title="LATIN SMALL LIGATURE IJ">&ijlig;</button>
            <button title="LATIN CAPITAL LETTER J WITH CIRCUMFLEX">&Jcirc;</button>
            <button title="LATIN SMALL LETTER J WITH CIRCUMFLEX">&jcirc;</button>
            <button title="LATIN CAPITAL LETTER K WITH CEDILLA">&Kcedil;</button>
            <button title="LATIN SMALL LETTER K WITH CEDILLA">&#311;</button>
            <button title="LATIN SMALL LETTER KRA">&kgreen;</button>
            <button title="LATIN CAPITAL LETTER L WITH ACUTE">&Lacute;</button>
            <button title="LATIN SMALL LETTER L WITH ACUTE">&lacute;</button>
            <button title="LATIN CAPITAL LETTER L WITH CEDILLA">&Lcedil;</button>
            <button title="LATIN SMALL LETTER L WITH CEDILLA">&lcedil;</button>
            <button title="LATIN CAPITAL LETTER L WITH CARON">&Lcaron;</button>
            <button title="LATIN SMALL LETTER L WITH CARON">&lcaron;</button>
            <button title="LATIN CAPITAL LETTER L WITH MIDDLE DOT">&#319;</button>
            <button title="LATIN SMALL LETTER L WITH MIDDLE DOT">&lmidot;</button>
            <button title="LATIN CAPITAL LETTER L WITH STROKE">&Lstrok;</button>
            <button title="LATIN SMALL LETTER L WITH STROKE">&lstrok;</button>
            <button title="LATIN CAPITAL LETTER N WITH ACUTE">&Nacute;</button>
            <button title="LATIN SMALL LETTER N WITH ACUTE">&nacute;</button>
            <button title="LATIN CAPITAL LETTER N WITH CEDILLA">&Ncedil;</button>
            <button title="LATIN SMALL LETTER N WITH CEDILLA">&ncedil;</button>
            <button title="LATIN CAPITAL LETTER N WITH CARON">&Ncaron;</button>
            <button title="LATIN SMALL LETTER N WITH CARON">&ncaron;</button>
            <button title="LATIN SMALL LETTER N PRECEDED BY APOSTROPHE">&napos;</button>
            <button title="LATIN CAPITAL LETTER ENG">&ENG;</button>
            <button title="LATIN SMALL LETTER ENG">&eng;</button>
            <button title="LATIN CAPITAL LETTER O WITH MACRON">&Omacr;</button>
            <button title="LATIN SMALL LETTER O WITH MACRON">&omacr;</button>
            <button title="LATIN CAPITAL LETTER O WITH BREVE">&#334;</button>
            <button title="LATIN SMALL LETTER O WITH BREVE">&#335;</button>
            <button title="LATIN CAPITAL LETTER O WITH DOUBLE ACUTE">&Odblac;</button>
            <button title="LATIN SMALL LETTER O WITH DOUBLE ACUTE">&odblac;</button>
            <button title="LATIN CAPITAL LIGATURE OE">&OElig;</button>
            <button title="LATIN SMALL LIGATURE OE">&oelig;</button>
            <button title="LATIN CAPITAL LETTER R WITH ACUTE">&Racute;</button>
            <button title="LATIN SMALL LETTER R WITH ACUTE">&racute;</button>
            <button title="LATIN CAPITAL LETTER R WITH CEDILLA">&Rcedil;</button>
            <button title="LATIN SMALL LETTER R WITH CEDILLA">&rcedil;</button>
            <button title="LATIN CAPITAL LETTER R WITH CARON">&Rcaron;</button>
            <button title="LATIN SMALL LETTER R WITH CARON">&rcaron;</button>
            <button title="LATIN CAPITAL LETTER S WITH ACUTE">&Sacute;</button>
            <button title="LATIN SMALL LETTER S WITH ACUTE">&sacute;</button>
            <button title="LATIN CAPITAL LETTER S WITH CIRCUMFLEX">&Scirc;</button>
            <button title="LATIN SMALL LETTER S WITH CIRCUMFLEX">&scirc;</button>
            <button title="LATIN CAPITAL LETTER S WITH CEDILLA">&Scedil;</button>
            <button title="LATIN SMALL LETTER S WITH CEDILLA">&scedil;</button>
            <button title="LATIN CAPITAL LETTER S WITH CARON">&Scaron;</button>
            <button title="LATIN SMALL LETTER S WITH CARON">&scaron;</button>
            <button title="LATIN CAPITAL LETTER T WITH CEDILLA">&Tcedil;</button>
            <button title="LATIN SMALL LETTER T WITH CEDILLA">&tcedil;</button>
            <button title="LATIN CAPITAL LETTER T WITH CARON">&Tcaron;</button>
            <button title="LATIN SMALL LETTER T WITH CARON">&tcaron;</button>
            <button title="LATIN CAPITAL LETTER T WITH STROKE">&Tstrok;</button>
            <button title="LATIN SMALL LETTER T WITH STROKE">&tstrok;</button>
            <button title="LATIN CAPITAL LETTER U WITH TILDE">&Utilde;</button>
            <button title="LATIN SMALL LETTER U WITH TILDE">&utilde;</button>
            <button title="LATIN CAPITAL LETTER U WITH MACRON">&Umacr;</button>
            <button title="LATIN SMALL LETTER U WITH MACRON">&umacr;</button>
            <button title="LATIN CAPITAL LETTER U WITH BREVE">&Ubreve;</button>
            <button title="LATIN SMALL LETTER U WITH BREVE">&ubreve;</button>
            <button title="LATIN CAPITAL LETTER U WITH RING ABOVE">&Uring;</button>
            <button title="LATIN SMALL LETTER U WITH RING ABOVE">&uring;</button>
            <button title="LATIN CAPITAL LETTER U WITH DOUBLE ACUTE">&Udblac;</button>
            <button title="LATIN SMALL LETTER U WITH DOUBLE ACUTE">&udblac;</button>
            <button title="LATIN CAPITAL LETTER U WITH OGONEK">&Uogon;</button>
            <button title="LATIN SMALL LETTER U WITH OGONEK">&uogon;</button>
            <button title="LATIN CAPITAL LETTER W WITH CIRCUMFLEX">&Wcirc;</button>
            <button title="LATIN SMALL LETTER W WITH CIRCUMFLEX">&wcirc;</button>
            <button title="LATIN CAPITAL LETTER Y WITH CIRCUMFLEX">&Ycirc;</button>
            <button title="LATIN SMALL LETTER Y WITH CIRCUMFLEX">&ycirc;</button>
            <button title="LATIN CAPITAL LETTER Y WITH DIAERESIS">&Yuml;</button>
            <button title="LATIN CAPITAL LETTER Z WITH ACUTE">&Zacute;</button>
            <button title="LATIN SMALL LETTER Z WITH ACUTE">&zacute;</button>
            <button title="LATIN CAPITAL LETTER Z WITH DOT ABOVE">&Zdot;</button>
            <button title="LATIN SMALL LETTER Z WITH DOT ABOVE">&zdot;</button>
            <button title="LATIN CAPITAL LETTER Z WITH CARON">&Zcaron;</button>
            <button title="LATIN SMALL LETTER Z WITH CARON">&zcaron;</button>
            <button title="LATIN SMALL LETTER LONG S">&#383;</button>
            
        </div>
        
        <div id="divLatinExtendedB" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Latin Extended B: https://www.w3schools.com/charsets/ref_utf_latin_extended_b.asp -->
            <button title="LATIN SMALL LETTER B WITH STROKE">&#384;</button>
            <button title="LATIN CAPITAL LETTER B WITH HOOK">&#385;</button>
            <button title="LATIN CAPITAL LETTER B WITH TOPBAR">&#386;</button>
            <button title="LATIN SMALL LETTER B WITH TOPBAR">&#387;</button>
            <button title="LATIN CAPITAL LETTER TONE SIX">&#388;</button>
            <button title="LATIN SMALL LETTER TONE SIX">&#389;</button>
            <button title="LATIN CAPITAL LETTER OPEN O">&#390;</button>
            <button title="LATIN CAPITAL LETTER C WITH HOOK">&#391;</button>
            <button title="LATIN SMALL LETTER C WITH HOOK">&#392;</button>
            <button title="LATIN CAPITAL LETTER AFRICAN D">&#393;</button>
            <button title="LATIN CAPITAL LETTER D WITH HOOK">&#394;</button>
            <button title="LATIN CAPITAL LETTER D WITH TOPBAR">&#395;</button>
            <button title="LATIN SMALL LETTER D WITH TOPBAR">&#396;</button>
            <button title="LATIN SMALL LETTER TURNED DELTA">&#397;</button>
            <button title="LATIN CAPITAL LETTER REVERSED E">&#398;</button>
            <button title="LATIN CAPITAL LETTER SCHWA">&#399;</button>
            <button title="LATIN CAPITAL LETTER OPEN E">&#400;</button>
            <button title="LATIN CAPITAL LETTER F WITH HOOK">&#401;</button>
            <button title="LATIN SMALL LETTER F WITH HOOK">&fnof;</button>
            <button title="LATIN CAPITAL LETTER G WITH HOOK">&#403;</button>
            <button title="LATIN CAPITAL LETTER GAMMA">&#404;</button>
            <button title="LATIN SMALL LETTER HV">&#405;</button>
            <button title="LATIN CAPITAL LETTER IOTA">&#406;</button>
            <button title="LATIN CAPITAL LETTER I WITH STROKE">&#407;</button>
            <button title="LATIN CAPITAL LETTER K WITH HOOK">&#408;</button>
            <button title="LATIN SMALL LETTER K WITH HOOK">&#409;</button>
            <button title="LATIN SMALL LETTER L WITH BAR">&#410;</button>
            <button title="LATIN SMALL LETTER LAMBDA WITH STROKE">&#411;</button>
            <button title="LATIN CAPITAL LETTER TURNED M">&#412;</button>
            <button title="LATIN CAPITAL LETTER N WITH LEFT HOOK">&#413;</button>
            <button title="LATIN SMALL LETTER N WITH LONG RIGHT LEG">&#414;</button>
            <button title="LATIN CAPITAL LETTER O WITH MIDDLE TILDE">&#415;</button>
            <button title="LATIN CAPITAL LETTER O WITH HORN">&#416;</button>
            <button title="LATIN SMALL LETTER O WITH HORN">&#417;</button>
            <button title="LATIN CAPITAL LETTER OI">&#418;</button>
            <button title="LATIN SMALL LETTER OI">&#419;</button>
            <button title="LATIN CAPITAL LETTER P WITH HOOK">&#420;</button>
            <button title="LATIN SMALL LETTER P WITH HOOK">&#421;</button>
            <button title="LATIN LETTER YR">&#422;</button>
            <button title="LATIN CAPITAL LETTER TONE TWO">&#423;</button>
            <button title="LATIN SMALL LETTER TONE TWO">&#424;</button>
            <button title="LATIN CAPITAL LETTER ESH">&#425;</button>
            <button title="LATIN LETTER REVERSED ESH LOOP">&#426;</button>
            <button title="LATIN SMALL LETTER T WITH PALATAL HOOK">&#427;</button>
            <button title="LATIN CAPITAL LETTER T WITH HOOK">&#428;</button>
            <button title="LATIN SMALL LETTER T WITH HOOK">&#429;</button>
            <button title="LATIN CAPITAL LETTER T WITH RETROFLEX HOOK">&#430;</button>
            <button title="LATIN CAPITAL LETTER U WITH HORN">&#431;</button>
            <button title="LATIN SMALL LETTER U WITH HORN">&#432;</button>
            <button title="LATIN CAPITAL LETTER UPSILON">&#433;</button>
            <button title="LATIN CAPITAL LETTER V WITH HOOK">&#434;</button>
            <button title="LATIN CAPITAL LETTER Y WITH HOOK">&#435;</button>
            <button title="LATIN SMALL LETTER Y WITH HOOK">&#436;</button>
            <button title="LATIN CAPITAL LETTER Z WITH STROKE">&imped;</button>
            <button title="LATIN SMALL LETTER Z WITH STROKE">&#438;</button>
            <button title="LATIN CAPITAL LETTER EZH">&#439;</button>
            <button title="LATIN CAPITAL LETTER EZH REVERSED">&#440;</button>
            <button title="LATIN SMALL LETTER EZH REVERSED">&#441;</button>
            <button title="LATIN SMALL LETTER EZH WITH TAIL">&#442;</button>
            <button title="LATIN LETTER TWO WITH STROKE">&#443;</button>
            <button title="LATIN CAPITAL LETTER TONE FIVE">&#444;</button>
            <button title="LATIN SMALL LETTER TONE FIVE">&#445;</button>
            <button title="LATIN LETTER INVERTED GLOTTAL STOP WITH STROKE">&#446;</button>
            <button title="LATIN LETTER WYNN">&#447;</button>
            <button title="LATIN LETTER DENTAL CLICK">&#448;</button>
            <button title="LATIN LETTER LATERAL CLICK">&#449;</button>
            <button title="LATIN LETTER ALVEOLAR CLICK">&#450;</button>
            <button title="LATIN LETTER RETROFLEX CLICK">&#451;</button>
            <button title="LATIN CAPITAL LETTER DZ WITH CARON">&#452;</button>
            <button title="LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON">&#453;</button>
            <button title="LATIN SMALL LETTER DZ WITH CARON">&#454;</button>
            <button title="LATIN CAPITAL LETTER LJ">&#455;</button>
            <button title="LATIN CAPITAL LETTER L WITH SMALL LETTER J">&#456;</button>
            <button title="LATIN SMALL LETTER LJ">&#457;</button>
            <button title="LATIN CAPITAL LETTER NJ">&#458;</button>
            <button title="LATIN CAPITAL LETTER N WITH SMALL LETTER J">&#459;</button>
            <button title="LATIN SMALL LETTER NJ">&#460;</button>
            <button title="LATIN CAPITAL LETTER A WITH CARON">&#461;</button>
            <button title="LATIN SMALL LETTER A WITH CARON">&#462;</button>
            <button title="LATIN CAPITAL LETTER I WITH CARON">&#463;</button>
            <button title="LATIN SMALL LETTER I WITH CARON">&#464;</button>
            <button title="LATIN CAPITAL LETTER O WITH CARON">&#465;</button>
            <button title="LATIN SMALL LETTER O WITH CARON">&#466;</button>
            <button title="LATIN CAPITAL LETTER U WITH CARON">&#467;</button>
            <button title="LATIN SMALL LETTER U WITH CARON">&#468;</button>
            <button title="LATIN CAPITAL LETTER U WITH DIAERESIS AND MACRON">&#469;</button>
            <button title="LATIN SMALL LETTER U WITH DIAERESIS AND MACRON">&#470;</button>
            <button title="LATIN CAPITAL LETTER U WITH DIAERESIS AND ACUTE">&#471;</button>
            <button title="LATIN SMALL LETTER U WITH DIAERESIS AND ACUTE">&#472;</button>
            <button title="LATIN CAPITAL LETTER U WITH DIAERESIS AND CARON">&#473;</button>
            <button title="LATIN SMALL LETTER U WITH DIAERESIS AND CARON">&#474;</button>
            <button title="LATIN CAPITAL LETTER U WITH DIAERESIS AND GRAVE">&#475;</button>
            <button title="LATIN SMALL LETTER U WITH DIAERESIS AND GRAVE">&#476;</button>
            <button title="LATIN SMALL LETTER TURNED E">&#477;</button>
            <button title="LATIN CAPITAL LETTER A WITH DIAERESIS AND MACRON">&#478;</button>
            <button title="LATIN SMALL LETTER A WITH DIAERESIS AND MACRON">&#479;</button>
            <button title="LATIN CAPITAL LETTER A WITH DOT ABOVE AND MACRON">&#480;</button>
            <button title="LATIN SMALL LETTER A WITH DOT ABOVE AND MACRON">&#481;</button>
            <button title="LATIN CAPITAL LETTER AE WITH MACRON">&#482;</button>
            <button title="LATIN SMALL LETTER AE WITH MACRON">&#483;</button>
            <button title="LATIN CAPITAL LETTER G WITH STROKE">&#484;</button>
            <button title="LATIN SMALL LETTER G WITH STROKE">&#485;</button>
            <button title="LATIN CAPITAL LETTER G WITH CARON">&#486;</button>
            <button title="LATIN SMALL LETTER G WITH CARON">&#487;</button>
            <button title="LATIN CAPITAL LETTER K WITH CARON">&#488;</button>
            <button title="LATIN SMALL LETTER K WITH CARON">&#489;</button>
            <button title="LATIN CAPITAL LETTER O WITH OGONEK">&#490;</button>
            <button title="LATIN SMALL LETTER O WITH OGONEK">&#491;</button>
            <button title="LATIN CAPITAL LETTER O WITH OGONEK AND MACRON">&#492;</button>
            <button title="LATIN SMALL LETTER O WITH OGONEK AND MACRON">&#493;</button>
            <button title="LATIN CAPITAL LETTER EZH WITH CARON">&#494;</button>
            <button title="LATIN SMALL LETTER EZH WITH CARON">&#495;</button>
            <button title="LATIN SMALL LETTER J WITH CARON">&#496;</button>
            <button title="LATIN CAPITAL LETTER DZ">&#497;</button>
            <button title="LATIN CAPITAL LETTER D WITH SMALL LETTER Z">&#498;</button>
            <button title="LATIN SMALL LETTER DZ">&#499;</button>
            <button title="LATIN CAPITAL LETTER G WITH ACUTE">&#500;</button>
            <button title="LATIN SMALL LETTER G WITH ACUTE">&gacute;</button>
            <button title="LATIN CAPITAL LETTER HWAIR">&#502;</button>
            <button title="LATIN CAPITAL LETTER WYNN">&#503;</button>
            <button title="LATIN CAPITAL LETTER N WITH GRAVE">&#504;</button>
            <button title="LATIN SMALL LETTER N WITH GRAVE">&#505;</button>
            <button title="LATIN CAPITAL LETTER A WITH RING ABOVE AND ACUTE">&#506;</button>
            <button title="LATIN SMALL LETTER A WITH RING ABOVE AND ACUTE">&#507;</button>
            <button title="LATIN CAPITAL LETTER AE WITH ACUTE">&#508;</button>
            <button title="LATIN SMALL LETTER AE WITH ACUTE">&#509;</button>
            <button title="LATIN CAPITAL LETTER O WITH STROKE AND ACUTE">&#510;</button>
            <button title="LATIN SMALL LETTER O WITH STROKE AND ACUTE">&#511;</button>
            <button title="LATIN CAPITAL LETTER A WITH DOUBLE GRAVE">&#512;</button>
            <button title="LATIN SMALL LETTER A WITH DOUBLE GRAVE">&#513;</button>
            <button title="LATIN CAPITAL LETTER A WITH INVERTED BREVE">&#514;</button>
            <button title="LATIN SMALL LETTER A WITH INVERTED BREVE">&#515;</button>
            <button title="LATIN CAPITAL LETTER E WITH DOUBLE GRAVE">&#516;</button>
            <button title="LATIN SMALL LETTER E WITH DOUBLE GRAVE">&#517;</button>
            <button title="LATIN CAPITAL LETTER E WITH INVERTED BREVE">&#518;</button>
            <button title="LATIN SMALL LETTER E WITH INVERTED BREVE">&#519;</button>
            <button title="LATIN CAPITAL LETTER I WITH DOUBLE GRAVE">&#520;</button>
            <button title="LATIN SMALL LETTER I WITH DOUBLE GRAVE">&#521;</button>
            <button title="LATIN CAPITAL LETTER I WITH INVERTED BREVE">&#522;</button>
            <button title="LATIN SMALL LETTER I WITH INVERTED BREVE">&#523;</button>
            <button title="LATIN CAPITAL LETTER O WITH DOUBLE GRAVE">&#524;</button>
            <button title="LATIN SMALL LETTER O WITH DOUBLE GRAVE">&#525;</button>
            <button title="LATIN CAPITAL LETTER O WITH INVERTED BREVE">&#526;</button>
            <button title="LATIN SMALL LETTER O WITH INVERTED BREVE">&#527;</button>
            <button title="LATIN CAPITAL LETTER R WITH DOUBLE GRAVE">&#528;</button>
            <button title="LATIN SMALL LETTER R WITH DOUBLE GRAVE">&#529;</button>
            <button title="LATIN CAPITAL LETTER R WITH INVERTED BREVE">&#530;</button>
            <button title="LATIN SMALL LETTER R WITH INVERTED BREVE">&#531;</button>
            <button title="LATIN CAPITAL LETTER U WITH DOUBLE GRAVE">&#532;</button>
            <button title="LATIN SMALL LETTER U WITH DOUBLE GRAVE">&#533;</button>
            <button title="LATIN CAPITAL LETTER U WITH INVERTED BREVE">&#534;</button>
            <button title="LATIN SMALL LETTER U WITH INVERTED BREVE">&#535;</button>
            <button title="LATIN CAPITAL LETTER S WITH COMMA BELOW">&#536;</button>
            <button title="LATIN SMALL LETTER S WITH COMMA BELOW">&#537;</button>
            <button title="LATIN CAPITAL LETTER T WITH COMMA BELOW">&#538;</button>
            <button title="LATIN SMALL LETTER T WITH COMMA BELOW">&#539;</button>
            <button title="LATIN CAPITAL LETTER YOGH">&#540;</button>
            <button title="LATIN SMALL LETTER YOGH">&#541;</button>
            <button title="LATIN CAPITAL LETTER H WITH CARON">&#542;</button>
            <button title="LATIN SMALL LETTER H WITH CARON">&#543;</button>
            <button title="LATIN CAPITAL LETTER N WITH LONG RIGHT LEG">&#544;</button>
            <button title="LATIN SMALL LETTER N WITH LONG RIGHT LEG">&#545;</button>
            <button title="LATIN CAPITAL LETTER OU">&#546;</button>
            <button title="LATIN SMALL LETTER OU">&#547;</button>
            <button title="LATIN CAPITAL LETTER Z WITH HOOK">&#548;</button>
            <button title="LATIN SMALL LETTER Z WITH HOOK">&#549;</button>
            <button title="LATIN CAPITAL LETTER A WITH DOT ABOVE">&#550;</button>
            <button title="LATIN SMALL LETTER A WITH DOT ABOVE">&#551;</button>
            <button title="LATIN CAPITAL LETTER E WITH CEDILLA">&#552;</button>
            <button title="LATIN SMALL LETTER E WITH CEDILLA">&#553;</button>
            <button title="LATIN CAPITAL LETTER O WITH DIAERESIS AND MACRON">&#554;</button>
            <button title="LATIN SMALL LETTER O WITH DIAERESIS AND MACRON">&#555;</button>
            <button title="LATIN CAPITAL LETTER O WITH TILDE AND MACRON">&#556;</button>
            <button title="LATIN SMALL LETTER O WITH TILDE AND MACRON">&#557;</button>
            <button title="LATIN CAPITAL LETTER O WITH DOT ABOVE">&#558;</button>
            <button title="LATIN SMALL LETTER O WITH DOT ABOVE">&#559;</button>
            <button title="LATIN CAPITAL LETTER O WITH DOT ABOVE AND MACRON">&#560;</button>
            <button title="LATIN SMALL LETTER O WITH DOT ABOVE AND MACRON">&#561;</button>
            <button title="LATIN CAPITAL LETTER Y WITH MACRON">&#562;</button>
            <button title="LATIN SMALL LETTER Y WITH MACRON">&#563;</button>
            <button title="LATIN SMALL LETTER L WITH CURL">&#564;</button>
            <button title="LATIN SMALL LETTER N WITH CURL">&#565;</button>
            <button title="LATIN SMALL LETTER T WITH CURL">&#566;</button>
            <button title="LATIN SMALL LETTER DOTLESS J">&jmath;</button>
            <button title="LATIN SMALL LETTER DB DIGRAPH">&#568;</button>
            <button title="LATIN SMALL LETTER QP DIGRAPH">&#569;</button>
            <button title="LATIN CAPITAL LETTER A WITH STROKE">&#570;</button>
            <button title="LATIN CAPITAL LETTER C WITH STROKE">&#571;</button>
            <button title="LATIN SMALL LETTER C WITH STROKE">&#572;</button>
            <button title="LATIN CAPITAL LETTER L WITH BAR">&#573;</button>
            <button title="LATIN CAPITAL LETTER T WITH DIAGONAL STROKE">&#574;</button>
            <button title="LATIN SMALL LETTER S WITH SWASH TAIL">&#575;</button>
            <button title="LATIN SMALL LETTER Z WITH SWASH TAIL">&#576;</button>
            <button title="LATIN CAPITAL LETTER GLOTTAL STOP">&#577;</button>
            <button title="LATIN SMALL LETTER GLOTTAL STOP">&#578;</button>
            <button title="LATIN CAPITAL LETTER B WITH STROKE">&#579;</button>
            <button title="LATIN CAPITAL LETTER U BAR">&#580;</button>
            <button title="LATIN CAPITAL LETTER TURNED V">&#581;</button>
            <button title="LATIN CAPITAL LETTER E WITH STROKE">&#582;</button>
            <button title="LATIN SMALL LETTER E WITH STROKE">&#583;</button>
            <button title="LATIN CAPITAL LETTER J WITH STROKE">&#584;</button>
            <button title="LATIN SMALL LETTER J WITH STROKE">&#585;</button>
            <button title="LATIN CAPITAL LETTER SMALL Q WITH HOOK TAIL">&#586;</button>
            <button title="LATIN SMALL LETTER Q WITH HOOK TAIL">&#587;</button>
            <button title="LATIN CAPITAL LETTER R WITH STROKE">&#588;</button>
            <button title="LATIN SMALL LETTER R WITH STROKE">&#589;</button>
            <button title="LATIN CAPITAL LETTER Y WITH STROKE">&#590;</button>
            <button title="LATIN SMALL LETTER Y WITH STROKE">&#591;</button>
        </div>
        
        <div id="divLatinBasic" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
            
            <!-- Latin Basic: https://www.w3schools.com/charsets/ref_utf_basic_latin.asp -->
            <!--<div>&#32;</div>-->
            <button title="EXCLAMATION MARK">&#33;</button>
            <button title="QUOTATION MARK">&quot;</button>
            <button title="NUMBER SIGN">&#35;</button>
            <button title="DOLLAR SIGN">&#36;</button>
            <button title="PERCENT SIGN">&#37;</button>
            <button title="AMPERSAND">&amp;</button>
            <button title="APOSTROPHE">&#39;</button>
            <button title="LEFT PARENTHESIS">&#40;</button>
            <button title="RIGHT PARENTHESIS">&#41;</button>
            <button title="ASTERISK">&#42;</button>
            <button title="PLUS SIGN">&#43;</button>
            <button title="COMMA">&#44;</button>
            <button title="HYPHEN-MINUS">&#45;</button>
            <button title="FULL STOP">&#46;</button>
            <button title="SOLIDUS">&#47;</button>
            <button title="DIGIT ZERO">&#48;</button>
            <button title="DIGIT ONE">&#49;</button>
            <button title="DIGIT TWO">&#50;</button>
            <button title="DIGIT THREE">&#51;</button>
            <button title="DIGIT FOUR">&#52;</button>
            <button title="DIGIT FIVE">&#53;</button>
            <button title="DIGIT SIX">&#54;</button>
            <button title="DIGIT SEVEN">&#55;</button>
            <button title="DIGIT EIGHT">&#56;</button>
            <button title="DIGIT NINE">&#57;</button>
            <button title="COLON">&#58;</button>
            <button title="SEMICOLON">&#59;</button>
            <button title="LESS-THAN SIGN">&lt;</button>
            <button title="EQUALS SIGN">&#61;</button>
            <button title="GREATER-THAN SIGN">&gt;</button>
            <button title="QUESTION MARK">&#63;</button>
            <button title="COMMERCIAL AT">&#64;</button>
            <button title="LATIN CAPITAL LETTER A">&#65;</button>
            <button title="LATIN CAPITAL LETTER B">&#66;</button>
            <button title="LATIN CAPITAL LETTER C">&#67;</button>
            <button title="LATIN CAPITAL LETTER D">&#68;</button>
            <button title="LATIN CAPITAL LETTER E">&#69;</button>
            <button title="LATIN CAPITAL LETTER F">&#70;</button>
            <button title="LATIN CAPITAL LETTER G">&#71;</button>
            <button title="LATIN CAPITAL LETTER H">&#72;</button>
            <button title="LATIN CAPITAL LETTER I">&#73;</button>
            <button title="LATIN CAPITAL LETTER J">&#74;</button>
            <button title="LATIN CAPITAL LETTER K">&#75;</button>
            <button title="LATIN CAPITAL LETTER L">&#76;</button>
            <button title="LATIN CAPITAL LETTER M">&#77;</button>
            <button title="LATIN CAPITAL LETTER N">&#78;</button>
            <button title="LATIN CAPITAL LETTER O">&#79;</button>
            <button title="LATIN CAPITAL LETTER P">&#80;</button>
            <button title="LATIN CAPITAL LETTER Q">&#81;</button>
            <button title="LATIN CAPITAL LETTER R">&#82;</button>
            <button title="LATIN CAPITAL LETTER S">&#83;</button>
            <button title="LATIN CAPITAL LETTER T">&#84;</button>
            <button title="LATIN CAPITAL LETTER U">&#85;</button>
            <button title="LATIN CAPITAL LETTER V">&#86;</button>
            <button title="LATIN CAPITAL LETTER W">&#87;</button>
            <button title="LATIN CAPITAL LETTER X">&#88;</button>
            <button title="LATIN CAPITAL LETTER Y">&#89;</button>
            <button title="LATIN CAPITAL LETTER Z">&#90;</button>
            <button title="LEFT SQUARE BRACKET">&#91;</button>
            <button title="REVERSE SOLIDUS">&#92;</button>
            <button title="RIGHT SQUARE BRACKET">&#93;</button>
            <button title="CIRCUMFLEX ACCENT">&#94;</button>
            <button title="LOW LINE">&#95;</button>
            <button title="GRAVE ACCENT">&#96;</button>
            <button title="LATIN SMALL LETTER A">&#97;</button>
            <button title="LATIN SMALL LETTER B">&#98;</button>
            <button title="LATIN SMALL LETTER C">&#99;</button>
            <button title="LATIN SMALL LETTER D">&#100;</button>
            <button title="LATIN SMALL LETTER E">&#101;</button>
            <button title="LATIN SMALL LETTER F">&#102;</button>
            <button title="LATIN SMALL LETTER G">&#103;</button>
            <button title="LATIN SMALL LETTER H">&#104;</button>
            <button title="LATIN SMALL LETTER I">&#105;</button>
            <button title="LATIN SMALL LETTER J">&#106;</button>
            <button title="LATIN SMALL LETTER K">&#107;</button>
            <button title="LATIN SMALL LETTER L">&#108;</button>
            <button title="LATIN SMALL LETTER M">&#109;</button>
            <button title="LATIN SMALL LETTER N">&#110;</button>
            <button title="LATIN SMALL LETTER O">&#111;</button>
            <button title="LATIN SMALL LETTER P">&#112;</button>
            <button title="LATIN SMALL LETTER Q">&#113;</button>
            <button title="LATIN SMALL LETTER R">&#114;</button>
            <button title="LATIN SMALL LETTER S">&#115;</button>
            <button title="LATIN SMALL LETTER T">&#116;</button>
            <button title="LATIN SMALL LETTER U">&#117;</button>
            <button title="LATIN SMALL LETTER V">&#118;</button>
            <button title="LATIN SMALL LETTER W">&#119;</button>
            <button title="LATIN SMALL LETTER X">&#120;</button>
            <button title="LATIN SMALL LETTER Y">&#121;</button>
            <button title="LATIN SMALL LETTER Z">&#122;</button>
            <button title="LEFT CURLY BRACKET">&#123;</button>
            <button title="VERTICAL LINE">&#124;</button>
            <button title="RIGHT CURLY BRACKET">&#125;</button>
            <button title="TILDE">&#126;</button>
        </div>
        
        <div id="divLatinSupplement" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Latin Supplement: https://www.w3schools.com/charsets/ref_utf_latin1_supplement.asp -->
            <button title="NO-BREAK SPACE">&nbsp;</button>
            <button title="INVERTED EXCLAMATION MARK">&iexcl;</button>
            <button title="CENT SIGN">&cent;</button>
            <button title="POUND SIGN">&pound;</button>
            <button title="CURRENCY SIGN">&curren;</button>
            <button title="YEN SIGN">&yen;</button>
            <button title="BROKEN BAR">&brvbar;</button>
            <button title="SECTION SIGN">&sect;</button>
            <button title="DIAERESIS">&uml;</button>
            <button title="COPYRIGHT SIGN">&copy;</button>
            <button title="FEMININE ORDINAL INDICATOR">&ordf;</button>
            <button title="LEFT-POINTING DOUBLE ANGLE QUOTATION MARK">&laquo;</button>
            <button title="NOT SIGN">&not;</button>
            <button title="SOFT HYPHEN">&shy;</button>
            <button title="REGISTERED SIGN">&reg;</button>
            <button title="MACRON">&macr;</button>
            <button title="DEGREE SIGN">&deg;</button>
            <button title="PLUS-MINUS SIGN">&plusmn;</button>
            <button title="SUPERSCRIPT TWO">&sup2;</button>
            <button title="SUPERSCRIPT THREE">&sup3;</button>
            <button title="ACUTE ACCENT">&acute;</button>
            <button title="MICRO SIGN">&micro;</button>
            <button title="PILCROW SIGN">&para;</button>
            <button title="MIDDLE DOT">&middot;</button>
            <button title="CEDILLA">&cedil;</button>
            <button title="SUPERSCRIPT ONE">&sup1;</button>
            <button title="MASCULINE ORDINAL INDICATOR">&ordm;</button>
            <button title="RIGHT-POINTING DOUBLE ANGLE QUOTATION MARK">&raquo;</button>
            <button title="VULGAR FRACTION ONE QUARTER">&frac14;</button>
            <button title="VULGAR FRACTION ONE HALF">&frac12;</button>
            <button title="VULGAR FRACTION THREE QUARTERS">&frac34;</button>
            <button title="INVERTED QUESTION MARK">&iquest;</button>
            <button title="LATIN CAPITAL LETTER A WITH GRAVE">&Agrave;</button>
            <button title="LATIN CAPITAL LETTER A WITH ACUTE">&Aacute;</button>
            <button title="LATIN CAPITAL LETTER A WITH CIRCUMFLEX">&Acirc;</button>
            <button title="LATIN CAPITAL LETTER A WITH TILDE">&Atilde;</button>
            <button title="LATIN CAPITAL LETTER A WITH DIAERESIS">&Auml;</button>
            <button title="LATIN CAPITAL LETTER A WITH RING ABOVE">&Aring;</button>
            <button title="LATIN CAPITAL LETTER AE">&AElig;</button>
            <button title="LATIN CAPITAL LETTER C WITH CEDILLA">&Ccedil;</button>
            <button title="LATIN CAPITAL LETTER E WITH GRAVE">&Egrave;</button>
            <button title="LATIN CAPITAL LETTER E WITH ACUTE">&Eacute;</button>
            <button title="LATIN CAPITAL LETTER E WITH CIRCUMFLEX">&Ecirc;</button>
            <button title="LATIN CAPITAL LETTER E WITH DIAERESIS">&Euml;</button>
            <button title="LATIN CAPITAL LETTER I WITH GRAVE">&Igrave;</button>
            <button title="LATIN CAPITAL LETTER I WITH ACUTE">&Iacute;</button>
            <button title="LATIN CAPITAL LETTER I WITH CIRCUMFLEX">&Icirc;</button>
            <button title="LATIN CAPITAL LETTER I WITH DIAERESIS">&Iuml;</button>
            <button title="LATIN CAPITAL LETTER ETH">&ETH;</button>
            <button title="LATIN CAPITAL LETTER N WITH TILDE">&Ntilde;</button>
            <button title="LATIN CAPITAL LETTER O WITH GRAVE">&Ograve;</button>
            <button title="LATIN CAPITAL LETTER O WITH ACUTE">&Oacute;</button>
            <button title="LATIN CAPITAL LETTER O WITH CIRCUMFLEX">&Ocirc;</button>
            <button title="LATIN CAPITAL LETTER O WITH TILDE">&Otilde;</button>
            <button title="LATIN CAPITAL LETTER O WITH DIAERESIS">&Ouml;</button>
            <button title="MULTIPLICATION SIGN">&times;</button>
            <button title="LATIN CAPITAL LETTER O WITH STROKE">&Oslash;</button>
            <button title="LATIN CAPITAL LETTER U WITH GRAVE">&Ugrave;</button>
            <button title="LATIN CAPITAL LETTER U WITH ACUTE">&Uacute;</button>
            <button title="LATIN CAPITAL LETTER U WITH CIRCUMFLEX">&Ucirc;</button>
            <button title="LATIN CAPITAL LETTER U WITH DIAERESIS">&Uuml;</button>
            <button title="LATIN CAPITAL LETTER Y WITH ACUTE">&Yacute;</button>
            <button title="LATIN CAPITAL LETTER THORN">&THORN;</button>
            <button title="LATIN SMALL LETTER SHARP S">&szlig;</button>
            <button title="LATIN SMALL LETTER A WITH GRAVE">&agrave;</button>
            <button title="LATIN SMALL LETTER A WITH ACUTE">&aacute;</button>
            <button title="LATIN SMALL LETTER A WITH CIRCUMFLEX">&acirc;</button>
            <button title="LATIN SMALL LETTER A WITH TILDE">&atilde;</button>
            <button title="LATIN SMALL LETTER A WITH DIAERESIS">&auml;</button>
            <button title="LATIN SMALL LETTER A WITH RING ABOVE">&aring;</button>
            <button title="LATIN SMALL LETTER AE">&aelig;</button>
            <button title="LATIN SMALL LETTER C WITH CEDILLA">&ccedil;</button>
            <button title="LATIN SMALL LETTER E WITH GRAVE">&egrave;</button>
            <button title="LATIN SMALL LETTER E WITH ACUTE">&eacute;</button>
            <button title="LATIN SMALL LETTER E WITH CIRCUMFLEX">&ecirc;</button>
            <button title="LATIN SMALL LETTER E WITH DIAERESIS">&euml;</button>
            <button title="LATIN SMALL LETTER I WITH GRAVE">&igrave;</button>
            <button title="LATIN SMALL LETTER I WITH ACUTE">&iacute;</button>
            <button title="LATIN SMALL LETTER I WITH CIRCUMFLEX">&icirc;</button>
            <button title="LATIN SMALL LETTER I WITH DIAERESIS">&iuml;</button>
            <button title="LATIN SMALL LETTER ETH">&eth;</button>
            <button title="LATIN SMALL LETTER N WITH TILDE">&ntilde;</button>
            <button title="LATIN SMALL LETTER O WITH GRAVE">&ograve;</button>
            <button title="LATIN SMALL LETTER O WITH ACUTE">&oacute;</button>
            <button title="LATIN SMALL LETTER O WITH CIRCUMFLEX">&ocirc;</button>
            <button title="LATIN SMALL LETTER O WITH TILDE">&otilde;</button>
            <button title="LATIN SMALL LETTER O WITH DIAERESIS">&ouml;</button>
            <button title="DIVISION SIGN">&divide;</button>
            <button title="LATIN SMALL LETTER O WITH STROKE">&oslash;</button>
            <button title="LATIN SMALL LETTER U WITH GRAVE">&ugrave;</button>
            <button title="LATIN SMALL LETTER U WITH ACUTE">&uacute;</button>
            <button title="LATIN SMALL LETTER U WITH CIRCUMFLEX">&ucirc;</button>
            <button title="LATIN SMALL LETTER U WITH DIAERESIS">&uuml;</button>
            <button title="LATIN SMALL LETTER Y WITH ACUTE">&yacute;</button>
            <button title="LATIN SMALL LETTER THORN">&thorn;</button>
            <button title="LATIN SMALL LETTER Y WITH DIAERESIS">&yuml;</button>
        </div>
        
        <div id="divModifierLetters" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Modifier Letters: https://www.w3schools.com/charsets/ref_utf_modifiers.asp -->
            <button title="MODIFIER LETTER SMALL H">&#688;</button>
            <button title="MODIFIER LETTER SMALL H WITH HOOK">&#689;</button>
            <button title="MODIFIER LETTER SMALL J">&#690;</button>
            <button title="MODIFIER LETTER SMALL R">&#691;</button>
            <button title="MODIFIER LETTER SMALL TURNED R">&#692;</button>
            <button title="MODIFIER LETTER SMALL TURNED R WITH HOOK">&#693;</button>
            <button title="MODIFIER LETTER SMALL CAPITAL INVERTED R">&#694;</button>
            <button title="MODIFIER LETTER SMALL W">&#695;</button>
            <button title="MODIFIER LETTER SMALL Y">&#696;</button>
            <button title="MODIFIER LETTER PRIME">&#697;</button>
            <button title="MODIFIER LETTER DOUBLE PRIME">&#698;</button>
            <button title="MODIFIER LETTER TURNED COMMA">&#699;</button>
            <button title="MODIFIER LETTER APOSTROPHE">&#700;</button>
            <button title="MODIFIER LETTER REVERSED COMMA">&#701;</button>
            <button title="MODIFIER LETTER RIGHT HALF RING">&#702;</button>
            <button title="MODIFIER LETTER LEFT HALF RING">&#703;</button>
            <button title="MODIFIER LETTER GLOTTAL STOP">&#704;</button>
            <button title="MODIFIER LETTER REVERSED GLOTTAL STOP">&#705;</button>
            <button title="MODIFIER LETTER LEFT ARROWHEAD">&#706;</button>
            <button title="MODIFIER LETTER RIGHT ARROWHEAD">&#707;</button>
            <button title="MODIFIER LETTER UP ARROWHEAD">&#708;</button>
            <button title="MODIFIER LETTER DOWN ARROWHEAD">&#709;</button>
            <button title="MODIFIER LETTER CIRCUMFLEX ACCENT">&circ;</button>
            <button title="CARON">&#711;</button>
            <button title="MODIFIER LETTER VERTICAL LINE">&#712;</button>
            <button title="MODIFIER LETTER MACRON">&#713;</button>
            <button title="MODIFIER LETTER ACUTE ACCENT">&#714;</button>
            <button title="MODIFIER LETTER GRAVE ACCENT">&#715;</button>
            <button title="MODIFIER LETTER LOW VERTICAL LINE">&#716;</button>
            <button title="MODIFIER LETTER LOW MACRON">&#717;</button>
            <button title="MODIFIER LETTER LOW GRAVE ACCENT">&#718;</button>
            <button title="MODIFIER LETTER LOW ACUTE ACCENT">&#719;</button>
            <button title="MODIFIER LETTER TRIANGULAR COLON">&#720;</button>
            <button title="MODIFIER LETTER HALF TRIANGULAR COLON">&#721;</button>
            <button title="MODIFIER LETTER CENTRED RIGHT HALF RING">&#722;</button>
            <button title="MODIFIER LETTER CENTRED LEFT HALF RING">&#723;</button>
            <button title="MODIFIER LETTER UP TACK">&#724;</button>
            <button title="MODIFIER LETTER DOWN TACK">&#725;</button>
            <button title="MODIFIER LETTER PLUS SIGN">&#726;</button>
            <button title="MODIFIER LETTER MINUS SIGN">&#727;</button>
            <button title="BREVE">&#728;</button>
            <button title="DOT ABOVE">&#729;</button>
            <button title="RING ABOVE">&#730;</button>
            <button title="OGONEK">&#731;</button>
            <button title="SMALL TILDE">&tilde;</button>
            <button title="DOUBLE ACUTE ACCENT">&#733;</button>
            <button title="MODIFIER LETTER RHOTIC HOOK">&#734;</button>
            <button title="MODIFIER LETTER CROSS ACCENT">&#735;</button>
            <button title="MODIFIER LETTER SMALL GAMMA">&#736;</button>
            <button title="MODIFIER LETTER SMALL L">&#737;</button>
            <button title="MODIFIER LETTER SMALL S">&#738;</button>
            <button title="MODIFIER LETTER SMALL X">&#739;</button>
            <button title="MODIFIER LETTER SMALL REVERSED GLOTTAL STOP">&#740;</button>
            <button title="MODIFIER LETTER EXTRA-HIGH TONE BAR">&#741;</button>
            <button title="MODIFIER LETTER HIGH TONE BAR">&#742;</button>
            <button title="MODIFIER LETTER MID TONE BAR">&#743;</button>
            <button title="MODIFIER LETTER LOW TONE BAR">&#744;</button>
            <button title="MODIFIER LETTER EXTRA-LOW TONE BAR">&#745;</button>
            <button title="MODIFIER LETTER YIN DEPARTING TONE MARK">&#746;</button>
            <button title="MODIFIER LETTER YANG DEPARTING TONE MARK">&#747;</button>
            <button title="MODIFIER LETTER VOICING">&#748;</button>
            <button title="MODIFIER LETTER UNASPIRATED">&#749;</button>
            <button title="MODIFIER LETTER DOUBLE APOSTROPHE">&#750;</button>
            <button title="MODIFIER LETTER LOW DOWN ARROWHEAD">&#751;</button>
            <button title="MODIFIER LETTER LOW UP ARROWHEAD">&#752;</button>
            <button title="MODIFIER LETTER LOW LEFT ARROWHEAD">&#753;</button>
            <button title="MODIFIER LETTER LOW RIGHT ARROWHEAD">&#754;</button>
            <button title="MODIFIER LETTER LOW RING">&#755;</button>
            <button title="MODIFIER LETTER MIDDLE GRAVE ACCENT">&#756;</button>
            <button title="MODIFIER LETTER MIDDLE DOUBLE GRAVE ACCENT">&#757;</button>
            <button title="MODIFIER LETTER MIDDLE DOUBLE ACUTE ACCENT">&#758;</button>
            <button title="MODIFIER LETTER LOW TILDE">&#759;</button>
            <button title="MODIFIER LETTER RAISED COLON">&#760;</button>
            <button title="MODIFIER LETTER BEGIN HIGH TONE">&#761;</button>
            <button title="MODIFIER LETTER END HIGH TONE">&#762;</button>
            <button title="MODIFIER LETTER BEGIN LOW TONE">&#763;</button>
            <button title="MODIFIER LETTER END LOW TONE">&#764;</button>
            <button title="MODIFIER LETTER SHELF">&#765;</button>
            <button title="MODIFIER LETTER OPEN SHELF">&#766;</button>
            <button title="MODIFIER LETTER LOW LEFT ARROW">&#767;</button>
        </div>
            
        <div id="divCyrillicSupplement" tabindex="-1" data-group="symbol" class="is-tab-content container clearfix">
        
            <!-- Cyrillic Supplement: https://www.w3schools.com/charsets/ref_utf_cyrillic_supplement.asp -->
            <button title="CYRILLIC CAPITAL LETTER KOMI DE">&#1280;</button>
            <button title="CYRILLIC SMALL LETTER KOMI DE">&#1281;</button>
            <button title="CYRILLIC CAPITAL LETTER KOMI DJE">&#1282;</button>
            <button title="CYRILLIC SMALL LETTER KOMI DJE">&#1283;</button>
            <button title="CYRILLIC CAPITAL LETTER KOMI ZJE">&#1284;</button>
            <button title="CYRILLIC SMALL LETTER KOMI ZJE">&#1285;</button>
            <button title="CYRILLIC CAPITAL LETTER KOMI DZJE">&#1286;</button>
            <button title="CYRILLIC SMALL LETTER KOMI DZJE">&#1287;</button>
            <button title="CYRILLIC CAPITAL LETTER KOMI LJE">&#1288;</button>
            <button title="CYRILLIC SMALL LETTER KOMI LJE">&#1289;</button>
            <button title="CYRILLIC CAPITAL LETTER KOMI NJE">&#1290;</button>
            <button title="CYRILLIC SMALL LETTER KOMI NJE">&#1291;</button>
            <button title="CYRILLIC CAPITAL LETTER KOMI SJE">&#1292;</button>
            <button title="CYRILLIC SMALL LETTER KOMI SJE">&#1293;</button>
            <button title="CYRILLIC CAPITAL LETTER KOMI TJE">&#1294;</button>
            <button title="CYRILLIC SMALL LETTER KOMI TJE">&#1295;</button>
            <!--<button>&#1296;</button>
            <button>&#1297;</button>
            <button>&#1298;</button>
            <button>&#1299;</button>-->
            <button title="CYRILLIC CAPITAL LETTER LHA">&#1300;</button>
            <button title="CYRILLIC SMALL LETTER LHA">&#1301;</button>
            <button title="CYRILLIC CAPITAL LETTER RHA">&#1302;</button>
            <button title="CYRILLIC SMALL LETTER RHA">&#1303;</button>
            <button title="CYRILLIC CAPITAL LETTER YAE">&#1304;</button>
            <button title="CYRILLIC SMALL LETTER YAE">&#1305;</button>
            <button title="CYRILLIC CAPITAL LETTER QA">&#1306;</button>
            <button title="CYRILLIC SMALL LETTER QA">&#1307;</button>
            <button title="CYRILLIC CAPITAL LETTER WE">&#1308;</button>
            <button title="CYRILLIC SMALL LETTER WE">&#1309;</button>
            <button title="CYRILLIC CAPITAL LETTER ALEUT KA">&#1310;</button>
            <button title="CYRILLIC SMALL LETTER ALEUT KA">&#1311;</button>
            <button title="CYRILLIC CAPITAL LETTER EL WITH MIDDLE HOOK">&#1312;</button>
            <button title="CYRILLIC SMALL LETTER EL WITH MIDDLE HOOK">&#1313;</button>
            <button title="CYRILLIC CAPITAL LETTER EN WITH MIDDLE HOOK">&#1314;</button>
            <button title="CYRILLIC SMALL LETTER EN WITH MIDDLE HOOK">&#1315;</button>
            <button title="CYRILLIC CAPITAL LETTER PE WITH DESCENDER">&#1316;</button>
            <button title="CYRILLIC SMALL LETTER PE WITH DESCENDER">&#1317;</button>
            <button title="CYRILLIC CAPITAL LETTER SHHA WITH DESCENDER">&#1318;</button>
            <button title="CYRILLIC SMALL LETTER SHHA WITH DESCENDER">&#1319;</button>
            <!--<button>&#1320;</button>
            <button>&#1321;</button>
            <button>&#1322;</button>
            <button>&#1323;</button>
            <button>&#1324;</button>
            <button>&#1325;</button>
            <button>&#1326;</button>
            <button>&#1327;</button>-->
            
        </div>
        
        <script>
            var docReady = function(fn) {
                var stateCheck = setInterval(function() {
                    if (document.readyState !== "complete") return;
                    clearInterval(stateCheck);
                    try {
                        fn()
                    } catch (e) {}
                }, 1);
            };
            docReady(function() {

                // Close all dropdown
                const closeAllDropdowns = () => {
                    let elms = document.querySelectorAll('.is-tabs-more');
                    Array.prototype.forEach.call(elms, (elm) => {
                        elm.style.display = 'none';
                        elm.setAttribute('aria-expanded', false);
                        elm.classList.remove('active');
                    });
                    document.removeEventListener('click', handleClickOut);
                };
        
                const handleClickOut = e => {
                    if(!(e.target.closest('.is-tab-more') || e.target.closest('[data-menu]'))) {
                        closeAllDropdowns();
                    }
                };

                // Open Tab Content
                const select = (tab) => {

                    const group = tab.parentNode.getAttribute('data-group');

                    const menuid = tab.getAttribute('data-menu');
                    if(menuid) {
                        // Open Dropdown

                        document.addEventListener('click', handleClickOut);
                        tab.setAttribute('aria-expanded', true);

                        const tabMore = document.querySelector('#' + menuid);
                        tabMore.style.display = 'block';
                        tabMore.classList.add('active');
                        
                        let activeItem = document.querySelector('.is-tabs-more[data-group="' + group + '"] > li.active');
                        if(activeItem) activeItem.focus();
                        else {
                            let dropdown = document.querySelector('.is-tabs-more[data-group="' + group + '"]');
                            dropdown.focus();
                        }
                        
                        return false;
                    }

                    if(tab.classList.contains('active')) return false;

                    const id = tab.getAttribute('data-content');
                    if(!id) {
                        return false;
                    }

                    // Highlight selected
                    let samegrouptabs = document.querySelectorAll('.is-tabs[data-group="' + group + '"] > a');
                    Array.prototype.forEach.call(samegrouptabs, (samegrouptab) => {
                        samegrouptab.classList.remove('active');
                    });
                    samegrouptabs = document.querySelectorAll('.is-tabs-more[data-group="' + group + '"] > li');
                    Array.prototype.forEach.call(samegrouptabs, (samegrouptab) => {
                        samegrouptab.classList.remove('active');
                    });
                    tab.classList.add('active');

                    let samegroupcontents = document.querySelectorAll('.is-tab-content[data-group="' + group + '"]');
                    Array.prototype.forEach.call(samegroupcontents, (samegroupcontent) => {
                        samegroupcontent.style.display = 'none';
                        samegroupcontent.classList.remove('active');
                    });
                    const content = document.querySelector('#' + id);
                    content.style.display = 'flex';
                    content.classList.add('active');

                    const tabMore = document.querySelector('.is-tabs-more');
                    tabMore.style.display = 'none';
                    tabMore.classList.remove('active');

                    // Close all dropdown
                    closeAllDropdowns();

                    setupTabKey(content);

                    return false;
                };
                
                let tabs = document.querySelectorAll('.is-tabs a');
                Array.prototype.forEach.call(tabs, (tab) => {

                    tab.addEventListener('keydown', (e)=>{
                        e.preventDefault();

                        if ((e.which === 39 && e.target.nextElementSibling)) { // arrow right key pressed
                            e.target.nextElementSibling.focus();
                        } else if ((e.which === 37 && e.target.previousElementSibling)) { // arrow left key pressed
                            e.target.previousElementSibling.focus();
                        } else if(e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
                            select(e.target);
                        } else if ((e.which === 9 && !e.shiftKey)) { // tab key pressed

                            // Redirect to tab content
                            let inputs = [];
                            const group = tab.parentNode.getAttribute('data-group');
                            let tabContent = tab.parentNode.parentNode.querySelector('.is-tab-content[data-group="' + group + '"].active');
                            let controls = tabContent.querySelectorAll('.is-tabs.active, a[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]');
                            controls.forEach(control=>{
                                inputs.push(control);
                            });

                            if(inputs.length===0) return;

                            let firstInput = inputs[0];

                            firstInput.focus();
                            
                        }
                    });

                    tab.addEventListener('click', (e)=>{
                        e.preventDefault();

                        select(e.target);
                    });

                });

                const dropdowns = document.querySelectorAll('.is-tabs-more'); // //When dropdown opens, press arrow down will set focus on the first item
                Array.prototype.forEach.call(dropdowns, (dropdown) => {

                    dropdown.addEventListener('keydown', (e)=>{
                        e.preventDefault();

                        if(e.keyCode === 40 && e.target.nextElementSibling) { // down
                            dropdown.querySelector('li').focus(); // focus on the first item
                        } else if(e.keyCode === 27) { // escape key
                            // closeAllDropdowns();
                        } 

                    });
                });

                tabs = document.querySelectorAll('.is-tabs-more li');
                Array.prototype.forEach.call(tabs, (tab) => {
        
                    tab.addEventListener('keydown', (e)=>{
                        e.preventDefault();
                        e.stopImmediatePropagation(); // a must, to prevent .is-tabs-more keydown
        
                        if(e.keyCode === 38 && e.target.previousElementSibling) { // up
                            e.target.previousElementSibling.focus();
                        } else if(e.keyCode === 40 && e.target.nextElementSibling) { // down
                            e.target.nextElementSibling.focus();
                        } else if(e.keyCode === 27) { // escape key
                            closeAllDropdowns();
                        } else if(e.keyCode === 13 || e.keyCode === 32) { // enter or spacebar key
        
                            select(e.target);
        
                            if(e.target.closest('.is-tabs-more')) {
            
                                const id = tab.parentNode.getAttribute('id');
                                const btn = document.querySelector('.is-tabs a[data-menu="'+id+'"]');
                                if(btn) btn.focus();
                            }
                        }
        
                    });
        
                    tab.addEventListener('click', (e)=>{
                        e.preventDefault();
        
                        select(e.target);
        
                        if(e.target.closest('.is-tabs-more')) {
        
                            const id = tab.parentNode.getAttribute('id');
                            const btn = document.querySelector('.is-tabs a[data-menu="'+id+'"]');
                            if(btn) btn.focus();
                        }
                    });
               
                });

                const insertSymbol = (btn) => {
                    const val = btn.innerText;
                    parent._cb.pasteHtmlAtCaret(val, true);
                };

                const btnSymbols = document.querySelectorAll('.is-tab-content button');
                Array.prototype.forEach.call(btnSymbols, (btnSymbol) => {
                    btnSymbol.addEventListener('click', (e)=>{
                        e.preventDefault();
        
                        insertSymbol(e.target);
        
                    });
                });

                const setupTabKey = (area) => {

                    // Redirect to tab content
                    let inputs = [];
                    let controls = area.querySelectorAll('.is-tabs.active, a[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]');
                    controls.forEach(control=>{
                        inputs.push(control);
                    });

                    if(inputs.length===0) return;

                    let firstInput = inputs[0];
                    let lastInput = inputs[inputs.length- 1];

                    lastInput.addEventListener('keydown', (e)=>{
                        if ((e.which === 9 && !e.shiftKey)) { 
                            e.preventDefault();

                            // goto parent
                            let id = area.getAttribute('id');
                            const item = document.querySelector('li[data-content="'+id+'"],a[data-content="'+id+'"]');
                            if(item.closest('.is-tabs-more')) {
                                // part of dropdown

                                id = item.parentNode.getAttribute('id');
                                const btn = document.querySelector('.is-tabs a[data-menu="'+id+'"]');
                                if(btn) btn.focus();
                            } else {
                                item.focus();
                            }
                        }
                    });
                    firstInput.addEventListener('keydown', (e)=>{
                        if ((e.which === 9 && e.shiftKey)) { 
                            e.preventDefault();

                            // goto parent
                            let id = area.getAttribute('id');
                            const item = document.querySelector('li[data-content="'+id+'"],a[data-content="'+id+'"]');
                            if(item.closest('.is-tabs-more')) {
                                // part of dropdown

                                id = item.parentNode.getAttribute('id');
                                const btn = document.querySelector('.is-tabs a[data-menu="'+id+'"]');
                                if(btn) btn.focus();
                            } else {
                                item.focus();
                            }
                        }
                    });
                }

                document.addEventListener('keydown', function(e){
                    if(e.keyCode === 27) { // escape key
                        if(document.querySelector('.is-tabs-more.active')) {
                            closeAllDropdowns();
                        } else {
                            const iframe = frameElement;
                            iframe.parentNode.querySelector('.is-side-close').click();
                        }
                    } 
                });

            });
        
        </script>
        </body>
        </html>
        
        `
        return html;
    }
    
    // _cb.addButton2('symbols', button, '.insertsymbol-button', function () {


    // });

})();