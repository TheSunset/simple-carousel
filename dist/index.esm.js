import e,{useState as n,useRef as t,useEffect as r}from"react";import a from"styled-components";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},l.apply(this,arguments)};function o(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var i,u,c,s="Carousel-module_carousel__o94Ph",f="Carousel-module_wrap__3Zvdc",d="Carousel-module_slide__JHqvG",m="Carousel-module_pagination__gYA5f",h="Carousel-module_active__jTUJt",p="Carousel-module_inactive__ofzHH",g=a.div(i||(i=o(["\n  position: relative;\n  width: ",";\n  height: ",";\n  overflow: hidden;\n  text-align: center;\n"],["\n  position: relative;\n  width: ",";\n  height: ",";\n  overflow: hidden;\n  text-align: center;\n"])),(function(e){return e.width+"px"}),(function(e){return e.height+"px"})),v=a.div(u||(u=o(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: ",";\n"],["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  transition: ",";\n"])),(function(e){return"transform "+e.speed+"ms"})),y=a.div(c||(c=o(["\n  background-color: #ffffff;\n  height: 100%;\n  width: 100%;\n  transform: translate3d(-100%, 0, 0);\n  transition: ",";\n"],["\n  background-color: #ffffff;\n  height: 100%;\n  width: 100%;\n  transform: translate3d(-100%, 0, 0);\n  transition: ",";\n"])),(function(e){return"transform "+e.delay+"ms linear"}));function _(a){var o=n(0),i=o[0],u=o[1],c=t();return r((function(){return u((function(e){return(e+1)%a.data.length})),c.current=setInterval((function(){u((function(e){return(e+1)%a.data.length}))}),a.delay),function(){c.current&&clearInterval(c.current)}}),[a.delay,a.data.length]),e.createElement(g,l({},a,{className:s}),e.createElement(v,l({},a,{className:f,style:{transform:"translate3d("+-i*a.width+"px, 0, 0)"}}),a.data.map((function(n,t){return e.createElement("div",{key:t,className:d,style:{color:n.style.color,backgroundImage:"url("+n.style.backgroundImage+")"}},e.createElement("h3",null,n.title.map((function(n,t){return e.createElement(e.Fragment,{key:t},n,e.createElement("br",null))}))),e.createElement("p",null,n.desc.map((function(n,t){return e.createElement(e.Fragment,{key:t},n,e.createElement("br",null))}))))}))),e.createElement("ul",{className:m},new Array(a.data.length).fill(null).map((function(n,t){return e.createElement("li",{key:t,className:i===t?h:p},e.createElement(y,l({},a)))}))))}export{_ as default};
