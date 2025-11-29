(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function Xv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Dh={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function f1(){if(vg)return Yo;vg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Yo.Fragment=t,Yo.jsx=n,Yo.jsxs=n,Yo}var _g;function h1(){return _g||(_g=1,Dh.exports=f1()),Dh.exports}var _=h1(),Lh={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function d1(){if(yg)return de;yg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function S(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function y(F,at,yt){this.props=F,this.context=at,this.refs=M,this.updater=yt||E}y.prototype.isReactComponent={},y.prototype.setState=function(F,at){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,at,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function z(){}z.prototype=y.prototype;function R(F,at,yt){this.props=F,this.context=at,this.refs=M,this.updater=yt||E}var O=R.prototype=new z;O.constructor=R,A(O,y.prototype),O.isPureReactComponent=!0;var B=Array.isArray;function P(){}var I={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(F,at,yt){var Ct=yt.ref;return{$$typeof:s,type:F,key:at,ref:Ct!==void 0?Ct:null,props:yt}}function N(F,at){return D(F.type,at,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function $(F){var at={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(yt){return at[yt]})}var ot=/\/+/g;function xt(F,at){return typeof F=="object"&&F!==null&&F.key!=null?$(""+F.key):at.toString(36)}function ut(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(P,P):(F.status="pending",F.then(function(at){F.status==="pending"&&(F.status="fulfilled",F.value=at)},function(at){F.status==="pending"&&(F.status="rejected",F.reason=at)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function H(F,at,yt,Ct,kt){var st=typeof F;(st==="undefined"||st==="boolean")&&(F=null);var ft=!1;if(F===null)ft=!0;else switch(st){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(F.$$typeof){case s:case t:ft=!0;break;case g:return ft=F._init,H(ft(F._payload),at,yt,Ct,kt)}}if(ft)return kt=kt(F),ft=Ct===""?"."+xt(F,0):Ct,B(kt)?(yt="",ft!=null&&(yt=ft.replace(ot,"$&/")+"/"),H(kt,at,yt,"",function(Qt){return Qt})):kt!=null&&(G(kt)&&(kt=N(kt,yt+(kt.key==null||F&&F.key===kt.key?"":(""+kt.key).replace(ot,"$&/")+"/")+ft)),at.push(kt)),1;ft=0;var zt=Ct===""?".":Ct+":";if(B(F))for(var Gt=0;Gt<F.length;Gt++)Ct=F[Gt],st=zt+xt(Ct,Gt),ft+=H(Ct,at,yt,st,kt);else if(Gt=S(F),typeof Gt=="function")for(F=Gt.call(F),Gt=0;!(Ct=F.next()).done;)Ct=Ct.value,st=zt+xt(Ct,Gt++),ft+=H(Ct,at,yt,st,kt);else if(st==="object"){if(typeof F.then=="function")return H(ut(F),at,yt,Ct,kt);throw at=String(F),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ft}function Y(F,at,yt){if(F==null)return F;var Ct=[],kt=0;return H(F,Ct,"","",function(st){return at.call(yt,st,kt++)}),Ct}function K(F){if(F._status===-1){var at=F._result;at=at(),at.then(function(yt){(F._status===0||F._status===-1)&&(F._status=1,F._result=yt)},function(yt){(F._status===0||F._status===-1)&&(F._status=2,F._result=yt)}),F._status===-1&&(F._status=0,F._result=at)}if(F._status===1)return F._result.default;throw F._result}var vt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},bt={map:Y,forEach:function(F,at,yt){Y(F,function(){at.apply(this,arguments)},yt)},count:function(F){var at=0;return Y(F,function(){at++}),at},toArray:function(F){return Y(F,function(at){return at})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return de.Activity=x,de.Children=bt,de.Component=y,de.Fragment=n,de.Profiler=o,de.PureComponent=R,de.StrictMode=a,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,de.__COMPILER_RUNTIME={__proto__:null,c:function(F){return I.H.useMemoCache(F)}},de.cache=function(F){return function(){return F.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(F,at,yt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Ct=A({},F.props),kt=F.key;if(at!=null)for(st in at.key!==void 0&&(kt=""+at.key),at)!Z.call(at,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&at.ref===void 0||(Ct[st]=at[st]);var st=arguments.length-2;if(st===1)Ct.children=yt;else if(1<st){for(var ft=Array(st),zt=0;zt<st;zt++)ft[zt]=arguments[zt+2];Ct.children=ft}return D(F.type,kt,Ct)},de.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},de.createElement=function(F,at,yt){var Ct,kt={},st=null;if(at!=null)for(Ct in at.key!==void 0&&(st=""+at.key),at)Z.call(at,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(kt[Ct]=at[Ct]);var ft=arguments.length-2;if(ft===1)kt.children=yt;else if(1<ft){for(var zt=Array(ft),Gt=0;Gt<ft;Gt++)zt[Gt]=arguments[Gt+2];kt.children=zt}if(F&&F.defaultProps)for(Ct in ft=F.defaultProps,ft)kt[Ct]===void 0&&(kt[Ct]=ft[Ct]);return D(F,st,kt)},de.createRef=function(){return{current:null}},de.forwardRef=function(F){return{$$typeof:h,render:F}},de.isValidElement=G,de.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:K}},de.memo=function(F,at){return{$$typeof:p,type:F,compare:at===void 0?null:at}},de.startTransition=function(F){var at=I.T,yt={};I.T=yt;try{var Ct=F(),kt=I.S;kt!==null&&kt(yt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(P,vt)}catch(st){vt(st)}finally{at!==null&&yt.types!==null&&(at.types=yt.types),I.T=at}},de.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},de.use=function(F){return I.H.use(F)},de.useActionState=function(F,at,yt){return I.H.useActionState(F,at,yt)},de.useCallback=function(F,at){return I.H.useCallback(F,at)},de.useContext=function(F){return I.H.useContext(F)},de.useDebugValue=function(){},de.useDeferredValue=function(F,at){return I.H.useDeferredValue(F,at)},de.useEffect=function(F,at){return I.H.useEffect(F,at)},de.useEffectEvent=function(F){return I.H.useEffectEvent(F)},de.useId=function(){return I.H.useId()},de.useImperativeHandle=function(F,at,yt){return I.H.useImperativeHandle(F,at,yt)},de.useInsertionEffect=function(F,at){return I.H.useInsertionEffect(F,at)},de.useLayoutEffect=function(F,at){return I.H.useLayoutEffect(F,at)},de.useMemo=function(F,at){return I.H.useMemo(F,at)},de.useOptimistic=function(F,at){return I.H.useOptimistic(F,at)},de.useReducer=function(F,at,yt){return I.H.useReducer(F,at,yt)},de.useRef=function(F){return I.H.useRef(F)},de.useState=function(F){return I.H.useState(F)},de.useSyncExternalStore=function(F,at,yt){return I.H.useSyncExternalStore(F,at,yt)},de.useTransition=function(){return I.H.useTransition()},de.version="19.2.0",de}var bg;function gp(){return bg||(bg=1,Lh.exports=d1()),Lh.exports}var dt=gp();const p1=Xv(dt);var Uh={exports:{}},Zo={},Oh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function m1(){return Sg||(Sg=1,(function(s){function t(H,Y){var K=H.length;H.push(Y);t:for(;0<K;){var vt=K-1>>>1,bt=H[vt];if(0<o(bt,Y))H[vt]=Y,H[K]=bt,K=vt;else break t}}function n(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var Y=H[0],K=H.pop();if(K!==Y){H[0]=K;t:for(var vt=0,bt=H.length,F=bt>>>1;vt<F;){var at=2*(vt+1)-1,yt=H[at],Ct=at+1,kt=H[Ct];if(0>o(yt,K))Ct<bt&&0>o(kt,yt)?(H[vt]=kt,H[Ct]=K,vt=Ct):(H[vt]=yt,H[at]=K,vt=at);else if(Ct<bt&&0>o(kt,K))H[vt]=kt,H[Ct]=K,vt=Ct;else break t}}return Y}function o(H,Y){var K=H.sortIndex-Y.sortIndex;return K!==0?K:H.id-Y.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var m=[],p=[],g=1,x=null,v=3,S=!1,E=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function O(H){for(var Y=n(p);Y!==null;){if(Y.callback===null)a(p);else if(Y.startTime<=H)a(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=n(p)}}function B(H){if(A=!1,O(H),!E)if(n(m)!==null)E=!0,P||(P=!0,$());else{var Y=n(p);Y!==null&&ut(B,Y.startTime-H)}}var P=!1,I=-1,Z=5,D=-1;function N(){return M?!0:!(s.unstable_now()-D<Z)}function G(){if(M=!1,P){var H=s.unstable_now();D=H;var Y=!0;try{t:{E=!1,A&&(A=!1,z(I),I=-1),S=!0;var K=v;try{e:{for(O(H),x=n(m);x!==null&&!(x.expirationTime>H&&N());){var vt=x.callback;if(typeof vt=="function"){x.callback=null,v=x.priorityLevel;var bt=vt(x.expirationTime<=H);if(H=s.unstable_now(),typeof bt=="function"){x.callback=bt,O(H),Y=!0;break e}x===n(m)&&a(m),O(H)}else a(m);x=n(m)}if(x!==null)Y=!0;else{var F=n(p);F!==null&&ut(B,F.startTime-H),Y=!1}}break t}finally{x=null,v=K,S=!1}Y=void 0}}finally{Y?$():P=!1}}}var $;if(typeof R=="function")$=function(){R(G)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,xt=ot.port2;ot.port1.onmessage=G,$=function(){xt.postMessage(null)}}else $=function(){y(G,0)};function ut(H,Y){I=y(function(){H(s.unstable_now())},Y)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(H){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var K=v;v=Y;try{return H()}finally{v=K}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(H,Y){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var K=v;v=H;try{return Y()}finally{v=K}},s.unstable_scheduleCallback=function(H,Y,K){var vt=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?vt+K:vt):K=vt,H){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=K+bt,H={id:g++,callback:Y,priorityLevel:H,startTime:K,expirationTime:bt,sortIndex:-1},K>vt?(H.sortIndex=K,t(p,H),n(m)===null&&H===n(p)&&(A?(z(I),I=-1):A=!0,ut(B,K-vt))):(H.sortIndex=bt,t(m,H),E||S||(E=!0,P||(P=!0,$()))),H},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(H){var Y=v;return function(){var K=v;v=Y;try{return H.apply(this,arguments)}finally{v=K}}}})(Ph)),Ph}var Mg;function x1(){return Mg||(Mg=1,Oh.exports=m1()),Oh.exports}var zh={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function g1(){if(Eg)return Pn;Eg=1;var s=gp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Pn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Pn.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:S}):g==="script"&&a.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Pn.requestFormReset=function(m){a.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},Pn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Pn.version="19.2.0",Pn}var Tg;function v1(){if(Tg)return zh.exports;Tg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),zh.exports=g1(),zh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function _1(){if(Ag)return Zo;Ag=1;var s=x1(),t=gp(),n=v1();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return m(f),e;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=d;else{for(var b=!1,w=f.child;w;){if(w===r){b=!0,r=f,l=d;break}if(w===l){b=!0,l=f,r=d;break}w=w.sibling}if(!b){for(w=d.child;w;){if(w===r){b=!0,r=d,l=f;break}if(w===l){b=!0,l=d,r=f;break}w=w.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),R=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case B:return"Suspense";case P:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case R:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case O:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return i=e.displayName||null,i!==null?i:xt(e.type)||"Memo";case Z:i=e._payload,e=e._init;try{return xt(e(i))}catch{}}return null}var ut=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},vt=[],bt=-1;function F(e){return{current:e}}function at(e){0>bt||(e.current=vt[bt],vt[bt]=null,bt--)}function yt(e,i){bt++,vt[bt]=e.current,e.current=i}var Ct=F(null),kt=F(null),st=F(null),ft=F(null);function zt(e,i){switch(yt(st,i),yt(kt,e),yt(Ct,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Vx(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Vx(i),e=Gx(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(Ct),yt(Ct,e)}function Gt(){at(Ct),at(kt),at(st)}function Qt(e){e.memoizedState!==null&&yt(ft,e);var i=Ct.current,r=Gx(i,e.type);i!==r&&(yt(kt,e),yt(Ct,r))}function me(e){kt.current===e&&(at(Ct),at(kt)),ft.current===e&&(at(ft),jo._currentValue=K)}var ze,ce;function St(e){if(ze===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);ze=i&&i[1]||"",ce=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+e+ce}var U=!1;function Tt(e,i){if(!e||U)return"";U=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var it=lt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(lt){it=lt}e.call(gt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),b=d[0],w=d[1];if(b&&w){var V=b.split(`
`),et=w.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<et.length&&!et[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===et.length)for(l=V.length-1,f=et.length-1;1<=l&&0<=f&&V[l]!==et[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==et[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==et[f]){var pt=`
`+V[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=f);break}}}finally{U=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?St(r):""}function Nt(e,i){switch(e.tag){case 26:case 27:case 5:return St(e.type);case 16:return St("Lazy");case 13:return e.child!==i&&i!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return Tt(e.type,!1);case 11:return Tt(e.type.render,!1);case 1:return Tt(e.type,!0);case 31:return St("Activity");default:return""}}function Lt(e){try{var i="",r=null;do i+=Nt(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var wt=Object.prototype.hasOwnProperty,qt=s.unstable_scheduleCallback,Ft=s.unstable_cancelCallback,Xt=s.unstable_shouldYield,L=s.unstable_requestPaint,T=s.unstable_now,J=s.unstable_getCurrentPriorityLevel,ht=s.unstable_ImmediatePriority,Mt=s.unstable_UserBlockingPriority,ct=s.unstable_NormalPriority,ee=s.unstable_LowPriority,It=s.unstable_IdlePriority,ie=s.log,$t=s.unstable_setDisableYieldValue,Et=null,Rt=null;function ne(e){if(typeof ie=="function"&&$t(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Et,e)}catch{}}var Jt=Math.clz32?Math.clz32:k,jt=Math.log,fe=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(jt(e)/fe|0)|0}var Bt=256,Ot=262144,Pt=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var w=l&134217727;return w!==0?(l=w&~d,l!==0?f=At(l):(b&=w,b!==0?f=At(b):r||(r=w&~e,r!==0&&(f=At(r))))):(w=l&~d,w!==0?f=At(w):b!==0?f=At(b):r||(r=l&~e,r!==0&&(f=At(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function Yt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function he(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ve(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function De(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function On(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qn(e,i,r,l,f,d){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var w=e.entanglements,V=e.expirationTimes,et=e.hiddenUpdates;for(r=b&~r;0<r;){var pt=31-Jt(r),gt=1<<pt;w[pt]=0,V[pt]=-1;var it=et[pt];if(it!==null)for(et[pt]=null,pt=0;pt<it.length;pt++){var lt=it[pt];lt!==null&&(lt.lane&=-536870913)}r&=~gt}l!==0&&Ml(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(b&~i))}function Ml(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Jt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function eo(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-Jt(r),f=1<<l;f&i|e[l]&i&&(e[l]|=i),r&=~f}}function no(e,i){var r=i&-i;return r=(r&42)!==0?1:Mi(r),(r&(e.suspendedLanes|i))!==0?0:r}function Mi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ds(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function io(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:fg(e.type))}function ao(e,i){var r=Y.p;try{return Y.p=e,i()}finally{Y.p=r}}var Jn=Math.random().toString(36).slice(2),fn="__reactFiber$"+Jn,gn="__reactProps$"+Jn,Xi="__reactContainer$"+Jn,Ws="__reactEvents$"+Jn,Eu="__reactListeners$"+Jn,Tu="__reactHandles$"+Jn,El="__reactResources$"+Jn,ps="__reactMarker$"+Jn;function so(e){delete e[fn],delete e[gn],delete e[Ws],delete e[Eu],delete e[Tu]}function Na(e){var i=e[fn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Xi]||r[fn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Zx(e);e!==null;){if(r=e[fn])return r;e=Zx(e)}return i}e=r,r=e.parentNode}return null}function C(e){if(e=e[fn]||e[Xi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function W(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function rt(e){var i=e[El];return i||(i=e[El]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function nt(e){e[ps]=!0}var Q=new Set,Dt={};function Ht(e,i){Wt(e,i),Wt(e+"Capture",i)}function Wt(e,i){for(Dt[e]=i,e=0;e<i.length;e++)Q.add(i[e])}var Zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},ue={};function ae(e){return wt.call(ue,e)?!0:wt.call(oe,e)?!1:Zt.test(e)?ue[e]=!0:(oe[e]=!0,!1)}function ge(e,i,r){if(ae(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Ne(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Le(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function Ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ie(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function re(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){r=""+b,d.call(this,b)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ye(e){if(!e._valueTracker){var i=Ie(e)?"checked":"value";e._valueTracker=re(e,i,""+e[i])}}function we(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=Ie(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function En(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Da=/[\n"\\]/g;function Ke(e){return e.replace(Da,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Wi(e,i,r,l,f,d,b,w){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ae(i)):e.value!==""+Ae(i)&&(e.value=""+Ae(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?Tn(e,b,Ae(i)):r!=null?Tn(e,b,Ae(r)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Ae(w):e.removeAttribute("name")}function Qe(e,i,r,l,f,d,b,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ye(e);return}r=r!=null?""+Ae(r):"",i=i!=null?""+Ae(i):r,w||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=w?e.checked:!!l,e.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Ye(e)}function Tn(e,i,r){i==="number"&&En(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function vn(e,i,r,l){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+Ae(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function An(e,i,r){if(i!=null&&(i=""+Ae(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+Ae(r):""}function Cn(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(ut(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=Ae(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ye(e)}function Ui(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var qi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ip(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||qi.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function Bp(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&Ip(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Ip(e,d,i[d])}function Au(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ly=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tl(e){return ly.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var wu=null;function Ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qs=null,Ys=null;function Hp(e){var i=C(e);if(i&&(e=i.stateNode)){var r=e[gn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Wi(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ke(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var f=l[gn]||null;if(!f)throw Error(a(90));Wi(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&we(l)}break t;case"textarea":An(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&vn(e,!!r.multiple,i,!1)}}}var Cu=!1;function Vp(e,i,r){if(Cu)return e(i,r);Cu=!0;try{var l=e(i);return l}finally{if(Cu=!1,(qs!==null||Ys!==null)&&(hc(),qs&&(i=qs,e=Ys,Ys=qs=null,Hp(i),e)))for(i=0;i<e.length;i++)Hp(e[i])}}function ro(e,i){var r=e.stateNode;if(r===null)return null;var l=r[gn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=!1;if(Zi)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Nu=!1}var La=null,Du=null,Al=null;function Gp(){if(Al)return Al;var e,i=Du,r=i.length,l,f="value"in La?La.value:La.textContent,d=f.length;for(e=0;e<r&&i[e]===f[e];e++);var b=r-e;for(l=1;l<=b&&i[r-l]===f[d-l];l++);return Al=f.slice(e,1<l?1-l:void 0)}function wl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function kp(){return!1}function Gn(e){function i(r,l,f,d,b){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(r=e[w],this[w]=r?r(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Rl:kp,this.isPropagationStopped=kp,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cl=Gn(ms),lo=x({},ms,{view:0,detail:0}),cy=Gn(lo),Lu,Uu,co,Nl=x({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Lu=e.screenX-co.screenX,Uu=e.screenY-co.screenY):Uu=Lu=0,co=e),Lu)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),jp=Gn(Nl),uy=x({},Nl,{dataTransfer:0}),fy=Gn(uy),hy=x({},lo,{relatedTarget:0}),Ou=Gn(hy),dy=x({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),py=Gn(dy),my=x({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xy=Gn(my),gy=x({},ms,{data:0}),Xp=Gn(gy),vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function by(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=yy[e])?!!i[e]:!1}function Pu(){return by}var Sy=x({},lo,{key:function(e){if(e.key){var i=vy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_y[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pu,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),My=Gn(Sy),Ey=x({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wp=Gn(Ey),Ty=x({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pu}),Ay=Gn(Ty),wy=x({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ry=Gn(wy),Cy=x({},Nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ny=Gn(Cy),Dy=x({},ms,{newState:0,oldState:0}),Ly=Gn(Dy),Uy=[9,13,27,32],zu=Zi&&"CompositionEvent"in window,uo=null;Zi&&"documentMode"in document&&(uo=document.documentMode);var Oy=Zi&&"TextEvent"in window&&!uo,qp=Zi&&(!zu||uo&&8<uo&&11>=uo),Yp=" ",Zp=!1;function Kp(e,i){switch(e){case"keyup":return Uy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zs=!1;function Py(e,i){switch(e){case"compositionend":return Qp(i);case"keypress":return i.which!==32?null:(Zp=!0,Yp);case"textInput":return e=i.data,e===Yp&&Zp?null:e;default:return null}}function zy(e,i){if(Zs)return e==="compositionend"||!zu&&Kp(e,i)?(e=Gp(),Al=Du=La=null,Zs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return qp&&i.locale!=="ko"?null:i.data;default:return null}}var Fy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Fy[e.type]:i==="textarea"}function $p(e,i,r,l){qs?Ys?Ys.push(l):Ys=[l]:qs=l,i=_c(i,"onChange"),0<i.length&&(r=new Cl("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var fo=null,ho=null;function Iy(e){Px(e,0)}function Dl(e){var i=W(e);if(we(i))return e}function t0(e,i){if(e==="change")return i}var e0=!1;if(Zi){var Fu;if(Zi){var Iu="oninput"in document;if(!Iu){var n0=document.createElement("div");n0.setAttribute("oninput","return;"),Iu=typeof n0.oninput=="function"}Fu=Iu}else Fu=!1;e0=Fu&&(!document.documentMode||9<document.documentMode)}function i0(){fo&&(fo.detachEvent("onpropertychange",a0),ho=fo=null)}function a0(e){if(e.propertyName==="value"&&Dl(ho)){var i=[];$p(i,ho,e,Ru(e)),Vp(Iy,i)}}function By(e,i,r){e==="focusin"?(i0(),fo=i,ho=r,fo.attachEvent("onpropertychange",a0)):e==="focusout"&&i0()}function Hy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(ho)}function Vy(e,i){if(e==="click")return Dl(i)}function Gy(e,i){if(e==="input"||e==="change")return Dl(i)}function ky(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var $n=typeof Object.is=="function"?Object.is:ky;function po(e,i){if($n(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!wt.call(i,f)||!$n(e[f],i[f]))return!1}return!0}function s0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r0(e,i){var r=s0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=s0(r)}}function o0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?o0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function l0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=En(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=En(e.document)}return i}function Bu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var jy=Zi&&"documentMode"in document&&11>=document.documentMode,Ks=null,Hu=null,mo=null,Vu=!1;function c0(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vu||Ks==null||Ks!==En(l)||(l=Ks,"selectionStart"in l&&Bu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),mo&&po(mo,l)||(mo=l,l=_c(Hu,"onSelect"),0<l.length&&(i=new Cl("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Ks)))}function xs(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Qs={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},Gu={},u0={};Zi&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function gs(e){if(Gu[e])return Gu[e];if(!Qs[e])return e;var i=Qs[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in u0)return Gu[e]=i[r];return e}var f0=gs("animationend"),h0=gs("animationiteration"),d0=gs("animationstart"),Xy=gs("transitionrun"),Wy=gs("transitionstart"),qy=gs("transitioncancel"),p0=gs("transitionend"),m0=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function Ei(e,i){m0.set(e,i),Ht(i,[e])}var Ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ui=[],Js=0,ju=0;function Ul(){for(var e=Js,i=ju=Js=0;i<e;){var r=ui[i];ui[i++]=null;var l=ui[i];ui[i++]=null;var f=ui[i];ui[i++]=null;var d=ui[i];if(ui[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}d!==0&&x0(r,f,d)}}function Ol(e,i,r,l){ui[Js++]=e,ui[Js++]=i,ui[Js++]=r,ui[Js++]=l,ju|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Xu(e,i,r,l){return Ol(e,i,r,l),Pl(e)}function vs(e,i){return Ol(e,null,null,i),Pl(e)}function x0(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-Jt(r),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function Pl(e){if(50<Fo)throw Fo=0,eh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var $s={};function Yy(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,i,r,l){return new Yy(e,i,r,l)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,i){var r=e.alternate;return r===null?(r=ti(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function g0(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function zl(e,i,r,l,f,d){var b=0;if(l=e,typeof e=="function")Wu(e)&&(b=1);else if(typeof e=="string")b=$b(e,r,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=ti(31,r,i,f),e.elementType=D,e.lanes=d,e;case A:return _s(r.children,f,d,i);case M:b=8,f|=24;break;case y:return e=ti(12,r,i,f|2),e.elementType=y,e.lanes=d,e;case B:return e=ti(13,r,i,f),e.elementType=B,e.lanes=d,e;case P:return e=ti(19,r,i,f),e.elementType=P,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R:b=10;break t;case z:b=9;break t;case O:b=11;break t;case I:b=14;break t;case Z:b=16,l=null;break t}b=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ti(b,r,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function _s(e,i,r,l){return e=ti(7,e,l,i),e.lanes=r,e}function qu(e,i,r){return e=ti(6,e,null,i),e.lanes=r,e}function v0(e){var i=ti(18,null,null,0);return i.stateNode=e,i}function Yu(e,i,r){return i=ti(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var _0=new WeakMap;function fi(e,i){if(typeof e=="object"&&e!==null){var r=_0.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Lt(i)},_0.set(e,i),i)}return{value:e,source:i,stack:Lt(i)}}var tr=[],er=0,Fl=null,xo=0,hi=[],di=0,Ua=null,Oi=1,Pi="";function Qi(e,i){tr[er++]=xo,tr[er++]=Fl,Fl=e,xo=i}function y0(e,i,r){hi[di++]=Oi,hi[di++]=Pi,hi[di++]=Ua,Ua=e;var l=Oi;e=Pi;var f=32-Jt(l)-1;l&=~(1<<f),r+=1;var d=32-Jt(i)+f;if(30<d){var b=f-f%5;d=(l&(1<<b)-1).toString(32),l>>=b,f-=b,Oi=1<<32-Jt(i)+f|r<<f|l,Pi=d+e}else Oi=1<<d|r<<f|l,Pi=e}function Zu(e){e.return!==null&&(Qi(e,1),y0(e,1,0))}function Ku(e){for(;e===Fl;)Fl=tr[--er],tr[er]=null,xo=tr[--er],tr[er]=null;for(;e===Ua;)Ua=hi[--di],hi[di]=null,Pi=hi[--di],hi[di]=null,Oi=hi[--di],hi[di]=null}function b0(e,i){hi[di++]=Oi,hi[di++]=Pi,hi[di++]=Ua,Oi=i.id,Pi=i.overflow,Ua=e}var Nn=null,Je=null,Re=!1,Oa=null,pi=!1,Qu=Error(a(519));function Pa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(fi(i,e)),Qu}function S0(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[fn]=e,i[gn]=l,r){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(r=0;r<Bo.length;r++)Me(Bo[r],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),Qe(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Cn(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Bx(i.textContent,r)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=Yi),i=!0):i=!1,i||Pa(e,!0)}function M0(e){for(Nn=e.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Nn=Nn.return}}function nr(e){if(e!==Nn)return!1;if(!Re)return M0(e),Re=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||xh(e.type,e.memoizedProps)),r=!r),r&&Je&&Pa(e),M0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=Yx(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=Yx(e)}else i===27?(i=Je,Za(e.type)?(e=bh,bh=null,Je=e):Je=i):Je=Nn?xi(e.stateNode.nextSibling):null;return!0}function ys(){Je=Nn=null,Re=!1}function Ju(){var e=Oa;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Oa=null),e}function go(e){Oa===null?Oa=[e]:Oa.push(e)}var $u=F(null),bs=null,Ji=null;function za(e,i,r){yt($u,i._currentValue),i._currentValue=r}function $i(e){e._currentValue=$u.current,at($u)}function tf(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function ef(e,i,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var b=f.child;d=d.firstContext;t:for(;d!==null;){var w=d;d=f;for(var V=0;V<i.length;V++)if(w.context===i[V]){d.lanes|=r,w=d.alternate,w!==null&&(w.lanes|=r),tf(d.return,r,e),l||(b=null);break t}d=w.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=r,d=b.alternate,d!==null&&(d.lanes|=r),tf(b,r,e),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===e){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function ir(e,i,r,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var w=f.type;$n(f.pendingProps.value,b.value)||(e!==null?e.push(w):e=[w])}}else if(f===ft.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(jo):e=[jo])}f=f.return}e!==null&&ef(i,e,r,l),i.flags|=262144}function Il(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ss(e){bs=e,Ji=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return E0(bs,e)}function Bl(e,i){return bs===null&&Ss(e),E0(e,i)}function E0(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Ji===null){if(e===null)throw Error(a(308));Ji=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ji=Ji.next=i;return r}var Zy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},Ky=s.unstable_scheduleCallback,Qy=s.unstable_NormalPriority,hn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function nf(){return{controller:new Zy,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&Ky(Qy,function(){e.controller.abort()})}var _o=null,af=0,ar=0,sr=null;function Jy(e,i){if(_o===null){var r=_o=[];af=0,ar=oh(),sr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return af++,i.then(T0,T0),i}function T0(){if(--af===0&&_o!==null){sr!==null&&(sr.status="fulfilled");var e=_o;_o=null,ar=0,sr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function $y(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var A0=H.S;H.S=function(e,i){cx=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Jy(e,i),A0!==null&&A0(e,i)};var Ms=F(null);function sf(){var e=Ms.current;return e!==null?e:Ze.pooledCache}function Hl(e,i){i===null?yt(Ms,Ms.current):yt(Ms,i.pool)}function w0(){var e=sf();return e===null?null:{parent:hn._currentValue,pool:e}}var rr=Error(a(460)),rf=Error(a(474)),Vl=Error(a(542)),Gl={then:function(){}};function R0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function C0(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Yi,Yi),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,D0(e),e;default:if(typeof i.status=="string")i.then(Yi,Yi);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,D0(e),e}throw Ts=i,rr}}function Es(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(Ts=r,rr):r}}var Ts=null;function N0(){if(Ts===null)throw Error(a(459));var e=Ts;return Ts=null,e}function D0(e){if(e===rr||e===Vl)throw Error(a(483))}var or=null,yo=0;function kl(e){var i=yo;return yo+=1,or===null&&(or=[]),C0(or,e,i)}function bo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function jl(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function L0(e){function i(q,j){if(e){var tt=q.deletions;tt===null?(q.deletions=[j],q.flags|=16):tt.push(j)}}function r(q,j){if(!e)return null;for(;j!==null;)i(q,j),j=j.sibling;return null}function l(q){for(var j=new Map;q!==null;)q.key!==null?j.set(q.key,q):j.set(q.index,q),q=q.sibling;return j}function f(q,j){return q=Ki(q,j),q.index=0,q.sibling=null,q}function d(q,j,tt){return q.index=tt,e?(tt=q.alternate,tt!==null?(tt=tt.index,tt<j?(q.flags|=67108866,j):tt):(q.flags|=67108866,j)):(q.flags|=1048576,j)}function b(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function w(q,j,tt,mt){return j===null||j.tag!==6?(j=qu(tt,q.mode,mt),j.return=q,j):(j=f(j,tt),j.return=q,j)}function V(q,j,tt,mt){var se=tt.type;return se===A?pt(q,j,tt.props.children,mt,tt.key):j!==null&&(j.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Z&&Es(se)===j.type)?(j=f(j,tt.props),bo(j,tt),j.return=q,j):(j=zl(tt.type,tt.key,tt.props,null,q.mode,mt),bo(j,tt),j.return=q,j)}function et(q,j,tt,mt){return j===null||j.tag!==4||j.stateNode.containerInfo!==tt.containerInfo||j.stateNode.implementation!==tt.implementation?(j=Yu(tt,q.mode,mt),j.return=q,j):(j=f(j,tt.children||[]),j.return=q,j)}function pt(q,j,tt,mt,se){return j===null||j.tag!==7?(j=_s(tt,q.mode,mt,se),j.return=q,j):(j=f(j,tt),j.return=q,j)}function gt(q,j,tt){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=qu(""+j,q.mode,tt),j.return=q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return tt=zl(j.type,j.key,j.props,null,q.mode,tt),bo(tt,j),tt.return=q,tt;case E:return j=Yu(j,q.mode,tt),j.return=q,j;case Z:return j=Es(j),gt(q,j,tt)}if(ut(j)||$(j))return j=_s(j,q.mode,tt,null),j.return=q,j;if(typeof j.then=="function")return gt(q,kl(j),tt);if(j.$$typeof===R)return gt(q,Bl(q,j),tt);jl(q,j)}return null}function it(q,j,tt,mt){var se=j!==null?j.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return se!==null?null:w(q,j,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:return tt.key===se?V(q,j,tt,mt):null;case E:return tt.key===se?et(q,j,tt,mt):null;case Z:return tt=Es(tt),it(q,j,tt,mt)}if(ut(tt)||$(tt))return se!==null?null:pt(q,j,tt,mt,null);if(typeof tt.then=="function")return it(q,j,kl(tt),mt);if(tt.$$typeof===R)return it(q,j,Bl(q,tt),mt);jl(q,tt)}return null}function lt(q,j,tt,mt,se){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return q=q.get(tt)||null,w(j,q,""+mt,se);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return q=q.get(mt.key===null?tt:mt.key)||null,V(j,q,mt,se);case E:return q=q.get(mt.key===null?tt:mt.key)||null,et(j,q,mt,se);case Z:return mt=Es(mt),lt(q,j,tt,mt,se)}if(ut(mt)||$(mt))return q=q.get(tt)||null,pt(j,q,mt,se,null);if(typeof mt.then=="function")return lt(q,j,tt,kl(mt),se);if(mt.$$typeof===R)return lt(q,j,tt,Bl(j,mt),se);jl(j,mt)}return null}function Kt(q,j,tt,mt){for(var se=null,Ue=null,te=j,ve=j=0,Te=null;te!==null&&ve<tt.length;ve++){te.index>ve?(Te=te,te=null):Te=te.sibling;var Oe=it(q,te,tt[ve],mt);if(Oe===null){te===null&&(te=Te);break}e&&te&&Oe.alternate===null&&i(q,te),j=d(Oe,j,ve),Ue===null?se=Oe:Ue.sibling=Oe,Ue=Oe,te=Te}if(ve===tt.length)return r(q,te),Re&&Qi(q,ve),se;if(te===null){for(;ve<tt.length;ve++)te=gt(q,tt[ve],mt),te!==null&&(j=d(te,j,ve),Ue===null?se=te:Ue.sibling=te,Ue=te);return Re&&Qi(q,ve),se}for(te=l(te);ve<tt.length;ve++)Te=lt(te,q,ve,tt[ve],mt),Te!==null&&(e&&Te.alternate!==null&&te.delete(Te.key===null?ve:Te.key),j=d(Te,j,ve),Ue===null?se=Te:Ue.sibling=Te,Ue=Te);return e&&te.forEach(function(ts){return i(q,ts)}),Re&&Qi(q,ve),se}function le(q,j,tt,mt){if(tt==null)throw Error(a(151));for(var se=null,Ue=null,te=j,ve=j=0,Te=null,Oe=tt.next();te!==null&&!Oe.done;ve++,Oe=tt.next()){te.index>ve?(Te=te,te=null):Te=te.sibling;var ts=it(q,te,Oe.value,mt);if(ts===null){te===null&&(te=Te);break}e&&te&&ts.alternate===null&&i(q,te),j=d(ts,j,ve),Ue===null?se=ts:Ue.sibling=ts,Ue=ts,te=Te}if(Oe.done)return r(q,te),Re&&Qi(q,ve),se;if(te===null){for(;!Oe.done;ve++,Oe=tt.next())Oe=gt(q,Oe.value,mt),Oe!==null&&(j=d(Oe,j,ve),Ue===null?se=Oe:Ue.sibling=Oe,Ue=Oe);return Re&&Qi(q,ve),se}for(te=l(te);!Oe.done;ve++,Oe=tt.next())Oe=lt(te,q,ve,Oe.value,mt),Oe!==null&&(e&&Oe.alternate!==null&&te.delete(Oe.key===null?ve:Oe.key),j=d(Oe,j,ve),Ue===null?se=Oe:Ue.sibling=Oe,Ue=Oe);return e&&te.forEach(function(u1){return i(q,u1)}),Re&&Qi(q,ve),se}function je(q,j,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===A&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case S:t:{for(var se=tt.key;j!==null;){if(j.key===se){if(se=tt.type,se===A){if(j.tag===7){r(q,j.sibling),mt=f(j,tt.props.children),mt.return=q,q=mt;break t}}else if(j.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===Z&&Es(se)===j.type){r(q,j.sibling),mt=f(j,tt.props),bo(mt,tt),mt.return=q,q=mt;break t}r(q,j);break}else i(q,j);j=j.sibling}tt.type===A?(mt=_s(tt.props.children,q.mode,mt,tt.key),mt.return=q,q=mt):(mt=zl(tt.type,tt.key,tt.props,null,q.mode,mt),bo(mt,tt),mt.return=q,q=mt)}return b(q);case E:t:{for(se=tt.key;j!==null;){if(j.key===se)if(j.tag===4&&j.stateNode.containerInfo===tt.containerInfo&&j.stateNode.implementation===tt.implementation){r(q,j.sibling),mt=f(j,tt.children||[]),mt.return=q,q=mt;break t}else{r(q,j);break}else i(q,j);j=j.sibling}mt=Yu(tt,q.mode,mt),mt.return=q,q=mt}return b(q);case Z:return tt=Es(tt),je(q,j,tt,mt)}if(ut(tt))return Kt(q,j,tt,mt);if($(tt)){if(se=$(tt),typeof se!="function")throw Error(a(150));return tt=se.call(tt),le(q,j,tt,mt)}if(typeof tt.then=="function")return je(q,j,kl(tt),mt);if(tt.$$typeof===R)return je(q,j,Bl(q,tt),mt);jl(q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,j!==null&&j.tag===6?(r(q,j.sibling),mt=f(j,tt),mt.return=q,q=mt):(r(q,j),mt=qu(tt,q.mode,mt),mt.return=q,q=mt),b(q)):r(q,j)}return function(q,j,tt,mt){try{yo=0;var se=je(q,j,tt,mt);return or=null,se}catch(te){if(te===rr||te===Vl)throw te;var Ue=ti(29,te,null,q.mode);return Ue.lanes=mt,Ue.return=q,Ue}finally{}}}var As=L0(!0),U0=L0(!1),Fa=!1;function of(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Fe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Pl(e),x0(e,null,r),i}return Ol(e,l,i,r),Pl(e)}function So(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,eo(e,r)}}function cf(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=b:d=d.next=b,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var uf=!1;function Mo(){if(uf){var e=sr;if(e!==null)throw e}}function Eo(e,i,r,l){uf=!1;var f=e.updateQueue;Fa=!1;var d=f.firstBaseUpdate,b=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var V=w,et=V.next;V.next=null,b===null?d=et:b.next=et,b=V;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,w=pt.lastBaseUpdate,w!==b&&(w===null?pt.firstBaseUpdate=et:w.next=et,pt.lastBaseUpdate=V))}if(d!==null){var gt=f.baseState;b=0,pt=et=V=null,w=d;do{var it=w.lane&-536870913,lt=it!==w.lane;if(lt?(Ee&it)===it:(l&it)===it){it!==0&&it===ar&&(uf=!0),pt!==null&&(pt=pt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Kt=e,le=w;it=i;var je=r;switch(le.tag){case 1:if(Kt=le.payload,typeof Kt=="function"){gt=Kt.call(je,gt,it);break t}gt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=le.payload,it=typeof Kt=="function"?Kt.call(je,gt,it):Kt,it==null)break t;gt=x({},gt,it);break t;case 2:Fa=!0}}it=w.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:w.tag,payload:w.payload,callback:w.callback,next:null},pt===null?(et=pt=lt,V=gt):pt=pt.next=lt,b|=it;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;lt=w,w=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);pt===null&&(V=gt),f.baseState=V,f.firstBaseUpdate=et,f.lastBaseUpdate=pt,d===null&&(f.shared.lanes=0),ja|=b,e.lanes=b,e.memoizedState=gt}}function O0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function P0(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)O0(r[e],i)}var lr=F(null),Xl=F(0);function z0(e,i){e=la,yt(Xl,e),yt(lr,i),la=e|i.baseLanes}function ff(){yt(Xl,la),yt(lr,lr.current)}function hf(){la=Xl.current,at(lr),at(Xl)}var ei=F(null),mi=null;function Ha(e){var i=e.alternate;yt(cn,cn.current&1),yt(ei,e),mi===null&&(i===null||lr.current!==null||i.memoizedState!==null)&&(mi=e)}function df(e){yt(cn,cn.current),yt(ei,e),mi===null&&(mi=e)}function F0(e){e.tag===22?(yt(cn,cn.current),yt(ei,e),mi===null&&(mi=e)):Va()}function Va(){yt(cn,cn.current),yt(ei,ei.current)}function ni(e){at(ei),mi===e&&(mi=null),at(cn)}var cn=F(0);function Wl(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||_h(r)||yh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ta=0,xe=null,Ge=null,dn=null,ql=!1,cr=!1,ws=!1,Yl=0,To=0,ur=null,tb=0;function rn(){throw Error(a(321))}function pf(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!$n(e[r],i[r]))return!1;return!0}function mf(e,i,r,l,f,d){return ta=d,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?ym:Nf,ws=!1,d=r(l,f),ws=!1,cr&&(d=B0(i,r,l,f)),I0(e),d}function I0(e){H.H=Ro;var i=Ge!==null&&Ge.next!==null;if(ta=0,dn=Ge=xe=null,ql=!1,To=0,ur=null,i)throw Error(a(300));e===null||pn||(e=e.dependencies,e!==null&&Il(e)&&(pn=!0))}function B0(e,i,r,l){xe=e;var f=0;do{if(cr&&(ur=null),To=0,cr=!1,25<=f)throw Error(a(301));if(f+=1,dn=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=bm,d=i(r,l)}while(cr);return d}function eb(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?Ao(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(xe.flags|=1024),i}function xf(){var e=Yl!==0;return Yl=0,e}function gf(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function vf(e){if(ql){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ql=!1}ta=0,dn=Ge=xe=null,cr=!1,To=Yl=0,ur=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?xe.memoizedState=dn=e:dn=dn.next=e,dn}function un(){if(Ge===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=dn===null?xe.memoizedState:dn.next;if(i!==null)dn=i,Ge=e;else{if(e===null)throw xe.alternate===null?Error(a(467)):Error(a(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},dn===null?xe.memoizedState=dn=e:dn=dn.next=e}return dn}function Zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var i=To;return To+=1,ur===null&&(ur=[]),e=C0(ur,e,i),i=xe,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?ym:Nf),e}function Kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===R)return Dn(e)}throw Error(a(438,String(e)))}function _f(e){var i=null,r=xe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Zl(),xe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=N;return i.index++,r}function ea(e,i){return typeof i=="function"?i(e):i}function Ql(e){var i=un();return yf(i,Ge,e)}function yf(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var b=f.next;f.next=d.next,d.next=b}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var w=b=null,V=null,et=i,pt=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(Ee&gt)===gt:(ta&gt)===gt){var it=et.revertLane;if(it===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===ar&&(pt=!0);else if((ta&it)===it){et=et.next,it===ar&&(pt=!0);continue}else gt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(w=V=gt,b=d):V=V.next=gt,xe.lanes|=it,ja|=it;gt=et.action,ws&&r(d,gt),d=et.hasEagerState?et.eagerState:r(d,gt)}else it={lane:gt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},V===null?(w=V=it,b=d):V=V.next=it,xe.lanes|=gt,ja|=gt;et=et.next}while(et!==null&&et!==i);if(V===null?b=d:V.next=w,!$n(d,e.memoizedState)&&(pn=!0,pt&&(r=sr,r!==null)))throw r;e.memoizedState=d,e.baseState=b,e.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function bf(e){var i=un(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var b=f=f.next;do d=e(d,b.action),b=b.next;while(b!==f);$n(d,i.memoizedState)||(pn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function H0(e,i,r){var l=xe,f=un(),d=Re;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!$n((Ge||f).memoizedState,r);if(b&&(f.memoizedState=r,pn=!0),f=f.queue,Ef(k0.bind(null,l,f,e),[e]),f.getSnapshot!==i||b||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,fr(9,{destroy:void 0},G0.bind(null,l,f,r,i),null),Ze===null)throw Error(a(349));d||(ta&127)!==0||V0(l,i,r)}return r}function V0(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=xe.updateQueue,i===null?(i=Zl(),xe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function G0(e,i,r,l){i.value=r,i.getSnapshot=l,j0(i)&&X0(e)}function k0(e,i,r){return r(function(){j0(i)&&X0(e)})}function j0(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!$n(e,r)}catch{return!0}}function X0(e){var i=vs(e,2);i!==null&&qn(i,e,2)}function Sf(e){var i=Bn();if(typeof e=="function"){var r=e;if(e=r(),ws){ne(!0);try{r()}finally{ne(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},i}function W0(e,i,r,l){return e.baseState=r,yf(e,Ge,typeof l=="function"?l:ea)}function nb(e,i,r,l,f){if(tc(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};H.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,q0(i,d)):(d.next=r.next,i.pending=r.next=d)}}function q0(e,i){var r=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=H.T,b={};H.T=b;try{var w=r(f,l),V=H.S;V!==null&&V(b,w),Y0(e,i,w)}catch(et){Mf(e,i,et)}finally{d!==null&&b.types!==null&&(d.types=b.types),H.T=d}}else try{d=r(f,l),Y0(e,i,d)}catch(et){Mf(e,i,et)}}function Y0(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){Z0(e,i,l)},function(l){return Mf(e,i,l)}):Z0(e,i,r)}function Z0(e,i,r){i.status="fulfilled",i.value=r,K0(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,q0(e,r)))}function Mf(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,K0(i),i=i.next;while(i!==l)}e.action=null}function K0(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Q0(e,i){return i}function J0(e,i){if(Re){var r=Ze.formState;if(r!==null){t:{var l=xe;if(Re){if(Je){e:{for(var f=Je,d=pi;f.nodeType!==8;){if(!d){f=null;break e}if(f=xi(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Je=xi(f.nextSibling),l=f.data==="F!";break t}}Pa(l)}l=!1}l&&(i=r[0])}}return r=Bn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Q0,lastRenderedState:i},r.queue=l,r=gm.bind(null,xe,l),l.dispatch=r,l=Sf(!1),d=Cf.bind(null,xe,!1,l.queue),l=Bn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,r=nb.bind(null,xe,f,d,r),f.dispatch=r,l.memoizedState=e,[i,r,!1]}function $0(e){var i=un();return tm(i,Ge,e)}function tm(e,i,r){if(i=yf(e,i,Q0)[0],e=Ql(ea)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Ao(i)}catch(b){throw b===rr?Vl:b}else l=i;i=un();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(xe.flags|=2048,fr(9,{destroy:void 0},ib.bind(null,f,r),null)),[l,d,e]}function ib(e,i){e.action=i}function em(e){var i=un(),r=Ge;if(r!==null)return tm(i,r,e);un(),i=i.memoizedState,r=un();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function fr(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=xe.updateQueue,i===null&&(i=Zl(),xe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function nm(){return un().memoizedState}function Jl(e,i,r,l){var f=Bn();xe.flags|=e,f.memoizedState=fr(1|i,{destroy:void 0},r,l===void 0?null:l)}function $l(e,i,r,l){var f=un();l=l===void 0?null:l;var d=f.memoizedState.inst;Ge!==null&&l!==null&&pf(l,Ge.memoizedState.deps)?f.memoizedState=fr(i,d,r,l):(xe.flags|=e,f.memoizedState=fr(1|i,d,r,l))}function im(e,i){Jl(8390656,8,e,i)}function Ef(e,i){$l(2048,8,e,i)}function ab(e){xe.flags|=4;var i=xe.updateQueue;if(i===null)i=Zl(),xe.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function am(e){var i=un().memoizedState;return ab({ref:i,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function sm(e,i){return $l(4,2,e,i)}function rm(e,i){return $l(4,4,e,i)}function om(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function lm(e,i,r){r=r!=null?r.concat([e]):null,$l(4,4,om.bind(null,i,e),r)}function Tf(){}function cm(e,i){var r=un();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&pf(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function um(e,i){var r=un();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&pf(i,l[1]))return l[0];if(l=e(),ws){ne(!0);try{e()}finally{ne(!1)}}return r.memoizedState=[l,i],l}function Af(e,i,r){return r===void 0||(ta&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=fx(),xe.lanes|=e,ja|=e,r)}function fm(e,i,r,l){return $n(r,i)?r:lr.current!==null?(e=Af(e,r,l),$n(e,i)||(pn=!0),e):(ta&42)===0||(ta&1073741824)!==0&&(Ee&261930)===0?(pn=!0,e.memoizedState=r):(e=fx(),xe.lanes|=e,ja|=e,i)}function hm(e,i,r,l,f){var d=Y.p;Y.p=d!==0&&8>d?d:8;var b=H.T,w={};H.T=w,Cf(e,!1,i,r);try{var V=f(),et=H.S;if(et!==null&&et(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pt=$y(V,l);wo(e,i,pt,si(e))}else wo(e,i,l,si(e))}catch(gt){wo(e,i,{then:function(){},status:"rejected",reason:gt},si())}finally{Y.p=d,b!==null&&w.types!==null&&(b.types=w.types),H.T=b}}function sb(){}function wf(e,i,r,l){if(e.tag!==5)throw Error(a(476));var f=dm(e).queue;hm(e,f,i,K,r===null?sb:function(){return pm(e),r(l)})}function dm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:K},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function pm(e){var i=dm(e);i.next===null&&(i=e.alternate.memoizedState),wo(e,i.next.queue,{},si())}function Rf(){return Dn(jo)}function mm(){return un().memoizedState}function xm(){return un().memoizedState}function rb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=si();e=Ia(r);var l=Ba(i,e,r);l!==null&&(qn(l,i,r),So(l,i,r)),i={cache:nf()},e.payload=i;return}i=i.return}}function ob(e,i,r){var l=si();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},tc(e)?vm(i,r):(r=Xu(e,i,r,l),r!==null&&(qn(r,e,l),_m(r,i,l)))}function gm(e,i,r){var l=si();wo(e,i,r,l)}function wo(e,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(tc(e))vm(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var b=i.lastRenderedState,w=d(b,r);if(f.hasEagerState=!0,f.eagerState=w,$n(w,b))return Ol(e,i,f,0),Ze===null&&Ul(),!1}catch{}finally{}if(r=Xu(e,i,f,l),r!==null)return qn(r,e,l),_m(r,i,l),!0}return!1}function Cf(e,i,r,l){if(l={lane:2,revertLane:oh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},tc(e)){if(i)throw Error(a(479))}else i=Xu(e,r,l,2),i!==null&&qn(i,e,2)}function tc(e){var i=e.alternate;return e===xe||i!==null&&i===xe}function vm(e,i){cr=ql=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function _m(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,eo(e,r)}}var Ro={readContext:Dn,use:Kl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Ro.useEffectEvent=rn;var ym={readContext:Dn,use:Kl,useCallback:function(e,i){return Bn().memoizedState=[e,i===void 0?null:i],e},useContext:Dn,useEffect:im,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,Jl(4194308,4,om.bind(null,i,e),r)},useLayoutEffect:function(e,i){return Jl(4194308,4,e,i)},useInsertionEffect:function(e,i){Jl(4,2,e,i)},useMemo:function(e,i){var r=Bn();i=i===void 0?null:i;var l=e();if(ws){ne(!0);try{e()}finally{ne(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Bn();if(r!==void 0){var f=r(i);if(ws){ne(!0);try{r(i)}finally{ne(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=ob.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var i=Bn();return e={current:e},i.memoizedState=e},useState:function(e){e=Sf(e);var i=e.queue,r=gm.bind(null,xe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Tf,useDeferredValue:function(e,i){var r=Bn();return Af(r,e,i)},useTransition:function(){var e=Sf(!1);return e=hm.bind(null,xe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=xe,f=Bn();if(Re){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Ze===null)throw Error(a(349));(Ee&127)!==0||V0(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,im(k0.bind(null,l,d,e),[e]),l.flags|=2048,fr(9,{destroy:void 0},G0.bind(null,l,d,r,i),null),r},useId:function(){var e=Bn(),i=Ze.identifierPrefix;if(Re){var r=Pi,l=Oi;r=(l&~(1<<32-Jt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Yl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=tb++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Rf,useFormState:J0,useActionState:J0,useOptimistic:function(e){var i=Bn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Cf.bind(null,xe,!0,r),r.dispatch=i,[e,i]},useMemoCache:_f,useCacheRefresh:function(){return Bn().memoizedState=rb.bind(null,xe)},useEffectEvent:function(e){var i=Bn(),r={impl:e};return i.memoizedState=r,function(){if((Fe&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Nf={readContext:Dn,use:Kl,useCallback:cm,useContext:Dn,useEffect:Ef,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:rm,useMemo:um,useReducer:Ql,useRef:nm,useState:function(){return Ql(ea)},useDebugValue:Tf,useDeferredValue:function(e,i){var r=un();return fm(r,Ge.memoizedState,e,i)},useTransition:function(){var e=Ql(ea)[0],i=un().memoizedState;return[typeof e=="boolean"?e:Ao(e),i]},useSyncExternalStore:H0,useId:mm,useHostTransitionStatus:Rf,useFormState:$0,useActionState:$0,useOptimistic:function(e,i){var r=un();return W0(r,Ge,e,i)},useMemoCache:_f,useCacheRefresh:xm};Nf.useEffectEvent=am;var bm={readContext:Dn,use:Kl,useCallback:cm,useContext:Dn,useEffect:Ef,useImperativeHandle:lm,useInsertionEffect:sm,useLayoutEffect:rm,useMemo:um,useReducer:bf,useRef:nm,useState:function(){return bf(ea)},useDebugValue:Tf,useDeferredValue:function(e,i){var r=un();return Ge===null?Af(r,e,i):fm(r,Ge.memoizedState,e,i)},useTransition:function(){var e=bf(ea)[0],i=un().memoizedState;return[typeof e=="boolean"?e:Ao(e),i]},useSyncExternalStore:H0,useId:mm,useHostTransitionStatus:Rf,useFormState:em,useActionState:em,useOptimistic:function(e,i){var r=un();return Ge!==null?W0(r,Ge,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:_f,useCacheRefresh:xm};bm.useEffectEvent=am;function Df(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:x({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Lf={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=si(),f=Ia(l);f.payload=i,r!=null&&(f.callback=r),i=Ba(e,f,l),i!==null&&(qn(i,e,l),So(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=si(),f=Ia(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Ba(e,f,l),i!==null&&(qn(i,e,l),So(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=si(),l=Ia(r);l.tag=2,i!=null&&(l.callback=i),i=Ba(e,l,r),i!==null&&(qn(i,e,r),So(i,e,r))}};function Sm(e,i,r,l,f,d,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,b):i.prototype&&i.prototype.isPureReactComponent?!po(r,l)||!po(f,d):!0}function Mm(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Lf.enqueueReplaceState(i,i.state,null)}function Rs(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=x({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function Em(e){Ll(e)}function Tm(e){console.error(e)}function Am(e){Ll(e)}function ec(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function wm(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Uf(e,i,r){return r=Ia(r),r.tag=3,r.payload={element:null},r.callback=function(){ec(e,i)},r}function Rm(e){return e=Ia(e),e.tag=3,e}function Cm(e,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){wm(i,r,l)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){wm(i,r,l),typeof f!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function lb(e,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&ir(i,r,f,!0),r=ei.current,r!==null){switch(r.tag){case 31:case 13:return mi===null?dc():r.alternate===null&&on===0&&(on=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Gl?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),ah(e,l,f)),!1;case 22:return r.flags|=65536,l===Gl?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),ah(e,l,f)),!1}throw Error(a(435,r.tag))}return ah(e,l,f),dc(),!1}if(Re)return i=ei.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Qu&&(e=Error(a(422),{cause:l}),go(fi(e,r)))):(l!==Qu&&(i=Error(a(423),{cause:l}),go(fi(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=fi(l,r),f=Uf(e.stateNode,l,f),cf(e,f),on!==4&&(on=2)),!1;var d=Error(a(520),{cause:l});if(d=fi(d,r),zo===null?zo=[d]:zo.push(d),on!==4&&(on=2),i===null)return!0;l=fi(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=Uf(r.stateNode,l,e),cf(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Rm(f),Cm(f,e,r,l),cf(r,f),!1}r=r.return}while(r!==null);return!1}var Of=Error(a(461)),pn=!1;function Ln(e,i,r,l){i.child=e===null?U0(i,null,r,l):As(i,e.child,r,l)}function Nm(e,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var b={};for(var w in l)w!=="ref"&&(b[w]=l[w])}else b=l;return Ss(i),l=mf(e,i,r,b,d,f),w=xf(),e!==null&&!pn?(gf(e,i,f),na(e,i,f)):(Re&&w&&Zu(i),i.flags|=1,Ln(e,i,l,f),i.child)}function Dm(e,i,r,l,f){if(e===null){var d=r.type;return typeof d=="function"&&!Wu(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Lm(e,i,d,l,f)):(e=zl(r.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Gf(e,f)){var b=d.memoizedProps;if(r=r.compare,r=r!==null?r:po,r(b,l)&&e.ref===i.ref)return na(e,i,f)}return i.flags|=1,e=Ki(d,l),e.ref=i.ref,e.return=i,i.child=e}function Lm(e,i,r,l,f){if(e!==null){var d=e.memoizedProps;if(po(d,l)&&e.ref===i.ref)if(pn=!1,i.pendingProps=l=d,Gf(e,f))(e.flags&131072)!==0&&(pn=!0);else return i.lanes=e.lanes,na(e,i,f)}return Pf(e,i,r,l,f)}function Um(e,i,r,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return Om(e,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hl(i,d!==null?d.cachePool:null),d!==null?z0(i,d):ff(),F0(i);else return l=i.lanes=536870912,Om(e,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(Hl(i,d.cachePool),z0(i,d),Va(),i.memoizedState=null):(e!==null&&Hl(i,null),ff(),Va());return Ln(e,i,f,r),i.child}function Co(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Om(e,i,r,l,f){var d=sf();return d=d===null?null:{parent:hn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},e!==null&&Hl(i,null),ff(),F0(i),e!==null&&ir(e,i,l,!0),i.childLanes=f,null}function nc(e,i){return i=ac({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Pm(e,i,r){return As(i,e.child,null,r),e=nc(i,i.pendingProps),e.flags|=2,ni(i),i.memoizedState=null,e}function cb(e,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Re){if(l.mode==="hidden")return e=nc(i,l),i.lanes=536870912,Co(null,e);if(df(i),(e=Je)?(e=qx(e,pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},r=v0(e),r.return=i,i.child=r,Nn=i,Je=null)):e=null,e===null)throw Pa(i);return i.lanes=536870912,null}return nc(i,l)}var d=e.memoizedState;if(d!==null){var b=d.dehydrated;if(df(i),f)if(i.flags&256)i.flags&=-257,i=Pm(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(pn||ir(e,i,r,!1),f=(r&e.childLanes)!==0,pn||f){if(l=Ze,l!==null&&(b=no(l,r),b!==0&&b!==d.retryLane))throw d.retryLane=b,vs(e,b),qn(l,e,b),Of;dc(),i=Pm(e,i,r)}else e=d.treeContext,Je=xi(b.nextSibling),Nn=i,Re=!0,Oa=null,pi=!1,e!==null&&b0(i,e),i=nc(i,l),i.flags|=4096;return i}return e=Ki(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ic(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Pf(e,i,r,l,f){return Ss(i),r=mf(e,i,r,l,void 0,f),l=xf(),e!==null&&!pn?(gf(e,i,f),na(e,i,f)):(Re&&l&&Zu(i),i.flags|=1,Ln(e,i,r,f),i.child)}function zm(e,i,r,l,f,d){return Ss(i),i.updateQueue=null,r=B0(i,l,r,f),I0(e),l=xf(),e!==null&&!pn?(gf(e,i,d),na(e,i,d)):(Re&&l&&Zu(i),i.flags|=1,Ln(e,i,r,d),i.child)}function Fm(e,i,r,l,f){if(Ss(i),i.stateNode===null){var d=$s,b=r.contextType;typeof b=="object"&&b!==null&&(d=Dn(b)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Lf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},of(i),b=r.contextType,d.context=typeof b=="object"&&b!==null?Dn(b):$s,d.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Df(i,r,b,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&Lf.enqueueReplaceState(d,d.state,null),Eo(i,l,d,f),Mo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var w=i.memoizedProps,V=Rs(r,w);d.props=V;var et=d.context,pt=r.contextType;b=$s,typeof pt=="object"&&pt!==null&&(b=Dn(pt));var gt=r.getDerivedStateFromProps;pt=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||et!==b)&&Mm(i,d,l,b),Fa=!1;var it=i.memoizedState;d.state=it,Eo(i,l,d,f),Mo(),et=i.memoizedState,w||it!==et||Fa?(typeof gt=="function"&&(Df(i,r,gt,l),et=i.memoizedState),(V=Fa||Sm(i,r,V,l,it,et,b))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),d.props=l,d.state=et,d.context=b,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,lf(e,i),b=i.memoizedProps,pt=Rs(r,b),d.props=pt,gt=i.pendingProps,it=d.context,et=r.contextType,V=$s,typeof et=="object"&&et!==null&&(V=Dn(et)),w=r.getDerivedStateFromProps,(et=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==gt||it!==V)&&Mm(i,d,l,V),Fa=!1,it=i.memoizedState,d.state=it,Eo(i,l,d,f),Mo();var lt=i.memoizedState;b!==gt||it!==lt||Fa||e!==null&&e.dependencies!==null&&Il(e.dependencies)?(typeof w=="function"&&(Df(i,r,w,l),lt=i.memoizedState),(pt=Fa||Sm(i,r,pt,l,it,lt,V)||e!==null&&e.dependencies!==null&&Il(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,lt,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,lt,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=lt),d.props=l,d.state=lt,d.context=V,l=pt):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&it===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&it===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,ic(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=As(i,e.child,null,f),i.child=As(i,null,r,f)):Ln(e,i,r,f),i.memoizedState=d.state,e=i.child):e=na(e,i,f),e}function Im(e,i,r,l){return ys(),i.flags|=256,Ln(e,i,r,l),i.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ff(e){return{baseLanes:e,cachePool:w0()}}function If(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=ai),e}function Bm(e,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(f?Ha(i):Va(),(e=Je)?(e=qx(e,pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},r=v0(e),r.return=i,i.child=r,Nn=i,Je=null)):e=null,e===null)throw Pa(i);return yh(e)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Va(),f=i.mode,w=ac({mode:"hidden",children:w},f),l=_s(l,f,r,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=Ff(r),l.childLanes=If(e,b,r),i.memoizedState=zf,Co(null,l)):(Ha(i),Bf(i,w))}var V=e.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(d)i.flags&256?(Ha(i),i.flags&=-257,i=Hf(e,i,r)):i.memoizedState!==null?(Va(),i.child=e.child,i.flags|=128,i=null):(Va(),w=l.fallback,f=i.mode,l=ac({mode:"visible",children:l.children},f),w=_s(w,f,r,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,As(i,e.child,null,r),l=i.child,l.memoizedState=Ff(r),l.childLanes=If(e,b,r),i.memoizedState=zf,i=Co(null,l));else if(Ha(i),yh(w)){if(b=w.nextSibling&&w.nextSibling.dataset,b)var et=b.dgst;b=et,l=Error(a(419)),l.stack="",l.digest=b,go({value:l,source:null,stack:null}),i=Hf(e,i,r)}else if(pn||ir(e,i,r,!1),b=(r&e.childLanes)!==0,pn||b){if(b=Ze,b!==null&&(l=no(b,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,vs(e,l),qn(b,e,l),Of;_h(w)||dc(),i=Hf(e,i,r)}else _h(w)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Je=xi(w.nextSibling),Nn=i,Re=!0,Oa=null,pi=!1,e!==null&&b0(i,e),i=Bf(i,l.children),i.flags|=4096);return i}return f?(Va(),w=l.fallback,f=i.mode,V=e.child,et=V.sibling,l=Ki(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,et!==null?w=Ki(et,w):(w=_s(w,f,r,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,Co(null,l),l=i.child,w=e.child.memoizedState,w===null?w=Ff(r):(f=w.cachePool,f!==null?(V=hn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=w0(),w={baseLanes:w.baseLanes|r,cachePool:f}),l.memoizedState=w,l.childLanes=If(e,b,r),i.memoizedState=zf,Co(e.child,l)):(Ha(i),r=e.child,e=r.sibling,r=Ki(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=r,i.memoizedState=null,r)}function Bf(e,i){return i=ac({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function ac(e,i){return e=ti(22,e,null,i),e.lanes=0,e}function Hf(e,i,r){return As(i,e.child,null,r),e=Bf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Hm(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),tf(e.return,i,r)}function Vf(e,i,r,l,f,d){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=r,b.tailMode=f,b.treeForkCount=d)}function Vm(e,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var b=cn.current,w=(b&2)!==0;if(w?(b=b&1|2,i.flags|=128):b&=1,yt(cn,b),Ln(e,i,l,r),l=Re?xo:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hm(e,r,i);else if(e.tag===19)Hm(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&Wl(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),Vf(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Wl(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}Vf(i,!0,r,null,d,l);break;case"together":Vf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function na(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),ja|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(ir(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Ki(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ki(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Gf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Il(e)))}function ub(e,i,r){switch(i.tag){case 3:zt(i,i.stateNode.containerInfo),za(i,hn,e.memoizedState.cache),ys();break;case 27:case 5:Qt(i);break;case 4:zt(i,i.stateNode.containerInfo);break;case 10:za(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,df(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ha(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Bm(e,i,r):(Ha(i),e=na(e,i,r),e!==null?e.sibling:null);Ha(i);break;case 19:var f=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(ir(e,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return Vm(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),yt(cn,cn.current),l)break;return null;case 22:return i.lanes=0,Um(e,i,r,i.pendingProps);case 24:za(i,hn,e.memoizedState.cache)}return na(e,i,r)}function Gm(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)pn=!0;else{if(!Gf(e,r)&&(i.flags&128)===0)return pn=!1,ub(e,i,r);pn=(e.flags&131072)!==0}else pn=!1,Re&&(i.flags&1048576)!==0&&y0(i,xo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Es(i.elementType),i.type=e,typeof e=="function")Wu(e)?(l=Rs(e,l),i.tag=1,i=Fm(null,i,e,l,r)):(i.tag=0,i=Pf(null,i,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===O){i.tag=11,i=Nm(null,i,e,l,r);break t}else if(f===I){i.tag=14,i=Dm(null,i,e,l,r);break t}}throw i=xt(e)||e,Error(a(306,i,""))}}return i;case 0:return Pf(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=Rs(l,i.pendingProps),Fm(e,i,l,f,r);case 3:t:{if(zt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,lf(e,i),Eo(i,l,null,r);var b=i.memoizedState;if(l=b.cache,za(i,hn,l),l!==d.cache&&ef(i,[hn],r,!0),Mo(),l=b.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Im(e,i,l,r);break t}else if(l!==f){f=fi(Error(a(424)),i),go(f),i=Im(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=xi(e.firstChild),Nn=i,Re=!0,Oa=null,pi=!0,r=U0(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(ys(),l===f){i=na(e,i,r);break t}Ln(e,i,l,r)}i=i.child}return i;case 26:return ic(e,i),e===null?(r=$x(i.type,null,i.pendingProps,null))?i.memoizedState=r:Re||(r=i.type,e=i.pendingProps,l=yc(st.current).createElement(r),l[fn]=i,l[gn]=e,Un(l,r,e),nt(l),i.stateNode=l):i.memoizedState=$x(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Qt(i),e===null&&Re&&(l=i.stateNode=Kx(i.type,i.pendingProps,st.current),Nn=i,pi=!0,f=Je,Za(i.type)?(bh=f,Je=xi(l.firstChild)):Je=f),Ln(e,i,i.pendingProps.children,r),ic(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Re&&((f=l=Je)&&(l=Hb(l,i.type,i.pendingProps,pi),l!==null?(i.stateNode=l,Nn=i,Je=xi(l.firstChild),pi=!1,f=!0):f=!1),f||Pa(i)),Qt(i),f=i.type,d=i.pendingProps,b=e!==null?e.memoizedProps:null,l=d.children,xh(f,d)?l=null:b!==null&&xh(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=mf(e,i,eb,null,null,r),jo._currentValue=f),ic(e,i),Ln(e,i,l,r),i.child;case 6:return e===null&&Re&&((e=r=Je)&&(r=Vb(r,i.pendingProps,pi),r!==null?(i.stateNode=r,Nn=i,Je=null,e=!0):e=!1),e||Pa(i)),null;case 13:return Bm(e,i,r);case 4:return zt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=As(i,null,l,r):Ln(e,i,l,r),i.child;case 11:return Nm(e,i,i.type,i.pendingProps,r);case 7:return Ln(e,i,i.pendingProps,r),i.child;case 8:return Ln(e,i,i.pendingProps.children,r),i.child;case 12:return Ln(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,za(i,i.type,l.value),Ln(e,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ss(i),f=Dn(f),l=l(f),i.flags|=1,Ln(e,i,l,r),i.child;case 14:return Dm(e,i,i.type,i.pendingProps,r);case 15:return Lm(e,i,i.type,i.pendingProps,r);case 19:return Vm(e,i,r);case 31:return cb(e,i,r);case 22:return Um(e,i,r,i.pendingProps);case 24:return Ss(i),l=Dn(hn),e===null?(f=sf(),f===null&&(f=Ze,d=nf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},of(i),za(i,hn,f)):((e.lanes&r)!==0&&(lf(e,i),Eo(i,null,null,r),Mo()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),za(i,hn,l)):(l=d.cache,za(i,hn,l),l!==f.cache&&ef(i,[hn],r,!0))),Ln(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ia(e){e.flags|=4}function kf(e,i,r,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(mx())e.flags|=8192;else throw Ts=Gl,rf}else e.flags&=-16777217}function km(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ag(i))if(mx())e.flags|=8192;else throw Ts=Gl,rf}function sc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ve():536870912,e.lanes|=i,mr|=i)}function No(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function fb(e,i,r){var l=i.pendingProps;switch(Ku(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(i),null;case 1:return $e(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),$i(hn),Gt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(nr(i)?ia(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ju())),$e(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(ia(i),d!==null?($e(i),km(i,d)):($e(i),kf(i,f,null,l,r))):d?d!==e.memoizedState?(ia(i),$e(i),km(i,d)):($e(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&ia(i),$e(i),kf(i,f,e,l,r)),null;case 27:if(me(i),r=st.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}e=Ct.current,nr(i)?S0(i):(e=Kx(f,l,r),i.stateNode=e,ia(i))}return $e(i),null;case 5:if(me(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}if(d=Ct.current,nr(i))S0(i);else{var b=yc(st.current);switch(d){case 1:d=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=b.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}d[fn]=i,d[gn]=l;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)d.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=d;t:switch(Un(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ia(i)}}return $e(i),kf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ia(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=st.current,nr(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[fn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Bx(e.nodeValue,r)),e||Pa(i,!0)}else e=yc(e).createTextNode(l),e[fn]=i,i.stateNode=e}return $e(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=nr(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),e=!1}else r=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(ni(i),i):(ni(i),null);if((i.flags&128)!==0)throw Error(a(558))}return $e(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=nr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[fn]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),f=!1}else f=Ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ni(i),i):(ni(i),null)}return ni(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),sc(i,i.updateQueue),$e(i),null);case 4:return Gt(),e===null&&fh(i.stateNode.containerInfo),$e(i),null;case 10:return $i(i.type),$e(i),null;case 19:if(at(cn),l=i.memoizedState,l===null)return $e(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)No(l,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Wl(e),d!==null){for(i.flags|=128,No(l,!1),e=d.updateQueue,i.updateQueue=e,sc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)g0(r,e),r=r.sibling;return yt(cn,cn.current&1|2),Re&&Qi(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&T()>uc&&(i.flags|=128,f=!0,No(l,!1),i.lanes=4194304)}else{if(!f)if(e=Wl(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,sc(i,e),No(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Re)return $e(i),null}else 2*T()-l.renderingStartTime>uc&&r!==536870912&&(i.flags|=128,f=!0,No(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=T(),e.sibling=null,r=cn.current,yt(cn,f?r&1|2:r&1),Re&&Qi(i,l.treeForkCount),e):($e(i),null);case 22:case 23:return ni(i),hf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&($e(i),i.subtreeFlags&6&&(i.flags|=8192)):$e(i),r=i.updateQueue,r!==null&&sc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&at(Ms),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),$i(hn),$e(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function hb(e,i){switch(Ku(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return $i(hn),Gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return me(i),null;case 31:if(i.memoizedState!==null){if(ni(i),i.alternate===null)throw Error(a(340));ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ni(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ys()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return at(cn),null;case 4:return Gt(),null;case 10:return $i(i.type),null;case 22:case 23:return ni(i),hf(),e!==null&&at(Ms),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return $i(hn),null;case 25:return null;default:return null}}function jm(e,i){switch(Ku(i),i.tag){case 3:$i(hn),Gt();break;case 26:case 27:case 5:me(i);break;case 4:Gt();break;case 31:i.memoizedState!==null&&ni(i);break;case 13:ni(i);break;case 19:at(cn);break;case 10:$i(i.type);break;case 22:case 23:ni(i),hf(),e!==null&&at(Ms);break;case 24:$i(hn)}}function Do(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var d=r.create,b=r.inst;l=d(),b.destroy=l}r=r.next}while(r!==f)}}catch(w){He(i,i.return,w)}}function Ga(e,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var b=l.inst,w=b.destroy;if(w!==void 0){b.destroy=void 0,f=i;var V=r,et=w;try{et()}catch(pt){He(f,V,pt)}}}l=l.next}while(l!==d)}}catch(pt){He(i,i.return,pt)}}function Xm(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{P0(i,r)}catch(l){He(e,e.return,l)}}}function Wm(e,i,r){r.props=Rs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){He(e,i,l)}}function Lo(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){He(e,i,f)}}function zi(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){He(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){He(e,i,f)}else r.current=null}function qm(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){He(e,e.return,f)}}function jf(e,i,r){try{var l=e.stateNode;Ob(l,e.type,r,i),l[gn]=i}catch(f){He(e,e.return,f)}}function Ym(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function Xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wf(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Yi));else if(l!==4&&(l===27&&Za(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Wf(e,i,r),e=e.sibling;e!==null;)Wf(e,i,r),e=e.sibling}function rc(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&Za(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(rc(e,i,r),e=e.sibling;e!==null;)rc(e,i,r),e=e.sibling}function Zm(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Un(i,l,r),i[fn]=e,i[gn]=r}catch(d){He(e,e.return,d)}}var aa=!1,mn=!1,qf=!1,Km=typeof WeakSet=="function"?WeakSet:Set,wn=null;function db(e,i){if(e=e.containerInfo,ph=wc,e=l0(e),Bu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var b=0,w=-1,V=-1,et=0,pt=0,gt=e,it=null;e:for(;;){for(var lt;gt!==r||f!==0&&gt.nodeType!==3||(w=b+f),gt!==d||l!==0&&gt.nodeType!==3||(V=b+l),gt.nodeType===3&&(b+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)it=gt,gt=lt;for(;;){if(gt===e)break e;if(it===r&&++et===f&&(w=b),it===d&&++pt===l&&(V=b),(lt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=lt}r=w===-1||V===-1?null:{start:w,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(mh={focusedElem:e,selectionRange:r},wc=!1,wn=i;wn!==null;)if(i=wn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,wn=e;else for(;wn!==null;){switch(i=wn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var Kt=Rs(r.type,f);e=l.getSnapshotBeforeUpdate(Kt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(le){He(r,r.return,le)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)vh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,wn=e;break}wn=i.return}}function Qm(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ra(e,r),l&4&&Do(5,r);break;case 1:if(ra(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(b){He(r,r.return,b)}else{var f=Rs(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){He(r,r.return,b)}}l&64&&Xm(r),l&512&&Lo(r,r.return);break;case 3:if(ra(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{P0(e,i)}catch(b){He(r,r.return,b)}}break;case 27:i===null&&l&4&&Zm(r);case 26:case 5:ra(e,r),i===null&&l&4&&qm(r),l&512&&Lo(r,r.return);break;case 12:ra(e,r);break;case 31:ra(e,r),l&4&&tx(e,r);break;case 13:ra(e,r),l&4&&ex(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Sb.bind(null,r),Gb(e,r))));break;case 22:if(l=r.memoizedState!==null||aa,!l){i=i!==null&&i.memoizedState!==null||mn,f=aa;var d=mn;aa=l,(mn=i)&&!d?oa(e,r,(r.subtreeFlags&8772)!==0):ra(e,r),aa=f,mn=d}break;case 30:break;default:ra(e,r)}}function Jm(e){var i=e.alternate;i!==null&&(e.alternate=null,Jm(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&so(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,kn=!1;function sa(e,i,r){for(r=r.child;r!==null;)$m(e,i,r),r=r.sibling}function $m(e,i,r){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Et,r)}catch{}switch(r.tag){case 26:mn||zi(r,i),sa(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mn||zi(r,i);var l=tn,f=kn;Za(r.type)&&(tn=r.stateNode,kn=!1),sa(e,i,r),Vo(r.stateNode),tn=l,kn=f;break;case 5:mn||zi(r,i);case 6:if(l=tn,f=kn,tn=null,sa(e,i,r),tn=l,kn=f,tn!==null)if(kn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(r.stateNode)}catch(d){He(r,i,d)}else try{tn.removeChild(r.stateNode)}catch(d){He(r,i,d)}break;case 18:tn!==null&&(kn?(e=tn,Xx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Mr(e)):Xx(tn,r.stateNode));break;case 4:l=tn,f=kn,tn=r.stateNode.containerInfo,kn=!0,sa(e,i,r),tn=l,kn=f;break;case 0:case 11:case 14:case 15:Ga(2,r,i),mn||Ga(4,r,i),sa(e,i,r);break;case 1:mn||(zi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&Wm(r,i,l)),sa(e,i,r);break;case 21:sa(e,i,r);break;case 22:mn=(l=mn)||r.memoizedState!==null,sa(e,i,r),mn=l;break;default:sa(e,i,r)}}function tx(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Mr(e)}catch(r){He(i,i.return,r)}}}function ex(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mr(e)}catch(r){He(i,i.return,r)}}function pb(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Km),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Km),i;default:throw Error(a(435,e.tag))}}function oc(e,i){var r=pb(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=Mb.bind(null,e,l);l.then(f,f)}})}function jn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=e,b=i,w=b;t:for(;w!==null;){switch(w.tag){case 27:if(Za(w.type)){tn=w.stateNode,kn=!1;break t}break;case 5:tn=w.stateNode,kn=!1;break t;case 3:case 4:tn=w.stateNode.containerInfo,kn=!0;break t}w=w.return}if(tn===null)throw Error(a(160));$m(d,b,f),tn=null,kn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)nx(i,e),i=i.sibling}var Ti=null;function nx(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(i,e),Xn(e),l&4&&(Ga(3,e,e.return),Do(3,e),Ga(5,e,e.return));break;case 1:jn(i,e),Xn(e),l&512&&(mn||r===null||zi(r,r.return)),l&64&&aa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Ti;if(jn(i,e),Xn(e),l&512&&(mn||r===null||zi(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[ps]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Un(d,l,r),d[fn]=e,nt(d),l=d;break t;case"link":var b=ng("link","href",f).get(l+(r.href||""));if(b){for(var w=0;w<b.length;w++)if(d=b[w],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(w,1);break e}}d=f.createElement(l),Un(d,l,r),f.head.appendChild(d);break;case"meta":if(b=ng("meta","content",f).get(l+(r.content||""))){for(w=0;w<b.length;w++)if(d=b[w],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(w,1);break e}}d=f.createElement(l),Un(d,l,r),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[fn]=e,nt(d),l=d}e.stateNode=l}else ig(f,e.type,e.stateNode);else e.stateNode=eg(f,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?ig(f,e.type,e.stateNode):eg(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&jf(e,e.memoizedProps,r.memoizedProps)}break;case 27:jn(i,e),Xn(e),l&512&&(mn||r===null||zi(r,r.return)),r!==null&&l&4&&jf(e,e.memoizedProps,r.memoizedProps);break;case 5:if(jn(i,e),Xn(e),l&512&&(mn||r===null||zi(r,r.return)),e.flags&32){f=e.stateNode;try{Ui(f,"")}catch(Kt){He(e,e.return,Kt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,jf(e,f,r!==null?r.memoizedProps:f)),l&1024&&(qf=!0);break;case 6:if(jn(i,e),Xn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Kt){He(e,e.return,Kt)}}break;case 3:if(Mc=null,f=Ti,Ti=bc(i.containerInfo),jn(i,e),Ti=f,Xn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Mr(i.containerInfo)}catch(Kt){He(e,e.return,Kt)}qf&&(qf=!1,ix(e));break;case 4:l=Ti,Ti=bc(e.stateNode.containerInfo),jn(i,e),Xn(e),Ti=l;break;case 12:jn(i,e),Xn(e);break;case 31:jn(i,e),Xn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,oc(e,l)));break;case 13:jn(i,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(cc=T()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,oc(e,l)));break;case 22:f=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,et=aa,pt=mn;if(aa=et||f,mn=pt||V,jn(i,e),mn=pt,aa=et,Xn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||V||aa||mn||Cs(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){V=r=i;try{if(d=V.stateNode,f)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{w=V.stateNode;var gt=V.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;w.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Kt){He(V,V.return,Kt)}}}else if(i.tag===6){if(r===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Kt){He(V,V.return,Kt)}}}else if(i.tag===18){if(r===null){V=i;try{var lt=V.stateNode;f?Wx(lt,!0):Wx(V.stateNode,!1)}catch(Kt){He(V,V.return,Kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,oc(e,r))));break;case 19:jn(i,e),Xn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,oc(e,l)));break;case 30:break;case 21:break;default:jn(i,e),Xn(e)}}function Xn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(Ym(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=Xf(e);rc(e,d,f);break;case 5:var b=r.stateNode;r.flags&32&&(Ui(b,""),r.flags&=-33);var w=Xf(e);rc(e,w,b);break;case 3:case 4:var V=r.stateNode.containerInfo,et=Xf(e);Wf(e,et,V);break;default:throw Error(a(161))}}catch(pt){He(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function ix(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;ix(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ra(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Qm(e,i.alternate,i),i=i.sibling}function Cs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ga(4,i,i.return),Cs(i);break;case 1:zi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Wm(i,i.return,r),Cs(i);break;case 27:Vo(i.stateNode);case 26:case 5:zi(i,i.return),Cs(i);break;case 22:i.memoizedState===null&&Cs(i);break;case 30:Cs(i);break;default:Cs(i)}e=e.sibling}}function oa(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,b=d.flags;switch(d.tag){case 0:case 11:case 15:oa(f,d,r),Do(4,d);break;case 1:if(oa(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(et){He(l,l.return,et)}if(l=d,f=l.updateQueue,f!==null){var w=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)O0(V[f],w)}catch(et){He(l,l.return,et)}}r&&b&64&&Xm(d),Lo(d,d.return);break;case 27:Zm(d);case 26:case 5:oa(f,d,r),r&&l===null&&b&4&&qm(d),Lo(d,d.return);break;case 12:oa(f,d,r);break;case 31:oa(f,d,r),r&&b&4&&tx(f,d);break;case 13:oa(f,d,r),r&&b&4&&ex(f,d);break;case 22:d.memoizedState===null&&oa(f,d,r),Lo(d,d.return);break;case 30:break;default:oa(f,d,r)}i=i.sibling}}function Yf(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&vo(r))}function Zf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e))}function Ai(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)ax(e,i,r,l),i=i.sibling}function ax(e,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ai(e,i,r,l),f&2048&&Do(9,i);break;case 1:Ai(e,i,r,l);break;case 3:Ai(e,i,r,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e)));break;case 12:if(f&2048){Ai(e,i,r,l),e=i.stateNode;try{var d=i.memoizedProps,b=d.id,w=d.onPostCommit;typeof w=="function"&&w(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){He(i,i.return,V)}}else Ai(e,i,r,l);break;case 31:Ai(e,i,r,l);break;case 13:Ai(e,i,r,l);break;case 23:break;case 22:d=i.stateNode,b=i.alternate,i.memoizedState!==null?d._visibility&2?Ai(e,i,r,l):Uo(e,i):d._visibility&2?Ai(e,i,r,l):(d._visibility|=2,hr(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Yf(b,i);break;case 24:Ai(e,i,r,l),f&2048&&Zf(i.alternate,i);break;default:Ai(e,i,r,l)}}function hr(e,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,b=i,w=r,V=l,et=b.flags;switch(b.tag){case 0:case 11:case 15:hr(d,b,w,V,f),Do(8,b);break;case 23:break;case 22:var pt=b.stateNode;b.memoizedState!==null?pt._visibility&2?hr(d,b,w,V,f):Uo(d,b):(pt._visibility|=2,hr(d,b,w,V,f)),f&&et&2048&&Yf(b.alternate,b);break;case 24:hr(d,b,w,V,f),f&&et&2048&&Zf(b.alternate,b);break;default:hr(d,b,w,V,f)}i=i.sibling}}function Uo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,f=l.flags;switch(l.tag){case 22:Uo(r,l),f&2048&&Yf(l.alternate,l);break;case 24:Uo(r,l),f&2048&&Zf(l.alternate,l);break;default:Uo(r,l)}i=i.sibling}}var Oo=8192;function dr(e,i,r){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)sx(e,i,r),e=e.sibling}function sx(e,i,r){switch(e.tag){case 26:dr(e,i,r),e.flags&Oo&&e.memoizedState!==null&&t1(r,Ti,e.memoizedState,e.memoizedProps);break;case 5:dr(e,i,r);break;case 3:case 4:var l=Ti;Ti=bc(e.stateNode.containerInfo),dr(e,i,r),Ti=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Oo,Oo=16777216,dr(e,i,r),Oo=l):dr(e,i,r));break;default:dr(e,i,r)}}function rx(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Po(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];wn=l,lx(l,e)}rx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ox(e),e=e.sibling}function ox(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,lc(e)):Po(e);break;default:Po(e)}}function lc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];wn=l,lx(l,e)}rx(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ga(8,i,i.return),lc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,lc(i));break;default:lc(i)}e=e.sibling}}function lx(e,i){for(;wn!==null;){var r=wn;switch(r.tag){case 0:case 11:case 15:Ga(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:vo(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,wn=l;else t:for(r=e;wn!==null;){l=wn;var f=l.sibling,d=l.return;if(Jm(l),l===r){wn=null;break t}if(f!==null){f.return=d,wn=f;break t}wn=d}}}var mb={getCacheForType:function(e){var i=Dn(hn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Dn(hn).controller.signal}},xb=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ze=null,Se=null,Ee=0,Be=0,ii=null,ka=!1,pr=!1,Kf=!1,la=0,on=0,ja=0,Ns=0,Qf=0,ai=0,mr=0,zo=null,Wn=null,Jf=!1,cc=0,cx=0,uc=1/0,fc=null,Xa=null,_n=0,Wa=null,xr=null,ca=0,$f=0,th=null,ux=null,Fo=0,eh=null;function si(){return(Fe&2)!==0&&Ee!==0?Ee&-Ee:H.T!==null?oh():io()}function fx(){if(ai===0)if((Ee&536870912)===0||Re){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function qn(e,i,r){(e===Ze&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(gr(e,0),qa(e,Ee,ai,!1)),On(e,r),((Fe&2)===0||e!==Ze)&&(e===Ze&&((Fe&2)===0&&(Ns|=r),on===4&&qa(e,Ee,ai,!1)),Fi(e))}function hx(e,i,r){if((Fe&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Yt(e,i),f=l?_b(e,i):ih(e,i,!0),d=l;do{if(f===0){pr&&!l&&qa(e,i,0,!1);break}else{if(r=e.current.alternate,d&&!gb(r)){f=ih(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var w=e;f=zo;var V=w.current.memoizedState.isDehydrated;if(V&&(gr(w,b).flags|=256),b=ih(w,b,!1),b!==2){if(Kf&&!V){w.errorRecoveryDisabledLanes|=d,Ns|=d,f=4;break t}d=Wn,Wn=f,d!==null&&(Wn===null?Wn=d:Wn.push.apply(Wn,d))}f=b}if(d=!1,f!==2)continue}}if(f===1){gr(e,0),qa(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:qa(l,i,ai,!ka);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=cc+300-T(),10<f)){if(qa(l,i,ai,!ka),_t(l,0,!0)!==0)break t;ca=i,l.timeoutHandle=kx(dx.bind(null,l,r,Wn,fc,Jf,i,ai,Ns,mr,ka,d,"Throttled",-0,0),f);break t}dx(l,r,Wn,fc,Jf,i,ai,Ns,mr,ka,d,null,-0,0)}}break}while(!0);Fi(e)}function dx(e,i,r,l,f,d,b,w,V,et,pt,gt,it,lt){if(e.timeoutHandle=-1,gt=i.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},sx(i,d,gt);var Kt=(d&62914560)===d?cc-T():(d&4194048)===d?cx-T():0;if(Kt=e1(gt,Kt),Kt!==null){ca=d,e.cancelPendingCommit=Kt(bx.bind(null,e,i,d,r,l,f,b,w,V,pt,gt,null,it,lt)),qa(e,d,b,!et);return}}bx(e,i,d,r,l,f,b,w,V)}function gb(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!$n(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function qa(e,i,r,l){i&=~Qf,i&=~Ns,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-Jt(f),b=1<<d;l[d]=-1,f&=~b}r!==0&&Ml(e,r,i)}function hc(){return(Fe&6)===0?(Io(0),!1):!0}function nh(){if(Se!==null){if(Be===0)var e=Se.return;else e=Se,Ji=bs=null,vf(e),or=null,yo=0,e=Se;for(;e!==null;)jm(e.alternate,e),e=e.return;Se=null}}function gr(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,Fb(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),ca=0,nh(),Ze=e,Se=r=Ki(e.current,null),Ee=i,Be=0,ii=null,ka=!1,pr=Yt(e,i),Kf=!1,mr=ai=Qf=Ns=ja=on=0,Wn=zo=null,Jf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Jt(l),d=1<<f;i|=e[f],l&=~d}return la=i,Ul(),r}function px(e,i){xe=null,H.H=Ro,i===rr||i===Vl?(i=N0(),Be=3):i===rf?(i=N0(),Be=4):Be=i===Of?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ii=i,Se===null&&(on=1,ec(e,fi(i,e.current)))}function mx(){var e=ei.current;return e===null?!0:(Ee&4194048)===Ee?mi===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===mi:!1}function xx(){var e=H.H;return H.H=Ro,e===null?Ro:e}function gx(){var e=H.A;return H.A=mb,e}function dc(){on=4,ka||(Ee&4194048)!==Ee&&ei.current!==null||(pr=!0),(ja&134217727)===0&&(Ns&134217727)===0||Ze===null||qa(Ze,Ee,ai,!1)}function ih(e,i,r){var l=Fe;Fe|=2;var f=xx(),d=gx();(Ze!==e||Ee!==i)&&(fc=null,gr(e,i)),i=!1;var b=on;t:do try{if(Be!==0&&Se!==null){var w=Se,V=ii;switch(Be){case 8:nh(),b=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(i=!0);var et=Be;if(Be=0,ii=null,vr(e,w,V,et),r&&pr){b=0;break t}break;default:et=Be,Be=0,ii=null,vr(e,w,V,et)}}vb(),b=on;break}catch(pt){px(e,pt)}while(!0);return i&&e.shellSuspendCounter++,Ji=bs=null,Fe=l,H.H=f,H.A=d,Se===null&&(Ze=null,Ee=0,Ul()),b}function vb(){for(;Se!==null;)vx(Se)}function _b(e,i){var r=Fe;Fe|=2;var l=xx(),f=gx();Ze!==e||Ee!==i?(fc=null,uc=T()+500,gr(e,i)):pr=Yt(e,i);t:do try{if(Be!==0&&Se!==null){i=Se;var d=ii;e:switch(Be){case 1:Be=0,ii=null,vr(e,i,d,1);break;case 2:case 9:if(R0(d)){Be=0,ii=null,_x(i);break}i=function(){Be!==2&&Be!==9||Ze!==e||(Be=7),Fi(e)},d.then(i,i);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:R0(d)?(Be=0,ii=null,_x(i)):(Be=0,ii=null,vr(e,i,d,7));break;case 5:var b=null;switch(Se.tag){case 26:b=Se.memoizedState;case 5:case 27:var w=Se;if(b?ag(b):w.stateNode.complete){Be=0,ii=null;var V=w.sibling;if(V!==null)Se=V;else{var et=w.return;et!==null?(Se=et,pc(et)):Se=null}break e}}Be=0,ii=null,vr(e,i,d,5);break;case 6:Be=0,ii=null,vr(e,i,d,6);break;case 8:nh(),on=6;break t;default:throw Error(a(462))}}yb();break}catch(pt){px(e,pt)}while(!0);return Ji=bs=null,H.H=l,H.A=f,Fe=r,Se!==null?0:(Ze=null,Ee=0,Ul(),on)}function yb(){for(;Se!==null&&!Xt();)vx(Se)}function vx(e){var i=Gm(e.alternate,e,la);e.memoizedProps=e.pendingProps,i===null?pc(e):Se=i}function _x(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=zm(r,i,i.pendingProps,i.type,void 0,Ee);break;case 11:i=zm(r,i,i.pendingProps,i.type.render,i.ref,Ee);break;case 5:vf(i);default:jm(r,i),i=Se=g0(i,la),i=Gm(r,i,la)}e.memoizedProps=e.pendingProps,i===null?pc(e):Se=i}function vr(e,i,r,l){Ji=bs=null,vf(i),or=null,yo=0;var f=i.return;try{if(lb(e,f,i,r,Ee)){on=1,ec(e,fi(r,e.current)),Se=null;return}}catch(d){if(f!==null)throw Se=f,d;on=1,ec(e,fi(r,e.current)),Se=null;return}i.flags&32768?(Re||l===1?e=!0:pr||(Ee&536870912)!==0?e=!1:(ka=e=!0,(l===2||l===9||l===3||l===6)&&(l=ei.current,l!==null&&l.tag===13&&(l.flags|=16384))),yx(i,e)):pc(i)}function pc(e){var i=e;do{if((i.flags&32768)!==0){yx(i,ka);return}e=i.return;var r=fb(i.alternate,i,la);if(r!==null){Se=r;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);on===0&&(on=5)}function yx(e,i){do{var r=hb(e.alternate,e);if(r!==null){r.flags&=32767,Se=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=r}while(e!==null);on=6,Se=null}function bx(e,i,r,l,f,d,b,w,V){e.cancelPendingCommit=null;do mc();while(_n!==0);if((Fe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=ju,Qn(e,r,d,b,w,V),e===Ze&&(Se=Ze=null,Ee=0),xr=i,Wa=e,ca=r,$f=d,th=f,ux=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Eb(ct,function(){return Ax(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,f=Y.p,Y.p=2,b=Fe,Fe|=4;try{db(e,i,r)}finally{Fe=b,Y.p=f,H.T=l}}_n=1,Sx(),Mx(),Ex()}}function Sx(){if(_n===1){_n=0;var e=Wa,i=xr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var l=Y.p;Y.p=2;var f=Fe;Fe|=4;try{nx(i,e);var d=mh,b=l0(e.containerInfo),w=d.focusedElem,V=d.selectionRange;if(b!==w&&w&&w.ownerDocument&&o0(w.ownerDocument.documentElement,w)){if(V!==null&&Bu(w)){var et=V.start,pt=V.end;if(pt===void 0&&(pt=et),"selectionStart"in w)w.selectionStart=et,w.selectionEnd=Math.min(pt,w.value.length);else{var gt=w.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),Kt=w.textContent.length,le=Math.min(V.start,Kt),je=V.end===void 0?le:Math.min(V.end,Kt);!lt.extend&&le>je&&(b=je,je=le,le=b);var q=r0(w,le),j=r0(w,je);if(q&&j&&(lt.rangeCount!==1||lt.anchorNode!==q.node||lt.anchorOffset!==q.offset||lt.focusNode!==j.node||lt.focusOffset!==j.offset)){var tt=gt.createRange();tt.setStart(q.node,q.offset),lt.removeAllRanges(),le>je?(lt.addRange(tt),lt.extend(j.node,j.offset)):(tt.setEnd(j.node,j.offset),lt.addRange(tt))}}}}for(gt=[],lt=w;lt=lt.parentNode;)lt.nodeType===1&&gt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<gt.length;w++){var mt=gt[w];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}wc=!!ph,mh=ph=null}finally{Fe=f,Y.p=l,H.T=r}}e.current=i,_n=2}}function Mx(){if(_n===2){_n=0;var e=Wa,i=xr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var l=Y.p;Y.p=2;var f=Fe;Fe|=4;try{Qm(e,i.alternate,i)}finally{Fe=f,Y.p=l,H.T=r}}_n=3}}function Ex(){if(_n===4||_n===3){_n=0,L();var e=Wa,i=xr,r=ca,l=ux;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,xr=Wa=null,Tx(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Xa=null),ds(r),i=i.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,f=Y.p,Y.p=2,H.T=null;try{for(var d=e.onRecoverableError,b=0;b<l.length;b++){var w=l[b];d(w.value,{componentStack:w.stack})}}finally{H.T=i,Y.p=f}}(ca&3)!==0&&mc(),Fi(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===eh?Fo++:(Fo=0,eh=e):Fo=0,Io(0)}}function Tx(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,vo(i)))}function mc(){return Sx(),Mx(),Ex(),Ax()}function Ax(){if(_n!==5)return!1;var e=Wa,i=$f;$f=0;var r=ds(ca),l=H.T,f=Y.p;try{Y.p=32>r?32:r,H.T=null,r=th,th=null;var d=Wa,b=ca;if(_n=0,xr=Wa=null,ca=0,(Fe&6)!==0)throw Error(a(331));var w=Fe;if(Fe|=4,ox(d.current),ax(d,d.current,b,r),Fe=w,Io(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Et,d)}catch{}return!0}finally{Y.p=f,H.T=l,Tx(e,i)}}function wx(e,i,r){i=fi(r,i),i=Uf(e.stateNode,i,2),e=Ba(e,i,2),e!==null&&(On(e,2),Fi(e))}function He(e,i,r){if(e.tag===3)wx(e,e,r);else for(;i!==null;){if(i.tag===3){wx(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Xa===null||!Xa.has(l))){e=fi(r,e),r=Rm(2),l=Ba(i,r,2),l!==null&&(Cm(r,l,i,e),On(l,2),Fi(l));break}}i=i.return}}function ah(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new xb;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(Kf=!0,f.add(r),e=bb.bind(null,e,i,r),i.then(e,e))}function bb(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ze===e&&(Ee&r)===r&&(on===4||on===3&&(Ee&62914560)===Ee&&300>T()-cc?(Fe&2)===0&&gr(e,0):Qf|=r,mr===Ee&&(mr=0)),Fi(e)}function Rx(e,i){i===0&&(i=Ve()),e=vs(e,i),e!==null&&(On(e,i),Fi(e))}function Sb(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),Rx(e,r)}function Mb(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Rx(e,r)}function Eb(e,i){return qt(e,i)}var xc=null,_r=null,sh=!1,gc=!1,rh=!1,Ya=0;function Fi(e){e!==_r&&e.next===null&&(_r===null?xc=_r=e:_r=_r.next=e),gc=!0,sh||(sh=!0,Ab())}function Io(e,i){if(!rh&&gc){rh=!0;do for(var r=!1,l=xc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var b=l.suspendedLanes,w=l.pingedLanes;d=(1<<31-Jt(42|e)+1)-1,d&=f&~(b&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Lx(l,d))}else d=Ee,d=_t(l,l===Ze?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Yt(l,d)||(r=!0,Lx(l,d));l=l.next}while(r);rh=!1}}function Tb(){Cx()}function Cx(){gc=sh=!1;var e=0;Ya!==0&&zb()&&(e=Ya);for(var i=T(),r=null,l=xc;l!==null;){var f=l.next,d=Nx(l,i);d===0?(l.next=null,r===null?xc=f:r.next=f,f===null&&(_r=r)):(r=l,(e!==0||(d&3)!==0)&&(gc=!0)),l=f}_n!==0&&_n!==5||Io(e),Ya!==0&&(Ya=0)}function Nx(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var b=31-Jt(d),w=1<<b,V=f[b];V===-1?((w&r)===0||(w&l)!==0)&&(f[b]=he(w,i)):V<=i&&(e.expiredLanes|=w),d&=~w}if(i=Ze,r=Ee,r=_t(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ft(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Yt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&Ft(l),ds(r)){case 2:case 8:r=Mt;break;case 32:r=ct;break;case 268435456:r=It;break;default:r=ct}return l=Dx.bind(null,e),r=qt(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&Ft(l),e.callbackPriority=2,e.callbackNode=null,2}function Dx(e,i){if(_n!==0&&_n!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(mc()&&e.callbackNode!==r)return null;var l=Ee;return l=_t(e,e===Ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(hx(e,l,i),Nx(e,T()),e.callbackNode!=null&&e.callbackNode===r?Dx.bind(null,e):null)}function Lx(e,i){if(mc())return null;hx(e,i,!0)}function Ab(){Ib(function(){(Fe&6)!==0?qt(ht,Tb):Cx()})}function oh(){if(Ya===0){var e=ar;e===0&&(e=Bt,Bt<<=1,(Bt&261888)===0&&(Bt=256)),Ya=e}return Ya}function Ux(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Tl(""+e)}function Ox(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function wb(e,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=Ux((f[gn]||null).action),b=l.submitter;b&&(i=(i=b[gn]||null)?Ux(i.formAction):b.getAttribute("formAction"),i!==null&&(d=i,b=null));var w=new Cl("action","action",null,l,f);e.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ya!==0){var V=b?Ox(f,b):new FormData(f);wf(r,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(w.preventDefault(),V=b?Ox(f,b):new FormData(f),wf(r,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var lh=0;lh<ku.length;lh++){var ch=ku[lh],Rb=ch.toLowerCase(),Cb=ch[0].toUpperCase()+ch.slice(1);Ei(Rb,"on"+Cb)}Ei(f0,"onAnimationEnd"),Ei(h0,"onAnimationIteration"),Ei(d0,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Xy,"onTransitionRun"),Ei(Wy,"onTransitionStart"),Ei(qy,"onTransitionCancel"),Ei(p0,"onTransitionEnd"),Wt("onMouseEnter",["mouseout","mouseover"]),Wt("onMouseLeave",["mouseout","mouseover"]),Wt("onPointerEnter",["pointerout","pointerover"]),Wt("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function Px(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var b=l.length-1;0<=b;b--){var w=l[b],V=w.instance,et=w.currentTarget;if(w=w.listener,V!==d&&f.isPropagationStopped())break t;d=w,f.currentTarget=et;try{d(f)}catch(pt){Ll(pt)}f.currentTarget=null,d=V}else for(b=0;b<l.length;b++){if(w=l[b],V=w.instance,et=w.currentTarget,w=w.listener,V!==d&&f.isPropagationStopped())break t;d=w,f.currentTarget=et;try{d(f)}catch(pt){Ll(pt)}f.currentTarget=null,d=V}}}}function Me(e,i){var r=i[Ws];r===void 0&&(r=i[Ws]=new Set);var l=e+"__bubble";r.has(l)||(zx(i,e,2,!1),r.add(l))}function uh(e,i,r){var l=0;i&&(l|=4),zx(r,e,l,i)}var vc="_reactListening"+Math.random().toString(36).slice(2);function fh(e){if(!e[vc]){e[vc]=!0,Q.forEach(function(r){r!=="selectionchange"&&(Nb.has(r)||uh(r,!1,e),uh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[vc]||(i[vc]=!0,uh("selectionchange",!1,i))}}function zx(e,i,r,l){switch(fg(i)){case 2:var f=a1;break;case 8:f=s1;break;default:f=Ah}r=f.bind(null,i,r,e),f=void 0,!Nu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function hh(e,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var w=l.stateNode.containerInfo;if(w===f)break;if(b===4)for(b=l.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;w!==null;){if(b=Na(w),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){l=d=b;continue t}w=w.parentNode}}l=l.return}Vp(function(){var et=d,pt=Ru(r),gt=[];t:{var it=m0.get(e);if(it!==void 0){var lt=Cl,Kt=e;switch(e){case"keypress":if(wl(r)===0)break t;case"keydown":case"keyup":lt=My;break;case"focusin":Kt="focus",lt=Ou;break;case"focusout":Kt="blur",lt=Ou;break;case"beforeblur":case"afterblur":lt=Ou;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Ay;break;case f0:case h0:case d0:lt=py;break;case p0:lt=Ry;break;case"scroll":case"scrollend":lt=cy;break;case"wheel":lt=Ny;break;case"copy":case"cut":case"paste":lt=xy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Wp;break;case"toggle":case"beforetoggle":lt=Ly}var le=(i&4)!==0,je=!le&&(e==="scroll"||e==="scrollend"),q=le?it!==null?it+"Capture":null:it;le=[];for(var j=et,tt;j!==null;){var mt=j;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||q===null||(mt=ro(j,q),mt!=null&&le.push(Ho(j,mt,tt))),je)break;j=j.return}0<le.length&&(it=new lt(it,Kt,null,r,pt),gt.push({event:it,listeners:le}))}}if((i&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&r!==wu&&(Kt=r.relatedTarget||r.fromElement)&&(Na(Kt)||Kt[Xi]))break t;if((lt||it)&&(it=pt.window===pt?pt:(it=pt.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(Kt=r.relatedTarget||r.toElement,lt=et,Kt=Kt?Na(Kt):null,Kt!==null&&(je=c(Kt),le=Kt.tag,Kt!==je||le!==5&&le!==27&&le!==6)&&(Kt=null)):(lt=null,Kt=et),lt!==Kt)){if(le=jp,mt="onMouseLeave",q="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(le=Wp,mt="onPointerLeave",q="onPointerEnter",j="pointer"),je=lt==null?it:W(lt),tt=Kt==null?it:W(Kt),it=new le(mt,j+"leave",lt,r,pt),it.target=je,it.relatedTarget=tt,mt=null,Na(pt)===et&&(le=new le(q,j+"enter",Kt,r,pt),le.target=tt,le.relatedTarget=je,mt=le),je=mt,lt&&Kt)e:{for(le=Db,q=lt,j=Kt,tt=0,mt=q;mt;mt=le(mt))tt++;mt=0;for(var se=j;se;se=le(se))mt++;for(;0<tt-mt;)q=le(q),tt--;for(;0<mt-tt;)j=le(j),mt--;for(;tt--;){if(q===j||j!==null&&q===j.alternate){le=q;break e}q=le(q),j=le(j)}le=null}else le=null;lt!==null&&Fx(gt,it,lt,le,!1),Kt!==null&&je!==null&&Fx(gt,je,Kt,le,!0)}}t:{if(it=et?W(et):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Ue=t0;else if(Jp(it))if(e0)Ue=Gy;else{Ue=Hy;var te=By}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?et&&Au(et.elementType)&&(Ue=t0):Ue=Vy;if(Ue&&(Ue=Ue(e,et))){$p(gt,Ue,r,pt);break t}te&&te(e,it,et),e==="focusout"&&et&&it.type==="number"&&et.memoizedProps.value!=null&&Tn(it,"number",it.value)}switch(te=et?W(et):window,e){case"focusin":(Jp(te)||te.contentEditable==="true")&&(Ks=te,Hu=et,mo=null);break;case"focusout":mo=Hu=Ks=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,c0(gt,r,pt);break;case"selectionchange":if(jy)break;case"keydown":case"keyup":c0(gt,r,pt)}var ve;if(zu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Zs?Kp(e,r)&&(Te="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Te="onCompositionStart");Te&&(qp&&r.locale!=="ko"&&(Zs||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Zs&&(ve=Gp()):(La=pt,Du="value"in La?La.value:La.textContent,Zs=!0)),te=_c(et,Te),0<te.length&&(Te=new Xp(Te,e,null,r,pt),gt.push({event:Te,listeners:te}),ve?Te.data=ve:(ve=Qp(r),ve!==null&&(Te.data=ve)))),(ve=Oy?Py(e,r):zy(e,r))&&(Te=_c(et,"onBeforeInput"),0<Te.length&&(te=new Xp("onBeforeInput","beforeinput",null,r,pt),gt.push({event:te,listeners:Te}),te.data=ve)),wb(gt,e,et,r,pt)}Px(gt,i)})}function Ho(e,i,r){return{instance:e,listener:i,currentTarget:r}}function _c(e,i){for(var r=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=ro(e,r),f!=null&&l.unshift(Ho(e,f,d)),f=ro(e,i),f!=null&&l.push(Ho(e,f,d))),e.tag===3)return l;e=e.return}return[]}function Db(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fx(e,i,r,l,f){for(var d=i._reactName,b=[];r!==null&&r!==l;){var w=r,V=w.alternate,et=w.stateNode;if(w=w.tag,V!==null&&V===l)break;w!==5&&w!==26&&w!==27||et===null||(V=et,f?(et=ro(r,d),et!=null&&b.unshift(Ho(r,et,V))):f||(et=ro(r,d),et!=null&&b.push(Ho(r,et,V)))),r=r.return}b.length!==0&&e.push({event:i,listeners:b})}var Lb=/\r\n?/g,Ub=/\u0000|\uFFFD/g;function Ix(e){return(typeof e=="string"?e:""+e).replace(Lb,`
`).replace(Ub,"")}function Bx(e,i){return i=Ix(i),Ix(e)===i}function ke(e,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ui(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ui(e,""+l);break;case"className":Ne(e,"class",l);break;case"tabIndex":Ne(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,r,l);break;case"style":Bp(e,l,d);break;case"data":if(i!=="object"){Ne(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Tl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&ke(e,i,"name",f.name,f,null),ke(e,i,"formEncType",f.formEncType,f,null),ke(e,i,"formMethod",f.formMethod,f,null),ke(e,i,"formTarget",f.formTarget,f,null)):(ke(e,i,"encType",f.encType,f,null),ke(e,i,"method",f.method,f,null),ke(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Tl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Yi);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Tl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),ge(e,"popover",l);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ge(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=oy.get(r)||r,ge(e,r,l))}}function dh(e,i,r,l,f,d){switch(r){case"style":Bp(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Ui(e,l):(typeof l=="number"||typeof l=="bigint")&&Ui(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=e[gn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):ge(e,r,l)}}}function Un(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var b=r[d];if(b!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,d,b,r,null)}}f&&ke(e,i,"srcSet",r.srcSet,r,null),l&&ke(e,i,"src",r.src,r,null);return;case"input":Me("invalid",e);var w=d=b=f=null,V=null,et=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":f=pt;break;case"type":b=pt;break;case"checked":V=pt;break;case"defaultChecked":et=pt;break;case"value":d=pt;break;case"defaultValue":w=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:ke(e,i,l,pt,r,null)}}Qe(e,d,w,V,et,b,f,!1);return;case"select":Me("invalid",e),l=b=d=null;for(f in r)if(r.hasOwnProperty(f)&&(w=r[f],w!=null))switch(f){case"value":d=w;break;case"defaultValue":b=w;break;case"multiple":l=w;default:ke(e,i,f,w,r,null)}i=d,r=b,e.multiple=!!l,i!=null?vn(e,!!l,i,!1):r!=null&&vn(e,!!l,r,!0);return;case"textarea":Me("invalid",e),d=f=l=null;for(b in r)if(r.hasOwnProperty(b)&&(w=r[b],w!=null))switch(b){case"value":l=w;break;case"defaultValue":f=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:ke(e,i,b,w,r,null)}Cn(e,l,f,d);return;case"option":for(V in r)if(r.hasOwnProperty(V)&&(l=r[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,i,V,l,r,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<Bo.length;l++)Me(Bo[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in r)if(r.hasOwnProperty(et)&&(l=r[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,et,l,r,null)}return;default:if(Au(i)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&dh(e,i,pt,l,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(l=r[w],l!=null&&ke(e,i,w,l,r,null))}function Ob(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,b=null,w=null,V=null,et=null,pt=null;for(lt in r){var gt=r[lt];if(r.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":V=gt;default:l.hasOwnProperty(lt)||ke(e,i,lt,null,l,gt)}}for(var it in l){var lt=l[it];if(gt=r[it],l.hasOwnProperty(it)&&(lt!=null||gt!=null))switch(it){case"type":d=lt;break;case"name":f=lt;break;case"checked":et=lt;break;case"defaultChecked":pt=lt;break;case"value":b=lt;break;case"defaultValue":w=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:lt!==gt&&ke(e,i,it,lt,l,gt)}}Wi(e,b,w,V,et,pt,d,f);return;case"select":lt=b=w=it=null;for(d in r)if(V=r[d],r.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":lt=V;default:l.hasOwnProperty(d)||ke(e,i,d,null,l,V)}for(f in l)if(d=l[f],V=r[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":it=d;break;case"defaultValue":w=d;break;case"multiple":b=d;default:d!==V&&ke(e,i,f,d,l,V)}i=w,r=b,l=lt,it!=null?vn(e,!!r,it,!1):!!l!=!!r&&(i!=null?vn(e,!!r,i,!0):vn(e,!!r,r?[]:"",!1));return;case"textarea":lt=it=null;for(w in r)if(f=r[w],r.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:ke(e,i,w,null,l,f)}for(b in l)if(f=l[b],d=r[b],l.hasOwnProperty(b)&&(f!=null||d!=null))switch(b){case"value":it=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&ke(e,i,b,f,l,d)}An(e,it,lt);return;case"option":for(var Kt in r)if(it=r[Kt],r.hasOwnProperty(Kt)&&it!=null&&!l.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:ke(e,i,Kt,null,l,it)}for(V in l)if(it=l[V],lt=r[V],l.hasOwnProperty(V)&&it!==lt&&(it!=null||lt!=null))switch(V){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:ke(e,i,V,it,l,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in r)it=r[le],r.hasOwnProperty(le)&&it!=null&&!l.hasOwnProperty(le)&&ke(e,i,le,null,l,it);for(et in l)if(it=l[et],lt=r[et],l.hasOwnProperty(et)&&it!==lt&&(it!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(a(137,i));break;default:ke(e,i,et,it,l,lt)}return;default:if(Au(i)){for(var je in r)it=r[je],r.hasOwnProperty(je)&&it!==void 0&&!l.hasOwnProperty(je)&&dh(e,i,je,void 0,l,it);for(pt in l)it=l[pt],lt=r[pt],!l.hasOwnProperty(pt)||it===lt||it===void 0&&lt===void 0||dh(e,i,pt,it,l,lt);return}}for(var q in r)it=r[q],r.hasOwnProperty(q)&&it!=null&&!l.hasOwnProperty(q)&&ke(e,i,q,null,l,it);for(gt in l)it=l[gt],lt=r[gt],!l.hasOwnProperty(gt)||it===lt||it==null&&lt==null||ke(e,i,gt,it,l,lt)}function Hx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Pb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,b=f.initiatorType,w=f.duration;if(d&&w&&Hx(b)){for(b=0,w=f.responseEnd,l+=1;l<r.length;l++){var V=r[l],et=V.startTime;if(et>w)break;var pt=V.transferSize,gt=V.initiatorType;pt&&Hx(gt)&&(V=V.responseEnd,b+=pt*(V<w?1:(w-et)/(V-et)))}if(--l,i+=8*(d+b)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ph=null,mh=null;function yc(e){return e.nodeType===9?e:e.ownerDocument}function Vx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gx(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function xh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gh=null;function zb(){var e=window.event;return e&&e.type==="popstate"?e===gh?!1:(gh=e,!0):(gh=null,!1)}var kx=typeof setTimeout=="function"?setTimeout:void 0,Fb=typeof clearTimeout=="function"?clearTimeout:void 0,jx=typeof Promise=="function"?Promise:void 0,Ib=typeof queueMicrotask=="function"?queueMicrotask:typeof jx<"u"?function(e){return jx.resolve(null).then(e).catch(Bb)}:kx;function Bb(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Xx(e,i){var r=i,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),Mr(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Vo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Vo(r);for(var d=r.firstChild;d;){var b=d.nextSibling,w=d.nodeName;d[ps]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=b}}else r==="body"&&Vo(e.ownerDocument.body);r=f}while(r);Mr(i)}function Wx(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function vh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":vh(r),so(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function Hb(e,i,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ps])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function Vb(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=xi(e.nextSibling),e===null))return null;return e}function qx(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=xi(e.nextSibling),e===null))return null;return e}function _h(e){return e.data==="$?"||e.data==="$~"}function yh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gb(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function xi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var bh=null;function Yx(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return xi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Zx(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Kx(e,i,r){switch(i=yc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Vo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);so(e)}var gi=new Map,Qx=new Set;function bc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=Y.d;Y.d={f:kb,r:jb,D:Xb,C:Wb,L:qb,m:Yb,X:Kb,S:Zb,M:Qb};function kb(){var e=ua.f(),i=hc();return e||i}function jb(e){var i=C(e);i!==null&&i.tag===5&&i.type==="form"?pm(i):ua.r(e)}var yr=typeof document>"u"?null:document;function Jx(e,i,r){var l=yr;if(l&&typeof i=="string"&&i){var f=Ke(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),Qx.has(f)||(Qx.add(f),e={rel:e,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Un(i,"link",e),nt(i),l.head.appendChild(i)))}}function Xb(e){ua.D(e),Jx("dns-prefetch",e,null)}function Wb(e,i){ua.C(e,i),Jx("preconnect",e,i)}function qb(e,i,r){ua.L(e,i,r);var l=yr;if(l&&e&&i){var f='link[rel="preload"][as="'+Ke(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+Ke(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+Ke(r.imageSizes)+'"]')):f+='[href="'+Ke(e)+'"]';var d=f;switch(i){case"style":d=br(e);break;case"script":d=Sr(e)}gi.has(d)||(e=x({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),gi.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Go(d))||i==="script"&&l.querySelector(ko(d))||(i=l.createElement("link"),Un(i,"link",e),nt(i),l.head.appendChild(i)))}}function Yb(e,i){ua.m(e,i);var r=yr;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ke(l)+'"][href="'+Ke(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Sr(e)}if(!gi.has(d)&&(e=x({rel:"modulepreload",href:e},i),gi.set(d,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ko(d)))return}l=r.createElement("link"),Un(l,"link",e),nt(l),r.head.appendChild(l)}}}function Zb(e,i,r){ua.S(e,i,r);var l=yr;if(l&&e){var f=rt(l).hoistableStyles,d=br(e);i=i||"default";var b=f.get(d);if(!b){var w={loading:0,preload:null};if(b=l.querySelector(Go(d)))w.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":i},r),(r=gi.get(d))&&Sh(e,r);var V=b=l.createElement("link");nt(V),Un(V,"link",e),V._p=new Promise(function(et,pt){V.onload=et,V.onerror=pt}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Sc(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:w},f.set(d,b)}}}function Kb(e,i){ua.X(e,i);var r=yr;if(r&&e){var l=rt(r).hoistableScripts,f=Sr(e),d=l.get(f);d||(d=r.querySelector(ko(f)),d||(e=x({src:e,async:!0},i),(i=gi.get(f))&&Mh(e,i),d=r.createElement("script"),nt(d),Un(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function Qb(e,i){ua.M(e,i);var r=yr;if(r&&e){var l=rt(r).hoistableScripts,f=Sr(e),d=l.get(f);d||(d=r.querySelector(ko(f)),d||(e=x({src:e,async:!0,type:"module"},i),(i=gi.get(f))&&Mh(e,i),d=r.createElement("script"),nt(d),Un(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function $x(e,i,r,l){var f=(f=st.current)?bc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=br(r.href),r=rt(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=br(r.href);var d=rt(f).hoistableStyles,b=d.get(e);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,b),(d=f.querySelector(Go(e)))&&!d._p&&(b.instance=d,b.state.loading=5),gi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},gi.set(e,r),d||Jb(f,e,r,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Sr(r),r=rt(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function br(e){return'href="'+Ke(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function tg(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Jb(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Un(i,"link",r),nt(i),e.head.appendChild(i))}function Sr(e){return'[src="'+Ke(e)+'"]'}function ko(e){return"script[async]"+e}function eg(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ke(r.href)+'"]');if(l)return i.instance=l,nt(l),l;var f=x({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),nt(l),Un(l,"style",f),Sc(l,r.precedence,e),i.instance=l;case"stylesheet":f=br(r.href);var d=e.querySelector(Go(f));if(d)return i.state.loading|=4,i.instance=d,nt(d),d;l=tg(r),(f=gi.get(f))&&Sh(l,f),d=(e.ownerDocument||e).createElement("link"),nt(d);var b=d;return b._p=new Promise(function(w,V){b.onload=w,b.onerror=V}),Un(d,"link",l),i.state.loading|=4,Sc(d,r.precedence,e),i.instance=d;case"script":return d=Sr(r.src),(f=e.querySelector(ko(d)))?(i.instance=f,nt(f),f):(l=r,(f=gi.get(d))&&(l=x({},r),Mh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),nt(f),Un(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Sc(l,r.precedence,e));return i.instance}function Sc(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,b=0;b<l.length;b++){var w=l[b];if(w.dataset.precedence===i)d=w;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Sh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Mh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Mc=null;function ng(e,i,r){if(Mc===null){var l=new Map,f=Mc=new Map;f.set(r,l)}else f=Mc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var d=r[f];if(!(d[ps]||d[fn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(i)||"";b=e+b;var w=l.get(b);w?w.push(d):l.set(b,[d])}}return l}function ig(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function $b(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function ag(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function t1(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=br(l.href),d=i.querySelector(Go(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Ec.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=d,nt(d);return}d=i.ownerDocument||i,l=tg(l),(f=gi.get(f))&&Sh(l,f),d=d.createElement("link"),nt(d);var b=d;b._p=new Promise(function(w,V){b.onload=w,b.onerror=V}),Un(d,"link",l),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Ec.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Eh=0;function e1(e,i){return e.stylesheets&&e.count===0&&Ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Eh===0&&(Eh=62500*Pb());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Eh?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Tc=null;function Ac(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Tc=new Map,i.forEach(n1,e),Tc=null,Ec.call(e))}function n1(e,i){if(!(i.state.loading&4)){var r=Tc.get(e);if(r)var l=r.get(null);else{r=new Map,Tc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var b=f[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),l=b)}l&&r.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),d=r.get(b)||l,d===l&&r.set(null,f),r.set(b,f),this.count++,l=Ec.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var jo={$$typeof:R,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function i1(e,i,r,l,f,d,b,w,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function sg(e,i,r,l,f,d,b,w,V,et,pt,gt){return e=new i1(e,i,r,b,V,et,pt,gt,w),i=1,d===!0&&(i|=24),d=ti(3,null,null,i),e.current=d,d.stateNode=e,i=nf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},of(d),e}function rg(e){return e?(e=$s,e):$s}function og(e,i,r,l,f,d){f=rg(f),l.context===null?l.context=f:l.pendingContext=f,l=Ia(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=Ba(e,l,i),r!==null&&(qn(r,e,i),So(r,e,i))}function lg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Th(e,i){lg(e,i),(e=e.alternate)&&lg(e,i)}function cg(e){if(e.tag===13||e.tag===31){var i=vs(e,67108864);i!==null&&qn(i,e,67108864),Th(e,67108864)}}function ug(e){if(e.tag===13||e.tag===31){var i=si();i=Mi(i);var r=vs(e,i);r!==null&&qn(r,e,i),Th(e,i)}}var wc=!0;function a1(e,i,r,l){var f=H.T;H.T=null;var d=Y.p;try{Y.p=2,Ah(e,i,r,l)}finally{Y.p=d,H.T=f}}function s1(e,i,r,l){var f=H.T;H.T=null;var d=Y.p;try{Y.p=8,Ah(e,i,r,l)}finally{Y.p=d,H.T=f}}function Ah(e,i,r,l){if(wc){var f=wh(l);if(f===null)hh(e,i,l,Rc,r),hg(e,l);else if(o1(f,e,i,r,l))l.stopPropagation();else if(hg(e,l),i&4&&-1<r1.indexOf(e)){for(;f!==null;){var d=C(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=At(d.pendingLanes);if(b!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;b;){var V=1<<31-Jt(b);w.entanglements[1]|=V,b&=~V}Fi(d),(Fe&6)===0&&(uc=T()+500,Io(0))}}break;case 31:case 13:w=vs(d,2),w!==null&&qn(w,d,2),hc(),Th(d,2)}if(d=wh(l),d===null&&hh(e,i,l,Rc,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else hh(e,i,l,null,r)}}function wh(e){return e=Ru(e),Rh(e)}var Rc=null;function Rh(e){if(Rc=null,e=Na(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Rc=e,null}function fg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case ht:return 2;case Mt:return 8;case ct:case ee:return 32;case It:return 268435456;default:return 32}default:return 32}}var Ch=!1,Ka=null,Qa=null,Ja=null,Xo=new Map,Wo=new Map,$a=[],r1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hg(e,i){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Xo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(i.pointerId)}}function qo(e,i,r,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=C(i),i!==null&&cg(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function o1(e,i,r,l,f){switch(i){case"focusin":return Ka=qo(Ka,e,i,r,l,f),!0;case"dragenter":return Qa=qo(Qa,e,i,r,l,f),!0;case"mouseover":return Ja=qo(Ja,e,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return Xo.set(d,qo(Xo.get(d)||null,e,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Wo.set(d,qo(Wo.get(d)||null,e,i,r,l,f)),!0}return!1}function dg(e){var i=Na(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,ao(e.priority,function(){ug(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,ao(e.priority,function(){ug(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=wh(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);wu=l,r.target.dispatchEvent(l),wu=null}else return i=C(r),i!==null&&cg(i),e.blockedOn=r,!1;i.shift()}return!0}function pg(e,i,r){Cc(e)&&r.delete(i)}function l1(){Ch=!1,Ka!==null&&Cc(Ka)&&(Ka=null),Qa!==null&&Cc(Qa)&&(Qa=null),Ja!==null&&Cc(Ja)&&(Ja=null),Xo.forEach(pg),Wo.forEach(pg)}function Nc(e,i){e.blockedOn===i&&(e.blockedOn=null,Ch||(Ch=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,l1)))}var Dc=null;function mg(e){Dc!==e&&(Dc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Rh(l||r)===null)continue;break}var d=C(r);d!==null&&(e.splice(i,3),i-=3,wf(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function Mr(e){function i(V){return Nc(V,e)}Ka!==null&&Nc(Ka,e),Qa!==null&&Nc(Qa,e),Ja!==null&&Nc(Ja,e),Xo.forEach(i),Wo.forEach(i);for(var r=0;r<$a.length;r++){var l=$a[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<$a.length&&(r=$a[0],r.blockedOn===null);)dg(r),r.blockedOn===null&&$a.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],b=f[gn]||null;if(typeof d=="function")b||mg(r);else if(b){var w=null;if(d&&d.hasAttribute("formAction")){if(f=d,b=d[gn]||null)w=b.formAction;else if(Rh(f)!==null)continue}else w=b.action;typeof w=="function"?r[l+1]=w:(r.splice(l,3),l-=3),mg(r)}}}function xg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Nh(e){this._internalRoot=e}Lc.prototype.render=Nh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=si();og(r,l,e,i,null,null)},Lc.prototype.unmount=Nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;og(e.current,2,null,e,null,null),hc(),i[Xi]=null}};function Lc(e){this._internalRoot=e}Lc.prototype.unstable_scheduleHydration=function(e){if(e){var i=io();e={blockedOn:null,target:e,priority:i};for(var r=0;r<$a.length&&i!==0&&i<$a[r].priority;r++);$a.splice(r,0,e),r===0&&dg(e)}};var gg=t.version;if(gg!=="19.2.0")throw Error(a(527,gg,"19.2.0"));Y.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var c1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{Et=Uc.inject(c1),Rt=Uc}catch{}}return Zo.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",f=Em,d=Tm,b=Am;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=sg(e,1,!1,null,null,r,l,null,f,d,b,xg),e[Xi]=i.current,fh(e),new Nh(i)},Zo.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,f="",d=Em,b=Tm,w=Am,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),i=sg(e,1,!0,i,r??null,l,f,V,d,b,w,xg),i.context=rg(null),r=i.current,l=si(),l=Mi(l),f=Ia(l),f.callback=null,Ba(r,f,l),r=l,i.current.lanes=r,On(i,r),Fi(i),e[Xi]=i.current,fh(e),new Lc(i)},Zo.version="19.2.0",Zo}var wg;function y1(){if(wg)return Uh.exports;wg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Uh.exports=_1(),Uh.exports}var b1=y1();const S1=Xv(b1);/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Rg="popstate";function M1(s={}){function t(o,c){let{pathname:u="/",search:h="",hash:m=""}=js(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),bd("",{pathname:u,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let u=o.document.querySelector("base"),h="";if(u&&u.getAttribute("href")){let m=o.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:ul(c))}function a(o,c){Si(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return T1(t,n,a,s)}function an(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Si(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function E1(){return Math.random().toString(36).substring(2,10)}function Cg(s,t){return{usr:s.state,key:s.key,idx:t}}function bd(s,t,n=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?js(t):t,state:n,key:t&&t.key||a||E1()}}function ul({pathname:s="/",search:t="",hash:n=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(s+=n.charAt(0)==="#"?n:"#"+n),s}function js(s){let t={};if(s){let n=s.indexOf("#");n>=0&&(t.hash=s.substring(n),s=s.substring(0,n));let a=s.indexOf("?");a>=0&&(t.search=s.substring(a),s=s.substring(0,a)),s&&(t.pathname=s)}return t}function T1(s,t,n,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,u=o.history,h="POP",m=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function x(){h="POP";let M=g(),y=M==null?null:M-p;p=M,m&&m({action:h,location:A.location,delta:y})}function v(M,y){h="PUSH";let z=bd(A.location,M,y);n&&n(z,M),p=g()+1;let R=Cg(z,p),O=A.createHref(z);try{u.pushState(R,"",O)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(O)}c&&m&&m({action:h,location:A.location,delta:1})}function S(M,y){h="REPLACE";let z=bd(A.location,M,y);n&&n(z,M),p=g();let R=Cg(z,p),O=A.createHref(z);u.replaceState(R,"",O),c&&m&&m({action:h,location:A.location,delta:0})}function E(M){return A1(M)}let A={get action(){return h},get location(){return s(o,u)},listen(M){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Rg,x),m=M,()=>{o.removeEventListener(Rg,x),m=null}},createHref(M){return t(o,M)},createURL:E,encodeLocation(M){let y=E(M);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:S,go(M){return u.go(M)}};return A}function A1(s,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),an(n,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:ul(s);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function Wv(s,t,n="/"){return w1(s,t,n,!1)}function w1(s,t,n,a){let o=typeof t=="string"?js(t):t,c=Ta(o.pathname||"/",n);if(c==null)return null;let u=qv(s);R1(u);let h=null;for(let m=0;h==null&&m<u.length;++m){let p=B1(c);h=F1(u[m],p,a)}return h}function qv(s,t=[],n=[],a="",o=!1){let c=(u,h,m=o,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&m)return;an(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let x=ba([a,g.relativePath]),v=n.concat(g);u.children&&u.children.length>0&&(an(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),qv(u.children,t,v,x,m)),!(u.path==null&&!u.index)&&t.push({path:x,score:P1(x,u.index),routesMeta:v})};return s.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))c(u,h);else for(let p of Yv(u.path))c(u,h,!0,p)}),t}function Yv(s){let t=s.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let u=Yv(a.join("/")),h=[];return h.push(...u.map(m=>m===""?c:[c,m].join("/"))),o&&h.push(...u),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function R1(s){s.sort((t,n)=>t.score!==n.score?n.score-t.score:z1(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var C1=/^:[\w-]+$/,N1=3,D1=2,L1=1,U1=10,O1=-2,Ng=s=>s==="*";function P1(s,t){let n=s.split("/"),a=n.length;return n.some(Ng)&&(a+=O1),t&&(a+=D1),n.filter(o=>!Ng(o)).reduce((o,c)=>o+(C1.test(c)?N1:c===""?L1:U1),a)}function z1(s,t){return s.length===t.length&&s.slice(0,-1).every((a,o)=>a===t[o])?s[s.length-1]-t[t.length-1]:0}function F1(s,t,n=!1){let{routesMeta:a}=s,o={},c="/",u=[];for(let h=0;h<a.length;++h){let m=a[h],p=h===a.length-1,g=c==="/"?t:t.slice(c.length)||"/",x=pu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!x&&p&&n&&!a[a.length-1].route.index&&(x=pu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:ba([c,x.pathname]),pathnameBase:j1(ba([c,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(c=ba([c,x.pathnameBase]))}return u}function pu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[n,a]=I1(s.path,s.caseSensitive,s.end),o=t.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=h[v]||"";u=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=h[v];return x&&!S?p[g]=void 0:p[g]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:s}}function I1(s,t=!1,n=!0){Si(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,m)=>(a.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function B1(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Si(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Ta(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=s.charAt(n);return a&&a!=="/"?null:s.slice(n)||"/"}var H1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,V1=s=>H1.test(s);function G1(s,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof s=="string"?js(s):s,c;if(n)if(V1(n))c=n;else{if(n.includes("//")){let u=n;n=n.replace(/\/\/+/g,"/"),Si(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${n}`)}n.startsWith("/")?c=Dg(n.substring(1),"/"):c=Dg(n,t)}else c=t;return{pathname:c,search:X1(a),hash:W1(o)}}function Dg(s,t){let n=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Fh(s,t,n,a){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function k1(s){return s.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Zv(s){let t=k1(s);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function Kv(s,t,n,a=!1){let o;typeof s=="string"?o=js(s):(o={...s},an(!o.pathname||!o.pathname.includes("?"),Fh("?","pathname","search",o)),an(!o.pathname||!o.pathname.includes("#"),Fh("#","pathname","hash",o)),an(!o.search||!o.search.includes("#"),Fh("#","search","hash",o)));let c=s===""||o.pathname==="",u=c?"/":o.pathname,h;if(u==null)h=n;else{let x=t.length-1;if(!a&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),x-=1;o.pathname=v.join("/")}h=x>=0?t[x]:"/"}let m=G1(o,h),p=u&&u!=="/"&&u.endsWith("/"),g=(c||u===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var ba=s=>s.join("/").replace(/\/\/+/g,"/"),j1=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),X1=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,W1=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function q1(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Qv=["POST","PUT","PATCH","DELETE"];new Set(Qv);var Y1=["GET",...Qv];new Set(Y1);var Zr=dt.createContext(null);Zr.displayName="DataRouter";var vu=dt.createContext(null);vu.displayName="DataRouterState";dt.createContext(!1);var Jv=dt.createContext({isTransitioning:!1});Jv.displayName="ViewTransition";var Z1=dt.createContext(new Map);Z1.displayName="Fetchers";var K1=dt.createContext(null);K1.displayName="Await";var ki=dt.createContext(null);ki.displayName="Navigation";var _l=dt.createContext(null);_l.displayName="Location";var wa=dt.createContext({outlet:null,matches:[],isDataRoute:!1});wa.displayName="Route";var vp=dt.createContext(null);vp.displayName="RouteError";function Q1(s,{relative:t}={}){an(yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=dt.useContext(ki),{hash:o,pathname:c,search:u}=bl(s,{relative:t}),h=c;return n!=="/"&&(h=c==="/"?n:ba([n,c])),a.createHref({pathname:h,search:u,hash:o})}function yl(){return dt.useContext(_l)!=null}function Ra(){return an(yl(),"useLocation() may be used only in the context of a <Router> component."),dt.useContext(_l).location}var $v="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function t_(s){dt.useContext(ki).static||dt.useLayoutEffect(s)}function J1(){let{isDataRoute:s}=dt.useContext(wa);return s?fS():$1()}function $1(){an(yl(),"useNavigate() may be used only in the context of a <Router> component.");let s=dt.useContext(Zr),{basename:t,navigator:n}=dt.useContext(ki),{matches:a}=dt.useContext(wa),{pathname:o}=Ra(),c=JSON.stringify(Zv(a)),u=dt.useRef(!1);return t_(()=>{u.current=!0}),dt.useCallback((m,p={})=>{if(Si(u.current,$v),!u.current)return;if(typeof m=="number"){n.go(m);return}let g=Kv(m,JSON.parse(c),o,p.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ba([t,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[t,n,c,o,s])}dt.createContext(null);function bl(s,{relative:t}={}){let{matches:n}=dt.useContext(wa),{pathname:a}=Ra(),o=JSON.stringify(Zv(n));return dt.useMemo(()=>Kv(s,JSON.parse(o),a,t==="path"),[s,o,a,t])}function tS(s,t){return e_(s,t)}function e_(s,t,n,a,o){var z;an(yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=dt.useContext(ki),{matches:u}=dt.useContext(wa),h=u[u.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",x=h&&h.route;{let R=x&&x.path||"";n_(p,!x||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Ra(),S;if(t){let R=typeof t=="string"?js(t):t;an(g==="/"||((z=R.pathname)==null?void 0:z.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=v;let E=S.pathname||"/",A=E;if(g!=="/"){let R=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let M=Wv(s,{pathname:A});Si(x||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Si(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=sS(M&&M.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:ba([g,c.encodeLocation?c.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:ba([g,c.encodeLocation?c.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),u,n,a,o);return t&&y?dt.createElement(_l.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},y):y}function eS(){let s=uS(),t=q1(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),n=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",s),u=dt.createElement(dt.Fragment,null,dt.createElement("p",null,"💿 Hey developer 👋"),dt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",dt.createElement("code",{style:c},"ErrorBoundary")," or"," ",dt.createElement("code",{style:c},"errorElement")," prop on your route.")),dt.createElement(dt.Fragment,null,dt.createElement("h2",null,"Unexpected Application Error!"),dt.createElement("h3",{style:{fontStyle:"italic"}},t),n?dt.createElement("pre",{style:o},n):null,u)}var nS=dt.createElement(eS,null),iS=class extends dt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?dt.createElement(wa.Provider,{value:this.props.routeContext},dt.createElement(vp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function aS({routeContext:s,match:t,children:n}){let a=dt.useContext(Zr);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),dt.createElement(wa.Provider,{value:s},n)}function sS(s,t=[],n=null,a=null,o=null){if(s==null){if(!n)return null;if(n.errors)s=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)s=n.matches;else return null}let c=s,u=n==null?void 0:n.errors;if(u!=null){let g=c.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);an(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,m=-1;if(n)for(let g=0;g<c.length;g++){let x=c[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=g),x.route.id){let{loaderData:v,errors:S}=n,E=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!S||S[x.route.id]===void 0);if(x.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=n&&a?(g,x)=>{var v,S;a(g,{location:n.location,params:((S=(v=n.matches)==null?void 0:v[0])==null?void 0:S.params)??{},errorInfo:x})}:void 0;return c.reduceRight((g,x,v)=>{let S,E=!1,A=null,M=null;n&&(S=u&&x.route.id?u[x.route.id]:void 0,A=x.route.errorElement||nS,h&&(m<0&&v===0?(n_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,M=null):m===v&&(E=!0,M=x.route.hydrateFallbackElement||null)));let y=t.concat(c.slice(0,v+1)),z=()=>{let R;return S?R=A:E?R=M:x.route.Component?R=dt.createElement(x.route.Component,null):x.route.element?R=x.route.element:R=g,dt.createElement(aS,{match:x,routeContext:{outlet:g,matches:y,isDataRoute:n!=null},children:R})};return n&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?dt.createElement(iS,{location:n.location,revalidation:n.revalidation,component:A,error:S,children:z(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:p}):z()},null)}function _p(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rS(s){let t=dt.useContext(Zr);return an(t,_p(s)),t}function oS(s){let t=dt.useContext(vu);return an(t,_p(s)),t}function lS(s){let t=dt.useContext(wa);return an(t,_p(s)),t}function yp(s){let t=lS(s),n=t.matches[t.matches.length-1];return an(n.route.id,`${s} can only be used on routes that contain a unique "id"`),n.route.id}function cS(){return yp("useRouteId")}function uS(){var a;let s=dt.useContext(vp),t=oS("useRouteError"),n=yp("useRouteError");return s!==void 0?s:(a=t.errors)==null?void 0:a[n]}function fS(){let{router:s}=rS("useNavigate"),t=yp("useNavigate"),n=dt.useRef(!1);return t_(()=>{n.current=!0}),dt.useCallback(async(o,c={})=>{Si(n.current,$v),n.current&&(typeof o=="number"?s.navigate(o):await s.navigate(o,{fromRouteId:t,...c}))},[s,t])}var Lg={};function n_(s,t,n){!t&&!Lg[s]&&(Lg[s]=!0,Si(!1,n))}dt.memo(hS);function hS({routes:s,future:t,state:n,unstable_onError:a}){return e_(s,void 0,n,a,t)}function os(s){an(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function dS({basename:s="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:c=!1}){an(!yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=s.replace(/^\/*/,"/"),h=dt.useMemo(()=>({basename:u,navigator:o,static:c,future:{}}),[u,o,c]);typeof n=="string"&&(n=js(n));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=n,S=dt.useMemo(()=>{let E=Ta(m,u);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:v},navigationType:a}},[u,m,p,g,x,v,a]);return Si(S!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:dt.createElement(ki.Provider,{value:h},dt.createElement(_l.Provider,{children:t,value:S}))}function pS({children:s,location:t}){return tS(Sd(s),t)}function Sd(s,t=[]){let n=[];return dt.Children.forEach(s,(a,o)=>{if(!dt.isValidElement(a))return;let c=[...t,o];if(a.type===dt.Fragment){n.push.apply(n,Sd(a.props.children,c));return}an(a.type===os,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),an(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=Sd(a.props.children,c)),n.push(u)}),n}var su="get",ru="application/x-www-form-urlencoded";function _u(s){return s!=null&&typeof s.tagName=="string"}function mS(s){return _u(s)&&s.tagName.toLowerCase()==="button"}function xS(s){return _u(s)&&s.tagName.toLowerCase()==="form"}function gS(s){return _u(s)&&s.tagName.toLowerCase()==="input"}function vS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function _S(s,t){return s.button===0&&(!t||t==="_self")&&!vS(s)}var Oc=null;function yS(){if(Oc===null)try{new FormData(document.createElement("form"),0),Oc=!1}catch{Oc=!0}return Oc}var bS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ih(s){return s!=null&&!bS.has(s)?(Si(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ru}"`),null):s}function SS(s,t){let n,a,o,c,u;if(xS(s)){let h=s.getAttribute("action");a=h?Ta(h,t):null,n=s.getAttribute("method")||su,o=Ih(s.getAttribute("enctype"))||ru,c=new FormData(s)}else if(mS(s)||gS(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(a=m?Ta(m,t):null,n=s.getAttribute("formmethod")||h.getAttribute("method")||su,o=Ih(s.getAttribute("formenctype"))||Ih(h.getAttribute("enctype"))||ru,c=new FormData(h,s),!yS()){let{name:p,type:g,value:x}=s;if(g==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,x)}}else{if(_u(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=su,a=null,o=ru,u=s}return c&&o==="text/plain"&&(u=c,c=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function MS(s,t,n){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a.pathname==="/"?a.pathname=`_root.${n}`:t&&Ta(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function ES(s,t){if(s.id in t)return t[s.id];try{let n=await import(s.module);return t[s.id]=n,n}catch(n){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function TS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function AS(s,t,n){let a=await Promise.all(s.map(async o=>{let c=t.routes[o.route.id];if(c){let u=await ES(c,n);return u.links?u.links():[]}return[]}));return NS(a.flat(1).filter(TS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Ug(s,t,n,a,o,c){let u=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,h=(m,p)=>{var g;return n[p].pathname!==m.pathname||((g=n[p].route.path)==null?void 0:g.endsWith("*"))&&n[p].params["*"]!==m.params["*"]};return c==="assets"?t.filter((m,p)=>u(m,p)||h(m,p)):c==="data"?t.filter((m,p)=>{var x;let g=a.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(u(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=n[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function wS(s,t,{includeHydrateFallback:n}={}){return RS(s.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function RS(s){return[...new Set(s)]}function CS(s){let t={},n=Object.keys(s).sort();for(let a of n)t[a]=s[a];return t}function NS(s,t){let n=new Set;return new Set(t),s.reduce((a,o)=>{let c=JSON.stringify(CS(o));return n.has(c)||(n.add(c),a.push({key:c,link:o})),a},[])}function i_(){let s=dt.useContext(Zr);return bp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function DS(){let s=dt.useContext(vu);return bp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Sp=dt.createContext(void 0);Sp.displayName="FrameworkContext";function a_(){let s=dt.useContext(Sp);return bp(s,"You must render this element inside a <HydratedRouter> element"),s}function LS(s,t){let n=dt.useContext(Sp),[a,o]=dt.useState(!1),[c,u]=dt.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=t,v=dt.useRef(null);dt.useEffect(()=>{if(s==="render"&&u(!0),s==="viewport"){let A=y=>{y.forEach(z=>{u(z.isIntersecting)})},M=new IntersectionObserver(A,{threshold:.5});return v.current&&M.observe(v.current),()=>{M.disconnect()}}},[s]),dt.useEffect(()=>{if(a){let A=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(A)}}},[a]);let S=()=>{o(!0)},E=()=>{o(!1),u(!1)};return n?s!=="intent"?[c,v,{}]:[c,v,{onFocus:Ko(h,S),onBlur:Ko(m,E),onMouseEnter:Ko(p,S),onMouseLeave:Ko(g,E),onTouchStart:Ko(x,S)}]:[!1,v,{}]}function Ko(s,t){return n=>{s&&s(n),n.defaultPrevented||t(n)}}function US({page:s,...t}){let{router:n}=i_(),a=dt.useMemo(()=>Wv(n.routes,s,n.basename),[n.routes,s,n.basename]);return a?dt.createElement(PS,{page:s,matches:a,...t}):null}function OS(s){let{manifest:t,routeModules:n}=a_(),[a,o]=dt.useState([]);return dt.useEffect(()=>{let c=!1;return AS(s,t,n).then(u=>{c||o(u)}),()=>{c=!0}},[s,t,n]),a}function PS({page:s,matches:t,...n}){let a=Ra(),{manifest:o,routeModules:c}=a_(),{basename:u}=i_(),{loaderData:h,matches:m}=DS(),p=dt.useMemo(()=>Ug(s,t,m,o,a,"data"),[s,t,m,o,a]),g=dt.useMemo(()=>Ug(s,t,m,o,a,"assets"),[s,t,m,o,a]),x=dt.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let E=new Set,A=!1;if(t.forEach(y=>{var R;let z=o.routes[y.route.id];!z||!z.hasLoader||(!p.some(O=>O.route.id===y.route.id)&&y.route.id in h&&((R=c[y.route.id])!=null&&R.shouldRevalidate)||z.hasClientLoader?A=!0:E.add(y.route.id))}),E.size===0)return[];let M=MS(s,u,"data");return A&&E.size>0&&M.searchParams.set("_routes",t.filter(y=>E.has(y.route.id)).map(y=>y.route.id).join(",")),[M.pathname+M.search]},[u,h,a,o,p,t,s,c]),v=dt.useMemo(()=>wS(g,o),[g,o]),S=OS(g);return dt.createElement(dt.Fragment,null,x.map(E=>dt.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),v.map(E=>dt.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),S.map(({key:E,link:A})=>dt.createElement("link",{key:E,nonce:n.nonce,...A})))}function zS(...s){return t=>{s.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var s_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{s_&&(window.__reactRouterVersion="7.9.6")}catch{}function FS({basename:s,children:t,window:n}){let a=dt.useRef();a.current==null&&(a.current=M1({window:n,v5Compat:!0}));let o=a.current,[c,u]=dt.useState({action:o.action,location:o.location}),h=dt.useCallback(m=>{dt.startTransition(()=>u(m))},[u]);return dt.useLayoutEffect(()=>o.listen(h),[o,h]),dt.createElement(dS,{basename:s,children:t,location:c.location,navigationType:c.action,navigator:o})}var r_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bn=dt.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:c,replace:u,state:h,target:m,to:p,preventScrollReset:g,viewTransition:x,...v},S){let{basename:E}=dt.useContext(ki),A=typeof p=="string"&&r_.test(p),M,y=!1;if(typeof p=="string"&&A&&(M=p,s_))try{let D=new URL(window.location.href),N=p.startsWith("//")?new URL(D.protocol+p):new URL(p),G=Ta(N.pathname,E);N.origin===D.origin&&G!=null?p=G+N.search+N.hash:y=!0}catch{Si(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let z=Q1(p,{relative:o}),[R,O,B]=LS(a,v),P=VS(p,{replace:u,state:h,target:m,preventScrollReset:g,relative:o,viewTransition:x});function I(D){t&&t(D),D.defaultPrevented||P(D)}let Z=dt.createElement("a",{...v,...B,href:M||z,onClick:y||c?t:I,ref:zS(S,O),target:m,"data-discover":!A&&n==="render"?"true":void 0});return R&&!A?dt.createElement(dt.Fragment,null,Z,dt.createElement(US,{page:z})):Z});bn.displayName="Link";var IS=dt.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:c,to:u,viewTransition:h,children:m,...p},g){let x=bl(u,{relative:p.relative}),v=Ra(),S=dt.useContext(vu),{navigator:E,basename:A}=dt.useContext(ki),M=S!=null&&WS(x)&&h===!0,y=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,z=v.pathname,R=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(z=z.toLowerCase(),R=R?R.toLowerCase():null,y=y.toLowerCase()),R&&A&&(R=Ta(R,A)||R);const O=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let B=z===y||!o&&z.startsWith(y)&&z.charAt(O)==="/",P=R!=null&&(R===y||!o&&R.startsWith(y)&&R.charAt(y.length)==="/"),I={isActive:B,isPending:P,isTransitioning:M},Z=B?t:void 0,D;typeof a=="function"?D=a(I):D=[a,B?"active":null,P?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(I):c;return dt.createElement(bn,{...p,"aria-current":Z,className:D,ref:g,style:N,to:u,viewTransition:h},typeof m=="function"?m(I):m)});IS.displayName="NavLink";var BS=dt.forwardRef(({discover:s="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:c,method:u=su,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...v},S)=>{let E=jS(),A=XS(h,{relative:p}),M=u.toLowerCase()==="get"?"get":"post",y=typeof h=="string"&&r_.test(h),z=R=>{if(m&&m(R),R.defaultPrevented)return;R.preventDefault();let O=R.nativeEvent.submitter,B=(O==null?void 0:O.getAttribute("formmethod"))||u;E(O||R.currentTarget,{fetcherKey:t,method:B,navigate:n,replace:o,state:c,relative:p,preventScrollReset:g,viewTransition:x})};return dt.createElement("form",{ref:S,method:M,action:A,onSubmit:a?m:z,...v,"data-discover":!y&&s==="render"?"true":void 0})});BS.displayName="Form";function HS(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function o_(s){let t=dt.useContext(Zr);return an(t,HS(s)),t}function VS(s,{target:t,replace:n,state:a,preventScrollReset:o,relative:c,viewTransition:u}={}){let h=J1(),m=Ra(),p=bl(s,{relative:c});return dt.useCallback(g=>{if(_S(g,t)){g.preventDefault();let x=n!==void 0?n:ul(m)===ul(p);h(s,{replace:x,state:a,preventScrollReset:o,relative:c,viewTransition:u})}},[m,h,p,n,a,t,s,o,c,u])}var GS=0,kS=()=>`__${String(++GS)}__`;function jS(){let{router:s}=o_("useSubmit"),{basename:t}=dt.useContext(ki),n=cS();return dt.useCallback(async(a,o={})=>{let{action:c,method:u,encType:h,formData:m,body:p}=SS(a,t);if(o.navigate===!1){let g=o.fetcherKey||kS();await s.fetch(g,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||h,flushSync:o.flushSync})}else await s.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[s,t,n])}function XS(s,{relative:t}={}){let{basename:n}=dt.useContext(ki),a=dt.useContext(wa);an(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...bl(s||".",{relative:t})},u=Ra();if(s==null){c.search=u.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:ba([n,c.pathname])),ul(c)}function WS(s,{relative:t}={}){let n=dt.useContext(Jv);an(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=o_("useViewTransitionState"),o=bl(s,{relative:t});if(!n.isTransitioning)return!1;let c=Ta(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=Ta(n.nextLocation.pathname,a)||n.nextLocation.pathname;return pu(o.pathname,u)!=null||pu(o.pathname,c)!=null}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),YS=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase()),Og=s=>{const t=YS(s);return t.charAt(0).toUpperCase()+t.slice(1)},l_=(...s)=>s.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim(),ZS=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=dt.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...h},m)=>dt.createElement("svg",{ref:m,...KS,width:t,height:t,stroke:s,strokeWidth:a?Number(n)*24/Number(t):n,className:l_("lucide",o),...!c&&!ZS(h)&&{"aria-hidden":"true"},...h},[...u.map(([p,g])=>dt.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(s,t)=>{const n=dt.forwardRef(({className:a,...o},c)=>dt.createElement(QS,{ref:c,iconNode:t,className:l_(`lucide-${qS(Og(s))}`,`lucide-${s}`,a),...o}));return n.displayName=Og(s),n};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],$S=en("arrow-right",JS);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],c_=en("bot",tM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],nM=en("briefcase",eM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],aM=en("calculator",iM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Md=en("check",sM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],oM=en("chevron-down",rM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Pg=en("circle-play",lM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],uM=en("clock",cM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],hM=en("cloud-upload",fM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],pM=en("cpu",dM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],xM=en("database",mM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],vM=en("file-text",gM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],yM=en("github",_M);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],SM=en("instagram",bM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],u_=en("linkedin",MM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],f_=en("mail",EM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],h_=en("map-pin",TM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],wM=en("menu",AM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],CM=en("message-square",RM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],DM=en("phone",NM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],d_=en("send",LM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],p_=en("twitter",UM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ed=en("x",OM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],m_=en("zap",PM),Li=({variant:s="primary",size:t="md",children:n,className:a="",...o})=>{const c="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed",u={primary:"bg-gradient-to-l from-primary to-indigo-600 hover:from-indigo-600 hover:to-primary text-white shadow-lg shadow-primary/25",secondary:"bg-surface hover:bg-slate-800 text-white border border-slate-700",outline:"border-2 border-primary text-primary hover:bg-primary/10"},h={sm:"px-3 py-1.5 text-sm",md:"px-6 py-2.5 text-base",lg:"px-8 py-3.5 text-lg"};return _.jsx("button",{className:`${c} ${u[s]} ${h[t]} ${a}`,...o,children:n})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="181",Hr={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zM=0,zg=1,FM=2,x_=1,IM=2,ga=3,hs=0,Kn=1,va=2,Sa=0,Vr=1,Fg=2,Ig=3,Bg=4,BM=5,Fs=100,HM=101,VM=102,GM=103,kM=104,jM=200,XM=201,WM=202,qM=203,Td=204,Ad=205,YM=206,ZM=207,KM=208,QM=209,JM=210,$M=211,t3=212,e3=213,n3=214,wd=0,Rd=1,Cd=2,kr=3,Nd=4,Dd=5,Ld=6,Ud=7,g_=0,i3=1,a3=2,fs=0,s3=1,v_=2,r3=3,o3=4,l3=5,c3=6,u3=7,__=300,jr=301,Xr=302,Od=303,Pd=304,yu=306,zd=1e3,_a=1001,Fd=1002,ci=1003,f3=1004,Pc=1005,yi=1006,Bh=1007,Bs=1008,Vi=1009,y_=1010,b_=1011,fl=1012,Ep=1013,Hs=1014,ya=1015,Kr=1016,Tp=1017,Ap=1018,hl=1020,S_=35902,M_=35899,E_=1021,T_=1022,Di=1023,dl=1026,pl=1027,A_=1028,wp=1029,Rp=1030,Cp=1031,Np=1033,ou=33776,lu=33777,cu=33778,uu=33779,Id=35840,Bd=35841,Hd=35842,Vd=35843,Gd=36196,kd=37492,jd=37496,Xd=37808,Wd=37809,qd=37810,Yd=37811,Zd=37812,Kd=37813,Qd=37814,Jd=37815,$d=37816,tp=37817,ep=37818,np=37819,ip=37820,ap=37821,sp=36492,rp=36494,op=36495,lp=36283,cp=36284,up=36285,fp=36286,h3=3200,d3=3201,w_=0,p3=1,cs="",_i="srgb",Wr="srgb-linear",mu="linear",Xe="srgb",Er=7680,Hg=519,m3=512,x3=513,g3=514,R_=515,v3=516,_3=517,y3=518,b3=519,Vg=35044,Gg="300 es",Bi=2e3,xu=2001;function C_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function gu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S3(){const s=gu("canvas");return s.style.display="block",s}const kg={};function jg(...s){const t="THREE."+s.shift();console.log(t,...s)}function pe(...s){const t="THREE."+s.shift();console.warn(t,...s)}function ln(...s){const t="THREE."+s.shift();console.error(t,...s)}function ml(...s){const t=s.join(" ");t in kg||(kg[t]=!0,pe(...s))}function M3(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Xs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=Math.PI/180,hp=180/Math.PI;function Qr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]).toLowerCase()}function be(s,t,n){return Math.max(t,Math.min(n,s))}function E3(s,t){return(s%t+t)%t}function Hh(s,t,n){return(1-n)*s+n*t}function Qo(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const T3={DEG2RAD:fu};class Ut{constructor(t=0,n=0){Ut.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],g=a[o+2],x=a[o+3],v=c[u+0],S=c[u+1],E=c[u+2],A=c[u+3];if(h<=0){t[n+0]=m,t[n+1]=p,t[n+2]=g,t[n+3]=x;return}if(h>=1){t[n+0]=v,t[n+1]=S,t[n+2]=E,t[n+3]=A;return}if(x!==A||m!==v||p!==S||g!==E){let M=m*v+p*S+g*E+x*A;M<0&&(v=-v,S=-S,E=-E,A=-A,M=-M);let y=1-h;if(M<.9995){const z=Math.acos(M),R=Math.sin(z);y=Math.sin(y*z)/R,h=Math.sin(h*z)/R,m=m*y+v*h,p=p*y+S*h,g=g*y+E*h,x=x*y+A*h}else{m=m*y+v*h,p=p*y+S*h,g=g*y+E*h,x=x*y+A*h;const z=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=z,p*=z,g*=z,x*=z}}t[n]=m,t[n+1]=p,t[n+2]=g,t[n+3]=x}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],g=a[o+3],x=c[u],v=c[u+1],S=c[u+2],E=c[u+3];return t[n]=h*E+g*x+m*S-p*v,t[n+1]=m*E+g*v+p*x-h*S,t[n+2]=p*E+g*S+h*v-m*x,t[n+3]=g*E-h*x-m*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(o/2),x=h(c/2),v=m(a/2),S=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*x+p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x-v*S*E;break;case"YXZ":this._x=v*g*x+p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x+v*S*E;break;case"ZXY":this._x=v*g*x-p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x-v*S*E;break;case"ZYX":this._x=v*g*x-p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x+v*S*E;break;case"YZX":this._x=v*g*x+p*S*E,this._y=p*S*x+v*g*E,this._z=p*g*E-v*S*x,this._w=p*g*x-v*S*E;break;case"XZY":this._x=v*g*x-p*S*E,this._y=p*S*x-v*g*E,this._z=p*g*E+v*S*x,this._w=p*g*x+v*S*E;break;default:pe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],g=n[6],x=n[10],v=a+h+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(a>h&&a>x){const S=2*Math.sqrt(1+a-h-x);this._w=(g-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(h>x){const S=2*Math.sqrt(1+h-a-x);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-a-h);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+o*p-c*m,this._y=o*g+u*m+c*h-a*p,this._z=c*g+u*p+a*m-o*h,this._w=u*g-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,n=0,a=0){X.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Xg.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Xg.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,m=t.w,p=2*(u*o-h*a),g=2*(h*n-c*o),x=2*(c*a-u*n);return this.x=n+m*p+u*x-h*g,this.y=a+m*g+h*p-c*x,this.z=o+m*x+c*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Vh.copy(this).projectOnVector(t),this.sub(Vh)}reflect(t){return this.sub(Vh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vh=new X,Xg=new Vs;class _e{constructor(t,n,a,o,c,u,h,m,p){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p)}set(t,n,a,o,c,u,h,m,p){const g=this.elements;return g[0]=t,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],g=a[4],x=a[7],v=a[2],S=a[5],E=a[8],A=o[0],M=o[3],y=o[6],z=o[1],R=o[4],O=o[7],B=o[2],P=o[5],I=o[8];return c[0]=u*A+h*z+m*B,c[3]=u*M+h*R+m*P,c[6]=u*y+h*O+m*I,c[1]=p*A+g*z+x*B,c[4]=p*M+g*R+x*P,c[7]=p*y+g*O+x*I,c[2]=v*A+S*z+E*B,c[5]=v*M+S*R+E*P,c[8]=v*y+S*O+E*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return n*u*g-n*h*p-a*c*g+a*h*m+o*c*p-o*u*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=g*u-h*p,v=h*m-g*c,S=p*c-u*m,E=n*x+a*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=x*A,t[1]=(o*p-g*a)*A,t[2]=(h*a-o*u)*A,t[3]=v*A,t[4]=(g*n-o*m)*A,t[5]=(o*c-h*n)*A,t[6]=S*A,t[7]=(a*m-p*n)*A,t[8]=(u*n-a*c)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+t,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Gh.makeScale(t,n)),this}rotate(t){return this.premultiply(Gh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Gh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gh=new _e,Wg=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qg=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A3(){const s={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xe&&(o.r=Ma(o.r),o.g=Ma(o.g),o.b=Ma(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xe&&(o.r=Gr(o.r),o.g=Gr(o.g),o.b=Gr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===cs?mu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ml("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ml("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Wr]:{primaries:t,whitePoint:a,transfer:mu,toXYZ:Wg,fromXYZ:qg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:a,transfer:Xe,toXYZ:Wg,fromXYZ:qg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),s}const Pe=A3();function Ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Tr;class w3{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Tr===void 0&&(Tr=gu("canvas")),Tr.width=t.width,Tr.height=t.height;const o=Tr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Tr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=gu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ma(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ma(n[a]/255)*255):n[a]=Ma(n[a]);return{data:n,width:t.width,height:t.height}}else return pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let R3=0;class Dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:R3++}),this.uuid=Qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(kh(o[u].image)):c.push(kh(o[u]))}else c=kh(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function kh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?w3.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(pe("Texture: Unable to serialize Texture."),{})}let C3=0;const jh=new X;class Vn extends Xs{constructor(t=Vn.DEFAULT_IMAGE,n=Vn.DEFAULT_MAPPING,a=_a,o=_a,c=yi,u=Bs,h=Di,m=Vi,p=Vn.DEFAULT_ANISOTROPY,g=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C3++}),this.uuid=Qr(),this.name="",this.source=new Dp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jh).x}get height(){return this.source.getSize(jh).y}get depth(){return this.source.getSize(jh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pe(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==__)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zd:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case Fd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zd:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case Fd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=__;Vn.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,n=0,a=0,o=1){qe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,p=m[0],g=m[4],x=m[8],v=m[1],S=m[5],E=m[9],A=m[2],M=m[6],y=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(p+1)/2,O=(S+1)/2,B=(y+1)/2,P=(g+v)/4,I=(x+A)/4,Z=(E+M)/4;return R>O&&R>B?R<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(R),o=P/a,c=I/a):O>B?O<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(O),a=P/o,c=Z/o):B<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(B),a=I/c,o=Z/c),this.set(a,o,c,n),this}let z=Math.sqrt((M-E)*(M-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(z)<.001&&(z=1),this.x=(M-E)/z,this.y=(x-A)/z,this.z=(v-g)/z,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this.w=be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this.w=be(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class N3 extends Xs{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new qe(0,0,t,n),this.scissorTest=!1,this.viewport=new qe(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new Vn(o);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Dp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gs extends N3{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class N_ extends Vn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class D3 extends Vn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jr{constructor(t=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,wi):wi.fromBufferAttribute(c,u),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),zc.copy(a.boundingBox)),zc.applyMatrix4(t.matrixWorld),this.union(zc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jo),Fc.subVectors(this.max,Jo),Ar.subVectors(t.a,Jo),wr.subVectors(t.b,Jo),Rr.subVectors(t.c,Jo),es.subVectors(wr,Ar),ns.subVectors(Rr,wr),Ds.subVectors(Ar,Rr);let n=[0,-es.z,es.y,0,-ns.z,ns.y,0,-Ds.z,Ds.y,es.z,0,-es.x,ns.z,0,-ns.x,Ds.z,0,-Ds.x,-es.y,es.x,0,-ns.y,ns.x,0,-Ds.y,Ds.x,0];return!Xh(n,Ar,wr,Rr,Fc)||(n=[1,0,0,0,1,0,0,0,1],!Xh(n,Ar,wr,Rr,Fc))?!1:(Ic.crossVectors(es,ns),n=[Ic.x,Ic.y,Ic.z],Xh(n,Ar,wr,Rr,Fc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fa=[new X,new X,new X,new X,new X,new X,new X,new X],wi=new X,zc=new Jr,Ar=new X,wr=new X,Rr=new X,es=new X,ns=new X,Ds=new X,Jo=new X,Fc=new X,Ic=new X,Ls=new X;function Xh(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Ls.fromArray(s,c);const h=o.x*Math.abs(Ls.x)+o.y*Math.abs(Ls.y)+o.z*Math.abs(Ls.z),m=t.dot(Ls),p=n.dot(Ls),g=a.dot(Ls);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const L3=new Jr,$o=new X,Wh=new X;class Lp{constructor(t=new X,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):L3.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$o.subVectors(t,this.center);const n=$o.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector($o,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($o.copy(t.center).add(Wh)),this.expandByPoint($o.copy(t.center).sub(Wh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ha=new X,qh=new X,Bc=new X,is=new X,Yh=new X,Hc=new X,Zh=new X;class D_{constructor(t=new X,n=new X(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ha)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ha.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ha.copy(this.origin).addScaledVector(this.direction,n),ha.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){qh.copy(t).add(n).multiplyScalar(.5),Bc.copy(n).sub(t).normalize(),is.copy(this.origin).sub(qh);const c=t.distanceTo(n)*.5,u=-this.direction.dot(Bc),h=is.dot(this.direction),m=-is.dot(Bc),p=is.lengthSq(),g=Math.abs(1-u*u);let x,v,S,E;if(g>0)if(x=u*m-h,v=u*h-m,E=c*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,S=x*(x+u*v+2*h)+v*(u*x+v+2*m)+p}else v=c,x=Math.max(0,-(u*v+h)),S=-x*x+v*(v+2*m)+p;else v=-c,x=Math.max(0,-(u*v+h)),S=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-u*c+h)),v=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+p):(x=Math.max(0,-(u*c+h)),v=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+v*(v+2*m)+p);else v=u>0?-c:c,x=Math.max(0,-(u*v+h)),S=-x*x+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(qh).addScaledVector(Bc,v),S}intersectSphere(t,n){ha.subVectors(t.center,this.origin);const a=ha.dot(this.direction),o=ha.dot(ha)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),x>=0?(h=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(h=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ha)!==null}intersectTriangle(t,n,a,o,c){Yh.subVectors(n,t),Hc.subVectors(a,t),Zh.crossVectors(Yh,Hc);let u=this.direction.dot(Zh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;is.subVectors(this.origin,t);const m=h*this.direction.dot(Hc.crossVectors(is,Hc));if(m<0)return null;const p=h*this.direction.dot(Yh.cross(is));if(p<0||m+p>u)return null;const g=-h*is.dot(Zh);return g<0?null:this.at(g/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(t,n,a,o,c,u,h,m,p,g,x,v,S,E,A,M){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p,g,x,v,S,E,A,M)}set(t,n,a,o,c,u,h,m,p,g,x,v,S,E,A,M){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=p,y[6]=g,y[10]=x,y[14]=v,y[3]=S,y[7]=E,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/Cr.setFromMatrixColumn(t,0).length(),c=1/Cr.setFromMatrixColumn(t,1).length(),u=1/Cr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const v=u*g,S=u*x,E=h*g,A=h*x;n[0]=m*g,n[4]=-m*x,n[8]=p,n[1]=S+E*p,n[5]=v-A*p,n[9]=-h*m,n[2]=A-v*p,n[6]=E+S*p,n[10]=u*m}else if(t.order==="YXZ"){const v=m*g,S=m*x,E=p*g,A=p*x;n[0]=v+A*h,n[4]=E*h-S,n[8]=u*p,n[1]=u*x,n[5]=u*g,n[9]=-h,n[2]=S*h-E,n[6]=A+v*h,n[10]=u*m}else if(t.order==="ZXY"){const v=m*g,S=m*x,E=p*g,A=p*x;n[0]=v-A*h,n[4]=-u*x,n[8]=E+S*h,n[1]=S+E*h,n[5]=u*g,n[9]=A-v*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const v=u*g,S=u*x,E=h*g,A=h*x;n[0]=m*g,n[4]=E*p-S,n[8]=v*p+A,n[1]=m*x,n[5]=A*p+v,n[9]=S*p-E,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,S=u*p,E=h*m,A=h*p;n[0]=m*g,n[4]=A-v*x,n[8]=E*x+S,n[1]=x,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=S*x+E,n[10]=v-A*x}else if(t.order==="XZY"){const v=u*m,S=u*p,E=h*m,A=h*p;n[0]=m*g,n[4]=-x,n[8]=p*g,n[1]=v*x+A,n[5]=u*g,n[9]=S*x-E,n[2]=E*x-S,n[6]=h*g,n[10]=A*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(U3,t,O3)}lookAt(t,n,a){const o=this.elements;return ri.subVectors(t,n),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),as.crossVectors(a,ri),as.lengthSq()===0&&(Math.abs(a.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),as.crossVectors(a,ri)),as.normalize(),Vc.crossVectors(ri,as),o[0]=as.x,o[4]=Vc.x,o[8]=ri.x,o[1]=as.y,o[5]=Vc.y,o[9]=ri.y,o[2]=as.z,o[6]=Vc.z,o[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],g=a[1],x=a[5],v=a[9],S=a[13],E=a[2],A=a[6],M=a[10],y=a[14],z=a[3],R=a[7],O=a[11],B=a[15],P=o[0],I=o[4],Z=o[8],D=o[12],N=o[1],G=o[5],$=o[9],ot=o[13],xt=o[2],ut=o[6],H=o[10],Y=o[14],K=o[3],vt=o[7],bt=o[11],F=o[15];return c[0]=u*P+h*N+m*xt+p*K,c[4]=u*I+h*G+m*ut+p*vt,c[8]=u*Z+h*$+m*H+p*bt,c[12]=u*D+h*ot+m*Y+p*F,c[1]=g*P+x*N+v*xt+S*K,c[5]=g*I+x*G+v*ut+S*vt,c[9]=g*Z+x*$+v*H+S*bt,c[13]=g*D+x*ot+v*Y+S*F,c[2]=E*P+A*N+M*xt+y*K,c[6]=E*I+A*G+M*ut+y*vt,c[10]=E*Z+A*$+M*H+y*bt,c[14]=E*D+A*ot+M*Y+y*F,c[3]=z*P+R*N+O*xt+B*K,c[7]=z*I+R*G+O*ut+B*vt,c[11]=z*Z+R*$+O*H+B*bt,c[15]=z*D+R*ot+O*Y+B*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],m=t[9],p=t[13],g=t[2],x=t[6],v=t[10],S=t[14],E=t[3],A=t[7],M=t[11],y=t[15];return E*(+c*m*x-o*p*x-c*h*v+a*p*v+o*h*S-a*m*S)+A*(+n*m*S-n*p*v+c*u*v-o*u*S+o*p*g-c*m*g)+M*(+n*p*x-n*h*S-c*u*x+a*u*S+c*h*g-a*p*g)+y*(-o*h*g-n*m*x+n*h*v+o*u*x-a*u*v+a*m*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=t[9],v=t[10],S=t[11],E=t[12],A=t[13],M=t[14],y=t[15],z=x*M*p-A*v*p+A*m*S-h*M*S-x*m*y+h*v*y,R=E*v*p-g*M*p-E*m*S+u*M*S+g*m*y-u*v*y,O=g*A*p-E*x*p+E*h*S-u*A*S-g*h*y+u*x*y,B=E*x*m-g*A*m-E*h*v+u*A*v+g*h*M-u*x*M,P=n*z+a*R+o*O+c*B;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return t[0]=z*I,t[1]=(A*v*c-x*M*c-A*o*S+a*M*S+x*o*y-a*v*y)*I,t[2]=(h*M*c-A*m*c+A*o*p-a*M*p-h*o*y+a*m*y)*I,t[3]=(x*m*c-h*v*c-x*o*p+a*v*p+h*o*S-a*m*S)*I,t[4]=R*I,t[5]=(g*M*c-E*v*c+E*o*S-n*M*S-g*o*y+n*v*y)*I,t[6]=(E*m*c-u*M*c-E*o*p+n*M*p+u*o*y-n*m*y)*I,t[7]=(u*v*c-g*m*c+g*o*p-n*v*p-u*o*S+n*m*S)*I,t[8]=O*I,t[9]=(E*x*c-g*A*c-E*a*S+n*A*S+g*a*y-n*x*y)*I,t[10]=(u*A*c-E*h*c+E*a*p-n*A*p-u*a*y+n*h*y)*I,t[11]=(g*h*c-u*x*c-g*a*p+n*x*p+u*a*S-n*h*S)*I,t[12]=B*I,t[13]=(g*A*o-E*x*o+E*a*v-n*A*v-g*a*M+n*x*M)*I,t[14]=(E*h*o-u*A*o-E*a*m+n*A*m+u*a*M-n*h*M)*I,t[15]=(u*x*o-g*h*o+g*a*m-n*x*m-u*a*v+n*h*v)*I,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,m=t.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+a,g*m-o*u,0,p*m-o*h,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,g=u+u,x=h+h,v=c*p,S=c*g,E=c*x,A=u*g,M=u*x,y=h*x,z=m*p,R=m*g,O=m*x,B=a.x,P=a.y,I=a.z;return o[0]=(1-(A+y))*B,o[1]=(S+O)*B,o[2]=(E-R)*B,o[3]=0,o[4]=(S-O)*P,o[5]=(1-(v+y))*P,o[6]=(M+z)*P,o[7]=0,o[8]=(E+R)*I,o[9]=(M-z)*I,o[10]=(1-(v+A))*I,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=Cr.set(o[0],o[1],o[2]).length();const u=Cr.set(o[4],o[5],o[6]).length(),h=Cr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Ri.copy(this);const p=1/c,g=1/u,x=1/h;return Ri.elements[0]*=p,Ri.elements[1]*=p,Ri.elements[2]*=p,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=x,Ri.elements[9]*=x,Ri.elements[10]*=x,n.setFromRotationMatrix(Ri),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,o,c,u,h=Bi,m=!1){const p=this.elements,g=2*c/(n-t),x=2*c/(a-o),v=(n+t)/(n-t),S=(a+o)/(a-o);let E,A;if(m)E=c/(u-c),A=u*c/(u-c);else if(h===Bi)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===xu)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=Bi,m=!1){const p=this.elements,g=2/(n-t),x=2/(a-o),v=-(n+t)/(n-t),S=-(a+o)/(a-o);let E,A;if(m)E=1/(u-c),A=u/(u-c);else if(h===Bi)E=-2/(u-c),A=-(u+c)/(u-c);else if(h===xu)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Cr=new X,Ri=new sn,U3=new X(0,0,0),O3=new X(1,1,1),as=new X,Vc=new X,ri=new X,Yg=new sn,Zg=new Vs;class Gi{constructor(t=0,n=0,a=0,o=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],g=o[9],x=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Yg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yg,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Zg.setFromEuler(this),this.setFromQuaternion(Zg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class L_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let P3=0;const Kg=new X,Nr=new Vs,da=new sn,Gc=new X,tl=new X,z3=new X,F3=new Vs,Qg=new X(1,0,0),Jg=new X(0,1,0),$g=new X(0,0,1),tv={type:"added"},I3={type:"removed"},Dr={type:"childadded",child:null},Kh={type:"childremoved",child:null};class In extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P3++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const t=new X,n=new Gi,a=new Vs,o=new X(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new _e}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(Qg,t)}rotateY(t){return this.rotateOnAxis(Jg,t)}rotateZ(t){return this.rotateOnAxis($g,t)}translateOnAxis(t,n){return Kg.copy(t).applyQuaternion(this.quaternion),this.position.add(Kg.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Qg,t)}translateY(t){return this.translateOnAxis(Jg,t)}translateZ(t){return this.translateOnAxis($g,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Gc.copy(t):Gc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(tl,Gc,this.up):da.lookAt(Gc,tl,this.up),this.quaternion.setFromRotationMatrix(da),o&&(da.extractRotation(o.matrixWorld),Nr.setFromRotationMatrix(da),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ln("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tv),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):ln("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(I3),Kh.child=t,this.dispatchEvent(Kh),Kh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tv),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,t,z3),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,F3,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),p=u(t.textures),g=u(t.images),x=u(t.shapes),v=u(t.skeletons),S=u(t.animations),E=u(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),x.length>0&&(a.shapes=x),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}In.DEFAULT_UP=new X(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new X,pa=new X,Qh=new X,ma=new X,Lr=new X,Ur=new X,ev=new X,Jh=new X,$h=new X,td=new X,ed=new qe,nd=new qe,id=new qe;class Ni{constructor(t=new X,n=new X,a=new X){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Ci.subVectors(t,n),o.cross(Ci);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Ci.subVectors(o,n),pa.subVectors(a,n),Qh.subVectors(t,n);const u=Ci.dot(Ci),h=Ci.dot(pa),m=Ci.dot(Qh),p=pa.dot(pa),g=pa.dot(Qh),x=u*p-h*h;if(x===0)return c.set(0,0,0),null;const v=1/x,S=(p*m-h*g)*v,E=(u*g-h*m)*v;return c.set(1-S-E,E,S)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,ma)===null?!1:ma.x>=0&&ma.y>=0&&ma.x+ma.y<=1}static getInterpolation(t,n,a,o,c,u,h,m){return this.getBarycoord(t,n,a,o,ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ma.x),m.addScaledVector(u,ma.y),m.addScaledVector(h,ma.z),m)}static getInterpolatedAttribute(t,n,a,o,c,u){return ed.setScalar(0),nd.setScalar(0),id.setScalar(0),ed.fromBufferAttribute(t,n),nd.fromBufferAttribute(t,a),id.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(ed,c.x),u.addScaledVector(nd,c.y),u.addScaledVector(id,c.z),u}static isFrontFacing(t,n,a,o){return Ci.subVectors(a,n),pa.subVectors(t,n),Ci.cross(pa).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),pa.subVectors(this.a,this.b),Ci.cross(pa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ni.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Ni.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Lr.subVectors(o,a),Ur.subVectors(c,a),Jh.subVectors(t,a);const m=Lr.dot(Jh),p=Ur.dot(Jh);if(m<=0&&p<=0)return n.copy(a);$h.subVectors(t,o);const g=Lr.dot($h),x=Ur.dot($h);if(g>=0&&x<=g)return n.copy(o);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(Lr,u);td.subVectors(t,c);const S=Lr.dot(td),E=Ur.dot(td);if(E>=0&&S<=E)return n.copy(c);const A=S*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(Ur,h);const M=g*E-S*x;if(M<=0&&x-g>=0&&S-E>=0)return ev.subVectors(c,o),h=(x-g)/(x-g+(S-E)),n.copy(o).addScaledVector(ev,h);const y=1/(M+A+v);return u=A*y,h=v*y,n.copy(a).addScaledVector(Lr,u).addScaledVector(Ur,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const U_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},kc={h:0,s:0,l:0};function ad(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class Ce{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Pe.workingColorSpace){return this.r=t,this.g=n,this.b=a,Pe.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Pe.workingColorSpace){if(t=E3(t,1),n=be(n,0,1),a=be(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=ad(u,c,t+1/3),this.g=ad(u,c,t),this.b=ad(u,c,t-1/3)}return Pe.colorSpaceToWorking(this,o),this}setStyle(t,n=_i){function a(c){c!==void 0&&parseFloat(c)<1&&pe("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:pe("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);pe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=_i){const a=U_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):pe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Pe.workingToColorSpace(Fn.copy(this),t),Math.round(be(Fn.r*255,0,255))*65536+Math.round(be(Fn.g*255,0,255))*256+Math.round(be(Fn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Pe.workingColorSpace){Pe.workingToColorSpace(Fn.copy(this),n);const a=Fn.r,o=Fn.g,c=Fn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const g=(h+u)/2;if(h===u)m=0,p=0;else{const x=u-h;switch(p=g<=.5?x/(u+h):x/(2-u-h),u){case a:m=(o-c)/x+(o<c?6:0);break;case o:m=(c-a)/x+2;break;case c:m=(a-o)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,n=Pe.workingColorSpace){return Pe.workingToColorSpace(Fn.copy(this),n),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=_i){Pe.workingToColorSpace(Fn.copy(this),t);const n=Fn.r,a=Fn.g,o=Fn.b;return t!==_i?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(ss),this.setHSL(ss.h+t,ss.s+n,ss.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(ss),t.getHSL(kc);const a=Hh(ss.h,kc.h,n),o=Hh(ss.s,kc.s,n),c=Hh(ss.l,kc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ce;Ce.NAMES=U_;let B3=0;class $r extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:B3++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=Vr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){pe(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(a.blending=this.blending),this.side!==hs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Td&&(a.blendSrc=this.blendSrc),this.blendDst!==Ad&&(a.blendDst=this.blendDst),this.blendEquation!==Fs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==kr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hg&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class O_ extends $r{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new X,jc=new Ut;let H3=0;class Hi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H3++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Vg,this.updateRanges=[],this.gpuType=ya,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)jc.fromBufferAttribute(this,n),jc.applyMatrix3(t),this.setXY(n,jc.x,jc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Qo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Yn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Qo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Qo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Qo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Qo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),a=Yn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),a=Yn(a,this.array),o=Yn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Yn(n,this.array),a=Yn(a,this.array),o=Yn(o,this.array),c=Yn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vg&&(t.usage=this.usage),t}}class P_ extends Hi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class z_ extends Hi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ea extends Hi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let V3=0;const vi=new sn,sd=new In,Or=new X,oi=new Jr,el=new Jr,Rn=new X;class Ca extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:V3++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(C_(t)?z_:P_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new _e().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vi.makeRotationFromQuaternion(t),this.applyMatrix4(vi),this}rotateX(t){return vi.makeRotationX(t),this.applyMatrix4(vi),this}rotateY(t){return vi.makeRotationY(t),this.applyMatrix4(vi),this}rotateZ(t){return vi.makeRotationZ(t),this.applyMatrix4(vi),this}translate(t,n,a){return vi.makeTranslation(t,n,a),this.applyMatrix4(vi),this}scale(t,n,a){return vi.makeScale(t,n,a),this.applyMatrix4(vi),this}lookAt(t){return sd.lookAt(t),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ea(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ln("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ln('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lp);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ln("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const a=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];el.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(oi.min,el.min),oi.expandByPoint(Rn),Rn.addVectors(oi.max,el.max),oi.expandByPoint(Rn)):(oi.expandByPoint(el.min),oi.expandByPoint(el.max))}oi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Rn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Rn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Rn.fromBufferAttribute(h,p),m&&(Or.fromBufferAttribute(t,p),Rn.add(Or)),o=Math.max(o,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&ln('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ln("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<a.count;Z++)h[Z]=new X,m[Z]=new X;const p=new X,g=new X,x=new X,v=new Ut,S=new Ut,E=new Ut,A=new X,M=new X;function y(Z,D,N){p.fromBufferAttribute(a,Z),g.fromBufferAttribute(a,D),x.fromBufferAttribute(a,N),v.fromBufferAttribute(c,Z),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,N),g.sub(p),x.sub(p),S.sub(v),E.sub(v);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(G),M.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),h[Z].add(A),h[D].add(A),h[N].add(A),m[Z].add(M),m[D].add(M),m[N].add(M))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let Z=0,D=z.length;Z<D;++Z){const N=z[Z],G=N.start,$=N.count;for(let ot=G,xt=G+$;ot<xt;ot+=3)y(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const R=new X,O=new X,B=new X,P=new X;function I(Z){B.fromBufferAttribute(o,Z),P.copy(B);const D=h[Z];R.copy(D),R.sub(B.multiplyScalar(B.dot(D))).normalize(),O.crossVectors(P,D);const G=O.dot(m[Z])<0?-1:1;u.setXYZW(Z,R.x,R.y,R.z,G)}for(let Z=0,D=z.length;Z<D;++Z){const N=z[Z],G=N.start,$=N.count;for(let ot=G,xt=G+$;ot<xt;ot+=3)I(t.getX(ot+0)),I(t.getX(ot+1)),I(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Hi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const o=new X,c=new X,u=new X,h=new X,m=new X,p=new X,g=new X,x=new X;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),A=t.getX(v+1),M=t.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,M),h.add(g),m.add(g),p.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Rn.fromBufferAttribute(t,n),Rn.normalize(),t.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,x=h.normalized,v=new p.constructor(m.length*g);let S=0,E=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?S=m[A]*h.data.stride+h.offset:S=m[A]*g;for(let y=0;y<g;y++)v[E++]=p[S++]}return new Hi(v,g,x)}if(this.index===null)return pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ca,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,x=p.length;g<x;g++){const v=p[g],S=t(v,a);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const S=p[x];g.push(S.toJSON(t.data))}g.length>0&&(o[m]=g,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let v=0,S=x.length;v<S;v++)g.push(x[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nv=new sn,Us=new D_,Xc=new Lp,iv=new X,Wc=new X,qc=new X,Yc=new X,rd=new X,Zc=new X,av=new X,Kc=new X;class bi extends In{constructor(t=new Ca,n=new O_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],x=c[m];g!==0&&(rd.fromBufferAttribute(x,t),u?Zc.addScaledVector(rd,g):Zc.addScaledVector(rd.sub(n),g))}n.add(Zc)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Xc.copy(a.boundingSphere),Xc.applyMatrix4(c),Us.copy(t.ray).recast(t.near),!(Xc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Xc,iv)===null||Us.origin.distanceToSquared(iv)>(t.far-t.near)**2))&&(nv.copy(c).invert(),Us.copy(t.ray).applyMatrix4(nv),!(a.boundingBox!==null&&Us.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Us)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const M=v[E],y=u[M.materialIndex],z=Math.max(M.start,S.start),R=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let O=z,B=R;O<B;O+=3){const P=h.getX(O),I=h.getX(O+1),Z=h.getX(O+2);o=Qc(this,y,t,a,p,g,x,P,I,Z),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),A=Math.min(h.count,S.start+S.count);for(let M=E,y=A;M<y;M+=3){const z=h.getX(M),R=h.getX(M+1),O=h.getX(M+2);o=Qc(this,u,t,a,p,g,x,z,R,O),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const M=v[E],y=u[M.materialIndex],z=Math.max(M.start,S.start),R=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let O=z,B=R;O<B;O+=3){const P=O,I=O+1,Z=O+2;o=Qc(this,y,t,a,p,g,x,P,I,Z),o&&(o.faceIndex=Math.floor(O/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let M=E,y=A;M<y;M+=3){const z=M,R=M+1,O=M+2;o=Qc(this,u,t,a,p,g,x,z,R,O),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function G3(s,t,n,a,o,c,u,h){let m;if(t.side===Kn?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,t.side===hs,h),m===null)return null;Kc.copy(h),Kc.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Kc);return p<n.near||p>n.far?null:{distance:p,point:Kc.clone(),object:s}}function Qc(s,t,n,a,o,c,u,h,m,p){s.getVertexPosition(h,Wc),s.getVertexPosition(m,qc),s.getVertexPosition(p,Yc);const g=G3(s,t,n,a,Wc,qc,Yc,av);if(g){const x=new X;Ni.getBarycoord(av,Wc,qc,Yc,x),o&&(g.uv=Ni.getInterpolatedAttribute(o,h,m,p,x,new Ut)),c&&(g.uv1=Ni.getInterpolatedAttribute(c,h,m,p,x,new Ut)),u&&(g.normal=Ni.getInterpolatedAttribute(u,h,m,p,x,new X),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new X,materialIndex:0};Ni.getNormal(Wc,qc,Yc,v.normal),g.face=v,g.barycoord=x}return g}class Sl extends Ca{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,o,u,2),E("x","z","y",1,-1,t,a,-n,o,u,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Ea(p,3)),this.setAttribute("normal",new Ea(g,3)),this.setAttribute("uv",new Ea(x,2));function E(A,M,y,z,R,O,B,P,I,Z,D){const N=O/I,G=B/Z,$=O/2,ot=B/2,xt=P/2,ut=I+1,H=Z+1;let Y=0,K=0;const vt=new X;for(let bt=0;bt<H;bt++){const F=bt*G-ot;for(let at=0;at<ut;at++){const yt=at*N-$;vt[A]=yt*z,vt[M]=F*R,vt[y]=xt,p.push(vt.x,vt.y,vt.z),vt[A]=0,vt[M]=0,vt[y]=P>0?1:-1,g.push(vt.x,vt.y,vt.z),x.push(at/I),x.push(1-bt/Z),Y+=1}}for(let bt=0;bt<Z;bt++)for(let F=0;F<I;F++){const at=v+F+ut*bt,yt=v+F+ut*(bt+1),Ct=v+(F+1)+ut*(bt+1),kt=v+(F+1)+ut*bt;m.push(at,yt,kt),m.push(yt,Ct,kt),K+=6}h.addGroup(S,K,D),S+=K,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qr(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Hn(s){const t={};for(let n=0;n<s.length;n++){const a=qr(s[n]);for(const o in a)t[o]=a[o]}return t}function k3(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function F_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const j3={clone:qr,merge:Hn};var X3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Aa extends $r{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X3,this.fragmentShader=W3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=k3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class I_ extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rs=new X,sv=new Ut,rv=new Ut;class li extends I_{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=hp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hp*2*Math.atan(Math.tan(fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,n){return this.getViewBounds(t,sv,rv),n.subVectors(rv,sv)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(fu*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Pr=-90,zr=1;class q3 extends In{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new li(Pr,zr,t,n);o.layers=this.layers,this.add(o);const c=new li(Pr,zr,t,n);c.layers=this.layers,this.add(c);const u=new li(Pr,zr,t,n);u.layers=this.layers,this.add(u);const h=new li(Pr,zr,t,n);h.layers=this.layers,this.add(h);const m=new li(Pr,zr,t,n);m.layers=this.layers,this.add(m);const p=new li(Pr,zr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(t===Bi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===xu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=A,t.setRenderTarget(a,5,o),t.render(n,g),t.setRenderTarget(x,v,S),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class B_ extends Vn{constructor(t=[],n=jr,a,o,c,u,h,m,p,g){super(t,n,a,o,c,u,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Y3 extends Gs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new B_(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Sl(5,5,5),c=new Aa({name:"CubemapFromEquirect",uniforms:qr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Kn,blending:Sa});c.uniforms.tEquirect.value=n;const u=new bi(o,c),h=n.minFilter;return n.minFilter===Bs&&(n.minFilter=yi),new q3(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class al extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z3={type:"move"};class od{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const A of t.hand.values()){const M=n.getJointPose(A,a),y=this._getHandJoint(p,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&v>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Z3)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new al;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class K3 extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Q3 extends Vn{constructor(t=null,n=1,a=1,o,c,u,h,m,p=ci,g=ci,x,v){super(null,u,h,m,p,g,o,c,x,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ld=new X,J3=new X,$3=new _e;class ls{constructor(t=new X(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=ld.subVectors(a,n).cross(J3.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(ld),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||$3.getNormalMatrix(t),o=this.coplanarPoint(ld).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new Lp,t2=new Ut(.5,.5),Jc=new X;class Up{constructor(t=new ls,n=new ls,a=new ls,o=new ls,c=new ls,u=new ls){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Bi,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],p=c[3],g=c[4],x=c[5],v=c[6],S=c[7],E=c[8],A=c[9],M=c[10],y=c[11],z=c[12],R=c[13],O=c[14],B=c[15];if(o[0].setComponents(p-u,S-g,y-E,B-z).normalize(),o[1].setComponents(p+u,S+g,y+E,B+z).normalize(),o[2].setComponents(p+h,S+x,y+A,B+R).normalize(),o[3].setComponents(p-h,S-x,y-A,B-R).normalize(),a)o[4].setComponents(m,v,M,O).normalize(),o[5].setComponents(p-m,S-v,y-M,B-O).normalize();else if(o[4].setComponents(p-m,S-v,y-M,B-O).normalize(),n===Bi)o[5].setComponents(p+m,S+v,y+M,B+O).normalize();else if(n===xu)o[5].setComponents(m,v,M,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const n=t2.distanceTo(t.center);return Os.radius=.7071067811865476+n,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Jc.x=o.normal.x>0?t.max.x:t.min.x,Jc.y=o.normal.y>0?t.max.y:t.min.y,Jc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H_ extends Vn{constructor(t,n,a=Hs,o,c,u,h=ci,m=ci,p,g=dl,x=1){if(g!==dl&&g!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:x};super(v,o,c,u,h,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Dp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class V_ extends Vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ji{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pe("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=a[o]-u,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,a[o]===u)return o/(c-1);const g=a[o],v=a[o+1]-g,S=(u-g)/v;return(o+S)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=n||(u.isVector2?new Ut:new X);return m.copy(h).sub(u).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new X,o=[],c=[],u=[],h=new X,m=new sn;for(let S=0;S<=t;S++){const E=S/t;o[S]=this.getTangentAt(E,new X)}c[0]=new X,u[0]=new X;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),x<=p&&(p=x,a.set(0,1,0)),v<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),u[S]=u[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(be(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,E))}u[S].crossVectors(o[S],c[S])}if(n===!0){let S=Math.acos(be(c[0].dot(c[t]),-1,1));S/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Op extends ji{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new Ut){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),x=Math.sin(this.aRotation),v=m-this.aX,S=p-this.aY;m=v*g-S*x+this.aX,p=v*x+S*g+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class e2 extends Op{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Pp(){let s=0,t=0,n=0,a=0;function o(c,u,h,m){s=c,t=h,n=-3*c+3*u-2*h-m,a=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,p){o(u,h,p*(h-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,p,g,x){let v=(u-c)/p-(h-c)/(p+g)+(h-u)/g,S=(h-u)/g-(m-u)/(g+x)+(m-h)/x;v*=g,S*=g,o(u,h,v,S)},calc:function(c){const u=c*c,h=u*c;return s+t*c+n*u+a*h}}}const $c=new X,cd=new Pp,ud=new Pp,fd=new Pp;class n2 extends ji{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new X){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:($c.subVectors(o[0],o[1]).add(o[0]),p=$c);const x=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:($c.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=$c),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(x),S),A=Math.pow(x.distanceToSquared(v),S),M=Math.pow(v.distanceToSquared(g),S);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),cd.initNonuniformCatmullRom(p.x,x.x,v.x,g.x,E,A,M),ud.initNonuniformCatmullRom(p.y,x.y,v.y,g.y,E,A,M),fd.initNonuniformCatmullRom(p.z,x.z,v.z,g.z,E,A,M)}else this.curveType==="catmullrom"&&(cd.initCatmullRom(p.x,x.x,v.x,g.x,this.tension),ud.initCatmullRom(p.y,x.y,v.y,g.y,this.tension),fd.initCatmullRom(p.z,x.z,v.z,g.z,this.tension));return a.set(cd.calc(m),ud.calc(m),fd.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new X().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ov(s,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=s*s,m=s*h;return(2*n-2*a+c+u)*m+(-3*n+3*a-2*c-u)*h+c*s+n}function i2(s,t){const n=1-s;return n*n*t}function a2(s,t){return 2*(1-s)*s*t}function s2(s,t){return s*s*t}function ol(s,t,n,a){return i2(s,t)+a2(s,n)+s2(s,a)}function r2(s,t){const n=1-s;return n*n*n*t}function o2(s,t){const n=1-s;return 3*n*n*s*t}function l2(s,t){return 3*(1-s)*s*s*t}function c2(s,t){return s*s*s*t}function ll(s,t,n,a,o){return r2(s,t)+o2(s,n)+l2(s,a)+c2(s,o)}class G_ extends ji{constructor(t=new Ut,n=new Ut,a=new Ut,o=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Ut){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(ll(t,o.x,c.x,u.x,h.x),ll(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class u2 extends ji{constructor(t=new X,n=new X,a=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new X){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(ll(t,o.x,c.x,u.x,h.x),ll(t,o.y,c.y,u.y,h.y),ll(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class k_ extends ji{constructor(t=new Ut,n=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Ut){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Ut){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f2 extends ji{constructor(t=new X,n=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new X){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new X){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class j_ extends ji{constructor(t=new Ut,n=new Ut,a=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Ut){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ol(t,o.x,c.x,u.x),ol(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class h2 extends ji{constructor(t=new X,n=new X,a=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new X){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ol(t,o.x,c.x,u.x),ol(t,o.y,c.y,u.y),ol(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class X_ extends ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Ut){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,m=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],x=o[u>o.length-3?o.length-1:u+2];return a.set(ov(h,m.x,p.x,g.x,x.x),ov(h,m.y,p.y,g.y,x.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Ut().fromArray(o))}return this}}var dp=Object.freeze({__proto__:null,ArcCurve:e2,CatmullRomCurve3:n2,CubicBezierCurve:G_,CubicBezierCurve3:u2,EllipseCurve:Op,LineCurve:k_,LineCurve3:f2,QuadraticBezierCurve:j_,QuadraticBezierCurve3:h2,SplineCurve:X_});class d2 extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dp[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-u/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],h=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,m=u.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new dp[o.type]().fromJSON(o))}return this}}class lv extends d2{constructor(t){super(),this.type="Path",this.currentPoint=new Ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new k_(this.currentPoint.clone(),new Ut(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new j_(this.currentPoint.clone(),new Ut(t,n),new Ut(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,u){const h=new G_(this.currentPoint.clone(),new Ut(t,n),new Ut(a,o),new Ut(c,u));return this.curves.push(h),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new X_(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,u){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,a,o,c,u),this}absarc(t,n,a,o,c,u){return this.absellipse(t,n,a,a,o,c,u),this}ellipse(t,n,a,o,c,u,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+p,n+g,a,o,c,u,h,m),this}absellipse(t,n,a,o,c,u,h,m){const p=new Op(t,n,a,o,c,u,h,m);if(this.curves.length>0){const x=p.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hu extends lv{constructor(t){super(t),this.uuid=Qr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new lv().fromJSON(o))}return this}}function p2(s,t,n=2){const a=t&&t.length,o=a?t[0]*n:s.length;let c=W_(s,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let h,m,p;if(a&&(c=_2(s,t,c,n)),s.length>80*n){h=s[0],m=s[1];let g=h,x=m;for(let v=n;v<o;v+=n){const S=s[v],E=s[v+1];S<h&&(h=S),E<m&&(m=E),S>g&&(g=S),E>x&&(x=E)}p=Math.max(g-h,x-m),p=p!==0?32767/p:0}return xl(c,u,n,h,m,p,0),u}function W_(s,t,n,a,o){let c;if(o===N2(s,t,n,a)>0)for(let u=t;u<n;u+=a)c=cv(u/a|0,s[u],s[u+1],c);else for(let u=n-a;u>=t;u-=a)c=cv(u/a|0,s[u],s[u+1],c);return c&&Yr(c,c.next)&&(vl(c),c=c.next),c}function ks(s,t){if(!s)return s;t||(t=s);let n=s,a;do if(a=!1,!n.steiner&&(Yr(n,n.next)||nn(n.prev,n,n.next)===0)){if(vl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function xl(s,t,n,a,o,c,u){if(!s)return;!u&&c&&E2(s,a,o,c);let h=s;for(;s.prev!==s.next;){const m=s.prev,p=s.next;if(c?x2(s,a,o,c):m2(s)){t.push(m.i,s.i,p.i),vl(s),s=p.next,h=p.next;continue}if(s=p,s===h){u?u===1?(s=g2(ks(s),t),xl(s,t,n,a,o,c,2)):u===2&&v2(s,t,n,a,o,c):xl(ks(s),t,n,a,o,c,1);break}}}function m2(s){const t=s.prev,n=s,a=s.next;if(nn(t,n,a)>=0)return!1;const o=t.x,c=n.x,u=a.x,h=t.y,m=n.y,p=a.y,g=Math.min(o,c,u),x=Math.min(h,m,p),v=Math.max(o,c,u),S=Math.max(h,m,p);let E=a.next;for(;E!==t;){if(E.x>=g&&E.x<=v&&E.y>=x&&E.y<=S&&sl(o,h,c,m,u,p,E.x,E.y)&&nn(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function x2(s,t,n,a){const o=s.prev,c=s,u=s.next;if(nn(o,c,u)>=0)return!1;const h=o.x,m=c.x,p=u.x,g=o.y,x=c.y,v=u.y,S=Math.min(h,m,p),E=Math.min(g,x,v),A=Math.max(h,m,p),M=Math.max(g,x,v),y=pp(S,E,t,n,a),z=pp(A,M,t,n,a);let R=s.prevZ,O=s.nextZ;for(;R&&R.z>=y&&O&&O.z<=z;){if(R.x>=S&&R.x<=A&&R.y>=E&&R.y<=M&&R!==o&&R!==u&&sl(h,g,m,x,p,v,R.x,R.y)&&nn(R.prev,R,R.next)>=0||(R=R.prevZ,O.x>=S&&O.x<=A&&O.y>=E&&O.y<=M&&O!==o&&O!==u&&sl(h,g,m,x,p,v,O.x,O.y)&&nn(O.prev,O,O.next)>=0))return!1;O=O.nextZ}for(;R&&R.z>=y;){if(R.x>=S&&R.x<=A&&R.y>=E&&R.y<=M&&R!==o&&R!==u&&sl(h,g,m,x,p,v,R.x,R.y)&&nn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;O&&O.z<=z;){if(O.x>=S&&O.x<=A&&O.y>=E&&O.y<=M&&O!==o&&O!==u&&sl(h,g,m,x,p,v,O.x,O.y)&&nn(O.prev,O,O.next)>=0)return!1;O=O.nextZ}return!0}function g2(s,t){let n=s;do{const a=n.prev,o=n.next.next;!Yr(a,o)&&Y_(a,n,n.next,o)&&gl(a,o)&&gl(o,a)&&(t.push(a.i,n.i,o.i),vl(n),vl(n.next),n=s=o),n=n.next}while(n!==s);return ks(n)}function v2(s,t,n,a,o,c){let u=s;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&w2(u,h)){let m=Z_(u,h);u=ks(u,u.next),m=ks(m,m.next),xl(u,t,n,a,o,c,0),xl(m,t,n,a,o,c,0);return}h=h.next}u=u.next}while(u!==s)}function _2(s,t,n,a){const o=[];for(let c=0,u=t.length;c<u;c++){const h=t[c]*a,m=c<u-1?t[c+1]*a:s.length,p=W_(s,h,m,a,!1);p===p.next&&(p.steiner=!0),o.push(A2(p))}o.sort(y2);for(let c=0;c<o.length;c++)n=b2(o[c],n);return n}function y2(s,t){let n=s.x-t.x;if(n===0&&(n=s.y-t.y,n===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function b2(s,t){const n=S2(s,t);if(!n)return t;const a=Z_(n,s);return ks(a,a.next),ks(n,n.next)}function S2(s,t){let n=t;const a=s.x,o=s.y;let c=-1/0,u;if(Yr(s,n))return n;do{if(Yr(s,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const x=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(x<=a&&x>c&&(c=x,u=n.x<n.next.x?n:n.next,x===a))return u}n=n.next}while(n!==t);if(!u)return null;const h=u,m=u.x,p=u.y;let g=1/0;n=u;do{if(a>=n.x&&n.x>=m&&a!==n.x&&q_(o<p?a:c,o,m,p,o<p?c:a,o,n.x,n.y)){const x=Math.abs(o-n.y)/(a-n.x);gl(n,s)&&(x<g||x===g&&(n.x>u.x||n.x===u.x&&M2(u,n)))&&(u=n,g=x)}n=n.next}while(n!==h);return u}function M2(s,t){return nn(s.prev,s,t.prev)<0&&nn(t.next,s,s.next)<0}function E2(s,t,n,a){let o=s;do o.z===0&&(o.z=pp(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,T2(o)}function T2(s){let t,n=1;do{let a=s,o;s=null;let c=null;for(t=0;a;){t++;let u=a,h=0;for(let p=0;p<n&&(h++,u=u.nextZ,!!u);p++);let m=n;for(;h>0||m>0&&u;)h!==0&&(m===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,h--):(o=u,u=u.nextZ,m--),c?c.nextZ=o:s=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(t>1);return s}function pp(s,t,n,a,o){return s=(s-n)*o|0,t=(t-a)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function A2(s){let t=s,n=s;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==s);return n}function q_(s,t,n,a,o,c,u,h){return(o-u)*(t-h)>=(s-u)*(c-h)&&(s-u)*(a-h)>=(n-u)*(t-h)&&(n-u)*(c-h)>=(o-u)*(a-h)}function sl(s,t,n,a,o,c,u,h){return!(s===u&&t===h)&&q_(s,t,n,a,o,c,u,h)}function w2(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!R2(s,t)&&(gl(s,t)&&gl(t,s)&&C2(s,t)&&(nn(s.prev,s,t.prev)||nn(s,t.prev,t))||Yr(s,t)&&nn(s.prev,s,s.next)>0&&nn(t.prev,t,t.next)>0)}function nn(s,t,n){return(t.y-s.y)*(n.x-t.x)-(t.x-s.x)*(n.y-t.y)}function Yr(s,t){return s.x===t.x&&s.y===t.y}function Y_(s,t,n,a){const o=eu(nn(s,t,n)),c=eu(nn(s,t,a)),u=eu(nn(n,a,s)),h=eu(nn(n,a,t));return!!(o!==c&&u!==h||o===0&&tu(s,n,t)||c===0&&tu(s,a,t)||u===0&&tu(n,s,a)||h===0&&tu(n,t,a))}function tu(s,t,n){return t.x<=Math.max(s.x,n.x)&&t.x>=Math.min(s.x,n.x)&&t.y<=Math.max(s.y,n.y)&&t.y>=Math.min(s.y,n.y)}function eu(s){return s>0?1:s<0?-1:0}function R2(s,t){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==t.i&&n.next.i!==t.i&&Y_(n,n.next,s,t))return!0;n=n.next}while(n!==s);return!1}function gl(s,t){return nn(s.prev,s,s.next)<0?nn(s,t,s.next)>=0&&nn(s,s.prev,t)>=0:nn(s,t,s.prev)<0||nn(s,s.next,t)<0}function C2(s,t){let n=s,a=!1;const o=(s.x+t.x)/2,c=(s.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==s);return a}function Z_(s,t){const n=mp(s.i,s.x,s.y),a=mp(t.i,t.x,t.y),o=s.next,c=t.prev;return s.next=t,t.prev=s,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function cv(s,t,n,a){const o=mp(s,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function vl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function mp(s,t,n){return{i:s,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function N2(s,t,n,a){let o=0;for(let c=t,u=n-a;c<n;c+=a)o+=(s[u]-s[c])*(s[c+1]+s[u+1]),u=c;return o}class D2{static triangulate(t,n,a=2){return p2(t,n,a)}}class Br{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return Br.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];uv(t),fv(a,t);let u=t.length;n.forEach(uv);for(let m=0;m<n.length;m++)o.push(u),u+=n[m].length,fv(a,n[m]);const h=D2.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function uv(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function fv(s,t){for(let n=0;n<t.length;n++)s.push(t[n].x),s.push(t[n].y)}class cl extends Ca{constructor(t=new hu([new Ut(.5,.5),new Ut(-.5,.5),new Ut(-.5,-.5),new Ut(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];u(p)}this.setAttribute("position",new Ea(o,3)),this.setAttribute("uv",new Ea(c,2)),this.computeVertexNormals();function u(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,x=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,S=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:S-.1,A=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const y=n.extrudePath,z=n.UVGenerator!==void 0?n.UVGenerator:L2;let R,O=!1,B,P,I,Z;y&&(R=y.getSpacedPoints(g),O=!0,v=!1,B=y.computeFrenetFrames(g,!1),P=new X,I=new X,Z=new X),v||(M=0,S=0,E=0,A=0);const D=h.extractPoints(p);let N=D.shape;const G=D.holes;if(!Br.isClockWise(N)){N=N.reverse();for(let St=0,U=G.length;St<U;St++){const Tt=G[St];Br.isClockWise(Tt)&&(G[St]=Tt.reverse())}}function ot(St){const Tt=10000000000000001e-36;let Nt=St[0];for(let Lt=1;Lt<=St.length;Lt++){const wt=Lt%St.length,qt=St[wt],Ft=qt.x-Nt.x,Xt=qt.y-Nt.y,L=Ft*Ft+Xt*Xt,T=Math.max(Math.abs(qt.x),Math.abs(qt.y),Math.abs(Nt.x),Math.abs(Nt.y)),J=Tt*T*T;if(L<=J){St.splice(wt,1),Lt--;continue}Nt=qt}}ot(N),G.forEach(ot);const xt=G.length,ut=N;for(let St=0;St<xt;St++){const U=G[St];N=N.concat(U)}function H(St,U,Tt){return U||ln("ExtrudeGeometry: vec does not exist"),St.clone().addScaledVector(U,Tt)}const Y=N.length;function K(St,U,Tt){let Nt,Lt,wt;const qt=St.x-U.x,Ft=St.y-U.y,Xt=Tt.x-St.x,L=Tt.y-St.y,T=qt*qt+Ft*Ft,J=qt*L-Ft*Xt;if(Math.abs(J)>Number.EPSILON){const ht=Math.sqrt(T),Mt=Math.sqrt(Xt*Xt+L*L),ct=U.x-Ft/ht,ee=U.y+qt/ht,It=Tt.x-L/Mt,ie=Tt.y+Xt/Mt,$t=((It-ct)*L-(ie-ee)*Xt)/(qt*L-Ft*Xt);Nt=ct+qt*$t-St.x,Lt=ee+Ft*$t-St.y;const Et=Nt*Nt+Lt*Lt;if(Et<=2)return new Ut(Nt,Lt);wt=Math.sqrt(Et/2)}else{let ht=!1;qt>Number.EPSILON?Xt>Number.EPSILON&&(ht=!0):qt<-Number.EPSILON?Xt<-Number.EPSILON&&(ht=!0):Math.sign(Ft)===Math.sign(L)&&(ht=!0),ht?(Nt=-Ft,Lt=qt,wt=Math.sqrt(T)):(Nt=qt,Lt=Ft,wt=Math.sqrt(T/2))}return new Ut(Nt/wt,Lt/wt)}const vt=[];for(let St=0,U=ut.length,Tt=U-1,Nt=St+1;St<U;St++,Tt++,Nt++)Tt===U&&(Tt=0),Nt===U&&(Nt=0),vt[St]=K(ut[St],ut[Tt],ut[Nt]);const bt=[];let F,at=vt.concat();for(let St=0,U=xt;St<U;St++){const Tt=G[St];F=[];for(let Nt=0,Lt=Tt.length,wt=Lt-1,qt=Nt+1;Nt<Lt;Nt++,wt++,qt++)wt===Lt&&(wt=0),qt===Lt&&(qt=0),F[Nt]=K(Tt[Nt],Tt[wt],Tt[qt]);bt.push(F),at=at.concat(F)}let yt;if(M===0)yt=Br.triangulateShape(ut,G);else{const St=[],U=[];for(let Tt=0;Tt<M;Tt++){const Nt=Tt/M,Lt=S*Math.cos(Nt*Math.PI/2),wt=E*Math.sin(Nt*Math.PI/2)+A;for(let qt=0,Ft=ut.length;qt<Ft;qt++){const Xt=H(ut[qt],vt[qt],wt);Gt(Xt.x,Xt.y,-Lt),Nt===0&&St.push(Xt)}for(let qt=0,Ft=xt;qt<Ft;qt++){const Xt=G[qt];F=bt[qt];const L=[];for(let T=0,J=Xt.length;T<J;T++){const ht=H(Xt[T],F[T],wt);Gt(ht.x,ht.y,-Lt),Nt===0&&L.push(ht)}Nt===0&&U.push(L)}}yt=Br.triangulateShape(St,U)}const Ct=yt.length,kt=E+A;for(let St=0;St<Y;St++){const U=v?H(N[St],at[St],kt):N[St];O?(I.copy(B.normals[0]).multiplyScalar(U.x),P.copy(B.binormals[0]).multiplyScalar(U.y),Z.copy(R[0]).add(I).add(P),Gt(Z.x,Z.y,Z.z)):Gt(U.x,U.y,0)}for(let St=1;St<=g;St++)for(let U=0;U<Y;U++){const Tt=v?H(N[U],at[U],kt):N[U];O?(I.copy(B.normals[St]).multiplyScalar(Tt.x),P.copy(B.binormals[St]).multiplyScalar(Tt.y),Z.copy(R[St]).add(I).add(P),Gt(Z.x,Z.y,Z.z)):Gt(Tt.x,Tt.y,x/g*St)}for(let St=M-1;St>=0;St--){const U=St/M,Tt=S*Math.cos(U*Math.PI/2),Nt=E*Math.sin(U*Math.PI/2)+A;for(let Lt=0,wt=ut.length;Lt<wt;Lt++){const qt=H(ut[Lt],vt[Lt],Nt);Gt(qt.x,qt.y,x+Tt)}for(let Lt=0,wt=G.length;Lt<wt;Lt++){const qt=G[Lt];F=bt[Lt];for(let Ft=0,Xt=qt.length;Ft<Xt;Ft++){const L=H(qt[Ft],F[Ft],Nt);O?Gt(L.x,L.y+R[g-1].y,R[g-1].x+Tt):Gt(L.x,L.y,x+Tt)}}}st(),ft();function st(){const St=o.length/3;if(v){let U=0,Tt=Y*U;for(let Nt=0;Nt<Ct;Nt++){const Lt=yt[Nt];Qt(Lt[2]+Tt,Lt[1]+Tt,Lt[0]+Tt)}U=g+M*2,Tt=Y*U;for(let Nt=0;Nt<Ct;Nt++){const Lt=yt[Nt];Qt(Lt[0]+Tt,Lt[1]+Tt,Lt[2]+Tt)}}else{for(let U=0;U<Ct;U++){const Tt=yt[U];Qt(Tt[2],Tt[1],Tt[0])}for(let U=0;U<Ct;U++){const Tt=yt[U];Qt(Tt[0]+Y*g,Tt[1]+Y*g,Tt[2]+Y*g)}}a.addGroup(St,o.length/3-St,0)}function ft(){const St=o.length/3;let U=0;zt(ut,U),U+=ut.length;for(let Tt=0,Nt=G.length;Tt<Nt;Tt++){const Lt=G[Tt];zt(Lt,U),U+=Lt.length}a.addGroup(St,o.length/3-St,1)}function zt(St,U){let Tt=St.length;for(;--Tt>=0;){const Nt=Tt;let Lt=Tt-1;Lt<0&&(Lt=St.length-1);for(let wt=0,qt=g+M*2;wt<qt;wt++){const Ft=Y*wt,Xt=Y*(wt+1),L=U+Nt+Ft,T=U+Lt+Ft,J=U+Lt+Xt,ht=U+Nt+Xt;me(L,T,J,ht)}}}function Gt(St,U,Tt){m.push(St),m.push(U),m.push(Tt)}function Qt(St,U,Tt){ze(St),ze(U),ze(Tt);const Nt=o.length/3,Lt=z.generateTopUV(a,o,Nt-3,Nt-2,Nt-1);ce(Lt[0]),ce(Lt[1]),ce(Lt[2])}function me(St,U,Tt,Nt){ze(St),ze(U),ze(Nt),ze(U),ze(Tt),ze(Nt);const Lt=o.length/3,wt=z.generateSideWallUV(a,o,Lt-6,Lt-3,Lt-2,Lt-1);ce(wt[0]),ce(wt[1]),ce(wt[3]),ce(wt[1]),ce(wt[2]),ce(wt[3])}function ze(St){o.push(m[St*3+0]),o.push(m[St*3+1]),o.push(m[St*3+2])}function ce(St){c.push(St.x),c.push(St.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return U2(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,u=t.shapes.length;c<u;c++){const h=n[t.shapes[c]];a.push(h)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new dp[o.type]().fromJSON(o)),new cl(a,t.options)}}const L2={generateTopUV:function(s,t,n,a,o){const c=t[n*3],u=t[n*3+1],h=t[a*3],m=t[a*3+1],p=t[o*3],g=t[o*3+1];return[new Ut(c,u),new Ut(h,m),new Ut(p,g)]},generateSideWallUV:function(s,t,n,a,o,c){const u=t[n*3],h=t[n*3+1],m=t[n*3+2],p=t[a*3],g=t[a*3+1],x=t[a*3+2],v=t[o*3],S=t[o*3+1],E=t[o*3+2],A=t[c*3],M=t[c*3+1],y=t[c*3+2];return Math.abs(h-g)<Math.abs(u-p)?[new Ut(u,1-m),new Ut(p,1-x),new Ut(v,1-E),new Ut(A,1-y)]:[new Ut(h,1-m),new Ut(g,1-x),new Ut(S,1-E),new Ut(M,1-y)]}};function U2(s,t,n){if(n.shapes=[],Array.isArray(s))for(let a=0,o=s.length;a<o;a++){const c=s[a];n.shapes.push(c.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class bu extends Ca{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,g=m+1,x=t/h,v=n/m,S=[],E=[],A=[],M=[];for(let y=0;y<g;y++){const z=y*v-u;for(let R=0;R<p;R++){const O=R*x-c;E.push(O,-z,0),A.push(0,0,1),M.push(R/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let z=0;z<h;z++){const R=z+p*y,O=z+p*(y+1),B=z+1+p*(y+1),P=z+1+p*y;S.push(R,O,P),S.push(O,B,P)}this.setIndex(S),this.setAttribute("position",new Ea(E,3)),this.setAttribute("normal",new Ea(A,3)),this.setAttribute("uv",new Ea(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bu(t.width,t.height,t.widthSegments,t.heightSegments)}}class O2 extends $r{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=w_,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hd extends O2{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class P2 extends $r{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class z2 extends $r{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zp extends In{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const dd=new sn,hv=new X,dv=new X;class K_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Up,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;hv.setFromMatrixPosition(t.matrixWorld),n.position.copy(hv),dv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(dv),n.updateMatrixWorld(),dd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(dd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const pv=new sn,nl=new X,pd=new X;class F2 extends K_{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ut(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),nl.setFromMatrixPosition(t.matrixWorld),a.position.copy(nl),pd.copy(a.position),pd.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(pd),a.updateMatrixWorld(),o.makeTranslation(-nl.x,-nl.y,-nl.z),pv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pv,a.coordinateSystem,a.reversedDepth)}}class mv extends zp{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new F2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Q_ extends I_{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class I2 extends K_{constructor(){super(new Q_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class B2 extends zp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new I2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class H2 extends zp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class V2 extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class xv{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(be(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class G2 extends Xs{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){pe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function gv(s,t,n,a){const o=k2(a);switch(n){case E_:return s*t;case A_:return s*t/o.components*o.byteLength;case wp:return s*t/o.components*o.byteLength;case Rp:return s*t*2/o.components*o.byteLength;case Cp:return s*t*2/o.components*o.byteLength;case T_:return s*t*3/o.components*o.byteLength;case Di:return s*t*4/o.components*o.byteLength;case Np:return s*t*4/o.components*o.byteLength;case ou:case lu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case cu:case uu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bd:case Vd:return Math.max(s,16)*Math.max(t,8)/4;case Id:case Hd:return Math.max(s,8)*Math.max(t,8)/2;case Gd:case kd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case jd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Xd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case $d:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case tp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ep:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case np:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ip:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ap:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case sp:case rp:case op:return Math.ceil(s/4)*Math.ceil(t/4)*16;case lp:case cp:return Math.ceil(s/4)*Math.ceil(t/4)*8;case up:case fp:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function k2(s){switch(s){case Vi:case y_:return{byteLength:1,components:1};case fl:case b_:case Kr:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case Hs:case Ep:case ya:return{byteLength:4,components:1};case S_:case M_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J_(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function j2(s){const t=new WeakMap;function n(h,m){const p=h.array,g=h.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function a(h,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,g);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],A=x[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const A=x[S];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var X2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,J2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_E=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bE="gl_FragColor = linearToOutputTexel( gl_FragColor );",SE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,EE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,UE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,FE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_T=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ST=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ET=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$T=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,SA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ye={alphahash_fragment:X2,alphahash_pars_fragment:W2,alphamap_fragment:q2,alphamap_pars_fragment:Y2,alphatest_fragment:Z2,alphatest_pars_fragment:K2,aomap_fragment:Q2,aomap_pars_fragment:J2,batching_pars_vertex:$2,batching_vertex:tE,begin_vertex:eE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:aE,bumpmap_pars_fragment:sE,clipping_planes_fragment:rE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:fE,color_pars_vertex:hE,color_vertex:dE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:xE,displacementmap_pars_vertex:gE,displacementmap_vertex:vE,emissivemap_fragment:_E,emissivemap_pars_fragment:yE,colorspace_fragment:bE,colorspace_pars_fragment:SE,envmap_fragment:ME,envmap_common_pars_fragment:EE,envmap_pars_fragment:TE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:FE,envmap_vertex:wE,fog_vertex:RE,fog_pars_vertex:CE,fog_fragment:NE,fog_pars_fragment:DE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:UE,lights_lambert_fragment:OE,lights_lambert_pars_fragment:PE,lights_pars_begin:zE,lights_toon_fragment:IE,lights_toon_pars_fragment:BE,lights_phong_fragment:HE,lights_phong_pars_fragment:VE,lights_physical_fragment:GE,lights_physical_pars_fragment:kE,lights_fragment_begin:jE,lights_fragment_maps:XE,lights_fragment_end:WE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:YE,logdepthbuf_pars_vertex:ZE,logdepthbuf_vertex:KE,map_fragment:QE,map_pars_fragment:JE,map_particle_fragment:$E,map_particle_pars_fragment:tT,metalnessmap_fragment:eT,metalnessmap_pars_fragment:nT,morphinstance_vertex:iT,morphcolor_vertex:aT,morphnormal_vertex:sT,morphtarget_pars_vertex:rT,morphtarget_vertex:oT,normal_fragment_begin:lT,normal_fragment_maps:cT,normal_pars_fragment:uT,normal_pars_vertex:fT,normal_vertex:hT,normalmap_pars_fragment:dT,clearcoat_normal_fragment_begin:pT,clearcoat_normal_fragment_maps:mT,clearcoat_pars_fragment:xT,iridescence_pars_fragment:gT,opaque_fragment:vT,packing:_T,premultiplied_alpha_fragment:yT,project_vertex:bT,dithering_fragment:ST,dithering_pars_fragment:MT,roughnessmap_fragment:ET,roughnessmap_pars_fragment:TT,shadowmap_pars_fragment:AT,shadowmap_pars_vertex:wT,shadowmap_vertex:RT,shadowmask_pars_fragment:CT,skinbase_vertex:NT,skinning_pars_vertex:DT,skinning_vertex:LT,skinnormal_vertex:UT,specularmap_fragment:OT,specularmap_pars_fragment:PT,tonemapping_fragment:zT,tonemapping_pars_fragment:FT,transmission_fragment:IT,transmission_pars_fragment:BT,uv_pars_fragment:HT,uv_pars_vertex:VT,uv_vertex:GT,worldpos_vertex:kT,background_vert:jT,background_frag:XT,backgroundCube_vert:WT,backgroundCube_frag:qT,cube_vert:YT,cube_frag:ZT,depth_vert:KT,depth_frag:QT,distanceRGBA_vert:JT,distanceRGBA_frag:$T,equirect_vert:tA,equirect_frag:eA,linedashed_vert:nA,linedashed_frag:iA,meshbasic_vert:aA,meshbasic_frag:sA,meshlambert_vert:rA,meshlambert_frag:oA,meshmatcap_vert:lA,meshmatcap_frag:cA,meshnormal_vert:uA,meshnormal_frag:fA,meshphong_vert:hA,meshphong_frag:dA,meshphysical_vert:pA,meshphysical_frag:mA,meshtoon_vert:xA,meshtoon_frag:gA,points_vert:vA,points_frag:_A,shadow_vert:yA,shadow_frag:bA,sprite_vert:SA,sprite_frag:MA},Vt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Ii={basic:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Hn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Hn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Hn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Hn([Vt.points,Vt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Hn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Hn([Vt.common,Vt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Hn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Hn([Vt.sprite,Vt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Hn([Vt.common,Vt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Hn([Vt.lights,Vt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Ii.physical={uniforms:Hn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const nu={r:0,b:0,g:0},Ps=new Gi,EA=new sn;function TA(s,t,n,a,o,c,u){const h=new Ce(0);let m=c===!0?0:1,p,g,x=null,v=0,S=null;function E(R){let O=R.isScene===!0?R.background:null;return O&&O.isTexture&&(O=(R.backgroundBlurriness>0?n:t).get(O)),O}function A(R){let O=!1;const B=E(R);B===null?y(h,m):B&&B.isColor&&(y(B,1),O=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,u):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||O)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(R,O){const B=E(O);B&&(B.isCubeTexture||B.mapping===yu)?(g===void 0&&(g=new bi(new Sl(1,1,1),new Aa({name:"BackgroundCubeMaterial",uniforms:qr(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(P,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ps.copy(O.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(Ps)),g.material.toneMapped=Pe.getTransfer(B.colorSpace)!==Xe,(x!==B||v!==B.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=B,v=B.version,S=s.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new bi(new bu(2,2),new Aa({name:"BackgroundMaterial",uniforms:qr(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,p.material.toneMapped=Pe.getTransfer(B.colorSpace)!==Xe,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(x!==B||v!==B.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=B,v=B.version,S=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function y(R,O){R.getRGB(nu,F_(s)),a.buffers.color.setClear(nu.r,nu.g,nu.b,O,u)}function z(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(R,O=1){h.set(R),m=O,y(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(R){m=R,y(h,m)},render:A,addToRenderList:M,dispose:z}}function AA(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(N,G,$,ot,xt){let ut=!1;const H=x(ot,$,G);c!==H&&(c=H,p(c.object)),ut=S(N,ot,$,xt),ut&&E(N,ot,$,xt),xt!==null&&t.update(xt,s.ELEMENT_ARRAY_BUFFER),(ut||u)&&(u=!1,O(N,G,$,ot),xt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(xt).buffer))}function m(){return s.createVertexArray()}function p(N){return s.bindVertexArray(N)}function g(N){return s.deleteVertexArray(N)}function x(N,G,$){const ot=$.wireframe===!0;let xt=a[N.id];xt===void 0&&(xt={},a[N.id]=xt);let ut=xt[G.id];ut===void 0&&(ut={},xt[G.id]=ut);let H=ut[ot];return H===void 0&&(H=v(m()),ut[ot]=H),H}function v(N){const G=[],$=[],ot=[];for(let xt=0;xt<n;xt++)G[xt]=0,$[xt]=0,ot[xt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:ot,object:N,attributes:{},index:null}}function S(N,G,$,ot){const xt=c.attributes,ut=G.attributes;let H=0;const Y=$.getAttributes();for(const K in Y)if(Y[K].location>=0){const bt=xt[K];let F=ut[K];if(F===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(F=N.instanceColor)),bt===void 0||bt.attribute!==F||F&&bt.data!==F.data)return!0;H++}return c.attributesNum!==H||c.index!==ot}function E(N,G,$,ot){const xt={},ut=G.attributes;let H=0;const Y=$.getAttributes();for(const K in Y)if(Y[K].location>=0){let bt=ut[K];bt===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(bt=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(bt=N.instanceColor));const F={};F.attribute=bt,bt&&bt.data&&(F.data=bt.data),xt[K]=F,H++}c.attributes=xt,c.attributesNum=H,c.index=ot}function A(){const N=c.newAttributes;for(let G=0,$=N.length;G<$;G++)N[G]=0}function M(N){y(N,0)}function y(N,G){const $=c.newAttributes,ot=c.enabledAttributes,xt=c.attributeDivisors;$[N]=1,ot[N]===0&&(s.enableVertexAttribArray(N),ot[N]=1),xt[N]!==G&&(s.vertexAttribDivisor(N,G),xt[N]=G)}function z(){const N=c.newAttributes,G=c.enabledAttributes;for(let $=0,ot=G.length;$<ot;$++)G[$]!==N[$]&&(s.disableVertexAttribArray($),G[$]=0)}function R(N,G,$,ot,xt,ut,H){H===!0?s.vertexAttribIPointer(N,G,$,xt,ut):s.vertexAttribPointer(N,G,$,ot,xt,ut)}function O(N,G,$,ot){A();const xt=ot.attributes,ut=$.getAttributes(),H=G.defaultAttributeValues;for(const Y in ut){const K=ut[Y];if(K.location>=0){let vt=xt[Y];if(vt===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(vt=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(vt=N.instanceColor)),vt!==void 0){const bt=vt.normalized,F=vt.itemSize,at=t.get(vt);if(at===void 0)continue;const yt=at.buffer,Ct=at.type,kt=at.bytesPerElement,st=Ct===s.INT||Ct===s.UNSIGNED_INT||vt.gpuType===Ep;if(vt.isInterleavedBufferAttribute){const ft=vt.data,zt=ft.stride,Gt=vt.offset;if(ft.isInstancedInterleavedBuffer){for(let Qt=0;Qt<K.locationSize;Qt++)y(K.location+Qt,ft.meshPerAttribute);N.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Qt=0;Qt<K.locationSize;Qt++)M(K.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Qt=0;Qt<K.locationSize;Qt++)R(K.location+Qt,F/K.locationSize,Ct,bt,zt*kt,(Gt+F/K.locationSize*Qt)*kt,st)}else{if(vt.isInstancedBufferAttribute){for(let ft=0;ft<K.locationSize;ft++)y(K.location+ft,vt.meshPerAttribute);N.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ft=0;ft<K.locationSize;ft++)M(K.location+ft);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let ft=0;ft<K.locationSize;ft++)R(K.location+ft,F/K.locationSize,Ct,bt,F*kt,F/K.locationSize*ft*kt,st)}}else if(H!==void 0){const bt=H[Y];if(bt!==void 0)switch(bt.length){case 2:s.vertexAttrib2fv(K.location,bt);break;case 3:s.vertexAttrib3fv(K.location,bt);break;case 4:s.vertexAttrib4fv(K.location,bt);break;default:s.vertexAttrib1fv(K.location,bt)}}}}z()}function B(){Z();for(const N in a){const G=a[N];for(const $ in G){const ot=G[$];for(const xt in ot)g(ot[xt].object),delete ot[xt];delete G[$]}delete a[N]}}function P(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const $ in G){const ot=G[$];for(const xt in ot)g(ot[xt].object),delete ot[xt];delete G[$]}delete a[N.id]}function I(N){for(const G in a){const $=a[G];if($[N.id]===void 0)continue;const ot=$[N.id];for(const xt in ot)g(ot[xt].object),delete ot[xt];delete $[N.id]}}function Z(){D(),u=!0,c!==o&&(c=o,p(c.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:A,enableAttribute:M,disableUnusedAttributes:z}}function wA(s,t,n){let a;function o(p){a=p}function c(p,g){s.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,x){x!==0&&(s.drawArraysInstanced(a,p,g,x),n.update(g,a,x))}function h(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];n.update(S,a,1)}function m(p,g,x,v){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function RA(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(I){return!(I!==Di&&a.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const Z=I===Kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Vi&&a.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ya&&!Z)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(pe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),z=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:z,maxVaryings:R,maxFragmentUniforms:O,vertexTextures:B,maxSamples:P}}function CA(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new ls,h=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||a!==0||o;return o=v,a=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){n=g(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,A=x.clipIntersection,M=x.clipShadows,y=s.get(x);if(!o||E===null||E.length===0||c&&!M)c?g(null):p();else{const z=c?0:a,R=z*4;let O=y.clippingState||null;m.value=O,O=g(E,v,R,S);for(let B=0;B!==R;++B)O[B]=n[B];y.clippingState=O,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(x,v,S,E){const A=x!==null?x.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const y=S+A*4,z=v.matrixWorldInverse;h.getNormalMatrix(z),(M===null||M.length<y)&&(M=new Float32Array(y));for(let R=0,O=S;R!==A;++R,O+=4)u.copy(x[R]).applyMatrix4(z,h),u.normal.toArray(M,O),M[O+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function NA(s){let t=new WeakMap;function n(u,h){return h===Od?u.mapping=jr:h===Pd&&(u.mapping=Xr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Od||h===Pd)if(t.has(u)){const m=t.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new Y3(m.height);return p.fromEquirectangularTexture(s,u),t.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const us=4,vv=[.125,.215,.35,.446,.526,.582],Is=20,DA=256,il=new Q_,_v=new Ce;let md=null,xd=0,gd=0,vd=!1;const LA=new X;class yv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=LA}=c;md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(md,xd,gd),this._renderer.xr.enabled=vd,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===jr||t.mapping===Xr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Kr,format:Di,colorSpace:Wr,depthBuffer:!1},o=bv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bv(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=UA(c)),this._blurMaterial=PA(c,t,n),this._ggxMaterial=OA(c,t,n)}return o}_compileMaterial(t){const n=new bi(new Ca,t);this._renderer.compile(n,il)}_sceneToCubeUV(t,n,a,o,c){const m=new li(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,S=x.toneMapping;x.getClearColor(_v),x.toneMapping=fs,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new Sl,new O_({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let y=!1;const z=t.background;z?z.isColor&&(M.color.copy(z),t.background=null,y=!0):(M.color.copy(_v),y=!0);for(let R=0;R<6;R++){const O=R%3;O===0?(m.up.set(0,p[R],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[R],c.y,c.z)):O===1?(m.up.set(0,0,p[R]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[R],c.z)):(m.up.set(0,p[R],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[R]));const B=this._cubeSize;Fr(o,O*B,R>2?B:0,B,B),x.setRenderTarget(o),y&&x.render(A,m),x.render(t,m)}x.toneMapping=S,x.autoClear=v,t.background=z}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===jr||t.mapping===Xr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Fr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,il)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),v=.05+p*.95,S=x*v,{_lodMax:E}=this,A=this._sizeLods[a],M=3*A*(a>E-us?a-E+us:0),y=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-n,Fr(c,M,y,3*A,2*A),o.setRenderTarget(c),o.render(h,il),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,Fr(t,M,y,3*A,2*A),o.setRenderTarget(t),o.render(h,il)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ln("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=p;const v=p.uniforms,S=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Is-1),A=c/E,M=isFinite(c)?1+Math.floor(g*A):Is;M>Is&&pe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Is}`);const y=[];let z=0;for(let I=0;I<Is;++I){const Z=I/A,D=Math.exp(-Z*Z/2);y.push(D),I===0?z+=D:I<M&&(z+=2*D)}for(let I=0;I<y.length;I++)y[I]=y[I]/z;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:R}=this;v.dTheta.value=E,v.mipInt.value=R-a;const O=this._sizeLods[o],B=3*O*(o>R-us?o-R+us:0),P=4*(this._cubeSize-O);Fr(n,B,P,3*O,2*O),m.setRenderTarget(n),m.render(x,il)}}function UA(s){const t=[],n=[],a=[];let o=s;const c=s-us+1+vv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let m=1/h;u>s-us?m=vv[u-s+us-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,A=3,M=2,y=1,z=new Float32Array(A*E*S),R=new Float32Array(M*E*S),O=new Float32Array(y*E*S);for(let P=0;P<S;P++){const I=P%3*2/3-1,Z=P>2?0:-1,D=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];z.set(D,A*E*P),R.set(v,M*E*P);const N=[P,P,P,P,P,P];O.set(N,y*E*P)}const B=new Ca;B.setAttribute("position",new Hi(z,A)),B.setAttribute("uv",new Hi(R,M)),B.setAttribute("faceIndex",new Hi(O,y)),a.push(new bi(B,null)),o>us&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function bv(s,t,n){const a=new Gs(s,t,n);return a.texture.mapping=yu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Fr(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function OA(s,t,n){return new Aa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Su(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function PA(s,t,n){const a=new Float32Array(Is),o=new X(0,1,0);return new Aa({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Sv(){return new Aa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Mv(){return new Aa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function Su(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zA(s){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===Od||m===Pd,g=m===jr||m===Xr;if(p||g){let x=t.get(h);const v=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new yv(s)),x=p?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new yv(s)),x=p?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function o(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function FA(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&ml("WebGLRenderer: "+a+" extension not supported."),o}}}function IA(s,t,n,a){const o={},c=new WeakMap;function u(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(x,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(x){const v=x.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function p(x){const v=[],S=x.index,E=x.attributes.position;let A=0;if(S!==null){const z=S.array;A=S.version;for(let R=0,O=z.length;R<O;R+=3){const B=z[R+0],P=z[R+1],I=z[R+2];v.push(B,P,P,I,I,B)}}else if(E!==void 0){const z=E.array;A=E.version;for(let R=0,O=z.length/3-1;R<O;R+=3){const B=R+0,P=R+1,I=R+2;v.push(B,P,P,I,I,B)}}else return;const M=new(C_(v)?z_:P_)(v,1);M.version=A;const y=c.get(x);y&&t.remove(y),c.set(x,M)}function g(x){const v=c.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function BA(s,t,n){let a;function o(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,S){s.drawElements(a,S,c,v*u),n.update(S,a,1)}function p(v,S,E){E!==0&&(s.drawElementsInstanced(a,S,c,v*u,E),n.update(S,a,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,v,0,E);let M=0;for(let y=0;y<E;y++)M+=S[y];n.update(M,a,1)}function x(v,S,E,A){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)p(v[y]/u,S[y],A[y]);else{M.multiDrawElementsInstancedWEBGL(a,S,0,c,v,0,A,0,E);let y=0;for(let z=0;z<E;z++)y+=S[z]*A[z];n.update(y,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function HA(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:ln("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function VA(s,t,n){const a=new WeakMap,o=new qe;function c(u,h,m){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==x){let N=function(){Z.dispose(),a.delete(h),h.removeEventListener("dispose",N)};var S=N;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let O=0;E===!0&&(O=1),A===!0&&(O=2),M===!0&&(O=3);let B=h.attributes.position.count*O,P=1;B>t.maxTextureSize&&(P=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const I=new Float32Array(B*P*4*x),Z=new N_(I,B,P,x);Z.type=ya,Z.needsUpdate=!0;const D=O*4;for(let G=0;G<x;G++){const $=y[G],ot=z[G],xt=R[G],ut=B*P*4*G;for(let H=0;H<$.count;H++){const Y=H*D;E===!0&&(o.fromBufferAttribute($,H),I[ut+Y+0]=o.x,I[ut+Y+1]=o.y,I[ut+Y+2]=o.z,I[ut+Y+3]=0),A===!0&&(o.fromBufferAttribute(ot,H),I[ut+Y+4]=o.x,I[ut+Y+5]=o.y,I[ut+Y+6]=o.z,I[ut+Y+7]=0),M===!0&&(o.fromBufferAttribute(xt,H),I[ut+Y+8]=o.x,I[ut+Y+9]=o.y,I[ut+Y+10]=o.z,I[ut+Y+11]=xt.itemSize===4?o.w:1)}}v={count:x,texture:Z,size:new Ut(B,P)},a.set(h,v),h.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function GA(s,t,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,x=t.get(m,g);if(o.get(x)!==p&&(t.update(x),o.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return x}function u(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const $_=new Vn,Ev=new H_(1,1),ty=new N_,ey=new D3,ny=new B_,Tv=[],Av=[],wv=new Float32Array(16),Rv=new Float32Array(9),Cv=new Float32Array(4);function to(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=Tv[o];if(c===void 0&&(c=new Float32Array(o),Tv[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,s[u].toArray(c,h)}return c}function Sn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function Mn(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function Mu(s,t){let n=Av[t];n===void 0&&(n=new Int32Array(t),Av[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function kA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function jA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;s.uniform2fv(this.addr,t),Mn(n,t)}}function XA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sn(n,t))return;s.uniform3fv(this.addr,t),Mn(n,t)}}function WA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;s.uniform4fv(this.addr,t),Mn(n,t)}}function qA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Sn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,a))return;Cv.set(a),s.uniformMatrix2fv(this.addr,!1,Cv),Mn(n,a)}}function YA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Sn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,a))return;Rv.set(a),s.uniformMatrix3fv(this.addr,!1,Rv),Mn(n,a)}}function ZA(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Sn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(Sn(n,a))return;wv.set(a),s.uniformMatrix4fv(this.addr,!1,wv),Mn(n,a)}}function KA(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function QA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;s.uniform2iv(this.addr,t),Mn(n,t)}}function JA(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;s.uniform3iv(this.addr,t),Mn(n,t)}}function $A(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;s.uniform4iv(this.addr,t),Mn(n,t)}}function tw(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function ew(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sn(n,t))return;s.uniform2uiv(this.addr,t),Mn(n,t)}}function nw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sn(n,t))return;s.uniform3uiv(this.addr,t),Mn(n,t)}}function iw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sn(n,t))return;s.uniform4uiv(this.addr,t),Mn(n,t)}}function aw(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Ev.compareFunction=R_,c=Ev):c=$_,n.setTexture2D(t||c,o)}function sw(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||ey,o)}function rw(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||ny,o)}function ow(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||ty,o)}function lw(s){switch(s){case 5126:return kA;case 35664:return jA;case 35665:return XA;case 35666:return WA;case 35674:return qA;case 35675:return YA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return tw;case 36294:return ew;case 36295:return nw;case 36296:return iw;case 35678:case 36198:case 36298:case 36306:case 35682:return aw;case 35679:case 36299:case 36307:return sw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return ow}}function cw(s,t){s.uniform1fv(this.addr,t)}function uw(s,t){const n=to(t,this.size,2);s.uniform2fv(this.addr,n)}function fw(s,t){const n=to(t,this.size,3);s.uniform3fv(this.addr,n)}function hw(s,t){const n=to(t,this.size,4);s.uniform4fv(this.addr,n)}function dw(s,t){const n=to(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function pw(s,t){const n=to(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function mw(s,t){const n=to(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function xw(s,t){s.uniform1iv(this.addr,t)}function gw(s,t){s.uniform2iv(this.addr,t)}function vw(s,t){s.uniform3iv(this.addr,t)}function _w(s,t){s.uniform4iv(this.addr,t)}function yw(s,t){s.uniform1uiv(this.addr,t)}function bw(s,t){s.uniform2uiv(this.addr,t)}function Sw(s,t){s.uniform3uiv(this.addr,t)}function Mw(s,t){s.uniform4uiv(this.addr,t)}function Ew(s,t,n){const a=this.cache,o=t.length,c=Mu(n,o);Sn(a,c)||(s.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||$_,c[u])}function Tw(s,t,n){const a=this.cache,o=t.length,c=Mu(n,o);Sn(a,c)||(s.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||ey,c[u])}function Aw(s,t,n){const a=this.cache,o=t.length,c=Mu(n,o);Sn(a,c)||(s.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||ny,c[u])}function ww(s,t,n){const a=this.cache,o=t.length,c=Mu(n,o);Sn(a,c)||(s.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||ty,c[u])}function Rw(s){switch(s){case 5126:return cw;case 35664:return uw;case 35665:return fw;case 35666:return hw;case 35674:return dw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return xw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return _w;case 5125:return yw;case 36294:return bw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return ww}}class Cw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=lw(n.type)}}class Nw{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Rw(n.type)}}class Dw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function Nv(s,t){s.seq.push(t),s.map[t.id]=t}function Lw(s,t,n){const a=s.name,o=a.length;for(_d.lastIndex=0;;){const c=_d.exec(a),u=_d.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){Nv(n,p===void 0?new Cw(h,s,t):new Nw(h,s,t));break}else{let x=n.map[h];x===void 0&&(x=new Dw(h),Nv(n,x)),n=x}}}class du{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);Lw(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function Dv(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const Uw=37297;let Ow=0;function Pw(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const Lv=new _e;function zw(s){Pe._getMatrix(Lv,Pe.workingColorSpace,s);const t=`mat3( ${Lv.elements.map(n=>n.toFixed(4))} )`;switch(Pe.getTransfer(s)){case mu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return pe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Uv(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+Pw(s.getShaderSource(t),h)}else return c}function Fw(s,t){const n=zw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Iw(s,t){let n;switch(t){case s3:n="Linear";break;case v_:n="Reinhard";break;case r3:n="Cineon";break;case o3:n="ACESFilmic";break;case c3:n="AgX";break;case u3:n="Neutral";break;case l3:n="Custom";break;default:pe("WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const iu=new X;function Bw(){Pe.getLuminanceCoefficients(iu);const s=iu.x.toFixed(4),t=iu.y.toFixed(4),n=iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function Vw(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function Gw(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:h}}return n}function rl(s){return s!==""}function Ov(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pv(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function xp(s){return s.replace(kw,Xw)}const jw=new Map;function Xw(s,t){let n=ye[t];if(n===void 0){const a=jw.get(t);if(a!==void 0)n=ye[a],pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return xp(n)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zv(s){return s.replace(Ww,qw)}function qw(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Fv(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yw(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===x_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===IM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ga&&(t="SHADOWMAP_TYPE_VSM"),t}function Zw(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case jr:case Xr:t="ENVMAP_TYPE_CUBE";break;case yu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Kw(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xr:t="ENVMAP_MODE_REFRACTION";break}return t}function Qw(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case g_:t="ENVMAP_BLENDING_MULTIPLY";break;case i3:t="ENVMAP_BLENDING_MIX";break;case a3:t="ENVMAP_BLENDING_ADD";break}return t}function Jw(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function $w(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=Yw(n),p=Zw(n),g=Kw(n),x=Qw(n),v=Jw(n),S=Hw(n),E=Vw(c),A=o.createProgram();let M,y,z=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(rl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(rl).join(`
`),y.length>0&&(y+=`
`)):(M=[Fv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),y=[Fv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fs?"#define TONE_MAPPING":"",n.toneMapping!==fs?ye.tonemapping_pars_fragment:"",n.toneMapping!==fs?Iw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,Fw("linearToOutputTexel",n.outputColorSpace),Bw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rl).join(`
`)),u=xp(u),u=Ov(u,n),u=Pv(u,n),h=xp(h),h=Ov(h,n),h=Pv(h,n),u=zv(u),h=zv(h),n.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===Gg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const R=z+M+u,O=z+y+h,B=Dv(o,o.VERTEX_SHADER,R),P=Dv(o,o.FRAGMENT_SHADER,O);o.attachShader(A,B),o.attachShader(A,P),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function I(G){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",ot=o.getShaderInfoLog(B)||"",xt=o.getShaderInfoLog(P)||"",ut=$.trim(),H=ot.trim(),Y=xt.trim();let K=!0,vt=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,B,P);else{const bt=Uv(o,B,"vertex"),F=Uv(o,P,"fragment");ln("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ut+`
`+bt+`
`+F)}else ut!==""?pe("WebGLProgram: Program Info Log:",ut):(H===""||Y==="")&&(vt=!1);vt&&(G.diagnostics={runnable:K,programLog:ut,vertexShader:{log:H,prefix:M},fragmentShader:{log:Y,prefix:y}})}o.deleteShader(B),o.deleteShader(P),Z=new du(o,A),D=Gw(o,A)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(A,Uw)),N},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ow++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=P,this}let tR=0;class eR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new nR(t),n.set(t,a)),a}}class nR{constructor(t){this.id=tR++,this.code=t,this.usedTimes=0}}function iR(s,t,n,a,o,c,u){const h=new L_,m=new eR,p=new Set,g=[],x=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,N,G,$,ot){const xt=$.fog,ut=ot.geometry,H=D.isMeshStandardMaterial?$.environment:null,Y=(D.isMeshStandardMaterial?n:t).get(D.envMap||H),K=Y&&Y.mapping===yu?Y.image.height:null,vt=E[D.type];D.precision!==null&&(S=o.getMaxPrecision(D.precision),S!==D.precision&&pe("WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const bt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,F=bt!==void 0?bt.length:0;let at=0;ut.morphAttributes.position!==void 0&&(at=1),ut.morphAttributes.normal!==void 0&&(at=2),ut.morphAttributes.color!==void 0&&(at=3);let yt,Ct,kt,st;if(vt){const De=Ii[vt];yt=De.vertexShader,Ct=De.fragmentShader}else yt=D.vertexShader,Ct=D.fragmentShader,m.update(D),kt=m.getVertexShaderID(D),st=m.getFragmentShaderID(D);const ft=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),Gt=ot.isInstancedMesh===!0,Qt=ot.isBatchedMesh===!0,me=!!D.map,ze=!!D.matcap,ce=!!Y,St=!!D.aoMap,U=!!D.lightMap,Tt=!!D.bumpMap,Nt=!!D.normalMap,Lt=!!D.displacementMap,wt=!!D.emissiveMap,qt=!!D.metalnessMap,Ft=!!D.roughnessMap,Xt=D.anisotropy>0,L=D.clearcoat>0,T=D.dispersion>0,J=D.iridescence>0,ht=D.sheen>0,Mt=D.transmission>0,ct=Xt&&!!D.anisotropyMap,ee=L&&!!D.clearcoatMap,It=L&&!!D.clearcoatNormalMap,ie=L&&!!D.clearcoatRoughnessMap,$t=J&&!!D.iridescenceMap,Et=J&&!!D.iridescenceThicknessMap,Rt=ht&&!!D.sheenColorMap,ne=ht&&!!D.sheenRoughnessMap,Jt=!!D.specularMap,jt=!!D.specularColorMap,fe=!!D.specularIntensityMap,k=Mt&&!!D.transmissionMap,Bt=Mt&&!!D.thicknessMap,Ot=!!D.gradientMap,Pt=!!D.alphaMap,At=D.alphaTest>0,_t=!!D.alphaHash,Yt=!!D.extensions;let he=fs;D.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(he=s.toneMapping);const Ve={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:yt,fragmentShader:Ct,defines:D.defines,customVertexShaderID:kt,customFragmentShaderID:st,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:Qt,batchingColor:Qt&&ot._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&ot.instanceColor!==null,instancingMorph:Gt&&ot.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Wr,alphaToCoverage:!!D.alphaToCoverage,map:me,matcap:ze,envMap:ce,envMapMode:ce&&Y.mapping,envMapCubeUVHeight:K,aoMap:St,lightMap:U,bumpMap:Tt,normalMap:Nt,displacementMap:v&&Lt,emissiveMap:wt,normalMapObjectSpace:Nt&&D.normalMapType===p3,normalMapTangentSpace:Nt&&D.normalMapType===w_,metalnessMap:qt,roughnessMap:Ft,anisotropy:Xt,anisotropyMap:ct,clearcoat:L,clearcoatMap:ee,clearcoatNormalMap:It,clearcoatRoughnessMap:ie,dispersion:T,iridescence:J,iridescenceMap:$t,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:Rt,sheenRoughnessMap:ne,specularMap:Jt,specularColorMap:jt,specularIntensityMap:fe,transmission:Mt,transmissionMap:k,thicknessMap:Bt,gradientMap:Ot,opaque:D.transparent===!1&&D.blending===Vr&&D.alphaToCoverage===!1,alphaMap:Pt,alphaTest:At,alphaHash:_t,combine:D.combine,mapUv:me&&A(D.map.channel),aoMapUv:St&&A(D.aoMap.channel),lightMapUv:U&&A(D.lightMap.channel),bumpMapUv:Tt&&A(D.bumpMap.channel),normalMapUv:Nt&&A(D.normalMap.channel),displacementMapUv:Lt&&A(D.displacementMap.channel),emissiveMapUv:wt&&A(D.emissiveMap.channel),metalnessMapUv:qt&&A(D.metalnessMap.channel),roughnessMapUv:Ft&&A(D.roughnessMap.channel),anisotropyMapUv:ct&&A(D.anisotropyMap.channel),clearcoatMapUv:ee&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:It&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:ne&&A(D.sheenRoughnessMap.channel),specularMapUv:Jt&&A(D.specularMap.channel),specularColorMapUv:jt&&A(D.specularColorMap.channel),specularIntensityMapUv:fe&&A(D.specularIntensityMap.channel),transmissionMapUv:k&&A(D.transmissionMap.channel),thicknessMapUv:Bt&&A(D.thicknessMap.channel),alphaMapUv:Pt&&A(D.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Nt||Xt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ut.attributes.uv&&(me||Pt),fog:!!xt,useFog:D.fog===!0,fogExp2:!!xt&&xt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:zt,skinning:ot.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:at,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:me&&D.map.isVideoTexture===!0&&Pe.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:wt&&D.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===va,flipSided:D.side===Kn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Yt&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&D.extensions.multiDraw===!0||Qt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function y(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)N.push(G),N.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(z(N,D),R(N,D),N.push(s.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function z(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function R(D,N){h.disableAll(),N.supportsVertexTextures&&h.enable(0),N.instancing&&h.enable(1),N.instancingColor&&h.enable(2),N.instancingMorph&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),N.dispersion&&h.enable(20),N.batchingColor&&h.enable(21),N.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),D.push(h.mask)}function O(D){const N=E[D.type];let G;if(N){const $=Ii[N];G=j3.clone($.uniforms)}else G=D.uniforms;return G}function B(D,N){let G;for(let $=0,ot=g.length;$<ot;$++){const xt=g[$];if(xt.cacheKey===N){G=xt,++G.usedTimes;break}}return G===void 0&&(G=new $w(s,N,D,c),g.push(G)),G}function P(D){if(--D.usedTimes===0){const N=g.indexOf(D);g[N]=g[g.length-1],g.pop(),D.destroy()}}function I(D){m.remove(D)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:O,acquireProgram:B,releaseProgram:P,releaseShaderCache:I,programs:g,dispose:Z}}function aR(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,m){s.get(u)[h]=m}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function sR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Iv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bv(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(x,v,S,E,A,M){let y=s[t];return y===void 0?(y={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:A,group:M},s[t]=y):(y.id=x.id,y.object=x,y.geometry=v,y.material=S,y.groupOrder=E,y.renderOrder=x.renderOrder,y.z=A,y.group=M),t++,y}function h(x,v,S,E,A,M){const y=u(x,v,S,E,A,M);S.transmission>0?a.push(y):S.transparent===!0?o.push(y):n.push(y)}function m(x,v,S,E,A,M){const y=u(x,v,S,E,A,M);S.transmission>0?a.unshift(y):S.transparent===!0?o.unshift(y):n.unshift(y)}function p(x,v){n.length>1&&n.sort(x||sR),a.length>1&&a.sort(v||Iv),o.length>1&&o.sort(v||Iv)}function g(){for(let x=t,v=s.length;x<v;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:g,sort:p}}function rR(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new Bv,s.set(a,[u])):o>=c.length?(u=new Bv,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function oR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new X,color:new Ce};break;case"SpotLight":n={position:new X,direction:new X,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":n={color:new Ce,position:new X,halfWidth:new X,halfHeight:new X};break}return s[t.id]=n,n}}}function lR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let cR=0;function uR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function fR(s){const t=new oR,n=lR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new X);const o=new X,c=new sn,u=new sn;function h(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let S=0,E=0,A=0,M=0,y=0,z=0,R=0,O=0,B=0,P=0,I=0;p.sort(uR);for(let D=0,N=p.length;D<N;D++){const G=p[D],$=G.color,ot=G.intensity,xt=G.distance,ut=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=$.r*ot,x+=$.g*ot,v+=$.b*ot;else if(G.isLightProbe){for(let H=0;H<9;H++)a.probe[H].addScaledVector(G.sh.coefficients[H],ot);I++}else if(G.isDirectionalLight){const H=t.get(G);if(H.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,K=n.get(G);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,a.directionalShadow[S]=K,a.directionalShadowMap[S]=ut,a.directionalShadowMatrix[S]=G.shadow.matrix,z++}a.directional[S]=H,S++}else if(G.isSpotLight){const H=t.get(G);H.position.setFromMatrixPosition(G.matrixWorld),H.color.copy($).multiplyScalar(ot),H.distance=xt,H.coneCos=Math.cos(G.angle),H.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),H.decay=G.decay,a.spot[A]=H;const Y=G.shadow;if(G.map&&(a.spotLightMap[B]=G.map,B++,Y.updateMatrices(G),G.castShadow&&P++),a.spotLightMatrix[A]=Y.matrix,G.castShadow){const K=n.get(G);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,a.spotShadow[A]=K,a.spotShadowMap[A]=ut,O++}A++}else if(G.isRectAreaLight){const H=t.get(G);H.color.copy($).multiplyScalar(ot),H.halfWidth.set(G.width*.5,0,0),H.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=H,M++}else if(G.isPointLight){const H=t.get(G);if(H.color.copy(G.color).multiplyScalar(G.intensity),H.distance=G.distance,H.decay=G.decay,G.castShadow){const Y=G.shadow,K=n.get(G);K.shadowIntensity=Y.intensity,K.shadowBias=Y.bias,K.shadowNormalBias=Y.normalBias,K.shadowRadius=Y.radius,K.shadowMapSize=Y.mapSize,K.shadowCameraNear=Y.camera.near,K.shadowCameraFar=Y.camera.far,a.pointShadow[E]=K,a.pointShadowMap[E]=ut,a.pointShadowMatrix[E]=G.shadow.matrix,R++}a.point[E]=H,E++}else if(G.isHemisphereLight){const H=t.get(G);H.skyColor.copy(G.color).multiplyScalar(ot),H.groundColor.copy(G.groundColor).multiplyScalar(ot),a.hemi[y]=H,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Vt.LTC_FLOAT_1,a.rectAreaLTC2=Vt.LTC_FLOAT_2):(a.rectAreaLTC1=Vt.LTC_HALF_1,a.rectAreaLTC2=Vt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=x,a.ambient[2]=v;const Z=a.hash;(Z.directionalLength!==S||Z.pointLength!==E||Z.spotLength!==A||Z.rectAreaLength!==M||Z.hemiLength!==y||Z.numDirectionalShadows!==z||Z.numPointShadows!==R||Z.numSpotShadows!==O||Z.numSpotMaps!==B||Z.numLightProbes!==I)&&(a.directional.length=S,a.spot.length=A,a.rectArea.length=M,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=z,a.directionalShadowMap.length=z,a.pointShadow.length=R,a.pointShadowMap.length=R,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=z,a.pointShadowMatrix.length=R,a.spotLightMatrix.length=O+B-P,a.spotLightMap.length=B,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=I,Z.directionalLength=S,Z.pointLength=E,Z.spotLength=A,Z.rectAreaLength=M,Z.hemiLength=y,Z.numDirectionalShadows=z,Z.numPointShadows=R,Z.numSpotShadows=O,Z.numSpotMaps=B,Z.numLightProbes=I,a.version=cR++)}function m(p,g){let x=0,v=0,S=0,E=0,A=0;const M=g.matrixWorldInverse;for(let y=0,z=p.length;y<z;y++){const R=p[y];if(R.isDirectionalLight){const O=a.directional[x];O.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(M),x++}else if(R.isSpotLight){const O=a.spot[S];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(M),O.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),O.direction.sub(o),O.direction.transformDirection(M),S++}else if(R.isRectAreaLight){const O=a.rectArea[E];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(M),u.identity(),c.copy(R.matrixWorld),c.premultiply(M),u.extractRotation(c),O.halfWidth.set(R.width*.5,0,0),O.halfHeight.set(0,R.height*.5,0),O.halfWidth.applyMatrix4(u),O.halfHeight.applyMatrix4(u),E++}else if(R.isPointLight){const O=a.point[v];O.position.setFromMatrixPosition(R.matrixWorld),O.position.applyMatrix4(M),v++}else if(R.isHemisphereLight){const O=a.hemi[A];O.direction.setFromMatrixPosition(R.matrixWorld),O.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:a}}function Hv(s){const t=new fR(s),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){t.setup(n)}function m(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u}}function hR(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new Hv(s),t.set(o,[h])):c>=u.length?(h=new Hv(s),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function mR(s,t,n){let a=new Up;const o=new Ut,c=new Ut,u=new qe,h=new P2({depthPacking:d3}),m=new z2,p={},g=n.maxTextureSize,x={[hs]:Kn,[Kn]:hs,[va]:va},v=new Aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:dR,fragmentShader:pR}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ca;E.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new bi(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=x_;let y=this.type;this.render=function(P,I,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;const D=s.getRenderTarget(),N=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Sa),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ot=y!==ga&&this.type===ga,xt=y===ga&&this.type!==ga;for(let ut=0,H=P.length;ut<H;ut++){const Y=P[ut],K=Y.shadow;if(K===void 0){pe("WebGLShadowMap:",Y,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const vt=K.getFrameExtents();if(o.multiply(vt),c.copy(K.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/vt.x),o.x=c.x*vt.x,K.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/vt.y),o.y=c.y*vt.y,K.mapSize.y=c.y)),K.map===null||ot===!0||xt===!0){const F=this.type!==ga?{minFilter:ci,magFilter:ci}:{};K.map!==null&&K.map.dispose(),K.map=new Gs(o.x,o.y,F),K.map.texture.name=Y.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const bt=K.getViewportCount();for(let F=0;F<bt;F++){const at=K.getViewport(F);u.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),$.viewport(u),K.updateMatrices(Y,F),a=K.getFrustum(),O(I,Z,K.camera,Y,this.type)}K.isPointLightShadow!==!0&&this.type===ga&&z(K,Z),K.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(D,N,G)};function z(P,I){const Z=t.update(A);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Gs(o.x,o.y)),v.uniforms.shadow_pass.value=P.map.texture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(I,null,Z,v,A,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(I,null,Z,S,A,null)}function R(P,I,Z,D){let N=null;const G=Z.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)N=G;else if(N=Z.isPointLight===!0?m:h,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const $=N.uuid,ot=I.uuid;let xt=p[$];xt===void 0&&(xt={},p[$]=xt);let ut=xt[ot];ut===void 0&&(ut=N.clone(),xt[ot]=ut,I.addEventListener("dispose",B)),N=ut}if(N.visible=I.visible,N.wireframe=I.wireframe,D===ga?N.side=I.shadowSide!==null?I.shadowSide:I.side:N.side=I.shadowSide!==null?I.shadowSide:x[I.side],N.alphaMap=I.alphaMap,N.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,N.map=I.map,N.clipShadows=I.clipShadows,N.clippingPlanes=I.clippingPlanes,N.clipIntersection=I.clipIntersection,N.displacementMap=I.displacementMap,N.displacementScale=I.displacementScale,N.displacementBias=I.displacementBias,N.wireframeLinewidth=I.wireframeLinewidth,N.linewidth=I.linewidth,Z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const $=s.properties.get(N);$.light=Z}return N}function O(P,I,Z,D,N){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&N===ga)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld);const ot=t.update(P),xt=P.material;if(Array.isArray(xt)){const ut=ot.groups;for(let H=0,Y=ut.length;H<Y;H++){const K=ut[H],vt=xt[K.materialIndex];if(vt&&vt.visible){const bt=R(P,vt,D,N);P.onBeforeShadow(s,P,I,Z,ot,bt,K),s.renderBufferDirect(Z,null,ot,bt,P,K),P.onAfterShadow(s,P,I,Z,ot,bt,K)}}}else if(xt.visible){const ut=R(P,xt,D,N);P.onBeforeShadow(s,P,I,Z,ot,ut,null),s.renderBufferDirect(Z,null,ot,ut,P,null),P.onAfterShadow(s,P,I,Z,ot,ut,null)}}const $=P.children;for(let ot=0,xt=$.length;ot<xt;ot++)O($[ot],I,Z,D,N)}function B(P){P.target.removeEventListener("dispose",B);for(const Z in p){const D=p[Z],N=P.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}const xR={[wd]:Rd,[Cd]:Ld,[Nd]:Ud,[kr]:Dd,[Rd]:wd,[Ld]:Cd,[Ud]:Nd,[Dd]:kr};function gR(s,t){function n(){let k=!1;const Bt=new qe;let Ot=null;const Pt=new qe(0,0,0,0);return{setMask:function(At){Ot!==At&&!k&&(s.colorMask(At,At,At,At),Ot=At)},setLocked:function(At){k=At},setClear:function(At,_t,Yt,he,Ve){Ve===!0&&(At*=he,_t*=he,Yt*=he),Bt.set(At,_t,Yt,he),Pt.equals(Bt)===!1&&(s.clearColor(At,_t,Yt,he),Pt.copy(Bt))},reset:function(){k=!1,Ot=null,Pt.set(-1,0,0,0)}}}function a(){let k=!1,Bt=!1,Ot=null,Pt=null,At=null;return{setReversed:function(_t){if(Bt!==_t){const Yt=t.get("EXT_clip_control");_t?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Bt=_t;const he=At;At=null,this.setClear(he)}},getReversed:function(){return Bt},setTest:function(_t){_t?ft(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(_t){Ot!==_t&&!k&&(s.depthMask(_t),Ot=_t)},setFunc:function(_t){if(Bt&&(_t=xR[_t]),Pt!==_t){switch(_t){case wd:s.depthFunc(s.NEVER);break;case Rd:s.depthFunc(s.ALWAYS);break;case Cd:s.depthFunc(s.LESS);break;case kr:s.depthFunc(s.LEQUAL);break;case Nd:s.depthFunc(s.EQUAL);break;case Dd:s.depthFunc(s.GEQUAL);break;case Ld:s.depthFunc(s.GREATER);break;case Ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){At!==_t&&(Bt&&(_t=1-_t),s.clearDepth(_t),At=_t)},reset:function(){k=!1,Ot=null,Pt=null,At=null,Bt=!1}}}function o(){let k=!1,Bt=null,Ot=null,Pt=null,At=null,_t=null,Yt=null,he=null,Ve=null;return{setTest:function(De){k||(De?ft(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(De){Bt!==De&&!k&&(s.stencilMask(De),Bt=De)},setFunc:function(De,On,Qn){(Ot!==De||Pt!==On||At!==Qn)&&(s.stencilFunc(De,On,Qn),Ot=De,Pt=On,At=Qn)},setOp:function(De,On,Qn){(_t!==De||Yt!==On||he!==Qn)&&(s.stencilOp(De,On,Qn),_t=De,Yt=On,he=Qn)},setLocked:function(De){k=De},setClear:function(De){Ve!==De&&(s.clearStencil(De),Ve=De)},reset:function(){k=!1,Bt=null,Ot=null,Pt=null,At=null,_t=null,Yt=null,he=null,Ve=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,S=[],E=null,A=!1,M=null,y=null,z=null,R=null,O=null,B=null,P=null,I=new Ce(0,0,0),Z=0,D=!1,N=null,G=null,$=null,ot=null,xt=null;const ut=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=Y>=1):K.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=Y>=2);let vt=null,bt={};const F=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),yt=new qe().fromArray(F),Ct=new qe().fromArray(at);function kt(k,Bt,Ot,Pt){const At=new Uint8Array(4),_t=s.createTexture();s.bindTexture(k,_t),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<Ot;Yt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Bt,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(Bt+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return _t}const st={};st[s.TEXTURE_2D]=kt(s.TEXTURE_2D,s.TEXTURE_2D,1),st[s.TEXTURE_CUBE_MAP]=kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[s.TEXTURE_2D_ARRAY]=kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),st[s.TEXTURE_3D]=kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ft(s.DEPTH_TEST),u.setFunc(kr),Tt(!1),Nt(zg),ft(s.CULL_FACE),St(Sa);function ft(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function zt(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Gt(k,Bt){return x[k]!==Bt?(s.bindFramebuffer(k,Bt),x[k]=Bt,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Bt),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Qt(k,Bt){let Ot=S,Pt=!1;if(k){Ot=v.get(Bt),Ot===void 0&&(Ot=[],v.set(Bt,Ot));const At=k.textures;if(Ot.length!==At.length||Ot[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Yt=At.length;_t<Yt;_t++)Ot[_t]=s.COLOR_ATTACHMENT0+_t;Ot.length=At.length,Pt=!0}}else Ot[0]!==s.BACK&&(Ot[0]=s.BACK,Pt=!0);Pt&&s.drawBuffers(Ot)}function me(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const ze={[Fs]:s.FUNC_ADD,[HM]:s.FUNC_SUBTRACT,[VM]:s.FUNC_REVERSE_SUBTRACT};ze[GM]=s.MIN,ze[kM]=s.MAX;const ce={[jM]:s.ZERO,[XM]:s.ONE,[WM]:s.SRC_COLOR,[Td]:s.SRC_ALPHA,[JM]:s.SRC_ALPHA_SATURATE,[KM]:s.DST_COLOR,[YM]:s.DST_ALPHA,[qM]:s.ONE_MINUS_SRC_COLOR,[Ad]:s.ONE_MINUS_SRC_ALPHA,[QM]:s.ONE_MINUS_DST_COLOR,[ZM]:s.ONE_MINUS_DST_ALPHA,[$M]:s.CONSTANT_COLOR,[t3]:s.ONE_MINUS_CONSTANT_COLOR,[e3]:s.CONSTANT_ALPHA,[n3]:s.ONE_MINUS_CONSTANT_ALPHA};function St(k,Bt,Ot,Pt,At,_t,Yt,he,Ve,De){if(k===Sa){A===!0&&(zt(s.BLEND),A=!1);return}if(A===!1&&(ft(s.BLEND),A=!0),k!==BM){if(k!==M||De!==D){if((y!==Fs||O!==Fs)&&(s.blendEquation(s.FUNC_ADD),y=Fs,O=Fs),De)switch(k){case Vr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fg:s.blendFunc(s.ONE,s.ONE);break;case Ig:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ln("WebGLState: Invalid blending: ",k);break}else switch(k){case Vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fg:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ig:ln("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bg:ln("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ln("WebGLState: Invalid blending: ",k);break}z=null,R=null,B=null,P=null,I.set(0,0,0),Z=0,M=k,D=De}return}At=At||Bt,_t=_t||Ot,Yt=Yt||Pt,(Bt!==y||At!==O)&&(s.blendEquationSeparate(ze[Bt],ze[At]),y=Bt,O=At),(Ot!==z||Pt!==R||_t!==B||Yt!==P)&&(s.blendFuncSeparate(ce[Ot],ce[Pt],ce[_t],ce[Yt]),z=Ot,R=Pt,B=_t,P=Yt),(he.equals(I)===!1||Ve!==Z)&&(s.blendColor(he.r,he.g,he.b,Ve),I.copy(he),Z=Ve),M=k,D=!1}function U(k,Bt){k.side===va?zt(s.CULL_FACE):ft(s.CULL_FACE);let Ot=k.side===Kn;Bt&&(Ot=!Ot),Tt(Ot),k.blending===Vr&&k.transparent===!1?St(Sa):St(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Pt=k.stencilWrite;h.setTest(Pt),Pt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),wt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(k){N!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),N=k)}function Nt(k){k!==zM?(ft(s.CULL_FACE),k!==G&&(k===zg?s.cullFace(s.BACK):k===FM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),G=k}function Lt(k){k!==$&&(H&&s.lineWidth(k),$=k)}function wt(k,Bt,Ot){k?(ft(s.POLYGON_OFFSET_FILL),(ot!==Bt||xt!==Ot)&&(s.polygonOffset(Bt,Ot),ot=Bt,xt=Ot)):zt(s.POLYGON_OFFSET_FILL)}function qt(k){k?ft(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function Ft(k){k===void 0&&(k=s.TEXTURE0+ut-1),vt!==k&&(s.activeTexture(k),vt=k)}function Xt(k,Bt,Ot){Ot===void 0&&(vt===null?Ot=s.TEXTURE0+ut-1:Ot=vt);let Pt=bt[Ot];Pt===void 0&&(Pt={type:void 0,texture:void 0},bt[Ot]=Pt),(Pt.type!==k||Pt.texture!==Bt)&&(vt!==Ot&&(s.activeTexture(Ot),vt=Ot),s.bindTexture(k,Bt||st[k]),Pt.type=k,Pt.texture=Bt)}function L(){const k=bt[vt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ht(){try{s.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Mt(){try{s.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ct(){try{s.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ee(){try{s.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function It(){try{s.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ie(){try{s.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function $t(){try{s.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Et(){try{s.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Rt(k){yt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function ne(k){Ct.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Ct.copy(k))}function Jt(k,Bt){let Ot=p.get(Bt);Ot===void 0&&(Ot=new WeakMap,p.set(Bt,Ot));let Pt=Ot.get(k);Pt===void 0&&(Pt=s.getUniformBlockIndex(Bt,k.name),Ot.set(k,Pt))}function jt(k,Bt){const Pt=p.get(Bt).get(k);m.get(Bt)!==Pt&&(s.uniformBlockBinding(Bt,Pt,k.__bindingPointIndex),m.set(Bt,Pt))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},vt=null,bt={},x={},v=new WeakMap,S=[],E=null,A=!1,M=null,y=null,z=null,R=null,O=null,B=null,P=null,I=new Ce(0,0,0),Z=0,D=!1,N=null,G=null,$=null,ot=null,xt=null,yt.set(0,0,s.canvas.width,s.canvas.height),Ct.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ft,disable:zt,bindFramebuffer:Gt,drawBuffers:Qt,useProgram:me,setBlending:St,setMaterial:U,setFlipSided:Tt,setCullFace:Nt,setLineWidth:Lt,setPolygonOffset:wt,setScissorTest:qt,activeTexture:Ft,bindTexture:Xt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:$t,texImage3D:Et,updateUBOMapping:Jt,uniformBlockBinding:jt,texStorage2D:It,texStorage3D:ie,texSubImage2D:ht,texSubImage3D:Mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:ee,scissor:Rt,viewport:ne,reset:fe}}function vR(s,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,g=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return S?new OffscreenCanvas(L,T):gu("canvas")}function A(L,T,J){let ht=1;const Mt=Xt(L);if((Mt.width>J||Mt.height>J)&&(ht=J/Math.max(Mt.width,Mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(ht*Mt.width),ee=Math.floor(ht*Mt.height);x===void 0&&(x=E(ct,ee));const It=T?E(ct,ee):x;return It.width=ct,It.height=ee,It.getContext("2d").drawImage(L,0,0,ct,ee),pe("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ct+"x"+ee+")."),It}else return"data"in L&&pe("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),L;return L}function M(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function z(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(L,T,J,ht,Mt=!1){if(L!==null){if(s[L]!==void 0)return s[L];pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=T;if(T===s.RED&&(J===s.FLOAT&&(ct=s.R32F),J===s.HALF_FLOAT&&(ct=s.R16F),J===s.UNSIGNED_BYTE&&(ct=s.R8)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ct=s.R8UI),J===s.UNSIGNED_SHORT&&(ct=s.R16UI),J===s.UNSIGNED_INT&&(ct=s.R32UI),J===s.BYTE&&(ct=s.R8I),J===s.SHORT&&(ct=s.R16I),J===s.INT&&(ct=s.R32I)),T===s.RG&&(J===s.FLOAT&&(ct=s.RG32F),J===s.HALF_FLOAT&&(ct=s.RG16F),J===s.UNSIGNED_BYTE&&(ct=s.RG8)),T===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ct=s.RG8UI),J===s.UNSIGNED_SHORT&&(ct=s.RG16UI),J===s.UNSIGNED_INT&&(ct=s.RG32UI),J===s.BYTE&&(ct=s.RG8I),J===s.SHORT&&(ct=s.RG16I),J===s.INT&&(ct=s.RG32I)),T===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),J===s.UNSIGNED_INT&&(ct=s.RGB32UI),J===s.BYTE&&(ct=s.RGB8I),J===s.SHORT&&(ct=s.RGB16I),J===s.INT&&(ct=s.RGB32I)),T===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),J===s.UNSIGNED_INT&&(ct=s.RGBA32UI),J===s.BYTE&&(ct=s.RGBA8I),J===s.SHORT&&(ct=s.RGBA16I),J===s.INT&&(ct=s.RGBA32I)),T===s.RGB&&(J===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ct=s.R11F_G11F_B10F)),T===s.RGBA){const ee=Mt?mu:Pe.getTransfer(ht);J===s.FLOAT&&(ct=s.RGBA32F),J===s.HALF_FLOAT&&(ct=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ct=ee===Xe?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function O(L,T){let J;return L?T===null||T===Hs||T===hl?J=s.DEPTH24_STENCIL8:T===ya?J=s.DEPTH32F_STENCIL8:T===fl&&(J=s.DEPTH24_STENCIL8,pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Hs||T===hl?J=s.DEPTH_COMPONENT24:T===ya?J=s.DEPTH_COMPONENT32F:T===fl&&(J=s.DEPTH_COMPONENT16),J}function B(L,T){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==ci&&L.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function P(L){const T=L.target;T.removeEventListener("dispose",P),Z(T),T.isVideoTexture&&g.delete(T)}function I(L){const T=L.target;T.removeEventListener("dispose",I),N(T)}function Z(L){const T=a.get(L);if(T.__webglInit===void 0)return;const J=L.source,ht=v.get(J);if(ht){const Mt=ht[T.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(L),Object.keys(ht).length===0&&v.delete(J)}a.remove(L)}function D(L){const T=a.get(L);s.deleteTexture(T.__webglTexture);const J=L.source,ht=v.get(J);delete ht[T.__cacheKey],u.memory.textures--}function N(L){const T=a.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),a.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let Mt=0;Mt<T.__webglFramebuffer[ht].length;Mt++)s.deleteFramebuffer(T.__webglFramebuffer[ht][Mt]);else s.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)s.deleteFramebuffer(T.__webglFramebuffer[ht]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let ht=0,Mt=J.length;ht<Mt;ht++){const ct=a.get(J[ht]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),u.memory.textures--),a.remove(J[ht])}a.remove(L)}let G=0;function $(){G=0}function ot(){const L=G;return L>=o.maxTextures&&pe("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),G+=1,L}function xt(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ut(L,T){const J=a.get(L);if(L.isVideoTexture&&qt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const ht=L.image;if(ht===null)pe("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)pe("WebGLRenderer: Texture marked for update but image is incomplete");else{st(J,L,T);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function H(L,T){const J=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){st(J,L,T);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function Y(L,T){const J=a.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){st(J,L,T);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function K(L,T){const J=a.get(L);if(L.version>0&&J.__version!==L.version){ft(J,L,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}const vt={[zd]:s.REPEAT,[_a]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},bt={[ci]:s.NEAREST,[f3]:s.NEAREST_MIPMAP_NEAREST,[Pc]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[Bh]:s.LINEAR_MIPMAP_NEAREST,[Bs]:s.LINEAR_MIPMAP_LINEAR},F={[m3]:s.NEVER,[b3]:s.ALWAYS,[x3]:s.LESS,[R_]:s.LEQUAL,[g3]:s.EQUAL,[y3]:s.GEQUAL,[v3]:s.GREATER,[_3]:s.NOTEQUAL};function at(L,T){if(T.type===ya&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===Bh||T.magFilter===Pc||T.magFilter===Bs||T.minFilter===yi||T.minFilter===Bh||T.minFilter===Pc||T.minFilter===Bs)&&pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,vt[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,vt[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,vt[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,bt[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,bt[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ci||T.minFilter!==Pc&&T.minFilter!==Bs||T.type===ya&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function yt(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",P));const ht=T.source;let Mt=v.get(ht);Mt===void 0&&(Mt={},v.set(ht,Mt));const ct=xt(T);if(ct!==L.__cacheKey){Mt[ct]===void 0&&(Mt[ct]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Mt[ct].usedTimes++;const ee=Mt[L.__cacheKey];ee!==void 0&&(Mt[L.__cacheKey].usedTimes--,ee.usedTimes===0&&D(T)),L.__cacheKey=ct,L.__webglTexture=Mt[ct].texture}return J}function Ct(L,T,J){return Math.floor(Math.floor(L/J)/T)}function kt(L,T,J,ht){const ct=L.updateRanges;if(ct.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,J,ht,T.data);else{ct.sort((Et,Rt)=>Et.start-Rt.start);let ee=0;for(let Et=1;Et<ct.length;Et++){const Rt=ct[ee],ne=ct[Et],Jt=Rt.start+Rt.count,jt=Ct(ne.start,T.width,4),fe=Ct(Rt.start,T.width,4);ne.start<=Jt+1&&jt===fe&&Ct(ne.start+ne.count-1,T.width,4)===jt?Rt.count=Math.max(Rt.count,ne.start+ne.count-Rt.start):(++ee,ct[ee]=ne)}ct.length=ee+1;const It=s.getParameter(s.UNPACK_ROW_LENGTH),ie=s.getParameter(s.UNPACK_SKIP_PIXELS),$t=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Et=0,Rt=ct.length;Et<Rt;Et++){const ne=ct[Et],Jt=Math.floor(ne.start/4),jt=Math.ceil(ne.count/4),fe=Jt%T.width,k=Math.floor(Jt/T.width),Bt=jt,Ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),n.texSubImage2D(s.TEXTURE_2D,0,fe,k,Bt,Ot,J,ht,T.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,It),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,$t)}}function st(L,T,J){let ht=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=s.TEXTURE_3D);const Mt=yt(L,T),ct=T.source;n.bindTexture(ht,L.__webglTexture,s.TEXTURE0+J);const ee=a.get(ct);if(ct.version!==ee.__version||Mt===!0){n.activeTexture(s.TEXTURE0+J);const It=Pe.getPrimaries(Pe.workingColorSpace),ie=T.colorSpace===cs?null:Pe.getPrimaries(T.colorSpace),$t=T.colorSpace===cs||It===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Et=A(T.image,!1,o.maxTextureSize);Et=Ft(T,Et);const Rt=c.convert(T.format,T.colorSpace),ne=c.convert(T.type);let Jt=R(T.internalFormat,Rt,ne,T.colorSpace,T.isVideoTexture);at(ht,T);let jt;const fe=T.mipmaps,k=T.isVideoTexture!==!0,Bt=ee.__version===void 0||Mt===!0,Ot=ct.dataReady,Pt=B(T,Et);if(T.isDepthTexture)Jt=O(T.format===pl,T.type),Bt&&(k?n.texStorage2D(s.TEXTURE_2D,1,Jt,Et.width,Et.height):n.texImage2D(s.TEXTURE_2D,0,Jt,Et.width,Et.height,0,Rt,ne,null));else if(T.isDataTexture)if(fe.length>0){k&&Bt&&n.texStorage2D(s.TEXTURE_2D,Pt,Jt,fe[0].width,fe[0].height);for(let At=0,_t=fe.length;At<_t;At++)jt=fe[At],k?Ot&&n.texSubImage2D(s.TEXTURE_2D,At,0,0,jt.width,jt.height,Rt,ne,jt.data):n.texImage2D(s.TEXTURE_2D,At,Jt,jt.width,jt.height,0,Rt,ne,jt.data);T.generateMipmaps=!1}else k?(Bt&&n.texStorage2D(s.TEXTURE_2D,Pt,Jt,Et.width,Et.height),Ot&&kt(T,Et,Rt,ne)):n.texImage2D(s.TEXTURE_2D,0,Jt,Et.width,Et.height,0,Rt,ne,Et.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Bt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Jt,fe[0].width,fe[0].height,Et.depth);for(let At=0,_t=fe.length;At<_t;At++)if(jt=fe[At],T.format!==Di)if(Rt!==null)if(k){if(Ot)if(T.layerUpdates.size>0){const Yt=gv(jt.width,jt.height,T.format,T.type);for(const he of T.layerUpdates){const Ve=jt.data.subarray(he*Yt/jt.data.BYTES_PER_ELEMENT,(he+1)*Yt/jt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,he,jt.width,jt.height,1,Rt,Ve)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,jt.width,jt.height,Et.depth,Rt,jt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,Jt,jt.width,jt.height,Et.depth,0,jt.data,0,0);else pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ot&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,jt.width,jt.height,Et.depth,Rt,ne,jt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,At,Jt,jt.width,jt.height,Et.depth,0,Rt,ne,jt.data)}else{k&&Bt&&n.texStorage2D(s.TEXTURE_2D,Pt,Jt,fe[0].width,fe[0].height);for(let At=0,_t=fe.length;At<_t;At++)jt=fe[At],T.format!==Di?Rt!==null?k?Ot&&n.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,jt.width,jt.height,Rt,jt.data):n.compressedTexImage2D(s.TEXTURE_2D,At,Jt,jt.width,jt.height,0,jt.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ot&&n.texSubImage2D(s.TEXTURE_2D,At,0,0,jt.width,jt.height,Rt,ne,jt.data):n.texImage2D(s.TEXTURE_2D,At,Jt,jt.width,jt.height,0,Rt,ne,jt.data)}else if(T.isDataArrayTexture)if(k){if(Bt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Jt,Et.width,Et.height,Et.depth),Ot)if(T.layerUpdates.size>0){const At=gv(Et.width,Et.height,T.format,T.type);for(const _t of T.layerUpdates){const Yt=Et.data.subarray(_t*At/Et.data.BYTES_PER_ELEMENT,(_t+1)*At/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Rt,ne,Yt)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Rt,ne,Et.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Jt,Et.width,Et.height,Et.depth,0,Rt,ne,Et.data);else if(T.isData3DTexture)k?(Bt&&n.texStorage3D(s.TEXTURE_3D,Pt,Jt,Et.width,Et.height,Et.depth),Ot&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Rt,ne,Et.data)):n.texImage3D(s.TEXTURE_3D,0,Jt,Et.width,Et.height,Et.depth,0,Rt,ne,Et.data);else if(T.isFramebufferTexture){if(Bt)if(k)n.texStorage2D(s.TEXTURE_2D,Pt,Jt,Et.width,Et.height);else{let At=Et.width,_t=Et.height;for(let Yt=0;Yt<Pt;Yt++)n.texImage2D(s.TEXTURE_2D,Yt,Jt,At,_t,0,Rt,ne,null),At>>=1,_t>>=1}}else if(fe.length>0){if(k&&Bt){const At=Xt(fe[0]);n.texStorage2D(s.TEXTURE_2D,Pt,Jt,At.width,At.height)}for(let At=0,_t=fe.length;At<_t;At++)jt=fe[At],k?Ot&&n.texSubImage2D(s.TEXTURE_2D,At,0,0,Rt,ne,jt):n.texImage2D(s.TEXTURE_2D,At,Jt,Rt,ne,jt);T.generateMipmaps=!1}else if(k){if(Bt){const At=Xt(Et);n.texStorage2D(s.TEXTURE_2D,Pt,Jt,At.width,At.height)}Ot&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt,ne,Et)}else n.texImage2D(s.TEXTURE_2D,0,Jt,Rt,ne,Et);M(T)&&y(ht),ee.__version=ct.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ft(L,T,J){if(T.image.length!==6)return;const ht=yt(L,T),Mt=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const ct=a.get(Mt);if(Mt.version!==ct.__version||ht===!0){n.activeTexture(s.TEXTURE0+J);const ee=Pe.getPrimaries(Pe.workingColorSpace),It=T.colorSpace===cs?null:Pe.getPrimaries(T.colorSpace),ie=T.colorSpace===cs||ee===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const $t=T.isCompressedTexture||T.image[0].isCompressedTexture,Et=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let _t=0;_t<6;_t++)!$t&&!Et?Rt[_t]=A(T.image[_t],!0,o.maxCubemapSize):Rt[_t]=Et?T.image[_t].image:T.image[_t],Rt[_t]=Ft(T,Rt[_t]);const ne=Rt[0],Jt=c.convert(T.format,T.colorSpace),jt=c.convert(T.type),fe=R(T.internalFormat,Jt,jt,T.colorSpace),k=T.isVideoTexture!==!0,Bt=ct.__version===void 0||ht===!0,Ot=Mt.dataReady;let Pt=B(T,ne);at(s.TEXTURE_CUBE_MAP,T);let At;if($t){k&&Bt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,fe,ne.width,ne.height);for(let _t=0;_t<6;_t++){At=Rt[_t].mipmaps;for(let Yt=0;Yt<At.length;Yt++){const he=At[Yt];T.format!==Di?Jt!==null?k?Ot&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,0,0,he.width,he.height,Jt,he.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,fe,he.width,he.height,0,he.data):pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,0,0,he.width,he.height,Jt,jt,he.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt,fe,he.width,he.height,0,Jt,jt,he.data)}}}else{if(At=T.mipmaps,k&&Bt){At.length>0&&Pt++;const _t=Xt(Rt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,fe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Rt[_t].width,Rt[_t].height,Jt,jt,Rt[_t].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Rt[_t].width,Rt[_t].height,0,Jt,jt,Rt[_t].data);for(let Yt=0;Yt<At.length;Yt++){const Ve=At[Yt].image[_t].image;k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,0,0,Ve.width,Ve.height,Jt,jt,Ve.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,fe,Ve.width,Ve.height,0,Jt,jt,Ve.data)}}else{k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Jt,jt,Rt[_t]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,fe,Jt,jt,Rt[_t]);for(let Yt=0;Yt<At.length;Yt++){const he=At[Yt];k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,0,0,Jt,jt,he.image[_t]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Yt+1,fe,Jt,jt,he.image[_t])}}}M(T)&&y(s.TEXTURE_CUBE_MAP),ct.__version=Mt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function zt(L,T,J,ht,Mt,ct){const ee=c.convert(J.format,J.colorSpace),It=c.convert(J.type),ie=R(J.internalFormat,ee,It,J.colorSpace),$t=a.get(T),Et=a.get(J);if(Et.__renderTarget=T,!$t.__hasExternalTextures){const Rt=Math.max(1,T.width>>ct),ne=Math.max(1,T.height>>ct);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?n.texImage3D(Mt,ct,ie,Rt,ne,T.depth,0,ee,It,null):n.texImage2D(Mt,ct,ie,Rt,ne,0,ee,It,null)}n.bindFramebuffer(s.FRAMEBUFFER,L),wt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,Mt,Et.__webglTexture,0,Lt(T)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,Mt,Et.__webglTexture,ct),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(L,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const ht=T.depthTexture,Mt=ht&&ht.isDepthTexture?ht.type:null,ct=O(T.stencilBuffer,Mt),ee=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,It=Lt(T);wt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,ct,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,ct,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ct,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,L)}else{const ht=T.textures;for(let Mt=0;Mt<ht.length;Mt++){const ct=ht[Mt],ee=c.convert(ct.format,ct.colorSpace),It=c.convert(ct.type),ie=R(ct.internalFormat,ee,It,ct.colorSpace),$t=Lt(T);J&&wt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,ie,T.width,T.height):wt(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ie,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=a.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const Mt=ht.__webglTexture,ct=Lt(T);if(T.depthTexture.format===dl)wt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0);else if(T.depthTexture.format===pl)wt(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function me(L){const T=a.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const Mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",Mt)};ht.addEventListener("dispose",Mt),T.__depthDisposeCallback=Mt}T.__boundDepthTexture=ht}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ht=L.texture.mipmaps;ht&&ht.length>0?Qt(T.__webglFramebuffer[0],L):Qt(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=s.createRenderbuffer(),Gt(T.__webglDepthbuffer[ht],L,!1);else{const Mt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[ht];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,ct)}}else{const ht=L.texture.mipmaps;if(ht&&ht.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Gt(T.__webglDepthbuffer,L,!1);else{const Mt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,ct)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(L,T,J){const ht=a.get(L);T!==void 0&&zt(ht.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&me(L)}function ce(L){const T=L.texture,J=a.get(L),ht=a.get(T);L.addEventListener("dispose",I);const Mt=L.textures,ct=L.isWebGLCubeRenderTarget===!0,ee=Mt.length>1;if(ee||(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=T.version,u.memory.textures++),ct){J.__webglFramebuffer=[];for(let It=0;It<6;It++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[It]=[];for(let ie=0;ie<T.mipmaps.length;ie++)J.__webglFramebuffer[It][ie]=s.createFramebuffer()}else J.__webglFramebuffer[It]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let It=0;It<T.mipmaps.length;It++)J.__webglFramebuffer[It]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(ee)for(let It=0,ie=Mt.length;It<ie;It++){const $t=a.get(Mt[It]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&wt(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let It=0;It<Mt.length;It++){const ie=Mt[It];J.__webglColorRenderbuffer[It]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[It]);const $t=c.convert(ie.format,ie.colorSpace),Et=c.convert(ie.type),Rt=R(ie.internalFormat,$t,Et,ie.colorSpace,L.isXRRenderTarget===!0),ne=Lt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Rt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,J.__webglColorRenderbuffer[It])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Gt(J.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){n.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),at(s.TEXTURE_CUBE_MAP,T);for(let It=0;It<6;It++)if(T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)zt(J.__webglFramebuffer[It][ie],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+It,ie);else zt(J.__webglFramebuffer[It],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+It,0);M(T)&&y(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){for(let It=0,ie=Mt.length;It<ie;It++){const $t=Mt[It],Et=a.get($t);let Rt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Rt,Et.__webglTexture),at(Rt,$t),zt(J.__webglFramebuffer,L,$t,s.COLOR_ATTACHMENT0+It,Rt,0),M($t)&&y(Rt)}n.unbindTexture()}else{let It=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(It=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(It,ht.__webglTexture),at(It,T),T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)zt(J.__webglFramebuffer[ie],L,T,s.COLOR_ATTACHMENT0,It,ie);else zt(J.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,It,0);M(T)&&y(It),n.unbindTexture()}L.depthBuffer&&me(L)}function St(L){const T=L.textures;for(let J=0,ht=T.length;J<ht;J++){const Mt=T[J];if(M(Mt)){const ct=z(L),ee=a.get(Mt).__webglTexture;n.bindTexture(ct,ee),y(ct),n.unbindTexture()}}}const U=[],Tt=[];function Nt(L){if(L.samples>0){if(wt(L)===!1){const T=L.textures,J=L.width,ht=L.height;let Mt=s.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=a.get(L),It=T.length>1;if(It)for(let $t=0;$t<T.length;$t++)n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);const ie=L.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let $t=0;$t<T.length;$t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),It){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ee.__webglColorRenderbuffer[$t]);const Et=a.get(T[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,J,ht,0,0,J,ht,Mt,s.NEAREST),m===!0&&(U.length=0,Tt.length=0,U.push(s.COLOR_ATTACHMENT0+$t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(U.push(ct),Tt.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,U))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),It)for(let $t=0;$t<T.length;$t++){n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,ee.__webglColorRenderbuffer[$t]);const Et=a.get(T[$t]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,Et,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Lt(L){return Math.min(o.maxSamples,L.samples)}function wt(L){const T=a.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qt(L){const T=u.render.frame;g.get(L)!==T&&(g.set(L,T),L.update())}function Ft(L,T){const J=L.colorSpace,ht=L.format,Mt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Wr&&J!==cs&&(Pe.getTransfer(J)===Xe?(ht!==Di||Mt!==Vi)&&pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ln("WebGLTextures: Unsupported texture color space:",J)),T}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=$,this.setTexture2D=ut,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=ze,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=wt}function _R(s,t){function n(a,o=cs){let c;const u=Pe.getTransfer(o);if(a===Vi)return s.UNSIGNED_BYTE;if(a===Tp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Ap)return s.UNSIGNED_SHORT_5_5_5_1;if(a===S_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===M_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===y_)return s.BYTE;if(a===b_)return s.SHORT;if(a===fl)return s.UNSIGNED_SHORT;if(a===Ep)return s.INT;if(a===Hs)return s.UNSIGNED_INT;if(a===ya)return s.FLOAT;if(a===Kr)return s.HALF_FLOAT;if(a===E_)return s.ALPHA;if(a===T_)return s.RGB;if(a===Di)return s.RGBA;if(a===dl)return s.DEPTH_COMPONENT;if(a===pl)return s.DEPTH_STENCIL;if(a===A_)return s.RED;if(a===wp)return s.RED_INTEGER;if(a===Rp)return s.RG;if(a===Cp)return s.RG_INTEGER;if(a===Np)return s.RGBA_INTEGER;if(a===ou||a===lu||a===cu||a===uu)if(u===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Id||a===Bd||a===Hd||a===Vd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Bd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Vd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Gd||a===kd||a===jd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Gd||a===kd)return u===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===jd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Xd||a===Wd||a===qd||a===Yd||a===Zd||a===Kd||a===Qd||a===Jd||a===$d||a===tp||a===ep||a===np||a===ip||a===ap)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Xd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Wd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===qd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Yd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Zd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Kd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jd)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$d)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===tp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ep)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===np)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===ip)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ap)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===sp||a===rp||a===op)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===sp)return u===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===rp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===op)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===lp||a===cp||a===up||a===fp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===lp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===cp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===up)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===fp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===hl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const yR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class SR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new V_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Aa({vertexShader:yR,fragmentShader:bR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bi(new bu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MR extends Xs{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,g=null,x=null,v=null,S=null,E=null;const A=typeof XRWebGLBinding<"u",M=new SR,y={},z=n.getContextAttributes();let R=null,O=null;const B=[],P=[],I=new Ut;let Z=null;const D=new li;D.viewport=new qe;const N=new li;N.viewport=new qe;const G=[D,N],$=new V2;let ot=null,xt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ft=B[st];return ft===void 0&&(ft=new od,B[st]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(st){let ft=B[st];return ft===void 0&&(ft=new od,B[st]=ft),ft.getGripSpace()},this.getHand=function(st){let ft=B[st];return ft===void 0&&(ft=new od,B[st]=ft),ft.getHandSpace()};function ut(st){const ft=P.indexOf(st.inputSource);if(ft===-1)return;const zt=B[ft];zt!==void 0&&(zt.update(st.inputSource,st.frame,p||u),zt.dispatchEvent({type:st.type,data:st.inputSource}))}function H(){o.removeEventListener("select",ut),o.removeEventListener("selectstart",ut),o.removeEventListener("selectend",ut),o.removeEventListener("squeeze",ut),o.removeEventListener("squeezestart",ut),o.removeEventListener("squeezeend",ut),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",Y);for(let st=0;st<B.length;st++){const ft=P[st];ft!==null&&(P[st]=null,B[st].disconnect(ft))}ot=null,xt=null,M.reset();for(const st in y)delete y[st];t.setRenderTarget(R),S=null,v=null,x=null,o=null,O=null,kt.stop(),a.isPresenting=!1,t.setPixelRatio(Z),t.setSize(I.width,I.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,a.isPresenting===!0&&pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){h=st,a.isPresenting===!0&&pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(st){if(o=st,o!==null){if(R=t.getRenderTarget(),o.addEventListener("select",ut),o.addEventListener("selectstart",ut),o.addEventListener("selectend",ut),o.addEventListener("squeeze",ut),o.addEventListener("squeezestart",ut),o.addEventListener("squeezeend",ut),o.addEventListener("end",H),o.addEventListener("inputsourceschange",Y),z.xrCompatible!==!0&&await n.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(I),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,Gt=null,Qt=null;z.depth&&(Qt=z.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,zt=z.stencil?pl:dl,Gt=z.stencil?hl:Hs);const me={colorFormat:n.RGBA8,depthFormat:Qt,scaleFactor:c};x=this.getBinding(),v=x.createProjectionLayer(me),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new Gs(v.textureWidth,v.textureHeight,{format:Di,type:Vi,depthTexture:new H_(v.textureWidth,v.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const zt={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,zt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Gs(S.framebufferWidth,S.framebufferHeight,{format:Di,type:Vi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),kt.setContext(o),kt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(st){for(let ft=0;ft<st.removed.length;ft++){const zt=st.removed[ft],Gt=P.indexOf(zt);Gt>=0&&(P[Gt]=null,B[Gt].disconnect(zt))}for(let ft=0;ft<st.added.length;ft++){const zt=st.added[ft];let Gt=P.indexOf(zt);if(Gt===-1){for(let me=0;me<B.length;me++)if(me>=P.length){P.push(zt),Gt=me;break}else if(P[me]===null){P[me]=zt,Gt=me;break}if(Gt===-1)break}const Qt=B[Gt];Qt&&Qt.connect(zt)}}const K=new X,vt=new X;function bt(st,ft,zt){K.setFromMatrixPosition(ft.matrixWorld),vt.setFromMatrixPosition(zt.matrixWorld);const Gt=K.distanceTo(vt),Qt=ft.projectionMatrix.elements,me=zt.projectionMatrix.elements,ze=Qt[14]/(Qt[10]-1),ce=Qt[14]/(Qt[10]+1),St=(Qt[9]+1)/Qt[5],U=(Qt[9]-1)/Qt[5],Tt=(Qt[8]-1)/Qt[0],Nt=(me[8]+1)/me[0],Lt=ze*Tt,wt=ze*Nt,qt=Gt/(-Tt+Nt),Ft=qt*-Tt;if(ft.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Ft),st.translateZ(qt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Qt[10]===-1)st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Xt=ze+qt,L=ce+qt,T=Lt-Ft,J=wt+(Gt-Ft),ht=St*ce/L*Xt,Mt=U*ce/L*Xt;st.projectionMatrix.makePerspective(T,J,ht,Mt,Xt,L),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function F(st,ft){ft===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ft.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(o===null)return;let ft=st.near,zt=st.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(zt=M.depthFar)),$.near=N.near=D.near=ft,$.far=N.far=D.far=zt,(ot!==$.near||xt!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),ot=$.near,xt=$.far),$.layers.mask=st.layers.mask|6,D.layers.mask=$.layers.mask&3,N.layers.mask=$.layers.mask&5;const Gt=st.parent,Qt=$.cameras;F($,Gt);for(let me=0;me<Qt.length;me++)F(Qt[me],Gt);Qt.length===2?bt($,D,N):$.projectionMatrix.copy(D.projectionMatrix),at(st,$,Gt)};function at(st,ft,zt){zt===null?st.matrix.copy(ft.matrixWorld):(st.matrix.copy(zt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ft.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=hp*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(st){m=st,v!==null&&(v.fixedFoveation=st),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(st){return y[st]};let yt=null;function Ct(st,ft){if(g=ft.getViewerPose(p||u),E=ft,g!==null){const zt=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let Gt=!1;zt.length!==$.cameras.length&&($.cameras.length=0,Gt=!0);for(let ce=0;ce<zt.length;ce++){const St=zt[ce];let U=null;if(S!==null)U=S.getViewport(St);else{const Nt=x.getViewSubImage(v,St);U=Nt.viewport,ce===0&&(t.setRenderTargetTextures(O,Nt.colorTexture,Nt.depthStencilTexture),t.setRenderTarget(O))}let Tt=G[ce];Tt===void 0&&(Tt=new li,Tt.layers.enable(ce),Tt.viewport=new qe,G[ce]=Tt),Tt.matrix.fromArray(St.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(St.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(U.x,U.y,U.width,U.height),ce===0&&($.matrix.copy(Tt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Gt===!0&&$.cameras.push(Tt)}const Qt=o.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){x=a.getBinding();const ce=x.getDepthInformation(zt[0]);ce&&ce.isValid&&ce.texture&&M.init(ce,o.renderState)}if(Qt&&Qt.includes("camera-access")&&A){t.state.unbindTexture(),x=a.getBinding();for(let ce=0;ce<zt.length;ce++){const St=zt[ce].camera;if(St){let U=y[St];U||(U=new V_,y[St]=U);const Tt=x.getCameraImage(St);U.sourceTexture=Tt}}}}for(let zt=0;zt<B.length;zt++){const Gt=P[zt],Qt=B[zt];Gt!==null&&Qt!==void 0&&Qt.update(Gt,ft,p||u)}yt&&yt(st,ft),ft.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ft}),E=null}const kt=new J_;kt.setAnimationLoop(Ct),this.setAnimationLoop=function(st){yt=st},this.dispose=function(){}}}const zs=new Gi,ER=new sn;function TR(s,t){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,F_(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,z,R,O){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),x(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&S(M,y,O)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),A(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,z,R):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Kn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Kn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const z=t.get(y),R=z.envMap,O=z.envMapRotation;R&&(M.envMap.value=R,zs.copy(O),zs.x*=-1,zs.y*=-1,zs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(zs.y*=-1,zs.z*=-1),M.envMapRotation.value.setFromMatrix4(ER.makeRotationFromEuler(zs)),M.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,z,R){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*z,M.scale.value=R*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function x(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function S(M,y,z){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=z.texture,M.transmissionSamplerSize.value.set(z.width,z.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const z=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(z.matrixWorld),M.nearDistance.value=z.shadow.camera.near,M.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function AR(s,t,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,R){const O=R.program;a.uniformBlockBinding(z,O)}function p(z,R){let O=o[z.id];O===void 0&&(E(z),O=g(z),o[z.id]=O,z.addEventListener("dispose",M));const B=R.program;a.updateUBOMapping(z,B);const P=t.render.frame;c[z.id]!==P&&(v(z),c[z.id]=P)}function g(z){const R=x();z.__bindingPointIndex=R;const O=s.createBuffer(),B=z.__size,P=z.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,B,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,R,O),O}function x(){for(let z=0;z<h;z++)if(u.indexOf(z)===-1)return u.push(z),z;return ln("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(z){const R=o[z.id],O=z.uniforms,B=z.__cache;s.bindBuffer(s.UNIFORM_BUFFER,R);for(let P=0,I=O.length;P<I;P++){const Z=Array.isArray(O[P])?O[P]:[O[P]];for(let D=0,N=Z.length;D<N;D++){const G=Z[D];if(S(G,P,D,B)===!0){const $=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let xt=0;for(let ut=0;ut<ot.length;ut++){const H=ot[ut],Y=A(H);typeof H=="number"||typeof H=="boolean"?(G.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,$+xt,G.__data)):H.isMatrix3?(G.__data[0]=H.elements[0],G.__data[1]=H.elements[1],G.__data[2]=H.elements[2],G.__data[3]=0,G.__data[4]=H.elements[3],G.__data[5]=H.elements[4],G.__data[6]=H.elements[5],G.__data[7]=0,G.__data[8]=H.elements[6],G.__data[9]=H.elements[7],G.__data[10]=H.elements[8],G.__data[11]=0):(H.toArray(G.__data,xt),xt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(z,R,O,B){const P=z.value,I=R+"_"+O;if(B[I]===void 0)return typeof P=="number"||typeof P=="boolean"?B[I]=P:B[I]=P.clone(),!0;{const Z=B[I];if(typeof P=="number"||typeof P=="boolean"){if(Z!==P)return B[I]=P,!0}else if(Z.equals(P)===!1)return Z.copy(P),!0}return!1}function E(z){const R=z.uniforms;let O=0;const B=16;for(let I=0,Z=R.length;I<Z;I++){const D=Array.isArray(R[I])?R[I]:[R[I]];for(let N=0,G=D.length;N<G;N++){const $=D[N],ot=Array.isArray($.value)?$.value:[$.value];for(let xt=0,ut=ot.length;xt<ut;xt++){const H=ot[xt],Y=A(H),K=O%B,vt=K%Y.boundary,bt=K+vt;O+=vt,bt!==0&&B-bt<Y.storage&&(O+=B-bt),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=O,O+=Y.storage}}}const P=O%B;return P>0&&(O+=B-P),z.__size=O,z.__cache={},this}function A(z){const R={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(R.boundary=4,R.storage=4):z.isVector2?(R.boundary=8,R.storage=8):z.isVector3||z.isColor?(R.boundary=16,R.storage=12):z.isVector4?(R.boundary=16,R.storage=16):z.isMatrix3?(R.boundary=48,R.storage=48):z.isMatrix4?(R.boundary=64,R.storage=64):z.isTexture?pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pe("WebGLRenderer: Unsupported uniform value type.",z),R}function M(z){const R=z.target;R.removeEventListener("dispose",M);const O=u.indexOf(R.__bindingPointIndex);u.splice(O,1),s.deleteBuffer(o[R.id]),delete o[R.id],delete c[R.id]}function y(){for(const z in o)s.deleteBuffer(o[z]);u=[],o={},c={}}return{bind:m,update:p,dispose:y}}const wR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let xa=null;function RR(){return xa===null&&(xa=new Q3(wR,32,32,Rp,Kr),xa.minFilter=yi,xa.magFilter=yi,xa.wrapS=_a,xa.wrapT=_a,xa.generateMipmaps=!1,xa.needsUpdate=!0),xa}class CR{constructor(t={}){const{canvas:n=S3(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=u;const E=new Set([Np,Cp,wp]),A=new Set([Vi,Hs,fl,hl,Tp,Ap]),M=new Uint32Array(4),y=new Int32Array(4);let z=null,R=null;const O=[],B=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1;this._outputColorSpace=_i;let Z=0,D=0,N=null,G=-1,$=null;const ot=new qe,xt=new qe;let ut=null;const H=new Ce(0);let Y=0,K=n.width,vt=n.height,bt=1,F=null,at=null;const yt=new qe(0,0,K,vt),Ct=new qe(0,0,K,vt);let kt=!1;const st=new Up;let ft=!1,zt=!1;const Gt=new sn,Qt=new X,me=new qe,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function St(){return N===null?bt:1}let U=a;function Tt(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mp}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",_t,!1),n.addEventListener("webglcontextcreationerror",Yt,!1),U===null){const W="webgl2";if(U=Tt(W,C),U===null)throw Tt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let Nt,Lt,wt,qt,Ft,Xt,L,T,J,ht,Mt,ct,ee,It,ie,$t,Et,Rt,ne,Jt,jt,fe,k,Bt;function Ot(){Nt=new FA(U),Nt.init(),fe=new _R(U,Nt),Lt=new RA(U,Nt,t,fe),wt=new gR(U,Nt),Lt.reversedDepthBuffer&&v&&wt.buffers.depth.setReversed(!0),qt=new HA(U),Ft=new aR,Xt=new vR(U,Nt,wt,Ft,Lt,fe,qt),L=new NA(P),T=new zA(P),J=new j2(U),k=new AA(U,J),ht=new IA(U,J,qt,k),Mt=new GA(U,ht,J,qt),ne=new VA(U,Lt,Xt),$t=new CA(Ft),ct=new iR(P,L,T,Nt,Lt,k,$t),ee=new TR(P,Ft),It=new rR,ie=new hR(Nt),Rt=new TA(P,L,T,wt,Mt,S,m),Et=new mR(P,Mt,Lt),Bt=new AR(U,qt,Lt,wt),Jt=new wA(U,Nt,qt),jt=new BA(U,Nt,qt),qt.programs=ct.programs,P.capabilities=Lt,P.extensions=Nt,P.properties=Ft,P.renderLists=It,P.shadowMap=Et,P.state=wt,P.info=qt}Ot();const Pt=new MR(P,U);this.xr=Pt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(C){C!==void 0&&(bt=C,this.setSize(K,vt,!1))},this.getSize=function(C){return C.set(K,vt)},this.setSize=function(C,W,rt=!0){if(Pt.isPresenting){pe("WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,vt=W,n.width=Math.floor(C*bt),n.height=Math.floor(W*bt),rt===!0&&(n.style.width=C+"px",n.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(K*bt,vt*bt).floor()},this.setDrawingBufferSize=function(C,W,rt){K=C,vt=W,bt=rt,n.width=Math.floor(C*rt),n.height=Math.floor(W*rt),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(ot)},this.getViewport=function(C){return C.copy(yt)},this.setViewport=function(C,W,rt,nt){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,W,rt,nt),wt.viewport(ot.copy(yt).multiplyScalar(bt).round())},this.getScissor=function(C){return C.copy(Ct)},this.setScissor=function(C,W,rt,nt){C.isVector4?Ct.set(C.x,C.y,C.z,C.w):Ct.set(C,W,rt,nt),wt.scissor(xt.copy(Ct).multiplyScalar(bt).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(C){wt.setScissorTest(kt=C)},this.setOpaqueSort=function(C){F=C},this.setTransparentSort=function(C){at=C},this.getClearColor=function(C){return C.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,rt=!0){let nt=0;if(C){let Q=!1;if(N!==null){const Dt=N.texture.format;Q=E.has(Dt)}if(Q){const Dt=N.texture.type,Ht=A.has(Dt),Wt=Rt.getClearColor(),Zt=Rt.getClearAlpha(),oe=Wt.r,ue=Wt.g,ae=Wt.b;Ht?(M[0]=oe,M[1]=ue,M[2]=ae,M[3]=Zt,U.clearBufferuiv(U.COLOR,0,M)):(y[0]=oe,y[1]=ue,y[2]=ae,y[3]=Zt,U.clearBufferiv(U.COLOR,0,y))}else nt|=U.COLOR_BUFFER_BIT}W&&(nt|=U.DEPTH_BUFFER_BIT),rt&&(nt|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",_t,!1),n.removeEventListener("webglcontextcreationerror",Yt,!1),Rt.dispose(),It.dispose(),ie.dispose(),Ft.dispose(),L.dispose(),T.dispose(),Mt.dispose(),k.dispose(),Bt.dispose(),ct.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",eo),Pt.removeEventListener("sessionend",no),Mi.stop()};function At(C){C.preventDefault(),jg("WebGLRenderer: Context Lost."),I=!0}function _t(){jg("WebGLRenderer: Context Restored."),I=!1;const C=qt.autoReset,W=Et.enabled,rt=Et.autoUpdate,nt=Et.needsUpdate,Q=Et.type;Ot(),qt.autoReset=C,Et.enabled=W,Et.autoUpdate=rt,Et.needsUpdate=nt,Et.type=Q}function Yt(C){ln("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function he(C){const W=C.target;W.removeEventListener("dispose",he),Ve(W)}function Ve(C){De(C),Ft.remove(C)}function De(C){const W=Ft.get(C).programs;W!==void 0&&(W.forEach(function(rt){ct.releaseProgram(rt)}),C.isShaderMaterial&&ct.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,rt,nt,Q,Dt){W===null&&(W=ze);const Ht=Q.isMesh&&Q.matrixWorld.determinant()<0,Wt=Eu(C,W,rt,nt,Q);wt.setMaterial(nt,Ht);let Zt=rt.index,oe=1;if(nt.wireframe===!0){if(Zt=ht.getWireframeAttribute(rt),Zt===void 0)return;oe=2}const ue=rt.drawRange,ae=rt.attributes.position;let ge=ue.start*oe,Ne=(ue.start+ue.count)*oe;Dt!==null&&(ge=Math.max(ge,Dt.start*oe),Ne=Math.min(Ne,(Dt.start+Dt.count)*oe)),Zt!==null?(ge=Math.max(ge,0),Ne=Math.min(Ne,Zt.count)):ae!=null&&(ge=Math.max(ge,0),Ne=Math.min(Ne,ae.count));const Le=Ne-ge;if(Le<0||Le===1/0)return;k.setup(Q,nt,Wt,rt,Zt);let Ae,Ie=Jt;if(Zt!==null&&(Ae=J.get(Zt),Ie=jt,Ie.setIndex(Ae)),Q.isMesh)nt.wireframe===!0?(wt.setLineWidth(nt.wireframeLinewidth*St()),Ie.setMode(U.LINES)):Ie.setMode(U.TRIANGLES);else if(Q.isLine){let re=nt.linewidth;re===void 0&&(re=1),wt.setLineWidth(re*St()),Q.isLineSegments?Ie.setMode(U.LINES):Q.isLineLoop?Ie.setMode(U.LINE_LOOP):Ie.setMode(U.LINE_STRIP)}else Q.isPoints?Ie.setMode(U.POINTS):Q.isSprite&&Ie.setMode(U.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ml("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const re=Q._multiDrawStarts,Ye=Q._multiDrawCounts,we=Q._multiDrawCount,En=Zt?J.get(Zt).bytesPerElement:1,Da=Ft.get(nt).currentProgram.getUniforms();for(let Ke=0;Ke<we;Ke++)Da.setValue(U,"_gl_DrawID",Ke),Ie.render(re[Ke]/En,Ye[Ke])}else if(Q.isInstancedMesh)Ie.renderInstances(ge,Le,Q.count);else if(rt.isInstancedBufferGeometry){const re=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,re);Ie.renderInstances(ge,Le,Ye)}else Ie.render(ge,Le)};function On(C,W,rt){C.transparent===!0&&C.side===va&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,gn(C,W,rt),C.side=hs,C.needsUpdate=!0,gn(C,W,rt),C.side=va):gn(C,W,rt)}this.compile=function(C,W,rt=null){rt===null&&(rt=C),R=ie.get(rt),R.init(W),B.push(R),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),C!==rt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights();const nt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Dt=Q.material;if(Dt)if(Array.isArray(Dt))for(let Ht=0;Ht<Dt.length;Ht++){const Wt=Dt[Ht];On(Wt,rt,Q),nt.add(Wt)}else On(Dt,rt,Q),nt.add(Dt)}),R=B.pop(),nt},this.compileAsync=function(C,W,rt=null){const nt=this.compile(C,W,rt);return new Promise(Q=>{function Dt(){if(nt.forEach(function(Ht){Ft.get(Ht).currentProgram.isReady()&&nt.delete(Ht)}),nt.size===0){Q(C);return}setTimeout(Dt,10)}Nt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Qn=null;function Ml(C){Qn&&Qn(C)}function eo(){Mi.stop()}function no(){Mi.start()}const Mi=new J_;Mi.setAnimationLoop(Ml),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(C){Qn=C,Pt.setAnimationLoop(C),C===null?Mi.stop():Mi.start()},Pt.addEventListener("sessionstart",eo),Pt.addEventListener("sessionend",no),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){ln("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(W),W=Pt.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,W,N),R=ie.get(C,B.length),R.init(W),B.push(R),Gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),st.setFromProjectionMatrix(Gt,Bi,W.reversedDepth),zt=this.localClippingEnabled,ft=$t.init(this.clippingPlanes,zt),z=It.get(C,O.length),z.init(),O.push(z),Pt.enabled===!0&&Pt.isPresenting===!0){const Dt=P.xr.getDepthSensingMesh();Dt!==null&&ds(Dt,W,-1/0,P.sortObjects)}ds(C,W,0,P.sortObjects),z.finish(),P.sortObjects===!0&&z.sort(F,at),ce=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,ce&&Rt.addToRenderList(z,C),this.info.render.frame++,ft===!0&&$t.beginShadows();const rt=R.state.shadowsArray;Et.render(rt,C,W),ft===!0&&$t.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=z.opaque,Q=z.transmissive;if(R.setupLights(),W.isArrayCamera){const Dt=W.cameras;if(Q.length>0)for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++){const Zt=Dt[Ht];ao(nt,Q,C,Zt)}ce&&Rt.render(C);for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++){const Zt=Dt[Ht];io(z,C,Zt,Zt.viewport)}}else Q.length>0&&ao(nt,Q,C,W),ce&&Rt.render(C),io(z,C,W);N!==null&&D===0&&(Xt.updateMultisampleRenderTarget(N),Xt.updateRenderTargetMipmap(N)),C.isScene===!0&&C.onAfterRender(P,C,W),k.resetDefaultState(),G=-1,$=null,B.pop(),B.length>0?(R=B[B.length-1],ft===!0&&$t.setGlobalState(P.clippingPlanes,R.state.camera)):R=null,O.pop(),O.length>0?z=O[O.length-1]:z=null};function ds(C,W,rt,nt){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)R.pushLight(C),C.castShadow&&R.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||st.intersectsSprite(C)){nt&&me.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Gt);const Ht=Mt.update(C),Wt=C.material;Wt.visible&&z.push(C,Ht,Wt,rt,me.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||st.intersectsObject(C))){const Ht=Mt.update(C),Wt=C.material;if(nt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),me.copy(C.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),me.copy(Ht.boundingSphere.center)),me.applyMatrix4(C.matrixWorld).applyMatrix4(Gt)),Array.isArray(Wt)){const Zt=Ht.groups;for(let oe=0,ue=Zt.length;oe<ue;oe++){const ae=Zt[oe],ge=Wt[ae.materialIndex];ge&&ge.visible&&z.push(C,Ht,ge,rt,me.z,ae)}}else Wt.visible&&z.push(C,Ht,Wt,rt,me.z,null)}}const Dt=C.children;for(let Ht=0,Wt=Dt.length;Ht<Wt;Ht++)ds(Dt[Ht],W,rt,nt)}function io(C,W,rt,nt){const{opaque:Q,transmissive:Dt,transparent:Ht}=C;R.setupLightsView(rt),ft===!0&&$t.setGlobalState(P.clippingPlanes,rt),nt&&wt.viewport(ot.copy(nt)),Q.length>0&&Jn(Q,W,rt),Dt.length>0&&Jn(Dt,W,rt),Ht.length>0&&Jn(Ht,W,rt),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function ao(C,W,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;R.state.transmissionRenderTarget[nt.id]===void 0&&(R.state.transmissionRenderTarget[nt.id]=new Gs(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?Kr:Vi,minFilter:Bs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));const Dt=R.state.transmissionRenderTarget[nt.id],Ht=nt.viewport||ot;Dt.setSize(Ht.z*P.transmissionResolutionScale,Ht.w*P.transmissionResolutionScale);const Wt=P.getRenderTarget(),Zt=P.getActiveCubeFace(),oe=P.getActiveMipmapLevel();P.setRenderTarget(Dt),P.getClearColor(H),Y=P.getClearAlpha(),Y<1&&P.setClearColor(16777215,.5),P.clear(),ce&&Rt.render(rt);const ue=P.toneMapping;P.toneMapping=fs;const ae=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),R.setupLightsView(nt),ft===!0&&$t.setGlobalState(P.clippingPlanes,nt),Jn(C,rt,nt),Xt.updateMultisampleRenderTarget(Dt),Xt.updateRenderTargetMipmap(Dt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Ne=0,Le=W.length;Ne<Le;Ne++){const Ae=W[Ne],{object:Ie,geometry:re,material:Ye,group:we}=Ae;if(Ye.side===va&&Ie.layers.test(nt.layers)){const En=Ye.side;Ye.side=Kn,Ye.needsUpdate=!0,fn(Ie,rt,nt,re,Ye,we),Ye.side=En,Ye.needsUpdate=!0,ge=!0}}ge===!0&&(Xt.updateMultisampleRenderTarget(Dt),Xt.updateRenderTargetMipmap(Dt))}P.setRenderTarget(Wt,Zt,oe),P.setClearColor(H,Y),ae!==void 0&&(nt.viewport=ae),P.toneMapping=ue}function Jn(C,W,rt){const nt=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Dt=C.length;Q<Dt;Q++){const Ht=C[Q],{object:Wt,geometry:Zt,group:oe}=Ht;let ue=Ht.material;ue.allowOverride===!0&&nt!==null&&(ue=nt),Wt.layers.test(rt.layers)&&fn(Wt,W,rt,Zt,ue,oe)}}function fn(C,W,rt,nt,Q,Dt){C.onBeforeRender(P,W,rt,nt,Q,Dt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(P,W,rt,nt,C,Dt),Q.transparent===!0&&Q.side===va&&Q.forceSinglePass===!1?(Q.side=Kn,Q.needsUpdate=!0,P.renderBufferDirect(rt,W,nt,Q,C,Dt),Q.side=hs,Q.needsUpdate=!0,P.renderBufferDirect(rt,W,nt,Q,C,Dt),Q.side=va):P.renderBufferDirect(rt,W,nt,Q,C,Dt),C.onAfterRender(P,W,rt,nt,Q,Dt)}function gn(C,W,rt){W.isScene!==!0&&(W=ze);const nt=Ft.get(C),Q=R.state.lights,Dt=R.state.shadowsArray,Ht=Q.state.version,Wt=ct.getParameters(C,Q.state,Dt,W,rt),Zt=ct.getProgramCacheKey(Wt);let oe=nt.programs;nt.environment=C.isMeshStandardMaterial?W.environment:null,nt.fog=W.fog,nt.envMap=(C.isMeshStandardMaterial?T:L).get(C.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,oe===void 0&&(C.addEventListener("dispose",he),oe=new Map,nt.programs=oe);let ue=oe.get(Zt);if(ue!==void 0){if(nt.currentProgram===ue&&nt.lightsStateVersion===Ht)return Ws(C,Wt),ue}else Wt.uniforms=ct.getUniforms(C),C.onBeforeCompile(Wt,P),ue=ct.acquireProgram(Wt,Zt),oe.set(Zt,ue),nt.uniforms=Wt.uniforms;const ae=nt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ae.clippingPlanes=$t.uniform),Ws(C,Wt),nt.needsLights=El(C),nt.lightsStateVersion=Ht,nt.needsLights&&(ae.ambientLightColor.value=Q.state.ambient,ae.lightProbe.value=Q.state.probe,ae.directionalLights.value=Q.state.directional,ae.directionalLightShadows.value=Q.state.directionalShadow,ae.spotLights.value=Q.state.spot,ae.spotLightShadows.value=Q.state.spotShadow,ae.rectAreaLights.value=Q.state.rectArea,ae.ltc_1.value=Q.state.rectAreaLTC1,ae.ltc_2.value=Q.state.rectAreaLTC2,ae.pointLights.value=Q.state.point,ae.pointLightShadows.value=Q.state.pointShadow,ae.hemisphereLights.value=Q.state.hemi,ae.directionalShadowMap.value=Q.state.directionalShadowMap,ae.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ae.spotShadowMap.value=Q.state.spotShadowMap,ae.spotLightMatrix.value=Q.state.spotLightMatrix,ae.spotLightMap.value=Q.state.spotLightMap,ae.pointShadowMap.value=Q.state.pointShadowMap,ae.pointShadowMatrix.value=Q.state.pointShadowMatrix),nt.currentProgram=ue,nt.uniformsList=null,ue}function Xi(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=du.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Ws(C,W){const rt=Ft.get(C);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function Eu(C,W,rt,nt,Q){W.isScene!==!0&&(W=ze),Xt.resetTextureUnits();const Dt=W.fog,Ht=nt.isMeshStandardMaterial?W.environment:null,Wt=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Wr,Zt=(nt.isMeshStandardMaterial?T:L).get(nt.envMap||Ht),oe=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ue=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),ae=!!rt.morphAttributes.position,ge=!!rt.morphAttributes.normal,Ne=!!rt.morphAttributes.color;let Le=fs;nt.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Le=P.toneMapping);const Ae=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ie=Ae!==void 0?Ae.length:0,re=Ft.get(nt),Ye=R.state.lights;if(ft===!0&&(zt===!0||C!==$)){const An=C===$&&nt.id===G;$t.setState(nt,C,An)}let we=!1;nt.version===re.__version?(re.needsLights&&re.lightsStateVersion!==Ye.state.version||re.outputColorSpace!==Wt||Q.isBatchedMesh&&re.batching===!1||!Q.isBatchedMesh&&re.batching===!0||Q.isBatchedMesh&&re.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&re.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&re.instancing===!1||!Q.isInstancedMesh&&re.instancing===!0||Q.isSkinnedMesh&&re.skinning===!1||!Q.isSkinnedMesh&&re.skinning===!0||Q.isInstancedMesh&&re.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&re.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&re.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&re.instancingMorph===!1&&Q.morphTexture!==null||re.envMap!==Zt||nt.fog===!0&&re.fog!==Dt||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==$t.numPlanes||re.numIntersection!==$t.numIntersection)||re.vertexAlphas!==oe||re.vertexTangents!==ue||re.morphTargets!==ae||re.morphNormals!==ge||re.morphColors!==Ne||re.toneMapping!==Le||re.morphTargetsCount!==Ie)&&(we=!0):(we=!0,re.__version=nt.version);let En=re.currentProgram;we===!0&&(En=gn(nt,W,Q));let Da=!1,Ke=!1,Wi=!1;const Qe=En.getUniforms(),Tn=re.uniforms;if(wt.useProgram(En.program)&&(Da=!0,Ke=!0,Wi=!0),nt.id!==G&&(G=nt.id,Ke=!0),Da||$!==C){wt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Qe.setValue(U,"projectionMatrix",C.projectionMatrix),Qe.setValue(U,"viewMatrix",C.matrixWorldInverse);const Cn=Qe.map.cameraPosition;Cn!==void 0&&Cn.setValue(U,Qt.setFromMatrixPosition(C.matrixWorld)),Lt.logarithmicDepthBuffer&&Qe.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Qe.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,Ke=!0,Wi=!0)}if(Q.isSkinnedMesh){Qe.setOptional(U,Q,"bindMatrix"),Qe.setOptional(U,Q,"bindMatrixInverse");const An=Q.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Qe.setValue(U,"boneTexture",An.boneTexture,Xt))}Q.isBatchedMesh&&(Qe.setOptional(U,Q,"batchingTexture"),Qe.setValue(U,"batchingTexture",Q._matricesTexture,Xt),Qe.setOptional(U,Q,"batchingIdTexture"),Qe.setValue(U,"batchingIdTexture",Q._indirectTexture,Xt),Qe.setOptional(U,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Qe.setValue(U,"batchingColorTexture",Q._colorsTexture,Xt));const vn=rt.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ne.update(Q,rt,En),(Ke||re.receiveShadow!==Q.receiveShadow)&&(re.receiveShadow=Q.receiveShadow,Qe.setValue(U,"receiveShadow",Q.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Tn.envMap.value=Zt,Tn.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&W.environment!==null&&(Tn.envMapIntensity.value=W.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=RR()),Ke&&(Qe.setValue(U,"toneMappingExposure",P.toneMappingExposure),re.needsLights&&Tu(Tn,Wi),Dt&&nt.fog===!0&&ee.refreshFogUniforms(Tn,Dt),ee.refreshMaterialUniforms(Tn,nt,bt,vt,R.state.transmissionRenderTarget[C.id]),du.upload(U,Xi(re),Tn,Xt)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(du.upload(U,Xi(re),Tn,Xt),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Qe.setValue(U,"center",Q.center),Qe.setValue(U,"modelViewMatrix",Q.modelViewMatrix),Qe.setValue(U,"normalMatrix",Q.normalMatrix),Qe.setValue(U,"modelMatrix",Q.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const An=nt.uniformsGroups;for(let Cn=0,Ui=An.length;Cn<Ui;Cn++){const qi=An[Cn];Bt.update(qi,En),Bt.bind(qi,En)}}return En}function Tu(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function El(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(C,W,rt){const nt=Ft.get(C);nt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),Ft.get(C.texture).__webglTexture=W,Ft.get(C.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const rt=Ft.get(C);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0};const ps=U.createFramebuffer();this.setRenderTarget=function(C,W=0,rt=0){N=C,Z=W,D=rt;let nt=!0,Q=null,Dt=!1,Ht=!1;if(C){const Zt=Ft.get(C);if(Zt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(U.FRAMEBUFFER,null),nt=!1;else if(Zt.__webglFramebuffer===void 0)Xt.setupRenderTarget(C);else if(Zt.__hasExternalTextures)Xt.rebindTextures(C,Ft.get(C.texture).__webglTexture,Ft.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ae=C.depthTexture;if(Zt.__boundDepthTexture!==ae){if(ae!==null&&Ft.has(ae)&&(C.width!==ae.image.width||C.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(C)}}const oe=C.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Ht=!0);const ue=Ft.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ue[W])?Q=ue[W][rt]:Q=ue[W],Dt=!0):C.samples>0&&Xt.useMultisampledRTT(C)===!1?Q=Ft.get(C).__webglMultisampledFramebuffer:Array.isArray(ue)?Q=ue[rt]:Q=ue,ot.copy(C.viewport),xt.copy(C.scissor),ut=C.scissorTest}else ot.copy(yt).multiplyScalar(bt).floor(),xt.copy(Ct).multiplyScalar(bt).floor(),ut=kt;if(rt!==0&&(Q=ps),wt.bindFramebuffer(U.FRAMEBUFFER,Q)&&nt&&wt.drawBuffers(C,Q),wt.viewport(ot),wt.scissor(xt),wt.setScissorTest(ut),Dt){const Zt=Ft.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,Zt.__webglTexture,rt)}else if(Ht){const Zt=W;for(let oe=0;oe<C.textures.length;oe++){const ue=Ft.get(C.textures[oe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+oe,ue.__webglTexture,rt,Zt)}}else if(C!==null&&rt!==0){const Zt=Ft.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zt.__webglTexture,rt)}G=-1},this.readRenderTargetPixels=function(C,W,rt,nt,Q,Dt,Ht,Wt=0){if(!(C&&C.isWebGLRenderTarget)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=Ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt){wt.bindFramebuffer(U.FRAMEBUFFER,Zt);try{const oe=C.textures[Wt],ue=oe.format,ae=oe.type;if(!Lt.textureFormatReadable(ue)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(ae)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-nt&&rt>=0&&rt<=C.height-Q&&(C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Wt),U.readPixels(W,rt,nt,Q,fe.convert(ue),fe.convert(ae),Dt))}finally{const oe=N!==null?Ft.get(N).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(C,W,rt,nt,Q,Dt,Ht,Wt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=Ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt)if(W>=0&&W<=C.width-nt&&rt>=0&&rt<=C.height-Q){wt.bindFramebuffer(U.FRAMEBUFFER,Zt);const oe=C.textures[Wt],ue=oe.format,ae=oe.type;if(!Lt.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.bufferData(U.PIXEL_PACK_BUFFER,Dt.byteLength,U.STREAM_READ),C.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Wt),U.readPixels(W,rt,nt,Q,fe.convert(ue),fe.convert(ae),0);const Ne=N!==null?Ft.get(N).__webglFramebuffer:null;wt.bindFramebuffer(U.FRAMEBUFFER,Ne);const Le=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await M3(U,Le,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ge),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Dt),U.deleteBuffer(ge),U.deleteSync(Le),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,rt=0){const nt=Math.pow(2,-rt),Q=Math.floor(C.image.width*nt),Dt=Math.floor(C.image.height*nt),Ht=W!==null?W.x:0,Wt=W!==null?W.y:0;Xt.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,rt,0,0,Ht,Wt,Q,Dt),wt.unbindTexture()};const so=U.createFramebuffer(),Na=U.createFramebuffer();this.copyTextureToTexture=function(C,W,rt=null,nt=null,Q=0,Dt=null){Dt===null&&(Q!==0?(ml("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=Q,Q=0):Dt=0);let Ht,Wt,Zt,oe,ue,ae,ge,Ne,Le;const Ae=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(rt!==null)Ht=rt.max.x-rt.min.x,Wt=rt.max.y-rt.min.y,Zt=rt.isBox3?rt.max.z-rt.min.z:1,oe=rt.min.x,ue=rt.min.y,ae=rt.isBox3?rt.min.z:0;else{const vn=Math.pow(2,-Q);Ht=Math.floor(Ae.width*vn),Wt=Math.floor(Ae.height*vn),C.isDataArrayTexture?Zt=Ae.depth:C.isData3DTexture?Zt=Math.floor(Ae.depth*vn):Zt=1,oe=0,ue=0,ae=0}nt!==null?(ge=nt.x,Ne=nt.y,Le=nt.z):(ge=0,Ne=0,Le=0);const Ie=fe.convert(W.format),re=fe.convert(W.type);let Ye;W.isData3DTexture?(Xt.setTexture3D(W,0),Ye=U.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Xt.setTexture2DArray(W,0),Ye=U.TEXTURE_2D_ARRAY):(Xt.setTexture2D(W,0),Ye=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);const we=U.getParameter(U.UNPACK_ROW_LENGTH),En=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Da=U.getParameter(U.UNPACK_SKIP_PIXELS),Ke=U.getParameter(U.UNPACK_SKIP_ROWS),Wi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Ae.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ae.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,oe),U.pixelStorei(U.UNPACK_SKIP_ROWS,ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ae);const Qe=C.isDataArrayTexture||C.isData3DTexture,Tn=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const vn=Ft.get(C),An=Ft.get(W),Cn=Ft.get(vn.__renderTarget),Ui=Ft.get(An.__renderTarget);wt.bindFramebuffer(U.READ_FRAMEBUFFER,Cn.__webglFramebuffer),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let qi=0;qi<Zt;qi++)Qe&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ft.get(C).__webglTexture,Q,ae+qi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ft.get(W).__webglTexture,Dt,Le+qi)),U.blitFramebuffer(oe,ue,Ht,Wt,ge,Ne,Ht,Wt,U.DEPTH_BUFFER_BIT,U.NEAREST);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Ft.has(C)){const vn=Ft.get(C),An=Ft.get(W);wt.bindFramebuffer(U.READ_FRAMEBUFFER,so),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Na);for(let Cn=0;Cn<Zt;Cn++)Qe?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vn.__webglTexture,Q,ae+Cn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vn.__webglTexture,Q),Tn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,An.__webglTexture,Dt,Le+Cn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,An.__webglTexture,Dt),Q!==0?U.blitFramebuffer(oe,ue,Ht,Wt,ge,Ne,Ht,Wt,U.COLOR_BUFFER_BIT,U.NEAREST):Tn?U.copyTexSubImage3D(Ye,Dt,ge,Ne,Le+Cn,oe,ue,Ht,Wt):U.copyTexSubImage2D(Ye,Dt,ge,Ne,oe,ue,Ht,Wt);wt.bindFramebuffer(U.READ_FRAMEBUFFER,null),wt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(Ye,Dt,ge,Ne,Le,Ht,Wt,Zt,Ie,re,Ae.data):W.isCompressedArrayTexture?U.compressedTexSubImage3D(Ye,Dt,ge,Ne,Le,Ht,Wt,Zt,Ie,Ae.data):U.texSubImage3D(Ye,Dt,ge,Ne,Le,Ht,Wt,Zt,Ie,re,Ae):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Dt,ge,Ne,Ht,Wt,Ie,re,Ae.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Dt,ge,Ne,Ae.width,Ae.height,Ie,Ae.data):U.texSubImage2D(U.TEXTURE_2D,Dt,ge,Ne,Ht,Wt,Ie,re,Ae);U.pixelStorei(U.UNPACK_ROW_LENGTH,we),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,En),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Da),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Wi),Dt===0&&W.generateMipmaps&&U.generateMipmap(Ye),wt.unbindTexture()},this.initRenderTarget=function(C){Ft.get(C).__webglFramebuffer===void 0&&Xt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Xt.setTextureCube(C,0):C.isData3DTexture?Xt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Xt.setTexture2DArray(C,0):Xt.setTexture2D(C,0),wt.unbindTexture()},this.resetState=function(){Z=0,D=0,N=null,wt.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Pe._getUnpackColorSpace()}}const Vv={type:"change"},Fp={type:"start"},iy={type:"end"},au=new D_,Gv=new ls,NR=Math.cos(70*T3.DEG2RAD),yn=new X,Zn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yd=1e-6;class DR extends G2{constructor(t,n=null){super(t,n),this.state=We.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hr.ROTATE,MIDDLE:Hr.DOLLY,RIGHT:Hr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new Vs,this._lastTargetPosition=new X,this._quat=new Vs().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xv,this._sphericalDelta=new xv,this._scale=1,this._panOffset=new X,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new X,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UR.bind(this),this._onPointerDown=LR.bind(this),this._onPointerUp=OR.bind(this),this._onContextMenu=VR.bind(this),this._onMouseWheel=FR.bind(this),this._onKeyDown=IR.bind(this),this._onTouchStart=BR.bind(this),this._onTouchMove=HR.bind(this),this._onMouseDown=PR.bind(this),this._onMouseMove=zR.bind(this),this._interceptControlDown=GR.bind(this),this._interceptControlUp=kR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vv),this.update(),this.state=We.NONE}update(t=null){const n=this.object.position;yn.copy(n).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=Zn:a>Math.PI&&(a-=Zn),o<-Math.PI?o+=Zn:o>Math.PI&&(o-=Zn),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),n.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=yn.length();u=this._clampDistance(h*this._scale);const m=h-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(au.origin.copy(this.object.position),au.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(au.direction))<NR?this.object.lookAt(this.target):(Gv.setFromNormalAndCoplanarPoint(this.object.up,this.target),au.intersectPlane(Gv,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>yd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yd||this._lastTargetPosition.distanceToSquared(this.target)>yd?(this.dispatchEvent(Vv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Zn/60*this.autoRotateSpeed*t:Zn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){yn.setFromMatrixColumn(n,0),yn.multiplyScalar(-t),this._panOffset.add(yn)}_panUp(t,n){this.screenSpacePanning===!0?yn.setFromMatrixColumn(n,1):(yn.setFromMatrixColumn(n,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(t),this._panOffset.add(yn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;yn.copy(o).sub(this.target);let c=yn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Zn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ut,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function LR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function UR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function OR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(iy),this.state=We.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function PR(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=We.DOLLY;break;case Hr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=We.ROTATE}break;case Hr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Fp)}function zR(s){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function FR(s){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(s.preventDefault(),this.dispatchEvent(Fp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(iy))}function IR(s){this.enabled!==!1&&this._handleKeyDown(s)}function BR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=We.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=We.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(Fp)}function HR(s){switch(this._trackPointer(s),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=We.NONE}}function VR(s){this.enabled!==!1&&s.preventDefault()}function GR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const jR=()=>{const s=dt.useRef(null);return dt.useEffect(()=>{if(!s.current)return;const t=s.current,n=t.clientWidth,a=t.clientHeight,o=new K3,c=new li(45,n/a,.1,1e3);c.position.set(0,0,18);const u=new CR({antialias:!0,alpha:!0});u.setSize(n,a),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setClearColor(0,0),u.toneMapping=v_,u.toneMappingExposure=2.5,t.appendChild(u.domElement);const h=new DR(c,u.domElement);h.enableDamping=!0,h.dampingFactor=.05,h.autoRotate=!0,h.autoRotateSpeed=2,h.enableZoom=!1,h.enablePan=!1;const m=new H2(16777215,1.5);o.add(m);const p=new B2(16777215,2.5);p.position.set(10,10,10),o.add(p);const g=new mv(22015,3,30);g.position.set(-5,5,5),o.add(g);const x=new mv(65535,3,30);x.position.set(5,-5,5),o.add(x);const v=new al,S={metalness:.5,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:1},E={steps:2,depth:2,bevelEnabled:!0,bevelThickness:.2,bevelSize:.1,bevelSegments:3},A=new hu;A.moveTo(-4,-4),A.lineTo(-4,2),A.lineTo(-1,-1),A.lineTo(-1,-4),A.lineTo(-4,-4);const M=new hd({color:8028,...S}),y=new bi(new cl(A,E),M);v.add(y);const z=new hu;z.moveTo(-4,2),z.lineTo(-4,5),z.lineTo(1,0),z.lineTo(1,-3),z.lineTo(-1,-1),z.lineTo(-4,2);const R=new hd({color:39423,...S}),O=new bi(new cl(z,E),R);v.add(O);const B=new hu;B.moveTo(1,-3),B.lineTo(1,5),B.lineTo(3.5,5),B.lineTo(3.5,-.5),B.lineTo(1,-3);const P=new hd({color:22195,...S}),I=new bi(new cl(B,E),P);v.add(I),new Jr().setFromObject(v).getCenter(v.position).multiplyScalar(-1),o.add(v);const Z=()=>{if(!t)return;const $=t.clientWidth,ot=t.clientHeight;c.aspect=$/ot,c.updateProjectionMatrix(),u.setSize($,ot)},D=new ResizeObserver(()=>Z());D.observe(t);let N;const G=()=>{N=requestAnimationFrame(G),h.update(),u.render(o,c)};return G(),()=>{cancelAnimationFrame(N),D.disconnect(),t&&u.domElement&&t.removeChild(u.domElement),u.dispose(),o.traverse($=>{$ instanceof bi&&($.geometry.dispose(),$.material instanceof $r&&(Array.isArray($.material)?$.material.forEach(ot=>ot.dispose()):$.material.dispose()))})}},[]),_.jsx("div",{ref:s,className:"w-14 h-14 relative"})},kv=[{label:"خانه",path:"/"},{label:"راهکارها",path:"/services"},{label:"نمونه‌کارها",path:"/portfolio"},{label:"آکادمی",path:"/academy"},{label:"درباره ما",path:"/about"},{label:"فرصت‌های شغلی",path:"/careers"},{label:"تماس با ما",path:"/contact"}],XR=()=>{const[s,t]=dt.useState(!1),n=Ra(),a=()=>t(!s);return _.jsxs("nav",{className:"fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-background/80 backdrop-blur-md",children:[_.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:_.jsxs("div",{className:"flex items-center justify-between h-20",children:[_.jsxs(bn,{to:"/",className:"flex items-center gap-3 group",children:[_.jsx("div",{className:"flex items-center justify-center",children:_.jsx(jR,{})}),_.jsx("span",{className:"font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors",children:"نکسورا"})]}),_.jsxs("div",{className:"hidden lg:flex items-center gap-8",children:[_.jsx("div",{className:"flex items-center gap-1",children:kv.map(o=>_.jsx(bn,{to:o.path,className:`px-4 py-2 rounded-lg text-sm font-medium transition-all ${n.pathname===o.path?"text-cyan-400 bg-cyan-400/10":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:o.label},o.path))}),_.jsx(bn,{to:"/contact",children:_.jsx(Li,{size:"sm",className:"shadow-none",children:"مشاوره رایگان"})})]}),_.jsx("div",{className:"lg:hidden flex items-center",children:_.jsx("button",{onClick:a,className:"text-slate-300 hover:text-white p-2",children:s?_.jsx(Ed,{size:28}):_.jsx(wM,{size:28})})})]})}),s&&_.jsx("div",{className:"lg:hidden absolute top-20 left-0 w-full bg-surface border-b border-slate-800 animate-in slide-in-from-top-5 fade-in duration-300 shadow-2xl",children:_.jsxs("div",{className:"px-4 pt-4 pb-8 space-y-2",children:[kv.map(o=>_.jsx(bn,{to:o.path,onClick:()=>t(!1),className:`block px-4 py-3 rounded-lg text-base font-medium ${n.pathname===o.path?"text-cyan-400 bg-cyan-400/10":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:o.label},o.path)),_.jsx("div",{className:"pt-4",children:_.jsx(bn,{to:"/contact",onClick:()=>t(!1),children:_.jsx(Li,{className:"w-full",children:"درخواست مشاوره رایگان"})})})]})})]})},WR=()=>_.jsx("footer",{className:"bg-surface border-t border-slate-800 pt-16 pb-8",children:_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",children:[_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-white",children:_.jsx(pM,{size:18})}),_.jsx("span",{className:"font-bold text-xl text-white",children:"نکسورا"})]}),_.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"پیشرو در ارائه راهکارهای هوشمند سازمانی. ما با تلفیق هوش مصنوعی و خلاقیت، آینده کسب‌وکار شما را متحول می‌کنیم."}),_.jsxs("div",{className:"flex gap-4",children:[_.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:_.jsx(u_,{size:20})}),_.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:_.jsx(p_,{size:20})}),_.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:_.jsx(SM,{size:20})}),_.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:_.jsx(yM,{size:20})})]})]}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-6",children:"دسترسی سریع"}),_.jsxs("ul",{className:"space-y-4",children:[_.jsx("li",{children:_.jsx(bn,{to:"/about",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"درباره نکسورا"})}),_.jsx("li",{children:_.jsx(bn,{to:"/portfolio",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"نمونه‌کارها"})}),_.jsx("li",{children:_.jsx(bn,{to:"/careers",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"فرصت‌های شغلی"})}),_.jsx("li",{children:_.jsx(bn,{to:"/contact",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"تماس با ما"})})]})]}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-6",children:"خدمات"}),_.jsxs("ul",{className:"space-y-4",children:[_.jsx("li",{children:_.jsx(bn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"هوش مصنوعی و ML"})}),_.jsx("li",{children:_.jsx(bn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"اتوماسیون اداری"})}),_.jsx("li",{children:_.jsx(bn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"ربات‌های تلگرام"})}),_.jsx("li",{children:_.jsx(bn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"تحلیل داده"})})]})]}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-6",children:"خبرنامه"}),_.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"برای دریافت آخرین اخبار تکنولوژی عضو شوید."}),_.jsxs("form",{className:"flex flex-col gap-3",onSubmit:s=>s.preventDefault(),children:[_.jsx("input",{type:"email",placeholder:"ایمیل خود را وارد کنید",className:"bg-slate-950 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors w-full"}),_.jsx("button",{className:"bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors border border-slate-700",children:"عضویت"})]})]})]}),_.jsxs("div",{className:"border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",children:[_.jsx("p",{className:"text-slate-500 text-xs",children:"© ۱۴۰۳ تمامی حقوق برای نکسورا استودیو محفوظ است."}),_.jsxs("div",{className:"flex gap-6",children:[_.jsx("a",{href:"#",className:"text-slate-500 hover:text-white text-xs",children:"قوانین و مقررات"}),_.jsx("a",{href:"#",className:"text-slate-500 hover:text-white text-xs",children:"حریم خصوصی"})]})]})]})}),qR=()=>{const[s,t]=dt.useState(!1),[n,a]=dt.useState([{text:"سلام! من ایجنت هوشمند نکسورا هستم. می‌خوای نمونه‌کارهای مربوط به صنعت خودت رو نشونت بدم؟",isBot:!0}]),[o,c]=dt.useState(""),u=()=>{o.trim()&&(a(h=>[...h,{text:o,isBot:!1}]),c(""),setTimeout(()=>{a(h=>[...h,{text:"ممنون از پیام شما. کارشناسان ما به زودی با شما تماس خواهند گرفت.",isBot:!0}])},1e3))};return _.jsxs("div",{className:"fixed bottom-6 left-6 z-50 flex flex-col items-end",children:[s&&_.jsxs("div",{className:"mb-4 w-80 md:w-96 bg-surface border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300",children:[_.jsxs("div",{className:"bg-gradient-to-r from-indigo-900 to-slate-900 p-4 border-b border-slate-700 flex justify-between items-center",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary",children:_.jsx(c_,{size:18})}),_.jsxs("div",{children:[_.jsx("h4",{className:"text-white text-sm font-bold",children:"پشتیبان هوشمند"}),_.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-green-400",children:[_.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"}),"آنلاین"]})]})]}),_.jsx("button",{onClick:()=>t(!1),className:"text-slate-400 hover:text-white",children:_.jsx(Ed,{size:18})})]}),_.jsx("div",{className:"h-80 overflow-y-auto p-4 space-y-4 bg-slate-950/50",children:n.map((h,m)=>_.jsx("div",{className:`flex ${h.isBot?"justify-start":"justify-end"}`,children:_.jsx("div",{className:`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${h.isBot?"bg-surface border border-slate-700 text-slate-200 rounded-tr-none":"bg-primary text-white rounded-tl-none"}`,children:h.text})},m))}),_.jsx("div",{className:"p-3 bg-surface border-t border-slate-800",children:_.jsxs("form",{className:"flex gap-2",onSubmit:h=>{h.preventDefault(),u()},children:[_.jsx("input",{type:"text",value:o,onChange:h=>c(h.target.value),placeholder:"پیام خود را بنویسید...",className:"flex-grow bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"}),_.jsx("button",{type:"submit",className:"bg-primary hover:bg-primary/90 text-white p-2 rounded-lg transition-colors",children:_.jsx(d_,{size:18})})]})})]}),_.jsx(Li,{onClick:()=>t(!s),className:"rounded-full w-14 h-14 shadow-2xl shadow-primary/40 flex items-center justify-center p-0",children:s?_.jsx(Ed,{size:24}):_.jsx(CM,{size:24})})]})},YR=()=>{const[s,t]=dt.useState(10),[n,a]=dt.useState(15),[o,c]=dt.useState(30),u=dt.useMemo(()=>s*n*(o/100),[s,n,o]),h=u*12,m=dt.useMemo(()=>{const B=[];for(let P=0;P<=12;P++){const I=P/12,Z=I<.5?2*I*I:-1+(4-2*I)*I,D=u*Z;B.push(D)}return B},[u]),p=400,g=250,x={top:30,right:10,bottom:30,left:50},v=p-x.left-x.right,S=g-x.top-x.bottom,E=Math.max(u*1.1,10),A=B=>S-B/E*S,M=B=>B/12*v,y=()=>{if(m.length===0)return"";let B=`M ${x.left} ${x.top+A(m[0])}`;for(let P=1;P<m.length;P++){const I=x.left+M(P),Z=x.top+A(m[P]),D=x.left+M(P-1),N=x.top+A(m[P-1]),G=D+(I-D)*.5,$=N,ot=D+(I-D)*.5;B+=` C ${G} ${$}, ${ot} ${Z}, ${I} ${Z}`}return B},z=()=>{const B=y();return B?`${B} L ${x.left+v} ${x.top+S} L ${x.left} ${x.top+S} Z`:""},R=B=>new Intl.NumberFormat("fa-IR").format(B),O=(B,P,I)=>{const Z=(B-P)/(I-P)*100;return{background:`linear-gradient(to left, #6366f1 0%, #8b5cf6 ${Z}%, #1e293b ${Z}%, #1e293b 100%)`}};return _.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16",children:[_.jsx("style",{children:`
        /* Custom Range Input Styling */
        input[type=range] {
          -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
          width: 100%; /* Specific width is required for Firefox. */
          background: transparent; /* Otherwise white in Chrome */
        }

        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #f8fafc;
          cursor: pointer;
          margin-top: -8px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
          border: 2px solid #8b5cf6;
          transition: transform 0.1s;
        }

        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
        }

        input[type=range]::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #f8fafc;
          cursor: pointer;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.6);
          border: 2px solid #8b5cf6;
          transition: transform 0.1s;
        }

        input[type=range]:focus {
          outline: none;
        }

        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 8px;
          cursor: pointer;
          border-radius: 8px;
        }
        
        input[type=range]::-moz-range-track {
          width: 100%;
          height: 8px;
          cursor: pointer;
          border-radius: 8px;
        }
      `}),_.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 items-stretch",children:[_.jsxs("div",{className:"bg-[#0f172a] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-xl shadow-slate-900/50 relative overflow-hidden h-full min-h-[400px]",children:[_.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"}),_.jsxs("div",{className:"relative z-10 flex items-start justify-between mb-8",children:[_.jsxs("div",{children:[_.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"نمودار بازگشت سرمایه"}),_.jsx("p",{className:"text-slate-400 text-sm",children:"روند کاهش هزینه‌های عملیاتی در ۱۲ ماه اول"})]}),_.jsx("div",{className:"bg-slate-800/50 p-2 rounded-xl border border-slate-700",children:_.jsx(m_,{className:"text-yellow-400",size:20})})]}),_.jsx("div",{className:"flex-grow w-full relative",children:_.jsxs("svg",{viewBox:`0 0 ${p} ${g}`,className:"w-full h-full overflow-visible",preserveAspectRatio:"none",children:[_.jsxs("defs",{children:[_.jsxs("linearGradient",{id:"chartFill",x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"0%",stopColor:"#8b5cf6",stopOpacity:"0.4"}),_.jsx("stop",{offset:"100%",stopColor:"#8b5cf6",stopOpacity:"0.0"})]}),_.jsxs("linearGradient",{id:"chartLine",x1:"0",y1:"0",x2:"1",y2:"0",children:[_.jsx("stop",{offset:"0%",stopColor:"#6366f1"}),_.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})]}),[0,.25,.5,.75,1].map((B,P)=>{const I=S*(1-B);return _.jsxs("g",{children:[_.jsx("line",{x1:x.left,y1:x.top+I,x2:p-x.right,y2:x.top+I,stroke:"#334155",strokeWidth:"1",strokeDasharray:"4 6",opacity:"0.3"}),_.jsxs("text",{x:x.left-15,y:x.top+I+4,fill:"#64748b",fontSize:"11",textAnchor:"end",className:"font-mono font-medium",children:[R(Math.round(E*B)),"M"]})]},P)}),_.jsx("path",{d:z(),fill:"url(#chartFill)",className:"transition-all duration-300 ease-out"}),_.jsx("path",{d:y(),fill:"none",stroke:"url(#chartLine)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",className:"drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300 ease-out"}),[1,3,6,9,12].map(B=>{const P=x.left+M(B);return _.jsxs("g",{children:[_.jsxs("text",{x:P,y:g,fill:"#94a3b8",fontSize:"11",textAnchor:"middle",className:"font-bold",children:["ماه ",R(B)]}),_.jsx("line",{x1:P,y1:x.top+S,x2:P,y2:x.top+S+5,stroke:"#334155",strokeWidth:"1"})]},B)})]})})]}),_.jsxs("div",{className:"bg-[#0f172a] border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center",children:[_.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"}),_.jsxs("div",{className:"relative z-10",children:[_.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[_.jsx("div",{className:"bg-primary/20 p-2.5 rounded-xl text-primary",children:_.jsx(aM,{size:24})}),_.jsx("h2",{className:"text-3xl font-black text-white",children:"ماشین حساب ROI"})]}),_.jsx("p",{className:"text-slate-400 mb-10 text-sm leading-relaxed max-w-md",children:"باور نکردنی است که چقدر سرمایه در فرآیندهای دستی هدر می‌رود. با ابزار زیر تخمین بزنید که نکسورا چقدر به سودآوری شما کمک می‌کند."}),_.jsxs("div",{className:"space-y-8",children:[_.jsxs("div",{className:"group",children:[_.jsxs("div",{className:"flex justify-between items-center mb-4",children:[_.jsx("label",{className:"text-slate-200 font-bold text-base",children:"تعداد کارمندان (نفر)"}),_.jsx("div",{className:"bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg min-w-[3.5rem] text-center text-white font-bold shadow-inner",children:R(s)})]}),_.jsx("input",{type:"range",min:"1",max:"100",step:"1",value:s,onChange:B=>t(Number(B.target.value)),style:O(s,1,100),className:"rounded-lg h-2 w-full"})]}),_.jsxs("div",{className:"group",children:[_.jsxs("div",{className:"flex justify-between items-center mb-4",children:[_.jsx("label",{className:"text-slate-200 font-bold text-base",children:"میانگین حقوق ماهانه"}),_.jsxs("div",{className:"bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg min-w-[7rem] text-center text-white font-bold text-sm shadow-inner",children:[R(n)," میلیون تومان"]})]}),_.jsx("input",{type:"range",min:"5",max:"100",step:"1",value:n,onChange:B=>a(Number(B.target.value)),style:O(n,5,100),className:"rounded-lg h-2 w-full"})]}),_.jsxs("div",{className:"group",children:[_.jsxs("div",{className:"flex justify-between items-center mb-4",children:[_.jsx("label",{className:"text-slate-200 font-bold text-base",children:"قابلیت اتوماسیون"}),_.jsxs("div",{className:"bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg min-w-[3.5rem] text-center text-white font-bold shadow-inner",children:[R(o),"٪"]})]}),_.jsx("input",{type:"range",min:"0",max:"100",step:"5",value:o,onChange:B=>c(Number(B.target.value)),style:O(o,0,100),className:"rounded-lg h-2 w-full"})]})]}),_.jsx("div",{className:"mt-12 pt-8 border-t border-slate-800/50",children:_.jsxs("div",{className:"flex flex-col md:flex-row md:items-end md:justify-between gap-4",children:[_.jsx("p",{className:"text-slate-400 text-sm font-medium",children:"صرفه‌جویی سالانه احتمالی:"}),_.jsxs("div",{className:"text-right flex items-baseline gap-2",children:[_.jsx("span",{className:"text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-emerald-500 drop-shadow-lg",children:R(Math.round(h))}),_.jsx("span",{className:"text-xl font-bold text-slate-500",children:"میلیون تومان"})]})]})})]})]})]})]})},ZR=()=>_.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#020617]",children:[_.jsx("style",{children:`
      @keyframes float-particle {
        0%, 100% { transform: translate(0, 0); opacity: 0.3; }
        25% { transform: translate(15px, -15px); opacity: 0.6; }
        50% { transform: translate(-5px, -25px); opacity: 0.3; }
        75% { transform: translate(-20px, 10px); opacity: 0.7; }
      }
      @keyframes grid-move {
        0% { background-position: 0 0; }
        100% { background-position: 30px 30px; }
      }
      @keyframes circuit-flow {
        0% { stroke-dashoffset: 1000; opacity: 0.1; }
        50% { opacity: 0.4; }
        100% { stroke-dashoffset: 0; opacity: 0.1; }
      }
    `}),_.jsx("div",{className:"absolute inset-0 opacity-[0.07]",style:{backgroundImage:"linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",backgroundSize:"40px 40px",animation:"grid-move 20s linear infinite"}}),_.jsx("div",{className:"absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"}),_.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite_reverse]"}),_.jsx("div",{className:"absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] animate-[bounce_10s_infinite]"}),_.jsx("div",{className:"absolute inset-0",children:[...Array(25)].map((s,t)=>_.jsx("div",{className:"absolute rounded-full",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,width:`${Math.random()*3+2}px`,height:`${Math.random()*3+2}px`,backgroundColor:Math.random()>.5?"#22d3ee":"#8b5cf6",boxShadow:`0 0 ${Math.random()*10+5}px ${Math.random()>.5?"#22d3ee":"#8b5cf6"}`,animation:`float-particle ${15+Math.random()*10}s infinite ease-in-out ${Math.random()*5}s`,opacity:.4}},t))}),_.jsxs("svg",{className:"absolute inset-0 w-full h-full opacity-30",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:"circuit-grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[_.jsx("stop",{offset:"0%",stopColor:"transparent"}),_.jsx("stop",{offset:"50%",stopColor:"#22d3ee"}),_.jsx("stop",{offset:"100%",stopColor:"transparent"})]})}),_.jsx("path",{d:"M0,100 Q400,150 800,100 T1600,100",fill:"none",stroke:"url(#circuit-grad)",strokeWidth:"1",strokeDasharray:"10 10",className:"animate-[pulse_5s_infinite]"}),_.jsx("path",{d:"M0,300 Q300,250 600,300 T1200,300",fill:"none",stroke:"url(#circuit-grad)",strokeWidth:"1",strokeDasharray:"15 15",className:"animate-[pulse_7s_infinite]"}),_.jsx("path",{d:"M0,600 Q500,650 1000,600 T2000,600",fill:"none",stroke:"url(#circuit-grad)",strokeWidth:"1",strokeDasharray:"20 20",className:"animate-[pulse_6s_infinite]"})]}),_.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"})]}),KR=()=>_.jsxs("div",{className:"flex flex-col gap-24 pb-20",children:[_.jsxs("section",{className:"relative min-h-[90vh] flex items-center pt-10 overflow-hidden",children:[_.jsx(ZR,{}),_.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full",children:_.jsxs("div",{className:"text-center max-w-4xl mx-auto space-y-8",children:[_.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-cyan-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),"پیشرو در تکنولوژی هوش مصنوعی ایران"]}),_.jsxs("h1",{className:"text-5xl md:text-7xl font-black leading-tight tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100",children:["هوش مصنوعی، ",_.jsx("br",{}),_.jsx("span",{className:"gradient-text",children:"نیروی محرکه"})," کسب‌وکار شما"]}),_.jsx("p",{className:"text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200",children:"ما در نکسورا با بهره‌گیری از جدیدترین مدل‌های هوش مصنوعی، فرایندهای سازمانی شما را خودکار کرده و بهره‌وری را به سطح جدیدی می‌رسانیم."}),_.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300",children:[_.jsx(bn,{to:"/contact",children:_.jsx(Li,{size:"lg",className:"w-full sm:w-auto",children:"درخواست مشاوره رایگان"})}),_.jsx(bn,{to:"/portfolio",children:_.jsx(Li,{variant:"secondary",size:"lg",className:"w-full sm:w-auto",children:"مشاهده نمونه‌کارها"})})]})]})})]}),_.jsxs("section",{className:"w-full overflow-hidden border-y border-white/5 bg-slate-950/50 py-10",children:[_.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center mb-8",children:_.jsx("span",{className:"text-sm text-slate-500 font-medium",children:"مورد اعتماد تکنولوژی‌های برتر جهان"})}),_.jsxs("div",{className:"flex justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap px-4",children:[_.jsx("span",{className:"text-2xl font-bold text-white",children:"OpenAI"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"Python"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"TensorFlow"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"PyTorch"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"n8n"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"LangChain"})]})]}),_.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[_.jsxs("div",{className:"text-center mb-16",children:[_.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"خدمات اصلی نکسورا"}),_.jsx("p",{className:"text-slate-400",children:"راهکارهای جامع برای تحول دیجیتال سازمان شما"})]}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{icon:_.jsx(c_,{className:"w-10 h-10 text-primary"}),title:"ایجنت‌های هوشمند",desc:"طراحی دستیارهای هوشمند اختصاصی برای پاسخگویی به مشتریان و مدیریت وظایف."},{icon:_.jsx(m_,{className:"w-10 h-10 text-cyan-400"}),title:"اتوماسیون فرایندها",desc:"حذف کارهای تکراری و اتصال سیستم‌های مختلف سازمانی با n8n و Python."},{icon:_.jsx(xM,{className:"w-10 h-10 text-pink-500"}),title:"هوش تجاری و داده",desc:"تحلیل پیشرفته داده‌ها برای تصمیم‌گیری دقیق‌تر و پیش‌بینی روندهای بازار."}].map((s,t)=>_.jsxs("div",{className:"bg-surface border border-slate-800 p-8 rounded-2xl hover:border-primary/50 transition-all hover:translate-y-[-5px] group",children:[_.jsx("div",{className:"mb-6 bg-slate-950 w-20 h-20 rounded-2xl flex items-center justify-center border border-slate-800 group-hover:border-primary/30 transition-colors",children:s.icon}),_.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:s.title}),_.jsx("p",{className:"text-slate-400 leading-relaxed text-sm",children:s.desc})]},t))})]}),_.jsx(YR,{}),_.jsxs("section",{className:"py-20 text-center px-4",children:[_.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"آماده تحول هستید؟"}),_.jsx("p",{className:"text-slate-400 mb-8 max-w-xl mx-auto",children:"برای دریافت مشاوره تخصصی و نیازسنجی رایگان، همین حالا با متخصصان نکسورا تماس بگیرید."}),_.jsx(bn,{to:"/contact",children:_.jsx(Li,{size:"lg",className:"shadow-2xl shadow-primary/30",children:"شروع همکاری"})})]})]}),QR=({className:s})=>_.jsxs("svg",{viewBox:"0 0 24 24",className:s,fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[_.jsx("path",{d:"M12 2C7 2 3 3.5 3 5C3 6.5 7 8 12 8C17 8 21 6.5 21 5C21 3.5 17 2 12 2Z"}),_.jsx("path",{d:"M21 5V19C21 20.5 17 22 12 22C7 22 3 20.5 3 19V5"}),_.jsx("path",{d:"M3 12C3 13.5 7 15 12 15C17 15 21 13.5 21 12"})]}),JR=({className:s})=>_.jsxs("svg",{viewBox:"0 0 24 24",className:s,fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[_.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),_.jsx("path",{d:"M2 8L12 14L22 8"}),_.jsx("path",{d:"M2 16L7 13"}),_.jsx("path",{d:"M22 16L17 13"})]}),$R=({className:s})=>_.jsx("svg",{viewBox:"0 0 24 24",className:s,fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:_.jsx("path",{d:"M13 2L3 14H12L11 22L21 10H12L13 2Z"})}),ay=({className:s="w-10 h-10"})=>_.jsxs("svg",{viewBox:"0 0 64 64",className:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[_.jsxs("defs",{children:[_.jsxs("linearGradient",{id:"cyanGrad",x1:"0",y1:"0",x2:"64",y2:"64",children:[_.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),_.jsx("stop",{offset:"100%",stopColor:"#0891b2"})]}),_.jsxs("filter",{id:"glow-cyan",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[_.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),_.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),_.jsx("circle",{cx:"32",cy:"32",r:"28",stroke:"url(#cyanGrad)",strokeWidth:"0.5",opacity:"0.2"}),_.jsx("path",{d:"M32 4V12M32 52V60M4 32H12M52 32H60",stroke:"url(#cyanGrad)",strokeWidth:"1",opacity:"0.4"}),_.jsx("g",{className:"animate-[spin_20s_linear_infinite] origin-center",children:_.jsx("path",{d:"M32 16L46 24V40L32 48L18 40V24L32 16Z",stroke:"url(#cyanGrad)",strokeWidth:"1.5",strokeDasharray:"4 4",opacity:"0.8"})}),_.jsx("circle",{cx:"32",cy:"32",r:"8",stroke:"url(#cyanGrad)",strokeWidth:"2"}),_.jsx("path",{d:"M32 24V32L38 38",stroke:"url(#cyanGrad)",strokeWidth:"2",strokeLinecap:"round"}),_.jsx("circle",{cx:"50",cy:"20",r:"2",fill:"#22d3ee",className:"animate-pulse"}),_.jsx("circle",{cx:"14",cy:"44",r:"2",fill:"#22d3ee",className:"animate-pulse delay-700"}),_.jsx("path",{d:"M10 10L20 20",stroke:"url(#cyanGrad)",strokeWidth:"1.5",className:"animate-[pulse_3s_infinite]"}),_.jsx("path",{d:"M54 54L44 44",stroke:"url(#cyanGrad)",strokeWidth:"1.5",className:"animate-[pulse_3s_infinite_1s]"})]}),sy=({className:s="w-10 h-10"})=>_.jsxs("svg",{viewBox:"0 0 64 64",className:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:"purpleGrad",x1:"0",y1:"0",x2:"64",y2:"64",children:[_.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),_.jsx("stop",{offset:"100%",stopColor:"#7c3aed"})]})}),_.jsx("path",{d:"M16 20C16 12 20 8 32 8C44 8 48 12 48 20V44C48 52 44 56 32 56C20 56 16 52 16 44V20Z",stroke:"url(#purpleGrad)",strokeWidth:"2",strokeLinecap:"round",fill:"rgba(124,58,237,0.05)"}),_.jsx("path",{d:"M22 24C22 24 26 28 32 28C38 28 42 24 42 24",stroke:"url(#purpleGrad)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),_.jsx("path",{d:"M22 36C22 36 26 40 32 40C38 40 42 36 42 36",stroke:"url(#purpleGrad)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),_.jsx("circle",{cx:"32",cy:"32",r:"4",fill:"#a78bfa",className:"animate-[pulse_2s_ease-in-out_infinite]"}),_.jsx("circle",{cx:"32",cy:"32",r:"12",stroke:"url(#purpleGrad)",strokeWidth:"0.5",strokeDasharray:"2 2",className:"animate-[spin_10s_linear_infinite]"}),_.jsx("path",{d:"M8 32H12",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round",className:"animate-[pulse_1s_infinite]"}),_.jsx("path",{d:"M52 32H56",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round",className:"animate-[pulse_1s_infinite_0.5s]"}),_.jsx("path",{d:"M32 4V6",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round"}),_.jsx("path",{d:"M32 58V60",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round"})]}),tC=()=>_.jsxs("div",{className:"w-full h-full min-h-[350px] bg-slate-950 relative overflow-hidden flex items-center justify-center group select-none",role:"img","aria-label":"تصویر سازی گرافیکی از سیستم اتوماسیون هوشمند فرایندها",children:[_.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"}),_.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"}),_.jsxs("div",{className:"relative z-10 w-64 h-64 flex items-center justify-center",children:[_.jsx("div",{className:"absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"}),_.jsx("div",{className:"absolute inset-4 border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"}),_.jsxs("div",{className:"relative w-24 h-24 bg-slate-900 rounded-full border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)] z-20",children:[_.jsx(ay,{className:"w-14 h-14 text-cyan-400 animate-pulse"}),[0,120,240].map(s=>_.jsx("div",{className:"absolute top-1/2 left-1/2 w-[140px] h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent -translate-y-1/2 origin-left",style:{transform:`translate(-50%, -50%) rotate(${s}deg) translateX(50%)`}},s))]}),_.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)] animate-bounce delay-0",children:_.jsx(QR,{className:"w-6 h-6 text-cyan-300"})}),_.jsx("div",{className:"absolute bottom-4 right-0 translate-x-4 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] animate-bounce delay-700",children:_.jsx(JR,{className:"w-6 h-6 text-purple-300"})}),_.jsx("div",{className:"absolute bottom-4 left-0 -translate-x-4 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.1)] animate-bounce delay-1000",children:_.jsx($R,{className:"w-6 h-6 text-yellow-300"})})]})]}),eC=()=>_.jsxs("div",{className:"w-full h-full min-h-[350px] bg-slate-950 relative overflow-hidden flex items-center justify-center group select-none",role:"img","aria-label":"تصویر سازی گرافیکی از ایجنت هوشمند تعاملی",children:[_.jsx("div",{className:"absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-primary/10 rounded-full blur-[100px]"}),_.jsx("div",{className:"absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-indigo-500/10 rounded-full blur-[100px]"}),_.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center w-full max-w-xs",children:[_.jsxs("div",{className:"relative mb-8 group-hover:scale-105 transition-transform duration-500",children:[_.jsxs("div",{className:"w-32 h-32 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] border border-slate-700 flex items-center justify-center shadow-2xl relative z-10 overflow-hidden",children:[_.jsx(sy,{className:"w-20 h-20 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"}),_.jsx("div",{className:"absolute w-full h-full inset-0 bg-primary/20 blur-xl -z-10 animate-pulse"}),_.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm animate-[scan_3s_linear_infinite]"}),_.jsx("style",{children:`
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                50% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
          `})]}),_.jsx("div",{className:"absolute -right-16 -top-6 bg-slate-800/90 backdrop-blur-md border border-slate-700 px-4 py-2.5 rounded-2xl rounded-bl-none text-xs text-slate-300 shadow-xl animate-[bounce_3s_infinite]",children:_.jsxs("span",{className:"flex gap-2 items-center text-white",children:[_.jsx(Md,{size:14,className:"text-green-400"})," ثبت سفارش آنی"]})}),_.jsx("div",{className:"absolute -left-16 top-12 bg-slate-800/90 backdrop-blur-md border border-slate-700 px-4 py-2.5 rounded-2xl rounded-br-none text-xs text-slate-300 shadow-xl animate-[bounce_4s_infinite_0.5s]",children:_.jsxs("span",{className:"flex gap-2 items-center text-white",children:[_.jsx(Md,{size:14,className:"text-green-400"})," پشتیبانی ۲۴/۷"]})})]}),_.jsxs("div",{className:"w-full relative flex flex-col items-center gap-2",children:[_.jsx("div",{className:"w-px h-12 bg-gradient-to-b from-slate-700 to-transparent"}),_.jsxs("div",{className:"flex gap-4 opacity-50",children:[_.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-slate-500",fill:"none",stroke:"currentColor",children:_.jsx("path",{d:"M4 6H20M4 12H20M4 18H20",strokeWidth:"2",strokeLinecap:"round"})}),_.jsxs("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-slate-500",fill:"none",stroke:"currentColor",children:[_.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",strokeWidth:"2"}),_.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",strokeWidth:"2"}),_.jsx("path",{d:"M6 6H6.01",strokeWidth:"3",strokeLinecap:"round"}),_.jsx("path",{d:"M6 18H6.01",strokeWidth:"3",strokeLinecap:"round"})]})]})]})]})]}),nC=({question:s,answer:t})=>{const[n,a]=dt.useState(!1);return _.jsxs("div",{className:`bg-surface border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${n?"border-primary/50 shadow-lg shadow-primary/5":"hover:border-slate-600"}`,children:[_.jsxs("button",{onClick:()=>a(!n),className:"w-full flex items-center justify-between p-5 md:p-6 text-right focus:outline-none",children:[_.jsx("span",{className:`text-base md:text-lg font-bold transition-colors ${n?"text-primary":"text-white"}`,children:s}),_.jsx(oM,{className:`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 mr-4 ${n?"rotate-180 text-primary":""}`})]}),_.jsx("div",{className:`grid transition-[grid-template-rows] duration-300 ease-out ${n?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:_.jsx("div",{className:"overflow-hidden",children:_.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-6 pt-0 border-t border-slate-800/50 pt-4",children:t})})})]})},iC=()=>_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24",children:[_.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[_.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:"راهکارهای هوشمند نکسورا"}),_.jsx("p",{className:"text-xl text-slate-400 leading-relaxed",children:"ما مجموعه‌ای از پیشرفته‌ترین ابزارهای هوش مصنوعی را برای حل چالش‌های واقعی کسب‌وکار شما طراحی کرده‌ایم."})]}),_.jsx("div",{className:"space-y-20",children:[{id:"automation-service",title:"اتوماسیون هوشمند فرایندها (RPA)",desc:"با استفاده از n8n و Python، ما گردش‌کارهای پیچیده بین نرم‌افزارهای مختلف (CRM، حسابداری، ایمیل مارکتینگ) را کاملاً خودکار می‌کنیم.",features:["اتصال بیش از ۱۰۰۰ سرویس مختلف","بدون نیاز به دخالت انسانی","کاهش ۹۰٪ خطاهای ورود اطلاعات"],icon:_.jsx(ay,{className:"w-16 h-16 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"}),Visual:tC,tooltip:"مدیریت و خودکارسازی کامل گردش کار سازمانی"},{id:"agent-service",title:"ایجنت‌های هوشمند تعاملی",desc:"چت‌بات‌های پیشرفته مبتنی بر LLM که فراتر از یک پاسخگوی ساده هستند. آنها می‌توانند سفارش ثبت کنند، وقت رزرو کنند و پشتیبانی فنی ارائه دهند.",features:["پاسخگویی ۲۴/۷ به مشتریان","یادگیری از مستندات سازمانی شما","شخصی‌سازی لحن و رفتار"],icon:_.jsx(sy,{className:"w-16 h-16 drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]"}),Visual:eC,tooltip:"دستیار هوشمند با قابلیت یادگیری و تعامل انسانی"}].map((s,t)=>_.jsxs("div",{className:`flex flex-col md:flex-row items-center gap-12 ${t%2===1?"md:flex-row-reverse":""}`,children:[_.jsxs("div",{className:"flex-1 space-y-6",children:[_.jsxs("div",{className:"relative group/icon inline-block",role:"img","aria-label":s.title,"aria-describedby":`tooltip-${s.id}`,tabIndex:0,children:[_.jsxs("div",{className:"w-24 h-24 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 shadow-lg shadow-primary/5 transition-all duration-300 group-hover/icon:scale-105 group-hover/icon:border-primary/50 group-hover/icon:shadow-primary/20 cursor-help relative overflow-hidden",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity"}),s.icon]}),_.jsxs("div",{id:`tooltip-${s.id}`,role:"tooltip",className:"absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2.5 bg-slate-800/95 backdrop-blur-sm text-white text-sm font-medium rounded-xl border border-slate-700 opacity-0 group-hover/icon:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-50 shadow-2xl translate-y-2 group-hover/icon:translate-y-0",children:[s.tooltip,_.jsx("div",{className:"absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800/95 border-b border-r border-slate-700 rotate-45"})]})]}),_.jsx("h2",{className:"text-3xl font-bold text-white",children:s.title}),_.jsx("p",{className:"text-slate-400 text-lg leading-relaxed",children:s.desc}),_.jsx("ul",{className:"space-y-3",children:s.features.map((n,a)=>_.jsxs("li",{className:"flex items-center gap-3 text-slate-300",children:[_.jsx("div",{className:"w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0",children:_.jsx(Md,{size:14})}),n]},a))}),_.jsx("div",{className:"pt-4",children:_.jsx(bn,{to:"/contact",children:_.jsx(Li,{variant:"outline",children:"سفارش این سرویس"})})})]}),_.jsx("div",{className:"flex-1 w-full",children:_.jsx("div",{className:"relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 backdrop-blur w-full",children:_.jsx(s.Visual,{})})})]},s.id))}),_.jsxs("div",{className:"bg-surface rounded-3xl border border-slate-800 p-8 overflow-hidden",children:[_.jsx("h3",{className:"text-2xl font-bold text-white mb-8 text-center",children:"چرا نکسورا؟"}),_.jsx("div",{className:"overflow-x-auto",children:_.jsxs("table",{className:"w-full text-right border-collapse min-w-[600px]",children:[_.jsx("thead",{children:_.jsxs("tr",{className:"border-b border-slate-800",children:[_.jsx("th",{className:"py-4 px-6 text-slate-400 font-medium w-1/3",children:"ویژگی"}),_.jsx("th",{className:"py-4 px-6 text-slate-400 font-medium w-1/3 text-center",children:"روش سنتی"}),_.jsx("th",{className:"py-4 px-6 text-primary font-bold w-1/3 text-center bg-primary/5 rounded-t-xl",children:"راهکار نکسورا"})]})}),_.jsx("tbody",{children:[{label:"هزینه عملیاتی",trad:"بسیار بالا",nexora:"بهینه و مقیاس‌پذیر"},{label:"زمان پیاده‌سازی",trad:"۳ تا ۶ ماه",nexora:"۲ تا ۴ هفته"},{label:"خطای انسانی",trad:"اجتناب‌ناپذیر",nexora:"نزدیک به صفر"},{label:"پشتیبانی",trad:"ساعات اداری",nexora:"۲۴/۷ هوشمند"}].map((s,t)=>_.jsxs("tr",{className:"border-b border-slate-800/50 last:border-0 hover:bg-slate-800/20 transition-colors",children:[_.jsx("td",{className:"py-4 px-6 text-white font-medium",children:s.label}),_.jsx("td",{className:"py-4 px-6 text-slate-400 text-center",children:s.trad}),_.jsx("td",{className:"py-4 px-6 text-white text-center font-bold bg-primary/5",children:s.nexora})]},t))})]})})]}),_.jsxs("div",{className:"max-w-3xl mx-auto pb-12",children:[_.jsxs("div",{className:"text-center mb-10",children:[_.jsx("h3",{className:"text-3xl font-bold text-white mb-4",children:"پرسش‌های متداول"}),_.jsx("p",{className:"text-slate-400",children:"شفافیت در همکاری، امنیت و هزینه‌ها"})]}),_.jsx("div",{className:"space-y-4",children:[{q:"آیا امنیت داده‌های سازمانی ما تضمین می‌شود؟",a:"بله، امنیت خط قرمز ماست. ما از قراردادهای محرمانگی (NDA) رسمی استفاده می‌کنیم. همچنین تمام داده‌های شما با پروتکل‌های رمزنگاری پیشرفته محافظت می‌شوند و مدل‌های هوش مصنوعی را می‌توانیم به صورت Local (روی سرورهای خودتان) پیاده‌سازی کنیم تا هیچ داده‌ای از سازمان خارج نشود."},{q:"هزینه پروژه‌ها چقدر است و نحوه پرداخت چگونه است؟",a:"هزینه‌ها کاملاً شفاف و بر اساس اسکوپ پروژه است. ما معمولاً ۳۰٪ پیش‌پرداخت، ۳۰٪ پس از نسخه اولیه و ۴۰٪ پس از تحویل نهایی دریافت می‌کنیم. برای سرویس‌های آماده نیز مدل اشتراکی (SaaS) داریم که بسیار مقرون‌به‌صرفه است."},{q:"زمان پیاده‌سازی پروژه‌ها چقدر طول می‌کشد؟",a:"بسته به ابعاد پروژه متفاوت است. ربات‌های تلگرام و اتوماسیون‌های ساده بین ۱۰ تا ۲۰ روز کاری، و سیستم‌های جامع سازمانی بین ۱ تا ۳ ماه زمان می‌برند. جدول زمان‌بندی دقیق در قرارداد ذکر می‌شود."},{q:"آیا پس از تحویل پروژه، پشتیبانی فنی دارید؟",a:"بله، تمامی پروژه‌های نکسورا شامل ۶ ماه گارانتی عملکرد و پشتیبانی فنی رایگان هستند. پس از آن نیز می‌توانید قرارداد پشتیبانی را تمدید کنید."},{q:"آیا برای استفاده از راهکارها نیاز به تیم فنی داریم؟",a:"خیر، راهکارهای ما با رابط کاربری ساده طراحی شده‌اند. ما آموزش‌های کامل ویدیویی و مستندات را در اختیار تیم شما قرار می‌دهیم تا بدون نیاز به دانش برنامه‌نویسی از سیستم‌ها استفاده کنند."}].map((s,t)=>_.jsx(nC,{question:s.q,answer:s.a},t))})]})]}),jv=[{id:1,title:"ربات پشتیبانی صرافی دیجیتال",category:"telegram",categoryLabel:"ربات تلگرام",description:"سیستم پاسخگویی خودکار به سوالات احراز هویت و ترید کاربران با قابلیت اتصال به دیتابیس صرافی.",image:"https://picsum.photos/600/400?random=10",results:"کاهش ۸۰٪ تیکت‌های پشتیبانی"},{id:2,title:"سیستم کنترل کیفیت خط تولید",category:"vision",categoryLabel:"پردازش تصویر",description:"استفاده از دوربین‌های صنعتی و مدل‌های بینایی ماشین برای تشخیص قطعات معیوب در لحظه.",image:"https://picsum.photos/600/400?random=11",results:"افزایش دقت به ۹۹.۸٪"},{id:3,title:"اتوماسیون صدور فاکتور و انبارداری",category:"automation",categoryLabel:"اتوماسیون اداری",description:"یکپارچه‌سازی نرم‌افزار حسابداری با فروشگاه اینترنتی برای صدور آنی فاکتور رسمی.",image:"https://picsum.photos/600/400?random=12",results:"صرفه‌جویی ۱۰۰ ساعت کار در ماه"},{id:4,title:"دستیار هوشمند حقوقی",category:"telegram",categoryLabel:"ربات تلگرام",description:"چت‌بات آموزش‌دیده روی قوانین مدنی و کیفری برای ارائه مشاوره اولیه به موکلین.",image:"https://picsum.photos/600/400?random=13",results:"جذب ۳۰۰+ موکل جدید"},{id:5,title:"داشبورد تحلیل رفتار مشتری",category:"automation",categoryLabel:"تحلیل داده",description:"پلتفرم جامع برای رصد رفتار کاربران در وب‌سایت و اپلیکیشن و پیشنهاد کمپین‌های مارکتینگ.",image:"https://picsum.photos/600/400?random=14",results:"افزایش نرخ تبدیل به ۵٪"}],aC=()=>{const[s,t]=dt.useState("all"),n=s==="all"?jv:jv.filter(o=>o.category===s),a=[{id:"all",label:"همه"},{id:"telegram",label:"ربات تلگرام"},{id:"automation",label:"اتوماسیون اداری"},{id:"vision",label:"پردازش تصویر"}];return _.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[_.jsxs("div",{className:"text-center mb-12",children:[_.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"نمونه‌کارهای نکسورا"}),_.jsx("p",{className:"text-slate-400",children:"پروژه‌هایی که با قدرت هوش مصنوعی اجرا شده‌اند"})]}),_.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-12",children:a.map(o=>_.jsx("button",{onClick:()=>t(o.id),className:`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${s===o.id?"bg-primary text-white shadow-lg shadow-primary/25":"bg-surface border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"}`,children:o.label},o.id))}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map(o=>_.jsxs("div",{className:"bg-surface rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group flex flex-col h-full",children:[_.jsxs("div",{className:"relative h-48 overflow-hidden",children:[_.jsx("div",{className:"absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10",children:o.categoryLabel}),_.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"})]}),_.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[_.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors",children:o.title}),_.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6 flex-grow",children:o.description}),_.jsxs("div",{className:"mt-auto",children:[_.jsxs("div",{className:"bg-slate-950 rounded-lg p-3 border border-slate-800 mb-4",children:[_.jsx("span",{className:"block text-xs text-slate-500 mb-1",children:"دستاورد کلیدی:"}),_.jsx("span",{className:"text-green-400 font-bold text-sm",children:o.results})]}),_.jsxs("button",{className:"flex items-center gap-2 text-sm text-white font-medium hover:text-primary transition-colors",children:["مشاهده جزئیات",_.jsx($S,{size:16})]})]})]})]},o.id))})]})},sC=()=>_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20",children:[_.jsxs("div",{className:"text-center",children:[_.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"آکادمی نکسورا"}),_.jsx("p",{className:"text-slate-400",children:"یادگیری هوش مصنوعی به زبان ساده"})]}),_.jsx("section",{className:"bg-surface border border-slate-800 rounded-3xl overflow-hidden",children:_.jsxs("div",{className:"grid md:grid-cols-2",children:[_.jsxs("div",{className:"p-8 md:p-12 flex flex-col justify-center",children:[_.jsx("div",{className:"inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-bold mb-4 w-fit",children:"ویدیو آموزشی جدید"}),_.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:"چگونه هوش مصنوعی جایگزین کارمندان نمی‌شود، بلکه آن‌ها را قدرتمندتر می‌کند؟"}),_.jsx("p",{className:"text-slate-400 mb-8 leading-relaxed",children:"در این وبینار تخصصی، به بررسی نقش ابزارهای AI در افزایش بهره‌وری تیم‌های انسانی می‌پردازیم و ترس‌های رایج را بررسی می‌کنیم."}),_.jsxs(Li,{className:"w-fit gap-2",children:[_.jsx(Pg,{size:20}),"مشاهده ویدیو"]})]}),_.jsxs("div",{className:"bg-slate-900 relative h-64 md:h-auto",children:[_.jsx("img",{src:"https://picsum.photos/800/600?random=20",className:"absolute inset-0 w-full h-full object-cover opacity-60",alt:"Video cover"}),_.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:_.jsx("div",{className:"w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform",children:_.jsx(Pg,{className:"text-white w-8 h-8 ml-1"})})})]})]})}),_.jsxs("section",{children:[_.jsxs("div",{className:"flex items-center justify-between mb-8",children:[_.jsx("h2",{className:"text-2xl font-bold text-white",children:"آخرین مقالات"}),_.jsx("button",{className:"text-primary hover:text-white transition-colors text-sm",children:"مشاهده همه"})]}),_.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[1,2,3].map(s=>_.jsxs("article",{className:"group cursor-pointer",children:[_.jsx("div",{className:"rounded-2xl overflow-hidden mb-4 border border-slate-800",children:_.jsx("img",{src:`https://picsum.photos/600/400?random=${20+s}`,alt:"Article",className:"w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"})}),_.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500 mb-2",children:[_.jsx(vM,{size:14}),_.jsx("span",{children:"۵ دقیقه مطالعه"}),_.jsx("span",{className:"w-1 h-1 bg-slate-700 rounded-full"}),_.jsx("span",{children:"۲ روز پیش"})]}),_.jsx("h3",{className:"text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors",children:"۵ ابزار هوش مصنوعی که هر مدیری باید بشناسد"}),_.jsx("p",{className:"text-slate-400 text-sm line-clamp-2 leading-relaxed",children:"معرفی ابزارهایی که می‌توانند در مدیریت پروژه، زمان‌بندی و تحلیل داده‌ها به شما کمک کنند."})]},s))})]}),_.jsxs("section",{className:"bg-gradient-to-r from-primary to-indigo-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden",children:[_.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"}),_.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto",children:[_.jsx(f_,{className:"w-12 h-12 text-white/80 mx-auto mb-6"}),_.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"عضویت در خبرنامه تخصصی AI"}),_.jsx("p",{className:"text-white/80 mb-8",children:"هفته‌ای یک ایمیل، حاوی جدیدترین اخبار و آموزش‌های کاربردی هوش مصنوعی. بدون اسپم."}),_.jsxs("form",{className:"flex flex-col sm:flex-row gap-3 max-w-md mx-auto",onSubmit:s=>s.preventDefault(),children:[_.jsx("input",{type:"email",placeholder:"ایمیل خود را وارد کنید",className:"flex-grow bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:bg-white/20 transition-all"}),_.jsx("button",{className:"bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors",children:"عضویت"})]})]})]})]}),rC=()=>_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24",children:[_.jsxs("section",{className:"grid md:grid-cols-2 gap-12 items-center",children:[_.jsxs("div",{children:[_.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:"داستان نکسورا"}),_.jsxs("div",{className:"space-y-4 text-slate-400 leading-relaxed text-lg text-justify",children:[_.jsxs("p",{children:["نکسورا در سال ۱۴۰۴ با یک هدف ساده اما بلندپروازانه متولد شد:",_.jsx("span",{className:"text-white font-bold px-1",children:"آوردن هوش مصنوعی از آزمایشگاه‌ها به قلب کسب‌وکارهای ایرانی."})]}),_.jsx("p",{children:"ما تیمی از متخصصان داده، توسعه‌دهندگان نرم‌افزار و استراتژیست‌های کسب‌وکار هستیم که معتقدیم تکنولوژی باید در خدمت انسان باشد، نه جایگزین آن. در دنیایی که هر روز پیچیده‌تر می‌شود، ما سادگی و کارآمدی را برای سازمان شما به ارمغان می‌آوریم."}),_.jsx("p",{children:"امروز، نکسورا با تمرکز در این حوزه و با استفاده از بروزترین تکنولوژی های روز دنیا در تلاش است تا زیرساخت‌های هوشمند فردا را بسازد."})]})]}),_.jsxs("div",{className:"relative",children:[_.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-primary to-cyan-400 rounded-3xl opacity-20 blur-2xl"}),_.jsx("img",{src:"https://picsum.photos/800/800?random=30",alt:"Office",className:"relative rounded-3xl border border-slate-700 shadow-2xl"})]})]}),_.jsx("section",{className:"grid md:grid-cols-3 gap-8 text-center",children:[{title:"نوآوری مداوم",desc:"ما هرگز به وضع موجود راضی نیستیم و همیشه به دنبال راهکارهای جدیدتر هستیم."},{title:"شفافیت و اعتماد",desc:"با مشتریانمان مثل شرکای تجاری رفتار می‌کنیم. هیچ هزینه پنهانی وجود ندارد."},{title:"کیفیت جهانی",desc:"استانداردهای ما فراتر از مرزهاست. ما محصولاتی در کلاس جهانی می‌سازیم."}].map((s,t)=>_.jsxs("div",{className:"bg-surface p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors",children:[_.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:s.title}),_.jsx("p",{className:"text-slate-400",children:s.desc})]},t))}),_.jsxs("section",{children:[_.jsx("h2",{className:"text-3xl font-bold text-white mb-12 text-center",children:"تیم متخصص ما"}),_.jsx("div",{className:"grid md:grid-cols-4 gap-8",children:[{name:"مهندس مهدی سلیمانی",role:"بنیان‌گذار و معمار ارشد سیستم",img:"./team/ceo.png"},{name:"مهندس عرفان تحویلیان",role:"مهندس اتوماسیون",img:"./team/erfan.jpg"},{name:"نرگس میرزائی",role:"طراح تعاملات هوش مصنوعی",img:"./team/narges.jpg"},{name:"مهشید کیانی",role:"متخصص یکپارچه‌سازی",img:"./team/mahshid.jpg"}].map((s,t)=>_.jsxs("div",{className:"group relative",children:[_.jsxs("div",{className:"relative overflow-hidden rounded-2xl aspect-[3/4] mb-4",children:[_.jsx("div",{className:"absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"}),_.jsx("img",{src:s.img,alt:s.name,className:"object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"}),_.jsxs("div",{className:"absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 z-20",children:[_.jsx("button",{className:"bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-primary transition-colors",children:_.jsx(u_,{size:18})}),_.jsx("button",{className:"bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-cyan-500 transition-colors",children:_.jsx(p_,{size:18})})]})]}),_.jsx("h3",{className:"text-lg font-bold text-white text-center",children:s.name}),_.jsx("p",{className:"text-primary text-sm text-center font-medium",children:s.role})]},t))})]})]}),oC=()=>_.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[_.jsxs("div",{className:"text-center",children:[_.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:"به تیم نکسورا بپیوندید"}),_.jsx("p",{className:"text-slate-400 max-w-2xl mx-auto",children:"ما به دنبال افراد خلاق، پرشور و یادگیرنده هستیم. اگر عاشق هوش مصنوعی هستید و می‌خواهید روی لبه تکنولوژی حرکت کنید، جای شما اینجا خالیست."})]}),_.jsx("div",{className:"space-y-6",children:[{title:"Senior Python Developer",type:"تمام وقت",location:"تهران / ریموت"},{title:"AI Research Engineer",type:"تمام وقت",location:"تهران"},{title:"Frontend Developer (React)",type:"پروژه‌ای",location:"ریموت"}].map((s,t)=>_.jsxs("div",{className:"bg-surface border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-600 transition-colors",children:[_.jsxs("div",{children:[_.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:s.title}),_.jsxs("div",{className:"flex gap-4 text-sm text-slate-500",children:[_.jsxs("span",{className:"flex items-center gap-1",children:[_.jsx(nM,{size:14})," ",s.type]}),_.jsxs("span",{className:"flex items-center gap-1",children:[_.jsx(h_,{size:14})," ",s.location]}),_.jsxs("span",{className:"flex items-center gap-1",children:[_.jsx(uM,{size:14})," فوری"]})]})]}),_.jsx(Li,{variant:"secondary",size:"sm",children:"ارسال رزومه"})]},t))}),_.jsxs("div",{className:"bg-slate-900/50 border border-dashed border-slate-700 rounded-2xl p-8 text-center",children:[_.jsx(hM,{className:"w-12 h-12 text-slate-500 mx-auto mb-4"}),_.jsx("h3",{className:"text-white font-bold mb-2",children:"موقعیت شغلی مورد نظر خود را پیدا نکردید؟"}),_.jsx("p",{className:"text-slate-400 text-sm mb-6",children:"رزومه خود را برای ما بفرستید. ما همیشه به دنبال استعدادهای جدید هستیم."}),_.jsx(Li,{variant:"outline",children:"ارسال رزومه عمومی"})]})]}),lC=()=>_.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:_.jsxs("div",{className:"grid md:grid-cols-2 gap-16",children:[_.jsxs("div",{className:"space-y-8",children:[_.jsxs("div",{children:[_.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:"تماس با نکسورا"}),_.jsx("p",{className:"text-slate-400 leading-relaxed",children:"برای مشاوره رایگان یا شروع یک پروژه جدید، فرم روبرو را پر کنید یا از طریق راه‌های ارتباطی زیر با ما در تماس باشید."})]}),_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"flex items-start gap-4",children:[_.jsx("div",{className:"w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-primary shrink-0",children:_.jsx(DM,{size:24})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-1",children:"تلفن تماس"}),_.jsx("p",{className:"text-slate-400 ltr text-right",dir:"ltr",children:"021 - 88 12 34 56"}),_.jsx("p",{className:"text-slate-500 text-sm",children:"شنبه تا چهارشنبه، ۹ تا ۱۷"})]})]}),_.jsxs("div",{className:"flex items-start gap-4",children:[_.jsx("div",{className:"w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0",children:_.jsx(f_,{size:24})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-1",children:"ایمیل"}),_.jsx("p",{className:"text-slate-400 font-mono",children:"hello@nexora.ai"}),_.jsx("p",{className:"text-slate-500 text-sm",children:"پاسخگویی در کمتر از ۲ ساعت"})]})]}),_.jsxs("div",{className:"flex items-start gap-4",children:[_.jsx("div",{className:"w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-purple-400 shrink-0",children:_.jsx(h_,{size:24})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-1",children:"دفتر مرکزی"}),_.jsx("p",{className:"text-slate-400",children:"تهران، خیابان ولیعصر، پارک علم و فناوری"})]})]})]})]}),_.jsxs("div",{className:"bg-surface p-8 rounded-3xl border border-slate-800 shadow-2xl",children:[_.jsx("h2",{className:"text-2xl font-bold text-white mb-6",children:"فرم درخواست مشاوره"}),_.jsxs("form",{className:"space-y-4",onSubmit:s=>s.preventDefault(),children:[_.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"نام و نام خانوادگی"}),_.jsx("input",{type:"text",className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"شماره تماس"}),_.jsx("input",{type:"tel",className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"نام سازمان / شرکت"}),_.jsx("input",{type:"text",className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"موضوع درخواست"}),_.jsxs("select",{className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors",children:[_.jsx("option",{children:"مشاوره عمومی AI"}),_.jsx("option",{children:"سفارش ربات تلگرام"}),_.jsx("option",{children:"اتوماسیون اداری"}),_.jsx("option",{children:"سایر موارد"})]})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"توضیحات تکمیلی"}),_.jsx("textarea",{rows:4,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]}),_.jsxs(Li,{className:"w-full gap-2 text-lg",children:["ارسال درخواست",_.jsx(d_,{size:18})]})]})]})]})}),cC=()=>{const{pathname:s}=Ra();return dt.useEffect(()=>{window.scrollTo(0,0)},[s]),null},uC=()=>_.jsxs(FS,{children:[_.jsx(cC,{}),_.jsxs("div",{className:"min-h-screen flex flex-col bg-background text-slate-100 font-sans selection:bg-primary selection:text-white overflow-x-hidden",children:[_.jsx(XR,{}),_.jsx("main",{className:"flex-grow pt-20",children:_.jsxs(pS,{children:[_.jsx(os,{path:"/",element:_.jsx(KR,{})}),_.jsx(os,{path:"/services",element:_.jsx(iC,{})}),_.jsx(os,{path:"/portfolio",element:_.jsx(aC,{})}),_.jsx(os,{path:"/academy",element:_.jsx(sC,{})}),_.jsx(os,{path:"/about",element:_.jsx(rC,{})}),_.jsx(os,{path:"/careers",element:_.jsx(oC,{})}),_.jsx(os,{path:"/contact",element:_.jsx(lC,{})})]})}),_.jsx(WR,{}),_.jsx(qR,{})]})]}),ry=document.getElementById("root");if(!ry)throw new Error("Could not find root element to mount to");const fC=S1.createRoot(ry);fC.render(_.jsx(p1.StrictMode,{children:_.jsx(uC,{})}));
