(function(t){function e(e){for(var i,s,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)s=a[l],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function s(t){return a.p+"js/"+({notfound:"notfound",settings:"settings"}[t]||t)+"."+{notfound:"c90e0e39",settings:"754920d6"}[t]+".js"}function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=r[t]=[e,i]}));e.push(n[2]=i);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",u.name="ChunkLoadError",u.type=i,u.request=o,n[1](u)}r[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1771:function(t,e,n){var i={"./alarm.mp3":"a362","./e103b6c4a567e98f65278a31c5c76c81e6fadb46.png":"e895","./e4a3b1a01e60660385c4361a5a6e072cd0f361db.png":"5e27","./yay.mp3":"c7a5"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id="1771"},"3e8e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var i=n("2b0e"),r=n("5f5b"),o=n("b1e0");n("ab8b"),n("2dd8");i["default"].use(r["a"]),i["default"].use(o["a"]);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"top"}},[i("b-container",{staticClass:"pt-5"},[i("b-link",{attrs:{to:"/"}},[i("img",{attrs:{src:n("e895")}})]),i("hr")],1)],1),i("div",{attrs:{id:"contect"}},[i("b-container",[i("b-row",[i("b-col",{staticClass:"justify-content-center d-flex align-items-center",attrs:{cols:"12",md:"6"}},[i("img",{staticClass:"bg-tomato pb-5",attrs:{src:n("5e27")}}),i("div",{staticClass:"tomato text-center"},[i("h1",[t._v(t._s(t.timeText))]),i("h6",{staticClass:"my-3"},[t._v(t._s(t.currentText))]),1!==t.status?i("b-btn",{staticClass:"mx-1",attrs:{pill:"",variant:"dark"},on:{click:t.start}},[t._v("Start")]):i("b-btn",{staticClass:"mx-1",attrs:{pill:"",size:"sm",variant:"outline-secondary"},on:{click:t.pause}},[i("b-icon",{attrs:{icon:"pause-fill"}})],1),t.current.length>0?i("b-btn",{staticClass:"mx-1",attrs:{pill:"",size:"sm",variant:"outline-secondary"},on:{click:function(e){return t.finish(!0)}}},[i("b-icon",{attrs:{icon:"skip-end-fill"}})],1):t._e()],1)]),i("b-col",[i("b-link",{staticClass:"mr-3 h4",attrs:{variant:"secondary",to:"/"}},[t._v("Check list")]),i("b-link",{staticClass:"h4",attrs:{variant:"secondary",to:"/settings"}},[t._v("Setting")])],1)],1)],1)],1),i("keep-alive",[t.$route.meta.keepAlive?i("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():i("router-view")],1)},a=[],c=(n("4d90"),n("d3b7"),n("25f0"),n("99af"),{data:function(){return{status:0,timer:0}},computed:{current:function(){return this.$store.state.current},items:function(){return this.$store.state.items},currentText:function(){return this.current.length>0?this.current:this.items.length>0?"點擊開始":"沒有事項"},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60).toString().padStart(2,"0"),e=Math.floor(this.timeleft%60).toString().padStart(2,"0");return"".concat(t," : ").concat(e)}},methods:{start:function(){var t=this;0===this.status&&this.items.length>0&&this.$store.commit("start"),this.current.length&&(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finish(!1)}),1e3))},pause:function(){this.status=2,clearInterval(this.timer)},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src=n("1771")("./"+this.$store.state.sound),e.play()}this.items.length>0&&this.start()}}}),u=c,l=(n("034f"),n("2877")),d=Object(l["a"])(u,s,a,!1,null,null,null),f=d.exports,m=n("9483");Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("3ca3"),n("ddb0");var p=n("8c4f"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},[n("b-container",[n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-form-group",{attrs:{label:"新增事項","label-for":"newinput","invalid-feedback":"多打幾個字會死嗎?"}},[n("b-form-input",{attrs:{id:"newinput",state:t.newinputstate},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.additem.apply(null,arguments)}},model:{value:t.newinput,callback:function(e){t.newinput=e},expression:"newinput"}})],1),n("b-button",{attrs:{pill:"",variant:"outline-secondary"},on:{click:t.additem}},[t._v("+")])],1),n("b-col",{staticClass:"my-3",attrs:{cols:"12"}},[n("h5",[t._v("To-do")]),n("b-table",{attrs:{items:t.items,fields:t.fields,small:"","show-empty":"",hover:"",borderless:""},scopedSlots:t._u([{key:"empty",fn:function(){return[n("p",{staticClass:"text-center"},[t._v("人生黑白了嗎? 增加一些事項吧!")])]},proxy:!0},{key:"cell(name)",fn:function(e){return[e.item.edit?n("b-form-input",{attrs:{state:e.item.state},on:{keydown:[function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.submitedit(e.index)},function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:t.canceledit(e.index)}]},model:{value:e.item.model,callback:function(n){t.$set(e.item,"model",n)},expression:"data.item.model"}}):n("span",[t._v(t._s(e.value))])]}},{key:"cell(action)",fn:function(e){return[e.item.edit?n("span",[n("b-btn",{staticClass:"mx-1",attrs:{pill:"",size:"sm",variant:"outline-secondary"}},[n("b-icon",{attrs:{icon:"check"},on:{click:function(n){return t.submitedit(e.index)}}})],1),n("b-btn",{attrs:{pill:"",size:"sm",variant:"outline-secondary"}},[n("b-icon",{attrs:{icon:"arrow-counterclockwise"},on:{click:function(n){return t.canceledit(e.index)}}})],1)],1):n("span",[n("b-btn",{staticClass:"mx-1",attrs:{pill:"",size:"sm",variant:"outline-secondary"}},[n("b-icon",{attrs:{icon:"pencil"},on:{click:function(n){return t.edititem(e.index)}}})],1),n("b-btn",{attrs:{pill:"",size:"sm",variant:"outline-secondary"}},[n("b-icon",{attrs:{icon:"trash"},on:{click:function(n){return t.delitem(e.index)}}})],1)],1)]}}])})],1),n("b-col",{attrs:{cols:"12"}},[n("h5",[t._v("Done")])]),n("b-col",{attrs:{cols:"12"}},[n("b-table-simple",{attrs:{small:"",hover:"",borderless:""}},[n("tbody",[t._l(t.finished,(function(e,i){return n("tr",[n("td",[t._v(t._s(e))]),n("td",[n("b-btn",{attrs:{pill:"",size:"sm",variant:"outline-secondary"},on:{click:function(e){return t.delfinish(i)}}},[t._v("一")])],1)])})),0===t.finished.length?n("tr",[n("td",{staticClass:"text-center",attrs:{colspan:"2"}},[t._v("人生黑白了嗎? 不會找點事做嗎?")])]):t._e()],2)])],1)],1)],1)],1)},b=[],v=(n("d81d"),{data:function(){return{newinput:"",fields:[{key:"name",label:""},{key:"action",label:""}]}},computed:{newinputstate:function(){return this.newinput.length>2||0===this.newinput.length&&null},items:function(){return this.$store.state.items.map((function(t){return t.state=t.model.length>2,t}))},finished:function(){return this.$store.state.finished}},methods:{additem:function(){this.newinput.length>2&&(this.$store.commit("additem",this.newinput),this.newinput="")},edititem:function(t){this.$store.commit("edititem",t)},delitem:function(t){this.$store.commit("delitem",t)},submitedit:function(t){this.items[t].state&&this.$store.commit("submitedit",t)},canceledit:function(t){this.$store.commit("canceledit",t)},delfinish:function(t){this.$store.commit("delfinish",t)}}}),y=v,g=Object(l["a"])(y,h,b,!1,null,null,null),k=g.exports;i["default"].use(p["a"]);var w=[{path:"/",name:"Home",component:k,meta:{title:"黑白人森番茄鐘",keepAlive:!0}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"黑白人森番茄鐘 | 設定"}},{path:"/404",name:"NotFound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))},meta:{title:"黑白人森番茄鐘 | 404"}},{path:"*",redirect:"/404"}],x=new p["a"]({routes:w});x.afterEach((function(t){document.title=t.meta.title}));var _=x,C=(n("a434"),n("b0c0"),n("2f62")),O=n("0e44");i["default"].use(C["a"]);var $=parseInt("1500"),j=parseInt("300"),S=new C["a"].Store({state:{sound:"alarm.mp3",items:[],current:"",finished:[],timeleft:$,break:!1},mutations:{selectSound:function(t,e){t.sound=e},additem:function(t,e){t.items.push({name:e,edit:!1,model:e})},edititem:function(t,e){t.items[e].edit=!0},delitem:function(t,e){t.items.splice(e,1)},submitedit:function(t,e){t.items[e].name=t.items[e].model,t.items[e].edit=!1},canceledit:function(t,e){t.items[e].model=t.items[e].name,t.items[e].edit=!1},start:function(t){t.current=t.break?"休息一下":t.items.shift().name},countdown:function(t){t.timeleft--},finish:function(t){t.break||t.finished.push(t.current),t.current="",t.items.length>0&&(t.break=!t.break),t.timeleft=t.break?j:$},delfinish:function(t,e){t.finished.splice(e,1)}},actions:{},modules:{},plugins:[Object(O["a"])({key:"pomodoro"})]});n("3e8e");i["default"].config.productionTip=!1,new i["default"]({router:_,store:S,render:function(t){return t(f)}}).$mount("#app")},"5e27":function(t,e,n){t.exports=n.p+"img/e4a3b1a01e60660385c4361a5a6e072cd0f361db.9c68506b.png"},"85ec":function(t,e,n){},a362:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"},c7a5:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"},e895:function(t,e,n){t.exports=n.p+"img/e103b6c4a567e98f65278a31c5c76c81e6fadb46.4f15dd6f.png"}});
//# sourceMappingURL=app.d52d39cf.js.map