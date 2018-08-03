define(["TFS/WorkItemTracking/RestClient","TFS/WorkItemTracking/Contracts","q"],function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,r){"use strict";t.__esModule=!0,t.extend=s,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(i,o)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=s({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},i=/[&<>"'`=]/g,a=/[&<>"'`=]/;function o(e){return n[e]}function s(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var l=Object.prototype.toString;t.toString=l;var u=function(e){return"function"==typeof e};u(/x/)&&(t.isFunction=u=function(e){return"function"==typeof e&&"[object Function]"===l.call(e)}),t.isFunction=u;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===l.call(e)};t.isArray=c},function(e,t,r){"use strict";t.__esModule=!0;var n=["description","fileName","lineNumber","message","name","number","stack"];function i(e,t){var r=t&&t.loc,a=void 0,o=void 0;r&&(e+=" - "+(a=r.start.line)+":"+(o=r.start.column));for(var s=Error.prototype.constructor.call(this,e),l=0;l<n.length;l++)this[n[l]]=s[n[l]];Error.captureStackTrace&&Error.captureStackTrace(this,i);try{r&&(this.lineNumber=a,Object.defineProperty?Object.defineProperty(this,"column",{value:o,enumerable:!0}):this.column=o)}catch(e){}}i.prototype=new Error,t.default=i,e.exports=t.default},function(t,r){t.exports=e},function(e,t,r){e.exports=r(9).default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=u;var i=r(0),a=n(r(1)),o=r(10),s=r(18),l=n(r(20));t.VERSION="4.0.11";t.COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};function u(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},o.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:l.default,log:l.default.log,registerHelper:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");i.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===i.toString.call(e))i.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===i.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");i.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};var c=l.default.log;t.log=c,t.createFrame=i.createFrame,t.logger=l.default},function(e,t,r){var n,i;n=[r,t,r(2),r(6),r(7)],void 0===(i=function(e,t,n,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(8),s=r(25),l=VSS.getExtensionContext(),u=(VSS.getWebContext(),n.getClient()),c=[{name:"Assigned To",referenceName:"System.AssignedTo"},{name:"State",referenceName:"System.State"},{name:"Created Date",referenceName:"System.CreatedDate"},{name:"Description",referenceName:"System.Description"},{name:"Acceptance Criteria",referenceName:"Microsoft.VSTS.Common.AcceptanceCriteria"},{name:"History",referenceName:"System.History"}];String.prototype.sanitize=function(){return this.replace(/\s/g,"-").replace(/[^a-z0-9\-]/gi,"")},String.prototype.htmlize=function(){return this.replace(/<\/*(step|param|desc|comp)(.*?)>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&")};var d={getMenuItems:function(e){var t="Print";return e.workItemIds&&e.workItemIds.length>1&&(t="Print Selection"),[{action:function(e){return function(e){return u.getWorkItems(e,void 0,void 0,i.WorkItemExpand.Fields)}(e.workItemIds||e.ids||[e.workItemId||e.id]).then(function(e){return function(e){return e.map(function(e){return a.all([function(e){return VSS.getService(VSS.ServiceIds.ExtensionData).then(function(t){return t.getValue("wiprint-"+e.fields["System.WorkItemType"].sanitize(),{scopeType:"user",defaultValue:c})})}(e),function(e){return u.getComments(e.id)}(e),u.getFields()]).then(function(e){return e}).spread(function(t,r,n){var i={};return"User Story"===e.fields["System.WorkItemType"]&&(i={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],description:e.fields["System.Description"],acceptance_criteria:e.fields["Microsoft.VSTS.Common.AcceptanceCriteria"],id:e.fields["System.Id"]}),"Bug"===e.fields["System.WorkItemType"]&&(i={type:e.fields["System.WorkItemType"],title:e.fields["System.Title"],repro_steps:e.fields["Microsoft.VSTS.TCM.ReproSteps"],system_info:e.fields["Microsoft.VSTS.TCM.SystemInfo"],id:e.fields["System.Id"]}),i})})}(e)}).then(function(e){return a.all(e)}).then(function(e){var t=document.createElement("div");t.setAttribute("class","container border"),e.forEach(function(e){var r,n;"Bug"===e.type&&(r=s({number:e.id,title:e.title,repro_steps:e.repro_steps,system_info:e.system_info})),"User Story"===e.type&&(n=o({number:e.id,title:e.title,description:e.description,acceptance_criteria:e.acceptance_criteria})),"Bug"===e.type&&(t.innerHTML+=r),"User Story"===e.type&&(t.innerHTML+=n)}),document.body.appendChild(t),setTimeout(function(){window.focus(),document.execCommand("print",!1,null)||window.print(),t.parentElement.removeChild(t)},1e3)})},icon:"static/img/print14.png",text:t,title:t}]}};VSS.register(l.publisherId+"."+l.extensionId+".print-work-item",d)}.apply(t,n))||(e.exports=i)},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t,r){var n=r(3);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,n,i){var a,o,s=null!=t?t:e.nullContext||{},l=r.helperMissing,u=e.escapeExpression;return'<div class="container border-blue">\r\n  <div class="title-and-estimate-container">\r\n    <div class="title-container">\r\n      <div class="title-text">\r\n        <strong>Title:&nbsp;</strong>'+u("function"==typeof(o=null!=(o=r.title||(null!=t?t.title:t))?o:l)?o.call(s,{name:"title",hash:{},data:i}):o)+'\r\n      </div>\r\n    </div>\r\n    <div class="estimate-container border-blue"></div>\r\n  </div>\r\n  <div class="userstory-and-discipline-container">\r\n    <div class="user-story"> \r\n      <strong>Description:</strong><br/>\r\n      '+(null!=(a="function"==typeof(o=null!=(o=r.description||(null!=t?t.description:t))?o:l)?o.call(s,{name:"description",hash:{},data:i}):o)?a:"")+'\r\n     </div>\r\n    <div class="discipline-container">\r\n      <div class="discipline">\r\n        <div class="description">Dev</div>\r\n        <div class="box border-blue"></div>\r\n      </div>\r\n      <div class="discipline">\r\n        <div class="description">UX</div>\r\n        <div class="box border-blue"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="po-vsts-container">\r\n    <div class="po">\r\n      <strong>Product Owner:</strong>\r\n    </div>\r\n    <div class="vsts-number">\r\n      <strong>'+u("function"==typeof(o=null!=(o=r.number||(null!=t?t.number:t))?o:l)?o.call(s,{name:"number",hash:{},data:i}):o)+'</strong> \r\n    </div>\r\n  </div>\r\n  \r\n  <hr/>\r\n  \r\n  <div class="acceptance-criteria-container">\r\n    <div class="acceptance-criteria">\r\n      <strong>Acceptance Criteria:</strong><br/>\r\n        '+(null!=(a="function"==typeof(o=null!=(o=r.acceptance_criteria||(null!=t?t.acceptance_criteria:t))?o:l)?o.call(s,{name:"acceptance_criteria",hash:{},data:i}):o)?a:"")+"\r\n    </div>\r\n  </div>\r\n</div>"},useData:!0})},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=i(r(4)),o=n(r(21)),s=n(r(1)),l=i(r(0)),u=i(r(22)),c=n(r(23));function d(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=o.default,e.Exception=s.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=u,e.template=function(t){return u.template(t,e)},e}var f=d();f.create=d,c.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){i.default(e),a.default(e),o.default(e),s.default(e),l.default(e),u.default(e),c.default(e)};var i=n(r(11)),a=n(r(12)),o=n(r(13)),s=n(r(14)),l=n(r(15)),u=n(r(16)),c=n(r(17))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var i=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return i(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):i(this);if(r.data&&r.ids){var o=n.createFrame(r.data);o.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:o}}return a(t,r)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new i.default("Must pass iterator to #each");var r=t.fn,a=t.inverse,o=0,s="",l=void 0,u=void 0;function c(t,i,a){l&&(l.key=t,l.index=i,l.first=0===i,l.last=!!a,u&&(l.contextPath=u+t)),s+=r(e[t],{data:l,blockParams:n.blockParams([e[t],t],[u+t,null])})}if(t.data&&t.ids&&(u=n.appendContextPath(t.data.contextPath,t.ids[0])+"."),n.isFunction(e)&&(e=e.call(this)),t.data&&(l=n.createFrame(t.data)),e&&"object"==typeof e)if(n.isArray(e))for(var d=e.length;o<d;o++)o in e&&c(o,o,o===e.length-1);else{var f=void 0;for(var p in e)e.hasOwnProperty(p)&&(void 0!==f&&c(f,o-1),f=p,o++);void 0!==f&&c(f,o-1,!0)}return 0===o&&(s=a(this)),s})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new n.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("if",function(e,t){return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var i=1;null!=r.hash.level?i=r.hash.level:r.data&&null!=r.data.level&&(i=r.data.level),t[0]=i,e.log.apply(e,t)})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t){return e&&e[t]})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerHelper("with",function(e,t){n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var i=t.data;return t.data&&t.ids&&((i=n.createFrame(t.data)).contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:i,blockParams:n.blockParams([e],[i&&i.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){n.default(e)};var n=function(e){return e&&e.__esModule?e:{default:e}}(r(19))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0);t.default=function(e){e.registerDecorator("inline",function(e,t,r,i){var a=e;return t.partials||(t.partials={},a=function(i,a){var o=r.partials;r.partials=n.extend({},o,t.partials);var s=e(i,a);return r.partials=o,s}),t.partials[i.args[0]]=i.fn,a})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(0),i={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(i.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=i.lookupLevel(e),"undefined"!=typeof console&&i.lookupLevel(i.level)<=e){var t=i.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=i,e.exports=t.default},function(e,t,r){"use strict";function n(e){this.string=e}t.__esModule=!0,n.prototype.toString=n.prototype.toHTML=function(){return""+this.string},t.default=n,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=a.COMPILER_REVISION;if(t!==r){if(t<r){var n=a.REVISION_CHANGES[r],o=a.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r={strict:function(e,t){if(!(t in e))throw new i.default('"'+t+'" not defined in '+e);return e[t]},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++)if(e[n]&&null!=e[n][t])return e[n][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:n.escapeExpression,invokePartial:function(r,a,o){o.hash&&(a=n.extend({},a,o.hash),o.ids&&(o.ids[0]=!0));r=t.VM.resolvePartial.call(this,r,a,o);var s=t.VM.invokePartial.call(this,r,a,o);null==s&&t.compile&&(o.partials[o.name]=t.compile(r,e.compilerOptions,t),s=o.partials[o.name](a,o));if(null!=s){if(o.indent){for(var l=s.split("\n"),u=0,c=l.length;u<c&&(l[u]||u+1!==c);u++)l[u]=o.indent+l[u];s=l.join("\n")}return s}throw new i.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,i){var a=this.programs[e],s=this.fn(e);return t||i||n||r?a=o(this,e,s,t,r,n,i):a||(a=this.programs[e]=o(this,e,s)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},merge:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=n.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function s(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=n.data;s._setup(n),!n.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?a.createFrame(t):{}).root=e);return t}(t,i));var o=void 0,u=e.useBlockParams?[]:void 0;function c(t){return""+e.main(r,t,r.helpers,r.partials,i,u,o)}return e.useDepths&&(o=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(c=l(e.main,c,r,n.depths||[],i,u))(t,n)}return s.isTop=!0,s._setup=function(n){n.partial?(r.helpers=n.helpers,r.partials=n.partials,r.decorators=n.decorators):(r.helpers=r.merge(n.helpers,t.helpers),e.usePartial&&(r.partials=r.merge(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=r.merge(n.decorators,t.decorators)))},s._child=function(t,n,a,s){if(e.useBlockParams&&!a)throw new i.default("must pass block params");if(e.useDepths&&!s)throw new i.default("must pass parent depths");return o(r,t,e[t],n,0,a,s)},s},t.wrapProgram=o,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var o=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var l=void 0;r.fn&&r.fn!==s&&function(){r.data=a.createFrame(r.data);var e=r.fn;l=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=a.createFrame(r.data),r.data["partial-block"]=o,e(t,r)},e.partials&&(r.partials=n.extend({},r.partials,e.partials))}();void 0===e&&l&&(e=l);if(void 0===e)throw new i.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=s;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),i=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),a=r(4);function o(e,t,r,n,i,a,o){function s(t){var i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=o;return!o||t==o[0]||t===e.nullContext&&null===o[0]||(s=[t].concat(o)),r(e,t,e.helpers,e.partials,i.data||n,a&&[i.blockParams].concat(a),s)}return(s=l(r,s,e,o,n,a)).program=t,s.depth=o?o.length:0,s.blockParams=i||0,s}function s(){return""}function l(e,t,r,i,a,o){if(e.decorator){var s={};t=e.decorator(t,s,r,i&&i[0],a,o,i),n.extend(t,s)}return t}},function(e,t,r){"use strict";(function(r){t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(this,r(24))},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){var n=r(3);e.exports=(n.default||n).template({compiler:[7,">= 4.0.0"],main:function(e,t,r,n,i){var a,o,s=null!=t?t:e.nullContext||{},l=r.helperMissing,u=e.escapeExpression;return'<div class="container border-red">\r\n  <div class="title-and-estimate-container">\r\n    <div class="title-container">\r\n      <div class="title-text">\r\n        <strong>Title:&nbsp;</strong>'+u("function"==typeof(o=null!=(o=r.title||(null!=t?t.title:t))?o:l)?o.call(s,{name:"title",hash:{},data:i}):o)+'\r\n      </div>\r\n    </div>\r\n    <div class="estimate-container border-red"></div>\r\n  </div>\r\n  <div class="userstory-and-discipline-container">\r\n    <div class="user-story"> \r\n      <strong>Reproduction Steps:</strong>\r\n      <br/>\r\n        '+(null!=(a="function"==typeof(o=null!=(o=r.repro_steps||(null!=t?t.repro_steps:t))?o:l)?o.call(s,{name:"repro_steps",hash:{},data:i}):o)?a:"")+"\r\n      <br/><br/>\r\n      <strong>System Info:</strong>\r\n      <br/>\r\n        "+(null!=(a="function"==typeof(o=null!=(o=r.system_info||(null!=t?t.system_info:t))?o:l)?o.call(s,{name:"system_info",hash:{},data:i}):o)?a:"")+'\r\n      <br/>\r\n     </div>\r\n    <div class="discipline-container">\r\n      <div class="discipline">\r\n        <div class="description">Dev</div>\r\n        <div class="box border-red"></div>\r\n      </div>\r\n      <div class="discipline">\r\n        <div class="description">UX</div>\r\n        <div class="box border-red"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="po-vsts-container">\r\n    <div class="po">\r\n      <strong>Product Owner:</strong>\r\n    </div>\r\n    <div class="vsts-number">\r\n      <strong>'+u("function"==typeof(o=null!=(o=r.number||(null!=t?t.number:t))?o:l)?o.call(s,{name:"number",hash:{},data:i}):o)+"</strong>\r\n    </div>\r\n  </div>\r\n</div>"},useData:!0})}])});
//# sourceMappingURL=wiprint.js.map