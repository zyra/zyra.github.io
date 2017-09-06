/*! Built with http://stenciljs.com */
App.loadComponents("cxkrsrmp",function(t,e,n,r,o){function i(t,e){for(var n,r=[],o=0,i=0,a="",c=e&&e.delimiter||"/";null!=(n=$.exec(t));){var s=n[0],p=n[1],l=n.index;if(a+=t.slice(i,l),i=l+s.length,p)a+=p[1];else{var f=t[i],d=n[2],v=n[3],m=n[4],g=n[5],y=n[6],w=n[7];a&&(r.push(a),a="");var b=null!=d&&null!=f&&f!==d,R="+"===y||"*"===y,E="?"===y||"*"===y,x=n[2]||c,T=m||g;r.push({name:v||o++,prefix:d||"",delimiter:x,optional:E,repeat:R,partial:b,asterisk:!!w,pattern:T?h(T):w?".*":"[^"+u(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&r.push(a),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function c(t){return encodeURI(t).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function s(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=(r||{}).pretty?a:encodeURIComponent,u=0;u<t.length;u++){var h=t[u];if("string"!=typeof h){var p,l=i[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(P(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(p=s(l[f]),!e[u].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===f?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):s(l),!e[u].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function h(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function p(t,e){return t.keys=e,t}function l(t){return t.sensitive?"":"i"}function f(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return p(t,e)}function d(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(g(t[o],e,n).source);return p(new RegExp("(?:"+r.join("|")+")",l(n)),e)}function v(t,e,n){return m(i(t,n),e,n)}function m(t,e,n){P(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)i+=u(c);else{var s=u(c.prefix),h="(?:"+c.pattern+")";e.push(c),c.repeat&&(h+="(?:"+s+h+")*"),i+=h=c.optional?c.partial?s+"("+h+")?":"(?:"+s+"("+h+"))?":s+"("+h+")"}}var f=u(n.delimiter||"/"),d=i.slice(-f.length)===f;return r||(i=(d?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+f+"|$)",p(new RegExp("^"+i,l(n)),e)}function g(t,e,n){return P(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?f(t,e):P(t)?d(t,e,n):v(t,e,n)}function y(t,e){var n=""+e.end+e.strict,r=_[n]||(_[n]={});if(r[t])return r[t];var o=[],i={re:j(t,o,e),keys:o};return H<B&&(r[t]=i,H+=1),i}function w(t,e){void 0===e&&(e={}),"string"==typeof e&&(e={path:e});var n=e.path,r=void 0===n?"/":n,o=e.exact,i=void 0!==o&&o,a=e.strict,c=y(r,{end:i,strict:void 0!==a&&a}),s=c.re,u=c.keys,h=s.exec(t);if(!h)return null;var p=h[0],l=h.slice(1),f=t===p;return i&&!f?null:{path:r,url:"/"===r&&""===p?"/":p,isExact:f,params:u.reduce(function(t,e,n){return t[e.name]=l[n],t},{})}}function b(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)}function R(t,e){return b(t,e)?t.substr(e.length):t}function E(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function x(t){return"/"===t.charAt(0)?t:"/"+t}function T(t){var e=t||"/",n="",r="",o=e.indexOf("#");-1!==o&&(r=e.substr(o),e=e.substr(0,o));var i=e.indexOf("?");return-1!==i&&(n=e.substr(i),e=e.substr(0,i)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}function O(t){var e=t.pathname,n=t.search,r=t.hash,o=e||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function k(t){return t?(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce(function(t,e){var n=e.split("="),r=n[0],o=n[1];return t[r]=o?decodeURIComponent(o.replace(/\+/g," ")):"",t},{}):{}}function C(t){return"/"===t.charAt(0)}function L(t,e){for(var n=e,r=n+1,o=t.length;r<o;n+=1,r+=1)t[n]=t[r];t.pop()}function U(t,e){void 0===e&&(e="");var n=t&&t.split("/")||[],r=e&&e.split("/")||[],o=t&&C(t),i=e&&C(e),a=o||i;if(t&&C(t)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var c;if(r.length){var s=r[r.length-1];c="."===s||".."===s||""===s}else c=!1;for(var u=0,h=r.length;h>=0;h--){var p=r[h];"."===p?L(r,h):".."===p?(L(r,h),u++):u&&(L(r,h),u--)}if(!a)for(;u--;u)r.unshift("..");!a||""===r[0]||r[0]&&C(r[0])||r.unshift("");var l=r.join("/");return c&&"/"!==l.substr(-1)&&(l+="/"),l}function A(t,e,n,r){var o;"string"==typeof t?(o=T(t)).state=e:(void 0===(o=J({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=U(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o.query=k(o.search),o}function S(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.error.apply(console,e)}function I(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t||console.warn.apply(console,e)}var P=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},j=g,M=i,N=s,D=m,$=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");j.parse=M,j.compile=function(t,e){return s(i(t,e))},j.tokensToFunction=N,j.tokensToRegExp=D;var _={},B=1e4,H=0,W=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},Y=function(){function t(){this.unsubscribe=function(){},this.componentProps={},this.exact=!1,this.routeRender=null,this.match=null}return t.prototype.computeMatch=function(t){return t||(t=this.activeRouter.get("location").pathname),w(t,{path:this.url,exact:this.exact,strict:!0})},t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.render=function(){if(!this.activeRouter||!this.match)return null;var t=W({},this.componentProps,{history:this.activeRouter.get("history"),match:this.match});if(this.routeRender)return this.routeRender(W({},t,{component:this.component}));if(this.component){var n=this.component;return e(n,{p:t})}},t}(),F=function(){function t(){this.unsubscribe=function(){},this.exact=!1,this.custom=!1,this.activeClass="link-active",this.match=null}return t.prototype.computeMatch=function(t){return t||(t=this.activeRouter.get("location").pathname),w(t,{path:this.url,exact:this.exact,strict:!0})},t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.handleClick=function(t){t.preventDefault();if(this.activeRouter)return this.activeRouter.get("history").push(this.url,{});console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!')},t.prototype.render=function(){var t=(n={},n[this.activeClass]=null!==this.match,n);return this.custom?e("span",{c:t,o:{click:this.handleClick.bind(this)}},e(0,0)):e("a",{c:t,o:{click:this.handleClick.bind(this)},p:{href:this.url}},e(0,0));var n},t}(),J=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},K=function(){var t=null,e=[];return{setPrompt:function(e){return I(null==t,"A history supports only one prompt at a time"),t=e,function(){t===e&&(t=null)}},confirmTransitionTo:function(e,n,r,o){if(null!=t){var i="function"==typeof t?t(e,n):t;"string"==typeof i?"function"==typeof r?r(i,o):(I(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),o(!0)):o(!1!==i)}else o(!0)},appendListener:function(t){var n=!0,r=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];n&&t.apply(void 0,e)};return e.push(r),function(){n=!1,e=e.filter(function(t){return t!==r})}},notifyListeners:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e.forEach(function(e){return e.apply(void 0,t)})}}},q=!("undefined"==typeof window||!window.document||!window.document.createElement),z=function(t,e,n){return t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},G=function(t,e,n){return t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},Q=function(t,e){return e(window.confirm(t))},V=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)},X=function(){return-1===window.navigator.userAgent.indexOf("Trident")},Z=function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")},tt=function(){try{return window.history.state||{}}catch(t){return{}}},et=function(t){void 0===t&&(t={}),S(q,"Browser history needs a DOM");var e=window.history,n=V(),r=!X(),o=t.forceRefresh,i=void 0!==o&&o,a=t.getUserConfirmation,c=void 0===a?Q:a,s=t.keyLength,u=void 0===s?6:s,h=t.basename?E(x(t.basename)):"",p=function(t){var e=(t=t||{}).key,n=t.state,r=window.location,o=r.pathname+r.search+r.hash;return I(!h||b(o,h),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+o+'" to begin with "'+h+'".'),h&&(o=R(o,h)),A(o,n,e)},l=function(){return Math.random().toString(36).substr(2,u)},f=K(),d=function(t){Object.assign(M,t),M.length=e.length,f.notifyListeners(M.location,M.action)},v=function(t){Z(t)||y(p(t.state))},m=function(){y(p(tt()))},g=!1,y=function(t){if(g)g=!1,d();else{f.confirmTransitionTo(t,"POP",c,function(e){e?d({action:"POP",location:t}):w(t)})}},w=function(t){var e=M.location,n=k.indexOf(e.key);-1===n&&(n=0);var r=k.indexOf(t.key);-1===r&&(r=0);var o=n-r;o&&(g=!0,L(o))},T=p(tt()),k=[T.key],C=function(t){return h+O(t)},L=function(t){e.go(t)},U=0,P=function(t){1===(U+=t)?(z(window,"popstate",v),r&&z(window,"hashchange",m)):0===U&&(G(window,"popstate",v),r&&G(window,"hashchange",m))},j=!1,M={length:e.length,action:"POP",location:T,createHref:C,push:function(t,r){I(!("object"==typeof t&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var o=A(t,r,l(),M.location);f.confirmTransitionTo(o,"PUSH",c,function(t){if(t){var r=C(o),a=o.key,c=o.state;if(n)if(e.pushState({key:a,state:c},null,r),i)window.location.href=r;else{var s=k.indexOf(M.location.key),u=k.slice(0,-1===s?0:s+1);u.push(o.key),k=u,d({action:"PUSH",location:o})}else I(void 0===c,"Browser history cannot push state in browsers that do not support HTML5 history"),window.location.href=r}})},replace:function(t,r){I(!("object"==typeof t&&void 0!==t.state&&void 0!==r),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var o=A(t,r,l(),M.location);f.confirmTransitionTo(o,"REPLACE",c,function(t){if(t){var r=C(o),a=o.key,c=o.state;if(n)if(e.replaceState({key:a,state:c},null,r),i)window.location.replace(r);else{var s=k.indexOf(M.location.key);-1!==s&&(k[s]=o.key),d({action:"REPLACE",location:o})}else I(void 0===c,"Browser history cannot replace state in browsers that do not support HTML5 history"),window.location.replace(r)}})},go:L,goBack:function(){return L(-1)},goForward:function(){return L(1)},block:function(t){void 0===t&&(t="");var e=f.setPrompt(t);return j||(P(1),j=!0),function(){return j&&(j=!1,P(-1)),e()}},listen:function(t){var e=f.appendListener(t);return P(1),function(){P(-1),e()}}};return M},nt=function(){function t(){this.root="/",this.unsubscribe=function(){},this.match=null}return t.prototype.computeMatch=function(t){return{path:this.root,url:this.root,isExact:t===this.root,params:{}}},t.prototype.componentWillLoad=function(){var t=this,e=et();e.listen(function(e){t.activeRouter.set({location:e})}),this.activeRouter.set({location:e.location,history:e}),this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.render=function(){return e(0,0)},t}(),rt=function(){function t(){}return t.prototype.componentWillLoad=function(){var t=this.activeRouter.get("history");if(t)return t.replace(this.url,{})},t}();t["STENCIL-ROUTE"]=Y,t["STENCIL-ROUTE-LINK"]=F,t["STENCIL-ROUTER"]=nt,t["STENCIL-ROUTER-REDIRECT"]=rt},["STENCIL-ROUTE",[["activeRouter",3,0,"activeRouter"],["component",1],["componentProps",1],["exact",1,1],["location",3,0,"location"],["match",5],["routeRender",1],["url",1]]],["STENCIL-ROUTE-LINK",[["activeClass",1],["activeRouter",3,0,"activeRouter"],["custom",1,1],["exact",1,1],["location",3,0,"location"],["match",5],["url",1]]],["STENCIL-ROUTER",[["activeRouter",3,0,"activeRouter"],["match",5],["root",1]]],["STENCIL-ROUTER-REDIRECT",[["activeRouter",3,0,"activeRouter"],["url",1]]]);