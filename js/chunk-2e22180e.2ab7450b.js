(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e22180e"],{"1c4c":function(t,e,r){"use strict";var n=r("9b43"),i=r("5ca1"),o=r("4bf8"),a=r("1fa8"),c=r("33a4"),u=r("9def"),f=r("f1ae"),s=r("27ee");i(i.S+i.F*!r("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,r,i,l,h=o(t),p="function"==typeof this?this:Array,v=arguments.length,y=v>1?arguments[1]:void 0,d=void 0!==y,g=0,m=s(h);if(d&&(y=n(y,v>2?arguments[2]:void 0,2)),void 0==m||p==Array&&c(m))for(e=u(h.length),r=new p(e);e>g;g++)f(r,g,d?y(h[g],g):h[g]);else for(l=m.call(h),r=new p;!(i=l.next()).done;g++)f(r,g,d?a(l,y,[i.value,g],!0):i.value);return r.length=g,r}})},"37c8":function(t,e,r){e.f=r("2b4c")},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"3a72":function(t,e,r){var n=r("7726"),i=r("8378"),o=r("2d00"),a=r("37c8"),c=r("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},"5b13":function(t,e,r){"use strict";r("c3cb")},"5df3":function(t,e,r){"use strict";var n=r("02f4")(!0);r("01f9")(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})}))},"67ab":function(t,e,r){var n=r("ca5a")("meta"),i=r("d3f4"),o=r("69a8"),a=r("86cc").f,c=0,u=Object.isExtensible||function(){return!0},f=!r("79e5")((function(){return u(Object.preventExtensions({}))})),s=function(t){a(t,n,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,n)){if(!u(t))return"F";if(!e)return"E";s(t)}return t[n].i},h=function(t,e){if(!o(t,n)){if(!u(t))return!0;if(!e)return!1;s(t)}return t[n].w},p=function(t){return f&&v.NEED&&u(t)&&!o(t,n)&&s(t),t},v=t.exports={KEY:n,NEED:!1,fastKey:l,getWeak:h,onFreeze:p}},"6b54":function(t,e,r){"use strict";r("3846");var n=r("cb7c"),i=r("0bfb"),o=r("9e1e"),a="toString",c=/./[a],u=function(t){r("2aba")(RegExp.prototype,a,t,!0)};r("79e5")((function(){return"/a/b"!=c.call({source:"a",flags:"b"})}))?u((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):c.name!=a&&u((function(){return c.call(this)}))},"7bbc":function(t,e,r){var n=r("6821"),i=r("9093").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(n(t))}},"8a81":function(t,e,r){"use strict";var n=r("7726"),i=r("69a8"),o=r("9e1e"),a=r("5ca1"),c=r("2aba"),u=r("67ab").KEY,f=r("79e5"),s=r("5537"),l=r("7f20"),h=r("ca5a"),p=r("2b4c"),v=r("37c8"),y=r("3a72"),d=r("d4c0"),g=r("1169"),m=r("cb7c"),b=r("d3f4"),w=r("4bf8"),S=r("6821"),L=r("6a99"),x=r("4630"),E=r("2aeb"),O=r("7bbc"),k=r("11e9"),T=r("2621"),P=r("86cc"),_=r("0d58"),j=k.f,N=P.f,R=O.f,F=n.Symbol,A=n.JSON,C=A&&A.stringify,M="prototype",z=p("_hidden"),G=p("toPrimitive"),U={}.propertyIsEnumerable,I=s("symbol-registry"),D=s("symbols"),H=s("op-symbols"),V=Object[M],J="function"==typeof F&&!!T.f,Y=n.QObject,K=!Y||!Y[M]||!Y[M].findChild,W=o&&f((function(){return 7!=E(N({},"a",{get:function(){return N(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=j(V,e);n&&delete V[e],N(t,e,r),n&&t!==V&&N(V,e,n)}:N,q=function(t){var e=D[t]=E(F[M]);return e._k=t,e},B=J&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Q=function(t,e,r){return t===V&&Q(H,e,r),m(t),e=L(e,!0),m(r),i(D,e)?(r.enumerable?(i(t,z)&&t[z][e]&&(t[z][e]=!1),r=E(r,{enumerable:x(0,!1)})):(i(t,z)||N(t,z,x(1,{})),t[z][e]=!0),W(t,e,r)):N(t,e,r)},X=function(t,e){m(t);var r,n=d(e=S(e)),i=0,o=n.length;while(o>i)Q(t,r=n[i++],e[r]);return t},$=function(t,e){return void 0===e?E(t):X(E(t),e)},Z=function(t){var e=U.call(this,t=L(t,!0));return!(this===V&&i(D,t)&&!i(H,t))&&(!(e||!i(this,t)||!i(D,t)||i(this,z)&&this[z][t])||e)},tt=function(t,e){if(t=S(t),e=L(e,!0),t!==V||!i(D,e)||i(H,e)){var r=j(t,e);return!r||!i(D,e)||i(t,z)&&t[z][e]||(r.enumerable=!0),r}},et=function(t){var e,r=R(S(t)),n=[],o=0;while(r.length>o)i(D,e=r[o++])||e==z||e==u||n.push(e);return n},rt=function(t){var e,r=t===V,n=R(r?H:S(t)),o=[],a=0;while(n.length>a)!i(D,e=n[a++])||r&&!i(V,e)||o.push(D[e]);return o};J||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),e=function(r){this===V&&e.call(H,r),i(this,z)&&i(this[z],t)&&(this[z][t]=!1),W(this,t,x(1,r))};return o&&K&&W(V,t,{configurable:!0,set:e}),q(t)},c(F[M],"toString",(function(){return this._k})),k.f=tt,P.f=Q,r("9093").f=O.f=et,r("52a7").f=Z,T.f=rt,o&&!r("2d00")&&c(V,"propertyIsEnumerable",Z,!0),v.f=function(t){return q(p(t))}),a(a.G+a.W+a.F*!J,{Symbol:F});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;nt.length>it;)p(nt[it++]);for(var ot=_(p.store),at=0;ot.length>at;)y(ot[at++]);a(a.S+a.F*!J,"Symbol",{for:function(t){return i(I,t+="")?I[t]:I[t]=F(t)},keyFor:function(t){if(!B(t))throw TypeError(t+" is not a symbol!");for(var e in I)if(I[e]===t)return e},useSetter:function(){K=!0},useSimple:function(){K=!1}}),a(a.S+a.F*!J,"Object",{create:$,defineProperty:Q,defineProperties:X,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:rt});var ct=f((function(){T.f(1)}));a(a.S+a.F*ct,"Object",{getOwnPropertySymbols:function(t){return T.f(w(t))}}),A&&a(a.S+a.F*(!J||f((function(){var t=F();return"[null]"!=C([t])||"{}"!=C({a:t})||"{}"!=C(Object(t))}))),"JSON",{stringify:function(t){var e,r,n=[t],i=1;while(arguments.length>i)n.push(arguments[i++]);if(r=e=n[1],(b(e)||void 0!==t)&&!B(t))return g(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!B(e))return e}),n[1]=e,C.apply(A,n)}}),F[M][G]||r("32e9")(F[M],G,F[M].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(F){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),c=new j(n||[]);return i(a,"_invoke",{value:k(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=s;var h="suspendedStart",p="suspendedYield",v="executing",y="completed",d={};function g(){}function m(){}function b(){}var w={};f(w,a,(function(){return this}));var S=Object.getPrototypeOf,L=S&&S(S(N([])));L&&L!==r&&n.call(L,a)&&(w=L);var x=b.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(i,o,a,c){var u=l(t[i],t,o);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"===typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function a(t,n){function i(){return new e((function(e,i){r(t,n,e,i)}))}return o=o?o.then(i,i):i()}i(this,"_invoke",{value:a})}function k(t,e,r){var n=h;return function(i,o){if(n===v)throw new Error("Generator is already running");if(n===y){if("throw"===i)throw o;return R()}r.method=i,r.arg=o;while(1){var a=r.delegate;if(a){var c=T(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?y:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}function T(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator["return"]&&(r.method="return",r.arg=e,T(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=l(i,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(t){if(null!=t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}function R(){return{value:e,done:!0}}return m.prototype=b,i(x,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:m,configurable:!0}),m.displayName=f(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(O.prototype),f(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new O(s(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),f(x,u,"Generator"),f(x,a,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){while(r.length){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return c.type="throw",c.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;_(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},ac4d:function(t,e,r){r("3a72")("asyncIterator")},ac6a:function(t,e,r){for(var n=r("cadf"),i=r("0d58"),o=r("2aba"),a=r("7726"),c=r("32e9"),u=r("84f2"),f=r("2b4c"),s=f("iterator"),l=f("toStringTag"),h=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),y=0;y<v.length;y++){var d,g=v[y],m=p[g],b=a[g],w=b&&b.prototype;if(w&&(w[s]||c(w,s,h),w[l]||c(w,l,g),u[g]=h,m))for(d in n)w[d]||o(w,d,n[d],!0)}},c3cb:function(t,e,r){},d4c0:function(t,e,r){var n=r("0d58"),i=r("2621"),o=r("52a7");t.exports=function(t){var e=n(t),r=i.f;if(r){var a,c=r(t),u=o.f,f=0;while(c.length>f)u.call(t,a=c[f++])&&e.push(a)}return e}},e478:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t._self._c;return e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fileUrl,expression:"fileUrl"}],staticClass:"url-input h-input",attrs:{type:"text",placeholder:"请输入下载地址"},domProps:{value:t.fileUrl},on:{input:function(e){e.target.composing||(t.fileUrl=e.target.value)}}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.chunkSize,expression:"chunkSize"}],staticClass:"url-input h-input",attrs:{type:"text",placeholder:"请输入分片大小（字节）"},domProps:{value:t.chunkSize},on:{input:function(e){e.target.composing||(t.chunkSize=e.target.value)}}}),e("button",{staticClass:"h-btn",on:{click:t.download}},[t._v("下载")]),e("div",{staticClass:"input-tip"},[t._v(t._s(t.inputTip))]),t.fileSize?e("section",{staticClass:"file-info"},[e("p",{staticClass:"title"},[t._v("文件大小: "+t._s(t.fileSize)+" byte")])]):t._e()])},i=[];r("ac4d"),r("8a81"),r("1c4c"),r("6b54"),r("34ef"),r("ac6a"),r("5df3"),r("96cf");function o(t,e,r,n,i,o,a){try{var c=t[o](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,i)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))}}r("7f7f");var c=r("bc3a"),u=r.n(c);function f(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=s(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw o}}}}function s(t,e){if(t){if("string"==typeof t)return l(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function h(t){var e=t.name,r=t.buffers,n=t.mime,i=void 0===n?"application/octet-stream":n,o=new Blob([r],{type:i}),a=URL.createObjectURL(o),c=document.createElement("a");c.download=e||Math.random(),c.href=a,c.click(),URL.revokeObjectURL(o)}var p={data:function(){return{inputTip:"",chunkSize:"",fileUrl:"",fileSize:0}},methods:{getFileSize:function(){var t=this;if(this.fileUrl)return this.inputTip="",new Promise((function(e){var r=new XMLHttpRequest;r.open("HEAD",t.fileUrl),r.onreadystatechange=function(){if(4===r.readyState&&200===r.status){var n=r.getResponseHeader("content-length"),i=r.getResponseHeader("accept-ranges");t.fileSize=n,t.inputTip=i&&"none"!==i?"":"该文件不支持分片下载"}e(!t.inputTip)},r.send()}));this.inputTip="请先输入文件地址"},asyncPool:function(){var t=a(regeneratorRuntime.mark((function t(e,r,n){var i,o,a,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=[],o=[],a=f(r),t.prev=3,u=regeneratorRuntime.mark((function t(){var a,u,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=c.value,u=Promise.resolve().then((function(){return n(a,r)})),i.push(u),!(e<=r.length)){t.next=9;break}if(f=u.then((function(){return o.splice(o.indexOf(f),1)})),o.push(f),!(o.length>=e)){t.next=9;break}return t.next=9,Promise.race(o);case 9:case"end":return t.stop()}}),t)})),a.s();case 6:if((c=a.n()).done){t.next=10;break}return t.delegateYield(u(),"t0",8);case 8:t.next=6;break;case 10:t.next=15;break;case 12:t.prev=12,t.t1=t["catch"](3),a.e(t.t1);case 15:return t.prev=15,a.f(),t.finish(15);case 18:return t.abrupt("return",Promise.all(i));case 19:case"end":return t.stop()}}),t,null,[[3,12,15,18]])})));function e(e,r,n){return t.apply(this,arguments)}return e}(),getFileFragment:function(t,e,r){return u.a.get(this.fileUrl,{responseType:"arraybuffer",headers:{range:"bytes=".concat(t)}}).then((function(t){r.push({index:e,data:t.data})}))},download:function(){var t=a(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getFileSize();case 2:if(e=t.sent,e){t.next=5;break}return t.abrupt("return");case 5:Math.ceil(this.fileSize/+(this.chunkSize||1024)),r=new Uint8Array(this.fileSize),n=0,res.then((function(t){t.forEach((function(t){var e=new Uint8Array(t.data);r.set(e,n),n+=e.length})),h({name:"a.js",buffers:r})}));case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},v=p,y=(r("5b13"),r("2877")),d=Object(y["a"])(v,n,i,!1,null,"693d0174",null);e["default"]=d.exports},f1ae:function(t,e,r){"use strict";var n=r("86cc"),i=r("4630");t.exports=function(t,e,r){e in t?n.f(t,e,i(0,r)):t[e]=r}}}]);