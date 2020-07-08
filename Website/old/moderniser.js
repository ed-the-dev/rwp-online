!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,o,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?w[a[0]]=s:(!w[a[0]]||w[a[0]]instanceof Boolean||(w[a[0]]=new Boolean(w[a[0]])),w[a[0]][a[1]]=s),b.push((s?"":"no-")+a.join("-"))}}function o(e){var t=x.className,n=w._config.classPrefix||"";if(T&&(t=t.baseVal),w._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}w._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?x.className.baseVal=t:x.className=t)}function i(e,t){return!!~(""+e).indexOf(t)}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(){var e=t.body;return e||(e=a(T?"svg":"body"),e.fake=!0),e}function u(e,n,r,s){var o,i,u,f,d="modernizr",p=a("div"),c=l();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=s?s[r]:d+(r+1),p.appendChild(u);return o=a("style"),o.type="text/css",o.id="s"+d,(c.fake?c:p).appendChild(o),c.appendChild(p),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),i=n(p,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=f,x.offsetHeight):p.parentNode.removeChild(p),!!i}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var o=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function p(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(f(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+f(t[s])+":"+r+")");return o=o.join(" or "),u("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function c(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function m(e,t,s,o){function l(){f&&(delete P.style,delete P.modElem)}if(o=!r(o,"undefined")&&o,!r(s,"undefined")){var u=p(e,s);if(!r(u,"undefined"))return u}for(var f,d,m,v,h,y=["modernizr","tspan","samp"];!P.style&&y.length;)f=!0,P.modElem=a(y.shift()),P.style=P.modElem.style;for(m=e.length,d=0;d<m;d++)if(v=e[d],h=P.style[v],i(v,"-")&&(v=c(v)),P.style[v]!==n){if(o||r(s,"undefined"))return l(),"pfx"!=t||v;try{P.style[v]=s}catch(g){}if(P.style[v]!=h)return l(),"pfx"!=t||v}return l(),!1}function v(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var s;for(var o in e)if(e[o]in t)return n===!1?e[o]:(s=t[e[o]],r(s,"function")?v(s,n||t):s);return!1}function y(e,t,n,s,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+E.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?m(a,t,s,o):(a=(e+" "+k.join(i+" ")+i).split(" "),h(a,t,n))}function g(e,t,r){return y(e,n,n,t,r)}var C=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},w=function(){};w.prototype=S,w=new w;var b=[],x=t.documentElement,T="svg"===x.nodeName.toLowerCase(),_="Moz O ms Webkit",E=S._config.usePrefixes?_.split(" "):[];S._cssomPrefixes=E;var A={elem:a("modernizr")};w._q.push(function(){delete A.elem});var P={style:A.elem.style};w._q.unshift(function(){delete P.style});var k=S._config.usePrefixes?_.toLowerCase().split(" "):[];S._domPrefixes=k,S.testAllProps=y,S.testAllProps=g,w.addTest("csstransforms",function(){return navigator.userAgent.indexOf("Android 2.")===-1&&g("transform","scale(1)",!0)});var z="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;w.addTest("supports",z||N),w.addTest("csstransforms3d",function(){return!!g("perspective","1px",!0)}),w.addTest("preserve3d",function(){var t,n,r=e.CSS,s=!1;return!!(r&&r.supports&&r.supports("(transform-style: preserve-3d)"))||(t=a("a"),n=a("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),x.appendChild(t),s=n.getBoundingClientRect(),x.removeChild(t),s=s.width&&s.width<4)});var j=function(){function e(e,t){var s;return!!e&&(t&&"string"!=typeof t||(t=a(t||"div")),e="on"+e,s=e in t,!s&&r&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),s="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),s)}var r=!("onblur"in t.documentElement);return e}();S.hasEvent=j,w.addTest("pointerevents",function(){var e=!1,t=k.length;for(e=w.hasEvent("pointerdown");t--&&!e;)j(k[t]+"pointerdown")&&(e=!0);return e}),s(),o(b),delete S.addTest,delete S.addAsyncTest;for(var q=0;q<w._q.length;q++)w._q[q]();e.Modernizr=w}(window,document);