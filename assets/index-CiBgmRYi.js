(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function a_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Fh={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function M1(){if(Rg)return Zo;Rg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:s,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Zo.Fragment=e,Zo.jsx=n,Zo.jsxs=n,Zo}var Ng;function E1(){return Ng||(Ng=1,Fh.exports=M1()),Fh.exports}var _=E1(),Ih={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function T1(){if(Dg)return dt;Dg=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function y(z,ae,be){this.props=z,this.context=ae,this.refs=M,this.updater=be||E}y.prototype.isReactComponent={},y.prototype.setState=function(z,ae){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ae,"setState")},y.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function B(){}B.prototype=y.prototype;function w(z,ae,be){this.props=z,this.context=ae,this.refs=M,this.updater=be||E}var P=w.prototype=new B;P.constructor=w,A(P,y.prototype),P.isPureReactComponent=!0;var I=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function D(z,ae,be){var Ne=be.ref;return{$$typeof:s,type:z,key:ae,ref:Ne!==void 0?Ne:null,props:be}}function N(z,ae){return D(z.type,ae,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===s}function ne(z){var ae={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(be){return ae[be]})}var oe=/\/+/g;function xe(z,ae){return typeof z=="object"&&z!==null&&z.key!=null?ne(""+z.key):ae.toString(36)}function ce(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(O,O):(z.status="pending",z.then(function(ae){z.status==="pending"&&(z.status="fulfilled",z.value=ae)},function(ae){z.status==="pending"&&(z.status="rejected",z.reason=ae)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function H(z,ae,be,Ne,ke){var se=typeof z;(se==="undefined"||se==="boolean")&&(z=null);var he=!1;if(z===null)he=!0;else switch(se){case"bigint":case"string":case"number":he=!0;break;case"object":switch(z.$$typeof){case s:case e:he=!0;break;case g:return he=z._init,H(he(z._payload),ae,be,Ne,ke)}}if(he)return ke=ke(z),he=Ne===""?"."+xe(z,0):Ne,I(ke)?(be="",he!=null&&(be=he.replace(oe,"$&/")+"/"),H(ke,ae,be,"",function(Qe){return Qe})):ke!=null&&(G(ke)&&(ke=N(ke,be+(ke.key==null||z&&z.key===ke.key?"":(""+ke.key).replace(oe,"$&/")+"/")+he)),ae.push(ke)),1;he=0;var ze=Ne===""?".":Ne+":";if(I(z))for(var Ge=0;Ge<z.length;Ge++)Ne=z[Ge],se=ze+xe(Ne,Ge),he+=H(Ne,ae,be,se,ke);else if(Ge=b(z),typeof Ge=="function")for(z=Ge.call(z),Ge=0;!(Ne=z.next()).done;)Ne=Ne.value,se=ze+xe(Ne,Ge++),he+=H(Ne,ae,be,se,ke);else if(se==="object"){if(typeof z.then=="function")return H(ce(z),ae,be,Ne,ke);throw ae=String(z),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return he}function W(z,ae,be){if(z==null)return z;var Ne=[],ke=0;return H(z,Ne,"","",function(se){return ae.call(be,se,ke++)}),Ne}function K(z){if(z._status===-1){var ae=z._result;ae=ae(),ae.then(function(be){(z._status===0||z._status===-1)&&(z._status=1,z._result=be)},function(be){(z._status===0||z._status===-1)&&(z._status=2,z._result=be)}),z._status===-1&&(z._status=0,z._result=ae)}if(z._status===1)return z._result.default;throw z._result}var fe=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},ge={map:W,forEach:function(z,ae,be){W(z,function(){ae.apply(this,arguments)},be)},count:function(z){var ae=0;return W(z,function(){ae++}),ae},toArray:function(z){return W(z,function(ae){return ae})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return dt.Activity=x,dt.Children=ge,dt.Component=y,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=w,dt.StrictMode=a,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,dt.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},dt.cache=function(z){return function(){return z.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(z,ae,be){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ne=A({},z.props),ke=z.key;if(ae!=null)for(se in ae.key!==void 0&&(ke=""+ae.key),ae)!q.call(ae,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&ae.ref===void 0||(Ne[se]=ae[se]);var se=arguments.length-2;if(se===1)Ne.children=be;else if(1<se){for(var he=Array(se),ze=0;ze<se;ze++)he[ze]=arguments[ze+2];Ne.children=he}return D(z.type,ke,Ne)},dt.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},dt.createElement=function(z,ae,be){var Ne,ke={},se=null;if(ae!=null)for(Ne in ae.key!==void 0&&(se=""+ae.key),ae)q.call(ae,Ne)&&Ne!=="key"&&Ne!=="__self"&&Ne!=="__source"&&(ke[Ne]=ae[Ne]);var he=arguments.length-2;if(he===1)ke.children=be;else if(1<he){for(var ze=Array(he),Ge=0;Ge<he;Ge++)ze[Ge]=arguments[Ge+2];ke.children=ze}if(z&&z.defaultProps)for(Ne in he=z.defaultProps,he)ke[Ne]===void 0&&(ke[Ne]=he[Ne]);return D(z,se,ke)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(z){return{$$typeof:h,render:z}},dt.isValidElement=G,dt.lazy=function(z){return{$$typeof:g,_payload:{_status:-1,_result:z},_init:K}},dt.memo=function(z,ae){return{$$typeof:p,type:z,compare:ae===void 0?null:ae}},dt.startTransition=function(z){var ae=F.T,be={};F.T=be;try{var Ne=z(),ke=F.S;ke!==null&&ke(be,Ne),typeof Ne=="object"&&Ne!==null&&typeof Ne.then=="function"&&Ne.then(O,fe)}catch(se){fe(se)}finally{ae!==null&&be.types!==null&&(ae.types=be.types),F.T=ae}},dt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},dt.use=function(z){return F.H.use(z)},dt.useActionState=function(z,ae,be){return F.H.useActionState(z,ae,be)},dt.useCallback=function(z,ae){return F.H.useCallback(z,ae)},dt.useContext=function(z){return F.H.useContext(z)},dt.useDebugValue=function(){},dt.useDeferredValue=function(z,ae){return F.H.useDeferredValue(z,ae)},dt.useEffect=function(z,ae){return F.H.useEffect(z,ae)},dt.useEffectEvent=function(z){return F.H.useEffectEvent(z)},dt.useId=function(){return F.H.useId()},dt.useImperativeHandle=function(z,ae,be){return F.H.useImperativeHandle(z,ae,be)},dt.useInsertionEffect=function(z,ae){return F.H.useInsertionEffect(z,ae)},dt.useLayoutEffect=function(z,ae){return F.H.useLayoutEffect(z,ae)},dt.useMemo=function(z,ae){return F.H.useMemo(z,ae)},dt.useOptimistic=function(z,ae){return F.H.useOptimistic(z,ae)},dt.useReducer=function(z,ae,be){return F.H.useReducer(z,ae,be)},dt.useRef=function(z){return F.H.useRef(z)},dt.useState=function(z){return F.H.useState(z)},dt.useSyncExternalStore=function(z,ae,be){return F.H.useSyncExternalStore(z,ae,be)},dt.useTransition=function(){return F.H.useTransition()},dt.version="19.2.0",dt}var Ug;function Ap(){return Ug||(Ug=1,Ih.exports=T1()),Ih.exports}var pe=Ap();const A1=a_(pe);var Hh={exports:{}},Ko={},Vh={exports:{}},Gh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function w1(){return Lg||(Lg=1,(function(s){function e(H,W){var K=H.length;H.push(W);e:for(;0<K;){var fe=K-1>>>1,ge=H[fe];if(0<o(ge,W))H[fe]=W,H[K]=ge,K=fe;else break e}}function n(H){return H.length===0?null:H[0]}function a(H){if(H.length===0)return null;var W=H[0],K=H.pop();if(K!==W){H[0]=K;e:for(var fe=0,ge=H.length,z=ge>>>1;fe<z;){var ae=2*(fe+1)-1,be=H[ae],Ne=ae+1,ke=H[Ne];if(0>o(be,K))Ne<ge&&0>o(ke,be)?(H[fe]=ke,H[Ne]=K,fe=Ne):(H[fe]=be,H[ae]=K,fe=ae);else if(Ne<ge&&0>o(ke,K))H[fe]=ke,H[Ne]=K,fe=Ne;else break e}}return W}function o(H,W){var K=H.sortIndex-W.sortIndex;return K!==0?K:H.id-W.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var m=[],p=[],g=1,x=null,v=3,b=!1,E=!1,A=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function P(H){for(var W=n(p);W!==null;){if(W.callback===null)a(p);else if(W.startTime<=H)a(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=n(p)}}function I(H){if(A=!1,P(H),!E)if(n(m)!==null)E=!0,O||(O=!0,ne());else{var W=n(p);W!==null&&ce(I,W.startTime-H)}}var O=!1,F=-1,q=5,D=-1;function N(){return M?!0:!(s.unstable_now()-D<q)}function G(){if(M=!1,O){var H=s.unstable_now();D=H;var W=!0;try{e:{E=!1,A&&(A=!1,B(F),F=-1),b=!0;var K=v;try{t:{for(P(H),x=n(m);x!==null&&!(x.expirationTime>H&&N());){var fe=x.callback;if(typeof fe=="function"){x.callback=null,v=x.priorityLevel;var ge=fe(x.expirationTime<=H);if(H=s.unstable_now(),typeof ge=="function"){x.callback=ge,P(H),W=!0;break t}x===n(m)&&a(m),P(H)}else a(m);x=n(m)}if(x!==null)W=!0;else{var z=n(p);z!==null&&ce(I,z.startTime-H),W=!1}}break e}finally{x=null,v=K,b=!1}W=void 0}}finally{W?ne():O=!1}}}var ne;if(typeof w=="function")ne=function(){w(G)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,xe=oe.port2;oe.port1.onmessage=G,ne=function(){xe.postMessage(null)}}else ne=function(){y(G,0)};function ce(H,W){F=y(function(){H(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(H){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var K=v;v=W;try{return H()}finally{v=K}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(H,W){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var K=v;v=H;try{return W()}finally{v=K}},s.unstable_scheduleCallback=function(H,W,K){var fe=s.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?fe+K:fe):K=fe,H){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=K+ge,H={id:g++,callback:W,priorityLevel:H,startTime:K,expirationTime:ge,sortIndex:-1},K>fe?(H.sortIndex=K,e(p,H),n(m)===null&&H===n(p)&&(A?(B(F),F=-1):A=!0,ce(I,K-fe))):(H.sortIndex=ge,e(m,H),E||b||(E=!0,O||(O=!0,ne()))),H},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(H){var W=v;return function(){var K=v;v=W;try{return H.apply(this,arguments)}finally{v=K}}}})(Gh)),Gh}var Og;function C1(){return Og||(Og=1,Vh.exports=w1()),Vh.exports}var kh={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function R1(){if(Pg)return zn;Pg=1;var s=Ap();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},zn.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},zn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},zn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},zn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:b}):g==="script"&&a.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},zn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},zn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},zn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},zn.requestFormReset=function(m){a.d.r(m)},zn.unstable_batchedUpdates=function(m,p){return m(p)},zn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},zn.useFormStatus=function(){return u.H.useHostTransitionStatus()},zn.version="19.2.0",zn}var zg;function N1(){if(zg)return kh.exports;zg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),kh.exports=R1(),kh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function D1(){if(Bg)return Ko;Bg=1;var s=C1(),e=Ap(),n=N1();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,r=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(r=i.return),t=i.return;while(t)}return i.tag===3?r:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function h(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var r=t,l=i;;){var f=r.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){r=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===r)return m(f),t;if(d===l)return m(f),i;d=d.sibling}throw Error(a(188))}if(r.return!==l.return)r=f,l=d;else{for(var S=!1,C=f.child;C;){if(C===r){S=!0,r=f,l=d;break}if(C===l){S=!0,l=f,r=d;break}C=C.sibling}if(!S){for(C=d.child;C;){if(C===r){S=!0,r=d,l=f;break}if(C===l){S=!0,l=d,r=f;break}C=C.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),w=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===oe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case w:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case P:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case q:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}var ce=Array.isArray,H=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K={pending:!1,data:null,method:null,action:null},fe=[],ge=-1;function z(t){return{current:t}}function ae(t){0>ge||(t.current=fe[ge],fe[ge]=null,ge--)}function be(t,i){ge++,fe[ge]=t.current,t.current=i}var Ne=z(null),ke=z(null),se=z(null),he=z(null);function ze(t,i){switch(be(se,i),be(ke,t),be(Ne,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Jx(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Jx(i),t=$x(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ae(Ne),be(Ne,t)}function Ge(){ae(Ne),ae(ke),ae(se)}function Qe(t){t.memoizedState!==null&&be(he,t);var i=Ne.current,r=$x(i,t.type);i!==r&&(be(ke,t),be(Ne,r))}function mt(t){ke.current===t&&(ae(Ne),ae(ke)),he.current===t&&(ae(he),Xo._currentValue=K)}var zt,ct;function Se(t){if(zt===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);zt=i&&i[1]||"",ct=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+t+ct}var L=!1;function Te(t,i){if(!t||L)return"";L=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(le){var ie=le}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(le){ie=le}t.call(_e.prototype)}}else{try{throw Error()}catch(le){ie=le}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(le){if(le&&ie&&typeof le.stack=="string")return[le.stack,ie.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),S=d[0],C=d[1];if(S&&C){var V=S.split(`
`),ee=C.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ee.length&&!ee[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===ee.length)for(l=V.length-1,f=ee.length-1;1<=l&&0<=f&&V[l]!==ee[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==ee[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==ee[f]){var me=`
`+V[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=f);break}}}finally{L=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Se(r):""}function De(t,i){switch(t.tag){case 26:case 27:case 5:return Se(t.type);case 16:return Se("Lazy");case 13:return t.child!==i&&i!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return Te(t.type,!1);case 11:return Te(t.type.render,!1);case 1:return Te(t.type,!0);case 31:return Se("Activity");default:return""}}function Le(t){try{var i="",r=null;do i+=De(t,r),r=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var we=Object.prototype.hasOwnProperty,qe=s.unstable_scheduleCallback,Be=s.unstable_cancelCallback,Xe=s.unstable_shouldYield,U=s.unstable_requestPaint,T=s.unstable_now,J=s.unstable_getCurrentPriorityLevel,de=s.unstable_ImmediatePriority,Me=s.unstable_UserBlockingPriority,ue=s.unstable_NormalPriority,tt=s.unstable_LowPriority,Fe=s.unstable_IdlePriority,it=s.log,$e=s.unstable_setDisableYieldValue,Ee=null,Re=null;function nt(t){if(typeof it=="function"&&$e(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Ee,t)}catch{}}var Je=Math.clz32?Math.clz32:k,je=Math.log,ft=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(je(t)/ft|0)|0}var Ie=256,Oe=262144,Pe=4194304;function Ae(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ye(t,i,r){var l=t.pendingLanes;if(l===0)return 0;var f=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~d,l!==0?f=Ae(l):(S&=C,S!==0?f=Ae(S):r||(r=C&~t,r!==0&&(f=Ae(r))))):(C=l&~d,C!==0?f=Ae(C):S!==0?f=Ae(S):r||(r=l&~t,r!==0&&(f=Ae(r)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,r=i&-i,d>=r||d===32&&(r&4194048)!==0)?i:f}function Ye(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ht(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var t=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),t}function Dt(t){for(var i=[],r=0;31>r;r++)i.push(t);return i}function Pn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function $n(t,i,r,l,f,d){var S=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var C=t.entanglements,V=t.expirationTimes,ee=t.hiddenUpdates;for(r=S&~r;0<r;){var me=31-Je(r),_e=1<<me;C[me]=0,V[me]=-1;var ie=ee[me];if(ie!==null)for(ee[me]=null,me=0;me<ie.length;me++){var le=ie[me];le!==null&&(le.lane&=-536870913)}r&=~_e}l!==0&&Tl(t,l,0),d!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~i))}function Tl(t,i,r){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Je(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|r&261930}function no(t,i){var r=t.entangledLanes|=i;for(t=t.entanglements;r;){var l=31-Je(r),f=1<<l;f&i|t[l]&i&&(t[l]|=i),r&=~f}}function io(t,i){var r=i&-i;return r=(r&42)!==0?1:wi(r),(r&(t.suspendedLanes|i))!==0?0:r}function wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ms(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ao(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:Sg(t.type))}function so(t,i){var r=W.p;try{return W.p=t,i()}finally{W.p=r}}var ei=Math.random().toString(36).slice(2),fn="__reactFiber$"+ei,gn="__reactProps$"+ei,Qi="__reactContainer$"+ei,Zs="__reactEvents$"+ei,Du="__reactListeners$"+ei,Uu="__reactHandles$"+ei,Al="__reactResources$"+ei,xs="__reactMarker$"+ei;function ro(t){delete t[fn],delete t[gn],delete t[Zs],delete t[Du],delete t[Uu]}function Ua(t){var i=t[fn];if(i)return i;for(var r=t.parentNode;r;){if(i=r[Qi]||r[fn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(t=rg(t);t!==null;){if(r=t[fn])return r;t=rg(t)}return i}t=r,r=t.parentNode}return null}function R(t){if(t=t[fn]||t[Qi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function Y(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function re(t){var i=t[Al];return i||(i=t[Al]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function te(t){t[xs]=!0}var Q=new Set,Ue={};function He(t,i){We(t,i),We(t+"Capture",i)}function We(t,i){for(Ue[t]=i,t=0;t<i.length;t++)Q.add(i[t])}var Ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},ut={};function at(t){return we.call(ut,t)?!0:we.call(ot,t)?!1:Ze.test(t)?ut[t]=!0:(ot[t]=!0,!1)}function gt(t,i,r){if(at(i))if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+r)}}function Nt(t,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+r)}}function Ut(t,i,r,l){if(l===null)t.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(i,r,""+l)}}function wt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ft(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function rt(t,i,r){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(S){r=""+S,d.call(this,S)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Yt(t){if(!t._valueTracker){var i=Ft(t)?"checked":"value";t._valueTracker=rt(t,i,""+t[i])}}function Ct(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return t&&(l=Ft(t)?t.checked?"true":"false":t.value),t=l,t!==r?(i.setValue(t),!0):!1}function En(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var La=/[\n"\\]/g;function Kt(t){return t.replace(La,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Ji(t,i,r,l,f,d,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),i!=null?S==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+wt(i)):t.value!==""+wt(i)&&(t.value=""+wt(i)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),i!=null?Tn(t,S,wt(i)):r!=null?Tn(t,S,wt(r)):l!=null&&t.removeAttribute("value"),f==null&&d!=null&&(t.defaultChecked=!!d),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+wt(C):t.removeAttribute("name")}function Qt(t,i,r,l,f,d,S,C){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||r!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Yt(t);return}r=r!=null?""+wt(r):"",i=i!=null?""+wt(i):r,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Yt(t)}function Tn(t,i,r){i==="number"&&En(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function vn(t,i,r,l){if(t=t.options,i){i={};for(var f=0;f<r.length;f++)i["$"+r[f]]=!0;for(r=0;r<t.length;r++)f=i.hasOwnProperty("$"+t[r].value),t[r].selected!==f&&(t[r].selected=f),f&&l&&(t[r].defaultSelected=!0)}else{for(r=""+wt(r),i=null,f=0;f<t.length;f++){if(t[f].value===r){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function An(t,i,r){if(i!=null&&(i=""+wt(i),i!==t.value&&(t.value=i),r==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=r!=null?""+wt(r):""}function Rn(t,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(ce(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=wt(i),t.defaultValue=r,l=t.textContent,l===r&&l!==""&&l!==null&&(t.value=l),Yt(t)}function Fi(t,i){if(i){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=i;return}}t.textContent=i}var $i=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zp(t,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,r):typeof r!="number"||r===0||$i.has(i)?i==="float"?t.cssFloat=r:t[i]=(""+r).trim():t[i]=r+"px"}function Kp(t,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&r[f]!==l&&Zp(t,f,l)}else for(var d in i)i.hasOwnProperty(d)&&Zp(t,d,i[d])}function Lu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _y=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wl(t){return yy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ea(){}var Ou=null;function Pu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ks=null,Qs=null;function Qp(t){var i=R(t);if(i&&(t=i.stateNode)){var r=t[gn]||null;e:switch(t=i.stateNode,i.type){case"input":if(Ji(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Kt(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==t&&l.form===t.form){var f=l[gn]||null;if(!f)throw Error(a(90));Ji(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===t.form&&Ct(l)}break e;case"textarea":An(t,r.value,r.defaultValue);break e;case"select":i=r.value,i!=null&&vn(t,!!r.multiple,i,!1)}}}var zu=!1;function Jp(t,i,r){if(zu)return t(i,r);zu=!0;try{var l=t(i);return l}finally{if(zu=!1,(Ks!==null||Qs!==null)&&(pc(),Ks&&(i=Ks,t=Qs,Qs=Ks=null,Qp(i),t)))for(i=0;i<t.length;i++)Qp(t[i])}}function oo(t,i){var r=t.stateNode;if(r===null)return null;var l=r[gn]||null;if(l===null)return null;r=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=!1;if(ta)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Bu=!1}var Oa=null,Fu=null,Cl=null;function $p(){if(Cl)return Cl;var t,i=Fu,r=i.length,l,f="value"in Oa?Oa.value:Oa.textContent,d=f.length;for(t=0;t<r&&i[t]===f[t];t++);var S=r-t;for(l=1;l<=S&&i[r-l]===f[d-l];l++);return Cl=f.slice(t,1<l?1-l:void 0)}function Rl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function em(){return!1}function kn(t){function i(r,l,f,d,S){this._reactName=r,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(r=t[C],this[C]=r?r(d):d[C]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Nl:em,this.isPropagationStopped=em,this}return x(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=kn(gs),co=x({},gs,{view:0,detail:0}),by=kn(co),Iu,Hu,uo,Ul=x({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Iu=t.screenX-uo.screenX,Hu=t.screenY-uo.screenY):Hu=Iu=0,uo=t),Iu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),tm=kn(Ul),Sy=x({},Ul,{dataTransfer:0}),My=kn(Sy),Ey=x({},co,{relatedTarget:0}),Vu=kn(Ey),Ty=x({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ay=kn(Ty),wy=x({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Cy=kn(wy),Ry=x({},gs,{data:0}),nm=kn(Ry),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ly(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Uy[t])?!!i[t]:!1}function Gu(){return Ly}var Oy=x({},co,{key:function(t){if(t.key){var i=Ny[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Py=kn(Oy),zy=x({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=kn(zy),By=x({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),Fy=kn(By),Iy=x({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=kn(Iy),Vy=x({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=kn(Vy),ky=x({},gs,{newState:0,oldState:0}),jy=kn(ky),Xy=[9,13,27,32],ku=ta&&"CompositionEvent"in window,fo=null;ta&&"documentMode"in document&&(fo=document.documentMode);var Wy=ta&&"TextEvent"in window&&!fo,am=ta&&(!ku||fo&&8<fo&&11>=fo),sm=" ",rm=!1;function om(t,i){switch(t){case"keyup":return Xy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function qy(t,i){switch(t){case"compositionend":return lm(i);case"keypress":return i.which!==32?null:(rm=!0,sm);case"textInput":return t=i.data,t===sm&&rm?null:t;default:return null}}function Yy(t,i){if(Js)return t==="compositionend"||!ku&&om(t,i)?(t=$p(),Cl=Fu=Oa=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return am&&i.locale!=="ko"?null:i.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Zy[t.type]:i==="textarea"}function um(t,i,r,l){Ks?Qs?Qs.push(l):Qs=[l]:Ks=l,i=bc(i,"onChange"),0<i.length&&(r=new Dl("onChange","change",null,r,l),t.push({event:r,listeners:i}))}var ho=null,po=null;function Ky(t){Wx(t,0)}function Ll(t){var i=Y(t);if(Ct(i))return t}function fm(t,i){if(t==="change")return i}var hm=!1;if(ta){var ju;if(ta){var Xu="oninput"in document;if(!Xu){var dm=document.createElement("div");dm.setAttribute("oninput","return;"),Xu=typeof dm.oninput=="function"}ju=Xu}else ju=!1;hm=ju&&(!document.documentMode||9<document.documentMode)}function pm(){ho&&(ho.detachEvent("onpropertychange",mm),po=ho=null)}function mm(t){if(t.propertyName==="value"&&Ll(po)){var i=[];um(i,po,t,Pu(t)),Jp(Ky,i)}}function Qy(t,i,r){t==="focusin"?(pm(),ho=i,po=r,ho.attachEvent("onpropertychange",mm)):t==="focusout"&&pm()}function Jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(po)}function $y(t,i){if(t==="click")return Ll(i)}function eb(t,i){if(t==="input"||t==="change")return Ll(i)}function tb(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:tb;function mo(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var r=Object.keys(t),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var f=r[l];if(!we.call(i,f)||!ti(t[f],i[f]))return!1}return!0}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gm(t,i){var r=xm(t);t=0;for(var l;r;){if(r.nodeType===3){if(l=t+r.textContent.length,t<=i&&l>=i)return{node:r,offset:i-t};t=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=xm(r)}}function vm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?vm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function _m(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=En(t.document);i instanceof t.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)t=i.contentWindow;else break;i=En(t.document)}return i}function Wu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var nb=ta&&"documentMode"in document&&11>=document.documentMode,$s=null,qu=null,xo=null,Yu=!1;function ym(t,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yu||$s==null||$s!==En(l)||(l=$s,"selectionStart"in l&&Wu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),xo&&mo(xo,l)||(xo=l,l=bc(qu,"onSelect"),0<l.length&&(i=new Dl("onSelect","select",null,i,r),t.push({event:i,listeners:l}),i.target=$s)))}function vs(t,i){var r={};return r[t.toLowerCase()]=i.toLowerCase(),r["Webkit"+t]="webkit"+i,r["Moz"+t]="moz"+i,r}var er={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},Zu={},bm={};ta&&(bm=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function _s(t){if(Zu[t])return Zu[t];if(!er[t])return t;var i=er[t],r;for(r in i)if(i.hasOwnProperty(r)&&r in bm)return Zu[t]=i[r];return t}var Sm=_s("animationend"),Mm=_s("animationiteration"),Em=_s("animationstart"),ib=_s("transitionrun"),ab=_s("transitionstart"),sb=_s("transitioncancel"),Tm=_s("transitionend"),Am=new Map,Ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ku.push("scrollEnd");function Ci(t,i){Am.set(t,i),He(i,[t])}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],tr=0,Qu=0;function Pl(){for(var t=tr,i=Qu=tr=0;i<t;){var r=di[i];di[i++]=null;var l=di[i];di[i++]=null;var f=di[i];di[i++]=null;var d=di[i];if(di[i++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}d!==0&&wm(r,f,d)}}function zl(t,i,r,l){di[tr++]=t,di[tr++]=i,di[tr++]=r,di[tr++]=l,Qu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ju(t,i,r,l){return zl(t,i,r,l),Bl(t)}function ys(t,i){return zl(t,null,null,i),Bl(t)}function wm(t,i,r){t.lanes|=r;var l=t.alternate;l!==null&&(l.lanes|=r);for(var f=!1,d=t.return;d!==null;)d.childLanes|=r,l=d.alternate,l!==null&&(l.childLanes|=r),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(f=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,f&&i!==null&&(f=31-Je(r),t=d.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=r|536870912),d):null}function Bl(t){if(50<Fo)throw Fo=0,lh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var nr={};function rb(t,i,r,l){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(t,i,r,l){return new rb(t,i,r,l)}function $u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function na(t,i){var r=t.alternate;return r===null?(r=ni(t.tag,i,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=i,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,i=t.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function Cm(t,i){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,i=r.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Fl(t,i,r,l,f,d){var S=0;if(l=t,typeof t=="function")$u(t)&&(S=1);else if(typeof t=="string")S=f1(t,r,Ne.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=ni(31,r,i,f),t.elementType=D,t.lanes=d,t;case A:return bs(r.children,f,d,i);case M:S=8,f|=24;break;case y:return t=ni(12,r,i,f|2),t.elementType=y,t.lanes=d,t;case I:return t=ni(13,r,i,f),t.elementType=I,t.lanes=d,t;case O:return t=ni(19,r,i,f),t.elementType=O,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:S=10;break e;case B:S=9;break e;case P:S=11;break e;case F:S=14;break e;case q:S=16,l=null;break e}S=29,r=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=ni(S,r,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function bs(t,i,r,l){return t=ni(7,t,l,i),t.lanes=r,t}function ef(t,i,r){return t=ni(6,t,null,i),t.lanes=r,t}function Rm(t){var i=ni(18,null,null,0);return i.stateNode=t,i}function tf(t,i,r){return i=ni(4,t.children!==null?t.children:[],t.key,i),i.lanes=r,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Nm=new WeakMap;function pi(t,i){if(typeof t=="object"&&t!==null){var r=Nm.get(t);return r!==void 0?r:(i={value:t,source:i,stack:Le(i)},Nm.set(t,i),i)}return{value:t,source:i,stack:Le(i)}}var ir=[],ar=0,Il=null,go=0,mi=[],xi=0,Pa=null,Ii=1,Hi="";function ia(t,i){ir[ar++]=go,ir[ar++]=Il,Il=t,go=i}function Dm(t,i,r){mi[xi++]=Ii,mi[xi++]=Hi,mi[xi++]=Pa,Pa=t;var l=Ii;t=Hi;var f=32-Je(l)-1;l&=~(1<<f),r+=1;var d=32-Je(i)+f;if(30<d){var S=f-f%5;d=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Ii=1<<32-Je(i)+f|r<<f|l,Hi=d+t}else Ii=1<<d|r<<f|l,Hi=t}function nf(t){t.return!==null&&(ia(t,1),Dm(t,1,0))}function af(t){for(;t===Il;)Il=ir[--ar],ir[ar]=null,go=ir[--ar],ir[ar]=null;for(;t===Pa;)Pa=mi[--xi],mi[xi]=null,Hi=mi[--xi],mi[xi]=null,Ii=mi[--xi],mi[xi]=null}function Um(t,i){mi[xi++]=Ii,mi[xi++]=Hi,mi[xi++]=Pa,Ii=i.id,Hi=i.overflow,Pa=t}var Nn=null,Jt=null,Rt=!1,za=null,gi=!1,sf=Error(a(519));function Ba(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw vo(pi(i,t)),sf}function Lm(t){var i=t.stateNode,r=t.type,l=t.memoizedProps;switch(i[fn]=t,i[gn]=l,r){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(r=0;r<Ho.length;r++)Et(Ho[r],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Et("invalid",i),Qt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",i);break;case"textarea":Et("invalid",i),Rn(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||Kx(i.textContent,r)?(l.popover!=null&&(Et("beforetoggle",i),Et("toggle",i)),l.onScroll!=null&&Et("scroll",i),l.onScrollEnd!=null&&Et("scrollend",i),l.onClick!=null&&(i.onclick=ea),i=!0):i=!1,i||Ba(t,!0)}function Om(t){for(Nn=t.return;Nn;)switch(Nn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Nn=Nn.return}}function sr(t){if(t!==Nn)return!1;if(!Rt)return Om(t),Rt=!0,!1;var i=t.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||Mh(t.type,t.memoizedProps)),r=!r),r&&Jt&&Ba(t),Om(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=sg(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=sg(t)}else i===27?(i=Jt,Qa(t.type)?(t=Ch,Ch=null,Jt=t):Jt=i):Jt=Nn?_i(t.stateNode.nextSibling):null;return!0}function Ss(){Jt=Nn=null,Rt=!1}function rf(){var t=za;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),za=null),t}function vo(t){za===null?za=[t]:za.push(t)}var of=z(null),Ms=null,aa=null;function Fa(t,i,r){be(of,i._currentValue),i._currentValue=r}function sa(t){t._currentValue=of.current,ae(of)}function lf(t,i,r){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===r)break;t=t.return}}function cf(t,i,r,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var d=f.dependencies;if(d!==null){var S=f.child;d=d.firstContext;e:for(;d!==null;){var C=d;d=f;for(var V=0;V<i.length;V++)if(C.context===i[V]){d.lanes|=r,C=d.alternate,C!==null&&(C.lanes|=r),lf(d.return,r,t),l||(S=null);break e}d=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=r,d=S.alternate,d!==null&&(d.lanes|=r),lf(S,r,t),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===t){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function rr(t,i,r,l){t=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var C=f.type;ti(f.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(f===he.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Xo):t=[Xo])}f=f.return}t!==null&&cf(i,t,r,l),i.flags|=262144}function Hl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Es(t){Ms=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return Pm(Ms,t)}function Vl(t,i){return Ms===null&&Es(t),Pm(t,i)}function Pm(t,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},aa===null){if(t===null)throw Error(a(308));aa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else aa=aa.next=i;return r}var ob=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(r,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(r){return r()})}},lb=s.unstable_scheduleCallback,cb=s.unstable_NormalPriority,hn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new ob,data:new Map,refCount:0}}function _o(t){t.refCount--,t.refCount===0&&lb(cb,function(){t.controller.abort()})}var yo=null,ff=0,or=0,lr=null;function ub(t,i){if(yo===null){var r=yo=[];ff=0,or=ph(),lr={status:"pending",value:void 0,then:function(l){r.push(l)}}}return ff++,i.then(zm,zm),i}function zm(){if(--ff===0&&yo!==null){lr!==null&&(lr.status="fulfilled");var t=yo;yo=null,or=0,lr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function fb(t,i){var r=[],l={status:"pending",value:null,reason:null,then:function(f){r.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<r.length;f++)(0,r[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<r.length;f++)(0,r[f])(void 0)}),l}var Bm=H.S;H.S=function(t,i){yx=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ub(t,i),Bm!==null&&Bm(t,i)};var Ts=z(null);function hf(){var t=Ts.current;return t!==null?t:Zt.pooledCache}function Gl(t,i){i===null?be(Ts,Ts.current):be(Ts,i.pool)}function Fm(){var t=hf();return t===null?null:{parent:hn._currentValue,pool:t}}var cr=Error(a(460)),df=Error(a(474)),kl=Error(a(542)),jl={then:function(){}};function Im(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hm(t,i,r){switch(r=t[r],r===void 0?t.push(i):r!==i&&(i.then(ea,ea),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gm(t),t;default:if(typeof i.status=="string")i.then(ea,ea);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Gm(t),t}throw ws=i,cr}}function As(t){try{var i=t._init;return i(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ws=r,cr):r}}var ws=null;function Vm(){if(ws===null)throw Error(a(459));var t=ws;return ws=null,t}function Gm(t){if(t===cr||t===kl)throw Error(a(483))}var ur=null,bo=0;function Xl(t){var i=bo;return bo+=1,ur===null&&(ur=[]),Hm(ur,t,i)}function So(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Wl(t,i){throw i.$$typeof===v?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function km(t){function i(Z,j){if(t){var $=Z.deletions;$===null?(Z.deletions=[j],Z.flags|=16):$.push(j)}}function r(Z,j){if(!t)return null;for(;j!==null;)i(Z,j),j=j.sibling;return null}function l(Z){for(var j=new Map;Z!==null;)Z.key!==null?j.set(Z.key,Z):j.set(Z.index,Z),Z=Z.sibling;return j}function f(Z,j){return Z=na(Z,j),Z.index=0,Z.sibling=null,Z}function d(Z,j,$){return Z.index=$,t?($=Z.alternate,$!==null?($=$.index,$<j?(Z.flags|=67108866,j):$):(Z.flags|=67108866,j)):(Z.flags|=1048576,j)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function C(Z,j,$,ve){return j===null||j.tag!==6?(j=ef($,Z.mode,ve),j.return=Z,j):(j=f(j,$),j.return=Z,j)}function V(Z,j,$,ve){var st=$.type;return st===A?me(Z,j,$.props.children,ve,$.key):j!==null&&(j.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===q&&As(st)===j.type)?(j=f(j,$.props),So(j,$),j.return=Z,j):(j=Fl($.type,$.key,$.props,null,Z.mode,ve),So(j,$),j.return=Z,j)}function ee(Z,j,$,ve){return j===null||j.tag!==4||j.stateNode.containerInfo!==$.containerInfo||j.stateNode.implementation!==$.implementation?(j=tf($,Z.mode,ve),j.return=Z,j):(j=f(j,$.children||[]),j.return=Z,j)}function me(Z,j,$,ve,st){return j===null||j.tag!==7?(j=bs($,Z.mode,ve,st),j.return=Z,j):(j=f(j,$),j.return=Z,j)}function _e(Z,j,$){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=ef(""+j,Z.mode,$),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case b:return $=Fl(j.type,j.key,j.props,null,Z.mode,$),So($,j),$.return=Z,$;case E:return j=tf(j,Z.mode,$),j.return=Z,j;case q:return j=As(j),_e(Z,j,$)}if(ce(j)||ne(j))return j=bs(j,Z.mode,$,null),j.return=Z,j;if(typeof j.then=="function")return _e(Z,Xl(j),$);if(j.$$typeof===w)return _e(Z,Vl(Z,j),$);Wl(Z,j)}return null}function ie(Z,j,$,ve){var st=j!==null?j.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return st!==null?null:C(Z,j,""+$,ve);if(typeof $=="object"&&$!==null){switch($.$$typeof){case b:return $.key===st?V(Z,j,$,ve):null;case E:return $.key===st?ee(Z,j,$,ve):null;case q:return $=As($),ie(Z,j,$,ve)}if(ce($)||ne($))return st!==null?null:me(Z,j,$,ve,null);if(typeof $.then=="function")return ie(Z,j,Xl($),ve);if($.$$typeof===w)return ie(Z,j,Vl(Z,$),ve);Wl(Z,$)}return null}function le(Z,j,$,ve,st){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get($)||null,C(j,Z,""+ve,st);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case b:return Z=Z.get(ve.key===null?$:ve.key)||null,V(j,Z,ve,st);case E:return Z=Z.get(ve.key===null?$:ve.key)||null,ee(j,Z,ve,st);case q:return ve=As(ve),le(Z,j,$,ve,st)}if(ce(ve)||ne(ve))return Z=Z.get($)||null,me(j,Z,ve,st,null);if(typeof ve.then=="function")return le(Z,j,$,Xl(ve),st);if(ve.$$typeof===w)return le(Z,j,$,Vl(j,ve),st);Wl(j,ve)}return null}function Ke(Z,j,$,ve){for(var st=null,Lt=null,et=j,vt=j=0,At=null;et!==null&&vt<$.length;vt++){et.index>vt?(At=et,et=null):At=et.sibling;var Ot=ie(Z,et,$[vt],ve);if(Ot===null){et===null&&(et=At);break}t&&et&&Ot.alternate===null&&i(Z,et),j=d(Ot,j,vt),Lt===null?st=Ot:Lt.sibling=Ot,Lt=Ot,et=At}if(vt===$.length)return r(Z,et),Rt&&ia(Z,vt),st;if(et===null){for(;vt<$.length;vt++)et=_e(Z,$[vt],ve),et!==null&&(j=d(et,j,vt),Lt===null?st=et:Lt.sibling=et,Lt=et);return Rt&&ia(Z,vt),st}for(et=l(et);vt<$.length;vt++)At=le(et,Z,vt,$[vt],ve),At!==null&&(t&&At.alternate!==null&&et.delete(At.key===null?vt:At.key),j=d(At,j,vt),Lt===null?st=At:Lt.sibling=At,Lt=At);return t&&et.forEach(function(ns){return i(Z,ns)}),Rt&&ia(Z,vt),st}function lt(Z,j,$,ve){if($==null)throw Error(a(151));for(var st=null,Lt=null,et=j,vt=j=0,At=null,Ot=$.next();et!==null&&!Ot.done;vt++,Ot=$.next()){et.index>vt?(At=et,et=null):At=et.sibling;var ns=ie(Z,et,Ot.value,ve);if(ns===null){et===null&&(et=At);break}t&&et&&ns.alternate===null&&i(Z,et),j=d(ns,j,vt),Lt===null?st=ns:Lt.sibling=ns,Lt=ns,et=At}if(Ot.done)return r(Z,et),Rt&&ia(Z,vt),st;if(et===null){for(;!Ot.done;vt++,Ot=$.next())Ot=_e(Z,Ot.value,ve),Ot!==null&&(j=d(Ot,j,vt),Lt===null?st=Ot:Lt.sibling=Ot,Lt=Ot);return Rt&&ia(Z,vt),st}for(et=l(et);!Ot.done;vt++,Ot=$.next())Ot=le(et,Z,vt,Ot.value,ve),Ot!==null&&(t&&Ot.alternate!==null&&et.delete(Ot.key===null?vt:Ot.key),j=d(Ot,j,vt),Lt===null?st=Ot:Lt.sibling=Ot,Lt=Ot);return t&&et.forEach(function(S1){return i(Z,S1)}),Rt&&ia(Z,vt),st}function jt(Z,j,$,ve){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case b:e:{for(var st=$.key;j!==null;){if(j.key===st){if(st=$.type,st===A){if(j.tag===7){r(Z,j.sibling),ve=f(j,$.props.children),ve.return=Z,Z=ve;break e}}else if(j.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===q&&As(st)===j.type){r(Z,j.sibling),ve=f(j,$.props),So(ve,$),ve.return=Z,Z=ve;break e}r(Z,j);break}else i(Z,j);j=j.sibling}$.type===A?(ve=bs($.props.children,Z.mode,ve,$.key),ve.return=Z,Z=ve):(ve=Fl($.type,$.key,$.props,null,Z.mode,ve),So(ve,$),ve.return=Z,Z=ve)}return S(Z);case E:e:{for(st=$.key;j!==null;){if(j.key===st)if(j.tag===4&&j.stateNode.containerInfo===$.containerInfo&&j.stateNode.implementation===$.implementation){r(Z,j.sibling),ve=f(j,$.children||[]),ve.return=Z,Z=ve;break e}else{r(Z,j);break}else i(Z,j);j=j.sibling}ve=tf($,Z.mode,ve),ve.return=Z,Z=ve}return S(Z);case q:return $=As($),jt(Z,j,$,ve)}if(ce($))return Ke(Z,j,$,ve);if(ne($)){if(st=ne($),typeof st!="function")throw Error(a(150));return $=st.call($),lt(Z,j,$,ve)}if(typeof $.then=="function")return jt(Z,j,Xl($),ve);if($.$$typeof===w)return jt(Z,j,Vl(Z,$),ve);Wl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,j!==null&&j.tag===6?(r(Z,j.sibling),ve=f(j,$),ve.return=Z,Z=ve):(r(Z,j),ve=ef($,Z.mode,ve),ve.return=Z,Z=ve),S(Z)):r(Z,j)}return function(Z,j,$,ve){try{bo=0;var st=jt(Z,j,$,ve);return ur=null,st}catch(et){if(et===cr||et===kl)throw et;var Lt=ni(29,et,null,Z.mode);return Lt.lanes=ve,Lt.return=Z,Lt}finally{}}}var Cs=km(!0),jm=km(!1),Ia=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Va(t,i,r){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Bt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Bl(t),wm(t,null,r),i}return zl(t,l,i,r),Bl(t)}function Mo(t,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,no(t,r)}}function xf(t,i){var r=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var f=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};d===null?f=d=S:d=d.next=S,r=r.next}while(r!==null);d===null?f=d=i:d=d.next=i}else f=d=i;r={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=i:t.next=i,r.lastBaseUpdate=i}var gf=!1;function Eo(){if(gf){var t=lr;if(t!==null)throw t}}function To(t,i,r,l){gf=!1;var f=t.updateQueue;Ia=!1;var d=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var V=C,ee=V.next;V.next=null,S===null?d=ee:S.next=ee,S=V;var me=t.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==S&&(C===null?me.firstBaseUpdate=ee:C.next=ee,me.lastBaseUpdate=V))}if(d!==null){var _e=f.baseState;S=0,me=ee=V=null,C=d;do{var ie=C.lane&-536870913,le=ie!==C.lane;if(le?(Tt&ie)===ie:(l&ie)===ie){ie!==0&&ie===or&&(gf=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ke=t,lt=C;ie=i;var jt=r;switch(lt.tag){case 1:if(Ke=lt.payload,typeof Ke=="function"){_e=Ke.call(jt,_e,ie);break e}_e=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=lt.payload,ie=typeof Ke=="function"?Ke.call(jt,_e,ie):Ke,ie==null)break e;_e=x({},_e,ie);break e;case 2:Ia=!0}}ie=C.callback,ie!==null&&(t.flags|=64,le&&(t.flags|=8192),le=f.callbacks,le===null?f.callbacks=[ie]:le.push(ie))}else le={lane:ie,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(ee=me=le,V=_e):me=me.next=le,S|=ie;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;le=C,C=le.next,le.next=null,f.lastBaseUpdate=le,f.shared.pending=null}}while(!0);me===null&&(V=_e),f.baseState=V,f.firstBaseUpdate=ee,f.lastBaseUpdate=me,d===null&&(f.shared.lanes=0),Wa|=S,t.lanes=S,t.memoizedState=_e}}function Xm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Wm(t,i){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)Xm(r[t],i)}var fr=z(null),ql=z(0);function qm(t,i){t=pa,be(ql,t),be(fr,i),pa=t|i.baseLanes}function vf(){be(ql,pa),be(fr,fr.current)}function _f(){pa=ql.current,ae(fr),ae(ql)}var ii=z(null),vi=null;function Ga(t){var i=t.alternate;be(cn,cn.current&1),be(ii,t),vi===null&&(i===null||fr.current!==null||i.memoizedState!==null)&&(vi=t)}function yf(t){be(cn,cn.current),be(ii,t),vi===null&&(vi=t)}function Ym(t){t.tag===22?(be(cn,cn.current),be(ii,t),vi===null&&(vi=t)):ka()}function ka(){be(cn,cn.current),be(ii,ii.current)}function ai(t){ae(ii),vi===t&&(vi=null),ae(cn)}var cn=z(0);function Yl(t){for(var i=t;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Ah(r)||wh(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ra=0,xt=null,Gt=null,dn=null,Zl=!1,hr=!1,Rs=!1,Kl=0,Ao=0,dr=null,hb=0;function rn(){throw Error(a(321))}function bf(t,i){if(i===null)return!1;for(var r=0;r<i.length&&r<t.length;r++)if(!ti(t[r],i[r]))return!1;return!0}function Sf(t,i,r,l,f,d){return ra=d,xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=t===null||t.memoizedState===null?D0:Bf,Rs=!1,d=r(l,f),Rs=!1,hr&&(d=Km(i,r,l,f)),Zm(t),d}function Zm(t){H.H=Ro;var i=Gt!==null&&Gt.next!==null;if(ra=0,dn=Gt=xt=null,Zl=!1,Ao=0,dr=null,i)throw Error(a(300));t===null||pn||(t=t.dependencies,t!==null&&Hl(t)&&(pn=!0))}function Km(t,i,r,l){xt=t;var f=0;do{if(hr&&(dr=null),Ao=0,hr=!1,25<=f)throw Error(a(301));if(f+=1,dn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=U0,d=i(r,l)}while(hr);return d}function db(){var t=H.H,i=t.useState()[0];return i=typeof i.then=="function"?wo(i):i,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(xt.flags|=1024),i}function Mf(){var t=Kl!==0;return Kl=0,t}function Ef(t,i,r){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~r}function Tf(t){if(Zl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Zl=!1}ra=0,dn=Gt=xt=null,hr=!1,Ao=Kl=0,dr=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?xt.memoizedState=dn=t:dn=dn.next=t,dn}function un(){if(Gt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=dn===null?xt.memoizedState:dn.next;if(i!==null)dn=i,Gt=t;else{if(t===null)throw xt.alternate===null?Error(a(467)):Error(a(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},dn===null?xt.memoizedState=dn=t:dn=dn.next=t}return dn}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(t){var i=Ao;return Ao+=1,dr===null&&(dr=[]),t=Hm(dr,t,i),i=xt,(dn===null?i.memoizedState:dn.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?D0:Bf),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wo(t);if(t.$$typeof===w)return Dn(t)}throw Error(a(438,String(t)))}function Af(t){var i=null,r=xt.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=xt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Ql(),xt.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(t),l=0;l<t;l++)r[l]=N;return i.index++,r}function oa(t,i){return typeof i=="function"?i(t):i}function $l(t){var i=un();return wf(i,Gt,t)}function wf(t,i,r){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var f=t.baseQueue,d=l.pending;if(d!==null){if(f!==null){var S=f.next;f.next=d.next,d.next=S}i.baseQueue=f=d,l.pending=null}if(d=t.baseState,f===null)t.memoizedState=d;else{i=f.next;var C=S=null,V=null,ee=i,me=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(Tt&_e)===_e:(ra&_e)===_e){var ie=ee.revertLane;if(ie===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===or&&(me=!0);else if((ra&ie)===ie){ee=ee.next,ie===or&&(me=!0);continue}else _e={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},V===null?(C=V=_e,S=d):V=V.next=_e,xt.lanes|=ie,Wa|=ie;_e=ee.action,Rs&&r(d,_e),d=ee.hasEagerState?ee.eagerState:r(d,_e)}else ie={lane:_e,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},V===null?(C=V=ie,S=d):V=V.next=ie,xt.lanes|=_e,Wa|=_e;ee=ee.next}while(ee!==null&&ee!==i);if(V===null?S=d:V.next=C,!ti(d,t.memoizedState)&&(pn=!0,me&&(r=lr,r!==null)))throw r;t.memoizedState=d,t.baseState=S,t.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Cf(t){var i=un(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var l=r.dispatch,f=r.pending,d=i.memoizedState;if(f!==null){r.pending=null;var S=f=f.next;do d=t(d,S.action),S=S.next;while(S!==f);ti(d,i.memoizedState)||(pn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),r.lastRenderedState=d}return[d,l]}function Qm(t,i,r){var l=xt,f=un(),d=Rt;if(d){if(r===void 0)throw Error(a(407));r=r()}else r=i();var S=!ti((Gt||f).memoizedState,r);if(S&&(f.memoizedState=r,pn=!0),f=f.queue,Df(e0.bind(null,l,f,t),[t]),f.getSnapshot!==i||S||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,pr(9,{destroy:void 0},$m.bind(null,l,f,r,i),null),Zt===null)throw Error(a(349));d||(ra&127)!==0||Jm(l,i,r)}return r}function Jm(t,i,r){t.flags|=16384,t={getSnapshot:i,value:r},i=xt.updateQueue,i===null?(i=Ql(),xt.updateQueue=i,i.stores=[t]):(r=i.stores,r===null?i.stores=[t]:r.push(t))}function $m(t,i,r,l){i.value=r,i.getSnapshot=l,t0(i)&&n0(t)}function e0(t,i,r){return r(function(){t0(i)&&n0(t)})}function t0(t){var i=t.getSnapshot;t=t.value;try{var r=i();return!ti(t,r)}catch{return!0}}function n0(t){var i=ys(t,2);i!==null&&Yn(i,t,2)}function Rf(t){var i=In();if(typeof t=="function"){var r=t;if(t=r(),Rs){nt(!0);try{r()}finally{nt(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:t},i}function i0(t,i,r,l){return t.baseState=r,wf(t,Gt,typeof l=="function"?l:oa)}function pb(t,i,r,l,f){if(nc(t))throw Error(a(485));if(t=i.action,t!==null){var d={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};H.T!==null?r(!0):d.isTransition=!1,l(d),r=i.pending,r===null?(d.next=i.pending=d,a0(i,d)):(d.next=r.next,i.pending=r.next=d)}}function a0(t,i){var r=i.action,l=i.payload,f=t.state;if(i.isTransition){var d=H.T,S={};H.T=S;try{var C=r(f,l),V=H.S;V!==null&&V(S,C),s0(t,i,C)}catch(ee){Nf(t,i,ee)}finally{d!==null&&S.types!==null&&(d.types=S.types),H.T=d}}else try{d=r(f,l),s0(t,i,d)}catch(ee){Nf(t,i,ee)}}function s0(t,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){r0(t,i,l)},function(l){return Nf(t,i,l)}):r0(t,i,r)}function r0(t,i,r){i.status="fulfilled",i.value=r,o0(i),t.state=r,i=t.pending,i!==null&&(r=i.next,r===i?t.pending=null:(r=r.next,i.next=r,a0(t,r)))}function Nf(t,i,r){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,o0(i),i=i.next;while(i!==l)}t.action=null}function o0(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function l0(t,i){return i}function c0(t,i){if(Rt){var r=Zt.formState;if(r!==null){e:{var l=xt;if(Rt){if(Jt){t:{for(var f=Jt,d=gi;f.nodeType!==8;){if(!d){f=null;break t}if(f=_i(f.nextSibling),f===null){f=null;break t}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Jt=_i(f.nextSibling),l=f.data==="F!";break e}}Ba(l)}l=!1}l&&(i=r[0])}}return r=In(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l0,lastRenderedState:i},r.queue=l,r=C0.bind(null,xt,l),l.dispatch=r,l=Rf(!1),d=zf.bind(null,xt,!1,l.queue),l=In(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,r=pb.bind(null,xt,f,d,r),f.dispatch=r,l.memoizedState=t,[i,r,!1]}function u0(t){var i=un();return f0(i,Gt,t)}function f0(t,i,r){if(i=wf(t,i,l0)[0],t=$l(oa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=wo(i)}catch(S){throw S===cr?kl:S}else l=i;i=un();var f=i.queue,d=f.dispatch;return r!==i.memoizedState&&(xt.flags|=2048,pr(9,{destroy:void 0},mb.bind(null,f,r),null)),[l,d,t]}function mb(t,i){t.action=i}function h0(t){var i=un(),r=Gt;if(r!==null)return f0(i,r,t);un(),i=i.memoizedState,r=un();var l=r.queue.dispatch;return r.memoizedState=t,[i,l,!1]}function pr(t,i,r,l){return t={tag:t,create:r,deps:l,inst:i,next:null},i=xt.updateQueue,i===null&&(i=Ql(),xt.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=t.next=t:(l=r.next,r.next=t,t.next=l,i.lastEffect=t),t}function d0(){return un().memoizedState}function ec(t,i,r,l){var f=In();xt.flags|=t,f.memoizedState=pr(1|i,{destroy:void 0},r,l===void 0?null:l)}function tc(t,i,r,l){var f=un();l=l===void 0?null:l;var d=f.memoizedState.inst;Gt!==null&&l!==null&&bf(l,Gt.memoizedState.deps)?f.memoizedState=pr(i,d,r,l):(xt.flags|=t,f.memoizedState=pr(1|i,d,r,l))}function p0(t,i){ec(8390656,8,t,i)}function Df(t,i){tc(2048,8,t,i)}function xb(t){xt.flags|=4;var i=xt.updateQueue;if(i===null)i=Ql(),xt.updateQueue=i,i.events=[t];else{var r=i.events;r===null?i.events=[t]:r.push(t)}}function m0(t){var i=un().memoizedState;return xb({ref:i,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function x0(t,i){return tc(4,2,t,i)}function g0(t,i){return tc(4,4,t,i)}function v0(t,i){if(typeof i=="function"){t=t();var r=i(t);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function _0(t,i,r){r=r!=null?r.concat([t]):null,tc(4,4,v0.bind(null,i,t),r)}function Uf(){}function y0(t,i){var r=un();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&bf(i,l[1])?l[0]:(r.memoizedState=[t,i],t)}function b0(t,i){var r=un();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&bf(i,l[1]))return l[0];if(l=t(),Rs){nt(!0);try{t()}finally{nt(!1)}}return r.memoizedState=[l,i],l}function Lf(t,i,r){return r===void 0||(ra&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=i:(t.memoizedState=r,t=Sx(),xt.lanes|=t,Wa|=t,r)}function S0(t,i,r,l){return ti(r,i)?r:fr.current!==null?(t=Lf(t,r,l),ti(t,i)||(pn=!0),t):(ra&42)===0||(ra&1073741824)!==0&&(Tt&261930)===0?(pn=!0,t.memoizedState=r):(t=Sx(),xt.lanes|=t,Wa|=t,i)}function M0(t,i,r,l,f){var d=W.p;W.p=d!==0&&8>d?d:8;var S=H.T,C={};H.T=C,zf(t,!1,i,r);try{var V=f(),ee=H.S;if(ee!==null&&ee(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var me=fb(V,l);Co(t,i,me,oi(t))}else Co(t,i,l,oi(t))}catch(_e){Co(t,i,{then:function(){},status:"rejected",reason:_e},oi())}finally{W.p=d,S!==null&&C.types!==null&&(S.types=C.types),H.T=S}}function gb(){}function Of(t,i,r,l){if(t.tag!==5)throw Error(a(476));var f=E0(t).queue;M0(t,f,i,K,r===null?gb:function(){return T0(t),r(l)})}function E0(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:K,baseState:K,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:K},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:r},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function T0(t){var i=E0(t);i.next===null&&(i=t.alternate.memoizedState),Co(t,i.next.queue,{},oi())}function Pf(){return Dn(Xo)}function A0(){return un().memoizedState}function w0(){return un().memoizedState}function vb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var r=oi();t=Ha(r);var l=Va(i,t,r);l!==null&&(Yn(l,i,r),Mo(l,i,r)),i={cache:uf()},t.payload=i;return}i=i.return}}function _b(t,i,r){var l=oi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},nc(t)?R0(i,r):(r=Ju(t,i,r,l),r!==null&&(Yn(r,t,l),N0(r,i,l)))}function C0(t,i,r){var l=oi();Co(t,i,r,l)}function Co(t,i,r,l){var f={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(nc(t))R0(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var S=i.lastRenderedState,C=d(S,r);if(f.hasEagerState=!0,f.eagerState=C,ti(C,S))return zl(t,i,f,0),Zt===null&&Pl(),!1}catch{}finally{}if(r=Ju(t,i,f,l),r!==null)return Yn(r,t,l),N0(r,i,l),!0}return!1}function zf(t,i,r,l){if(l={lane:2,revertLane:ph(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},nc(t)){if(i)throw Error(a(479))}else i=Ju(t,r,l,2),i!==null&&Yn(i,t,2)}function nc(t){var i=t.alternate;return t===xt||i!==null&&i===xt}function R0(t,i){hr=Zl=!0;var r=t.pending;r===null?i.next=i:(i.next=r.next,r.next=i),t.pending=i}function N0(t,i,r){if((r&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,r|=l,i.lanes=r,no(t,r)}}var Ro={readContext:Dn,use:Jl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn};Ro.useEffectEvent=rn;var D0={readContext:Dn,use:Jl,useCallback:function(t,i){return In().memoizedState=[t,i===void 0?null:i],t},useContext:Dn,useEffect:p0,useImperativeHandle:function(t,i,r){r=r!=null?r.concat([t]):null,ec(4194308,4,v0.bind(null,i,t),r)},useLayoutEffect:function(t,i){return ec(4194308,4,t,i)},useInsertionEffect:function(t,i){ec(4,2,t,i)},useMemo:function(t,i){var r=In();i=i===void 0?null:i;var l=t();if(Rs){nt(!0);try{t()}finally{nt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(t,i,r){var l=In();if(r!==void 0){var f=r(i);if(Rs){nt(!0);try{r(i)}finally{nt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=_b.bind(null,xt,t),[l.memoizedState,t]},useRef:function(t){var i=In();return t={current:t},i.memoizedState=t},useState:function(t){t=Rf(t);var i=t.queue,r=C0.bind(null,xt,i);return i.dispatch=r,[t.memoizedState,r]},useDebugValue:Uf,useDeferredValue:function(t,i){var r=In();return Lf(r,t,i)},useTransition:function(){var t=Rf(!1);return t=M0.bind(null,xt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,r){var l=xt,f=In();if(Rt){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Zt===null)throw Error(a(349));(Tt&127)!==0||Jm(l,i,r)}f.memoizedState=r;var d={value:r,getSnapshot:i};return f.queue=d,p0(e0.bind(null,l,d,t),[t]),l.flags|=2048,pr(9,{destroy:void 0},$m.bind(null,l,d,r,i),null),r},useId:function(){var t=In(),i=Zt.identifierPrefix;if(Rt){var r=Hi,l=Ii;r=(l&~(1<<32-Je(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Kl++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=hb++,i="_"+i+"r_"+r.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Pf,useFormState:c0,useActionState:c0,useOptimistic:function(t){var i=In();i.memoizedState=i.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=zf.bind(null,xt,!0,r),r.dispatch=i,[t,i]},useMemoCache:Af,useCacheRefresh:function(){return In().memoizedState=vb.bind(null,xt)},useEffectEvent:function(t){var i=In(),r={impl:t};return i.memoizedState=r,function(){if((Bt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Bf={readContext:Dn,use:Jl,useCallback:y0,useContext:Dn,useEffect:Df,useImperativeHandle:_0,useInsertionEffect:x0,useLayoutEffect:g0,useMemo:b0,useReducer:$l,useRef:d0,useState:function(){return $l(oa)},useDebugValue:Uf,useDeferredValue:function(t,i){var r=un();return S0(r,Gt.memoizedState,t,i)},useTransition:function(){var t=$l(oa)[0],i=un().memoizedState;return[typeof t=="boolean"?t:wo(t),i]},useSyncExternalStore:Qm,useId:A0,useHostTransitionStatus:Pf,useFormState:u0,useActionState:u0,useOptimistic:function(t,i){var r=un();return i0(r,Gt,t,i)},useMemoCache:Af,useCacheRefresh:w0};Bf.useEffectEvent=m0;var U0={readContext:Dn,use:Jl,useCallback:y0,useContext:Dn,useEffect:Df,useImperativeHandle:_0,useInsertionEffect:x0,useLayoutEffect:g0,useMemo:b0,useReducer:Cf,useRef:d0,useState:function(){return Cf(oa)},useDebugValue:Uf,useDeferredValue:function(t,i){var r=un();return Gt===null?Lf(r,t,i):S0(r,Gt.memoizedState,t,i)},useTransition:function(){var t=Cf(oa)[0],i=un().memoizedState;return[typeof t=="boolean"?t:wo(t),i]},useSyncExternalStore:Qm,useId:A0,useHostTransitionStatus:Pf,useFormState:h0,useActionState:h0,useOptimistic:function(t,i){var r=un();return Gt!==null?i0(r,Gt,t,i):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:Af,useCacheRefresh:w0};U0.useEffectEvent=m0;function Ff(t,i,r,l){i=t.memoizedState,r=r(l,i),r=r==null?i:x({},i,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var If={enqueueSetState:function(t,i,r){t=t._reactInternals;var l=oi(),f=Ha(l);f.payload=i,r!=null&&(f.callback=r),i=Va(t,f,l),i!==null&&(Yn(i,t,l),Mo(i,t,l))},enqueueReplaceState:function(t,i,r){t=t._reactInternals;var l=oi(),f=Ha(l);f.tag=1,f.payload=i,r!=null&&(f.callback=r),i=Va(t,f,l),i!==null&&(Yn(i,t,l),Mo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var r=oi(),l=Ha(r);l.tag=2,i!=null&&(l.callback=i),i=Va(t,l,r),i!==null&&(Yn(i,t,r),Mo(i,t,r))}};function L0(t,i,r,l,f,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,S):i.prototype&&i.prototype.isPureReactComponent?!mo(r,l)||!mo(f,d):!0}function O0(t,i,r,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==t&&If.enqueueReplaceState(i,i.state,null)}function Ns(t,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(t=t.defaultProps){r===i&&(r=x({},r));for(var f in t)r[f]===void 0&&(r[f]=t[f])}return r}function P0(t){Ol(t)}function z0(t){console.error(t)}function B0(t){Ol(t)}function ic(t,i){try{var r=t.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function F0(t,i,r){try{var l=t.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Hf(t,i,r){return r=Ha(r),r.tag=3,r.payload={element:null},r.callback=function(){ic(t,i)},r}function I0(t){return t=Ha(t),t.tag=3,t}function H0(t,i,r,l){var f=r.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;t.payload=function(){return f(d)},t.callback=function(){F0(i,r,l)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){F0(i,r,l),typeof f!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function yb(t,i,r,l,f){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&rr(i,r,f,!0),r=ii.current,r!==null){switch(r.tag){case 31:case 13:return vi===null?mc():r.alternate===null&&on===0&&(on=3),r.flags&=-257,r.flags|=65536,r.lanes=f,l===jl?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),fh(t,l,f)),!1;case 22:return r.flags|=65536,l===jl?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),fh(t,l,f)),!1}throw Error(a(435,r.tag))}return fh(t,l,f),mc(),!1}if(Rt)return i=ii.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==sf&&(t=Error(a(422),{cause:l}),vo(pi(t,r)))):(l!==sf&&(i=Error(a(423),{cause:l}),vo(pi(i,r))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=pi(l,r),f=Hf(t.stateNode,l,f),xf(t,f),on!==4&&(on=2)),!1;var d=Error(a(520),{cause:l});if(d=pi(d,r),Bo===null?Bo=[d]:Bo.push(d),on!==4&&(on=2),i===null)return!0;l=pi(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,t=f&-f,r.lanes|=t,t=Hf(r.stateNode,l,t),xf(r,t),!1;case 1:if(i=r.type,d=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(qa===null||!qa.has(d))))return r.flags|=65536,f&=-f,r.lanes|=f,f=I0(f),H0(f,t,r,l),xf(r,f),!1}r=r.return}while(r!==null);return!1}var Vf=Error(a(461)),pn=!1;function Un(t,i,r,l){i.child=t===null?jm(i,null,r,l):Cs(i,t.child,r,l)}function V0(t,i,r,l,f){r=r.render;var d=i.ref;if("ref"in l){var S={};for(var C in l)C!=="ref"&&(S[C]=l[C])}else S=l;return Es(i),l=Sf(t,i,r,S,d,f),C=Mf(),t!==null&&!pn?(Ef(t,i,f),la(t,i,f)):(Rt&&C&&nf(i),i.flags|=1,Un(t,i,l,f),i.child)}function G0(t,i,r,l,f){if(t===null){var d=r.type;return typeof d=="function"&&!$u(d)&&d.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=d,k0(t,i,d,l,f)):(t=Fl(r.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!Zf(t,f)){var S=d.memoizedProps;if(r=r.compare,r=r!==null?r:mo,r(S,l)&&t.ref===i.ref)return la(t,i,f)}return i.flags|=1,t=na(d,l),t.ref=i.ref,t.return=i,i.child=t}function k0(t,i,r,l,f){if(t!==null){var d=t.memoizedProps;if(mo(d,l)&&t.ref===i.ref)if(pn=!1,i.pendingProps=l=d,Zf(t,f))(t.flags&131072)!==0&&(pn=!0);else return i.lanes=t.lanes,la(t,i,f)}return Gf(t,i,r,l,f)}function j0(t,i,r,l){var f=l.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|r:r,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return X0(t,i,d,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(i,d!==null?d.cachePool:null),d!==null?qm(i,d):vf(),Ym(i);else return l=i.lanes=536870912,X0(t,i,d!==null?d.baseLanes|r:r,r,l)}else d!==null?(Gl(i,d.cachePool),qm(i,d),ka(),i.memoizedState=null):(t!==null&&Gl(i,null),vf(),ka());return Un(t,i,f,r),i.child}function No(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function X0(t,i,r,l,f){var d=hf();return d=d===null?null:{parent:hn._currentValue,pool:d},i.memoizedState={baseLanes:r,cachePool:d},t!==null&&Gl(i,null),vf(),Ym(i),t!==null&&rr(t,i,l,!0),i.childLanes=f,null}function ac(t,i){return i=rc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function W0(t,i,r){return Cs(i,t.child,null,r),t=ac(i,i.pendingProps),t.flags|=2,ai(i),i.memoizedState=null,t}function bb(t,i,r){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Rt){if(l.mode==="hidden")return t=ac(i,l),i.lanes=536870912,No(null,t);if(yf(i),(t=Jt)?(t=ag(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},r=Rm(t),r.return=i,i.child=r,Nn=i,Jt=null)):t=null,t===null)throw Ba(i);return i.lanes=536870912,null}return ac(i,l)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(yf(i),f)if(i.flags&256)i.flags&=-257,i=W0(t,i,r);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(pn||rr(t,i,r,!1),f=(r&t.childLanes)!==0,pn||f){if(l=Zt,l!==null&&(S=io(l,r),S!==0&&S!==d.retryLane))throw d.retryLane=S,ys(t,S),Yn(l,t,S),Vf;mc(),i=W0(t,i,r)}else t=d.treeContext,Jt=_i(S.nextSibling),Nn=i,Rt=!0,za=null,gi=!1,t!==null&&Um(i,t),i=ac(i,l),i.flags|=4096;return i}return t=na(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function sc(t,i){var r=i.ref;if(r===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(i.flags|=4194816)}}function Gf(t,i,r,l,f){return Es(i),r=Sf(t,i,r,l,void 0,f),l=Mf(),t!==null&&!pn?(Ef(t,i,f),la(t,i,f)):(Rt&&l&&nf(i),i.flags|=1,Un(t,i,r,f),i.child)}function q0(t,i,r,l,f,d){return Es(i),i.updateQueue=null,r=Km(i,l,r,f),Zm(t),l=Mf(),t!==null&&!pn?(Ef(t,i,d),la(t,i,d)):(Rt&&l&&nf(i),i.flags|=1,Un(t,i,r,d),i.child)}function Y0(t,i,r,l,f){if(Es(i),i.stateNode===null){var d=nr,S=r.contextType;typeof S=="object"&&S!==null&&(d=Dn(S)),d=new r(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=If,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},pf(i),S=r.contextType,d.context=typeof S=="object"&&S!==null?Dn(S):nr,d.state=i.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Ff(i,r,S,l),d.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&If.enqueueReplaceState(d,d.state,null),To(i,l,d,f),Eo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){d=i.stateNode;var C=i.memoizedProps,V=Ns(r,C);d.props=V;var ee=d.context,me=r.contextType;S=nr,typeof me=="object"&&me!==null&&(S=Dn(me));var _e=r.getDerivedStateFromProps;me=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,me||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(C||ee!==S)&&O0(i,d,l,S),Ia=!1;var ie=i.memoizedState;d.state=ie,To(i,l,d,f),Eo(),ee=i.memoizedState,C||ie!==ee||Ia?(typeof _e=="function"&&(Ff(i,r,_e,l),ee=i.memoizedState),(V=Ia||L0(i,r,V,l,ie,ee,S))?(me||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ee),d.props=l,d.state=ee,d.context=S,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,mf(t,i),S=i.memoizedProps,me=Ns(r,S),d.props=me,_e=i.pendingProps,ie=d.context,ee=r.contextType,V=nr,typeof ee=="object"&&ee!==null&&(V=Dn(ee)),C=r.getDerivedStateFromProps,(ee=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==_e||ie!==V)&&O0(i,d,l,V),Ia=!1,ie=i.memoizedState,d.state=ie,To(i,l,d,f),Eo();var le=i.memoizedState;S!==_e||ie!==le||Ia||t!==null&&t.dependencies!==null&&Hl(t.dependencies)?(typeof C=="function"&&(Ff(i,r,C,l),le=i.memoizedState),(me=Ia||L0(i,r,me,l,ie,le,V)||t!==null&&t.dependencies!==null&&Hl(t.dependencies))?(ee||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,le,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,le,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=le),d.props=l,d.state=le,d.context=V,l=me):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ie===t.memoizedState||(i.flags|=1024),l=!1)}return d=l,sc(t,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&l?(i.child=Cs(i,t.child,null,f),i.child=Cs(i,null,r,f)):Un(t,i,r,f),i.memoizedState=d.state,t=i.child):t=la(t,i,f),t}function Z0(t,i,r,l){return Ss(),i.flags|=256,Un(t,i,r,l),i.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(t){return{baseLanes:t,cachePool:Fm()}}function Xf(t,i,r){return t=t!==null?t.childLanes&~r:0,i&&(t|=ri),t}function K0(t,i,r){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),S&&(f=!0,i.flags&=-129),S=(i.flags&32)!==0,i.flags&=-33,t===null){if(Rt){if(f?Ga(i):ka(),(t=Jt)?(t=ag(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Pa!==null?{id:Ii,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},r=Rm(t),r.return=i,i.child=r,Nn=i,Jt=null)):t=null,t===null)throw Ba(i);return wh(t)?i.lanes=32:i.lanes=536870912,null}var C=l.children;return l=l.fallback,f?(ka(),f=i.mode,C=rc({mode:"hidden",children:C},f),l=bs(l,f,r,null),C.return=i,l.return=i,C.sibling=l,i.child=C,l=i.child,l.memoizedState=jf(r),l.childLanes=Xf(t,S,r),i.memoizedState=kf,No(null,l)):(Ga(i),Wf(i,C))}var V=t.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(d)i.flags&256?(Ga(i),i.flags&=-257,i=qf(t,i,r)):i.memoizedState!==null?(ka(),i.child=t.child,i.flags|=128,i=null):(ka(),C=l.fallback,f=i.mode,l=rc({mode:"visible",children:l.children},f),C=bs(C,f,r,null),C.flags|=2,l.return=i,C.return=i,l.sibling=C,i.child=l,Cs(i,t.child,null,r),l=i.child,l.memoizedState=jf(r),l.childLanes=Xf(t,S,r),i.memoizedState=kf,i=No(null,l));else if(Ga(i),wh(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var ee=S.dgst;S=ee,l=Error(a(419)),l.stack="",l.digest=S,vo({value:l,source:null,stack:null}),i=qf(t,i,r)}else if(pn||rr(t,i,r,!1),S=(r&t.childLanes)!==0,pn||S){if(S=Zt,S!==null&&(l=io(S,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,ys(t,l),Yn(S,t,l),Vf;Ah(C)||mc(),i=qf(t,i,r)}else Ah(C)?(i.flags|=192,i.child=t.child,i=null):(t=V.treeContext,Jt=_i(C.nextSibling),Nn=i,Rt=!0,za=null,gi=!1,t!==null&&Um(i,t),i=Wf(i,l.children),i.flags|=4096);return i}return f?(ka(),C=l.fallback,f=i.mode,V=t.child,ee=V.sibling,l=na(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,ee!==null?C=na(ee,C):(C=bs(C,f,r,null),C.flags|=2),C.return=i,l.return=i,l.sibling=C,i.child=l,No(null,l),l=i.child,C=t.child.memoizedState,C===null?C=jf(r):(f=C.cachePool,f!==null?(V=hn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=Fm(),C={baseLanes:C.baseLanes|r,cachePool:f}),l.memoizedState=C,l.childLanes=Xf(t,S,r),i.memoizedState=kf,No(t.child,l)):(Ga(i),r=t.child,t=r.sibling,r=na(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,t!==null&&(S=i.deletions,S===null?(i.deletions=[t],i.flags|=16):S.push(t)),i.child=r,i.memoizedState=null,r)}function Wf(t,i){return i=rc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function rc(t,i){return t=ni(22,t,null,i),t.lanes=0,t}function qf(t,i,r){return Cs(i,t.child,null,r),t=Wf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Q0(t,i,r){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),lf(t.return,i,r)}function Yf(t,i,r,l,f,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:f,treeForkCount:d}:(S.isBackwards=i,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=r,S.tailMode=f,S.treeForkCount=d)}function J0(t,i,r){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var S=cn.current,C=(S&2)!==0;if(C?(S=S&1|2,i.flags|=128):S&=1,be(cn,S),Un(t,i,l,r),l=Rt?go:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Q0(t,r,i);else if(t.tag===19)Q0(t,r,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(r=i.child,f=null;r!==null;)t=r.alternate,t!==null&&Yl(t)===null&&(f=r),r=r.sibling;r=f,r===null?(f=i.child,i.child=null):(f=r.sibling,r.sibling=null),Yf(i,!1,f,r,d,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Yl(t)===null){i.child=f;break}t=f.sibling,f.sibling=r,r=f,f=t}Yf(i,!0,r,null,d,l);break;case"together":Yf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function la(t,i,r){if(t!==null&&(i.dependencies=t.dependencies),Wa|=i.lanes,(r&i.childLanes)===0)if(t!==null){if(rr(t,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,r=na(t,t.pendingProps),i.child=r,r.return=i;t.sibling!==null;)t=t.sibling,r=r.sibling=na(t,t.pendingProps),r.return=i;r.sibling=null}return i.child}function Zf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Hl(t)))}function Sb(t,i,r){switch(i.tag){case 3:ze(i,i.stateNode.containerInfo),Fa(i,hn,t.memoizedState.cache),Ss();break;case 27:case 5:Qe(i);break;case 4:ze(i,i.stateNode.containerInfo);break;case 10:Fa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,yf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ga(i),i.flags|=128,null):(r&i.child.childLanes)!==0?K0(t,i,r):(Ga(i),t=la(t,i,r),t!==null?t.sibling:null);Ga(i);break;case 19:var f=(t.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(rr(t,i,r,!1),l=(r&i.childLanes)!==0),f){if(l)return J0(t,i,r);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),be(cn,cn.current),l)break;return null;case 22:return i.lanes=0,j0(t,i,r,i.pendingProps);case 24:Fa(i,hn,t.memoizedState.cache)}return la(t,i,r)}function $0(t,i,r){if(t!==null)if(t.memoizedProps!==i.pendingProps)pn=!0;else{if(!Zf(t,r)&&(i.flags&128)===0)return pn=!1,Sb(t,i,r);pn=(t.flags&131072)!==0}else pn=!1,Rt&&(i.flags&1048576)!==0&&Dm(i,go,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=As(i.elementType),i.type=t,typeof t=="function")$u(t)?(l=Ns(t,l),i.tag=1,i=Y0(null,i,t,l,r)):(i.tag=0,i=Gf(null,i,t,l,r));else{if(t!=null){var f=t.$$typeof;if(f===P){i.tag=11,i=V0(null,i,t,l,r);break e}else if(f===F){i.tag=14,i=G0(null,i,t,l,r);break e}}throw i=xe(t)||t,Error(a(306,i,""))}}return i;case 0:return Gf(t,i,i.type,i.pendingProps,r);case 1:return l=i.type,f=Ns(l,i.pendingProps),Y0(t,i,l,f,r);case 3:e:{if(ze(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,mf(t,i),To(i,l,null,r);var S=i.memoizedState;if(l=S.cache,Fa(i,hn,l),l!==d.cache&&cf(i,[hn],r,!0),Eo(),l=S.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:S.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Z0(t,i,l,r);break e}else if(l!==f){f=pi(Error(a(424)),i),vo(f),i=Z0(t,i,l,r);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=_i(t.firstChild),Nn=i,Rt=!0,za=null,gi=!0,r=jm(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(Ss(),l===f){i=la(t,i,r);break e}Un(t,i,l,r)}i=i.child}return i;case 26:return sc(t,i),t===null?(r=ug(i.type,null,i.pendingProps,null))?i.memoizedState=r:Rt||(r=i.type,t=i.pendingProps,l=Sc(se.current).createElement(r),l[fn]=i,l[gn]=t,Ln(l,r,t),te(l),i.stateNode=l):i.memoizedState=ug(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Qe(i),t===null&&Rt&&(l=i.stateNode=og(i.type,i.pendingProps,se.current),Nn=i,gi=!0,f=Jt,Qa(i.type)?(Ch=f,Jt=_i(l.firstChild)):Jt=f),Un(t,i,i.pendingProps.children,r),sc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Rt&&((f=l=Jt)&&(l=Jb(l,i.type,i.pendingProps,gi),l!==null?(i.stateNode=l,Nn=i,Jt=_i(l.firstChild),gi=!1,f=!0):f=!1),f||Ba(i)),Qe(i),f=i.type,d=i.pendingProps,S=t!==null?t.memoizedProps:null,l=d.children,Mh(f,d)?l=null:S!==null&&Mh(f,S)&&(i.flags|=32),i.memoizedState!==null&&(f=Sf(t,i,db,null,null,r),Xo._currentValue=f),sc(t,i),Un(t,i,l,r),i.child;case 6:return t===null&&Rt&&((t=r=Jt)&&(r=$b(r,i.pendingProps,gi),r!==null?(i.stateNode=r,Nn=i,Jt=null,t=!0):t=!1),t||Ba(i)),null;case 13:return K0(t,i,r);case 4:return ze(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Cs(i,null,l,r):Un(t,i,l,r),i.child;case 11:return V0(t,i,i.type,i.pendingProps,r);case 7:return Un(t,i,i.pendingProps,r),i.child;case 8:return Un(t,i,i.pendingProps.children,r),i.child;case 12:return Un(t,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,Fa(i,i.type,l.value),Un(t,i,l.children,r),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Es(i),f=Dn(f),l=l(f),i.flags|=1,Un(t,i,l,r),i.child;case 14:return G0(t,i,i.type,i.pendingProps,r);case 15:return k0(t,i,i.type,i.pendingProps,r);case 19:return J0(t,i,r);case 31:return bb(t,i,r);case 22:return j0(t,i,r,i.pendingProps);case 24:return Es(i),l=Dn(hn),t===null?(f=hf(),f===null&&(f=Zt,d=uf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=r),f=d),i.memoizedState={parent:l,cache:f},pf(i),Fa(i,hn,f)):((t.lanes&r)!==0&&(mf(t,i),To(i,null,null,r),Eo()),f=t.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Fa(i,hn,l)):(l=d.cache,Fa(i,hn,l),l!==f.cache&&cf(i,[hn],r,!0))),Un(t,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ca(t){t.flags|=4}function Kf(t,i,r,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(Ax())t.flags|=8192;else throw ws=jl,df}else t.flags&=-16777217}function ex(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mg(i))if(Ax())t.flags|=8192;else throw ws=jl,df}function oc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Vt():536870912,t.lanes|=i,vr|=i)}function Do(t,i){if(!Rt)switch(t.tailMode){case"hidden":i=t.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function $t(t){var i=t.alternate!==null&&t.alternate.child===t.child,r=0,l=0;if(i)for(var f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)r|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=r,i}function Mb(t,i,r){var l=i.pendingProps;switch(af(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return $t(i),null;case 3:return r=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),sa(hn),Ge(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sr(i)?ca(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rf())),$t(i),null;case 26:var f=i.type,d=i.memoizedState;return t===null?(ca(i),d!==null?($t(i),ex(i,d)):($t(i),Kf(i,f,null,l,r))):d?d!==t.memoizedState?(ca(i),$t(i),ex(i,d)):($t(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ca(i),$t(i),Kf(i,f,t,l,r)),null;case 27:if(mt(i),r=se.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ca(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $t(i),null}t=Ne.current,sr(i)?Lm(i):(t=og(f,l,r),i.stateNode=t,ca(i))}return $t(i),null;case 5:if(mt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ca(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return $t(i),null}if(d=Ne.current,sr(i))Lm(i);else{var S=Sc(se.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}d[fn]=i,d[gn]=l;e:for(S=i.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===i)break e;for(;S.sibling===null;){if(S.return===null||S.return===i)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}i.stateNode=d;e:switch(Ln(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ca(i)}}return $t(i),Kf(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,r),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ca(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=se.current,sr(i)){if(t=i.stateNode,r=i.memoizedProps,l=null,f=Nn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[fn]=i,t=!!(t.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||Kx(t.nodeValue,r)),t||Ba(i,!0)}else t=Sc(t).createTextNode(l),t[fn]=i,i.stateNode=t}return $t(i),null;case 31:if(r=i.memoizedState,t===null||t.memoizedState!==null){if(l=sr(i),r!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[fn]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),t=!1}else r=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return i.flags&256?(ai(i),i):(ai(i),null);if((i.flags&128)!==0)throw Error(a(558))}return $t(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=sr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[fn]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),f=!1}else f=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ai(i),i):(ai(i),null)}return ai(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,t=t!==null&&t.memoizedState!==null,r&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),r!==t&&r&&(i.child.flags|=8192),oc(i,i.updateQueue),$t(i),null);case 4:return Ge(),t===null&&vh(i.stateNode.containerInfo),$t(i),null;case 10:return sa(i.type),$t(i),null;case 19:if(ae(cn),l=i.memoizedState,l===null)return $t(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)Do(l,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=Yl(t),d!==null){for(i.flags|=128,Do(l,!1),t=d.updateQueue,i.updateQueue=t,oc(i,t),i.subtreeFlags=0,t=r,r=i.child;r!==null;)Cm(r,t),r=r.sibling;return be(cn,cn.current&1|2),Rt&&ia(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&T()>hc&&(i.flags|=128,f=!0,Do(l,!1),i.lanes=4194304)}else{if(!f)if(t=Yl(d),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,oc(i,t),Do(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Rt)return $t(i),null}else 2*T()-l.renderingStartTime>hc&&r!==536870912&&(i.flags|=128,f=!0,Do(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(t=l.last,t!==null?t.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,r=cn.current,be(cn,f?r&1|2:r&1),Rt&&ia(i,l.treeForkCount),t):($t(i),null);case 22:case 23:return ai(i),_f(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),r=i.updateQueue,r!==null&&oc(i,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),t!==null&&ae(Ts),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),sa(hn),$t(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Eb(t,i){switch(af(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return sa(hn),Ge(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return mt(i),null;case 31:if(i.memoizedState!==null){if(ai(i),i.alternate===null)throw Error(a(340));Ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(ai(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ae(cn),null;case 4:return Ge(),null;case 10:return sa(i.type),null;case 22:case 23:return ai(i),_f(),t!==null&&ae(Ts),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return sa(hn),null;case 25:return null;default:return null}}function tx(t,i){switch(af(i),i.tag){case 3:sa(hn),Ge();break;case 26:case 27:case 5:mt(i);break;case 4:Ge();break;case 31:i.memoizedState!==null&&ai(i);break;case 13:ai(i);break;case 19:ae(cn);break;case 10:sa(i.type);break;case 22:case 23:ai(i),_f(),t!==null&&ae(Ts);break;case 24:sa(hn)}}function Uo(t,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var f=l.next;r=f;do{if((r.tag&t)===t){l=void 0;var d=r.create,S=r.inst;l=d(),S.destroy=l}r=r.next}while(r!==f)}}catch(C){Ht(i,i.return,C)}}function ja(t,i,r){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&t)===t){var S=l.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=i;var V=r,ee=C;try{ee()}catch(me){Ht(f,V,me)}}}l=l.next}while(l!==d)}}catch(me){Ht(i,i.return,me)}}function nx(t){var i=t.updateQueue;if(i!==null){var r=t.stateNode;try{Wm(i,r)}catch(l){Ht(t,t.return,l)}}}function ix(t,i,r){r.props=Ns(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(l){Ht(t,i,l)}}function Lo(t,i){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof r=="function"?t.refCleanup=r(l):r.current=l}}catch(f){Ht(t,i,f)}}function Vi(t,i){var r=t.ref,l=t.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(f){Ht(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(f){Ht(t,i,f)}else r.current=null}function ax(t){var i=t.type,r=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break e;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(f){Ht(t,t.return,f)}}function Qf(t,i,r){try{var l=t.stateNode;Wb(l,t.type,r,i),l[gn]=i}catch(f){Ht(t,t.return,f)}}function sx(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function Jf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(t),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=ea));else if(l!==4&&(l===27&&Qa(t.type)&&(r=t.stateNode,i=null),t=t.child,t!==null))for($f(t,i,r),t=t.sibling;t!==null;)$f(t,i,r),t=t.sibling}function lc(t,i,r){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?r.insertBefore(t,i):r.appendChild(t);else if(l!==4&&(l===27&&Qa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(lc(t,i,r),t=t.sibling;t!==null;)lc(t,i,r),t=t.sibling}function rx(t){var i=t.stateNode,r=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Ln(i,l,r),i[fn]=t,i[gn]=r}catch(d){Ht(t,t.return,d)}}var ua=!1,mn=!1,eh=!1,ox=typeof WeakSet=="function"?WeakSet:Set,wn=null;function Tb(t,i){if(t=t.containerInfo,bh=Rc,t=_m(t),Wu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var S=0,C=-1,V=-1,ee=0,me=0,_e=t,ie=null;t:for(;;){for(var le;_e!==r||f!==0&&_e.nodeType!==3||(C=S+f),_e!==d||l!==0&&_e.nodeType!==3||(V=S+l),_e.nodeType===3&&(S+=_e.nodeValue.length),(le=_e.firstChild)!==null;)ie=_e,_e=le;for(;;){if(_e===t)break t;if(ie===r&&++ee===f&&(C=S),ie===d&&++me===l&&(V=S),(le=_e.nextSibling)!==null)break;_e=ie,ie=_e.parentNode}_e=le}r=C===-1||V===-1?null:{start:C,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(Sh={focusedElem:t,selectionRange:r},Rc=!1,wn=i;wn!==null;)if(i=wn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,wn=t;else for(;wn!==null;){switch(i=wn,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)f=t[r],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,r=i,f=d.memoizedProps,d=d.memoizedState,l=r.stateNode;try{var Ke=Ns(r.type,f);t=l.getSnapshotBeforeUpdate(Ke,d),l.__reactInternalSnapshotBeforeUpdate=t}catch(lt){Ht(r,r.return,lt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,r=t.nodeType,r===9)Th(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Th(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,wn=t;break}wn=i.return}}function lx(t,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:ha(t,r),l&4&&Uo(5,r);break;case 1:if(ha(t,r),l&4)if(t=r.stateNode,i===null)try{t.componentDidMount()}catch(S){Ht(r,r.return,S)}else{var f=Ns(r.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Ht(r,r.return,S)}}l&64&&nx(r),l&512&&Lo(r,r.return);break;case 3:if(ha(t,r),l&64&&(t=r.updateQueue,t!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{Wm(t,i)}catch(S){Ht(r,r.return,S)}}break;case 27:i===null&&l&4&&rx(r);case 26:case 5:ha(t,r),i===null&&l&4&&ax(r),l&512&&Lo(r,r.return);break;case 12:ha(t,r);break;case 31:ha(t,r),l&4&&fx(t,r);break;case 13:ha(t,r),l&4&&hx(t,r),l&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Ob.bind(null,r),e1(t,r))));break;case 22:if(l=r.memoizedState!==null||ua,!l){i=i!==null&&i.memoizedState!==null||mn,f=ua;var d=mn;ua=l,(mn=i)&&!d?da(t,r,(r.subtreeFlags&8772)!==0):ha(t,r),ua=f,mn=d}break;case 30:break;default:ha(t,r)}}function cx(t){var i=t.alternate;i!==null&&(t.alternate=null,cx(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ro(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,jn=!1;function fa(t,i,r){for(r=r.child;r!==null;)ux(t,i,r),r=r.sibling}function ux(t,i,r){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Ee,r)}catch{}switch(r.tag){case 26:mn||Vi(r,i),fa(t,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:mn||Vi(r,i);var l=en,f=jn;Qa(r.type)&&(en=r.stateNode,jn=!1),fa(t,i,r),Go(r.stateNode),en=l,jn=f;break;case 5:mn||Vi(r,i);case 6:if(l=en,f=jn,en=null,fa(t,i,r),en=l,jn=f,en!==null)if(jn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(r.stateNode)}catch(d){Ht(r,i,d)}else try{en.removeChild(r.stateNode)}catch(d){Ht(r,i,d)}break;case 18:en!==null&&(jn?(t=en,ng(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),Ar(t)):ng(en,r.stateNode));break;case 4:l=en,f=jn,en=r.stateNode.containerInfo,jn=!0,fa(t,i,r),en=l,jn=f;break;case 0:case 11:case 14:case 15:ja(2,r,i),mn||ja(4,r,i),fa(t,i,r);break;case 1:mn||(Vi(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&ix(r,i,l)),fa(t,i,r);break;case 21:fa(t,i,r);break;case 22:mn=(l=mn)||r.memoizedState!==null,fa(t,i,r),mn=l;break;default:fa(t,i,r)}}function fx(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ar(t)}catch(r){Ht(i,i.return,r)}}}function hx(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ar(t)}catch(r){Ht(i,i.return,r)}}function Ab(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new ox),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new ox),i;default:throw Error(a(435,t.tag))}}function cc(t,i){var r=Ab(t);i.forEach(function(l){if(!r.has(l)){r.add(l);var f=Pb.bind(null,t,l);l.then(f,f)}})}function Xn(t,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var f=r[l],d=t,S=i,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(Qa(C.type)){en=C.stateNode,jn=!1;break e}break;case 5:en=C.stateNode,jn=!1;break e;case 3:case 4:en=C.stateNode.containerInfo,jn=!0;break e}C=C.return}if(en===null)throw Error(a(160));ux(d,S,f),en=null,jn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)dx(i,t),i=i.sibling}var Ri=null;function dx(t,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xn(i,t),Wn(t),l&4&&(ja(3,t,t.return),Uo(3,t),ja(5,t,t.return));break;case 1:Xn(i,t),Wn(t),l&512&&(mn||r===null||Vi(r,r.return)),l&64&&ua&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var f=Ri;if(Xn(i,t),Wn(t),l&512&&(mn||r===null||Vi(r,r.return)),l&4){var d=r!==null?r.memoizedState:null;if(l=t.memoizedState,r===null)if(l===null)if(t.stateNode===null){e:{l=t.type,r=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[xs]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),Ln(d,l,r),d[fn]=t,te(d),l=d;break e;case"link":var S=dg("link","href",f).get(l+(r.href||""));if(S){for(var C=0;C<S.length;C++)if(d=S[C],d.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&d.getAttribute("rel")===(r.rel==null?null:r.rel)&&d.getAttribute("title")===(r.title==null?null:r.title)&&d.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(C,1);break t}}d=f.createElement(l),Ln(d,l,r),f.head.appendChild(d);break;case"meta":if(S=dg("meta","content",f).get(l+(r.content||""))){for(C=0;C<S.length;C++)if(d=S[C],d.getAttribute("content")===(r.content==null?null:""+r.content)&&d.getAttribute("name")===(r.name==null?null:r.name)&&d.getAttribute("property")===(r.property==null?null:r.property)&&d.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&d.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(C,1);break t}}d=f.createElement(l),Ln(d,l,r),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[fn]=t,te(d),l=d}t.stateNode=l}else pg(f,t.type,t.stateNode);else t.stateNode=hg(f,l,t.memoizedProps);else d!==l?(d===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):d.count--,l===null?pg(f,t.type,t.stateNode):hg(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Qf(t,t.memoizedProps,r.memoizedProps)}break;case 27:Xn(i,t),Wn(t),l&512&&(mn||r===null||Vi(r,r.return)),r!==null&&l&4&&Qf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Xn(i,t),Wn(t),l&512&&(mn||r===null||Vi(r,r.return)),t.flags&32){f=t.stateNode;try{Fi(f,"")}catch(Ke){Ht(t,t.return,Ke)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Qf(t,f,r!==null?r.memoizedProps:f)),l&1024&&(eh=!0);break;case 6:if(Xn(i,t),Wn(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,r=t.stateNode;try{r.nodeValue=l}catch(Ke){Ht(t,t.return,Ke)}}break;case 3:if(Tc=null,f=Ri,Ri=Mc(i.containerInfo),Xn(i,t),Ri=f,Wn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ar(i.containerInfo)}catch(Ke){Ht(t,t.return,Ke)}eh&&(eh=!1,px(t));break;case 4:l=Ri,Ri=Mc(t.stateNode.containerInfo),Xn(i,t),Wn(t),Ri=l;break;case 12:Xn(i,t),Wn(t);break;case 31:Xn(i,t),Wn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cc(t,l)));break;case 13:Xn(i,t),Wn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fc=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cc(t,l)));break;case 22:f=t.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,ee=ua,me=mn;if(ua=ee||f,mn=me||V,Xn(i,t),mn=me,ua=ee,Wn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(r===null||V||ua||mn||Ds(t)),r=null,i=t;;){if(i.tag===5||i.tag===26){if(r===null){V=r=i;try{if(d=V.stateNode,f)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=V.stateNode;var _e=V.memoizedProps.style,ie=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;C.style.display=ie==null||typeof ie=="boolean"?"":(""+ie).trim()}}catch(Ke){Ht(V,V.return,Ke)}}}else if(i.tag===6){if(r===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Ke){Ht(V,V.return,Ke)}}}else if(i.tag===18){if(r===null){V=i;try{var le=V.stateNode;f?ig(le,!0):ig(V.stateNode,!1)}catch(Ke){Ht(V,V.return,Ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,cc(t,r))));break;case 19:Xn(i,t),Wn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,cc(t,l)));break;case 30:break;case 21:break;default:Xn(i,t),Wn(t)}}function Wn(t){var i=t.flags;if(i&2){try{for(var r,l=t.return;l!==null;){if(sx(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var f=r.stateNode,d=Jf(t);lc(t,d,f);break;case 5:var S=r.stateNode;r.flags&32&&(Fi(S,""),r.flags&=-33);var C=Jf(t);lc(t,C,S);break;case 3:case 4:var V=r.stateNode.containerInfo,ee=Jf(t);$f(t,ee,V);break;default:throw Error(a(161))}}catch(me){Ht(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function px(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;px(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ha(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)lx(t,i.alternate,i),i=i.sibling}function Ds(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ja(4,i,i.return),Ds(i);break;case 1:Vi(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&ix(i,i.return,r),Ds(i);break;case 27:Go(i.stateNode);case 26:case 5:Vi(i,i.return),Ds(i);break;case 22:i.memoizedState===null&&Ds(i);break;case 30:Ds(i);break;default:Ds(i)}t=t.sibling}}function da(t,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,d=i,S=d.flags;switch(d.tag){case 0:case 11:case 15:da(f,d,r),Uo(4,d);break;case 1:if(da(f,d,r),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ee){Ht(l,l.return,ee)}if(l=d,f=l.updateQueue,f!==null){var C=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)Xm(V[f],C)}catch(ee){Ht(l,l.return,ee)}}r&&S&64&&nx(d),Lo(d,d.return);break;case 27:rx(d);case 26:case 5:da(f,d,r),r&&l===null&&S&4&&ax(d),Lo(d,d.return);break;case 12:da(f,d,r);break;case 31:da(f,d,r),r&&S&4&&fx(f,d);break;case 13:da(f,d,r),r&&S&4&&hx(f,d);break;case 22:d.memoizedState===null&&da(f,d,r),Lo(d,d.return);break;case 30:break;default:da(f,d,r)}i=i.sibling}}function th(t,i){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&_o(r))}function nh(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&_o(t))}function Ni(t,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)mx(t,i,r,l),i=i.sibling}function mx(t,i,r,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Ni(t,i,r,l),f&2048&&Uo(9,i);break;case 1:Ni(t,i,r,l);break;case 3:Ni(t,i,r,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&_o(t)));break;case 12:if(f&2048){Ni(t,i,r,l),t=i.stateNode;try{var d=i.memoizedProps,S=d.id,C=d.onPostCommit;typeof C=="function"&&C(S,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Ht(i,i.return,V)}}else Ni(t,i,r,l);break;case 31:Ni(t,i,r,l);break;case 13:Ni(t,i,r,l);break;case 23:break;case 22:d=i.stateNode,S=i.alternate,i.memoizedState!==null?d._visibility&2?Ni(t,i,r,l):Oo(t,i):d._visibility&2?Ni(t,i,r,l):(d._visibility|=2,mr(t,i,r,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&th(S,i);break;case 24:Ni(t,i,r,l),f&2048&&nh(i.alternate,i);break;default:Ni(t,i,r,l)}}function mr(t,i,r,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,S=i,C=r,V=l,ee=S.flags;switch(S.tag){case 0:case 11:case 15:mr(d,S,C,V,f),Uo(8,S);break;case 23:break;case 22:var me=S.stateNode;S.memoizedState!==null?me._visibility&2?mr(d,S,C,V,f):Oo(d,S):(me._visibility|=2,mr(d,S,C,V,f)),f&&ee&2048&&th(S.alternate,S);break;case 24:mr(d,S,C,V,f),f&&ee&2048&&nh(S.alternate,S);break;default:mr(d,S,C,V,f)}i=i.sibling}}function Oo(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=t,l=i,f=l.flags;switch(l.tag){case 22:Oo(r,l),f&2048&&th(l.alternate,l);break;case 24:Oo(r,l),f&2048&&nh(l.alternate,l);break;default:Oo(r,l)}i=i.sibling}}var Po=8192;function xr(t,i,r){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)xx(t,i,r),t=t.sibling}function xx(t,i,r){switch(t.tag){case 26:xr(t,i,r),t.flags&Po&&t.memoizedState!==null&&h1(r,Ri,t.memoizedState,t.memoizedProps);break;case 5:xr(t,i,r);break;case 3:case 4:var l=Ri;Ri=Mc(t.stateNode.containerInfo),xr(t,i,r),Ri=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Po,Po=16777216,xr(t,i,r),Po=l):xr(t,i,r));break;default:xr(t,i,r)}}function gx(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function zo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];wn=l,_x(l,t)}gx(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vx(t),t=t.sibling}function vx(t){switch(t.tag){case 0:case 11:case 15:zo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:zo(t);break;case 12:zo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,uc(t)):zo(t);break;default:zo(t)}}function uc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];wn=l,_x(l,t)}gx(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ja(8,i,i.return),uc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,uc(i));break;default:uc(i)}t=t.sibling}}function _x(t,i){for(;wn!==null;){var r=wn;switch(r.tag){case 0:case 11:case 15:ja(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_o(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,wn=l;else e:for(r=t;wn!==null;){l=wn;var f=l.sibling,d=l.return;if(cx(l),l===r){wn=null;break e}if(f!==null){f.return=d,wn=f;break e}wn=d}}}var wb={getCacheForType:function(t){var i=Dn(hn),r=i.data.get(t);return r===void 0&&(r=t(),i.data.set(t,r)),r},cacheSignal:function(){return Dn(hn).controller.signal}},Cb=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Zt=null,Mt=null,Tt=0,It=0,si=null,Xa=!1,gr=!1,ih=!1,pa=0,on=0,Wa=0,Us=0,ah=0,ri=0,vr=0,Bo=null,qn=null,sh=!1,fc=0,yx=0,hc=1/0,dc=null,qa=null,_n=0,Ya=null,_r=null,ma=0,rh=0,oh=null,bx=null,Fo=0,lh=null;function oi(){return(Bt&2)!==0&&Tt!==0?Tt&-Tt:H.T!==null?ph():ao()}function Sx(){if(ri===0)if((Tt&536870912)===0||Rt){var t=Oe;Oe<<=1,(Oe&3932160)===0&&(Oe=262144),ri=t}else ri=536870912;return t=ii.current,t!==null&&(t.flags|=32),ri}function Yn(t,i,r){(t===Zt&&(It===2||It===9)||t.cancelPendingCommit!==null)&&(yr(t,0),Za(t,Tt,ri,!1)),Pn(t,r),((Bt&2)===0||t!==Zt)&&(t===Zt&&((Bt&2)===0&&(Us|=r),on===4&&Za(t,Tt,ri,!1)),Gi(t))}function Mx(t,i,r){if((Bt&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&t.expiredLanes)===0||Ye(t,i),f=l?Db(t,i):uh(t,i,!0),d=l;do{if(f===0){gr&&!l&&Za(t,i,0,!1);break}else{if(r=t.current.alternate,d&&!Rb(r)){f=uh(t,i,!1),d=!1;continue}if(f===2){if(d=i,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){i=S;e:{var C=t;f=Bo;var V=C.current.memoizedState.isDehydrated;if(V&&(yr(C,S).flags|=256),S=uh(C,S,!1),S!==2){if(ih&&!V){C.errorRecoveryDisabledLanes|=d,Us|=d,f=4;break e}d=qn,qn=f,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}f=S}if(d=!1,f!==2)continue}}if(f===1){yr(t,0),Za(t,i,0,!0);break}e:{switch(l=t,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Za(l,i,ri,!Xa);break e;case 2:qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=fc+300-T(),10<f)){if(Za(l,i,ri,!Xa),ye(l,0,!0)!==0)break e;ma=i,l.timeoutHandle=eg(Ex.bind(null,l,r,qn,dc,sh,i,ri,Us,vr,Xa,d,"Throttled",-0,0),f);break e}Ex(l,r,qn,dc,sh,i,ri,Us,vr,Xa,d,null,-0,0)}}break}while(!0);Gi(t)}function Ex(t,i,r,l,f,d,S,C,V,ee,me,_e,ie,le){if(t.timeoutHandle=-1,_e=i.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},xx(i,d,_e);var Ke=(d&62914560)===d?fc-T():(d&4194048)===d?yx-T():0;if(Ke=d1(_e,Ke),Ke!==null){ma=d,t.cancelPendingCommit=Ke(Ux.bind(null,t,i,d,r,l,f,S,C,V,me,_e,null,ie,le)),Za(t,d,S,!ee);return}}Ux(t,i,d,r,l,f,S,C,V)}function Rb(t){for(var i=t;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var f=r[l],d=f.getSnapshot;f=f.value;try{if(!ti(d(),f))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Za(t,i,r,l){i&=~ah,i&=~Us,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var d=31-Je(f),S=1<<d;l[d]=-1,f&=~S}r!==0&&Tl(t,r,i)}function pc(){return(Bt&6)===0?(Io(0),!1):!0}function ch(){if(Mt!==null){if(It===0)var t=Mt.return;else t=Mt,aa=Ms=null,Tf(t),ur=null,bo=0,t=Mt;for(;t!==null;)tx(t.alternate,t),t=t.return;Mt=null}}function yr(t,i){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,Zb(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),ma=0,ch(),Zt=t,Mt=r=na(t.current,null),Tt=i,It=0,si=null,Xa=!1,gr=Ye(t,i),ih=!1,vr=ri=ah=Us=Wa=on=0,qn=Bo=null,sh=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Je(l),d=1<<f;i|=t[f],l&=~d}return pa=i,Pl(),r}function Tx(t,i){xt=null,H.H=Ro,i===cr||i===kl?(i=Vm(),It=3):i===df?(i=Vm(),It=4):It=i===Vf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,Mt===null&&(on=1,ic(t,pi(i,t.current)))}function Ax(){var t=ii.current;return t===null?!0:(Tt&4194048)===Tt?vi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===vi:!1}function wx(){var t=H.H;return H.H=Ro,t===null?Ro:t}function Cx(){var t=H.A;return H.A=wb,t}function mc(){on=4,Xa||(Tt&4194048)!==Tt&&ii.current!==null||(gr=!0),(Wa&134217727)===0&&(Us&134217727)===0||Zt===null||Za(Zt,Tt,ri,!1)}function uh(t,i,r){var l=Bt;Bt|=2;var f=wx(),d=Cx();(Zt!==t||Tt!==i)&&(dc=null,yr(t,i)),i=!1;var S=on;e:do try{if(It!==0&&Mt!==null){var C=Mt,V=si;switch(It){case 8:ch(),S=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(i=!0);var ee=It;if(It=0,si=null,br(t,C,V,ee),r&&gr){S=0;break e}break;default:ee=It,It=0,si=null,br(t,C,V,ee)}}Nb(),S=on;break}catch(me){Tx(t,me)}while(!0);return i&&t.shellSuspendCounter++,aa=Ms=null,Bt=l,H.H=f,H.A=d,Mt===null&&(Zt=null,Tt=0,Pl()),S}function Nb(){for(;Mt!==null;)Rx(Mt)}function Db(t,i){var r=Bt;Bt|=2;var l=wx(),f=Cx();Zt!==t||Tt!==i?(dc=null,hc=T()+500,yr(t,i)):gr=Ye(t,i);e:do try{if(It!==0&&Mt!==null){i=Mt;var d=si;t:switch(It){case 1:It=0,si=null,br(t,i,d,1);break;case 2:case 9:if(Im(d)){It=0,si=null,Nx(i);break}i=function(){It!==2&&It!==9||Zt!==t||(It=7),Gi(t)},d.then(i,i);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Im(d)?(It=0,si=null,Nx(i)):(It=0,si=null,br(t,i,d,7));break;case 5:var S=null;switch(Mt.tag){case 26:S=Mt.memoizedState;case 5:case 27:var C=Mt;if(S?mg(S):C.stateNode.complete){It=0,si=null;var V=C.sibling;if(V!==null)Mt=V;else{var ee=C.return;ee!==null?(Mt=ee,xc(ee)):Mt=null}break t}}It=0,si=null,br(t,i,d,5);break;case 6:It=0,si=null,br(t,i,d,6);break;case 8:ch(),on=6;break e;default:throw Error(a(462))}}Ub();break}catch(me){Tx(t,me)}while(!0);return aa=Ms=null,H.H=l,H.A=f,Bt=r,Mt!==null?0:(Zt=null,Tt=0,Pl(),on)}function Ub(){for(;Mt!==null&&!Xe();)Rx(Mt)}function Rx(t){var i=$0(t.alternate,t,pa);t.memoizedProps=t.pendingProps,i===null?xc(t):Mt=i}function Nx(t){var i=t,r=i.alternate;switch(i.tag){case 15:case 0:i=q0(r,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=q0(r,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:Tf(i);default:tx(r,i),i=Mt=Cm(i,pa),i=$0(r,i,pa)}t.memoizedProps=t.pendingProps,i===null?xc(t):Mt=i}function br(t,i,r,l){aa=Ms=null,Tf(i),ur=null,bo=0;var f=i.return;try{if(yb(t,f,i,r,Tt)){on=1,ic(t,pi(r,t.current)),Mt=null;return}}catch(d){if(f!==null)throw Mt=f,d;on=1,ic(t,pi(r,t.current)),Mt=null;return}i.flags&32768?(Rt||l===1?t=!0:gr||(Tt&536870912)!==0?t=!1:(Xa=t=!0,(l===2||l===9||l===3||l===6)&&(l=ii.current,l!==null&&l.tag===13&&(l.flags|=16384))),Dx(i,t)):xc(i)}function xc(t){var i=t;do{if((i.flags&32768)!==0){Dx(i,Xa);return}t=i.return;var r=Mb(i.alternate,i,pa);if(r!==null){Mt=r;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=t}while(i!==null);on===0&&(on=5)}function Dx(t,i){do{var r=Eb(t.alternate,t);if(r!==null){r.flags&=32767,Mt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=r}while(t!==null);on=6,Mt=null}function Ux(t,i,r,l,f,d,S,C,V){t.cancelPendingCommit=null;do gc();while(_n!==0);if((Bt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=Qu,$n(t,r,d,S,C,V),t===Zt&&(Mt=Zt=null,Tt=0),_r=i,Ya=t,ma=r,rh=d,oh=f,bx=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,zb(ue,function(){return Bx(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,f=W.p,W.p=2,S=Bt,Bt|=4;try{Tb(t,i,r)}finally{Bt=S,W.p=f,H.T=l}}_n=1,Lx(),Ox(),Px()}}function Lx(){if(_n===1){_n=0;var t=Ya,i=_r,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=H.T,H.T=null;var l=W.p;W.p=2;var f=Bt;Bt|=4;try{dx(i,t);var d=Sh,S=_m(t.containerInfo),C=d.focusedElem,V=d.selectionRange;if(S!==C&&C&&C.ownerDocument&&vm(C.ownerDocument.documentElement,C)){if(V!==null&&Wu(C)){var ee=V.start,me=V.end;if(me===void 0&&(me=ee),"selectionStart"in C)C.selectionStart=ee,C.selectionEnd=Math.min(me,C.value.length);else{var _e=C.ownerDocument||document,ie=_e&&_e.defaultView||window;if(ie.getSelection){var le=ie.getSelection(),Ke=C.textContent.length,lt=Math.min(V.start,Ke),jt=V.end===void 0?lt:Math.min(V.end,Ke);!le.extend&&lt>jt&&(S=jt,jt=lt,lt=S);var Z=gm(C,lt),j=gm(C,jt);if(Z&&j&&(le.rangeCount!==1||le.anchorNode!==Z.node||le.anchorOffset!==Z.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var $=_e.createRange();$.setStart(Z.node,Z.offset),le.removeAllRanges(),lt>jt?(le.addRange($),le.extend(j.node,j.offset)):($.setEnd(j.node,j.offset),le.addRange($))}}}}for(_e=[],le=C;le=le.parentNode;)le.nodeType===1&&_e.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<_e.length;C++){var ve=_e[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Rc=!!bh,Sh=bh=null}finally{Bt=f,W.p=l,H.T=r}}t.current=i,_n=2}}function Ox(){if(_n===2){_n=0;var t=Ya,i=_r,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=H.T,H.T=null;var l=W.p;W.p=2;var f=Bt;Bt|=4;try{lx(t,i.alternate,i)}finally{Bt=f,W.p=l,H.T=r}}_n=3}}function Px(){if(_n===4||_n===3){_n=0,U();var t=Ya,i=_r,r=ma,l=bx;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?_n=5:(_n=0,_r=Ya=null,zx(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(qa=null),ms(r),i=i.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Ee,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,f=W.p,W.p=2,H.T=null;try{for(var d=t.onRecoverableError,S=0;S<l.length;S++){var C=l[S];d(C.value,{componentStack:C.stack})}}finally{H.T=i,W.p=f}}(ma&3)!==0&&gc(),Gi(t),f=t.pendingLanes,(r&261930)!==0&&(f&42)!==0?t===lh?Fo++:(Fo=0,lh=t):Fo=0,Io(0)}}function zx(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,_o(i)))}function gc(){return Lx(),Ox(),Px(),Bx()}function Bx(){if(_n!==5)return!1;var t=Ya,i=rh;rh=0;var r=ms(ma),l=H.T,f=W.p;try{W.p=32>r?32:r,H.T=null,r=oh,oh=null;var d=Ya,S=ma;if(_n=0,_r=Ya=null,ma=0,(Bt&6)!==0)throw Error(a(331));var C=Bt;if(Bt|=4,vx(d.current),mx(d,d.current,S,r),Bt=C,Io(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Ee,d)}catch{}return!0}finally{W.p=f,H.T=l,zx(t,i)}}function Fx(t,i,r){i=pi(r,i),i=Hf(t.stateNode,i,2),t=Va(t,i,2),t!==null&&(Pn(t,2),Gi(t))}function Ht(t,i,r){if(t.tag===3)Fx(t,t,r);else for(;i!==null;){if(i.tag===3){Fx(i,t,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(qa===null||!qa.has(l))){t=pi(r,t),r=I0(2),l=Va(i,r,2),l!==null&&(H0(r,l,i,t),Pn(l,2),Gi(l));break}}i=i.return}}function fh(t,i,r){var l=t.pingCache;if(l===null){l=t.pingCache=new Cb;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(r)||(ih=!0,f.add(r),t=Lb.bind(null,t,i,r),i.then(t,t))}function Lb(t,i,r){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Zt===t&&(Tt&r)===r&&(on===4||on===3&&(Tt&62914560)===Tt&&300>T()-fc?(Bt&2)===0&&yr(t,0):ah|=r,vr===Tt&&(vr=0)),Gi(t)}function Ix(t,i){i===0&&(i=Vt()),t=ys(t,i),t!==null&&(Pn(t,i),Gi(t))}function Ob(t){var i=t.memoizedState,r=0;i!==null&&(r=i.retryLane),Ix(t,r)}function Pb(t,i){var r=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(r=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Ix(t,r)}function zb(t,i){return qe(t,i)}var vc=null,Sr=null,hh=!1,_c=!1,dh=!1,Ka=0;function Gi(t){t!==Sr&&t.next===null&&(Sr===null?vc=Sr=t:Sr=Sr.next=t),_c=!0,hh||(hh=!0,Fb())}function Io(t,i){if(!dh&&_c){dh=!0;do for(var r=!1,l=vc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var S=l.suspendedLanes,C=l.pingedLanes;d=(1<<31-Je(42|t)+1)-1,d&=f&~(S&~C),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(r=!0,kx(l,d))}else d=Tt,d=ye(l,l===Zt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Ye(l,d)||(r=!0,kx(l,d));l=l.next}while(r);dh=!1}}function Bb(){Hx()}function Hx(){_c=hh=!1;var t=0;Ka!==0&&Yb()&&(t=Ka);for(var i=T(),r=null,l=vc;l!==null;){var f=l.next,d=Vx(l,i);d===0?(l.next=null,r===null?vc=f:r.next=f,f===null&&(Sr=r)):(r=l,(t!==0||(d&3)!==0)&&(_c=!0)),l=f}_n!==0&&_n!==5||Io(t),Ka!==0&&(Ka=0)}function Vx(t,i){for(var r=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Je(d),C=1<<S,V=f[S];V===-1?((C&r)===0||(C&l)!==0)&&(f[S]=ht(C,i)):V<=i&&(t.expiredLanes|=C),d&=~C}if(i=Zt,r=Tt,r=ye(t,t===i?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,r===0||t===i&&(It===2||It===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Be(l),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ye(t,r)){if(i=r&-r,i===t.callbackPriority)return i;switch(l!==null&&Be(l),ms(r)){case 2:case 8:r=Me;break;case 32:r=ue;break;case 268435456:r=Fe;break;default:r=ue}return l=Gx.bind(null,t),r=qe(r,l),t.callbackPriority=i,t.callbackNode=r,i}return l!==null&&l!==null&&Be(l),t.callbackPriority=2,t.callbackNode=null,2}function Gx(t,i){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(gc()&&t.callbackNode!==r)return null;var l=Tt;return l=ye(t,t===Zt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Mx(t,l,i),Vx(t,T()),t.callbackNode!=null&&t.callbackNode===r?Gx.bind(null,t):null)}function kx(t,i){if(gc())return null;Mx(t,i,!0)}function Fb(){Kb(function(){(Bt&6)!==0?qe(de,Bb):Hx()})}function ph(){if(Ka===0){var t=or;t===0&&(t=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),Ka=t}return Ka}function jx(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:wl(""+t)}function Xx(t,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,t.id&&r.setAttribute("form",t.id),i.parentNode.insertBefore(r,i),t=new FormData(t),r.parentNode.removeChild(r),t}function Ib(t,i,r,l,f){if(i==="submit"&&r&&r.stateNode===f){var d=jx((f[gn]||null).action),S=l.submitter;S&&(i=(i=S[gn]||null)?jx(i.formAction):S.getAttribute("formAction"),i!==null&&(d=i,S=null));var C=new Dl("action","action",null,l,f);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ka!==0){var V=S?Xx(f,S):new FormData(f);Of(r,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(C.preventDefault(),V=S?Xx(f,S):new FormData(f),Of(r,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var mh=0;mh<Ku.length;mh++){var xh=Ku[mh],Hb=xh.toLowerCase(),Vb=xh[0].toUpperCase()+xh.slice(1);Ci(Hb,"on"+Vb)}Ci(Sm,"onAnimationEnd"),Ci(Mm,"onAnimationIteration"),Ci(Em,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(ib,"onTransitionRun"),Ci(ab,"onTransitionStart"),Ci(sb,"onTransitionCancel"),Ci(Tm,"onTransitionEnd"),We("onMouseEnter",["mouseout","mouseover"]),We("onMouseLeave",["mouseout","mouseover"]),We("onPointerEnter",["pointerout","pointerover"]),We("onPointerLeave",["pointerout","pointerover"]),He("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),He("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),He("onBeforeInput",["compositionend","keypress","textInput","paste"]),He("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Wx(t,i){i=(i&4)!==0;for(var r=0;r<t.length;r++){var l=t[r],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var S=l.length-1;0<=S;S--){var C=l[S],V=C.instance,ee=C.currentTarget;if(C=C.listener,V!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=ee;try{d(f)}catch(me){Ol(me)}f.currentTarget=null,d=V}else for(S=0;S<l.length;S++){if(C=l[S],V=C.instance,ee=C.currentTarget,C=C.listener,V!==d&&f.isPropagationStopped())break e;d=C,f.currentTarget=ee;try{d(f)}catch(me){Ol(me)}f.currentTarget=null,d=V}}}}function Et(t,i){var r=i[Zs];r===void 0&&(r=i[Zs]=new Set);var l=t+"__bubble";r.has(l)||(qx(i,t,2,!1),r.add(l))}function gh(t,i,r){var l=0;i&&(l|=4),qx(r,t,l,i)}var yc="_reactListening"+Math.random().toString(36).slice(2);function vh(t){if(!t[yc]){t[yc]=!0,Q.forEach(function(r){r!=="selectionchange"&&(Gb.has(r)||gh(r,!1,t),gh(r,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[yc]||(i[yc]=!0,gh("selectionchange",!1,i))}}function qx(t,i,r,l){switch(Sg(i)){case 2:var f=x1;break;case 8:f=g1;break;default:f=Lh}r=f.bind(null,i,r,t),f=void 0,!Bu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,r,{capture:!0,passive:f}):t.addEventListener(i,r,!0):f!==void 0?t.addEventListener(i,r,{passive:f}):t.addEventListener(i,r,!1)}function _h(t,i,r,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var C=l.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=l.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=Ua(C),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){l=d=S;continue e}C=C.parentNode}}l=l.return}Jp(function(){var ee=d,me=Pu(r),_e=[];e:{var ie=Am.get(t);if(ie!==void 0){var le=Dl,Ke=t;switch(t){case"keypress":if(Rl(r)===0)break e;case"keydown":case"keyup":le=Py;break;case"focusin":Ke="focus",le=Vu;break;case"focusout":Ke="blur",le=Vu;break;case"beforeblur":case"afterblur":le=Vu;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=My;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=Fy;break;case Sm:case Mm:case Em:le=Ay;break;case Tm:le=Hy;break;case"scroll":case"scrollend":le=by;break;case"wheel":le=Gy;break;case"copy":case"cut":case"paste":le=Cy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=im;break;case"toggle":case"beforetoggle":le=jy}var lt=(i&4)!==0,jt=!lt&&(t==="scroll"||t==="scrollend"),Z=lt?ie!==null?ie+"Capture":null:ie;lt=[];for(var j=ee,$;j!==null;){var ve=j;if($=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||$===null||Z===null||(ve=oo(j,Z),ve!=null&&lt.push(Vo(j,ve,$))),jt)break;j=j.return}0<lt.length&&(ie=new le(ie,Ke,null,r,me),_e.push({event:ie,listeners:lt}))}}if((i&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ie&&r!==Ou&&(Ke=r.relatedTarget||r.fromElement)&&(Ua(Ke)||Ke[Qi]))break e;if((le||ie)&&(ie=me.window===me?me:(ie=me.ownerDocument)?ie.defaultView||ie.parentWindow:window,le?(Ke=r.relatedTarget||r.toElement,le=ee,Ke=Ke?Ua(Ke):null,Ke!==null&&(jt=c(Ke),lt=Ke.tag,Ke!==jt||lt!==5&&lt!==27&&lt!==6)&&(Ke=null)):(le=null,Ke=ee),le!==Ke)){if(lt=tm,ve="onMouseLeave",Z="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(lt=im,ve="onPointerLeave",Z="onPointerEnter",j="pointer"),jt=le==null?ie:Y(le),$=Ke==null?ie:Y(Ke),ie=new lt(ve,j+"leave",le,r,me),ie.target=jt,ie.relatedTarget=$,ve=null,Ua(me)===ee&&(lt=new lt(Z,j+"enter",Ke,r,me),lt.target=$,lt.relatedTarget=jt,ve=lt),jt=ve,le&&Ke)t:{for(lt=kb,Z=le,j=Ke,$=0,ve=Z;ve;ve=lt(ve))$++;ve=0;for(var st=j;st;st=lt(st))ve++;for(;0<$-ve;)Z=lt(Z),$--;for(;0<ve-$;)j=lt(j),ve--;for(;$--;){if(Z===j||j!==null&&Z===j.alternate){lt=Z;break t}Z=lt(Z),j=lt(j)}lt=null}else lt=null;le!==null&&Yx(_e,ie,le,lt,!1),Ke!==null&&jt!==null&&Yx(_e,jt,Ke,lt,!0)}}e:{if(ie=ee?Y(ee):window,le=ie.nodeName&&ie.nodeName.toLowerCase(),le==="select"||le==="input"&&ie.type==="file")var Lt=fm;else if(cm(ie))if(hm)Lt=eb;else{Lt=Jy;var et=Qy}else le=ie.nodeName,!le||le.toLowerCase()!=="input"||ie.type!=="checkbox"&&ie.type!=="radio"?ee&&Lu(ee.elementType)&&(Lt=fm):Lt=$y;if(Lt&&(Lt=Lt(t,ee))){um(_e,Lt,r,me);break e}et&&et(t,ie,ee),t==="focusout"&&ee&&ie.type==="number"&&ee.memoizedProps.value!=null&&Tn(ie,"number",ie.value)}switch(et=ee?Y(ee):window,t){case"focusin":(cm(et)||et.contentEditable==="true")&&($s=et,qu=ee,xo=null);break;case"focusout":xo=qu=$s=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,ym(_e,r,me);break;case"selectionchange":if(nb)break;case"keydown":case"keyup":ym(_e,r,me)}var vt;if(ku)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Js?om(t,r)&&(At="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(At="onCompositionStart");At&&(am&&r.locale!=="ko"&&(Js||At!=="onCompositionStart"?At==="onCompositionEnd"&&Js&&(vt=$p()):(Oa=me,Fu="value"in Oa?Oa.value:Oa.textContent,Js=!0)),et=bc(ee,At),0<et.length&&(At=new nm(At,t,null,r,me),_e.push({event:At,listeners:et}),vt?At.data=vt:(vt=lm(r),vt!==null&&(At.data=vt)))),(vt=Wy?qy(t,r):Yy(t,r))&&(At=bc(ee,"onBeforeInput"),0<At.length&&(et=new nm("onBeforeInput","beforeinput",null,r,me),_e.push({event:et,listeners:At}),et.data=vt)),Ib(_e,t,ee,r,me)}Wx(_e,i)})}function Vo(t,i,r){return{instance:t,listener:i,currentTarget:r}}function bc(t,i){for(var r=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=oo(t,r),f!=null&&l.unshift(Vo(t,f,d)),f=oo(t,i),f!=null&&l.push(Vo(t,f,d))),t.tag===3)return l;t=t.return}return[]}function kb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yx(t,i,r,l,f){for(var d=i._reactName,S=[];r!==null&&r!==l;){var C=r,V=C.alternate,ee=C.stateNode;if(C=C.tag,V!==null&&V===l)break;C!==5&&C!==26&&C!==27||ee===null||(V=ee,f?(ee=oo(r,d),ee!=null&&S.unshift(Vo(r,ee,V))):f||(ee=oo(r,d),ee!=null&&S.push(Vo(r,ee,V)))),r=r.return}S.length!==0&&t.push({event:i,listeners:S})}var jb=/\r\n?/g,Xb=/\u0000|\uFFFD/g;function Zx(t){return(typeof t=="string"?t:""+t).replace(jb,`
`).replace(Xb,"")}function Kx(t,i){return i=Zx(i),Zx(t)===i}function kt(t,i,r,l,f,d){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Fi(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Fi(t,""+l);break;case"className":Nt(t,"class",l);break;case"tabIndex":Nt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(t,r,l);break;case"style":Kp(t,l,d);break;case"data":if(i!=="object"){Nt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){t.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=wl(""+l),t.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(r==="formAction"?(i!=="input"&&kt(t,i,"name",f.name,f,null),kt(t,i,"formEncType",f.formEncType,f,null),kt(t,i,"formMethod",f.formMethod,f,null),kt(t,i,"formTarget",f.formTarget,f,null)):(kt(t,i,"encType",f.encType,f,null),kt(t,i,"method",f.method,f,null),kt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(r);break}l=wl(""+l),t.setAttribute(r,l);break;case"onClick":l!=null&&(t.onclick=ea);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}r=wl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""+l):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":l===!0?t.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(r,l):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(r,l):t.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(r):t.setAttribute(r,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),gt(t,"popover",l);break;case"xlinkActuate":Ut(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ut(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ut(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ut(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ut(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ut(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ut(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":gt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=_y.get(r)||r,gt(t,r,l))}}function yh(t,i,r,l,f,d){switch(r){case"style":Kp(t,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof l=="string"?Fi(t,l):(typeof l=="number"||typeof l=="bigint")&&Fi(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ue.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(f=r.endsWith("Capture"),i=r.slice(2,f?r.length-7:void 0),d=t[gn]||null,d=d!=null?d[r]:null,typeof d=="function"&&t.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(i,l,f);break e}r in t?t[r]=l:l===!0?t.setAttribute(r,""):gt(t,r,l)}}}function Ln(t,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,f=!1,d;for(d in r)if(r.hasOwnProperty(d)){var S=r[d];if(S!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:kt(t,i,d,S,r,null)}}f&&kt(t,i,"srcSet",r.srcSet,r,null),l&&kt(t,i,"src",r.src,r,null);return;case"input":Et("invalid",t);var C=d=S=f=null,V=null,ee=null;for(l in r)if(r.hasOwnProperty(l)){var me=r[l];if(me!=null)switch(l){case"name":f=me;break;case"type":S=me;break;case"checked":V=me;break;case"defaultChecked":ee=me;break;case"value":d=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:kt(t,i,l,me,r,null)}}Qt(t,d,C,V,ee,S,f,!1);return;case"select":Et("invalid",t),l=S=d=null;for(f in r)if(r.hasOwnProperty(f)&&(C=r[f],C!=null))switch(f){case"value":d=C;break;case"defaultValue":S=C;break;case"multiple":l=C;default:kt(t,i,f,C,r,null)}i=d,r=S,t.multiple=!!l,i!=null?vn(t,!!l,i,!1):r!=null&&vn(t,!!l,r,!0);return;case"textarea":Et("invalid",t),d=f=l=null;for(S in r)if(r.hasOwnProperty(S)&&(C=r[S],C!=null))switch(S){case"value":l=C;break;case"defaultValue":f=C;break;case"children":d=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:kt(t,i,S,C,r,null)}Rn(t,l,f,d);return;case"option":for(V in r)if(r.hasOwnProperty(V)&&(l=r[V],l!=null))switch(V){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:kt(t,i,V,l,r,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<Ho.length;l++)Et(Ho[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in r)if(r.hasOwnProperty(ee)&&(l=r[ee],l!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:kt(t,i,ee,l,r,null)}return;default:if(Lu(i)){for(me in r)r.hasOwnProperty(me)&&(l=r[me],l!==void 0&&yh(t,i,me,l,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(l=r[C],l!=null&&kt(t,i,C,l,r,null))}function Wb(t,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,S=null,C=null,V=null,ee=null,me=null;for(le in r){var _e=r[le];if(r.hasOwnProperty(le)&&_e!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":V=_e;default:l.hasOwnProperty(le)||kt(t,i,le,null,l,_e)}}for(var ie in l){var le=l[ie];if(_e=r[ie],l.hasOwnProperty(ie)&&(le!=null||_e!=null))switch(ie){case"type":d=le;break;case"name":f=le;break;case"checked":ee=le;break;case"defaultChecked":me=le;break;case"value":S=le;break;case"defaultValue":C=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:le!==_e&&kt(t,i,ie,le,l,_e)}}Ji(t,S,C,V,ee,me,d,f);return;case"select":le=S=C=ie=null;for(d in r)if(V=r[d],r.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":le=V;default:l.hasOwnProperty(d)||kt(t,i,d,null,l,V)}for(f in l)if(d=l[f],V=r[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":ie=d;break;case"defaultValue":C=d;break;case"multiple":S=d;default:d!==V&&kt(t,i,f,d,l,V)}i=C,r=S,l=le,ie!=null?vn(t,!!r,ie,!1):!!l!=!!r&&(i!=null?vn(t,!!r,i,!0):vn(t,!!r,r?[]:"",!1));return;case"textarea":le=ie=null;for(C in r)if(f=r[C],r.hasOwnProperty(C)&&f!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:kt(t,i,C,null,l,f)}for(S in l)if(f=l[S],d=r[S],l.hasOwnProperty(S)&&(f!=null||d!=null))switch(S){case"value":ie=f;break;case"defaultValue":le=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&kt(t,i,S,f,l,d)}An(t,ie,le);return;case"option":for(var Ke in r)if(ie=r[Ke],r.hasOwnProperty(Ke)&&ie!=null&&!l.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:kt(t,i,Ke,null,l,ie)}for(V in l)if(ie=l[V],le=r[V],l.hasOwnProperty(V)&&ie!==le&&(ie!=null||le!=null))switch(V){case"selected":t.selected=ie&&typeof ie!="function"&&typeof ie!="symbol";break;default:kt(t,i,V,ie,l,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in r)ie=r[lt],r.hasOwnProperty(lt)&&ie!=null&&!l.hasOwnProperty(lt)&&kt(t,i,lt,null,l,ie);for(ee in l)if(ie=l[ee],le=r[ee],l.hasOwnProperty(ee)&&ie!==le&&(ie!=null||le!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ie!=null)throw Error(a(137,i));break;default:kt(t,i,ee,ie,l,le)}return;default:if(Lu(i)){for(var jt in r)ie=r[jt],r.hasOwnProperty(jt)&&ie!==void 0&&!l.hasOwnProperty(jt)&&yh(t,i,jt,void 0,l,ie);for(me in l)ie=l[me],le=r[me],!l.hasOwnProperty(me)||ie===le||ie===void 0&&le===void 0||yh(t,i,me,ie,l,le);return}}for(var Z in r)ie=r[Z],r.hasOwnProperty(Z)&&ie!=null&&!l.hasOwnProperty(Z)&&kt(t,i,Z,null,l,ie);for(_e in l)ie=l[_e],le=r[_e],!l.hasOwnProperty(_e)||ie===le||ie==null&&le==null||kt(t,i,_e,ie,l,le)}function Qx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var f=r[l],d=f.transferSize,S=f.initiatorType,C=f.duration;if(d&&C&&Qx(S)){for(S=0,C=f.responseEnd,l+=1;l<r.length;l++){var V=r[l],ee=V.startTime;if(ee>C)break;var me=V.transferSize,_e=V.initiatorType;me&&Qx(_e)&&(V=V.responseEnd,S+=me*(V<C?1:(C-ee)/(V-ee)))}if(--l,i+=8*(d+S)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bh=null,Sh=null;function Sc(t){return t.nodeType===9?t:t.ownerDocument}function Jx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $x(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Mh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Eh=null;function Yb(){var t=window.event;return t&&t.type==="popstate"?t===Eh?!1:(Eh=t,!0):(Eh=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,Zb=typeof clearTimeout=="function"?clearTimeout:void 0,tg=typeof Promise=="function"?Promise:void 0,Kb=typeof queueMicrotask=="function"?queueMicrotask:typeof tg<"u"?function(t){return tg.resolve(null).then(t).catch(Qb)}:eg;function Qb(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function ng(t,i){var r=i,l=0;do{var f=r.nextSibling;if(t.removeChild(r),f&&f.nodeType===8)if(r=f.data,r==="/$"||r==="/&"){if(l===0){t.removeChild(f),Ar(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Go(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Go(r);for(var d=r.firstChild;d;){var S=d.nextSibling,C=d.nodeName;d[xs]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&d.rel.toLowerCase()==="stylesheet"||r.removeChild(d),d=S}}else r==="body"&&Go(t.ownerDocument.body);r=f}while(r);Ar(i)}function ig(t,i){var r=t;t=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=l}while(r)}function Th(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":Th(r),ro(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function Jb(t,i,r,l){for(;t.nodeType===1;){var f=r;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[xs])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function $b(t,i,r){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=_i(t.nextSibling),t===null))return null;return t}function ag(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=_i(t.nextSibling),t===null))return null;return t}function Ah(t){return t.data==="$?"||t.data==="$~"}function wh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function e1(t,i){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function _i(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Ch=null;function sg(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(i===0)return _i(t.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}t=t.nextSibling}return null}function rg(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return t;i--}else r!=="/$"&&r!=="/&"||i++}t=t.previousSibling}return null}function og(t,i,r){switch(i=Sc(r),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Go(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ro(t)}var yi=new Map,lg=new Set;function Mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=W.d;W.d={f:t1,r:n1,D:i1,C:a1,L:s1,m:r1,X:l1,S:o1,M:c1};function t1(){var t=xa.f(),i=pc();return t||i}function n1(t){var i=R(t);i!==null&&i.tag===5&&i.type==="form"?T0(i):xa.r(t)}var Mr=typeof document>"u"?null:document;function cg(t,i,r){var l=Mr;if(l&&typeof i=="string"&&i){var f=Kt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof r=="string"&&(f+='[crossorigin="'+r+'"]'),lg.has(f)||(lg.add(f),t={rel:t,crossOrigin:r,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Ln(i,"link",t),te(i),l.head.appendChild(i)))}}function i1(t){xa.D(t),cg("dns-prefetch",t,null)}function a1(t,i){xa.C(t,i),cg("preconnect",t,i)}function s1(t,i,r){xa.L(t,i,r);var l=Mr;if(l&&t&&i){var f='link[rel="preload"][as="'+Kt(i)+'"]';i==="image"&&r&&r.imageSrcSet?(f+='[imagesrcset="'+Kt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(f+='[imagesizes="'+Kt(r.imageSizes)+'"]')):f+='[href="'+Kt(t)+'"]';var d=f;switch(i){case"style":d=Er(t);break;case"script":d=Tr(t)}yi.has(d)||(t=x({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:t,as:i},r),yi.set(d,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(ko(d))||i==="script"&&l.querySelector(jo(d))||(i=l.createElement("link"),Ln(i,"link",t),te(i),l.head.appendChild(i)))}}function r1(t,i){xa.m(t,i);var r=Mr;if(r&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Kt(l)+'"][href="'+Kt(t)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Tr(t)}if(!yi.has(d)&&(t=x({rel:"modulepreload",href:t},i),yi.set(d,t),r.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(jo(d)))return}l=r.createElement("link"),Ln(l,"link",t),te(l),r.head.appendChild(l)}}}function o1(t,i,r){xa.S(t,i,r);var l=Mr;if(l&&t){var f=re(l).hoistableStyles,d=Er(t);i=i||"default";var S=f.get(d);if(!S){var C={loading:0,preload:null};if(S=l.querySelector(ko(d)))C.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":i},r),(r=yi.get(d))&&Rh(t,r);var V=S=l.createElement("link");te(V),Ln(V,"link",t),V._p=new Promise(function(ee,me){V.onload=ee,V.onerror=me}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Ec(S,i,l)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(d,S)}}}function l1(t,i){xa.X(t,i);var r=Mr;if(r&&t){var l=re(r).hoistableScripts,f=Tr(t),d=l.get(f);d||(d=r.querySelector(jo(f)),d||(t=x({src:t,async:!0},i),(i=yi.get(f))&&Nh(t,i),d=r.createElement("script"),te(d),Ln(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function c1(t,i){xa.M(t,i);var r=Mr;if(r&&t){var l=re(r).hoistableScripts,f=Tr(t),d=l.get(f);d||(d=r.querySelector(jo(f)),d||(t=x({src:t,async:!0,type:"module"},i),(i=yi.get(f))&&Nh(t,i),d=r.createElement("script"),te(d),Ln(d,"link",t),r.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function ug(t,i,r,l){var f=(f=se.current)?Mc(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=Er(r.href),r=re(f).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=Er(r.href);var d=re(f).hoistableStyles,S=d.get(t);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=f.querySelector(ko(t)))&&!d._p&&(S.instance=d,S.state.loading=5),yi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},yi.set(t,r),d||u1(f,t,r,S.state))),i&&l===null)throw Error(a(528,""));return S}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Tr(r),r=re(f).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Er(t){return'href="'+Kt(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function fg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function u1(t,i,r,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Ln(i,"link",r),te(i),t.head.appendChild(i))}function Tr(t){return'[src="'+Kt(t)+'"]'}function jo(t){return"script[async]"+t}function hg(t,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Kt(r.href)+'"]');if(l)return i.instance=l,te(l),l;var f=x({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),te(l),Ln(l,"style",f),Ec(l,r.precedence,t),i.instance=l;case"stylesheet":f=Er(r.href);var d=t.querySelector(ko(f));if(d)return i.state.loading|=4,i.instance=d,te(d),d;l=fg(r),(f=yi.get(f))&&Rh(l,f),d=(t.ownerDocument||t).createElement("link"),te(d);var S=d;return S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),Ln(d,"link",l),i.state.loading|=4,Ec(d,r.precedence,t),i.instance=d;case"script":return d=Tr(r.src),(f=t.querySelector(jo(d)))?(i.instance=f,te(f),f):(l=r,(f=yi.get(d))&&(l=x({},r),Nh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),te(f),Ln(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ec(l,r.precedence,t));return i.instance}function Ec(t,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,S=0;S<l.length;S++){var C=l[S];if(C.dataset.precedence===i)d=C;else if(d!==f)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(t,i.firstChild))}function Rh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Nh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Tc=null;function dg(t,i,r){if(Tc===null){var l=new Map,f=Tc=new Map;f.set(r,l)}else f=Tc,l=f.get(r),l||(l=new Map,f.set(r,l));if(l.has(t))return l;for(l.set(t,null),r=r.getElementsByTagName(t),f=0;f<r.length;f++){var d=r[f];if(!(d[xs]||d[fn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(i)||"";S=t+S;var C=l.get(S);C?C.push(d):l.set(S,[d])}}return l}function pg(t,i,r){t=t.ownerDocument||t,t.head.insertBefore(r,i==="title"?t.querySelector("head > title"):null)}function f1(t,i,r){if(r===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function mg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function h1(t,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Er(l.href),d=i.querySelector(ko(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=Ac.bind(t),i.then(t,t)),r.state.loading|=4,r.instance=d,te(d);return}d=i.ownerDocument||i,l=fg(l),(f=yi.get(f))&&Rh(l,f),d=d.createElement("link"),te(d);var S=d;S._p=new Promise(function(C,V){S.onload=C,S.onerror=V}),Ln(d,"link",l),r.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=Ac.bind(t),i.addEventListener("load",r),i.addEventListener("error",r))}}var Dh=0;function d1(t,i){return t.stylesheets&&t.count===0&&Cc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var l=setTimeout(function(){if(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Dh===0&&(Dh=62500*qb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Dh?50:800)+i);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function Ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wc=null;function Cc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wc=new Map,i.forEach(p1,t),wc=null,Ac.call(t))}function p1(t,i){if(!(i.state.loading&4)){var r=wc.get(t);if(r)var l=r.get(null);else{r=new Map,wc.set(t,r);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var S=f[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),l=S)}l&&r.set(null,l)}f=i.instance,S=f.getAttribute("data-precedence"),d=r.get(S)||l,d===l&&r.set(null,f),r.set(S,f),this.count++,l=Ac.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Xo={$$typeof:w,Provider:null,Consumer:null,_currentValue:K,_currentValue2:K,_threadCount:0};function m1(t,i,r,l,f,d,S,C,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function xg(t,i,r,l,f,d,S,C,V,ee,me,_e){return t=new m1(t,i,r,S,V,ee,me,_e,C),i=1,d===!0&&(i|=24),d=ni(3,null,null,i),t.current=d,d.stateNode=t,i=uf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:r,cache:i},pf(d),t}function gg(t){return t?(t=nr,t):nr}function vg(t,i,r,l,f,d){f=gg(f),l.context===null?l.context=f:l.pendingContext=f,l=Ha(i),l.payload={element:r},d=d===void 0?null:d,d!==null&&(l.callback=d),r=Va(t,l,i),r!==null&&(Yn(r,t,i),Mo(r,t,i))}function _g(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<i?r:i}}function Uh(t,i){_g(t,i),(t=t.alternate)&&_g(t,i)}function yg(t){if(t.tag===13||t.tag===31){var i=ys(t,67108864);i!==null&&Yn(i,t,67108864),Uh(t,67108864)}}function bg(t){if(t.tag===13||t.tag===31){var i=oi();i=wi(i);var r=ys(t,i);r!==null&&Yn(r,t,i),Uh(t,i)}}var Rc=!0;function x1(t,i,r,l){var f=H.T;H.T=null;var d=W.p;try{W.p=2,Lh(t,i,r,l)}finally{W.p=d,H.T=f}}function g1(t,i,r,l){var f=H.T;H.T=null;var d=W.p;try{W.p=8,Lh(t,i,r,l)}finally{W.p=d,H.T=f}}function Lh(t,i,r,l){if(Rc){var f=Oh(l);if(f===null)_h(t,i,l,Nc,r),Mg(t,l);else if(_1(f,t,i,r,l))l.stopPropagation();else if(Mg(t,l),i&4&&-1<v1.indexOf(t)){for(;f!==null;){var d=R(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ae(d.pendingLanes);if(S!==0){var C=d;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var V=1<<31-Je(S);C.entanglements[1]|=V,S&=~V}Gi(d),(Bt&6)===0&&(hc=T()+500,Io(0))}}break;case 31:case 13:C=ys(d,2),C!==null&&Yn(C,d,2),pc(),Uh(d,2)}if(d=Oh(l),d===null&&_h(t,i,l,Nc,r),d===f)break;f=d}f!==null&&l.stopPropagation()}else _h(t,i,l,null,r)}}function Oh(t){return t=Pu(t),Ph(t)}var Nc=null;function Ph(t){if(Nc=null,t=Ua(t),t!==null){var i=c(t);if(i===null)t=null;else{var r=i.tag;if(r===13){if(t=u(i),t!==null)return t;t=null}else if(r===31){if(t=h(i),t!==null)return t;t=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Nc=t,null}function Sg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case de:return 2;case Me:return 8;case ue:case tt:return 32;case Fe:return 268435456;default:return 32}default:return 32}}var zh=!1,Ja=null,$a=null,es=null,Wo=new Map,qo=new Map,ts=[],v1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mg(t,i){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":es=null;break;case"pointerover":case"pointerout":Wo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(i.pointerId)}}function Yo(t,i,r,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=R(i),i!==null&&yg(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function _1(t,i,r,l,f){switch(i){case"focusin":return Ja=Yo(Ja,t,i,r,l,f),!0;case"dragenter":return $a=Yo($a,t,i,r,l,f),!0;case"mouseover":return es=Yo(es,t,i,r,l,f),!0;case"pointerover":var d=f.pointerId;return Wo.set(d,Yo(Wo.get(d)||null,t,i,r,l,f)),!0;case"gotpointercapture":return d=f.pointerId,qo.set(d,Yo(qo.get(d)||null,t,i,r,l,f)),!0}return!1}function Eg(t){var i=Ua(t.target);if(i!==null){var r=c(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){t.blockedOn=i,so(t.priority,function(){bg(r)});return}}else if(i===31){if(i=h(r),i!==null){t.blockedOn=i,so(t.priority,function(){bg(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var r=Oh(t.nativeEvent);if(r===null){r=t.nativeEvent;var l=new r.constructor(r.type,r);Ou=l,r.target.dispatchEvent(l),Ou=null}else return i=R(r),i!==null&&yg(i),t.blockedOn=r,!1;i.shift()}return!0}function Tg(t,i,r){Dc(t)&&r.delete(i)}function y1(){zh=!1,Ja!==null&&Dc(Ja)&&(Ja=null),$a!==null&&Dc($a)&&($a=null),es!==null&&Dc(es)&&(es=null),Wo.forEach(Tg),qo.forEach(Tg)}function Uc(t,i){t.blockedOn===i&&(t.blockedOn=null,zh||(zh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,y1)))}var Lc=null;function Ag(t){Lc!==t&&(Lc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Lc===t&&(Lc=null);for(var i=0;i<t.length;i+=3){var r=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Ph(l||r)===null)continue;break}var d=R(r);d!==null&&(t.splice(i,3),i-=3,Of(d,{pending:!0,data:f,method:r.method,action:l},l,f))}}))}function Ar(t){function i(V){return Uc(V,t)}Ja!==null&&Uc(Ja,t),$a!==null&&Uc($a,t),es!==null&&Uc(es,t),Wo.forEach(i),qo.forEach(i);for(var r=0;r<ts.length;r++){var l=ts[r];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ts.length&&(r=ts[0],r.blockedOn===null);)Eg(r),r.blockedOn===null&&ts.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var f=r[l],d=r[l+1],S=f[gn]||null;if(typeof d=="function")S||Ag(r);else if(S){var C=null;if(d&&d.hasAttribute("formAction")){if(f=d,S=d[gn]||null)C=S.formAction;else if(Ph(f)!==null)continue}else C=S.action;typeof C=="function"?r[l+1]=C:(r.splice(l,3),l-=3),Ag(r)}}}function wg(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Bh(t){this._internalRoot=t}Oc.prototype.render=Bh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=oi();vg(r,l,t,i,null,null)},Oc.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;vg(t.current,2,null,t,null,null),pc(),i[Qi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var i=ao();t={blockedOn:null,target:t,priority:i};for(var r=0;r<ts.length&&i!==0&&i<ts[r].priority;r++);ts.splice(r,0,t),r===0&&Eg(t)}};var Cg=e.version;if(Cg!=="19.2.0")throw Error(a(527,Cg,"19.2.0"));W.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var b1={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{Ee=Pc.inject(b1),Re=Pc}catch{}}return Ko.createRoot=function(t,i){if(!o(t))throw Error(a(299));var r=!1,l="",f=P0,d=z0,S=B0;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(S=i.onRecoverableError)),i=xg(t,1,!1,null,null,r,l,null,f,d,S,wg),t[Qi]=i.current,vh(t),new Bh(i)},Ko.hydrateRoot=function(t,i,r){if(!o(t))throw Error(a(299));var l=!1,f="",d=P0,S=z0,C=B0,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onUncaughtError!==void 0&&(d=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),i=xg(t,1,!0,i,r??null,l,f,V,d,S,C,wg),i.context=gg(null),r=i.current,l=oi(),l=wi(l),f=Ha(l),f.callback=null,Va(r,f,l),r=l,i.current.lanes=r,Pn(i,r),Gi(i),t[Qi]=i.current,vh(t),new Oc(i)},Ko.version="19.2.0",Ko}var Fg;function U1(){if(Fg)return Hh.exports;Fg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Hh.exports=D1(),Hh.exports}var L1=U1();const O1=a_(L1);/**
 * react-router v7.9.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ig="popstate";function P1(s={}){function e(o,c){let{pathname:u="/",search:h="",hash:m=""}=Ws(o.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Cd("",{pathname:u,search:h,hash:m},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function n(o,c){let u=o.document.querySelector("base"),h="";if(u&&u.getAttribute("href")){let m=o.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof c=="string"?c:fl(c))}function a(o,c){Ti(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return B1(e,n,a,s)}function sn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Ti(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z1(){return Math.random().toString(36).substring(2,10)}function Hg(s,e){return{usr:s.state,key:s.key,idx:e}}function Cd(s,e,n=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ws(e):e,state:n,key:e&&e.key||a||z1()}}function fl({pathname:s="/",search:e="",hash:n=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(s+=n.charAt(0)==="#"?n:"#"+n),s}function Ws(s){let e={};if(s){let n=s.indexOf("#");n>=0&&(e.hash=s.substring(n),s=s.substring(0,n));let a=s.indexOf("?");a>=0&&(e.search=s.substring(a),s=s.substring(0,a)),s&&(e.pathname=s)}return e}function B1(s,e,n,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,u=o.history,h="POP",m=null,p=g();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function g(){return(u.state||{idx:null}).idx}function x(){h="POP";let M=g(),y=M==null?null:M-p;p=M,m&&m({action:h,location:A.location,delta:y})}function v(M,y){h="PUSH";let B=Cd(A.location,M,y);n&&n(B,M),p=g()+1;let w=Hg(B,p),P=A.createHref(B);try{u.pushState(w,"",P)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;o.location.assign(P)}c&&m&&m({action:h,location:A.location,delta:1})}function b(M,y){h="REPLACE";let B=Cd(A.location,M,y);n&&n(B,M),p=g();let w=Hg(B,p),P=A.createHref(B);u.replaceState(w,"",P),c&&m&&m({action:h,location:A.location,delta:0})}function E(M){return F1(M)}let A={get action(){return h},get location(){return s(o,u)},listen(M){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Ig,x),m=M,()=>{o.removeEventListener(Ig,x),m=null}},createHref(M){return e(o,M)},createURL:E,encodeLocation(M){let y=E(M);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:b,go(M){return u.go(M)}};return A}function F1(s,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),sn(n,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:fl(s);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=n+a),new URL(a,n)}function s_(s,e,n="/"){return I1(s,e,n,!1)}function I1(s,e,n,a){let o=typeof e=="string"?Ws(e):e,c=Ra(o.pathname||"/",n);if(c==null)return null;let u=r_(s);H1(u);let h=null;for(let m=0;h==null&&m<u.length;++m){let p=Q1(c);h=Z1(u[m],p,a)}return h}function r_(s,e=[],n=[],a="",o=!1){let c=(u,h,m=o,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&m)return;sn(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let x=wa([a,g.relativePath]),v=n.concat(g);u.children&&u.children.length>0&&(sn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),r_(u.children,e,v,x,m)),!(u.path==null&&!u.index)&&e.push({path:x,score:q1(x,u.index),routesMeta:v})};return s.forEach((u,h)=>{var m;if(u.path===""||!((m=u.path)!=null&&m.includes("?")))c(u,h);else for(let p of o_(u.path))c(u,h,!0,p)}),e}function o_(s){let e=s.split("/");if(e.length===0)return[];let[n,...a]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let u=o_(a.join("/")),h=[];return h.push(...u.map(m=>m===""?c:[c,m].join("/"))),o&&h.push(...u),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function H1(s){s.sort((e,n)=>e.score!==n.score?n.score-e.score:Y1(e.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var V1=/^:[\w-]+$/,G1=3,k1=2,j1=1,X1=10,W1=-2,Vg=s=>s==="*";function q1(s,e){let n=s.split("/"),a=n.length;return n.some(Vg)&&(a+=W1),e&&(a+=k1),n.filter(o=>!Vg(o)).reduce((o,c)=>o+(V1.test(c)?G1:c===""?j1:X1),a)}function Y1(s,e){return s.length===e.length&&s.slice(0,-1).every((a,o)=>a===e[o])?s[s.length-1]-e[e.length-1]:0}function Z1(s,e,n=!1){let{routesMeta:a}=s,o={},c="/",u=[];for(let h=0;h<a.length;++h){let m=a[h],p=h===a.length-1,g=c==="/"?e:e.slice(c.length)||"/",x=_u({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),v=m.route;if(!x&&p&&n&&!a[a.length-1].route.index&&(x=_u({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:wa([c,x.pathname]),pathnameBase:nS(wa([c,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(c=wa([c,x.pathnameBase]))}return u}function _u(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[n,a]=K1(s.path,s.caseSensitive,s.end),o=e.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((p,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=h[v]||"";u=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const b=h[v];return x&&!b?p[g]=void 0:p[g]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:s}}function K1(s,e=!1,n=!0){Ti(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,m)=>(a.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function Q1(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ti(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function Ra(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,a=s.charAt(n);return a&&a!=="/"?null:s.slice(n)||"/"}var J1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$1=s=>J1.test(s);function eS(s,e="/"){let{pathname:n,search:a="",hash:o=""}=typeof s=="string"?Ws(s):s,c;if(n)if($1(n))c=n;else{if(n.includes("//")){let u=n;n=n.replace(/\/\/+/g,"/"),Ti(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${n}`)}n.startsWith("/")?c=Gg(n.substring(1),"/"):c=Gg(n,e)}else c=e;return{pathname:c,search:iS(a),hash:aS(o)}}function Gg(s,e){let n=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function jh(s,e,n,a){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tS(s){return s.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function l_(s){let e=tS(s);return e.map((n,a)=>a===e.length-1?n.pathname:n.pathnameBase)}function c_(s,e,n,a=!1){let o;typeof s=="string"?o=Ws(s):(o={...s},sn(!o.pathname||!o.pathname.includes("?"),jh("?","pathname","search",o)),sn(!o.pathname||!o.pathname.includes("#"),jh("#","pathname","hash",o)),sn(!o.search||!o.search.includes("#"),jh("#","search","hash",o)));let c=s===""||o.pathname==="",u=c?"/":o.pathname,h;if(u==null)h=n;else{let x=e.length-1;if(!a&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),x-=1;o.pathname=v.join("/")}h=x>=0?e[x]:"/"}let m=eS(o,h),p=u&&u!=="/"&&u.endsWith("/"),g=(c||u===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var wa=s=>s.join("/").replace(/\/\/+/g,"/"),nS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),iS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,aS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function sS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var u_=["POST","PUT","PATCH","DELETE"];new Set(u_);var rS=["GET",...u_];new Set(rS);var Jr=pe.createContext(null);Jr.displayName="DataRouter";var Eu=pe.createContext(null);Eu.displayName="DataRouterState";pe.createContext(!1);var f_=pe.createContext({isTransitioning:!1});f_.displayName="ViewTransition";var oS=pe.createContext(new Map);oS.displayName="Fetchers";var lS=pe.createContext(null);lS.displayName="Await";var Zi=pe.createContext(null);Zi.displayName="Navigation";var yl=pe.createContext(null);yl.displayName="Location";var Na=pe.createContext({outlet:null,matches:[],isDataRoute:!1});Na.displayName="Route";var wp=pe.createContext(null);wp.displayName="RouteError";function cS(s,{relative:e}={}){sn(bl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=pe.useContext(Zi),{hash:o,pathname:c,search:u}=Sl(s,{relative:e}),h=c;return n!=="/"&&(h=c==="/"?n:wa([n,c])),a.createHref({pathname:h,search:u,hash:o})}function bl(){return pe.useContext(yl)!=null}function Da(){return sn(bl(),"useLocation() may be used only in the context of a <Router> component."),pe.useContext(yl).location}var h_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function d_(s){pe.useContext(Zi).static||pe.useLayoutEffect(s)}function uS(){let{isDataRoute:s}=pe.useContext(Na);return s?MS():fS()}function fS(){sn(bl(),"useNavigate() may be used only in the context of a <Router> component.");let s=pe.useContext(Jr),{basename:e,navigator:n}=pe.useContext(Zi),{matches:a}=pe.useContext(Na),{pathname:o}=Da(),c=JSON.stringify(l_(a)),u=pe.useRef(!1);return d_(()=>{u.current=!0}),pe.useCallback((m,p={})=>{if(Ti(u.current,h_),!u.current)return;if(typeof m=="number"){n.go(m);return}let g=c_(m,JSON.parse(c),o,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:wa([e,g.pathname])),(p.replace?n.replace:n.push)(g,p.state,p)},[e,n,c,o,s])}pe.createContext(null);function Sl(s,{relative:e}={}){let{matches:n}=pe.useContext(Na),{pathname:a}=Da(),o=JSON.stringify(l_(n));return pe.useMemo(()=>c_(s,JSON.parse(o),a,e==="path"),[s,o,a,e])}function hS(s,e){return p_(s,e)}function p_(s,e,n,a,o){var B;sn(bl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=pe.useContext(Zi),{matches:u}=pe.useContext(Na),h=u[u.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",x=h&&h.route;{let w=x&&x.path||"";m_(p,!x||w.endsWith("*")||w.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${w}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${w}"> to <Route path="${w==="/"?"*":`${w}/*`}">.`)}let v=Da(),b;if(e){let w=typeof e=="string"?Ws(e):e;sn(g==="/"||((B=w.pathname)==null?void 0:B.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${w.pathname}" was given in the \`location\` prop.`),b=w}else b=v;let E=b.pathname||"/",A=E;if(g!=="/"){let w=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(w.length).join("/")}let M=s_(s,{pathname:A});Ti(x||M!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Ti(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=gS(M&&M.map(w=>Object.assign({},w,{params:Object.assign({},m,w.params),pathname:wa([g,c.encodeLocation?c.encodeLocation(w.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?g:wa([g,c.encodeLocation?c.encodeLocation(w.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:w.pathnameBase])})),u,n,a,o);return e&&y?pe.createElement(yl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},y):y}function dS(){let s=SS(),e=sS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),n=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",s),u=pe.createElement(pe.Fragment,null,pe.createElement("p",null,"💿 Hey developer 👋"),pe.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",pe.createElement("code",{style:c},"ErrorBoundary")," or"," ",pe.createElement("code",{style:c},"errorElement")," prop on your route.")),pe.createElement(pe.Fragment,null,pe.createElement("h2",null,"Unexpected Application Error!"),pe.createElement("h3",{style:{fontStyle:"italic"}},e),n?pe.createElement("pre",{style:o},n):null,u)}var pS=pe.createElement(dS,null),mS=class extends pe.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.onError?this.props.onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?pe.createElement(Na.Provider,{value:this.props.routeContext},pe.createElement(wp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xS({routeContext:s,match:e,children:n}){let a=pe.useContext(Jr);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),pe.createElement(Na.Provider,{value:s},n)}function gS(s,e=[],n=null,a=null,o=null){if(s==null){if(!n)return null;if(n.errors)s=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)s=n.matches;else return null}let c=s,u=n==null?void 0:n.errors;if(u!=null){let g=c.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);sn(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,m=-1;if(n)for(let g=0;g<c.length;g++){let x=c[g];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(m=g),x.route.id){let{loaderData:v,errors:b}=n,E=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!b||b[x.route.id]===void 0);if(x.route.lazy||E){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=n&&a?(g,x)=>{var v,b;a(g,{location:n.location,params:((b=(v=n.matches)==null?void 0:v[0])==null?void 0:b.params)??{},errorInfo:x})}:void 0;return c.reduceRight((g,x,v)=>{let b,E=!1,A=null,M=null;n&&(b=u&&x.route.id?u[x.route.id]:void 0,A=x.route.errorElement||pS,h&&(m<0&&v===0?(m_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,M=null):m===v&&(E=!0,M=x.route.hydrateFallbackElement||null)));let y=e.concat(c.slice(0,v+1)),B=()=>{let w;return b?w=A:E?w=M:x.route.Component?w=pe.createElement(x.route.Component,null):x.route.element?w=x.route.element:w=g,pe.createElement(xS,{match:x,routeContext:{outlet:g,matches:y,isDataRoute:n!=null},children:w})};return n&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?pe.createElement(mS,{location:n.location,revalidation:n.revalidation,component:A,error:b,children:B(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:p}):B()},null)}function Cp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vS(s){let e=pe.useContext(Jr);return sn(e,Cp(s)),e}function _S(s){let e=pe.useContext(Eu);return sn(e,Cp(s)),e}function yS(s){let e=pe.useContext(Na);return sn(e,Cp(s)),e}function Rp(s){let e=yS(s),n=e.matches[e.matches.length-1];return sn(n.route.id,`${s} can only be used on routes that contain a unique "id"`),n.route.id}function bS(){return Rp("useRouteId")}function SS(){var a;let s=pe.useContext(wp),e=_S("useRouteError"),n=Rp("useRouteError");return s!==void 0?s:(a=e.errors)==null?void 0:a[n]}function MS(){let{router:s}=vS("useNavigate"),e=Rp("useNavigate"),n=pe.useRef(!1);return d_(()=>{n.current=!0}),pe.useCallback(async(o,c={})=>{Ti(n.current,h_),n.current&&(typeof o=="number"?s.navigate(o):await s.navigate(o,{fromRouteId:e,...c}))},[s,e])}var kg={};function m_(s,e,n){!e&&!kg[s]&&(kg[s]=!0,Ti(!1,n))}pe.memo(ES);function ES({routes:s,future:e,state:n,unstable_onError:a}){return p_(s,void 0,n,a,e)}function cs(s){sn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function TS({basename:s="/",children:e=null,location:n,navigationType:a="POP",navigator:o,static:c=!1}){sn(!bl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=s.replace(/^\/*/,"/"),h=pe.useMemo(()=>({basename:u,navigator:o,static:c,future:{}}),[u,o,c]);typeof n=="string"&&(n=Ws(n));let{pathname:m="/",search:p="",hash:g="",state:x=null,key:v="default"}=n,b=pe.useMemo(()=>{let E=Ra(m,u);return E==null?null:{location:{pathname:E,search:p,hash:g,state:x,key:v},navigationType:a}},[u,m,p,g,x,v,a]);return Ti(b!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:pe.createElement(Zi.Provider,{value:h},pe.createElement(yl.Provider,{children:e,value:b}))}function AS({children:s,location:e}){return hS(Rd(s),e)}function Rd(s,e=[]){let n=[];return pe.Children.forEach(s,(a,o)=>{if(!pe.isValidElement(a))return;let c=[...e,o];if(a.type===pe.Fragment){n.push.apply(n,Rd(a.props.children,c));return}sn(a.type===cs,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),sn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=Rd(a.props.children,c)),n.push(u)}),n}var cu="get",uu="application/x-www-form-urlencoded";function Tu(s){return s!=null&&typeof s.tagName=="string"}function wS(s){return Tu(s)&&s.tagName.toLowerCase()==="button"}function CS(s){return Tu(s)&&s.tagName.toLowerCase()==="form"}function RS(s){return Tu(s)&&s.tagName.toLowerCase()==="input"}function NS(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function DS(s,e){return s.button===0&&(!e||e==="_self")&&!NS(s)}var zc=null;function US(){if(zc===null)try{new FormData(document.createElement("form"),0),zc=!1}catch{zc=!0}return zc}var LS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xh(s){return s!=null&&!LS.has(s)?(Ti(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uu}"`),null):s}function OS(s,e){let n,a,o,c,u;if(CS(s)){let h=s.getAttribute("action");a=h?Ra(h,e):null,n=s.getAttribute("method")||cu,o=Xh(s.getAttribute("enctype"))||uu,c=new FormData(s)}else if(wS(s)||RS(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(a=m?Ra(m,e):null,n=s.getAttribute("formmethod")||h.getAttribute("method")||cu,o=Xh(s.getAttribute("formenctype"))||Xh(h.getAttribute("enctype"))||uu,c=new FormData(h,s),!US()){let{name:p,type:g,value:x}=s;if(g==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,x)}}else{if(Tu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=cu,a=null,o=uu,u=s}return c&&o==="text/plain"&&(u=c,c=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:c,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Np(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function PS(s,e,n){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a.pathname==="/"?a.pathname=`_root.${n}`:e&&Ra(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${n}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${n}`,a}async function zS(s,e){if(s.id in e)return e[s.id];try{let n=await import(s.module);return e[s.id]=n,n}catch(n){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BS(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function FS(s,e,n){let a=await Promise.all(s.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await zS(c,n);return u.links?u.links():[]}return[]}));return GS(a.flat(1).filter(BS).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function jg(s,e,n,a,o,c){let u=(m,p)=>n[p]?m.route.id!==n[p].route.id:!0,h=(m,p)=>{var g;return n[p].pathname!==m.pathname||((g=n[p].route.path)==null?void 0:g.endsWith("*"))&&n[p].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,p)=>u(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{var x;let g=a.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(u(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=n[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function IS(s,e,{includeHydrateFallback:n}={}){return HS(s.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function HS(s){return[...new Set(s)]}function VS(s){let e={},n=Object.keys(s).sort();for(let a of n)e[a]=s[a];return e}function GS(s,e){let n=new Set;return new Set(e),s.reduce((a,o)=>{let c=JSON.stringify(VS(o));return n.has(c)||(n.add(c),a.push({key:c,link:o})),a},[])}function x_(){let s=pe.useContext(Jr);return Np(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function kS(){let s=pe.useContext(Eu);return Np(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Dp=pe.createContext(void 0);Dp.displayName="FrameworkContext";function g_(){let s=pe.useContext(Dp);return Np(s,"You must render this element inside a <HydratedRouter> element"),s}function jS(s,e){let n=pe.useContext(Dp),[a,o]=pe.useState(!1),[c,u]=pe.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:x}=e,v=pe.useRef(null);pe.useEffect(()=>{if(s==="render"&&u(!0),s==="viewport"){let A=y=>{y.forEach(B=>{u(B.isIntersecting)})},M=new IntersectionObserver(A,{threshold:.5});return v.current&&M.observe(v.current),()=>{M.disconnect()}}},[s]),pe.useEffect(()=>{if(a){let A=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(A)}}},[a]);let b=()=>{o(!0)},E=()=>{o(!1),u(!1)};return n?s!=="intent"?[c,v,{}]:[c,v,{onFocus:Qo(h,b),onBlur:Qo(m,E),onMouseEnter:Qo(p,b),onMouseLeave:Qo(g,E),onTouchStart:Qo(x,b)}]:[!1,v,{}]}function Qo(s,e){return n=>{s&&s(n),n.defaultPrevented||e(n)}}function XS({page:s,...e}){let{router:n}=x_(),a=pe.useMemo(()=>s_(n.routes,s,n.basename),[n.routes,s,n.basename]);return a?pe.createElement(qS,{page:s,matches:a,...e}):null}function WS(s){let{manifest:e,routeModules:n}=g_(),[a,o]=pe.useState([]);return pe.useEffect(()=>{let c=!1;return FS(s,e,n).then(u=>{c||o(u)}),()=>{c=!0}},[s,e,n]),a}function qS({page:s,matches:e,...n}){let a=Da(),{manifest:o,routeModules:c}=g_(),{basename:u}=x_(),{loaderData:h,matches:m}=kS(),p=pe.useMemo(()=>jg(s,e,m,o,a,"data"),[s,e,m,o,a]),g=pe.useMemo(()=>jg(s,e,m,o,a,"assets"),[s,e,m,o,a]),x=pe.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let E=new Set,A=!1;if(e.forEach(y=>{var w;let B=o.routes[y.route.id];!B||!B.hasLoader||(!p.some(P=>P.route.id===y.route.id)&&y.route.id in h&&((w=c[y.route.id])!=null&&w.shouldRevalidate)||B.hasClientLoader?A=!0:E.add(y.route.id))}),E.size===0)return[];let M=PS(s,u,"data");return A&&E.size>0&&M.searchParams.set("_routes",e.filter(y=>E.has(y.route.id)).map(y=>y.route.id).join(",")),[M.pathname+M.search]},[u,h,a,o,p,e,s,c]),v=pe.useMemo(()=>IS(g,o),[g,o]),b=WS(g);return pe.createElement(pe.Fragment,null,x.map(E=>pe.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...n})),v.map(E=>pe.createElement("link",{key:E,rel:"modulepreload",href:E,...n})),b.map(({key:E,link:A})=>pe.createElement("link",{key:E,nonce:n.nonce,...A})))}function YS(...s){return e=>{s.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var v_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{v_&&(window.__reactRouterVersion="7.9.6")}catch{}function ZS({basename:s,children:e,window:n}){let a=pe.useRef();a.current==null&&(a.current=P1({window:n,v5Compat:!0}));let o=a.current,[c,u]=pe.useState({action:o.action,location:o.location}),h=pe.useCallback(m=>{pe.startTransition(()=>u(m))},[u]);return pe.useLayoutEffect(()=>o.listen(h),[o,h]),pe.createElement(TS,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:o})}var __=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bn=pe.forwardRef(function({onClick:e,discover:n="render",prefetch:a="none",relative:o,reloadDocument:c,replace:u,state:h,target:m,to:p,preventScrollReset:g,viewTransition:x,...v},b){let{basename:E}=pe.useContext(Zi),A=typeof p=="string"&&__.test(p),M,y=!1;if(typeof p=="string"&&A&&(M=p,v_))try{let D=new URL(window.location.href),N=p.startsWith("//")?new URL(D.protocol+p):new URL(p),G=Ra(N.pathname,E);N.origin===D.origin&&G!=null?p=G+N.search+N.hash:y=!0}catch{Ti(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=cS(p,{relative:o}),[w,P,I]=jS(a,v),O=$S(p,{replace:u,state:h,target:m,preventScrollReset:g,relative:o,viewTransition:x});function F(D){e&&e(D),D.defaultPrevented||O(D)}let q=pe.createElement("a",{...v,...I,href:M||B,onClick:y||c?e:F,ref:YS(b,P),target:m,"data-discover":!A&&n==="render"?"true":void 0});return w&&!A?pe.createElement(pe.Fragment,null,q,pe.createElement(XS,{page:B})):q});bn.displayName="Link";var KS=pe.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:a="",end:o=!1,style:c,to:u,viewTransition:h,children:m,...p},g){let x=Sl(u,{relative:p.relative}),v=Da(),b=pe.useContext(Eu),{navigator:E,basename:A}=pe.useContext(Zi),M=b!=null&&aM(x)&&h===!0,y=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,B=v.pathname,w=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;n||(B=B.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&A&&(w=Ra(w,A)||w);const P=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let I=B===y||!o&&B.startsWith(y)&&B.charAt(P)==="/",O=w!=null&&(w===y||!o&&w.startsWith(y)&&w.charAt(y.length)==="/"),F={isActive:I,isPending:O,isTransitioning:M},q=I?e:void 0,D;typeof a=="function"?D=a(F):D=[a,I?"active":null,O?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(F):c;return pe.createElement(bn,{...p,"aria-current":q,className:D,ref:g,style:N,to:u,viewTransition:h},typeof m=="function"?m(F):m)});KS.displayName="NavLink";var QS=pe.forwardRef(({discover:s="render",fetcherKey:e,navigate:n,reloadDocument:a,replace:o,state:c,method:u=cu,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:x,...v},b)=>{let E=nM(),A=iM(h,{relative:p}),M=u.toLowerCase()==="get"?"get":"post",y=typeof h=="string"&&__.test(h),B=w=>{if(m&&m(w),w.defaultPrevented)return;w.preventDefault();let P=w.nativeEvent.submitter,I=(P==null?void 0:P.getAttribute("formmethod"))||u;E(P||w.currentTarget,{fetcherKey:e,method:I,navigate:n,replace:o,state:c,relative:p,preventScrollReset:g,viewTransition:x})};return pe.createElement("form",{ref:b,method:M,action:A,onSubmit:a?m:B,...v,"data-discover":!y&&s==="render"?"true":void 0})});QS.displayName="Form";function JS(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function y_(s){let e=pe.useContext(Jr);return sn(e,JS(s)),e}function $S(s,{target:e,replace:n,state:a,preventScrollReset:o,relative:c,viewTransition:u}={}){let h=uS(),m=Da(),p=Sl(s,{relative:c});return pe.useCallback(g=>{if(DS(g,e)){g.preventDefault();let x=n!==void 0?n:fl(m)===fl(p);h(s,{replace:x,state:a,preventScrollReset:o,relative:c,viewTransition:u})}},[m,h,p,n,a,e,s,o,c,u])}var eM=0,tM=()=>`__${String(++eM)}__`;function nM(){let{router:s}=y_("useSubmit"),{basename:e}=pe.useContext(Zi),n=bS();return pe.useCallback(async(a,o={})=>{let{action:c,method:u,encType:h,formData:m,body:p}=OS(a,e);if(o.navigate===!1){let g=o.fetcherKey||tM();await s.fetch(g,n,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||h,flushSync:o.flushSync})}else await s.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[s,e,n])}function iM(s,{relative:e}={}){let{basename:n}=pe.useContext(Zi),a=pe.useContext(Na);sn(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...Sl(s||".",{relative:e})},u=Da();if(s==null){c.search=u.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(x=>x).forEach(x=>h.append("index",x));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(c.pathname=c.pathname==="/"?n:wa([n,c.pathname])),fl(c)}function aM(s,{relative:e}={}){let n=pe.useContext(f_);sn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=y_("useViewTransitionState"),o=Sl(s,{relative:e});if(!n.isTransitioning)return!1;let c=Ra(n.currentLocation.pathname,a)||n.currentLocation.pathname,u=Ra(n.nextLocation.pathname,a)||n.nextLocation.pathname;return _u(o.pathname,u)!=null||_u(o.pathname,c)!=null}/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rM=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,a)=>a?a.toUpperCase():n.toLowerCase()),Xg=s=>{const e=rM(s);return e.charAt(0).toUpperCase()+e.slice(1)},b_=(...s)=>s.filter((e,n,a)=>!!e&&e.trim()!==""&&a.indexOf(e)===n).join(" ").trim(),oM=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=pe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:o="",children:c,iconNode:u,...h},m)=>pe.createElement("svg",{ref:m,...lM,width:e,height:e,stroke:s,strokeWidth:a?Number(n)*24/Number(e):n,className:b_("lucide",o),...!c&&!oM(h)&&{"aria-hidden":"true"},...h},[...u.map(([p,g])=>pe.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=(s,e)=>{const n=pe.forwardRef(({className:a,...o},c)=>pe.createElement(cM,{ref:c,iconNode:e,className:b_(`lucide-${sM(Xg(s))}`,`lucide-${s}`,a),...o}));return n.displayName=Xg(s),n};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],fM=nn("arrow-right",uM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],S_=nn("bot",hM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],pM=nn("briefcase",dM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],xM=nn("calculator",mM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Nd=nn("check",gM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],_M=nn("chevron-down",vM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Wg=nn("circle-play",yM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],SM=nn("clock",bM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],EM=nn("cloud-upload",MM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],AM=nn("cpu",TM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],CM=nn("database",wM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],NM=nn("file-text",RM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],UM=nn("github",DM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],OM=nn("instagram",LM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],M_=nn("linkedin",PM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],E_=nn("mail",zM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],T_=nn("map-pin",BM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],IM=nn("menu",FM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],VM=nn("message-square",HM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],kM=nn("phone",GM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],A_=nn("send",jM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],w_=nn("twitter",XM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Dd=nn("x",WM);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],C_=nn("zap",qM),Pi=({variant:s="primary",size:e="md",children:n,className:a="",...o})=>{const c="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed",u={primary:"bg-gradient-to-l from-primary to-indigo-600 hover:from-indigo-600 hover:to-primary text-white shadow-lg shadow-primary/25",secondary:"bg-surface hover:bg-slate-800 text-white border border-slate-700",outline:"border-2 border-primary text-primary hover:bg-primary/10"},h={sm:"px-3 py-1.5 text-sm",md:"px-6 py-2.5 text-base",lg:"px-8 py-3.5 text-lg"};return _.jsx("button",{className:`${c} ${u[s]} ${h[e]} ${a}`,...o,children:n})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Up="181",kr={ROTATE:0,DOLLY:1,PAN:2},Vr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},YM=0,qg=1,ZM=2,R_=1,KM=2,Ma=3,ps=0,Jn=1,Ea=2,Xi=0,Gs=1,Ud=2,Yg=3,Zg=4,QM=5,Is=100,JM=101,$M=102,e3=103,t3=104,n3=200,i3=201,a3=202,s3=203,Ld=204,Od=205,r3=206,o3=207,l3=208,c3=209,u3=210,f3=211,h3=212,d3=213,p3=214,Pd=0,zd=1,Bd=2,Xr=3,Fd=4,Id=5,Hd=6,Vd=7,N_=0,m3=1,x3=2,ds=0,g3=1,D_=2,v3=3,_3=4,y3=5,b3=6,S3=7,U_=300,Wr=301,qr=302,Gd=303,kd=304,Au=306,jd=1e3,Ta=1001,Xd=1002,hi=1003,M3=1004,Bc=1005,Qn=1006,Wh=1007,Vs=1008,qi=1009,L_=1010,O_=1011,hl=1012,Lp=1013,ks=1014,Aa=1015,Wi=1016,Op=1017,Pp=1018,dl=1020,P_=35902,z_=35899,B_=1021,F_=1022,Mi=1023,pl=1026,ml=1027,I_=1028,zp=1029,Bp=1030,Fp=1031,Ip=1033,fu=33776,hu=33777,du=33778,pu=33779,Wd=35840,qd=35841,Yd=35842,Zd=35843,Kd=36196,Qd=37492,Jd=37496,$d=37808,ep=37809,tp=37810,np=37811,ip=37812,ap=37813,sp=37814,rp=37815,op=37816,lp=37817,cp=37818,up=37819,fp=37820,hp=37821,dp=36492,pp=36494,mp=36495,xp=36283,gp=36284,vp=36285,_p=36286,E3=3200,T3=3201,H_=0,A3=1,fs="",Si="srgb",Yr="srgb-linear",yu="linear",Xt="srgb",wr=7680,Kg=519,w3=512,C3=513,R3=514,V_=515,N3=516,D3=517,U3=518,L3=519,Qg=35044,Jg="300 es",ji=2e3,bu=2001;function G_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Su(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function O3(){const s=Su("canvas");return s.style.display="block",s}const $g={};function ev(...s){const e="THREE."+s.shift();console.log(e,...s)}function pt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function ln(...s){const e="THREE."+s.shift();console.error(e,...s)}function xl(...s){const e=s.join(" ");e in $g||($g[e]=!0,pt(...s))}function P3(s,e,n){return new Promise(function(a,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mu=Math.PI/180,yp=180/Math.PI;function $r(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]).toLowerCase()}function St(s,e,n){return Math.max(e,Math.min(n,s))}function z3(s,e){return(s%e+e)%e}function qh(s,e,n){return(1-n)*s+n*e}function Jo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const B3={DEG2RAD:mu};class Ce{constructor(e=0,n=0){Ce.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class js{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,h){let m=a[o+0],p=a[o+1],g=a[o+2],x=a[o+3],v=c[u+0],b=c[u+1],E=c[u+2],A=c[u+3];if(h<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(h>=1){e[n+0]=v,e[n+1]=b,e[n+2]=E,e[n+3]=A;return}if(x!==A||m!==v||p!==b||g!==E){let M=m*v+p*b+g*E+x*A;M<0&&(v=-v,b=-b,E=-E,A=-A,M=-M);let y=1-h;if(M<.9995){const B=Math.acos(M),w=Math.sin(B);y=Math.sin(y*B)/w,h=Math.sin(h*B)/w,m=m*y+v*h,p=p*y+b*h,g=g*y+E*h,x=x*y+A*h}else{m=m*y+v*h,p=p*y+b*h,g=g*y+E*h,x=x*y+A*h;const B=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=B,p*=B,g*=B,x*=B}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=x}static multiplyQuaternionsFlat(e,n,a,o,c,u){const h=a[o],m=a[o+1],p=a[o+2],g=a[o+3],x=c[u],v=c[u+1],b=c[u+2],E=c[u+3];return e[n]=h*E+g*x+m*b-p*v,e[n+1]=m*E+g*v+p*x-h*b,e[n+2]=p*E+g*b+h*v-m*x,e[n+3]=g*E-h*x-m*v-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,h=Math.cos,m=Math.sin,p=h(a/2),g=h(o/2),x=h(c/2),v=m(a/2),b=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=v*g*x+p*b*E,this._y=p*b*x-v*g*E,this._z=p*g*E+v*b*x,this._w=p*g*x-v*b*E;break;case"YXZ":this._x=v*g*x+p*b*E,this._y=p*b*x-v*g*E,this._z=p*g*E-v*b*x,this._w=p*g*x+v*b*E;break;case"ZXY":this._x=v*g*x-p*b*E,this._y=p*b*x+v*g*E,this._z=p*g*E+v*b*x,this._w=p*g*x-v*b*E;break;case"ZYX":this._x=v*g*x-p*b*E,this._y=p*b*x+v*g*E,this._z=p*g*E-v*b*x,this._w=p*g*x+v*b*E;break;case"YZX":this._x=v*g*x+p*b*E,this._y=p*b*x+v*g*E,this._z=p*g*E-v*b*x,this._w=p*g*x-v*b*E;break;case"XZY":this._x=v*g*x-p*b*E,this._y=p*b*x-v*g*E,this._z=p*g*E+v*b*x,this._w=p*g*x+v*b*E;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],h=n[5],m=n[9],p=n[2],g=n[6],x=n[10],v=a+h+x;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(g-m)*b,this._y=(c-p)*b,this._z=(u-o)*b}else if(a>h&&a>x){const b=2*Math.sqrt(1+a-h-x);this._w=(g-m)/b,this._x=.25*b,this._y=(o+u)/b,this._z=(c+p)/b}else if(h>x){const b=2*Math.sqrt(1+h-a-x);this._w=(c-p)/b,this._x=(o+u)/b,this._y=.25*b,this._z=(m+g)/b}else{const b=2*Math.sqrt(1+x-a-h);this._w=(u-o)/b,this._x=(c+p)/b,this._y=(m+g)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,h=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*h+o*p-c*m,this._y=o*g+u*m+c*h-a*p,this._z=c*g+u*p+a*m-o*h,this._w=u*g-a*h-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,h=this.dot(e);h<0&&(a=-a,o=-o,c=-c,u=-u,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,a=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,h=e.z,m=e.w,p=2*(u*o-h*a),g=2*(h*n-c*o),x=2*(c*a-u*n);return this.x=n+m*p+u*x-h*g,this.y=a+m*g+h*p-c*x,this.z=o+m*x+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*u-a*m,this.z=a*h-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Yh.copy(this).projectOnVector(e),this.sub(Yh)}reflect(e){return this.sub(Yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yh=new X,tv=new js;class _t{constructor(e,n,a,o,c,u,h,m,p){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p)}set(e,n,a,o,c,u,h,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[3],m=a[6],p=a[1],g=a[4],x=a[7],v=a[2],b=a[5],E=a[8],A=o[0],M=o[3],y=o[6],B=o[1],w=o[4],P=o[7],I=o[2],O=o[5],F=o[8];return c[0]=u*A+h*B+m*I,c[3]=u*M+h*w+m*O,c[6]=u*y+h*P+m*F,c[1]=p*A+g*B+x*I,c[4]=p*M+g*w+x*O,c[7]=p*y+g*P+x*F,c[2]=v*A+b*B+E*I,c[5]=v*M+b*w+E*O,c[8]=v*y+b*P+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*h*p-a*c*g+a*h*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*u-h*p,v=h*m-g*c,b=p*c-u*m,E=n*x+a*v+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(o*p-g*a)*A,e[2]=(h*a-o*u)*A,e[3]=v*A,e[4]=(g*n-o*m)*A,e[5]=(o*c-h*n)*A,e[6]=b*A,e[7]=(a*m-p*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,h){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*h)+u+e,-o*p,o*m,-o*(-p*u+m*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(Zh.makeScale(e,n)),this}rotate(e){return this.premultiply(Zh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Zh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zh=new _t,nv=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iv=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F3(){const s={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Xt&&(o.r=Ca(o.r),o.g=Ca(o.g),o.b=Ca(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Xt&&(o.r=jr(o.r),o.g=jr(o.g),o.b=jr(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===fs?yu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Yr]:{primaries:e,whitePoint:a,transfer:yu,toXYZ:nv,fromXYZ:iv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:a,transfer:Xt,toXYZ:nv,fromXYZ:iv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),s}const Pt=F3();function Ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function jr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cr;class I3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Cr===void 0&&(Cr=Su("canvas")),Cr.width=e.width,Cr.height=e.height;const o=Cr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=Cr}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Su("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ca(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ca(n[a]/255)*255):n[a]=Ca(n[a]);return{data:n,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H3=0;class Hp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H3++}),this.uuid=$r(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?c.push(Kh(o[u].image)):c.push(Kh(o[u]))}else c=Kh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Kh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?I3.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let V3=0;const Qh=new X;class Gn extends qs{constructor(e=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,a=Ta,o=Ta,c=Qn,u=Vs,h=Mi,m=qi,p=Gn.DEFAULT_ANISOTROPY,g=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V3++}),this.uuid=$r(),this.name="",this.source=new Hp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qh).x}get height(){return this.source.getSize(Qh).y}get depth(){return this.source.getSize(Qh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){pt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jd:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jd:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=U_;Gn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,n=0,a=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],x=m[8],v=m[1],b=m[5],E=m[9],A=m[2],M=m[6],y=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+b+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(p+1)/2,P=(b+1)/2,I=(y+1)/2,O=(g+v)/4,F=(x+A)/4,q=(E+M)/4;return w>P&&w>I?w<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(w),o=O/a,c=F/a):P>I?P<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),a=O/o,c=q/o):I<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),a=F/c,o=q/c),this.set(a,o,c,n),this}let B=Math.sqrt((M-E)*(M-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(B)<.001&&(B=1),this.x=(M-E)/B,this.y=(x-A)/B,this.z=(v-g)/B,this.w=Math.acos((p+b+y-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=St(this.x,e.x,n.x),this.y=St(this.y,e.y,n.y),this.z=St(this.z,e.z,n.z),this.w=St(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=St(this.x,e,n),this.y=St(this.y,e,n),this.z=St(this.z,e,n),this.w=St(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G3 extends qs{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new qt(0,0,e,n),this.scissorTest=!1,this.viewport=new qt(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new Gn(o);this.textures=[];const u=a.count;for(let h=0;h<u;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Hp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends G3{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class k_ extends Gn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k3 extends Gn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=c.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Di):Di.fromBufferAttribute(c,u),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Fc.copy(a.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Ic.subVectors(this.max,$o),Rr.subVectors(e.a,$o),Nr.subVectors(e.b,$o),Dr.subVectors(e.c,$o),is.subVectors(Nr,Rr),as.subVectors(Dr,Nr),Ls.subVectors(Rr,Dr);let n=[0,-is.z,is.y,0,-as.z,as.y,0,-Ls.z,Ls.y,is.z,0,-is.x,as.z,0,-as.x,Ls.z,0,-Ls.x,-is.y,is.x,0,-as.y,as.x,0,-Ls.y,Ls.x,0];return!Jh(n,Rr,Nr,Dr,Ic)||(n=[1,0,0,0,1,0,0,0,1],!Jh(n,Rr,Nr,Dr,Ic))?!1:(Hc.crossVectors(is,as),n=[Hc.x,Hc.y,Hc.z],Jh(n,Rr,Nr,Dr,Ic))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ga[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ga[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ga[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ga[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ga[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ga[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ga[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ga[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ga),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ga=[new X,new X,new X,new X,new X,new X,new X,new X],Di=new X,Fc=new eo,Rr=new X,Nr=new X,Dr=new X,is=new X,as=new X,Ls=new X,$o=new X,Ic=new X,Hc=new X,Os=new X;function Jh(s,e,n,a,o){for(let c=0,u=s.length-3;c<=u;c+=3){Os.fromArray(s,c);const h=o.x*Math.abs(Os.x)+o.y*Math.abs(Os.y)+o.z*Math.abs(Os.z),m=e.dot(Os),p=n.dot(Os),g=a.dot(Os);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const j3=new eo,el=new X,$h=new X;class wu{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):j3.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const n=el.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(el,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($h.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add($h)),this.expandByPoint(el.copy(e.center).sub($h))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new X,ed=new X,Vc=new X,ss=new X,td=new X,Gc=new X,nd=new X;class Vp{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=va.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,n),va.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){ed.copy(e).add(n).multiplyScalar(.5),Vc.copy(n).sub(e).normalize(),ss.copy(this.origin).sub(ed);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Vc),h=ss.dot(this.direction),m=-ss.dot(Vc),p=ss.lengthSq(),g=Math.abs(1-u*u);let x,v,b,E;if(g>0)if(x=u*m-h,v=u*h-m,E=c*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,b=x*(x+u*v+2*h)+v*(u*x+v+2*m)+p}else v=c,x=Math.max(0,-(u*v+h)),b=-x*x+v*(v+2*m)+p;else v=-c,x=Math.max(0,-(u*v+h)),b=-x*x+v*(v+2*m)+p;else v<=-E?(x=Math.max(0,-(-u*c+h)),v=x>0?-c:Math.min(Math.max(-c,-m),c),b=-x*x+v*(v+2*m)+p):v<=E?(x=0,v=Math.min(Math.max(-c,-m),c),b=v*(v+2*m)+p):(x=Math.max(0,-(u*c+h)),v=x>0?c:Math.min(Math.max(-c,-m),c),b=-x*x+v*(v+2*m)+p);else v=u>0?-c:c,x=Math.max(0,-(u*v+h)),b=-x*x+v*(v+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(ed).addScaledVector(Vc,v),b}intersectSphere(e,n){va.subVectors(e.center,this.origin);const a=va.dot(this.direction),o=va.dot(va)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),h=a-u,m=a+u;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(a=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(a=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,u=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,u=(e.min.y-v.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),x>=0?(h=(e.min.z-v.z)*x,m=(e.max.z-v.z)*x):(h=(e.max.z-v.z)*x,m=(e.min.z-v.z)*x),a>m||h>o)||((h>a||a!==a)&&(a=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,n,a,o,c){td.subVectors(n,e),Gc.subVectors(a,e),nd.crossVectors(td,Gc);let u=this.direction.dot(nd),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;ss.subVectors(this.origin,e);const m=h*this.direction.dot(Gc.crossVectors(ss,Gc));if(m<0)return null;const p=h*this.direction.dot(td.cross(ss));if(p<0||m+p>u)return null;const g=-h*ss.dot(nd);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,n,a,o,c,u,h,m,p,g,x,v,b,E,A,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,h,m,p,g,x,v,b,E,A,M)}set(e,n,a,o,c,u,h,m,p,g,x,v,b,E,A,M){const y=this.elements;return y[0]=e,y[4]=n,y[8]=a,y[12]=o,y[1]=c,y[5]=u,y[9]=h,y[13]=m,y[2]=p,y[6]=g,y[10]=x,y[14]=v,y[3]=b,y[7]=E,y[11]=A,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/Ur.setFromMatrixColumn(e,0).length(),c=1/Ur.setFromMatrixColumn(e,1).length(),u=1/Ur.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),h=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),x=Math.sin(c);if(e.order==="XYZ"){const v=u*g,b=u*x,E=h*g,A=h*x;n[0]=m*g,n[4]=-m*x,n[8]=p,n[1]=b+E*p,n[5]=v-A*p,n[9]=-h*m,n[2]=A-v*p,n[6]=E+b*p,n[10]=u*m}else if(e.order==="YXZ"){const v=m*g,b=m*x,E=p*g,A=p*x;n[0]=v+A*h,n[4]=E*h-b,n[8]=u*p,n[1]=u*x,n[5]=u*g,n[9]=-h,n[2]=b*h-E,n[6]=A+v*h,n[10]=u*m}else if(e.order==="ZXY"){const v=m*g,b=m*x,E=p*g,A=p*x;n[0]=v-A*h,n[4]=-u*x,n[8]=E+b*h,n[1]=b+E*h,n[5]=u*g,n[9]=A-v*h,n[2]=-u*p,n[6]=h,n[10]=u*m}else if(e.order==="ZYX"){const v=u*g,b=u*x,E=h*g,A=h*x;n[0]=m*g,n[4]=E*p-b,n[8]=v*p+A,n[1]=m*x,n[5]=A*p+v,n[9]=b*p-E,n[2]=-p,n[6]=h*m,n[10]=u*m}else if(e.order==="YZX"){const v=u*m,b=u*p,E=h*m,A=h*p;n[0]=m*g,n[4]=A-v*x,n[8]=E*x+b,n[1]=x,n[5]=u*g,n[9]=-h*g,n[2]=-p*g,n[6]=b*x+E,n[10]=v-A*x}else if(e.order==="XZY"){const v=u*m,b=u*p,E=h*m,A=h*p;n[0]=m*g,n[4]=-x,n[8]=p*g,n[1]=v*x+A,n[5]=u*g,n[9]=b*x-E,n[2]=E*x-b,n[6]=h*g,n[10]=A*x+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X3,e,W3)}lookAt(e,n,a){const o=this.elements;return li.subVectors(e,n),li.lengthSq()===0&&(li.z=1),li.normalize(),rs.crossVectors(a,li),rs.lengthSq()===0&&(Math.abs(a.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),rs.crossVectors(a,li)),rs.normalize(),kc.crossVectors(li,rs),o[0]=rs.x,o[4]=kc.x,o[8]=li.x,o[1]=rs.y,o[5]=kc.y,o[9]=li.y,o[2]=rs.z,o[6]=kc.z,o[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],h=a[4],m=a[8],p=a[12],g=a[1],x=a[5],v=a[9],b=a[13],E=a[2],A=a[6],M=a[10],y=a[14],B=a[3],w=a[7],P=a[11],I=a[15],O=o[0],F=o[4],q=o[8],D=o[12],N=o[1],G=o[5],ne=o[9],oe=o[13],xe=o[2],ce=o[6],H=o[10],W=o[14],K=o[3],fe=o[7],ge=o[11],z=o[15];return c[0]=u*O+h*N+m*xe+p*K,c[4]=u*F+h*G+m*ce+p*fe,c[8]=u*q+h*ne+m*H+p*ge,c[12]=u*D+h*oe+m*W+p*z,c[1]=g*O+x*N+v*xe+b*K,c[5]=g*F+x*G+v*ce+b*fe,c[9]=g*q+x*ne+v*H+b*ge,c[13]=g*D+x*oe+v*W+b*z,c[2]=E*O+A*N+M*xe+y*K,c[6]=E*F+A*G+M*ce+y*fe,c[10]=E*q+A*ne+M*H+y*ge,c[14]=E*D+A*oe+M*W+y*z,c[3]=B*O+w*N+P*xe+I*K,c[7]=B*F+w*G+P*ce+I*fe,c[11]=B*q+w*ne+P*H+I*ge,c[15]=B*D+w*oe+P*W+I*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],v=e[10],b=e[14],E=e[3],A=e[7],M=e[11],y=e[15];return E*(+c*m*x-o*p*x-c*h*v+a*p*v+o*h*b-a*m*b)+A*(+n*m*b-n*p*v+c*u*v-o*u*b+o*p*g-c*m*g)+M*(+n*p*x-n*h*b-c*u*x+a*u*b+c*h*g-a*p*g)+y*(-o*h*g-n*m*x+n*h*v+o*u*x-a*u*v+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],v=e[10],b=e[11],E=e[12],A=e[13],M=e[14],y=e[15],B=x*M*p-A*v*p+A*m*b-h*M*b-x*m*y+h*v*y,w=E*v*p-g*M*p-E*m*b+u*M*b+g*m*y-u*v*y,P=g*A*p-E*x*p+E*h*b-u*A*b-g*h*y+u*x*y,I=E*x*m-g*A*m-E*h*v+u*A*v+g*h*M-u*x*M,O=n*B+a*w+o*P+c*I;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=B*F,e[1]=(A*v*c-x*M*c-A*o*b+a*M*b+x*o*y-a*v*y)*F,e[2]=(h*M*c-A*m*c+A*o*p-a*M*p-h*o*y+a*m*y)*F,e[3]=(x*m*c-h*v*c-x*o*p+a*v*p+h*o*b-a*m*b)*F,e[4]=w*F,e[5]=(g*M*c-E*v*c+E*o*b-n*M*b-g*o*y+n*v*y)*F,e[6]=(E*m*c-u*M*c-E*o*p+n*M*p+u*o*y-n*m*y)*F,e[7]=(u*v*c-g*m*c+g*o*p-n*v*p-u*o*b+n*m*b)*F,e[8]=P*F,e[9]=(E*x*c-g*A*c-E*a*b+n*A*b+g*a*y-n*x*y)*F,e[10]=(u*A*c-E*h*c+E*a*p-n*A*p-u*a*y+n*h*y)*F,e[11]=(g*h*c-u*x*c-g*a*p+n*x*p+u*a*b-n*h*b)*F,e[12]=I*F,e[13]=(g*A*o-E*x*o+E*a*v-n*A*v-g*a*M+n*x*M)*F,e[14]=(E*h*o-u*A*o-E*a*m+n*A*m+u*a*M-n*h*M)*F,e[15]=(u*x*o-g*h*o+g*a*m-n*x*m-u*a*v+n*h*v)*F,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,h=e.y,m=e.z,p=c*u,g=c*h;return this.set(p*u+a,p*h-o*m,p*m+o*h,0,p*h+o*m,g*h+a,g*m-o*u,0,p*m-o*h,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,h=n._z,m=n._w,p=c+c,g=u+u,x=h+h,v=c*p,b=c*g,E=c*x,A=u*g,M=u*x,y=h*x,B=m*p,w=m*g,P=m*x,I=a.x,O=a.y,F=a.z;return o[0]=(1-(A+y))*I,o[1]=(b+P)*I,o[2]=(E-w)*I,o[3]=0,o[4]=(b-P)*O,o[5]=(1-(v+y))*O,o[6]=(M+B)*O,o[7]=0,o[8]=(E+w)*F,o[9]=(M-B)*F,o[10]=(1-(v+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=Ur.set(o[0],o[1],o[2]).length();const u=Ur.set(o[4],o[5],o[6]).length(),h=Ur.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],Ui.copy(this);const p=1/c,g=1/u,x=1/h;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=g,Ui.elements[5]*=g,Ui.elements[6]*=g,Ui.elements[8]*=x,Ui.elements[9]*=x,Ui.elements[10]*=x,n.setFromRotationMatrix(Ui),a.x=c,a.y=u,a.z=h,this}makePerspective(e,n,a,o,c,u,h=ji,m=!1){const p=this.elements,g=2*c/(n-e),x=2*c/(a-o),v=(n+e)/(n-e),b=(a+o)/(a-o);let E,A;if(m)E=c/(u-c),A=u*c/(u-c);else if(h===ji)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(h===bu)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=x,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,h=ji,m=!1){const p=this.elements,g=2/(n-e),x=2/(a-o),v=-(n+e)/(n-e),b=-(a+o)/(a-o);let E,A;if(m)E=1/(u-c),A=u/(u-c);else if(h===ji)E=-2/(u-c),A=-(u+c)/(u-c);else if(h===bu)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=x,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Ur=new X,Ui=new tn,X3=new X(0,0,0),W3=new X(1,1,1),rs=new X,kc=new X,li=new X,av=new tn,sv=new js;class Yi{constructor(e=0,n=0,a=0,o=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],h=o[8],m=o[1],p=o[5],g=o[9],x=o[2],v=o[6],b=o[10];switch(n){case"XYZ":this._y=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,b),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,b),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return av.makeRotationFromQuaternion(e),this.setFromRotationMatrix(av,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sv.setFromEuler(this),this.setFromQuaternion(sv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class j_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q3=0;const rv=new X,Lr=new js,_a=new tn,jc=new X,tl=new X,Y3=new X,Z3=new js,ov=new X(1,0,0),lv=new X(0,1,0),cv=new X(0,0,1),uv={type:"added"},K3={type:"removed"},Or={type:"childadded",child:null},id={type:"childremoved",child:null};class On extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q3++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new X,n=new Yi,a=new js,o=new X(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new _t}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(ov,e)}rotateY(e){return this.rotateOnAxis(lv,e)}rotateZ(e){return this.rotateOnAxis(cv,e)}translateOnAxis(e,n){return rv.copy(e).applyQuaternion(this.quaternion),this.position.add(rv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ov,e)}translateY(e){return this.translateOnAxis(lv,e)}translateZ(e){return this.translateOnAxis(cv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?jc.copy(e):jc.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(tl,jc,this.up):_a.lookAt(jc,tl,this.up),this.quaternion.setFromRotationMatrix(_a),o&&(_a.extractRotation(o.matrixWorld),Lr.setFromRotationMatrix(_a),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ln("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uv),Or.child=e,this.dispatchEvent(Or),Or.child=null):ln("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(K3),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uv),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,Y3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,Z3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(e.shapes,x)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));o.material=h}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(e.animations,m))}}if(n){const h=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),x=u(e.shapes),v=u(e.skeletons),b=u(e.animations),E=u(e.nodes);h.length>0&&(a.geometries=h),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),x.length>0&&(a.shapes=x),v.length>0&&(a.skeletons=v),b.length>0&&(a.animations=b),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}On.DEFAULT_UP=new X(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Li=new X,ya=new X,ad=new X,ba=new X,Pr=new X,zr=new X,fv=new X,sd=new X,rd=new X,od=new X,ld=new qt,cd=new qt,ud=new qt;class Oi{constructor(e=new X,n=new X,a=new X){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Li.subVectors(e,n),o.cross(Li);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Li.subVectors(o,n),ya.subVectors(a,n),ad.subVectors(e,n);const u=Li.dot(Li),h=Li.dot(ya),m=Li.dot(ad),p=ya.dot(ya),g=ya.dot(ad),x=u*p-h*h;if(x===0)return c.set(0,0,0),null;const v=1/x,b=(p*m-h*g)*v,E=(u*g-h*m)*v;return c.set(1-b-E,E,b)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(e,n,a,o,c,u,h,m){return this.getBarycoord(e,n,a,o,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(u,ba.y),m.addScaledVector(h,ba.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,n),cd.fromBufferAttribute(e,a),ud.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ld,c.x),u.addScaledVector(cd,c.y),u.addScaledVector(ud,c.z),u}static isFrontFacing(e,n,a,o){return Li.subVectors(a,n),ya.subVectors(e,n),Li.cross(ya).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Li.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Oi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,h;Pr.subVectors(o,a),zr.subVectors(c,a),sd.subVectors(e,a);const m=Pr.dot(sd),p=zr.dot(sd);if(m<=0&&p<=0)return n.copy(a);rd.subVectors(e,o);const g=Pr.dot(rd),x=zr.dot(rd);if(g>=0&&x<=g)return n.copy(o);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(Pr,u);od.subVectors(e,c);const b=Pr.dot(od),E=zr.dot(od);if(E>=0&&b<=E)return n.copy(c);const A=b*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(a).addScaledVector(zr,h);const M=g*E-b*x;if(M<=0&&x-g>=0&&b-E>=0)return fv.subVectors(c,o),h=(x-g)/(x-g+(b-E)),n.copy(o).addScaledVector(fv,h);const y=1/(M+A+v);return u=A*y,h=v*y,n.copy(a).addScaledVector(Pr,u).addScaledVector(zr,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const X_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function fd(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Pt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Pt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Pt.workingColorSpace){if(e=z3(e,1),n=St(n,0,1),a=St(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=fd(u,c,e+1/3),this.g=fd(u,c,e),this.b=fd(u,c,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,n=Si){function a(c){c!==void 0&&parseFloat(c)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Si){const a=X_[e.toLowerCase()];return a!==void 0?this.setHex(a,n):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Pt.workingToColorSpace(Fn.copy(this),e),Math.round(St(Fn.r*255,0,255))*65536+Math.round(St(Fn.g*255,0,255))*256+Math.round(St(Fn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Pt.workingColorSpace){Pt.workingToColorSpace(Fn.copy(this),n);const a=Fn.r,o=Fn.g,c=Fn.b,u=Math.max(a,o,c),h=Math.min(a,o,c);let m,p;const g=(h+u)/2;if(h===u)m=0,p=0;else{const x=u-h;switch(p=g<=.5?x/(u+h):x/(2-u-h),u){case a:m=(o-c)/x+(o<c?6:0);break;case o:m=(c-a)/x+2;break;case c:m=(a-o)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Pt.workingColorSpace){return Pt.workingToColorSpace(Fn.copy(this),n),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Si){Pt.workingToColorSpace(Fn.copy(this),e);const n=Fn.r,a=Fn.g,o=Fn.b;return e!==Si?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(os),this.setHSL(os.h+e,os.s+n,os.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(os),e.getHSL(Xc);const a=qh(os.h,Xc.h,n),o=qh(os.s,Xc.s,n),c=qh(os.l,Xc.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new yt;yt.NAMES=X_;let Q3=0;class Ys extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q3++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Gs,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Od,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){pt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){pt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(a.blending=this.blending),this.side!==ps&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ld&&(a.blendSrc=this.blendSrc),this.blendDst!==Od&&(a.blendDst=this.blendDst),this.blendEquation!==Is&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kg&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const h in c){const m=c[h];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gp extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=N_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xn=new X,Wc=new Ce;let J3=0;class zi{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=Qg,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Wc.fromBufferAttribute(this,n),Wc.applyMatrix3(e),this.setXY(n,Wc.x,Wc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix3(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyMatrix4(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.applyNormalMatrix(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)xn.fromBufferAttribute(this,n),xn.transformDirection(e),this.setXYZ(n,xn.x,xn.y,xn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Jo(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=Zn(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=Zn(n,this.array),a=Zn(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=Zn(n,this.array),a=Zn(a,this.array),o=Zn(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=Zn(n,this.array),a=Zn(a,this.array),o=Zn(o,this.array),c=Zn(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qg&&(e.usage=this.usage),e}}class W_ extends zi{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class q_ extends zi{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Bi extends zi{constructor(e,n,a){super(new Float32Array(e),n,a)}}let $3=0;const bi=new tn,hd=new On,Br=new X,ci=new eo,nl=new eo,Cn=new X;class Ai extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$3++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G_(e)?q_:W_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new _t().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,n,a){return bi.makeTranslation(e,n,a),this.applyMatrix4(bi),this}scale(e,n,a){return bi.makeScale(e,n,a),this.applyMatrix4(bi),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Bi(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ln("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];ci.setFromBufferAttribute(c),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ln('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ln("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const a=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const h=n[c];nl.setFromBufferAttribute(h),this.morphTargetsRelative?(Cn.addVectors(ci.min,nl.min),ci.expandByPoint(Cn),Cn.addVectors(ci.max,nl.max),ci.expandByPoint(Cn)):(ci.expandByPoint(nl.min),ci.expandByPoint(nl.max))}ci.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Cn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Cn));if(n)for(let c=0,u=n.length;c<u;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Cn.fromBufferAttribute(h,p),m&&(Br.fromBufferAttribute(e,p),Cn.add(Br)),o=Math.max(o,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&ln('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ln("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<a.count;q++)h[q]=new X,m[q]=new X;const p=new X,g=new X,x=new X,v=new Ce,b=new Ce,E=new Ce,A=new X,M=new X;function y(q,D,N){p.fromBufferAttribute(a,q),g.fromBufferAttribute(a,D),x.fromBufferAttribute(a,N),v.fromBufferAttribute(c,q),b.fromBufferAttribute(c,D),E.fromBufferAttribute(c,N),g.sub(p),x.sub(p),b.sub(v),E.sub(v);const G=1/(b.x*E.y-E.x*b.y);isFinite(G)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-b.y).multiplyScalar(G),M.copy(x).multiplyScalar(b.x).addScaledVector(g,-E.x).multiplyScalar(G),h[q].add(A),h[D].add(A),h[N].add(A),m[q].add(M),m[D].add(M),m[N].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let q=0,D=B.length;q<D;++q){const N=B[q],G=N.start,ne=N.count;for(let oe=G,xe=G+ne;oe<xe;oe+=3)y(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const w=new X,P=new X,I=new X,O=new X;function F(q){I.fromBufferAttribute(o,q),O.copy(I);const D=h[q];w.copy(D),w.sub(I.multiplyScalar(I.dot(D))).normalize(),P.crossVectors(O,D);const G=P.dot(m[q])<0?-1:1;u.setXYZW(q,w.x,w.y,w.z,G)}for(let q=0,D=B.length;q<D;++q){const N=B[q],G=N.start,ne=N.count;for(let oe=G,xe=G+ne;oe<xe;oe+=3)F(e.getX(oe+0)),F(e.getX(oe+1)),F(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new zi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,b=a.count;v<b;v++)a.setXYZ(v,0,0,0);const o=new X,c=new X,u=new X,h=new X,m=new X,p=new X,g=new X,x=new X;if(e)for(let v=0,b=e.count;v<b;v+=3){const E=e.getX(v+0),A=e.getX(v+1),M=e.getX(v+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),h.fromBufferAttribute(a,E),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,M),h.add(g),m.add(g),p.add(g),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,b=n.count;v<b;v+=3)o.fromBufferAttribute(n,v+0),c.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,c),x.subVectors(o,c),g.cross(x),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Cn.fromBufferAttribute(e,n),Cn.normalize(),e.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,v=new p.constructor(m.length*g);let b=0,E=0;for(let A=0,M=m.length;A<M;A++){h.isInterleavedBufferAttribute?b=m[A]*h.data.stride+h.offset:b=m[A]*g;for(let y=0;y<g;y++)v[E++]=p[b++]}return new zi(v,g,x)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ai,a=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,a);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,x=p.length;g<x;g++){const v=p[g],b=e(v,a);m.push(b)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,m=u.length;h<m;h++){const p=u[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const b=p[x];g.push(b.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],x=c[p];for(let v=0,b=x.length;v<b;v++)g.push(x[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hv=new tn,Ps=new Vp,qc=new wu,dv=new X,Yc=new X,Zc=new X,Kc=new X,dd=new X,Qc=new X,pv=new X,Jc=new X;class fi extends On{constructor(e=new Ai,n=new Gp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(c&&h){Qc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],x=c[m];g!==0&&(dd.fromBufferAttribute(x,e),u?Qc.addScaledVector(dd,g):Qc.addScaledVector(dd.sub(n),g))}n.add(Qc)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),qc.copy(a.boundingSphere),qc.applyMatrix4(c),Ps.copy(e.ray).recast(e.near),!(qc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(qc,dv)===null||Ps.origin.distanceToSquared(dv)>(e.far-e.near)**2))&&(hv.copy(c).invert(),Ps.copy(e.ray).applyMatrix4(hv),!(a.boundingBox!==null&&Ps.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Ps)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const M=v[E],y=u[M.materialIndex],B=Math.max(M.start,b.start),w=Math.min(h.count,Math.min(M.start+M.count,b.start+b.count));for(let P=B,I=w;P<I;P+=3){const O=h.getX(P),F=h.getX(P+1),q=h.getX(P+2);o=$c(this,y,e,a,p,g,x,O,F,q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,b.start),A=Math.min(h.count,b.start+b.count);for(let M=E,y=A;M<y;M+=3){const B=h.getX(M),w=h.getX(M+1),P=h.getX(M+2);o=$c(this,u,e,a,p,g,x,B,w,P),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const M=v[E],y=u[M.materialIndex],B=Math.max(M.start,b.start),w=Math.min(m.count,Math.min(M.start+M.count,b.start+b.count));for(let P=B,I=w;P<I;P+=3){const O=P,F=P+1,q=P+2;o=$c(this,y,e,a,p,g,x,O,F,q),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,b.start),A=Math.min(m.count,b.start+b.count);for(let M=E,y=A;M<y;M+=3){const B=M,w=M+1,P=M+2;o=$c(this,u,e,a,p,g,x,B,w,P),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function e2(s,e,n,a,o,c,u,h){let m;if(e.side===Jn?m=a.intersectTriangle(u,c,o,!0,h):m=a.intersectTriangle(o,c,u,e.side===ps,h),m===null)return null;Jc.copy(h),Jc.applyMatrix4(s.matrixWorld);const p=n.ray.origin.distanceTo(Jc);return p<n.near||p>n.far?null:{distance:p,point:Jc.clone(),object:s}}function $c(s,e,n,a,o,c,u,h,m,p){s.getVertexPosition(h,Yc),s.getVertexPosition(m,Zc),s.getVertexPosition(p,Kc);const g=e2(s,e,n,a,Yc,Zc,Kc,pv);if(g){const x=new X;Oi.getBarycoord(pv,Yc,Zc,Kc,x),o&&(g.uv=Oi.getInterpolatedAttribute(o,h,m,p,x,new Ce)),c&&(g.uv1=Oi.getInterpolatedAttribute(c,h,m,p,x,new Ce)),u&&(g.normal=Oi.getInterpolatedAttribute(u,h,m,p,x,new X),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new X,materialIndex:0};Oi.getNormal(Yc,Zc,Kc,v.normal),g.face=v,g.barycoord=x}return g}class Ml extends Ai{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const h=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],x=[];let v=0,b=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,o,u,2),E("x","z","y",1,-1,e,a,-n,o,u,3),E("x","y","z",1,-1,e,n,a,o,c,4),E("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Bi(p,3)),this.setAttribute("normal",new Bi(g,3)),this.setAttribute("uv",new Bi(x,2));function E(A,M,y,B,w,P,I,O,F,q,D){const N=P/F,G=I/q,ne=P/2,oe=I/2,xe=O/2,ce=F+1,H=q+1;let W=0,K=0;const fe=new X;for(let ge=0;ge<H;ge++){const z=ge*G-oe;for(let ae=0;ae<ce;ae++){const be=ae*N-ne;fe[A]=be*B,fe[M]=z*w,fe[y]=xe,p.push(fe.x,fe.y,fe.z),fe[A]=0,fe[M]=0,fe[y]=O>0?1:-1,g.push(fe.x,fe.y,fe.z),x.push(ae/F),x.push(1-ge/q),W+=1}}for(let ge=0;ge<q;ge++)for(let z=0;z<F;z++){const ae=v+z+ce*ge,be=v+z+ce*(ge+1),Ne=v+(z+1)+ce*(ge+1),ke=v+(z+1)+ce*ge;m.push(ae,be,ke),m.push(be,Ne,ke),K+=6}h.addGroup(b,K,D),b+=K,v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(s){const e={};for(const n in s){e[n]={};for(const a in s[n]){const o=s[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function Hn(s){const e={};for(let n=0;n<s.length;n++){const a=Zr(s[n]);for(const o in a)e[o]=a[o]}return e}function t2(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Y_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Mu={clone:Zr,merge:Hn};var n2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n2,this.fragmentShader=i2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=t2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Z_ extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new X,mv=new Ce,xv=new Ce;class ui extends Z_{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yp*2*Math.atan(Math.tan(mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,n){return this.getViewBounds(e,mv,xv),n.subVectors(xv,mv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(mu*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Fr=-90,Ir=1;class a2 extends On{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ui(Fr,Ir,e,n);o.layers=this.layers,this.add(o);const c=new ui(Fr,Ir,e,n);c.layers=this.layers,this.add(c);const u=new ui(Fr,Ir,e,n);u.layers=this.layers,this.add(u);const h=new ui(Fr,Ir,e,n);h.layers=this.layers,this.add(h);const m=new ui(Fr,Ir,e,n);m.layers=this.layers,this.add(m);const p=new ui(Fr,Ir,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,h,m]=n;for(const p of n)this.remove(p);if(e===ji)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bu)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,h,m,p,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,h),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,p),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(x,v,b),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class K_ extends Gn{constructor(e=[],n=Wr,a,o,c,u,h,m,p,g){super(e,n,a,o,c,u,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class s2 extends Ei{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new K_(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ml(5,5,5),c=new Vn({name:"CubemapFromEquirect",uniforms:Zr(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Jn,blending:Xi});c.uniforms.tEquirect.value=n;const u=new fi(o,c),h=n.minFilter;return n.minFilter===Vs&&(n.minFilter=Qn),new a2(1,10,this).update(e,u),n.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class sl extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r2={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const M=n.getJointPose(A,a),y=this._getHandJoint(p,A);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),b=.02,E=.005;p.inputState.pinching&&v>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(r2)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new sl;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class o2 extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class l2 extends Gn{constructor(e=null,n=1,a=1,o,c,u,h,m,p=hi,g=hi,x,v){super(null,u,h,m,p,g,o,c,x,v),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const md=new X,c2=new X,u2=new _t;class us{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=md.subVectors(a,n).cross(c2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(md),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||u2.getNormalMatrix(e),o=this.coplanarPoint(md).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new wu,f2=new Ce(.5,.5),eu=new X;class kp{constructor(e=new us,n=new us,a=new us,o=new us,c=new us,u=new us){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(c),h[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ji,a=!1){const o=this.planes,c=e.elements,u=c[0],h=c[1],m=c[2],p=c[3],g=c[4],x=c[5],v=c[6],b=c[7],E=c[8],A=c[9],M=c[10],y=c[11],B=c[12],w=c[13],P=c[14],I=c[15];if(o[0].setComponents(p-u,b-g,y-E,I-B).normalize(),o[1].setComponents(p+u,b+g,y+E,I+B).normalize(),o[2].setComponents(p+h,b+x,y+A,I+w).normalize(),o[3].setComponents(p-h,b-x,y-A,I-w).normalize(),a)o[4].setComponents(m,v,M,P).normalize(),o[5].setComponents(p-m,b-v,y-M,I-P).normalize();else if(o[4].setComponents(p-m,b-v,y-M,I-P).normalize(),n===ji)o[5].setComponents(p+m,b+v,y+M,I+P).normalize();else if(n===bu)o[5].setComponents(m,v,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const n=f2.distanceTo(e.center);return zs.radius=.7071067811865476+n,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(eu.x=o.normal.x>0?e.max.x:e.min.x,eu.y=o.normal.y>0?e.max.y:e.min.y,eu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Q_ extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gv=new tn,bp=new Vp,tu=new wu,nu=new X;class h2 extends On{constructor(e=new Ai,n=new Q_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),tu.copy(a.boundingSphere),tu.applyMatrix4(o),tu.radius+=c,e.ray.intersectsSphere(tu)===!1)return;gv.copy(o).invert(),bp.copy(e.ray).applyMatrix4(gv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=a.index,x=a.attributes.position;if(p!==null){const v=Math.max(0,u.start),b=Math.min(p.count,u.start+u.count);for(let E=v,A=b;E<A;E++){const M=p.getX(E);nu.fromBufferAttribute(x,M),vv(nu,M,m,o,e,n,this)}}else{const v=Math.max(0,u.start),b=Math.min(x.count,u.start+u.count);for(let E=v,A=b;E<A;E++)nu.fromBufferAttribute(x,E),vv(nu,E,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function vv(s,e,n,a,o,c,u){const h=bp.distanceSqToPoint(s);if(h<n){const m=new X;bp.closestPointToPoint(s,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class J_ extends Gn{constructor(e,n,a=ks,o,c,u,h=hi,m=hi,p,g=pl,x=1){if(g!==pl&&g!==ml)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:x};super(v,o,c,u,h,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $_ extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ki{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){pt("Curve: .getPoint() not implemented.")}getPointAt(e,n){const a=this.getUtoTmapping(e);return this.getPoint(a,n)}getPoints(e=5){const n=[];for(let a=0;a<=e;a++)n.push(this.getPoint(a/e));return n}getSpacedPoints(e=5){const n=[];for(let a=0;a<=e;a++)n.push(this.getPointAt(a/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),c=0;n.push(0);for(let u=1;u<=e;u++)a=this.getPoint(u/e),c+=a.distanceTo(o),n.push(c),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const a=this.getLengths();let o=0;const c=a.length;let u;n?u=n:u=e*a[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=a[o]-u,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,a[o]===u)return o/(c-1);const g=a[o],v=a[o+1]-g,b=(u-g)/v;return(o+b)/(c-1)}getTangent(e,n){let o=e-1e-4,c=e+1e-4;o<0&&(o=0),c>1&&(c=1);const u=this.getPoint(o),h=this.getPoint(c),m=n||(u.isVector2?new Ce:new X);return m.copy(h).sub(u).normalize(),m}getTangentAt(e,n){const a=this.getUtoTmapping(e);return this.getTangent(a,n)}computeFrenetFrames(e,n=!1){const a=new X,o=[],c=[],u=[],h=new X,m=new tn;for(let b=0;b<=e;b++){const E=b/e;o[b]=this.getTangentAt(E,new X)}c[0]=new X,u[0]=new X;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),x=Math.abs(o[0].y),v=Math.abs(o[0].z);g<=p&&(p=g,a.set(1,0,0)),x<=p&&(p=x,a.set(0,1,0)),v<=p&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),c[0].crossVectors(o[0],h),u[0].crossVectors(o[0],c[0]);for(let b=1;b<=e;b++){if(c[b]=c[b-1].clone(),u[b]=u[b-1].clone(),h.crossVectors(o[b-1],o[b]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(St(o[b-1].dot(o[b]),-1,1));c[b].applyMatrix4(m.makeRotationAxis(h,E))}u[b].crossVectors(o[b],c[b])}if(n===!0){let b=Math.acos(St(c[0].dot(c[e]),-1,1));b/=e,o[0].dot(h.crossVectors(c[0],c[e]))>0&&(b=-b);for(let E=1;E<=e;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],b*E)),u[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jp extends Ki{constructor(e=0,n=0,a=1,o=1,c=0,u=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=u,this.aClockwise=h,this.aRotation=m}getPoint(e,n=new Ce){const a=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const u=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(u?c=0:c=o),this.aClockwise===!0&&!u&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+e*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),x=Math.sin(this.aRotation),v=m-this.aX,b=p-this.aY;m=v*g-b*x+this.aX,p=v*x+b*g+this.aY}return a.set(m,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class d2 extends jp{constructor(e,n,a,o,c,u){super(e,n,a,a,o,c,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Xp(){let s=0,e=0,n=0,a=0;function o(c,u,h,m){s=c,e=h,n=-3*c+3*u-2*h-m,a=2*c-2*u+h+m}return{initCatmullRom:function(c,u,h,m,p){o(u,h,p*(h-c),p*(m-u))},initNonuniformCatmullRom:function(c,u,h,m,p,g,x){let v=(u-c)/p-(h-c)/(p+g)+(h-u)/g,b=(h-u)/g-(m-u)/(g+x)+(m-h)/x;v*=g,b*=g,o(u,h,v,b)},calc:function(c){const u=c*c,h=u*c;return s+e*c+n*u+a*h}}}const iu=new X,xd=new Xp,gd=new Xp,vd=new Xp;class p2 extends Ki{constructor(e=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=a,this.tension=o}getPoint(e,n=new X){const a=n,o=this.points,c=o.length,u=(c-(this.closed?0:1))*e;let h=Math.floor(u),m=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=o[(h-1)%c]:(iu.subVectors(o[0],o[1]).add(o[0]),p=iu);const x=o[h%c],v=o[(h+1)%c];if(this.closed||h+2<c?g=o[(h+2)%c]:(iu.subVectors(o[c-1],o[c-2]).add(o[c-1]),g=iu),this.curveType==="centripetal"||this.curveType==="chordal"){const b=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(x),b),A=Math.pow(x.distanceToSquared(v),b),M=Math.pow(v.distanceToSquared(g),b);A<1e-4&&(A=1),E<1e-4&&(E=A),M<1e-4&&(M=A),xd.initNonuniformCatmullRom(p.x,x.x,v.x,g.x,E,A,M),gd.initNonuniformCatmullRom(p.y,x.y,v.y,g.y,E,A,M),vd.initNonuniformCatmullRom(p.z,x.z,v.z,g.z,E,A,M)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(p.x,x.x,v.x,g.x,this.tension),gd.initCatmullRom(p.y,x.y,v.y,g.y,this.tension),vd.initCatmullRom(p.z,x.z,v.z,g.z,this.tension));return a.set(xd.calc(m),gd.calc(m),vd.calc(m)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _v(s,e,n,a,o){const c=(a-e)*.5,u=(o-n)*.5,h=s*s,m=s*h;return(2*n-2*a+c+u)*m+(-3*n+3*a-2*c-u)*h+c*s+n}function m2(s,e){const n=1-s;return n*n*e}function x2(s,e){return 2*(1-s)*s*e}function g2(s,e){return s*s*e}function ll(s,e,n,a){return m2(s,e)+x2(s,n)+g2(s,a)}function v2(s,e){const n=1-s;return n*n*n*e}function _2(s,e){const n=1-s;return 3*n*n*s*e}function y2(s,e){return 3*(1-s)*s*s*e}function b2(s,e){return s*s*s*e}function cl(s,e,n,a,o){return v2(s,e)+_2(s,n)+y2(s,a)+b2(s,o)}class ey extends Ki{constructor(e=new Ce,n=new Ce,a=new Ce,o=new Ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=a,this.v3=o}getPoint(e,n=new Ce){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(cl(e,o.x,c.x,u.x,h.x),cl(e,o.y,c.y,u.y,h.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class S2 extends Ki{constructor(e=new X,n=new X,a=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=a,this.v3=o}getPoint(e,n=new X){const a=n,o=this.v0,c=this.v1,u=this.v2,h=this.v3;return a.set(cl(e,o.x,c.x,u.x,h.x),cl(e,o.y,c.y,u.y,h.y),cl(e,o.z,c.z,u.z,h.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ty extends Ki{constructor(e=new Ce,n=new Ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ce){const a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ce){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M2 extends Ki{constructor(e=new X,n=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new X){const a=n;return e===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(e).add(this.v1)),a}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new X){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends Ki{constructor(e=new Ce,n=new Ce,a=new Ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new Ce){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ll(e,o.x,c.x,u.x),ll(e,o.y,c.y,u.y)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E2 extends Ki{constructor(e=new X,n=new X,a=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=a}getPoint(e,n=new X){const a=n,o=this.v0,c=this.v1,u=this.v2;return a.set(ll(e,o.x,c.x,u.x),ll(e,o.y,c.y,u.y),ll(e,o.z,c.z,u.z)),a}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iy extends Ki{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ce){const a=n,o=this.points,c=(o.length-1)*e,u=Math.floor(c),h=c-u,m=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],x=o[u>o.length-3?o.length-1:u+2];return a.set(_v(h,m.x,p.x,g.x,x.x),_v(h,m.y,p.y,g.y,x.y)),a}copy(e){super.copy(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,a=e.points.length;n<a;n++){const o=e.points[n];this.points.push(new Ce().fromArray(o))}return this}}var Sp=Object.freeze({__proto__:null,ArcCurve:d2,CatmullRomCurve3:p2,CubicBezierCurve:ey,CubicBezierCurve3:S2,EllipseCurve:jp,LineCurve:ty,LineCurve3:M2,QuadraticBezierCurve:ny,QuadraticBezierCurve3:E2,SplineCurve:iy});class T2 extends Ki{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const a=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sp[a](n,e))}return this}getPoint(e,n){const a=e*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=a){const u=o[c]-a,h=this.curves[c],m=h.getLength(),p=m===0?0:1-u/m;return h.getPointAt(p,n)}c++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let a=0;a<=e;a++)n.push(this.getPoint(a/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let a;for(let o=0,c=this.curves;o<c.length;o++){const u=c[o],h=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,m=u.getPoints(h);for(let p=0;p<m.length;p++){const g=m[p];a&&a.equals(g)||(n.push(g),a=g)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,a=e.curves.length;n<a;n++){const o=e.curves[n];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,a=e.curves.length;n<a;n++){const o=e.curves[n];this.curves.push(new Sp[o.type]().fromJSON(o))}return this}}class yv extends T2{constructor(e){super(),this.type="Path",this.currentPoint=new Ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,a=e.length;n<a;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const a=new ty(this.currentPoint.clone(),new Ce(e,n));return this.curves.push(a),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,a,o){const c=new ny(this.currentPoint.clone(),new Ce(e,n),new Ce(a,o));return this.curves.push(c),this.currentPoint.set(a,o),this}bezierCurveTo(e,n,a,o,c,u){const h=new ey(this.currentPoint.clone(),new Ce(e,n),new Ce(a,o),new Ce(c,u));return this.curves.push(h),this.currentPoint.set(c,u),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),a=new iy(n);return this.curves.push(a),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,a,o,c,u){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(e+h,n+m,a,o,c,u),this}absarc(e,n,a,o,c,u){return this.absellipse(e,n,a,a,o,c,u),this}ellipse(e,n,a,o,c,u,h,m){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+p,n+g,a,o,c,u,h,m),this}absellipse(e,n,a,o,c,u,h,m){const p=new jp(e,n,a,o,c,u,h,m);if(this.curves.length>0){const x=p.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xu extends yv{constructor(e){super(e),this.uuid=$r(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,a=e.holes.length;n<a;n++){const o=e.holes[n];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,a=e.holes.length;n<a;n++){const o=e.holes[n];this.holes.push(new yv().fromJSON(o))}return this}}function A2(s,e,n=2){const a=e&&e.length,o=a?e[0]*n:s.length;let c=ay(s,0,o,n,!0);const u=[];if(!c||c.next===c.prev)return u;let h,m,p;if(a&&(c=D2(s,e,c,n)),s.length>80*n){h=s[0],m=s[1];let g=h,x=m;for(let v=n;v<o;v+=n){const b=s[v],E=s[v+1];b<h&&(h=b),E<m&&(m=E),b>g&&(g=b),E>x&&(x=E)}p=Math.max(g-h,x-m),p=p!==0?32767/p:0}return gl(c,u,n,h,m,p,0),u}function ay(s,e,n,a,o){let c;if(o===G2(s,e,n,a)>0)for(let u=e;u<n;u+=a)c=bv(u/a|0,s[u],s[u+1],c);else for(let u=n-a;u>=e;u-=a)c=bv(u/a|0,s[u],s[u+1],c);return c&&Kr(c,c.next)&&(_l(c),c=c.next),c}function Xs(s,e){if(!s)return s;e||(e=s);let n=s,a;do if(a=!1,!n.steiner&&(Kr(n,n.next)||an(n.prev,n,n.next)===0)){if(_l(n),n=e=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==e);return e}function gl(s,e,n,a,o,c,u){if(!s)return;!u&&c&&z2(s,a,o,c);let h=s;for(;s.prev!==s.next;){const m=s.prev,p=s.next;if(c?C2(s,a,o,c):w2(s)){e.push(m.i,s.i,p.i),_l(s),s=p.next,h=p.next;continue}if(s=p,s===h){u?u===1?(s=R2(Xs(s),e),gl(s,e,n,a,o,c,2)):u===2&&N2(s,e,n,a,o,c):gl(Xs(s),e,n,a,o,c,1);break}}}function w2(s){const e=s.prev,n=s,a=s.next;if(an(e,n,a)>=0)return!1;const o=e.x,c=n.x,u=a.x,h=e.y,m=n.y,p=a.y,g=Math.min(o,c,u),x=Math.min(h,m,p),v=Math.max(o,c,u),b=Math.max(h,m,p);let E=a.next;for(;E!==e;){if(E.x>=g&&E.x<=v&&E.y>=x&&E.y<=b&&rl(o,h,c,m,u,p,E.x,E.y)&&an(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function C2(s,e,n,a){const o=s.prev,c=s,u=s.next;if(an(o,c,u)>=0)return!1;const h=o.x,m=c.x,p=u.x,g=o.y,x=c.y,v=u.y,b=Math.min(h,m,p),E=Math.min(g,x,v),A=Math.max(h,m,p),M=Math.max(g,x,v),y=Mp(b,E,e,n,a),B=Mp(A,M,e,n,a);let w=s.prevZ,P=s.nextZ;for(;w&&w.z>=y&&P&&P.z<=B;){if(w.x>=b&&w.x<=A&&w.y>=E&&w.y<=M&&w!==o&&w!==u&&rl(h,g,m,x,p,v,w.x,w.y)&&an(w.prev,w,w.next)>=0||(w=w.prevZ,P.x>=b&&P.x<=A&&P.y>=E&&P.y<=M&&P!==o&&P!==u&&rl(h,g,m,x,p,v,P.x,P.y)&&an(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;w&&w.z>=y;){if(w.x>=b&&w.x<=A&&w.y>=E&&w.y<=M&&w!==o&&w!==u&&rl(h,g,m,x,p,v,w.x,w.y)&&an(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;P&&P.z<=B;){if(P.x>=b&&P.x<=A&&P.y>=E&&P.y<=M&&P!==o&&P!==u&&rl(h,g,m,x,p,v,P.x,P.y)&&an(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function R2(s,e){let n=s;do{const a=n.prev,o=n.next.next;!Kr(a,o)&&ry(a,n,n.next,o)&&vl(a,o)&&vl(o,a)&&(e.push(a.i,n.i,o.i),_l(n),_l(n.next),n=s=o),n=n.next}while(n!==s);return Xs(n)}function N2(s,e,n,a,o,c){let u=s;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&I2(u,h)){let m=oy(u,h);u=Xs(u,u.next),m=Xs(m,m.next),gl(u,e,n,a,o,c,0),gl(m,e,n,a,o,c,0);return}h=h.next}u=u.next}while(u!==s)}function D2(s,e,n,a){const o=[];for(let c=0,u=e.length;c<u;c++){const h=e[c]*a,m=c<u-1?e[c+1]*a:s.length,p=ay(s,h,m,a,!1);p===p.next&&(p.steiner=!0),o.push(F2(p))}o.sort(U2);for(let c=0;c<o.length;c++)n=L2(o[c],n);return n}function U2(s,e){let n=s.x-e.x;if(n===0&&(n=s.y-e.y,n===0)){const a=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);n=a-o}return n}function L2(s,e){const n=O2(s,e);if(!n)return e;const a=oy(n,s);return Xs(a,a.next),Xs(n,n.next)}function O2(s,e){let n=e;const a=s.x,o=s.y;let c=-1/0,u;if(Kr(s,n))return n;do{if(Kr(s,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const x=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(x<=a&&x>c&&(c=x,u=n.x<n.next.x?n:n.next,x===a))return u}n=n.next}while(n!==e);if(!u)return null;const h=u,m=u.x,p=u.y;let g=1/0;n=u;do{if(a>=n.x&&n.x>=m&&a!==n.x&&sy(o<p?a:c,o,m,p,o<p?c:a,o,n.x,n.y)){const x=Math.abs(o-n.y)/(a-n.x);vl(n,s)&&(x<g||x===g&&(n.x>u.x||n.x===u.x&&P2(u,n)))&&(u=n,g=x)}n=n.next}while(n!==h);return u}function P2(s,e){return an(s.prev,s,e.prev)<0&&an(e.next,s,s.next)<0}function z2(s,e,n,a){let o=s;do o.z===0&&(o.z=Mp(o.x,o.y,e,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,B2(o)}function B2(s){let e,n=1;do{let a=s,o;s=null;let c=null;for(e=0;a;){e++;let u=a,h=0;for(let p=0;p<n&&(h++,u=u.nextZ,!!u);p++);let m=n;for(;h>0||m>0&&u;)h!==0&&(m===0||!u||a.z<=u.z)?(o=a,a=a.nextZ,h--):(o=u,u=u.nextZ,m--),c?c.nextZ=o:s=o,o.prevZ=c,c=o;a=u}c.nextZ=null,n*=2}while(e>1);return s}function Mp(s,e,n,a,o){return s=(s-n)*o|0,e=(e-a)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function F2(s){let e=s,n=s;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==s);return n}function sy(s,e,n,a,o,c,u,h){return(o-u)*(e-h)>=(s-u)*(c-h)&&(s-u)*(a-h)>=(n-u)*(e-h)&&(n-u)*(c-h)>=(o-u)*(a-h)}function rl(s,e,n,a,o,c,u,h){return!(s===u&&e===h)&&sy(s,e,n,a,o,c,u,h)}function I2(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!H2(s,e)&&(vl(s,e)&&vl(e,s)&&V2(s,e)&&(an(s.prev,s,e.prev)||an(s,e.prev,e))||Kr(s,e)&&an(s.prev,s,s.next)>0&&an(e.prev,e,e.next)>0)}function an(s,e,n){return(e.y-s.y)*(n.x-e.x)-(e.x-s.x)*(n.y-e.y)}function Kr(s,e){return s.x===e.x&&s.y===e.y}function ry(s,e,n,a){const o=su(an(s,e,n)),c=su(an(s,e,a)),u=su(an(n,a,s)),h=su(an(n,a,e));return!!(o!==c&&u!==h||o===0&&au(s,n,e)||c===0&&au(s,a,e)||u===0&&au(n,s,a)||h===0&&au(n,e,a))}function au(s,e,n){return e.x<=Math.max(s.x,n.x)&&e.x>=Math.min(s.x,n.x)&&e.y<=Math.max(s.y,n.y)&&e.y>=Math.min(s.y,n.y)}function su(s){return s>0?1:s<0?-1:0}function H2(s,e){let n=s;do{if(n.i!==s.i&&n.next.i!==s.i&&n.i!==e.i&&n.next.i!==e.i&&ry(n,n.next,s,e))return!0;n=n.next}while(n!==s);return!1}function vl(s,e){return an(s.prev,s,s.next)<0?an(s,e,s.next)>=0&&an(s,s.prev,e)>=0:an(s,e,s.prev)<0||an(s,s.next,e)<0}function V2(s,e){let n=s,a=!1;const o=(s.x+e.x)/2,c=(s.y+e.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==s);return a}function oy(s,e){const n=Ep(s.i,s.x,s.y),a=Ep(e.i,e.x,e.y),o=s.next,c=e.prev;return s.next=e,e.prev=s,n.next=o,o.prev=n,a.next=n,n.prev=a,c.next=a,a.prev=c,a}function bv(s,e,n,a){const o=Ep(s,e,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function _l(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ep(s,e,n){return{i:s,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G2(s,e,n,a){let o=0;for(let c=e,u=n-a;c<n;c+=a)o+=(s[u]-s[c])*(s[c+1]+s[u+1]),u=c;return o}class k2{static triangulate(e,n,a=2){return A2(e,n,a)}}class Gr{static area(e){const n=e.length;let a=0;for(let o=n-1,c=0;c<n;o=c++)a+=e[o].x*e[c].y-e[c].x*e[o].y;return a*.5}static isClockWise(e){return Gr.area(e)<0}static triangulateShape(e,n){const a=[],o=[],c=[];Sv(e),Mv(a,e);let u=e.length;n.forEach(Sv);for(let m=0;m<n.length;m++)o.push(u),u+=n[m].length,Mv(a,n[m]);const h=k2.triangulate(a,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function Sv(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Mv(s,e){for(let n=0;n<e.length;n++)s.push(e[n].x),s.push(e[n].y)}class ul extends Ai{constructor(e=new xu([new Ce(.5,.5),new Ce(-.5,.5),new Ce(-.5,-.5),new Ce(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const a=this,o=[],c=[];for(let h=0,m=e.length;h<m;h++){const p=e[h];u(p)}this.setAttribute("position",new Bi(o,3)),this.setAttribute("uv",new Bi(c,2)),this.computeVertexNormals();function u(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,g=n.steps!==void 0?n.steps:1,x=n.depth!==void 0?n.depth:1;let v=n.bevelEnabled!==void 0?n.bevelEnabled:!0,b=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:b-.1,A=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const y=n.extrudePath,B=n.UVGenerator!==void 0?n.UVGenerator:j2;let w,P=!1,I,O,F,q;y&&(w=y.getSpacedPoints(g),P=!0,v=!1,I=y.computeFrenetFrames(g,!1),O=new X,F=new X,q=new X),v||(M=0,b=0,E=0,A=0);const D=h.extractPoints(p);let N=D.shape;const G=D.holes;if(!Gr.isClockWise(N)){N=N.reverse();for(let Se=0,L=G.length;Se<L;Se++){const Te=G[Se];Gr.isClockWise(Te)&&(G[Se]=Te.reverse())}}function oe(Se){const Te=10000000000000001e-36;let De=Se[0];for(let Le=1;Le<=Se.length;Le++){const we=Le%Se.length,qe=Se[we],Be=qe.x-De.x,Xe=qe.y-De.y,U=Be*Be+Xe*Xe,T=Math.max(Math.abs(qe.x),Math.abs(qe.y),Math.abs(De.x),Math.abs(De.y)),J=Te*T*T;if(U<=J){Se.splice(we,1),Le--;continue}De=qe}}oe(N),G.forEach(oe);const xe=G.length,ce=N;for(let Se=0;Se<xe;Se++){const L=G[Se];N=N.concat(L)}function H(Se,L,Te){return L||ln("ExtrudeGeometry: vec does not exist"),Se.clone().addScaledVector(L,Te)}const W=N.length;function K(Se,L,Te){let De,Le,we;const qe=Se.x-L.x,Be=Se.y-L.y,Xe=Te.x-Se.x,U=Te.y-Se.y,T=qe*qe+Be*Be,J=qe*U-Be*Xe;if(Math.abs(J)>Number.EPSILON){const de=Math.sqrt(T),Me=Math.sqrt(Xe*Xe+U*U),ue=L.x-Be/de,tt=L.y+qe/de,Fe=Te.x-U/Me,it=Te.y+Xe/Me,$e=((Fe-ue)*U-(it-tt)*Xe)/(qe*U-Be*Xe);De=ue+qe*$e-Se.x,Le=tt+Be*$e-Se.y;const Ee=De*De+Le*Le;if(Ee<=2)return new Ce(De,Le);we=Math.sqrt(Ee/2)}else{let de=!1;qe>Number.EPSILON?Xe>Number.EPSILON&&(de=!0):qe<-Number.EPSILON?Xe<-Number.EPSILON&&(de=!0):Math.sign(Be)===Math.sign(U)&&(de=!0),de?(De=-Be,Le=qe,we=Math.sqrt(T)):(De=qe,Le=Be,we=Math.sqrt(T/2))}return new Ce(De/we,Le/we)}const fe=[];for(let Se=0,L=ce.length,Te=L-1,De=Se+1;Se<L;Se++,Te++,De++)Te===L&&(Te=0),De===L&&(De=0),fe[Se]=K(ce[Se],ce[Te],ce[De]);const ge=[];let z,ae=fe.concat();for(let Se=0,L=xe;Se<L;Se++){const Te=G[Se];z=[];for(let De=0,Le=Te.length,we=Le-1,qe=De+1;De<Le;De++,we++,qe++)we===Le&&(we=0),qe===Le&&(qe=0),z[De]=K(Te[De],Te[we],Te[qe]);ge.push(z),ae=ae.concat(z)}let be;if(M===0)be=Gr.triangulateShape(ce,G);else{const Se=[],L=[];for(let Te=0;Te<M;Te++){const De=Te/M,Le=b*Math.cos(De*Math.PI/2),we=E*Math.sin(De*Math.PI/2)+A;for(let qe=0,Be=ce.length;qe<Be;qe++){const Xe=H(ce[qe],fe[qe],we);Ge(Xe.x,Xe.y,-Le),De===0&&Se.push(Xe)}for(let qe=0,Be=xe;qe<Be;qe++){const Xe=G[qe];z=ge[qe];const U=[];for(let T=0,J=Xe.length;T<J;T++){const de=H(Xe[T],z[T],we);Ge(de.x,de.y,-Le),De===0&&U.push(de)}De===0&&L.push(U)}}be=Gr.triangulateShape(Se,L)}const Ne=be.length,ke=E+A;for(let Se=0;Se<W;Se++){const L=v?H(N[Se],ae[Se],ke):N[Se];P?(F.copy(I.normals[0]).multiplyScalar(L.x),O.copy(I.binormals[0]).multiplyScalar(L.y),q.copy(w[0]).add(F).add(O),Ge(q.x,q.y,q.z)):Ge(L.x,L.y,0)}for(let Se=1;Se<=g;Se++)for(let L=0;L<W;L++){const Te=v?H(N[L],ae[L],ke):N[L];P?(F.copy(I.normals[Se]).multiplyScalar(Te.x),O.copy(I.binormals[Se]).multiplyScalar(Te.y),q.copy(w[Se]).add(F).add(O),Ge(q.x,q.y,q.z)):Ge(Te.x,Te.y,x/g*Se)}for(let Se=M-1;Se>=0;Se--){const L=Se/M,Te=b*Math.cos(L*Math.PI/2),De=E*Math.sin(L*Math.PI/2)+A;for(let Le=0,we=ce.length;Le<we;Le++){const qe=H(ce[Le],fe[Le],De);Ge(qe.x,qe.y,x+Te)}for(let Le=0,we=G.length;Le<we;Le++){const qe=G[Le];z=ge[Le];for(let Be=0,Xe=qe.length;Be<Xe;Be++){const U=H(qe[Be],z[Be],De);P?Ge(U.x,U.y+w[g-1].y,w[g-1].x+Te):Ge(U.x,U.y,x+Te)}}}se(),he();function se(){const Se=o.length/3;if(v){let L=0,Te=W*L;for(let De=0;De<Ne;De++){const Le=be[De];Qe(Le[2]+Te,Le[1]+Te,Le[0]+Te)}L=g+M*2,Te=W*L;for(let De=0;De<Ne;De++){const Le=be[De];Qe(Le[0]+Te,Le[1]+Te,Le[2]+Te)}}else{for(let L=0;L<Ne;L++){const Te=be[L];Qe(Te[2],Te[1],Te[0])}for(let L=0;L<Ne;L++){const Te=be[L];Qe(Te[0]+W*g,Te[1]+W*g,Te[2]+W*g)}}a.addGroup(Se,o.length/3-Se,0)}function he(){const Se=o.length/3;let L=0;ze(ce,L),L+=ce.length;for(let Te=0,De=G.length;Te<De;Te++){const Le=G[Te];ze(Le,L),L+=Le.length}a.addGroup(Se,o.length/3-Se,1)}function ze(Se,L){let Te=Se.length;for(;--Te>=0;){const De=Te;let Le=Te-1;Le<0&&(Le=Se.length-1);for(let we=0,qe=g+M*2;we<qe;we++){const Be=W*we,Xe=W*(we+1),U=L+De+Be,T=L+Le+Be,J=L+Le+Xe,de=L+De+Xe;mt(U,T,J,de)}}}function Ge(Se,L,Te){m.push(Se),m.push(L),m.push(Te)}function Qe(Se,L,Te){zt(Se),zt(L),zt(Te);const De=o.length/3,Le=B.generateTopUV(a,o,De-3,De-2,De-1);ct(Le[0]),ct(Le[1]),ct(Le[2])}function mt(Se,L,Te,De){zt(Se),zt(L),zt(De),zt(L),zt(Te),zt(De);const Le=o.length/3,we=B.generateSideWallUV(a,o,Le-6,Le-3,Le-2,Le-1);ct(we[0]),ct(we[1]),ct(we[3]),ct(we[1]),ct(we[2]),ct(we[3])}function zt(Se){o.push(m[Se*3+0]),o.push(m[Se*3+1]),o.push(m[Se*3+2])}function ct(Se){c.push(Se.x),c.push(Se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return X2(n,a,e)}static fromJSON(e,n){const a=[];for(let c=0,u=e.shapes.length;c<u;c++){const h=n[e.shapes[c]];a.push(h)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new Sp[o.type]().fromJSON(o)),new ul(a,e.options)}}const j2={generateTopUV:function(s,e,n,a,o){const c=e[n*3],u=e[n*3+1],h=e[a*3],m=e[a*3+1],p=e[o*3],g=e[o*3+1];return[new Ce(c,u),new Ce(h,m),new Ce(p,g)]},generateSideWallUV:function(s,e,n,a,o,c){const u=e[n*3],h=e[n*3+1],m=e[n*3+2],p=e[a*3],g=e[a*3+1],x=e[a*3+2],v=e[o*3],b=e[o*3+1],E=e[o*3+2],A=e[c*3],M=e[c*3+1],y=e[c*3+2];return Math.abs(h-g)<Math.abs(u-p)?[new Ce(u,1-m),new Ce(p,1-x),new Ce(v,1-E),new Ce(A,1-y)]:[new Ce(h,1-m),new Ce(g,1-x),new Ce(b,1-E),new Ce(M,1-y)]}};function X2(s,e,n){if(n.shapes=[],Array.isArray(s))for(let a=0,o=s.length;a<o;a++){const c=s[a];n.shapes.push(c.uuid)}else n.shapes.push(s.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Cu extends Ai{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,h=Math.floor(a),m=Math.floor(o),p=h+1,g=m+1,x=e/h,v=n/m,b=[],E=[],A=[],M=[];for(let y=0;y<g;y++){const B=y*v-u;for(let w=0;w<p;w++){const P=w*x-c;E.push(P,-B,0),A.push(0,0,1),M.push(w/h),M.push(1-y/m)}}for(let y=0;y<m;y++)for(let B=0;B<h;B++){const w=B+p*y,P=B+p*(y+1),I=B+1+p*(y+1),O=B+1+p*y;b.push(w,P,O),b.push(P,I,O)}this.setIndex(b),this.setAttribute("position",new Bi(E,3)),this.setAttribute("normal",new Bi(A,3)),this.setAttribute("uv",new Bi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cu(e.width,e.height,e.widthSegments,e.heightSegments)}}class W2 extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=H_,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _d extends W2{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class q2 extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y2 extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Wp extends On{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const yd=new tn,Ev=new X,Tv=new X;class ly{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kp,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Ev.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ev),Tv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tv),n.updateMatrixWorld(),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Av=new tn,il=new X,bd=new X;class Z2 extends ly{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ce(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,n=0){const a=this.camera,o=this.matrix,c=e.distance||a.far;c!==a.far&&(a.far=c,a.updateProjectionMatrix()),il.setFromMatrixPosition(e.matrixWorld),a.position.copy(il),bd.copy(a.position),bd.add(this._cubeDirections[n]),a.up.copy(this._cubeUps[n]),a.lookAt(bd),a.updateMatrixWorld(),o.makeTranslation(-il.x,-il.y,-il.z),Av.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Av,a.coordinateSystem,a.reversedDepth)}}class wv extends Wp{constructor(e,n,a=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=o,this.shadow=new Z2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qp extends Z_{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class K2 extends ly{constructor(){super(new qp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Q2 extends Wp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new K2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class J2 extends Wp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class $2 extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class eE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class Cv{constructor(e=1,n=0,a=0){this.radius=e,this.phi=n,this.theta=a}set(e,n,a){return this.radius=e,this.phi=n,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=St(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,a){return this.radius=Math.sqrt(e*e+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(St(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tE extends qs{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){pt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Rv(s,e,n,a){const o=nE(a);switch(n){case B_:return s*e;case I_:return s*e/o.components*o.byteLength;case zp:return s*e/o.components*o.byteLength;case Bp:return s*e*2/o.components*o.byteLength;case Fp:return s*e*2/o.components*o.byteLength;case F_:return s*e*3/o.components*o.byteLength;case Mi:return s*e*4/o.components*o.byteLength;case Ip:return s*e*4/o.components*o.byteLength;case fu:case hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case du:case pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:case Zd:return Math.max(s,16)*Math.max(e,8)/4;case Wd:case Yd:return Math.max(s,8)*Math.max(e,8)/2;case Kd:case Qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case tp:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case np:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ip:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ap:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case sp:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case op:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case lp:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case cp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case up:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fp:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case hp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case dp:case pp:case mp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xp:case gp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vp:case _p:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nE(s){switch(s){case qi:case L_:return{byteLength:1,components:1};case hl:case O_:case Wi:return{byteLength:2,components:1};case Op:case Pp:return{byteLength:2,components:4};case ks:case Lp:case Aa:return{byteLength:4,components:1};case P_:case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Up}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Up);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cy(){let s=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function iE(s){const e=new WeakMap;function n(h,m){const p=h.array,g=h.usage,x=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),h.onUploadCallback();let b;if(p instanceof Float32Array)b=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=s.HALF_FLOAT:b=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=s.SHORT;else if(p instanceof Uint32Array)b=s.UNSIGNED_INT;else if(p instanceof Int32Array)b=s.INT;else if(p instanceof Int8Array)b=s.BYTE;else if(p instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function a(h,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,h),x.length===0)s.bufferSubData(p,0,g);else{x.sort((b,E)=>b.start-E.start);let v=0;for(let b=1;b<x.length;b++){const E=x[v],A=x[b];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let b=0,E=x.length;b<E;b++){const A=x[b];s.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function u(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:u}}var aE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sE=`#ifdef USE_ALPHAHASH
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
#endif`,rE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uE=`#ifdef USE_AOMAP
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
#endif`,fE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hE=`#ifdef USE_BATCHING
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
#endif`,dE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gE=`#ifdef USE_IRIDESCENCE
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
#endif`,vE=`#ifdef USE_BUMPMAP
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wE=`#define PI 3.141592653589793
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
} // validated`,CE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RE=`vec3 transformedNormal = objectNormal;
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
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OE="gl_FragColor = linearToOutputTexel( gl_FragColor );",PE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zE=`#ifdef USE_ENVMAP
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
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
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
#endif`,VE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XE=`#ifdef USE_GRADIENTMAP
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
}`,WE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZE=`uniform bool receiveShadow;
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
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,QE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$E=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tT=`PhysicalMaterial material;
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
#endif`,nT=`uniform sampler2D dfgLUT;
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
}`,iT=`
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
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
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dT=`#if defined( USE_POINTS_UV )
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
#endif`,pT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_T=`#ifdef USE_MORPHTARGETS
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
#endif`,yT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ST=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,MT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ET=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AT=`#ifdef USE_NORMALMAP
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
#endif`,wT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,LT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GT=`float getShadowMask() {
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
}`,kT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jT=`#ifdef USE_SKINNING
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
#endif`,XT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WT=`#ifdef USE_SKINNING
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
#endif`,qT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QT=`#ifdef USE_TRANSMISSION
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
#endif`,JT=`#ifdef USE_TRANSMISSION
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
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
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`#include <common>
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
}`,uA=`#if DEPTH_PACKING == 3200
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
}`,fA=`#define DISTANCE
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
}`,hA=`#define DISTANCE
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
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
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
}`,xA=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,vA=`uniform vec3 diffuse;
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
}`,_A=`#define LAMBERT
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
}`,yA=`#define LAMBERT
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
}`,bA=`#define MATCAP
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
}`,SA=`#define MATCAP
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
}`,MA=`#define NORMAL
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
}`,EA=`#define NORMAL
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
}`,TA=`#define PHONG
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
}`,AA=`#define PHONG
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
}`,wA=`#define STANDARD
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
}`,CA=`#define STANDARD
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
}`,RA=`#define TOON
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
}`,NA=`#define TOON
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
}`,DA=`uniform float size;
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
}`,UA=`uniform vec3 diffuse;
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
}`,LA=`#include <common>
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
}`,OA=`uniform vec3 color;
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
}`,PA=`uniform float rotation;
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
}`,zA=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:aE,alphahash_pars_fragment:sE,alphamap_fragment:rE,alphamap_pars_fragment:oE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:fE,batching_pars_vertex:hE,batching_vertex:dE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:xE,iridescence_fragment:gE,bumpmap_pars_fragment:vE,clipping_planes_fragment:_E,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:bE,clipping_planes_vertex:SE,color_fragment:ME,color_pars_fragment:EE,color_pars_vertex:TE,color_vertex:AE,common:wE,cube_uv_reflection_fragment:CE,defaultnormal_vertex:RE,displacementmap_pars_vertex:NE,displacementmap_vertex:DE,emissivemap_fragment:UE,emissivemap_pars_fragment:LE,colorspace_fragment:OE,colorspace_pars_fragment:PE,envmap_fragment:zE,envmap_common_pars_fragment:BE,envmap_pars_fragment:FE,envmap_pars_vertex:IE,envmap_physical_pars_fragment:KE,envmap_vertex:HE,fog_vertex:VE,fog_pars_vertex:GE,fog_fragment:kE,fog_pars_fragment:jE,gradientmap_pars_fragment:XE,lightmap_pars_fragment:WE,lights_lambert_fragment:qE,lights_lambert_pars_fragment:YE,lights_pars_begin:ZE,lights_toon_fragment:QE,lights_toon_pars_fragment:JE,lights_phong_fragment:$E,lights_phong_pars_fragment:eT,lights_physical_fragment:tT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:aT,lights_fragment_end:sT,logdepthbuf_fragment:rT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:lT,logdepthbuf_vertex:cT,map_fragment:uT,map_pars_fragment:fT,map_particle_fragment:hT,map_particle_pars_fragment:dT,metalnessmap_fragment:pT,metalnessmap_pars_fragment:mT,morphinstance_vertex:xT,morphcolor_vertex:gT,morphnormal_vertex:vT,morphtarget_pars_vertex:_T,morphtarget_vertex:yT,normal_fragment_begin:bT,normal_fragment_maps:ST,normal_pars_fragment:MT,normal_pars_vertex:ET,normal_vertex:TT,normalmap_pars_fragment:AT,clearcoat_normal_fragment_begin:wT,clearcoat_normal_fragment_maps:CT,clearcoat_pars_fragment:RT,iridescence_pars_fragment:NT,opaque_fragment:DT,packing:UT,premultiplied_alpha_fragment:LT,project_vertex:OT,dithering_fragment:PT,dithering_pars_fragment:zT,roughnessmap_fragment:BT,roughnessmap_pars_fragment:FT,shadowmap_pars_fragment:IT,shadowmap_pars_vertex:HT,shadowmap_vertex:VT,shadowmask_pars_fragment:GT,skinbase_vertex:kT,skinning_pars_vertex:jT,skinning_vertex:XT,skinnormal_vertex:WT,specularmap_fragment:qT,specularmap_pars_fragment:YT,tonemapping_fragment:ZT,tonemapping_pars_fragment:KT,transmission_fragment:QT,transmission_pars_fragment:JT,uv_pars_fragment:$T,uv_pars_vertex:eA,uv_vertex:tA,worldpos_vertex:nA,background_vert:iA,background_frag:aA,backgroundCube_vert:sA,backgroundCube_frag:rA,cube_vert:oA,cube_frag:lA,depth_vert:cA,depth_frag:uA,distanceRGBA_vert:fA,distanceRGBA_frag:hA,equirect_vert:dA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:xA,meshbasic_vert:gA,meshbasic_frag:vA,meshlambert_vert:_A,meshlambert_frag:yA,meshmatcap_vert:bA,meshmatcap_frag:SA,meshnormal_vert:MA,meshnormal_frag:EA,meshphong_vert:TA,meshphong_frag:AA,meshphysical_vert:wA,meshphysical_frag:CA,meshtoon_vert:RA,meshtoon_frag:NA,points_vert:DA,points_frag:UA,shadow_vert:LA,shadow_frag:OA,sprite_vert:PA,sprite_frag:zA},Ve={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ki={basic:{uniforms:Hn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Hn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new yt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Hn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Hn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Hn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new yt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Hn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Hn([Ve.points,Ve.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Hn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Hn([Ve.common,Ve.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Hn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Hn([Ve.sprite,Ve.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distanceRGBA:{uniforms:Hn([Ve.common,Ve.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distanceRGBA_vert,fragmentShader:bt.distanceRGBA_frag},shadow:{uniforms:Hn([Ve.lights,Ve.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};ki.physical={uniforms:Hn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const ru={r:0,b:0,g:0},Bs=new Yi,BA=new tn;function FA(s,e,n,a,o,c,u){const h=new yt(0);let m=c===!0?0:1,p,g,x=null,v=0,b=null;function E(w){let P=w.isScene===!0?w.background:null;return P&&P.isTexture&&(P=(w.backgroundBlurriness>0?n:e).get(P)),P}function A(w){let P=!1;const I=E(w);I===null?y(h,m):I&&I.isColor&&(y(I,1),P=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(w,P){const I=E(P);I&&(I.isCubeTexture||I.mapping===Au)?(g===void 0&&(g=new fi(new Ml(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Zr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Bs.copy(P.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(Bs)),g.material.toneMapped=Pt.getTransfer(I.colorSpace)!==Xt,(x!==I||v!==I.version||b!==s.toneMapping)&&(g.material.needsUpdate=!0,x=I,v=I.version,b=s.toneMapping),g.layers.enableAll(),w.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new fi(new Cu(2,2),new Vn({name:"BackgroundMaterial",uniforms:Zr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(I.colorSpace)!==Xt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(x!==I||v!==I.version||b!==s.toneMapping)&&(p.material.needsUpdate=!0,x=I,v=I.version,b=s.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function y(w,P){w.getRGB(ru,Y_(s)),a.buffers.color.setClear(ru.r,ru.g,ru.b,P,u)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(w,P=1){h.set(w),m=P,y(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,y(h,m)},render:A,addToRenderList:M,dispose:B}}function IA(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},o=v(null);let c=o,u=!1;function h(N,G,ne,oe,xe){let ce=!1;const H=x(oe,ne,G);c!==H&&(c=H,p(c.object)),ce=b(N,oe,ne,xe),ce&&E(N,oe,ne,xe),xe!==null&&e.update(xe,s.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,P(N,G,ne,oe),xe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function m(){return s.createVertexArray()}function p(N){return s.bindVertexArray(N)}function g(N){return s.deleteVertexArray(N)}function x(N,G,ne){const oe=ne.wireframe===!0;let xe=a[N.id];xe===void 0&&(xe={},a[N.id]=xe);let ce=xe[G.id];ce===void 0&&(ce={},xe[G.id]=ce);let H=ce[oe];return H===void 0&&(H=v(m()),ce[oe]=H),H}function v(N){const G=[],ne=[],oe=[];for(let xe=0;xe<n;xe++)G[xe]=0,ne[xe]=0,oe[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ne,attributeDivisors:oe,object:N,attributes:{},index:null}}function b(N,G,ne,oe){const xe=c.attributes,ce=G.attributes;let H=0;const W=ne.getAttributes();for(const K in W)if(W[K].location>=0){const ge=xe[K];let z=ce[K];if(z===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(z=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(z=N.instanceColor)),ge===void 0||ge.attribute!==z||z&&ge.data!==z.data)return!0;H++}return c.attributesNum!==H||c.index!==oe}function E(N,G,ne,oe){const xe={},ce=G.attributes;let H=0;const W=ne.getAttributes();for(const K in W)if(W[K].location>=0){let ge=ce[K];ge===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(ge=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(ge=N.instanceColor));const z={};z.attribute=ge,ge&&ge.data&&(z.data=ge.data),xe[K]=z,H++}c.attributes=xe,c.attributesNum=H,c.index=oe}function A(){const N=c.newAttributes;for(let G=0,ne=N.length;G<ne;G++)N[G]=0}function M(N){y(N,0)}function y(N,G){const ne=c.newAttributes,oe=c.enabledAttributes,xe=c.attributeDivisors;ne[N]=1,oe[N]===0&&(s.enableVertexAttribArray(N),oe[N]=1),xe[N]!==G&&(s.vertexAttribDivisor(N,G),xe[N]=G)}function B(){const N=c.newAttributes,G=c.enabledAttributes;for(let ne=0,oe=G.length;ne<oe;ne++)G[ne]!==N[ne]&&(s.disableVertexAttribArray(ne),G[ne]=0)}function w(N,G,ne,oe,xe,ce,H){H===!0?s.vertexAttribIPointer(N,G,ne,xe,ce):s.vertexAttribPointer(N,G,ne,oe,xe,ce)}function P(N,G,ne,oe){A();const xe=oe.attributes,ce=ne.getAttributes(),H=G.defaultAttributeValues;for(const W in ce){const K=ce[W];if(K.location>=0){let fe=xe[W];if(fe===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(fe=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(fe=N.instanceColor)),fe!==void 0){const ge=fe.normalized,z=fe.itemSize,ae=e.get(fe);if(ae===void 0)continue;const be=ae.buffer,Ne=ae.type,ke=ae.bytesPerElement,se=Ne===s.INT||Ne===s.UNSIGNED_INT||fe.gpuType===Lp;if(fe.isInterleavedBufferAttribute){const he=fe.data,ze=he.stride,Ge=fe.offset;if(he.isInstancedInterleavedBuffer){for(let Qe=0;Qe<K.locationSize;Qe++)y(K.location+Qe,he.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Qe=0;Qe<K.locationSize;Qe++)M(K.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Qe=0;Qe<K.locationSize;Qe++)w(K.location+Qe,z/K.locationSize,Ne,ge,ze*ke,(Ge+z/K.locationSize*Qe)*ke,se)}else{if(fe.isInstancedBufferAttribute){for(let he=0;he<K.locationSize;he++)y(K.location+he,fe.meshPerAttribute);N.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let he=0;he<K.locationSize;he++)M(K.location+he);s.bindBuffer(s.ARRAY_BUFFER,be);for(let he=0;he<K.locationSize;he++)w(K.location+he,z/K.locationSize,Ne,ge,z*ke,z/K.locationSize*he*ke,se)}}else if(H!==void 0){const ge=H[W];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(K.location,ge);break;case 3:s.vertexAttrib3fv(K.location,ge);break;case 4:s.vertexAttrib4fv(K.location,ge);break;default:s.vertexAttrib1fv(K.location,ge)}}}}B()}function I(){q();for(const N in a){const G=a[N];for(const ne in G){const oe=G[ne];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete G[ne]}delete a[N]}}function O(N){if(a[N.id]===void 0)return;const G=a[N.id];for(const ne in G){const oe=G[ne];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete G[ne]}delete a[N.id]}function F(N){for(const G in a){const ne=a[G];if(ne[N.id]===void 0)continue;const oe=ne[N.id];for(const xe in oe)g(oe[xe].object),delete oe[xe];delete ne[N.id]}}function q(){D(),u=!0,c!==o&&(c=o,p(c.object))}function D(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:q,resetDefaultState:D,dispose:I,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:M,disableUnusedAttributes:B}}function HA(s,e,n){let a;function o(p){a=p}function c(p,g){s.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,x){x!==0&&(s.drawArraysInstanced(a,p,g,x),n.update(g,a,x))}function h(p,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,x);let b=0;for(let E=0;E<x;E++)b+=g[E];n.update(b,a,1)}function m(p,g,x,v){if(x===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<p.length;E++)u(p[E],g[E],v[E]);else{b.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function VA(s,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Mi&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const q=F===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==qi&&a.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Aa&&!q)}function m(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(pt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:B,maxVaryings:w,maxFragmentUniforms:P,vertexTextures:I,maxSamples:O}}function GA(s){const e=this;let n=null,a=0,o=!1,c=!1;const u=new us,h=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const b=x.length!==0||v||a!==0||o;return o=v,a=x.length,b},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){n=g(x,v,0)},this.setState=function(x,v,b){const E=x.clippingPlanes,A=x.clipIntersection,M=x.clipShadows,y=s.get(x);if(!o||E===null||E.length===0||c&&!M)c?g(null):p();else{const B=c?0:a,w=B*4;let P=y.clippingState||null;m.value=P,P=g(E,v,w,b);for(let I=0;I!==w;++I)P[I]=n[I];y.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(x,v,b,E){const A=x!==null?x.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const y=b+A*4,B=v.matrixWorldInverse;h.getNormalMatrix(B),(M===null||M.length<y)&&(M=new Float32Array(y));for(let w=0,P=b;w!==A;++w,P+=4)u.copy(x[w]).applyMatrix4(B,h),u.normal.toArray(M,P),M[P+3]=u.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function kA(s){let e=new WeakMap;function n(u,h){return h===Gd?u.mapping=Wr:h===kd&&(u.mapping=qr),u}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Gd||h===kd)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new s2(m.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const hs=4,Nv=[.125,.215,.35,.446,.526,.582],Hs=20,jA=256,al=new qp,Dv=new yt;let Sd=null,Md=0,Ed=0,Td=!1;const XA=new X;class Uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:h=XA}=c;Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Md,Ed),this._renderer.xr.enabled=Td,e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Wi,format:Mi,colorSpace:Yr,depthBuffer:!1},o=Lv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WA(c)),this._blurMaterial=YA(c,e,n),this._ggxMaterial=qA(c,e,n)}return o}_compileMaterial(e){const n=new fi(new Ai,e);this._renderer.compile(n,al)}_sceneToCubeUV(e,n,a,o,c){const m=new ui(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,b=x.toneMapping;x.getClearColor(Dv),x.toneMapping=ds,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fi(new Ml,new Gp({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let y=!1;const B=e.background;B?B.isColor&&(M.color.copy(B),e.background=null,y=!0):(M.color.copy(Dv),y=!0);for(let w=0;w<6;w++){const P=w%3;P===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[w],c.y,c.z)):P===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[w]));const I=this._cubeSize;Hr(o,P*I,w>2?I:0,I,I),x.setRenderTarget(o),y&&x.render(A,m),x.render(e,m)}x.toneMapping=b,x.autoClear=v,e.background=B}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Wr||e.mapping===qr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ov());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Hr(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,al)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[a];h.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),v=.05+p*.95,b=x*v,{_lodMax:E}=this,A=this._sizeLods[a],M=3*A*(a>E-hs?a-E+hs:0),y=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-n,Hr(c,M,y,3*A,2*A),o.setRenderTarget(c),o.render(h,al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,Hr(e,M,y,3*A,2*A),o.setRenderTarget(e),o.render(h,al)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,h){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&ln("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[o];x.material=p;const v=p.uniforms,b=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Hs-1),A=c/E,M=isFinite(c)?1+Math.floor(g*A):Hs;M>Hs&&pt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hs}`);const y=[];let B=0;for(let F=0;F<Hs;++F){const q=F/A,D=Math.exp(-q*q/2);y.push(D),F===0?B+=D:F<M&&(B+=2*D)}for(let F=0;F<y.length;F++)y[F]=y[F]/B;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=y,v.latitudinal.value=u==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:w}=this;v.dTheta.value=E,v.mipInt.value=w-a;const P=this._sizeLods[o],I=3*P*(o>w-hs?o-w+hs:0),O=4*(this._cubeSize-P);Hr(n,I,O,3*P,2*P),m.setRenderTarget(n),m.render(x,al)}}function WA(s){const e=[],n=[],a=[];let o=s;const c=s-hs+1+Nv.length;for(let u=0;u<c;u++){const h=Math.pow(2,o);e.push(h);let m=1/h;u>s-hs?m=Nv[u-s+hs-1]:u===0&&(m=0),n.push(m);const p=1/(h-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],b=6,E=6,A=3,M=2,y=1,B=new Float32Array(A*E*b),w=new Float32Array(M*E*b),P=new Float32Array(y*E*b);for(let O=0;O<b;O++){const F=O%3*2/3-1,q=O>2?0:-1,D=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];B.set(D,A*E*O),w.set(v,M*E*O);const N=[O,O,O,O,O,O];P.set(N,y*E*O)}const I=new Ai;I.setAttribute("position",new zi(B,A)),I.setAttribute("uv",new zi(w,M)),I.setAttribute("faceIndex",new zi(P,y)),a.push(new fi(I,null)),o>hs&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Lv(s,e,n){const a=new Ei(s,e,n);return a.texture.mapping=Au,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Hr(s,e,n,a,o){s.viewport.set(e,n,a,o),s.scissor.set(e,n,a,o)}function qA(s,e,n){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function YA(s,e,n){const a=new Float32Array(Hs),o=new X(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ov(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Pv(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function ZA(s){let e=new WeakMap,n=null;function a(h){if(h&&h.isTexture){const m=h.mapping,p=m===Gd||m===kd,g=m===Wr||m===qr;if(p||g){let x=e.get(h);const v=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return n===null&&(n=new Uv(s)),x=p?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const b=h.image;return p&&b&&b.height>0||g&&b&&o(b)?(n===null&&(n=new Uv(s)),x=p?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function o(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function KA(s){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=s.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&xl("WebGLRenderer: "+a+" extension not supported."),o}}}function QA(s,e,n,a){const o={},c=new WeakMap;function u(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const b=c.get(v);b&&(e.remove(b),c.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function h(x,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,n.memory.geometries++),v}function m(x){const v=x.attributes;for(const b in v)e.update(v[b],s.ARRAY_BUFFER)}function p(x){const v=[],b=x.index,E=x.attributes.position;let A=0;if(b!==null){const B=b.array;A=b.version;for(let w=0,P=B.length;w<P;w+=3){const I=B[w+0],O=B[w+1],F=B[w+2];v.push(I,O,O,F,F,I)}}else if(E!==void 0){const B=E.array;A=E.version;for(let w=0,P=B.length/3-1;w<P;w+=3){const I=w+0,O=w+1,F=w+2;v.push(I,O,O,F,F,I)}}else return;const M=new(G_(v)?q_:W_)(v,1);M.version=A;const y=c.get(x);y&&e.remove(y),c.set(x,M)}function g(x){const v=c.get(x);if(v){const b=x.index;b!==null&&v.version<b.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function JA(s,e,n){let a;function o(v){a=v}let c,u;function h(v){c=v.type,u=v.bytesPerElement}function m(v,b){s.drawElements(a,b,c,v*u),n.update(b,a,1)}function p(v,b,E){E!==0&&(s.drawElementsInstanced(a,b,c,v*u,E),n.update(b,a,E))}function g(v,b,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,b,0,c,v,0,E);let M=0;for(let y=0;y<E;y++)M+=b[y];n.update(M,a,1)}function x(v,b,E,A){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<v.length;y++)p(v[y]/u,b[y],A[y]);else{M.multiDrawElementsInstancedWEBGL(a,b,0,c,v,0,A,0,E);let y=0;for(let B=0;B<E;B++)y+=b[B]*A[B];n.update(y,a,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function $A(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,h){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=h*(c/3);break;case s.LINES:n.lines+=h*(c/2);break;case s.LINE_STRIP:n.lines+=h*(c-1);break;case s.LINE_LOOP:n.lines+=h*c;break;case s.POINTS:n.points+=h*c;break;default:ln("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function ew(s,e,n){const a=new WeakMap,o=new qt;function c(u,h,m){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let v=a.get(h);if(v===void 0||v.count!==x){let N=function(){q.dispose(),a.delete(h),h.removeEventListener("dispose",N)};var b=N;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let P=0;E===!0&&(P=1),A===!0&&(P=2),M===!0&&(P=3);let I=h.attributes.position.count*P,O=1;I>e.maxTextureSize&&(O=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*O*4*x),q=new k_(F,I,O,x);q.type=Aa,q.needsUpdate=!0;const D=P*4;for(let G=0;G<x;G++){const ne=y[G],oe=B[G],xe=w[G],ce=I*O*4*G;for(let H=0;H<ne.count;H++){const W=H*D;E===!0&&(o.fromBufferAttribute(ne,H),F[ce+W+0]=o.x,F[ce+W+1]=o.y,F[ce+W+2]=o.z,F[ce+W+3]=0),A===!0&&(o.fromBufferAttribute(oe,H),F[ce+W+4]=o.x,F[ce+W+5]=o.y,F[ce+W+6]=o.z,F[ce+W+7]=0),M===!0&&(o.fromBufferAttribute(xe,H),F[ce+W+8]=o.x,F[ce+W+9]=o.y,F[ce+W+10]=o.z,F[ce+W+11]=xe.itemSize===4?o.w:1)}}v={count:x,texture:q,size:new Ce(I,O)},a.set(h,v),h.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",A),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function tw(s,e,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,x=e.get(m,g);if(o.get(x)!==p&&(e.update(x),o.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==p&&(v.update(),o.set(v,p))}return x}function u(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const uy=new Gn,zv=new J_(1,1),fy=new k_,hy=new k3,dy=new K_,Bv=[],Fv=[],Iv=new Float32Array(16),Hv=new Float32Array(9),Vv=new Float32Array(4);function to(s,e,n){const a=s[0];if(a<=0||a>0)return s;const o=e*n;let c=Bv[o];if(c===void 0&&(c=new Float32Array(o),Bv[o]=c),e!==0){a.toArray(c,0);for(let u=1,h=0;u!==e;++u)h+=n,s[u].toArray(c,h)}return c}function Sn(s,e){if(s.length!==e.length)return!1;for(let n=0,a=s.length;n<a;n++)if(s[n]!==e[n])return!1;return!0}function Mn(s,e){for(let n=0,a=e.length;n<a;n++)s[n]=e[n]}function Nu(s,e){let n=Fv[e];n===void 0&&(n=new Int32Array(e),Fv[e]=n);for(let a=0;a!==e;++a)n[a]=s.allocateTextureUnit();return n}function nw(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function iw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;s.uniform2fv(this.addr,e),Mn(n,e)}}function aw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Sn(n,e))return;s.uniform3fv(this.addr,e),Mn(n,e)}}function sw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;s.uniform4fv(this.addr,e),Mn(n,e)}}function rw(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Sn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(n,e)}else{if(Sn(n,a))return;Vv.set(a),s.uniformMatrix2fv(this.addr,!1,Vv),Mn(n,a)}}function ow(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Sn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(n,e)}else{if(Sn(n,a))return;Hv.set(a),s.uniformMatrix3fv(this.addr,!1,Hv),Mn(n,a)}}function lw(s,e){const n=this.cache,a=e.elements;if(a===void 0){if(Sn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(n,e)}else{if(Sn(n,a))return;Iv.set(a),s.uniformMatrix4fv(this.addr,!1,Iv),Mn(n,a)}}function cw(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function uw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;s.uniform2iv(this.addr,e),Mn(n,e)}}function fw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Sn(n,e))return;s.uniform3iv(this.addr,e),Mn(n,e)}}function hw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;s.uniform4iv(this.addr,e),Mn(n,e)}}function dw(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function pw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Sn(n,e))return;s.uniform2uiv(this.addr,e),Mn(n,e)}}function mw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Sn(n,e))return;s.uniform3uiv(this.addr,e),Mn(n,e)}}function xw(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Sn(n,e))return;s.uniform4uiv(this.addr,e),Mn(n,e)}}function gw(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(zv.compareFunction=V_,c=zv):c=uy,n.setTexture2D(e||c,o)}function vw(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||hy,o)}function _w(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||dy,o)}function yw(s,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(s.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||fy,o)}function bw(s){switch(s){case 5126:return nw;case 35664:return iw;case 35665:return aw;case 35666:return sw;case 35674:return rw;case 35675:return ow;case 35676:return lw;case 5124:case 35670:return cw;case 35667:case 35671:return uw;case 35668:case 35672:return fw;case 35669:case 35673:return hw;case 5125:return dw;case 36294:return pw;case 36295:return mw;case 36296:return xw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return vw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return yw}}function Sw(s,e){s.uniform1fv(this.addr,e)}function Mw(s,e){const n=to(e,this.size,2);s.uniform2fv(this.addr,n)}function Ew(s,e){const n=to(e,this.size,3);s.uniform3fv(this.addr,n)}function Tw(s,e){const n=to(e,this.size,4);s.uniform4fv(this.addr,n)}function Aw(s,e){const n=to(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function ww(s,e){const n=to(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function Cw(s,e){const n=to(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function Rw(s,e){s.uniform1iv(this.addr,e)}function Nw(s,e){s.uniform2iv(this.addr,e)}function Dw(s,e){s.uniform3iv(this.addr,e)}function Uw(s,e){s.uniform4iv(this.addr,e)}function Lw(s,e){s.uniform1uiv(this.addr,e)}function Ow(s,e){s.uniform2uiv(this.addr,e)}function Pw(s,e){s.uniform3uiv(this.addr,e)}function zw(s,e){s.uniform4uiv(this.addr,e)}function Bw(s,e,n){const a=this.cache,o=e.length,c=Nu(n,o);Sn(a,c)||(s.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||uy,c[u])}function Fw(s,e,n){const a=this.cache,o=e.length,c=Nu(n,o);Sn(a,c)||(s.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||hy,c[u])}function Iw(s,e,n){const a=this.cache,o=e.length,c=Nu(n,o);Sn(a,c)||(s.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||dy,c[u])}function Hw(s,e,n){const a=this.cache,o=e.length,c=Nu(n,o);Sn(a,c)||(s.uniform1iv(this.addr,c),Mn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||fy,c[u])}function Vw(s){switch(s){case 5126:return Sw;case 35664:return Mw;case 35665:return Ew;case 35666:return Tw;case 35674:return Aw;case 35675:return ww;case 35676:return Cw;case 5124:case 35670:return Rw;case 35667:case 35671:return Nw;case 35668:case 35672:return Dw;case 35669:case 35673:return Uw;case 5125:return Lw;case 36294:return Ow;case 36295:return Pw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return Fw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Hw}}class Gw{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=bw(n.type)}}class kw{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Vw(n.type)}}class jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const h=o[c];h.setValue(e,n[h.id],a)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function Gv(s,e){s.seq.push(e),s.map[e.id]=e}function Xw(s,e,n){const a=s.name,o=a.length;for(Ad.lastIndex=0;;){const c=Ad.exec(a),u=Ad.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&u+2===o){Gv(n,p===void 0?new Gw(h,s,e):new kw(h,s,e));break}else{let x=n.map[h];x===void 0&&(x=new jw(h),Gv(n,x)),n=x}}}class gu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);Xw(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const h=n[c],m=a[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function kv(s,e,n){const a=s.createShader(e);return s.shaderSource(a,n),s.compileShader(a),a}const Ww=37297;let qw=0;function Yw(s,e){const n=s.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const h=u+1;a.push(`${h===e?">":" "} ${h}: ${n[u]}`)}return a.join(`
`)}const jv=new _t;function Zw(s){Pt._getMatrix(jv,Pt.workingColorSpace,s);const e=`mat3( ${jv.elements.map(n=>n.toFixed(4))} )`;switch(Pt.getTransfer(s)){case yu:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Xv(s,e,n){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const h=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+Yw(s.getShaderSource(e),h)}else return c}function Kw(s,e){const n=Zw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Qw(s,e){let n;switch(e){case g3:n="Linear";break;case D_:n="Reinhard";break;case v3:n="Cineon";break;case _3:n="ACESFilmic";break;case b3:n="AgX";break;case S3:n="Neutral";break;case y3:n="Custom";break;default:pt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ou=new X;function Jw(){Pt.getLuminanceCoefficients(ou);const s=ou.x.toFixed(4),e=ou.y.toFixed(4),n=ou.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $w(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function eC(s){const e=[];for(const n in s){const a=s[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function tC(s,e){const n={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=s.getActiveAttrib(e,o),u=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),n[u]={type:c.type,location:s.getAttribLocation(e,u),locationSize:h}}return n}function ol(s){return s!==""}function Wv(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(s){return s.replace(nC,aC)}const iC=new Map;function aC(s,e){let n=bt[e];if(n===void 0){const a=iC.get(e);if(a!==void 0)n=bt[a],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Tp(n)}const sC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yv(s){return s.replace(sC,rC)}function rC(s,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Zv(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oC(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===KM?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function lC(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Wr:case qr:e="ENVMAP_TYPE_CUBE";break;case Au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cC(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function uC(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case N_:e="ENVMAP_BLENDING_MULTIPLY";break;case m3:e="ENVMAP_BLENDING_MIX";break;case x3:e="ENVMAP_BLENDING_ADD";break}return e}function fC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function hC(s,e,n,a){const o=s.getContext(),c=n.defines;let u=n.vertexShader,h=n.fragmentShader;const m=oC(n),p=lC(n),g=cC(n),x=uC(n),v=fC(n),b=$w(n),E=eC(c),A=o.createProgram();let M,y,B=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ol).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ol).join(`
`),y.length>0&&(y+=`
`)):(M=[Zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),y=[Zv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ds?"#define TONE_MAPPING":"",n.toneMapping!==ds?bt.tonemapping_pars_fragment:"",n.toneMapping!==ds?Qw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,Kw("linearToOutputTexel",n.outputColorSpace),Jw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ol).join(`
`)),u=Tp(u),u=Wv(u,n),u=qv(u,n),h=Tp(h),h=Wv(h,n),h=qv(h,n),u=Yv(u),h=Yv(h),n.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",n.glslVersion===Jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=B+M+u,P=B+y+h,I=kv(o,o.VERTEX_SHADER,w),O=kv(o,o.FRAGMENT_SHADER,P);o.attachShader(A,I),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(G){if(s.debug.checkShaderErrors){const ne=o.getProgramInfoLog(A)||"",oe=o.getShaderInfoLog(I)||"",xe=o.getShaderInfoLog(O)||"",ce=ne.trim(),H=oe.trim(),W=xe.trim();let K=!0,fe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,I,O);else{const ge=Xv(o,I,"vertex"),z=Xv(o,O,"fragment");ln("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ce+`
`+ge+`
`+z)}else ce!==""?pt("WebGLProgram: Program Info Log:",ce):(H===""||W==="")&&(fe=!1);fe&&(G.diagnostics={runnable:K,programLog:ce,vertexShader:{log:H,prefix:M},fragmentShader:{log:W,prefix:y}})}o.deleteShader(I),o.deleteShader(O),q=new gu(o,A),D=tC(o,A)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(A,Ww)),N},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=O,this}let dC=0;class pC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new mC(e),n.set(e,a)),a}}class mC{constructor(e){this.id=dC++,this.code=e,this.usedTimes=0}}function xC(s,e,n,a,o,c,u){const h=new j_,m=new pC,p=new Set,g=[],x=o.logarithmicDepthBuffer,v=o.vertexTextures;let b=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,N,G,ne,oe){const xe=ne.fog,ce=oe.geometry,H=D.isMeshStandardMaterial?ne.environment:null,W=(D.isMeshStandardMaterial?n:e).get(D.envMap||H),K=W&&W.mapping===Au?W.image.height:null,fe=E[D.type];D.precision!==null&&(b=o.getMaxPrecision(D.precision),b!==D.precision&&pt("WebGLProgram.getParameters:",D.precision,"not supported, using",b,"instead."));const ge=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,z=ge!==void 0?ge.length:0;let ae=0;ce.morphAttributes.position!==void 0&&(ae=1),ce.morphAttributes.normal!==void 0&&(ae=2),ce.morphAttributes.color!==void 0&&(ae=3);let be,Ne,ke,se;if(fe){const Dt=ki[fe];be=Dt.vertexShader,Ne=Dt.fragmentShader}else be=D.vertexShader,Ne=D.fragmentShader,m.update(D),ke=m.getVertexShaderID(D),se=m.getFragmentShaderID(D);const he=s.getRenderTarget(),ze=s.state.buffers.depth.getReversed(),Ge=oe.isInstancedMesh===!0,Qe=oe.isBatchedMesh===!0,mt=!!D.map,zt=!!D.matcap,ct=!!W,Se=!!D.aoMap,L=!!D.lightMap,Te=!!D.bumpMap,De=!!D.normalMap,Le=!!D.displacementMap,we=!!D.emissiveMap,qe=!!D.metalnessMap,Be=!!D.roughnessMap,Xe=D.anisotropy>0,U=D.clearcoat>0,T=D.dispersion>0,J=D.iridescence>0,de=D.sheen>0,Me=D.transmission>0,ue=Xe&&!!D.anisotropyMap,tt=U&&!!D.clearcoatMap,Fe=U&&!!D.clearcoatNormalMap,it=U&&!!D.clearcoatRoughnessMap,$e=J&&!!D.iridescenceMap,Ee=J&&!!D.iridescenceThicknessMap,Re=de&&!!D.sheenColorMap,nt=de&&!!D.sheenRoughnessMap,Je=!!D.specularMap,je=!!D.specularColorMap,ft=!!D.specularIntensityMap,k=Me&&!!D.transmissionMap,Ie=Me&&!!D.thicknessMap,Oe=!!D.gradientMap,Pe=!!D.alphaMap,Ae=D.alphaTest>0,ye=!!D.alphaHash,Ye=!!D.extensions;let ht=ds;D.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ht=s.toneMapping);const Vt={shaderID:fe,shaderType:D.type,shaderName:D.name,vertexShader:be,fragmentShader:Ne,defines:D.defines,customVertexShaderID:ke,customFragmentShaderID:se,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:b,batching:Qe,batchingColor:Qe&&oe._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&oe.instanceColor!==null,instancingMorph:Ge&&oe.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Yr,alphaToCoverage:!!D.alphaToCoverage,map:mt,matcap:zt,envMap:ct,envMapMode:ct&&W.mapping,envMapCubeUVHeight:K,aoMap:Se,lightMap:L,bumpMap:Te,normalMap:De,displacementMap:v&&Le,emissiveMap:we,normalMapObjectSpace:De&&D.normalMapType===A3,normalMapTangentSpace:De&&D.normalMapType===H_,metalnessMap:qe,roughnessMap:Be,anisotropy:Xe,anisotropyMap:ue,clearcoat:U,clearcoatMap:tt,clearcoatNormalMap:Fe,clearcoatRoughnessMap:it,dispersion:T,iridescence:J,iridescenceMap:$e,iridescenceThicknessMap:Ee,sheen:de,sheenColorMap:Re,sheenRoughnessMap:nt,specularMap:Je,specularColorMap:je,specularIntensityMap:ft,transmission:Me,transmissionMap:k,thicknessMap:Ie,gradientMap:Oe,opaque:D.transparent===!1&&D.blending===Gs&&D.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Ae,alphaHash:ye,combine:D.combine,mapUv:mt&&A(D.map.channel),aoMapUv:Se&&A(D.aoMap.channel),lightMapUv:L&&A(D.lightMap.channel),bumpMapUv:Te&&A(D.bumpMap.channel),normalMapUv:De&&A(D.normalMap.channel),displacementMapUv:Le&&A(D.displacementMap.channel),emissiveMapUv:we&&A(D.emissiveMap.channel),metalnessMapUv:qe&&A(D.metalnessMap.channel),roughnessMapUv:Be&&A(D.roughnessMap.channel),anisotropyMapUv:ue&&A(D.anisotropyMap.channel),clearcoatMapUv:tt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:nt&&A(D.sheenRoughnessMap.channel),specularMapUv:Je&&A(D.specularMap.channel),specularColorMapUv:je&&A(D.specularColorMap.channel),specularIntensityMapUv:ft&&A(D.specularIntensityMap.channel),transmissionMapUv:k&&A(D.transmissionMap.channel),thicknessMapUv:Ie&&A(D.thicknessMap.channel),alphaMapUv:Pe&&A(D.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(De||Xe),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!ce.attributes.uv&&(mt||Pe),fog:!!xe,useFog:D.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ze,skinning:oe.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:ae,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:mt&&D.map.isVideoTexture===!0&&Pt.getTransfer(D.map.colorSpace)===Xt,decodeVideoTextureEmissive:we&&D.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(D.emissiveMap.colorSpace)===Xt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ea,flipSided:D.side===Jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ye&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&D.extensions.multiDraw===!0||Qe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function y(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)N.push(G),N.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(B(N,D),w(N,D),N.push(s.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function B(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function w(D,N){h.disableAll(),N.supportsVertexTextures&&h.enable(0),N.instancing&&h.enable(1),N.instancingColor&&h.enable(2),N.instancingMorph&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),N.dispersion&&h.enable(20),N.batchingColor&&h.enable(21),N.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.reversedDepthBuffer&&h.enable(4),N.skinning&&h.enable(5),N.morphTargets&&h.enable(6),N.morphNormals&&h.enable(7),N.morphColors&&h.enable(8),N.premultipliedAlpha&&h.enable(9),N.shadowMapEnabled&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),N.decodeVideoTextureEmissive&&h.enable(20),N.alphaToCoverage&&h.enable(21),D.push(h.mask)}function P(D){const N=E[D.type];let G;if(N){const ne=ki[N];G=Mu.clone(ne.uniforms)}else G=D.uniforms;return G}function I(D,N){let G;for(let ne=0,oe=g.length;ne<oe;ne++){const xe=g[ne];if(xe.cacheKey===N){G=xe,++G.usedTimes;break}}return G===void 0&&(G=new hC(s,N,D,c),g.push(G)),G}function O(D){if(--D.usedTimes===0){const N=g.indexOf(D);g[N]=g[g.length-1],g.pop(),D.destroy()}}function F(D){m.remove(D)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:P,acquireProgram:I,releaseProgram:O,releaseShaderCache:F,programs:g,dispose:q}}function gC(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function a(u){s.delete(u)}function o(u,h,m){s.get(u)[h]=m}function c(){s=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function vC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Kv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Qv(){const s=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(x,v,b,E,A,M){let y=s[e];return y===void 0?(y={id:x.id,object:x,geometry:v,material:b,groupOrder:E,renderOrder:x.renderOrder,z:A,group:M},s[e]=y):(y.id=x.id,y.object=x,y.geometry=v,y.material=b,y.groupOrder=E,y.renderOrder=x.renderOrder,y.z=A,y.group=M),e++,y}function h(x,v,b,E,A,M){const y=u(x,v,b,E,A,M);b.transmission>0?a.push(y):b.transparent===!0?o.push(y):n.push(y)}function m(x,v,b,E,A,M){const y=u(x,v,b,E,A,M);b.transmission>0?a.unshift(y):b.transparent===!0?o.unshift(y):n.unshift(y)}function p(x,v){n.length>1&&n.sort(x||vC),a.length>1&&a.sort(v||Kv),o.length>1&&o.sort(v||Kv)}function g(){for(let x=e,v=s.length;x<v;x++){const b=s[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:h,unshift:m,finish:g,sort:p}}function _C(){let s=new WeakMap;function e(a,o){const c=s.get(a);let u;return c===void 0?(u=new Qv,s.set(a,[u])):o>=c.length?(u=new Qv,c.push(u)):u=c[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function yC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new yt};break;case"SpotLight":n={position:new X,direction:new X,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=n,n}}}function bC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let SC=0;function MC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function EC(s){const e=new yC,n=bC(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new X);const o=new X,c=new tn,u=new tn;function h(p){let g=0,x=0,v=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let b=0,E=0,A=0,M=0,y=0,B=0,w=0,P=0,I=0,O=0,F=0;p.sort(MC);for(let D=0,N=p.length;D<N;D++){const G=p[D],ne=G.color,oe=G.intensity,xe=G.distance,ce=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ne.r*oe,x+=ne.g*oe,v+=ne.b*oe;else if(G.isLightProbe){for(let H=0;H<9;H++)a.probe[H].addScaledVector(G.sh.coefficients[H],oe);F++}else if(G.isDirectionalLight){const H=e.get(G);if(H.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,K=n.get(G);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,a.directionalShadow[b]=K,a.directionalShadowMap[b]=ce,a.directionalShadowMatrix[b]=G.shadow.matrix,B++}a.directional[b]=H,b++}else if(G.isSpotLight){const H=e.get(G);H.position.setFromMatrixPosition(G.matrixWorld),H.color.copy(ne).multiplyScalar(oe),H.distance=xe,H.coneCos=Math.cos(G.angle),H.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),H.decay=G.decay,a.spot[A]=H;const W=G.shadow;if(G.map&&(a.spotLightMap[I]=G.map,I++,W.updateMatrices(G),G.castShadow&&O++),a.spotLightMatrix[A]=W.matrix,G.castShadow){const K=n.get(G);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,a.spotShadow[A]=K,a.spotShadowMap[A]=ce,P++}A++}else if(G.isRectAreaLight){const H=e.get(G);H.color.copy(ne).multiplyScalar(oe),H.halfWidth.set(G.width*.5,0,0),H.halfHeight.set(0,G.height*.5,0),a.rectArea[M]=H,M++}else if(G.isPointLight){const H=e.get(G);if(H.color.copy(G.color).multiplyScalar(G.intensity),H.distance=G.distance,H.decay=G.decay,G.castShadow){const W=G.shadow,K=n.get(G);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,a.pointShadow[E]=K,a.pointShadowMap[E]=ce,a.pointShadowMatrix[E]=G.shadow.matrix,w++}a.point[E]=H,E++}else if(G.isHemisphereLight){const H=e.get(G);H.skyColor.copy(G.color).multiplyScalar(oe),H.groundColor.copy(G.groundColor).multiplyScalar(oe),a.hemi[y]=H,y++}}M>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ve.LTC_FLOAT_1,a.rectAreaLTC2=Ve.LTC_FLOAT_2):(a.rectAreaLTC1=Ve.LTC_HALF_1,a.rectAreaLTC2=Ve.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=x,a.ambient[2]=v;const q=a.hash;(q.directionalLength!==b||q.pointLength!==E||q.spotLength!==A||q.rectAreaLength!==M||q.hemiLength!==y||q.numDirectionalShadows!==B||q.numPointShadows!==w||q.numSpotShadows!==P||q.numSpotMaps!==I||q.numLightProbes!==F)&&(a.directional.length=b,a.spot.length=A,a.rectArea.length=M,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=B,a.directionalShadowMap.length=B,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=P,a.spotShadowMap.length=P,a.directionalShadowMatrix.length=B,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=P+I-O,a.spotLightMap.length=I,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=F,q.directionalLength=b,q.pointLength=E,q.spotLength=A,q.rectAreaLength=M,q.hemiLength=y,q.numDirectionalShadows=B,q.numPointShadows=w,q.numSpotShadows=P,q.numSpotMaps=I,q.numLightProbes=F,a.version=SC++)}function m(p,g){let x=0,v=0,b=0,E=0,A=0;const M=g.matrixWorldInverse;for(let y=0,B=p.length;y<B;y++){const w=p[y];if(w.isDirectionalLight){const P=a.directional[x];P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(M),x++}else if(w.isSpotLight){const P=a.spot[b];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(M),b++}else if(w.isRectAreaLight){const P=a.rectArea[E];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),u.identity(),c.copy(w.matrixWorld),c.premultiply(M),u.extractRotation(c),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),E++}else if(w.isPointLight){const P=a.point[v];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(M),v++}else if(w.isHemisphereLight){const P=a.hemi[A];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(M),A++}}}return{setup:h,setupView:m,state:a}}function Jv(s){const e=new EC(s),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function h(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u}}function TC(s){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let h;return u===void 0?(h=new Jv(s),e.set(o,[h])):c>=u.length?(h=new Jv(s),u.push(h)):h=u[c],h}function a(){e=new WeakMap}return{get:n,dispose:a}}const AC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wC=`uniform sampler2D shadow_pass;
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
}`;function CC(s,e,n){let a=new kp;const o=new Ce,c=new Ce,u=new qt,h=new q2({depthPacking:T3}),m=new Y2,p={},g=n.maxTextureSize,x={[ps]:Jn,[Jn]:ps,[Ea]:Ea},v=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:AC,fragmentShader:wC}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const E=new Ai;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new fi(E,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R_;let y=this.type;this.render=function(O,F,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||O.length===0)return;const D=s.getRenderTarget(),N=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Xi),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const oe=y!==Ma&&this.type===Ma,xe=y===Ma&&this.type!==Ma;for(let ce=0,H=O.length;ce<H;ce++){const W=O[ce],K=W.shadow;if(K===void 0){pt("WebGLShadowMap:",W,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const fe=K.getFrameExtents();if(o.multiply(fe),c.copy(K.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/fe.x),o.x=c.x*fe.x,K.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/fe.y),o.y=c.y*fe.y,K.mapSize.y=c.y)),K.map===null||oe===!0||xe===!0){const z=this.type!==Ma?{minFilter:hi,magFilter:hi}:{};K.map!==null&&K.map.dispose(),K.map=new Ei(o.x,o.y,z),K.map.texture.name=W.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const ge=K.getViewportCount();for(let z=0;z<ge;z++){const ae=K.getViewport(z);u.set(c.x*ae.x,c.y*ae.y,c.x*ae.z,c.y*ae.w),ne.viewport(u),K.updateMatrices(W,z),a=K.getFrustum(),P(F,q,K.camera,W,this.type)}K.isPointLightShadow!==!0&&this.type===Ma&&B(K,q),K.needsUpdate=!1}y=this.type,M.needsUpdate=!1,s.setRenderTarget(D,N,G)};function B(O,F){const q=e.update(A);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ei(o.x,o.y)),v.uniforms.shadow_pass.value=O.map.texture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(F,null,q,v,A,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(F,null,q,b,A,null)}function w(O,F,q,D){let N=null;const G=q.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(G!==void 0)N=G;else if(N=q.isPointLight===!0?m:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ne=N.uuid,oe=F.uuid;let xe=p[ne];xe===void 0&&(xe={},p[ne]=xe);let ce=xe[oe];ce===void 0&&(ce=N.clone(),xe[oe]=ce,F.addEventListener("dispose",I)),N=ce}if(N.visible=F.visible,N.wireframe=F.wireframe,D===Ma?N.side=F.shadowSide!==null?F.shadowSide:F.side:N.side=F.shadowSide!==null?F.shadowSide:x[F.side],N.alphaMap=F.alphaMap,N.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,N.map=F.map,N.clipShadows=F.clipShadows,N.clippingPlanes=F.clippingPlanes,N.clipIntersection=F.clipIntersection,N.displacementMap=F.displacementMap,N.displacementScale=F.displacementScale,N.displacementBias=F.displacementBias,N.wireframeLinewidth=F.wireframeLinewidth,N.linewidth=F.linewidth,q.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ne=s.properties.get(N);ne.light=q}return N}function P(O,F,q,D,N){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&N===Ma)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,O.matrixWorld);const oe=e.update(O),xe=O.material;if(Array.isArray(xe)){const ce=oe.groups;for(let H=0,W=ce.length;H<W;H++){const K=ce[H],fe=xe[K.materialIndex];if(fe&&fe.visible){const ge=w(O,fe,D,N);O.onBeforeShadow(s,O,F,q,oe,ge,K),s.renderBufferDirect(q,null,oe,ge,O,K),O.onAfterShadow(s,O,F,q,oe,ge,K)}}}else if(xe.visible){const ce=w(O,xe,D,N);O.onBeforeShadow(s,O,F,q,oe,ce,null),s.renderBufferDirect(q,null,oe,ce,O,null),O.onAfterShadow(s,O,F,q,oe,ce,null)}}const ne=O.children;for(let oe=0,xe=ne.length;oe<xe;oe++)P(ne[oe],F,q,D,N)}function I(O){O.target.removeEventListener("dispose",I);for(const q in p){const D=p[q],N=O.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}const RC={[Pd]:zd,[Bd]:Hd,[Fd]:Vd,[Xr]:Id,[zd]:Pd,[Hd]:Bd,[Vd]:Fd,[Id]:Xr};function NC(s,e){function n(){let k=!1;const Ie=new qt;let Oe=null;const Pe=new qt(0,0,0,0);return{setMask:function(Ae){Oe!==Ae&&!k&&(s.colorMask(Ae,Ae,Ae,Ae),Oe=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,ye,Ye,ht,Vt){Vt===!0&&(Ae*=ht,ye*=ht,Ye*=ht),Ie.set(Ae,ye,Ye,ht),Pe.equals(Ie)===!1&&(s.clearColor(Ae,ye,Ye,ht),Pe.copy(Ie))},reset:function(){k=!1,Oe=null,Pe.set(-1,0,0,0)}}}function a(){let k=!1,Ie=!1,Oe=null,Pe=null,Ae=null;return{setReversed:function(ye){if(Ie!==ye){const Ye=e.get("EXT_clip_control");ye?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ie=ye;const ht=Ae;Ae=null,this.setClear(ht)}},getReversed:function(){return Ie},setTest:function(ye){ye?he(s.DEPTH_TEST):ze(s.DEPTH_TEST)},setMask:function(ye){Oe!==ye&&!k&&(s.depthMask(ye),Oe=ye)},setFunc:function(ye){if(Ie&&(ye=RC[ye]),Pe!==ye){switch(ye){case Pd:s.depthFunc(s.NEVER);break;case zd:s.depthFunc(s.ALWAYS);break;case Bd:s.depthFunc(s.LESS);break;case Xr:s.depthFunc(s.LEQUAL);break;case Fd:s.depthFunc(s.EQUAL);break;case Id:s.depthFunc(s.GEQUAL);break;case Hd:s.depthFunc(s.GREATER);break;case Vd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=ye}},setLocked:function(ye){k=ye},setClear:function(ye){Ae!==ye&&(Ie&&(ye=1-ye),s.clearDepth(ye),Ae=ye)},reset:function(){k=!1,Oe=null,Pe=null,Ae=null,Ie=!1}}}function o(){let k=!1,Ie=null,Oe=null,Pe=null,Ae=null,ye=null,Ye=null,ht=null,Vt=null;return{setTest:function(Dt){k||(Dt?he(s.STENCIL_TEST):ze(s.STENCIL_TEST))},setMask:function(Dt){Ie!==Dt&&!k&&(s.stencilMask(Dt),Ie=Dt)},setFunc:function(Dt,Pn,$n){(Oe!==Dt||Pe!==Pn||Ae!==$n)&&(s.stencilFunc(Dt,Pn,$n),Oe=Dt,Pe=Pn,Ae=$n)},setOp:function(Dt,Pn,$n){(ye!==Dt||Ye!==Pn||ht!==$n)&&(s.stencilOp(Dt,Pn,$n),ye=Dt,Ye=Pn,ht=$n)},setLocked:function(Dt){k=Dt},setClear:function(Dt){Vt!==Dt&&(s.clearStencil(Dt),Vt=Dt)},reset:function(){k=!1,Ie=null,Oe=null,Pe=null,Ae=null,ye=null,Ye=null,ht=null,Vt=null}}}const c=new n,u=new a,h=new o,m=new WeakMap,p=new WeakMap;let g={},x={},v=new WeakMap,b=[],E=null,A=!1,M=null,y=null,B=null,w=null,P=null,I=null,O=null,F=new yt(0,0,0),q=0,D=!1,N=null,G=null,ne=null,oe=null,xe=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=W>=2);let fe=null,ge={};const z=s.getParameter(s.SCISSOR_BOX),ae=s.getParameter(s.VIEWPORT),be=new qt().fromArray(z),Ne=new qt().fromArray(ae);function ke(k,Ie,Oe,Pe){const Ae=new Uint8Array(4),ye=s.createTexture();s.bindTexture(k,ye),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<Oe;Ye++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Ie+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return ye}const se={};se[s.TEXTURE_2D]=ke(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),he(s.DEPTH_TEST),u.setFunc(Xr),Te(!1),De(qg),he(s.CULL_FACE),Se(Xi);function he(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function ze(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function Ge(k,Ie){return x[k]!==Ie?(s.bindFramebuffer(k,Ie),x[k]=Ie,k===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ie),k===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Qe(k,Ie){let Oe=b,Pe=!1;if(k){Oe=v.get(Ie),Oe===void 0&&(Oe=[],v.set(Ie,Oe));const Ae=k.textures;if(Oe.length!==Ae.length||Oe[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ye=Ae.length;ye<Ye;ye++)Oe[ye]=s.COLOR_ATTACHMENT0+ye;Oe.length=Ae.length,Pe=!0}}else Oe[0]!==s.BACK&&(Oe[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(Oe)}function mt(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const zt={[Is]:s.FUNC_ADD,[JM]:s.FUNC_SUBTRACT,[$M]:s.FUNC_REVERSE_SUBTRACT};zt[e3]=s.MIN,zt[t3]=s.MAX;const ct={[n3]:s.ZERO,[i3]:s.ONE,[a3]:s.SRC_COLOR,[Ld]:s.SRC_ALPHA,[u3]:s.SRC_ALPHA_SATURATE,[l3]:s.DST_COLOR,[r3]:s.DST_ALPHA,[s3]:s.ONE_MINUS_SRC_COLOR,[Od]:s.ONE_MINUS_SRC_ALPHA,[c3]:s.ONE_MINUS_DST_COLOR,[o3]:s.ONE_MINUS_DST_ALPHA,[f3]:s.CONSTANT_COLOR,[h3]:s.ONE_MINUS_CONSTANT_COLOR,[d3]:s.CONSTANT_ALPHA,[p3]:s.ONE_MINUS_CONSTANT_ALPHA};function Se(k,Ie,Oe,Pe,Ae,ye,Ye,ht,Vt,Dt){if(k===Xi){A===!0&&(ze(s.BLEND),A=!1);return}if(A===!1&&(he(s.BLEND),A=!0),k!==QM){if(k!==M||Dt!==D){if((y!==Is||P!==Is)&&(s.blendEquation(s.FUNC_ADD),y=Is,P=Is),Dt)switch(k){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ud:s.blendFunc(s.ONE,s.ONE);break;case Yg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ln("WebGLState: Invalid blending: ",k);break}else switch(k){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ud:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Yg:ln("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zg:ln("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ln("WebGLState: Invalid blending: ",k);break}B=null,w=null,I=null,O=null,F.set(0,0,0),q=0,M=k,D=Dt}return}Ae=Ae||Ie,ye=ye||Oe,Ye=Ye||Pe,(Ie!==y||Ae!==P)&&(s.blendEquationSeparate(zt[Ie],zt[Ae]),y=Ie,P=Ae),(Oe!==B||Pe!==w||ye!==I||Ye!==O)&&(s.blendFuncSeparate(ct[Oe],ct[Pe],ct[ye],ct[Ye]),B=Oe,w=Pe,I=ye,O=Ye),(ht.equals(F)===!1||Vt!==q)&&(s.blendColor(ht.r,ht.g,ht.b,Vt),F.copy(ht),q=Vt),M=k,D=!1}function L(k,Ie){k.side===Ea?ze(s.CULL_FACE):he(s.CULL_FACE);let Oe=k.side===Jn;Ie&&(Oe=!Oe),Te(Oe),k.blending===Gs&&k.transparent===!1?Se(Xi):Se(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),c.setMask(k.colorWrite);const Pe=k.stencilWrite;h.setTest(Pe),Pe&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),we(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):ze(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(k){N!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),N=k)}function De(k){k!==YM?(he(s.CULL_FACE),k!==G&&(k===qg?s.cullFace(s.BACK):k===ZM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ze(s.CULL_FACE),G=k}function Le(k){k!==ne&&(H&&s.lineWidth(k),ne=k)}function we(k,Ie,Oe){k?(he(s.POLYGON_OFFSET_FILL),(oe!==Ie||xe!==Oe)&&(s.polygonOffset(Ie,Oe),oe=Ie,xe=Oe)):ze(s.POLYGON_OFFSET_FILL)}function qe(k){k?he(s.SCISSOR_TEST):ze(s.SCISSOR_TEST)}function Be(k){k===void 0&&(k=s.TEXTURE0+ce-1),fe!==k&&(s.activeTexture(k),fe=k)}function Xe(k,Ie,Oe){Oe===void 0&&(fe===null?Oe=s.TEXTURE0+ce-1:Oe=fe);let Pe=ge[Oe];Pe===void 0&&(Pe={type:void 0,texture:void 0},ge[Oe]=Pe),(Pe.type!==k||Pe.texture!==Ie)&&(fe!==Oe&&(s.activeTexture(Oe),fe=Oe),s.bindTexture(k,Ie||se[k]),Pe.type=k,Pe.texture=Ie)}function U(){const k=ge[fe];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function J(){try{s.compressedTexImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function de(){try{s.texSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Me(){try{s.texSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function tt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Fe(){try{s.texStorage2D(...arguments)}catch(k){k("WebGLState:",k)}}function it(){try{s.texStorage3D(...arguments)}catch(k){k("WebGLState:",k)}}function $e(){try{s.texImage2D(...arguments)}catch(k){k("WebGLState:",k)}}function Ee(){try{s.texImage3D(...arguments)}catch(k){k("WebGLState:",k)}}function Re(k){be.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),be.copy(k))}function nt(k){Ne.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Ne.copy(k))}function Je(k,Ie){let Oe=p.get(Ie);Oe===void 0&&(Oe=new WeakMap,p.set(Ie,Oe));let Pe=Oe.get(k);Pe===void 0&&(Pe=s.getUniformBlockIndex(Ie,k.name),Oe.set(k,Pe))}function je(k,Ie){const Pe=p.get(Ie).get(k);m.get(Ie)!==Pe&&(s.uniformBlockBinding(Ie,Pe,k.__bindingPointIndex),m.set(Ie,Pe))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},fe=null,ge={},x={},v=new WeakMap,b=[],E=null,A=!1,M=null,y=null,B=null,w=null,P=null,I=null,O=null,F=new yt(0,0,0),q=0,D=!1,N=null,G=null,ne=null,oe=null,xe=null,be.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:he,disable:ze,bindFramebuffer:Ge,drawBuffers:Qe,useProgram:mt,setBlending:Se,setMaterial:L,setFlipSided:Te,setCullFace:De,setLineWidth:Le,setPolygonOffset:we,setScissorTest:qe,activeTexture:Be,bindTexture:Xe,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:$e,texImage3D:Ee,updateUBOMapping:Je,uniformBlockBinding:je,texStorage2D:Fe,texStorage3D:it,texSubImage2D:de,texSubImage3D:Me,compressedTexSubImage2D:ue,compressedTexSubImage3D:tt,scissor:Re,viewport:nt,reset:ft}}function DC(s,e,n,a,o,c,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ce,g=new WeakMap;let x;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return b?new OffscreenCanvas(U,T):Su("canvas")}function A(U,T,J){let de=1;const Me=Xe(U);if((Me.width>J||Me.height>J)&&(de=J/Math.max(Me.width,Me.height)),de<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(de*Me.width),tt=Math.floor(de*Me.height);x===void 0&&(x=E(ue,tt));const Fe=T?E(ue,tt):x;return Fe.width=ue,Fe.height=tt,Fe.getContext("2d").drawImage(U,0,0,ue,tt),pt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ue+"x"+tt+")."),Fe}else return"data"in U&&pt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),U;return U}function M(U){return U.generateMipmaps}function y(U){s.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(U,T,J,de,Me=!1){if(U!==null){if(s[U]!==void 0)return s[U];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=T;if(T===s.RED&&(J===s.FLOAT&&(ue=s.R32F),J===s.HALF_FLOAT&&(ue=s.R16F),J===s.UNSIGNED_BYTE&&(ue=s.R8)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.R8UI),J===s.UNSIGNED_SHORT&&(ue=s.R16UI),J===s.UNSIGNED_INT&&(ue=s.R32UI),J===s.BYTE&&(ue=s.R8I),J===s.SHORT&&(ue=s.R16I),J===s.INT&&(ue=s.R32I)),T===s.RG&&(J===s.FLOAT&&(ue=s.RG32F),J===s.HALF_FLOAT&&(ue=s.RG16F),J===s.UNSIGNED_BYTE&&(ue=s.RG8)),T===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.RG8UI),J===s.UNSIGNED_SHORT&&(ue=s.RG16UI),J===s.UNSIGNED_INT&&(ue=s.RG32UI),J===s.BYTE&&(ue=s.RG8I),J===s.SHORT&&(ue=s.RG16I),J===s.INT&&(ue=s.RG32I)),T===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),J===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),J===s.UNSIGNED_INT&&(ue=s.RGB32UI),J===s.BYTE&&(ue=s.RGB8I),J===s.SHORT&&(ue=s.RGB16I),J===s.INT&&(ue=s.RGB32I)),T===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),J===s.UNSIGNED_INT&&(ue=s.RGBA32UI),J===s.BYTE&&(ue=s.RGBA8I),J===s.SHORT&&(ue=s.RGBA16I),J===s.INT&&(ue=s.RGBA32I)),T===s.RGB&&(J===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),T===s.RGBA){const tt=Me?yu:Pt.getTransfer(de);J===s.FLOAT&&(ue=s.RGBA32F),J===s.HALF_FLOAT&&(ue=s.RGBA16F),J===s.UNSIGNED_BYTE&&(ue=tt===Xt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(U,T){let J;return U?T===null||T===ks||T===dl?J=s.DEPTH24_STENCIL8:T===Aa?J=s.DEPTH32F_STENCIL8:T===hl&&(J=s.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ks||T===dl?J=s.DEPTH_COMPONENT24:T===Aa?J=s.DEPTH_COMPONENT32F:T===hl&&(J=s.DEPTH_COMPONENT16),J}function I(U,T){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==hi&&U.minFilter!==Qn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function O(U){const T=U.target;T.removeEventListener("dispose",O),q(T),T.isVideoTexture&&g.delete(T)}function F(U){const T=U.target;T.removeEventListener("dispose",F),N(T)}function q(U){const T=a.get(U);if(T.__webglInit===void 0)return;const J=U.source,de=v.get(J);if(de){const Me=de[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&D(U),Object.keys(de).length===0&&v.delete(J)}a.remove(U)}function D(U){const T=a.get(U);s.deleteTexture(T.__webglTexture);const J=U.source,de=v.get(J);delete de[T.__cacheKey],u.memory.textures--}function N(U){const T=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(T.__webglFramebuffer[de]))for(let Me=0;Me<T.__webglFramebuffer[de].length;Me++)s.deleteFramebuffer(T.__webglFramebuffer[de][Me]);else s.deleteFramebuffer(T.__webglFramebuffer[de]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[de])}else{if(Array.isArray(T.__webglFramebuffer))for(let de=0;de<T.__webglFramebuffer.length;de++)s.deleteFramebuffer(T.__webglFramebuffer[de]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let de=0;de<T.__webglColorRenderbuffer.length;de++)T.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[de]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=U.textures;for(let de=0,Me=J.length;de<Me;de++){const ue=a.get(J[de]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),u.memory.textures--),a.remove(J[de])}a.remove(U)}let G=0;function ne(){G=0}function oe(){const U=G;return U>=o.maxTextures&&pt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),G+=1,U}function xe(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ce(U,T){const J=a.get(U);if(U.isVideoTexture&&qe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const de=U.image;if(de===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{se(J,U,T);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function H(U,T){const J=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){se(J,U,T);return}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function W(U,T){const J=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){se(J,U,T);return}n.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function K(U,T){const J=a.get(U);if(U.version>0&&J.__version!==U.version){he(J,U,T);return}n.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}const fe={[jd]:s.REPEAT,[Ta]:s.CLAMP_TO_EDGE,[Xd]:s.MIRRORED_REPEAT},ge={[hi]:s.NEAREST,[M3]:s.NEAREST_MIPMAP_NEAREST,[Bc]:s.NEAREST_MIPMAP_LINEAR,[Qn]:s.LINEAR,[Wh]:s.LINEAR_MIPMAP_NEAREST,[Vs]:s.LINEAR_MIPMAP_LINEAR},z={[w3]:s.NEVER,[L3]:s.ALWAYS,[C3]:s.LESS,[V_]:s.LEQUAL,[R3]:s.EQUAL,[U3]:s.GEQUAL,[N3]:s.GREATER,[D3]:s.NOTEQUAL};function ae(U,T){if(T.type===Aa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qn||T.magFilter===Wh||T.magFilter===Bc||T.magFilter===Vs||T.minFilter===Qn||T.minFilter===Wh||T.minFilter===Bc||T.minFilter===Vs)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,fe[T.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,fe[T.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,fe[T.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ge[T.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ge[T.minFilter]),T.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==Bc&&T.minFilter!==Vs||T.type===Aa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function be(U,T){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",O));const de=T.source;let Me=v.get(de);Me===void 0&&(Me={},v.set(de,Me));const ue=xe(T);if(ue!==U.__cacheKey){Me[ue]===void 0&&(Me[ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Me[ue].usedTimes++;const tt=Me[U.__cacheKey];tt!==void 0&&(Me[U.__cacheKey].usedTimes--,tt.usedTimes===0&&D(T)),U.__cacheKey=ue,U.__webglTexture=Me[ue].texture}return J}function Ne(U,T,J){return Math.floor(Math.floor(U/J)/T)}function ke(U,T,J,de){const ue=U.updateRanges;if(ue.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,J,de,T.data);else{ue.sort((Ee,Re)=>Ee.start-Re.start);let tt=0;for(let Ee=1;Ee<ue.length;Ee++){const Re=ue[tt],nt=ue[Ee],Je=Re.start+Re.count,je=Ne(nt.start,T.width,4),ft=Ne(Re.start,T.width,4);nt.start<=Je+1&&je===ft&&Ne(nt.start+nt.count-1,T.width,4)===je?Re.count=Math.max(Re.count,nt.start+nt.count-Re.start):(++tt,ue[tt]=nt)}ue.length=tt+1;const Fe=s.getParameter(s.UNPACK_ROW_LENGTH),it=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Ee=0,Re=ue.length;Ee<Re;Ee++){const nt=ue[Ee],Je=Math.floor(nt.start/4),je=Math.ceil(nt.count/4),ft=Je%T.width,k=Math.floor(Je/T.width),Ie=je,Oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,k),n.texSubImage2D(s.TEXTURE_2D,0,ft,k,Ie,Oe,J,de,T.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Fe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,it),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function se(U,T,J){let de=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=s.TEXTURE_3D);const Me=be(U,T),ue=T.source;n.bindTexture(de,U.__webglTexture,s.TEXTURE0+J);const tt=a.get(ue);if(ue.version!==tt.__version||Me===!0){n.activeTexture(s.TEXTURE0+J);const Fe=Pt.getPrimaries(Pt.workingColorSpace),it=T.colorSpace===fs?null:Pt.getPrimaries(T.colorSpace),$e=T.colorSpace===fs||Fe===it?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ee=A(T.image,!1,o.maxTextureSize);Ee=Be(T,Ee);const Re=c.convert(T.format,T.colorSpace),nt=c.convert(T.type);let Je=w(T.internalFormat,Re,nt,T.colorSpace,T.isVideoTexture);ae(de,T);let je;const ft=T.mipmaps,k=T.isVideoTexture!==!0,Ie=tt.__version===void 0||Me===!0,Oe=ue.dataReady,Pe=I(T,Ee);if(T.isDepthTexture)Je=P(T.format===ml,T.type),Ie&&(k?n.texStorage2D(s.TEXTURE_2D,1,Je,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,Je,Ee.width,Ee.height,0,Re,nt,null));else if(T.isDataTexture)if(ft.length>0){k&&Ie&&n.texStorage2D(s.TEXTURE_2D,Pe,Je,ft[0].width,ft[0].height);for(let Ae=0,ye=ft.length;Ae<ye;Ae++)je=ft[Ae],k?Oe&&n.texSubImage2D(s.TEXTURE_2D,Ae,0,0,je.width,je.height,Re,nt,je.data):n.texImage2D(s.TEXTURE_2D,Ae,Je,je.width,je.height,0,Re,nt,je.data);T.generateMipmaps=!1}else k?(Ie&&n.texStorage2D(s.TEXTURE_2D,Pe,Je,Ee.width,Ee.height),Oe&&ke(T,Ee,Re,nt)):n.texImage2D(s.TEXTURE_2D,0,Je,Ee.width,Ee.height,0,Re,nt,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&Ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Je,ft[0].width,ft[0].height,Ee.depth);for(let Ae=0,ye=ft.length;Ae<ye;Ae++)if(je=ft[Ae],T.format!==Mi)if(Re!==null)if(k){if(Oe)if(T.layerUpdates.size>0){const Ye=Rv(je.width,je.height,T.format,T.type);for(const ht of T.layerUpdates){const Vt=je.data.subarray(ht*Ye/je.data.BYTES_PER_ELEMENT,(ht+1)*Ye/je.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,ht,je.width,je.height,1,Re,Vt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,je.width,je.height,Ee.depth,Re,je.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,Je,je.width,je.height,Ee.depth,0,je.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Oe&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,je.width,je.height,Ee.depth,Re,nt,je.data):n.texImage3D(s.TEXTURE_2D_ARRAY,Ae,Je,je.width,je.height,Ee.depth,0,Re,nt,je.data)}else{k&&Ie&&n.texStorage2D(s.TEXTURE_2D,Pe,Je,ft[0].width,ft[0].height);for(let Ae=0,ye=ft.length;Ae<ye;Ae++)je=ft[Ae],T.format!==Mi?Re!==null?k?Oe&&n.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,je.width,je.height,Re,je.data):n.compressedTexImage2D(s.TEXTURE_2D,Ae,Je,je.width,je.height,0,je.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Oe&&n.texSubImage2D(s.TEXTURE_2D,Ae,0,0,je.width,je.height,Re,nt,je.data):n.texImage2D(s.TEXTURE_2D,Ae,Je,je.width,je.height,0,Re,nt,je.data)}else if(T.isDataArrayTexture)if(k){if(Ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Je,Ee.width,Ee.height,Ee.depth),Oe)if(T.layerUpdates.size>0){const Ae=Rv(Ee.width,Ee.height,T.format,T.type);for(const ye of T.layerUpdates){const Ye=Ee.data.subarray(ye*Ae/Ee.data.BYTES_PER_ELEMENT,(ye+1)*Ae/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,Re,nt,Ye)}T.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,nt,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Ee.width,Ee.height,Ee.depth,0,Re,nt,Ee.data);else if(T.isData3DTexture)k?(Ie&&n.texStorage3D(s.TEXTURE_3D,Pe,Je,Ee.width,Ee.height,Ee.depth),Oe&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,nt,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Ee.width,Ee.height,Ee.depth,0,Re,nt,Ee.data);else if(T.isFramebufferTexture){if(Ie)if(k)n.texStorage2D(s.TEXTURE_2D,Pe,Je,Ee.width,Ee.height);else{let Ae=Ee.width,ye=Ee.height;for(let Ye=0;Ye<Pe;Ye++)n.texImage2D(s.TEXTURE_2D,Ye,Je,Ae,ye,0,Re,nt,null),Ae>>=1,ye>>=1}}else if(ft.length>0){if(k&&Ie){const Ae=Xe(ft[0]);n.texStorage2D(s.TEXTURE_2D,Pe,Je,Ae.width,Ae.height)}for(let Ae=0,ye=ft.length;Ae<ye;Ae++)je=ft[Ae],k?Oe&&n.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Re,nt,je):n.texImage2D(s.TEXTURE_2D,Ae,Je,Re,nt,je);T.generateMipmaps=!1}else if(k){if(Ie){const Ae=Xe(Ee);n.texStorage2D(s.TEXTURE_2D,Pe,Je,Ae.width,Ae.height)}Oe&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,nt,Ee)}else n.texImage2D(s.TEXTURE_2D,0,Je,Re,nt,Ee);M(T)&&y(de),tt.__version=ue.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function he(U,T,J){if(T.image.length!==6)return;const de=be(U,T),Me=T.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+J);const ue=a.get(Me);if(Me.version!==ue.__version||de===!0){n.activeTexture(s.TEXTURE0+J);const tt=Pt.getPrimaries(Pt.workingColorSpace),Fe=T.colorSpace===fs?null:Pt.getPrimaries(T.colorSpace),it=T.colorSpace===fs||tt===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,Re=[];for(let ye=0;ye<6;ye++)!$e&&!Ee?Re[ye]=A(T.image[ye],!0,o.maxCubemapSize):Re[ye]=Ee?T.image[ye].image:T.image[ye],Re[ye]=Be(T,Re[ye]);const nt=Re[0],Je=c.convert(T.format,T.colorSpace),je=c.convert(T.type),ft=w(T.internalFormat,Je,je,T.colorSpace),k=T.isVideoTexture!==!0,Ie=ue.__version===void 0||de===!0,Oe=Me.dataReady;let Pe=I(T,nt);ae(s.TEXTURE_CUBE_MAP,T);let Ae;if($e){k&&Ie&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ft,nt.width,nt.height);for(let ye=0;ye<6;ye++){Ae=Re[ye].mipmaps;for(let Ye=0;Ye<Ae.length;Ye++){const ht=Ae[Ye];T.format!==Mi?Je!==null?k?Oe&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,ht.width,ht.height,Je,ht.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,ft,ht.width,ht.height,0,ht.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Oe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,0,0,ht.width,ht.height,Je,je,ht.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye,ft,ht.width,ht.height,0,Je,je,ht.data)}}}else{if(Ae=T.mipmaps,k&&Ie){Ae.length>0&&Pe++;const ye=Xe(Re[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ft,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Ee){k?Oe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Re[ye].width,Re[ye].height,Je,je,Re[ye].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ft,Re[ye].width,Re[ye].height,0,Je,je,Re[ye].data);for(let Ye=0;Ye<Ae.length;Ye++){const Vt=Ae[Ye].image[ye].image;k?Oe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,Vt.width,Vt.height,Je,je,Vt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,ft,Vt.width,Vt.height,0,Je,je,Vt.data)}}else{k?Oe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Je,je,Re[ye]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ft,Je,je,Re[ye]);for(let Ye=0;Ye<Ae.length;Ye++){const ht=Ae[Ye];k?Oe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,0,0,Je,je,ht.image[ye]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ye+1,ft,Je,je,ht.image[ye])}}}M(T)&&y(s.TEXTURE_CUBE_MAP),ue.__version=Me.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ze(U,T,J,de,Me,ue){const tt=c.convert(J.format,J.colorSpace),Fe=c.convert(J.type),it=w(J.internalFormat,tt,Fe,J.colorSpace),$e=a.get(T),Ee=a.get(J);if(Ee.__renderTarget=T,!$e.__hasExternalTextures){const Re=Math.max(1,T.width>>ue),nt=Math.max(1,T.height>>ue);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?n.texImage3D(Me,ue,it,Re,nt,T.depth,0,tt,Fe,null):n.texImage2D(Me,ue,it,Re,nt,0,tt,Fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),we(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,Me,Ee.__webglTexture,0,Le(T)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,Me,Ee.__webglTexture,ue),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(U,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,U),T.depthBuffer){const de=T.depthTexture,Me=de&&de.isDepthTexture?de.type:null,ue=P(T.stencilBuffer,Me),tt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Fe=Le(T);we(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Fe,ue,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,ue,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ue,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,U)}else{const de=T.textures;for(let Me=0;Me<de.length;Me++){const ue=de[Me],tt=c.convert(ue.format,ue.colorSpace),Fe=c.convert(ue.type),it=w(ue.internalFormat,tt,Fe,ue.colorSpace),$e=Le(T);J&&we(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,it,T.width,T.height):we(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,it,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,it,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Qe(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=a.get(T.depthTexture);de.__renderTarget=T,(!de.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ce(T.depthTexture,0);const Me=de.__webglTexture,ue=Le(T);if(T.depthTexture.format===pl)we(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(T.depthTexture.format===ml)we(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function mt(U){const T=a.get(U),J=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const de=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),de){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,de.removeEventListener("dispose",Me)};de.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=de}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const de=U.texture.mipmaps;de&&de.length>0?Qe(T.__webglFramebuffer[0],U):Qe(T.__webglFramebuffer,U)}else if(J){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]===void 0)T.__webglDepthbuffer[de]=s.createRenderbuffer(),Ge(T.__webglDepthbuffer[de],U,!1);else{const Me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,ue)}}else{const de=U.texture.mipmaps;if(de&&de.length>0?n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Ge(T.__webglDepthbuffer,U,!1);else{const Me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,ue)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(U,T,J){const de=a.get(U);T!==void 0&&ze(de.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&mt(U)}function ct(U){const T=U.texture,J=a.get(U),de=a.get(T);U.addEventListener("dispose",F);const Me=U.textures,ue=U.isWebGLCubeRenderTarget===!0,tt=Me.length>1;if(tt||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=T.version,u.memory.textures++),ue){J.__webglFramebuffer=[];for(let Fe=0;Fe<6;Fe++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Fe]=[];for(let it=0;it<T.mipmaps.length;it++)J.__webglFramebuffer[Fe][it]=s.createFramebuffer()}else J.__webglFramebuffer[Fe]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)J.__webglFramebuffer[Fe]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(tt)for(let Fe=0,it=Me.length;Fe<it;Fe++){const $e=a.get(Me[Fe]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&we(U)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];J.__webglColorRenderbuffer[Fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Fe]);const $e=c.convert(it.format,it.colorSpace),Ee=c.convert(it.type),Re=w(it.internalFormat,$e,Ee,it.colorSpace,U.isXRRenderTarget===!0),nt=Le(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Re,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,J.__webglColorRenderbuffer[Fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),Ge(J.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){n.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),ae(s.TEXTURE_CUBE_MAP,T);for(let Fe=0;Fe<6;Fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)ze(J.__webglFramebuffer[Fe][it],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,it);else ze(J.__webglFramebuffer[Fe],U,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0);M(T)&&y(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(tt){for(let Fe=0,it=Me.length;Fe<it;Fe++){const $e=Me[Fe],Ee=a.get($e);let Re=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Re,Ee.__webglTexture),ae(Re,$e),ze(J.__webglFramebuffer,U,$e,s.COLOR_ATTACHMENT0+Fe,Re,0),M($e)&&y(Re)}n.unbindTexture()}else{let Fe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Fe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Fe,de.__webglTexture),ae(Fe,T),T.mipmaps&&T.mipmaps.length>0)for(let it=0;it<T.mipmaps.length;it++)ze(J.__webglFramebuffer[it],U,T,s.COLOR_ATTACHMENT0,Fe,it);else ze(J.__webglFramebuffer,U,T,s.COLOR_ATTACHMENT0,Fe,0);M(T)&&y(Fe),n.unbindTexture()}U.depthBuffer&&mt(U)}function Se(U){const T=U.textures;for(let J=0,de=T.length;J<de;J++){const Me=T[J];if(M(Me)){const ue=B(U),tt=a.get(Me).__webglTexture;n.bindTexture(ue,tt),y(ue),n.unbindTexture()}}}const L=[],Te=[];function De(U){if(U.samples>0){if(we(U)===!1){const T=U.textures,J=U.width,de=U.height;let Me=s.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=a.get(U),Fe=T.length>1;if(Fe)for(let $e=0;$e<T.length;$e++)n.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer);const it=U.texture.mipmaps;it&&it.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,tt.__webglColorRenderbuffer[$e]);const Ee=a.get(T[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,J,de,0,0,J,de,Me,s.NEAREST),m===!0&&(L.length=0,Te.length=0,L.push(s.COLOR_ATTACHMENT0+$e),U.depthBuffer&&U.resolveDepthBuffer===!1&&(L.push(ue),Te.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Te)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Fe)for(let $e=0;$e<T.length;$e++){n.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,tt.__webglColorRenderbuffer[$e]);const Ee=a.get(T[$e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Ee,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Le(U){return Math.min(o.maxSamples,U.samples)}function we(U){const T=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function qe(U){const T=u.render.frame;g.get(U)!==T&&(g.set(U,T),U.update())}function Be(U,T){const J=U.colorSpace,de=U.format,Me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Yr&&J!==fs&&(Pt.getTransfer(J)===Xt?(de!==Mi||Me!==qi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ln("WebGLTextures: Unsupported texture color space:",J)),T}function Xe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=ne,this.setTexture2D=ce,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=zt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=we}function UC(s,e){function n(a,o=fs){let c;const u=Pt.getTransfer(o);if(a===qi)return s.UNSIGNED_BYTE;if(a===Op)return s.UNSIGNED_SHORT_4_4_4_4;if(a===Pp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===P_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===z_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===L_)return s.BYTE;if(a===O_)return s.SHORT;if(a===hl)return s.UNSIGNED_SHORT;if(a===Lp)return s.INT;if(a===ks)return s.UNSIGNED_INT;if(a===Aa)return s.FLOAT;if(a===Wi)return s.HALF_FLOAT;if(a===B_)return s.ALPHA;if(a===F_)return s.RGB;if(a===Mi)return s.RGBA;if(a===pl)return s.DEPTH_COMPONENT;if(a===ml)return s.DEPTH_STENCIL;if(a===I_)return s.RED;if(a===zp)return s.RED_INTEGER;if(a===Bp)return s.RG;if(a===Fp)return s.RG_INTEGER;if(a===Ip)return s.RGBA_INTEGER;if(a===fu||a===hu||a===du||a===pu)if(u===Xt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===pu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Wd||a===qd||a===Yd||a===Zd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===qd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Zd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Kd||a===Qd||a===Jd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Kd||a===Qd)return u===Xt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Jd)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===$d||a===ep||a===tp||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===hp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===$d)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ep)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===tp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===np)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ip)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===ap)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===sp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===rp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===op)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===lp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===cp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===up)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===fp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===hp)return u===Xt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===dp||a===pp||a===mp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===dp)return u===Xt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===pp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===mp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===xp||a===gp||a===vp||a===_p)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===xp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===_p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===dl?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:n}}const LC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OC=`
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

}`;class PC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new $_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Vn({vertexShader:LC,fragmentShader:OC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new Cu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zC extends qs{constructor(e,n){super();const a=this;let o=null,c=1,u=null,h="local-floor",m=1,p=null,g=null,x=null,v=null,b=null,E=null;const A=typeof XRWebGLBinding<"u",M=new PC,y={},B=n.getContextAttributes();let w=null,P=null;const I=[],O=[],F=new Ce;let q=null;const D=new ui;D.viewport=new qt;const N=new ui;N.viewport=new qt;const G=[D,N],ne=new $2;let oe=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let he=I[se];return he===void 0&&(he=new pd,I[se]=he),he.getTargetRaySpace()},this.getControllerGrip=function(se){let he=I[se];return he===void 0&&(he=new pd,I[se]=he),he.getGripSpace()},this.getHand=function(se){let he=I[se];return he===void 0&&(he=new pd,I[se]=he),he.getHandSpace()};function ce(se){const he=O.indexOf(se.inputSource);if(he===-1)return;const ze=I[he];ze!==void 0&&(ze.update(se.inputSource,se.frame,p||u),ze.dispatchEvent({type:se.type,data:se.inputSource}))}function H(){o.removeEventListener("select",ce),o.removeEventListener("selectstart",ce),o.removeEventListener("selectend",ce),o.removeEventListener("squeeze",ce),o.removeEventListener("squeezestart",ce),o.removeEventListener("squeezeend",ce),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",W);for(let se=0;se<I.length;se++){const he=O[se];he!==null&&(O[se]=null,I[se].disconnect(he))}oe=null,xe=null,M.reset();for(const se in y)delete y[se];e.setRenderTarget(w),b=null,v=null,x=null,o=null,P=null,ke.stop(),a.isPresenting=!1,e.setPixelRatio(q),e.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,a.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,a.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(se){p=se},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return x===null&&A&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(w=e.getRenderTarget(),o.addEventListener("select",ce),o.addEventListener("selectstart",ce),o.addEventListener("selectend",ce),o.addEventListener("squeeze",ce),o.addEventListener("squeezestart",ce),o.addEventListener("squeezeend",ce),o.addEventListener("end",H),o.addEventListener("inputsourceschange",W),B.xrCompatible!==!0&&await n.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ze=null,Ge=null,Qe=null;B.depth&&(Qe=B.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ze=B.stencil?ml:pl,Ge=B.stencil?dl:ks);const mt={colorFormat:n.RGBA8,depthFormat:Qe,scaleFactor:c};x=this.getBinding(),v=x.createProjectionLayer(mt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Ei(v.textureWidth,v.textureHeight,{format:Mi,type:qi,depthTexture:new J_(v.textureWidth,v.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,ze),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ze={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(o,n,ze),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new Ei(b.framebufferWidth,b.framebufferHeight,{format:Mi,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(h),ke.setContext(o),ke.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W(se){for(let he=0;he<se.removed.length;he++){const ze=se.removed[he],Ge=O.indexOf(ze);Ge>=0&&(O[Ge]=null,I[Ge].disconnect(ze))}for(let he=0;he<se.added.length;he++){const ze=se.added[he];let Ge=O.indexOf(ze);if(Ge===-1){for(let mt=0;mt<I.length;mt++)if(mt>=O.length){O.push(ze),Ge=mt;break}else if(O[mt]===null){O[mt]=ze,Ge=mt;break}if(Ge===-1)break}const Qe=I[Ge];Qe&&Qe.connect(ze)}}const K=new X,fe=new X;function ge(se,he,ze){K.setFromMatrixPosition(he.matrixWorld),fe.setFromMatrixPosition(ze.matrixWorld);const Ge=K.distanceTo(fe),Qe=he.projectionMatrix.elements,mt=ze.projectionMatrix.elements,zt=Qe[14]/(Qe[10]-1),ct=Qe[14]/(Qe[10]+1),Se=(Qe[9]+1)/Qe[5],L=(Qe[9]-1)/Qe[5],Te=(Qe[8]-1)/Qe[0],De=(mt[8]+1)/mt[0],Le=zt*Te,we=zt*De,qe=Ge/(-Te+De),Be=qe*-Te;if(he.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Be),se.translateZ(qe),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Qe[10]===-1)se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=zt+qe,U=ct+qe,T=Le-Be,J=we+(Ge-Be),de=Se*ct/U*Xe,Me=L*ct/U*Xe;se.projectionMatrix.makePerspective(T,J,de,Me,Xe,U),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function z(se,he){he===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(he.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let he=se.near,ze=se.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(ze=M.depthFar)),ne.near=N.near=D.near=he,ne.far=N.far=D.far=ze,(oe!==ne.near||xe!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),oe=ne.near,xe=ne.far),ne.layers.mask=se.layers.mask|6,D.layers.mask=ne.layers.mask&3,N.layers.mask=ne.layers.mask&5;const Ge=se.parent,Qe=ne.cameras;z(ne,Ge);for(let mt=0;mt<Qe.length;mt++)z(Qe[mt],Ge);Qe.length===2?ge(ne,D,N):ne.projectionMatrix.copy(D.projectionMatrix),ae(se,ne,Ge)};function ae(se,he,ze){ze===null?se.matrix.copy(he.matrixWorld):(se.matrix.copy(ze.matrixWorld),se.matrix.invert(),se.matrix.multiply(he.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=yp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(v===null&&b===null))return m},this.setFoveation=function(se){m=se,v!==null&&(v.fixedFoveation=se),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=se)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(ne)},this.getCameraTexture=function(se){return y[se]};let be=null;function Ne(se,he){if(g=he.getViewerPose(p||u),E=he,g!==null){const ze=g.views;b!==null&&(e.setRenderTargetFramebuffer(P,b.framebuffer),e.setRenderTarget(P));let Ge=!1;ze.length!==ne.cameras.length&&(ne.cameras.length=0,Ge=!0);for(let ct=0;ct<ze.length;ct++){const Se=ze[ct];let L=null;if(b!==null)L=b.getViewport(Se);else{const De=x.getViewSubImage(v,Se);L=De.viewport,ct===0&&(e.setRenderTargetTextures(P,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(P))}let Te=G[ct];Te===void 0&&(Te=new ui,Te.layers.enable(ct),Te.viewport=new qt,G[ct]=Te),Te.matrix.fromArray(Se.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Se.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(L.x,L.y,L.width,L.height),ct===0&&(ne.matrix.copy(Te.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ge===!0&&ne.cameras.push(Te)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){x=a.getBinding();const ct=x.getDepthInformation(ze[0]);ct&&ct.isValid&&ct.texture&&M.init(ct,o.renderState)}if(Qe&&Qe.includes("camera-access")&&A){e.state.unbindTexture(),x=a.getBinding();for(let ct=0;ct<ze.length;ct++){const Se=ze[ct].camera;if(Se){let L=y[Se];L||(L=new $_,y[Se]=L);const Te=x.getCameraImage(Se);L.sourceTexture=Te}}}}for(let ze=0;ze<I.length;ze++){const Ge=O[ze],Qe=I[ze];Ge!==null&&Qe!==void 0&&Qe.update(Ge,he,p||u)}be&&be(se,he),he.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:he}),E=null}const ke=new cy;ke.setAnimationLoop(Ne),this.setAnimationLoop=function(se){be=se},this.dispose=function(){}}}const Fs=new Yi,BC=new tn;function FC(s,e){function n(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function a(M,y){y.color.getRGB(M.fogColor.value,Y_(s)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function o(M,y,B,w,P){y.isMeshBasicMaterial||y.isMeshLambertMaterial?c(M,y):y.isMeshToonMaterial?(c(M,y),x(M,y)):y.isMeshPhongMaterial?(c(M,y),g(M,y)):y.isMeshStandardMaterial?(c(M,y),v(M,y),y.isMeshPhysicalMaterial&&b(M,y,P)):y.isMeshMatcapMaterial?(c(M,y),E(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),A(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(u(M,y),y.isLineDashedMaterial&&h(M,y)):y.isPointsMaterial?m(M,y,B,w):y.isSpriteMaterial?p(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,n(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Jn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,n(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Jn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,n(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,n(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const B=e.get(y),w=B.envMap,P=B.envMapRotation;w&&(M.envMap.value=w,Fs.copy(P),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),M.envMapRotation.value.setFromMatrix4(BC.makeRotationFromEuler(Fs)),M.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,M.aoMapTransform))}function u(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform))}function h(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function m(M,y,B,w){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*B,M.scale.value=w*.5,y.map&&(M.map.value=y.map,n(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function p(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,n(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,n(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function g(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function x(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function v(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function b(M,y,B){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,y){y.matcap&&(M.matcap.value=y.matcap)}function A(M,y){const B=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function IC(s,e,n,a){let o={},c={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,w){const P=w.program;a.uniformBlockBinding(B,P)}function p(B,w){let P=o[B.id];P===void 0&&(E(B),P=g(B),o[B.id]=P,B.addEventListener("dispose",M));const I=w.program;a.updateUBOMapping(B,I);const O=e.render.frame;c[B.id]!==O&&(v(B),c[B.id]=O)}function g(B){const w=x();B.__bindingPointIndex=w;const P=s.createBuffer(),I=B.__size,O=B.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,I,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,P),P}function x(){for(let B=0;B<h;B++)if(u.indexOf(B)===-1)return u.push(B),B;return ln("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(B){const w=o[B.id],P=B.uniforms,I=B.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let O=0,F=P.length;O<F;O++){const q=Array.isArray(P[O])?P[O]:[P[O]];for(let D=0,N=q.length;D<N;D++){const G=q[D];if(b(G,O,D,I)===!0){const ne=G.__offset,oe=Array.isArray(G.value)?G.value:[G.value];let xe=0;for(let ce=0;ce<oe.length;ce++){const H=oe[ce],W=A(H);typeof H=="number"||typeof H=="boolean"?(G.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,ne+xe,G.__data)):H.isMatrix3?(G.__data[0]=H.elements[0],G.__data[1]=H.elements[1],G.__data[2]=H.elements[2],G.__data[3]=0,G.__data[4]=H.elements[3],G.__data[5]=H.elements[4],G.__data[6]=H.elements[5],G.__data[7]=0,G.__data[8]=H.elements[6],G.__data[9]=H.elements[7],G.__data[10]=H.elements[8],G.__data[11]=0):(H.toArray(G.__data,xe),xe+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function b(B,w,P,I){const O=B.value,F=w+"_"+P;if(I[F]===void 0)return typeof O=="number"||typeof O=="boolean"?I[F]=O:I[F]=O.clone(),!0;{const q=I[F];if(typeof O=="number"||typeof O=="boolean"){if(q!==O)return I[F]=O,!0}else if(q.equals(O)===!1)return q.copy(O),!0}return!1}function E(B){const w=B.uniforms;let P=0;const I=16;for(let F=0,q=w.length;F<q;F++){const D=Array.isArray(w[F])?w[F]:[w[F]];for(let N=0,G=D.length;N<G;N++){const ne=D[N],oe=Array.isArray(ne.value)?ne.value:[ne.value];for(let xe=0,ce=oe.length;xe<ce;xe++){const H=oe[xe],W=A(H),K=P%I,fe=K%W.boundary,ge=K+fe;P+=fe,ge!==0&&I-ge<W.storage&&(P+=I-ge),ne.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=W.storage}}}const O=P%I;return O>0&&(P+=I-O),B.__size=P,B.__cache={},this}function A(B){const w={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(w.boundary=4,w.storage=4):B.isVector2?(w.boundary=8,w.storage=8):B.isVector3||B.isColor?(w.boundary=16,w.storage=12):B.isVector4?(w.boundary=16,w.storage=16):B.isMatrix3?(w.boundary=48,w.storage=48):B.isMatrix4?(w.boundary=64,w.storage=64):B.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):pt("WebGLRenderer: Unsupported uniform value type.",B),w}function M(B){const w=B.target;w.removeEventListener("dispose",M);const P=u.indexOf(w.__bindingPointIndex);u.splice(P,1),s.deleteBuffer(o[w.id]),delete o[w.id],delete c[w.id]}function y(){for(const B in o)s.deleteBuffer(o[B]);u=[],o={},c={}}return{bind:m,update:p,dispose:y}}const HC=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Sa=null;function VC(){return Sa===null&&(Sa=new l2(HC,32,32,Bp,Wi),Sa.minFilter=Qn,Sa.magFilter=Qn,Sa.wrapS=Ta,Sa.wrapT=Ta,Sa.generateMipmaps=!1,Sa.needsUpdate=!0),Sa}class GC{constructor(e={}){const{canvas:n=O3(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let b;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=a.getContextAttributes().alpha}else b=u;const E=new Set([Ip,Fp,zp]),A=new Set([qi,ks,hl,dl,Op,Pp]),M=new Uint32Array(4),y=new Int32Array(4);let B=null,w=null;const P=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let F=!1;this._outputColorSpace=Si;let q=0,D=0,N=null,G=-1,ne=null;const oe=new qt,xe=new qt;let ce=null;const H=new yt(0);let W=0,K=n.width,fe=n.height,ge=1,z=null,ae=null;const be=new qt(0,0,K,fe),Ne=new qt(0,0,K,fe);let ke=!1;const se=new kp;let he=!1,ze=!1;const Ge=new tn,Qe=new X,mt=new qt,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Se(){return N===null?ge:1}let L=a;function Te(R,Y){return n.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Up}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",Ye,!1),L===null){const Y="webgl2";if(L=Te(Y,R),L===null)throw Te(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let De,Le,we,qe,Be,Xe,U,T,J,de,Me,ue,tt,Fe,it,$e,Ee,Re,nt,Je,je,ft,k,Ie;function Oe(){De=new KA(L),De.init(),ft=new UC(L,De),Le=new VA(L,De,e,ft),we=new NC(L,De),Le.reversedDepthBuffer&&v&&we.buffers.depth.setReversed(!0),qe=new $A(L),Be=new gC,Xe=new DC(L,De,we,Be,Le,ft,qe),U=new kA(O),T=new ZA(O),J=new iE(L),k=new IA(L,J),de=new QA(L,J,qe,k),Me=new tw(L,de,J,qe),nt=new ew(L,Le,Xe),$e=new GA(Be),ue=new xC(O,U,T,De,Le,k,$e),tt=new FC(O,Be),Fe=new _C,it=new TC(De),Re=new FA(O,U,T,we,Me,b,m),Ee=new CC(O,Me,Le),Ie=new IC(L,qe,Le,we),Je=new HA(L,De,qe),je=new JA(L,De,qe),qe.programs=ue.programs,O.capabilities=Le,O.extensions=De,O.properties=Be,O.renderLists=Fe,O.shadowMap=Ee,O.state=we,O.info=qe}Oe();const Pe=new zC(O,L);this.xr=Pe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const R=De.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=De.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(K,fe,!1))},this.getSize=function(R){return R.set(K,fe)},this.setSize=function(R,Y,re=!0){if(Pe.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,fe=Y,n.width=Math.floor(R*ge),n.height=Math.floor(Y*ge),re===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(K*ge,fe*ge).floor()},this.setDrawingBufferSize=function(R,Y,re){K=R,fe=Y,ge=re,n.width=Math.floor(R*re),n.height=Math.floor(Y*re),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(oe)},this.getViewport=function(R){return R.copy(be)},this.setViewport=function(R,Y,re,te){R.isVector4?be.set(R.x,R.y,R.z,R.w):be.set(R,Y,re,te),we.viewport(oe.copy(be).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(Ne)},this.setScissor=function(R,Y,re,te){R.isVector4?Ne.set(R.x,R.y,R.z,R.w):Ne.set(R,Y,re,te),we.scissor(xe.copy(Ne).multiplyScalar(ge).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(R){we.setScissorTest(ke=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,re=!0){let te=0;if(R){let Q=!1;if(N!==null){const Ue=N.texture.format;Q=E.has(Ue)}if(Q){const Ue=N.texture.type,He=A.has(Ue),We=Re.getClearColor(),Ze=Re.getClearAlpha(),ot=We.r,ut=We.g,at=We.b;He?(M[0]=ot,M[1]=ut,M[2]=at,M[3]=Ze,L.clearBufferuiv(L.COLOR,0,M)):(y[0]=ot,y[1]=ut,y[2]=at,y[3]=Ze,L.clearBufferiv(L.COLOR,0,y))}else te|=L.COLOR_BUFFER_BIT}Y&&(te|=L.DEPTH_BUFFER_BIT),re&&(te|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Ye,!1),Re.dispose(),Fe.dispose(),it.dispose(),Be.dispose(),U.dispose(),T.dispose(),Me.dispose(),k.dispose(),Ie.dispose(),ue.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",no),Pe.removeEventListener("sessionend",io),wi.stop()};function Ae(R){R.preventDefault(),ev("WebGLRenderer: Context Lost."),F=!0}function ye(){ev("WebGLRenderer: Context Restored."),F=!1;const R=qe.autoReset,Y=Ee.enabled,re=Ee.autoUpdate,te=Ee.needsUpdate,Q=Ee.type;Oe(),qe.autoReset=R,Ee.enabled=Y,Ee.autoUpdate=re,Ee.needsUpdate=te,Ee.type=Q}function Ye(R){ln("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ht(R){const Y=R.target;Y.removeEventListener("dispose",ht),Vt(Y)}function Vt(R){Dt(R),Be.remove(R)}function Dt(R){const Y=Be.get(R).programs;Y!==void 0&&(Y.forEach(function(re){ue.releaseProgram(re)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,re,te,Q,Ue){Y===null&&(Y=zt);const He=Q.isMesh&&Q.matrixWorld.determinant()<0,We=Du(R,Y,re,te,Q);we.setMaterial(te,He);let Ze=re.index,ot=1;if(te.wireframe===!0){if(Ze=de.getWireframeAttribute(re),Ze===void 0)return;ot=2}const ut=re.drawRange,at=re.attributes.position;let gt=ut.start*ot,Nt=(ut.start+ut.count)*ot;Ue!==null&&(gt=Math.max(gt,Ue.start*ot),Nt=Math.min(Nt,(Ue.start+Ue.count)*ot)),Ze!==null?(gt=Math.max(gt,0),Nt=Math.min(Nt,Ze.count)):at!=null&&(gt=Math.max(gt,0),Nt=Math.min(Nt,at.count));const Ut=Nt-gt;if(Ut<0||Ut===1/0)return;k.setup(Q,te,We,re,Ze);let wt,Ft=Je;if(Ze!==null&&(wt=J.get(Ze),Ft=je,Ft.setIndex(wt)),Q.isMesh)te.wireframe===!0?(we.setLineWidth(te.wireframeLinewidth*Se()),Ft.setMode(L.LINES)):Ft.setMode(L.TRIANGLES);else if(Q.isLine){let rt=te.linewidth;rt===void 0&&(rt=1),we.setLineWidth(rt*Se()),Q.isLineSegments?Ft.setMode(L.LINES):Q.isLineLoop?Ft.setMode(L.LINE_LOOP):Ft.setMode(L.LINE_STRIP)}else Q.isPoints?Ft.setMode(L.POINTS):Q.isSprite&&Ft.setMode(L.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)xl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Ft.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const rt=Q._multiDrawStarts,Yt=Q._multiDrawCounts,Ct=Q._multiDrawCount,En=Ze?J.get(Ze).bytesPerElement:1,La=Be.get(te).currentProgram.getUniforms();for(let Kt=0;Kt<Ct;Kt++)La.setValue(L,"_gl_DrawID",Kt),Ft.render(rt[Kt]/En,Yt[Kt])}else if(Q.isInstancedMesh)Ft.renderInstances(gt,Ut,Q.count);else if(re.isInstancedBufferGeometry){const rt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Yt=Math.min(re.instanceCount,rt);Ft.renderInstances(gt,Ut,Yt)}else Ft.render(gt,Ut)};function Pn(R,Y,re){R.transparent===!0&&R.side===Ea&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,gn(R,Y,re),R.side=ps,R.needsUpdate=!0,gn(R,Y,re),R.side=Ea):gn(R,Y,re)}this.compile=function(R,Y,re=null){re===null&&(re=R),w=it.get(re),w.init(Y),I.push(w),re.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),R!==re&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights();const te=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let He=0;He<Ue.length;He++){const We=Ue[He];Pn(We,re,Q),te.add(We)}else Pn(Ue,re,Q),te.add(Ue)}),w=I.pop(),te},this.compileAsync=function(R,Y,re=null){const te=this.compile(R,Y,re);return new Promise(Q=>{function Ue(){if(te.forEach(function(He){Be.get(He).currentProgram.isReady()&&te.delete(He)}),te.size===0){Q(R);return}setTimeout(Ue,10)}De.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let $n=null;function Tl(R){$n&&$n(R)}function no(){wi.stop()}function io(){wi.start()}const wi=new cy;wi.setAnimationLoop(Tl),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(R){$n=R,Pe.setAnimationLoop(R),R===null?wi.stop():wi.start()},Pe.addEventListener("sessionstart",no),Pe.addEventListener("sessionend",io),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){ln("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(Y),Y=Pe.getCamera()),R.isScene===!0&&R.onBeforeRender(O,R,Y,N),w=it.get(R,I.length),w.init(Y),I.push(w),Ge.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),se.setFromProjectionMatrix(Ge,ji,Y.reversedDepth),ze=this.localClippingEnabled,he=$e.init(this.clippingPlanes,ze),B=Fe.get(R,P.length),B.init(),P.push(B),Pe.enabled===!0&&Pe.isPresenting===!0){const Ue=O.xr.getDepthSensingMesh();Ue!==null&&ms(Ue,Y,-1/0,O.sortObjects)}ms(R,Y,0,O.sortObjects),B.finish(),O.sortObjects===!0&&B.sort(z,ae),ct=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,ct&&Re.addToRenderList(B,R),this.info.render.frame++,he===!0&&$e.beginShadows();const re=w.state.shadowsArray;Ee.render(re,R,Y),he===!0&&$e.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=B.opaque,Q=B.transmissive;if(w.setupLights(),Y.isArrayCamera){const Ue=Y.cameras;if(Q.length>0)for(let He=0,We=Ue.length;He<We;He++){const Ze=Ue[He];so(te,Q,R,Ze)}ct&&Re.render(R);for(let He=0,We=Ue.length;He<We;He++){const Ze=Ue[He];ao(B,R,Ze,Ze.viewport)}}else Q.length>0&&so(te,Q,R,Y),ct&&Re.render(R),ao(B,R,Y);N!==null&&D===0&&(Xe.updateMultisampleRenderTarget(N),Xe.updateRenderTargetMipmap(N)),R.isScene===!0&&R.onAfterRender(O,R,Y),k.resetDefaultState(),G=-1,ne=null,I.pop(),I.length>0?(w=I[I.length-1],he===!0&&$e.setGlobalState(O.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?B=P[P.length-1]:B=null};function ms(R,Y,re,te){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)w.pushLight(R),R.castShadow&&w.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){te&&mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ge);const He=Me.update(R),We=R.material;We.visible&&B.push(R,He,We,re,mt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){const He=Me.update(R),We=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),mt.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),mt.copy(He.boundingSphere.center)),mt.applyMatrix4(R.matrixWorld).applyMatrix4(Ge)),Array.isArray(We)){const Ze=He.groups;for(let ot=0,ut=Ze.length;ot<ut;ot++){const at=Ze[ot],gt=We[at.materialIndex];gt&&gt.visible&&B.push(R,He,gt,re,mt.z,at)}}else We.visible&&B.push(R,He,We,re,mt.z,null)}}const Ue=R.children;for(let He=0,We=Ue.length;He<We;He++)ms(Ue[He],Y,re,te)}function ao(R,Y,re,te){const{opaque:Q,transmissive:Ue,transparent:He}=R;w.setupLightsView(re),he===!0&&$e.setGlobalState(O.clippingPlanes,re),te&&we.viewport(oe.copy(te)),Q.length>0&&ei(Q,Y,re),Ue.length>0&&ei(Ue,Y,re),He.length>0&&ei(He,Y,re),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function so(R,Y,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;w.state.transmissionRenderTarget[te.id]===void 0&&(w.state.transmissionRenderTarget[te.id]=new Ei(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Wi:qi,minFilter:Vs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ue=w.state.transmissionRenderTarget[te.id],He=te.viewport||oe;Ue.setSize(He.z*O.transmissionResolutionScale,He.w*O.transmissionResolutionScale);const We=O.getRenderTarget(),Ze=O.getActiveCubeFace(),ot=O.getActiveMipmapLevel();O.setRenderTarget(Ue),O.getClearColor(H),W=O.getClearAlpha(),W<1&&O.setClearColor(16777215,.5),O.clear(),ct&&Re.render(re);const ut=O.toneMapping;O.toneMapping=ds;const at=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),w.setupLightsView(te),he===!0&&$e.setGlobalState(O.clippingPlanes,te),ei(R,re,te),Xe.updateMultisampleRenderTarget(Ue),Xe.updateRenderTargetMipmap(Ue),De.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Nt=0,Ut=Y.length;Nt<Ut;Nt++){const wt=Y[Nt],{object:Ft,geometry:rt,material:Yt,group:Ct}=wt;if(Yt.side===Ea&&Ft.layers.test(te.layers)){const En=Yt.side;Yt.side=Jn,Yt.needsUpdate=!0,fn(Ft,re,te,rt,Yt,Ct),Yt.side=En,Yt.needsUpdate=!0,gt=!0}}gt===!0&&(Xe.updateMultisampleRenderTarget(Ue),Xe.updateRenderTargetMipmap(Ue))}O.setRenderTarget(We,Ze,ot),O.setClearColor(H,W),at!==void 0&&(te.viewport=at),O.toneMapping=ut}function ei(R,Y,re){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ue=R.length;Q<Ue;Q++){const He=R[Q],{object:We,geometry:Ze,group:ot}=He;let ut=He.material;ut.allowOverride===!0&&te!==null&&(ut=te),We.layers.test(re.layers)&&fn(We,Y,re,Ze,ut,ot)}}function fn(R,Y,re,te,Q,Ue){R.onBeforeRender(O,Y,re,te,Q,Ue),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(O,Y,re,te,R,Ue),Q.transparent===!0&&Q.side===Ea&&Q.forceSinglePass===!1?(Q.side=Jn,Q.needsUpdate=!0,O.renderBufferDirect(re,Y,te,Q,R,Ue),Q.side=ps,Q.needsUpdate=!0,O.renderBufferDirect(re,Y,te,Q,R,Ue),Q.side=Ea):O.renderBufferDirect(re,Y,te,Q,R,Ue),R.onAfterRender(O,Y,re,te,Q,Ue)}function gn(R,Y,re){Y.isScene!==!0&&(Y=zt);const te=Be.get(R),Q=w.state.lights,Ue=w.state.shadowsArray,He=Q.state.version,We=ue.getParameters(R,Q.state,Ue,Y,re),Ze=ue.getProgramCacheKey(We);let ot=te.programs;te.environment=R.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(R.isMeshStandardMaterial?T:U).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,ot===void 0&&(R.addEventListener("dispose",ht),ot=new Map,te.programs=ot);let ut=ot.get(Ze);if(ut!==void 0){if(te.currentProgram===ut&&te.lightsStateVersion===He)return Zs(R,We),ut}else We.uniforms=ue.getUniforms(R),R.onBeforeCompile(We,O),ut=ue.acquireProgram(We,Ze),ot.set(Ze,ut),te.uniforms=We.uniforms;const at=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(at.clippingPlanes=$e.uniform),Zs(R,We),te.needsLights=Al(R),te.lightsStateVersion=He,te.needsLights&&(at.ambientLightColor.value=Q.state.ambient,at.lightProbe.value=Q.state.probe,at.directionalLights.value=Q.state.directional,at.directionalLightShadows.value=Q.state.directionalShadow,at.spotLights.value=Q.state.spot,at.spotLightShadows.value=Q.state.spotShadow,at.rectAreaLights.value=Q.state.rectArea,at.ltc_1.value=Q.state.rectAreaLTC1,at.ltc_2.value=Q.state.rectAreaLTC2,at.pointLights.value=Q.state.point,at.pointLightShadows.value=Q.state.pointShadow,at.hemisphereLights.value=Q.state.hemi,at.directionalShadowMap.value=Q.state.directionalShadowMap,at.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,at.spotShadowMap.value=Q.state.spotShadowMap,at.spotLightMatrix.value=Q.state.spotLightMatrix,at.spotLightMap.value=Q.state.spotLightMap,at.pointShadowMap.value=Q.state.pointShadowMap,at.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=ut,te.uniformsList=null,ut}function Qi(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=gu.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function Zs(R,Y){const re=Be.get(R);re.outputColorSpace=Y.outputColorSpace,re.batching=Y.batching,re.batchingColor=Y.batchingColor,re.instancing=Y.instancing,re.instancingColor=Y.instancingColor,re.instancingMorph=Y.instancingMorph,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function Du(R,Y,re,te,Q){Y.isScene!==!0&&(Y=zt),Xe.resetTextureUnits();const Ue=Y.fog,He=te.isMeshStandardMaterial?Y.environment:null,We=N===null?O.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Yr,Ze=(te.isMeshStandardMaterial?T:U).get(te.envMap||He),ot=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ut=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),at=!!re.morphAttributes.position,gt=!!re.morphAttributes.normal,Nt=!!re.morphAttributes.color;let Ut=ds;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ut=O.toneMapping);const wt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Ft=wt!==void 0?wt.length:0,rt=Be.get(te),Yt=w.state.lights;if(he===!0&&(ze===!0||R!==ne)){const An=R===ne&&te.id===G;$e.setState(te,R,An)}let Ct=!1;te.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Yt.state.version||rt.outputColorSpace!==We||Q.isBatchedMesh&&rt.batching===!1||!Q.isBatchedMesh&&rt.batching===!0||Q.isBatchedMesh&&rt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&rt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&rt.instancing===!1||!Q.isInstancedMesh&&rt.instancing===!0||Q.isSkinnedMesh&&rt.skinning===!1||!Q.isSkinnedMesh&&rt.skinning===!0||Q.isInstancedMesh&&rt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&rt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&rt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&rt.instancingMorph===!1&&Q.morphTexture!==null||rt.envMap!==Ze||te.fog===!0&&rt.fog!==Ue||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==$e.numPlanes||rt.numIntersection!==$e.numIntersection)||rt.vertexAlphas!==ot||rt.vertexTangents!==ut||rt.morphTargets!==at||rt.morphNormals!==gt||rt.morphColors!==Nt||rt.toneMapping!==Ut||rt.morphTargetsCount!==Ft)&&(Ct=!0):(Ct=!0,rt.__version=te.version);let En=rt.currentProgram;Ct===!0&&(En=gn(te,Y,Q));let La=!1,Kt=!1,Ji=!1;const Qt=En.getUniforms(),Tn=rt.uniforms;if(we.useProgram(En.program)&&(La=!0,Kt=!0,Ji=!0),te.id!==G&&(G=te.id,Kt=!0),La||ne!==R){we.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Qt.setValue(L,"projectionMatrix",R.projectionMatrix),Qt.setValue(L,"viewMatrix",R.matrixWorldInverse);const Rn=Qt.map.cameraPosition;Rn!==void 0&&Rn.setValue(L,Qe.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Qt.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Qt.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),ne!==R&&(ne=R,Kt=!0,Ji=!0)}if(Q.isSkinnedMesh){Qt.setOptional(L,Q,"bindMatrix"),Qt.setOptional(L,Q,"bindMatrixInverse");const An=Q.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Qt.setValue(L,"boneTexture",An.boneTexture,Xe))}Q.isBatchedMesh&&(Qt.setOptional(L,Q,"batchingTexture"),Qt.setValue(L,"batchingTexture",Q._matricesTexture,Xe),Qt.setOptional(L,Q,"batchingIdTexture"),Qt.setValue(L,"batchingIdTexture",Q._indirectTexture,Xe),Qt.setOptional(L,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Qt.setValue(L,"batchingColorTexture",Q._colorsTexture,Xe));const vn=re.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&nt.update(Q,re,En),(Kt||rt.receiveShadow!==Q.receiveShadow)&&(rt.receiveShadow=Q.receiveShadow,Qt.setValue(L,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Tn.envMap.value=Ze,Tn.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&Y.environment!==null&&(Tn.envMapIntensity.value=Y.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=VC()),Kt&&(Qt.setValue(L,"toneMappingExposure",O.toneMappingExposure),rt.needsLights&&Uu(Tn,Ji),Ue&&te.fog===!0&&tt.refreshFogUniforms(Tn,Ue),tt.refreshMaterialUniforms(Tn,te,ge,fe,w.state.transmissionRenderTarget[R.id]),gu.upload(L,Qi(rt),Tn,Xe)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(gu.upload(L,Qi(rt),Tn,Xe),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Qt.setValue(L,"center",Q.center),Qt.setValue(L,"modelViewMatrix",Q.modelViewMatrix),Qt.setValue(L,"normalMatrix",Q.normalMatrix),Qt.setValue(L,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const An=te.uniformsGroups;for(let Rn=0,Fi=An.length;Rn<Fi;Rn++){const $i=An[Rn];Ie.update($i,En),Ie.bind($i,En)}}return En}function Uu(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Al(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(R,Y,re){const te=Be.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Be.get(R.texture).__webglTexture=Y,Be.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const re=Be.get(R);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0};const xs=L.createFramebuffer();this.setRenderTarget=function(R,Y=0,re=0){N=R,q=Y,D=re;let te=!0,Q=null,Ue=!1,He=!1;if(R){const Ze=Be.get(R);if(Ze.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(L.FRAMEBUFFER,null),te=!1;else if(Ze.__webglFramebuffer===void 0)Xe.setupRenderTarget(R);else if(Ze.__hasExternalTextures)Xe.rebindTextures(R,Be.get(R.texture).__webglTexture,Be.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const at=R.depthTexture;if(Ze.__boundDepthTexture!==at){if(at!==null&&Be.has(at)&&(R.width!==at.image.width||R.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(R)}}const ot=R.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(He=!0);const ut=Be.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ut[Y])?Q=ut[Y][re]:Q=ut[Y],Ue=!0):R.samples>0&&Xe.useMultisampledRTT(R)===!1?Q=Be.get(R).__webglMultisampledFramebuffer:Array.isArray(ut)?Q=ut[re]:Q=ut,oe.copy(R.viewport),xe.copy(R.scissor),ce=R.scissorTest}else oe.copy(be).multiplyScalar(ge).floor(),xe.copy(Ne).multiplyScalar(ge).floor(),ce=ke;if(re!==0&&(Q=xs),we.bindFramebuffer(L.FRAMEBUFFER,Q)&&te&&we.drawBuffers(R,Q),we.viewport(oe),we.scissor(xe),we.setScissorTest(ce),Ue){const Ze=Be.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ze.__webglTexture,re)}else if(He){const Ze=Y;for(let ot=0;ot<R.textures.length;ot++){const ut=Be.get(R.textures[ot]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ot,ut.__webglTexture,re,Ze)}}else if(R!==null&&re!==0){const Ze=Be.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ze.__webglTexture,re)}G=-1},this.readRenderTargetPixels=function(R,Y,re,te,Q,Ue,He,We=0){if(!(R&&R.isWebGLRenderTarget)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze){we.bindFramebuffer(L.FRAMEBUFFER,Ze);try{const ot=R.textures[We],ut=ot.format,at=ot.type;if(!Le.textureFormatReadable(ut)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(at)){ln("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-te&&re>=0&&re<=R.height-Q&&(R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+We),L.readPixels(Y,re,te,Q,ft.convert(ut),ft.convert(at),Ue))}finally{const ot=N!==null?Be.get(N).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(R,Y,re,te,Q,Ue,He,We=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=Be.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Ze=Ze[He]),Ze)if(Y>=0&&Y<=R.width-te&&re>=0&&re<=R.height-Q){we.bindFramebuffer(L.FRAMEBUFFER,Ze);const ot=R.textures[We],ut=ot.format,at=ot.type;if(!Le.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.bufferData(L.PIXEL_PACK_BUFFER,Ue.byteLength,L.STREAM_READ),R.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+We),L.readPixels(Y,re,te,Q,ft.convert(ut),ft.convert(at),0);const Nt=N!==null?Be.get(N).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Nt);const Ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await P3(L,Ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,gt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ue),L.deleteBuffer(gt),L.deleteSync(Ut),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,re=0){const te=Math.pow(2,-re),Q=Math.floor(R.image.width*te),Ue=Math.floor(R.image.height*te),He=Y!==null?Y.x:0,We=Y!==null?Y.y:0;Xe.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,re,0,0,He,We,Q,Ue),we.unbindTexture()};const ro=L.createFramebuffer(),Ua=L.createFramebuffer();this.copyTextureToTexture=function(R,Y,re=null,te=null,Q=0,Ue=null){Ue===null&&(Q!==0?(xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Q,Q=0):Ue=0);let He,We,Ze,ot,ut,at,gt,Nt,Ut;const wt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(re!==null)He=re.max.x-re.min.x,We=re.max.y-re.min.y,Ze=re.isBox3?re.max.z-re.min.z:1,ot=re.min.x,ut=re.min.y,at=re.isBox3?re.min.z:0;else{const vn=Math.pow(2,-Q);He=Math.floor(wt.width*vn),We=Math.floor(wt.height*vn),R.isDataArrayTexture?Ze=wt.depth:R.isData3DTexture?Ze=Math.floor(wt.depth*vn):Ze=1,ot=0,ut=0,at=0}te!==null?(gt=te.x,Nt=te.y,Ut=te.z):(gt=0,Nt=0,Ut=0);const Ft=ft.convert(Y.format),rt=ft.convert(Y.type);let Yt;Y.isData3DTexture?(Xe.setTexture3D(Y,0),Yt=L.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Xe.setTexture2DArray(Y,0),Yt=L.TEXTURE_2D_ARRAY):(Xe.setTexture2D(Y,0),Yt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ct=L.getParameter(L.UNPACK_ROW_LENGTH),En=L.getParameter(L.UNPACK_IMAGE_HEIGHT),La=L.getParameter(L.UNPACK_SKIP_PIXELS),Kt=L.getParameter(L.UNPACK_SKIP_ROWS),Ji=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,wt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,wt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ot),L.pixelStorei(L.UNPACK_SKIP_ROWS,ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,at);const Qt=R.isDataArrayTexture||R.isData3DTexture,Tn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const vn=Be.get(R),An=Be.get(Y),Rn=Be.get(vn.__renderTarget),Fi=Be.get(An.__renderTarget);we.bindFramebuffer(L.READ_FRAMEBUFFER,Rn.__webglFramebuffer),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let $i=0;$i<Ze;$i++)Qt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.get(R).__webglTexture,Q,at+$i),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Be.get(Y).__webglTexture,Ue,Ut+$i)),L.blitFramebuffer(ot,ut,He,We,gt,Nt,He,We,L.DEPTH_BUFFER_BIT,L.NEAREST);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||Be.has(R)){const vn=Be.get(R),An=Be.get(Y);we.bindFramebuffer(L.READ_FRAMEBUFFER,ro),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ua);for(let Rn=0;Rn<Ze;Rn++)Qt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,Q,at+Rn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,Q),Tn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,An.__webglTexture,Ue,Ut+Rn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,An.__webglTexture,Ue),Q!==0?L.blitFramebuffer(ot,ut,He,We,gt,Nt,He,We,L.COLOR_BUFFER_BIT,L.NEAREST):Tn?L.copyTexSubImage3D(Yt,Ue,gt,Nt,Ut+Rn,ot,ut,He,We):L.copyTexSubImage2D(Yt,Ue,gt,Nt,ot,ut,He,We);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Yt,Ue,gt,Nt,Ut,He,We,Ze,Ft,rt,wt.data):Y.isCompressedArrayTexture?L.compressedTexSubImage3D(Yt,Ue,gt,Nt,Ut,He,We,Ze,Ft,wt.data):L.texSubImage3D(Yt,Ue,gt,Nt,Ut,He,We,Ze,Ft,rt,wt):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Ue,gt,Nt,He,We,Ft,rt,wt.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Ue,gt,Nt,wt.width,wt.height,Ft,wt.data):L.texSubImage2D(L.TEXTURE_2D,Ue,gt,Nt,He,We,Ft,rt,wt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,En),L.pixelStorei(L.UNPACK_SKIP_PIXELS,La),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ji),Ue===0&&Y.generateMipmaps&&L.generateMipmap(Yt),we.unbindTexture()},this.initRenderTarget=function(R){Be.get(R).__webglFramebuffer===void 0&&Xe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Xe.setTextureCube(R,0):R.isData3DTexture?Xe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Xe.setTexture2DArray(R,0):Xe.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){q=0,D=0,N=null,we.reset(),k.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Pt._getUnpackColorSpace()}}const $v={type:"change"},Yp={type:"start"},py={type:"end"},lu=new Vp,e_=new us,kC=Math.cos(70*B3.DEG2RAD),yn=new X,Kn=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wd=1e-6;class jC extends tE{constructor(e,n=null){super(e,n),this.state=Wt.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:kr.ROTATE,MIDDLE:kr.DOLLY,RIGHT:kr.PAN},this.touches={ONE:Vr.ROTATE,TWO:Vr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new js,this._lastTargetPosition=new X,this._quat=new js().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cv,this._sphericalDelta=new Cv,this._scale=1,this._panOffset=new X,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new X,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=WC.bind(this),this._onPointerDown=XC.bind(this),this._onPointerUp=qC.bind(this),this._onContextMenu=eR.bind(this),this._onMouseWheel=KC.bind(this),this._onKeyDown=QC.bind(this),this._onTouchStart=JC.bind(this),this._onTouchMove=$C.bind(this),this._onMouseDown=YC.bind(this),this._onMouseMove=ZC.bind(this),this._interceptControlDown=tR.bind(this),this._interceptControlUp=nR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($v),this.update(),this.state=Wt.NONE}update(e=null){const n=this.object.position;yn.copy(n).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=Kn:a>Math.PI&&(a-=Kn),o<-Math.PI?o+=Kn:o>Math.PI&&(o-=Kn),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=u!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),n.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=yn.length();u=this._clampDistance(h*this._scale);const m=h-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(lu.origin.copy(this.object.position),lu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lu.direction))<kC?this.object.lookAt(this.target):(e_.setFromNormalAndCoplanarPoint(this.object.up,this.target),lu.intersectPlane(e_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>wd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wd||this._lastTargetPosition.distanceToSquared(this.target)>wd?(this.dispatchEvent($v),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kn/60*this.autoRotateSpeed*e:Kn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){yn.setFromMatrixColumn(n,0),yn.multiplyScalar(-e),this._panOffset.add(yn)}_panUp(e,n){this.screenSpacePanning===!0?yn.setFromMatrixColumn(n,1):(yn.setFromMatrixColumn(n,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(e),this._panOffset.add(yn)}_pan(e,n){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;yn.copy(o).sub(this.target);let c=yn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/a.clientHeight,this.object.matrix),this._panUp(2*n*c/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=e-a.left,c=n-a.top,u=a.width,h=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panStart.set(a,o)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),o=.5*(e.pageX+a.x),c=.5*(e.pageY+a.y);this._rotateEnd.set(o,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),a=.5*(e.pageX+n.x),o=.5*(e.pageY+n.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),a=e.pageX-n.x,o=e.pageY-n.y,c=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+n.x)*.5,h=(e.pageY+n.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ce,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function XC(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function WC(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function qC(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(py),this.state=Wt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function YC(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case kr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Wt.DOLLY;break;case kr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}break;case kr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Yp)}function ZC(s){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function KC(s){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(s.preventDefault(),this.dispatchEvent(Yp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(py))}function QC(s){this.enabled!==!1&&this._handleKeyDown(s)}function JC(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Vr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Wt.TOUCH_ROTATE;break;case Vr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case Vr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Wt.TOUCH_DOLLY_PAN;break;case Vr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Yp)}function $C(s){switch(this._trackPointer(s),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Wt.NONE}}function eR(s){this.enabled!==!1&&s.preventDefault()}function tR(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nR(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class El{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iR=new qp(-1,1,1,-1,0,1);class aR extends Ai{constructor(){super(),this.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bi([0,2,0,0,2,0],2))}}const sR=new aR;class my{constructor(e){this._mesh=new fi(sR,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iR)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rR extends El{constructor(e,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,e instanceof Vn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mu.clone(e.uniforms),this.material=new Vn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new my(this.material)}render(e,n,a){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=a.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class t_ extends El{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,a){const o=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let u,h;this.inverse?(u=0,h=1):(u=1,h=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),c.buffers.stencil.setFunc(o.ALWAYS,u,4294967295),c.buffers.stencil.setClear(h),c.buffers.stencil.setLocked(!0),e.setRenderTarget(a),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(o.EQUAL,1,4294967295),c.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),c.buffers.stencil.setLocked(!0)}}class oR extends El{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class lR{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const a=e.getSize(new Ce);this._width=a.width,this._height=a.height,n=new Ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rR(vu),this.copyPass.material.blending=Xi,this.clock=new eE}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let a=!1;for(let o=0,c=this.passes.length;o<c;o++){const u=this.passes[o];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,a),u.needsSwap){if(a){const h=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(h.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(h.EQUAL,1,4294967295)}this.swapBuffers()}t_!==void 0&&(u instanceof t_?a=!0:u instanceof oR&&(a=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new Ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const a=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(a,o),this.renderTarget2.setSize(a,o);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(a,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cR extends El{constructor(e,n,a=null,o=null,c=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=a,this.clearColor=o,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(e,n,a){const o=e.autoClear;e.autoClear=!1;let c,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:a),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=o}}const uR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Qr extends El{constructor(e,n=1,a,o){super(),this.strength=n,this.radius=a,this.threshold=o,this.resolution=e!==void 0?new Ce(e.x,e.y):new Ce(256,256),this.clearColor=new yt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Ei(c,u,{type:Wi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const x=new Ei(c,u,{type:Wi});x.texture.name="UnrealBloomPass.h"+g,x.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(x);const v=new Ei(c,u,{type:Wi});v.texture.name="UnrealBloomPass.v"+g,v.texture.generateMipmaps=!1,this.renderTargetsVertical.push(v),c=Math.round(c/2),u=Math.round(u/2)}const h=uR;this.highPassUniforms=Mu.clone(h.uniforms),this.highPassUniforms.luminosityThreshold.value=o,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vn({uniforms:this.highPassUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new Ce(1/c,1/u),c=Math.round(c/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Mu.clone(vu.uniforms),this.blendMaterial=new Vn({uniforms:this.copyUniforms,vertexShader:vu.vertexShader,fragmentShader:vu.fragmentShader,blending:Ud,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new yt,this._oldClearAlpha=1,this._basic=new Gp,this._fsQuad=new my(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,n){let a=Math.round(e/2),o=Math.round(n/2);this.renderTargetBright.setSize(a,o);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(a,o),this.renderTargetsVertical[c].setSize(a,o),this.separableBlurMaterials[c].uniforms.invSize.value=new Ce(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2)}render(e,n,a,o,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=a.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=a.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let h=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=h.texture,this.separableBlurMaterials[m].uniforms.direction.value=Qr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Qr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),h=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(a),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=u}_getSeparableBlurMaterial(e){const n=[],a=e/3;for(let o=0;o<e;o++)n.push(.39894*Math.exp(-.5*o*o/(a*a))/a);return new Vn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ce(.5,.5)},direction:{value:new Ce(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Vn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Qr.BlurDirectionX=new Ce(1,0);Qr.BlurDirectionY=new Ce(0,1);const fR=()=>{const s=pe.useRef(null);return pe.useEffect(()=>{if(!s.current)return;const e=s.current,n=e.clientWidth,a=e.clientHeight,o=new o2,c=new ui(45,n/a,.1,1e3);c.position.set(0,0,18);const u=new GC({antialias:!0,alpha:!0});u.setSize(n,a),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setClearColor(new yt(0),0),u.toneMapping=D_,u.toneMappingExposure=1.5,e.appendChild(u.domElement);const h=new jC(c,u.domElement);h.enableDamping=!0,h.dampingFactor=.05,h.autoRotate=!0,h.autoRotateSpeed=2,h.enableZoom=!1,h.enablePan=!1;const m=new J2(16777215,.6);o.add(m);const p=new Q2(16777215,1.2);p.position.set(10,10,10),o.add(p);const g=new wv(22015,2,20);g.position.set(-5,5,5),o.add(g);const x=new wv(65535,2,20);x.position.set(5,-5,5),o.add(x);const v=new sl,b={metalness:.8,roughness:.1,clearcoat:1,clearcoatRoughness:.1,transparent:!0,opacity:1},E={steps:2,depth:2,bevelEnabled:!0,bevelThickness:.2,bevelSize:.1,bevelSegments:3},A=new xu;A.moveTo(-4,-4),A.lineTo(-4,2),A.lineTo(-1,-1),A.lineTo(-1,-4),A.lineTo(-4,-4);const M=new _d({color:8028,emissive:8028,emissiveIntensity:.3,...b});v.add(new fi(new ul(A,E),M));const y=new xu;y.moveTo(-4,2),y.lineTo(-4,5),y.lineTo(1,0),y.lineTo(1,-3),y.lineTo(-1,-1),y.lineTo(-4,2);const B=new _d({color:39423,emissive:39423,emissiveIntensity:.6,...b});v.add(new fi(new ul(y,E),B));const w=new xu;w.moveTo(1,-3),w.lineTo(1,5),w.lineTo(3.5,5),w.lineTo(3.5,-.5),w.lineTo(1,-3);const P=new _d({color:22195,emissive:22195,emissiveIntensity:.4,...b});v.add(new fi(new ul(w,E),P)),new eo().setFromObject(v).getCenter(v.position).multiplyScalar(-1),o.add(v);const I=60,O=new Ai,F=new Float32Array(I*3),q=[];for(let fe=0;fe<I;fe++)F[fe*3]=(Math.random()-.5)*14,F[fe*3+1]=(Math.random()-.5)*14,F[fe*3+2]=(Math.random()-.5)*14,q.push(new X((Math.random()-.5)*.05,(Math.random()-.5)*.05,(Math.random()-.5)*.05));O.setAttribute("position",new zi(F,3));const D=new h2(O,new Q_({color:65535,size:.15,transparent:!0,opacity:.8,blending:Gs}));o.add(D);const N=new cR(o,c);N.clearColor=new yt(0),N.clearAlpha=0;const G=new Qr(new Ce(n,a),1,.4,.85);G.threshold=0,G.strength=.6,G.radius=.5;const ne=new Ei(n,a,{minFilter:Qn,magFilter:Qn,format:Mi,stencilBuffer:!1}),oe=new lR(u,ne);oe.setSize(n,a),oe.addPass(N),oe.addPass(G);const xe=()=>{if(!e)return;const fe=e.clientWidth,ge=e.clientHeight;c.aspect=fe/ge,c.updateProjectionMatrix(),u.setSize(fe,ge),oe.setSize(fe,ge)},ce=new ResizeObserver(()=>xe());ce.observe(e);let H,W=0;const K=()=>{H=requestAnimationFrame(K),W+=.01;const fe=Math.sin(W*2)*.2+.8;M.emissiveIntensity=.3*fe,B.emissiveIntensity=.6*fe,P.emissiveIntensity=.4*fe;const ge=O.attributes.position.array;for(let z=0;z<I;z++)ge[z*3]+=q[z].x,ge[z*3+1]+=q[z].y,ge[z*3+2]+=q[z].z,Math.abs(ge[z*3])>7&&(q[z].x*=-1),Math.abs(ge[z*3+1])>7&&(q[z].y*=-1),Math.abs(ge[z*3+2])>7&&(q[z].z*=-1);O.attributes.position.needsUpdate=!0,h.update(),oe.render()};return K(),()=>{cancelAnimationFrame(H),ce.disconnect(),e&&u.domElement&&e.removeChild(u.domElement),u.dispose(),oe.dispose(),ne.dispose(),o.traverse(fe=>{fe instanceof fi&&(fe.geometry.dispose(),fe.material instanceof Ys&&fe.material.dispose())})}},[]),_.jsx("div",{ref:s,className:"w-14 h-14 relative"})},n_=[{label:"خانه",path:"/"},{label:"راهکارها",path:"/services"},{label:"نمونه‌کارها",path:"/portfolio"},{label:"آکادمی",path:"/academy"},{label:"درباره ما",path:"/about"},{label:"فرصت‌های شغلی",path:"/careers"},{label:"تماس با ما",path:"/contact"}],hR=()=>{const[s,e]=pe.useState(!1),n=Da(),a=()=>e(!s);return _.jsxs("nav",{className:"fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-background/80 backdrop-blur-md",children:[_.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:_.jsxs("div",{className:"flex items-center justify-between h-20",children:[_.jsxs(bn,{to:"/",className:"flex items-center gap-3 group",children:[_.jsx("div",{className:"flex items-center justify-center",children:_.jsx(fR,{})}),_.jsx("span",{className:"font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors",children:"نکسورا"})]}),_.jsxs("div",{className:"hidden lg:flex items-center gap-8",children:[_.jsx("div",{className:"flex items-center gap-1",children:n_.map(o=>_.jsx(bn,{to:o.path,className:`px-4 py-2 rounded-lg text-sm font-medium transition-all ${n.pathname===o.path?"text-cyan-400 bg-cyan-400/10":"text-slate-400 hover:text-white hover:bg-white/5"}`,children:o.label},o.path))}),_.jsx(bn,{to:"/contact",children:_.jsx(Pi,{size:"sm",className:"shadow-none",children:"مشاوره رایگان"})})]}),_.jsx("div",{className:"lg:hidden flex items-center",children:_.jsx("button",{onClick:a,className:"text-slate-300 hover:text-white p-2",children:s?_.jsx(Dd,{size:28}):_.jsx(IM,{size:28})})})]})}),s&&_.jsx("div",{className:"lg:hidden absolute top-20 left-0 w-full bg-surface border-b border-slate-800 animate-in slide-in-from-top-5 fade-in duration-300 shadow-2xl",children:_.jsxs("div",{className:"px-4 pt-4 pb-8 space-y-2",children:[n_.map(o=>_.jsx(bn,{to:o.path,onClick:()=>e(!1),className:`block px-4 py-3 rounded-lg text-base font-medium ${n.pathname===o.path?"text-cyan-400 bg-cyan-400/10":"text-slate-400 hover:text-white hover:bg-slate-800"}`,children:o.label},o.path)),_.jsx("div",{className:"pt-4",children:_.jsx(bn,{to:"/contact",onClick:()=>e(!1),children:_.jsx(Pi,{className:"w-full",children:"درخواست مشاوره رایگان"})})})]})})]})},dR=()=>_.jsx("footer",{className:"bg-surface border-t border-slate-800 pt-16 pb-8",children:_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[_.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",children:[_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center text-white",children:_.jsx(AM,{size:18})}),_.jsx("span",{className:"font-bold text-xl text-white",children:"نکسورا"})]}),_.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:"پیشرو در ارائه راهکارهای هوشمند سازمانی. ما با تلفیق هوش مصنوعی و خلاقیت، آینده کسب‌وکار شما را متحول می‌کنیم."}),_.jsxs("div",{className:"flex gap-4",children:[_.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:_.jsx(M_,{size:20})}),_.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:_.jsx(w_,{size:20})}),_.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:_.jsx(OM,{size:20})}),_.jsx("a",{href:"#",className:"text-slate-500 hover:text-cyan-400 transition-colors",children:_.jsx(UM,{size:20})})]})]}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-6",children:"دسترسی سریع"}),_.jsxs("ul",{className:"space-y-4",children:[_.jsx("li",{children:_.jsx(bn,{to:"/about",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"درباره نکسورا"})}),_.jsx("li",{children:_.jsx(bn,{to:"/portfolio",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"نمونه‌کارها"})}),_.jsx("li",{children:_.jsx(bn,{to:"/careers",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"فرصت‌های شغلی"})}),_.jsx("li",{children:_.jsx(bn,{to:"/contact",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"تماس با ما"})})]})]}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-6",children:"خدمات"}),_.jsxs("ul",{className:"space-y-4",children:[_.jsx("li",{children:_.jsx(bn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"هوش مصنوعی و ML"})}),_.jsx("li",{children:_.jsx(bn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"اتوماسیون اداری"})}),_.jsx("li",{children:_.jsx(bn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"ربات‌های تلگرام"})}),_.jsx("li",{children:_.jsx(bn,{to:"/services",className:"text-slate-400 hover:text-primary transition-colors text-sm",children:"تحلیل داده"})})]})]}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-6",children:"خبرنامه"}),_.jsx("p",{className:"text-slate-400 text-sm mb-4",children:"برای دریافت آخرین اخبار تکنولوژی عضو شوید."}),_.jsxs("form",{className:"flex flex-col gap-3",onSubmit:s=>s.preventDefault(),children:[_.jsx("input",{type:"email",placeholder:"ایمیل خود را وارد کنید",className:"bg-slate-950 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors w-full"}),_.jsx("button",{className:"bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors border border-slate-700",children:"عضویت"})]})]})]}),_.jsxs("div",{className:"border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4",children:[_.jsx("p",{className:"text-slate-500 text-xs",children:"© ۱۴۰۳ تمامی حقوق برای نکسورا استودیو محفوظ است."}),_.jsxs("div",{className:"flex gap-6",children:[_.jsx("a",{href:"#",className:"text-slate-500 hover:text-white text-xs",children:"قوانین و مقررات"}),_.jsx("a",{href:"#",className:"text-slate-500 hover:text-white text-xs",children:"حریم خصوصی"})]})]})]})}),pR=()=>{const[s,e]=pe.useState(!1),[n,a]=pe.useState([{text:"سلام! من ایجنت هوشمند نکسورا هستم. می‌خوای نمونه‌کارهای مربوط به صنعت خودت رو نشونت بدم؟",isBot:!0}]),[o,c]=pe.useState(""),u=()=>{o.trim()&&(a(h=>[...h,{text:o,isBot:!1}]),c(""),setTimeout(()=>{a(h=>[...h,{text:"ممنون از پیام شما. کارشناسان ما به زودی با شما تماس خواهند گرفت.",isBot:!0}])},1e3))};return _.jsxs("div",{className:"fixed bottom-6 left-6 z-50 flex flex-col items-end",children:[s&&_.jsxs("div",{className:"mb-4 w-80 md:w-96 bg-surface border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300",children:[_.jsxs("div",{className:"bg-gradient-to-r from-indigo-900 to-slate-900 p-4 border-b border-slate-700 flex justify-between items-center",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary",children:_.jsx(S_,{size:18})}),_.jsxs("div",{children:[_.jsx("h4",{className:"text-white text-sm font-bold",children:"پشتیبان هوشمند"}),_.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-green-400",children:[_.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"}),"آنلاین"]})]})]}),_.jsx("button",{onClick:()=>e(!1),className:"text-slate-400 hover:text-white",children:_.jsx(Dd,{size:18})})]}),_.jsx("div",{className:"h-80 overflow-y-auto p-4 space-y-4 bg-slate-950/50",children:n.map((h,m)=>_.jsx("div",{className:`flex ${h.isBot?"justify-start":"justify-end"}`,children:_.jsx("div",{className:`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${h.isBot?"bg-surface border border-slate-700 text-slate-200 rounded-tr-none":"bg-primary text-white rounded-tl-none"}`,children:h.text})},m))}),_.jsx("div",{className:"p-3 bg-surface border-t border-slate-800",children:_.jsxs("form",{className:"flex gap-2",onSubmit:h=>{h.preventDefault(),u()},children:[_.jsx("input",{type:"text",value:o,onChange:h=>c(h.target.value),placeholder:"پیام خود را بنویسید...",className:"flex-grow bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"}),_.jsx("button",{type:"submit",className:"bg-primary hover:bg-primary/90 text-white p-2 rounded-lg transition-colors",children:_.jsx(A_,{size:18})})]})})]}),_.jsx(Pi,{onClick:()=>e(!s),className:"rounded-full w-14 h-14 shadow-2xl shadow-primary/40 flex items-center justify-center p-0",children:s?_.jsx(Dd,{size:24}):_.jsx(VM,{size:24})})]})},mR=()=>{const[s,e]=pe.useState(10),[n,a]=pe.useState(15),[o,c]=pe.useState(30),u=pe.useMemo(()=>s*n*(o/100),[s,n,o]),h=u*12,m=pe.useMemo(()=>{const I=[];for(let O=0;O<=12;O++){const F=O/12,q=F<.5?2*F*F:-1+(4-2*F)*F,D=u*q;I.push(D)}return I},[u]),p=400,g=250,x={top:30,right:10,bottom:30,left:50},v=p-x.left-x.right,b=g-x.top-x.bottom,E=Math.max(u*1.1,10),A=I=>b-I/E*b,M=I=>I/12*v,y=()=>{if(m.length===0)return"";let I=`M ${x.left} ${x.top+A(m[0])}`;for(let O=1;O<m.length;O++){const F=x.left+M(O),q=x.top+A(m[O]),D=x.left+M(O-1),N=x.top+A(m[O-1]),G=D+(F-D)*.5,ne=N,oe=D+(F-D)*.5;I+=` C ${G} ${ne}, ${oe} ${q}, ${F} ${q}`}return I},B=()=>{const I=y();return I?`${I} L ${x.left+v} ${x.top+b} L ${x.left} ${x.top+b} Z`:""},w=I=>new Intl.NumberFormat("fa-IR").format(I),P=(I,O,F)=>{const q=(I-O)/(F-O)*100;return{background:`linear-gradient(to left, #6366f1 0%, #8b5cf6 ${q}%, #1e293b ${q}%, #1e293b 100%)`}};return _.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16",children:[_.jsx("style",{children:`
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
      `}),_.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 items-stretch",children:[_.jsxs("div",{className:"bg-[#0f172a] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-xl shadow-slate-900/50 relative overflow-hidden h-full min-h-[400px]",children:[_.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"}),_.jsxs("div",{className:"relative z-10 flex items-start justify-between mb-8",children:[_.jsxs("div",{children:[_.jsx("h3",{className:"text-2xl font-bold text-white mb-2",children:"نمودار بازگشت سرمایه"}),_.jsx("p",{className:"text-slate-400 text-sm",children:"روند کاهش هزینه‌های عملیاتی در ۱۲ ماه اول"})]}),_.jsx("div",{className:"bg-slate-800/50 p-2 rounded-xl border border-slate-700",children:_.jsx(C_,{className:"text-yellow-400",size:20})})]}),_.jsx("div",{className:"flex-grow w-full relative",children:_.jsxs("svg",{viewBox:`0 0 ${p} ${g}`,className:"w-full h-full overflow-visible",preserveAspectRatio:"none",children:[_.jsxs("defs",{children:[_.jsxs("linearGradient",{id:"chartFill",x1:"0",y1:"0",x2:"0",y2:"1",children:[_.jsx("stop",{offset:"0%",stopColor:"#8b5cf6",stopOpacity:"0.4"}),_.jsx("stop",{offset:"100%",stopColor:"#8b5cf6",stopOpacity:"0.0"})]}),_.jsxs("linearGradient",{id:"chartLine",x1:"0",y1:"0",x2:"1",y2:"0",children:[_.jsx("stop",{offset:"0%",stopColor:"#6366f1"}),_.jsx("stop",{offset:"100%",stopColor:"#a855f7"})]})]}),[0,.25,.5,.75,1].map((I,O)=>{const F=b*(1-I);return _.jsxs("g",{children:[_.jsx("line",{x1:x.left,y1:x.top+F,x2:p-x.right,y2:x.top+F,stroke:"#334155",strokeWidth:"1",strokeDasharray:"4 6",opacity:"0.3"}),_.jsxs("text",{x:x.left-15,y:x.top+F+4,fill:"#64748b",fontSize:"11",textAnchor:"end",className:"font-mono font-medium",children:[w(Math.round(E*I)),"M"]})]},O)}),_.jsx("path",{d:B(),fill:"url(#chartFill)",className:"transition-all duration-300 ease-out"}),_.jsx("path",{d:y(),fill:"none",stroke:"url(#chartLine)",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",className:"drop-shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300 ease-out"}),[1,3,6,9,12].map(I=>{const O=x.left+M(I);return _.jsxs("g",{children:[_.jsxs("text",{x:O,y:g,fill:"#94a3b8",fontSize:"11",textAnchor:"middle",className:"font-bold",children:["ماه ",w(I)]}),_.jsx("line",{x1:O,y1:x.top+b,x2:O,y2:x.top+b+5,stroke:"#334155",strokeWidth:"1"})]},I)})]})})]}),_.jsxs("div",{className:"bg-[#0f172a] border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center",children:[_.jsx("div",{className:"absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"}),_.jsxs("div",{className:"relative z-10",children:[_.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[_.jsx("div",{className:"bg-primary/20 p-2.5 rounded-xl text-primary",children:_.jsx(xM,{size:24})}),_.jsx("h2",{className:"text-3xl font-black text-white",children:"ماشین حساب ROI"})]}),_.jsx("p",{className:"text-slate-400 mb-10 text-sm leading-relaxed max-w-md",children:"باور نکردنی است که چقدر سرمایه در فرآیندهای دستی هدر می‌رود. با ابزار زیر تخمین بزنید که نکسورا چقدر به سودآوری شما کمک می‌کند."}),_.jsxs("div",{className:"space-y-8",children:[_.jsxs("div",{className:"group",children:[_.jsxs("div",{className:"flex justify-between items-center mb-4",children:[_.jsx("label",{className:"text-slate-200 font-bold text-base",children:"تعداد کارمندان (نفر)"}),_.jsx("div",{className:"bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg min-w-[3.5rem] text-center text-white font-bold shadow-inner",children:w(s)})]}),_.jsx("input",{type:"range",min:"1",max:"100",step:"1",value:s,onChange:I=>e(Number(I.target.value)),style:P(s,1,100),className:"rounded-lg h-2 w-full"})]}),_.jsxs("div",{className:"group",children:[_.jsxs("div",{className:"flex justify-between items-center mb-4",children:[_.jsx("label",{className:"text-slate-200 font-bold text-base",children:"میانگین حقوق ماهانه"}),_.jsxs("div",{className:"bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg min-w-[7rem] text-center text-white font-bold text-sm shadow-inner",children:[w(n)," میلیون تومان"]})]}),_.jsx("input",{type:"range",min:"5",max:"100",step:"1",value:n,onChange:I=>a(Number(I.target.value)),style:P(n,5,100),className:"rounded-lg h-2 w-full"})]}),_.jsxs("div",{className:"group",children:[_.jsxs("div",{className:"flex justify-between items-center mb-4",children:[_.jsx("label",{className:"text-slate-200 font-bold text-base",children:"قابلیت اتوماسیون"}),_.jsxs("div",{className:"bg-slate-800/80 border border-slate-700 px-3 py-1 rounded-lg min-w-[3.5rem] text-center text-white font-bold shadow-inner",children:[w(o),"٪"]})]}),_.jsx("input",{type:"range",min:"0",max:"100",step:"5",value:o,onChange:I=>c(Number(I.target.value)),style:P(o,0,100),className:"rounded-lg h-2 w-full"})]})]}),_.jsx("div",{className:"mt-12 pt-8 border-t border-slate-800/50",children:_.jsxs("div",{className:"flex flex-col md:flex-row md:items-end md:justify-between gap-4",children:[_.jsx("p",{className:"text-slate-400 text-sm font-medium",children:"صرفه‌جویی سالانه احتمالی:"}),_.jsxs("div",{className:"text-right flex items-baseline gap-2",children:[_.jsx("span",{className:"text-5xl font-black text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-emerald-500 drop-shadow-lg",children:w(Math.round(h))}),_.jsx("span",{className:"text-xl font-bold text-slate-500",children:"میلیون تومان"})]})]})})]})]})]})]})},xR=()=>_.jsxs("div",{className:"absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-[#020617]",children:[_.jsx("style",{children:`
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
    `}),_.jsx("div",{className:"absolute inset-0 opacity-[0.07]",style:{backgroundImage:"linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",backgroundSize:"40px 40px",animation:"grid-move 20s linear infinite"}}),_.jsx("div",{className:"absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"}),_.jsx("div",{className:"absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite_reverse]"}),_.jsx("div",{className:"absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[80px] animate-[bounce_10s_infinite]"}),_.jsx("div",{className:"absolute inset-0",children:[...Array(25)].map((s,e)=>_.jsx("div",{className:"absolute rounded-full",style:{top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,width:`${Math.random()*3+2}px`,height:`${Math.random()*3+2}px`,backgroundColor:Math.random()>.5?"#22d3ee":"#8b5cf6",boxShadow:`0 0 ${Math.random()*10+5}px ${Math.random()>.5?"#22d3ee":"#8b5cf6"}`,animation:`float-particle ${15+Math.random()*10}s infinite ease-in-out ${Math.random()*5}s`,opacity:.4}},e))}),_.jsxs("svg",{className:"absolute inset-0 w-full h-full opacity-30",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:"circuit-grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[_.jsx("stop",{offset:"0%",stopColor:"transparent"}),_.jsx("stop",{offset:"50%",stopColor:"#22d3ee"}),_.jsx("stop",{offset:"100%",stopColor:"transparent"})]})}),_.jsx("path",{d:"M0,100 Q400,150 800,100 T1600,100",fill:"none",stroke:"url(#circuit-grad)",strokeWidth:"1",strokeDasharray:"10 10",className:"animate-[pulse_5s_infinite]"}),_.jsx("path",{d:"M0,300 Q300,250 600,300 T1200,300",fill:"none",stroke:"url(#circuit-grad)",strokeWidth:"1",strokeDasharray:"15 15",className:"animate-[pulse_7s_infinite]"}),_.jsx("path",{d:"M0,600 Q500,650 1000,600 T2000,600",fill:"none",stroke:"url(#circuit-grad)",strokeWidth:"1",strokeDasharray:"20 20",className:"animate-[pulse_6s_infinite]"})]}),_.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"})]}),gR=()=>_.jsxs("div",{className:"flex flex-col gap-24 pb-20",children:[_.jsxs("section",{className:"relative min-h-[90vh] flex items-center pt-10 overflow-hidden",children:[_.jsx(xR,{}),_.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full",children:_.jsxs("div",{className:"text-center max-w-4xl mx-auto space-y-8",children:[_.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm text-cyan-400 text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),"پیشرو در تکنولوژی هوش مصنوعی ایران"]}),_.jsxs("h1",{className:"text-5xl md:text-7xl font-black leading-tight tracking-tight text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100",children:["هوش مصنوعی، ",_.jsx("br",{}),_.jsx("span",{className:"gradient-text",children:"نیروی محرکه"})," کسب‌وکار شما"]}),_.jsx("p",{className:"text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200",children:"ما در نکسورا با بهره‌گیری از جدیدترین مدل‌های هوش مصنوعی، فرایندهای سازمانی شما را خودکار کرده و بهره‌وری را به سطح جدیدی می‌رسانیم."}),_.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300",children:[_.jsx(bn,{to:"/contact",children:_.jsx(Pi,{size:"lg",className:"w-full sm:w-auto",children:"درخواست مشاوره رایگان"})}),_.jsx(bn,{to:"/portfolio",children:_.jsx(Pi,{variant:"secondary",size:"lg",className:"w-full sm:w-auto",children:"مشاهده نمونه‌کارها"})})]})]})})]}),_.jsxs("section",{className:"w-full overflow-hidden border-y border-white/5 bg-slate-950/50 py-10",children:[_.jsx("div",{className:"max-w-7xl mx-auto px-4 text-center mb-8",children:_.jsx("span",{className:"text-sm text-slate-500 font-medium",children:"مورد اعتماد تکنولوژی‌های برتر جهان"})}),_.jsxs("div",{className:"flex justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 flex-wrap px-4",children:[_.jsx("span",{className:"text-2xl font-bold text-white",children:"OpenAI"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"Python"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"TensorFlow"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"PyTorch"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"n8n"}),_.jsx("span",{className:"text-2xl font-bold text-white",children:"LangChain"})]})]}),_.jsxs("section",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",children:[_.jsxs("div",{className:"text-center mb-16",children:[_.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-white mb-4",children:"خدمات اصلی نکسورا"}),_.jsx("p",{className:"text-slate-400",children:"راهکارهای جامع برای تحول دیجیتال سازمان شما"})]}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[{icon:_.jsx(S_,{className:"w-10 h-10 text-primary"}),title:"ایجنت‌های هوشمند",desc:"طراحی دستیارهای هوشمند اختصاصی برای پاسخگویی به مشتریان و مدیریت وظایف."},{icon:_.jsx(C_,{className:"w-10 h-10 text-cyan-400"}),title:"اتوماسیون فرایندها",desc:"حذف کارهای تکراری و اتصال سیستم‌های مختلف سازمانی با n8n و Python."},{icon:_.jsx(CM,{className:"w-10 h-10 text-pink-500"}),title:"هوش تجاری و داده",desc:"تحلیل پیشرفته داده‌ها برای تصمیم‌گیری دقیق‌تر و پیش‌بینی روندهای بازار."}].map((s,e)=>_.jsxs("div",{className:"bg-surface border border-slate-800 p-8 rounded-2xl hover:border-primary/50 transition-all hover:translate-y-[-5px] group",children:[_.jsx("div",{className:"mb-6 bg-slate-950 w-20 h-20 rounded-2xl flex items-center justify-center border border-slate-800 group-hover:border-primary/30 transition-colors",children:s.icon}),_.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:s.title}),_.jsx("p",{className:"text-slate-400 leading-relaxed text-sm",children:s.desc})]},e))})]}),_.jsx(mR,{}),_.jsxs("section",{className:"py-20 text-center px-4",children:[_.jsx("h2",{className:"text-4xl font-bold text-white mb-6",children:"آماده تحول هستید؟"}),_.jsx("p",{className:"text-slate-400 mb-8 max-w-xl mx-auto",children:"برای دریافت مشاوره تخصصی و نیازسنجی رایگان، همین حالا با متخصصان نکسورا تماس بگیرید."}),_.jsx(bn,{to:"/contact",children:_.jsx(Pi,{size:"lg",className:"shadow-2xl shadow-primary/30",children:"شروع همکاری"})})]})]}),vR=({className:s})=>_.jsxs("svg",{viewBox:"0 0 24 24",className:s,fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[_.jsx("path",{d:"M12 2C7 2 3 3.5 3 5C3 6.5 7 8 12 8C17 8 21 6.5 21 5C21 3.5 17 2 12 2Z"}),_.jsx("path",{d:"M21 5V19C21 20.5 17 22 12 22C7 22 3 20.5 3 19V5"}),_.jsx("path",{d:"M3 12C3 13.5 7 15 12 15C17 15 21 13.5 21 12"})]}),_R=({className:s})=>_.jsxs("svg",{viewBox:"0 0 24 24",className:s,fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[_.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),_.jsx("path",{d:"M2 8L12 14L22 8"}),_.jsx("path",{d:"M2 16L7 13"}),_.jsx("path",{d:"M22 16L17 13"})]}),yR=({className:s})=>_.jsx("svg",{viewBox:"0 0 24 24",className:s,fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:_.jsx("path",{d:"M13 2L3 14H12L11 22L21 10H12L13 2Z"})}),xy=({className:s="w-10 h-10"})=>_.jsxs("svg",{viewBox:"0 0 64 64",className:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[_.jsxs("defs",{children:[_.jsxs("linearGradient",{id:"cyanGrad",x1:"0",y1:"0",x2:"64",y2:"64",children:[_.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),_.jsx("stop",{offset:"100%",stopColor:"#0891b2"})]}),_.jsxs("filter",{id:"glow-cyan",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[_.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),_.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]})]}),_.jsx("circle",{cx:"32",cy:"32",r:"28",stroke:"url(#cyanGrad)",strokeWidth:"0.5",opacity:"0.2"}),_.jsx("path",{d:"M32 4V12M32 52V60M4 32H12M52 32H60",stroke:"url(#cyanGrad)",strokeWidth:"1",opacity:"0.4"}),_.jsx("g",{className:"animate-[spin_20s_linear_infinite] origin-center",children:_.jsx("path",{d:"M32 16L46 24V40L32 48L18 40V24L32 16Z",stroke:"url(#cyanGrad)",strokeWidth:"1.5",strokeDasharray:"4 4",opacity:"0.8"})}),_.jsx("circle",{cx:"32",cy:"32",r:"8",stroke:"url(#cyanGrad)",strokeWidth:"2"}),_.jsx("path",{d:"M32 24V32L38 38",stroke:"url(#cyanGrad)",strokeWidth:"2",strokeLinecap:"round"}),_.jsx("circle",{cx:"50",cy:"20",r:"2",fill:"#22d3ee",className:"animate-pulse"}),_.jsx("circle",{cx:"14",cy:"44",r:"2",fill:"#22d3ee",className:"animate-pulse delay-700"}),_.jsx("path",{d:"M10 10L20 20",stroke:"url(#cyanGrad)",strokeWidth:"1.5",className:"animate-[pulse_3s_infinite]"}),_.jsx("path",{d:"M54 54L44 44",stroke:"url(#cyanGrad)",strokeWidth:"1.5",className:"animate-[pulse_3s_infinite_1s]"})]}),gy=({className:s="w-10 h-10"})=>_.jsxs("svg",{viewBox:"0 0 64 64",className:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[_.jsx("defs",{children:_.jsxs("linearGradient",{id:"purpleGrad",x1:"0",y1:"0",x2:"64",y2:"64",children:[_.jsx("stop",{offset:"0%",stopColor:"#a78bfa"}),_.jsx("stop",{offset:"100%",stopColor:"#7c3aed"})]})}),_.jsx("path",{d:"M16 20C16 12 20 8 32 8C44 8 48 12 48 20V44C48 52 44 56 32 56C20 56 16 52 16 44V20Z",stroke:"url(#purpleGrad)",strokeWidth:"2",strokeLinecap:"round",fill:"rgba(124,58,237,0.05)"}),_.jsx("path",{d:"M22 24C22 24 26 28 32 28C38 28 42 24 42 24",stroke:"url(#purpleGrad)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),_.jsx("path",{d:"M22 36C22 36 26 40 32 40C38 40 42 36 42 36",stroke:"url(#purpleGrad)",strokeWidth:"1.5",strokeLinecap:"round",opacity:"0.6"}),_.jsx("circle",{cx:"32",cy:"32",r:"4",fill:"#a78bfa",className:"animate-[pulse_2s_ease-in-out_infinite]"}),_.jsx("circle",{cx:"32",cy:"32",r:"12",stroke:"url(#purpleGrad)",strokeWidth:"0.5",strokeDasharray:"2 2",className:"animate-[spin_10s_linear_infinite]"}),_.jsx("path",{d:"M8 32H12",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round",className:"animate-[pulse_1s_infinite]"}),_.jsx("path",{d:"M52 32H56",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round",className:"animate-[pulse_1s_infinite_0.5s]"}),_.jsx("path",{d:"M32 4V6",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round"}),_.jsx("path",{d:"M32 58V60",stroke:"#a78bfa",strokeWidth:"2",strokeLinecap:"round"})]}),bR=()=>_.jsxs("div",{className:"w-full h-full min-h-[350px] bg-slate-950 relative overflow-hidden flex items-center justify-center group select-none",role:"img","aria-label":"تصویر سازی گرافیکی از سیستم اتوماسیون هوشمند فرایندها",children:[_.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"}),_.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"}),_.jsxs("div",{className:"relative z-10 w-64 h-64 flex items-center justify-center",children:[_.jsx("div",{className:"absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"}),_.jsx("div",{className:"absolute inset-4 border border-dashed border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"}),_.jsxs("div",{className:"relative w-24 h-24 bg-slate-900 rounded-full border border-cyan-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)] z-20",children:[_.jsx(xy,{className:"w-14 h-14 text-cyan-400 animate-pulse"}),[0,120,240].map(s=>_.jsx("div",{className:"absolute top-1/2 left-1/2 w-[140px] h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent -translate-y-1/2 origin-left",style:{transform:`translate(-50%, -50%) rotate(${s}deg) translateX(50%)`}},s))]}),_.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)] animate-bounce delay-0",children:_.jsx(vR,{className:"w-6 h-6 text-cyan-300"})}),_.jsx("div",{className:"absolute bottom-4 right-0 translate-x-4 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.1)] animate-bounce delay-700",children:_.jsx(_R,{className:"w-6 h-6 text-purple-300"})}),_.jsx("div",{className:"absolute bottom-4 left-0 -translate-x-4 bg-slate-800/80 backdrop-blur-md p-2.5 rounded-xl border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.1)] animate-bounce delay-1000",children:_.jsx(yR,{className:"w-6 h-6 text-yellow-300"})})]})]}),SR=()=>_.jsxs("div",{className:"w-full h-full min-h-[350px] bg-slate-950 relative overflow-hidden flex items-center justify-center group select-none",role:"img","aria-label":"تصویر سازی گرافیکی از ایجنت هوشمند تعاملی",children:[_.jsx("div",{className:"absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-primary/10 rounded-full blur-[100px]"}),_.jsx("div",{className:"absolute bottom-[-20%] left-[-20%] w-[80%] h-[80%] bg-indigo-500/10 rounded-full blur-[100px]"}),_.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-center w-full max-w-xs",children:[_.jsxs("div",{className:"relative mb-8 group-hover:scale-105 transition-transform duration-500",children:[_.jsxs("div",{className:"w-32 h-32 bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2rem] border border-slate-700 flex items-center justify-center shadow-2xl relative z-10 overflow-hidden",children:[_.jsx(gy,{className:"w-20 h-20 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"}),_.jsx("div",{className:"absolute w-full h-full inset-0 bg-primary/20 blur-xl -z-10 animate-pulse"}),_.jsx("div",{className:"absolute top-0 left-0 w-full h-1 bg-white/20 blur-sm animate-[scan_3s_linear_infinite]"}),_.jsx("style",{children:`
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                50% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
          `})]}),_.jsx("div",{className:"absolute -right-16 -top-6 bg-slate-800/90 backdrop-blur-md border border-slate-700 px-4 py-2.5 rounded-2xl rounded-bl-none text-xs text-slate-300 shadow-xl animate-[bounce_3s_infinite]",children:_.jsxs("span",{className:"flex gap-2 items-center text-white",children:[_.jsx(Nd,{size:14,className:"text-green-400"})," ثبت سفارش آنی"]})}),_.jsx("div",{className:"absolute -left-16 top-12 bg-slate-800/90 backdrop-blur-md border border-slate-700 px-4 py-2.5 rounded-2xl rounded-br-none text-xs text-slate-300 shadow-xl animate-[bounce_4s_infinite_0.5s]",children:_.jsxs("span",{className:"flex gap-2 items-center text-white",children:[_.jsx(Nd,{size:14,className:"text-green-400"})," پشتیبانی ۲۴/۷"]})})]}),_.jsxs("div",{className:"w-full relative flex flex-col items-center gap-2",children:[_.jsx("div",{className:"w-px h-12 bg-gradient-to-b from-slate-700 to-transparent"}),_.jsxs("div",{className:"flex gap-4 opacity-50",children:[_.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-slate-500",fill:"none",stroke:"currentColor",children:_.jsx("path",{d:"M4 6H20M4 12H20M4 18H20",strokeWidth:"2",strokeLinecap:"round"})}),_.jsxs("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-slate-500",fill:"none",stroke:"currentColor",children:[_.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",strokeWidth:"2"}),_.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",strokeWidth:"2"}),_.jsx("path",{d:"M6 6H6.01",strokeWidth:"3",strokeLinecap:"round"}),_.jsx("path",{d:"M6 18H6.01",strokeWidth:"3",strokeLinecap:"round"})]})]})]})]})]}),MR=({question:s,answer:e})=>{const[n,a]=pe.useState(!1);return _.jsxs("div",{className:`bg-surface border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${n?"border-primary/50 shadow-lg shadow-primary/5":"hover:border-slate-600"}`,children:[_.jsxs("button",{onClick:()=>a(!n),className:"w-full flex items-center justify-between p-5 md:p-6 text-right focus:outline-none",children:[_.jsx("span",{className:`text-base md:text-lg font-bold transition-colors ${n?"text-primary":"text-white"}`,children:s}),_.jsx(_M,{className:`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 mr-4 ${n?"rotate-180 text-primary":""}`})]}),_.jsx("div",{className:`grid transition-[grid-template-rows] duration-300 ease-out ${n?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0"}`,children:_.jsx("div",{className:"overflow-hidden",children:_.jsx("p",{className:"text-slate-400 text-sm md:text-base leading-relaxed px-5 md:px-6 pb-6 pt-0 border-t border-slate-800/50 pt-4",children:e})})})]})},ER=()=>_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24",children:[_.jsxs("div",{className:"text-center max-w-3xl mx-auto",children:[_.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:"راهکارهای هوشمند نکسورا"}),_.jsx("p",{className:"text-xl text-slate-400 leading-relaxed",children:"ما مجموعه‌ای از پیشرفته‌ترین ابزارهای هوش مصنوعی را برای حل چالش‌های واقعی کسب‌وکار شما طراحی کرده‌ایم."})]}),_.jsx("div",{className:"space-y-20",children:[{id:"automation-service",title:"اتوماسیون هوشمند فرایندها (RPA)",desc:"با استفاده از n8n و Python، ما گردش‌کارهای پیچیده بین نرم‌افزارهای مختلف (CRM، حسابداری، ایمیل مارکتینگ) را کاملاً خودکار می‌کنیم.",features:["اتصال بیش از ۱۰۰۰ سرویس مختلف","بدون نیاز به دخالت انسانی","کاهش ۹۰٪ خطاهای ورود اطلاعات"],icon:_.jsx(xy,{className:"w-16 h-16 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"}),Visual:bR,tooltip:"مدیریت و خودکارسازی کامل گردش کار سازمانی"},{id:"agent-service",title:"ایجنت‌های هوشمند تعاملی",desc:"چت‌بات‌های پیشرفته مبتنی بر LLM که فراتر از یک پاسخگوی ساده هستند. آنها می‌توانند سفارش ثبت کنند، وقت رزرو کنند و پشتیبانی فنی ارائه دهند.",features:["پاسخگویی ۲۴/۷ به مشتریان","یادگیری از مستندات سازمانی شما","شخصی‌سازی لحن و رفتار"],icon:_.jsx(gy,{className:"w-16 h-16 drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]"}),Visual:SR,tooltip:"دستیار هوشمند با قابلیت یادگیری و تعامل انسانی"}].map((s,e)=>_.jsxs("div",{className:`flex flex-col md:flex-row items-center gap-12 ${e%2===1?"md:flex-row-reverse":""}`,children:[_.jsxs("div",{className:"flex-1 space-y-6",children:[_.jsxs("div",{className:"relative group/icon inline-block",role:"img","aria-label":s.title,"aria-describedby":`tooltip-${s.id}`,tabIndex:0,children:[_.jsxs("div",{className:"w-24 h-24 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 shadow-lg shadow-primary/5 transition-all duration-300 group-hover/icon:scale-105 group-hover/icon:border-primary/50 group-hover/icon:shadow-primary/20 cursor-help relative overflow-hidden",children:[_.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/icon:opacity-100 transition-opacity"}),s.icon]}),_.jsxs("div",{id:`tooltip-${s.id}`,role:"tooltip",className:"absolute -top-14 left-1/2 -translate-x-1/2 px-4 py-2.5 bg-slate-800/95 backdrop-blur-sm text-white text-sm font-medium rounded-xl border border-slate-700 opacity-0 group-hover/icon:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-50 shadow-2xl translate-y-2 group-hover/icon:translate-y-0",children:[s.tooltip,_.jsx("div",{className:"absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-800/95 border-b border-r border-slate-700 rotate-45"})]})]}),_.jsx("h2",{className:"text-3xl font-bold text-white",children:s.title}),_.jsx("p",{className:"text-slate-400 text-lg leading-relaxed",children:s.desc}),_.jsx("ul",{className:"space-y-3",children:s.features.map((n,a)=>_.jsxs("li",{className:"flex items-center gap-3 text-slate-300",children:[_.jsx("div",{className:"w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0",children:_.jsx(Nd,{size:14})}),n]},a))}),_.jsx("div",{className:"pt-4",children:_.jsx(bn,{to:"/contact",children:_.jsx(Pi,{variant:"outline",children:"سفارش این سرویس"})})})]}),_.jsx("div",{className:"flex-1 w-full",children:_.jsx("div",{className:"relative rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 backdrop-blur w-full",children:_.jsx(s.Visual,{})})})]},s.id))}),_.jsxs("div",{className:"bg-surface rounded-3xl border border-slate-800 p-8 overflow-hidden",children:[_.jsx("h3",{className:"text-2xl font-bold text-white mb-8 text-center",children:"چرا نکسورا؟"}),_.jsx("div",{className:"overflow-x-auto",children:_.jsxs("table",{className:"w-full text-right border-collapse min-w-[600px]",children:[_.jsx("thead",{children:_.jsxs("tr",{className:"border-b border-slate-800",children:[_.jsx("th",{className:"py-4 px-6 text-slate-400 font-medium w-1/3",children:"ویژگی"}),_.jsx("th",{className:"py-4 px-6 text-slate-400 font-medium w-1/3 text-center",children:"روش سنتی"}),_.jsx("th",{className:"py-4 px-6 text-primary font-bold w-1/3 text-center bg-primary/5 rounded-t-xl",children:"راهکار نکسورا"})]})}),_.jsx("tbody",{children:[{label:"هزینه عملیاتی",trad:"بسیار بالا",nexora:"بهینه و مقیاس‌پذیر"},{label:"زمان پیاده‌سازی",trad:"۳ تا ۶ ماه",nexora:"۲ تا ۴ هفته"},{label:"خطای انسانی",trad:"اجتناب‌ناپذیر",nexora:"نزدیک به صفر"},{label:"پشتیبانی",trad:"ساعات اداری",nexora:"۲۴/۷ هوشمند"}].map((s,e)=>_.jsxs("tr",{className:"border-b border-slate-800/50 last:border-0 hover:bg-slate-800/20 transition-colors",children:[_.jsx("td",{className:"py-4 px-6 text-white font-medium",children:s.label}),_.jsx("td",{className:"py-4 px-6 text-slate-400 text-center",children:s.trad}),_.jsx("td",{className:"py-4 px-6 text-white text-center font-bold bg-primary/5",children:s.nexora})]},e))})]})})]}),_.jsxs("div",{className:"max-w-3xl mx-auto pb-12",children:[_.jsxs("div",{className:"text-center mb-10",children:[_.jsx("h3",{className:"text-3xl font-bold text-white mb-4",children:"پرسش‌های متداول"}),_.jsx("p",{className:"text-slate-400",children:"شفافیت در همکاری، امنیت و هزینه‌ها"})]}),_.jsx("div",{className:"space-y-4",children:[{q:"آیا امنیت داده‌های سازمانی ما تضمین می‌شود؟",a:"بله، امنیت خط قرمز ماست. ما از قراردادهای محرمانگی (NDA) رسمی استفاده می‌کنیم. همچنین تمام داده‌های شما با پروتکل‌های رمزنگاری پیشرفته محافظت می‌شوند و مدل‌های هوش مصنوعی را می‌توانیم به صورت Local (روی سرورهای خودتان) پیاده‌سازی کنیم تا هیچ داده‌ای از سازمان خارج نشود."},{q:"هزینه پروژه‌ها چقدر است و نحوه پرداخت چگونه است؟",a:"هزینه‌ها کاملاً شفاف و بر اساس اسکوپ پروژه است. ما معمولاً ۳۰٪ پیش‌پرداخت، ۳۰٪ پس از نسخه اولیه و ۴۰٪ پس از تحویل نهایی دریافت می‌کنیم. برای سرویس‌های آماده نیز مدل اشتراکی (SaaS) داریم که بسیار مقرون‌به‌صرفه است."},{q:"زمان پیاده‌سازی پروژه‌ها چقدر طول می‌کشد؟",a:"بسته به ابعاد پروژه متفاوت است. ربات‌های تلگرام و اتوماسیون‌های ساده بین ۱۰ تا ۲۰ روز کاری، و سیستم‌های جامع سازمانی بین ۱ تا ۳ ماه زمان می‌برند. جدول زمان‌بندی دقیق در قرارداد ذکر می‌شود."},{q:"آیا پس از تحویل پروژه، پشتیبانی فنی دارید؟",a:"بله، تمامی پروژه‌های نکسورا شامل ۶ ماه گارانتی عملکرد و پشتیبانی فنی رایگان هستند. پس از آن نیز می‌توانید قرارداد پشتیبانی را تمدید کنید."},{q:"آیا برای استفاده از راهکارها نیاز به تیم فنی داریم؟",a:"خیر، راهکارهای ما با رابط کاربری ساده طراحی شده‌اند. ما آموزش‌های کامل ویدیویی و مستندات را در اختیار تیم شما قرار می‌دهیم تا بدون نیاز به دانش برنامه‌نویسی از سیستم‌ها استفاده کنند."}].map((s,e)=>_.jsx(MR,{question:s.q,answer:s.a},e))})]})]}),i_=[{id:1,title:"ربات پشتیبانی صرافی دیجیتال",category:"telegram",categoryLabel:"ربات تلگرام",description:"سیستم پاسخگویی خودکار به سوالات احراز هویت و ترید کاربران با قابلیت اتصال به دیتابیس صرافی.",image:"https://picsum.photos/600/400?random=10",results:"کاهش ۸۰٪ تیکت‌های پشتیبانی"},{id:2,title:"سیستم کنترل کیفیت خط تولید",category:"vision",categoryLabel:"پردازش تصویر",description:"استفاده از دوربین‌های صنعتی و مدل‌های بینایی ماشین برای تشخیص قطعات معیوب در لحظه.",image:"https://picsum.photos/600/400?random=11",results:"افزایش دقت به ۹۹.۸٪"},{id:3,title:"اتوماسیون صدور فاکتور و انبارداری",category:"automation",categoryLabel:"اتوماسیون اداری",description:"یکپارچه‌سازی نرم‌افزار حسابداری با فروشگاه اینترنتی برای صدور آنی فاکتور رسمی.",image:"https://picsum.photos/600/400?random=12",results:"صرفه‌جویی ۱۰۰ ساعت کار در ماه"},{id:4,title:"دستیار هوشمند حقوقی",category:"telegram",categoryLabel:"ربات تلگرام",description:"چت‌بات آموزش‌دیده روی قوانین مدنی و کیفری برای ارائه مشاوره اولیه به موکلین.",image:"https://picsum.photos/600/400?random=13",results:"جذب ۳۰۰+ موکل جدید"},{id:5,title:"داشبورد تحلیل رفتار مشتری",category:"automation",categoryLabel:"تحلیل داده",description:"پلتفرم جامع برای رصد رفتار کاربران در وب‌سایت و اپلیکیشن و پیشنهاد کمپین‌های مارکتینگ.",image:"https://picsum.photos/600/400?random=14",results:"افزایش نرخ تبدیل به ۵٪"}],TR=()=>{const[s,e]=pe.useState("all"),n=s==="all"?i_:i_.filter(o=>o.category===s),a=[{id:"all",label:"همه"},{id:"telegram",label:"ربات تلگرام"},{id:"automation",label:"اتوماسیون اداری"},{id:"vision",label:"پردازش تصویر"}];return _.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[_.jsxs("div",{className:"text-center mb-12",children:[_.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"نمونه‌کارهای نکسورا"}),_.jsx("p",{className:"text-slate-400",children:"پروژه‌هایی که با قدرت هوش مصنوعی اجرا شده‌اند"})]}),_.jsx("div",{className:"flex flex-wrap justify-center gap-3 mb-12",children:a.map(o=>_.jsx("button",{onClick:()=>e(o.id),className:`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${s===o.id?"bg-primary text-white shadow-lg shadow-primary/25":"bg-surface border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500"}`,children:o.label},o.id))}),_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map(o=>_.jsxs("div",{className:"bg-surface rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group flex flex-col h-full",children:[_.jsxs("div",{className:"relative h-48 overflow-hidden",children:[_.jsx("div",{className:"absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10",children:o.categoryLabel}),_.jsx("img",{src:o.image,alt:o.title,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"})]}),_.jsxs("div",{className:"p-6 flex flex-col flex-grow",children:[_.jsx("h3",{className:"text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors",children:o.title}),_.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6 flex-grow",children:o.description}),_.jsxs("div",{className:"mt-auto",children:[_.jsxs("div",{className:"bg-slate-950 rounded-lg p-3 border border-slate-800 mb-4",children:[_.jsx("span",{className:"block text-xs text-slate-500 mb-1",children:"دستاورد کلیدی:"}),_.jsx("span",{className:"text-green-400 font-bold text-sm",children:o.results})]}),_.jsxs("button",{className:"flex items-center gap-2 text-sm text-white font-medium hover:text-primary transition-colors",children:["مشاهده جزئیات",_.jsx(fM,{size:16})]})]})]})]},o.id))})]})},AR=()=>_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20",children:[_.jsxs("div",{className:"text-center",children:[_.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:"آکادمی نکسورا"}),_.jsx("p",{className:"text-slate-400",children:"یادگیری هوش مصنوعی به زبان ساده"})]}),_.jsx("section",{className:"bg-surface border border-slate-800 rounded-3xl overflow-hidden",children:_.jsxs("div",{className:"grid md:grid-cols-2",children:[_.jsxs("div",{className:"p-8 md:p-12 flex flex-col justify-center",children:[_.jsx("div",{className:"inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-xs font-bold mb-4 w-fit",children:"ویدیو آموزشی جدید"}),_.jsx("h2",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:"چگونه هوش مصنوعی جایگزین کارمندان نمی‌شود، بلکه آن‌ها را قدرتمندتر می‌کند؟"}),_.jsx("p",{className:"text-slate-400 mb-8 leading-relaxed",children:"در این وبینار تخصصی، به بررسی نقش ابزارهای AI در افزایش بهره‌وری تیم‌های انسانی می‌پردازیم و ترس‌های رایج را بررسی می‌کنیم."}),_.jsxs(Pi,{className:"w-fit gap-2",children:[_.jsx(Wg,{size:20}),"مشاهده ویدیو"]})]}),_.jsxs("div",{className:"bg-slate-900 relative h-64 md:h-auto",children:[_.jsx("img",{src:"https://picsum.photos/800/600?random=20",className:"absolute inset-0 w-full h-full object-cover opacity-60",alt:"Video cover"}),_.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:_.jsx("div",{className:"w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform",children:_.jsx(Wg,{className:"text-white w-8 h-8 ml-1"})})})]})]})}),_.jsxs("section",{children:[_.jsxs("div",{className:"flex items-center justify-between mb-8",children:[_.jsx("h2",{className:"text-2xl font-bold text-white",children:"آخرین مقالات"}),_.jsx("button",{className:"text-primary hover:text-white transition-colors text-sm",children:"مشاهده همه"})]}),_.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[1,2,3].map(s=>_.jsxs("article",{className:"group cursor-pointer",children:[_.jsx("div",{className:"rounded-2xl overflow-hidden mb-4 border border-slate-800",children:_.jsx("img",{src:`https://picsum.photos/600/400?random=${20+s}`,alt:"Article",className:"w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"})}),_.jsxs("div",{className:"flex items-center gap-2 text-xs text-slate-500 mb-2",children:[_.jsx(NM,{size:14}),_.jsx("span",{children:"۵ دقیقه مطالعه"}),_.jsx("span",{className:"w-1 h-1 bg-slate-700 rounded-full"}),_.jsx("span",{children:"۲ روز پیش"})]}),_.jsx("h3",{className:"text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors",children:"۵ ابزار هوش مصنوعی که هر مدیری باید بشناسد"}),_.jsx("p",{className:"text-slate-400 text-sm line-clamp-2 leading-relaxed",children:"معرفی ابزارهایی که می‌توانند در مدیریت پروژه، زمان‌بندی و تحلیل داده‌ها به شما کمک کنند."})]},s))})]}),_.jsxs("section",{className:"bg-gradient-to-r from-primary to-indigo-700 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden",children:[_.jsx("div",{className:"absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"}),_.jsxs("div",{className:"relative z-10 max-w-2xl mx-auto",children:[_.jsx(E_,{className:"w-12 h-12 text-white/80 mx-auto mb-6"}),_.jsx("h2",{className:"text-3xl font-bold text-white mb-4",children:"عضویت در خبرنامه تخصصی AI"}),_.jsx("p",{className:"text-white/80 mb-8",children:"هفته‌ای یک ایمیل، حاوی جدیدترین اخبار و آموزش‌های کاربردی هوش مصنوعی. بدون اسپم."}),_.jsxs("form",{className:"flex flex-col sm:flex-row gap-3 max-w-md mx-auto",onSubmit:s=>s.preventDefault(),children:[_.jsx("input",{type:"email",placeholder:"ایمیل خود را وارد کنید",className:"flex-grow bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 rounded-lg px-4 py-3 focus:outline-none focus:bg-white/20 transition-all"}),_.jsx("button",{className:"bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors",children:"عضویت"})]})]})]})]}),wR=()=>_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24",children:[_.jsxs("section",{className:"grid md:grid-cols-2 gap-12 items-center",children:[_.jsxs("div",{children:[_.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-white mb-6",children:"داستان نکسورا"}),_.jsxs("div",{className:"space-y-4 text-slate-400 leading-relaxed text-lg text-justify",children:[_.jsxs("p",{children:["نکسورا در سال ۱۴۰۱ با یک هدف ساده اما بلندپروازانه متولد شد:",_.jsx("span",{className:"text-white font-bold px-1",children:"آوردن هوش مصنوعی از آزمایشگاه‌ها به قلب کسب‌وکارهای ایرانی."})]}),_.jsx("p",{children:"ما تیمی از متخصصان داده، توسعه‌دهندگان نرم‌افزار و استراتژیست‌های کسب‌وکار هستیم که معتقدیم تکنولوژی باید در خدمت انسان باشد، نه جایگزین آن. در دنیایی که هر روز پیچیده‌تر می‌شود، ما سادگی و کارآمدی را برای سازمان شما به ارمغان می‌آوریم."}),_.jsx("p",{children:"امروز، نکسورا افتخار همکاری با بیش از ۵۰ شرکت بزرگ و استارتاپ پیشرو را دارد و در تلاش است تا زیرساخت‌های هوشمند فردا را بسازد."})]})]}),_.jsxs("div",{className:"relative",children:[_.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-primary to-cyan-400 rounded-3xl opacity-20 blur-2xl"}),_.jsx("img",{src:"https://picsum.photos/800/800?random=30",alt:"Office",className:"relative rounded-3xl border border-slate-700 shadow-2xl"})]})]}),_.jsx("section",{className:"grid md:grid-cols-3 gap-8 text-center",children:[{title:"نوآوری مداوم",desc:"ما هرگز به وضع موجود راضی نیستیم و همیشه به دنبال راهکارهای جدیدتر هستیم."},{title:"شفافیت و اعتماد",desc:"با مشتریانمان مثل شرکای تجاری رفتار می‌کنیم. هیچ هزینه پنهانی وجود ندارد."},{title:"کیفیت جهانی",desc:"استانداردهای ما فراتر از مرزهاست. ما محصولاتی در کلاس جهانی می‌سازیم."}].map((s,e)=>_.jsxs("div",{className:"bg-surface p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors",children:[_.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:s.title}),_.jsx("p",{className:"text-slate-400",children:s.desc})]},e))}),_.jsxs("section",{children:[_.jsx("h2",{className:"text-3xl font-bold text-white mb-12 text-center",children:"تیم متخصص ما"}),_.jsx("div",{className:"grid md:grid-cols-4 gap-8",children:[{name:"آرش کمانگیر",role:"مدیرعامل",img:31},{name:"سارا راد",role:"مدیر فنی AI",img:32},{name:"کاوه آهنگر",role:"توسعه‌دهنده ارشد",img:33},{name:"مریم نوری",role:"مدیر محصول",img:34}].map((s,e)=>_.jsxs("div",{className:"group relative",children:[_.jsxs("div",{className:"relative overflow-hidden rounded-2xl aspect-[3/4] mb-4",children:[_.jsx("div",{className:"absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"}),_.jsx("img",{src:`https://picsum.photos/400/500?random=${s.img}`,alt:s.name,className:"object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"}),_.jsxs("div",{className:"absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 z-20",children:[_.jsx("button",{className:"bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-primary transition-colors",children:_.jsx(M_,{size:18})}),_.jsx("button",{className:"bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-cyan-500 transition-colors",children:_.jsx(w_,{size:18})})]})]}),_.jsx("h3",{className:"text-lg font-bold text-white text-center",children:s.name}),_.jsx("p",{className:"text-primary text-sm text-center font-medium",children:s.role})]},e))})]})]}),CR=()=>_.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16",children:[_.jsxs("div",{className:"text-center",children:[_.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:"به تیم نکسورا بپیوندید"}),_.jsx("p",{className:"text-slate-400 max-w-2xl mx-auto",children:"ما به دنبال افراد خلاق، پرشور و یادگیرنده هستیم. اگر عاشق هوش مصنوعی هستید و می‌خواهید روی لبه تکنولوژی حرکت کنید، جای شما اینجا خالیست."})]}),_.jsx("div",{className:"space-y-6",children:[{title:"Senior Python Developer",type:"تمام وقت",location:"تهران / ریموت"},{title:"AI Research Engineer",type:"تمام وقت",location:"تهران"},{title:"Frontend Developer (React)",type:"پروژه‌ای",location:"ریموت"}].map((s,e)=>_.jsxs("div",{className:"bg-surface border border-slate-800 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-slate-600 transition-colors",children:[_.jsxs("div",{children:[_.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:s.title}),_.jsxs("div",{className:"flex gap-4 text-sm text-slate-500",children:[_.jsxs("span",{className:"flex items-center gap-1",children:[_.jsx(pM,{size:14})," ",s.type]}),_.jsxs("span",{className:"flex items-center gap-1",children:[_.jsx(T_,{size:14})," ",s.location]}),_.jsxs("span",{className:"flex items-center gap-1",children:[_.jsx(SM,{size:14})," فوری"]})]})]}),_.jsx(Pi,{variant:"secondary",size:"sm",children:"ارسال رزومه"})]},e))}),_.jsxs("div",{className:"bg-slate-900/50 border border-dashed border-slate-700 rounded-2xl p-8 text-center",children:[_.jsx(EM,{className:"w-12 h-12 text-slate-500 mx-auto mb-4"}),_.jsx("h3",{className:"text-white font-bold mb-2",children:"موقعیت شغلی مورد نظر خود را پیدا نکردید؟"}),_.jsx("p",{className:"text-slate-400 text-sm mb-6",children:"رزومه خود را برای ما بفرستید. ما همیشه به دنبال استعدادهای جدید هستیم."}),_.jsx(Pi,{variant:"outline",children:"ارسال رزومه عمومی"})]})]}),RR=()=>_.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:_.jsxs("div",{className:"grid md:grid-cols-2 gap-16",children:[_.jsxs("div",{className:"space-y-8",children:[_.jsxs("div",{children:[_.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:"تماس با نکسورا"}),_.jsx("p",{className:"text-slate-400 leading-relaxed",children:"برای مشاوره رایگان یا شروع یک پروژه جدید، فرم روبرو را پر کنید یا از طریق راه‌های ارتباطی زیر با ما در تماس باشید."})]}),_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"flex items-start gap-4",children:[_.jsx("div",{className:"w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-primary shrink-0",children:_.jsx(kM,{size:24})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-1",children:"تلفن تماس"}),_.jsx("p",{className:"text-slate-400 ltr text-right",dir:"ltr",children:"021 - 88 12 34 56"}),_.jsx("p",{className:"text-slate-500 text-sm",children:"شنبه تا چهارشنبه، ۹ تا ۱۷"})]})]}),_.jsxs("div",{className:"flex items-start gap-4",children:[_.jsx("div",{className:"w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0",children:_.jsx(E_,{size:24})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-1",children:"ایمیل"}),_.jsx("p",{className:"text-slate-400 font-mono",children:"hello@nexora.ai"}),_.jsx("p",{className:"text-slate-500 text-sm",children:"پاسخگویی در کمتر از ۲ ساعت"})]})]}),_.jsxs("div",{className:"flex items-start gap-4",children:[_.jsx("div",{className:"w-12 h-12 rounded-xl bg-surface border border-slate-800 flex items-center justify-center text-purple-400 shrink-0",children:_.jsx(T_,{size:24})}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-white font-bold mb-1",children:"دفتر مرکزی"}),_.jsx("p",{className:"text-slate-400",children:"تهران، خیابان ولیعصر، پارک علم و فناوری"})]})]})]})]}),_.jsxs("div",{className:"bg-surface p-8 rounded-3xl border border-slate-800 shadow-2xl",children:[_.jsx("h2",{className:"text-2xl font-bold text-white mb-6",children:"فرم درخواست مشاوره"}),_.jsxs("form",{className:"space-y-4",onSubmit:s=>s.preventDefault(),children:[_.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"نام و نام خانوادگی"}),_.jsx("input",{type:"text",className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"شماره تماس"}),_.jsx("input",{type:"tel",className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"نام سازمان / شرکت"}),_.jsx("input",{type:"text",className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"موضوع درخواست"}),_.jsxs("select",{className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors",children:[_.jsx("option",{children:"مشاوره عمومی AI"}),_.jsx("option",{children:"سفارش ربات تلگرام"}),_.jsx("option",{children:"اتوماسیون اداری"}),_.jsx("option",{children:"سایر موارد"})]})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-slate-400 text-sm mb-2",children:"توضیحات تکمیلی"}),_.jsx("textarea",{rows:4,className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"})]}),_.jsxs(Pi,{className:"w-full gap-2 text-lg",children:["ارسال درخواست",_.jsx(A_,{size:18})]})]})]})]})}),NR=()=>{const{pathname:s}=Da();return pe.useEffect(()=>{window.scrollTo(0,0)},[s]),null},DR=()=>_.jsxs(ZS,{children:[_.jsx(NR,{}),_.jsxs("div",{className:"min-h-screen flex flex-col bg-background text-slate-100 font-sans selection:bg-primary selection:text-white overflow-x-hidden",children:[_.jsx(hR,{}),_.jsx("main",{className:"flex-grow pt-20",children:_.jsxs(AS,{children:[_.jsx(cs,{path:"/",element:_.jsx(gR,{})}),_.jsx(cs,{path:"/services",element:_.jsx(ER,{})}),_.jsx(cs,{path:"/portfolio",element:_.jsx(TR,{})}),_.jsx(cs,{path:"/academy",element:_.jsx(AR,{})}),_.jsx(cs,{path:"/about",element:_.jsx(wR,{})}),_.jsx(cs,{path:"/careers",element:_.jsx(CR,{})}),_.jsx(cs,{path:"/contact",element:_.jsx(RR,{})})]})}),_.jsx(dR,{}),_.jsx(pR,{})]})]}),vy=document.getElementById("root");if(!vy)throw new Error("Could not find root element to mount to");const UR=O1.createRoot(vy);UR.render(_.jsx(A1.StrictMode,{children:_.jsx(DR,{})}));
