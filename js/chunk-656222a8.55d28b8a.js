(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-656222a8"],{"4a33":function(t,s,l){"use strict";l.r(s);var o=function(){var t=this,s=t._self._c;return s("div",[s("p",[t._v("无限滚动列表")]),s("div",{staticClass:"scroll-wrap"},[s("ul",{ref:"scrollList",staticClass:"list",on:{mousemove:t.stopScroll,mouseout:t.startScroll}},t._l(t.scrollList,(function(l,o){return s("li",{key:o,staticClass:"list-item"},[t._v("\n              滚动项 "+t._s(l)+"\n          ")])})),0)])])},n=[],i={data:function(){return{originList:[1,2,3,4,5,6,7,8,9,10,11,12],scrollList:[1,2,3,4,5,6,7,8,9,10,11,12],scrollCount:0}},created:function(){this.canScroll=!0},mounted:function(){},methods:{initScroll:function(){var t=this;if(!(this.scrollList<10)){var s=this.$refs.scrollList,l=1,o=60/l,n=function n(){requestAnimationFrame((function(){t.canScroll&&(t.scrollCount++,t.scrollCount===t.originList.length*o?(t.scrollCount=0,s.style.transform="translateY(0)",t.scrollList.splice(0,t.originList.length),t.scrollList.push(t.originList[t.originList.length-1])):(s.style.transform="translateY(-".concat(t.scrollCount*l,"px)"),t.scrollCount%o===0&&t.scrollList.push(t.originList[t.scrollCount/o-1])),n())}))};n()}},startScroll:function(){this.canScroll=!0,this.initScroll()},stopScroll:function(){this.canScroll=!1}}},r=i,c=(l("93a8"),l("2877")),u=Object(c["a"])(r,o,n,!1,null,"431189d2",null);s["default"]=u.exports},"93a8":function(t,s,l){"use strict";l("f14f")},f14f:function(t,s,l){}}]);