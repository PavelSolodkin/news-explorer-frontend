!function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";i.r(t);i(1);var n=document.querySelector("#popup-signin"),o=document.querySelector("#popup-signup"),s=document.querySelector("#popup-success"),r=document.querySelector("#close"),c=document.querySelector("#close2"),u=document.querySelector("#close3"),l=document.querySelector("#close4"),p=document.querySelector("#authorization"),a=document.querySelector("#registration"),d=document.querySelector("#success"),_=document.querySelector("#changeButton"),v=document.querySelector("#greta"),y=document.querySelector("#saves"),f=document.querySelector("#openMenu");p.addEventListener("click",(function(){n.classList.add("popup_type_visible")})),a.addEventListener("click",(function(){n.classList.remove("popup_type_visible"),o.classList.add("popup2_type_visible")})),d.addEventListener("click",(function(){o.classList.remove("popup2_type_visible"),s.classList.add("popup3_type_visible")})),r.addEventListener("click",(function(){n.classList.remove("popup_type_visible")})),c.addEventListener("click",(function(){o.classList.remove("popup2_type_visible")})),u.addEventListener("click",(function(){s.classList.remove("popup3_type_visible")})),_.addEventListener("click",(function(){s.classList.remove("popup3_type_visible"),p.classList.add("button_type_author_invisible"),v.classList.add("button_type_greta_light_visible"),y.classList.add("news__item_type_invisible_visible")})),v.addEventListener("click",(function(){p.classList.remove("button_type_author_invisible"),v.classList.remove("button_type_greta_light_visible"),y.classList.remove("news__item_type_invisible_visible")})),f.addEventListener("click",(function(){menu.classList.add("menu_type_visible")})),l.addEventListener("click",(function(){menu.classList.remove("menu_type_visible")}))},function(e,t,i){}]);