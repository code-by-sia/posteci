(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],_=0,d=[];_<s.length;_++)r=s[_],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},i=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/posteci/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"006a":function(e,t,n){},"0439":function(e,t,n){"use strict";var a=n("006a"),o=n.n(a);o.a},1617:function(e,t,n){"use strict";var a=n("3933"),o=n.n(a);o.a},"1a73":function(e,t,n){"use strict";var a=n("e8be"),o=n.n(a);o.a},"1bd8":function(e,t,n){"use strict";var a=n("8b98"),o=n.n(a);o.a},"1ec2":function(e,t,n){},"286d":function(e,t,n){"use strict";var a=n("4e85"),o=n.n(a);o.a},"37ff":function(e,t,n){"use strict";var a=n("db57"),o=n.n(a);o.a},3933:function(e,t,n){},"419b":function(e,t,n){},"42db":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return RequestBuilder}));var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("a15b"),core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("b0c0"),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_3__),_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("b85c"),_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5530"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("96cf"),regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_6__),_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("1da1"),_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("d4ec"),_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("bee2");function evalAsync(env,code){var finalCode="".concat(env,";(async()=> ").concat(code,")()");return eval(finalCode)}var VARS_ENV="\n// variables\nconst secret = value => value;\nconst password = value => value;\nconst bearer = token => 'Bearer2 ' + token;\n",HEADERS_ENV="\n// headers\nconst Json = 'application/json';\nconst XML = 'application/xml';\nconst CONTENT_TYPE = 'Content-Type';\n\nconst contentType = {\n    json: Json,\n    application: XML\n};\n\nconst responseType = contentType;\n",BODY_ENV='\n// body\nconst json= obj => JSON.stringify(obj);\n\nconst fake = {\n    get names() { \n        return [\n            "Thomas Aquinas",\n            "Aristotle",\n            "Confucius",\n            "René Descartes",\n            "Ralph Waldo Emerson",\n            "Michel Foucault",\n            "David Hume",\n            "Immanuel Kant",\n            "Søren Kierkegaard",\n            "Lao-Tzu",\n            "John Locke",\n            "Niccolo Machiavelli",\n            "Karl Marx",\n            "John Stuart Mill",\n            "Friedrich Nietzsche",\n            "Plato",\n            "Jean-Jacques Rousseau",\n            "Jean-Paul Sartre",\n            "Socrates",\n            "Ludwig Wittgenstein"\n        ]\n    },\n    random(max){\n        return Math.floor(Math.random() * max) ;\n    },\n    \n    get id() {\n        return this.random(1e6) + 1;\n    },\n    \n    get name(){\n        const list= this.names; \n        return list[this.random(list.length)]; \n    },\n    \n    get date(){\n        return new Date(this.random(1e12));\n    },\n    \n    get phone(){\n        return  \'+\' + (this.random(9666e11) + 1e12);\n    }\n };\n',METHOD_ENV='\n// method\nconst GET = "GET";\nconst POST = "POST";\nconst PUT = "PUT";\nconst PATCH = "PATCH";\nconst DELETE = "DELETE";\nconst HEAD = "HEAD";\nconst OPTIONS = "OPTIONS";\nconst COPY = "COPY";\nconst LINK = "LINK";\nconst UNLINK = "UNLINK";\nconst PURGE = "PURGE";\nconst LOCK = "LOCK";\nconst UNLOCK = "UNLOCK";\nconst PROPFIND = "PROPFIND";\nconst VIEW = "VIEW";\n',PROTOCOL_ENV="\n// protocols\nconst HTTP = 'http';\nconst HTTPS ='https';\nconst WS = 'ws';\n",PATH_ENV="\n// path\nconst LOCALHOST = 'localhost';\nconst WEB = 80;\nconst WEB_PROXY = 8080;\nconst TOMCAT = 8080;\nconst HTTPS = 443;\nconst HTTP = 80;\nconst NGINX = 8080;\nconst SYNAPSE = 8243;\nconst SYNAPSE_HTTP = 8280;\nconst SOLR = 8983;\nconst MYSQL = 3306;\nconst POSTGRES = 5432;\nconst MONGODB = 27017;\nconst REDIS = 6379;\nconst ZOOKEEPER = 2888;\n\nconst onPort= (host, port) => (port==\"\" || port==80) ? host: (host + ':' + port);\nconst local = (port) => onPort(LOCALHOST, port);\nconst localhost = port => local(port);\n";function hasBody(e){return!("GET"===e||"OPTIONS"===e)}var RequestBuilder=function(){function e(t){Object(_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_8__["a"])(this,e),this.request=t}return Object(_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_9__["a"])(e,[{key:"withVariables",value:function(e){return this.variables=e,this}},{key:"build",value:function(){var e=Object(_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["a"])(regeneratorRuntime.mark((function e(){var t,n,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.buildMethod();case 2:return t=e.sent,e.next=5,this.buildHeaders();case 5:return n=e.sent,e.next=8,this.buildBody();case 8:return a=e.sent,e.next=11,this.buildUrl();case 11:return o=e.sent,console.log({url:o,method:t,headers:n}),i={method:t,headers:n,mode:"cors",redirect:"follow"},e.abrupt("return",fetch(o,hasBody(t)?i:Object(_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["a"])(Object(_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_5__["a"])({},i),{},{body:a})));case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"buildVariables",value:function(){var e=Object(_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in t=[],this.variables)t.push('Object.defineProperty(env,"'.concat(n,'",{ get:function() { return ').concat(this.variables[n],";}})"));return e.abrupt("return","".concat(VARS_ENV,";\nvar env={};\n").concat(t.join(";\n"),"\n"));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"buildMethod",value:function(){return evalAsync(METHOD_ENV,this.request.method)}},{key:"buildBody",value:function(){return evalAsync(VARS_ENV+BODY_ENV,this.request.body)}},{key:"buildUrl",value:function(){var e=Object(_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["a"])(regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.buildVariables();case 2:return t=e.sent,e.next=5,evalAsync(t+PROTOCOL_ENV,this.request.protocol);case 5:return n=e.sent,e.next=8,evalAsync(t+PATH_ENV,this.request.path);case 8:return a=e.sent,e.abrupt("return",n+"://"+a);case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"buildHeaders",value:function(){var e=Object(_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_7__["a"])(regeneratorRuntime.mark((function e(){var t,n,a,o,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new Headers,e.next=3,this.buildVariables();case 3:n=e.sent,a=Object(_Users_siamand_GitHub_posteci_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["a"])(this.request.headers),e.prev=5,a.s();case 7:if((o=a.n()).done){e.next=15;break}return i=o.value,e.next=11,evalAsync(n+HEADERS_ENV,i.value);case 11:r=e.sent,t.append(i.name,r);case 13:e.next=7;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](5),a.e(e.t0);case 20:return e.prev=20,a.f(),e.finish(20);case 23:return t.append("Content-Type","application/json"),e.abrupt("return",t);case 25:case"end":return e.stop()}}),e,this,[[5,17,20,23]])})));function t(){return e.apply(this,arguments)}return t}()}],[{key:"with",value:function(t){return new e(t)}}]),e}()},"4bc1":function(e,t,n){},"4e85":function(e,t,n){},"516f":function(e,t,n){"use strict";var a=n("c802"),o=n.n(a);o.a},"51cf":function(e,t,n){"use strict";var a=n("7ce6"),o=n.n(a);o.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),o=n.n(a);o.a},6369:function(e,t,n){"use strict";var a=n("4bc1"),o=n.n(a);o.a},7270:function(e,t,n){"use strict";var a=n("a07d"),o=n.n(a);o.a},"74b5":function(e,t,n){},"7ce6":function(e,t,n){},"8b98":function(e,t,n){},"9c0c":function(e,t,n){},"9d95":function(e,t,n){"use strict";var a=n("b990"),o=n.n(a);o.a},a02a:function(e,t,n){"use strict";var a=n("419b"),o=n.n(a);o.a},a07d:function(e,t,n){},b80b:function(e,t,n){},b990:function(e,t,n){},c7bf:function(e,t,n){"use strict";var a=n("1ec2"),o=n.n(a);o.a},c802:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"},on:{"after-enter":function(t){e.readyToShow=!0}}},[e.dialog!==e.dialogs.HIDE?n("div",{staticClass:"dialogs",on:{click:function(t){if(t.target!==t.currentTarget)return null;e.readyToShow=!1}}},[n("transition",{attrs:{name:"bounce"},on:{"after-leave":function(t){e.dialog=e.dialogs.HIDE}}},[e.dialog===e.dialogs.PREFERENCES&&e.readyToShow?n("preferences-dialog",{on:{close:e.hideDialog}}):e._e(),e.dialog===e.dialogs.LOAD&&e.readyToShow?n("load-data-dialog",{on:{close:e.hideDialog,"load-data":e.loadData}}):e._e(),e.dialog===e.dialogs.SAVE&&e.readyToShow?n("save-data-dialog",{on:{close:e.hideDialog,"save-data":e.saveData}}):e._e()],1)],1):e._e()]),n("domains",{on:{onRequestSelect:e.pickRequest,onRequestNew:e.createDomain},model:{value:e.domains,callback:function(t){e.domains=t},expression:"domains"}},[n("Toolbar",{on:{"load-data":function(t){return e.showDialog(e.dialogs.LOAD)},"save-data":function(t){return e.showDialog(e.dialogs.SAVE)},"show-preferences":function(t){return e.showDialog(e.dialogs.PREFERENCES)}}})],1),n("div",{staticClass:"container"},[n("dimensions-editor",{on:{"show-hide":e.showVariableEditor,"edit-dimensions":e.editDimensions,"selection-changed":e.onFilterKetChange},model:{value:e.dimensions,callback:function(t){e.dimensions=t},expression:"dimensions"}}),e.variableEditorVisible&&e.variableSet?n("variable-set-editor",{on:{change:e.updateVariableSet},model:{value:e.variableSet,callback:function(t){e.variableSet=t},expression:"variableSet"}}):e._e(),n("request-editor",{on:{send:function(t){return e.onSend(e.request)}},model:{value:e.request,callback:function(t){e.request=t},expression:"request"}})],1)],1)},i=[],r=(n("99af"),n("2909")),s=n("d4ec"),c=n("bee2"),l=n("262e"),u=n("2caf"),_=n("9ab4"),d=n("60a3"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.value?n("div",{staticClass:"request-editor"},[n("div",{staticClass:"request-editor-header-and-body"},[n("headers-editor",{model:{value:e.value.headers,callback:function(t){e.$set(e.value,"headers",t)},expression:"value.headers"}}),n("body-editor",{model:{value:e.value.body,callback:function(t){e.$set(e.value,"body",t)},expression:"value.body"}},[n("label",{staticClass:"method-editor"},[n("span",[e._v("Method:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value.method,expression:"value.method"}],attrs:{type:"text"},domProps:{value:e.value.method},on:{input:function(t){t.target.composing||e.$set(e.value,"method",t.target.value)}}}),n("action-link",{attrs:{icon:"🍪",value:"Cookie Manager"}})],1)])],1),n("url-editor",{staticClass:"request-editor-url",on:{send:function(t){return e.$emit("send")}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1):n("div",{staticClass:"request-editor-empty"},[n("i",[e._v("📭 Empty")]),n("span",[e._v("there is no request selected")])])},b=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"headers-editor"},[n("h4",[e._v("Headers")]),n("div",{staticClass:"table"},[e._l(e.value,(function(t,a){return n("div",{key:a,staticClass:"row"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"header.name"}],domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"header.value"}],domProps:{value:t.value},on:{input:function(n){n.target.composing||e.$set(t,"value",n.target.value)}}}),n("button",{staticClass:"action",on:{click:function(n){return e.deleteHeader(t)}}},[e._v("×")])])})),n("div",{staticClass:"actions"},[n("button",{on:{click:e.addNewHeader}},[e._v(" ➕ Add Header")])])],2)])},m=[],f=(n("4de4"),function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"addNewHeader",value:function(){var e=[].concat(Object(r["a"])(this.value),[{name:"",value:""}]);this.$emit("input",e)}},{key:"deleteHeader",value:function(e){var t=this.value.filter((function(t){return t!==e}));this.$emit("input",t)}}]),n}(d["c"]));Object(_["a"])([Object(d["b"])()],f.prototype,"value",void 0),f=Object(_["a"])([Object(d["a"])({name:"headers"})],f);var h=f,O=h,E=(n("1bd8"),n("2877")),y=Object(E["a"])(O,p,m,!1,null,"5b61e0b0",null),j=y.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"body"},[e._t("default"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}})],2)},k=[],P=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"content",get:function(){return this.value},set:function(e){this.$emit("input",e)}}]),n}(d["c"]);Object(_["a"])([Object(d["b"])()],P.prototype,"value",void 0),P=Object(_["a"])([Object(d["a"])({name:"request-body"})],P);var T=P,D=T,C=(n("9d95"),Object(E["a"])(D,g,k,!1,null,"804aaa66",null)),S=C.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"url-editor"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value.protocol,expression:"value.protocol"}],staticClass:"protocol",domProps:{value:e.value.protocol},on:{input:function(t){t.target.composing||e.$set(e.value,"protocol",t.target.value)}}}),n("span",[e._v("://")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value.path,expression:"value.path"}],staticClass:"url",domProps:{value:e.value.path},on:{input:function(t){t.target.composing||e.$set(e.value,"path",t.target.value)}}}),n("button",{staticClass:"send",on:{click:function(t){return e.$emit("send")}}},[e._v("Send")])])},M=[],R=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Object(_["a"])([Object(d["b"])()],R.prototype,"value",void 0),R=Object(_["a"])([Object(d["a"])({name:"UrlEditor"})],R);var N=R,A=N,L=(n("51cf"),Object(E["a"])(A,w,M,!1,null,"4dbea8d2",null)),x=L.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"link",attrs:{href:"#"},on:{click:function(t){return e.$emit("click")}}},[e.icon?n("i",{staticClass:"icon"},[e._v(e._s(e.icon))]):e._e(),e._t("default"),n("span",[e._v(e._s(e.value))])],2)},U=[],$=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Object(_["a"])([Object(d["b"])({default:function(){return""}})],$.prototype,"icon",void 0),Object(_["a"])([Object(d["b"])({required:!1,default:function(){return""}})],$.prototype,"value",void 0),$=Object(_["a"])([Object(d["a"])({name:"Link"})],$);var I=$,K=I,H=(n("286d"),Object(E["a"])(K,q,U,!1,null,"33871e64",null)),B=H.exports,V=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Object(_["a"])([Object(d["b"])({required:!0})],V.prototype,"value",void 0),V=Object(_["a"])([Object(d["a"])({name:"request-editor",components:{HeadersEditor:j,ActionLink:B,BodyEditor:S,UrlEditor:x}})],V);var W=V,G=W,J=(n("6369"),Object(E["a"])(G,v,b,!1,null,"6bf4e00d",null)),F=J.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"domains"},[n("h4",{on:{click:e.clearSelect}},[e._v("Domains")]),e._t("default"),n("div",{staticClass:"list"},[e._l(e.value,(function(t,a){return n("DomainEditor",{key:a,attrs:{value:t,selected:e.ui.selected},on:{select:e.selectRequest,delete:e.deleteDomain}})})),n("div",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.$emit("onRequestNew")}}},[n("strong",[e._v("Add new domain")]),n("span",[e._v(" ➕ ")])])],2)],2)},z=[],X=(n("c975"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"domain"},[n("header",[n("i",{on:{click:e.onToggle}},[e._v("🗂")]),e.editMode?n("input",{directives:[{name:"model",rawName:"v-model",value:e.value.name,expression:"value.name"}],attrs:{type:"text"},domProps:{value:e.value.name},on:{keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.editMode=!1},input:function(t){t.target.composing||e.$set(e.value,"name",t.target.value)}}}):n("span",{on:{click:e.onToggle,dblclick:function(t){e.editMode=!0}}},[e._v(e._s(e.value.name))]),n("action-link",{staticClass:"action new",attrs:{icon:"📄"},on:{click:e.createRequest}}),n("action-link",{staticClass:"action  delete",attrs:{icon:"🗑️"},on:{click:function(t){return e.$emit("delete",e.value)}}})],1),e.open?n("div",{staticClass:"requests"},e._l(e.value.requests,(function(t,a){return n("action-link",{key:"request_"+a,class:{selected:e.selected===t},attrs:{value:t.name},on:{click:function(n){return e.$emit("select",t)}}},[n("method",{attrs:{value:t.method}})],1)})),1):e._e()])}),Q=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"method",class:e.value.toLocaleLowerCase()},[e._v(" "+e._s(e.value)+" ")])},ee=[],te=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Object(_["a"])([Object(d["b"])()],te.prototype,"value",void 0),te=Object(_["a"])([d["a"]],te);var ne=te,ae=ne,oe=(n("0439"),Object(E["a"])(ae,Z,ee,!1,null,"cbfc2bf2",null)),ie=oe.exports,re=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.selected=null,e.open=!1,e.editMode=!1,e}return Object(c["a"])(n,[{key:"createRequest",value:function(){var e={name:"New Request",method:"GET",protocol:"HTTP",headers:[],body:null,path:"foo.bar"};this.value.requests=[].concat(Object(r["a"])(this.value.requests),[e])}},{key:"onToggle",value:function(){this.open=!this.open}}]),n}(d["c"]);Object(_["a"])([Object(d["b"])()],re.prototype,"value",void 0),Object(_["a"])([Object(d["b"])()],re.prototype,"selected",void 0),re=Object(_["a"])([Object(d["a"])({name:"domain-editor",components:{Method:ie,ActionLink:B}})],re);var se=re,ce=se,le=(n("da22"),Object(E["a"])(ce,X,Q,!1,null,"249386b2",null)),ue=le.exports,_e=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.ui={selected:null},e}return Object(c["a"])(n,[{key:"clearSelect",value:function(){this.selectRequest(null)}},{key:"deleteDomain",value:function(e){this.$delete(this.value,this.value.indexOf(e))}},{key:"selectRequest",value:function(e){this.$emit("onRequestSelect",e),this.ui.selected=e}},{key:"toggleDomainUI",value:function(e){var t=this.ui.domains[e]||{};t.open=!t.open,this.$set(this.ui.domains,e,t)}}]),n}(d["c"]);Object(_["a"])([Object(d["b"])()],_e.prototype,"value",void 0),_e=Object(_["a"])([Object(d["a"])({name:"Domains",components:{DomainEditor:ue,ActionLink:B}})],_e);var de=_e,ve=de,be=(n("37ff"),Object(E["a"])(ve,Y,z,!1,null,"643eeb7a",null)),pe=be.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dimensions-editor"},[e._m(0),n("div",{staticClass:"tools"},[n("action-link",{attrs:{icon:"🧭",value:"Show/hide vars"},on:{click:function(t){return e.$emit("show-hide")}}}),n("action-link",{attrs:{icon:"📈",value:"Edit dimensions"},on:{click:function(t){return e.$emit("edit-dimensions")}}})],1),n("div",{staticClass:"dimensions"},e._l(e.value,(function(t){return n("div",{staticClass:"dimension"},[n("label",[e._v(e._s(t.name))]),n("label",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.filterKey[t.name],expression:"filterKey[dimension.name]"}],on:{change:[function(n){var a=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.filterKey,t.name,n.target.multiple?a:a[0])},e.updateSelection]}},[n("option",{attrs:{value:"*"}},[e._v(" × ALL ×")]),e._l(t.values,(function(t,a){return n("option",{key:a,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)])])})),0)])},fe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v("Dimensions")])])}],he=(n("b0c0"),n("b85c")),Oe=[{name:"application",values:["security","content","messaging"]},{name:"region",values:["eu","latam","mena"]},{name:"environment",values:["local","qa","prod"]}],Ee=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.filterKey={},e}return Object(c["a"])(n,[{key:"beforeMount",value:function(){var e,t=Object(he["a"])(Oe);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.filterKey[n.name]="*"}}catch(a){t.e(a)}finally{t.f()}}},{key:"mounted",value:function(){this.updateSelection()}},{key:"updateSelection",value:function(){this.$emit("selection-changed",this.filterKey)}}]),n}(d["c"]);Object(_["a"])([Object(d["b"])()],Ee.prototype,"value",void 0),Ee=Object(_["a"])([Object(d["a"])({name:"dimensions-editor",components:{ActionLink:B}})],Ee);var ye=Ee,je=ye,ge=(n("cec0"),Object(E["a"])(je,me,fe,!1,null,null,null)),ke=ge.exports,Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"variable-set-editor"},[n("div",{staticClass:"variables"},[e._m(0),e._l(e.variables,(function(t,a){return n("div",{staticClass:"variable"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"variable.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{change:e.onVariableChange,input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"variable.value"}],class:{blur:e.shouldBlur(t)},attrs:{type:"text"},domProps:{value:t.value},on:{change:e.onVariableChange,input:function(n){n.target.composing||e.$set(t,"value",n.target.value)}}})])})),n("div",[n("action-link",{attrs:{icon:"➕",value:"Add New"},on:{click:e.addNewRow}})],1)],2)])},Te=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"variable"},[n("span",[e._v("Variable name")]),n("span",[e._v("Value Script")])])}],De=(n("7db0"),n("2ca0"),n("498a"),function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"newVarName",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=0===t?"variable":"variable_".concat(t);return e[n]?this.newVarName(e,t+1):n}},{key:"onVariableChange",value:function(e){var t,n=e.addNew,a=void 0!==n&&n,o={key:this.value.key,variables:{}},i=Object(he["a"])(this.variables);try{for(i.s();!(t=i.n()).done;){var r=t.value;o.variables[r.name]=r.value}}catch(c){i.e(c)}finally{i.f()}if(a){var s=this.newVarName(o.variables);o.variables[s]='"string"'}this.$emit("input",o),this.$emit("change")}},{key:"addNewRow",value:function(){this.onVariableChange({addNew:!0})}},{key:"shouldBlur",value:function(e){return["secret","token","password","auth","bearer","basic"].find((function(t){return e.name.indexOf(t)>-1||e.value.trim().startsWith(t)}))}},{key:"variables",get:function(){var e=[];for(var t in this.value.variables)e.push({name:t,value:this.value.variables[t]});return e}}]),n}(d["c"]));Object(_["a"])([Object(d["b"])()],De.prototype,"value",void 0),De=Object(_["a"])([Object(d["a"])({name:"VariableSetEditor",components:{ActionLink:B}})],De);var Ce=De,Se=Ce,we=(n("516f"),Object(E["a"])(Se,Pe,Te,!1,null,"9f35099e",null)),Me=we.exports,Re=n("5530");function Ne(e,t){for(var n in Object(Re["a"])(Object(Re["a"])({},e),t))if(t[n]!=e[n])return!1;return!0}function Ae(e,t){for(var n in e.key)if("*"!==e.key[n]&&e.key[n]!=t[n])return!1;return!0}var Le=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];Object(s["a"])(this,e),this.variableSets=t}return Object(c["a"])(e,[{key:"exportVariableSets",value:function(){return JSON.parse(JSON.stringify(this.variableSets))}},{key:"findOrCreate",value:function(e){var t=this.find(e);return t||this.create(e)}},{key:"find",value:function(e){return this.variableSets.filter((function(t){return Ne(t.key,e)}))[0]}},{key:"create",value:function(e){var t={key:Object(Re["a"])({},e),variables:{}};return this.variableSets.push(t),t}},{key:"buildFor",value:function(e){var t,n={},a=Object(he["a"])(this.variableSets);try{for(a.s();!(t=a.n()).done;){var o=t.value;Ae(o,e)&&this.applySet(o,n)}}catch(i){a.e(i)}finally{a.f()}return n}},{key:"applySet",value:function(e,t){for(var n in e.variables)e.variables[n]&&(t[n]=e.variables[n])}},{key:"update",value:function(e){null!==e&&(this.find(e.key).variables=e.variables)}}]),e}(),xe=n("42db"),qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toolbar"},[n("action-link",{attrs:{icon:"🗄",value:"Load"},on:{click:function(t){return e.$emit("load-data")}}}),n("action-link",{attrs:{icon:"🗃️",value:"Save"},on:{click:function(t){return e.$emit("save-data")}}}),n("action-link",{attrs:{icon:"🧰",value:"Setting"},on:{click:function(t){return e.$emit("show-preferences")}}})],1)},Ue=[],$e=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);$e=Object(_["a"])([Object(d["a"])({name:"Toolbar",components:{ActionLink:B}})],$e);var Ie=$e,Ke=Ie,He=(n("c7bf"),Object(E["a"])(Ke,qe,Ue,!1,null,"b785a446",null)),Be=He.exports,Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dialog-base",{staticClass:"preferences",attrs:{icon:"🛠️",title:"Preferences"},on:{close:function(t){return e.$emit("close")}}},[n("div",{staticClass:"panels"},[n("ul",{staticClass:"side"},[n("li",{staticClass:"selected"},[n("i",[e._v("📐")]),n("span",[e._v("Appearance")])]),n("li",[n("i",[e._v("🏗️")]),n("span",[e._v("Request Generation")])]),n("li",[n("i",[e._v("🦺")]),n("span",[e._v("Security")])]),n("li",[n("i",[e._v("🔩")]),n("span",[e._v("Plugins")])])]),n("section",{staticClass:"section"},[e._v(" TODO: NOT IMPLEMENTED YET! ")])])])},We=[],Ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dialog"},[n("header",[e._v(" "+e._s(e.icon)+" "),n("strong",[e._v(e._s(e.title))]),n("span",{on:{click:function(t){return e.$emit("close")}}},[e._v("×")])]),e._t("default"),n("span",{staticClass:"overlay"},[e._v(e._s(e.icon))])],2)},Je=[],Fe=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Object(_["a"])([Object(d["b"])()],Fe.prototype,"icon",void 0),Object(_["a"])([Object(d["b"])()],Fe.prototype,"title",void 0),Fe=Object(_["a"])([Object(d["a"])({name:"Dialog"})],Fe);var Ye=Fe,ze=Ye,Xe=(n("a02a"),Object(E["a"])(ze,Ge,Je,!1,null,"278900d2",null)),Qe=Xe.exports,Ze=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return n}(d["c"]);Ze=Object(_["a"])([Object(d["a"])({name:"preferences-dialog",components:{DialogBase:Qe}})],Ze);var et=Ze,tt=et,nt=(n("7270"),Object(E["a"])(tt,Ve,We,!1,null,null,null)),at=nt.exports,ot=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dialog-base",{staticClass:"load-data",attrs:{icon:"📬️",title:"Load data"},on:{close:function(t){return e.$emit("close")}}},[n("section",{staticClass:"section"},[n("h4",[e._v("🚢 What kind of data do you want to be loaded?")]),n("div",{staticClass:"selections"},[n("button",{on:{click:function(t){return e.load(e.testData)}}},[e._v(" Test Data "),n("i",[e._v("👩‍🔬")])]),n("button",{on:{click:function(t){return e.load(e.localStorageData)}}},[e._v(" localStorage "),n("i",[e._v("🥼")])]),n("button",{on:{click:function(t){return e.console.error("not implemented yet!")}}},[e._v(" Raw JSON "),n("i",[e._v("🧬")])])])])])},it=[],rt=[{key:{application:"*",region:"*",environment:"*"},variables:{protocol:"HTTP",host:"localhost(WEB)",token:'bearer("MY TOKEN")'}},{key:{application:"*",region:"*",environment:"local"},variables:{host:"localhost(TOMCAT)",username:'secret("test")',password:'"test"'}}],st=[{name:"User",requests:[{name:"Me",method:"GET",protocol:"HTTP",path:'env.host + "/api/1/me"',headers:[{name:"Content-Type",value:"contentType.json"}]},{name:"Login",method:"POST",protocol:"HTTP",path:'env.host + "/api/1/form"',body:"json({\n    username: env.username,\n    password: env.password\n})",headers:[{name:"Content-Type",value:"contentType.json"},{name:"Accept",value:"responseType.json"}]},{name:"Refresh token",method:"PUT",path:'env.host + "/api/1/access-token"',protocol:"env.protocol",headers:[{name:"Authorization",value:"env.token"}],body:'"{}"'}]},{name:"Posts",requests:[{name:"Create post",method:"POST",path:'env.host + "/api/1/posts"',protocol:"env.protocol",headers:[{name:"Authorization",value:"env.token"}],body:"json({\n    id: fake.id,\n    user: fake.id,\n    title: fake.name,\n    expire: fake.date\n})"}]},{name:"Chat",requests:[]}],ct=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.EMPTY={metadata:{version:1,ui:{}},data:{domains:[],dimensions:[],variableSets:[]}},e}return Object(c["a"])(n,[{key:"load",value:function(e){this.$emit("load-data",e),this.$emit("close")}},{key:"testData",get:function(){return{metadata:{version:1,ui:{}},data:{domains:st,dimensions:Oe,variableSets:rt}}}},{key:"localStorageData",get:function(){var e=localStorage.getItem("posteci-data");return e?JSON.parse(e):this.EMPTY}}]),n}(d["c"]);ct=Object(_["a"])([Object(d["a"])({name:"load-data-dialog",components:{DialogBase:Qe}})],ct);var lt=ct,ut=lt,_t=(n("1617"),Object(E["a"])(ut,ot,it,!1,null,null,null)),dt=_t.exports,vt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dialog-base",{staticClass:"save-data",attrs:{icon:"📮",title:"Save data"},on:{close:function(t){return e.$emit("close")}}},[n("section",{staticClass:"section"},[e._v(" TODO: NOT IMPLEMENTED YET! "),n("button",{on:{click:e.saveToLocalStorage}},[e._v(" Save to Local Storage "),n("i",[e._v("🔬")])])])])},bt=[],pt=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){return Object(s["a"])(this,n),t.apply(this,arguments)}return Object(c["a"])(n,[{key:"saveToLocalStorage",value:function(){this.$emit("save-data",{commit:function(e){return localStorage.setItem("posteci-data",JSON.stringify(e))}}),this.$emit("close")}}]),n}(d["c"]);pt=Object(_["a"])([Object(d["a"])({name:"save-data-dialog",components:{DialogBase:Qe}})],pt);var mt=pt,ft=mt,ht=(n("1a73"),Object(E["a"])(ft,vt,bt,!1,null,null,null)),Ot=ht.exports,Et=function(e){Object(l["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(s["a"])(this,n),e=t.apply(this,arguments),e.dimensions=[],e.domains=[],e.request=null,e.environment=new Le,e.dimensionKey={},e.variableEditorVisible=!1,e.dimensiobEditMode=!1,e.variableSet=null,e.dialogs={PREFERENCES:"PREFERENCES",ERROR:"ERROR",RESPONSE:"RESPONSE",LOAD:"LOAD",SAVE:"SAVE",HIDE:"NONE"},e.dialog=e.dialogs.HIDE,e.readyToShow=!1,e}return Object(c["a"])(n,[{key:"loadData",value:function(e){this.dimensions=e.data.dimensions,this.domains=e.data.domains,this.environment=new Le(e.data.variableSets)}},{key:"saveData",value:function(e){e.commit({metadata:{version:1,ui:{}},data:{dimension:JSON.parse(JSON.stringify(this.dimensions)),domains:JSON.parse(JSON.stringify(this.domains)),variableSets:this.environment.exportVariableSets()}})}},{key:"onFilterKetChange",value:function(e){this.variableSet=this.environment.findOrCreate(e),this.dimensionKey=e}},{key:"pickRequest",value:function(e){this.variableSet=null,this.request=e}},{key:"editDimensions",value:function(){this.dimensiobEditMode=!0}},{key:"showVariableEditor",value:function(){this.variableEditorVisible=!this.variableEditorVisible,this.variableSet=this.environment.findOrCreate(this.dimensionKey)}},{key:"onSend",value:function(e){var t=this.environment.buildFor(this.dimensionKey);xe["a"].with(e).withVariables(t).build()}},{key:"updateVariableSet",value:function(){this.environment.update(this.variableSet)}},{key:"createDomain",value:function(){var e={name:"New Domain",requests:[]};this.domains=[].concat(Object(r["a"])(this.domains),[e])}},{key:"showDialog",value:function(e){this.dialog=e}},{key:"hideDialog",value:function(){this.readyToShow=!1}}]),n}(d["c"]);Et=Object(_["a"])([Object(d["a"])({components:{SaveDataDialog:Ot,LoadDataDialog:dt,PreferencesDialog:at,Toolbar:Be,DimensionsEditor:ke,VariableSetEditor:Me,RequestEditor:F,Domains:pe}})],Et);var yt=Et,jt=yt,gt=(n("5c0b"),Object(E["a"])(jt,o,i,!1,null,null,null)),kt=gt.exports,Pt=n("9483");Object(Pt["a"])("".concat("/posteci/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(kt)}}).$mount("#app")},cec0:function(e,t,n){"use strict";var a=n("74b5"),o=n.n(a);o.a},da22:function(e,t,n){"use strict";var a=n("b80b"),o=n.n(a);o.a},db57:function(e,t,n){},e8be:function(e,t,n){}});
//# sourceMappingURL=app.526cd599.js.map