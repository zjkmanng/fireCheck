(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ask-askFireDetails-index"],{1958:function(t,e,n){"use strict";n.r(e);var r=n("ff84"),a=n("35a4");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("7880");var o,f=n("f0c5"),l=Object(f["a"])(a["default"],r["b"],r["c"],!1,null,"770fea06",null,!1,r["a"],o);e["default"]=l.exports},"35a4":function(t,e,n){"use strict";n.r(e);var r=n("881a"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"377d":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-770fea06]{padding:%?20?% %?20?% %?150?%;position:relative}.content .name[data-v-770fea06]{font-size:%?38?%;font-weight:700;line-height:%?100?%}.content .details uni-text[data-v-770fea06]{display:inline-block;margin-bottom:%?20?%;line-height:%?55?%;text-indent:2em}.content .details uni-text span[data-v-770fea06]{font-size:%?36?%;font-weight:700}.content .details .next[data-v-770fea06]{margin:%?50?% 0}.content .home[data-v-770fea06]{position:fixed;left:0;bottom:0;width:100%;height:%?100?%;border-top:1px solid #ccc;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;z-index:999}',""]),t.exports=e},4308:function(t,e,n){"use strict";var r=n("5ffc"),a=n.n(r);a.a},"5ffc":function(t,e,n){var r=n("f1b6");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("0a363aa8",r,!0,{sourceMap:!1,shadowMode:!1})},"674f":function(t,e,n){"use strict";n("c975"),n("a9e3"),n("d3b7"),n("ac1f"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var t="";return t=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",t},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(t){var e=this;this.$u.throttle((function(){!0!==e.loading&&!0!==e.disabled&&(e.ripple&&(e.waveActive=!1,e.$nextTick((function(){this.getWaveQuery(t)}))),e.$emit("click",t))}),this.throttleTime)},getWaveQuery:function(t){var e=this;this.getElQuery().then((function(n){var r=n[0];if(r.width&&r.width&&(r.targetWidth=r.height>r.width?r.height:r.width,r.targetWidth)){e.fields=r;var a="",i="";a=t.touches[0].clientX,i=t.touches[0].clientY,e.rippleTop=i-r.top-r.targetWidth/2,e.rippleLeft=a-r.left-r.targetWidth/2,e.$nextTick((function(){e.waveActive=!0}))}}))},getElQuery:function(){var t=this;return new Promise((function(e){var n="";n=uni.createSelectorQuery().in(t),n.select(".u-btn").boundingClientRect(),n.exec((function(t){e(t)}))}))},getphonenumber:function(t){this.$emit("getphonenumber",t)},getuserinfo:function(t){this.$emit("getuserinfo",t)},error:function(t){this.$emit("error",t)},opensetting:function(t){this.$emit("opensetting",t)},launchapp:function(t){this.$emit("launchapp",t)}}};e.default=r},7880:function(t,e,n){"use strict";var r=n("8f65"),a=n.n(r);a.a},"881a":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={data:function(){return{data:{}}},onLoad:function(t){var e=JSON.parse(t.item);this.data=e},methods:{home:function(){uni.switchTab({url:"../../index/index"})},next:function(){uni.navigateTo({url:"../askSelect/index"})}}};e.default=r},"8f65":function(t,e,n){var r=n("377d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var a=n("4f06").default;a("2273932c",r,!0,{sourceMap:!1,shadowMode:!1})},a208:function(t,e,n){"use strict";n.r(e);var r=n("674f"),a=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},aefd:function(t,e,n){"use strict";n.r(e);var r=n("f840"),a=n("a208");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("4308");var o,f=n("f0c5"),l=Object(f["a"])(a["default"],r["b"],r["c"],!1,null,"23f00fb2",null,!1,r["a"],o);e["default"]=l.exports},f1b6:function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-btn[data-v-23f00fb2]::after{border:none}.u-btn[data-v-23f00fb2]{position:relative;border:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;overflow:visible;line-height:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-23f00fb2]{border:1px solid #fff}.u-btn--default[data-v-23f00fb2]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-23f00fb2]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-23f00fb2]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-23f00fb2]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-23f00fb2]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-23f00fb2]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-23f00fb2]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-23f00fb2]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-23f00fb2]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-23f00fb2]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-23f00fb2]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-23f00fb2]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-23f00fb2]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-23f00fb2]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-23f00fb2]:after{content:" ";position:absolute;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-23f00fb2]{z-index:0;position:absolute;-webkit-border-radius:100%;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-23f00fb2]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-23f00fb2]{-webkit-border-radius:%?100?%;border-radius:%?100?%}.u-round-circle[data-v-23f00fb2]::after{-webkit-border-radius:%?100?%;border-radius:%?100?%}.u-loading[data-v-23f00fb2]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-23f00fb2]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-23f00fb2]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-23f00fb2]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-23f00fb2]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-23f00fb2]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-23f00fb2]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-23f00fb2]{background:#18b566!important;color:#fff}.u-info-hover[data-v-23f00fb2]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-23f00fb2]{background:#f29100!important;color:#fff}.u-error-hover[data-v-23f00fb2]{background:#dd6161!important;color:#fff}',""]),t.exports=e},f840:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+t.size,t.plain?"u-btn--"+t.type+"--plain":"",t.loading?"u-loading":"","circle"==t.shape?"u-round-circle":"",t.hairLine?t.showHairLineBorder:"u-btn--bold-border","u-btn--"+t.type,t.disabled?"u-btn--"+t.type+"--disabled":""],style:[t.customStyle,{overflow:t.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(t.hoverStartTime),"hover-stay-time":Number(t.hoverStayTime),disabled:t.disabled,"form-type":t.formType,"open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"send-message-title":t.sendMessageTitle,"send-message-path":"sendMessagePath",lang:t.lang,"data-name":t.dataName,"session-from":t.sessionFrom,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard,"hover-class":t.getHoverClass,loading:t.loading},on:{getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.getphonenumber.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.getuserinfo.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.error.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.opensetting.apply(void 0,arguments)},launchapp:function(e){arguments[0]=e=t.$handleEvent(e),t.launchapp.apply(void 0,arguments)},click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.click(e)}}},[t._t("default"),t.ripple?n("v-uni-view",{staticClass:"u-wave-ripple",class:[t.waveActive?"u-wave-active":""],style:{top:t.rippleTop+"px",left:t.rippleLeft+"px",width:t.fields.targetWidth+"px",height:t.fields.targetWidth+"px","background-color":t.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):t._e()],2)},i=[]},ff84:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}));var r={uButton:n("aefd").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"name"},[t._v("火灾名称："+t._s(t.data.fireName))]),n("v-uni-view",{staticClass:"details"},[n("v-uni-text",[t._v("1.询问人员不得少于两人（简易程序除外），并应当向被询问人表明执法身份。询问时应当告诉被询问人必须如实提供证据、证言和故意作伪证或隐匿证据应负的法律责任，以及对于本案无关的问题有拒绝回答的权利。有多个询问人时应当分别询问。")]),n("v-uni-text",[t._v("2.询问笔录应当交被询问人核对，被询问人确认笔录无误后，应当在询问笔录上逐页签名或者按指印。拒绝签名和按指印的，询问人员应当在询问笔录中注明。记录有误或者有遗漏的，应当允许被询问人更正或者补充，并要求其在修改处按指印。对没有阅读能力的，应当向其宣读。询问人员应当在询问笔录上签名，翻译人员应当在询问笔录的结尾处签名。询问时可以全程录音、录像，并保持录音、录像资料的完整性。")]),n("v-uni-text",[t._v("3.需要传唤火灾肇事嫌疑人接受调查的，经公安派出所批准使用传唤证传唤。现场发现的火灾肇事嫌疑人，火调人员出示工作证件可以口头传唤，并在询问笔录中注明火灾肇事嫌疑人到案经过、到按时间和离开时间。")]),n("v-uni-text",[t._v("4.传唤的火灾肇事嫌疑人应当及时询问查证，询问查证时间不得超过8小时，案情复杂，违法行为依法可能适用于行政拘留处罚的，询问查证时间不得超过24小时。火灾受害人和其他证人的询问没有时限要求，如果火灾受害人和其他证人提出终止询问并离开的请求，应当在问明情况后允许其离开。")]),n("v-uni-text",[t._v("5.被询问人请求自行提供书面材料的，应当准许。询问人员认为必要时也可以要求被询问人自行书写材料。被询问人应当在其提供的书面材料的结尾处签名或者按指印，并附身份证复印件。对打印的书面材料，被询问人应当逐页签名或者按指印。调查人员收到书面材料后，应当在首页注明收到的日期并签名。")]),n("v-uni-text",[t._v("6.询问时要防止泄密。一方面火灾调查人员应当注意不泄露有关调查工作的秘密，另一方面火灾调查人员要对涉及的国家秘密、商业秘密和个人隐私等注意保存，如有其他部门或者个人了解情况时，要按规定由法制部门审核后提供，必要时可征求证人的意见。")]),n("v-uni-text",[t._v("7.对询问对象采取一问一答的形式制作的笔录，要按照本人的原话记录，尽可能逐句记录，不能做任何装饰、概括或更改。每个询问对象的笔录应单独制作，不允许几个证。")]),n("v-uni-text",[t._v("8.人的证言写在一个笔录中，更不允许只做一份询问笔录，让其他询问对象在该询问笔录上分别签字，但允许有两个以上证人出具共同签名的书面证据，证明材料。")]),n("v-uni-text",[t._v("9.询问笔录要求填充的项目必须填写，不能留有空项，正文中记录的内容不能有空行，空白页和空白行在签字前，应由询问人划线填满。")]),n("v-uni-text",[t._v("10.记录的字迹要清楚，语言要准确，不能出现模棱两可的语句。")]),n("v-uni-text",[t._v("11.要用碳素或蓝黑墨水书写，严禁使用铅笔或圆珠笔制作询问笔录，以防止保存中变质或涂改。")]),n("v-uni-text",[t._v("12.询问笔录可以电脑制作，但是涉及签名或签署意见的内容，必须用能够长期保存的笔迹书写工具签写，同时询问笔录的用纸必须符合要求。")]),n("v-uni-text",[t._v("13.询问笔录结构包括开始、正文和结尾三个部分。")]),n("v-uni-text",[t._v("(1) 开始部分。询问的地点、询问的时间，询问人、记录人的姓名、工作单位。被询问人的姓名、性别、年龄、身份证明、职业、民族、现住址、户籍所在地、工作单位、联系方式、是否是人大代表等情况。")]),n("v-uni-text",[t._v("(2) 正文部分。正文部分记录的主要内容包括询问前的告知、提问和回答的内容，特别是与火灾有关的人、事、物、时间、地点等要素，一定要记录的全面、客观、清楚、准确。")]),n("v-uni-text",[t._v("(3) 结尾部分。结尾部分应有结束询问的问答以及被询问人写明“以上笔录我看过，与我说的相符。”对笔录确认的语句和签名，参加询问的调查人员，翻译人员、监护人等也要签名。")]),n("v-uni-view",{staticClass:"next"},[n("u-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next.apply(void 0,arguments)}}},[t._v("已阅读，下一步")])],1)],1),n("v-uni-view",{staticClass:"home",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.home.apply(void 0,arguments)}}},[t._v("首页")])],1)},i=[]}}]);