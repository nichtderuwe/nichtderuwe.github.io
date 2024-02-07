/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),C.push((o?"":"no-")+s.join("-"))}}function i(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?b.className.baseVal=t:b.className=t)}function a(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,a,l,c,f="modernizr",d=s("div"),p=u();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=c,b.offsetHeight):d.parentNode.removeChild(d),!!a}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function p(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+f(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function m(e,t,o,i){function u(){f&&(delete P.style,delete P.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var c=p(e,o);if(!r(c,"undefined"))return c}for(var f,d,m,h,g,v=["modernizr","tspan","samp"];!P.style&&v.length;)f=!0,P.modElem=s(v.shift()),P.style=P.modElem.style;for(m=e.length,d=0;m>d;d++)if(h=e[d],g=P.style[h],a(h,"-")&&(h=l(h)),P.style[h]!==n){if(i||r(o,"undefined"))return u(),"pfx"==t?h:!0;try{P.style[h]=o}catch(y){}if(P.style[h]!=g)return u(),"pfx"==t?h:!0}return u(),!1}function h(e,t){return function(){return e.apply(t,arguments)}}function g(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?h(o,n||t):o);return!1}function v(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+T.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?m(s,t,o,i):(s=(e+" "+N.join(a+" ")+a).split(" "),g(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var C=[],S=[],E={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr;var b=t.documentElement,x="svg"===b.nodeName.toLowerCase(),w=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];E._prefixes=w;x||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var _="Moz O ms Webkit",N=E._config.usePrefixes?_.toLowerCase().split(" "):[];E._domPrefixes=N;var z=(E.testStyles=c,{elem:s("modernizr")});Modernizr._q.push(function(){delete z.elem});var P={style:z.elem.style};Modernizr._q.unshift(function(){delete P.style});var j=(E.testProp=function(e,t,r){return m([e],n,t,r)},"CSS"in e&&"supports"in e.CSS),k="supportsCSS"in e;Modernizr.addTest("supports",j||k);var T=E._config.usePrefixes?_.split(" "):[];E._cssomPrefixes=T,E.testAllProps=v,E.testAllProps=y,Modernizr.addTest("csstransforms3d",function(){return!!y("perspective","1px",!0)}),o(),i(C),delete E.addTest,delete E.addAsyncTest;for(var F=0;F<Modernizr._q.length;F++)Modernizr._q[F]();e.Modernizr=Modernizr}(window,document);// Scrollbar Width function
function getScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
};

function setMenuHeight() {
    $('#sidebar .highlightable').height($('#sidebar').innerHeight() - $('#header-wrapper').height() - 40);
    $('#sidebar .highlightable').perfectScrollbar('update');
}

function fallbackMessage(action) {
    var actionMsg = '';
    var actionKey = (action === 'cut' ? 'X' : 'C');

    if (/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'No support :(';
    }
    else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
    }
    else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
    }

    return actionMsg;
}

function switchTab(tabGroup, tabId) {
    allTabItems = jQuery("[data-tab-group='"+tabGroup+"']");
    targetTabItems = jQuery("[data-tab-group='"+tabGroup+"'][data-tab-item='"+tabId+"']");

    // if event is undefined then switchTab was called from restoreTabSelection
    // so it's not a button event and we don't need to safe the selction or
    // prevent page jump
    var isButtonEvent = event != undefined;

    if(isButtonEvent){
      // save button position relative to viewport
      var yposButton = event.target.getBoundingClientRect().top;
    }

    allTabItems.removeClass("active");
    targetTabItems.addClass("active");

    if(isButtonEvent){
      // reset screen to the same position relative to clicked button to prevent page jump
      var yposButtonDiff = event.target.getBoundingClientRect().top - yposButton;
      window.scrollTo(window.scrollX, window.scrollY+yposButtonDiff);

      // Store the selection to make it persistent
      if(window.localStorage){
          var selectionsJSON = window.localStorage.getItem("tabSelections");
          if(selectionsJSON){
            var tabSelections = JSON.parse(selectionsJSON);
          }else{
            var tabSelections = {};
          }
          tabSelections[tabGroup] = tabId;
          window.localStorage.setItem("tabSelections", JSON.stringify(tabSelections));
      }
    }
}

function restoreTabSelections() {
    if(window.localStorage){
        var selectionsJSON = window.localStorage.getItem("tabSelections");
        if(selectionsJSON){
          var tabSelections = JSON.parse(selectionsJSON);
        }else{
          var tabSelections = {};
        }
        Object.keys(tabSelections).forEach(function(tabGroup) {
          var tabItem = tabSelections[tabGroup];
          switchTab(tabGroup, tabItem);
        });
    }
}

// for the window resize
$(window).resize(function() {
    setMenuHeight();
});

// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
(function($, sr) {

    var debounce = function(func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this, args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize
    jQuery.fn[sr] = function(fn) { return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery, 'smartresize');


jQuery(document).ready(function() {
    restoreTabSelections();

    jQuery('#sidebar .category-icon').on('click', function() {
        $( this ).toggleClass("fa-angle-down fa-angle-right") ;
        $( this ).parent().parent().children('ul').toggle() ;
        return false;
    });

    var sidebarStatus = searchStatus = 'open';
    $('#sidebar .highlightable').perfectScrollbar();
    setMenuHeight();

    jQuery('#overlay').on('click', function() {
        jQuery(document.body).toggleClass('sidebar-hidden');
        sidebarStatus = (jQuery(document.body).hasClass('sidebar-hidden') ? 'closed' : 'open');

        return false;
    });

    jQuery('[data-sidebar-toggle]').on('click', function() {
        jQuery(document.body).toggleClass('sidebar-hidden');
        sidebarStatus = (jQuery(document.body).hasClass('sidebar-hidden') ? 'closed' : 'open');

        return false;
    });
    jQuery('[data-clear-history-toggle]').on('click', function() {
        sessionStorage.clear();
        location.reload();
        return false;
    });
    jQuery('[data-search-toggle]').on('click', function() {
        if (sidebarStatus == 'closed') {
            jQuery('[data-sidebar-toggle]').trigger('click');
            jQuery(document.body).removeClass('searchbox-hidden');
            searchStatus = 'open';

            return false;
        }

        jQuery(document.body).toggleClass('searchbox-hidden');
        searchStatus = (jQuery(document.body).hasClass('searchbox-hidden') ? 'closed' : 'open');

        return false;
    });

    var ajax;
    jQuery('[data-search-input]').on('input', function() {
        var input = jQuery(this),
            value = input.val(),
            items = jQuery('[data-nav-id]');
        items.removeClass('search-match');
        if (!value.length) {
            $('ul.topics').removeClass('searched');
            items.css('display', 'block');
            sessionStorage.removeItem('search-value');
            $(".highlightable").unhighlight({ element: 'mark' })
            return;
        }

        sessionStorage.setItem('search-value', value);
        $(".highlightable").unhighlight({ element: 'mark' }).highlight(value, { element: 'mark' });

        if (ajax && ajax.abort) ajax.abort();

        jQuery('[data-search-clear]').on('click', function() {
            jQuery('[data-search-input]').val('').trigger('input');
            sessionStorage.removeItem('search-input');
            $(".highlightable").unhighlight({ element: 'mark' })
        });
    });

    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    if (sessionStorage.getItem('search-value')) {
        var searchValue = sessionStorage.getItem('search-value')
        $(document.body).removeClass('searchbox-hidden');
        $('[data-search-input]').val(searchValue);
        $('[data-search-input]').trigger('input');
        var searchedElem = $('#body-inner').find(':contains(' + searchValue + ')').get(0);
        if (searchedElem) {
            searchedElem.scrollIntoView(true);
            var scrolledY = window.scrollY;
            if(scrolledY){
                window.scroll(0, scrolledY - 125);
            }
        }
    }

    // clipboard
    var clipInit = false;
    $('code').each(function() {
        var code = $(this),
            text = code.text();

        if (text.length > 5) {
            if (!clipInit) {
                var text, clip = new ClipboardJS('.copy-to-clipboard', {
                    text: function(trigger) {
                        text = $(trigger).prev('code').text();
                        return text.replace(/^\$\s/gm, '');
                    }
                });

                var inPre;
                clip.on('success', function(e) {
                    e.clearSelection();
                    inPre = $(e.trigger).parent().prop('tagName') == 'PRE';
                    $(e.trigger).attr('aria-label', 'Copied to clipboard!').addClass('tooltipped tooltipped-' + (inPre ? 'w' : 's'));
                });

                clip.on('error', function(e) {
                    inPre = $(e.trigger).parent().prop('tagName') == 'PRE';
                    $(e.trigger).attr('aria-label', fallbackMessage(e.action)).addClass('tooltipped tooltipped-' + (inPre ? 'w' : 's'));
                    $(document).one('copy', function(){
                        $(e.trigger).attr('aria-label', 'Copied to clipboard!').addClass('tooltipped tooltipped-' + (inPre ? 'w' : 's'));
                    });
                });

                clipInit = true;
            }

            code.after('<span class="copy-to-clipboard" title="Copy to clipboard" />');
            code.next('.copy-to-clipboard').on('mouseleave', function() {
                $(this).attr('aria-label', null).removeClass('tooltipped tooltipped-s tooltipped-w');
            });
        }
    });

    // allow keyboard control for prev/next links
    jQuery(function() {
        jQuery('.nav-prev').click(function(){
            location.href = jQuery(this).attr('href');
        });
        jQuery('.nav-next').click(function() {
            location.href = jQuery(this).attr('href');
        });
    });

    jQuery('input, textarea').keydown(function (e) {
         //  left and right arrow keys
         if (e.which == '37' || e.which == '39') {
             e.stopPropagation();
         }
     });

    jQuery(document).keydown(function(e) {
      // prev links - left arrow key
      if(e.which == '37') {
        jQuery('.nav.nav-prev').click();
      }

      // next links - right arrow key
      if(e.which == '39') {
        jQuery('.nav.nav-next').click();
      }
    });

    $('#top-bar a:not(:has(img)):not(.btn)').addClass('highlight');
    $('#body-inner a:not(:has(img)):not(.btn):not(a[rel="footnote"])').addClass('highlight');

    var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
    if (!touchsupport){ // browser doesn't support touch
        $('#toc-menu').hover(function() {
            $('.progress').stop(true, false, true).fadeToggle(100);
        });

        $('.progress').hover(function() {
            $('.progress').stop(true, false, true).fadeToggle(100);
        });
    }
    if (touchsupport){ // browser does support touch
        $('#toc-menu').click(function() {
            $('.progress').stop(true, false, true).fadeToggle(100);
        });
        $('.progress').click(function() {
            $('.progress').stop(true, false, true).fadeToggle(100);
        });
    }

    /**
    * Fix anchor scrolling that hides behind top nav bar
    * Courtesy of https://stackoverflow.com/a/13067009/28106
    *
    * We could use pure css for this if only heading anchors were
    * involved, but this works for any anchor, including footnotes
    **/
    (function (document, history, location) {
        var HISTORY_SUPPORT = !!(history && history.pushState);

        var anchorScrolls = {
            ANCHOR_REGEX: /^#[^ ]+$/,
            OFFSET_HEIGHT_PX: 50,

            /**
             * Establish events, and fix initial scroll position if a hash is provided.
             */
            init: function () {
                this.scrollToCurrent();
                $(window).on('hashchange', $.proxy(this, 'scrollToCurrent'));
                $('body').on('click', 'a', $.proxy(this, 'delegateAnchors'));
            },

            /**
             * Return the offset amount to deduct from the normal scroll position.
             * Modify as appropriate to allow for dynamic calculations
             */
            getFixedOffset: function () {
                return this.OFFSET_HEIGHT_PX;
            },

            /**
             * If the provided href is an anchor which resolves to an element on the
             * page, scroll to it.
             * @param  {String} href
             * @return {Boolean} - Was the href an anchor.
             */
            scrollIfAnchor: function (href, pushToHistory) {
                var match, anchorOffset;

                if (!this.ANCHOR_REGEX.test(href)) {
                    return false;
                }

                match = document.getElementById(href.slice(1));

                if (match) {
                    anchorOffset = $(match).offset().top - this.getFixedOffset();
                    $('html, body').animate({ scrollTop: anchorOffset });

                    // Add the state to history as-per normal anchor links
                    if (HISTORY_SUPPORT && pushToHistory) {
                        history.pushState({}, document.title, location.pathname + href);
                    }
                }

                return !!match;
            },

            /**
             * Attempt to scroll to the current location's hash.
             */
            scrollToCurrent: function (e) {
                if (this.scrollIfAnchor(window.location.hash) && e) {
                    e.preventDefault();
                }
            },

            /**
             * If the click event's target was an anchor, fix the scroll position.
             */
            delegateAnchors: function (e) {
                var elem = e.target;

                if (this.scrollIfAnchor(elem.getAttribute('href'), true)) {
                    e.preventDefault();
                }
            }
        };

        $(document).ready($.proxy(anchorScrolls, 'init'));
    })(window.document, window.history, window.location);

});

jQuery(window).on('load', function() {
    // store this page in session
    sessionStorage.setItem(jQuery('body').data('url'), 1);

    // loop through the sessionStorage and see if something should be marked as visited
    for (var url in sessionStorage) {
        if (sessionStorage.getItem(url) == 1) jQuery('[data-nav-id="' + url + '"]').addClass('visited');
    }


    $(".highlightable").highlight(sessionStorage.getItem('search-value'), { element: 'mark' });
});

$(function() {
    $('a[rel="lightbox"]').featherlight({
        root: 'section#body'
    });
});

jQuery.extend({
    highlight: function(node, re, nodeName, className) {
        if (node.nodeType === 3) {
            var match = node.data.match(re);
            if (match) {
                var highlight = document.createElement(nodeName || 'span');
                highlight.className = className || 'highlight';
                var wordNode = node.splitText(match.index);
                wordNode.splitText(match[0].length);
                var wordClone = wordNode.cloneNode(true);
                highlight.appendChild(wordClone);
                wordNode.parentNode.replaceChild(highlight, wordNode);
                return 1; //skip added node in parent
            }
        } else if ((node.nodeType === 1 && node.childNodes) && // only element nodes that have children
            !/(script|style)/i.test(node.tagName) && // ignore script and style nodes
            !(node.tagName === nodeName.toUpperCase() && node.className === className)) { // skip if already highlighted
            for (var i = 0; i < node.childNodes.length; i++) {
                i += jQuery.highlight(node.childNodes[i], re, nodeName, className);
            }
        }
        return 0;
    }
});

jQuery.fn.unhighlight = function(options) {
    var settings = {
        className: 'highlight',
        element: 'span'
    };
    jQuery.extend(settings, options);

    return this.find(settings.element + "." + settings.className).each(function() {
        var parent = this.parentNode;
        parent.replaceChild(this.firstChild, this);
        parent.normalize();
    }).end();
};

jQuery.fn.highlight = function(words, options) {
    var settings = {
        className: 'highlight',
        element: 'span',
        caseSensitive: false,
        wordsOnly: false
    };
    jQuery.extend(settings, options);

    if (!words) { return; }

    if (words.constructor === String) {
        words = [words];
    }
    words = jQuery.grep(words, function(word, i) {
        return word != '';
    });
    words = jQuery.map(words, function(word, i) {
        return word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    });
    if (words.length == 0) { return this; }
    ;

    var flag = settings.caseSensitive ? "" : "i";
    var pattern = "(" + words.join("|") + ")";
    if (settings.wordsOnly) {
        pattern = "\\b" + pattern + "\\b";
    }
    var re = new RegExp(pattern, flag);

    return this.each(function() {
        jQuery.highlight(this, re, settings.element, settings.className);
    });
};
// Get Parameters from some url
var getUrlParameter = function getUrlParameter(sPageURL) {
    var url = sPageURL.split('?');
    var obj = {};
    if (url.length == 2) {
      var sURLVariables = url[1].split('&'),
          sParameterName,
          i;
      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');
          obj[sParameterName[0]] = sParameterName[1];
      }
    }
    return obj;
};

// Execute actions on images generated from Markdown pages
var images = $("div#body-inner img").not(".inline");
// Wrap image inside a featherlight (to get a full size view in a popup)
images.wrap(function(){
  var image =$(this);
  var o = getUrlParameter(image[0].src);
  var f = o['featherlight'];
  // IF featherlight is false, do not use feather light
  if (f != 'false') {
    if (!image.parent("a").length) {
      return "<a href='" + image[0].src + "' data-featherlight='image'></a>";
    }
  }
});

// Change styles, depending on parameters set to the image
images.each(function(index){
  var image = $(this)
  var o = getUrlParameter(image[0].src);
  if (typeof o !== "undefined") {
    var h = o["height"];
    var w = o["width"];
    var c = o["classes"];
    image.css("width", function() {
      if (typeof w !== "undefined") {
        return w;
      } else {
        return "auto";
      }
    });
    image.css("height", function() {
      if (typeof h !== "undefined") {
        return h;
      } else {
        return "auto";
      }
    });
    if (typeof c !== "undefined") {
      var classes = c.split(',');
      for (i = 0; i < classes.length; i++) {
        image.addClass(classes[i]);
      }
    }
  }
});

// Stick the top to the top of the screen when  scrolling
$(document).ready(function(){
  $("#top-bar").sticky({topSpacing:0, zIndex: 1000});
});


jQuery(document).ready(function() {
  // Add link button for every
  var text, clip = new ClipboardJS('.anchor');
  $("h1~h2,h1~h3,h1~h4,h1~h5,h1~h6").append(function(index, html){
    var element = $(this);
    var url = encodeURI(document.location.origin + document.location.pathname);
    var link = url + "#"+element[0].id;
    return " <span class='anchor' data-clipboard-text='"+link+"'>" +
      "<i class='fas fa-link fa-lg'></i>" +
      "</span>"
    ;
  });

  $(".anchor").on('mouseleave', function(e) {
    $(this).attr('aria-label', null).removeClass('tooltipped tooltipped-s tooltipped-w');
  });

  clip.on('success', function(e) {
      e.clearSelection();
      $(e.trigger).attr('aria-label', 'Link copied to clipboard!').addClass('tooltipped tooltipped-s');
  });
  $('code.language-mermaid').each(function(index, element) {
    var content = $(element).html().replace(/&amp;/g, '&');
    $(element).parent().replaceWith('<div class="mermaid" align="center">' + content + '</div>');
  });
});
