(function(window){var svgSprite='<svg><symbol id="icon-cinema" viewBox="0 0 1024 1024"><path d="M896 768c-17.6 0-32-14.4-32-32V192c0-17.6-14.4-32-32-32H192c-17.6 0-32 14.4-32 32v544c0 17.6-14.4 32-32 32s-32-14.4-32-32V192c0-52.8 43.2-96 96-96h640c52.8 0 96 43.2 96 96v544c0 17.6-14.4 32-32 32zM896 928H128c-17.6 0-32-14.4-32-32s14.4-32 32-32h768c17.6 0 32 14.4 32 32s-14.4 32-32 32z"  ></path><path d="M736 768H288c-17.6 0-32-14.4-32-32s14.4-32 32-32h448c17.6 0 32 14.4 32 32s-14.4 32-32 32zM512 360c-86.4 0-168-14.4-236.8-41.6-16-6.4-24-25.6-17.6-41.6 6.4-16 25.6-24 41.6-17.6 59.2 24 134.4 38.4 211.2 38.4s152-12.8 211.2-38.4c16-6.4 35.2 1.6 41.6 17.6 6.4 16-1.6 35.2-17.6 41.6-65.6 27.2-147.2 41.6-233.6 41.6z"  ></path><path d="M128 768c-17.6 0-32-14.4-32-32 0-83.2 36.8-139.2 73.6-192 43.2-64 86.4-129.6 86.4-256 0-17.6 14.4-32 32-32s32 14.4 32 32c0 145.6-54.4 227.2-97.6 291.2C187.2 632 160 672 160 736c0 17.6-14.4 32-32 32zM896 768c-17.6 0-32-14.4-32-32 0-64-27.2-104-62.4-156.8-43.2-64-97.6-145.6-97.6-291.2 0-17.6 14.4-32 32-32s32 14.4 32 32c0 126.4 44.8 192 86.4 256 35.2 52.8 73.6 108.8 73.6 192 0 17.6-14.4 32-32 32z"  ></path></symbol><symbol id="icon-tubiaolunkuo-" viewBox="0 0 1024 1024"><path d="M512 652.8c-160 0-294.4-134.4-294.4-294.4S352 64 512 64s294.4 134.4 294.4 294.4-134.4 294.4-294.4 294.4z m0-550.4c-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256-115.2-256-256-256z" fill="" ></path><path d="M940.8 966.4c-6.4 0-19.2-6.4-19.2-19.2-25.6-166.4-204.8-288-409.6-288s-377.6 121.6-409.6 288c0 12.8-12.8 19.2-19.2 12.8-12.8 0-19.2-12.8-19.2-19.2 32-179.2 224-320 448-320s416 140.8 448 320c0 12.8-6.4 25.6-19.2 25.6zM512 544c-76.8 0-140.8-44.8-160-115.2-6.4-12.8 0-19.2 12.8-25.6 12.8 0 19.2 0 25.6 12.8 19.2 57.6 70.4 89.6 128 89.6 57.6 0 108.8-38.4 128-89.6 6.4-12.8 12.8-12.8 25.6-12.8 12.8 6.4 12.8 12.8 12.8 25.6-32 70.4-102.4 115.2-172.8 115.2z" fill="" ></path></symbol><symbol id="icon-dianying" viewBox="0 0 1024 1024"><path d="M488 416c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40zM312 640c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40z m224 320c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40z m176-80c-57.6 0-104-46.4-104-104s46.4-104 104-104 104 46.4 104 104-46.4 104-104 104z m0-144c-22.4 0-40 17.6-40 40s17.6 40 40 40 40-17.6 40-40-17.6-40-40-40z m216 512H512C265.6 960 64 758.4 64 512S265.6 64 512 64s448 201.6 448 448c0 121.6-48 235.2-134.4 320-12.8 12.8-33.6 12.8-44.8 0-12.8-12.8-12.8-33.6 0-44.8C854.4 713.6 896 616 896 512c0-211.2-172.8-384-384-384S128 300.8 128 512s172.8 384 384 384h416c17.6 0 32 14.4 32 32s-14.4 32-32 32z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)