(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-254f068c"],{"0025":function(t,e,r){"use strict";r("9060")},"59e6":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",{ref:"scrollWrap",staticClass:"wrap"},[e("div",{staticClass:"backtop-btn",on:{click:t.backToTop}},[t._v("回到顶部")]),e("section",{staticClass:"mock-content"},t._l(t.mockList,(function(r,n){return e("p",{key:n},[t._v("\n          段落"+t._s(r)+"\n      ")])})),0)])},i=[];r("ac6a");function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return o(t)}function c(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function s(t,e){if(t){if("string"==typeof t)return o(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||c(t)||s(t)||l()}var f={data:function(){return{mockList:[]}},created:function(){this.mockList=u(new Array(1e3).keys())},methods:{backToTop:function(){var t=document.querySelector(".main"),e=t.scrollTop,r=100,n=Math.round(e/r);function i(e,r,n,o){requestAnimationFrame((function(){n>o||(t.scrollTop=e-r*n,i(e,r,n+1,o))}))}i(e,r,1,n)}}},L=f,m=(r("0025"),r("2877")),S=Object(m["a"])(L,n,i,!1,null,"1679e3a0",null);e["default"]=S.exports},9060:function(t,e,r){},ac6a:function(t,e,r){for(var n=r("cadf"),i=r("0d58"),o=r("2aba"),a=r("7726"),c=r("32e9"),s=r("84f2"),l=r("2b4c"),u=l("iterator"),f=l("toStringTag"),L=s.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},S=i(m),p=0;p<S.length;p++){var d,y=S[p],T=m[y],b=a[y],h=b&&b.prototype;if(h&&(h[u]||c(h,u,L),h[f]||c(h,f,y),s[y]=L,T))for(d in n)h[d]||o(h,d,n[d],!0)}}}]);