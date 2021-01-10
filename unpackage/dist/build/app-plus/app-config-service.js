
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/login/index","pages/ask/index","pages/ask/askAdd/index","pages/ask/askFireDetails/index","pages/ask/askSelect/index","pages/ask/askSelect/details","pages/ask/askType/index","pages/ask/askType/details","pages/ask/askForm/index","pages/ask/record/index","pages/ask/done/index","pages/ask/word/index","pages/ask/askForm/question/index","pages/ask/askForm/question/details","pages/ask/askForm/questionOne/index","pages/ask/askForm/questionLast/index","pages/photo/index","pages/loss/index","pages/editpassword/index","pages/ask/study/index","pages/ask/study/verification","pages/ask/study/skill","pages/photo/photo","pages/photo/method","pages/standard/index","pages/standard/method/inquest","pages/standard/explain/cognizance","pages/standard/fire/regulations","pages/standard/rules/rule","pages/standard/reasons/reason","pages/standard/explain/specific","pages/date/index","pages/standard/fire/caser","pages/standard/fire/reviewse","pages/standard/fire/have","pages/standard/fire/accident","pages/standard/fire/appraisal","pages/standard/fire/easy","pages/standard/fire/commonly","pages/standard/reasons/requirement","pages/standard/reasons/examination","pages/standard/reasons/cognizance","pages/standard/reasons/timese","pages/standard/reasons/appraisal","pages/standard/reasons/disaster","pages/date/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"borderStyle":"black","backgroundColor":"#FFFFFF","color":"#8F8F94","selectedColor":"#007AFF","list":[{"pagePath":"pages/index/index","text":"首页"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"火灾","compilerVersion":"3.0.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页"}},{"path":"/pages/login/index","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/ask/index","meta":{},"window":{"navigationBarTitleText":"询问"}},{"path":"/pages/ask/askAdd/index","meta":{},"window":{"navigationBarTitleText":"询问"}},{"path":"/pages/ask/askFireDetails/index","meta":{},"window":{"navigationBarTitleText":"询问要求"}},{"path":"/pages/ask/askSelect/index","meta":{},"window":{"navigationBarTitleText":"询问人员性质"}},{"path":"/pages/ask/askSelect/details","meta":{},"window":{"navigationBarTitleText":"询问人员性质详情"}},{"path":"/pages/ask/askType/index","meta":{},"window":{"navigationBarTitleText":"询问类型"}},{"path":"/pages/ask/askType/details","meta":{},"window":{"navigationBarTitleText":"询问类型详情"}},{"path":"/pages/ask/askForm/index","meta":{},"window":{"navigationBarTitleText":"询问笔录"}},{"path":"/pages/ask/record/index","meta":{},"window":{"navigationBarTitleText":"询问笔录目录"}},{"path":"/pages/ask/done/index","meta":{},"window":{"navigationBarTitleText":"已完成"}},{"path":"/pages/ask/word/index","meta":{},"window":{"navigationBarTitleText":"下载word文档"}},{"path":"/pages/ask/askForm/question/index","meta":{},"window":{"navigationBarTitleText":"问答"}},{"path":"/pages/ask/askForm/question/details","meta":{},"window":{"navigationBarTitleText":"问答提纲","titleNView":{"autoBackButton":false}}},{"path":"/pages/ask/askForm/questionOne/index","meta":{},"window":{"navigationBarTitleText":"问答"}},{"path":"/pages/ask/askForm/questionLast/index","meta":{},"window":{"navigationBarTitleText":"问答"}},{"path":"/pages/photo/index","meta":{},"window":{"navigationBarTitleText":"照相"}},{"path":"/pages/loss/index","meta":{},"window":{"navigationBarTitleText":"计损"}},{"path":"/pages/editpassword/index","meta":{},"window":{"navigationBarTitleText":"修改密码"}},{"path":"/pages/ask/study/index","meta":{},"window":{"navigationBarTitleText":"学习"}},{"path":"/pages/ask/study/verification","meta":{},"window":{"navigationBarTitleText":"言辞证据的审查验证"}},{"path":"/pages/ask/study/skill","meta":{},"window":{"navigationBarTitleText":"火灾调查询问笔录的技巧"}},{"path":"/pages/photo/photo","meta":{},"window":{"navigationBarTitleText":"火灾调查询问笔录的技巧"}},{"path":"/pages/photo/method","meta":{},"window":{"navigationBarTitleText":"火场照相方法"}},{"path":"/pages/standard/index","meta":{},"window":{"navigationBarTitleText":"规范/规则"}},{"path":"/pages/standard/method/inquest","meta":{},"window":{"navigationBarTitleText":"火灾技术鉴定物证提取方法"}},{"path":"/pages/standard/explain/cognizance","meta":{},"window":{"navigationBarTitleText":"火事故调查法律文书制作与使用说明"}},{"path":"/pages/standard/fire/regulations","meta":{},"window":{"navigationBarTitleText":"火灾事故调查规定"}},{"path":"/pages/standard/rules/rule","meta":{},"window":{"navigationBarTitleText":"火灾现场勘验规则"}},{"path":"/pages/standard/reasons/reason","meta":{},"window":{"navigationBarTitleText":"火灾原因认定暂行规则"}},{"path":"/pages/standard/explain/specific","meta":{},"window":{"navigationBarTitleText":"具体要求"}},{"path":"/pages/date/index","meta":{},"window":{"navigationBarTitleText":"数据库"}},{"path":"/pages/standard/fire/caser","meta":{},"window":{"navigationBarTitleText":"案件处理"}},{"path":"/pages/standard/fire/reviewse","meta":{},"window":{"navigationBarTitleText":"复核"}},{"path":"/pages/standard/fire/have","meta":{},"window":{"navigationBarTitleText":"管辖"}},{"path":"/pages/standard/fire/accident","meta":{},"window":{"navigationBarTitleText":"火灾事故认定"}},{"path":"/pages/standard/fire/appraisal","meta":{},"window":{"navigationBarTitleText":"检验、鉴定"}},{"path":"/pages/standard/fire/easy","meta":{},"window":{"navigationBarTitleText":"简易程序"}},{"path":"/pages/standard/fire/commonly","meta":{},"window":{"navigationBarTitleText":"一般程序"}},{"path":"/pages/standard/reasons/requirement","meta":{},"window":{"navigationBarTitleText":"火灾原因认定的一般要求"}},{"path":"/pages/standard/reasons/examination","meta":{},"window":{"navigationBarTitleText":"火灾证据与证据审查"}},{"path":"/pages/standard/reasons/cognizance","meta":{},"window":{"navigationBarTitleText":"起火部位或者起火点认定"}},{"path":"/pages/standard/reasons/timese","meta":{},"window":{"navigationBarTitleText":"起火时间认定"}},{"path":"/pages/standard/reasons/appraisal","meta":{},"window":{"navigationBarTitleText":"起火原因认定"}},{"path":"/pages/standard/reasons/disaster","meta":{},"window":{"navigationBarTitleText":"灾害成因认定"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
