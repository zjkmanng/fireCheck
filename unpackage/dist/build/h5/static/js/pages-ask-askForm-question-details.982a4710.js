(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ask-askForm-question-details"],{"4da1":function(t,n,e){"use strict";e.r(n);var a=e("e0de"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"7a58":function(t,n,e){var a=e("f428");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("6af24344",a,!0,{sourceMap:!1,shadowMode:!1})},d0f2:function(t,n,e){"use strict";e.r(n);var a=e("f633"),i=e("4da1");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("e9b7");var o,s=e("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"3dd612ae",null,!1,a["a"],o);n["default"]=c.exports},e0de:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{data:{},style:{p:"display: inline-block;margin-bottom: 20rpx;line-height: 55rpx;text-indent: 2em;"}}},onLoad:function(t){this.data=JSON.parse(t.data),console.log(this.data)},methods:{home:function(){uni.switchTab({url:"../../index/index"})},back:function(){uni.navigateBack()}}};n.default=a},e9b7:function(t,n,e){"use strict";var a=e("7a58"),i=e.n(a);i.a},f428:function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-3dd612ae]{padding:%?20?% %?20?% %?150?%;position:relative}.content .name[data-v-3dd612ae]{font-size:%?38?%;font-weight:700;line-height:%?100?%}.content .home[data-v-3dd612ae]{position:fixed;left:0;bottom:0;width:100%;height:%?100?%;border-top:1px solid #ccc;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:999}',""]),t.exports=n},f633:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var a={uParse:e("7f8a").default,uButton:e("aefd").default},i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"name"},[t._v(t._s(t.data.name))]),e("u-parse",{attrs:{html:t.data.details,"tag-style":t.style}}),e("v-uni-view",{staticClass:"next"},[e("u-button",{attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}},[t._v("已阅读，返回")])],1)],1)},r=[]}}]);