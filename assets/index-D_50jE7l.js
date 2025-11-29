(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function p_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Xh={exports:{}},Jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function P1(){if(Fg)return Jo;Fg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Jo.Fragment=t,Jo.jsx=n,Jo.jsxs=n,Jo}var Ig;function z1(){return Ig||(Ig=1,Xh.exports=P1()),Xh.exports}var y=z1(),Wh={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function B1(){if(Hg)return pe;Hg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function b(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function _(B,tt,gt){this.props=B,this.context=tt,this.refs=M,this.updater=gt||E}_.prototype.isReactComponent={},_.prototype.setState=function(B,tt){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,tt,"setState")},_.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function L(){}L.prototype=_.prototype;function A(B,tt,gt){this.props=B,this.context=tt,this.refs=M,this.updater=gt||E}var U=A.prototype=new L;U.constructor=A,T(U,_.prototype),U.isPureReactComponent=!0;var I=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function D(B,tt,gt){var Ct=gt.ref;return{$$typeof:s,type:B,key:tt,ref:Ct!==void 0?Ct:null,props:gt}}function R(B,tt){return D(B.type,tt,B.props)}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function Q(B){var tt={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(gt){return tt[gt]})}var rt=/\/+/g;function mt(B,tt){return typeof B=="object"&&B!==null&&B.key!=null?Q(""+B.key):tt.toString(36)}function lt(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(O,O):(B.status="pending",B.then(function(tt){B.status==="pending"&&(B.status="fulfilled",B.value=tt)},function(tt){B.status==="pending"&&(B.status="rejected",B.reason=tt)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function H(B,tt,gt,Ct,kt){var st=typeof B;(st==="undefined"||st==="boolean")&&(B=null);var ft=!1;if(B===null)ft=!0;else switch(st){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(B.$$typeof){case s:case t:ft=!0;break;case x:return ft=B._init,H(ft(B._payload),tt,gt,Ct,kt)}}if(ft)return kt=kt(B),ft=Ct===""?"."+mt(B,0):Ct,I(kt)?(gt="",ft!=null&&(gt=ft.replace(rt,"$&/")+"/"),H(kt,tt,gt,"",function(Qt){return Qt})):kt!=null&&(G(kt)&&(kt=R(kt,gt+(kt.key==null||B&&B.key===kt.key?"":(""+kt.key).replace(rt,"$&/")+"/")+ft)),tt.push(kt)),1;ft=0;var zt=Ct===""?".":Ct+":";if(I(B))for(var Gt=0;Gt<B.length;Gt++)Ct=B[Gt],st=zt+mt(Ct,Gt),ft+=H(Ct,tt,gt,st,kt);else if(Gt=b(B),typeof Gt=="function")for(B=Gt.call(B),Gt=0;!(Ct=B.next()).done;)Ct=Ct.value,st=zt+mt(Ct,Gt++),ft+=H(Ct,tt,gt,st,kt);else if(st==="object"){if(typeof B.then=="function")return H(lt(B),tt,gt,Ct,kt);throw tt=String(B),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ft}function q(B,tt,gt){if(B==null)return B;var Ct=[],kt=0;return H(B,Ct,"","",function(st){return tt.call(gt,st,kt++)}),Ct}function Z(B){if(B._status===-1){var tt=B._result;tt=tt(),tt.then(function(gt){(B._status===0||B._status===-1)&&(B._status=1,B._result=gt)},function(gt){(B._status===0||B._status===-1)&&(B._status=2,B._result=gt)}),B._status===-1&&(B._status=0,B._result=tt)}if(B._status===1)return B._result.default;throw B._result}var vt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},bt={map:q,forEach:function(B,tt,gt){q(B,function(){tt.apply(this,arguments)},gt)},count:function(B){var tt=0;return q(B,function(){tt++}),tt},toArray:function(B){return q(B,function(tt){return tt})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return pe.Activity=g,pe.Children=bt,pe.Component=_,pe.Fragment=n,pe.Profiler=o,pe.PureComponent=A,pe.StrictMode=a,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,pe.__COMPILER_RUNTIME={__proto__:null,c:function(B){return F.H.useMemoCache(B)}},pe.cache=function(B){return function(){return B.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(B,tt,gt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Ct=T({},B.props),kt=B.key;if(tt!=null)for(st in tt.key!==void 0&&(kt=""+tt.key),tt)!X.call(tt,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&tt.ref===void 0||(Ct[st]=tt[st]);var st=arguments.length-2;if(st===1)Ct.children=gt;else if(1<st){for(var ft=Array(st),zt=0;zt<st;zt++)ft[zt]=arguments[zt+2];Ct.children=ft}return D(B.type,kt,Ct)},pe.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},pe.createElement=function(B,tt,gt){var Ct,kt={},st=null;if(tt!=null)for(Ct in tt.key!==void 0&&(st=""+tt.key),tt)X.call(tt,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(kt[Ct]=tt[Ct]);var ft=arguments.length-2;if(ft===1)kt.children=gt;else if(1<ft){for(var zt=Array(ft),Gt=0;Gt<ft;Gt++)zt[Gt]=arguments[Gt+2];kt.children=zt}if(B&&B.defaultProps)for(Ct in ft=B.defaultProps,ft)kt[Ct]===void 0&&(kt[Ct]=ft[Ct]);return D(B,st,kt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(B){return{$$typeof:h,render:B}},pe.isValidElement=G,pe.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:Z}},pe.memo=function(B,tt){return{$$typeof:p,type:B,compare:tt===void 0?null:tt}},pe.startTransition=function(B){var tt=F.T,gt={};F.T=gt;try{var Ct=B(),kt=F.S;kt!==null&&kt(gt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(O,vt)}catch(st){vt(st)}finally{tt!==null&&gt.types!==null&&(tt.types=gt.types),F.T=tt}},pe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},pe.use=function(B){return F.H.use(B)},pe.useActionState=function(B,tt,gt){return F.H.useActionState(B,tt,gt)},pe.useCallback=function(B,tt){return F.H.useCallback(B,tt)},pe.useContext=function(B){return F.H.useContext(B)},pe.useDebugValue=function(){},pe.useDeferredValue=function(B,tt){return F.H.useDeferredValue(B,tt)},pe.useEffect=function(B,tt){return F.H.useEffect(B,tt)},pe.useEffectEvent=function(B){return F.H.useEffectEvent(B)},pe.useId=function(){return F.H.useId()},pe.useImperativeHandle=function(B,tt,gt){return F.H.useImperativeHandle(B,tt,gt)},pe.useInsertionEffect=function(B,tt){return F.H.useInsertionEffect(B,tt)},pe.useLayoutEffect=function(B,tt){return F.H.useLayoutEffect(B,tt)},pe.useMemo=function(B,tt){return F.H.useMemo(B,tt)},pe.useOptimistic=function(B,tt){return F.H.useOptimistic(B,tt)},pe.useReducer=function(B,tt,gt){return F.H.useReducer(B,tt,gt)},pe.useRef=function(B){return F.H.useRef(B)},pe.useState=function(B){return F.H.useState(B)},pe.useSyncExternalStore=function(B,tt,gt){return F.H.useSyncExternalStore(B,tt,gt)},pe.useTransition=function(){return F.H.useTransition()},pe.version="19.2.0",pe}var Vg;function Lp(){return Vg||(Vg=1,Wh.exports=B1()),Wh.exports}var ht=Lp();const F1=p_(ht);var qh={exports:{}},$o={},Yh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function I1(){return Gg||(Gg=1,(function(s){function t(H,q){var Z=H.length;H.push(q);t:for(;0<Z;){var vt=Z-1>>>1,bt=H[vt];if(0<o(bt,q))H[vt]=q,H[Z]=bt,Z=vt;else break t}}function n(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var q=H[0],Z=H.pop();if(Z!==q){H[0]=Z;t:for(var vt=0,bt=H.length,B=bt>>>1;vt<B;){var tt=2*(vt+1)-1,gt=H[tt],Ct=tt+1,kt=H[Ct];if(0>o(gt,Z))Ct<bt&&0>o(kt,gt)?(H[vt]=kt,H[Ct]=Z,vt=Ct):(H[vt]=gt,H[tt]=Z,vt=tt);else if(Ct<bt&&0>o(kt,Z))H[vt]=kt,H[Ct]=Z,vt=Ct;else break t}}return q}function o(H,q){var Z=H.sortIndex-q.sortIndex;return Z!==0?Z:H.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var m=[],p=[],x=1,g=null,v=3,b=!1,E=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function U(H){for(var q=n(p);q!==null;){if(q.callback===null)a(p);else if(q.startTime<=H)a(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=n(p)}}function I(H){if(T=!1,U(H),!E)if(n(m)!==null)E=!0,O||(O=!0,Q());else{var q=n(p);q!==null&&lt(I,q.startTime-H)}}var O=!1,F=-1,X=5,D=-1;function R(){return M?!0:!(s.unstable_now()-D<X)}function G(){if(M=!1,O){var H=s.unstable_now();D=H;var q=!0;try{t:{E=!1,T&&(T=!1,L(F),F=-1),b=!0;var Z=v;try{e:{for(U(H),g=n(m);g!==null&&!(g.expirationTime>H&&R());){var vt=g.callback;if(typeof vt=="function"){g.callback=null,v=g.priorityLevel;var bt=vt(g.expirationTime<=H);if(H=s.unstable_now(),typeof bt=="function"){g.callback=bt,U(H),q=!0;break e}g===n(m)&&a(m),U(H)}else a(m);g=n(m)}if(g!==null)q=!0;else{var B=n(p);B!==null&&lt(I,B.startTime-H),q=!1}}break t}finally{g=null,v=Z,b=!1}q=void 0}}finally{q?Q():O=!1}}}var Q;if(typeof A=="function")Q=function(){A(G)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,mt=rt.port2;rt.port1.onmessage=G,Q=function(){mt.postMessage(null)}}else Q=function(){_(G,0)};function lt(H,q){F=_(function(){H(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(H){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var Z=v;v=q;try{return H()}finally{v=Z}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(H,q){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=v;v=H;try{return q()}finally{v=Z}},s.unstable_scheduleCallback=function(H,q,Z){var vt=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?vt+Z:vt):Z=vt,H){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=Z+bt,H={id:x++,callback:q,priorityLevel:H,startTime:Z,expirationTime:bt,sortIndex:-1},Z>vt?(H.sortIndex=Z,t(p,H),n(m)===null&&H===n(p)&&(T?(L(F),F=-1):T=!0,lt(I,Z-vt))):(H.sortIndex=bt,t(m,H),E||b||(E=!0,O||(O=!0,Q()))),H},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(H){var q=v;return function(){var Z=v;v=q;try{return H.apply(this,arguments)}finally{v=Z}}}})(Zh)),Zh}var kg;function H1(){return kg||(kg=1,Yh.exports=I1()),Yh.exports}var Kh={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jg;function V1(){if(jg)return Fn;jg=1;var s=Lp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Fn.flushSync=function(m){var p=u.T,x=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=x,a.d.f()}},Fn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Fn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Fn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:b}):x==="script"&&a.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Fn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);a.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Fn.requestFormReset=function(m){a.d.r(m)},Fn.unstable_batchedUpdates=function(m,p){return m(p)},Fn.useFormState=function(m,p,x){return u.H.useFormState(m,p,x)},Fn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Fn.version="19.2.0",Fn}var Xg;function G1(){if(Xg)return Kh.exports;Xg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Kh.exports=V1(),Kh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function k1(){if(Wg)return $o;Wg=1;var s=H1(),t=Lp(),n=G1();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return m(f),e;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=d;else{for(var S=!1,C=f.child;C;){if(C===r){S=!0,r=f,l=d;break}if(C===l){S=!0,l=f,r=d;break}C=C.sibling}if(!S){for(C=d.child;C;){if(C===r){S=!0,r=d,l=f;break}if(C===l){S=!0,l=d,r=f;break}C=C.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function x(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=x(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),A=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===rt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case A:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case U:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:mt(e.type)||"Memo";case X:i=e._payload,e=e._init;try{return mt(e(i))}catch{}}return null}var lt=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},vt=[],bt=-1;function B(e){return{current:e}}function tt(e){0>bt||(e.current=vt[bt],vt[bt]=null,bt--)}function gt(e,i){bt++,vt[bt]=e.current,e.current=i}var Ct=B(null),kt=B(null),st=B(null),ft=B(null);function zt(e,i){switch(gt(st,i),gt(kt,e),gt(Ct,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?og(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=og(i),e=lg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(Ct),gt(Ct,e)}function Gt(){tt(Ct),tt(kt),tt(st)}function Qt(e){e.memoizedState!==null&&gt(ft,e);var i=Ct.current,r=lg(i,e.type);i!==r&&(gt(kt,e),gt(Ct,r))}function me(e){kt.current===e&&(tt(Ct),tt(kt)),ft.current===e&&(tt(ft),Yo._currentValue=Z)}var ze,ce;function St(e){if(ze===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);ze=i&&i[1]||"",ce=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+e+ce}var z=!1;function Tt(e,i){if(!e||z)return"";z=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var at=ct}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ct){at=ct}e.call(_t.prototype)}}else{try{throw Error()}catch(ct){at=ct}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],C=d[1];if(S&&C){var V=S.split(`
`),nt=C.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<nt.length&&!nt[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===nt.length)for(l=V.length-1,f=nt.length-1;1<=l&&0<=f&&V[l]!==nt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==nt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==nt[f]){var pt=`
`+V[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=f);break}}}finally{z=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?St(r):""}function Dt(e,i){switch(e.tag){case 26:case 27:case 5:return St(e.type);case 16:return St("Lazy");case 13:return e.child!==i&&i!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return Tt(e.type,!1);case 11:return Tt(e.type.render,!1);case 1:return Tt(e.type,!0);case 31:return St("Activity");default:return""}}function Ut(e){try{var i="",r=null;do i+=Dt(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Rt=Object.prototype.hasOwnProperty,qt=s.unstable_scheduleCallback,Bt=s.unstable_cancelCallback,Xt=s.unstable_shouldYield,P=s.unstable_requestPaint,w=s.unstable_now,$=s.unstable_getCurrentPriorityLevel,dt=s.unstable_ImmediatePriority,Mt=s.unstable_UserBlockingPriority,ut=s.unstable_NormalPriority,ee=s.unstable_LowPriority,Ft=s.unstable_IdlePriority,ie=s.log,$t=s.unstable_setDisableYieldValue,Et=null,Nt=null;function ne(e){if(typeof ie=="function"&&$t(e),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Et,e)}catch{}}var Jt=Math.clz32?Math.clz32:k,jt=Math.log,fe=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(jt(e)/fe|0)|0}var It=256,Ot=262144,Pt=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var C=l&134217727;return C!==0?(l=C&~d,l!==0?f=At(l):(S&=C,S!==0?f=At(S):r||(r=C&~e,r!==0&&(f=At(r))))):(C=l&~d,C!==0?f=At(C):S!==0?f=At(S):r||(r=l&~e,r!==0&&(f=At(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function Yt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function he(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ve(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function De(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function Bn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ni(e,i,r,l,f,d){var S=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,nt=e.hiddenUpdates;for(r=S&~r;0<r;){var pt=31-Jt(r),_t=1<<pt;C[pt]=0,V[pt]=-1;var at=nt[pt];if(at!==null)for(nt[pt]=null,pt=0;pt<at.length;pt++){var ct=at[pt];ct!==null&&(ct.lane&=-536870913)}r&=~_t}l!==0&&wl(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(S&~i))}function wl(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Jt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function so(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-Jt(r),f=1<<l;f&i|e[l]&i&&(e[l]|=i),r&=~f}}function ro(e,i){var r=i&-i;return r=(r&42)!==0?1:Ai(r),(r&(e.suspendedLanes|i))!==0?0:r}function Ai(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oo(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:Dg(e.type))}function lo(e,i){var r=q.p;try{return q.p=e,i()}finally{q.p=r}}var ii=Math.random().toString(36).slice(2),fn="__reactFiber$"+ii,vn="__reactProps$"+ii,Qi="__reactContainer$"+ii,Ys="__reactEvents$"+ii,Fu="__reactListeners$"+ii,Iu="__reactHandles$"+ii,Cl="__reactResources$"+ii,xs="__reactMarker$"+ii;function co(e){delete e[fn],delete e[vn],delete e[Ys],delete e[Fu],delete e[Iu]}function La(e){var i=e[fn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Qi]||r[fn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=mg(e);e!==null;){if(r=e[fn])return r;e=mg(e)}return i}e=r,r=e.parentNode}return null}function N(e){if(e=e[fn]||e[Qi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function ot(e){var i=e[Cl];return i||(i=e[Cl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function it(e){e[xs]=!0}var J=new Set,Lt={};function Ht(e,i){Wt(e,i),Wt(e+"Capture",i)}function Wt(e,i){for(Lt[e]=i,e=0;e<i.length;e++)J.add(i[e])}var Zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},ue={};function ae(e){return Rt.call(ue,e)?!0:Rt.call(oe,e)?!1:Zt.test(e)?ue[e]=!0:(oe[e]=!0,!1)}function ge(e,i,r){if(ae(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function Ne(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Le(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function we(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function re(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ye(e){if(!e._valueTracker){var i=Fe(e)?"checked":"value";e._valueTracker=re(e,i,""+e[i])}}function Ce(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=Fe(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ua=/[\n"\\]/g;function Ke(e){return e.replace(Ua,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ji(e,i,r,l,f,d,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),i!=null?S==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+we(i)):e.value!==""+we(i)&&(e.value=""+we(i)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),i!=null?An(e,S,we(i)):r!=null?An(e,S,we(r)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+we(C):e.removeAttribute("name")}function Qe(e,i,r,l,f,d,S,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ye(e);return}r=r!=null?""+we(r):"",i=i!=null?""+we(i):r,C||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=C?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ye(e)}function An(e,i,r){i==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function _n(e,i,r,l){if(e=e.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<e.length;r++)f=i.hasOwnProperty("$"+e[r].value),e[r].selected!==f&&(e[r].selected=f),f&&l&&(e[r].defaultSelected=!0)}else{for(r=""+we(r),i=null,f=0;f<e.length;f++){if(e[f].value===r){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function wn(e,i,r){if(i!=null&&(i=""+we(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+we(r):""}function Dn(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(lt(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=we(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Ye(e)}function Bi(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var $i=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function a0(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||$i.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function s0(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&a0(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&a0(e,d,i[d])}function Hu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ly=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(e){return Ly.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Vu=null;function Gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function r0(e){var i=N(e);if(i&&(e=i.stateNode)){var r=e[vn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Ji(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Ke(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var f=l[vn]||null;if(!f)throw Error(a(90));Ji(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&Ce(l)}break t;case"textarea":wn(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&_n(e,!!r.multiple,i,!1)}}}var ku=!1;function o0(e,i,r){if(ku)return e(i,r);ku=!0;try{var l=e(i);return l}finally{if(ku=!1,(Zs!==null||Ks!==null)&&(xc(),Zs&&(i=Zs,e=Ks,Ks=Zs=null,r0(i),e)))for(i=0;i<e.length;i++)r0(e[i])}}function uo(e,i){var r=e.stateNode;if(r===null)return null;var l=r[vn]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ju=!1;if(ea)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){ju=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{ju=!1}var Oa=null,Xu=null,Nl=null;function l0(){if(Nl)return Nl;var e,i=Xu,r=i.length,l,f="value"in Oa?Oa.value:Oa.textContent,d=f.length;for(e=0;e<r&&i[e]===f[e];e++);var S=r-e;for(l=1;l<=S&&i[r-l]===f[d-l];l++);return Nl=f.slice(e,1<l?1-l:void 0)}function Dl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ll(){return!0}function c0(){return!1}function Xn(e){function i(r,l,f,d,S){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(r=e[C],this[C]=r?r(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ll:c0,this.isPropagationStopped=c0,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ll)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ll)},persist:function(){},isPersistent:Ll}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Xn(gs),ho=g({},gs,{view:0,detail:0}),Uy=Xn(ho),Wu,qu,po,Ol=g({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==po&&(po&&e.type==="mousemove"?(Wu=e.screenX-po.screenX,qu=e.screenY-po.screenY):qu=Wu=0,po=e),Wu)},movementY:function(e){return"movementY"in e?e.movementY:qu}}),u0=Xn(Ol),Oy=g({},Ol,{dataTransfer:0}),Py=Xn(Oy),zy=g({},ho,{relatedTarget:0}),Yu=Xn(zy),By=g({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=Xn(By),Iy=g({},gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hy=Xn(Iy),Vy=g({},gs,{data:0}),f0=Xn(Vy),Gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ky={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=jy[e])?!!i[e]:!1}function Zu(){return Xy}var Wy=g({},ho,{key:function(e){if(e.key){var i=Gy[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ky[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zu,charCode:function(e){return e.type==="keypress"?Dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qy=Xn(Wy),Yy=g({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),h0=Xn(Yy),Zy=g({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zu}),Ky=Xn(Zy),Qy=g({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jy=Xn(Qy),$y=g({},Ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tb=Xn($y),eb=g({},gs,{newState:0,oldState:0}),nb=Xn(eb),ib=[9,13,27,32],Ku=ea&&"CompositionEvent"in window,mo=null;ea&&"documentMode"in document&&(mo=document.documentMode);var ab=ea&&"TextEvent"in window&&!mo,d0=ea&&(!Ku||mo&&8<mo&&11>=mo),p0=" ",m0=!1;function x0(e,i){switch(e){case"keyup":return ib.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function sb(e,i){switch(e){case"compositionend":return g0(i);case"keypress":return i.which!==32?null:(m0=!0,p0);case"textInput":return e=i.data,e===p0&&m0?null:e;default:return null}}function rb(e,i){if(Qs)return e==="compositionend"||!Ku&&x0(e,i)?(e=l0(),Nl=Xu=Oa=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return d0&&i.locale!=="ko"?null:i.data;default:return null}}var ob={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v0(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!ob[e.type]:i==="textarea"}function _0(e,i,r,l){Zs?Ks?Ks.push(l):Ks=[l]:Zs=l,i=Mc(i,"onChange"),0<i.length&&(r=new Ul("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var xo=null,go=null;function lb(e){eg(e,0)}function Pl(e){var i=Y(e);if(Ce(i))return e}function y0(e,i){if(e==="change")return i}var b0=!1;if(ea){var Qu;if(ea){var Ju="oninput"in document;if(!Ju){var S0=document.createElement("div");S0.setAttribute("oninput","return;"),Ju=typeof S0.oninput=="function"}Qu=Ju}else Qu=!1;b0=Qu&&(!document.documentMode||9<document.documentMode)}function M0(){xo&&(xo.detachEvent("onpropertychange",E0),go=xo=null)}function E0(e){if(e.propertyName==="value"&&Pl(go)){var i=[];_0(i,go,e,Gu(e)),o0(lb,i)}}function cb(e,i,r){e==="focusin"?(M0(),xo=i,go=r,xo.attachEvent("onpropertychange",E0)):e==="focusout"&&M0()}function ub(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pl(go)}function fb(e,i){if(e==="click")return Pl(i)}function hb(e,i){if(e==="input"||e==="change")return Pl(i)}function db(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ai=typeof Object.is=="function"?Object.is:db;function vo(e,i){if(ai(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!Rt.call(i,f)||!ai(e[f],i[f]))return!1}return!0}function T0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function A0(e,i){var r=T0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=T0(r)}}function w0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?w0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function C0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Tn(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Tn(e.document)}return i}function $u(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var pb=ea&&"documentMode"in document&&11>=document.documentMode,Js=null,tf=null,_o=null,ef=!1;function R0(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ef||Js==null||Js!==Tn(l)||(l=Js,"selectionStart"in l&&$u(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),_o&&vo(_o,l)||(_o=l,l=Mc(tf,"onSelect"),0<l.length&&(i=new Ul("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=Js)))}function vs(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var $s={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},nf={},N0={};ea&&(N0=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function _s(e){if(nf[e])return nf[e];if(!$s[e])return e;var i=$s[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in N0)return nf[e]=i[r];return e}var D0=_s("animationend"),L0=_s("animationiteration"),U0=_s("animationstart"),mb=_s("transitionrun"),xb=_s("transitionstart"),gb=_s("transitioncancel"),O0=_s("transitionend"),P0=new Map,af="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");af.push("scrollEnd");function wi(e,i){P0.set(e,i),Ht(i,[e])}var zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},pi=[],tr=0,sf=0;function Bl(){for(var e=tr,i=sf=tr=0;i<e;){var r=pi[i];pi[i++]=null;var l=pi[i];pi[i++]=null;var f=pi[i];pi[i++]=null;var d=pi[i];if(pi[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&z0(r,f,d)}}function Fl(e,i,r,l){pi[tr++]=e,pi[tr++]=i,pi[tr++]=r,pi[tr++]=l,sf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function rf(e,i,r,l){return Fl(e,i,r,l),Il(e)}function ys(e,i){return Fl(e,null,null,i),Il(e)}function z0(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=e.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-Jt(r),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function Il(e){if(50<Vo)throw Vo=0,mh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var er={};function vb(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(e,i,r,l){return new vb(e,i,r,l)}function of(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,i){var r=e.alternate;return r===null?(r=si(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function B0(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Hl(e,i,r,l,f,d){var S=0;if(l=e,typeof e=="function")of(e)&&(S=1);else if(typeof e=="string")S=M1(e,r,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=si(31,r,i,f),e.elementType=D,e.lanes=d,e;case T:return bs(r.children,f,d,i);case M:S=8,f|=24;break;case _:return e=si(12,r,i,f|2),e.elementType=_,e.lanes=d,e;case I:return e=si(13,r,i,f),e.elementType=I,e.lanes=d,e;case O:return e=si(19,r,i,f),e.elementType=O,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:S=10;break t;case L:S=9;break t;case U:S=11;break t;case F:S=14;break t;case X:S=16,l=null;break t}S=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=si(S,r,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function bs(e,i,r,l){return e=si(7,e,l,i),e.lanes=r,e}function lf(e,i,r){return e=si(6,e,null,i),e.lanes=r,e}function F0(e){var i=si(18,null,null,0);return i.stateNode=e,i}function cf(e,i,r){return i=si(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var I0=new WeakMap;function mi(e,i){if(typeof e=="object"&&e!==null){var r=I0.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Ut(i)},I0.set(e,i),i)}return{value:e,source:i,stack:Ut(i)}}var nr=[],ir=0,Vl=null,yo=0,xi=[],gi=0,Pa=null,Fi=1,Ii="";function ia(e,i){nr[ir++]=yo,nr[ir++]=Vl,Vl=e,yo=i}function H0(e,i,r){xi[gi++]=Fi,xi[gi++]=Ii,xi[gi++]=Pa,Pa=e;var l=Fi;e=Ii;var f=32-Jt(l)-1;l&=~(1<<f),r+=1;var d=32-Jt(i)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Fi=1<<32-Jt(i)+f|r<<f|l,Ii=d+e}else Fi=1<<d|r<<f|l,Ii=e}function uf(e){e.return!==null&&(ia(e,1),H0(e,1,0))}function ff(e){for(;e===Vl;)Vl=nr[--ir],nr[ir]=null,yo=nr[--ir],nr[ir]=null;for(;e===Pa;)Pa=xi[--gi],xi[gi]=null,Ii=xi[--gi],xi[gi]=null,Fi=xi[--gi],xi[gi]=null}function V0(e,i){xi[gi++]=Fi,xi[gi++]=Ii,xi[gi++]=Pa,Fi=i.id,Ii=i.overflow,Pa=e}var Ln=null,Je=null,Re=!1,za=null,vi=!1,hf=Error(a(519));function Ba(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(mi(i,e)),hf}function G0(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[fn]=e,i[vn]=l,r){case"dialog":Ee("cancel",i),Ee("close",i);break;case"iframe":case"object":case"embed":Ee("load",i);break;case"video":case"audio":for(r=0;r<ko.length;r++)Ee(ko[r],i);break;case"source":Ee("error",i);break;case"img":case"image":case"link":Ee("error",i),Ee("load",i);break;case"details":Ee("toggle",i);break;case"input":Ee("invalid",i),Qe(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ee("invalid",i);break;case"textarea":Ee("invalid",i),Dn(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||sg(i.textContent,r)?(l.popover!=null&&(Ee("beforetoggle",i),Ee("toggle",i)),l.onScroll!=null&&Ee("scroll",i),l.onScrollEnd!=null&&Ee("scrollend",i),l.onClick!=null&&(i.onclick=ta),i=!0):i=!1,i||Ba(e,!0)}function k0(e){for(Ln=e.return;Ln;)switch(Ln.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Ln=Ln.return}}function ar(e){if(e!==Ln)return!1;if(!Re)return k0(e),Re=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Nh(e.type,e.memoizedProps)),r=!r),r&&Je&&Ba(e),k0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=pg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=pg(e)}else i===27?(i=Je,Qa(e.type)?(e=Ph,Ph=null,Je=e):Je=i):Je=Ln?yi(e.stateNode.nextSibling):null;return!0}function Ss(){Je=Ln=null,Re=!1}function df(){var e=za;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),za=null),e}function bo(e){za===null?za=[e]:za.push(e)}var pf=B(null),Ms=null,aa=null;function Fa(e,i,r){gt(pf,i._currentValue),i._currentValue=r}function sa(e){e._currentValue=pf.current,tt(pf)}function mf(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function xf(e,i,r,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;t:for(;d!==null;){var C=d;d=f;for(var V=0;V<i.length;V++)if(C.context===i[V]){d.lanes|=r,C=d.alternate,C!==null&&(C.lanes|=r),mf(d.return,r,e),l||(S=null);break t}d=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),mf(S,r,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function sr(e,i,r,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var C=f.type;ai(f.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(f===ft.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Yo):e=[Yo])}f=f.return}e!==null&&xf(i,e,r,l),i.flags|=262144}function Gl(e){for(e=e.firstContext;e!==null;){if(!ai(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Es(e){Ms=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return j0(Ms,e)}function kl(e,i){return Ms===null&&Es(e),j0(e,i)}function j0(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},aa===null){if(e===null)throw Error(a(308));aa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else aa=aa.next=i;return r}var _b=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},yb=s.unstable_scheduleCallback,bb=s.unstable_NormalPriority,hn={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gf(){return{controller:new _b,data:new Map,refCount:0}}function So(e){e.refCount--,e.refCount===0&&yb(bb,function(){e.controller.abort()})}var Mo=null,vf=0,rr=0,or=null;function Sb(e,i){if(Mo===null){var r=Mo=[];vf=0,rr=bh(),or={status:"pending",value:void 0,then:function(l){r.push(l)}}}return vf++,i.then(X0,X0),i}function X0(){if(--vf===0&&Mo!==null){or!==null&&(or.status="fulfilled");var e=Mo;Mo=null,rr=0,or=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Mb(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var W0=H.S;H.S=function(e,i){Rx=w(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Sb(e,i),W0!==null&&W0(e,i)};var Ts=B(null);function _f(){var e=Ts.current;return e!==null?e:Ze.pooledCache}function jl(e,i){i===null?gt(Ts,Ts.current):gt(Ts,i.pool)}function q0(){var e=_f();return e===null?null:{parent:hn._currentValue,pool:e}}var lr=Error(a(460)),yf=Error(a(474)),Xl=Error(a(542)),Wl={then:function(){}};function Y0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Z0(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(ta,ta),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Q0(e),e;default:if(typeof i.status=="string")i.then(ta,ta);else{if(e=Ze,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Q0(e),e}throw ws=i,lr}}function As(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ws=r,lr):r}}var ws=null;function K0(){if(ws===null)throw Error(a(459));var e=ws;return ws=null,e}function Q0(e){if(e===lr||e===Xl)throw Error(a(483))}var cr=null,Eo=0;function ql(e){var i=Eo;return Eo+=1,cr===null&&(cr=[]),Z0(cr,e,i)}function To(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Yl(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function J0(e){function i(K,W){if(e){var et=K.deletions;et===null?(K.deletions=[W],K.flags|=16):et.push(W)}}function r(K,W){if(!e)return null;for(;W!==null;)i(K,W),W=W.sibling;return null}function l(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function f(K,W){return K=na(K,W),K.index=0,K.sibling=null,K}function d(K,W,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<W?(K.flags|=67108866,W):et):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function S(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function C(K,W,et,xt){return W===null||W.tag!==6?(W=lf(et,K.mode,xt),W.return=K,W):(W=f(W,et),W.return=K,W)}function V(K,W,et,xt){var se=et.type;return se===T?pt(K,W,et.props.children,xt,et.key):W!==null&&(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===X&&As(se)===W.type)?(W=f(W,et.props),To(W,et),W.return=K,W):(W=Hl(et.type,et.key,et.props,null,K.mode,xt),To(W,et),W.return=K,W)}function nt(K,W,et,xt){return W===null||W.tag!==4||W.stateNode.containerInfo!==et.containerInfo||W.stateNode.implementation!==et.implementation?(W=cf(et,K.mode,xt),W.return=K,W):(W=f(W,et.children||[]),W.return=K,W)}function pt(K,W,et,xt,se){return W===null||W.tag!==7?(W=bs(et,K.mode,xt,se),W.return=K,W):(W=f(W,et),W.return=K,W)}function _t(K,W,et){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=lf(""+W,K.mode,et),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return et=Hl(W.type,W.key,W.props,null,K.mode,et),To(et,W),et.return=K,et;case E:return W=cf(W,K.mode,et),W.return=K,W;case X:return W=As(W),_t(K,W,et)}if(lt(W)||Q(W))return W=bs(W,K.mode,et,null),W.return=K,W;if(typeof W.then=="function")return _t(K,ql(W),et);if(W.$$typeof===A)return _t(K,kl(K,W),et);Yl(K,W)}return null}function at(K,W,et,xt){var se=W!==null?W.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return se!==null?null:C(K,W,""+et,xt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case b:return et.key===se?V(K,W,et,xt):null;case E:return et.key===se?nt(K,W,et,xt):null;case X:return et=As(et),at(K,W,et,xt)}if(lt(et)||Q(et))return se!==null?null:pt(K,W,et,xt,null);if(typeof et.then=="function")return at(K,W,ql(et),xt);if(et.$$typeof===A)return at(K,W,kl(K,et),xt);Yl(K,et)}return null}function ct(K,W,et,xt,se){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return K=K.get(et)||null,C(W,K,""+xt,se);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case b:return K=K.get(xt.key===null?et:xt.key)||null,V(W,K,xt,se);case E:return K=K.get(xt.key===null?et:xt.key)||null,nt(W,K,xt,se);case X:return xt=As(xt),ct(K,W,et,xt,se)}if(lt(xt)||Q(xt))return K=K.get(et)||null,pt(W,K,xt,se,null);if(typeof xt.then=="function")return ct(K,W,et,ql(xt),se);if(xt.$$typeof===A)return ct(K,W,et,kl(W,xt),se);Yl(W,xt)}return null}function Kt(K,W,et,xt){for(var se=null,Ue=null,te=W,ve=W=0,Ae=null;te!==null&&ve<et.length;ve++){te.index>ve?(Ae=te,te=null):Ae=te.sibling;var Oe=at(K,te,et[ve],xt);if(Oe===null){te===null&&(te=Ae);break}e&&te&&Oe.alternate===null&&i(K,te),W=d(Oe,W,ve),Ue===null?se=Oe:Ue.sibling=Oe,Ue=Oe,te=Ae}if(ve===et.length)return r(K,te),Re&&ia(K,ve),se;if(te===null){for(;ve<et.length;ve++)te=_t(K,et[ve],xt),te!==null&&(W=d(te,W,ve),Ue===null?se=te:Ue.sibling=te,Ue=te);return Re&&ia(K,ve),se}for(te=l(te);ve<et.length;ve++)Ae=ct(te,K,ve,et[ve],xt),Ae!==null&&(e&&Ae.alternate!==null&&te.delete(Ae.key===null?ve:Ae.key),W=d(Ae,W,ve),Ue===null?se=Ae:Ue.sibling=Ae,Ue=Ae);return e&&te.forEach(function(ns){return i(K,ns)}),Re&&ia(K,ve),se}function le(K,W,et,xt){if(et==null)throw Error(a(151));for(var se=null,Ue=null,te=W,ve=W=0,Ae=null,Oe=et.next();te!==null&&!Oe.done;ve++,Oe=et.next()){te.index>ve?(Ae=te,te=null):Ae=te.sibling;var ns=at(K,te,Oe.value,xt);if(ns===null){te===null&&(te=Ae);break}e&&te&&ns.alternate===null&&i(K,te),W=d(ns,W,ve),Ue===null?se=ns:Ue.sibling=ns,Ue=ns,te=Ae}if(Oe.done)return r(K,te),Re&&ia(K,ve),se;if(te===null){for(;!Oe.done;ve++,Oe=et.next())Oe=_t(K,Oe.value,xt),Oe!==null&&(W=d(Oe,W,ve),Ue===null?se=Oe:Ue.sibling=Oe,Ue=Oe);return Re&&ia(K,ve),se}for(te=l(te);!Oe.done;ve++,Oe=et.next())Oe=ct(te,K,ve,Oe.value,xt),Oe!==null&&(e&&Oe.alternate!==null&&te.delete(Oe.key===null?ve:Oe.key),W=d(Oe,W,ve),Ue===null?se=Oe:Ue.sibling=Oe,Ue=Oe);return e&&te.forEach(function(O1){return i(K,O1)}),Re&&ia(K,ve),se}function je(K,W,et,xt){if(typeof et=="object"&&et!==null&&et.type===T&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case b:t:{for(var se=et.key;W!==null;){if(W.key===se){if(se=et.type,se===T){if(W.tag===7){r(K,W.sibling),xt=f(W,et.props.children),xt.return=K,K=xt;break t}}else if(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===X&&As(se)===W.type){r(K,W.sibling),xt=f(W,et.props),To(xt,et),xt.return=K,K=xt;break t}r(K,W);break}else i(K,W);W=W.sibling}et.type===T?(xt=bs(et.props.children,K.mode,xt,et.key),xt.return=K,K=xt):(xt=Hl(et.type,et.key,et.props,null,K.mode,xt),To(xt,et),xt.return=K,K=xt)}return S(K);case E:t:{for(se=et.key;W!==null;){if(W.key===se)if(W.tag===4&&W.stateNode.containerInfo===et.containerInfo&&W.stateNode.implementation===et.implementation){r(K,W.sibling),xt=f(W,et.children||[]),xt.return=K,K=xt;break t}else{r(K,W);break}else i(K,W);W=W.sibling}xt=cf(et,K.mode,xt),xt.return=K,K=xt}return S(K);case X:return et=As(et),je(K,W,et,xt)}if(lt(et))return Kt(K,W,et,xt);if(Q(et)){if(se=Q(et),typeof se!="function")throw Error(a(150));return et=se.call(et),le(K,W,et,xt)}if(typeof et.then=="function")return je(K,W,ql(et),xt);if(et.$$typeof===A)return je(K,W,kl(K,et),xt);Yl(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,W!==null&&W.tag===6?(r(K,W.sibling),xt=f(W,et),xt.return=K,K=xt):(r(K,W),xt=lf(et,K.mode,xt),xt.return=K,K=xt),S(K)):r(K,W)}return function(K,W,et,xt){try{Eo=0;var se=je(K,W,et,xt);return cr=null,se}catch(te){if(te===lr||te===Xl)throw te;var Ue=si(29,te,null,K.mode);return Ue.lanes=xt,Ue.return=K,Ue}finally{}}}var Cs=J0(!0),$0=J0(!1),Ia=!1;function bf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ha(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Va(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Be&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Il(e),z0(e,null,r),i}return Fl(e,l,i,r),Il(e)}function Ao(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,so(e,r)}}function Mf(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var Ef=!1;function wo(){if(Ef){var e=or;if(e!==null)throw e}}function Co(e,i,r,l){Ef=!1;var f=e.updateQueue;Ia=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var V=C,nt=V.next;V.next=null,S===null?d=nt:S.next=nt,S=V;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,C=pt.lastBaseUpdate,C!==S&&(C===null?pt.firstBaseUpdate=nt:C.next=nt,pt.lastBaseUpdate=V))}if(d!==null){var _t=f.baseState;S=0,pt=nt=V=null,C=d;do{var at=C.lane&-536870913,ct=at!==C.lane;if(ct?(Te&at)===at:(l&at)===at){at!==0&&at===rr&&(Ef=!0),pt!==null&&(pt=pt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Kt=e,le=C;at=i;var je=r;switch(le.tag){case 1:if(Kt=le.payload,typeof Kt=="function"){_t=Kt.call(je,_t,at);break t}_t=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=le.payload,at=typeof Kt=="function"?Kt.call(je,_t,at):Kt,at==null)break t;_t=g({},_t,at);break t;case 2:Ia=!0}}at=C.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=f.callbacks,ct===null?f.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:C.tag,payload:C.payload,callback:C.callback,next:null},pt===null?(nt=pt=ct,V=_t):pt=pt.next=ct,S|=at;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;ct=C,C=ct.next,ct.next=null,f.lastBaseUpdate=ct,f.shared.pending=null}}while(!0);pt===null&&(V=_t),f.baseState=V,f.firstBaseUpdate=nt,f.lastBaseUpdate=pt,d===null&&(f.shared.lanes=0),Wa|=S,e.lanes=S,e.memoizedState=_t}}function tm(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function em(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)tm(r[e],i)}var ur=B(null),Zl=B(0);function nm(e,i){e=pa,gt(Zl,e),gt(ur,i),pa=e|i.baseLanes}function Tf(){gt(Zl,pa),gt(ur,ur.current)}function Af(){pa=Zl.current,tt(ur),tt(Zl)}var ri=B(null),_i=null;function Ga(e){var i=e.alternate;gt(cn,cn.current&1),gt(ri,e),_i===null&&(i===null||ur.current!==null||i.memoizedState!==null)&&(_i=e)}function wf(e){gt(cn,cn.current),gt(ri,e),_i===null&&(_i=e)}function im(e){e.tag===22?(gt(cn,cn.current),gt(ri,e),_i===null&&(_i=e)):ka()}function ka(){gt(cn,cn.current),gt(ri,ri.current)}function oi(e){tt(ri),_i===e&&(_i=null),tt(cn)}var cn=B(0);function Kl(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Uh(r)||Oh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ra=0,xe=null,Ge=null,dn=null,Ql=!1,fr=!1,Rs=!1,Jl=0,Ro=0,hr=null,Eb=0;function rn(){throw Error(a(321))}function Cf(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!ai(e[r],i[r]))return!1;return!0}function Rf(e,i,r,l,f,d){return ra=d,xe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?Hm:jf,Rs=!1,d=r(l,f),Rs=!1,fr&&(d=sm(i,r,l,f)),am(e),d}function am(e){H.H=Lo;var i=Ge!==null&&Ge.next!==null;if(ra=0,dn=Ge=xe=null,Ql=!1,Ro=0,hr=null,i)throw Error(a(300));e===null||pn||(e=e.dependencies,e!==null&&Gl(e)&&(pn=!0))}function sm(e,i,r,l){xe=e;var f=0;do{if(fr&&(hr=null),Ro=0,fr=!1,25<=f)throw Error(a(301));if(f+=1,dn=Ge=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=Vm,d=i(r,l)}while(fr);return d}function Tb(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?No(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(xe.flags|=1024),i}function Nf(){var e=Jl!==0;return Jl=0,e}function Df(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function Lf(e){if(Ql){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Ql=!1}ra=0,dn=Ge=xe=null,fr=!1,Ro=Jl=0,hr=null}function Vn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?xe.memoizedState=dn=e:dn=dn.next=e,dn}function un(){if(Ge===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=dn===null?xe.memoizedState:dn.next;if(i!==null)dn=i,Ge=e;else{if(e===null)throw xe.alternate===null?Error(a(467)):Error(a(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},dn===null?xe.memoizedState=dn=e:dn=dn.next=e}return dn}function $l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(e){var i=Ro;return Ro+=1,hr===null&&(hr=[]),e=Z0(hr,e,i),i=xe,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Hm:jf),e}function tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return No(e);if(e.$$typeof===A)return Un(e)}throw Error(a(438,String(e)))}function Uf(e){var i=null,r=xe.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=xe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=$l(),xe.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=R;return i.index++,r}function oa(e,i){return typeof i=="function"?i(e):i}function ec(e){var i=un();return Of(i,Ge,e)}function Of(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var C=S=null,V=null,nt=i,pt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(Te&_t)===_t:(ra&_t)===_t){var at=nt.revertLane;if(at===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===rr&&(pt=!0);else if((ra&at)===at){nt=nt.next,at===rr&&(pt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(C=V=_t,S=d):V=V.next=_t,xe.lanes|=at,Wa|=at;_t=nt.action,Rs&&r(d,_t),d=nt.hasEagerState?nt.eagerState:r(d,_t)}else at={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(C=V=at,S=d):V=V.next=at,xe.lanes|=_t,Wa|=_t;nt=nt.next}while(nt!==null&&nt!==i);if(V===null?S=d:V.next=C,!ai(d,e.memoizedState)&&(pn=!0,pt&&(r=or,r!==null)))throw r;e.memoizedState=d,e.baseState=S,e.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Pf(e){var i=un(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do d=e(d,S.action),S=S.next;while(S!==f);ai(d,i.memoizedState)||(pn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function rm(e,i,r){var l=xe,f=un(),d=Re;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var S=!ai((Ge||f).memoizedState,r);if(S&&(f.memoizedState=r,pn=!0),f=f.queue,Ff(cm.bind(null,l,f,e),[e]),f.getSnapshot!==i||S||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,dr(9,{destroy:void 0},lm.bind(null,l,f,r,i),null),Ze===null)throw Error(a(349));d||(ra&127)!==0||om(l,i,r)}return r}function om(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=xe.updateQueue,i===null?(i=$l(),xe.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function lm(e,i,r,l){i.value=r,i.getSnapshot=l,um(i)&&fm(e)}function cm(e,i,r){return r(function(){um(i)&&fm(e)})}function um(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!ai(e,r)}catch{return!0}}function fm(e){var i=ys(e,2);i!==null&&Kn(i,e,2)}function zf(e){var i=Vn();if(typeof e=="function"){var r=e;if(e=r(),Rs){ne(!0);try{r()}finally{ne(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},i}function hm(e,i,r,l){return e.baseState=r,Of(e,Ge,typeof l=="function"?l:oa)}function Ab(e,i,r,l,f){if(ac(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};H.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,dm(i,d)):(d.next=r.next,i.pending=r.next=d)}}function dm(e,i){var r=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=H.T,S={};H.T=S;try{var C=r(f,l),V=H.S;V!==null&&V(S,C),pm(e,i,C)}catch(nt){Bf(e,i,nt)}finally{d!==null&&S.types!==null&&(d.types=S.types),H.T=d}}else try{d=r(f,l),pm(e,i,d)}catch(nt){Bf(e,i,nt)}}function pm(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){mm(e,i,l)},function(l){return Bf(e,i,l)}):mm(e,i,r)}function mm(e,i,r){i.status="fulfilled",i.value=r,xm(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,dm(e,r)))}function Bf(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,xm(i),i=i.next;while(i!==l)}e.action=null}function xm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function gm(e,i){return i}function vm(e,i){if(Re){var r=Ze.formState;if(r!==null){t:{var l=xe;if(Re){if(Je){e:{for(var f=Je,d=vi;f.nodeType!==8;){if(!d){f=null;break e}if(f=yi(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Je=yi(f.nextSibling),l=f.data==="F!";break t}}Ba(l)}l=!1}l&&(i=r[0])}}return r=Vn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gm,lastRenderedState:i},r.queue=l,r=Bm.bind(null,xe,l),l.dispatch=r,l=zf(!1),d=kf.bind(null,xe,!1,l.queue),l=Vn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,r=Ab.bind(null,xe,f,d,r),f.dispatch=r,l.memoizedState=e,[i,r,!1]}function _m(e){var i=un();return ym(i,Ge,e)}function ym(e,i,r){if(i=Of(e,i,gm)[0],e=ec(oa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=No(i)}catch(S){throw S===lr?Xl:S}else l=i;i=un();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(xe.flags|=2048,dr(9,{destroy:void 0},wb.bind(null,f,r),null)),[l,d,e]}function wb(e,i){e.action=i}function bm(e){var i=un(),r=Ge;if(r!==null)return ym(i,r,e);un(),i=i.memoizedState,r=un();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function dr(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=xe.updateQueue,i===null&&(i=$l(),xe.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function Sm(){return un().memoizedState}function nc(e,i,r,l){var f=Vn();xe.flags|=e,f.memoizedState=dr(1|i,{destroy:void 0},r,l===void 0?null:l)}function ic(e,i,r,l){var f=un();l=l===void 0?null:l;var d=f.memoizedState.inst;Ge!==null&&l!==null&&Cf(l,Ge.memoizedState.deps)?f.memoizedState=dr(i,d,r,l):(xe.flags|=e,f.memoizedState=dr(1|i,d,r,l))}function Mm(e,i){nc(8390656,8,e,i)}function Ff(e,i){ic(2048,8,e,i)}function Cb(e){xe.flags|=4;var i=xe.updateQueue;if(i===null)i=$l(),xe.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function Em(e){var i=un().memoizedState;return Cb({ref:i,nextImpl:e}),function(){if((Be&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Tm(e,i){return ic(4,2,e,i)}function Am(e,i){return ic(4,4,e,i)}function wm(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Cm(e,i,r){r=r!=null?r.concat([e]):null,ic(4,4,wm.bind(null,i,e),r)}function If(){}function Rm(e,i){var r=un();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Cf(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function Nm(e,i){var r=un();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Cf(i,l[1]))return l[0];if(l=e(),Rs){ne(!0);try{e()}finally{ne(!1)}}return r.memoizedState=[l,i],l}function Hf(e,i,r){return r===void 0||(ra&1073741824)!==0&&(Te&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=Dx(),xe.lanes|=e,Wa|=e,r)}function Dm(e,i,r,l){return ai(r,i)?r:ur.current!==null?(e=Hf(e,r,l),ai(e,i)||(pn=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(Te&261930)===0?(pn=!0,e.memoizedState=r):(e=Dx(),xe.lanes|=e,Wa|=e,i)}function Lm(e,i,r,l,f){var d=q.p;q.p=d!==0&&8>d?d:8;var S=H.T,C={};H.T=C,kf(e,!1,i,r);try{var V=f(),nt=H.S;if(nt!==null&&nt(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pt=Mb(V,l);Do(e,i,pt,ui(e))}else Do(e,i,l,ui(e))}catch(_t){Do(e,i,{then:function(){},status:"rejected",reason:_t},ui())}finally{q.p=d,S!==null&&C.types!==null&&(S.types=C.types),H.T=S}}function Rb(){}function Vf(e,i,r,l){if(e.tag!==5)throw Error(a(476));var f=Um(e).queue;Lm(e,f,i,Z,r===null?Rb:function(){return Om(e),r(l)})}function Um(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:Z},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Om(e){var i=Um(e);i.next===null&&(i=e.alternate.memoizedState),Do(e,i.next.queue,{},ui())}function Gf(){return Un(Yo)}function Pm(){return un().memoizedState}function zm(){return un().memoizedState}function Nb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=ui();e=Ha(r);var l=Va(i,e,r);l!==null&&(Kn(l,i,r),Ao(l,i,r)),i={cache:gf()},e.payload=i;return}i=i.return}}function Db(e,i,r){var l=ui();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ac(e)?Fm(i,r):(r=rf(e,i,r,l),r!==null&&(Kn(r,e,l),Im(r,i,l)))}function Bm(e,i,r){var l=ui();Do(e,i,r,l)}function Do(e,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(ac(e))Fm(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,C=d(S,r);if(f.hasEagerState=!0,f.eagerState=C,ai(C,S))return Fl(e,i,f,0),Ze===null&&Bl(),!1}catch{}finally{}if(r=rf(e,i,f,l),r!==null)return Kn(r,e,l),Im(r,i,l),!0}return!1}function kf(e,i,r,l){if(l={lane:2,revertLane:bh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ac(e)){if(i)throw Error(a(479))}else i=rf(e,r,l,2),i!==null&&Kn(i,e,2)}function ac(e){var i=e.alternate;return e===xe||i!==null&&i===xe}function Fm(e,i){fr=Ql=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function Im(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,so(e,r)}}var Lo={readContext:Un,use:tc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Lo.useEffectEvent=rn;var Hm={readContext:Un,use:tc,useCallback:function(e,i){return Vn().memoizedState=[e,i===void 0?null:i],e},useContext:Un,useEffect:Mm,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,nc(4194308,4,wm.bind(null,i,e),r)},useLayoutEffect:function(e,i){return nc(4194308,4,e,i)},useInsertionEffect:function(e,i){nc(4,2,e,i)},useMemo:function(e,i){var r=Vn();i=i===void 0?null:i;var l=e();if(Rs){ne(!0);try{e()}finally{ne(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=Vn();if(r!==void 0){var f=r(i);if(Rs){ne(!0);try{r(i)}finally{ne(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=Db.bind(null,xe,e),[l.memoizedState,e]},useRef:function(e){var i=Vn();return e={current:e},i.memoizedState=e},useState:function(e){e=zf(e);var i=e.queue,r=Bm.bind(null,xe,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:If,useDeferredValue:function(e,i){var r=Vn();return Hf(r,e,i)},useTransition:function(){var e=zf(!1);return e=Lm.bind(null,xe,e.queue,!0,!1),Vn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=xe,f=Vn();if(Re){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Ze===null)throw Error(a(349));(Te&127)!==0||om(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,Mm(cm.bind(null,l,d,e),[e]),l.flags|=2048,dr(9,{destroy:void 0},lm.bind(null,l,d,r,i),null),r},useId:function(){var e=Vn(),i=Ze.identifierPrefix;if(Re){var r=Ii,l=Fi;r=(l&~(1<<32-Jt(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Jl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=Eb++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Gf,useFormState:vm,useActionState:vm,useOptimistic:function(e){var i=Vn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=kf.bind(null,xe,!0,r),r.dispatch=i,[e,i]},useMemoCache:Uf,useCacheRefresh:function(){return Vn().memoizedState=Nb.bind(null,xe)},useEffectEvent:function(e){var i=Vn(),r={impl:e};return i.memoizedState=r,function(){if((Be&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},jf={readContext:Un,use:tc,useCallback:Rm,useContext:Un,useEffect:Ff,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Nm,useReducer:ec,useRef:Sm,useState:function(){return ec(oa)},useDebugValue:If,useDeferredValue:function(e,i){var r=un();return Dm(r,Ge.memoizedState,e,i)},useTransition:function(){var e=ec(oa)[0],i=un().memoizedState;return[typeof e=="boolean"?e:No(e),i]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:Gf,useFormState:_m,useActionState:_m,useOptimistic:function(e,i){var r=un();return hm(r,Ge,e,i)},useMemoCache:Uf,useCacheRefresh:zm};jf.useEffectEvent=Em;var Vm={readContext:Un,use:tc,useCallback:Rm,useContext:Un,useEffect:Ff,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Nm,useReducer:Pf,useRef:Sm,useState:function(){return Pf(oa)},useDebugValue:If,useDeferredValue:function(e,i){var r=un();return Ge===null?Hf(r,e,i):Dm(r,Ge.memoizedState,e,i)},useTransition:function(){var e=Pf(oa)[0],i=un().memoizedState;return[typeof e=="boolean"?e:No(e),i]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:Gf,useFormState:bm,useActionState:bm,useOptimistic:function(e,i){var r=un();return Ge!==null?hm(r,Ge,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Uf,useCacheRefresh:zm};Vm.useEffectEvent=Em;function Xf(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:g({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Wf={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=ui(),f=Ha(l);f.payload=i,r!=null&&(f.callback=r),i=Va(e,f,l),i!==null&&(Kn(i,e,l),Ao(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=ui(),f=Ha(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Va(e,f,l),i!==null&&(Kn(i,e,l),Ao(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=ui(),l=Ha(r);l.tag=2,i!=null&&(l.callback=i),i=Va(e,l,r),i!==null&&(Kn(i,e,r),Ao(i,e,r))}};function Gm(e,i,r,l,f,d,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!vo(r,l)||!vo(f,d):!0}function km(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Wf.enqueueReplaceState(i,i.state,null)}function Ns(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=g({},r));for(var f in e)r[f]===void 0&&(r[f]=e[f])}return r}function jm(e){zl(e)}function Xm(e){console.error(e)}function Wm(e){zl(e)}function sc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function qm(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function qf(e,i,r){return r=Ha(r),r.tag=3,r.payload={element:null},r.callback=function(){sc(e,i)},r}function Ym(e){return e=Ha(e),e.tag=3,e}function Zm(e,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){qm(i,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){qm(i,r,l),typeof f!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function Lb(e,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&sr(i,r,f,!0),r=ri.current,r!==null){switch(r.tag){case 31:case 13:return _i===null?gc():r.alternate===null&&on===0&&(on=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===Wl?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),vh(e,l,f)),!1;case 22:return r.flags|=65536,l===Wl?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),vh(e,l,f)),!1}throw Error(a(435,r.tag))}return vh(e,l,f),gc(),!1}if(Re)return i=ri.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==hf&&(e=Error(a(422),{cause:l}),bo(mi(e,r)))):(l!==hf&&(i=Error(a(423),{cause:l}),bo(mi(i,r))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=mi(l,r),f=qf(e.stateNode,l,f),Mf(e,f),on!==4&&(on=2)),!1;var d=Error(a(520),{cause:l});if(d=mi(d,r),Ho===null?Ho=[d]:Ho.push(d),on!==4&&(on=2),i===null)return!0;l=mi(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=f&-f,r.lanes|=e,e=qf(r.stateNode,l,e),Mf(r,e),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qa===null||!qa.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=Ym(f),Zm(f,e,r,l),Mf(r,f),!1}r=r.return}while(r!==null);return!1}var Yf=Error(a(461)),pn=!1;function On(e,i,r,l){i.child=e===null?$0(i,null,r,l):Cs(i,e.child,r,l)}function Km(e,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return Es(i),l=Rf(e,i,r,S,d,f),C=Nf(),e!==null&&!pn?(Df(e,i,f),la(e,i,f)):(Re&&C&&uf(i),i.flags|=1,On(e,i,l,f),i.child)}function Qm(e,i,r,l,f){if(e===null){var d=r.type;return typeof d=="function"&&!of(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,Jm(e,i,d,l,f)):(e=Hl(r.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!nh(e,f)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:vo,r(S,l)&&e.ref===i.ref)return la(e,i,f)}return i.flags|=1,e=na(d,l),e.ref=i.ref,e.return=i,i.child=e}function Jm(e,i,r,l,f){if(e!==null){var d=e.memoizedProps;if(vo(d,l)&&e.ref===i.ref)if(pn=!1,i.pendingProps=l=d,nh(e,f))(e.flags&131072)!==0&&(pn=!0);else return i.lanes=e.lanes,la(e,i,f)}return Zf(e,i,r,l,f)}function $m(e,i,r,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return tx(e,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&jl(i,d!==null?d.cachePool:null),d!==null?nm(i,d):Tf(),im(i);else return l=i.lanes=536870912,tx(e,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(jl(i,d.cachePool),nm(i,d),ka(),i.memoizedState=null):(e!==null&&jl(i,null),Tf(),ka());return On(e,i,f,r),i.child}function Uo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function tx(e,i,r,l,f){var d=_f();return d=d===null?null:{parent:hn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},e!==null&&jl(i,null),Tf(),im(i),e!==null&&sr(e,i,l,!0),i.childLanes=f,null}function rc(e,i){return i=lc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function ex(e,i,r){return Cs(i,e.child,null,r),e=rc(i,i.pendingProps),e.flags|=2,oi(i),i.memoizedState=null,e}function Ub(e,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Re){if(l.mode==="hidden")return e=rc(i,l),i.lanes=536870912,Uo(null,e);if(wf(i),(e=Je)?(e=dg(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},r=F0(e),r.return=i,i.child=r,Ln=i,Je=null)):e=null,e===null)throw Ba(i);return i.lanes=536870912,null}return rc(i,l)}var d=e.memoizedState;if(d!==null){var S=d.dehydrated;if(wf(i),f)if(i.flags&256)i.flags&=-257,i=ex(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(pn||sr(e,i,r,!1),f=(r&e.childLanes)!==0,pn||f){if(l=Ze,l!==null&&(S=ro(l,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,ys(e,S),Kn(l,e,S),Yf;gc(),i=ex(e,i,r)}else e=d.treeContext,Je=yi(S.nextSibling),Ln=i,Re=!0,za=null,vi=!1,e!==null&&V0(i,e),i=rc(i,l),i.flags|=4096;return i}return e=na(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function oc(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Zf(e,i,r,l,f){return Es(i),r=Rf(e,i,r,l,void 0,f),l=Nf(),e!==null&&!pn?(Df(e,i,f),la(e,i,f)):(Re&&l&&uf(i),i.flags|=1,On(e,i,r,f),i.child)}function nx(e,i,r,l,f,d){return Es(i),i.updateQueue=null,r=sm(i,l,r,f),am(e),l=Nf(),e!==null&&!pn?(Df(e,i,d),la(e,i,d)):(Re&&l&&uf(i),i.flags|=1,On(e,i,r,d),i.child)}function ix(e,i,r,l,f){if(Es(i),i.stateNode===null){var d=er,S=r.contextType;typeof S=="object"&&S!==null&&(d=Un(S)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Wf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},bf(i),S=r.contextType,d.context=typeof S=="object"&&S!==null?Un(S):er,d.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Xf(i,r,S,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Wf.enqueueReplaceState(d,d.state,null),Co(i,l,d,f),wo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var C=i.memoizedProps,V=Ns(r,C);d.props=V;var nt=d.context,pt=r.contextType;S=er,typeof pt=="object"&&pt!==null&&(S=Un(pt));var _t=r.getDerivedStateFromProps;pt=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||nt!==S)&&km(i,d,l,S),Ia=!1;var at=i.memoizedState;d.state=at,Co(i,l,d,f),wo(),nt=i.memoizedState,C||at!==nt||Ia?(typeof _t=="function"&&(Xf(i,r,_t,l),nt=i.memoizedState),(V=Ia||Gm(i,r,V,l,at,nt,S))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=nt),d.props=l,d.state=nt,d.context=S,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Sf(e,i),S=i.memoizedProps,pt=Ns(r,S),d.props=pt,_t=i.pendingProps,at=d.context,nt=r.contextType,V=er,typeof nt=="object"&&nt!==null&&(V=Un(nt)),C=r.getDerivedStateFromProps,(nt=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==_t||at!==V)&&km(i,d,l,V),Ia=!1,at=i.memoizedState,d.state=at,Co(i,l,d,f),wo();var ct=i.memoizedState;S!==_t||at!==ct||Ia||e!==null&&e.dependencies!==null&&Gl(e.dependencies)?(typeof C=="function"&&(Xf(i,r,C,l),ct=i.memoizedState),(pt=Ia||Gm(i,r,pt,l,at,ct,V)||e!==null&&e.dependencies!==null&&Gl(e.dependencies))?(nt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,ct,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,ct,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ct),d.props=l,d.state=ct,d.context=V,l=pt):(typeof d.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,oc(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Cs(i,e.child,null,f),i.child=Cs(i,null,r,f)):On(e,i,r,f),i.memoizedState=d.state,e=i.child):e=la(e,i,f),e}function ax(e,i,r,l){return Ss(),i.flags|=256,On(e,i,r,l),i.child}var Kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qf(e){return{baseLanes:e,cachePool:q0()}}function Jf(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=ci),e}function sx(e,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,e===null){if(Re){if(f?Ga(i):ka(),(e=Je)?(e=dg(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Pa!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},r=F0(e),r.return=i,i.child=r,Ln=i,Je=null)):e=null,e===null)throw Ba(i);return Oh(e)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(ka(),f=i.mode,C=lc({mode:"hidden",children:C},f),l=bs(l,f,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=Qf(r),l.childLanes=Jf(e,S,r),i.memoizedState=Kf,Uo(null,l)):(Ga(i),$f(i,C))}var V=e.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(d)i.flags&256?(Ga(i),i.flags&=-257,i=th(e,i,r)):i.memoizedState!==null?(ka(),i.child=e.child,i.flags|=128,i=null):(ka(),C=l.fallback,f=i.mode,l=lc({mode:"visible",children:l.children},f),C=bs(C,f,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Cs(i,e.child,null,r),l=i.child,l.memoizedState=Qf(r),l.childLanes=Jf(e,S,r),i.memoizedState=Kf,i=Uo(null,l));else if(Ga(i),Oh(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var nt=S.dgst;S=nt,l=Error(a(419)),l.stack="",l.digest=S,bo({value:l,source:null,stack:null}),i=th(e,i,r)}else if(pn||sr(e,i,r,!1),S=(r&e.childLanes)!==0,pn||S){if(S=Ze,S!==null&&(l=ro(S,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,ys(e,l),Kn(S,e,l),Yf;Uh(C)||gc(),i=th(e,i,r)}else Uh(C)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Je=yi(C.nextSibling),Ln=i,Re=!0,za=null,vi=!1,e!==null&&V0(i,e),i=$f(i,l.children),i.flags|=4096);return i}return f?(ka(),C=l.fallback,f=i.mode,V=e.child,nt=V.sibling,l=na(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,nt!==null?C=na(nt,C):(C=bs(C,f,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,Uo(null,l),l=i.child,C=e.child.memoizedState,C===null?C=Qf(r):(f=C.cachePool,f!==null?(V=hn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=q0(),C={baseLanes:C.baseLanes|r,cachePool:f}),l.memoizedState=C,l.childLanes=Jf(e,S,r),i.memoizedState=Kf,Uo(e.child,l)):(Ga(i),r=e.child,e=r.sibling,r=na(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(S=i.deletions,S===null?(i.deletions=[e],i.flags|=16):S.push(e)),i.child=r,i.memoizedState=null,r)}function $f(e,i){return i=lc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function lc(e,i){return e=si(22,e,null,i),e.lanes=0,e}function th(e,i,r){return Cs(i,e.child,null,r),e=$f(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function rx(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),mf(e.return,i,r)}function eh(e,i,r,l,f,d){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=f,S.treeForkCount=d)}function ox(e,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=cn.current,C=(S&2)!==0;if(C?(S=S&1|2,i.flags|=128):S&=1,gt(cn,S),On(e,i,l,r),l=Re?yo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rx(e,r,i);else if(e.tag===19)rx(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)e=r.alternate,e!==null&&Kl(e)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),eh(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&Kl(e)===null){i.child=f;break}e=f.sibling,f.sibling=r,r=f,f=e}eh(i,!0,r,null,d,l);break;case"together":eh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function la(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),Wa|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(sr(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=na(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=na(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function nh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Gl(e)))}function Ob(e,i,r){switch(i.tag){case 3:zt(i,i.stateNode.containerInfo),Fa(i,hn,e.memoizedState.cache),Ss();break;case 27:case 5:Qt(i);break;case 4:zt(i,i.stateNode.containerInfo);break;case 10:Fa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,wf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ga(i),i.flags|=128,null):(r&i.child.childLanes)!==0?sx(e,i,r):(Ga(i),e=la(e,i,r),e!==null?e.sibling:null);Ga(i);break;case 19:var f=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(sr(e,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return ox(e,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),gt(cn,cn.current),l)break;return null;case 22:return i.lanes=0,$m(e,i,r,i.pendingProps);case 24:Fa(i,hn,e.memoizedState.cache)}return la(e,i,r)}function lx(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)pn=!0;else{if(!nh(e,r)&&(i.flags&128)===0)return pn=!1,Ob(e,i,r);pn=(e.flags&131072)!==0}else pn=!1,Re&&(i.flags&1048576)!==0&&H0(i,yo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=As(i.elementType),i.type=e,typeof e=="function")of(e)?(l=Ns(e,l),i.tag=1,i=ix(null,i,e,l,r)):(i.tag=0,i=Zf(null,i,e,l,r));else{if(e!=null){var f=e.$$typeof;if(f===U){i.tag=11,i=Km(null,i,e,l,r);break t}else if(f===F){i.tag=14,i=Qm(null,i,e,l,r);break t}}throw i=mt(e)||e,Error(a(306,i,""))}}return i;case 0:return Zf(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=Ns(l,i.pendingProps),ix(e,i,l,f,r);case 3:t:{if(zt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,Sf(e,i),Co(i,l,null,r);var S=i.memoizedState;if(l=S.cache,Fa(i,hn,l),l!==d.cache&&xf(i,[hn],r,!0),wo(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=ax(e,i,l,r);break t}else if(l!==f){f=mi(Error(a(424)),i),bo(f),i=ax(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=yi(e.firstChild),Ln=i,Re=!0,za=null,vi=!0,r=$0(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ss(),l===f){i=la(e,i,r);break t}On(e,i,l,r)}i=i.child}return i;case 26:return oc(e,i),e===null?(r=_g(i.type,null,i.pendingProps,null))?i.memoizedState=r:Re||(r=i.type,e=i.pendingProps,l=Ec(st.current).createElement(r),l[fn]=i,l[vn]=e,Pn(l,r,e),it(l),i.stateNode=l):i.memoizedState=_g(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Qt(i),e===null&&Re&&(l=i.stateNode=xg(i.type,i.pendingProps,st.current),Ln=i,vi=!0,f=Je,Qa(i.type)?(Ph=f,Je=yi(l.firstChild)):Je=f),On(e,i,i.pendingProps.children,r),oc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Re&&((f=l=Je)&&(l=u1(l,i.type,i.pendingProps,vi),l!==null?(i.stateNode=l,Ln=i,Je=yi(l.firstChild),vi=!1,f=!0):f=!1),f||Ba(i)),Qt(i),f=i.type,d=i.pendingProps,S=e!==null?e.memoizedProps:null,l=d.children,Nh(f,d)?l=null:S!==null&&Nh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Rf(e,i,Tb,null,null,r),Yo._currentValue=f),oc(e,i),On(e,i,l,r),i.child;case 6:return e===null&&Re&&((e=r=Je)&&(r=f1(r,i.pendingProps,vi),r!==null?(i.stateNode=r,Ln=i,Je=null,e=!0):e=!1),e||Ba(i)),null;case 13:return sx(e,i,r);case 4:return zt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Cs(i,null,l,r):On(e,i,l,r),i.child;case 11:return Km(e,i,i.type,i.pendingProps,r);case 7:return On(e,i,i.pendingProps,r),i.child;case 8:return On(e,i,i.pendingProps.children,r),i.child;case 12:return On(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Fa(i,i.type,l.value),On(e,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Es(i),f=Un(f),l=l(f),i.flags|=1,On(e,i,l,r),i.child;case 14:return Qm(e,i,i.type,i.pendingProps,r);case 15:return Jm(e,i,i.type,i.pendingProps,r);case 19:return ox(e,i,r);case 31:return Ub(e,i,r);case 22:return $m(e,i,r,i.pendingProps);case 24:return Es(i),l=Un(hn),e===null?(f=_f(),f===null&&(f=Ze,d=gf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},bf(i),Fa(i,hn,f)):((e.lanes&r)!==0&&(Sf(e,i),Co(i,null,null,r),wo()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Fa(i,hn,l)):(l=d.cache,Fa(i,hn,l),l!==f.cache&&xf(i,[hn],r,!0))),On(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ca(e){e.flags|=4}function ih(e,i,r,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Px())e.flags|=8192;else throw ws=Wl,yf}else e.flags&=-16777217}function cx(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Eg(i))if(Px())e.flags|=8192;else throw ws=Wl,yf}function cc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ve():536870912,e.lanes|=i,gr|=i)}function Oo(e,i){if(!Re)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function $e(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function Pb(e,i,r){var l=i.pendingProps;switch(ff(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(i),null;case 1:return $e(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),sa(hn),Gt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ar(i)?ca(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,df())),$e(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(ca(i),d!==null?($e(i),cx(i,d)):($e(i),ih(i,f,null,l,r))):d?d!==e.memoizedState?(ca(i),$e(i),cx(i,d)):($e(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&ca(i),$e(i),ih(i,f,e,l,r)),null;case 27:if(me(i),r=st.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ca(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}e=Ct.current,ar(i)?G0(i):(e=xg(f,l,r),i.stateNode=e,ca(i))}return $e(i),null;case 5:if(me(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ca(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $e(i),null}if(d=Ct.current,ar(i))G0(i);else{var S=Ec(st.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[fn]=i,d[vn]=l;t:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break t;for(;S.sibling===null;){if(S.return===null||S.return===i)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;t:switch(Pn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ca(i)}}return $e(i),ih(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ca(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=st.current,ar(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,f=Ln,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[fn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||sg(e.nodeValue,r)),e||Ba(i,!0)}else e=Ec(e).createTextNode(l),e[fn]=i,i.stateNode=e}return $e(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=ar(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[fn]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),e=!1}else r=df(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(oi(i),i):(oi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return $e(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=ar(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[fn]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$e(i),f=!1}else f=df(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(oi(i),i):(oi(i),null)}return oi(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),cc(i,i.updateQueue),$e(i),null);case 4:return Gt(),e===null&&Th(i.stateNode.containerInfo),$e(i),null;case 10:return sa(i.type),$e(i),null;case 19:if(tt(cn),l=i.memoizedState,l===null)return $e(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Oo(l,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Kl(e),d!==null){for(i.flags|=128,Oo(l,!1),e=d.updateQueue,i.updateQueue=e,cc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)B0(r,e),r=r.sibling;return gt(cn,cn.current&1|2),Re&&ia(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&w()>pc&&(i.flags|=128,f=!0,Oo(l,!1),i.lanes=4194304)}else{if(!f)if(e=Kl(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,cc(i,e),Oo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Re)return $e(i),null}else 2*w()-l.renderingStartTime>pc&&r!==536870912&&(i.flags|=128,f=!0,Oo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=w(),e.sibling=null,r=cn.current,gt(cn,f?r&1|2:r&1),Re&&ia(i,l.treeForkCount),e):($e(i),null);case 22:case 23:return oi(i),Af(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&($e(i),i.subtreeFlags&6&&(i.flags|=8192)):$e(i),r=i.updateQueue,r!==null&&cc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&tt(Ts),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),sa(hn),$e(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function zb(e,i){switch(ff(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return sa(hn),Gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return me(i),null;case 31:if(i.memoizedState!==null){if(oi(i),i.alternate===null)throw Error(a(340));Ss()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(oi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ss()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return tt(cn),null;case 4:return Gt(),null;case 10:return sa(i.type),null;case 22:case 23:return oi(i),Af(),e!==null&&tt(Ts),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return sa(hn),null;case 25:return null;default:return null}}function ux(e,i){switch(ff(i),i.tag){case 3:sa(hn),Gt();break;case 26:case 27:case 5:me(i);break;case 4:Gt();break;case 31:i.memoizedState!==null&&oi(i);break;case 13:oi(i);break;case 19:tt(cn);break;case 10:sa(i.type);break;case 22:case 23:oi(i),Af(),e!==null&&tt(Ts);break;case 24:sa(hn)}}function Po(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&e)===e){l=void 0;var d=r.create,S=r.inst;l=d(),S.destroy=l}r=r.next}while(r!==f)}}catch(C){He(i,i.return,C)}}function ja(e,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=i;var V=r,nt=C;try{nt()}catch(pt){He(f,V,pt)}}}l=l.next}while(l!==d)}}catch(pt){He(i,i.return,pt)}}function fx(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{em(i,r)}catch(l){He(e,e.return,l)}}}function hx(e,i,r){r.props=Ns(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){He(e,i,l)}}function zo(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(f){He(e,i,f)}}function Hi(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){He(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){He(e,i,f)}else r.current=null}function dx(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){He(e,e.return,f)}}function ah(e,i,r){try{var l=e.stateNode;a1(l,e.type,r,i),l[vn]=i}catch(f){He(e,e.return,f)}}function px(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Qa(e.type)||e.tag===4}function sh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||px(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Qa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ta));else if(l!==4&&(l===27&&Qa(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(rh(e,i,r),e=e.sibling;e!==null;)rh(e,i,r),e=e.sibling}function uc(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&Qa(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(uc(e,i,r),e=e.sibling;e!==null;)uc(e,i,r),e=e.sibling}function mx(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Pn(i,l,r),i[fn]=e,i[vn]=r}catch(d){He(e,e.return,d)}}var ua=!1,mn=!1,oh=!1,xx=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function Bb(e,i){if(e=e.containerInfo,Ch=Dc,e=C0(e),$u(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break t}var S=0,C=-1,V=-1,nt=0,pt=0,_t=e,at=null;e:for(;;){for(var ct;_t!==r||f!==0&&_t.nodeType!==3||(C=S+f),_t!==d||l!==0&&_t.nodeType!==3||(V=S+l),_t.nodeType===3&&(S+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)at=_t,_t=ct;for(;;){if(_t===e)break e;if(at===r&&++nt===f&&(C=S),at===d&&++pt===l&&(V=S),(ct=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=ct}r=C===-1||V===-1?null:{start:C,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rh={focusedElem:e,selectionRange:r},Dc=!1,Cn=i;Cn!==null;)if(i=Cn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Cn=e;else for(;Cn!==null;){switch(i=Cn,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)f=e[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var Kt=Ns(r.type,f);e=l.getSnapshotBeforeUpdate(Kt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(le){He(r,r.return,le)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)Lh(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Cn=e;break}Cn=i.return}}function gx(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ha(e,r),l&4&&Po(5,r);break;case 1:if(ha(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(S){He(r,r.return,S)}else{var f=Ns(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(S){He(r,r.return,S)}}l&64&&fx(r),l&512&&zo(r,r.return);break;case 3:if(ha(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{em(e,i)}catch(S){He(r,r.return,S)}}break;case 27:i===null&&l&4&&mx(r);case 26:case 5:ha(e,r),i===null&&l&4&&dx(r),l&512&&zo(r,r.return);break;case 12:ha(e,r);break;case 31:ha(e,r),l&4&&yx(e,r);break;case 13:ha(e,r),l&4&&bx(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=Wb.bind(null,r),h1(e,r))));break;case 22:if(l=r.memoizedState!==null||ua,!l){i=i!==null&&i.memoizedState!==null||mn,f=ua;var d=mn;ua=l,(mn=i)&&!d?da(e,r,(r.subtreeFlags&8772)!==0):ha(e,r),ua=f,mn=d}break;case 30:break;default:ha(e,r)}}function vx(e){var i=e.alternate;i!==null&&(e.alternate=null,vx(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&co(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var tn=null,Wn=!1;function fa(e,i,r){for(r=r.child;r!==null;)_x(e,i,r),r=r.sibling}function _x(e,i,r){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Et,r)}catch{}switch(r.tag){case 26:mn||Hi(r,i),fa(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mn||Hi(r,i);var l=tn,f=Wn;Qa(r.type)&&(tn=r.stateNode,Wn=!1),fa(e,i,r),Xo(r.stateNode),tn=l,Wn=f;break;case 5:mn||Hi(r,i);case 6:if(l=tn,f=Wn,tn=null,fa(e,i,r),tn=l,Wn=f,tn!==null)if(Wn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(r.stateNode)}catch(d){He(r,i,d)}else try{tn.removeChild(r.stateNode)}catch(d){He(r,i,d)}break;case 18:tn!==null&&(Wn?(e=tn,fg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),Tr(e)):fg(tn,r.stateNode));break;case 4:l=tn,f=Wn,tn=r.stateNode.containerInfo,Wn=!0,fa(e,i,r),tn=l,Wn=f;break;case 0:case 11:case 14:case 15:ja(2,r,i),mn||ja(4,r,i),fa(e,i,r);break;case 1:mn||(Hi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&hx(r,i,l)),fa(e,i,r);break;case 21:fa(e,i,r);break;case 22:mn=(l=mn)||r.memoizedState!==null,fa(e,i,r),mn=l;break;default:fa(e,i,r)}}function yx(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(r){He(i,i.return,r)}}}function bx(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(r){He(i,i.return,r)}}function Fb(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new xx),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new xx),i;default:throw Error(a(435,e.tag))}}function fc(e,i){var r=Fb(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=qb.bind(null,e,l);l.then(f,f)}})}function qn(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=e,S=i,C=S;t:for(;C!==null;){switch(C.tag){case 27:if(Qa(C.type)){tn=C.stateNode,Wn=!1;break t}break;case 5:tn=C.stateNode,Wn=!1;break t;case 3:case 4:tn=C.stateNode.containerInfo,Wn=!0;break t}C=C.return}if(tn===null)throw Error(a(160));_x(d,S,f),tn=null,Wn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Sx(i,e),i=i.sibling}var Ci=null;function Sx(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(i,e),Yn(e),l&4&&(ja(3,e,e.return),Po(3,e),ja(5,e,e.return));break;case 1:qn(i,e),Yn(e),l&512&&(mn||r===null||Hi(r,r.return)),l&64&&ua&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Ci;if(qn(i,e),Yn(e),l&512&&(mn||r===null||Hi(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[xs]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Pn(d,l,r),d[fn]=e,it(d),l=d;break t;case"link":var S=Sg("link","href",f).get(l+(r.href||""));if(S){for(var C=0;C<S.length;C++)if(d=S[C],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(C,1);break e}}d=f.createElement(l),Pn(d,l,r),f.head.appendChild(d);break;case"meta":if(S=Sg("meta","content",f).get(l+(r.content||""))){for(C=0;C<S.length;C++)if(d=S[C],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(C,1);break e}}d=f.createElement(l),Pn(d,l,r),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[fn]=e,it(d),l=d}e.stateNode=l}else Mg(f,e.type,e.stateNode);else e.stateNode=bg(f,l,e.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?Mg(f,e.type,e.stateNode):bg(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&ah(e,e.memoizedProps,r.memoizedProps)}break;case 27:qn(i,e),Yn(e),l&512&&(mn||r===null||Hi(r,r.return)),r!==null&&l&4&&ah(e,e.memoizedProps,r.memoizedProps);break;case 5:if(qn(i,e),Yn(e),l&512&&(mn||r===null||Hi(r,r.return)),e.flags&32){f=e.stateNode;try{Bi(f,"")}catch(Kt){He(e,e.return,Kt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,ah(e,f,r!==null?r.memoizedProps:f)),l&1024&&(oh=!0);break;case 6:if(qn(i,e),Yn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Kt){He(e,e.return,Kt)}}break;case 3:if(wc=null,f=Ci,Ci=Tc(i.containerInfo),qn(i,e),Ci=f,Yn(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Tr(i.containerInfo)}catch(Kt){He(e,e.return,Kt)}oh&&(oh=!1,Mx(e));break;case 4:l=Ci,Ci=Tc(e.stateNode.containerInfo),qn(i,e),Yn(e),Ci=l;break;case 12:qn(i,e),Yn(e);break;case 31:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 13:qn(i,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(dc=w()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 22:f=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,nt=ua,pt=mn;if(ua=nt||f,mn=pt||V,qn(i,e),mn=pt,ua=nt,Yn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||V||ua||mn||Ds(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){V=r=i;try{if(d=V.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=V.stateNode;var _t=V.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;C.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Kt){He(V,V.return,Kt)}}}else if(i.tag===6){if(r===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Kt){He(V,V.return,Kt)}}}else if(i.tag===18){if(r===null){V=i;try{var ct=V.stateNode;f?hg(ct,!0):hg(V.stateNode,!1)}catch(Kt){He(V,V.return,Kt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,fc(e,r))));break;case 19:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 30:break;case 21:break;default:qn(i,e),Yn(e)}}function Yn(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(px(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=sh(e);uc(e,d,f);break;case 5:var S=r.stateNode;r.flags&32&&(Bi(S,""),r.flags&=-33);var C=sh(e);uc(e,C,S);break;case 3:case 4:var V=r.stateNode.containerInfo,nt=sh(e);rh(e,nt,V);break;default:throw Error(a(161))}}catch(pt){He(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Mx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Mx(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ha(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)gx(e,i.alternate,i),i=i.sibling}function Ds(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ja(4,i,i.return),Ds(i);break;case 1:Hi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&hx(i,i.return,r),Ds(i);break;case 27:Xo(i.stateNode);case 26:case 5:Hi(i,i.return),Ds(i);break;case 22:i.memoizedState===null&&Ds(i);break;case 30:Ds(i);break;default:Ds(i)}e=e.sibling}}function da(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:da(f,d,r),Po(4,d);break;case 1:if(da(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(nt){He(l,l.return,nt)}if(l=d,f=l.updateQueue,f!==null){var C=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)tm(V[f],C)}catch(nt){He(l,l.return,nt)}}r&&S&64&&fx(d),zo(d,d.return);break;case 27:mx(d);case 26:case 5:da(f,d,r),r&&l===null&&S&4&&dx(d),zo(d,d.return);break;case 12:da(f,d,r);break;case 31:da(f,d,r),r&&S&4&&yx(f,d);break;case 13:da(f,d,r),r&&S&4&&bx(f,d);break;case 22:d.memoizedState===null&&da(f,d,r),zo(d,d.return);break;case 30:break;default:da(f,d,r)}i=i.sibling}}function lh(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&So(r))}function ch(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&So(e))}function Ri(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ex(e,i,r,l),i=i.sibling}function Ex(e,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ri(e,i,r,l),f&2048&&Po(9,i);break;case 1:Ri(e,i,r,l);break;case 3:Ri(e,i,r,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&So(e)));break;case 12:if(f&2048){Ri(e,i,r,l),e=i.stateNode;try{var d=i.memoizedProps,S=d.id,C=d.onPostCommit;typeof C=="function"&&C(S,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){He(i,i.return,V)}}else Ri(e,i,r,l);break;case 31:Ri(e,i,r,l);break;case 13:Ri(e,i,r,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ri(e,i,r,l):Bo(e,i):d._visibility&2?Ri(e,i,r,l):(d._visibility|=2,pr(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&lh(S,i);break;case 24:Ri(e,i,r,l),f&2048&&ch(i.alternate,i);break;default:Ri(e,i,r,l)}}function pr(e,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,S=i,C=r,V=l,nt=S.flags;switch(S.tag){case 0:case 11:case 15:pr(d,S,C,V,f),Po(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?pr(d,S,C,V,f):Bo(d,S):(pt._visibility|=2,pr(d,S,C,V,f)),f&&nt&2048&&lh(S.alternate,S);break;case 24:pr(d,S,C,V,f),f&&nt&2048&&ch(S.alternate,S);break;default:pr(d,S,C,V,f)}i=i.sibling}}function Bo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,f=l.flags;switch(l.tag){case 22:Bo(r,l),f&2048&&lh(l.alternate,l);break;case 24:Bo(r,l),f&2048&&ch(l.alternate,l);break;default:Bo(r,l)}i=i.sibling}}var Fo=8192;function mr(e,i,r){if(e.subtreeFlags&Fo)for(e=e.child;e!==null;)Tx(e,i,r),e=e.sibling}function Tx(e,i,r){switch(e.tag){case 26:mr(e,i,r),e.flags&Fo&&e.memoizedState!==null&&E1(r,Ci,e.memoizedState,e.memoizedProps);break;case 5:mr(e,i,r);break;case 3:case 4:var l=Ci;Ci=Tc(e.stateNode.containerInfo),mr(e,i,r),Ci=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Fo,Fo=16777216,mr(e,i,r),Fo=l):mr(e,i,r));break;default:mr(e,i,r)}}function Ax(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Io(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Cn=l,Cx(l,e)}Ax(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wx(e),e=e.sibling}function wx(e){switch(e.tag){case 0:case 11:case 15:Io(e),e.flags&2048&&ja(9,e,e.return);break;case 3:Io(e);break;case 12:Io(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,hc(e)):Io(e);break;default:Io(e)}}function hc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Cn=l,Cx(l,e)}Ax(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ja(8,i,i.return),hc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,hc(i));break;default:hc(i)}e=e.sibling}}function Cx(e,i){for(;Cn!==null;){var r=Cn;switch(r.tag){case 0:case 11:case 15:ja(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:So(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Cn=l;else t:for(r=e;Cn!==null;){l=Cn;var f=l.sibling,d=l.return;if(vx(l),l===r){Cn=null;break t}if(f!==null){f.return=d,Cn=f;break t}Cn=d}}}var Ib={getCacheForType:function(e){var i=Un(hn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Un(hn).controller.signal}},Hb=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ze=null,Me=null,Te=0,Ie=0,li=null,Xa=!1,xr=!1,uh=!1,pa=0,on=0,Wa=0,Ls=0,fh=0,ci=0,gr=0,Ho=null,Zn=null,hh=!1,dc=0,Rx=0,pc=1/0,mc=null,qa=null,yn=0,Ya=null,vr=null,ma=0,dh=0,ph=null,Nx=null,Vo=0,mh=null;function ui(){return(Be&2)!==0&&Te!==0?Te&-Te:H.T!==null?bh():oo()}function Dx(){if(ci===0)if((Te&536870912)===0||Re){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),ci=e}else ci=536870912;return e=ri.current,e!==null&&(e.flags|=32),ci}function Kn(e,i,r){(e===Ze&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Za(e,Te,ci,!1)),Bn(e,r),((Be&2)===0||e!==Ze)&&(e===Ze&&((Be&2)===0&&(Ls|=r),on===4&&Za(e,Te,ci,!1)),Vi(e))}function Lx(e,i,r){if((Be&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Yt(e,i),f=l?kb(e,i):gh(e,i,!0),d=l;do{if(f===0){xr&&!l&&Za(e,i,0,!1);break}else{if(r=e.current.alternate,d&&!Vb(r)){f=gh(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;t:{var C=e;f=Ho;var V=C.current.memoizedState.isDehydrated;if(V&&(_r(C,S).flags|=256),S=gh(C,S,!1),S!==2){if(uh&&!V){C.errorRecoveryDisabledLanes|=d,Ls|=d,f=4;break t}d=Zn,Zn=f,d!==null&&(Zn===null?Zn=d:Zn.push.apply(Zn,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){_r(e,0),Za(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Za(l,i,ci,!Xa);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=dc+300-w(),10<f)){if(Za(l,i,ci,!Xa),yt(l,0,!0)!==0)break t;ma=i,l.timeoutHandle=cg(Ux.bind(null,l,r,Zn,mc,hh,i,ci,Ls,gr,Xa,d,"Throttled",-0,0),f);break t}Ux(l,r,Zn,mc,hh,i,ci,Ls,gr,Xa,d,null,-0,0)}}break}while(!0);Vi(e)}function Ux(e,i,r,l,f,d,S,C,V,nt,pt,_t,at,ct){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},Tx(i,d,_t);var Kt=(d&62914560)===d?dc-w():(d&4194048)===d?Rx-w():0;if(Kt=T1(_t,Kt),Kt!==null){ma=d,e.cancelPendingCommit=Kt(Vx.bind(null,e,i,d,r,l,f,S,C,V,pt,_t,null,at,ct)),Za(e,d,S,!nt);return}}Vx(e,i,d,r,l,f,S,C,V)}function Vb(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!ai(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Za(e,i,r,l){i&=~fh,i&=~Ls,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-Jt(f),S=1<<d;l[d]=-1,f&=~S}r!==0&&wl(e,r,i)}function xc(){return(Be&6)===0?(Go(0),!1):!0}function xh(){if(Me!==null){if(Ie===0)var e=Me.return;else e=Me,aa=Ms=null,Lf(e),cr=null,Eo=0,e=Me;for(;e!==null;)ux(e.alternate,e),e=e.return;Me=null}}function _r(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,o1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),ma=0,xh(),Ze=e,Me=r=na(e.current,null),Te=i,Ie=0,li=null,Xa=!1,xr=Yt(e,i),uh=!1,gr=ci=fh=Ls=Wa=on=0,Zn=Ho=null,hh=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Jt(l),d=1<<f;i|=e[f],l&=~d}return pa=i,Bl(),r}function Ox(e,i){xe=null,H.H=Lo,i===lr||i===Xl?(i=K0(),Ie=3):i===yf?(i=K0(),Ie=4):Ie=i===Yf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,li=i,Me===null&&(on=1,sc(e,mi(i,e.current)))}function Px(){var e=ri.current;return e===null?!0:(Te&4194048)===Te?_i===null:(Te&62914560)===Te||(Te&536870912)!==0?e===_i:!1}function zx(){var e=H.H;return H.H=Lo,e===null?Lo:e}function Bx(){var e=H.A;return H.A=Ib,e}function gc(){on=4,Xa||(Te&4194048)!==Te&&ri.current!==null||(xr=!0),(Wa&134217727)===0&&(Ls&134217727)===0||Ze===null||Za(Ze,Te,ci,!1)}function gh(e,i,r){var l=Be;Be|=2;var f=zx(),d=Bx();(Ze!==e||Te!==i)&&(mc=null,_r(e,i)),i=!1;var S=on;t:do try{if(Ie!==0&&Me!==null){var C=Me,V=li;switch(Ie){case 8:xh(),S=6;break t;case 3:case 2:case 9:case 6:ri.current===null&&(i=!0);var nt=Ie;if(Ie=0,li=null,yr(e,C,V,nt),r&&xr){S=0;break t}break;default:nt=Ie,Ie=0,li=null,yr(e,C,V,nt)}}Gb(),S=on;break}catch(pt){Ox(e,pt)}while(!0);return i&&e.shellSuspendCounter++,aa=Ms=null,Be=l,H.H=f,H.A=d,Me===null&&(Ze=null,Te=0,Bl()),S}function Gb(){for(;Me!==null;)Fx(Me)}function kb(e,i){var r=Be;Be|=2;var l=zx(),f=Bx();Ze!==e||Te!==i?(mc=null,pc=w()+500,_r(e,i)):xr=Yt(e,i);t:do try{if(Ie!==0&&Me!==null){i=Me;var d=li;e:switch(Ie){case 1:Ie=0,li=null,yr(e,i,d,1);break;case 2:case 9:if(Y0(d)){Ie=0,li=null,Ix(i);break}i=function(){Ie!==2&&Ie!==9||Ze!==e||(Ie=7),Vi(e)},d.then(i,i);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Y0(d)?(Ie=0,li=null,Ix(i)):(Ie=0,li=null,yr(e,i,d,7));break;case 5:var S=null;switch(Me.tag){case 26:S=Me.memoizedState;case 5:case 27:var C=Me;if(S?Eg(S):C.stateNode.complete){Ie=0,li=null;var V=C.sibling;if(V!==null)Me=V;else{var nt=C.return;nt!==null?(Me=nt,vc(nt)):Me=null}break e}}Ie=0,li=null,yr(e,i,d,5);break;case 6:Ie=0,li=null,yr(e,i,d,6);break;case 8:xh(),on=6;break t;default:throw Error(a(462))}}jb();break}catch(pt){Ox(e,pt)}while(!0);return aa=Ms=null,H.H=l,H.A=f,Be=r,Me!==null?0:(Ze=null,Te=0,Bl(),on)}function jb(){for(;Me!==null&&!Xt();)Fx(Me)}function Fx(e){var i=lx(e.alternate,e,pa);e.memoizedProps=e.pendingProps,i===null?vc(e):Me=i}function Ix(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=nx(r,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=nx(r,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:Lf(i);default:ux(r,i),i=Me=B0(i,pa),i=lx(r,i,pa)}e.memoizedProps=e.pendingProps,i===null?vc(e):Me=i}function yr(e,i,r,l){aa=Ms=null,Lf(i),cr=null,Eo=0;var f=i.return;try{if(Lb(e,f,i,r,Te)){on=1,sc(e,mi(r,e.current)),Me=null;return}}catch(d){if(f!==null)throw Me=f,d;on=1,sc(e,mi(r,e.current)),Me=null;return}i.flags&32768?(Re||l===1?e=!0:xr||(Te&536870912)!==0?e=!1:(Xa=e=!0,(l===2||l===9||l===3||l===6)&&(l=ri.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hx(i,e)):vc(i)}function vc(e){var i=e;do{if((i.flags&32768)!==0){Hx(i,Xa);return}e=i.return;var r=Pb(i.alternate,i,pa);if(r!==null){Me=r;return}if(i=i.sibling,i!==null){Me=i;return}Me=i=e}while(i!==null);on===0&&(on=5)}function Hx(e,i){do{var r=zb(e.alternate,e);if(r!==null){r.flags&=32767,Me=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){Me=e;return}Me=e=r}while(e!==null);on=6,Me=null}function Vx(e,i,r,l,f,d,S,C,V){e.cancelPendingCommit=null;do _c();while(yn!==0);if((Be&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=sf,ni(e,r,d,S,C,V),e===Ze&&(Me=Ze=null,Te=0),vr=i,Ya=e,ma=r,dh=d,ph=f,Nx=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Yb(ut,function(){return Wx(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,f=q.p,q.p=2,S=Be,Be|=4;try{Bb(e,i,r)}finally{Be=S,q.p=f,H.T=l}}yn=1,Gx(),kx(),jx()}}function Gx(){if(yn===1){yn=0;var e=Ya,i=vr,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var l=q.p;q.p=2;var f=Be;Be|=4;try{Sx(i,e);var d=Rh,S=C0(e.containerInfo),C=d.focusedElem,V=d.selectionRange;if(S!==C&&C&&C.ownerDocument&&w0(C.ownerDocument.documentElement,C)){if(V!==null&&$u(C)){var nt=V.start,pt=V.end;if(pt===void 0&&(pt=nt),"selectionStart"in C)C.selectionStart=nt,C.selectionEnd=Math.min(pt,C.value.length);else{var _t=C.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var ct=at.getSelection(),Kt=C.textContent.length,le=Math.min(V.start,Kt),je=V.end===void 0?le:Math.min(V.end,Kt);!ct.extend&&le>je&&(S=je,je=le,le=S);var K=A0(C,le),W=A0(C,je);if(K&&W&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==W.node||ct.focusOffset!==W.offset)){var et=_t.createRange();et.setStart(K.node,K.offset),ct.removeAllRanges(),le>je?(ct.addRange(et),ct.extend(W.node,W.offset)):(et.setEnd(W.node,W.offset),ct.addRange(et))}}}}for(_t=[],ct=C;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<_t.length;C++){var xt=_t[C];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}Dc=!!Ch,Rh=Ch=null}finally{Be=f,q.p=l,H.T=r}}e.current=i,yn=2}}function kx(){if(yn===2){yn=0;var e=Ya,i=vr,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var l=q.p;q.p=2;var f=Be;Be|=4;try{gx(e,i.alternate,i)}finally{Be=f,q.p=l,H.T=r}}yn=3}}function jx(){if(yn===4||yn===3){yn=0,P();var e=Ya,i=vr,r=ma,l=Nx;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?yn=5:(yn=0,vr=Ya=null,Xx(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(qa=null),ms(r),i=i.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,f=q.p,q.p=2,H.T=null;try{for(var d=e.onRecoverableError,S=0;S<l.length;S++){var C=l[S];d(C.value,{componentStack:C.stack})}}finally{H.T=i,q.p=f}}(ma&3)!==0&&_c(),Vi(e),f=e.pendingLanes,(r&261930)!==0&&(f&42)!==0?e===mh?Vo++:(Vo=0,mh=e):Vo=0,Go(0)}}function Xx(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,So(i)))}function _c(){return Gx(),kx(),jx(),Wx()}function Wx(){if(yn!==5)return!1;var e=Ya,i=dh;dh=0;var r=ms(ma),l=H.T,f=q.p;try{q.p=32>r?32:r,H.T=null,r=ph,ph=null;var d=Ya,S=ma;if(yn=0,vr=Ya=null,ma=0,(Be&6)!==0)throw Error(a(331));var C=Be;if(Be|=4,wx(d.current),Ex(d,d.current,S,r),Be=C,Go(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Et,d)}catch{}return!0}finally{q.p=f,H.T=l,Xx(e,i)}}function qx(e,i,r){i=mi(r,i),i=qf(e.stateNode,i,2),e=Va(e,i,2),e!==null&&(Bn(e,2),Vi(e))}function He(e,i,r){if(e.tag===3)qx(e,e,r);else for(;i!==null;){if(i.tag===3){qx(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qa===null||!qa.has(l))){e=mi(r,e),r=Ym(2),l=Va(i,r,2),l!==null&&(Zm(r,l,i,e),Bn(l,2),Vi(l));break}}i=i.return}}function vh(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Hb;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(uh=!0,f.add(r),e=Xb.bind(null,e,i,r),i.then(e,e))}function Xb(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ze===e&&(Te&r)===r&&(on===4||on===3&&(Te&62914560)===Te&&300>w()-dc?(Be&2)===0&&_r(e,0):fh|=r,gr===Te&&(gr=0)),Vi(e)}function Yx(e,i){i===0&&(i=Ve()),e=ys(e,i),e!==null&&(Bn(e,i),Vi(e))}function Wb(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),Yx(e,r)}function qb(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Yx(e,r)}function Yb(e,i){return qt(e,i)}var yc=null,br=null,_h=!1,bc=!1,yh=!1,Ka=0;function Vi(e){e!==br&&e.next===null&&(br===null?yc=br=e:br=br.next=e),bc=!0,_h||(_h=!0,Kb())}function Go(e,i){if(!yh&&bc){yh=!0;do for(var r=!1,l=yc;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,C=l.pingedLanes;d=(1<<31-Jt(42|e)+1)-1,d&=f&~(S&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,Jx(l,d))}else d=Te,d=yt(l,l===Ze?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Yt(l,d)||(r=!0,Jx(l,d));l=l.next}while(r);yh=!1}}function Zb(){Zx()}function Zx(){bc=_h=!1;var e=0;Ka!==0&&r1()&&(e=Ka);for(var i=w(),r=null,l=yc;l!==null;){var f=l.next,d=Kx(l,i);d===0?(l.next=null,r===null?yc=f:r.next=f,f===null&&(br=r)):(r=l,(e!==0||(d&3)!==0)&&(bc=!0)),l=f}yn!==0&&yn!==5||Go(e),Ka!==0&&(Ka=0)}function Kx(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var S=31-Jt(d),C=1<<S,V=f[S];V===-1?((C&r)===0||(C&l)!==0)&&(f[S]=he(C,i)):V<=i&&(e.expiredLanes|=C),d&=~C}if(i=Ze,r=Te,r=yt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Bt(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Yt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&Bt(l),ms(r)){case 2:case 8:r=Mt;break;case 32:r=ut;break;case 268435456:r=Ft;break;default:r=ut}return l=Qx.bind(null,e),r=qt(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&Bt(l),e.callbackPriority=2,e.callbackNode=null,2}function Qx(e,i){if(yn!==0&&yn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(_c()&&e.callbackNode!==r)return null;var l=Te;return l=yt(e,e===Ze?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Lx(e,l,i),Kx(e,w()),e.callbackNode!=null&&e.callbackNode===r?Qx.bind(null,e):null)}function Jx(e,i){if(_c())return null;Lx(e,i,!0)}function Kb(){l1(function(){(Be&6)!==0?qt(dt,Zb):Zx()})}function bh(){if(Ka===0){var e=rr;e===0&&(e=It,It<<=1,(It&261888)===0&&(It=256)),Ka=e}return Ka}function $x(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Rl(""+e)}function tg(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function Qb(e,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=$x((f[vn]||null).action),S=l.submitter;S&&(i=(i=S[vn]||null)?$x(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var C=new Ul("action","action",null,l,f);e.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var V=S?tg(f,S):new FormData(f);Vf(r,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(C.preventDefault(),V=S?tg(f,S):new FormData(f),Vf(r,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var Sh=0;Sh<af.length;Sh++){var Mh=af[Sh],Jb=Mh.toLowerCase(),$b=Mh[0].toUpperCase()+Mh.slice(1);wi(Jb,"on"+$b)}wi(D0,"onAnimationEnd"),wi(L0,"onAnimationIteration"),wi(U0,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(mb,"onTransitionRun"),wi(xb,"onTransitionStart"),wi(gb,"onTransitionCancel"),wi(O0,"onTransitionEnd"),Wt("onMouseEnter",["mouseout","mouseover"]),Wt("onMouseLeave",["mouseout","mouseover"]),Wt("onPointerEnter",["pointerout","pointerover"]),Wt("onPointerLeave",["pointerout","pointerover"]),Ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function eg(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var C=l[S],V=C.instance,nt=C.currentTarget;if(C=C.listener,V!==d&&f.isPropagationStopped())break t;d=C,f.currentTarget=nt;try{d(f)}catch(pt){zl(pt)}f.currentTarget=null,d=V}else for(S=0;S<l.length;S++){if(C=l[S],V=C.instance,nt=C.currentTarget,C=C.listener,V!==d&&f.isPropagationStopped())break t;d=C,f.currentTarget=nt;try{d(f)}catch(pt){zl(pt)}f.currentTarget=null,d=V}}}}function Ee(e,i){var r=i[Ys];r===void 0&&(r=i[Ys]=new Set);var l=e+"__bubble";r.has(l)||(ng(i,e,2,!1),r.add(l))}function Eh(e,i,r){var l=0;i&&(l|=4),ng(r,e,l,i)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Th(e){if(!e[Sc]){e[Sc]=!0,J.forEach(function(r){r!=="selectionchange"&&(t1.has(r)||Eh(r,!1,e),Eh(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Sc]||(i[Sc]=!0,Eh("selectionchange",!1,i))}}function ng(e,i,r,l){switch(Dg(i)){case 2:var f=C1;break;case 8:f=R1;break;default:f=Hh}r=f.bind(null,i,r,e),f=void 0,!ju||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,r,{capture:!0,passive:f}):e.addEventListener(i,r,!0):f!==void 0?e.addEventListener(i,r,{passive:f}):e.addEventListener(i,r,!1)}function Ah(e,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=La(C),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=d=S;continue t}C=C.parentNode}}l=l.return}o0(function(){var nt=d,pt=Gu(r),_t=[];t:{var at=P0.get(e);if(at!==void 0){var ct=Ul,Kt=e;switch(e){case"keypress":if(Dl(r)===0)break t;case"keydown":case"keyup":ct=qy;break;case"focusin":Kt="focus",ct=Yu;break;case"focusout":Kt="blur",ct=Yu;break;case"beforeblur":case"afterblur":ct=Yu;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=u0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=Ky;break;case D0:case L0:case U0:ct=Fy;break;case O0:ct=Jy;break;case"scroll":case"scrollend":ct=Uy;break;case"wheel":ct=tb;break;case"copy":case"cut":case"paste":ct=Hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=h0;break;case"toggle":case"beforetoggle":ct=nb}var le=(i&4)!==0,je=!le&&(e==="scroll"||e==="scrollend"),K=le?at!==null?at+"Capture":null:at;le=[];for(var W=nt,et;W!==null;){var xt=W;if(et=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||et===null||K===null||(xt=uo(W,K),xt!=null&&le.push(jo(W,xt,et))),je)break;W=W.return}0<le.length&&(at=new ct(at,Kt,null,r,pt),_t.push({event:at,listeners:le}))}}if((i&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&r!==Vu&&(Kt=r.relatedTarget||r.fromElement)&&(La(Kt)||Kt[Qi]))break t;if((ct||at)&&(at=pt.window===pt?pt:(at=pt.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Kt=r.relatedTarget||r.toElement,ct=nt,Kt=Kt?La(Kt):null,Kt!==null&&(je=c(Kt),le=Kt.tag,Kt!==je||le!==5&&le!==27&&le!==6)&&(Kt=null)):(ct=null,Kt=nt),ct!==Kt)){if(le=u0,xt="onMouseLeave",K="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(le=h0,xt="onPointerLeave",K="onPointerEnter",W="pointer"),je=ct==null?at:Y(ct),et=Kt==null?at:Y(Kt),at=new le(xt,W+"leave",ct,r,pt),at.target=je,at.relatedTarget=et,xt=null,La(pt)===nt&&(le=new le(K,W+"enter",Kt,r,pt),le.target=et,le.relatedTarget=je,xt=le),je=xt,ct&&Kt)e:{for(le=e1,K=ct,W=Kt,et=0,xt=K;xt;xt=le(xt))et++;xt=0;for(var se=W;se;se=le(se))xt++;for(;0<et-xt;)K=le(K),et--;for(;0<xt-et;)W=le(W),xt--;for(;et--;){if(K===W||W!==null&&K===W.alternate){le=K;break e}K=le(K),W=le(W)}le=null}else le=null;ct!==null&&ig(_t,at,ct,le,!1),Kt!==null&&je!==null&&ig(_t,je,Kt,le,!0)}}t:{if(at=nt?Y(nt):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var Ue=y0;else if(v0(at))if(b0)Ue=hb;else{Ue=ub;var te=cb}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?nt&&Hu(nt.elementType)&&(Ue=y0):Ue=fb;if(Ue&&(Ue=Ue(e,nt))){_0(_t,Ue,r,pt);break t}te&&te(e,at,nt),e==="focusout"&&nt&&at.type==="number"&&nt.memoizedProps.value!=null&&An(at,"number",at.value)}switch(te=nt?Y(nt):window,e){case"focusin":(v0(te)||te.contentEditable==="true")&&(Js=te,tf=nt,_o=null);break;case"focusout":_o=tf=Js=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,R0(_t,r,pt);break;case"selectionchange":if(pb)break;case"keydown":case"keyup":R0(_t,r,pt)}var ve;if(Ku)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Qs?x0(e,r)&&(Ae="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Ae="onCompositionStart");Ae&&(d0&&r.locale!=="ko"&&(Qs||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Qs&&(ve=l0()):(Oa=pt,Xu="value"in Oa?Oa.value:Oa.textContent,Qs=!0)),te=Mc(nt,Ae),0<te.length&&(Ae=new f0(Ae,e,null,r,pt),_t.push({event:Ae,listeners:te}),ve?Ae.data=ve:(ve=g0(r),ve!==null&&(Ae.data=ve)))),(ve=ab?sb(e,r):rb(e,r))&&(Ae=Mc(nt,"onBeforeInput"),0<Ae.length&&(te=new f0("onBeforeInput","beforeinput",null,r,pt),_t.push({event:te,listeners:Ae}),te.data=ve)),Qb(_t,e,nt,r,pt)}eg(_t,i)})}function jo(e,i,r){return{instance:e,listener:i,currentTarget:r}}function Mc(e,i){for(var r=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=uo(e,r),f!=null&&l.unshift(jo(e,f,d)),f=uo(e,i),f!=null&&l.push(jo(e,f,d))),e.tag===3)return l;e=e.return}return[]}function e1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ig(e,i,r,l,f){for(var d=i._reactName,S=[];r!==null&&r!==l;){var C=r,V=C.alternate,nt=C.stateNode;if(C=C.tag,V!==null&&V===l)break;C!==5&&C!==26&&C!==27||nt===null||(V=nt,f?(nt=uo(r,d),nt!=null&&S.unshift(jo(r,nt,V))):f||(nt=uo(r,d),nt!=null&&S.push(jo(r,nt,V)))),r=r.return}S.length!==0&&e.push({event:i,listeners:S})}var n1=/\r\n?/g,i1=/\u0000|\uFFFD/g;function ag(e){return(typeof e=="string"?e:""+e).replace(n1,`
`).replace(i1,"")}function sg(e,i){return i=ag(i),ag(e)===i}function ke(e,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Bi(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Bi(e,""+l);break;case"className":Ne(e,"class",l);break;case"tabIndex":Ne(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,r,l);break;case"style":s0(e,l,d);break;case"data":if(i!=="object"){Ne(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Rl(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&ke(e,i,"name",f.name,f,null),ke(e,i,"formEncType",f.formEncType,f,null),ke(e,i,"formMethod",f.formMethod,f,null),ke(e,i,"formTarget",f.formTarget,f,null)):(ke(e,i,"encType",f.encType,f,null),ke(e,i,"method",f.method,f,null),ke(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Rl(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=ta);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Rl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),ge(e,"popover",l);break;case"xlinkActuate":Le(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Le(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Le(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Le(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Le(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Le(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Le(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Le(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Le(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ge(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Dy.get(r)||r,ge(e,r,l))}}function wh(e,i,r,l,f,d){switch(r){case"style":s0(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?Bi(e,l):(typeof l=="number"||typeof l=="bigint")&&Bi(e,""+l);break;case"onScroll":l!=null&&Ee("scroll",e);break;case"onScrollEnd":l!=null&&Ee("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lt.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=e[vn]||null,d=d!=null?d[r]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,f);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):ge(e,r,l)}}}function Pn(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,d,S,r,null)}}f&&ke(e,i,"srcSet",r.srcSet,r,null),l&&ke(e,i,"src",r.src,r,null);return;case"input":Ee("invalid",e);var C=d=S=f=null,V=null,nt=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":f=pt;break;case"type":S=pt;break;case"checked":V=pt;break;case"defaultChecked":nt=pt;break;case"value":d=pt;break;case"defaultValue":C=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:ke(e,i,l,pt,r,null)}}Qe(e,d,C,V,nt,S,f,!1);return;case"select":Ee("invalid",e),l=S=d=null;for(f in r)if(r.hasOwnProperty(f)&&(C=r[f],C!=null))switch(f){case"value":d=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:ke(e,i,f,C,r,null)}i=d,r=S,e.multiple=!!l,i!=null?_n(e,!!l,i,!1):r!=null&&_n(e,!!l,r,!0);return;case"textarea":Ee("invalid",e),d=f=l=null;for(S in r)if(r.hasOwnProperty(S)&&(C=r[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":f=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:ke(e,i,S,C,r,null)}Dn(e,l,f,d);return;case"option":for(V in r)if(r.hasOwnProperty(V)&&(l=r[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,i,V,l,r,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(l=0;l<ko.length;l++)Ee(ko[l],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(l=r[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,nt,l,r,null)}return;default:if(Hu(i)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&wh(e,i,pt,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&ke(e,i,C,l,r,null))}function a1(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,C=null,V=null,nt=null,pt=null;for(ct in r){var _t=r[ct];if(r.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":V=_t;default:l.hasOwnProperty(ct)||ke(e,i,ct,null,l,_t)}}for(var at in l){var ct=l[at];if(_t=r[at],l.hasOwnProperty(at)&&(ct!=null||_t!=null))switch(at){case"type":d=ct;break;case"name":f=ct;break;case"checked":nt=ct;break;case"defaultChecked":pt=ct;break;case"value":S=ct;break;case"defaultValue":C=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==_t&&ke(e,i,at,ct,l,_t)}}Ji(e,S,C,V,nt,pt,d,f);return;case"select":ct=S=C=at=null;for(d in r)if(V=r[d],r.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ct=V;default:l.hasOwnProperty(d)||ke(e,i,d,null,l,V)}for(f in l)if(d=l[f],V=r[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":at=d;break;case"defaultValue":C=d;break;case"multiple":S=d;default:d!==V&&ke(e,i,f,d,l,V)}i=C,r=S,l=ct,at!=null?_n(e,!!r,at,!1):!!l!=!!r&&(i!=null?_n(e,!!r,i,!0):_n(e,!!r,r?[]:"",!1));return;case"textarea":ct=at=null;for(C in r)if(f=r[C],r.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:ke(e,i,C,null,l,f)}for(S in l)if(f=l[S],d=r[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":at=f;break;case"defaultValue":ct=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&ke(e,i,S,f,l,d)}wn(e,at,ct);return;case"option":for(var Kt in r)if(at=r[Kt],r.hasOwnProperty(Kt)&&at!=null&&!l.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:ke(e,i,Kt,null,l,at)}for(V in l)if(at=l[V],ct=r[V],l.hasOwnProperty(V)&&at!==ct&&(at!=null||ct!=null))switch(V){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:ke(e,i,V,at,l,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in r)at=r[le],r.hasOwnProperty(le)&&at!=null&&!l.hasOwnProperty(le)&&ke(e,i,le,null,l,at);for(nt in l)if(at=l[nt],ct=r[nt],l.hasOwnProperty(nt)&&at!==ct&&(at!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(a(137,i));break;default:ke(e,i,nt,at,l,ct)}return;default:if(Hu(i)){for(var je in r)at=r[je],r.hasOwnProperty(je)&&at!==void 0&&!l.hasOwnProperty(je)&&wh(e,i,je,void 0,l,at);for(pt in l)at=l[pt],ct=r[pt],!l.hasOwnProperty(pt)||at===ct||at===void 0&&ct===void 0||wh(e,i,pt,at,l,ct);return}}for(var K in r)at=r[K],r.hasOwnProperty(K)&&at!=null&&!l.hasOwnProperty(K)&&ke(e,i,K,null,l,at);for(_t in l)at=l[_t],ct=r[_t],!l.hasOwnProperty(_t)||at===ct||at==null&&ct==null||ke(e,i,_t,at,l,ct)}function rg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function s1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,S=f.initiatorType,C=f.duration;if(d&&C&&rg(S)){for(S=0,C=f.responseEnd,l+=1;l<r.length;l++){var V=r[l],nt=V.startTime;if(nt>C)break;var pt=V.transferSize,_t=V.initiatorType;pt&&rg(_t)&&(V=V.responseEnd,S+=pt*(V<C?1:(C-nt)/(V-nt)))}if(--l,i+=8*(d+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ch=null,Rh=null;function Ec(e){return e.nodeType===9?e:e.ownerDocument}function og(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Nh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dh=null;function r1(){var e=window.event;return e&&e.type==="popstate"?e===Dh?!1:(Dh=e,!0):(Dh=null,!1)}var cg=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,ug=typeof Promise=="function"?Promise:void 0,l1=typeof queueMicrotask=="function"?queueMicrotask:typeof ug<"u"?function(e){return ug.resolve(null).then(e).catch(c1)}:cg;function c1(e){setTimeout(function(){throw e})}function Qa(e){return e==="head"}function fg(e,i){var r=i,l=0;do{var f=r.nextSibling;if(e.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(f),Tr(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Xo(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Xo(r);for(var d=r.firstChild;d;){var S=d.nextSibling,C=d.nodeName;d[xs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&Xo(e.ownerDocument.body);r=f}while(r);Tr(i)}function hg(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function Lh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Lh(r),co(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function u1(e,i,r,l){for(;e.nodeType===1;){var f=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[xs])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function f1(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=yi(e.nextSibling),e===null))return null;return e}function dg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=yi(e.nextSibling),e===null))return null;return e}function Uh(e){return e.data==="$?"||e.data==="$~"}function Oh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function h1(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function yi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Ph=null;function pg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return yi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function mg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function xg(e,i,r){switch(i=Ec(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Xo(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);co(e)}var bi=new Map,gg=new Set;function Tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var xa=q.d;q.d={f:d1,r:p1,D:m1,C:x1,L:g1,m:v1,X:y1,S:_1,M:b1};function d1(){var e=xa.f(),i=xc();return e||i}function p1(e){var i=N(e);i!==null&&i.tag===5&&i.type==="form"?Om(i):xa.r(e)}var Sr=typeof document>"u"?null:document;function vg(e,i,r){var l=Sr;if(l&&typeof i=="string"&&i){var f=Ke(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),gg.has(f)||(gg.add(f),e={rel:e,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Pn(i,"link",e),it(i),l.head.appendChild(i)))}}function m1(e){xa.D(e),vg("dns-prefetch",e,null)}function x1(e,i){xa.C(e,i),vg("preconnect",e,i)}function g1(e,i,r){xa.L(e,i,r);var l=Sr;if(l&&e&&i){var f='link[rel="preload"][as="'+Ke(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+Ke(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+Ke(r.imageSizes)+'"]')):f+='[href="'+Ke(e)+'"]';var d=f;switch(i){case"style":d=Mr(e);break;case"script":d=Er(e)}bi.has(d)||(e=g({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),bi.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Wo(d))||i==="script"&&l.querySelector(qo(d))||(i=l.createElement("link"),Pn(i,"link",e),it(i),l.head.appendChild(i)))}}function v1(e,i){xa.m(e,i);var r=Sr;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ke(l)+'"][href="'+Ke(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Er(e)}if(!bi.has(d)&&(e=g({rel:"modulepreload",href:e},i),bi.set(d,e),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(qo(d)))return}l=r.createElement("link"),Pn(l,"link",e),it(l),r.head.appendChild(l)}}}function _1(e,i,r){xa.S(e,i,r);var l=Sr;if(l&&e){var f=ot(l).hoistableStyles,d=Mr(e);i=i||"default";var S=f.get(d);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(Wo(d)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},r),(r=bi.get(d))&&zh(e,r);var V=S=l.createElement("link");it(V),Pn(V,"link",e),V._p=new Promise(function(nt,pt){V.onload=nt,V.onerror=pt}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Ac(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(d,S)}}}function y1(e,i){xa.X(e,i);var r=Sr;if(r&&e){var l=ot(r).hoistableScripts,f=Er(e),d=l.get(f);d||(d=r.querySelector(qo(f)),d||(e=g({src:e,async:!0},i),(i=bi.get(f))&&Bh(e,i),d=r.createElement("script"),it(d),Pn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function b1(e,i){xa.M(e,i);var r=Sr;if(r&&e){var l=ot(r).hoistableScripts,f=Er(e),d=l.get(f);d||(d=r.querySelector(qo(f)),d||(e=g({src:e,async:!0,type:"module"},i),(i=bi.get(f))&&Bh(e,i),d=r.createElement("script"),it(d),Pn(d,"link",e),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function _g(e,i,r,l){var f=(f=st.current)?Tc(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Mr(r.href),r=ot(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=Mr(r.href);var d=ot(f).hoistableStyles,S=d.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,S),(d=f.querySelector(Wo(e)))&&!d._p&&(S.instance=d,S.state.loading=5),bi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},bi.set(e,r),d||S1(f,e,r,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Er(r),r=ot(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Mr(e){return'href="'+Ke(e)+'"'}function Wo(e){return'link[rel="stylesheet"]['+e+"]"}function yg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function S1(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Pn(i,"link",r),it(i),e.head.appendChild(i))}function Er(e){return'[src="'+Ke(e)+'"]'}function qo(e){return"script[async]"+e}function bg(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ke(r.href)+'"]');if(l)return i.instance=l,it(l),l;var f=g({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),it(l),Pn(l,"style",f),Ac(l,r.precedence,e),i.instance=l;case"stylesheet":f=Mr(r.href);var d=e.querySelector(Wo(f));if(d)return i.state.loading|=4,i.instance=d,it(d),d;l=yg(r),(f=bi.get(f))&&zh(l,f),d=(e.ownerDocument||e).createElement("link"),it(d);var S=d;return S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),Pn(d,"link",l),i.state.loading|=4,Ac(d,r.precedence,e),i.instance=d;case"script":return d=Er(r.src),(f=e.querySelector(qo(d)))?(i.instance=f,it(f),f):(l=r,(f=bi.get(d))&&(l=g({},r),Bh(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),it(f),Pn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ac(l,r.precedence,e));return i.instance}function Ac(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===i)d=C;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function zh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Bh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var wc=null;function Sg(e,i,r){if(wc===null){var l=new Map,f=wc=new Map;f.set(r,l)}else f=wc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),f=0;f<r.length;f++){var d=r[f];if(!(d[xs]||d[fn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=e+S;var C=l.get(S);C?C.push(d):l.set(S,[d])}}return l}function Mg(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function M1(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Eg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function E1(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Mr(l.href),d=i.querySelector(Wo(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Cc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=d,it(d);return}d=i.ownerDocument||i,l=yg(l),(f=bi.get(f))&&zh(l,f),d=d.createElement("link"),it(d);var S=d;S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),Pn(d,"link",l),r.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Cc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Fh=0;function T1(e,i){return e.stylesheets&&e.count===0&&Nc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Nc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Fh===0&&(Fh=62500*s1());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Nc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Fh?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Nc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rc=null;function Nc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rc=new Map,i.forEach(A1,e),Rc=null,Cc.call(e))}function A1(e,i){if(!(i.state.loading&4)){var r=Rc.get(e);if(r)var l=r.get(null);else{r=new Map,Rc.set(e,r);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),d=r.get(S)||l,d===l&&r.set(null,f),r.set(S,f),this.count++,l=Cc.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var Yo={$$typeof:A,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function w1(e,i,r,l,f,d,S,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Tg(e,i,r,l,f,d,S,C,V,nt,pt,_t){return e=new w1(e,i,r,S,V,nt,pt,_t,C),i=1,d===!0&&(i|=24),d=si(3,null,null,i),e.current=d,d.stateNode=e,i=gf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},bf(d),e}function Ag(e){return e?(e=er,e):er}function wg(e,i,r,l,f,d){f=Ag(f),l.context===null?l.context=f:l.pendingContext=f,l=Ha(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=Va(e,l,i),r!==null&&(Kn(r,e,i),Ao(r,e,i))}function Cg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Ih(e,i){Cg(e,i),(e=e.alternate)&&Cg(e,i)}function Rg(e){if(e.tag===13||e.tag===31){var i=ys(e,67108864);i!==null&&Kn(i,e,67108864),Ih(e,67108864)}}function Ng(e){if(e.tag===13||e.tag===31){var i=ui();i=Ai(i);var r=ys(e,i);r!==null&&Kn(r,e,i),Ih(e,i)}}var Dc=!0;function C1(e,i,r,l){var f=H.T;H.T=null;var d=q.p;try{q.p=2,Hh(e,i,r,l)}finally{q.p=d,H.T=f}}function R1(e,i,r,l){var f=H.T;H.T=null;var d=q.p;try{q.p=8,Hh(e,i,r,l)}finally{q.p=d,H.T=f}}function Hh(e,i,r,l){if(Dc){var f=Vh(l);if(f===null)Ah(e,i,l,Lc,r),Lg(e,l);else if(D1(f,e,i,r,l))l.stopPropagation();else if(Lg(e,l),i&4&&-1<N1.indexOf(e)){for(;f!==null;){var d=N(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=At(d.pendingLanes);if(S!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var V=1<<31-Jt(S);C.entanglements[1]|=V,S&=~V}Vi(d),(Be&6)===0&&(pc=w()+500,Go(0))}}break;case 31:case 13:C=ys(d,2),C!==null&&Kn(C,d,2),xc(),Ih(d,2)}if(d=Vh(l),d===null&&Ah(e,i,l,Lc,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else Ah(e,i,l,null,r)}}function Vh(e){return e=Gu(e),Gh(e)}var Lc=null;function Gh(e){if(Lc=null,e=La(e),e!==null){var i=c(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=h(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Lc=e,null}function Dg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case dt:return 2;case Mt:return 8;case ut:case ee:return 32;case Ft:return 268435456;default:return 32}default:return 32}}var kh=!1,Ja=null,$a=null,ts=null,Zo=new Map,Ko=new Map,es=[],N1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Lg(e,i){switch(e){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":ts=null;break;case"pointerover":case"pointerout":Zo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(i.pointerId)}}function Qo(e,i,r,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=N(i),i!==null&&Rg(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function D1(e,i,r,l,f){switch(i){case"focusin":return Ja=Qo(Ja,e,i,r,l,f),!0;case"dragenter":return $a=Qo($a,e,i,r,l,f),!0;case"mouseover":return ts=Qo(ts,e,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return Zo.set(d,Qo(Zo.get(d)||null,e,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Ko.set(d,Qo(Ko.get(d)||null,e,i,r,l,f)),!0}return!1}function Ug(e){var i=La(e.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,lo(e.priority,function(){Ng(r)});return}}else if(i===31){if(i=h(r),i!==null){e.blockedOn=i,lo(e.priority,function(){Ng(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Vh(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Vu=l,r.target.dispatchEvent(l),Vu=null}else return i=N(r),i!==null&&Rg(i),e.blockedOn=r,!1;i.shift()}return!0}function Og(e,i,r){Uc(e)&&r.delete(i)}function L1(){kh=!1,Ja!==null&&Uc(Ja)&&(Ja=null),$a!==null&&Uc($a)&&($a=null),ts!==null&&Uc(ts)&&(ts=null),Zo.forEach(Og),Ko.forEach(Og)}function Oc(e,i){e.blockedOn===i&&(e.blockedOn=null,kh||(kh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,L1)))}var Pc=null;function Pg(e){Pc!==e&&(Pc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Pc===e&&(Pc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Gh(l||r)===null)continue;break}var d=N(r);d!==null&&(e.splice(i,3),i-=3,Vf(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function Tr(e){function i(V){return Oc(V,e)}Ja!==null&&Oc(Ja,e),$a!==null&&Oc($a,e),ts!==null&&Oc(ts,e),Zo.forEach(i),Ko.forEach(i);for(var r=0;r<es.length;r++){var l=es[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<es.length&&(r=es[0],r.blockedOn===null);)Ug(r),r.blockedOn===null&&es.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],S=f[vn]||null;if(typeof d=="function")S||Pg(r);else if(S){var C=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[vn]||null)C=S.formAction;else if(Gh(f)!==null)continue}else C=S.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),Pg(r)}}}function zg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function jh(e){this._internalRoot=e}zc.prototype.render=jh.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=ui();wg(r,l,e,i,null,null)},zc.prototype.unmount=jh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;wg(e.current,2,null,e,null,null),xc(),i[Qi]=null}};function zc(e){this._internalRoot=e}zc.prototype.unstable_scheduleHydration=function(e){if(e){var i=oo();e={blockedOn:null,target:e,priority:i};for(var r=0;r<es.length&&i!==0&&i<es[r].priority;r++);es.splice(r,0,e),r===0&&Ug(e)}};var Bg=t.version;if(Bg!=="19.2.0")throw Error(a(527,Bg,"19.2.0"));q.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var U1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{Et=Bc.inject(U1),Nt=Bc}catch{}}return $o.createRoot=function(e,i){if(!o(e))throw Error(a(299));var r=!1,l="",f=jm,d=Xm,S=Wm;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=Tg(e,1,!1,null,null,r,l,null,f,d,S,zg),e[Qi]=i.current,Th(e),new jh(i)},$o.hydrateRoot=function(e,i,r){if(!o(e))throw Error(a(299));var l=!1,f="",d=jm,S=Xm,C=Wm,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),i=Tg(e,1,!0,i,r??null,l,f,V,d,S,C,zg),i.context=Ag(null),r=i.current,l=ui(),l=Ai(l),f=Ha(l),f.callback=null,Va(r,f,l),r=l,i.current.lanes=r,Bn(i,r),Vi(i),e[Qi]=i.current,Th(e),new zc(i)},$o.version="19.2.0",$o}var qg;function j1(){if(qg)return qh.exports;qg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),qh.exports=k1(),qh.exports}var X1=j1();const W1=p_(X1);/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Yg="popstate";function q1(s={}){function t(o,c){let{pathname:u="/",search:h="",hash:m=""}=Xs(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Pd("",{pathname:u,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let u=o.document.querySelector("base"),h="";if(u&&u.getAttribute("href")){let m=o.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:pl(c))}function a(o,c){Ti(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return Z1(t,n,a,s)}function sn(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Ti(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Y1(){return Math.random().toString(36).substring(2,10)}function Zg(s,t){return{usr:s.state,key:s.key,idx:t}}function Pd(s,t,n=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Xs(t):t,state:n,key:t&&t.key||a||Y1()}}function pl({pathname:s="/",search:t="",hash:n=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(s+=n.charAt(0)==="#"?n:"#"+n),s}function Xs(s){let t={};if(s){let n=s.indexOf("#");n>=0&&(t.hash=s.substring(n),s=s.substring(0,n));let a=s.indexOf("?");a>=0&&(t.search=s.substring(a),s=s.substring(0,a)),s&&(t.pathname=s)}return t}function Z1(s,t,n,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,u=o.history,h="POP",m=null,p=x();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function x(){return(u.state||{idx:null}).idx}function g(){h="POP";let M=x(),_=M==null?null:M-p;p=M,m&&m({action:h,location:T.location,delta:_})}function v(M,_){h="PUSH";let L=Pd(T.location,M,_);n&&n(L,M),p=x()+1;let A=Zg(L,p),U=T.createHref(L);try{u.pushState(A,"",U)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(U)}c&&m&&m({action:h,location:T.location,delta:1})}function b(M,_){h="REPLACE";let L=Pd(T.location,M,_);n&&n(L,M),p=x();let A=Zg(L,p),U=T.createHref(L);u.replaceState(A,"",U),c&&m&&m({action:h,location:T.location,delta:0})}function E(M){return K1(M)}let T={get action(){return h},get location(){return s(o,u)},listen(M){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Yg,g),m=M,()=>{o.removeEventListener(Yg,g),m=null}},createHref(M){return t(o,M)},createURL:E,encodeLocation(M){let _=E(M);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:b,go(M){return u.go(M)}};return T}function K1(s,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),sn(n,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:pl(s);return a=a.replace(/ $/,"%20"),!t&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function m_(s,t,n="/"){return Q1(s,t,n,!1)}function Q1(s,t,n,a){let o=typeof t=="string"?Xs(t):t,c=Ra(o.pathname||"/",n);if(c==null)return null;let u=x_(s);J1(u);let h=null;for(let m=0;h==null&&m<u.length;++m){let p=cS(c);h=oS(u[m],p,a)}return h}function x_(s,t=[],n=[],a="",o=!1){let c=(u,h,m=o,p)=>{let x={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(a)&&m)return;sn(x.relativePath.startsWith(a),`Absolute route path "${x.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(a.length)}let g=wa([a,x.relativePath]),v=n.concat(x);u.children&&u.children.length>0&&(sn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),x_(u.children,t,v,g,m)),!(u.path==null&&!u.index)&&t.push({path:g,score:sS(g,u.index),routesMeta:v})};return s.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))c(u,h);else for(let p of g_(u.path))c(u,h,!0,p)}),t}function g_(s){let t=s.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let u=g_(a.join("/")),h=[];return h.push(...u.map(m=>m===""?c:[c,m].join("/"))),o&&h.push(...u),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function J1(s){s.sort((t,n)=>t.score!==n.score?n.score-t.score:rS(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var $1=/^:[\w-]+$/,tS=3,eS=2,nS=1,iS=10,aS=-2,Kg=s=>s==="*";function sS(s,t){let n=s.split("/"),a=n.length;return n.some(Kg)&&(a+=aS),t&&(a+=eS),n.filter(o=>!Kg(o)).reduce((o,c)=>o+($1.test(c)?tS:c===""?nS:iS),a)}function rS(s,t){return s.length===t.length&&s.slice(0,-1).every((a,o)=>a===t[o])?s[s.length-1]-t[t.length-1]:0}function oS(s,t,n=!1){let{routesMeta:a}=s,o={},c="/",u=[];for(let h=0;h<a.length;++h){let m=a[h],p=h===a.length-1,x=c==="/"?t:t.slice(c.length)||"/",g=Su({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},x),v=m.route;if(!g&&p&&n&&!a[a.length-1].route.index&&(g=Su({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},x)),!g)return null;Object.assign(o,g.params),u.push({params:o,pathname:wa([c,g.pathname]),pathnameBase:pS(wa([c,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(c=wa([c,g.pathnameBase]))}return u}function Su(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[n,a]=lS(s.path,s.caseSensitive,s.end),o=t.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((p,{paramName:x,isOptional:g},v)=>{if(x==="*"){let E=h[v]||"";u=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const b=h[v];return g&&!b?p[x]=void 0:p[x]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:s}}function lS(s,t=!1,n=!0){Ti(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,m)=>(a.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function cS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ti(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function Ra(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=s.charAt(n);return a&&a!=="/"?null:s.slice(n)||"/"}var uS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fS=s=>uS.test(s);function hS(s,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof s=="string"?Xs(s):s,c;if(n)if(fS(n))c=n;else{if(n.includes("//")){let u=n;n=n.replace(/\/\/+/g,"/"),Ti(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${n}`)}n.startsWith("/")?c=Qg(n.substring(1),"/"):c=Qg(n,t)}else c=t;return{pathname:c,search:mS(a),hash:xS(o)}}function Qg(s,t){let n=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Qh(s,t,n,a){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dS(s){return s.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function v_(s){let t=dS(s);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function __(s,t,n,a=!1){let o;typeof s=="string"?o=Xs(s):(o={...s},sn(!o.pathname||!o.pathname.includes("?"),Qh("?","pathname","search",o)),sn(!o.pathname||!o.pathname.includes("#"),Qh("#","pathname","hash",o)),sn(!o.search||!o.search.includes("#"),Qh("#","search","hash",o)));let c=s===""||o.pathname==="",u=c?"/":o.pathname,h;if(u==null)h=n;else{let g=t.length-1;if(!a&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),g-=1;o.pathname=v.join("/")}h=g>=0?t[g]:"/"}let m=hS(o,h),p=u&&u!=="/"&&u.endsWith("/"),x=(c||u===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||x)&&(m.pathname+="/"),m}var wa=s=>s.join("/").replace(/\/\/+/g,"/"),pS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),mS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,xS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function gS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var y_=["POST","PUT","PATCH","DELETE"];new Set(y_);var vS=["GET",...y_];new Set(vS);var to=ht.createContext(null);to.displayName="DataRouter";var Du=ht.createContext(null);Du.displayName="DataRouterState";ht.createContext(!1);var b_=ht.createContext({isTransitioning:!1});b_.displayName="ViewTransition";var _S=ht.createContext(new Map);_S.displayName="Fetchers";var yS=ht.createContext(null);yS.displayName="Await";var Zi=ht.createContext(null);Zi.displayName="Navigation";var Ml=ht.createContext(null);Ml.displayName="Location";var Na=ht.createContext({outlet:null,matches:[],isDataRoute:!1});Na.displayName="Route";var Up=ht.createContext(null);Up.displayName="RouteError";function bS(s,{relative:t}={}){sn(El(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=ht.useContext(Zi),{hash:o,pathname:c,search:u}=Tl(s,{relative:t}),h=c;return n!=="/"&&(h=c==="/"?n:wa([n,c])),a.createHref({pathname:h,search:u,hash:o})}function El(){return ht.useContext(Ml)!=null}function Da(){return sn(El(),"useLocation() may be used only in the context of a <Router> component."),ht.useContext(Ml).location}var S_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function M_(s){ht.useContext(Zi).static||ht.useLayoutEffect(s)}function SS(){let{isDataRoute:s}=ht.useContext(Na);return s?PS():MS()}function MS(){sn(El(),"useNavigate() may be used only in the context of a <Router> component.");let s=ht.useContext(to),{basename:t,navigator:n}=ht.useContext(Zi),{matches:a}=ht.useContext(Na),{pathname:o}=Da(),c=JSON.stringify(v_(a)),u=ht.useRef(!1);return M_(()=>{u.current=!0}),ht.useCallback((m,p={})=>{if(Ti(u.current,S_),!u.current)return;if(typeof m=="number"){n.go(m);return}let x=__(m,JSON.parse(c),o,p.relative==="path");s==null&&t!=="/"&&(x.pathname=x.pathname==="/"?t:wa([t,x.pathname])),(p.replace?n.replace:n.push)(x,p.state,p)},[t,n,c,o,s])}ht.createContext(null);function Tl(s,{relative:t}={}){let{matches:n}=ht.useContext(Na),{pathname:a}=Da(),o=JSON.stringify(v_(n));return ht.useMemo(()=>__(s,JSON.parse(o),a,t==="path"),[s,o,a,t])}function ES(s,t){return E_(s,t)}function E_(s,t,n,a,o){var L;sn(El(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ht.useContext(Zi),{matches:u}=ht.useContext(Na),h=u[u.length-1],m=h?h.params:{},p=h?h.pathname:"/",x=h?h.pathnameBase:"/",g=h&&h.route;{let A=g&&g.path||"";T_(p,!g||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let v=Da(),b;if(t){let A=typeof t=="string"?Xs(t):t;sn(x==="/"||((L=A.pathname)==null?void 0:L.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${A.pathname}" was given in the \`location\` prop.`),b=A}else b=v;let E=b.pathname||"/",T=E;if(x!=="/"){let A=x.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(A.length).join("/")}let M=m_(s,{pathname:T});Ti(g||M!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Ti(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=RS(M&&M.map(A=>Object.assign({},A,{params:Object.assign({},m,A.params),pathname:wa([x,c.encodeLocation?c.encodeLocation(A.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?x:wa([x,c.encodeLocation?c.encodeLocation(A.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:A.pathnameBase])})),u,n,a,o);return t&&_?ht.createElement(Ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},_):_}function TS(){let s=OS(),t=gS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),n=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",s),u=ht.createElement(ht.Fragment,null,ht.createElement("p",null,"💿 Hey developer 👋"),ht.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ht.createElement("code",{style:c},"ErrorBoundary")," or"," ",ht.createElement("code",{style:c},"errorElement")," prop on your route.")),ht.createElement(ht.Fragment,null,ht.createElement("h2",null,"Unexpected Application Error!"),ht.createElement("h3",{style:{fontStyle:"italic"}},t),n?ht.createElement("pre",{style:o},n):null,u)}var AS=ht.createElement(TS,null),wS=class extends ht.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){this.props.onError?this.props.onError(s,t):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?ht.createElement(Na.Provider,{value:this.props.routeContext},ht.createElement(Up.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function CS({routeContext:s,match:t,children:n}){let a=ht.useContext(to);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ht.createElement(Na.Provider,{value:s},n)}function RS(s,t=[],n=null,a=null,o=null){if(s==null){if(!n)return null;if(n.errors)s=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)s=n.matches;else return null}let c=s,u=n==null?void 0:n.errors;if(u!=null){let x=c.findIndex(g=>g.route.id&&(u==null?void 0:u[g.route.id])!==void 0);sn(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let h=!1,m=-1;if(n)for(let x=0;x<c.length;x++){let g=c[x];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=x),g.route.id){let{loaderData:v,errors:b}=n,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=n&&a?(x,g)=>{var v,b;a(x,{location:n.location,params:((b=(v=n.matches)==null?void 0:v[0])==null?void 0:b.params)??{},errorInfo:g})}:void 0;return c.reduceRight((x,g,v)=>{let b,E=!1,T=null,M=null;n&&(b=u&&g.route.id?u[g.route.id]:void 0,T=g.route.errorElement||AS,h&&(m<0&&v===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,M=null):m===v&&(E=!0,M=g.route.hydrateFallbackElement||null)));let _=t.concat(c.slice(0,v+1)),L=()=>{let A;return b?A=T:E?A=M:g.route.Component?A=ht.createElement(g.route.Component,null):g.route.element?A=g.route.element:A=x,ht.createElement(CS,{match:g,routeContext:{outlet:x,matches:_,isDataRoute:n!=null},children:A})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?ht.createElement(wS,{location:n.location,revalidation:n.revalidation,component:T,error:b,children:L(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:p}):L()},null)}function Op(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function NS(s){let t=ht.useContext(to);return sn(t,Op(s)),t}function DS(s){let t=ht.useContext(Du);return sn(t,Op(s)),t}function LS(s){let t=ht.useContext(Na);return sn(t,Op(s)),t}function Pp(s){let t=LS(s),n=t.matches[t.matches.length-1];return sn(n.route.id,`${s} can only be used on routes that contain a unique "id"`),n.route.id}function US(){return Pp("useRouteId")}function OS(){var a;let s=ht.useContext(Up),t=DS("useRouteError"),n=Pp("useRouteError");return s!==void 0?s:(a=t.errors)==null?void 0:a[n]}function PS(){let{router:s}=NS("useNavigate"),t=Pp("useNavigate"),n=ht.useRef(!1);return M_(()=>{n.current=!0}),ht.useCallback(async(o,c={})=>{Ti(n.current,S_),n.current&&(typeof o=="number"?s.navigate(o):await s.navigate(o,{fromRouteId:t,...c}))},[s,t])}var Jg={};function T_(s,t,n){!t&&!Jg[s]&&(Jg[s]=!0,Ti(!1,n))}ht.memo(zS);function zS({routes:s,future:t,state:n,unstable_onError:a}){return E_(s,void 0,n,a,t)}function cs(s){sn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function BS({basename:s="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:c=!1}){sn(!El(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=s.replace(/^\/*/,"/"),h=ht.useMemo(()=>({basename:u,navigator:o,static:c,future:{}}),[u,o,c]);typeof n=="string"&&(n=Xs(n));let{pathname:m="/",search:p="",hash:x="",state:g=null,key:v="default"}=n,b=ht.useMemo(()=>{let E=Ra(m,u);return E==null?null:{location:{pathname:E,search:p,hash:x,state:g,key:v},navigationType:a}},[u,m,p,x,g,v,a]);return Ti(b!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${x}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:ht.createElement(Zi.Provider,{value:h},ht.createElement(Ml.Provider,{children:t,value:b}))}function FS({children:s,location:t}){return ES(zd(s),t)}function zd(s,t=[]){let n=[];return ht.Children.forEach(s,(a,o)=>{if(!ht.isValidElement(a))return;let c=[...t,o];if(a.type===ht.Fragment){n.push.apply(n,zd(a.props.children,c));return}sn(a.type===cs,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),sn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=zd(a.props.children,c)),n.push(u)}),n}var fu="get",hu="application/x-www-form-urlencoded";function Lu(s){return s!=null&&typeof s.tagName=="string"}function IS(s){return Lu(s)&&s.tagName.toLowerCase()==="button"}function HS(s){return Lu(s)&&s.tagName.toLowerCase()==="form"}function VS(s){return Lu(s)&&s.tagName.toLowerCase()==="input"}function GS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function kS(s,t){return s.button===0&&(!t||t==="_self")&&!GS(s)}var Fc=null;function jS(){if(Fc===null)try{new FormData(document.createElement("form"),0),Fc=!1}catch{Fc=!0}return Fc}var XS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jh(s){return s!=null&&!XS.has(s)?(Ti(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${hu}"`),null):s}function WS(s,t){let n,a,o,c,u;if(HS(s)){let h=s.getAttribute("action");a=h?Ra(h,t):null,n=s.getAttribute("method")||fu,o=Jh(s.getAttribute("enctype"))||hu,c=new FormData(s)}else if(IS(s)||VS(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(a=m?Ra(m,t):null,n=s.getAttribute("formmethod")||h.getAttribute("method")||fu,o=Jh(s.getAttribute("formenctype"))||Jh(h.getAttribute("enctype"))||hu,c=new FormData(h,s),!jS()){let{name:p,type:x,value:g}=s;if(x==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,g)}}else{if(Lu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=fu,a=null,o=hu,u=s}return c&&o==="text/plain"&&(u=c,c=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function zp(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function qS(s,t,n){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a.pathname==="/"?a.pathname=`_root.${n}`:t&&Ra(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function YS(s,t){if(s.id in t)return t[s.id];try{let n=await import(s.module);return t[s.id]=n,n}catch(n){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ZS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function KS(s,t,n){let a=await Promise.all(s.map(async o=>{let c=t.routes[o.route.id];if(c){let u=await YS(c,n);return u.links?u.links():[]}return[]}));return tM(a.flat(1).filter(ZS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function $g(s,t,n,a,o,c){let u=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,h=(m,p)=>{var x;return n[p].pathname!==m.pathname||((x=n[p].route.path)==null?void 0:x.endsWith("*"))&&n[p].params["*"]!==m.params["*"]};return c==="assets"?t.filter((m,p)=>u(m,p)||h(m,p)):c==="data"?t.filter((m,p)=>{var g;let x=a.routes[m.route.id];if(!x||!x.hasLoader)return!1;if(u(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((g=n[0])==null?void 0:g.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function QS(s,t,{includeHydrateFallback:n}={}){return JS(s.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function JS(s){return[...new Set(s)]}function $S(s){let t={},n=Object.keys(s).sort();for(let a of n)t[a]=s[a];return t}function tM(s,t){let n=new Set;return new Set(t),s.reduce((a,o)=>{let c=JSON.stringify($S(o));return n.has(c)||(n.add(c),a.push({key:c,link:o})),a},[])}function A_(){let s=ht.useContext(to);return zp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function eM(){let s=ht.useContext(Du);return zp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Bp=ht.createContext(void 0);Bp.displayName="FrameworkContext";function w_(){let s=ht.useContext(Bp);return zp(s,"You must render this element inside a <HydratedRouter> element"),s}function nM(s,t){let n=ht.useContext(Bp),[a,o]=ht.useState(!1),[c,u]=ht.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:x,onTouchStart:g}=t,v=ht.useRef(null);ht.useEffect(()=>{if(s==="render"&&u(!0),s==="viewport"){let T=_=>{_.forEach(L=>{u(L.isIntersecting)})},M=new IntersectionObserver(T,{threshold:.5});return v.current&&M.observe(v.current),()=>{M.disconnect()}}},[s]),ht.useEffect(()=>{if(a){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[a]);let b=()=>{o(!0)},E=()=>{o(!1),u(!1)};return n?s!=="intent"?[c,v,{}]:[c,v,{onFocus:tl(h,b),onBlur:tl(m,E),onMouseEnter:tl(p,b),onMouseLeave:tl(x,E),onTouchStart:tl(g,b)}]:[!1,v,{}]}function tl(s,t){return n=>{s&&s(n),n.defaultPrevented||t(n)}}function iM({page:s,...t}){let{router:n}=A_(),a=ht.useMemo(()=>m_(n.routes,s,n.basename),[n.routes,s,n.basename]);return a?ht.createElement(sM,{page:s,matches:a,...t}):null}function aM(s){let{manifest:t,routeModules:n}=w_(),[a,o]=ht.useState([]);return ht.useEffect(()=>{let c=!1;return KS(s,t,n).then(u=>{c||o(u)}),()=>{c=!0}},[s,t,n]),a}function sM({page:s,matches:t,...n}){let a=Da(),{manifest:o,routeModules:c}=w_(),{basename:u}=A_(),{loaderData:h,matches:m}=eM(),p=ht.useMemo(()=>$g(s,t,m,o,a,"data"),[s,t,m,o,a]),x=ht.useMemo(()=>$g(s,t,m,o,a,"assets"),[s,t,m,o,a]),g=ht.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let E=new Set,T=!1;if(t.forEach(_=>{var A;let L=o.routes[_.route.id];!L||!L.hasLoader||(!p.some(U=>U.route.id===_.route.id)&&_.route.id in h&&((A=c[_.route.id])!=null&&A.shouldRevalidate)||L.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let M=qS(s,u,"data");return T&&E.size>0&&M.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[M.pathname+M.search]},[u,h,a,o,p,t,s,c]),v=ht.useMemo(()=>QS(x,o),[x,o]),b=aM(x);return ht.createElement(ht.Fragment,null,g.map(E=>ht.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),v.map(E=>ht.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),b.map(({key:E,link:T})=>ht.createElement("link",{key:E,nonce:n.nonce,...T})))}function rM(...s){return t=>{s.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var C_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{C_&&(window.__reactRouterVersion="7.9.6")}catch{}function oM({basename:s,children:t,window:n}){let a=ht.useRef();a.current==null&&(a.current=q1({window:n,v5Compat:!0}));let o=a.current,[c,u]=ht.useState({action:o.action,location:o.location}),h=ht.useCallback(m=>{ht.startTransition(()=>u(m))},[u]);return ht.useLayoutEffect(()=>o.listen(h),[o,h]),ht.createElement(BS,{basename:s,children:t,location:c.location,navigationType:c.action,navigator:o})}var R_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sn=ht.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:c,replace:u,state:h,target:m,to:p,preventScrollReset:x,viewTransition:g,...v},b){let{basename:E}=ht.useContext(Zi),T=typeof p=="string"&&R_.test(p),M,_=!1;if(typeof p=="string"&&T&&(M=p,C_))try{let D=new URL(window.location.href),R=p.startsWith("//")?new URL(D.protocol+p):new URL(p),G=Ra(R.pathname,E);R.origin===D.origin&&G!=null?p=G+R.search+R.hash:_=!0}catch{Ti(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=bS(p,{relative:o}),[A,U,I]=nM(a,v),O=fM(p,{replace:u,state:h,target:m,preventScrollReset:x,relative:o,viewTransition:g});function F(D){t&&t(D),D.defaultPrevented||O(D)}let X=ht.createElement("a",{...v,...I,href:M||L,onClick:_||c?t:F,ref:rM(b,U),target:m,"data-discover":!T&&n==="render"?"true":void 0});return A&&!T?ht.createElement(ht.Fragment,null,X,ht.createElement(iM,{page:L})):X});Sn.displayName="Link";var lM=ht.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:c,to:u,viewTransition:h,children:m,...p},x){let g=Tl(u,{relative:p.relative}),v=Da(),b=ht.useContext(Du),{navigator:E,basename:T}=ht.useContext(Zi),M=b!=null&&xM(g)&&h===!0,_=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,L=v.pathname,A=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(L=L.toLowerCase(),A=A?A.toLowerCase():null,_=_.toLowerCase()),A&&T&&(A=Ra(A,T)||A);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=L===_||!o&&L.startsWith(_)&&L.charAt(U)==="/",O=A!=null&&(A===_||!o&&A.startsWith(_)&&A.charAt(_.length)==="/"),F={isActive:I,isPending:O,isTransitioning:M},X=I?t:void 0,D;typeof a=="function"?D=a(F):D=[a,I?"active":null,O?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(F):c;return ht.createElement(Sn,{...p,"aria-current":X,className:D,ref:x,style:R,to:u,viewTransition:h},typeof m=="function"?m(F):m)});lM.displayName="NavLink";var cM=ht.forwardRef(({discover:s="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:c,method:u=fu,action:h,onSubmit:m,relative:p,preventScrollReset:x,viewTransition:g,...v},b)=>{let E=pM(),T=mM(h,{relative:p}),M=u.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&R_.test(h),L=A=>{if(m&&m(A),A.defaultPrevented)return;A.preventDefault();let U=A.nativeEvent.submitter,I=(U==null?void 0:U.getAttribute("formmethod"))||u;E(U||A.currentTarget,{fetcherKey:t,method:I,navigate:n,replace:o,state:c,relative:p,preventScrollReset:x,viewTransition:g})};return ht.createElement("form",{ref:b,method:M,action:T,onSubmit:a?m:L,...v,"data-discover":!_&&s==="render"?"true":void 0})});cM.displayName="Form";function uM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function N_(s){let t=ht.useContext(to);return sn(t,uM(s)),t}function fM(s,{target:t,replace:n,state:a,preventScrollReset:o,relative:c,viewTransition:u}={}){let h=SS(),m=Da(),p=Tl(s,{relative:c});return ht.useCallback(x=>{if(kS(x,t)){x.preventDefault();let g=n!==void 0?n:pl(m)===pl(p);h(s,{replace:g,state:a,preventScrollReset:o,relative:c,viewTransition:u})}},[m,h,p,n,a,t,s,o,c,u])}var hM=0,dM=()=>`__${String(++hM)}__`;function pM(){let{router:s}=N_("useSubmit"),{basename:t}=ht.useContext(Zi),n=US();return ht.useCallback(async(a,o={})=>{let{action:c,method:u,encType:h,formData:m,body:p}=WS(a,t);if(o.navigate===!1){let x=o.fetcherKey||dM();await s.fetch(x,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||h,flushSync:o.flushSync})}else await s.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[s,t,n])}function mM(s,{relative:t}={}){let{basename:n}=ht.useContext(Zi),a=ht.useContext(Na);sn(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...Tl(s||".",{relative:t})},u=Da();if(s==null){c.search=u.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(x=>x==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let x=h.toString();c.search=x?`?${x}`:""}}return(!s||s===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:wa([n,c.pathname])),pl(c)}function xM(s,{relative:t}={}){let n=ht.useContext(b_);sn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=N_("useViewTransitionState"),o=Tl(s,{relative:t});if(!n.isTransitioning)return!1;let c=Ra(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=Ra(n.nextLocation.pathname,a)||n.nextLocation.pathname;return Su(o.pathname,u)!=null||Su(o.pathname,c)!=null}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vM=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase()),tv=s=>{const t=vM(s);return t.charAt(0).toUpperCase()+t.slice(1)},D_=(...s)=>s.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim(),_M=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var yM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=ht.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...h},m)=>ht.createElement("svg",{ref:m,...yM,width:t,height:t,stroke:s,strokeWidth:a?Number(n)*24/Number(t):n,className:D_("lucide",o),...!c&&!_M(h)&&{"aria-hidden":"true"},...h},[...u.map(([p,x])=>ht.createElement(p,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=(s,t)=>{const n=ht.forwardRef(({className:a,...o},c)=>ht.createElement(bM,{ref:c,iconNode:t,className:D_(`lucide-${gM(tv(s))}`,`lucide-${s}`,a),...o}));return n.displayName=tv(s),n};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],MM=nn("arrow-right",SM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],L_=nn("bot",EM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],AM=nn("briefcase",TM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],CM=nn("calculator",wM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Bd=nn("check",RM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],DM=nn("chevron-down",NM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ev=nn("circle-play",LM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],OM=nn("clock",UM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],zM=nn("cloud-upload",PM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],FM=nn("cpu",BM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],HM=nn("database",IM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],GM=nn("file-text",VM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],U_=nn("github",kM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],XM=nn("instagram",jM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],O_=nn("linkedin",WM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],P_=nn("mail",qM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],z_=nn("map-pin",YM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],KM=nn("menu",ZM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],JM=nn("message-square",QM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],t2=nn("phone",$M);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],B_=nn("send",e2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],i2=nn("twitter",n2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fd=nn("x",a2);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],F_=nn("zap",s2),Pi=({variant:s="primary",size:t="md",children:n,className:a="",...o})=>{const c="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed",u={primary:"bg-gradient-to-l from-primary to-indigo-600 hover:from-indigo-600 hover:to-primary text-white shadow-lg shadow-primary/25",secondary:"bg-surface hover:bg-slate-800 text-white border border-slate-700",outline:"border-2 border-primary text-primary hover:bg-primary/10"},h={sm:"px-3 py-1.5 text-sm",md:"px-6 py-2.5 text-base",lg:"px-8 py-3.5 text-lg"};return y.jsx("button",{className:`${c} ${u[s]} ${h[t]} ${a}`,...o,children:n})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="181",kr={ROTATE:0,DOLLY:1,PAN:2},Hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},r2=0,nv=1,o2=2,I_=1,l2=2,Ma=3,ps=0,ti=1,Ea=2,ji=0,jr=1,Id=2,iv=3,av=4,c2=5,Is=100,u2=101,f2=102,h2=103,d2=104,p2=200,m2=201,x2=202,g2=203,Hd=204,Vd=205,v2=206,_2=207,y2=208,b2=209,S2=210,M2=211,E2=212,T2=213,A2=214,Gd=0,kd=1,jd=2,qr=3,Xd=4,Wd=5,qd=6,Yd=7,H_=0,w2=1,C2=2,ds=0,R2=1,Ip=2,N2=3,D2=4,L2=5,U2=6,O2=7,V_=300,Yr=301,Zr=302,Zd=303,Kd=304,Uu=306,Qd=1e3,Ta=1001,Jd=1002,di=1003,P2=1004,Ic=1005,Ei=1006,$h=1007,Vs=1008,qi=1009,G_=1010,k_=1011,ml=1012,Hp=1013,Gs=1014,Aa=1015,Xi=1016,Vp=1017,Gp=1018,xl=1020,j_=35902,X_=35899,W_=1021,q_=1022,Oi=1023,gl=1026,vl=1027,Y_=1028,kp=1029,jp=1030,Xp=1031,Wp=1033,du=33776,pu=33777,mu=33778,xu=33779,$d=35840,tp=35841,ep=35842,np=35843,ip=36196,ap=37492,sp=37496,rp=37808,op=37809,lp=37810,cp=37811,up=37812,fp=37813,hp=37814,dp=37815,pp=37816,mp=37817,xp=37818,gp=37819,vp=37820,_p=37821,yp=36492,bp=36494,Sp=36495,Mp=36283,Ep=36284,Tp=36285,Ap=36286,z2=3200,B2=3201,Z_=0,F2=1,fs="",Mi="srgb",Kr="srgb-linear",Mu="linear",Xe="srgb",Ar=7680,sv=519,I2=512,H2=513,V2=514,K_=515,G2=516,k2=517,j2=518,X2=519,rv=35044,ov="300 es",ki=2e3,Eu=2001;function Q_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Tu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function W2(){const s=Tu("canvas");return s.style.display="block",s}const lv={};function cv(...s){const t="THREE."+s.shift();console.log(t,...s)}function de(...s){const t="THREE."+s.shift();console.warn(t,...s)}function ln(...s){const t="THREE."+s.shift();console.error(t,...s)}function _l(...s){const t=s.join(" ");t in lv||(lv[t]=!0,de(...s))}function q2(s,t,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Ws{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=Math.PI/180,wp=180/Math.PI;function eo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function be(s,t,n){return Math.max(t,Math.min(n,s))}function Y2(s,t){return(s%t+t)%t}function td(s,t,n){return(1-n)*s+n*t}function el(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Z2={DEG2RAD:gu};class wt{constructor(t=0,n=0){wt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-t.x,u=this.y-t.y;return this.x=c*a-u*o+t.x,this.y=c*o+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ks{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],x=a[o+2],g=a[o+3],v=c[u+0],b=c[u+1],E=c[u+2],T=c[u+3];if(h<=0){t[n+0]=m,t[n+1]=p,t[n+2]=x,t[n+3]=g;return}if(h>=1){t[n+0]=v,t[n+1]=b,t[n+2]=E,t[n+3]=T;return}if(g!==T||m!==v||p!==b||x!==E){let M=m*v+p*b+x*E+g*T;M<0&&(v=-v,b=-b,E=-E,T=-T,M=-M);let _=1-h;if(M<.9995){const L=Math.acos(M),A=Math.sin(L);_=Math.sin(_*L)/A,h=Math.sin(h*L)/A,m=m*_+v*h,p=p*_+b*h,x=x*_+E*h,g=g*_+T*h}else{m=m*_+v*h,p=p*_+b*h,x=x*_+E*h,g=g*_+T*h;const L=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=L,p*=L,x*=L,g*=L}}t[n]=m,t[n+1]=p,t[n+2]=x,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],x=a[o+3],g=c[u],v=c[u+1],b=c[u+2],E=c[u+3];return t[n]=h*E+x*g+m*b-p*v,t[n+1]=m*E+x*v+p*g-h*b,t[n+2]=p*E+x*b+h*v-m*g,t[n+3]=x*E-h*g-m*v-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,c=t._z,u=t._order,h=Math.cos,m=Math.sin,p=h(a/2),x=h(o/2),g=h(c/2),v=m(a/2),b=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*x*g+p*b*E,this._y=p*b*g-v*x*E,this._z=p*x*E+v*b*g,this._w=p*x*g-v*b*E;break;case"YXZ":this._x=v*x*g+p*b*E,this._y=p*b*g-v*x*E,this._z=p*x*E-v*b*g,this._w=p*x*g+v*b*E;break;case"ZXY":this._x=v*x*g-p*b*E,this._y=p*b*g+v*x*E,this._z=p*x*E+v*b*g,this._w=p*x*g-v*b*E;break;case"ZYX":this._x=v*x*g-p*b*E,this._y=p*b*g+v*x*E,this._z=p*x*E-v*b*g,this._w=p*x*g+v*b*E;break;case"YZX":this._x=v*x*g+p*b*E,this._y=p*b*g+v*x*E,this._z=p*x*E-v*b*g,this._w=p*x*g-v*b*E;break;case"XZY":this._x=v*x*g-p*b*E,this._y=p*b*g-v*x*E,this._z=p*x*E+v*b*g,this._w=p*x*g+v*b*E;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],x=n[6],g=n[10],v=a+h+g;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(x-m)*b,this._y=(c-p)*b,this._z=(u-o)*b}else if(a>h&&a>g){const b=2*Math.sqrt(1+a-h-g);this._w=(x-m)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(c+p)/b}else if(h>g){const b=2*Math.sqrt(1+h-a-g);this._w=(c-p)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+g-a-h);this._w=(u-o)/b,this._x=(c+p)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,c=t._z,u=t._w,h=n._x,m=n._y,p=n._z,x=n._w;return this._x=a*x+u*h+o*p-c*m,this._y=o*x+u*m+c*h-a*p,this._z=c*x+u*p+a*m-o*h,this._w=u*x-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,c=t._z,u=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,n=Math.sin(n*p)/x,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,n=0,a=0){j.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(uv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(uv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=t.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,c=t.x,u=t.y,h=t.z,m=t.w,p=2*(u*o-h*a),x=2*(h*n-c*o),g=2*(c*a-u*n);return this.x=n+m*p+u*g-h*x,this.y=a+m*x+h*p-c*g,this.z=o+m*g+c*x-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,c=t.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return ed.copy(this).projectOnVector(t),this.sub(ed)}reflect(t){return this.sub(ed.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(be(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new j,uv=new ks;class _e{constructor(t,n,a,o,c,u,h,m,p){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p)}set(t,n,a,o,c,u,h,m,p){const x=this.elements;return x[0]=t,x[1]=o,x[2]=h,x[3]=n,x[4]=c,x[5]=m,x[6]=a,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],x=a[4],g=a[7],v=a[2],b=a[5],E=a[8],T=o[0],M=o[3],_=o[6],L=o[1],A=o[4],U=o[7],I=o[2],O=o[5],F=o[8];return c[0]=u*T+h*L+m*I,c[3]=u*M+h*A+m*O,c[6]=u*_+h*U+m*F,c[1]=p*T+x*L+g*I,c[4]=p*M+x*A+g*O,c[7]=p*_+x*U+g*F,c[2]=v*T+b*L+E*I,c[5]=v*M+b*A+E*O,c[8]=v*_+b*U+E*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return n*u*x-n*h*p-a*c*x+a*h*m+o*c*p-o*u*m}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=x*u-h*p,v=h*m-x*c,b=p*c-u*m,E=n*g+a*v+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(o*p-x*a)*T,t[2]=(h*a-o*u)*T,t[3]=v*T,t[4]=(x*n-o*m)*T,t[5]=(o*c-h*n)*T,t[6]=b*T,t[7]=(a*m-p*n)*T,t[8]=(u*n-a*c)*T,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+t,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(nd.makeScale(t,n)),this}rotate(t){return this.premultiply(nd.makeRotation(-t)),this}translate(t,n){return this.premultiply(nd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nd=new _e,fv=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hv=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function K2(){const s={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xe&&(o.r=Ca(o.r),o.g=Ca(o.g),o.b=Ca(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xe&&(o.r=Xr(o.r),o.g=Xr(o.g),o.b=Xr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===fs?Mu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return _l("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return _l("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Kr]:{primaries:t,whitePoint:a,transfer:Mu,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:a,transfer:Xe,toXYZ:fv,fromXYZ:hv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),s}const Pe=K2();function Ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let wr;class Q2{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{wr===void 0&&(wr=Tu("canvas")),wr.width=t.width,wr.height=t.height;const o=wr.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=wr}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Tu("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ca(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ca(n[a]/255)*255):n[a]=Ca(n[a]);return{data:n,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let J2=0;class qp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J2++}),this.uuid=eo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(id(o[u].image)):c.push(id(o[u]))}else c=id(o);a.url=c}return n||(t.images[this.uuid]=a),a}}function id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Q2.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let $2=0;const ad=new j;class jn extends Ws{constructor(t=jn.DEFAULT_IMAGE,n=jn.DEFAULT_MAPPING,a=Ta,o=Ta,c=Ei,u=Vs,h=Oi,m=qi,p=jn.DEFAULT_ANISOTROPY,x=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$2++}),this.uuid=eo(),this.name="",this.source=new qp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ad).x}get height(){return this.source.getSize(ad).y}get depth(){return this.source.getSize(ad).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){de(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){de(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==V_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qd:t.x=t.x-Math.floor(t.x);break;case Ta:t.x=t.x<0?0:1;break;case Jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qd:t.y=t.y-Math.floor(t.y);break;case Ta:t.y=t.y<0?0:1;break;case Jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=V_;jn.DEFAULT_ANISOTROPY=1;class qe{constructor(t=0,n=0,a=0,o=1){qe.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,c=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,c;const m=t.elements,p=m[0],x=m[4],g=m[8],v=m[1],b=m[5],E=m[9],T=m[2],M=m[6],_=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const A=(p+1)/2,U=(b+1)/2,I=(_+1)/2,O=(x+v)/4,F=(g+T)/4,X=(E+M)/4;return A>U&&A>I?A<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(A),o=O/a,c=F/a):U>I?U<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(U),a=O/o,c=X/o):I<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),a=F/c,o=X/c),this.set(a,o,c,n),this}let L=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(v-x)*(v-x));return Math.abs(L)<.001&&(L=1),this.x=(M-E)/L,this.y=(g-T)/L,this.z=(v-x)/L,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this.w=be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this.w=be(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(be(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class t3 extends Ws{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new qe(0,0,t,n),this.scissorTest=!1,this.viewport=new qe(0,0,t,n);const o={width:t,height:n,depth:a.depth},c=new jn(o);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new qp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends t3{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class J_ extends jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class e3 extends jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(t=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ni.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ni.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ni.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)t.isMesh===!0?t.getVertexPosition(u,Ni):Ni.fromBufferAttribute(c,u),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Hc.copy(a.boundingBox)),Hc.applyMatrix4(t.matrixWorld),this.union(Hc)}const o=t.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nl),Vc.subVectors(this.max,nl),Cr.subVectors(t.a,nl),Rr.subVectors(t.b,nl),Nr.subVectors(t.c,nl),is.subVectors(Rr,Cr),as.subVectors(Nr,Rr),Us.subVectors(Cr,Nr);let n=[0,-is.z,is.y,0,-as.z,as.y,0,-Us.z,Us.y,is.z,0,-is.x,as.z,0,-as.x,Us.z,0,-Us.x,-is.y,is.x,0,-as.y,as.x,0,-Us.y,Us.x,0];return!sd(n,Cr,Rr,Nr,Vc)||(n=[1,0,0,0,1,0,0,0,1],!sd(n,Cr,Rr,Nr,Vc))?!1:(Gc.crossVectors(is,as),n=[Gc.x,Gc.y,Gc.z],sd(n,Cr,Rr,Nr,Vc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ga),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ga=[new j,new j,new j,new j,new j,new j,new j,new j],Ni=new j,Hc=new no,Cr=new j,Rr=new j,Nr=new j,is=new j,as=new j,Us=new j,nl=new j,Vc=new j,Gc=new j,Os=new j;function sd(s,t,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Os.fromArray(s,c);const h=o.x*Math.abs(Os.x)+o.y*Math.abs(Os.y)+o.z*Math.abs(Os.z),m=t.dot(Os),p=n.dot(Os),x=a.dot(Os);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const n3=new no,il=new j,rd=new j;class Ou{constructor(t=new j,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):n3.setFromPoints(t).getCenter(a);let o=0;for(let c=0,u=t.length;c<u;c++)o=Math.max(o,a.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);const n=il.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(il,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(rd)),this.expandByPoint(il.copy(t.center).sub(rd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const va=new j,od=new j,kc=new j,ss=new j,ld=new j,jc=new j,cd=new j;class Yp{constructor(t=new j,n=new j(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,va)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=va.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(va.copy(this.origin).addScaledVector(this.direction,n),va.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){od.copy(t).add(n).multiplyScalar(.5),kc.copy(n).sub(t).normalize(),ss.copy(this.origin).sub(od);const c=t.distanceTo(n)*.5,u=-this.direction.dot(kc),h=ss.dot(this.direction),m=-ss.dot(kc),p=ss.lengthSq(),x=Math.abs(1-u*u);let g,v,b,E;if(x>0)if(g=u*m-h,v=u*h-m,E=c*x,g>=0)if(v>=-E)if(v<=E){const T=1/x;g*=T,v*=T,b=g*(g+u*v+2*h)+v*(u*g+v+2*m)+p}else v=c,g=Math.max(0,-(u*v+h)),b=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(u*v+h)),b=-g*g+v*(v+2*m)+p;else v<=-E?(g=Math.max(0,-(-u*c+h)),v=g>0?-c:Math.min(Math.max(-c,-m),c),b=-g*g+v*(v+2*m)+p):v<=E?(g=0,v=Math.min(Math.max(-c,-m),c),b=v*(v+2*m)+p):(g=Math.max(0,-(u*c+h)),v=g>0?c:Math.min(Math.max(-c,-m),c),b=-g*g+v*(v+2*m)+p);else v=u>0?-c:c,g=Math.max(0,-(u*v+h)),b=-g*g+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(od).addScaledVector(kc,v),b}intersectSphere(t,n){va.subVectors(t.center,this.origin);const a=va.dot(this.direction),o=va.dot(va)-a*a,c=t.radius*t.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,c,u,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,o=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,o=(t.min.x-v.x)*p),x>=0?(c=(t.min.y-v.y)*x,u=(t.max.y-v.y)*x):(c=(t.max.y-v.y)*x,u=(t.min.y-v.y)*x),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),g>=0?(h=(t.min.z-v.z)*g,m=(t.max.z-v.z)*g):(h=(t.max.z-v.z)*g,m=(t.min.z-v.z)*g),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,va)!==null}intersectTriangle(t,n,a,o,c){ld.subVectors(n,t),jc.subVectors(a,t),cd.crossVectors(ld,jc);let u=this.direction.dot(cd),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ss.subVectors(this.origin,t);const m=h*this.direction.dot(jc.crossVectors(ss,jc));if(m<0)return null;const p=h*this.direction.dot(ld.cross(ss));if(p<0||m+p>u)return null;const x=-h*ss.dot(cd);return x<0?null:this.at(x/u,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,n,a,o,c,u,h,m,p,x,g,v,b,E,T,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,c,u,h,m,p,x,g,v,b,E,T,M)}set(t,n,a,o,c,u,h,m,p,x,g,v,b,E,T,M){const _=this.elements;return _[0]=t,_[4]=n,_[8]=a,_[12]=o,_[1]=c,_[5]=u,_[9]=h,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=v,_[3]=b,_[7]=E,_[11]=T,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,o=1/Dr.setFromMatrixColumn(t,0).length(),c=1/Dr.setFromMatrixColumn(t,1).length(),u=1/Dr.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,c=t.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=u*x,b=u*g,E=h*x,T=h*g;n[0]=m*x,n[4]=-m*g,n[8]=p,n[1]=b+E*p,n[5]=v-T*p,n[9]=-h*m,n[2]=T-v*p,n[6]=E+b*p,n[10]=u*m}else if(t.order==="YXZ"){const v=m*x,b=m*g,E=p*x,T=p*g;n[0]=v+T*h,n[4]=E*h-b,n[8]=u*p,n[1]=u*g,n[5]=u*x,n[9]=-h,n[2]=b*h-E,n[6]=T+v*h,n[10]=u*m}else if(t.order==="ZXY"){const v=m*x,b=m*g,E=p*x,T=p*g;n[0]=v-T*h,n[4]=-u*g,n[8]=E+b*h,n[1]=b+E*h,n[5]=u*x,n[9]=T-v*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(t.order==="ZYX"){const v=u*x,b=u*g,E=h*x,T=h*g;n[0]=m*x,n[4]=E*p-b,n[8]=v*p+T,n[1]=m*g,n[5]=T*p+v,n[9]=b*p-E,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(t.order==="YZX"){const v=u*m,b=u*p,E=h*m,T=h*p;n[0]=m*x,n[4]=T-v*g,n[8]=E*g+b,n[1]=g,n[5]=u*x,n[9]=-h*x,n[2]=-p*x,n[6]=b*g+E,n[10]=v-T*g}else if(t.order==="XZY"){const v=u*m,b=u*p,E=h*m,T=h*p;n[0]=m*x,n[4]=-g,n[8]=p*x,n[1]=v*g+T,n[5]=u*x,n[9]=b*g-E,n[2]=E*g-b,n[6]=h*x,n[10]=T*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(i3,t,a3)}lookAt(t,n,a){const o=this.elements;return fi.subVectors(t,n),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),rs.crossVectors(a,fi),rs.lengthSq()===0&&(Math.abs(a.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),rs.crossVectors(a,fi)),rs.normalize(),Xc.crossVectors(fi,rs),o[0]=rs.x,o[4]=Xc.x,o[8]=fi.x,o[1]=rs.y,o[5]=Xc.y,o[9]=fi.y,o[2]=rs.z,o[6]=Xc.z,o[10]=fi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],x=a[1],g=a[5],v=a[9],b=a[13],E=a[2],T=a[6],M=a[10],_=a[14],L=a[3],A=a[7],U=a[11],I=a[15],O=o[0],F=o[4],X=o[8],D=o[12],R=o[1],G=o[5],Q=o[9],rt=o[13],mt=o[2],lt=o[6],H=o[10],q=o[14],Z=o[3],vt=o[7],bt=o[11],B=o[15];return c[0]=u*O+h*R+m*mt+p*Z,c[4]=u*F+h*G+m*lt+p*vt,c[8]=u*X+h*Q+m*H+p*bt,c[12]=u*D+h*rt+m*q+p*B,c[1]=x*O+g*R+v*mt+b*Z,c[5]=x*F+g*G+v*lt+b*vt,c[9]=x*X+g*Q+v*H+b*bt,c[13]=x*D+g*rt+v*q+b*B,c[2]=E*O+T*R+M*mt+_*Z,c[6]=E*F+T*G+M*lt+_*vt,c[10]=E*X+T*Q+M*H+_*bt,c[14]=E*D+T*rt+M*q+_*B,c[3]=L*O+A*R+U*mt+I*Z,c[7]=L*F+A*G+U*lt+I*vt,c[11]=L*X+A*Q+U*H+I*bt,c[15]=L*D+A*rt+U*q+I*B,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],c=t[12],u=t[1],h=t[5],m=t[9],p=t[13],x=t[2],g=t[6],v=t[10],b=t[14],E=t[3],T=t[7],M=t[11],_=t[15];return E*(+c*m*g-o*p*g-c*h*v+a*p*v+o*h*b-a*m*b)+T*(+n*m*b-n*p*v+c*u*v-o*u*b+o*p*x-c*m*x)+M*(+n*p*g-n*h*b-c*u*g+a*u*b+c*h*x-a*p*x)+_*(-o*h*x-n*m*g+n*h*v+o*u*g-a*u*v+a*m*x)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],c=t[3],u=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=t[9],v=t[10],b=t[11],E=t[12],T=t[13],M=t[14],_=t[15],L=g*M*p-T*v*p+T*m*b-h*M*b-g*m*_+h*v*_,A=E*v*p-x*M*p-E*m*b+u*M*b+x*m*_-u*v*_,U=x*T*p-E*g*p+E*h*b-u*T*b-x*h*_+u*g*_,I=E*g*m-x*T*m-E*h*v+u*T*v+x*h*M-u*g*M,O=n*L+a*A+o*U+c*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return t[0]=L*F,t[1]=(T*v*c-g*M*c-T*o*b+a*M*b+g*o*_-a*v*_)*F,t[2]=(h*M*c-T*m*c+T*o*p-a*M*p-h*o*_+a*m*_)*F,t[3]=(g*m*c-h*v*c-g*o*p+a*v*p+h*o*b-a*m*b)*F,t[4]=A*F,t[5]=(x*M*c-E*v*c+E*o*b-n*M*b-x*o*_+n*v*_)*F,t[6]=(E*m*c-u*M*c-E*o*p+n*M*p+u*o*_-n*m*_)*F,t[7]=(u*v*c-x*m*c+x*o*p-n*v*p-u*o*b+n*m*b)*F,t[8]=U*F,t[9]=(E*g*c-x*T*c-E*a*b+n*T*b+x*a*_-n*g*_)*F,t[10]=(u*T*c-E*h*c+E*a*p-n*T*p-u*a*_+n*h*_)*F,t[11]=(x*h*c-u*g*c-x*a*p+n*g*p+u*a*b-n*h*b)*F,t[12]=I*F,t[13]=(x*T*o-E*g*o+E*a*v-n*T*v-x*a*M+n*g*M)*F,t[14]=(E*h*o-u*T*o-E*a*m+n*T*m+u*a*M-n*h*M)*F,t[15]=(u*g*o-x*h*o+x*a*m-n*g*m-u*a*v+n*h*v)*F,this}scale(t){const n=this.elements,a=t.x,o=t.y,c=t.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=t.x,h=t.y,m=t.z,p=c*u,x=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,x*h+a,x*m-o*u,0,p*m-o*h,x*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,c,u){return this.set(1,a,c,0,t,1,u,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,x=u+u,g=h+h,v=c*p,b=c*x,E=c*g,T=u*x,M=u*g,_=h*g,L=m*p,A=m*x,U=m*g,I=a.x,O=a.y,F=a.z;return o[0]=(1-(T+_))*I,o[1]=(b+U)*I,o[2]=(E-A)*I,o[3]=0,o[4]=(b-U)*O,o[5]=(1-(v+_))*O,o[6]=(M+L)*O,o[7]=0,o[8]=(E+A)*F,o[9]=(M-L)*F,o[10]=(1-(v+T))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;let c=Dr.set(o[0],o[1],o[2]).length();const u=Dr.set(o[4],o[5],o[6]).length(),h=Dr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),t.x=o[12],t.y=o[13],t.z=o[14],Di.copy(this);const p=1/c,x=1/u,g=1/h;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=x,Di.elements[5]*=x,Di.elements[6]*=x,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,n.setFromRotationMatrix(Di),a.x=c,a.y=u,a.z=h,this}makePerspective(t,n,a,o,c,u,h=ki,m=!1){const p=this.elements,x=2*c/(n-t),g=2*c/(a-o),v=(n+t)/(n-t),b=(a+o)/(a-o);let E,T;if(m)E=c/(u-c),T=u*c/(u-c);else if(h===ki)E=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(h===Eu)E=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,a,o,c,u,h=ki,m=!1){const p=this.elements,x=2/(n-t),g=2/(a-o),v=-(n+t)/(n-t),b=-(a+o)/(a-o);let E,T;if(m)E=1/(u-c),T=u/(u-c);else if(h===ki)E=-2/(u-c),T=-(u+c)/(u-c);else if(h===Eu)E=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Dr=new j,Di=new en,i3=new j(0,0,0),a3=new j(1,1,1),rs=new j,Xc=new j,fi=new j,dv=new en,pv=new ks;class Yi{constructor(t=0,n=0,a=0,o=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],x=o[9],g=o[2],v=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return dv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dv,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return pv.setFromEuler(this),this.setFromQuaternion(pv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class $_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let s3=0;const mv=new j,Lr=new ks,_a=new en,Wc=new j,al=new j,r3=new j,o3=new ks,xv=new j(1,0,0),gv=new j(0,1,0),vv=new j(0,0,1),_v={type:"added"},l3={type:"removed"},Ur={type:"childadded",child:null},ud={type:"childremoved",child:null};class zn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:s3++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new j,n=new Yi,a=new ks,o=new j(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new en},normalMatrix:{value:new _e}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(t,n){return Lr.setFromAxisAngle(t,n),this.quaternion.premultiply(Lr),this}rotateX(t){return this.rotateOnAxis(xv,t)}rotateY(t){return this.rotateOnAxis(gv,t)}rotateZ(t){return this.rotateOnAxis(vv,t)}translateOnAxis(t,n){return mv.copy(t).applyQuaternion(this.quaternion),this.position.add(mv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(xv,t)}translateY(t){return this.translateOnAxis(gv,t)}translateZ(t){return this.translateOnAxis(vv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Wc.copy(t):Wc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(al,Wc,this.up):_a.lookAt(Wc,al,this.up),this.quaternion.setFromRotationMatrix(_a),o&&(_a.extractRotation(o.matrixWorld),Lr.setFromRotationMatrix(_a),this.quaternion.premultiply(Lr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ln("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_v),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):ln("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(l3),ud.child=t,this.dispatchEvent(ud),ud.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_v),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,t,r3),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(al,o3,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=u(t.geometries),m=u(t.materials),p=u(t.textures),x=u(t.images),g=u(t.shapes),v=u(t.skeletons),b=u(t.animations),E=u(t.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),x.length>0&&(a.images=x),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),b.length>0&&(a.animations=b),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}zn.DEFAULT_UP=new j(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new j,ya=new j,fd=new j,ba=new j,Or=new j,Pr=new j,yv=new j,hd=new j,dd=new j,pd=new j,md=new qe,xd=new qe,gd=new qe;class Ui{constructor(t=new j,n=new j,a=new j){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Li.subVectors(t,n),o.cross(Li);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,a,o,c){Li.subVectors(o,n),ya.subVectors(a,n),fd.subVectors(t,n);const u=Li.dot(Li),h=Li.dot(ya),m=Li.dot(fd),p=ya.dot(ya),x=ya.dot(fd),g=u*p-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,b=(p*m-h*x)*v,E=(u*x-h*m)*v;return c.set(1-b-E,E,b)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(t,n,a,o,c,u,h,m){return this.getBarycoord(t,n,a,o,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(u,ba.y),m.addScaledVector(h,ba.z),m)}static getInterpolatedAttribute(t,n,a,o,c,u){return md.setScalar(0),xd.setScalar(0),gd.setScalar(0),md.fromBufferAttribute(t,n),xd.fromBufferAttribute(t,a),gd.fromBufferAttribute(t,o),u.setScalar(0),u.addScaledVector(md,c.x),u.addScaledVector(xd,c.y),u.addScaledVector(gd,c.z),u}static isFrontFacing(t,n,a,o){return Li.subVectors(a,n),ya.subVectors(t,n),Li.cross(ya).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Li.cross(ya).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ui.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ui.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,c){return Ui.getInterpolation(t,this.a,this.b,this.c,n,a,o,c)}containsPoint(t){return Ui.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ui.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,c=this.c;let u,h;Or.subVectors(o,a),Pr.subVectors(c,a),hd.subVectors(t,a);const m=Or.dot(hd),p=Pr.dot(hd);if(m<=0&&p<=0)return n.copy(a);dd.subVectors(t,o);const x=Or.dot(dd),g=Pr.dot(dd);if(x>=0&&g<=x)return n.copy(o);const v=m*g-x*p;if(v<=0&&m>=0&&x<=0)return u=m/(m-x),n.copy(a).addScaledVector(Or,u);pd.subVectors(t,c);const b=Or.dot(pd),E=Pr.dot(pd);if(E>=0&&b<=E)return n.copy(c);const T=b*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(Pr,h);const M=x*E-b*g;if(M<=0&&g-x>=0&&b-E>=0)return yv.subVectors(c,o),h=(g-x)/(g-x+(b-E)),n.copy(o).addScaledVector(yv,h);const _=1/(M+T+v);return u=T*_,h=v*_,n.copy(a).addScaledVector(Or,u).addScaledVector(Pr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},qc={h:0,s:0,l:0};function vd(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class Se{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=Pe.workingColorSpace){return this.r=t,this.g=n,this.b=a,Pe.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=Pe.workingColorSpace){if(t=Y2(t,1),n=be(n,0,1),a=be(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=vd(u,c,t+1/3),this.g=vd(u,c,t),this.b=vd(u,c,t-1/3)}return Pe.colorSpaceToWorking(this,o),this}setStyle(t,n=Mi){function a(c){c!==void 0&&parseFloat(c)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:de("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Mi){const a=ty[t.toLowerCase()];return a!==void 0?this.setHex(a,n):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return Pe.workingToColorSpace(Hn.copy(this),t),Math.round(be(Hn.r*255,0,255))*65536+Math.round(be(Hn.g*255,0,255))*256+Math.round(be(Hn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Pe.workingColorSpace){Pe.workingToColorSpace(Hn.copy(this),n);const a=Hn.r,o=Hn.g,c=Hn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const x=(h+u)/2;if(h===u)m=0,p=0;else{const g=u-h;switch(p=x<=.5?g/(u+h):g/(2-u-h),u){case a:m=(o-c)/g+(o<c?6:0);break;case o:m=(c-a)/g+2;break;case c:m=(a-o)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,n=Pe.workingColorSpace){return Pe.workingToColorSpace(Hn.copy(this),n),t.r=Hn.r,t.g=Hn.g,t.b=Hn.b,t}getStyle(t=Mi){Pe.workingToColorSpace(Hn.copy(this),t);const n=Hn.r,a=Hn.g,o=Hn.b;return t!==Mi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(os),this.setHSL(os.h+t,os.s+n,os.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(os),t.getHSL(qc);const a=td(os.h,qc.h,n),o=td(os.s,qc.s,n),c=td(os.l,qc.l,n);return this.setHSL(a,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Se;Se.NAMES=ty;let c3=0;class qs extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c3++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=jr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Vd,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){de(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){de(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(a.blending=this.blending),this.side!==ps&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Hd&&(a.blendSrc=this.blendSrc),this.blendDst!==Vd&&(a.blendDst=this.blendDst),this.blendEquation!==Is&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(t.textures),u=o(t.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Wr extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new j,Yc=new wt;let u3=0;class Wi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u3++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=rv,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Yc.fromBufferAttribute(this,n),Yc.applyMatrix3(t),this.setXY(n,Yc.x,Yc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(t),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=el(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Qn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=el(n,this.array)),n}setX(t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=el(n,this.array)),n}setY(t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=el(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=el(n,this.array)),n}setW(t,n){return this.normalized&&(n=Qn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Qn(n,this.array),a=Qn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Qn(n,this.array),a=Qn(a,this.array),o=Qn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,c){return t*=this.itemSize,this.normalized&&(n=Qn(n,this.array),a=Qn(a,this.array),o=Qn(o,this.array),c=Qn(c,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rv&&(t.usage=this.usage),t}}class ey extends Wi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class ny extends Wi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class gn extends Wi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let f3=0;const Si=new en,_d=new zn,zr=new j,hi=new no,sl=new no,Rn=new j;class ei extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f3++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Q_(t)?ny:ey)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new _e().getNormalMatrix(t);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,n,a){return Si.makeTranslation(t,n,a),this.applyMatrix4(Si),this}scale(t,n,a){return Si.makeScale(t,n,a),this.applyMatrix4(Si),this}lookAt(t){return _d.lookAt(t),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=t.length;o<c;o++){const u=t[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ln("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];hi.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ln('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ou);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ln("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const a=this.boundingSphere.center;if(hi.setFromBufferAttribute(t),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];sl.setFromBufferAttribute(h),this.morphTargetsRelative?(Rn.addVectors(hi.min,sl.min),hi.expandByPoint(Rn),Rn.addVectors(hi.max,sl.max),hi.expandByPoint(Rn)):(hi.expandByPoint(sl.min),hi.expandByPoint(sl.max))}hi.getCenter(a);let o=0;for(let c=0,u=t.count;c<u;c++)Rn.fromBufferAttribute(t,c),o=Math.max(o,a.distanceToSquared(Rn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Rn.fromBufferAttribute(h,p),m&&(zr.fromBufferAttribute(t,p),Rn.add(zr)),o=Math.max(o,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&ln('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ln("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let X=0;X<a.count;X++)h[X]=new j,m[X]=new j;const p=new j,x=new j,g=new j,v=new wt,b=new wt,E=new wt,T=new j,M=new j;function _(X,D,R){p.fromBufferAttribute(a,X),x.fromBufferAttribute(a,D),g.fromBufferAttribute(a,R),v.fromBufferAttribute(c,X),b.fromBufferAttribute(c,D),E.fromBufferAttribute(c,R),x.sub(p),g.sub(p),b.sub(v),E.sub(v);const G=1/(b.x*E.y-E.x*b.y);isFinite(G)&&(T.copy(x).multiplyScalar(E.y).addScaledVector(g,-b.y).multiplyScalar(G),M.copy(g).multiplyScalar(b.x).addScaledVector(x,-E.x).multiplyScalar(G),h[X].add(T),h[D].add(T),h[R].add(T),m[X].add(M),m[D].add(M),m[R].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let X=0,D=L.length;X<D;++X){const R=L[X],G=R.start,Q=R.count;for(let rt=G,mt=G+Q;rt<mt;rt+=3)_(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const A=new j,U=new j,I=new j,O=new j;function F(X){I.fromBufferAttribute(o,X),O.copy(I);const D=h[X];A.copy(D),A.sub(I.multiplyScalar(I.dot(D))).normalize(),U.crossVectors(O,D);const G=U.dot(m[X])<0?-1:1;u.setXYZW(X,A.x,A.y,A.z,G)}for(let X=0,D=L.length;X<D;++X){const R=L[X],G=R.start,Q=R.count;for(let rt=G,mt=G+Q;rt<mt;rt+=3)F(t.getX(rt+0)),F(t.getX(rt+1)),F(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Wi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,b=a.count;v<b;v++)a.setXYZ(v,0,0,0);const o=new j,c=new j,u=new j,h=new j,m=new j,p=new j,x=new j,g=new j;if(t)for(let v=0,b=t.count;v<b;v+=3){const E=t.getX(v+0),T=t.getX(v+1),M=t.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),h.add(x),m.add(x),p.add(x),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,b=n.count;v<b;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),x.subVectors(u,c),g.subVectors(o,c),x.cross(g),a.setXYZ(v+0,x.x,x.y,x.z),a.setXYZ(v+1,x.x,x.y,x.z),a.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Rn.fromBufferAttribute(t,n),Rn.normalize(),t.setXYZ(n,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,g=h.normalized,v=new p.constructor(m.length*x);let b=0,E=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?b=m[T]*h.data.stride+h.offset:b=m[T]*x;for(let _=0;_<x;_++)v[E++]=p[b++]}return new Wi(v,x,g)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ei,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const v=p[x],b=t(v,a);m.push(b)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,v=p.length;g<v;g++){const b=p[g];x.push(b.toJSON(t.data))}x.length>0&&(o[m]=x,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(n))}const c=t.morphAttributes;for(const p in c){const x=[],g=c[p];for(let v=0,b=g.length;v<b;v++)x.push(g[v].clone(n));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,x=u.length;p<x;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bv=new en,Ps=new Yp,Zc=new Ou,Sv=new j,Kc=new j,Qc=new j,Jc=new j,yd=new j,$c=new j,Mv=new j,tu=new j;class Nn extends zn{constructor(t=new ei,n=new Wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){$c.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(yd.fromBufferAttribute(g,t),u?$c.addScaledVector(yd,x):$c.addScaledVector(yd.sub(n),x))}n.add($c)}return n}raycast(t,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Zc.copy(a.boundingSphere),Zc.applyMatrix4(c),Ps.copy(t.ray).recast(t.near),!(Zc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Zc,Sv)===null||Ps.origin.distanceToSquared(Sv)>(t.far-t.near)**2))&&(bv.copy(c).invert(),Ps.copy(t.ray).applyMatrix4(bv),!(a.boundingBox!==null&&Ps.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ps)))}_computeIntersections(t,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const M=v[E],_=u[M.materialIndex],L=Math.max(M.start,b.start),A=Math.min(h.count,Math.min(M.start+M.count,b.start+b.count));for(let U=L,I=A;U<I;U+=3){const O=h.getX(U),F=h.getX(U+1),X=h.getX(U+2);o=eu(this,_,t,a,p,x,g,O,F,X),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,b.start),T=Math.min(h.count,b.start+b.count);for(let M=E,_=T;M<_;M+=3){const L=h.getX(M),A=h.getX(M+1),U=h.getX(M+2);o=eu(this,u,t,a,p,x,g,L,A,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,T=v.length;E<T;E++){const M=v[E],_=u[M.materialIndex],L=Math.max(M.start,b.start),A=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let U=L,I=A;U<I;U+=3){const O=U,F=U+1,X=U+2;o=eu(this,_,t,a,p,x,g,O,F,X),o&&(o.faceIndex=Math.floor(U/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,b.start),T=Math.min(m.count,b.start+b.count);for(let M=E,_=T;M<_;M+=3){const L=M,A=M+1,U=M+2;o=eu(this,u,t,a,p,x,g,L,A,U),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function h3(s,t,n,a,o,c,u,h){let m;if(t.side===ti?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,t.side===ps,h),m===null)return null;tu.copy(h),tu.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(tu);return p<n.near||p>n.far?null:{distance:p,point:tu.clone(),object:s}}function eu(s,t,n,a,o,c,u,h,m,p){s.getVertexPosition(h,Kc),s.getVertexPosition(m,Qc),s.getVertexPosition(p,Jc);const x=h3(s,t,n,a,Kc,Qc,Jc,Mv);if(x){const g=new j;Ui.getBarycoord(Mv,Kc,Qc,Jc,g),o&&(x.uv=Ui.getInterpolatedAttribute(o,h,m,p,g,new wt)),c&&(x.uv1=Ui.getInterpolatedAttribute(c,h,m,p,g,new wt)),u&&(x.normal=Ui.getInterpolatedAttribute(u,h,m,p,g,new j),x.normal.dot(a.direction)>0&&x.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new j,materialIndex:0};Ui.getNormal(Kc,Qc,Jc,v.normal),x.face=v,x.barycoord=g}return x}class io extends ei{constructor(t=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],x=[],g=[];let v=0,b=0;E("z","y","x",-1,-1,a,n,t,u,c,0),E("z","y","x",1,-1,a,n,-t,u,c,1),E("x","z","y",1,1,t,a,n,o,u,2),E("x","z","y",1,-1,t,a,-n,o,u,3),E("x","y","z",1,-1,t,n,a,o,c,4),E("x","y","z",-1,-1,t,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(g,2));function E(T,M,_,L,A,U,I,O,F,X,D){const R=U/F,G=I/X,Q=U/2,rt=I/2,mt=O/2,lt=F+1,H=X+1;let q=0,Z=0;const vt=new j;for(let bt=0;bt<H;bt++){const B=bt*G-rt;for(let tt=0;tt<lt;tt++){const gt=tt*R-Q;vt[T]=gt*L,vt[M]=B*A,vt[_]=mt,p.push(vt.x,vt.y,vt.z),vt[T]=0,vt[M]=0,vt[_]=O>0?1:-1,x.push(vt.x,vt.y,vt.z),g.push(tt/F),g.push(1-bt/X),q+=1}}for(let bt=0;bt<X;bt++)for(let B=0;B<F;B++){const tt=v+B+lt*bt,gt=v+B+lt*(bt+1),Ct=v+(B+1)+lt*(bt+1),kt=v+(B+1)+lt*bt;m.push(tt,gt,kt),m.push(gt,Ct,kt),Z+=6}h.addGroup(b,Z,D),b+=Z,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qr(s){const t={};for(const n in s){t[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Gn(s){const t={};for(let n=0;n<s.length;n++){const a=Qr(s[n]);for(const o in a)t[o]=a[o]}return t}function d3(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function iy(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const Au={clone:Qr,merge:Gn};var p3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kn extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p3,this.fragmentShader=m3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qr(t.uniforms),this.uniformsGroups=d3(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class ay extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new j,Ev=new wt,Tv=new wt;class $n extends ay{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=wp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wp*2*Math.atan(Math.tan(gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,n){return this.getViewBounds(t,Ev,Tv),n.subVectors(Tv,Ev)}setViewOffset(t,n,a,o,c,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(gu*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,Fr=1;class x3 extends zn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(Br,Fr,t,n);o.layers=this.layers,this.add(o);const c=new $n(Br,Fr,t,n);c.layers=this.layers,this.add(c);const u=new $n(Br,Fr,t,n);u.layers=this.layers,this.add(u);const h=new $n(Br,Fr,t,n);h.layers=this.layers,this.add(h);const m=new $n(Br,Fr,t,n);m.layers=this.layers,this.add(m);const p=new $n(Br,Fr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(t===ki)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Eu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,x]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,c),t.setRenderTarget(a,1,o),t.render(n,u),t.setRenderTarget(a,2,o),t.render(n,h),t.setRenderTarget(a,3,o),t.render(n,m),t.setRenderTarget(a,4,o),t.render(n,p),a.texture.generateMipmaps=T,t.setRenderTarget(a,5,o),t.render(n,x),t.setRenderTarget(g,v,b),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class sy extends jn{constructor(t=[],n=Yr,a,o,c,u,h,m,p,x){super(t,n,a,o,c,u,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class g3 extends zi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new sy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new io(5,5,5),c=new kn({name:"CubemapFromEquirect",uniforms:Qr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:ji});c.uniforms.tEquirect.value=n;const u=new Nn(o,c),h=n.minFilter;return n.minFilter===Vs&&(n.minFilter=Ei),new x3(1,10,this).update(t,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const c=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,o);t.setRenderTarget(c)}}class Vr extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const v3={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const T of t.hand.values()){const M=n.getJointPose(T,a),_=this._getHandJoint(p,T);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=x.position.distanceTo(g.position),b=.02,E=.005;p.inputState.pinching&&v>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(v3)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Vr;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Zp{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(t),this.density=n}clone(){return new Zp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ry extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _3 extends jn{constructor(t=null,n=1,a=1,o,c,u,h,m,p=di,x=di,g,v){super(null,u,h,m,p,x,o,c,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sd=new j,y3=new j,b3=new _e;class us{constructor(t=new j(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Sd.subVectors(a,n).cross(y3.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Sd),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(a,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||b3.getNormalMatrix(t),o=this.coplanarPoint(Sd).applyMatrix4(t),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new Ou,S3=new wt(.5,.5),nu=new j;class Kp{constructor(t=new us,n=new us,a=new us,o=new us,c=new us,u=new us){this.planes=[t,n,a,o,c,u]}set(t,n,a,o,c,u){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ki,a=!1){const o=this.planes,c=t.elements,u=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],v=c[6],b=c[7],E=c[8],T=c[9],M=c[10],_=c[11],L=c[12],A=c[13],U=c[14],I=c[15];if(o[0].setComponents(p-u,b-x,_-E,I-L).normalize(),o[1].setComponents(p+u,b+x,_+E,I+L).normalize(),o[2].setComponents(p+h,b+g,_+T,I+A).normalize(),o[3].setComponents(p-h,b-g,_-T,I-A).normalize(),a)o[4].setComponents(m,v,M,U).normalize(),o[5].setComponents(p-m,b-v,_-M,I-U).normalize();else if(o[4].setComponents(p-m,b-v,_-M,I-U).normalize(),n===ki)o[5].setComponents(p+m,b+v,_+M,I+U).normalize();else if(n===Eu)o[5].setComponents(m,v,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(t){zs.center.set(0,0,0);const n=S3.distanceTo(t.center);return zs.radius=.7071067811865476+n,zs.applyMatrix4(t.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(nu.x=o.normal.x>0?t.max.x:t.min.x,nu.y=o.normal.y>0?t.max.y:t.min.y,nu.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(nu)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oy extends qs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wu=new j,Cu=new j,Av=new en,rl=new Yp,iu=new Ou,Md=new j,wv=new j;class M3 extends zn{constructor(t=new ei,n=new oy){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)wu.fromBufferAttribute(n,o-1),Cu.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=wu.distanceTo(Cu);t.setAttribute("lineDistance",new gn(a,1))}else de("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,c=t.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),iu.copy(a.boundingSphere),iu.applyMatrix4(o),iu.radius+=c,t.ray.intersectsSphere(iu)===!1)return;Av.copy(o).invert(),rl.copy(t.ray).applyMatrix4(Av);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=a.index,v=a.attributes.position;if(x!==null){const b=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let T=b,M=E-1;T<M;T+=p){const _=x.getX(T),L=x.getX(T+1),A=au(this,t,rl,m,_,L,T);A&&n.push(A)}if(this.isLineLoop){const T=x.getX(E-1),M=x.getX(b),_=au(this,t,rl,m,T,M,E-1);_&&n.push(_)}}else{const b=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let T=b,M=E-1;T<M;T+=p){const _=au(this,t,rl,m,T,T+1,T);_&&n.push(_)}if(this.isLineLoop){const T=au(this,t,rl,m,E-1,b,E-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function au(s,t,n,a,o,c,u){const h=s.geometry.attributes.position;if(wu.fromBufferAttribute(h,o),Cu.fromBufferAttribute(h,c),n.distanceSqToSegment(wu,Cu,Md,wv)>a)return;Md.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Md);if(!(p<t.near||p>t.far))return{distance:p,point:wv.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Cv=new j,Rv=new j;class E3 extends M3{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Cv.fromBufferAttribute(n,o),Rv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Cv.distanceTo(Rv);t.setAttribute("lineDistance",new gn(a,1))}else de("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ly extends jn{constructor(t,n,a=Gs,o,c,u,h=di,m=di,p,x=gl,g=1){if(x!==gl&&x!==vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,o,c,u,h,m,x,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cy extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Qp extends ei{constructor(t=[],n=[],a=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:a,detail:o};const c=[],u=[];h(o),p(a),x(),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(c.slice(),3)),this.setAttribute("uv",new gn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const A=new j,U=new j,I=new j;for(let O=0;O<n.length;O+=3)b(n[O+0],A),b(n[O+1],U),b(n[O+2],I),m(A,U,I,L)}function m(L,A,U,I){const O=I+1,F=[];for(let X=0;X<=O;X++){F[X]=[];const D=L.clone().lerp(U,X/O),R=A.clone().lerp(U,X/O),G=O-X;for(let Q=0;Q<=G;Q++)Q===0&&X===O?F[X][Q]=D:F[X][Q]=D.clone().lerp(R,Q/G)}for(let X=0;X<O;X++)for(let D=0;D<2*(O-X)-1;D++){const R=Math.floor(D/2);D%2===0?(v(F[X][R+1]),v(F[X+1][R]),v(F[X][R])):(v(F[X][R+1]),v(F[X+1][R+1]),v(F[X+1][R]))}}function p(L){const A=new j;for(let U=0;U<c.length;U+=3)A.x=c[U+0],A.y=c[U+1],A.z=c[U+2],A.normalize().multiplyScalar(L),c[U+0]=A.x,c[U+1]=A.y,c[U+2]=A.z}function x(){const L=new j;for(let A=0;A<c.length;A+=3){L.x=c[A+0],L.y=c[A+1],L.z=c[A+2];const U=M(L)/2/Math.PI+.5,I=_(L)/Math.PI+.5;u.push(U,1-I)}E(),g()}function g(){for(let L=0;L<u.length;L+=6){const A=u[L+0],U=u[L+2],I=u[L+4],O=Math.max(A,U,I),F=Math.min(A,U,I);O>.9&&F<.1&&(A<.2&&(u[L+0]+=1),U<.2&&(u[L+2]+=1),I<.2&&(u[L+4]+=1))}}function v(L){c.push(L.x,L.y,L.z)}function b(L,A){const U=L*3;A.x=t[U+0],A.y=t[U+1],A.z=t[U+2]}function E(){const L=new j,A=new j,U=new j,I=new j,O=new wt,F=new wt,X=new wt;for(let D=0,R=0;D<c.length;D+=9,R+=6){L.set(c[D+0],c[D+1],c[D+2]),A.set(c[D+3],c[D+4],c[D+5]),U.set(c[D+6],c[D+7],c[D+8]),O.set(u[R+0],u[R+1]),F.set(u[R+2],u[R+3]),X.set(u[R+4],u[R+5]),I.copy(L).add(A).add(U).divideScalar(3);const G=M(I);T(O,R+0,L,G),T(F,R+2,A,G),T(X,R+4,U,G)}}function T(L,A,U,I){I<0&&L.x===1&&(u[A]=L.x-1),U.x===0&&U.z===0&&(u[A]=I/2/Math.PI+.5)}function M(L){return Math.atan2(L.z,-L.x)}function _(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qp(t.vertices,t.indices,t.radius,t.details)}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=t;u++)a=this.getPoint(u/t),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=t*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=a[o]-u,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,a[o]===u)return o/(c-1);const x=a[o],v=a[o+1]-x,b=(u-x)/v;return(o+b)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=n||(u.isVector2?new wt:new j);return m.copy(h).sub(u).normalize(),m}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new j,o=[],c=[],u=[],h=new j,m=new en;for(let b=0;b<=t;b++){const E=b/t;o[b]=this.getTangentAt(E,new j)}c[0]=new j,u[0]=new j;let p=Number.MAX_VALUE;const x=Math.abs(o[0].x),g=Math.abs(o[0].y),v=Math.abs(o[0].z);x<=p&&(p=x,a.set(1,0,0)),g<=p&&(p=g,a.set(0,1,0)),v<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let b=1;b<=t;b++){if(c[b]=c[b-1].clone(),u[b]=u[b-1].clone(),h.crossVectors(o[b-1],o[b]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(be(o[b-1].dot(o[b]),-1,1));c[b].applyMatrix4(m.makeRotationAxis(h,E))}u[b].crossVectors(o[b],c[b])}if(n===!0){let b=Math.acos(be(c[0].dot(c[t]),-1,1));b/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(b=-b);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],b*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jp extends Ki{constructor(t=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new wt){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const x=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=m-this.aX,b=p-this.aY;m=v*x-b*g+this.aX,p=v*g+b*x+this.aY}return a.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class T3 extends Jp{constructor(t,n,a,o,c,u){super(t,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function $p(){let s=0,t=0,n=0,a=0;function o(c,u,h,m){s=c,t=h,n=-3*c+3*u-2*h-m,a=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,p){o(u,h,p*(h-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,p,x,g){let v=(u-c)/p-(h-c)/(p+x)+(h-u)/x,b=(h-u)/x-(m-u)/(x+g)+(m-h)/g;v*=x,b*=x,o(u,h,v,b)},calc:function(c){const u=c*c,h=u*c;return s+t*c+n*u+a*h}}}const su=new j,Ed=new $p,Td=new $p,Ad=new $p;class A3 extends Ki{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new j){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*t;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,x;this.closed||h>0?p=o[(h-1)%c]:(su.subVectors(o[0],o[1]).add(o[0]),p=su);const g=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?x=o[(h+2)%c]:(su.subVectors(o[c-1],o[c-2]).add(o[c-1]),x=su),this.curveType==="centripetal"||this.curveType==="chordal"){const b=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),b),T=Math.pow(g.distanceToSquared(v),b),M=Math.pow(v.distanceToSquared(x),b);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),Ed.initNonuniformCatmullRom(p.x,g.x,v.x,x.x,E,T,M),Td.initNonuniformCatmullRom(p.y,g.y,v.y,x.y,E,T,M),Ad.initNonuniformCatmullRom(p.z,g.z,v.z,x.z,E,T,M)}else this.curveType==="catmullrom"&&(Ed.initCatmullRom(p.x,g.x,v.x,x.x,this.tension),Td.initCatmullRom(p.y,g.y,v.y,x.y,this.tension),Ad.initCatmullRom(p.z,g.z,v.z,x.z,this.tension));return a.set(Ed.calc(m),Td.calc(m),Ad.calc(m)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new j().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nv(s,t,n,a,o){const c=(a-t)*.5,u=(o-n)*.5,h=s*s,m=s*h;return(2*n-2*a+c+u)*m+(-3*n+3*a-2*c-u)*h+c*s+n}function w3(s,t){const n=1-s;return n*n*t}function C3(s,t){return 2*(1-s)*s*t}function R3(s,t){return s*s*t}function fl(s,t,n,a){return w3(s,t)+C3(s,n)+R3(s,a)}function N3(s,t){const n=1-s;return n*n*n*t}function D3(s,t){const n=1-s;return 3*n*n*s*t}function L3(s,t){return 3*(1-s)*s*s*t}function U3(s,t){return s*s*s*t}function hl(s,t,n,a,o){return N3(s,t)+D3(s,n)+L3(s,a)+U3(s,o)}class uy extends Ki{constructor(t=new wt,n=new wt,a=new wt,o=new wt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new wt){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(hl(t,o.x,c.x,u.x,h.x),hl(t,o.y,c.y,u.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class O3 extends Ki{constructor(t=new j,n=new j,a=new j,o=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new j){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(hl(t,o.x,c.x,u.x,h.x),hl(t,o.y,c.y,u.y,h.y),hl(t,o.z,c.z,u.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fy extends Ki{constructor(t=new wt,n=new wt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new wt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new wt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class P3 extends Ki{constructor(t=new j,n=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new j){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new j){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hy extends Ki{constructor(t=new wt,n=new wt,a=new wt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new wt){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(fl(t,o.x,c.x,u.x),fl(t,o.y,c.y,u.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class z3 extends Ki{constructor(t=new j,n=new j,a=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new j){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(fl(t,o.x,c.x,u.x),fl(t,o.y,c.y,u.y),fl(t,o.z,c.z,u.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dy extends Ki{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new wt){const a=n,o=this.points,c=(o.length-1)*t,u=Math.floor(c),h=c-u,m=o[u===0?u:u-1],p=o[u],x=o[u>o.length-2?o.length-1:u+1],g=o[u>o.length-3?o.length-1:u+2];return a.set(Nv(h,m.x,p.x,x.x,g.x),Nv(h,m.y,p.y,x.y,g.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new wt().fromArray(o))}return this}}var Cp=Object.freeze({__proto__:null,ArcCurve:T3,CatmullRomCurve3:A3,CubicBezierCurve:uy,CubicBezierCurve3:O3,EllipseCurve:Jp,LineCurve:fy,LineCurve3:P3,QuadraticBezierCurve:hy,QuadraticBezierCurve3:z3,SplineCurve:dy});class B3 extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cp[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-u/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],h=u.isEllipseCurve?t*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?t*u.points.length:t,m=u.getPoints(h);for(let p=0;p<m.length;p++){const x=m[p];a&&a.equals(x)||(n.push(x),a=x)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new Cp[o.type]().fromJSON(o))}return this}}class Dv extends B3{constructor(t){super(),this.type="Path",this.currentPoint=new wt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new fy(this.currentPoint.clone(),new wt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const c=new hy(this.currentPoint.clone(),new wt(t,n),new wt(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,c,u){const h=new uy(this.currentPoint.clone(),new wt(t,n),new wt(a,o),new wt(c,u));return this.curves.push(h),this.currentPoint.set(c,u),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new dy(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,c,u){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,a,o,c,u),this}absarc(t,n,a,o,c,u){return this.absellipse(t,n,a,a,o,c,u),this}ellipse(t,n,a,o,c,u,h,m){const p=this.currentPoint.x,x=this.currentPoint.y;return this.absellipse(t+p,n+x,a,o,c,u,h,m),this}absellipse(t,n,a,o,c,u,h,m){const p=new Jp(t,n,a,o,c,u,h,m);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const x=p.getPoint(1);return this.currentPoint.copy(x),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class vu extends Dv{constructor(t){super(t),this.uuid=eo(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new Dv().fromJSON(o))}return this}}function F3(s,t,n=2){const a=t&&t.length,o=a?t[0]*n:s.length;let c=py(s,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let h,m,p;if(a&&(c=k3(s,t,c,n)),s.length>80*n){h=s[0],m=s[1];let x=h,g=m;for(let v=n;v<o;v+=n){const b=s[v],E=s[v+1];b<h&&(h=b),E<m&&(m=E),b>x&&(x=b),E>g&&(g=E)}p=Math.max(x-h,g-m),p=p!==0?32767/p:0}return yl(c,u,n,h,m,p,0),u}function py(s,t,n,a,o){let c;if(o===tE(s,t,n,a)>0)for(let u=t;u<n;u+=a)c=Lv(u/a|0,s[u],s[u+1],c);else for(let u=n-a;u>=t;u-=a)c=Lv(u/a|0,s[u],s[u+1],c);return c&&Jr(c,c.next)&&(Sl(c),c=c.next),c}function js(s,t){if(!s)return s;t||(t=s);let n=s,a;do if(a=!1,!n.steiner&&(Jr(n,n.next)||an(n.prev,n,n.next)===0)){if(Sl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function yl(s,t,n,a,o,c,u){if(!s)return;!u&&c&&Y3(s,a,o,c);let h=s;for(;s.prev!==s.next;){const m=s.prev,p=s.next;if(c?H3(s,a,o,c):I3(s)){t.push(m.i,s.i,p.i),Sl(s),s=p.next,h=p.next;continue}if(s=p,s===h){u?u===1?(s=V3(js(s),t),yl(s,t,n,a,o,c,2)):u===2&&G3(s,t,n,a,o,c):yl(js(s),t,n,a,o,c,1);break}}}function I3(s){const t=s.prev,n=s,a=s.next;if(an(t,n,a)>=0)return!1;const o=t.x,c=n.x,u=a.x,h=t.y,m=n.y,p=a.y,x=Math.min(o,c,u),g=Math.min(h,m,p),v=Math.max(o,c,u),b=Math.max(h,m,p);let E=a.next;for(;E!==t;){if(E.x>=x&&E.x<=v&&E.y>=g&&E.y<=b&&cl(o,h,c,m,u,p,E.x,E.y)&&an(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function H3(s,t,n,a){const o=s.prev,c=s,u=s.next;if(an(o,c,u)>=0)return!1;const h=o.x,m=c.x,p=u.x,x=o.y,g=c.y,v=u.y,b=Math.min(h,m,p),E=Math.min(x,g,v),T=Math.max(h,m,p),M=Math.max(x,g,v),_=Rp(b,E,t,n,a),L=Rp(T,M,t,n,a);let A=s.prevZ,U=s.nextZ;for(;A&&A.z>=_&&U&&U.z<=L;){if(A.x>=b&&A.x<=T&&A.y>=E&&A.y<=M&&A!==o&&A!==u&&cl(h,x,m,g,p,v,A.x,A.y)&&an(A.prev,A,A.next)>=0||(A=A.prevZ,U.x>=b&&U.x<=T&&U.y>=E&&U.y<=M&&U!==o&&U!==u&&cl(h,x,m,g,p,v,U.x,U.y)&&an(U.prev,U,U.next)>=0))return!1;U=U.nextZ}for(;A&&A.z>=_;){if(A.x>=b&&A.x<=T&&A.y>=E&&A.y<=M&&A!==o&&A!==u&&cl(h,x,m,g,p,v,A.x,A.y)&&an(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;U&&U.z<=L;){if(U.x>=b&&U.x<=T&&U.y>=E&&U.y<=M&&U!==o&&U!==u&&cl(h,x,m,g,p,v,U.x,U.y)&&an(U.prev,U,U.next)>=0)return!1;U=U.nextZ}return!0}function V3(s,t){let n=s;do{const a=n.prev,o=n.next.next;!Jr(a,o)&&xy(a,n,n.next,o)&&bl(a,o)&&bl(o,a)&&(t.push(a.i,n.i,o.i),Sl(n),Sl(n.next),n=s=o),n=n.next}while(n!==s);return js(n)}function G3(s,t,n,a,o,c){let u=s;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&Q3(u,h)){let m=gy(u,h);u=js(u,u.next),m=js(m,m.next),yl(u,t,n,a,o,c,0),yl(m,t,n,a,o,c,0);return}h=h.next}u=u.next}while(u!==s)}function k3(s,t,n,a){const o=[];for(let c=0,u=t.length;c<u;c++){const h=t[c]*a,m=c<u-1?t[c+1]*a:s.length,p=py(s,h,m,a,!1);p===p.next&&(p.steiner=!0),o.push(K3(p))}o.sort(j3);for(let c=0;c<o.length;c++)n=X3(o[c],n);return n}function j3(s,t){let n=s.x-t.x;if(n===0&&(n=s.y-t.y,n===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function X3(s,t){const n=W3(s,t);if(!n)return t;const a=gy(n,s);return js(a,a.next),js(n,n.next)}function W3(s,t){let n=t;const a=s.x,o=s.y;let c=-1/0,u;if(Jr(s,n))return n;do{if(Jr(s,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const g=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(g<=a&&g>c&&(c=g,u=n.x<n.next.x?n:n.next,g===a))return u}n=n.next}while(n!==t);if(!u)return null;const h=u,m=u.x,p=u.y;let x=1/0;n=u;do{if(a>=n.x&&n.x>=m&&a!==n.x&&my(o<p?a:c,o,m,p,o<p?c:a,o,n.x,n.y)){const g=Math.abs(o-n.y)/(a-n.x);bl(n,s)&&(g<x||g===x&&(n.x>u.x||n.x===u.x&&q3(u,n)))&&(u=n,x=g)}n=n.next}while(n!==h);return u}function q3(s,t){return an(s.prev,s,t.prev)<0&&an(t.next,s,s.next)<0}function Y3(s,t,n,a){let o=s;do o.z===0&&(o.z=Rp(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,Z3(o)}function Z3(s){let t,n=1;do{let a=s,o;s=null;let c=null;for(t=0;a;){t++;let u=a,h=0;for(let p=0;p<n&&(h++,u=u.nextZ,!!u);p++);let m=n;for(;h>0||m>0&&u;)h!==0&&(m===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,h--):(o=u,u=u.nextZ,m--),c?c.nextZ=o:s=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(t>1);return s}function Rp(s,t,n,a,o){return s=(s-n)*o|0,t=(t-a)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function K3(s){let t=s,n=s;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==s);return n}function my(s,t,n,a,o,c,u,h){return(o-u)*(t-h)>=(s-u)*(c-h)&&(s-u)*(a-h)>=(n-u)*(t-h)&&(n-u)*(c-h)>=(o-u)*(a-h)}function cl(s,t,n,a,o,c,u,h){return!(s===u&&t===h)&&my(s,t,n,a,o,c,u,h)}function Q3(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!J3(s,t)&&(bl(s,t)&&bl(t,s)&&$3(s,t)&&(an(s.prev,s,t.prev)||an(s,t.prev,t))||Jr(s,t)&&an(s.prev,s,s.next)>0&&an(t.prev,t,t.next)>0)}function an(s,t,n){return(t.y-s.y)*(n.x-t.x)-(t.x-s.x)*(n.y-t.y)}function Jr(s,t){return s.x===t.x&&s.y===t.y}function xy(s,t,n,a){const o=ou(an(s,t,n)),c=ou(an(s,t,a)),u=ou(an(n,a,s)),h=ou(an(n,a,t));return!!(o!==c&&u!==h||o===0&&ru(s,n,t)||c===0&&ru(s,a,t)||u===0&&ru(n,s,a)||h===0&&ru(n,t,a))}function ru(s,t,n){return t.x<=Math.max(s.x,n.x)&&t.x>=Math.min(s.x,n.x)&&t.y<=Math.max(s.y,n.y)&&t.y>=Math.min(s.y,n.y)}function ou(s){return s>0?1:s<0?-1:0}function J3(s,t){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==t.i&&n.next.i!==t.i&&xy(n,n.next,s,t))return!0;n=n.next}while(n!==s);return!1}function bl(s,t){return an(s.prev,s,s.next)<0?an(s,t,s.next)>=0&&an(s,s.prev,t)>=0:an(s,t,s.prev)<0||an(s,s.next,t)<0}function $3(s,t){let n=s,a=!1;const o=(s.x+t.x)/2,c=(s.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==s);return a}function gy(s,t){const n=Np(s.i,s.x,s.y),a=Np(t.i,t.x,t.y),o=s.next,c=t.prev;return s.next=t,t.prev=s,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function Lv(s,t,n,a){const o=Np(s,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function Sl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Np(s,t,n){return{i:s,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tE(s,t,n,a){let o=0;for(let c=t,u=n-a;c<n;c+=a)o+=(s[u]-s[c])*(s[c+1]+s[u+1]),u=c;return o}class eE{static triangulate(t,n,a=2){return F3(t,n,a)}}class Gr{static area(t){const n=t.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=t[o].x*t[c].y-t[c].x*t[o].y;return a*.5}static isClockWise(t){return Gr.area(t)<0}static triangulateShape(t,n){const a=[],o=[],c=[];Uv(t),Ov(a,t);let u=t.length;n.forEach(Uv);for(let m=0;m<n.length;m++)o.push(u),u+=n[m].length,Ov(a,n[m]);const h=eE.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function Uv(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ov(s,t){for(let n=0;n<t.length;n++)s.push(t[n].x),s.push(t[n].y)}class dl extends ei{constructor(t=new vu([new wt(.5,.5),new wt(-.5,.5),new wt(-.5,-.5),new wt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];u(p)}this.setAttribute("position",new gn(o,3)),this.setAttribute("uv",new gn(c,2)),this.computeVertexNormals();function u(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,x=n.steps!==void 0?n.steps:1,g=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,b=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:b-.1,T=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const _=n.extrudePath,L=n.UVGenerator!==void 0?n.UVGenerator:nE;let A,U=!1,I,O,F,X;_&&(A=_.getSpacedPoints(x),U=!0,v=!1,I=_.computeFrenetFrames(x,!1),O=new j,F=new j,X=new j),v||(M=0,b=0,E=0,T=0);const D=h.extractPoints(p);let R=D.shape;const G=D.holes;if(!Gr.isClockWise(R)){R=R.reverse();for(let St=0,z=G.length;St<z;St++){const Tt=G[St];Gr.isClockWise(Tt)&&(G[St]=Tt.reverse())}}function rt(St){const Tt=10000000000000001e-36;let Dt=St[0];for(let Ut=1;Ut<=St.length;Ut++){const Rt=Ut%St.length,qt=St[Rt],Bt=qt.x-Dt.x,Xt=qt.y-Dt.y,P=Bt*Bt+Xt*Xt,w=Math.max(Math.abs(qt.x),Math.abs(qt.y),Math.abs(Dt.x),Math.abs(Dt.y)),$=Tt*w*w;if(P<=$){St.splice(Rt,1),Ut--;continue}Dt=qt}}rt(R),G.forEach(rt);const mt=G.length,lt=R;for(let St=0;St<mt;St++){const z=G[St];R=R.concat(z)}function H(St,z,Tt){return z||ln("ExtrudeGeometry: vec does not exist"),St.clone().addScaledVector(z,Tt)}const q=R.length;function Z(St,z,Tt){let Dt,Ut,Rt;const qt=St.x-z.x,Bt=St.y-z.y,Xt=Tt.x-St.x,P=Tt.y-St.y,w=qt*qt+Bt*Bt,$=qt*P-Bt*Xt;if(Math.abs($)>Number.EPSILON){const dt=Math.sqrt(w),Mt=Math.sqrt(Xt*Xt+P*P),ut=z.x-Bt/dt,ee=z.y+qt/dt,Ft=Tt.x-P/Mt,ie=Tt.y+Xt/Mt,$t=((Ft-ut)*P-(ie-ee)*Xt)/(qt*P-Bt*Xt);Dt=ut+qt*$t-St.x,Ut=ee+Bt*$t-St.y;const Et=Dt*Dt+Ut*Ut;if(Et<=2)return new wt(Dt,Ut);Rt=Math.sqrt(Et/2)}else{let dt=!1;qt>Number.EPSILON?Xt>Number.EPSILON&&(dt=!0):qt<-Number.EPSILON?Xt<-Number.EPSILON&&(dt=!0):Math.sign(Bt)===Math.sign(P)&&(dt=!0),dt?(Dt=-Bt,Ut=qt,Rt=Math.sqrt(w)):(Dt=qt,Ut=Bt,Rt=Math.sqrt(w/2))}return new wt(Dt/Rt,Ut/Rt)}const vt=[];for(let St=0,z=lt.length,Tt=z-1,Dt=St+1;St<z;St++,Tt++,Dt++)Tt===z&&(Tt=0),Dt===z&&(Dt=0),vt[St]=Z(lt[St],lt[Tt],lt[Dt]);const bt=[];let B,tt=vt.concat();for(let St=0,z=mt;St<z;St++){const Tt=G[St];B=[];for(let Dt=0,Ut=Tt.length,Rt=Ut-1,qt=Dt+1;Dt<Ut;Dt++,Rt++,qt++)Rt===Ut&&(Rt=0),qt===Ut&&(qt=0),B[Dt]=Z(Tt[Dt],Tt[Rt],Tt[qt]);bt.push(B),tt=tt.concat(B)}let gt;if(M===0)gt=Gr.triangulateShape(lt,G);else{const St=[],z=[];for(let Tt=0;Tt<M;Tt++){const Dt=Tt/M,Ut=b*Math.cos(Dt*Math.PI/2),Rt=E*Math.sin(Dt*Math.PI/2)+T;for(let qt=0,Bt=lt.length;qt<Bt;qt++){const Xt=H(lt[qt],vt[qt],Rt);Gt(Xt.x,Xt.y,-Ut),Dt===0&&St.push(Xt)}for(let qt=0,Bt=mt;qt<Bt;qt++){const Xt=G[qt];B=bt[qt];const P=[];for(let w=0,$=Xt.length;w<$;w++){const dt=H(Xt[w],B[w],Rt);Gt(dt.x,dt.y,-Ut),Dt===0&&P.push(dt)}Dt===0&&z.push(P)}}gt=Gr.triangulateShape(St,z)}const Ct=gt.length,kt=E+T;for(let St=0;St<q;St++){const z=v?H(R[St],tt[St],kt):R[St];U?(F.copy(I.normals[0]).multiplyScalar(z.x),O.copy(I.binormals[0]).multiplyScalar(z.y),X.copy(A[0]).add(F).add(O),Gt(X.x,X.y,X.z)):Gt(z.x,z.y,0)}for(let St=1;St<=x;St++)for(let z=0;z<q;z++){const Tt=v?H(R[z],tt[z],kt):R[z];U?(F.copy(I.normals[St]).multiplyScalar(Tt.x),O.copy(I.binormals[St]).multiplyScalar(Tt.y),X.copy(A[St]).add(F).add(O),Gt(X.x,X.y,X.z)):Gt(Tt.x,Tt.y,g/x*St)}for(let St=M-1;St>=0;St--){const z=St/M,Tt=b*Math.cos(z*Math.PI/2),Dt=E*Math.sin(z*Math.PI/2)+T;for(let Ut=0,Rt=lt.length;Ut<Rt;Ut++){const qt=H(lt[Ut],vt[Ut],Dt);Gt(qt.x,qt.y,g+Tt)}for(let Ut=0,Rt=G.length;Ut<Rt;Ut++){const qt=G[Ut];B=bt[Ut];for(let Bt=0,Xt=qt.length;Bt<Xt;Bt++){const P=H(qt[Bt],B[Bt],Dt);U?Gt(P.x,P.y+A[x-1].y,A[x-1].x+Tt):Gt(P.x,P.y,g+Tt)}}}st(),ft();function st(){const St=o.length/3;if(v){let z=0,Tt=q*z;for(let Dt=0;Dt<Ct;Dt++){const Ut=gt[Dt];Qt(Ut[2]+Tt,Ut[1]+Tt,Ut[0]+Tt)}z=x+M*2,Tt=q*z;for(let Dt=0;Dt<Ct;Dt++){const Ut=gt[Dt];Qt(Ut[0]+Tt,Ut[1]+Tt,Ut[2]+Tt)}}else{for(let z=0;z<Ct;z++){const Tt=gt[z];Qt(Tt[2],Tt[1],Tt[0])}for(let z=0;z<Ct;z++){const Tt=gt[z];Qt(Tt[0]+q*x,Tt[1]+q*x,Tt[2]+q*x)}}a.addGroup(St,o.length/3-St,0)}function ft(){const St=o.length/3;let z=0;zt(lt,z),z+=lt.length;for(let Tt=0,Dt=G.length;Tt<Dt;Tt++){const Ut=G[Tt];zt(Ut,z),z+=Ut.length}a.addGroup(St,o.length/3-St,1)}function zt(St,z){let Tt=St.length;for(;--Tt>=0;){const Dt=Tt;let Ut=Tt-1;Ut<0&&(Ut=St.length-1);for(let Rt=0,qt=x+M*2;Rt<qt;Rt++){const Bt=q*Rt,Xt=q*(Rt+1),P=z+Dt+Bt,w=z+Ut+Bt,$=z+Ut+Xt,dt=z+Dt+Xt;me(P,w,$,dt)}}}function Gt(St,z,Tt){m.push(St),m.push(z),m.push(Tt)}function Qt(St,z,Tt){ze(St),ze(z),ze(Tt);const Dt=o.length/3,Ut=L.generateTopUV(a,o,Dt-3,Dt-2,Dt-1);ce(Ut[0]),ce(Ut[1]),ce(Ut[2])}function me(St,z,Tt,Dt){ze(St),ze(z),ze(Dt),ze(z),ze(Tt),ze(Dt);const Ut=o.length/3,Rt=L.generateSideWallUV(a,o,Ut-6,Ut-3,Ut-2,Ut-1);ce(Rt[0]),ce(Rt[1]),ce(Rt[3]),ce(Rt[1]),ce(Rt[2]),ce(Rt[3])}function ze(St){o.push(m[St*3+0]),o.push(m[St*3+1]),o.push(m[St*3+2])}function ce(St){c.push(St.x),c.push(St.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return iE(n,a,t)}static fromJSON(t,n){const a=[];for(let c=0,u=t.shapes.length;c<u;c++){const h=n[t.shapes[c]];a.push(h)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new Cp[o.type]().fromJSON(o)),new dl(a,t.options)}}const nE={generateTopUV:function(s,t,n,a,o){const c=t[n*3],u=t[n*3+1],h=t[a*3],m=t[a*3+1],p=t[o*3],x=t[o*3+1];return[new wt(c,u),new wt(h,m),new wt(p,x)]},generateSideWallUV:function(s,t,n,a,o,c){const u=t[n*3],h=t[n*3+1],m=t[n*3+2],p=t[a*3],x=t[a*3+1],g=t[a*3+2],v=t[o*3],b=t[o*3+1],E=t[o*3+2],T=t[c*3],M=t[c*3+1],_=t[c*3+2];return Math.abs(h-x)<Math.abs(u-p)?[new wt(u,1-m),new wt(p,1-g),new wt(v,1-E),new wt(T,1-_)]:[new wt(h,1-m),new wt(x,1-g),new wt(b,1-E),new wt(M,1-_)]}};function iE(s,t,n){if(n.shapes=[],Array.isArray(s))for(let a=0,o=s.length;a<o;a++){const c=s[a];n.shapes.push(c.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class Ru extends Qp{constructor(t=1,n=0){const a=(1+Math.sqrt(5))/2,o=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new Ru(t.radius,t.detail)}}class Pu extends ei{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const c=t/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,x=m+1,g=t/h,v=n/m,b=[],E=[],T=[],M=[];for(let _=0;_<x;_++){const L=_*v-u;for(let A=0;A<p;A++){const U=A*g-c;E.push(U,-L,0),T.push(0,0,1),M.push(A/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<h;L++){const A=L+p*_,U=L+p*(_+1),I=L+1+p*(_+1),O=L+1+p*_;b.push(A,U,O),b.push(U,I,O)}this.setIndex(b),this.setAttribute("position",new gn(E,3)),this.setAttribute("normal",new gn(T,3)),this.setAttribute("uv",new gn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.width,t.height,t.widthSegments,t.heightSegments)}}class t0 extends ei{constructor(t=1,n=.4,a=12,o=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:a,tubularSegments:o,arc:c},a=Math.floor(a),o=Math.floor(o);const u=[],h=[],m=[],p=[],x=new j,g=new j,v=new j;for(let b=0;b<=a;b++)for(let E=0;E<=o;E++){const T=E/o*c,M=b/a*Math.PI*2;g.x=(t+n*Math.cos(M))*Math.cos(T),g.y=(t+n*Math.cos(M))*Math.sin(T),g.z=n*Math.sin(M),h.push(g.x,g.y,g.z),x.x=t*Math.cos(T),x.y=t*Math.sin(T),v.subVectors(g,x).normalize(),m.push(v.x,v.y,v.z),p.push(E/o),p.push(b/a)}for(let b=1;b<=a;b++)for(let E=1;E<=o;E++){const T=(o+1)*b+E-1,M=(o+1)*(b-1)+E-1,_=(o+1)*(b-1)+E,L=(o+1)*b+E;u.push(T,M,L),u.push(M,_,L)}this.setIndex(u),this.setAttribute("position",new gn(h,3)),this.setAttribute("normal",new gn(m,3)),this.setAttribute("uv",new gn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new t0(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class aE extends qs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Z_,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _u extends aE{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class sE extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rE extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class e0 extends zn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const wd=new en,Pv=new j,zv=new j;class vy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kp,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;Pv.setFromMatrixPosition(t.matrixWorld),n.position.copy(Pv),zv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(zv),n.updateMatrixWorld(),wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(wd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Bv=new en,ol=new j,Cd=new j;class oE extends vy{constructor(){super(new $n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wt(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(t,n=0){const a=this.camera,o=this.matrix,c=t.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),ol.setFromMatrixPosition(t.matrixWorld),a.position.copy(ol),Cd.copy(a.position),Cd.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(Cd),a.updateMatrixWorld(),o.makeTranslation(-ol.x,-ol.y,-ol.z),Bv.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bv,a.coordinateSystem,a.reversedDepth)}}class Nu extends e0{constructor(t,n,a=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new oE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class n0 extends ay{constructor(t=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-t,u=a+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class lE extends vy{constructor(){super(new n0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cE extends e0{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new lE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _y extends e0{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class uE extends $n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}class Fv{constructor(t=1,n=0,a=0){this.radius=t,this.phi=n,this.theta=a}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(be(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hE extends Ws{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){de("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Iv(s,t,n,a){const o=dE(a);switch(n){case W_:return s*t;case Y_:return s*t/o.components*o.byteLength;case kp:return s*t/o.components*o.byteLength;case jp:return s*t*2/o.components*o.byteLength;case Xp:return s*t*2/o.components*o.byteLength;case q_:return s*t*3/o.components*o.byteLength;case Oi:return s*t*4/o.components*o.byteLength;case Wp:return s*t*4/o.components*o.byteLength;case du:case pu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case mu:case xu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case tp:case np:return Math.max(s,16)*Math.max(t,8)/4;case $d:case ep:return Math.max(s,8)*Math.max(t,8)/2;case ip:case ap:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case sp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rp:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case op:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case lp:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case cp:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case up:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case fp:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case hp:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case dp:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case pp:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case mp:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case xp:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case gp:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case vp:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _p:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case yp:case bp:case Sp:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Mp:case Ep:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Tp:case Ap:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function dE(s){switch(s){case qi:case G_:return{byteLength:1,components:1};case ml:case k_:case Xi:return{byteLength:2,components:1};case Vp:case Gp:return{byteLength:2,components:4};case Gs:case Hp:case Aa:return{byteLength:4,components:1};case j_:case X_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yy(){let s=null,t=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function pE(s){const t=new WeakMap;function n(h,m){const p=h.array,x=h.usage,g=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,x),h.onUploadCallback();let b;if(p instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=s.SHORT;else if(p instanceof Uint32Array)b=s.UNSIGNED_INT;else if(p instanceof Int32Array)b=s.INT;else if(p instanceof Int8Array)b=s.BYTE;else if(p instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function a(h,m,p){const x=m.array,g=m.updateRanges;if(s.bindBuffer(p,h),g.length===0)s.bufferSubData(p,0,x);else{g.sort((b,E)=>b.start-E.start);let v=0;for(let b=1;b<g.length;b++){const E=g[v],T=g[b];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,g[v]=T)}g.length=v+1;for(let b=0,E=g.length;b<E;b++){const T=g[b];s.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(s.deleteBuffer(m.buffer),t.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var mE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xE=`#ifdef USE_ALPHAHASH
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
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bE=`#ifdef USE_AOMAP
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
#endif`,SE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
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
#endif`,EE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CE=`#ifdef USE_IRIDESCENCE
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
#endif`,RE=`#ifdef USE_BUMPMAP
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FE=`#define PI 3.141592653589793
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
} // validated`,IE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HE=`vec3 transformedNormal = objectNormal;
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
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XE="gl_FragColor = linearToOutputTexel( gl_FragColor );",WE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qE=`#ifdef USE_ENVMAP
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
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$E=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nT=`#ifdef USE_GRADIENTMAP
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
}`,iT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rT=`uniform bool receiveShadow;
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
#endif`,oT=`#ifdef USE_ENVMAP
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
#endif`,lT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hT=`PhysicalMaterial material;
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
#endif`,dT=`uniform sampler2D dfgLUT;
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
}`,pT=`
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
#endif`,mT=`#if defined( RE_IndirectDiffuse )
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
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_T=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ST=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ET=`#if defined( USE_POINTS_UV )
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
#endif`,TT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NT=`#ifdef USE_MORPHTARGETS
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
#endif`,DT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BT=`#ifdef USE_NORMALMAP
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
#endif`,FT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$T=`float getShadowMask() {
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
}`,tA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eA=`#ifdef USE_SKINNING
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
#endif`,nA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iA=`#ifdef USE_SKINNING
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
#endif`,aA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lA=`#ifdef USE_TRANSMISSION
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
#endif`,cA=`#ifdef USE_TRANSMISSION
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
#endif`,uA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mA=`uniform sampler2D t2D;
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
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yA=`#include <common>
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
}`,bA=`#if DEPTH_PACKING == 3200
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
}`,SA=`#define DISTANCE
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
}`,MA=`#define DISTANCE
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
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`uniform float scale;
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
}`,wA=`uniform vec3 diffuse;
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
}`,CA=`#include <common>
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
}`,RA=`uniform vec3 diffuse;
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
}`,NA=`#define LAMBERT
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
}`,DA=`#define LAMBERT
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
}`,LA=`#define MATCAP
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
}`,UA=`#define MATCAP
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
}`,OA=`#define NORMAL
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
}`,PA=`#define NORMAL
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
}`,zA=`#define PHONG
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
}`,BA=`#define PHONG
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
}`,FA=`#define STANDARD
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
}`,IA=`#define STANDARD
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
}`,HA=`#define TOON
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
}`,VA=`#define TOON
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
}`,GA=`uniform float size;
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
}`,kA=`uniform vec3 diffuse;
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
}`,jA=`#include <common>
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
}`,XA=`uniform vec3 color;
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
}`,WA=`uniform float rotation;
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
}`,qA=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:mE,alphahash_pars_fragment:xE,alphamap_fragment:gE,alphamap_pars_fragment:vE,alphatest_fragment:_E,alphatest_pars_fragment:yE,aomap_fragment:bE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:EE,begin_vertex:TE,beginnormal_vertex:AE,bsdfs:wE,iridescence_fragment:CE,bumpmap_pars_fragment:RE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:DE,clipping_planes_pars_vertex:LE,clipping_planes_vertex:UE,color_fragment:OE,color_pars_fragment:PE,color_pars_vertex:zE,color_vertex:BE,common:FE,cube_uv_reflection_fragment:IE,defaultnormal_vertex:HE,displacementmap_pars_vertex:VE,displacementmap_vertex:GE,emissivemap_fragment:kE,emissivemap_pars_fragment:jE,colorspace_fragment:XE,colorspace_pars_fragment:WE,envmap_fragment:qE,envmap_common_pars_fragment:YE,envmap_pars_fragment:ZE,envmap_pars_vertex:KE,envmap_physical_pars_fragment:oT,envmap_vertex:QE,fog_vertex:JE,fog_pars_vertex:$E,fog_fragment:tT,fog_pars_fragment:eT,gradientmap_pars_fragment:nT,lightmap_pars_fragment:iT,lights_lambert_fragment:aT,lights_lambert_pars_fragment:sT,lights_pars_begin:rT,lights_toon_fragment:lT,lights_toon_pars_fragment:cT,lights_phong_fragment:uT,lights_phong_pars_fragment:fT,lights_physical_fragment:hT,lights_physical_pars_fragment:dT,lights_fragment_begin:pT,lights_fragment_maps:mT,lights_fragment_end:xT,logdepthbuf_fragment:gT,logdepthbuf_pars_fragment:vT,logdepthbuf_pars_vertex:_T,logdepthbuf_vertex:yT,map_fragment:bT,map_pars_fragment:ST,map_particle_fragment:MT,map_particle_pars_fragment:ET,metalnessmap_fragment:TT,metalnessmap_pars_fragment:AT,morphinstance_vertex:wT,morphcolor_vertex:CT,morphnormal_vertex:RT,morphtarget_pars_vertex:NT,morphtarget_vertex:DT,normal_fragment_begin:LT,normal_fragment_maps:UT,normal_pars_fragment:OT,normal_pars_vertex:PT,normal_vertex:zT,normalmap_pars_fragment:BT,clearcoat_normal_fragment_begin:FT,clearcoat_normal_fragment_maps:IT,clearcoat_pars_fragment:HT,iridescence_pars_fragment:VT,opaque_fragment:GT,packing:kT,premultiplied_alpha_fragment:jT,project_vertex:XT,dithering_fragment:WT,dithering_pars_fragment:qT,roughnessmap_fragment:YT,roughnessmap_pars_fragment:ZT,shadowmap_pars_fragment:KT,shadowmap_pars_vertex:QT,shadowmap_vertex:JT,shadowmask_pars_fragment:$T,skinbase_vertex:tA,skinning_pars_vertex:eA,skinning_vertex:nA,skinnormal_vertex:iA,specularmap_fragment:aA,specularmap_pars_fragment:sA,tonemapping_fragment:rA,tonemapping_pars_fragment:oA,transmission_fragment:lA,transmission_pars_fragment:cA,uv_pars_fragment:uA,uv_pars_vertex:fA,uv_vertex:hA,worldpos_vertex:dA,background_vert:pA,background_frag:mA,backgroundCube_vert:xA,backgroundCube_frag:gA,cube_vert:vA,cube_frag:_A,depth_vert:yA,depth_frag:bA,distanceRGBA_vert:SA,distanceRGBA_frag:MA,equirect_vert:EA,equirect_frag:TA,linedashed_vert:AA,linedashed_frag:wA,meshbasic_vert:CA,meshbasic_frag:RA,meshlambert_vert:NA,meshlambert_frag:DA,meshmatcap_vert:LA,meshmatcap_frag:UA,meshnormal_vert:OA,meshnormal_frag:PA,meshphong_vert:zA,meshphong_frag:BA,meshphysical_vert:FA,meshphysical_frag:IA,meshtoon_vert:HA,meshtoon_frag:VA,points_vert:GA,points_frag:kA,shadow_vert:jA,shadow_frag:XA,sprite_vert:WA,sprite_frag:qA},Vt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},Gi={basic:{uniforms:Gn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Gn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Gn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Gn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Gn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Gn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Gn([Vt.points,Vt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Gn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Gn([Vt.common,Vt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Gn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Gn([Vt.sprite,Vt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Gn([Vt.common,Vt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Gn([Vt.lights,Vt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Gi.physical={uniforms:Gn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const lu={r:0,b:0,g:0},Bs=new Yi,YA=new en;function ZA(s,t,n,a,o,c,u){const h=new Se(0);let m=c===!0?0:1,p,x,g=null,v=0,b=null;function E(A){let U=A.isScene===!0?A.background:null;return U&&U.isTexture&&(U=(A.backgroundBlurriness>0?n:t).get(U)),U}function T(A){let U=!1;const I=E(A);I===null?_(h,m):I&&I.isColor&&(_(I,1),U=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||U)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(A,U){const I=E(U);I&&(I.isCubeTexture||I.mapping===Uu)?(x===void 0&&(x=new Nn(new io(1,1,1),new kn({name:"BackgroundCubeMaterial",uniforms:Qr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Bs.copy(U.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),x.material.uniforms.envMap.value=I,x.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(YA.makeRotationFromEuler(Bs)),x.material.toneMapped=Pe.getTransfer(I.colorSpace)!==Xe,(g!==I||v!==I.version||b!==s.toneMapping)&&(x.material.needsUpdate=!0,g=I,v=I.version,b=s.toneMapping),x.layers.enableAll(),A.unshift(x,x.geometry,x.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Nn(new Pu(2,2),new kn({name:"BackgroundMaterial",uniforms:Qr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Pe.getTransfer(I.colorSpace)!==Xe,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||v!==I.version||b!==s.toneMapping)&&(p.material.needsUpdate=!0,g=I,v=I.version,b=s.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function _(A,U){A.getRGB(lu,iy(s)),a.buffers.color.setClear(lu.r,lu.g,lu.b,U,u)}function L(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(A,U=1){h.set(A),m=U,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(A){m=A,_(h,m)},render:T,addToRenderList:M,dispose:L}}function KA(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(R,G,Q,rt,mt){let lt=!1;const H=g(rt,Q,G);c!==H&&(c=H,p(c.object)),lt=b(R,rt,Q,mt),lt&&E(R,rt,Q,mt),mt!==null&&t.update(mt,s.ELEMENT_ARRAY_BUFFER),(lt||u)&&(u=!1,U(R,G,Q,rt),mt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function m(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function g(R,G,Q){const rt=Q.wireframe===!0;let mt=a[R.id];mt===void 0&&(mt={},a[R.id]=mt);let lt=mt[G.id];lt===void 0&&(lt={},mt[G.id]=lt);let H=lt[rt];return H===void 0&&(H=v(m()),lt[rt]=H),H}function v(R){const G=[],Q=[],rt=[];for(let mt=0;mt<n;mt++)G[mt]=0,Q[mt]=0,rt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:rt,object:R,attributes:{},index:null}}function b(R,G,Q,rt){const mt=c.attributes,lt=G.attributes;let H=0;const q=Q.getAttributes();for(const Z in q)if(q[Z].location>=0){const bt=mt[Z];let B=lt[Z];if(B===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(B=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(B=R.instanceColor)),bt===void 0||bt.attribute!==B||B&&bt.data!==B.data)return!0;H++}return c.attributesNum!==H||c.index!==rt}function E(R,G,Q,rt){const mt={},lt=G.attributes;let H=0;const q=Q.getAttributes();for(const Z in q)if(q[Z].location>=0){let bt=lt[Z];bt===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(bt=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(bt=R.instanceColor));const B={};B.attribute=bt,bt&&bt.data&&(B.data=bt.data),mt[Z]=B,H++}c.attributes=mt,c.attributesNum=H,c.index=rt}function T(){const R=c.newAttributes;for(let G=0,Q=R.length;G<Q;G++)R[G]=0}function M(R){_(R,0)}function _(R,G){const Q=c.newAttributes,rt=c.enabledAttributes,mt=c.attributeDivisors;Q[R]=1,rt[R]===0&&(s.enableVertexAttribArray(R),rt[R]=1),mt[R]!==G&&(s.vertexAttribDivisor(R,G),mt[R]=G)}function L(){const R=c.newAttributes,G=c.enabledAttributes;for(let Q=0,rt=G.length;Q<rt;Q++)G[Q]!==R[Q]&&(s.disableVertexAttribArray(Q),G[Q]=0)}function A(R,G,Q,rt,mt,lt,H){H===!0?s.vertexAttribIPointer(R,G,Q,mt,lt):s.vertexAttribPointer(R,G,Q,rt,mt,lt)}function U(R,G,Q,rt){T();const mt=rt.attributes,lt=Q.getAttributes(),H=G.defaultAttributeValues;for(const q in lt){const Z=lt[q];if(Z.location>=0){let vt=mt[q];if(vt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(vt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(vt=R.instanceColor)),vt!==void 0){const bt=vt.normalized,B=vt.itemSize,tt=t.get(vt);if(tt===void 0)continue;const gt=tt.buffer,Ct=tt.type,kt=tt.bytesPerElement,st=Ct===s.INT||Ct===s.UNSIGNED_INT||vt.gpuType===Hp;if(vt.isInterleavedBufferAttribute){const ft=vt.data,zt=ft.stride,Gt=vt.offset;if(ft.isInstancedInterleavedBuffer){for(let Qt=0;Qt<Z.locationSize;Qt++)_(Z.location+Qt,ft.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Qt=0;Qt<Z.locationSize;Qt++)M(Z.location+Qt);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let Qt=0;Qt<Z.locationSize;Qt++)A(Z.location+Qt,B/Z.locationSize,Ct,bt,zt*kt,(Gt+B/Z.locationSize*Qt)*kt,st)}else{if(vt.isInstancedBufferAttribute){for(let ft=0;ft<Z.locationSize;ft++)_(Z.location+ft,vt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ft=0;ft<Z.locationSize;ft++)M(Z.location+ft);s.bindBuffer(s.ARRAY_BUFFER,gt);for(let ft=0;ft<Z.locationSize;ft++)A(Z.location+ft,B/Z.locationSize,Ct,bt,B*kt,B/Z.locationSize*ft*kt,st)}}else if(H!==void 0){const bt=H[q];if(bt!==void 0)switch(bt.length){case 2:s.vertexAttrib2fv(Z.location,bt);break;case 3:s.vertexAttrib3fv(Z.location,bt);break;case 4:s.vertexAttrib4fv(Z.location,bt);break;default:s.vertexAttrib1fv(Z.location,bt)}}}}L()}function I(){X();for(const R in a){const G=a[R];for(const Q in G){const rt=G[Q];for(const mt in rt)x(rt[mt].object),delete rt[mt];delete G[Q]}delete a[R]}}function O(R){if(a[R.id]===void 0)return;const G=a[R.id];for(const Q in G){const rt=G[Q];for(const mt in rt)x(rt[mt].object),delete rt[mt];delete G[Q]}delete a[R.id]}function F(R){for(const G in a){const Q=a[G];if(Q[R.id]===void 0)continue;const rt=Q[R.id];for(const mt in rt)x(rt[mt].object),delete rt[mt];delete Q[R.id]}}function X(){D(),u=!0,c!==o&&(c=o,p(c.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:X,resetDefaultState:D,dispose:I,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:M,disableUnusedAttributes:L}}function QA(s,t,n){let a;function o(p){a=p}function c(p,x){s.drawArrays(a,p,x),n.update(x,a,1)}function u(p,x,g){g!==0&&(s.drawArraysInstanced(a,p,x,g),n.update(x,a,g))}function h(p,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,x,0,g);let b=0;for(let E=0;E<g;E++)b+=x[E];n.update(b,a,1)}function m(p,x,g,v){if(g===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)u(p[E],x[E],v[E]);else{b.multiDrawArraysInstancedWEBGL(a,p,0,x,0,v,0,g);let E=0;for(let T=0;T<g;T++)E+=x[T]*v[T];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function JA(s,t,n,a){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Oi&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const X=F===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==qi&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Aa&&!X)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const x=m(p);x!==p&&(de("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),A=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:L,maxVaryings:A,maxFragmentUniforms:U,vertexTextures:I,maxSamples:O}}function $A(s){const t=this;let n=null,a=0,o=!1,c=!1;const u=new us,h=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const b=g.length!==0||v||a!==0||o;return o=v,a=g.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){n=x(g,v,0)},this.setState=function(g,v,b){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,_=s.get(g);if(!o||E===null||E.length===0||c&&!M)c?x(null):p();else{const L=c?0:a,A=L*4;let U=_.clippingState||null;m.value=U,U=x(E,v,A,b);for(let I=0;I!==A;++I)U[I]=n[I];_.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function x(g,v,b,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const _=b+T*4,L=v.matrixWorldInverse;h.getNormalMatrix(L),(M===null||M.length<_)&&(M=new Float32Array(_));for(let A=0,U=b;A!==T;++A,U+=4)u.copy(g[A]).applyMatrix4(L,h),u.normal.toArray(M,U),M[U+3]=u.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function tw(s){let t=new WeakMap;function n(u,h){return h===Zd?u.mapping=Yr:h===Kd&&(u.mapping=Zr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Zd||h===Kd)if(t.has(u)){const m=t.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new g3(m.height);return p.fromEquirectangularTexture(s,u),t.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:a,dispose:c}}const hs=4,Hv=[.125,.215,.35,.446,.526,.582],Hs=20,ew=256,ll=new n0,Vv=new Se;let Rd=null,Nd=0,Dd=0,Ld=!1;const nw=new j;class Gv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=nw}=c;Rd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rd,Nd,Dd),this._renderer.xr.enabled=Ld,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Yr||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Xi,format:Oi,colorSpace:Kr,depthBuffer:!1},o=kv(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kv(t,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=iw(c)),this._blurMaterial=sw(c,t,n),this._ggxMaterial=aw(c,t,n)}return o}_compileMaterial(t){const n=new Nn(new ei,t);this._renderer.compile(n,ll)}_sceneToCubeUV(t,n,a,o,c){const m=new $n(90,1,n,a),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,b=g.toneMapping;g.getClearColor(Vv),g.toneMapping=ds,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nn(new io,new Wr({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let _=!1;const L=t.background;L?L.isColor&&(M.color.copy(L),t.background=null,_=!0):(M.color.copy(Vv),_=!0);for(let A=0;A<6;A++){const U=A%3;U===0?(m.up.set(0,p[A],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[A],c.y,c.z)):U===1?(m.up.set(0,0,p[A]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[A],c.z)):(m.up.set(0,p[A],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[A]));const I=this._cubeSize;Ir(o,U*I,A>2?I:0,I,I),g.setRenderTarget(o),_&&g.render(T,m),g.render(t,m)}g.toneMapping=b,g.autoClear=v,t.background=L}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Yr||t.mapping===Zr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ir(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,ll)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),v=.05+p*.95,b=g*v,{_lodMax:E}=this,T=this._sizeLods[a],M=3*T*(a>E-hs?a-E+hs:0),_=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=E-n,Ir(c,M,_,3*T,2*T),o.setRenderTarget(c),o.render(h,ll),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,Ir(t,M,_,3*T,2*T),o.setRenderTarget(t),o.render(h,ll)}_blur(t,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,o,"latitudinal",c),this._halfBlur(u,t,a,a,o,"longitudinal",c)}_halfBlur(t,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ln("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[o];g.material=p;const v=p.uniforms,b=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Hs-1),T=c/E,M=isFinite(c)?1+Math.floor(x*T):Hs;M>Hs&&de(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hs}`);const _=[];let L=0;for(let F=0;F<Hs;++F){const X=F/T,D=Math.exp(-X*X/2);_.push(D),F===0?L+=D:F<M&&(L+=2*D)}for(let F=0;F<_.length;F++)_[F]=_[F]/L;v.envMap.value=t.texture,v.samples.value=M,v.weights.value=_,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:A}=this;v.dTheta.value=E,v.mipInt.value=A-a;const U=this._sizeLods[o],I=3*U*(o>A-hs?o-A+hs:0),O=4*(this._cubeSize-U);Ir(n,I,O,3*U,2*U),m.setRenderTarget(n),m.render(g,ll)}}function iw(s){const t=[],n=[],a=[];let o=s;const c=s-hs+1+Hv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);t.push(h);let m=1/h;u>s-hs?m=Hv[u-s+hs-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),x=-p,g=1+p,v=[x,x,g,x,g,g,x,x,g,g,x,g],b=6,E=6,T=3,M=2,_=1,L=new Float32Array(T*E*b),A=new Float32Array(M*E*b),U=new Float32Array(_*E*b);for(let O=0;O<b;O++){const F=O%3*2/3-1,X=O>2?0:-1,D=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];L.set(D,T*E*O),A.set(v,M*E*O);const R=[O,O,O,O,O,O];U.set(R,_*E*O)}const I=new ei;I.setAttribute("position",new Wi(L,T)),I.setAttribute("uv",new Wi(A,M)),I.setAttribute("faceIndex",new Wi(U,_)),a.push(new Nn(I,null)),o>hs&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function kv(s,t,n){const a=new zi(s,t,n);return a.texture.mapping=Uu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ir(s,t,n,a,o){s.viewport.set(t,n,a,o),s.scissor.set(t,n,a,o)}function aw(s,t,n){return new kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ew,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function sw(s,t,n){const a=new Float32Array(Hs),o=new j(0,1,0);return new kn({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zu(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function jv(){return new kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Xv(){return new kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function zu(){return`

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
	`}function rw(s){let t=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===Zd||m===Kd,x=m===Yr||m===Zr;if(p||x){let g=t.get(h);const v=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new Gv(s)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return p&&b&&b.height>0||x&&b&&o(b)?(n===null&&(n=new Gv(s)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function o(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function ow(s){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=s.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&_l("WebGLRenderer: "+a+" extension not supported."),o}}}function lw(s,t,n,a){const o={},c=new WeakMap;function u(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const b=c.get(v);b&&(t.remove(b),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(g){const v=g.attributes;for(const b in v)t.update(v[b],s.ARRAY_BUFFER)}function p(g){const v=[],b=g.index,E=g.attributes.position;let T=0;if(b!==null){const L=b.array;T=b.version;for(let A=0,U=L.length;A<U;A+=3){const I=L[A+0],O=L[A+1],F=L[A+2];v.push(I,O,O,F,F,I)}}else if(E!==void 0){const L=E.array;T=E.version;for(let A=0,U=L.length/3-1;A<U;A+=3){const I=A+0,O=A+1,F=A+2;v.push(I,O,O,F,F,I)}}else return;const M=new(Q_(v)?ny:ey)(v,1);M.version=T;const _=c.get(g);_&&t.remove(_),c.set(g,M)}function x(g){const v=c.get(g);if(v){const b=g.index;b!==null&&v.version<b.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function cw(s,t,n){let a;function o(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,b){s.drawElements(a,b,c,v*u),n.update(b,a,1)}function p(v,b,E){E!==0&&(s.drawElementsInstanced(a,b,c,v*u,E),n.update(b,a,E))}function x(v,b,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,b,0,c,v,0,E);let M=0;for(let _=0;_<E;_++)M+=b[_];n.update(M,a,1)}function g(v,b,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<v.length;_++)p(v[_]/u,b[_],T[_]);else{M.multiDrawElementsInstancedWEBGL(a,b,0,c,v,0,T,0,E);let _=0;for(let L=0;L<E;L++)_+=b[L]*T[L];n.update(_,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function uw(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:ln("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function fw(s,t,n){const a=new WeakMap,o=new qe;function c(u,h,m){const p=u.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let v=a.get(h);if(v===void 0||v.count!==g){let R=function(){X.dispose(),a.delete(h),h.removeEventListener("dispose",R)};var b=R;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],A=h.morphAttributes.color||[];let U=0;E===!0&&(U=1),T===!0&&(U=2),M===!0&&(U=3);let I=h.attributes.position.count*U,O=1;I>t.maxTextureSize&&(O=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*O*4*g),X=new J_(F,I,O,g);X.type=Aa,X.needsUpdate=!0;const D=U*4;for(let G=0;G<g;G++){const Q=_[G],rt=L[G],mt=A[G],lt=I*O*4*G;for(let H=0;H<Q.count;H++){const q=H*D;E===!0&&(o.fromBufferAttribute(Q,H),F[lt+q+0]=o.x,F[lt+q+1]=o.y,F[lt+q+2]=o.z,F[lt+q+3]=0),T===!0&&(o.fromBufferAttribute(rt,H),F[lt+q+4]=o.x,F[lt+q+5]=o.y,F[lt+q+6]=o.z,F[lt+q+7]=0),M===!0&&(o.fromBufferAttribute(mt,H),F[lt+q+8]=o.x,F[lt+q+9]=o.y,F[lt+q+10]=o.z,F[lt+q+11]=mt.itemSize===4?o.w:1)}}v={count:g,texture:X,size:new wt(I,O)},a.set(h,v),h.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function hw(s,t,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,x=m.geometry,g=t.get(m,x);if(o.get(g)!==p&&(t.update(g),o.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return g}function u(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const by=new jn,Wv=new ly(1,1),Sy=new J_,My=new e3,Ey=new sy,qv=[],Yv=[],Zv=new Float32Array(16),Kv=new Float32Array(9),Qv=new Float32Array(4);function ao(s,t,n){const a=s[0];if(a<=0||a>0)return s;const o=t*n;let c=qv[o];if(c===void 0&&(c=new Float32Array(o),qv[o]=c),t!==0){a.toArray(c,0);for(let u=1,h=0;u!==t;++u)h+=n,s[u].toArray(c,h)}return c}function Mn(s,t){if(s.length!==t.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==t[n])return!1;return!0}function En(s,t){for(let n=0,a=t.length;n<a;n++)s[n]=t[n]}function Bu(s,t){let n=Yv[t];n===void 0&&(n=new Int32Array(t),Yv[t]=n);for(let a=0;a!==t;++a)n[a]=s.allocateTextureUnit();return n}function dw(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function pw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;s.uniform2fv(this.addr,t),En(n,t)}}function mw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Mn(n,t))return;s.uniform3fv(this.addr,t),En(n,t)}}function xw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;s.uniform4fv(this.addr,t),En(n,t)}}function gw(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;Qv.set(a),s.uniformMatrix2fv(this.addr,!1,Qv),En(n,a)}}function vw(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;Kv.set(a),s.uniformMatrix3fv(this.addr,!1,Kv),En(n,a)}}function _w(s,t){const n=this.cache,a=t.elements;if(a===void 0){if(Mn(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),En(n,t)}else{if(Mn(n,a))return;Zv.set(a),s.uniformMatrix4fv(this.addr,!1,Zv),En(n,a)}}function yw(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function bw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;s.uniform2iv(this.addr,t),En(n,t)}}function Sw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;s.uniform3iv(this.addr,t),En(n,t)}}function Mw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;s.uniform4iv(this.addr,t),En(n,t)}}function Ew(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function Tw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Mn(n,t))return;s.uniform2uiv(this.addr,t),En(n,t)}}function Aw(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Mn(n,t))return;s.uniform3uiv(this.addr,t),En(n,t)}}function ww(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Mn(n,t))return;s.uniform4uiv(this.addr,t),En(n,t)}}function Cw(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Wv.compareFunction=K_,c=Wv):c=by,n.setTexture2D(t||c,o)}function Rw(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||My,o)}function Nw(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Ey,o)}function Dw(s,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Sy,o)}function Lw(s){switch(s){case 5126:return dw;case 35664:return pw;case 35665:return mw;case 35666:return xw;case 35674:return gw;case 35675:return vw;case 35676:return _w;case 5124:case 35670:return yw;case 35667:case 35671:return bw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return Tw;case 36295:return Aw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Dw}}function Uw(s,t){s.uniform1fv(this.addr,t)}function Ow(s,t){const n=ao(t,this.size,2);s.uniform2fv(this.addr,n)}function Pw(s,t){const n=ao(t,this.size,3);s.uniform3fv(this.addr,n)}function zw(s,t){const n=ao(t,this.size,4);s.uniform4fv(this.addr,n)}function Bw(s,t){const n=ao(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function Fw(s,t){const n=ao(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function Iw(s,t){const n=ao(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Hw(s,t){s.uniform1iv(this.addr,t)}function Vw(s,t){s.uniform2iv(this.addr,t)}function Gw(s,t){s.uniform3iv(this.addr,t)}function kw(s,t){s.uniform4iv(this.addr,t)}function jw(s,t){s.uniform1uiv(this.addr,t)}function Xw(s,t){s.uniform2uiv(this.addr,t)}function Ww(s,t){s.uniform3uiv(this.addr,t)}function qw(s,t){s.uniform4uiv(this.addr,t)}function Yw(s,t,n){const a=this.cache,o=t.length,c=Bu(n,o);Mn(a,c)||(s.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTexture2D(t[u]||by,c[u])}function Zw(s,t,n){const a=this.cache,o=t.length,c=Bu(n,o);Mn(a,c)||(s.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTexture3D(t[u]||My,c[u])}function Kw(s,t,n){const a=this.cache,o=t.length,c=Bu(n,o);Mn(a,c)||(s.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTextureCube(t[u]||Ey,c[u])}function Qw(s,t,n){const a=this.cache,o=t.length,c=Bu(n,o);Mn(a,c)||(s.uniform1iv(this.addr,c),En(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(t[u]||Sy,c[u])}function Jw(s){switch(s){case 5126:return Uw;case 35664:return Ow;case 35665:return Pw;case 35666:return zw;case 35674:return Bw;case 35675:return Fw;case 35676:return Iw;case 5124:case 35670:return Hw;case 35667:case 35671:return Vw;case 35668:case 35672:return Gw;case 35669:case 35673:return kw;case 5125:return jw;case 36294:return Xw;case 36295:return Ww;case 36296:return qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Yw;case 35679:case 36299:case 36307:return Zw;case 35680:case 36300:case 36308:case 36293:return Kw;case 36289:case 36303:case 36311:case 36292:return Qw}}class $w{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Lw(n.type)}}class tC{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Jw(n.type)}}class eC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(t,n[h.id],a)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function Jv(s,t){s.seq.push(t),s.map[t.id]=t}function nC(s,t,n){const a=s.name,o=a.length;for(Ud.lastIndex=0;;){const c=Ud.exec(a),u=Ud.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){Jv(n,p===void 0?new $w(h,s,t):new tC(h,s,t));break}else{let g=n.map[h];g===void 0&&(g=new eC(h),Jv(n,g)),n=g}}}class yu{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=t.getActiveUniform(n,o),u=t.getUniformLocation(n,c.name);nC(c,u,this)}}setValue(t,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,c=t.length;o!==c;++o){const u=t[o];u.id in n&&a.push(u)}return a}}function $v(s,t,n){const a=s.createShader(t);return s.shaderSource(a,n),s.compileShader(a),a}const iC=37297;let aC=0;function sC(s,t){const n=s.split(`
`),a=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===t?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const t_=new _e;function rC(s){Pe._getMatrix(t_,Pe.workingColorSpace,s);const t=`mat3( ${t_.elements.map(n=>n.toFixed(4))} )`;switch(Pe.getTransfer(s)){case Mu:return[t,"LinearTransferOETF"];case Xe:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function e_(s,t,n){const a=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+sC(s.getShaderSource(t),h)}else return c}function oC(s,t){const n=rC(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function lC(s,t){let n;switch(t){case R2:n="Linear";break;case Ip:n="Reinhard";break;case N2:n="Cineon";break;case D2:n="ACESFilmic";break;case U2:n="AgX";break;case O2:n="Neutral";break;case L2:n="Custom";break;default:de("WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const cu=new j;function cC(){Pe.getLuminanceCoefficients(cu);const s=cu.x.toFixed(4),t=cu.y.toFixed(4),n=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function fC(s){const t=[];for(const n in s){const a=s[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function hC(s,t){const n={},a=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(t,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(t,u),locationSize:h}}return n}function ul(s){return s!==""}function n_(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function i_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dp(s){return s.replace(dC,mC)}const pC=new Map;function mC(s,t){let n=ye[t];if(n===void 0){const a=pC.get(t);if(a!==void 0)n=ye[a],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Dp(n)}const xC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(s){return s.replace(xC,gC)}function gC(s,t,n,a){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function s_(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function vC(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===I_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===l2?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ma&&(t="SHADOWMAP_TYPE_VSM"),t}function _C(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Yr:case Zr:t="ENVMAP_TYPE_CUBE";break;case Uu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yC(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zr:t="ENVMAP_MODE_REFRACTION";break}return t}function bC(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case H_:t="ENVMAP_BLENDING_MULTIPLY";break;case w2:t="ENVMAP_BLENDING_MIX";break;case C2:t="ENVMAP_BLENDING_ADD";break}return t}function SC(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function MC(s,t,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=vC(n),p=_C(n),x=yC(n),g=bC(n),v=SC(n),b=uC(n),E=fC(c),T=o.createProgram();let M,_,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ul).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ul).join(`
`),_.length>0&&(_+=`
`)):(M=[s_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),_=[s_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+x:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ds?"#define TONE_MAPPING":"",n.toneMapping!==ds?ye.tonemapping_pars_fragment:"",n.toneMapping!==ds?lC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,oC("linearToOutputTexel",n.outputColorSpace),cC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ul).join(`
`)),u=Dp(u),u=n_(u,n),u=i_(u,n),h=Dp(h),h=n_(h,n),h=i_(h,n),u=a_(u),h=a_(h),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=L+M+u,U=L+_+h,I=$v(o,o.VERTEX_SHADER,A),O=$v(o,o.FRAGMENT_SHADER,U);o.attachShader(T,I),o.attachShader(T,O),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(G){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(T)||"",rt=o.getShaderInfoLog(I)||"",mt=o.getShaderInfoLog(O)||"",lt=Q.trim(),H=rt.trim(),q=mt.trim();let Z=!0,vt=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,I,O);else{const bt=e_(o,I,"vertex"),B=e_(o,O,"fragment");ln("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+lt+`
`+bt+`
`+B)}else lt!==""?de("WebGLProgram: Program Info Log:",lt):(H===""||q==="")&&(vt=!1);vt&&(G.diagnostics={runnable:Z,programLog:lt,vertexShader:{log:H,prefix:M},fragmentShader:{log:q,prefix:_}})}o.deleteShader(I),o.deleteShader(O),X=new yu(o,T),D=hC(o,T)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,iC)),R},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=aC++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=O,this}let EC=0;class TC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new AC(t),n.set(t,a)),a}}class AC{constructor(t){this.id=EC++,this.code=t,this.usedTimes=0}}function wC(s,t,n,a,o,c,u){const h=new $_,m=new TC,p=new Set,x=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let b=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,R,G,Q,rt){const mt=Q.fog,lt=rt.geometry,H=D.isMeshStandardMaterial?Q.environment:null,q=(D.isMeshStandardMaterial?n:t).get(D.envMap||H),Z=q&&q.mapping===Uu?q.image.height:null,vt=E[D.type];D.precision!==null&&(b=o.getMaxPrecision(D.precision),b!==D.precision&&de("WebGLProgram.getParameters:",D.precision,"not supported, using",b,"instead."));const bt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,B=bt!==void 0?bt.length:0;let tt=0;lt.morphAttributes.position!==void 0&&(tt=1),lt.morphAttributes.normal!==void 0&&(tt=2),lt.morphAttributes.color!==void 0&&(tt=3);let gt,Ct,kt,st;if(vt){const De=Gi[vt];gt=De.vertexShader,Ct=De.fragmentShader}else gt=D.vertexShader,Ct=D.fragmentShader,m.update(D),kt=m.getVertexShaderID(D),st=m.getFragmentShaderID(D);const ft=s.getRenderTarget(),zt=s.state.buffers.depth.getReversed(),Gt=rt.isInstancedMesh===!0,Qt=rt.isBatchedMesh===!0,me=!!D.map,ze=!!D.matcap,ce=!!q,St=!!D.aoMap,z=!!D.lightMap,Tt=!!D.bumpMap,Dt=!!D.normalMap,Ut=!!D.displacementMap,Rt=!!D.emissiveMap,qt=!!D.metalnessMap,Bt=!!D.roughnessMap,Xt=D.anisotropy>0,P=D.clearcoat>0,w=D.dispersion>0,$=D.iridescence>0,dt=D.sheen>0,Mt=D.transmission>0,ut=Xt&&!!D.anisotropyMap,ee=P&&!!D.clearcoatMap,Ft=P&&!!D.clearcoatNormalMap,ie=P&&!!D.clearcoatRoughnessMap,$t=$&&!!D.iridescenceMap,Et=$&&!!D.iridescenceThicknessMap,Nt=dt&&!!D.sheenColorMap,ne=dt&&!!D.sheenRoughnessMap,Jt=!!D.specularMap,jt=!!D.specularColorMap,fe=!!D.specularIntensityMap,k=Mt&&!!D.transmissionMap,It=Mt&&!!D.thicknessMap,Ot=!!D.gradientMap,Pt=!!D.alphaMap,At=D.alphaTest>0,yt=!!D.alphaHash,Yt=!!D.extensions;let he=ds;D.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(he=s.toneMapping);const Ve={shaderID:vt,shaderType:D.type,shaderName:D.name,vertexShader:gt,fragmentShader:Ct,defines:D.defines,customVertexShaderID:kt,customFragmentShaderID:st,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:b,batching:Qt,batchingColor:Qt&&rt._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&rt.instanceColor!==null,instancingMorph:Gt&&rt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ft===null?s.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Kr,alphaToCoverage:!!D.alphaToCoverage,map:me,matcap:ze,envMap:ce,envMapMode:ce&&q.mapping,envMapCubeUVHeight:Z,aoMap:St,lightMap:z,bumpMap:Tt,normalMap:Dt,displacementMap:v&&Ut,emissiveMap:Rt,normalMapObjectSpace:Dt&&D.normalMapType===F2,normalMapTangentSpace:Dt&&D.normalMapType===Z_,metalnessMap:qt,roughnessMap:Bt,anisotropy:Xt,anisotropyMap:ut,clearcoat:P,clearcoatMap:ee,clearcoatNormalMap:Ft,clearcoatRoughnessMap:ie,dispersion:w,iridescence:$,iridescenceMap:$t,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:Nt,sheenRoughnessMap:ne,specularMap:Jt,specularColorMap:jt,specularIntensityMap:fe,transmission:Mt,transmissionMap:k,thicknessMap:It,gradientMap:Ot,opaque:D.transparent===!1&&D.blending===jr&&D.alphaToCoverage===!1,alphaMap:Pt,alphaTest:At,alphaHash:yt,combine:D.combine,mapUv:me&&T(D.map.channel),aoMapUv:St&&T(D.aoMap.channel),lightMapUv:z&&T(D.lightMap.channel),bumpMapUv:Tt&&T(D.bumpMap.channel),normalMapUv:Dt&&T(D.normalMap.channel),displacementMapUv:Ut&&T(D.displacementMap.channel),emissiveMapUv:Rt&&T(D.emissiveMap.channel),metalnessMapUv:qt&&T(D.metalnessMap.channel),roughnessMapUv:Bt&&T(D.roughnessMap.channel),anisotropyMapUv:ut&&T(D.anisotropyMap.channel),clearcoatMapUv:ee&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:ne&&T(D.sheenRoughnessMap.channel),specularMapUv:Jt&&T(D.specularMap.channel),specularColorMapUv:jt&&T(D.specularColorMap.channel),specularIntensityMapUv:fe&&T(D.specularIntensityMap.channel),transmissionMapUv:k&&T(D.transmissionMap.channel),thicknessMapUv:It&&T(D.thicknessMap.channel),alphaMapUv:Pt&&T(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(Dt||Xt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!lt.attributes.uv&&(me||Pt),fog:!!mt,useFog:D.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:zt,skinning:rt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:tt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:me&&D.map.isVideoTexture===!0&&Pe.getTransfer(D.map.colorSpace)===Xe,decodeVideoTextureEmissive:Rt&&D.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(D.emissiveMap.colorSpace)===Xe,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ea,flipSided:D.side===ti,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Yt&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&D.extensions.multiDraw===!0||Qt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ve.vertexUv1s=p.has(1),Ve.vertexUv2s=p.has(2),Ve.vertexUv3s=p.has(3),p.clear(),Ve}function _(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)R.push(G),R.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(L(R,D),A(R,D),R.push(s.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function L(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function A(D,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),D.push(h.mask)}function U(D){const R=E[D.type];let G;if(R){const Q=Gi[R];G=Au.clone(Q.uniforms)}else G=D.uniforms;return G}function I(D,R){let G;for(let Q=0,rt=x.length;Q<rt;Q++){const mt=x[Q];if(mt.cacheKey===R){G=mt,++G.usedTimes;break}}return G===void 0&&(G=new MC(s,R,D,c),x.push(G)),G}function O(D){if(--D.usedTimes===0){const R=x.indexOf(D);x[R]=x[x.length-1],x.pop(),D.destroy()}}function F(D){m.remove(D)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:U,acquireProgram:I,releaseProgram:O,releaseShaderCache:F,programs:x,dispose:X}}function CC(){let s=new WeakMap;function t(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,m){s.get(u)[h]=m}function c(){s=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:c}}function RC(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function r_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function o_(){const s=[];let t=0;const n=[],a=[],o=[];function c(){t=0,n.length=0,a.length=0,o.length=0}function u(g,v,b,E,T,M){let _=s[t];return _===void 0?(_={id:g.id,object:g,geometry:v,material:b,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},s[t]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=b,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=M),t++,_}function h(g,v,b,E,T,M){const _=u(g,v,b,E,T,M);b.transmission>0?a.push(_):b.transparent===!0?o.push(_):n.push(_)}function m(g,v,b,E,T,M){const _=u(g,v,b,E,T,M);b.transmission>0?a.unshift(_):b.transparent===!0?o.unshift(_):n.unshift(_)}function p(g,v){n.length>1&&n.sort(g||RC),a.length>1&&a.sort(v||r_),o.length>1&&o.sort(v||r_)}function x(){for(let g=t,v=s.length;g<v;g++){const b=s[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:x,sort:p}}function NC(){let s=new WeakMap;function t(a,o){const c=s.get(a);let u;return c===void 0?(u=new o_,s.set(a,[u])):o>=c.length?(u=new o_,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:t,dispose:n}}function DC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new j,color:new Se};break;case"SpotLight":n={position:new j,direction:new j,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":n={color:new Se,position:new j,halfWidth:new j,halfHeight:new j};break}return s[t.id]=n,n}}}function LC(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let UC=0;function OC(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function PC(s){const t=new DC,n=LC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new j);const o=new j,c=new en,u=new en;function h(p){let x=0,g=0,v=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let b=0,E=0,T=0,M=0,_=0,L=0,A=0,U=0,I=0,O=0,F=0;p.sort(OC);for(let D=0,R=p.length;D<R;D++){const G=p[D],Q=G.color,rt=G.intensity,mt=G.distance,lt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=Q.r*rt,g+=Q.g*rt,v+=Q.b*rt;else if(G.isLightProbe){for(let H=0;H<9;H++)a.probe[H].addScaledVector(G.sh.coefficients[H],rt);F++}else if(G.isDirectionalLight){const H=t.get(G);if(H.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,Z=n.get(G);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,a.directionalShadow[b]=Z,a.directionalShadowMap[b]=lt,a.directionalShadowMatrix[b]=G.shadow.matrix,L++}a.directional[b]=H,b++}else if(G.isSpotLight){const H=t.get(G);H.position.setFromMatrixPosition(G.matrixWorld),H.color.copy(Q).multiplyScalar(rt),H.distance=mt,H.coneCos=Math.cos(G.angle),H.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),H.decay=G.decay,a.spot[T]=H;const q=G.shadow;if(G.map&&(a.spotLightMap[I]=G.map,I++,q.updateMatrices(G),G.castShadow&&O++),a.spotLightMatrix[T]=q.matrix,G.castShadow){const Z=n.get(G);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,a.spotShadow[T]=Z,a.spotShadowMap[T]=lt,U++}T++}else if(G.isRectAreaLight){const H=t.get(G);H.color.copy(Q).multiplyScalar(rt),H.halfWidth.set(G.width*.5,0,0),H.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=H,M++}else if(G.isPointLight){const H=t.get(G);if(H.color.copy(G.color).multiplyScalar(G.intensity),H.distance=G.distance,H.decay=G.decay,G.castShadow){const q=G.shadow,Z=n.get(G);Z.shadowIntensity=q.intensity,Z.shadowBias=q.bias,Z.shadowNormalBias=q.normalBias,Z.shadowRadius=q.radius,Z.shadowMapSize=q.mapSize,Z.shadowCameraNear=q.camera.near,Z.shadowCameraFar=q.camera.far,a.pointShadow[E]=Z,a.pointShadowMap[E]=lt,a.pointShadowMatrix[E]=G.shadow.matrix,A++}a.point[E]=H,E++}else if(G.isHemisphereLight){const H=t.get(G);H.skyColor.copy(G.color).multiplyScalar(rt),H.groundColor.copy(G.groundColor).multiplyScalar(rt),a.hemi[_]=H,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Vt.LTC_FLOAT_1,a.rectAreaLTC2=Vt.LTC_FLOAT_2):(a.rectAreaLTC1=Vt.LTC_HALF_1,a.rectAreaLTC2=Vt.LTC_HALF_2)),a.ambient[0]=x,a.ambient[1]=g,a.ambient[2]=v;const X=a.hash;(X.directionalLength!==b||X.pointLength!==E||X.spotLength!==T||X.rectAreaLength!==M||X.hemiLength!==_||X.numDirectionalShadows!==L||X.numPointShadows!==A||X.numSpotShadows!==U||X.numSpotMaps!==I||X.numLightProbes!==F)&&(a.directional.length=b,a.spot.length=T,a.rectArea.length=M,a.point.length=E,a.hemi.length=_,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=A,a.pointShadowMap.length=A,a.spotShadow.length=U,a.spotShadowMap.length=U,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=A,a.spotLightMatrix.length=U+I-O,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=F,X.directionalLength=b,X.pointLength=E,X.spotLength=T,X.rectAreaLength=M,X.hemiLength=_,X.numDirectionalShadows=L,X.numPointShadows=A,X.numSpotShadows=U,X.numSpotMaps=I,X.numLightProbes=F,a.version=UC++)}function m(p,x){let g=0,v=0,b=0,E=0,T=0;const M=x.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const A=p[_];if(A.isDirectionalLight){const U=a.directional[g];U.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),g++}else if(A.isSpotLight){const U=a.spot[b];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),U.direction.sub(o),U.direction.transformDirection(M),b++}else if(A.isRectAreaLight){const U=a.rectArea[E];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(M),u.identity(),c.copy(A.matrixWorld),c.premultiply(M),u.extractRotation(c),U.halfWidth.set(A.width*.5,0,0),U.halfHeight.set(0,A.height*.5,0),U.halfWidth.applyMatrix4(u),U.halfHeight.applyMatrix4(u),E++}else if(A.isPointLight){const U=a.point[v];U.position.setFromMatrixPosition(A.matrixWorld),U.position.applyMatrix4(M),v++}else if(A.isHemisphereLight){const U=a.hemi[T];U.direction.setFromMatrixPosition(A.matrixWorld),U.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:a}}function l_(s){const t=new PC(s),n=[],a=[];function o(x){p.camera=x,n.length=0,a.length=0}function c(x){n.push(x)}function u(x){a.push(x)}function h(){t.setup(n)}function m(x){t.setupView(n,x)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u}}function zC(s){let t=new WeakMap;function n(o,c=0){const u=t.get(o);let h;return u===void 0?(h=new l_(s),t.set(o,[h])):c>=u.length?(h=new l_(s),u.push(h)):h=u[c],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const BC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FC=`uniform sampler2D shadow_pass;
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
}`;function IC(s,t,n){let a=new Kp;const o=new wt,c=new wt,u=new qe,h=new sE({depthPacking:B2}),m=new rE,p={},x=n.maxTextureSize,g={[ps]:ti,[ti]:ps,[Ea]:Ea},v=new kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:BC,fragmentShader:FC}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const E=new ei;E.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Nn(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I_;let _=this.type;this.render=function(O,F,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;const D=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(ji),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const rt=_!==Ma&&this.type===Ma,mt=_===Ma&&this.type!==Ma;for(let lt=0,H=O.length;lt<H;lt++){const q=O[lt],Z=q.shadow;if(Z===void 0){de("WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const vt=Z.getFrameExtents();if(o.multiply(vt),c.copy(Z.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/vt.x),o.x=c.x*vt.x,Z.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/vt.y),o.y=c.y*vt.y,Z.mapSize.y=c.y)),Z.map===null||rt===!0||mt===!0){const B=this.type!==Ma?{minFilter:di,magFilter:di}:{};Z.map!==null&&Z.map.dispose(),Z.map=new zi(o.x,o.y,B),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}s.setRenderTarget(Z.map),s.clear();const bt=Z.getViewportCount();for(let B=0;B<bt;B++){const tt=Z.getViewport(B);u.set(c.x*tt.x,c.y*tt.y,c.x*tt.z,c.y*tt.w),Q.viewport(u),Z.updateMatrices(q,B),a=Z.getFrustum(),U(F,X,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===Ma&&L(Z,X),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(D,R,G)};function L(O,F){const X=t.update(T);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new zi(o.x,o.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,X,v,T,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,X,b,T,null)}function A(O,F,X,D){let R=null;const G=X.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)R=G;else if(R=X.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=R.uuid,rt=F.uuid;let mt=p[Q];mt===void 0&&(mt={},p[Q]=mt);let lt=mt[rt];lt===void 0&&(lt=R.clone(),mt[rt]=lt,F.addEventListener("dispose",I)),R=lt}if(R.visible=F.visible,R.wireframe=F.wireframe,D===Ma?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:g[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=s.properties.get(R);Q.light=X}return R}function U(O,F,X,D,R){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Ma)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,O.matrixWorld);const rt=t.update(O),mt=O.material;if(Array.isArray(mt)){const lt=rt.groups;for(let H=0,q=lt.length;H<q;H++){const Z=lt[H],vt=mt[Z.materialIndex];if(vt&&vt.visible){const bt=A(O,vt,D,R);O.onBeforeShadow(s,O,F,X,rt,bt,Z),s.renderBufferDirect(X,null,rt,bt,O,Z),O.onAfterShadow(s,O,F,X,rt,bt,Z)}}}else if(mt.visible){const lt=A(O,mt,D,R);O.onBeforeShadow(s,O,F,X,rt,lt,null),s.renderBufferDirect(X,null,rt,lt,O,null),O.onAfterShadow(s,O,F,X,rt,lt,null)}}const Q=O.children;for(let rt=0,mt=Q.length;rt<mt;rt++)U(Q[rt],F,X,D,R)}function I(O){O.target.removeEventListener("dispose",I);for(const X in p){const D=p[X],R=O.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const HC={[Gd]:kd,[jd]:qd,[Xd]:Yd,[qr]:Wd,[kd]:Gd,[qd]:jd,[Yd]:Xd,[Wd]:qr};function VC(s,t){function n(){let k=!1;const It=new qe;let Ot=null;const Pt=new qe(0,0,0,0);return{setMask:function(At){Ot!==At&&!k&&(s.colorMask(At,At,At,At),Ot=At)},setLocked:function(At){k=At},setClear:function(At,yt,Yt,he,Ve){Ve===!0&&(At*=he,yt*=he,Yt*=he),It.set(At,yt,Yt,he),Pt.equals(It)===!1&&(s.clearColor(At,yt,Yt,he),Pt.copy(It))},reset:function(){k=!1,Ot=null,Pt.set(-1,0,0,0)}}}function a(){let k=!1,It=!1,Ot=null,Pt=null,At=null;return{setReversed:function(yt){if(It!==yt){const Yt=t.get("EXT_clip_control");yt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),It=yt;const he=At;At=null,this.setClear(he)}},getReversed:function(){return It},setTest:function(yt){yt?ft(s.DEPTH_TEST):zt(s.DEPTH_TEST)},setMask:function(yt){Ot!==yt&&!k&&(s.depthMask(yt),Ot=yt)},setFunc:function(yt){if(It&&(yt=HC[yt]),Pt!==yt){switch(yt){case Gd:s.depthFunc(s.NEVER);break;case kd:s.depthFunc(s.ALWAYS);break;case jd:s.depthFunc(s.LESS);break;case qr:s.depthFunc(s.LEQUAL);break;case Xd:s.depthFunc(s.EQUAL);break;case Wd:s.depthFunc(s.GEQUAL);break;case qd:s.depthFunc(s.GREATER);break;case Yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=yt}},setLocked:function(yt){k=yt},setClear:function(yt){At!==yt&&(It&&(yt=1-yt),s.clearDepth(yt),At=yt)},reset:function(){k=!1,Ot=null,Pt=null,At=null,It=!1}}}function o(){let k=!1,It=null,Ot=null,Pt=null,At=null,yt=null,Yt=null,he=null,Ve=null;return{setTest:function(De){k||(De?ft(s.STENCIL_TEST):zt(s.STENCIL_TEST))},setMask:function(De){It!==De&&!k&&(s.stencilMask(De),It=De)},setFunc:function(De,Bn,ni){(Ot!==De||Pt!==Bn||At!==ni)&&(s.stencilFunc(De,Bn,ni),Ot=De,Pt=Bn,At=ni)},setOp:function(De,Bn,ni){(yt!==De||Yt!==Bn||he!==ni)&&(s.stencilOp(De,Bn,ni),yt=De,Yt=Bn,he=ni)},setLocked:function(De){k=De},setClear:function(De){Ve!==De&&(s.clearStencil(De),Ve=De)},reset:function(){k=!1,It=null,Ot=null,Pt=null,At=null,yt=null,Yt=null,he=null,Ve=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let x={},g={},v=new WeakMap,b=[],E=null,T=!1,M=null,_=null,L=null,A=null,U=null,I=null,O=null,F=new Se(0,0,0),X=0,D=!1,R=null,G=null,Q=null,rt=null,mt=null;const lt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=q>=1):Z.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=q>=2);let vt=null,bt={};const B=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),gt=new qe().fromArray(B),Ct=new qe().fromArray(tt);function kt(k,It,Ot,Pt){const At=new Uint8Array(4),yt=s.createTexture();s.bindTexture(k,yt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<Ot;Yt++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(It,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,At):s.texImage2D(It+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,At);return yt}const st={};st[s.TEXTURE_2D]=kt(s.TEXTURE_2D,s.TEXTURE_2D,1),st[s.TEXTURE_CUBE_MAP]=kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[s.TEXTURE_2D_ARRAY]=kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),st[s.TEXTURE_3D]=kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ft(s.DEPTH_TEST),u.setFunc(qr),Tt(!1),Dt(nv),ft(s.CULL_FACE),St(ji);function ft(k){x[k]!==!0&&(s.enable(k),x[k]=!0)}function zt(k){x[k]!==!1&&(s.disable(k),x[k]=!1)}function Gt(k,It){return g[k]!==It?(s.bindFramebuffer(k,It),g[k]=It,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=It),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=It),!0):!1}function Qt(k,It){let Ot=b,Pt=!1;if(k){Ot=v.get(It),Ot===void 0&&(Ot=[],v.set(It,Ot));const At=k.textures;if(Ot.length!==At.length||Ot[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,Yt=At.length;yt<Yt;yt++)Ot[yt]=s.COLOR_ATTACHMENT0+yt;Ot.length=At.length,Pt=!0}}else Ot[0]!==s.BACK&&(Ot[0]=s.BACK,Pt=!0);Pt&&s.drawBuffers(Ot)}function me(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const ze={[Is]:s.FUNC_ADD,[u2]:s.FUNC_SUBTRACT,[f2]:s.FUNC_REVERSE_SUBTRACT};ze[h2]=s.MIN,ze[d2]=s.MAX;const ce={[p2]:s.ZERO,[m2]:s.ONE,[x2]:s.SRC_COLOR,[Hd]:s.SRC_ALPHA,[S2]:s.SRC_ALPHA_SATURATE,[y2]:s.DST_COLOR,[v2]:s.DST_ALPHA,[g2]:s.ONE_MINUS_SRC_COLOR,[Vd]:s.ONE_MINUS_SRC_ALPHA,[b2]:s.ONE_MINUS_DST_COLOR,[_2]:s.ONE_MINUS_DST_ALPHA,[M2]:s.CONSTANT_COLOR,[E2]:s.ONE_MINUS_CONSTANT_COLOR,[T2]:s.CONSTANT_ALPHA,[A2]:s.ONE_MINUS_CONSTANT_ALPHA};function St(k,It,Ot,Pt,At,yt,Yt,he,Ve,De){if(k===ji){T===!0&&(zt(s.BLEND),T=!1);return}if(T===!1&&(ft(s.BLEND),T=!0),k!==c2){if(k!==M||De!==D){if((_!==Is||U!==Is)&&(s.blendEquation(s.FUNC_ADD),_=Is,U=Is),De)switch(k){case jr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Id:s.blendFunc(s.ONE,s.ONE);break;case iv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case av:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ln("WebGLState: Invalid blending: ",k);break}else switch(k){case jr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Id:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case iv:ln("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case av:ln("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ln("WebGLState: Invalid blending: ",k);break}L=null,A=null,I=null,O=null,F.set(0,0,0),X=0,M=k,D=De}return}At=At||It,yt=yt||Ot,Yt=Yt||Pt,(It!==_||At!==U)&&(s.blendEquationSeparate(ze[It],ze[At]),_=It,U=At),(Ot!==L||Pt!==A||yt!==I||Yt!==O)&&(s.blendFuncSeparate(ce[Ot],ce[Pt],ce[yt],ce[Yt]),L=Ot,A=Pt,I=yt,O=Yt),(he.equals(F)===!1||Ve!==X)&&(s.blendColor(he.r,he.g,he.b,Ve),F.copy(he),X=Ve),M=k,D=!1}function z(k,It){k.side===Ea?zt(s.CULL_FACE):ft(s.CULL_FACE);let Ot=k.side===ti;It&&(Ot=!Ot),Tt(Ot),k.blending===jr&&k.transparent===!1?St(ji):St(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Pt=k.stencilWrite;h.setTest(Pt),Pt&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Rt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):zt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function Dt(k){k!==r2?(ft(s.CULL_FACE),k!==G&&(k===nv?s.cullFace(s.BACK):k===o2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):zt(s.CULL_FACE),G=k}function Ut(k){k!==Q&&(H&&s.lineWidth(k),Q=k)}function Rt(k,It,Ot){k?(ft(s.POLYGON_OFFSET_FILL),(rt!==It||mt!==Ot)&&(s.polygonOffset(It,Ot),rt=It,mt=Ot)):zt(s.POLYGON_OFFSET_FILL)}function qt(k){k?ft(s.SCISSOR_TEST):zt(s.SCISSOR_TEST)}function Bt(k){k===void 0&&(k=s.TEXTURE0+lt-1),vt!==k&&(s.activeTexture(k),vt=k)}function Xt(k,It,Ot){Ot===void 0&&(vt===null?Ot=s.TEXTURE0+lt-1:Ot=vt);let Pt=bt[Ot];Pt===void 0&&(Pt={type:void 0,texture:void 0},bt[Ot]=Pt),(Pt.type!==k||Pt.texture!==It)&&(vt!==Ot&&(s.activeTexture(Ot),vt=Ot),s.bindTexture(k,It||st[k]),Pt.type=k,Pt.texture=It)}function P(){const k=bt[vt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function $(){try{s.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function dt(){try{s.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Mt(){try{s.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ut(){try{s.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ee(){try{s.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Ft(){try{s.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function ie(){try{s.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function $t(){try{s.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Et(){try{s.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Nt(k){gt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function ne(k){Ct.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Ct.copy(k))}function Jt(k,It){let Ot=p.get(It);Ot===void 0&&(Ot=new WeakMap,p.set(It,Ot));let Pt=Ot.get(k);Pt===void 0&&(Pt=s.getUniformBlockIndex(It,k.name),Ot.set(k,Pt))}function jt(k,It){const Pt=p.get(It).get(k);m.get(It)!==Pt&&(s.uniformBlockBinding(It,Pt,k.__bindingPointIndex),m.set(It,Pt))}function fe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},vt=null,bt={},g={},v=new WeakMap,b=[],E=null,T=!1,M=null,_=null,L=null,A=null,U=null,I=null,O=null,F=new Se(0,0,0),X=0,D=!1,R=null,G=null,Q=null,rt=null,mt=null,gt.set(0,0,s.canvas.width,s.canvas.height),Ct.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:ft,disable:zt,bindFramebuffer:Gt,drawBuffers:Qt,useProgram:me,setBlending:St,setMaterial:z,setFlipSided:Tt,setCullFace:Dt,setLineWidth:Ut,setPolygonOffset:Rt,setScissorTest:qt,activeTexture:Bt,bindTexture:Xt,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:$,texImage2D:$t,texImage3D:Et,updateUBOMapping:Jt,uniformBlockBinding:jt,texStorage2D:Ft,texStorage3D:ie,texSubImage2D:dt,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:ee,scissor:Nt,viewport:ne,reset:fe}}function GC(s,t,n,a,o,c,u){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new wt,x=new WeakMap;let g;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,w){return b?new OffscreenCanvas(P,w):Tu("canvas")}function T(P,w,$){let dt=1;const Mt=Xt(P);if((Mt.width>$||Mt.height>$)&&(dt=$/Math.max(Mt.width,Mt.height)),dt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ut=Math.floor(dt*Mt.width),ee=Math.floor(dt*Mt.height);g===void 0&&(g=E(ut,ee));const Ft=w?E(ut,ee):g;return Ft.width=ut,Ft.height=ee,Ft.getContext("2d").drawImage(P,0,0,ut,ee),de("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ut+"x"+ee+")."),Ft}else return"data"in P&&de("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),P;return P}function M(P){return P.generateMipmaps}function _(P){s.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(P,w,$,dt,Mt=!1){if(P!==null){if(s[P]!==void 0)return s[P];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ut=w;if(w===s.RED&&($===s.FLOAT&&(ut=s.R32F),$===s.HALF_FLOAT&&(ut=s.R16F),$===s.UNSIGNED_BYTE&&(ut=s.R8)),w===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(ut=s.R8UI),$===s.UNSIGNED_SHORT&&(ut=s.R16UI),$===s.UNSIGNED_INT&&(ut=s.R32UI),$===s.BYTE&&(ut=s.R8I),$===s.SHORT&&(ut=s.R16I),$===s.INT&&(ut=s.R32I)),w===s.RG&&($===s.FLOAT&&(ut=s.RG32F),$===s.HALF_FLOAT&&(ut=s.RG16F),$===s.UNSIGNED_BYTE&&(ut=s.RG8)),w===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(ut=s.RG8UI),$===s.UNSIGNED_SHORT&&(ut=s.RG16UI),$===s.UNSIGNED_INT&&(ut=s.RG32UI),$===s.BYTE&&(ut=s.RG8I),$===s.SHORT&&(ut=s.RG16I),$===s.INT&&(ut=s.RG32I)),w===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(ut=s.RGB8UI),$===s.UNSIGNED_SHORT&&(ut=s.RGB16UI),$===s.UNSIGNED_INT&&(ut=s.RGB32UI),$===s.BYTE&&(ut=s.RGB8I),$===s.SHORT&&(ut=s.RGB16I),$===s.INT&&(ut=s.RGB32I)),w===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(ut=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(ut=s.RGBA16UI),$===s.UNSIGNED_INT&&(ut=s.RGBA32UI),$===s.BYTE&&(ut=s.RGBA8I),$===s.SHORT&&(ut=s.RGBA16I),$===s.INT&&(ut=s.RGBA32I)),w===s.RGB&&($===s.UNSIGNED_INT_5_9_9_9_REV&&(ut=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(ut=s.R11F_G11F_B10F)),w===s.RGBA){const ee=Mt?Mu:Pe.getTransfer(dt);$===s.FLOAT&&(ut=s.RGBA32F),$===s.HALF_FLOAT&&(ut=s.RGBA16F),$===s.UNSIGNED_BYTE&&(ut=ee===Xe?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(ut=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(ut=s.RGB5_A1)}return(ut===s.R16F||ut===s.R32F||ut===s.RG16F||ut===s.RG32F||ut===s.RGBA16F||ut===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(P,w){let $;return P?w===null||w===Gs||w===xl?$=s.DEPTH24_STENCIL8:w===Aa?$=s.DEPTH32F_STENCIL8:w===ml&&($=s.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Gs||w===xl?$=s.DEPTH_COMPONENT24:w===Aa?$=s.DEPTH_COMPONENT32F:w===ml&&($=s.DEPTH_COMPONENT16),$}function I(P,w){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==di&&P.minFilter!==Ei?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function O(P){const w=P.target;w.removeEventListener("dispose",O),X(w),w.isVideoTexture&&x.delete(w)}function F(P){const w=P.target;w.removeEventListener("dispose",F),R(w)}function X(P){const w=a.get(P);if(w.__webglInit===void 0)return;const $=P.source,dt=v.get($);if(dt){const Mt=dt[w.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&D(P),Object.keys(dt).length===0&&v.delete($)}a.remove(P)}function D(P){const w=a.get(P);s.deleteTexture(w.__webglTexture);const $=P.source,dt=v.get($);delete dt[w.__cacheKey],u.memory.textures--}function R(P){const w=a.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),a.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(w.__webglFramebuffer[dt]))for(let Mt=0;Mt<w.__webglFramebuffer[dt].length;Mt++)s.deleteFramebuffer(w.__webglFramebuffer[dt][Mt]);else s.deleteFramebuffer(w.__webglFramebuffer[dt]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[dt])}else{if(Array.isArray(w.__webglFramebuffer))for(let dt=0;dt<w.__webglFramebuffer.length;dt++)s.deleteFramebuffer(w.__webglFramebuffer[dt]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let dt=0;dt<w.__webglColorRenderbuffer.length;dt++)w.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[dt]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=P.textures;for(let dt=0,Mt=$.length;dt<Mt;dt++){const ut=a.get($[dt]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),u.memory.textures--),a.remove($[dt])}a.remove(P)}let G=0;function Q(){G=0}function rt(){const P=G;return P>=o.maxTextures&&de("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),G+=1,P}function mt(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function lt(P,w){const $=a.get(P);if(P.isVideoTexture&&qt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const dt=P.image;if(dt===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{st($,P,w);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+w)}function H(P,w){const $=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){st($,P,w);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+w)}function q(P,w){const $=a.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){st($,P,w);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+w)}function Z(P,w){const $=a.get(P);if(P.version>0&&$.__version!==P.version){ft($,P,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+w)}const vt={[Qd]:s.REPEAT,[Ta]:s.CLAMP_TO_EDGE,[Jd]:s.MIRRORED_REPEAT},bt={[di]:s.NEAREST,[P2]:s.NEAREST_MIPMAP_NEAREST,[Ic]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[$h]:s.LINEAR_MIPMAP_NEAREST,[Vs]:s.LINEAR_MIPMAP_LINEAR},B={[I2]:s.NEVER,[X2]:s.ALWAYS,[H2]:s.LESS,[K_]:s.LEQUAL,[V2]:s.EQUAL,[j2]:s.GEQUAL,[G2]:s.GREATER,[k2]:s.NOTEQUAL};function tt(P,w){if(w.type===Aa&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ei||w.magFilter===$h||w.magFilter===Ic||w.magFilter===Vs||w.minFilter===Ei||w.minFilter===$h||w.minFilter===Ic||w.minFilter===Vs)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,vt[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,vt[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,vt[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,bt[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,bt[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,B[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===di||w.minFilter!==Ic&&w.minFilter!==Vs||w.type===Aa&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function gt(P,w){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",O));const dt=w.source;let Mt=v.get(dt);Mt===void 0&&(Mt={},v.set(dt,Mt));const ut=mt(w);if(ut!==P.__cacheKey){Mt[ut]===void 0&&(Mt[ut]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,$=!0),Mt[ut].usedTimes++;const ee=Mt[P.__cacheKey];ee!==void 0&&(Mt[P.__cacheKey].usedTimes--,ee.usedTimes===0&&D(w)),P.__cacheKey=ut,P.__webglTexture=Mt[ut].texture}return $}function Ct(P,w,$){return Math.floor(Math.floor(P/$)/w)}function kt(P,w,$,dt){const ut=P.updateRanges;if(ut.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,$,dt,w.data);else{ut.sort((Et,Nt)=>Et.start-Nt.start);let ee=0;for(let Et=1;Et<ut.length;Et++){const Nt=ut[ee],ne=ut[Et],Jt=Nt.start+Nt.count,jt=Ct(ne.start,w.width,4),fe=Ct(Nt.start,w.width,4);ne.start<=Jt+1&&jt===fe&&Ct(ne.start+ne.count-1,w.width,4)===jt?Nt.count=Math.max(Nt.count,ne.start+ne.count-Nt.start):(++ee,ut[ee]=ne)}ut.length=ee+1;const Ft=s.getParameter(s.UNPACK_ROW_LENGTH),ie=s.getParameter(s.UNPACK_SKIP_PIXELS),$t=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Et=0,Nt=ut.length;Et<Nt;Et++){const ne=ut[Et],Jt=Math.floor(ne.start/4),jt=Math.ceil(ne.count/4),fe=Jt%w.width,k=Math.floor(Jt/w.width),It=jt,Ot=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,fe),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),n.texSubImage2D(s.TEXTURE_2D,0,fe,k,It,Ot,$,dt,w.data)}P.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ft),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,$t)}}function st(P,w,$){let dt=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(dt=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(dt=s.TEXTURE_3D);const Mt=gt(P,w),ut=w.source;n.bindTexture(dt,P.__webglTexture,s.TEXTURE0+$);const ee=a.get(ut);if(ut.version!==ee.__version||Mt===!0){n.activeTexture(s.TEXTURE0+$);const Ft=Pe.getPrimaries(Pe.workingColorSpace),ie=w.colorSpace===fs?null:Pe.getPrimaries(w.colorSpace),$t=w.colorSpace===fs||Ft===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Et=T(w.image,!1,o.maxTextureSize);Et=Bt(w,Et);const Nt=c.convert(w.format,w.colorSpace),ne=c.convert(w.type);let Jt=A(w.internalFormat,Nt,ne,w.colorSpace,w.isVideoTexture);tt(dt,w);let jt;const fe=w.mipmaps,k=w.isVideoTexture!==!0,It=ee.__version===void 0||Mt===!0,Ot=ut.dataReady,Pt=I(w,Et);if(w.isDepthTexture)Jt=U(w.format===vl,w.type),It&&(k?n.texStorage2D(s.TEXTURE_2D,1,Jt,Et.width,Et.height):n.texImage2D(s.TEXTURE_2D,0,Jt,Et.width,Et.height,0,Nt,ne,null));else if(w.isDataTexture)if(fe.length>0){k&&It&&n.texStorage2D(s.TEXTURE_2D,Pt,Jt,fe[0].width,fe[0].height);for(let At=0,yt=fe.length;At<yt;At++)jt=fe[At],k?Ot&&n.texSubImage2D(s.TEXTURE_2D,At,0,0,jt.width,jt.height,Nt,ne,jt.data):n.texImage2D(s.TEXTURE_2D,At,Jt,jt.width,jt.height,0,Nt,ne,jt.data);w.generateMipmaps=!1}else k?(It&&n.texStorage2D(s.TEXTURE_2D,Pt,Jt,Et.width,Et.height),Ot&&kt(w,Et,Nt,ne)):n.texImage2D(s.TEXTURE_2D,0,Jt,Et.width,Et.height,0,Nt,ne,Et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){k&&It&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Jt,fe[0].width,fe[0].height,Et.depth);for(let At=0,yt=fe.length;At<yt;At++)if(jt=fe[At],w.format!==Oi)if(Nt!==null)if(k){if(Ot)if(w.layerUpdates.size>0){const Yt=Iv(jt.width,jt.height,w.format,w.type);for(const he of w.layerUpdates){const Ve=jt.data.subarray(he*Yt/jt.data.BYTES_PER_ELEMENT,(he+1)*Yt/jt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,he,jt.width,jt.height,1,Nt,Ve)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,jt.width,jt.height,Et.depth,Nt,jt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,At,Jt,jt.width,jt.height,Et.depth,0,jt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ot&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,At,0,0,0,jt.width,jt.height,Et.depth,Nt,ne,jt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,At,Jt,jt.width,jt.height,Et.depth,0,Nt,ne,jt.data)}else{k&&It&&n.texStorage2D(s.TEXTURE_2D,Pt,Jt,fe[0].width,fe[0].height);for(let At=0,yt=fe.length;At<yt;At++)jt=fe[At],w.format!==Oi?Nt!==null?k?Ot&&n.compressedTexSubImage2D(s.TEXTURE_2D,At,0,0,jt.width,jt.height,Nt,jt.data):n.compressedTexImage2D(s.TEXTURE_2D,At,Jt,jt.width,jt.height,0,jt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ot&&n.texSubImage2D(s.TEXTURE_2D,At,0,0,jt.width,jt.height,Nt,ne,jt.data):n.texImage2D(s.TEXTURE_2D,At,Jt,jt.width,jt.height,0,Nt,ne,jt.data)}else if(w.isDataArrayTexture)if(k){if(It&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Jt,Et.width,Et.height,Et.depth),Ot)if(w.layerUpdates.size>0){const At=Iv(Et.width,Et.height,w.format,w.type);for(const yt of w.layerUpdates){const Yt=Et.data.subarray(yt*At/Et.data.BYTES_PER_ELEMENT,(yt+1)*At/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,Et.width,Et.height,1,Nt,ne,Yt)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Nt,ne,Et.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Jt,Et.width,Et.height,Et.depth,0,Nt,ne,Et.data);else if(w.isData3DTexture)k?(It&&n.texStorage3D(s.TEXTURE_3D,Pt,Jt,Et.width,Et.height,Et.depth),Ot&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Nt,ne,Et.data)):n.texImage3D(s.TEXTURE_3D,0,Jt,Et.width,Et.height,Et.depth,0,Nt,ne,Et.data);else if(w.isFramebufferTexture){if(It)if(k)n.texStorage2D(s.TEXTURE_2D,Pt,Jt,Et.width,Et.height);else{let At=Et.width,yt=Et.height;for(let Yt=0;Yt<Pt;Yt++)n.texImage2D(s.TEXTURE_2D,Yt,Jt,At,yt,0,Nt,ne,null),At>>=1,yt>>=1}}else if(fe.length>0){if(k&&It){const At=Xt(fe[0]);n.texStorage2D(s.TEXTURE_2D,Pt,Jt,At.width,At.height)}for(let At=0,yt=fe.length;At<yt;At++)jt=fe[At],k?Ot&&n.texSubImage2D(s.TEXTURE_2D,At,0,0,Nt,ne,jt):n.texImage2D(s.TEXTURE_2D,At,Jt,Nt,ne,jt);w.generateMipmaps=!1}else if(k){if(It){const At=Xt(Et);n.texStorage2D(s.TEXTURE_2D,Pt,Jt,At.width,At.height)}Ot&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Nt,ne,Et)}else n.texImage2D(s.TEXTURE_2D,0,Jt,Nt,ne,Et);M(w)&&_(dt),ee.__version=ut.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ft(P,w,$){if(w.image.length!==6)return;const dt=gt(P,w),Mt=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+$);const ut=a.get(Mt);if(Mt.version!==ut.__version||dt===!0){n.activeTexture(s.TEXTURE0+$);const ee=Pe.getPrimaries(Pe.workingColorSpace),Ft=w.colorSpace===fs?null:Pe.getPrimaries(w.colorSpace),ie=w.colorSpace===fs||ee===Ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const $t=w.isCompressedTexture||w.image[0].isCompressedTexture,Et=w.image[0]&&w.image[0].isDataTexture,Nt=[];for(let yt=0;yt<6;yt++)!$t&&!Et?Nt[yt]=T(w.image[yt],!0,o.maxCubemapSize):Nt[yt]=Et?w.image[yt].image:w.image[yt],Nt[yt]=Bt(w,Nt[yt]);const ne=Nt[0],Jt=c.convert(w.format,w.colorSpace),jt=c.convert(w.type),fe=A(w.internalFormat,Jt,jt,w.colorSpace),k=w.isVideoTexture!==!0,It=ut.__version===void 0||dt===!0,Ot=Mt.dataReady;let Pt=I(w,ne);tt(s.TEXTURE_CUBE_MAP,w);let At;if($t){k&&It&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,fe,ne.width,ne.height);for(let yt=0;yt<6;yt++){At=Nt[yt].mipmaps;for(let Yt=0;Yt<At.length;Yt++){const he=At[Yt];w.format!==Oi?Jt!==null?k?Ot&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt,0,0,he.width,he.height,Jt,he.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt,fe,he.width,he.height,0,he.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt,0,0,he.width,he.height,Jt,jt,he.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt,fe,he.width,he.height,0,Jt,jt,he.data)}}}else{if(At=w.mipmaps,k&&It){At.length>0&&Pt++;const yt=Xt(Nt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,fe,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Et){k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Nt[yt].width,Nt[yt].height,Jt,jt,Nt[yt].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,fe,Nt[yt].width,Nt[yt].height,0,Jt,jt,Nt[yt].data);for(let Yt=0;Yt<At.length;Yt++){const Ve=At[Yt].image[yt].image;k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt+1,0,0,Ve.width,Ve.height,Jt,jt,Ve.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt+1,fe,Ve.width,Ve.height,0,Jt,jt,Ve.data)}}else{k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Jt,jt,Nt[yt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,fe,Jt,jt,Nt[yt]);for(let Yt=0;Yt<At.length;Yt++){const he=At[Yt];k?Ot&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt+1,0,0,Jt,jt,he.image[yt]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Yt+1,fe,Jt,jt,he.image[yt])}}}M(w)&&_(s.TEXTURE_CUBE_MAP),ut.__version=Mt.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function zt(P,w,$,dt,Mt,ut){const ee=c.convert($.format,$.colorSpace),Ft=c.convert($.type),ie=A($.internalFormat,ee,Ft,$.colorSpace),$t=a.get(w),Et=a.get($);if(Et.__renderTarget=w,!$t.__hasExternalTextures){const Nt=Math.max(1,w.width>>ut),ne=Math.max(1,w.height>>ut);Mt===s.TEXTURE_3D||Mt===s.TEXTURE_2D_ARRAY?n.texImage3D(Mt,ut,ie,Nt,ne,w.depth,0,ee,Ft,null):n.texImage2D(Mt,ut,ie,Nt,ne,0,ee,Ft,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),Rt(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,Mt,Et.__webglTexture,0,Ut(w)):(Mt===s.TEXTURE_2D||Mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,dt,Mt,Et.__webglTexture,ut),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(P,w,$){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const dt=w.depthTexture,Mt=dt&&dt.isDepthTexture?dt.type:null,ut=U(w.stencilBuffer,Mt),ee=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=Ut(w);Rt(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft,ut,w.width,w.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,ut,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ut,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,P)}else{const dt=w.textures;for(let Mt=0;Mt<dt.length;Mt++){const ut=dt[Mt],ee=c.convert(ut.format,ut.colorSpace),Ft=c.convert(ut.type),ie=A(ut.internalFormat,ee,Ft,ut.colorSpace),$t=Ut(w);$&&Rt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,ie,w.width,w.height):Rt(w)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,ie,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ie,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qt(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=a.get(w.depthTexture);dt.__renderTarget=w,(!dt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),lt(w.depthTexture,0);const Mt=dt.__webglTexture,ut=Ut(w);if(w.depthTexture.format===gl)Rt(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0);else if(w.depthTexture.format===vl)Rt(w)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0,ut):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function me(P){const w=a.get(P),$=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const dt=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),dt){const Mt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,dt.removeEventListener("dispose",Mt)};dt.addEventListener("dispose",Mt),w.__depthDisposeCallback=Mt}w.__boundDepthTexture=dt}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const dt=P.texture.mipmaps;dt&&dt.length>0?Qt(w.__webglFramebuffer[0],P):Qt(w.__webglFramebuffer,P)}else if($){w.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[dt]),w.__webglDepthbuffer[dt]===void 0)w.__webglDepthbuffer[dt]=s.createRenderbuffer(),Gt(w.__webglDepthbuffer[dt],P,!1);else{const Mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=w.__webglDepthbuffer[dt];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,ut)}}else{const dt=P.texture.mipmaps;if(dt&&dt.length>0?n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Gt(w.__webglDepthbuffer,P,!1);else{const Mt=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,ut)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(P,w,$){const dt=a.get(P);w!==void 0&&zt(dt.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&me(P)}function ce(P){const w=P.texture,$=a.get(P),dt=a.get(w);P.addEventListener("dispose",F);const Mt=P.textures,ut=P.isWebGLCubeRenderTarget===!0,ee=Mt.length>1;if(ee||(dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture()),dt.__version=w.version,u.memory.textures++),ut){$.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[Ft]=[];for(let ie=0;ie<w.mipmaps.length;ie++)$.__webglFramebuffer[Ft][ie]=s.createFramebuffer()}else $.__webglFramebuffer[Ft]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ft=0;Ft<w.mipmaps.length;Ft++)$.__webglFramebuffer[Ft]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(ee)for(let Ft=0,ie=Mt.length;Ft<ie;Ft++){const $t=a.get(Mt[Ft]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&Rt(P)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ft=0;Ft<Mt.length;Ft++){const ie=Mt[Ft];$.__webglColorRenderbuffer[Ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[Ft]);const $t=c.convert(ie.format,ie.colorSpace),Et=c.convert(ie.type),Nt=A(ie.internalFormat,$t,Et,ie.colorSpace,P.isXRRenderTarget===!0),ne=Ut(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,Nt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,$.__webglColorRenderbuffer[Ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Gt($.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){n.bindTexture(s.TEXTURE_CUBE_MAP,dt.__webglTexture),tt(s.TEXTURE_CUBE_MAP,w);for(let Ft=0;Ft<6;Ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)zt($.__webglFramebuffer[Ft][ie],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,ie);else zt($.__webglFramebuffer[Ft],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);M(w)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){for(let Ft=0,ie=Mt.length;Ft<ie;Ft++){const $t=Mt[Ft],Et=a.get($t);let Nt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Nt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Nt,Et.__webglTexture),tt(Nt,$t),zt($.__webglFramebuffer,P,$t,s.COLOR_ATTACHMENT0+Ft,Nt,0),M($t)&&_(Nt)}n.unbindTexture()}else{let Ft=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ft=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ft,dt.__webglTexture),tt(Ft,w),w.mipmaps&&w.mipmaps.length>0)for(let ie=0;ie<w.mipmaps.length;ie++)zt($.__webglFramebuffer[ie],P,w,s.COLOR_ATTACHMENT0,Ft,ie);else zt($.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,Ft,0);M(w)&&_(Ft),n.unbindTexture()}P.depthBuffer&&me(P)}function St(P){const w=P.textures;for(let $=0,dt=w.length;$<dt;$++){const Mt=w[$];if(M(Mt)){const ut=L(P),ee=a.get(Mt).__webglTexture;n.bindTexture(ut,ee),_(ut),n.unbindTexture()}}}const z=[],Tt=[];function Dt(P){if(P.samples>0){if(Rt(P)===!1){const w=P.textures,$=P.width,dt=P.height;let Mt=s.COLOR_BUFFER_BIT;const ut=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=a.get(P),Ft=w.length>1;if(Ft)for(let $t=0;$t<w.length;$t++)n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,ee.__webglMultisampledFramebuffer);const ie=P.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglFramebuffer);for(let $t=0;$t<w.length;$t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Mt|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Mt|=s.STENCIL_BUFFER_BIT)),Ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ee.__webglColorRenderbuffer[$t]);const Et=a.get(w[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Et,0)}s.blitFramebuffer(0,0,$,dt,0,0,$,dt,Mt,s.NEAREST),m===!0&&(z.length=0,Tt.length=0,z.push(s.COLOR_ATTACHMENT0+$t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(z.push(ut),Tt.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,z))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ft)for(let $t=0;$t<w.length;$t++){n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,ee.__webglColorRenderbuffer[$t]);const Et=a.get(w[$t]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,Et,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,ee.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ut(P){return Math.min(o.maxSamples,P.samples)}function Rt(P){const w=a.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qt(P){const w=u.render.frame;x.get(P)!==w&&(x.set(P,w),P.update())}function Bt(P,w){const $=P.colorSpace,dt=P.format,Mt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Kr&&$!==fs&&(Pe.getTransfer($)===Xe?(dt!==Oi||Mt!==qi)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ln("WebGLTextures: Unsupported texture color space:",$)),w}function Xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=Q,this.setTexture2D=lt,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=Z,this.rebindTextures=ze,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=Rt}function kC(s,t){function n(a,o=fs){let c;const u=Pe.getTransfer(o);if(a===qi)return s.UNSIGNED_BYTE;if(a===Vp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Gp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===j_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===X_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===G_)return s.BYTE;if(a===k_)return s.SHORT;if(a===ml)return s.UNSIGNED_SHORT;if(a===Hp)return s.INT;if(a===Gs)return s.UNSIGNED_INT;if(a===Aa)return s.FLOAT;if(a===Xi)return s.HALF_FLOAT;if(a===W_)return s.ALPHA;if(a===q_)return s.RGB;if(a===Oi)return s.RGBA;if(a===gl)return s.DEPTH_COMPONENT;if(a===vl)return s.DEPTH_STENCIL;if(a===Y_)return s.RED;if(a===kp)return s.RED_INTEGER;if(a===jp)return s.RG;if(a===Xp)return s.RG_INTEGER;if(a===Wp)return s.RGBA_INTEGER;if(a===du||a===pu||a===mu||a===xu)if(u===Xe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===du)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===du)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===pu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===mu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===xu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===$d||a===tp||a===ep||a===np)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===tp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===ep)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===np)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ip||a===ap||a===sp)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ip||a===ap)return u===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===sp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp||a===dp||a===pp||a===mp||a===xp||a===gp||a===vp||a===_p)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===rp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===op)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===lp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===cp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===up)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===hp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===dp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===pp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===mp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===xp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vp)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===_p)return u===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===yp||a===bp||a===Sp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===yp)return u===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===bp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Mp||a===Ep||a===Tp||a===Ap)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(a===Mp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Tp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Ap)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===xl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const jC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XC=`
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

}`;class WC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new cy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new kn({vertexShader:jC,fragmentShader:XC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Nn(new Pu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qC extends Ws{constructor(t,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,x=null,g=null,v=null,b=null,E=null;const T=typeof XRWebGLBinding<"u",M=new WC,_={},L=n.getContextAttributes();let A=null,U=null;const I=[],O=[],F=new wt;let X=null;const D=new $n;D.viewport=new qe;const R=new $n;R.viewport=new qe;const G=[D,R],Q=new uE;let rt=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ft=I[st];return ft===void 0&&(ft=new bd,I[st]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(st){let ft=I[st];return ft===void 0&&(ft=new bd,I[st]=ft),ft.getGripSpace()},this.getHand=function(st){let ft=I[st];return ft===void 0&&(ft=new bd,I[st]=ft),ft.getHandSpace()};function lt(st){const ft=O.indexOf(st.inputSource);if(ft===-1)return;const zt=I[ft];zt!==void 0&&(zt.update(st.inputSource,st.frame,p||u),zt.dispatchEvent({type:st.type,data:st.inputSource}))}function H(){o.removeEventListener("select",lt),o.removeEventListener("selectstart",lt),o.removeEventListener("selectend",lt),o.removeEventListener("squeeze",lt),o.removeEventListener("squeezestart",lt),o.removeEventListener("squeezeend",lt),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",q);for(let st=0;st<I.length;st++){const ft=O[st];ft!==null&&(O[st]=null,I[st].disconnect(ft))}rt=null,mt=null,M.reset();for(const st in _)delete _[st];t.setRenderTarget(A),b=null,v=null,g=null,o=null,U=null,kt.stop(),a.isPresenting=!1,t.setPixelRatio(X),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,a.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){h=st,a.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(st){if(o=st,o!==null){if(A=t.getRenderTarget(),o.addEventListener("select",lt),o.addEventListener("selectstart",lt),o.addEventListener("selectend",lt),o.addEventListener("squeeze",lt),o.addEventListener("squeezestart",lt),o.addEventListener("squeezeend",lt),o.addEventListener("end",H),o.addEventListener("inputsourceschange",q),L.xrCompatible!==!0&&await n.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,Gt=null,Qt=null;L.depth&&(Qt=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,zt=L.stencil?vl:gl,Gt=L.stencil?xl:Gs);const me={colorFormat:n.RGBA8,depthFormat:Qt,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(me),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new zi(v.textureWidth,v.textureHeight,{format:Oi,type:qi,depthTexture:new ly(v.textureWidth,v.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const zt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,zt),o.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),U=new zi(b.framebufferWidth,b.framebufferHeight,{format:Oi,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),kt.setContext(o),kt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(st){for(let ft=0;ft<st.removed.length;ft++){const zt=st.removed[ft],Gt=O.indexOf(zt);Gt>=0&&(O[Gt]=null,I[Gt].disconnect(zt))}for(let ft=0;ft<st.added.length;ft++){const zt=st.added[ft];let Gt=O.indexOf(zt);if(Gt===-1){for(let me=0;me<I.length;me++)if(me>=O.length){O.push(zt),Gt=me;break}else if(O[me]===null){O[me]=zt,Gt=me;break}if(Gt===-1)break}const Qt=I[Gt];Qt&&Qt.connect(zt)}}const Z=new j,vt=new j;function bt(st,ft,zt){Z.setFromMatrixPosition(ft.matrixWorld),vt.setFromMatrixPosition(zt.matrixWorld);const Gt=Z.distanceTo(vt),Qt=ft.projectionMatrix.elements,me=zt.projectionMatrix.elements,ze=Qt[14]/(Qt[10]-1),ce=Qt[14]/(Qt[10]+1),St=(Qt[9]+1)/Qt[5],z=(Qt[9]-1)/Qt[5],Tt=(Qt[8]-1)/Qt[0],Dt=(me[8]+1)/me[0],Ut=ze*Tt,Rt=ze*Dt,qt=Gt/(-Tt+Dt),Bt=qt*-Tt;if(ft.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(Bt),st.translateZ(qt),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Qt[10]===-1)st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Xt=ze+qt,P=ce+qt,w=Ut-Bt,$=Rt+(Gt-Bt),dt=St*ce/P*Xt,Mt=z*ce/P*Xt;st.projectionMatrix.makePerspective(w,$,dt,Mt,Xt,P),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function B(st,ft){ft===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ft.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(o===null)return;let ft=st.near,zt=st.far;M.texture!==null&&(M.depthNear>0&&(ft=M.depthNear),M.depthFar>0&&(zt=M.depthFar)),Q.near=R.near=D.near=ft,Q.far=R.far=D.far=zt,(rt!==Q.near||mt!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),rt=Q.near,mt=Q.far),Q.layers.mask=st.layers.mask|6,D.layers.mask=Q.layers.mask&3,R.layers.mask=Q.layers.mask&5;const Gt=st.parent,Qt=Q.cameras;B(Q,Gt);for(let me=0;me<Qt.length;me++)B(Qt[me],Gt);Qt.length===2?bt(Q,D,R):Q.projectionMatrix.copy(D.projectionMatrix),tt(st,Q,Gt)};function tt(st,ft,zt){zt===null?st.matrix.copy(ft.matrixWorld):(st.matrix.copy(zt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ft.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=wp*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(v===null&&b===null))return m},this.setFoveation=function(st){m=st,v!==null&&(v.fixedFoveation=st),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=st)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(st){return _[st]};let gt=null;function Ct(st,ft){if(x=ft.getViewerPose(p||u),E=ft,x!==null){const zt=x.views;b!==null&&(t.setRenderTargetFramebuffer(U,b.framebuffer),t.setRenderTarget(U));let Gt=!1;zt.length!==Q.cameras.length&&(Q.cameras.length=0,Gt=!0);for(let ce=0;ce<zt.length;ce++){const St=zt[ce];let z=null;if(b!==null)z=b.getViewport(St);else{const Dt=g.getViewSubImage(v,St);z=Dt.viewport,ce===0&&(t.setRenderTargetTextures(U,Dt.colorTexture,Dt.depthStencilTexture),t.setRenderTarget(U))}let Tt=G[ce];Tt===void 0&&(Tt=new $n,Tt.layers.enable(ce),Tt.viewport=new qe,G[ce]=Tt),Tt.matrix.fromArray(St.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(St.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(z.x,z.y,z.width,z.height),ce===0&&(Q.matrix.copy(Tt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Gt===!0&&Q.cameras.push(Tt)}const Qt=o.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){g=a.getBinding();const ce=g.getDepthInformation(zt[0]);ce&&ce.isValid&&ce.texture&&M.init(ce,o.renderState)}if(Qt&&Qt.includes("camera-access")&&T){t.state.unbindTexture(),g=a.getBinding();for(let ce=0;ce<zt.length;ce++){const St=zt[ce].camera;if(St){let z=_[St];z||(z=new cy,_[St]=z);const Tt=g.getCameraImage(St);z.sourceTexture=Tt}}}}for(let zt=0;zt<I.length;zt++){const Gt=O[zt],Qt=I[zt];Gt!==null&&Qt!==void 0&&Qt.update(Gt,ft,p||u)}gt&&gt(st,ft),ft.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ft}),E=null}const kt=new yy;kt.setAnimationLoop(Ct),this.setAnimationLoop=function(st){gt=st},this.dispose=function(){}}}const Fs=new Yi,YC=new en;function ZC(s,t){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function a(M,_){_.color.getRGB(M.fogColor.value,iy(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,L,A,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),x(M,_)):_.isMeshStandardMaterial?(c(M,_),v(M,_),_.isMeshPhysicalMaterial&&b(M,_,U)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),T(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(u(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,L,A):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===ti&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===ti&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const L=t.get(_),A=L.envMap,U=L.envMapRotation;A&&(M.envMap.value=A,Fs.copy(U),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),M.envMapRotation.value.setFromMatrix4(YC.makeRotationFromEuler(Fs)),M.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function u(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,L,A){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*L,M.scale.value=A*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function v(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function b(M,_,L){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ti&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function T(M,_){const L=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function KC(s,t,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,A){const U=A.program;a.uniformBlockBinding(L,U)}function p(L,A){let U=o[L.id];U===void 0&&(E(L),U=x(L),o[L.id]=U,L.addEventListener("dispose",M));const I=A.program;a.updateUBOMapping(L,I);const O=t.render.frame;c[L.id]!==O&&(v(L),c[L.id]=O)}function x(L){const A=g();L.__bindingPointIndex=A;const U=s.createBuffer(),I=L.__size,O=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,I,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,A,U),U}function g(){for(let L=0;L<h;L++)if(u.indexOf(L)===-1)return u.push(L),L;return ln("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const A=o[L.id],U=L.uniforms,I=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,A);for(let O=0,F=U.length;O<F;O++){const X=Array.isArray(U[O])?U[O]:[U[O]];for(let D=0,R=X.length;D<R;D++){const G=X[D];if(b(G,O,D,I)===!0){const Q=G.__offset,rt=Array.isArray(G.value)?G.value:[G.value];let mt=0;for(let lt=0;lt<rt.length;lt++){const H=rt[lt],q=T(H);typeof H=="number"||typeof H=="boolean"?(G.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,Q+mt,G.__data)):H.isMatrix3?(G.__data[0]=H.elements[0],G.__data[1]=H.elements[1],G.__data[2]=H.elements[2],G.__data[3]=0,G.__data[4]=H.elements[3],G.__data[5]=H.elements[4],G.__data[6]=H.elements[5],G.__data[7]=0,G.__data[8]=H.elements[6],G.__data[9]=H.elements[7],G.__data[10]=H.elements[8],G.__data[11]=0):(H.toArray(G.__data,mt),mt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(L,A,U,I){const O=L.value,F=A+"_"+U;if(I[F]===void 0)return typeof O=="number"||typeof O=="boolean"?I[F]=O:I[F]=O.clone(),!0;{const X=I[F];if(typeof O=="number"||typeof O=="boolean"){if(X!==O)return I[F]=O,!0}else if(X.equals(O)===!1)return X.copy(O),!0}return!1}function E(L){const A=L.uniforms;let U=0;const I=16;for(let F=0,X=A.length;F<X;F++){const D=Array.isArray(A[F])?A[F]:[A[F]];for(let R=0,G=D.length;R<G;R++){const Q=D[R],rt=Array.isArray(Q.value)?Q.value:[Q.value];for(let mt=0,lt=rt.length;mt<lt;mt++){const H=rt[mt],q=T(H),Z=U%I,vt=Z%q.boundary,bt=Z+vt;U+=vt,bt!==0&&I-bt<q.storage&&(U+=I-bt),Q.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=U,U+=q.storage}}}const O=U%I;return O>0&&(U+=I-O),L.__size=U,L.__cache={},this}function T(L){const A={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=48,A.storage=48):L.isMatrix4?(A.boundary=64,A.storage=64):L.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",L),A}function M(L){const A=L.target;A.removeEventListener("dispose",M);const U=u.indexOf(A.__bindingPointIndex);u.splice(U,1),s.deleteBuffer(o[A.id]),delete o[A.id],delete c[A.id]}function _(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:m,update:p,dispose:_}}const QC=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Sa=null;function JC(){return Sa===null&&(Sa=new _3(QC,32,32,jp,Xi),Sa.minFilter=Ei,Sa.magFilter=Ei,Sa.wrapS=Ta,Sa.wrapT=Ta,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class Ty{constructor(t={}){const{canvas:n=W2(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const E=new Set([Wp,Xp,kp]),T=new Set([qi,Gs,ml,xl,Vp,Gp]),M=new Uint32Array(4),_=new Int32Array(4);let L=null,A=null;const U=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let F=!1;this._outputColorSpace=Mi;let X=0,D=0,R=null,G=-1,Q=null;const rt=new qe,mt=new qe;let lt=null;const H=new Se(0);let q=0,Z=n.width,vt=n.height,bt=1,B=null,tt=null;const gt=new qe(0,0,Z,vt),Ct=new qe(0,0,Z,vt);let kt=!1;const st=new Kp;let ft=!1,zt=!1;const Gt=new en,Qt=new j,me=new qe,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function St(){return R===null?bt:1}let z=a;function Tt(N,Y){return n.getContext(N,Y)}try{const N={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fp}`),n.addEventListener("webglcontextlost",At,!1),n.addEventListener("webglcontextrestored",yt,!1),n.addEventListener("webglcontextcreationerror",Yt,!1),z===null){const Y="webgl2";if(z=Tt(Y,N),z===null)throw Tt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw N("WebGLRenderer: "+N.message),N}let Dt,Ut,Rt,qt,Bt,Xt,P,w,$,dt,Mt,ut,ee,Ft,ie,$t,Et,Nt,ne,Jt,jt,fe,k,It;function Ot(){Dt=new ow(z),Dt.init(),fe=new kC(z,Dt),Ut=new JA(z,Dt,t,fe),Rt=new VC(z,Dt),Ut.reversedDepthBuffer&&v&&Rt.buffers.depth.setReversed(!0),qt=new uw(z),Bt=new CC,Xt=new GC(z,Dt,Rt,Bt,Ut,fe,qt),P=new tw(O),w=new rw(O),$=new pE(z),k=new KA(z,$),dt=new lw(z,$,qt,k),Mt=new hw(z,dt,$,qt),ne=new fw(z,Ut,Xt),$t=new $A(Bt),ut=new wC(O,P,w,Dt,Ut,k,$t),ee=new ZC(O,Bt),Ft=new NC,ie=new zC(Dt),Nt=new ZA(O,P,w,Rt,Mt,b,m),Et=new IC(O,Mt,Ut),It=new KC(z,qt,Ut,Rt),Jt=new QA(z,Dt,qt),jt=new cw(z,Dt,qt),qt.programs=ut.programs,O.capabilities=Ut,O.extensions=Dt,O.properties=Bt,O.renderLists=Ft,O.shadowMap=Et,O.state=Rt,O.info=qt}Ot();const Pt=new qC(O,z);this.xr=Pt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const N=Dt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Dt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(N){N!==void 0&&(bt=N,this.setSize(Z,vt,!1))},this.getSize=function(N){return N.set(Z,vt)},this.setSize=function(N,Y,ot=!0){if(Pt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=N,vt=Y,n.width=Math.floor(N*bt),n.height=Math.floor(Y*bt),ot===!0&&(n.style.width=N+"px",n.style.height=Y+"px"),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(Z*bt,vt*bt).floor()},this.setDrawingBufferSize=function(N,Y,ot){Z=N,vt=Y,bt=ot,n.width=Math.floor(N*ot),n.height=Math.floor(Y*ot),this.setViewport(0,0,N,Y)},this.getCurrentViewport=function(N){return N.copy(rt)},this.getViewport=function(N){return N.copy(gt)},this.setViewport=function(N,Y,ot,it){N.isVector4?gt.set(N.x,N.y,N.z,N.w):gt.set(N,Y,ot,it),Rt.viewport(rt.copy(gt).multiplyScalar(bt).round())},this.getScissor=function(N){return N.copy(Ct)},this.setScissor=function(N,Y,ot,it){N.isVector4?Ct.set(N.x,N.y,N.z,N.w):Ct.set(N,Y,ot,it),Rt.scissor(mt.copy(Ct).multiplyScalar(bt).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(N){Rt.setScissorTest(kt=N)},this.setOpaqueSort=function(N){B=N},this.setTransparentSort=function(N){tt=N},this.getClearColor=function(N){return N.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,ot=!0){let it=0;if(N){let J=!1;if(R!==null){const Lt=R.texture.format;J=E.has(Lt)}if(J){const Lt=R.texture.type,Ht=T.has(Lt),Wt=Nt.getClearColor(),Zt=Nt.getClearAlpha(),oe=Wt.r,ue=Wt.g,ae=Wt.b;Ht?(M[0]=oe,M[1]=ue,M[2]=ae,M[3]=Zt,z.clearBufferuiv(z.COLOR,0,M)):(_[0]=oe,_[1]=ue,_[2]=ae,_[3]=Zt,z.clearBufferiv(z.COLOR,0,_))}else it|=z.COLOR_BUFFER_BIT}Y&&(it|=z.DEPTH_BUFFER_BIT),ot&&(it|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",At,!1),n.removeEventListener("webglcontextrestored",yt,!1),n.removeEventListener("webglcontextcreationerror",Yt,!1),Nt.dispose(),Ft.dispose(),ie.dispose(),Bt.dispose(),P.dispose(),w.dispose(),Mt.dispose(),k.dispose(),It.dispose(),ut.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",so),Pt.removeEventListener("sessionend",ro),Ai.stop()};function At(N){N.preventDefault(),cv("WebGLRenderer: Context Lost."),F=!0}function yt(){cv("WebGLRenderer: Context Restored."),F=!1;const N=qt.autoReset,Y=Et.enabled,ot=Et.autoUpdate,it=Et.needsUpdate,J=Et.type;Ot(),qt.autoReset=N,Et.enabled=Y,Et.autoUpdate=ot,Et.needsUpdate=it,Et.type=J}function Yt(N){ln("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function he(N){const Y=N.target;Y.removeEventListener("dispose",he),Ve(Y)}function Ve(N){De(N),Bt.remove(N)}function De(N){const Y=Bt.get(N).programs;Y!==void 0&&(Y.forEach(function(ot){ut.releaseProgram(ot)}),N.isShaderMaterial&&ut.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,ot,it,J,Lt){Y===null&&(Y=ze);const Ht=J.isMesh&&J.matrixWorld.determinant()<0,Wt=Fu(N,Y,ot,it,J);Rt.setMaterial(it,Ht);let Zt=ot.index,oe=1;if(it.wireframe===!0){if(Zt=dt.getWireframeAttribute(ot),Zt===void 0)return;oe=2}const ue=ot.drawRange,ae=ot.attributes.position;let ge=ue.start*oe,Ne=(ue.start+ue.count)*oe;Lt!==null&&(ge=Math.max(ge,Lt.start*oe),Ne=Math.min(Ne,(Lt.start+Lt.count)*oe)),Zt!==null?(ge=Math.max(ge,0),Ne=Math.min(Ne,Zt.count)):ae!=null&&(ge=Math.max(ge,0),Ne=Math.min(Ne,ae.count));const Le=Ne-ge;if(Le<0||Le===1/0)return;k.setup(J,it,Wt,ot,Zt);let we,Fe=Jt;if(Zt!==null&&(we=$.get(Zt),Fe=jt,Fe.setIndex(we)),J.isMesh)it.wireframe===!0?(Rt.setLineWidth(it.wireframeLinewidth*St()),Fe.setMode(z.LINES)):Fe.setMode(z.TRIANGLES);else if(J.isLine){let re=it.linewidth;re===void 0&&(re=1),Rt.setLineWidth(re*St()),J.isLineSegments?Fe.setMode(z.LINES):J.isLineLoop?Fe.setMode(z.LINE_LOOP):Fe.setMode(z.LINE_STRIP)}else J.isPoints?Fe.setMode(z.POINTS):J.isSprite&&Fe.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)_l("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Fe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const re=J._multiDrawStarts,Ye=J._multiDrawCounts,Ce=J._multiDrawCount,Tn=Zt?$.get(Zt).bytesPerElement:1,Ua=Bt.get(it).currentProgram.getUniforms();for(let Ke=0;Ke<Ce;Ke++)Ua.setValue(z,"_gl_DrawID",Ke),Fe.render(re[Ke]/Tn,Ye[Ke])}else if(J.isInstancedMesh)Fe.renderInstances(ge,Le,J.count);else if(ot.isInstancedBufferGeometry){const re=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ye=Math.min(ot.instanceCount,re);Fe.renderInstances(ge,Le,Ye)}else Fe.render(ge,Le)};function Bn(N,Y,ot){N.transparent===!0&&N.side===Ea&&N.forceSinglePass===!1?(N.side=ti,N.needsUpdate=!0,vn(N,Y,ot),N.side=ps,N.needsUpdate=!0,vn(N,Y,ot),N.side=Ea):vn(N,Y,ot)}this.compile=function(N,Y,ot=null){ot===null&&(ot=N),A=ie.get(ot),A.init(Y),I.push(A),ot.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),N!==ot&&N.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(A.pushLight(J),J.castShadow&&A.pushShadow(J))}),A.setupLights();const it=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Lt=J.material;if(Lt)if(Array.isArray(Lt))for(let Ht=0;Ht<Lt.length;Ht++){const Wt=Lt[Ht];Bn(Wt,ot,J),it.add(Wt)}else Bn(Lt,ot,J),it.add(Lt)}),A=I.pop(),it},this.compileAsync=function(N,Y,ot=null){const it=this.compile(N,Y,ot);return new Promise(J=>{function Lt(){if(it.forEach(function(Ht){Bt.get(Ht).currentProgram.isReady()&&it.delete(Ht)}),it.size===0){J(N);return}setTimeout(Lt,10)}Dt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let ni=null;function wl(N){ni&&ni(N)}function so(){Ai.stop()}function ro(){Ai.start()}const Ai=new yy;Ai.setAnimationLoop(wl),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(N){ni=N,Pt.setAnimationLoop(N),N===null?Ai.stop():Ai.start()},Pt.addEventListener("sessionstart",so),Pt.addEventListener("sessionend",ro),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){ln("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(Y),Y=Pt.getCamera()),N.isScene===!0&&N.onBeforeRender(O,N,Y,R),A=ie.get(N,I.length),A.init(Y),I.push(A),Gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),st.setFromProjectionMatrix(Gt,ki,Y.reversedDepth),zt=this.localClippingEnabled,ft=$t.init(this.clippingPlanes,zt),L=Ft.get(N,U.length),L.init(),U.push(L),Pt.enabled===!0&&Pt.isPresenting===!0){const Lt=O.xr.getDepthSensingMesh();Lt!==null&&ms(Lt,Y,-1/0,O.sortObjects)}ms(N,Y,0,O.sortObjects),L.finish(),O.sortObjects===!0&&L.sort(B,tt),ce=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,ce&&Nt.addToRenderList(L,N),this.info.render.frame++,ft===!0&&$t.beginShadows();const ot=A.state.shadowsArray;Et.render(ot,N,Y),ft===!0&&$t.endShadows(),this.info.autoReset===!0&&this.info.reset();const it=L.opaque,J=L.transmissive;if(A.setupLights(),Y.isArrayCamera){const Lt=Y.cameras;if(J.length>0)for(let Ht=0,Wt=Lt.length;Ht<Wt;Ht++){const Zt=Lt[Ht];lo(it,J,N,Zt)}ce&&Nt.render(N);for(let Ht=0,Wt=Lt.length;Ht<Wt;Ht++){const Zt=Lt[Ht];oo(L,N,Zt,Zt.viewport)}}else J.length>0&&lo(it,J,N,Y),ce&&Nt.render(N),oo(L,N,Y);R!==null&&D===0&&(Xt.updateMultisampleRenderTarget(R),Xt.updateRenderTargetMipmap(R)),N.isScene===!0&&N.onAfterRender(O,N,Y),k.resetDefaultState(),G=-1,Q=null,I.pop(),I.length>0?(A=I[I.length-1],ft===!0&&$t.setGlobalState(O.clippingPlanes,A.state.camera)):A=null,U.pop(),U.length>0?L=U[U.length-1]:L=null};function ms(N,Y,ot,it){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)ot=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)A.pushLight(N),N.castShadow&&A.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||st.intersectsSprite(N)){it&&me.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Gt);const Ht=Mt.update(N),Wt=N.material;Wt.visible&&L.push(N,Ht,Wt,ot,me.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||st.intersectsObject(N))){const Ht=Mt.update(N),Wt=N.material;if(it&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),me.copy(N.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),me.copy(Ht.boundingSphere.center)),me.applyMatrix4(N.matrixWorld).applyMatrix4(Gt)),Array.isArray(Wt)){const Zt=Ht.groups;for(let oe=0,ue=Zt.length;oe<ue;oe++){const ae=Zt[oe],ge=Wt[ae.materialIndex];ge&&ge.visible&&L.push(N,Ht,ge,ot,me.z,ae)}}else Wt.visible&&L.push(N,Ht,Wt,ot,me.z,null)}}const Lt=N.children;for(let Ht=0,Wt=Lt.length;Ht<Wt;Ht++)ms(Lt[Ht],Y,ot,it)}function oo(N,Y,ot,it){const{opaque:J,transmissive:Lt,transparent:Ht}=N;A.setupLightsView(ot),ft===!0&&$t.setGlobalState(O.clippingPlanes,ot),it&&Rt.viewport(rt.copy(it)),J.length>0&&ii(J,Y,ot),Lt.length>0&&ii(Lt,Y,ot),Ht.length>0&&ii(Ht,Y,ot),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function lo(N,Y,ot,it){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;A.state.transmissionRenderTarget[it.id]===void 0&&(A.state.transmissionRenderTarget[it.id]=new zi(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?Xi:qi,minFilter:Vs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace}));const Lt=A.state.transmissionRenderTarget[it.id],Ht=it.viewport||rt;Lt.setSize(Ht.z*O.transmissionResolutionScale,Ht.w*O.transmissionResolutionScale);const Wt=O.getRenderTarget(),Zt=O.getActiveCubeFace(),oe=O.getActiveMipmapLevel();O.setRenderTarget(Lt),O.getClearColor(H),q=O.getClearAlpha(),q<1&&O.setClearColor(16777215,.5),O.clear(),ce&&Nt.render(ot);const ue=O.toneMapping;O.toneMapping=ds;const ae=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),A.setupLightsView(it),ft===!0&&$t.setGlobalState(O.clippingPlanes,it),ii(N,ot,it),Xt.updateMultisampleRenderTarget(Lt),Xt.updateRenderTargetMipmap(Lt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Ne=0,Le=Y.length;Ne<Le;Ne++){const we=Y[Ne],{object:Fe,geometry:re,material:Ye,group:Ce}=we;if(Ye.side===Ea&&Fe.layers.test(it.layers)){const Tn=Ye.side;Ye.side=ti,Ye.needsUpdate=!0,fn(Fe,ot,it,re,Ye,Ce),Ye.side=Tn,Ye.needsUpdate=!0,ge=!0}}ge===!0&&(Xt.updateMultisampleRenderTarget(Lt),Xt.updateRenderTargetMipmap(Lt))}O.setRenderTarget(Wt,Zt,oe),O.setClearColor(H,q),ae!==void 0&&(it.viewport=ae),O.toneMapping=ue}function ii(N,Y,ot){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Lt=N.length;J<Lt;J++){const Ht=N[J],{object:Wt,geometry:Zt,group:oe}=Ht;let ue=Ht.material;ue.allowOverride===!0&&it!==null&&(ue=it),Wt.layers.test(ot.layers)&&fn(Wt,Y,ot,Zt,ue,oe)}}function fn(N,Y,ot,it,J,Lt){N.onBeforeRender(O,Y,ot,it,J,Lt),N.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(O,Y,ot,it,N,Lt),J.transparent===!0&&J.side===Ea&&J.forceSinglePass===!1?(J.side=ti,J.needsUpdate=!0,O.renderBufferDirect(ot,Y,it,J,N,Lt),J.side=ps,J.needsUpdate=!0,O.renderBufferDirect(ot,Y,it,J,N,Lt),J.side=Ea):O.renderBufferDirect(ot,Y,it,J,N,Lt),N.onAfterRender(O,Y,ot,it,J,Lt)}function vn(N,Y,ot){Y.isScene!==!0&&(Y=ze);const it=Bt.get(N),J=A.state.lights,Lt=A.state.shadowsArray,Ht=J.state.version,Wt=ut.getParameters(N,J.state,Lt,Y,ot),Zt=ut.getProgramCacheKey(Wt);let oe=it.programs;it.environment=N.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(N.isMeshStandardMaterial?w:P).get(N.envMap||it.environment),it.envMapRotation=it.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,oe===void 0&&(N.addEventListener("dispose",he),oe=new Map,it.programs=oe);let ue=oe.get(Zt);if(ue!==void 0){if(it.currentProgram===ue&&it.lightsStateVersion===Ht)return Ys(N,Wt),ue}else Wt.uniforms=ut.getUniforms(N),N.onBeforeCompile(Wt,O),ue=ut.acquireProgram(Wt,Zt),oe.set(Zt,ue),it.uniforms=Wt.uniforms;const ae=it.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ae.clippingPlanes=$t.uniform),Ys(N,Wt),it.needsLights=Cl(N),it.lightsStateVersion=Ht,it.needsLights&&(ae.ambientLightColor.value=J.state.ambient,ae.lightProbe.value=J.state.probe,ae.directionalLights.value=J.state.directional,ae.directionalLightShadows.value=J.state.directionalShadow,ae.spotLights.value=J.state.spot,ae.spotLightShadows.value=J.state.spotShadow,ae.rectAreaLights.value=J.state.rectArea,ae.ltc_1.value=J.state.rectAreaLTC1,ae.ltc_2.value=J.state.rectAreaLTC2,ae.pointLights.value=J.state.point,ae.pointLightShadows.value=J.state.pointShadow,ae.hemisphereLights.value=J.state.hemi,ae.directionalShadowMap.value=J.state.directionalShadowMap,ae.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ae.spotShadowMap.value=J.state.spotShadowMap,ae.spotLightMatrix.value=J.state.spotLightMatrix,ae.spotLightMap.value=J.state.spotLightMap,ae.pointShadowMap.value=J.state.pointShadowMap,ae.pointShadowMatrix.value=J.state.pointShadowMatrix),it.currentProgram=ue,it.uniformsList=null,ue}function Qi(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=yu.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Ys(N,Y){const ot=Bt.get(N);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function Fu(N,Y,ot,it,J){Y.isScene!==!0&&(Y=ze),Xt.resetTextureUnits();const Lt=Y.fog,Ht=it.isMeshStandardMaterial?Y.environment:null,Wt=R===null?O.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Kr,Zt=(it.isMeshStandardMaterial?w:P).get(it.envMap||Ht),oe=it.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ue=!!ot.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),ae=!!ot.morphAttributes.position,ge=!!ot.morphAttributes.normal,Ne=!!ot.morphAttributes.color;let Le=ds;it.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Le=O.toneMapping);const we=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Fe=we!==void 0?we.length:0,re=Bt.get(it),Ye=A.state.lights;if(ft===!0&&(zt===!0||N!==Q)){const wn=N===Q&&it.id===G;$t.setState(it,N,wn)}let Ce=!1;it.version===re.__version?(re.needsLights&&re.lightsStateVersion!==Ye.state.version||re.outputColorSpace!==Wt||J.isBatchedMesh&&re.batching===!1||!J.isBatchedMesh&&re.batching===!0||J.isBatchedMesh&&re.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&re.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&re.instancing===!1||!J.isInstancedMesh&&re.instancing===!0||J.isSkinnedMesh&&re.skinning===!1||!J.isSkinnedMesh&&re.skinning===!0||J.isInstancedMesh&&re.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&re.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&re.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&re.instancingMorph===!1&&J.morphTexture!==null||re.envMap!==Zt||it.fog===!0&&re.fog!==Lt||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==$t.numPlanes||re.numIntersection!==$t.numIntersection)||re.vertexAlphas!==oe||re.vertexTangents!==ue||re.morphTargets!==ae||re.morphNormals!==ge||re.morphColors!==Ne||re.toneMapping!==Le||re.morphTargetsCount!==Fe)&&(Ce=!0):(Ce=!0,re.__version=it.version);let Tn=re.currentProgram;Ce===!0&&(Tn=vn(it,Y,J));let Ua=!1,Ke=!1,Ji=!1;const Qe=Tn.getUniforms(),An=re.uniforms;if(Rt.useProgram(Tn.program)&&(Ua=!0,Ke=!0,Ji=!0),it.id!==G&&(G=it.id,Ke=!0),Ua||Q!==N){Rt.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Qe.setValue(z,"projectionMatrix",N.projectionMatrix),Qe.setValue(z,"viewMatrix",N.matrixWorldInverse);const Dn=Qe.map.cameraPosition;Dn!==void 0&&Dn.setValue(z,Qt.setFromMatrixPosition(N.matrixWorld)),Ut.logarithmicDepthBuffer&&Qe.setValue(z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Qe.setValue(z,"isOrthographic",N.isOrthographicCamera===!0),Q!==N&&(Q=N,Ke=!0,Ji=!0)}if(J.isSkinnedMesh){Qe.setOptional(z,J,"bindMatrix"),Qe.setOptional(z,J,"bindMatrixInverse");const wn=J.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Qe.setValue(z,"boneTexture",wn.boneTexture,Xt))}J.isBatchedMesh&&(Qe.setOptional(z,J,"batchingTexture"),Qe.setValue(z,"batchingTexture",J._matricesTexture,Xt),Qe.setOptional(z,J,"batchingIdTexture"),Qe.setValue(z,"batchingIdTexture",J._indirectTexture,Xt),Qe.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&Qe.setValue(z,"batchingColorTexture",J._colorsTexture,Xt));const _n=ot.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ne.update(J,ot,Tn),(Ke||re.receiveShadow!==J.receiveShadow)&&(re.receiveShadow=J.receiveShadow,Qe.setValue(z,"receiveShadow",J.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(An.envMap.value=Zt,An.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Y.environment!==null&&(An.envMapIntensity.value=Y.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=JC()),Ke&&(Qe.setValue(z,"toneMappingExposure",O.toneMappingExposure),re.needsLights&&Iu(An,Ji),Lt&&it.fog===!0&&ee.refreshFogUniforms(An,Lt),ee.refreshMaterialUniforms(An,it,bt,vt,A.state.transmissionRenderTarget[N.id]),yu.upload(z,Qi(re),An,Xt)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(yu.upload(z,Qi(re),An,Xt),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Qe.setValue(z,"center",J.center),Qe.setValue(z,"modelViewMatrix",J.modelViewMatrix),Qe.setValue(z,"normalMatrix",J.normalMatrix),Qe.setValue(z,"modelMatrix",J.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const wn=it.uniformsGroups;for(let Dn=0,Bi=wn.length;Dn<Bi;Dn++){const $i=wn[Dn];It.update($i,Tn),It.bind($i,Tn)}}return Tn}function Iu(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Cl(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(N,Y,ot){const it=Bt.get(N);it.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),Bt.get(N.texture).__webglTexture=Y,Bt.get(N.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:ot,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const ot=Bt.get(N);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const xs=z.createFramebuffer();this.setRenderTarget=function(N,Y=0,ot=0){R=N,X=Y,D=ot;let it=!0,J=null,Lt=!1,Ht=!1;if(N){const Zt=Bt.get(N);if(Zt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(z.FRAMEBUFFER,null),it=!1;else if(Zt.__webglFramebuffer===void 0)Xt.setupRenderTarget(N);else if(Zt.__hasExternalTextures)Xt.rebindTextures(N,Bt.get(N.texture).__webglTexture,Bt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ae=N.depthTexture;if(Zt.__boundDepthTexture!==ae){if(ae!==null&&Bt.has(ae)&&(N.width!==ae.image.width||N.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(N)}}const oe=N.texture;(oe.isData3DTexture||oe.isDataArrayTexture||oe.isCompressedArrayTexture)&&(Ht=!0);const ue=Bt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ue[Y])?J=ue[Y][ot]:J=ue[Y],Lt=!0):N.samples>0&&Xt.useMultisampledRTT(N)===!1?J=Bt.get(N).__webglMultisampledFramebuffer:Array.isArray(ue)?J=ue[ot]:J=ue,rt.copy(N.viewport),mt.copy(N.scissor),lt=N.scissorTest}else rt.copy(gt).multiplyScalar(bt).floor(),mt.copy(Ct).multiplyScalar(bt).floor(),lt=kt;if(ot!==0&&(J=xs),Rt.bindFramebuffer(z.FRAMEBUFFER,J)&&it&&Rt.drawBuffers(N,J),Rt.viewport(rt),Rt.scissor(mt),Rt.setScissorTest(lt),Lt){const Zt=Bt.get(N.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Zt.__webglTexture,ot)}else if(Ht){const Zt=Y;for(let oe=0;oe<N.textures.length;oe++){const ue=Bt.get(N.textures[oe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+oe,ue.__webglTexture,ot,Zt)}}else if(N!==null&&ot!==0){const Zt=Bt.get(N.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Zt.__webglTexture,ot)}G=-1},this.readRenderTargetPixels=function(N,Y,ot,it,J,Lt,Ht,Wt=0){if(!(N&&N.isWebGLRenderTarget)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=Bt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt){Rt.bindFramebuffer(z.FRAMEBUFFER,Zt);try{const oe=N.textures[Wt],ue=oe.format,ae=oe.type;if(!Ut.textureFormatReadable(ue)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(ae)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-it&&ot>=0&&ot<=N.height-J&&(N.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Wt),z.readPixels(Y,ot,it,J,fe.convert(ue),fe.convert(ae),Lt))}finally{const oe=R!==null?Bt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,oe)}}},this.readRenderTargetPixelsAsync=async function(N,Y,ot,it,J,Lt,Ht,Wt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=Bt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ht!==void 0&&(Zt=Zt[Ht]),Zt)if(Y>=0&&Y<=N.width-it&&ot>=0&&ot<=N.height-J){Rt.bindFramebuffer(z.FRAMEBUFFER,Zt);const oe=N.textures[Wt],ue=oe.format,ae=oe.type;if(!Ut.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ge),z.bufferData(z.PIXEL_PACK_BUFFER,Lt.byteLength,z.STREAM_READ),N.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Wt),z.readPixels(Y,ot,it,J,fe.convert(ue),fe.convert(ae),0);const Ne=R!==null?Bt.get(R).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,Ne);const Le=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await q2(z,Le,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ge),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Lt),z.deleteBuffer(ge),z.deleteSync(Le),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,ot=0){const it=Math.pow(2,-ot),J=Math.floor(N.image.width*it),Lt=Math.floor(N.image.height*it),Ht=Y!==null?Y.x:0,Wt=Y!==null?Y.y:0;Xt.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,ot,0,0,Ht,Wt,J,Lt),Rt.unbindTexture()};const co=z.createFramebuffer(),La=z.createFramebuffer();this.copyTextureToTexture=function(N,Y,ot=null,it=null,J=0,Lt=null){Lt===null&&(J!==0?(_l("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=J,J=0):Lt=0);let Ht,Wt,Zt,oe,ue,ae,ge,Ne,Le;const we=N.isCompressedTexture?N.mipmaps[Lt]:N.image;if(ot!==null)Ht=ot.max.x-ot.min.x,Wt=ot.max.y-ot.min.y,Zt=ot.isBox3?ot.max.z-ot.min.z:1,oe=ot.min.x,ue=ot.min.y,ae=ot.isBox3?ot.min.z:0;else{const _n=Math.pow(2,-J);Ht=Math.floor(we.width*_n),Wt=Math.floor(we.height*_n),N.isDataArrayTexture?Zt=we.depth:N.isData3DTexture?Zt=Math.floor(we.depth*_n):Zt=1,oe=0,ue=0,ae=0}it!==null?(ge=it.x,Ne=it.y,Le=it.z):(ge=0,Ne=0,Le=0);const Fe=fe.convert(Y.format),re=fe.convert(Y.type);let Ye;Y.isData3DTexture?(Xt.setTexture3D(Y,0),Ye=z.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Xt.setTexture2DArray(Y,0),Ye=z.TEXTURE_2D_ARRAY):(Xt.setTexture2D(Y,0),Ye=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Y.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ce=z.getParameter(z.UNPACK_ROW_LENGTH),Tn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ua=z.getParameter(z.UNPACK_SKIP_PIXELS),Ke=z.getParameter(z.UNPACK_SKIP_ROWS),Ji=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,we.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,we.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,oe),z.pixelStorei(z.UNPACK_SKIP_ROWS,ue),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ae);const Qe=N.isDataArrayTexture||N.isData3DTexture,An=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const _n=Bt.get(N),wn=Bt.get(Y),Dn=Bt.get(_n.__renderTarget),Bi=Bt.get(wn.__renderTarget);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,Dn.__webglFramebuffer),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let $i=0;$i<Zt;$i++)Qe&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(N).__webglTexture,J,ae+$i),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.get(Y).__webglTexture,Lt,Le+$i)),z.blitFramebuffer(oe,ue,Ht,Wt,ge,Ne,Ht,Wt,z.DEPTH_BUFFER_BIT,z.NEAREST);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||N.isRenderTargetTexture||Bt.has(N)){const _n=Bt.get(N),wn=Bt.get(Y);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,co),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,La);for(let Dn=0;Dn<Zt;Dn++)Qe?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,_n.__webglTexture,J,ae+Dn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,_n.__webglTexture,J),An?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wn.__webglTexture,Lt,Le+Dn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wn.__webglTexture,Lt),J!==0?z.blitFramebuffer(oe,ue,Ht,Wt,ge,Ne,Ht,Wt,z.COLOR_BUFFER_BIT,z.NEAREST):An?z.copyTexSubImage3D(Ye,Lt,ge,Ne,Le+Dn,oe,ue,Ht,Wt):z.copyTexSubImage2D(Ye,Lt,ge,Ne,oe,ue,Ht,Wt);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else An?N.isDataTexture||N.isData3DTexture?z.texSubImage3D(Ye,Lt,ge,Ne,Le,Ht,Wt,Zt,Fe,re,we.data):Y.isCompressedArrayTexture?z.compressedTexSubImage3D(Ye,Lt,ge,Ne,Le,Ht,Wt,Zt,Fe,we.data):z.texSubImage3D(Ye,Lt,ge,Ne,Le,Ht,Wt,Zt,Fe,re,we):N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Lt,ge,Ne,Ht,Wt,Fe,re,we.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Lt,ge,Ne,we.width,we.height,Fe,we.data):z.texSubImage2D(z.TEXTURE_2D,Lt,ge,Ne,Ht,Wt,Fe,re,we);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ce),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ua),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ji),Lt===0&&Y.generateMipmaps&&z.generateMipmap(Ye),Rt.unbindTexture()},this.initRenderTarget=function(N){Bt.get(N).__webglFramebuffer===void 0&&Xt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Xt.setTextureCube(N,0):N.isData3DTexture?Xt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Xt.setTexture2DArray(N,0):Xt.setTexture2D(N,0),Rt.unbindTexture()},this.resetState=function(){X=0,D=0,R=null,Rt.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Pe._getUnpackColorSpace()}}const c_={type:"change"},i0={type:"start"},Ay={type:"end"},uu=new Yp,u_=new us,$C=Math.cos(70*Z2.DEG2RAD),bn=new j,Jn=2*Math.PI,We={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Od=1e-6;class tR extends hE{constructor(t,n=null){super(t,n),this.state=We.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Hr.ROTATE,TWO:Hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new ks,this._lastTargetPosition=new j,this._quat=new ks().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fv,this._sphericalDelta=new Fv,this._scale=1,this._panOffset=new j,this._rotateStart=new wt,this._rotateEnd=new wt,this._rotateDelta=new wt,this._panStart=new wt,this._panEnd=new wt,this._panDelta=new wt,this._dollyStart=new wt,this._dollyEnd=new wt,this._dollyDelta=new wt,this._dollyDirection=new j,this._mouse=new wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=nR.bind(this),this._onPointerDown=eR.bind(this),this._onPointerUp=iR.bind(this),this._onContextMenu=uR.bind(this),this._onMouseWheel=rR.bind(this),this._onKeyDown=oR.bind(this),this._onTouchStart=lR.bind(this),this._onTouchMove=cR.bind(this),this._onMouseDown=aR.bind(this),this._onMouseMove=sR.bind(this),this._interceptControlDown=fR.bind(this),this._interceptControlUp=hR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(c_),this.update(),this.state=We.NONE}update(t=null){const n=this.object.position;bn.copy(n).sub(this.target),bn.applyQuaternion(this._quat),this._spherical.setFromVector3(bn),this.autoRotate&&this.state===We.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=Jn:a>Math.PI&&(a-=Jn),o<-Math.PI?o+=Jn:o>Math.PI&&(o-=Jn),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(bn.setFromSpherical(this._spherical),bn.applyQuaternion(this._quatInverse),n.copy(this.target).add(bn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=bn.length();u=this._clampDistance(h*this._scale);const m=h-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new j(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new j(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=bn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(uu.origin.copy(this.object.position),uu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uu.direction))<$C?this.object.lookAt(this.target):(u_.setFromNormalAndCoplanarPoint(this.object.up,this.target),uu.intersectPlane(u_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Od||this._lastTargetPosition.distanceToSquared(this.target)>Od?(this.dispatchEvent(c_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Jn/60*this.autoRotateSpeed*t:Jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){bn.setFromMatrixColumn(n,0),bn.multiplyScalar(-t),this._panOffset.add(bn)}_panUp(t,n){this.screenSpacePanning===!0?bn.setFromMatrixColumn(n,1):(bn.setFromMatrixColumn(n,0),bn.crossVectors(this.object.up,bn)),bn.multiplyScalar(t),this._panOffset.add(bn)}_pan(t,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;bn.copy(o).sub(this.target);let c=bn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=t-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const a=this._getSecondPointerPosition(t),o=.5*(t.pageX+a.x),c=.5*(t.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),a=.5*(t.pageX+n.x),o=.5*(t.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),a=t.pageX-n.x,o=t.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(t.pageX+n.x)*.5,h=(t.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new wt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,a={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function eR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function nR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function iR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ay),this.state=We.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function aR(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=We.DOLLY;break;case kr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=We.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=We.ROTATE}break;case kr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=We.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=We.PAN}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(i0)}function sR(s){switch(this.state){case We.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case We.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case We.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function rR(s){this.enabled===!1||this.enableZoom===!1||this.state!==We.NONE||(s.preventDefault(),this.dispatchEvent(i0),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ay))}function oR(s){this.enabled!==!1&&this._handleKeyDown(s)}function lR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=We.TOUCH_ROTATE;break;case Hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=We.TOUCH_PAN;break;default:this.state=We.NONE}break;case 2:switch(this.touches.TWO){case Hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=We.TOUCH_DOLLY_PAN;break;case Hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=We.TOUCH_DOLLY_ROTATE;break;default:this.state=We.NONE}break;default:this.state=We.NONE}this.state!==We.NONE&&this.dispatchEvent(i0)}function cR(s){switch(this._trackPointer(s),this.state){case We.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case We.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case We.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case We.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=We.NONE}}function uR(s){this.enabled!==!1&&s.preventDefault()}function fR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const dR=()=>{const s=ht.useRef(null);return ht.useEffect(()=>{if(!s.current)return;const t=s.current,n=t.clientWidth,a=t.clientHeight,o=new ry,c=new $n(45,n/a,.1,1e3);c.position.set(0,0,18);const u=new Ty({antialias:!0,alpha:!0});u.setSize(n,a),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setClearColor(0,0),u.toneMapping=Ip,u.toneMappingExposure=2.5,t.appendChild(u.domElement);const h=new tR(c,u.domElement);h.enableDamping=!0,h.dampingFactor=.05,h.autoRotate=!0,h.autoRotateSpeed=2,h.enableZoom=!1,h.enablePan=!1;const m=new _y(16777215,1.5);o.add(m);const p=new cE(16777215,2.5);p.position.set(10,10,10),o.add(p);const x=new Nu(22015,3,30);x.position.set(-5,5,5),o.add(x);const g=new Nu(65535,3,30);g.position.set(5,-5,5),o.add(g);const v=new Vr,b={metalness:.5,roughness:.2,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:1},E={steps:2,depth:2,bevelEnabled:!0,bevelThickness:.2,bevelSize:.1,bevelSegments:3},T=new vu;T.moveTo(-4,-4),T.lineTo(-4,2),T.lineTo(-1,-1),T.lineTo(-1,-4),T.lineTo(-4,-4);const M=new _u({color:8028,...b}),_=new Nn(new dl(T,E),M);v.add(_);const L=new vu;L.moveTo(-4,2),L.lineTo(-4,5),L.lineTo(1,0),L.lineTo(1,-3),L.lineTo(-1,-1),L.lineTo(-4,2);const A=new _u({color:39423,...b}),U=new Nn(new dl(L,E),A);v.add(U);const I=new vu;I.moveTo(1,-3),I.lineTo(1,5),I.lineTo(3.5,5),I.lineTo(3.5,-.5),I.lineTo(1,-3);const O=new _u({color:22195,...b}),F=new Nn(new dl(I,E),O);v.add(F),new no().setFromObject(v).getCenter(v.position).multiplyScalar(-1),o.add(v);const X=()=>{if(!t)return;const Q=t.clientWidth,rt=t.clientHeight;c.aspect=Q/rt,c.updateProjectionMatrix(),u.setSize(Q,rt)},D=new ResizeObserver(()=>X());D.observe(t);let R;const G=()=>{R=requestAnimationFrame(G),h.update(),u.render(o,c)};return G(),()=>{cancelAnimationFrame(R),D.disconnect(),t&&u.domElement&&t.removeChild(u.domElement),u.dispose(),o.traverse(Q=>{Q instanceof Nn&&(Q.geometry.dispose(),Q.material instanceof qs&&(Array.isArray(Q.material)?Q.material.forEach(rt=>rt.dispose()):Q.material.dispose()))})}},[]),y.jsx("div",{ref:s,className:"w-14 h-14 relative"})},f_=[{label:"خانه",path:"/"},{label:"راهکارها",path:"/services"},{label:"نمونه‌کارها",path:"/portfolio"},{label:"آکادمی",path:"/academy"},{label:"درباره ما",path:"/about"},{label:"فرصت‌های شغلی",path:"/careers"},{label:"تماس با ما",path:"/contact"}],pR=()=>{const[s,t]=ht.useState(!1),n=Da(),a=()=>t(!s);return y.jsxs("nav",{className:"fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-background/80 backdrop-blur-md",children:[y.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:y.jsxs("div",{className:"flex items-center justify-between h-20",children:[y.jsxs(Sn,{to:"/",className:"flex items-center gap-3 group",children:[y.jsx("div",{className:"flex items-center justify-center",children:y.jsx(dR,{})}),y.jsx("span",{className:"font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors",children:"نکسورا"})]}),y.jsxs("div",{className:"hidden lg:flex items-center gap-8",children:[y.jsx("div",{className:"flex items-center gap-1",children:f_.map(o=>y.jsx(Sn,{to:o.path,className:`px-4 py-2 rounded-lg text-sm font-medium transition-all ${n.pathname===o.path?"text-cyan-400 bg-cyan-400/10":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:o.label},o.path))}),y.jsx(Sn,{to:"/contact",children:y.jsx(Pi,{size:"sm",className:"shadow-none",children:"مشاوره رایگان"})})]}),y.jsx("div",{className:"lg:hidden flex items-center",children:y.jsx("button",{onClick:a,className:"text-slate-300 hover:text-white p-2",children:s?y.jsx(Fd,{size:28}):y.jsx(KM,{size:28})})})]})}),s&&y.jsx("div",{className:"lg:hidden absolute top-20 left-0 w-full bg-surface border-b border-slate-800 animate-in slide-in-from-top-5 fade-in duration-300 shadow-2xl",children:y.jsxs("div",{className:"px-4 pt-4 pb-8 space-y-2",children:[f_.map(o=>y.jsx(Sn,{to:o.path,onClick:()=>t(!1),className:`block px-4 py-3 rounded-lg text-base font-medium ${n.pathname===o.path?"text-cyan-400 bg-cyan-400/10":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:o.label},o.path)),y.jsx("div",{className:"pt-4",children:y.jsx(Sn,{to:"/contact",onClick:()=>t(!1),children:y.jsx(Pi,{className:"w-full",children:"درخواست مشاوره رایگان"})})})]})})]})},mR=()=>y.jsx("footer",{className:"bg-surface border-t border-slate-800 pt-16 pb-8",children:y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",children:[y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-white",children:y.jsx(FM,{size:18})}),y.jsx("span",{className:"font-bold text-xl text-white",children:"نکسورا"})]}),y.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"پیشرو در ارائه راهکارهای هوشمند سازمانی. ما با تلفیق هوش مصنوعی و خلاقیت، آینده کسب‌وکار شما را متحول می‌کنیم."}),y.jsxs("div",{className:"flex gap-4",children:[y.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:y.jsx(O_,{size:20})}),y.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:y.jsx(i2,{size:20})}),y.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:y.jsx(XM,{size:20})}),y.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:y.jsx(U_,{size:20})})]})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-white font-bold mb-6",children:"دسترسی سریع"}),y.jsxs("ul",{className:"space-y-4",children:[y.jsx("li",{children:y.jsx(Sn,{to:"/about",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"درباره نکسورا"})}),y.jsx("li",{children:y.jsx(Sn,{to:"/portfolio",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"نمونه‌کارها"})}),y.jsx("li",{children:y.jsx(Sn,{to:"/careers",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"فرصت‌های شغلی"})}),y.jsx("li",{children:y.jsx(Sn,{to:"/contact",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"تماس با ما"})})]})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-white font-bold mb-6",children:"خدمات"}),y.jsxs("ul",{className:"space-y-4",children:[y.jsx("li",{children:y.jsx(Sn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"هوش مصنوعی و ML"})}),y.jsx("li",{children:y.jsx(Sn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"اتوماسیون اداری"})}),y.jsx("li",{children:y.jsx(Sn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"ربات‌های تلگرام"})}),y.jsx("li",{children:y.jsx(Sn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"تحلیل داده"})})]})]}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-white font-bold mb-6",children:"خبرنامه"}),y.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"برای دریافت آخرین اخبار تکنولوژی عضو شوید."}),y.jsxs("form",{className:"flex flex-col gap-3",onSubmit:s=>s.preventDefault(),children:[y.jsx("input",{type:"email",placeholder:"ایمیل خود را وارد کنید",className:"bg-slate-950 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors w-full"}),y.jsx("button",{className:"bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors border border-slate-700",children:"عضویت"})]})]})]}),y.jsxs("div",{className:"border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",children:[y.jsx("p",{className:"text-slate-500 text-xs",children:"© ۱۴۰۳ تمامی حقوق برای نکسورا استودیو محفوظ است."}),y.jsxs("div",{className:"flex gap-6",children:[y.jsx("a",{href:"#",className:"text-slate-500 hover:text-white text-xs",children:"قوانین و مقررات"}),y.jsx("a",{href:"#",className:"text-slate-500 hover:text-white text-xs",children:"حریم خصوصی"})]})]})]})}),xR=()=>{const[s,t]=ht.useState(!1),[n,a]=ht.useState([{text:"سلام! من ایجنت هوشمند نکسورا هستم. می‌خوای نمونه‌کارهای مربوط به صنعت خودت رو نشونت بدم؟",isBot:!0}]),[o,c]=ht.useState(""),u=()=>{o.trim()&&(a(h=>[...h,{text:o,isBot:!1}]),c(""),setTimeout(()=>{a(h=>[...h,{text:"ممنون از پیام شما. کارشناسان ما به زودی با شما تماس خواهند گرفت.",isBot:!0}])},1e3))};return y.jsxs("div",{className:"fixed bottom-6 left-6 z-50 flex flex-col items-end",children:[s&&y.jsxs("div",{className:"mb-4 w-80 md:w-96 bg-surface border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300",children:[y.jsxs("div",{className:"bg-gradient-to-r from-indigo-900 to-slate-900 p-4 border-b border-slate-700 flex justify-between items-center",children:[y.jsxs("div",{className:"flex items-center gap-3",children:[y.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary",children:y.jsx(L_,{size:18})}),y.jsxs("div",{children:[y.jsx("h4",{className:"text-white text-sm font-bold",children:"پشتیبان هوشمند"}),y.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-green-400",children:[y.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"}),"آنلاین"]})]})]}),y.jsx("button",{onClick:()=>t(!1),className:"text-slate-400 hover:text-white",children:y.jsx(Fd,{size:18})})]}),y.jsx("div",{className:"h-80 overflow-y-auto p-4 space-y-4 bg-slate-950/50",children:n.map((h,m)=>y.jsx("div",{className:`flex ${h.isBot?"justify-start":"justify-end"}`,children:y.jsx("div",{className:`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${h.isBot?"bg-surface border border-slate-700 text-slate-200 rounded-tr-none":"bg-primary text-white rounded-tl-none"}`,children:h.text})},m))}),y.jsx("div",{className:"p-3 bg-surface border-t border-slate-800",children:y.jsxs("form",{className:"flex gap-2",onSubmit:h=>{h.preventDefault(),u()},children:[y.jsx("input",{type:"text",value:o,onChange:h=>c(h.target.value),placeholder:"پیام خود را بنویسید...",className:"flex-grow bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"}),y.jsx("button",{type:"submit",className:"bg-primary hover:bg-primary/90 text-white p-2 rounded-lg transition-colors",children:y.jsx(B_,{size:18})})]})})]}),y.jsx(Pi,{onClick:()=>t(!s),className:"rounded-full w-14 h-14 shadow-2xl shadow-primary/40 flex items-center justify-center p-0",children:s?y.jsx(Fd,{size:24}):y.jsx(JM,{size:24})})]})},gR=()=>{const[s,t]=ht.useState(10),[n,a]=ht.useState(15),[o,c]=ht.useState(30),u=ht.useMemo(()=>s*n*(o/100),[s,n,o]),h=u*12,m=ht.useMemo(()=>{const I=[];for(let O=0;O<=12;O++){const F=O/12,X=F<.5?2*F*F:-1+(4-2*F)*F,D=u*X;I.push(D)}return I},[u]),p=400,x=250,g={top:30,right:10,bottom:30,left:50},v=p-g.left-g.right,b=x-g.top-g.bottom,E=Math.max(u*1.1,10),T=I=>b-I/E*b,M=I=>I/12*v,_=()=>{if(m.length===0)return"";let I=`M ${g.left} ${g.top+T(m[0])}`;for(let O=1;O<m.length;O++){const F=g.left+M(O),X=g.top+T(m[O]),D=g.left+M(O-1),R=g.top+T(m[O-1]),G=D+(F-D)*.5,Q=R,rt=D+(F-D)*.5;I+=` C ${G} ${Q}, ${rt} ${X}, ${F} ${X}`}return I},L=()=>{const I=_();return I?`${I} L ${g.left+v} ${g.top+b} L ${g.left} ${g.top+b} Z`:""},A=I=>new Intl.NumberFormat("fa-IR").format(I),U=(I,O,F)=>{const X=(I-O)/(F-O)*100;return{background:`linear-gradient(to left, #6366f1 0%, #8b5cf6 ${X}%, #1e293b ${X}%, #1e293b 100%)`}};return y.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16",children:[y.jsx("style",{children:`
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
      `}),y.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 items-stretch",children:[y.jsxs("div",{className:"bg-[#0f172a] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-xl shadow-slate-900/50 relative overflow-hidden h-full min-h-[400px]",children:[y.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"}),y.jsxs("div",{className:"relative z-10 flex items-start justify-between mb-8",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"نمودار بازگشت سرمایه"}),y.jsx("p",{className:"text-slate-400 text-sm",children:"روند کاهش هزینه‌های عملیاتی در ۱۲ ماه اول"})]}),y.jsx("div",{className:"bg-slate-800/50 p-2 rounded-xl border border-slate-700",children:y.jsx(F_,{className:"text-yellow-400",size:20})})]}),y.jsx("div",{className:"flex-grow w-full relative",children:y.jsxs("svg",{viewBox:`0 0 ${p} ${x}`,className:"w-full h-full overflow-visible",preserveAspectRatio:"none",children:[y.jsxs("defs",{children:[y.jsxs("linearGradient",{id:"chartFill",x1:"0",y1:"0",x2:"0",y2:"1",children:[y.jsx("stop",{offset:"0%",stopColor:"#8b5cf6",stopOpacity:"0.4"}),y.jsx("stop",{offset:"100%",stopColor:"#8b5cf6",stopOpacity:"0.0"})]}),y.jsxs("linearGradient",{id:"chartLine",x1:"0",y1:"0",x2:"1",y2:"0",children:[y.jsx("stop",{offset:"0%",stopColor:"#6366f1"}),y.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})]}),[0,.25,.5,.75,1].map((I,O)=>{const F=b*(1-I);return y.jsxs("g",{children:[y.jsx("line",{x1:g.left,y1:g.top+F,x2:p-g.right,y2:g.top+F,stroke:"#334155",strokeWidth:"1",strokeDasharray:"4 6",opacity:"0.3"}),y.jsxs("text",{x:g.left-15,y:g.top+F+4,fill:"#64748b",fontSize:"11",textAnchor:"end",className:"font-mono font-medium",children:[A(Math.round(E*I)),"M"]})]},O)}),y.jsx("path",{d:L(),fill:"url(#chartFill)",className:"transition-all duration-300 ease-out"}),y.jsx("path",{d:_(),fill:"none",stroke:"url(#chartLine)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",className:"drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300 ease-out"}),[1,3,6,9,12].map(I=>{const O=g.left+M(I);return y.jsxs("g",{children:[y.jsxs("text",{x:O,y:x,fill:"#94a3b8",fontSize:"11",textAnchor:"middle",className:"font-bold",children:["ماه ",A(I)]}),y.jsx("line",{x1:O,y1:g.top+b,x2:O,y2:g.top+b+5,stroke:"#334155",strokeWidth:"1"})]},I)})]})})]}),y.jsxs("div",{className:"bg-[#0f172a] border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center",children:[y.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"}),y.jsxs("div",{className:"relative z-10",children:[y.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[y.jsx("div",{className:"bg-primary/20 p-2.5 rounded-xl text-primary",children:y.jsx(CM,{size:24})}),y.jsx("h2",{className:"text-3xl font-black text-white",children:"ماشین حساب ROI"})]}),y.jsx("p",{className:"text-slate-400 mb-10 text-sm leading-relaxed max-w-md",children:"باور نکردنی است که چقدر سرمایه در فرآیندهای دستی هدر می‌رود. با ابزار زیر تخمین بزنید که نکسورا چقدر به سودآوری شما کمک می‌کند."}),y.jsxs("div",{className:"space-y-8",children:[y.jsxs("div",{className:"group",children:[y.jsxs("div",{className:"flex justify-between items-center mb-4",children:[y.jsx("label",{className:"text-slate-200 font-bold text-base",children:"تعداد کارمندان (نفر)"}),y.jsx("div",{className:"bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg min-w-[3.5rem] text-center text-white font-bold shadow-inner",children:A(s)})]}),y.jsx("input",{type:"range",min:"1",max:"100",step:"1",value:s,onChange:I=>t(Number(I.target.value)),style:U(s,1,100),className:"rounded-lg h-2 w-full"})]}),y.jsxs("div",{className:"group",children:[y.jsxs("div",{className:"flex justify-between items-center mb-4",children:[y.jsx("label",{className:"text-slate-200 font-bold text-base",children:"میانگین حقوق ماهانه"}),y.jsxs("div",{className:"bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg min-w-[7rem] text-center text-white font-bold text-sm shadow-inner",children:[A(n)," میلیون تومان"]})]}),y.jsx("input",{type:"range",min:"5",max:"100",step:"1",value:n,onChange:I=>a(Number(I.target.value)),style:U(n,5,100),className:"rounded-lg h-2 w-full"})]}),y.jsxs("div",{className:"group",children:[y.jsxs("div",{className:"flex justify-between items-center mb-4",children:[y.jsx("label",{className:"text-slate-200 font-bold text-base",children:"قابلیت اتوماسیون"}),y.jsxs("div",{className:"bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg min-w-[3.5rem] text-center text-white font-bold shadow-inner",children:[A(o),"٪"]})]}),y.jsx("input",{type:"range",min:"0",max:"100",step:"5",value:o,onChange:I=>c(Number(I.target.value)),style:U(o,0,100),className:"rounded-lg h-2 w-full"})]})]}),y.jsx("div",{className:"mt-12 pt-8 border-t border-slate-800/50",children:y.jsxs("div",{className:"flex flex-col md:flex-row md:items-end md:justify-between gap-4",children:[y.jsx("p",{className:"text-slate-400 text-sm font-medium",children:"صرفه‌جویی سالانه احتمالی:"}),y.jsxs("div",{className:"text-right flex items-baseline gap-2",children:[y.jsx("span",{className:"text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-emerald-500 drop-shadow-lg",children:A(Math.round(h))}),y.jsx("span",{className:"text-xl font-bold text-slate-500",children:"میلیون تومان"})]})]})})]})]})]})]})},vR=()=>y.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#020617]",children:[y.jsx("style",{children:`
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
    `}),y.jsx("div",{className:"absolute inset-0 opacity-[0.07]",style:{backgroundImage:"linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",backgroundSize:"40px 40px",animation:"grid-move 20s linear infinite"}}),y.jsx("div",{className:"absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"}),y.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite_reverse]"}),y.jsx("div",{className:"absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] animate-[bounce_10s_infinite]"}),y.jsx("div",{className:"absolute inset-0",children:[...Array(25)].map((s,t)=>y.jsx("div",{className:"absolute rounded-full",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,width:`${Math.random()*3+2}px`,height:`${Math.random()*3+2}px`,backgroundColor:Math.random()>.5?"#22d3ee":"#8b5cf6",boxShadow:`0 0 ${Math.random()*10+5}px ${Math.random()>.5?"#22d3ee":"#8b5cf6"}`,animation:`float-particle ${15+Math.random()*10}s infinite ease-in-out ${Math.random()*5}s`,opacity:.4}},t))}),y.jsxs("svg",{className:"absolute inset-0 w-full h-full opacity-30",xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("defs",{children:y.jsxs("linearGradient",{id:"circuit-grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[y.jsx("stop",{offset:"0%",stopColor:"transparent"}),y.jsx("stop",{offset:"50%",stopColor:"#22d3ee"}),y.jsx("stop",{offset:"100%",stopColor:"transparent"})]})}),y.jsx("path",{d:"M0,100 Q400,150 800,100 T1600,100",fill:"none",stroke:"url(#circuit-grad)",strokeWidth:"1",strokeDasharray:"10 10",className:"animate-[pulse_5s_infinite]"}),y.jsx("path",{d:"M0,300 Q300,250 600,300 T1200,300",fill:"none",stroke:"url(#circuit-grad)",strokeWidth:"1",strokeDasharray:"15 15",className:"animate-[pulse_7s_infinite]"}),y.jsx("path",{d:"M0,600 Q500,650 1000,600 T2000,600",fill:"none",stroke:"url(#circuit-grad)",strokeWidth:"1",strokeDasharray:"20 20",className:"animate-[pulse_6s_infinite]"})]}),y.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"})]}),_R=()=>y.jsxs("div",{className:"flex flex-col gap-24 pb-20",children:[y.jsxs("section",{className:"relative min-h-[90vh] flex items-center pt-10 overflow-hidden",children:[y.jsx(vR,{}),y.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full",children:y.jsxs("div",{className:"text-center max-w-4xl mx-auto space-y-8",children:[y.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-cyan-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700",children:[y.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),"پیشرو در تکنولوژی هوش مصنوعی ایران"]}),y.jsxs("h1",{className:"text-5xl md:text-7xl font-black leading-tight tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100",children:["هوش مصنوعی، ",y.jsx("br",{}),y.jsx("span",{className:"gradient-text",children:"نیروی محرکه"})," کسب‌وکار شما"]}),y.jsx("p",{className:"text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200",children:"ما در نکسورا با بهره‌گیری از جدیدترین مدل‌های هوش مصنوعی، فرایندهای سازمانی شما را خودکار کرده و بهره‌وری را به سطح جدیدی می‌رسانیم."}),y.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300",children:[y.jsx(Sn,{to:"/contact",children:y.jsx(Pi,{size:"lg",className:"w-full sm:w-auto",children:"درخواست مشاوره رایگان"})}),y.jsx(Sn,{to:"/portfolio",children:y.jsx(Pi,{variant:"secondary",size:"lg",className:"w-full sm:w-auto",children:"مشاهده نمونه‌کارها"})})]})]})})]}),y.jsxs("section",{className:"w-full overflow-hidden border-y border-white/5 bg-slate-950/50 py-10",children:[y.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center mb-8",children:y.jsx("span",{className:"text-sm text-slate-500 font-medium",children:"مورد اعتماد تکنولوژی‌های برتر جهان"})}),y.jsxs("div",{className:"flex justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap px-4",children:[y.jsx("span",{className:"text-2xl font-bold text-white",children:"OpenAI"}),y.jsx("span",{className:"text-2xl font-bold text-white",children:"Python"}),y.jsx("span",{className:"text-2xl font-bold text-white",children:"TensorFlow"}),y.jsx("span",{className:"text-2xl font-bold text-white",children:"PyTorch"}),y.jsx("span",{className:"text-2xl font-bold text-white",children:"n8n"}),y.jsx("span",{className:"text-2xl font-bold text-white",children:"LangChain"})]})]}),y.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[y.jsxs("div",{className:"text-center mb-16",children:[y.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"خدمات اصلی نکسورا"}),y.jsx("p",{className:"text-slate-400",children:"راهکارهای جامع برای تحول دیجیتال سازمان شما"})]}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{icon:y.jsx(L_,{className:"w-10 h-10 text-primary"}),title:"ایجنت‌های هوشمند",desc:"طراحی دستیارهای هوشمند اختصاصی برای پاسخگویی به مشتریان و مدیریت وظایف."},{icon:y.jsx(F_,{className:"w-10 h-10 text-cyan-400"}),title:"اتوماسیون فرایندها",desc:"حذف کارهای تکراری و اتصال سیستم‌های مختلف سازمانی با n8n و Python."},{icon:y.jsx(HM,{className:"w-10 h-10 text-pink-500"}),title:"هوش تجاری و داده",desc:"تحلیل پیشرفته داده‌ها برای تصمیم‌گیری دقیق‌تر و پیش‌بینی روندهای بازار."}].map((s,t)=>y.jsxs("div",{className:"bg-surface border border-slate-800 p-8 rounded-2xl hover:border-primary/50 transition-all hover:translate-y-[-5px] group",children:[y.jsx("div",{className:"mb-6 bg-slate-950 w-20 h-20 rounded-2xl flex items-center justify-center border border-slate-800 group-hover:border-primary/30 transition-colors",children:s.icon}),y.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:s.title}),y.jsx("p",{className:"text-slate-400 leading-relaxed text-sm",children:s.desc})]},t))})]}),y.jsx(gR,{}),y.jsxs("section",{className:"py-20 text-center px-4",children:[y.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"آماده تحول هستید؟"}),y.jsx("p",{className:"text-slate-400 mb-8 max-w-xl mx-auto",children:"برای دریافت مشاوره تخصصی و نیازسنجی رایگان، همین حالا با متخصصان نکسورا تماس بگیرید."}),y.jsx(Sn,{to:"/contact",children:y.jsx(Pi,{size:"lg",className:"shadow-2xl shadow-primary/30",children:"شروع همکاری"})})]})]}),yR=({className:s})=>y.jsxs("svg",{viewBox:"0 0 24 24",className:s,fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[y.jsx("path",{d:"M12 2C7 2 3 3.5 3 5C3 6.5 7 8 12 8C17 8 21 6.5 21 5C21 3.5 17 2 12 2Z"}),y.jsx("path",{d:"M21 5V19C21 20.5 17 22 12 22C7 22 3 20.5 3 19V5"}),y.jsx("path",{d:"M3 12C3 13.5 7 15 12 15C17 15 21 13.5 21 12"})]}),bR=({className:s})=>y.jsxs("svg",{viewBox:"0 0 24 24",className:s,fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[y.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),y.jsx("path",{d:"M2 8L12 14L22 8"}),y.jsx("path",{d:"M2 16L7 13"}),y.jsx("path",{d:"M22 16L17 13"})]}),SR=({className:s})=>y.jsx("svg",{viewBox:"0 0 24 24",className:s,fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:y.jsx("path",{d:"M13 2L3 14H12L11 22L21 10H12L13 2Z"})}),wy=({className:s="w-10 h-10"})=>y.jsxs("svg",{viewBox:"0 0 64 64",className:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[y.jsxs("defs",{children:[y.jsxs("linearGradient",{id:"cyanGrad",x1:"0",y1:"0",x2:"64",y2:"64",children:[y.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),y.jsx("stop",{offset:"100%",stopColor:"#0891b2"})]}),y.jsxs("filter",{id:"glow-cyan",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[y.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),y.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),y.jsx("circle",{cx:"32",cy:"32",r:"28",stroke:"url(#cyanGrad)",strokeWidth:"0.5",opacity:"0.2"}),y.jsx("path",{d:"M32 4V12M32 52V60M4 32H12M52 32H60",stroke:"url(#cyanGrad)",strokeWidth:"1",opacity:"0.4"}),y.jsx("g",{className:"animate-[spin_20s_linear_infinite] origin-center",children:y.jsx("path",{d:"M32 16L46 24V40L32 48L18 40V24L32 16Z",stroke:"url(#cyanGrad)",strokeWidth:"1.5",strokeDasharray:"4 4",opacity:"0.8"})}),y.jsx("circle",{cx:"32",cy:"32",r:"8",stroke:"url(#cyanGrad)",strokeWidth:"2"}),y.jsx("path",{d:"M32 24V32L38 38",stroke:"url(#cyanGrad)",strokeWidth:"2",strokeLinecap:"round"}),y.jsx("circle",{cx:"50",cy:"20",r:"2",fill:"#22d3ee",className:"animate-pulse"}),y.jsx("circle",{cx:"14",cy:"44",r:"2",fill:"#22d3ee",className:"animate-pulse delay-700"}),y.jsx("path",{d:"M10 10L20 20",stroke:"url(#cyanGrad)",strokeWidth:"1.5",className:"animate-[pulse_3s_infinite]"}),y.jsx("path",{d:"M54 54L44 44",stroke:"url(#cyanGrad)",strokeWidth:"1.5",className:"animate-[pulse_3s_infinite_1s]"})]}),Cy=({className:s="w-10 h-10"})=>y.jsxs("svg",{viewBox:"0 0 64 64",className:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[y.jsx("defs",{children:y.jsxs("linearGradient",{id:"purpleGrad",x1:"0",y1:"0",x2:"64",y2:"64",children:[y.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),y.jsx("stop",{offset:"100%",stopColor:"#7c3aed"})]})}),y.jsx("path",{d:"M16 20C16 12 20 8 32 8C44 8 48 12 48 20V44C48 52 44 56 32 56C20 56 16 52 16 44V20Z",stroke:"url(#purpleGrad)",strokeWidth:"2",strokeLinecap:"round",fill:"rgba(124,58,237,0.05)"}),y.jsx("path",{d:"M22 24C22 24 26 28 32 28C38 28 42 24 42 24",stroke:"url(#purpleGrad)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),y.jsx("path",{d:"M22 36C22 36 26 40 32 40C38 40 42 36 42 36",stroke:"url(#purpleGrad)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),y.jsx("circle",{cx:"32",cy:"32",r:"4",fill:"#a78bfa",className:"animate-[pulse_2s_ease-in-out_infinite]"}),y.jsx("circle",{cx:"32",cy:"32",r:"12",stroke:"url(#purpleGrad)",strokeWidth:"0.5",strokeDasharray:"2 2",className:"animate-[spin_10s_linear_infinite]"}),y.jsx("path",{d:"M8 32H12",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round",className:"animate-[pulse_1s_infinite]"}),y.jsx("path",{d:"M52 32H56",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round",className:"animate-[pulse_1s_infinite_0.5s]"}),y.jsx("path",{d:"M32 4V6",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round"}),y.jsx("path",{d:"M32 58V60",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round"})]}),MR=()=>y.jsxs("div",{className:"w-full h-full min-h-[350px] bg-slate-950 relative overflow-hidden flex items-center justify-center group select-none",role:"img","aria-label":"تصویر سازی گرافیکی از سیستم اتوماسیون هوشمند فرایندها",children:[y.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"}),y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"}),y.jsxs("div",{className:"relative z-10 w-64 h-64 flex items-center justify-center",children:[y.jsx("div",{className:"absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"}),y.jsx("div",{className:"absolute inset-4 border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"}),y.jsxs("div",{className:"relative w-24 h-24 bg-slate-900 rounded-full border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)] z-20",children:[y.jsx(wy,{className:"w-14 h-14 text-cyan-400 animate-pulse"}),[0,120,240].map(s=>y.jsx("div",{className:"absolute top-1/2 left-1/2 w-[140px] h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent -translate-y-1/2 origin-left",style:{transform:`translate(-50%, -50%) rotate(${s}deg) translateX(50%)`}},s))]}),y.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)] animate-bounce delay-0",children:y.jsx(yR,{className:"w-6 h-6 text-cyan-300"})}),y.jsx("div",{className:"absolute bottom-4 right-0 translate-x-4 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] animate-bounce delay-700",children:y.jsx(bR,{className:"w-6 h-6 text-purple-300"})}),y.jsx("div",{className:"absolute bottom-4 left-0 -translate-x-4 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.1)] animate-bounce delay-1000",children:y.jsx(SR,{className:"w-6 h-6 text-yellow-300"})})]})]}),ER=()=>y.jsxs("div",{className:"w-full h-full min-h-[350px] bg-slate-950 relative overflow-hidden flex items-center justify-center group select-none",role:"img","aria-label":"تصویر سازی گرافیکی از ایجنت هوشمند تعاملی",children:[y.jsx("div",{className:"absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-primary/10 rounded-full blur-[100px]"}),y.jsx("div",{className:"absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-indigo-500/10 rounded-full blur-[100px]"}),y.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center w-full max-w-xs",children:[y.jsxs("div",{className:"relative mb-8 group-hover:scale-105 transition-transform duration-500",children:[y.jsxs("div",{className:"w-32 h-32 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] border border-slate-700 flex items-center justify-center shadow-2xl relative z-10 overflow-hidden",children:[y.jsx(Cy,{className:"w-20 h-20 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"}),y.jsx("div",{className:"absolute w-full h-full inset-0 bg-primary/20 blur-xl -z-10 animate-pulse"}),y.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm animate-[scan_3s_linear_infinite]"}),y.jsx("style",{children:`
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                50% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
          `})]}),y.jsx("div",{className:"absolute -right-16 -top-6 bg-slate-800/90 backdrop-blur-md border border-slate-700 px-4 py-2.5 rounded-2xl rounded-bl-none text-xs text-slate-300 shadow-xl animate-[bounce_3s_infinite]",children:y.jsxs("span",{className:"flex gap-2 items-center text-white",children:[y.jsx(Bd,{size:14,className:"text-green-400"})," ثبت سفارش آنی"]})}),y.jsx("div",{className:"absolute -left-16 top-12 bg-slate-800/90 backdrop-blur-md border border-slate-700 px-4 py-2.5 rounded-2xl rounded-br-none text-xs text-slate-300 shadow-xl animate-[bounce_4s_infinite_0.5s]",children:y.jsxs("span",{className:"flex gap-2 items-center text-white",children:[y.jsx(Bd,{size:14,className:"text-green-400"})," پشتیبانی ۲۴/۷"]})})]}),y.jsxs("div",{className:"w-full relative flex flex-col items-center gap-2",children:[y.jsx("div",{className:"w-px h-12 bg-gradient-to-b from-slate-700 to-transparent"}),y.jsxs("div",{className:"flex gap-4 opacity-50",children:[y.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-slate-500",fill:"none",stroke:"currentColor",children:y.jsx("path",{d:"M4 6H20M4 12H20M4 18H20",strokeWidth:"2",strokeLinecap:"round"})}),y.jsxs("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-slate-500",fill:"none",stroke:"currentColor",children:[y.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",strokeWidth:"2"}),y.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",strokeWidth:"2"}),y.jsx("path",{d:"M6 6H6.01",strokeWidth:"3",strokeLinecap:"round"}),y.jsx("path",{d:"M6 18H6.01",strokeWidth:"3",strokeLinecap:"round"})]})]})]})]})]}),TR=({question:s,answer:t})=>{const[n,a]=ht.useState(!1);return y.jsxs("div",{className:`bg-surface border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${n?"border-primary/50 shadow-lg shadow-primary/5":"hover:border-slate-600"}`,children:[y.jsxs("button",{onClick:()=>a(!n),className:"w-full flex items-center justify-between p-5 md:p-6 text-right focus:outline-none",children:[y.jsx("span",{className:`text-base md:text-lg font-bold transition-colors ${n?"text-primary":"text-white"}`,children:s}),y.jsx(DM,{className:`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 mr-4 ${n?"rotate-180 text-primary":""}`})]}),y.jsx("div",{className:`grid transition-[grid-template-rows] duration-300 ease-out ${n?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:y.jsx("div",{className:"overflow-hidden",children:y.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-6 pt-0 border-t border-slate-800/50 pt-4",children:t})})})]})},AR=()=>y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24",children:[y.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[y.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:"راهکارهای هوشمند نکسورا"}),y.jsx("p",{className:"text-xl text-slate-400 leading-relaxed",children:"ما مجموعه‌ای از پیشرفته‌ترین ابزارهای هوش مصنوعی را برای حل چالش‌های واقعی کسب‌وکار شما طراحی کرده‌ایم."})]}),y.jsx("div",{className:"space-y-20",children:[{id:"automation-service",title:"اتوماسیون هوشمند فرایندها (RPA)",desc:"با استفاده از n8n و Python، ما گردش‌کارهای پیچیده بین نرم‌افزارهای مختلف (CRM، حسابداری، ایمیل مارکتینگ) را کاملاً خودکار می‌کنیم.",features:["اتصال بیش از ۱۰۰۰ سرویس مختلف","بدون نیاز به دخالت انسانی","کاهش ۹۰٪ خطاهای ورود اطلاعات"],icon:y.jsx(wy,{className:"w-16 h-16 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"}),Visual:MR,tooltip:"مدیریت و خودکارسازی کامل گردش کار سازمانی"},{id:"agent-service",title:"ایجنت‌های هوشمند تعاملی",desc:"چت‌بات‌های پیشرفته مبتنی بر LLM که فراتر از یک پاسخگوی ساده هستند. آنها می‌توانند سفارش ثبت کنند، وقت رزرو کنند و پشتیبانی فنی ارائه دهند.",features:["پاسخگویی ۲۴/۷ به مشتریان","یادگیری از مستندات سازمانی شما","شخصی‌سازی لحن و رفتار"],icon:y.jsx(Cy,{className:"w-16 h-16 drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]"}),Visual:ER,tooltip:"دستیار هوشمند با قابلیت یادگیری و تعامل انسانی"}].map((s,t)=>y.jsxs("div",{className:`flex flex-col md:flex-row items-center gap-12 ${t%2===1?"md:flex-row-reverse":""}`,children:[y.jsxs("div",{className:"flex-1 space-y-6",children:[y.jsxs("div",{className:"relative group/icon inline-block",role:"img","aria-label":s.title,"aria-describedby":`tooltip-${s.id}`,tabIndex:0,children:[y.jsxs("div",{className:"w-24 h-24 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 shadow-lg shadow-primary/5 transition-all duration-300 group-hover/icon:scale-105 group-hover/icon:border-primary/50 group-hover/icon:shadow-primary/20 cursor-help relative overflow-hidden",children:[y.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity"}),s.icon]}),y.jsxs("div",{id:`tooltip-${s.id}`,role:"tooltip",className:"absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2.5 bg-slate-800/95 backdrop-blur-sm text-white text-sm font-medium rounded-xl border border-slate-700 opacity-0 group-hover/icon:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-50 shadow-2xl translate-y-2 group-hover/icon:translate-y-0",children:[s.tooltip,y.jsx("div",{className:"absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800/95 border-b border-r border-slate-700 rotate-45"})]})]}),y.jsx("h2",{className:"text-3xl font-bold text-white",children:s.title}),y.jsx("p",{className:"text-slate-400 text-lg leading-relaxed",children:s.desc}),y.jsx("ul",{className:"space-y-3",children:s.features.map((n,a)=>y.jsxs("li",{className:"flex items-center gap-3 text-slate-300",children:[y.jsx("div",{className:"w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0",children:y.jsx(Bd,{size:14})}),n]},a))}),y.jsx("div",{className:"pt-4",children:y.jsx(Sn,{to:"/contact",children:y.jsx(Pi,{variant:"outline",children:"سفارش این سرویس"})})})]}),y.jsx("div",{className:"flex-1 w-full",children:y.jsx("div",{className:"relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 backdrop-blur w-full",children:y.jsx(s.Visual,{})})})]},s.id))}),y.jsxs("div",{className:"bg-surface rounded-3xl border border-slate-800 p-8 overflow-hidden",children:[y.jsx("h3",{className:"text-2xl font-bold text-white mb-8 text-center",children:"چرا نکسورا؟"}),y.jsx("div",{className:"overflow-x-auto",children:y.jsxs("table",{className:"w-full text-right border-collapse min-w-[600px]",children:[y.jsx("thead",{children:y.jsxs("tr",{className:"border-b border-slate-800",children:[y.jsx("th",{className:"py-4 px-6 text-slate-400 font-medium w-1/3",children:"ویژگی"}),y.jsx("th",{className:"py-4 px-6 text-slate-400 font-medium w-1/3 text-center",children:"روش سنتی"}),y.jsx("th",{className:"py-4 px-6 text-primary font-bold w-1/3 text-center bg-primary/5 rounded-t-xl",children:"راهکار نکسورا"})]})}),y.jsx("tbody",{children:[{label:"هزینه عملیاتی",trad:"بسیار بالا",nexora:"بهینه و مقیاس‌پذیر"},{label:"زمان پیاده‌سازی",trad:"۳ تا ۶ ماه",nexora:"۲ تا ۴ هفته"},{label:"خطای انسانی",trad:"اجتناب‌ناپذیر",nexora:"نزدیک به صفر"},{label:"پشتیبانی",trad:"ساعات اداری",nexora:"۲۴/۷ هوشمند"}].map((s,t)=>y.jsxs("tr",{className:"border-b border-slate-800/50 last:border-0 hover:bg-slate-800/20 transition-colors",children:[y.jsx("td",{className:"py-4 px-6 text-white font-medium",children:s.label}),y.jsx("td",{className:"py-4 px-6 text-slate-400 text-center",children:s.trad}),y.jsx("td",{className:"py-4 px-6 text-white text-center font-bold bg-primary/5",children:s.nexora})]},t))})]})})]}),y.jsxs("div",{className:"max-w-3xl mx-auto pb-12",children:[y.jsxs("div",{className:"text-center mb-10",children:[y.jsx("h3",{className:"text-3xl font-bold text-white mb-4",children:"پرسش‌های متداول"}),y.jsx("p",{className:"text-slate-400",children:"شفافیت در همکاری، امنیت و هزینه‌ها"})]}),y.jsx("div",{className:"space-y-4",children:[{q:"آیا امنیت داده‌های سازمانی ما تضمین می‌شود؟",a:"بله، امنیت خط قرمز ماست. ما از قراردادهای محرمانگی (NDA) رسمی استفاده می‌کنیم. همچنین تمام داده‌های شما با پروتکل‌های رمزنگاری پیشرفته محافظت می‌شوند و مدل‌های هوش مصنوعی را می‌توانیم به صورت Local (روی سرورهای خودتان) پیاده‌سازی کنیم تا هیچ داده‌ای از سازمان خارج نشود."},{q:"هزینه پروژه‌ها چقدر است و نحوه پرداخت چگونه است؟",a:"هزینه‌ها کاملاً شفاف و بر اساس اسکوپ پروژه است. ما معمولاً ۳۰٪ پیش‌پرداخت، ۳۰٪ پس از نسخه اولیه و ۴۰٪ پس از تحویل نهایی دریافت می‌کنیم. برای سرویس‌های آماده نیز مدل اشتراکی (SaaS) داریم که بسیار مقرون‌به‌صرفه است."},{q:"زمان پیاده‌سازی پروژه‌ها چقدر طول می‌کشد؟",a:"بسته به ابعاد پروژه متفاوت است. ربات‌های تلگرام و اتوماسیون‌های ساده بین ۱۰ تا ۲۰ روز کاری، و سیستم‌های جامع سازمانی بین ۱ تا ۳ ماه زمان می‌برند. جدول زمان‌بندی دقیق در قرارداد ذکر می‌شود."},{q:"آیا پس از تحویل پروژه، پشتیبانی فنی دارید؟",a:"بله، تمامی پروژه‌های نکسورا شامل ۶ ماه گارانتی عملکرد و پشتیبانی فنی رایگان هستند. پس از آن نیز می‌توانید قرارداد پشتیبانی را تمدید کنید."},{q:"آیا برای استفاده از راهکارها نیاز به تیم فنی داریم؟",a:"خیر، راهکارهای ما با رابط کاربری ساده طراحی شده‌اند. ما آموزش‌های کامل ویدیویی و مستندات را در اختیار تیم شما قرار می‌دهیم تا بدون نیاز به دانش برنامه‌نویسی از سیستم‌ها استفاده کنند."}].map((s,t)=>y.jsx(TR,{question:s.q,answer:s.a},t))})]})]}),h_=[{id:1,title:"ربات پشتیبانی صرافی دیجیتال",category:"telegram",categoryLabel:"ربات تلگرام",description:"سیستم پاسخگویی خودکار به سوالات احراز هویت و ترید کاربران با قابلیت اتصال به دیتابیس صرافی.",image:"https://picsum.photos/600/400?random=10",results:"کاهش ۸۰٪ تیکت‌های پشتیبانی"},{id:2,title:"سیستم کنترل کیفیت خط تولید",category:"vision",categoryLabel:"پردازش تصویر",description:"استفاده از دوربین‌های صنعتی و مدل‌های بینایی ماشین برای تشخیص قطعات معیوب در لحظه.",image:"https://picsum.photos/600/400?random=11",results:"افزایش دقت به ۹۹.۸٪"},{id:3,title:"اتوماسیون صدور فاکتور و انبارداری",category:"automation",categoryLabel:"اتوماسیون اداری",description:"یکپارچه‌سازی نرم‌افزار حسابداری با فروشگاه اینترنتی برای صدور آنی فاکتور رسمی.",image:"https://picsum.photos/600/400?random=12",results:"صرفه‌جویی ۱۰۰ ساعت کار در ماه"},{id:4,title:"دستیار هوشمند حقوقی",category:"telegram",categoryLabel:"ربات تلگرام",description:"چت‌بات آموزش‌دیده روی قوانین مدنی و کیفری برای ارائه مشاوره اولیه به موکلین.",image:"https://picsum.photos/600/400?random=13",results:"جذب ۳۰۰+ موکل جدید"},{id:5,title:"داشبورد تحلیل رفتار مشتری",category:"automation",categoryLabel:"تحلیل داده",description:"پلتفرم جامع برای رصد رفتار کاربران در وب‌سایت و اپلیکیشن و پیشنهاد کمپین‌های مارکتینگ.",image:"https://picsum.photos/600/400?random=14",results:"افزایش نرخ تبدیل به ۵٪"}],wR=()=>{const[s,t]=ht.useState("all"),n=s==="all"?h_:h_.filter(o=>o.category===s),a=[{id:"all",label:"همه"},{id:"telegram",label:"ربات تلگرام"},{id:"automation",label:"اتوماسیون اداری"},{id:"vision",label:"پردازش تصویر"}];return y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[y.jsxs("div",{className:"text-center mb-12",children:[y.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"نمونه‌کارهای نکسورا"}),y.jsx("p",{className:"text-slate-400",children:"پروژه‌هایی که با قدرت هوش مصنوعی اجرا شده‌اند"})]}),y.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-12",children:a.map(o=>y.jsx("button",{onClick:()=>t(o.id),className:`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${s===o.id?"bg-primary text-white shadow-lg shadow-primary/25":"bg-surface border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"}`,children:o.label},o.id))}),y.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map(o=>y.jsxs("div",{className:"bg-surface rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group flex flex-col h-full",children:[y.jsxs("div",{className:"relative h-48 overflow-hidden",children:[y.jsx("div",{className:"absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10",children:o.categoryLabel}),y.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"})]}),y.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[y.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors",children:o.title}),y.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6 flex-grow",children:o.description}),y.jsxs("div",{className:"mt-auto",children:[y.jsxs("div",{className:"bg-slate-950 rounded-lg p-3 border border-slate-800 mb-4",children:[y.jsx("span",{className:"block text-xs text-slate-500 mb-1",children:"دستاورد کلیدی:"}),y.jsx("span",{className:"text-green-400 font-bold text-sm",children:o.results})]}),y.jsxs("button",{className:"flex items-center gap-2 text-sm text-white font-medium hover:text-primary transition-colors",children:["مشاهده جزئیات",y.jsx(MM,{size:16})]})]})]})]},o.id))})]})},CR=()=>y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20",children:[y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"آکادمی نکسورا"}),y.jsx("p",{className:"text-slate-400",children:"یادگیری هوش مصنوعی به زبان ساده"})]}),y.jsx("section",{className:"bg-surface border border-slate-800 rounded-3xl overflow-hidden",children:y.jsxs("div",{className:"grid md:grid-cols-2",children:[y.jsxs("div",{className:"p-8 md:p-12 flex flex-col justify-center",children:[y.jsx("div",{className:"inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-bold mb-4 w-fit",children:"ویدیو آموزشی جدید"}),y.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:"چگونه هوش مصنوعی جایگزین کارمندان نمی‌شود، بلکه آن‌ها را قدرتمندتر می‌کند؟"}),y.jsx("p",{className:"text-slate-400 mb-8 leading-relaxed",children:"در این وبینار تخصصی، به بررسی نقش ابزارهای AI در افزایش بهره‌وری تیم‌های انسانی می‌پردازیم و ترس‌های رایج را بررسی می‌کنیم."}),y.jsxs(Pi,{className:"w-fit gap-2",children:[y.jsx(ev,{size:20}),"مشاهده ویدیو"]})]}),y.jsxs("div",{className:"bg-slate-900 relative h-64 md:h-auto",children:[y.jsx("img",{src:"https://picsum.photos/800/600?random=20",className:"absolute inset-0 w-full h-full object-cover opacity-60",alt:"Video cover"}),y.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:y.jsx("div",{className:"w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform",children:y.jsx(ev,{className:"text-white w-8 h-8 ml-1"})})})]})]})}),y.jsxs("section",{children:[y.jsxs("div",{className:"flex items-center justify-between mb-8",children:[y.jsx("h2",{className:"text-2xl font-bold text-white",children:"آخرین مقالات"}),y.jsx("button",{className:"text-primary hover:text-white transition-colors text-sm",children:"مشاهده همه"})]}),y.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[1,2,3].map(s=>y.jsxs("article",{className:"group cursor-pointer",children:[y.jsx("div",{className:"rounded-2xl overflow-hidden mb-4 border border-slate-800",children:y.jsx("img",{src:`https://picsum.photos/600/400?random=${20+s}`,alt:"Article",className:"w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"})}),y.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500 mb-2",children:[y.jsx(GM,{size:14}),y.jsx("span",{children:"۵ دقیقه مطالعه"}),y.jsx("span",{className:"w-1 h-1 bg-slate-700 rounded-full"}),y.jsx("span",{children:"۲ روز پیش"})]}),y.jsx("h3",{className:"text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors",children:"۵ ابزار هوش مصنوعی که هر مدیری باید بشناسد"}),y.jsx("p",{className:"text-slate-400 text-sm line-clamp-2 leading-relaxed",children:"معرفی ابزارهایی که می‌توانند در مدیریت پروژه، زمان‌بندی و تحلیل داده‌ها به شما کمک کنند."})]},s))})]}),y.jsxs("section",{className:"bg-gradient-to-r from-primary to-indigo-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"}),y.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto",children:[y.jsx(P_,{className:"w-12 h-12 text-white/80 mx-auto mb-6"}),y.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"عضویت در خبرنامه تخصصی AI"}),y.jsx("p",{className:"text-white/80 mb-8",children:"هفته‌ای یک ایمیل، حاوی جدیدترین اخبار و آموزش‌های کاربردی هوش مصنوعی. بدون اسپم."}),y.jsxs("form",{className:"flex flex-col sm:flex-row gap-3 max-w-md mx-auto",onSubmit:s=>s.preventDefault(),children:[y.jsx("input",{type:"email",placeholder:"ایمیل خود را وارد کنید",className:"flex-grow bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:bg-white/20 transition-all"}),y.jsx("button",{className:"bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors",children:"عضویت"})]})]})]})]}),bu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Al{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const RR=new n0(-1,1,1,-1,0,1);class NR extends ei{constructor(){super(),this.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new gn([0,2,0,0,2,0],2))}}const DR=new NR;class Ry{constructor(t){this._mesh=new Nn(DR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,RR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class LR extends Al{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof kn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Au.clone(t.uniforms),this.material=new kn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ry(this.material)}render(t,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class d_ extends Al{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,a){const o=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),t.setRenderTarget(a),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class UR extends Al{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class OR{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const a=t.getSize(new wt);this._width=a.width,this._height=a.height,n=new zi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new LR(bu),this.copyPass.material.blending=ji,this.clock=new fE}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,a),u.needsSwap){if(a){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}d_!==void 0&&(u instanceof d_?a=!0:u instanceof UR&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class PR extends Al{constructor(t,n,a=null,o=null,c=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(t,n,a){const o=t.autoClear;t.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=o}}const zR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $r extends Al{constructor(t,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=t!==void 0?new wt(t.x,t.y):new wt(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new zi(c,u,{type:Xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let x=0;x<this.nMips;x++){const g=new zi(c,u,{type:Xi});g.texture.name="UnrealBloomPass.h"+x,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const v=new zi(c,u,{type:Xi});v.texture.name="UnrealBloomPass.v"+x,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),u=Math.round(u/2)}const h=zR;this.highPassUniforms=Au.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new kn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let x=0;x<this.nMips;x++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[x])),this.separableBlurMaterials[x].uniforms.invSize.value=new wt(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Au.clone(bu.uniforms),this.blendMaterial=new kn({uniforms:this.copyUniforms,vertexShader:bu.vertexShader,fragmentShader:bu.fragmentShader,blending:Id,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new Wr,this._fsQuad=new Ry(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let a=Math.round(t/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new wt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(t,n,a,o,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=$r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[m]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=$r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[m]),t.clear(),this._fsQuad.render(t),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(a),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const n=[],a=t/3;for(let o=0;o<t;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new kn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new wt(.5,.5)},direction:{value:new wt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;
					}
					gl_FragColor = vec4( diffuseSum, 1.0 );
				}`})}_getCompositeMaterial(t){return new kn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}$r.BlurDirectionX=new wt(1,0);$r.BlurDirectionY=new wt(0,1);const BR=()=>{const s=ht.useRef(null);return ht.useEffect(()=>{if(!s.current)return;const t=s.current;for(;t.firstChild;)t.removeChild(t.firstChild);const n=new ry;n.fog=new Zp(0,.03);const a=t.clientWidth,o=t.clientHeight,c=new $n(50,a/o,.1,100);c.position.set(0,0,12);const u=new Ty({antialias:!0,alpha:!0});u.setSize(a,o),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setClearColor(0,0),u.toneMapping=Ip,t.appendChild(u.domElement);const h=new _y(0);n.add(h);const m=new Nu(22015,2,20);m.position.set(5,5,5),n.add(m);const p=new Nu(65535,2,20);p.position.set(-5,-5,5),n.add(p);const x=new Ru(1.5,1),g=new _u({color:8028,emissive:22015,emissiveIntensity:.5,roughness:.1,metalness:.9,wireframe:!0,transparent:!0,opacity:.8}),v=new Nn(x,g);n.add(v);const b=new Ru(.8,2),E=new Wr({color:65535}),T=new Nn(b,E);n.add(T);const M=new Vr;n.add(M);const _=new io(.3,.3,.3),L=new Wr({color:65535}),A=[],U=15,I=4;for(let B=0;B<U;B++){const tt=new Nn(_,L),gt=Math.acos(-1+2*B/U),Ct=Math.sqrt(U*Math.PI)*gt;tt.position.setFromSphericalCoords(I,gt,Ct),tt.lookAt(0,0,0),A.push(tt),M.add(tt)}const O=new oy({color:22015,transparent:!0,opacity:.3}),F=new ei,X=[];A.forEach((B,tt)=>{X.push(B.position.x,B.position.y,B.position.z),X.push(0,0,0),A.forEach((gt,Ct)=>{tt!==Ct&&B.position.distanceTo(gt.position)<3.5&&(X.push(B.position.x,B.position.y,B.position.z),X.push(gt.position.x,gt.position.y,gt.position.z))})}),F.setAttribute("position",new gn(X,3));const D=new E3(F,O);M.add(D);const R=new t0(5,.05,16,100),G=new Wr({color:22015,transparent:!0,opacity:.3}),Q=new Nn(R,G);Q.rotation.x=Math.PI/2,n.add(Q);const rt=new Nn(R,G);rt.rotation.x=Math.PI/2,rt.rotation.y=Math.PI/4,rt.scale.set(1.2,1.2,1.2),n.add(rt);const mt=new PR(n,c),lt=new $r(new wt(a,o),1.5,.4,.85);lt.threshold=0,lt.strength=1.2,lt.radius=.3;const H=new OR(u);H.addPass(mt),H.addPass(lt);let q,Z=0;const vt=()=>{q=requestAnimationFrame(vt),Z+=.005,v.rotation.y+=.005,v.rotation.x+=.002,M.rotation.y-=.002,M.rotation.z+=.001,Q.rotation.x=Math.PI/2+Math.sin(Z)*.2,Q.rotation.y+=.005,rt.rotation.x=Math.PI/2+Math.cos(Z)*.2,rt.rotation.y-=.003;const B=1+Math.sin(Z*3)*.1;T.scale.set(B,B,B),g.emissiveIntensity=.5+Math.sin(Z*5)*.2,H.render()};vt();const bt=()=>{if(!t)return;const B=t.clientWidth,tt=t.clientHeight;c.aspect=B/tt,c.updateProjectionMatrix(),u.setSize(B,tt),H.setSize(B,tt)};return window.addEventListener("resize",bt),()=>{window.removeEventListener("resize",bt),cancelAnimationFrame(q),t&&u.domElement&&t.removeChild(u.domElement),u.dispose(),H.dispose()}},[]),y.jsx("div",{ref:s,className:"w-full h-full min-h-[400px]"})},FR="/nexoraaaaaaiiiiiiigeminiiiiii/assets/ceo-BKf0uy4y.png",IR="/nexoraaaaaaiiiiiiigeminiiiiii/assets/erfan-DM4--1ei.jpg",HR="/nexoraaaaaaiiiiiiigeminiiiiii/assets/narges-C_2rc76B.jpg",VR="/nexoraaaaaaiiiiiiigeminiiiiii/assets/mahshid-BYrKUPI7.jpg",GR=()=>y.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24",children:[y.jsxs("section",{className:"grid md:grid-cols-2 gap-12 items-center",children:[y.jsxs("div",{children:[y.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:"داستان نکسورا"}),y.jsxs("div",{className:"space-y-4 text-slate-400 leading-relaxed text-lg text-justify",children:[y.jsxs("p",{children:["نکسورا در سال ۱۴۰۴ با یک هدف ساده اما بلندپروازانه متولد شد:",y.jsx("span",{className:"text-white font-bold px-1",children:"آوردن هوش مصنوعی از آزمایشگاه‌ها به قلب کسب‌وکارهای ایرانی."})]}),y.jsx("p",{children:"ما تیمی از متخصصان داده، توسعه‌دهندگان نرم‌افزار و استراتژیست‌های کسب‌وکار هستیم که معتقدیم تکنولوژی باید در خدمت انسان باشد، نه جایگزین آن."}),y.jsx("p",{children:"امروز، نکسورا با تمرکز در این حوزه و با استفاده از بروزترین تکنولوژی های روز دنیا (مانند n8n و AI Agents) در تلاش است تا زیرساخت‌های هوشمند فردا را بسازد."})]})]}),y.jsxs("div",{className:"relative h-[500px] flex items-center justify-center",children:[y.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-900/30 to-cyan-500/30 rounded-full blur-[100px] animate-pulse"}),y.jsx("div",{className:"relative w-full h-full z-10 drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]",children:y.jsx(BR,{})})]})]}),y.jsx("section",{className:"grid md:grid-cols-3 gap-8 text-center",children:[{title:"نوآوری مداوم",desc:"ما هرگز به وضع موجود راضی نیستیم و همیشه به دنبال راهکارهای جدیدتر هستیم."},{title:"شفافیت و اعتماد",desc:"با مشتریانمان مثل شرکای تجاری رفتار می‌کنیم. هیچ هزینه پنهانی وجود ندارد."},{title:"کیفیت جهانی",desc:"استانداردهای ما فراتر از مرزهاست. ما محصولاتی در کلاس جهانی می‌سازیم."}].map((s,t)=>y.jsxs("div",{className:"bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300",children:[y.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:s.title}),y.jsx("p",{className:"text-slate-400",children:s.desc})]},t))}),y.jsxs("section",{children:[y.jsx("h2",{className:"text-3xl font-bold text-white mb-12 text-center",children:"تیم متخصص ما"}),y.jsx("div",{className:"grid md:grid-cols-4 gap-8",children:[{name:"مهندس مهدی سلیمانی",role:"بنیان‌گذار و معمار ارشد سیستم",img:FR},{name:"مهندس عرفان تحویلیان",role:"مهندس اتوماسیون",img:IR},{name:"نرگس میرزائی",role:"طراح تعاملات هوش مصنوعی",img:HR},{name:"مهشید کیانی",role:"متخصص یکپارچه‌سازی",img:VR}].map((s,t)=>y.jsxs("div",{className:"group relative",children:[y.jsxs("div",{className:"relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 border border-slate-800 group-hover:border-cyan-500/50 transition-colors",children:[y.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 z-10"}),y.jsx("img",{src:s.img,alt:s.name,className:"object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"}),y.jsxs("div",{className:"absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 z-20",children:[y.jsx("button",{className:"bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-[#0077b5] transition-colors hover:scale-110",children:y.jsx(O_,{size:18})}),y.jsx("button",{className:"bg-white/10 backdrop-blur-md p-2 rounded-full text-white hover:bg-black transition-colors hover:scale-110",children:y.jsx(U_,{size:18})})]})]}),y.jsx("h3",{className:"text-lg font-bold text-white text-center group-hover:text-cyan-400 transition-colors",children:s.name}),y.jsx("p",{className:"text-slate-400 text-sm text-center font-medium",children:s.role})]},t))})]})]}),kR=()=>y.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[y.jsxs("div",{className:"text-center",children:[y.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:"به تیم نکسورا بپیوندید"}),y.jsx("p",{className:"text-slate-400 max-w-2xl mx-auto",children:"ما به دنبال افراد خلاق، پرشور و یادگیرنده هستیم. اگر عاشق هوش مصنوعی هستید و می‌خواهید روی لبه تکنولوژی حرکت کنید، جای شما اینجا خالیست."})]}),y.jsx("div",{className:"space-y-6",children:[{title:"Senior Python Developer",type:"تمام وقت",location:"تهران / ریموت"},{title:"AI Research Engineer",type:"تمام وقت",location:"تهران"},{title:"Frontend Developer (React)",type:"پروژه‌ای",location:"ریموت"}].map((s,t)=>y.jsxs("div",{className:"bg-surface border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-600 transition-colors",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:s.title}),y.jsxs("div",{className:"flex gap-4 text-sm text-slate-500",children:[y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx(AM,{size:14})," ",s.type]}),y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx(z_,{size:14})," ",s.location]}),y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx(OM,{size:14})," فوری"]})]})]}),y.jsx(Pi,{variant:"secondary",size:"sm",children:"ارسال رزومه"})]},t))}),y.jsxs("div",{className:"bg-slate-900/50 border border-dashed border-slate-700 rounded-2xl p-8 text-center",children:[y.jsx(zM,{className:"w-12 h-12 text-slate-500 mx-auto mb-4"}),y.jsx("h3",{className:"text-white font-bold mb-2",children:"موقعیت شغلی مورد نظر خود را پیدا نکردید؟"}),y.jsx("p",{className:"text-slate-400 text-sm mb-6",children:"رزومه خود را برای ما بفرستید. ما همیشه به دنبال استعدادهای جدید هستیم."}),y.jsx(Pi,{variant:"outline",children:"ارسال رزومه عمومی"})]})]}),jR=()=>y.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:y.jsxs("div",{className:"grid md:grid-cols-2 gap-16",children:[y.jsxs("div",{className:"space-y-8",children:[y.jsxs("div",{children:[y.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:"تماس با نکسورا"}),y.jsx("p",{className:"text-slate-400 leading-relaxed",children:"برای مشاوره رایگان یا شروع یک پروژه جدید، فرم روبرو را پر کنید یا از طریق راه‌های ارتباطی زیر با ما در تماس باشید."})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"flex items-start gap-4",children:[y.jsx("div",{className:"w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-primary shrink-0",children:y.jsx(t2,{size:24})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-white font-bold mb-1",children:"تلفن تماس"}),y.jsx("p",{className:"text-slate-400 ltr text-right",dir:"ltr",children:"021 - 88 12 34 56"}),y.jsx("p",{className:"text-slate-500 text-sm",children:"شنبه تا چهارشنبه، ۹ تا ۱۷"})]})]}),y.jsxs("div",{className:"flex items-start gap-4",children:[y.jsx("div",{className:"w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0",children:y.jsx(P_,{size:24})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-white font-bold mb-1",children:"ایمیل"}),y.jsx("p",{className:"text-slate-400 font-mono",children:"hello@nexora.ai"}),y.jsx("p",{className:"text-slate-500 text-sm",children:"پاسخگویی در کمتر از ۲ ساعت"})]})]}),y.jsxs("div",{className:"flex items-start gap-4",children:[y.jsx("div",{className:"w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-purple-400 shrink-0",children:y.jsx(z_,{size:24})}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-white font-bold mb-1",children:"دفتر مرکزی"}),y.jsx("p",{className:"text-slate-400",children:"تهران، خیابان ولیعصر، پارک علم و فناوری"})]})]})]})]}),y.jsxs("div",{className:"bg-surface p-8 rounded-3xl border border-slate-800 shadow-2xl",children:[y.jsx("h2",{className:"text-2xl font-bold text-white mb-6",children:"فرم درخواست مشاوره"}),y.jsxs("form",{className:"space-y-4",onSubmit:s=>s.preventDefault(),children:[y.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"نام و نام خانوادگی"}),y.jsx("input",{type:"text",className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"شماره تماس"}),y.jsx("input",{type:"tel",className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"نام سازمان / شرکت"}),y.jsx("input",{type:"text",className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"موضوع درخواست"}),y.jsxs("select",{className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors",children:[y.jsx("option",{children:"مشاوره عمومی AI"}),y.jsx("option",{children:"سفارش ربات تلگرام"}),y.jsx("option",{children:"اتوماسیون اداری"}),y.jsx("option",{children:"سایر موارد"})]})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"توضیحات تکمیلی"}),y.jsx("textarea",{rows:4,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]}),y.jsxs(Pi,{className:"w-full gap-2 text-lg",children:["ارسال درخواست",y.jsx(B_,{size:18})]})]})]})]})}),XR=()=>{const{pathname:s}=Da();return ht.useEffect(()=>{window.scrollTo(0,0)},[s]),null},WR=()=>y.jsxs(oM,{children:[y.jsx(XR,{}),y.jsxs("div",{className:"min-h-screen flex flex-col bg-background text-slate-100 font-sans selection:bg-primary selection:text-white overflow-x-hidden",children:[y.jsx(pR,{}),y.jsx("main",{className:"flex-grow pt-20",children:y.jsxs(FS,{children:[y.jsx(cs,{path:"/",element:y.jsx(_R,{})}),y.jsx(cs,{path:"/services",element:y.jsx(AR,{})}),y.jsx(cs,{path:"/portfolio",element:y.jsx(wR,{})}),y.jsx(cs,{path:"/academy",element:y.jsx(CR,{})}),y.jsx(cs,{path:"/about",element:y.jsx(GR,{})}),y.jsx(cs,{path:"/careers",element:y.jsx(kR,{})}),y.jsx(cs,{path:"/contact",element:y.jsx(jR,{})})]})}),y.jsx(mR,{}),y.jsx(xR,{})]})]}),Ny=document.getElementById("root");if(!Ny)throw new Error("Could not find root element to mount to");const qR=W1.createRoot(Ny);qR.render(y.jsx(F1.StrictMode,{children:y.jsx(WR,{})}));
