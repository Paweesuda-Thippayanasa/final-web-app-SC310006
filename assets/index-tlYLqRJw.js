(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function LN(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var tg={exports:{}},Uu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DT;function VN(){if(DT)return Uu;DT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var f in a)f!=="key"&&(o[f]=a[f])}else o=a;return a=o.ref,{$$typeof:n,type:i,key:u,ref:a!==void 0?a:null,props:o}}return Uu.Fragment=e,Uu.jsx=t,Uu.jsxs=t,Uu}var OT;function UN(){return OT||(OT=1,tg.exports=VN()),tg.exports}var D=UN(),ng={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MT;function jN(){if(MT)return De;MT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function w(L){return L===null||typeof L!="object"?null:(L=E&&L[E]||L["@@iterator"],typeof L=="function"?L:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function V(L,se,me){this.props=L,this.context=se,this.refs=j,this.updater=me||S}V.prototype.isReactComponent={},V.prototype.setState=function(L,se){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,se,"setState")},V.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function z(){}z.prototype=V.prototype;function G(L,se,me){this.props=L,this.context=se,this.refs=j,this.updater=me||S}var H=G.prototype=new z;H.constructor=G,x(H,V.prototype),H.isPureReactComponent=!0;var W=Array.isArray,re={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function O(L,se,me,ue,ce,Ce){return me=Ce.ref,{$$typeof:n,type:L,key:se,ref:me!==void 0?me:null,props:Ce}}function R(L,se){return O(L.type,se,void 0,void 0,void 0,L.props)}function b(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function N(L){var se={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(me){return se[me]})}var k=/\/+/g;function P(L,se){return typeof L=="object"&&L!==null&&L.key!=null?N(""+L.key):se.toString(36)}function I(){}function pe(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(I,I):(L.status="pending",L.then(function(se){L.status==="pending"&&(L.status="fulfilled",L.value=se)},function(se){L.status==="pending"&&(L.status="rejected",L.reason=se)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function tt(L,se,me,ue,ce){var Ce=typeof L;(Ce==="undefined"||Ce==="boolean")&&(L=null);var Re=!1;if(L===null)Re=!0;else switch(Ce){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(L.$$typeof){case n:case e:Re=!0;break;case y:return Re=L._init,tt(Re(L._payload),se,me,ue,ce)}}if(Re)return ce=ce(L),Re=ue===""?"."+P(L,0):ue,W(ce)?(me="",Re!=null&&(me=Re.replace(k,"$&/")+"/"),tt(ce,se,me,"",function(nt){return nt})):ce!=null&&(b(ce)&&(ce=R(ce,me+(ce.key==null||L&&L.key===ce.key?"":(""+ce.key).replace(k,"$&/")+"/")+Re)),se.push(ce)),1;Re=0;var Ze=ue===""?".":ue+":";if(W(L))for(var xe=0;xe<L.length;xe++)ue=L[xe],Ce=Ze+P(ue,xe),Re+=tt(ue,se,me,Ce,ce);else if(xe=w(L),typeof xe=="function")for(L=xe.call(L),xe=0;!(ue=L.next()).done;)ue=ue.value,Ce=Ze+P(ue,xe++),Re+=tt(ue,se,me,Ce,ce);else if(Ce==="object"){if(typeof L.then=="function")return tt(pe(L),se,me,ue,ce);throw se=String(L),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.")}return Re}function le(L,se,me){if(L==null)return L;var ue=[],ce=0;return tt(L,ue,"","",function(Ce){return se.call(me,Ce,ce++)}),ue}function Ee(L){if(L._status===-1){var se=L._result;se=se(),se.then(function(me){(L._status===0||L._status===-1)&&(L._status=1,L._result=me)},function(me){(L._status===0||L._status===-1)&&(L._status=2,L._result=me)}),L._status===-1&&(L._status=0,L._result=se)}if(L._status===1)return L._result.default;throw L._result}var _e=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var se=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(se))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Qe(){}return De.Children={map:le,forEach:function(L,se,me){le(L,function(){se.apply(this,arguments)},me)},count:function(L){var se=0;return le(L,function(){se++}),se},toArray:function(L){return le(L,function(se){return se})||[]},only:function(L){if(!b(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},De.Component=V,De.Fragment=t,De.Profiler=a,De.PureComponent=G,De.StrictMode=i,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=re,De.act=function(){throw Error("act(...) is not supported in production builds of React.")},De.cache=function(L){return function(){return L.apply(null,arguments)}},De.cloneElement=function(L,se,me){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ue=x({},L.props),ce=L.key,Ce=void 0;if(se!=null)for(Re in se.ref!==void 0&&(Ce=void 0),se.key!==void 0&&(ce=""+se.key),se)!J.call(se,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&se.ref===void 0||(ue[Re]=se[Re]);var Re=arguments.length-2;if(Re===1)ue.children=me;else if(1<Re){for(var Ze=Array(Re),xe=0;xe<Re;xe++)Ze[xe]=arguments[xe+2];ue.children=Ze}return O(L.type,ce,void 0,void 0,Ce,ue)},De.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:o,_context:L},L},De.createElement=function(L,se,me){var ue,ce={},Ce=null;if(se!=null)for(ue in se.key!==void 0&&(Ce=""+se.key),se)J.call(se,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(ce[ue]=se[ue]);var Re=arguments.length-2;if(Re===1)ce.children=me;else if(1<Re){for(var Ze=Array(Re),xe=0;xe<Re;xe++)Ze[xe]=arguments[xe+2];ce.children=Ze}if(L&&L.defaultProps)for(ue in Re=L.defaultProps,Re)ce[ue]===void 0&&(ce[ue]=Re[ue]);return O(L,Ce,void 0,void 0,null,ce)},De.createRef=function(){return{current:null}},De.forwardRef=function(L){return{$$typeof:f,render:L}},De.isValidElement=b,De.lazy=function(L){return{$$typeof:y,_payload:{_status:-1,_result:L},_init:Ee}},De.memo=function(L,se){return{$$typeof:p,type:L,compare:se===void 0?null:se}},De.startTransition=function(L){var se=re.T,me={};re.T=me;try{var ue=L(),ce=re.S;ce!==null&&ce(me,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(Qe,_e)}catch(Ce){_e(Ce)}finally{re.T=se}},De.unstable_useCacheRefresh=function(){return re.H.useCacheRefresh()},De.use=function(L){return re.H.use(L)},De.useActionState=function(L,se,me){return re.H.useActionState(L,se,me)},De.useCallback=function(L,se){return re.H.useCallback(L,se)},De.useContext=function(L){return re.H.useContext(L)},De.useDebugValue=function(){},De.useDeferredValue=function(L,se){return re.H.useDeferredValue(L,se)},De.useEffect=function(L,se){return re.H.useEffect(L,se)},De.useId=function(){return re.H.useId()},De.useImperativeHandle=function(L,se,me){return re.H.useImperativeHandle(L,se,me)},De.useInsertionEffect=function(L,se){return re.H.useInsertionEffect(L,se)},De.useLayoutEffect=function(L,se){return re.H.useLayoutEffect(L,se)},De.useMemo=function(L,se){return re.H.useMemo(L,se)},De.useOptimistic=function(L,se){return re.H.useOptimistic(L,se)},De.useReducer=function(L,se,me){return re.H.useReducer(L,se,me)},De.useRef=function(L){return re.H.useRef(L)},De.useState=function(L){return re.H.useState(L)},De.useSyncExternalStore=function(L,se,me){return re.H.useSyncExternalStore(L,se,me)},De.useTransition=function(){return re.H.useTransition()},De.version="19.0.0",De}var kT;function H_(){return kT||(kT=1,ng.exports=jN()),ng.exports}var Y=H_(),ig={exports:{}},ju={},rg={exports:{}},sg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT;function BN(){return PT||(PT=1,function(n){function e(le,Ee){var _e=le.length;le.push(Ee);e:for(;0<_e;){var Qe=_e-1>>>1,L=le[Qe];if(0<a(L,Ee))le[Qe]=Ee,le[_e]=L,_e=Qe;else break e}}function t(le){return le.length===0?null:le[0]}function i(le){if(le.length===0)return null;var Ee=le[0],_e=le.pop();if(_e!==Ee){le[0]=_e;e:for(var Qe=0,L=le.length,se=L>>>1;Qe<se;){var me=2*(Qe+1)-1,ue=le[me],ce=me+1,Ce=le[ce];if(0>a(ue,_e))ce<L&&0>a(Ce,ue)?(le[Qe]=Ce,le[ce]=_e,Qe=ce):(le[Qe]=ue,le[me]=_e,Qe=me);else if(ce<L&&0>a(Ce,_e))le[Qe]=Ce,le[ce]=_e,Qe=ce;else break e}}return Ee}function a(le,Ee){var _e=le.sortIndex-Ee.sortIndex;return _e!==0?_e:le.id-Ee.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var m=[],p=[],y=1,E=null,w=3,S=!1,x=!1,j=!1,V=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function H(le){for(var Ee=t(p);Ee!==null;){if(Ee.callback===null)i(p);else if(Ee.startTime<=le)i(p),Ee.sortIndex=Ee.expirationTime,e(m,Ee);else break;Ee=t(p)}}function W(le){if(j=!1,H(le),!x)if(t(m)!==null)x=!0,pe();else{var Ee=t(p);Ee!==null&&tt(W,Ee.startTime-le)}}var re=!1,J=-1,O=5,R=-1;function b(){return!(n.unstable_now()-R<O)}function N(){if(re){var le=n.unstable_now();R=le;var Ee=!0;try{e:{x=!1,j&&(j=!1,z(J),J=-1),S=!0;var _e=w;try{t:{for(H(le),E=t(m);E!==null&&!(E.expirationTime>le&&b());){var Qe=E.callback;if(typeof Qe=="function"){E.callback=null,w=E.priorityLevel;var L=Qe(E.expirationTime<=le);if(le=n.unstable_now(),typeof L=="function"){E.callback=L,H(le),Ee=!0;break t}E===t(m)&&i(m),H(le)}else i(m);E=t(m)}if(E!==null)Ee=!0;else{var se=t(p);se!==null&&tt(W,se.startTime-le),Ee=!1}}break e}finally{E=null,w=_e,S=!1}Ee=void 0}}finally{Ee?k():re=!1}}}var k;if(typeof G=="function")k=function(){G(N)};else if(typeof MessageChannel<"u"){var P=new MessageChannel,I=P.port2;P.port1.onmessage=N,k=function(){I.postMessage(null)}}else k=function(){V(N,0)};function pe(){re||(re=!0,k())}function tt(le,Ee){J=V(function(){le(n.unstable_now())},Ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(le){le.callback=null},n.unstable_continueExecution=function(){x||S||(x=!0,pe())},n.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<le?Math.floor(1e3/le):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(le){switch(w){case 1:case 2:case 3:var Ee=3;break;default:Ee=w}var _e=w;w=Ee;try{return le()}finally{w=_e}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(le,Ee){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var _e=w;w=le;try{return Ee()}finally{w=_e}},n.unstable_scheduleCallback=function(le,Ee,_e){var Qe=n.unstable_now();switch(typeof _e=="object"&&_e!==null?(_e=_e.delay,_e=typeof _e=="number"&&0<_e?Qe+_e:Qe):_e=Qe,le){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=_e+L,le={id:y++,callback:Ee,priorityLevel:le,startTime:_e,expirationTime:L,sortIndex:-1},_e>Qe?(le.sortIndex=_e,e(p,le),t(m)===null&&le===t(p)&&(j?(z(J),J=-1):j=!0,tt(W,_e-Qe))):(le.sortIndex=L,e(m,le),x||S||(x=!0,pe())),le},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(le){var Ee=w;return function(){var _e=w;w=Ee;try{return le.apply(this,arguments)}finally{w=_e}}}}(sg)),sg}var LT;function zN(){return LT||(LT=1,rg.exports=BN()),rg.exports}var ag={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT;function FN(){if(VT)return un;VT=1;var n=H_();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(m,p,y){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:E==null?null:""+E,children:m,containerInfo:p,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,un.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return o(m,p,null,y)},un.flushSync=function(m){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,m)return m()}finally{u.T=p,i.p=y,i.d.f()}},un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(m,p))},un.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,E=f(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:w,fetchPriority:S}):y==="script"&&i.d.X(m,{crossOrigin:E,integrity:w,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=f(p.as,p.crossOrigin);i.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(m)},un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,E=f(y,p.crossOrigin);i.d.L(m,y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},un.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=f(p.as,p.crossOrigin);i.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(m)},un.requestFormReset=function(m){i.d.r(m)},un.unstable_batchedUpdates=function(m,p){return m(p)},un.useFormState=function(m,p,y){return u.H.useFormState(m,p,y)},un.useFormStatus=function(){return u.H.useHostTransitionStatus()},un.version="19.0.0",un}var UT;function qN(){if(UT)return ag.exports;UT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ag.exports=FN(),ag.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jT;function HN(){if(jT)return ju;jT=1;var n=zN(),e=H_(),t=qN();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),W=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function J(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var O=Symbol.for("react.client.reference");function R(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===O?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case m:return"Fragment";case f:return"Portal";case y:return"Profiler";case p:return"StrictMode";case j:return"Suspense";case V:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case S:return(r.displayName||"Context")+".Provider";case w:return(r._context.displayName||"Context")+".Consumer";case x:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case z:return s=r.displayName||null,s!==null?s:R(r.type)||"Memo";case G:s=r._payload,r=r._init;try{return R(r(s))}catch{}}return null}var b=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign,k,P;function I(r){if(k===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||"",P=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+r+P}var pe=!1;function tt(r,s){if(!r||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(X){var Q=X}Reflect.construct(r,[],ie)}else{try{ie.call()}catch(X){Q=X}r.call(ie.prototype)}}else{try{throw Error()}catch(X){Q=X}(ie=r())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(X){if(X&&Q&&typeof X.stack=="string")return[X.stack,Q.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],A=g[1];if(T&&A){var M=T.split(`
`),B=A.split(`
`);for(d=c=0;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;for(;d<B.length&&!B[d].includes("DetermineComponentFrameRoot");)d++;if(c===M.length||d===B.length)for(c=M.length-1,d=B.length-1;1<=c&&0<=d&&M[c]!==B[d];)d--;for(;1<=c&&0<=d;c--,d--)if(M[c]!==B[d]){if(c!==1||d!==1)do if(c--,d--,0>d||M[c]!==B[d]){var Z=`
`+M[c].replace(" at new "," at ");return r.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",r.displayName)),Z}while(1<=c&&0<=d);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(l=r?r.displayName||r.name:"")?I(l):""}function le(r){switch(r.tag){case 26:case 27:case 5:return I(r.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return r=tt(r.type,!1),r;case 11:return r=tt(r.type.render,!1),r;case 1:return r=tt(r.type,!0),r;default:return""}}function Ee(r){try{var s="";do s+=le(r),r=r.return;while(r);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function _e(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Qe(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function L(r){if(_e(r)!==r)throw Error(i(188))}function se(r){var s=r.alternate;if(!s){if(s=_e(r),s===null)throw Error(i(188));return s!==r?null:r}for(var l=r,c=s;;){var d=l.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){l=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===l)return L(d),r;if(g===c)return L(d),s;g=g.sibling}throw Error(i(188))}if(l.return!==c.return)l=d,c=g;else{for(var T=!1,A=d.child;A;){if(A===l){T=!0,l=d,c=g;break}if(A===c){T=!0,c=d,l=g;break}A=A.sibling}if(!T){for(A=g.child;A;){if(A===l){T=!0,l=g,c=d;break}if(A===c){T=!0,c=g,l=d;break}A=A.sibling}if(!T)throw Error(i(189))}}if(l.alternate!==c)throw Error(i(190))}if(l.tag!==3)throw Error(i(188));return l.stateNode.current===l?r:s}function me(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=me(r),s!==null)return s;r=r.sibling}return null}var ue=Array.isArray,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce={pending:!1,data:null,method:null,action:null},Re=[],Ze=-1;function xe(r){return{current:r}}function nt(r){0>Ze||(r.current=Re[Ze],Re[Ze]=null,Ze--)}function Ke(r,s){Ze++,Re[Ze]=r.current,r.current=s}var mn=xe(null),Yi=xe(null),Bn=xe(null),Vr=xe(null);function Ur(r,s){switch(Ke(Bn,s),Ke(Yi,r),Ke(mn,null),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?aT(s):0;break;default:if(r=r===8?s.parentNode:s,s=r.tagName,r=r.namespaceURI)r=aT(r),s=oT(r,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}nt(mn),Ke(mn,s)}function Wi(){nt(mn),nt(Yi),nt(Bn)}function Ml(r){r.memoizedState!==null&&Ke(Vr,r);var s=mn.current,l=oT(s,r.type);s!==l&&(Ke(Yi,r),Ke(mn,l))}function Xa(r){Yi.current===r&&(nt(mn),nt(Yi)),Vr.current===r&&(nt(Vr),Mu._currentValue=Ce)}var Za=Object.prototype.hasOwnProperty,Ks=n.unstable_scheduleCallback,Ja=n.unstable_cancelCallback,im=n.unstable_shouldYield,kl=n.unstable_requestPaint,wn=n.unstable_now,qc=n.unstable_getCurrentPriorityLevel,Ot=n.unstable_ImmediatePriority,zt=n.unstable_UserBlockingPriority,Xi=n.unstable_NormalPriority,Hc=n.unstable_LowPriority,Pl=n.unstable_IdlePriority,rm=n.log,Qs=n.unstable_setDisableYieldValue,jr=null,on=null;function Ll(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(jr,r,void 0,(r.current.flags&128)===128)}catch{}}function Ei(r){if(typeof rm=="function"&&Qs(r),on&&typeof on.setStrictMode=="function")try{on.setStrictMode(jr,r)}catch{}}var pn=Math.clz32?Math.clz32:Kc,Vl=Math.log,Gc=Math.LN2;function Kc(r){return r>>>=0,r===0?32:31-(Vl(r)/Gc|0)|0}var Ti=128,Br=4194304;function ai(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function zn(r,s){var l=r.pendingLanes;if(l===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,T=r.warmLanes;r=r.finishedLanes!==0;var A=l&134217727;return A!==0?(l=A&~d,l!==0?c=ai(l):(g&=A,g!==0?c=ai(g):r||(T=A&~T,T!==0&&(c=ai(T))))):(A=l&~d,A!==0?c=ai(A):g!==0?c=ai(g):r||(T=l&~T,T!==0&&(c=ai(T)))),c===0?0:s!==0&&s!==c&&!(s&d)&&(d=c&-c,T=s&-s,d>=T||d===32&&(T&4194176)!==0)?s:c}function zr(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function eo(r,s){switch(r){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ul(){var r=Ti;return Ti<<=1,!(Ti&4194176)&&(Ti=128),r}function Fr(){var r=Br;return Br<<=1,!(Br&62914560)&&(Br=4194304),r}function to(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function bt(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Qc(r,s,l,c,d,g){var T=r.pendingLanes;r.pendingLanes=l,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=l,r.entangledLanes&=l,r.errorRecoveryDisabledLanes&=l,r.shellSuspendCounter=0;var A=r.entanglements,M=r.expirationTimes,B=r.hiddenUpdates;for(l=T&~l;0<l;){var Z=31-pn(l),ie=1<<Z;A[Z]=0,M[Z]=-1;var Q=B[Z];if(Q!==null)for(B[Z]=null,Z=0;Z<Q.length;Z++){var X=Q[Z];X!==null&&(X.lane&=-536870913)}l&=~ie}c!==0&&qr(r,c,0),g!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=g&~(T&~s))}function qr(r,s,l){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-pn(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|l&4194218}function Hr(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var c=31-pn(l),d=1<<c;d&s|r[c]&s&&(r[c]|=s),l&=~d}}function $c(r){return r&=-r,2<r?8<r?r&134217727?32:268435456:8:2}function Yc(){var r=ce.p;return r!==0?r:(r=window.event,r===void 0?32:AT(r.type))}function Gr(r,s){var l=ce.p;try{return ce.p=r,s()}finally{ce.p=l}}var wi=Math.random().toString(36).slice(2),Ft="__reactFiber$"+wi,Mt="__reactProps$"+wi,Zi="__reactContainer$"+wi,$s="__reactEvents$"+wi,no="__reactListeners$"+wi,bi="__reactHandles$"+wi,jl="__reactResources$"+wi,Kr="__reactMarker$"+wi;function Ys(r){delete r[Ft],delete r[Mt],delete r[$s],delete r[no],delete r[bi]}function oi(r){var s=r[Ft];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Zi]||l[Ft]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=cT(r);r!==null;){if(l=r[Ft])return l;r=cT(r)}return s}r=l,l=r.parentNode}return null}function Ji(r){if(r=r[Ft]||r[Zi]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Qr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function $r(r){var s=r[jl];return s||(s=r[jl]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function dt(r){r[Kr]=!0}var Bl=new Set,io={};function Dn(r,s){bn(r,s),bn(r+"Capture",s)}function bn(r,s){for(io[r]=s,r=0;r<s.length;r++)Bl.add(s[r])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),zl={},Fl={};function Wc(r){return Za.call(Fl,r)?!0:Za.call(zl,r)?!1:sm.test(r)?Fl[r]=!0:(zl[r]=!0,!1)}function Yr(r,s,l){if(Wc(s))if(l===null)r.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+l)}}function Wr(r,s,l){if(l===null)r.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+l)}}function Fn(r,s,l,c){if(c===null)r.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(l);return}r.setAttributeNS(s,l,""+c)}}function gn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Xc(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function am(r){var s=Xc(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Ws(r){r._valueTracker||(r._valueTracker=am(r))}function ql(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return r&&(c=Xc(r)?r.checked?"true":"false":r.value),r=c,r!==l?(s.setValue(r),!0):!1}function ro(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var er=/[\n"\\]/g;function _t(r){return r.replace(er,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Xr(r,s,l,c,d,g,T,A){r.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.type=T:r.removeAttribute("type"),s!=null?T==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+gn(s)):r.value!==""+gn(s)&&(r.value=""+gn(s)):T!=="submit"&&T!=="reset"||r.removeAttribute("value"),s!=null?so(r,T,gn(s)):l!=null?so(r,T,gn(l)):c!=null&&r.removeAttribute("value"),d==null&&g!=null&&(r.defaultChecked=!!g),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?r.name=""+gn(A):r.removeAttribute("name")}function Xs(r,s,l,c,d,g,T,A){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(r.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+gn(l):"",s=s!=null?""+gn(s):l,A||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=A?r.checked:!!c,r.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(r.name=T)}function so(r,s,l){s==="number"&&ro(r.ownerDocument)===r||r.defaultValue===""+l||(r.defaultValue=""+l)}function $e(r,s,l,c){if(r=r.options,s){s={};for(var d=0;d<l.length;d++)s["$"+l[d]]=!0;for(l=0;l<r.length;l++)d=s.hasOwnProperty("$"+r[l].value),r[l].selected!==d&&(r[l].selected=d),d&&c&&(r[l].defaultSelected=!0)}else{for(l=""+gn(l),s=null,d=0;d<r.length;d++){if(r[d].value===l){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Zs(r,s,l){if(s!=null&&(s=""+gn(s),s!==r.value&&(r.value=s),l==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=l!=null?""+gn(l):""}function Zr(r,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=gn(s),r.defaultValue=l,c=r.textContent,c===l&&c!==""&&c!==null&&(r.value=c)}function qn(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var om=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hl(r,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,l):typeof l!="number"||l===0||om.has(s)?s==="float"?r.cssFloat=l:r[s]=(""+l).trim():r[s]=l+"px"}function Zc(r,s,l){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&l[d]!==c&&Hl(r,d,c)}else for(var g in s)s.hasOwnProperty(g)&&Hl(r,g,s[g])}function Gl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),um=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Si(r){return um.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Hn=null;function ao(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var tr=null,nr=null;function ir(r){var s=Ji(r);if(s&&(r=s.stateNode)){var l=r[Mt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Xr(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+_t(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==r&&c.form===r.form){var d=c[Mt]||null;if(!d)throw Error(i(90));Xr(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===r.form&&ql(c)}break e;case"textarea":Zs(r,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&$e(r,!!l.multiple,s,!1)}}}var Kl=!1;function Jc(r,s,l){if(Kl)return r(s,l);Kl=!0;try{var c=r(s);return c}finally{if(Kl=!1,(tr!==null||nr!==null)&&(Hh(),tr&&(s=tr,r=nr,nr=tr=null,ir(s),r)))for(s=0;s<r.length;s++)ir(r[s])}}function Js(r,s){var l=r.stateNode;if(l===null)return null;var c=l[Mt]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(i(231,s,typeof l));return l}var Gn=!1;if(On)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){Gn=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{Gn=!1}var Ai=null,Jr=null,rr=null;function Ql(){if(rr)return rr;var r,s=Jr,l=s.length,c,d="value"in Ai?Ai.value:Ai.textContent,g=d.length;for(r=0;r<l&&s[r]===d[r];r++);var T=l-r;for(c=1;c<=T&&s[l-c]===d[g-c];c++);return rr=d.slice(r,1<c?1-c:void 0)}function Ci(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Ri(){return!0}function $l(){return!1}function qt(r){function s(l,c,d,g,T){this._reactName=l,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(l=r[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ri:$l,this.isPropagationStopped=$l,this}return N(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),s}var Je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=qt(Je),ta=N({},Je,{view:0,detail:0}),eh=qt(ta),lo,uo,Ii,na=N({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ii&&(Ii&&r.type==="mousemove"?(lo=r.screenX-Ii.screenX,uo=r.screenY-Ii.screenY):uo=lo=0,Ii=r),lo)},movementY:function(r){return"movementY"in r?r.movementY:uo}}),Kn=qt(na),th=N({},na,{dataTransfer:0}),cm=qt(th),ia=N({},ta,{relatedTarget:0}),co=qt(ia),Yl=N({},Je,{animationName:0,elapsedTime:0,pseudoElement:0}),ho=qt(Yl),nh=N({},Je,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),fo=qt(nh),hm=N({},Je,{data:0}),Wl=qt(hm),ra={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=rh[r])?!!s[r]:!1}function sa(){return Xl}var sh=N({},ta,{key:function(r){if(r.key){var s=ra[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ci(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ih[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(r){return r.type==="keypress"?Ci(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ci(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),mo=qt(sh),ah=N({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=qt(ah),sr=N({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),oh=qt(sr),lh=N({},Je,{propertyName:0,elapsedTime:0,pseudoElement:0}),uh=qt(lh),ch=N({},na,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),po=qt(ch),_n=N({},Je,{newState:0,oldState:0}),hh=qt(_n),fh=[9,13,27,32],Ni=On&&"CompositionEvent"in window,h=null;On&&"documentMode"in document&&(h=document.documentMode);var _=On&&"TextEvent"in window&&!h,v=On&&(!Ni||h&&8<h&&11>=h),C=" ",q=!1;function $(r,s){switch(r){case"keyup":return fh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Fe=!1;function kt(r,s){switch(r){case"compositionend":return oe(s);case"keypress":return s.which!==32?null:(q=!0,C);case"textInput":return r=s.data,r===C&&q?null:r;default:return null}}function qe(r,s){if(Fe)return r==="compositionend"||!Ni&&$(r,s)?(r=Ql(),rr=Jr=Ai=null,Fe=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Ht={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Ht[r.type]:s==="textarea"}function ar(r,s,l,c){tr?nr?nr.push(c):nr=[c]:tr=c,s=Yh(s,"onChange"),0<s.length&&(l=new oo("onChange","change",null,l,c),r.push({event:l,listeners:s}))}var Zt=null,xi=null;function Jl(r){tT(r,0)}function dh(r){var s=Qr(r);if(ql(s))return r}function xv(r,s){if(r==="change")return s}var Dv=!1;if(On){var fm;if(On){var dm="oninput"in document;if(!dm){var Ov=document.createElement("div");Ov.setAttribute("oninput","return;"),dm=typeof Ov.oninput=="function"}fm=dm}else fm=!1;Dv=fm&&(!document.documentMode||9<document.documentMode)}function Mv(){Zt&&(Zt.detachEvent("onpropertychange",kv),xi=Zt=null)}function kv(r){if(r.propertyName==="value"&&dh(xi)){var s=[];ar(s,xi,r,ao(r)),Jc(Jl,s)}}function f1(r,s,l){r==="focusin"?(Mv(),Zt=s,xi=l,Zt.attachEvent("onpropertychange",kv)):r==="focusout"&&Mv()}function d1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return dh(xi)}function m1(r,s){if(r==="click")return dh(s)}function p1(r,s){if(r==="input"||r==="change")return dh(s)}function g1(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:g1;function eu(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var d=l[c];if(!Za.call(s,d)||!Mn(r[d],s[d]))return!1}return!0}function Pv(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Lv(r,s){var l=Pv(r);r=0;for(var c;l;){if(l.nodeType===3){if(c=r+l.textContent.length,r<=s&&c>=s)return{node:l,offset:s-r};r=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Pv(l)}}function Vv(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Vv(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Uv(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ro(r.document);s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ro(r.document)}return s}function mm(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function _1(r,s){var l=Uv(s);s=r.focusedElem;var c=r.selectionRange;if(l!==s&&s&&s.ownerDocument&&Vv(s.ownerDocument.documentElement,s)){if(c!==null&&mm(s)){if(r=c.start,l=c.end,l===void 0&&(l=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(l,s.value.length);else if(l=(r=s.ownerDocument||document)&&r.defaultView||window,l.getSelection){l=l.getSelection();var d=s.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!l.extend&&g>c&&(d=c,c=g,g=d),d=Lv(s,g);var T=Lv(s,c);d&&T&&(l.rangeCount!==1||l.anchorNode!==d.node||l.anchorOffset!==d.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),l.removeAllRanges(),g>c?(l.addRange(r),l.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),l.addRange(r)))}}for(r=[],l=s;l=l.parentNode;)l.nodeType===1&&r.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)l=r[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var y1=On&&"documentMode"in document&&11>=document.documentMode,go=null,pm=null,tu=null,gm=!1;function jv(r,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;gm||go==null||go!==ro(c)||(c=go,"selectionStart"in c&&mm(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),tu&&eu(tu,c)||(tu=c,c=Yh(pm,"onSelect"),0<c.length&&(s=new oo("onSelect","select",null,s,l),r.push({event:s,listeners:c}),s.target=go)))}function aa(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var _o={animationend:aa("Animation","AnimationEnd"),animationiteration:aa("Animation","AnimationIteration"),animationstart:aa("Animation","AnimationStart"),transitionrun:aa("Transition","TransitionRun"),transitionstart:aa("Transition","TransitionStart"),transitioncancel:aa("Transition","TransitionCancel"),transitionend:aa("Transition","TransitionEnd")},_m={},Bv={};On&&(Bv=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function oa(r){if(_m[r])return _m[r];if(!_o[r])return r;var s=_o[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Bv)return _m[r]=s[l];return r}var zv=oa("animationend"),Fv=oa("animationiteration"),qv=oa("animationstart"),v1=oa("transitionrun"),E1=oa("transitionstart"),T1=oa("transitioncancel"),Hv=oa("transitionend"),Gv=new Map,Kv="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function li(r,s){Gv.set(r,s),Dn(s,[r])}var Qn=[],yo=0,ym=0;function mh(){for(var r=yo,s=ym=yo=0;s<r;){var l=Qn[s];Qn[s++]=null;var c=Qn[s];Qn[s++]=null;var d=Qn[s];Qn[s++]=null;var g=Qn[s];if(Qn[s++]=null,c!==null&&d!==null){var T=c.pending;T===null?d.next=d:(d.next=T.next,T.next=d),c.pending=d}g!==0&&Qv(l,d,g)}}function ph(r,s,l,c){Qn[yo++]=r,Qn[yo++]=s,Qn[yo++]=l,Qn[yo++]=c,ym|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function vm(r,s,l,c){return ph(r,s,l,c),gh(r)}function es(r,s){return ph(r,null,null,s),gh(r)}function Qv(r,s,l){r.lanes|=l;var c=r.alternate;c!==null&&(c.lanes|=l);for(var d=!1,g=r.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(r=g.stateNode,r===null||r._visibility&1||(d=!0)),r=g,g=g.return;d&&s!==null&&r.tag===3&&(g=r.stateNode,d=31-pn(l),g=g.hiddenUpdates,r=g[d],r===null?g[d]=[s]:r.push(s),s.lane=l|536870912)}function gh(r){if(50<Cu)throw Cu=0,Ap=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var vo={},$v=new WeakMap;function $n(r,s){if(typeof r=="object"&&r!==null){var l=$v.get(r);return l!==void 0?l:(s={value:r,source:s,stack:Ee(s)},$v.set(r,s),s)}return{value:r,source:s,stack:Ee(s)}}var Eo=[],To=0,_h=null,yh=0,Yn=[],Wn=0,la=null,or=1,lr="";function ua(r,s){Eo[To++]=yh,Eo[To++]=_h,_h=r,yh=s}function Yv(r,s,l){Yn[Wn++]=or,Yn[Wn++]=lr,Yn[Wn++]=la,la=r;var c=or;r=lr;var d=32-pn(c)-1;c&=~(1<<d),l+=1;var g=32-pn(s)+d;if(30<g){var T=d-d%5;g=(c&(1<<T)-1).toString(32),c>>=T,d-=T,or=1<<32-pn(s)+d|l<<d|c,lr=g+r}else or=1<<g|l<<d|c,lr=r}function Em(r){r.return!==null&&(ua(r,1),Yv(r,1,0))}function Tm(r){for(;r===_h;)_h=Eo[--To],Eo[To]=null,yh=Eo[--To],Eo[To]=null;for(;r===la;)la=Yn[--Wn],Yn[Wn]=null,lr=Yn[--Wn],Yn[Wn]=null,or=Yn[--Wn],Yn[Wn]=null}var yn=null,Jt=null,Ye=!1,ui=null,Di=!1,wm=Error(i(519));function ca(r){var s=Error(i(418,""));throw ru($n(s,r)),wm}function Wv(r){var s=r.stateNode,l=r.type,c=r.memoizedProps;switch(s[Ft]=r,s[Mt]=c,l){case"dialog":je("cancel",s),je("close",s);break;case"iframe":case"object":case"embed":je("load",s);break;case"video":case"audio":for(l=0;l<Iu.length;l++)je(Iu[l],s);break;case"source":je("error",s);break;case"img":case"image":case"link":je("error",s),je("load",s);break;case"details":je("toggle",s);break;case"input":je("invalid",s),Xs(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ws(s);break;case"select":je("invalid",s);break;case"textarea":je("invalid",s),Zr(s,c.value,c.defaultValue,c.children),Ws(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||sT(s.textContent,l)?(c.popover!=null&&(je("beforetoggle",s),je("toggle",s)),c.onScroll!=null&&je("scroll",s),c.onScrollEnd!=null&&je("scrollend",s),c.onClick!=null&&(s.onclick=Wh),s=!0):s=!1,s||ca(r)}function Xv(r){for(yn=r.return;yn;)switch(yn.tag){case 3:case 27:Di=!0;return;case 5:case 13:Di=!1;return;default:yn=yn.return}}function nu(r){if(r!==yn)return!1;if(!Ye)return Xv(r),Ye=!0,!1;var s=!1,l;if((l=r.tag!==3&&r.tag!==27)&&((l=r.tag===5)&&(l=r.type,l=!(l!=="form"&&l!=="button")||Fp(r.type,r.memoizedProps)),l=!l),l&&(s=!0),s&&Jt&&ca(r),Xv(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(l=r.data,l==="/$"){if(s===0){Jt=hi(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;r=r.nextSibling}Jt=null}}else Jt=yn?hi(r.stateNode.nextSibling):null;return!0}function iu(){Jt=yn=null,Ye=!1}function ru(r){ui===null?ui=[r]:ui.push(r)}var su=Error(i(460)),Zv=Error(i(474)),bm={then:function(){}};function Jv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function vh(){}function e0(r,s,l){switch(l=r[l],l===void 0?r.push(s):l!==s&&(s.then(vh,vh),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r===su?Error(i(483)):r;default:if(typeof s.status=="string")s.then(vh,vh);else{if(r=ot,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r===su?Error(i(483)):r}throw au=s,su}}var au=null;function t0(){if(au===null)throw Error(i(459));var r=au;return au=null,r}var wo=null,ou=0;function Eh(r){var s=ou;return ou+=1,wo===null&&(wo=[]),e0(wo,r,s)}function lu(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Th(r,s){throw s.$$typeof===o?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function n0(r){var s=r._init;return s(r._payload)}function i0(r){function s(F,U){if(r){var K=F.deletions;K===null?(F.deletions=[U],F.flags|=16):K.push(U)}}function l(F,U){if(!r)return null;for(;U!==null;)s(F,U),U=U.sibling;return null}function c(F){for(var U=new Map;F!==null;)F.key!==null?U.set(F.key,F):U.set(F.index,F),F=F.sibling;return U}function d(F,U){return F=fs(F,U),F.index=0,F.sibling=null,F}function g(F,U,K){return F.index=K,r?(K=F.alternate,K!==null?(K=K.index,K<U?(F.flags|=33554434,U):K):(F.flags|=33554434,U)):(F.flags|=1048576,U)}function T(F){return r&&F.alternate===null&&(F.flags|=33554434),F}function A(F,U,K,ee){return U===null||U.tag!==6?(U=_p(K,F.mode,ee),U.return=F,U):(U=d(U,K),U.return=F,U)}function M(F,U,K,ee){var de=K.type;return de===m?Z(F,U,K.props.children,ee,K.key):U!==null&&(U.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===G&&n0(de)===U.type)?(U=d(U,K.props),lu(U,K),U.return=F,U):(U=jh(K.type,K.key,K.props,null,F.mode,ee),lu(U,K),U.return=F,U)}function B(F,U,K,ee){return U===null||U.tag!==4||U.stateNode.containerInfo!==K.containerInfo||U.stateNode.implementation!==K.implementation?(U=yp(K,F.mode,ee),U.return=F,U):(U=d(U,K.children||[]),U.return=F,U)}function Z(F,U,K,ee,de){return U===null||U.tag!==7?(U=Ea(K,F.mode,ee,de),U.return=F,U):(U=d(U,K),U.return=F,U)}function ie(F,U,K){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=_p(""+U,F.mode,K),U.return=F,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case u:return K=jh(U.type,U.key,U.props,null,F.mode,K),lu(K,U),K.return=F,K;case f:return U=yp(U,F.mode,K),U.return=F,U;case G:var ee=U._init;return U=ee(U._payload),ie(F,U,K)}if(ue(U)||J(U))return U=Ea(U,F.mode,K,null),U.return=F,U;if(typeof U.then=="function")return ie(F,Eh(U),K);if(U.$$typeof===S)return ie(F,Lh(F,U),K);Th(F,U)}return null}function Q(F,U,K,ee){var de=U!==null?U.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return de!==null?null:A(F,U,""+K,ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case u:return K.key===de?M(F,U,K,ee):null;case f:return K.key===de?B(F,U,K,ee):null;case G:return de=K._init,K=de(K._payload),Q(F,U,K,ee)}if(ue(K)||J(K))return de!==null?null:Z(F,U,K,ee,null);if(typeof K.then=="function")return Q(F,U,Eh(K),ee);if(K.$$typeof===S)return Q(F,U,Lh(F,K),ee);Th(F,K)}return null}function X(F,U,K,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return F=F.get(K)||null,A(U,F,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case u:return F=F.get(ee.key===null?K:ee.key)||null,M(U,F,ee,de);case f:return F=F.get(ee.key===null?K:ee.key)||null,B(U,F,ee,de);case G:var Me=ee._init;return ee=Me(ee._payload),X(F,U,K,ee,de)}if(ue(ee)||J(ee))return F=F.get(K)||null,Z(U,F,ee,de,null);if(typeof ee.then=="function")return X(F,U,K,Eh(ee),de);if(ee.$$typeof===S)return X(F,U,K,Lh(U,ee),de);Th(U,ee)}return null}function ge(F,U,K,ee){for(var de=null,Me=null,ye=U,Te=U=0,Qt=null;ye!==null&&Te<K.length;Te++){ye.index>Te?(Qt=ye,ye=null):Qt=ye.sibling;var We=Q(F,ye,K[Te],ee);if(We===null){ye===null&&(ye=Qt);break}r&&ye&&We.alternate===null&&s(F,ye),U=g(We,U,Te),Me===null?de=We:Me.sibling=We,Me=We,ye=Qt}if(Te===K.length)return l(F,ye),Ye&&ua(F,Te),de;if(ye===null){for(;Te<K.length;Te++)ye=ie(F,K[Te],ee),ye!==null&&(U=g(ye,U,Te),Me===null?de=ye:Me.sibling=ye,Me=ye);return Ye&&ua(F,Te),de}for(ye=c(ye);Te<K.length;Te++)Qt=X(ye,F,Te,K[Te],ee),Qt!==null&&(r&&Qt.alternate!==null&&ye.delete(Qt.key===null?Te:Qt.key),U=g(Qt,U,Te),Me===null?de=Qt:Me.sibling=Qt,Me=Qt);return r&&ye.forEach(function(vs){return s(F,vs)}),Ye&&ua(F,Te),de}function Ie(F,U,K,ee){if(K==null)throw Error(i(151));for(var de=null,Me=null,ye=U,Te=U=0,Qt=null,We=K.next();ye!==null&&!We.done;Te++,We=K.next()){ye.index>Te?(Qt=ye,ye=null):Qt=ye.sibling;var vs=Q(F,ye,We.value,ee);if(vs===null){ye===null&&(ye=Qt);break}r&&ye&&vs.alternate===null&&s(F,ye),U=g(vs,U,Te),Me===null?de=vs:Me.sibling=vs,Me=vs,ye=Qt}if(We.done)return l(F,ye),Ye&&ua(F,Te),de;if(ye===null){for(;!We.done;Te++,We=K.next())We=ie(F,We.value,ee),We!==null&&(U=g(We,U,Te),Me===null?de=We:Me.sibling=We,Me=We);return Ye&&ua(F,Te),de}for(ye=c(ye);!We.done;Te++,We=K.next())We=X(ye,F,Te,We.value,ee),We!==null&&(r&&We.alternate!==null&&ye.delete(We.key===null?Te:We.key),U=g(We,U,Te),Me===null?de=We:Me.sibling=We,Me=We);return r&&ye.forEach(function(PN){return s(F,PN)}),Ye&&ua(F,Te),de}function Et(F,U,K,ee){if(typeof K=="object"&&K!==null&&K.type===m&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case u:e:{for(var de=K.key;U!==null;){if(U.key===de){if(de=K.type,de===m){if(U.tag===7){l(F,U.sibling),ee=d(U,K.props.children),ee.return=F,F=ee;break e}}else if(U.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===G&&n0(de)===U.type){l(F,U.sibling),ee=d(U,K.props),lu(ee,K),ee.return=F,F=ee;break e}l(F,U);break}else s(F,U);U=U.sibling}K.type===m?(ee=Ea(K.props.children,F.mode,ee,K.key),ee.return=F,F=ee):(ee=jh(K.type,K.key,K.props,null,F.mode,ee),lu(ee,K),ee.return=F,F=ee)}return T(F);case f:e:{for(de=K.key;U!==null;){if(U.key===de)if(U.tag===4&&U.stateNode.containerInfo===K.containerInfo&&U.stateNode.implementation===K.implementation){l(F,U.sibling),ee=d(U,K.children||[]),ee.return=F,F=ee;break e}else{l(F,U);break}else s(F,U);U=U.sibling}ee=yp(K,F.mode,ee),ee.return=F,F=ee}return T(F);case G:return de=K._init,K=de(K._payload),Et(F,U,K,ee)}if(ue(K))return ge(F,U,K,ee);if(J(K)){if(de=J(K),typeof de!="function")throw Error(i(150));return K=de.call(K),Ie(F,U,K,ee)}if(typeof K.then=="function")return Et(F,U,Eh(K),ee);if(K.$$typeof===S)return Et(F,U,Lh(F,K),ee);Th(F,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,U!==null&&U.tag===6?(l(F,U.sibling),ee=d(U,K),ee.return=F,F=ee):(l(F,U),ee=_p(K,F.mode,ee),ee.return=F,F=ee),T(F)):l(F,U)}return function(F,U,K,ee){try{ou=0;var de=Et(F,U,K,ee);return wo=null,de}catch(ye){if(ye===su)throw ye;var Me=ei(29,ye,null,F.mode);return Me.lanes=ee,Me.return=F,Me}finally{}}}var ha=i0(!0),r0=i0(!1),bo=xe(null),wh=xe(0);function s0(r,s){r=vr,Ke(wh,r),Ke(bo,s),vr=r|s.baseLanes}function Sm(){Ke(wh,vr),Ke(bo,bo.current)}function Am(){vr=wh.current,nt(bo),nt(wh)}var Xn=xe(null),Oi=null;function ts(r){var s=r.alternate;Ke(Lt,Lt.current&1),Ke(Xn,r),Oi===null&&(s===null||bo.current!==null||s.memoizedState!==null)&&(Oi=r)}function a0(r){if(r.tag===22){if(Ke(Lt,Lt.current),Ke(Xn,r),Oi===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Oi=r)}}else ns()}function ns(){Ke(Lt,Lt.current),Ke(Xn,Xn.current)}function ur(r){nt(Xn),Oi===r&&(Oi=null),nt(Lt)}var Lt=xe(0);function bh(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var w1=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(l,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(l){return l()})}},b1=n.unstable_scheduleCallback,S1=n.unstable_NormalPriority,Vt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cm(){return{controller:new w1,data:new Map,refCount:0}}function uu(r){r.refCount--,r.refCount===0&&b1(S1,function(){r.controller.abort()})}var cu=null,Rm=0,So=0,Ao=null;function A1(r,s){if(cu===null){var l=cu=[];Rm=0,So=Mp(),Ao={status:"pending",value:void 0,then:function(c){l.push(c)}}}return Rm++,s.then(o0,o0),s}function o0(){if(--Rm===0&&cu!==null){Ao!==null&&(Ao.status="fulfilled");var r=cu;cu=null,So=0,Ao=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function C1(r,s){var l=[],c={status:"pending",value:null,reason:null,then:function(d){l.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<l.length;d++)(0,l[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<l.length;d++)(0,l[d])(void 0)}),c}var l0=b.S;b.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&A1(r,s),l0!==null&&l0(r,s)};var fa=xe(null);function Im(){var r=fa.current;return r!==null?r:ot.pooledCache}function Sh(r,s){s===null?Ke(fa,fa.current):Ke(fa,s.pool)}function u0(){var r=Im();return r===null?null:{parent:Vt._currentValue,pool:r}}var is=0,Oe=null,it=null,Ct=null,Ah=!1,Co=!1,da=!1,Ch=0,hu=0,Ro=null,R1=0;function St(){throw Error(i(321))}function Nm(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!Mn(r[l],s[l]))return!1;return!0}function xm(r,s,l,c,d,g){return is=g,Oe=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,b.H=r===null||r.memoizedState===null?ma:rs,da=!1,g=l(c,d),da=!1,Co&&(g=h0(s,l,c,d)),c0(r),g}function c0(r){b.H=Mi;var s=it!==null&&it.next!==null;if(is=0,Ct=it=Oe=null,Ah=!1,hu=0,Ro=null,s)throw Error(i(300));r===null||Gt||(r=r.dependencies,r!==null&&Ph(r)&&(Gt=!0))}function h0(r,s,l,c){Oe=r;var d=0;do{if(Co&&(Ro=null),hu=0,Co=!1,25<=d)throw Error(i(301));if(d+=1,Ct=it=null,r.updateQueue!=null){var g=r.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}b.H=pa,g=s(l,c)}while(Co);return g}function I1(){var r=b.H,s=r.useState()[0];return s=typeof s.then=="function"?fu(s):s,r=r.useState()[0],(it!==null?it.memoizedState:null)!==r&&(Oe.flags|=1024),s}function Dm(){var r=Ch!==0;return Ch=0,r}function Om(r,s,l){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~l}function Mm(r){if(Ah){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ah=!1}is=0,Ct=it=Oe=null,Co=!1,hu=Ch=0,Ro=null}function Sn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Oe.memoizedState=Ct=r:Ct=Ct.next=r,Ct}function Rt(){if(it===null){var r=Oe.alternate;r=r!==null?r.memoizedState:null}else r=it.next;var s=Ct===null?Oe.memoizedState:Ct.next;if(s!==null)Ct=s,it=r;else{if(r===null)throw Oe.alternate===null?Error(i(467)):Error(i(310));it=r,r={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Ct===null?Oe.memoizedState=Ct=r:Ct=Ct.next=r}return Ct}var Rh;Rh=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function fu(r){var s=hu;return hu+=1,Ro===null&&(Ro=[]),r=e0(Ro,r,s),s=Oe,(Ct===null?s.memoizedState:Ct.next)===null&&(s=s.alternate,b.H=s===null||s.memoizedState===null?ma:rs),r}function Ih(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return fu(r);if(r.$$typeof===S)return ln(r)}throw Error(i(438,String(r)))}function km(r){var s=null,l=Oe.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Oe.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=Rh(),Oe.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(r),c=0;c<r;c++)l[c]=W;return s.index++,l}function cr(r,s){return typeof s=="function"?s(r):s}function Nh(r){var s=Rt();return Pm(s,it,r)}function Pm(r,s,l){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=l;var d=r.baseQueue,g=c.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}s.baseQueue=d=g,c.pending=null}if(g=r.baseState,d===null)r.memoizedState=g;else{s=d.next;var A=T=null,M=null,B=s,Z=!1;do{var ie=B.lane&-536870913;if(ie!==B.lane?(He&ie)===ie:(is&ie)===ie){var Q=B.revertLane;if(Q===0)M!==null&&(M=M.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),ie===So&&(Z=!0);else if((is&Q)===Q){B=B.next,Q===So&&(Z=!0);continue}else ie={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},M===null?(A=M=ie,T=g):M=M.next=ie,Oe.lanes|=Q,ds|=Q;ie=B.action,da&&l(g,ie),g=B.hasEagerState?B.eagerState:l(g,ie)}else Q={lane:ie,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},M===null?(A=M=Q,T=g):M=M.next=Q,Oe.lanes|=ie,ds|=ie;B=B.next}while(B!==null&&B!==s);if(M===null?T=g:M.next=A,!Mn(g,r.memoizedState)&&(Gt=!0,Z&&(l=Ao,l!==null)))throw l;r.memoizedState=g,r.baseState=T,r.baseQueue=M,c.lastRenderedState=g}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function Lm(r){var s=Rt(),l=s.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=r;var c=l.dispatch,d=l.pending,g=s.memoizedState;if(d!==null){l.pending=null;var T=d=d.next;do g=r(g,T.action),T=T.next;while(T!==d);Mn(g,s.memoizedState)||(Gt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function f0(r,s,l){var c=Oe,d=Rt(),g=Ye;if(g){if(l===void 0)throw Error(i(407));l=l()}else l=s();var T=!Mn((it||d).memoizedState,l);if(T&&(d.memoizedState=l,Gt=!0),d=d.queue,jm(p0.bind(null,c,d,r),[r]),d.getSnapshot!==s||T||Ct!==null&&Ct.memoizedState.tag&1){if(c.flags|=2048,Io(9,m0.bind(null,c,d,l,s),{destroy:void 0},null),ot===null)throw Error(i(349));g||is&60||d0(c,s,l)}return l}function d0(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Oe.updateQueue,s===null?(s=Rh(),Oe.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function m0(r,s,l,c){s.value=l,s.getSnapshot=c,g0(s)&&_0(r)}function p0(r,s,l){return l(function(){g0(s)&&_0(r)})}function g0(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!Mn(r,l)}catch{return!0}}function _0(r){var s=es(r,2);s!==null&&vn(s,r,2)}function Vm(r){var s=Sn();if(typeof r=="function"){var l=r;if(r=l(),da){Ei(!0);try{l()}finally{Ei(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:r},s}function y0(r,s,l,c){return r.baseState=l,Pm(r,it,typeof c=="function"?c:cr)}function N1(r,s,l,c,d){if(Oh(r))throw Error(i(485));if(r=s.action,r!==null){var g={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};b.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,v0(s,g)):(g.next=l.next,s.pending=l.next=g)}}function v0(r,s){var l=s.action,c=s.payload,d=r.state;if(s.isTransition){var g=b.T,T={};b.T=T;try{var A=l(d,c),M=b.S;M!==null&&M(T,A),E0(r,s,A)}catch(B){Um(r,s,B)}finally{b.T=g}}else try{g=l(d,c),E0(r,s,g)}catch(B){Um(r,s,B)}}function E0(r,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){T0(r,s,c)},function(c){return Um(r,s,c)}):T0(r,s,l)}function T0(r,s,l){s.status="fulfilled",s.value=l,w0(s),r.state=l,s=r.pending,s!==null&&(l=s.next,l===s?r.pending=null:(l=l.next,s.next=l,v0(r,l)))}function Um(r,s,l){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,w0(s),s=s.next;while(s!==c)}r.action=null}function w0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function b0(r,s){return s}function S0(r,s){if(Ye){var l=ot.formState;if(l!==null){e:{var c=Oe;if(Ye){if(Jt){t:{for(var d=Jt,g=Di;d.nodeType!==8;){if(!g){d=null;break t}if(d=hi(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){Jt=hi(d.nextSibling),c=d.data==="F!";break e}}ca(c)}c=!1}c&&(s=l[0])}}return l=Sn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b0,lastRenderedState:s},l.queue=c,l=F0.bind(null,Oe,c),c.dispatch=l,c=Vm(!1),g=Hm.bind(null,Oe,!1,c.queue),c=Sn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,l=N1.bind(null,Oe,d,g,l),d.dispatch=l,c.memoizedState=r,[s,l,!1]}function A0(r){var s=Rt();return C0(s,it,r)}function C0(r,s,l){s=Pm(r,s,b0)[0],r=Nh(cr)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?fu(s):s;var c=Rt(),d=c.queue,g=d.dispatch;return l!==c.memoizedState&&(Oe.flags|=2048,Io(9,x1.bind(null,d,l),{destroy:void 0},null)),[s,g,r]}function x1(r,s){r.action=s}function R0(r){var s=Rt(),l=it;if(l!==null)return C0(s,l,r);Rt(),s=s.memoizedState,l=Rt();var c=l.queue.dispatch;return l.memoizedState=r,[s,c,!1]}function Io(r,s,l,c){return r={tag:r,create:s,inst:l,deps:c,next:null},s=Oe.updateQueue,s===null&&(s=Rh(),Oe.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=r.next=r:(c=l.next,l.next=r,r.next=c,s.lastEffect=r),r}function I0(){return Rt().memoizedState}function xh(r,s,l,c){var d=Sn();Oe.flags|=r,d.memoizedState=Io(1|s,l,{destroy:void 0},c===void 0?null:c)}function Dh(r,s,l,c){var d=Rt();c=c===void 0?null:c;var g=d.memoizedState.inst;it!==null&&c!==null&&Nm(c,it.memoizedState.deps)?d.memoizedState=Io(s,l,g,c):(Oe.flags|=r,d.memoizedState=Io(1|s,l,g,c))}function N0(r,s){xh(8390656,8,r,s)}function jm(r,s){Dh(2048,8,r,s)}function x0(r,s){return Dh(4,2,r,s)}function D0(r,s){return Dh(4,4,r,s)}function O0(r,s){if(typeof s=="function"){r=r();var l=s(r);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function M0(r,s,l){l=l!=null?l.concat([r]):null,Dh(4,4,O0.bind(null,s,r),l)}function Bm(){}function k0(r,s){var l=Rt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Nm(s,c[1])?c[0]:(l.memoizedState=[r,s],r)}function P0(r,s){var l=Rt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Nm(s,c[1]))return c[0];if(c=r(),da){Ei(!0);try{r()}finally{Ei(!1)}}return l.memoizedState=[c,s],c}function zm(r,s,l){return l===void 0||is&1073741824?r.memoizedState=s:(r.memoizedState=l,r=VE(),Oe.lanes|=r,ds|=r,l)}function L0(r,s,l,c){return Mn(l,s)?l:bo.current!==null?(r=zm(r,l,c),Mn(r,s)||(Gt=!0),r):is&42?(r=VE(),Oe.lanes|=r,ds|=r,s):(Gt=!0,r.memoizedState=l)}function V0(r,s,l,c,d){var g=ce.p;ce.p=g!==0&&8>g?g:8;var T=b.T,A={};b.T=A,Hm(r,!1,s,l);try{var M=d(),B=b.S;if(B!==null&&B(A,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var Z=C1(M,c);du(r,s,Z,Vn(r))}else du(r,s,c,Vn(r))}catch(ie){du(r,s,{then:function(){},status:"rejected",reason:ie},Vn())}finally{ce.p=g,b.T=T}}function D1(){}function Fm(r,s,l,c){if(r.tag!==5)throw Error(i(476));var d=U0(r).queue;V0(r,d,s,Ce,l===null?D1:function(){return j0(r),l(c)})}function U0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:Ce,baseState:Ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:Ce},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:l},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function j0(r){var s=U0(r).next.queue;du(r,s,{},Vn())}function qm(){return ln(Mu)}function B0(){return Rt().memoizedState}function z0(){return Rt().memoizedState}function O1(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var l=Vn();r=os(l);var c=ls(s,r,l);c!==null&&(vn(c,s,l),gu(c,s,l)),s={cache:Cm()},r.payload=s;return}s=s.return}}function M1(r,s,l){var c=Vn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Oh(r)?q0(s,l):(l=vm(r,s,l,c),l!==null&&(vn(l,r,c),H0(l,s,c)))}function F0(r,s,l){var c=Vn();du(r,s,l,c)}function du(r,s,l,c){var d={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Oh(r))q0(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,A=g(T,l);if(d.hasEagerState=!0,d.eagerState=A,Mn(A,T))return ph(r,s,d,0),ot===null&&mh(),!1}catch{}finally{}if(l=vm(r,s,d,c),l!==null)return vn(l,r,c),H0(l,s,c),!0}return!1}function Hm(r,s,l,c){if(c={lane:2,revertLane:Mp(),action:c,hasEagerState:!1,eagerState:null,next:null},Oh(r)){if(s)throw Error(i(479))}else s=vm(r,l,c,2),s!==null&&vn(s,r,2)}function Oh(r){var s=r.alternate;return r===Oe||s!==null&&s===Oe}function q0(r,s){Co=Ah=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function H0(r,s,l){if(l&4194176){var c=s.lanes;c&=r.pendingLanes,l|=c,s.lanes=l,Hr(r,l)}}var Mi={readContext:ln,use:Ih,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St};Mi.useCacheRefresh=St,Mi.useMemoCache=St,Mi.useHostTransitionStatus=St,Mi.useFormState=St,Mi.useActionState=St,Mi.useOptimistic=St;var ma={readContext:ln,use:Ih,useCallback:function(r,s){return Sn().memoizedState=[r,s===void 0?null:s],r},useContext:ln,useEffect:N0,useImperativeHandle:function(r,s,l){l=l!=null?l.concat([r]):null,xh(4194308,4,O0.bind(null,s,r),l)},useLayoutEffect:function(r,s){return xh(4194308,4,r,s)},useInsertionEffect:function(r,s){xh(4,2,r,s)},useMemo:function(r,s){var l=Sn();s=s===void 0?null:s;var c=r();if(da){Ei(!0);try{r()}finally{Ei(!1)}}return l.memoizedState=[c,s],c},useReducer:function(r,s,l){var c=Sn();if(l!==void 0){var d=l(s);if(da){Ei(!0);try{l(s)}finally{Ei(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=M1.bind(null,Oe,r),[c.memoizedState,r]},useRef:function(r){var s=Sn();return r={current:r},s.memoizedState=r},useState:function(r){r=Vm(r);var s=r.queue,l=F0.bind(null,Oe,s);return s.dispatch=l,[r.memoizedState,l]},useDebugValue:Bm,useDeferredValue:function(r,s){var l=Sn();return zm(l,r,s)},useTransition:function(){var r=Vm(!1);return r=V0.bind(null,Oe,r.queue,!0,!1),Sn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,l){var c=Oe,d=Sn();if(Ye){if(l===void 0)throw Error(i(407));l=l()}else{if(l=s(),ot===null)throw Error(i(349));He&60||d0(c,s,l)}d.memoizedState=l;var g={value:l,getSnapshot:s};return d.queue=g,N0(p0.bind(null,c,g,r),[r]),c.flags|=2048,Io(9,m0.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var r=Sn(),s=ot.identifierPrefix;if(Ye){var l=lr,c=or;l=(c&~(1<<32-pn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ch++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=R1++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},useCacheRefresh:function(){return Sn().memoizedState=O1.bind(null,Oe)}};ma.useMemoCache=km,ma.useHostTransitionStatus=qm,ma.useFormState=S0,ma.useActionState=S0,ma.useOptimistic=function(r){var s=Sn();s.memoizedState=s.baseState=r;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=Hm.bind(null,Oe,!0,l),l.dispatch=s,[r,s]};var rs={readContext:ln,use:Ih,useCallback:k0,useContext:ln,useEffect:jm,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:D0,useMemo:P0,useReducer:Nh,useRef:I0,useState:function(){return Nh(cr)},useDebugValue:Bm,useDeferredValue:function(r,s){var l=Rt();return L0(l,it.memoizedState,r,s)},useTransition:function(){var r=Nh(cr)[0],s=Rt().memoizedState;return[typeof r=="boolean"?r:fu(r),s]},useSyncExternalStore:f0,useId:B0};rs.useCacheRefresh=z0,rs.useMemoCache=km,rs.useHostTransitionStatus=qm,rs.useFormState=A0,rs.useActionState=A0,rs.useOptimistic=function(r,s){var l=Rt();return y0(l,it,r,s)};var pa={readContext:ln,use:Ih,useCallback:k0,useContext:ln,useEffect:jm,useImperativeHandle:M0,useInsertionEffect:x0,useLayoutEffect:D0,useMemo:P0,useReducer:Lm,useRef:I0,useState:function(){return Lm(cr)},useDebugValue:Bm,useDeferredValue:function(r,s){var l=Rt();return it===null?zm(l,r,s):L0(l,it.memoizedState,r,s)},useTransition:function(){var r=Lm(cr)[0],s=Rt().memoizedState;return[typeof r=="boolean"?r:fu(r),s]},useSyncExternalStore:f0,useId:B0};pa.useCacheRefresh=z0,pa.useMemoCache=km,pa.useHostTransitionStatus=qm,pa.useFormState=R0,pa.useActionState=R0,pa.useOptimistic=function(r,s){var l=Rt();return it!==null?y0(l,it,r,s):(l.baseState=r,[r,l.queue.dispatch])};function Gm(r,s,l,c){s=r.memoizedState,l=l(c,s),l=l==null?s:N({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Km={isMounted:function(r){return(r=r._reactInternals)?_e(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var c=Vn(),d=os(c);d.payload=s,l!=null&&(d.callback=l),s=ls(r,d,c),s!==null&&(vn(s,r,c),gu(s,r,c))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var c=Vn(),d=os(c);d.tag=1,d.payload=s,l!=null&&(d.callback=l),s=ls(r,d,c),s!==null&&(vn(s,r,c),gu(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Vn(),c=os(l);c.tag=2,s!=null&&(c.callback=s),s=ls(r,c,l),s!==null&&(vn(s,r,l),gu(s,r,l))}};function G0(r,s,l,c,d,g,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!eu(l,c)||!eu(d,g):!0}function K0(r,s,l,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==r&&Km.enqueueReplaceState(s,s.state,null)}function ga(r,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(r=r.defaultProps){l===s&&(l=N({},l));for(var d in r)l[d]===void 0&&(l[d]=r[d])}return l}var Mh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function Q0(r){Mh(r)}function $0(r){console.error(r)}function Y0(r){Mh(r)}function kh(r,s){try{var l=r.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function W0(r,s,l){try{var c=r.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Qm(r,s,l){return l=os(l),l.tag=3,l.payload={element:null},l.callback=function(){kh(r,s)},l}function X0(r){return r=os(r),r.tag=3,r}function Z0(r,s,l,c){var d=l.type.getDerivedStateFromError;if(typeof d=="function"){var g=c.value;r.payload=function(){return d(g)},r.callback=function(){W0(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(r.callback=function(){W0(s,l,c),typeof d!="function"&&(ms===null?ms=new Set([this]):ms.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function k1(r,s,l,c,d){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&pu(s,l,d,!0),l=Xn.current,l!==null){switch(l.tag){case 13:return Oi===null?Ip():l.alternate===null&&vt===0&&(vt=3),l.flags&=-257,l.flags|=65536,l.lanes=d,c===bm?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),xp(r,c,d)),!1;case 22:return l.flags|=65536,c===bm?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),xp(r,c,d)),!1}throw Error(i(435,l.tag))}return xp(r,c,d),Ip(),!1}if(Ye)return s=Xn.current,s!==null?(!(s.flags&65536)&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==wm&&(r=Error(i(422),{cause:c}),ru($n(r,l)))):(c!==wm&&(s=Error(i(423),{cause:c}),ru($n(s,l))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=$n(c,l),d=Qm(r.stateNode,c,d),lp(r,d),vt!==4&&(vt=2)),!1;var g=Error(i(520),{cause:c});if(g=$n(g,l),Su===null?Su=[g]:Su.push(g),vt!==4&&(vt=2),s===null)return!0;c=$n(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,r=d&-d,l.lanes|=r,r=Qm(l.stateNode,c,r),lp(l,r),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ms===null||!ms.has(g))))return l.flags|=65536,d&=-d,l.lanes|=d,d=X0(d),Z0(d,r,l,c),lp(l,d),!1}l=l.return}while(l!==null);return!1}var J0=Error(i(461)),Gt=!1;function en(r,s,l,c){s.child=r===null?r0(s,null,l,c):ha(s,r.child,l,c)}function eE(r,s,l,c,d){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var A in c)A!=="ref"&&(T[A]=c[A])}else T=c;return ya(s),c=xm(r,s,l,T,g,d),A=Dm(),r!==null&&!Gt?(Om(r,s,d),hr(r,s,d)):(Ye&&A&&Em(s),s.flags|=1,en(r,s,c,d),s.child)}function tE(r,s,l,c,d){if(r===null){var g=l.type;return typeof g=="function"&&!gp(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,nE(r,s,g,c,d)):(r=jh(l.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!np(r,d)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:eu,l(T,c)&&r.ref===s.ref)return hr(r,s,d)}return s.flags|=1,r=fs(g,c),r.ref=s.ref,r.return=s,s.child=r}function nE(r,s,l,c,d){if(r!==null){var g=r.memoizedProps;if(eu(g,c)&&r.ref===s.ref)if(Gt=!1,s.pendingProps=c=g,np(r,d))r.flags&131072&&(Gt=!0);else return s.lanes=r.lanes,hr(r,s,d)}return $m(r,s,l,c,d)}function iE(r,s,l){var c=s.pendingProps,d=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=r!==null?r.memoizedState:null;if(mu(r,s),c.mode==="hidden"||g){if(s.flags&128){if(c=T!==null?T.baseLanes|l:l,r!==null){for(d=s.child=r.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return rE(r,s,c,l)}if(l&536870912)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Sh(s,T!==null?T.cachePool:null),T!==null?s0(s,T):Sm(),a0(s);else return s.lanes=s.childLanes=536870912,rE(r,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(Sh(s,T.cachePool),s0(s,T),ns(),s.memoizedState=null):(r!==null&&Sh(s,null),Sm(),ns());return en(r,s,d,l),s.child}function rE(r,s,l,c){var d=Im();return d=d===null?null:{parent:Vt._currentValue,pool:d},s.memoizedState={baseLanes:l,cachePool:d},r!==null&&Sh(s,null),Sm(),a0(s),r!==null&&pu(r,s,c,!0),null}function mu(r,s){var l=s.ref;if(l===null)r!==null&&r.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(i(284));(r===null||r.ref!==l)&&(s.flags|=2097664)}}function $m(r,s,l,c,d){return ya(s),l=xm(r,s,l,c,void 0,d),c=Dm(),r!==null&&!Gt?(Om(r,s,d),hr(r,s,d)):(Ye&&c&&Em(s),s.flags|=1,en(r,s,l,d),s.child)}function sE(r,s,l,c,d,g){return ya(s),s.updateQueue=null,l=h0(s,c,l,d),c0(r),c=Dm(),r!==null&&!Gt?(Om(r,s,g),hr(r,s,g)):(Ye&&c&&Em(s),s.flags|=1,en(r,s,l,g),s.child)}function aE(r,s,l,c,d){if(ya(s),s.stateNode===null){var g=vo,T=l.contextType;typeof T=="object"&&T!==null&&(g=ln(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Km,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},ap(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?ln(T):vo,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&(Gm(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Km.enqueueReplaceState(g,g.state,null),yu(s,c,g,d),_u(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){g=s.stateNode;var A=s.memoizedProps,M=ga(l,A);g.props=M;var B=g.context,Z=l.contextType;T=vo,typeof Z=="object"&&Z!==null&&(T=ln(Z));var ie=l.getDerivedStateFromProps;Z=typeof ie=="function"||typeof g.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,Z||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A||B!==T)&&K0(s,g,c,T),as=!1;var Q=s.memoizedState;g.state=Q,yu(s,c,g,d),_u(),B=s.memoizedState,A||Q!==B||as?(typeof ie=="function"&&(Gm(s,l,ie,c),B=s.memoizedState),(M=as||G0(s,l,M,c,Q,B,T))?(Z||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=B),g.props=c,g.state=B,g.context=T,c=M):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,op(r,s),T=s.memoizedProps,Z=ga(l,T),g.props=Z,ie=s.pendingProps,Q=g.context,B=l.contextType,M=vo,typeof B=="object"&&B!==null&&(M=ln(B)),A=l.getDerivedStateFromProps,(B=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ie||Q!==M)&&K0(s,g,c,M),as=!1,Q=s.memoizedState,g.state=Q,yu(s,c,g,d),_u();var X=s.memoizedState;T!==ie||Q!==X||as||r!==null&&r.dependencies!==null&&Ph(r.dependencies)?(typeof A=="function"&&(Gm(s,l,A,c),X=s.memoizedState),(Z=as||G0(s,l,Z,c,Q,X,M)||r!==null&&r.dependencies!==null&&Ph(r.dependencies))?(B||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,X,M),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,X,M)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=X),g.props=c,g.state=X,g.context=M,c=Z):(typeof g.componentDidUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),c=!1)}return g=c,mu(r,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,r!==null&&c?(s.child=ha(s,r.child,null,d),s.child=ha(s,null,l,d)):en(r,s,l,d),s.memoizedState=g.state,r=s.child):r=hr(r,s,d),r}function oE(r,s,l,c){return iu(),s.flags|=256,en(r,s,l,c),s.child}var Ym={dehydrated:null,treeContext:null,retryLane:0};function Wm(r){return{baseLanes:r,cachePool:u0()}}function Xm(r,s,l){return r=r!==null?r.childLanes&~l:0,s&&(r|=ti),r}function lE(r,s,l){var c=s.pendingProps,d=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=r!==null&&r.memoizedState===null?!1:(Lt.current&2)!==0),T&&(d=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ye){if(d?ts(s):ns(),Ye){var A=Jt,M;if(M=A){e:{for(M=A,A=Di;M.nodeType!==8;){if(!A){A=null;break e}if(M=hi(M.nextSibling),M===null){A=null;break e}}A=M}A!==null?(s.memoizedState={dehydrated:A,treeContext:la!==null?{id:or,overflow:lr}:null,retryLane:536870912},M=ei(18,null,null,0),M.stateNode=A,M.return=s,s.child=M,yn=s,Jt=null,M=!0):M=!1}M||ca(s)}if(A=s.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?s.lanes=16:s.lanes=536870912,null;ur(s)}return A=c.children,c=c.fallback,d?(ns(),d=s.mode,A=Jm({mode:"hidden",children:A},d),c=Ea(c,d,l,null),A.return=s,c.return=s,A.sibling=c,s.child=A,d=s.child,d.memoizedState=Wm(l),d.childLanes=Xm(r,T,l),s.memoizedState=Ym,c):(ts(s),Zm(s,A))}if(M=r.memoizedState,M!==null&&(A=M.dehydrated,A!==null)){if(g)s.flags&256?(ts(s),s.flags&=-257,s=ep(r,s,l)):s.memoizedState!==null?(ns(),s.child=r.child,s.flags|=128,s=null):(ns(),d=c.fallback,A=s.mode,c=Jm({mode:"visible",children:c.children},A),d=Ea(d,A,l,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,ha(s,r.child,null,l),c=s.child,c.memoizedState=Wm(l),c.childLanes=Xm(r,T,l),s.memoizedState=Ym,s=d);else if(ts(s),A.data==="$!"){if(T=A.nextSibling&&A.nextSibling.dataset,T)var B=T.dgst;T=B,c=Error(i(419)),c.stack="",c.digest=T,ru({value:c,source:null,stack:null}),s=ep(r,s,l)}else if(Gt||pu(r,s,l,!1),T=(l&r.childLanes)!==0,Gt||T){if(T=ot,T!==null){if(c=l&-l,c&42)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=c&(T.suspendedLanes|l)?0:c,c!==0&&c!==M.retryLane)throw M.retryLane=c,es(r,c),vn(T,r,c),J0}A.data==="$?"||Ip(),s=ep(r,s,l)}else A.data==="$?"?(s.flags|=128,s.child=r.child,s=Y1.bind(null,r),A._reactRetry=s,s=null):(r=M.treeContext,Jt=hi(A.nextSibling),yn=s,Ye=!0,ui=null,Di=!1,r!==null&&(Yn[Wn++]=or,Yn[Wn++]=lr,Yn[Wn++]=la,or=r.id,lr=r.overflow,la=s),s=Zm(s,c.children),s.flags|=4096);return s}return d?(ns(),d=c.fallback,A=s.mode,M=r.child,B=M.sibling,c=fs(M,{mode:"hidden",children:c.children}),c.subtreeFlags=M.subtreeFlags&31457280,B!==null?d=fs(B,d):(d=Ea(d,A,l,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,A=r.child.memoizedState,A===null?A=Wm(l):(M=A.cachePool,M!==null?(B=Vt._currentValue,M=M.parent!==B?{parent:B,pool:B}:M):M=u0(),A={baseLanes:A.baseLanes|l,cachePool:M}),d.memoizedState=A,d.childLanes=Xm(r,T,l),s.memoizedState=Ym,c):(ts(s),l=r.child,r=l.sibling,l=fs(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,r!==null&&(T=s.deletions,T===null?(s.deletions=[r],s.flags|=16):T.push(r)),s.child=l,s.memoizedState=null,l)}function Zm(r,s){return s=Jm({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Jm(r,s){return kE(r,s,0,null)}function ep(r,s,l){return ha(s,r.child,null,l),r=Zm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function uE(r,s,l){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),rp(r.return,s,l)}function tp(r,s,l,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=d)}function cE(r,s,l){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(en(r,s,c.children,l),c=Lt.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&uE(r,l,s);else if(r.tag===19)uE(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(Ke(Lt,c),d){case"forwards":for(l=s.child,d=null;l!==null;)r=l.alternate,r!==null&&bh(r)===null&&(d=l),l=l.sibling;l=d,l===null?(d=s.child,s.child=null):(d=l.sibling,l.sibling=null),tp(s,!1,d,l,g);break;case"backwards":for(l=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&bh(r)===null){s.child=d;break}r=d.sibling,d.sibling=l,l=d,d=r}tp(s,!0,l,null,g);break;case"together":tp(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function hr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),ds|=s.lanes,!(l&s.childLanes))if(r!==null){if(pu(r,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,l=fs(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=fs(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function np(r,s){return r.lanes&s?!0:(r=r.dependencies,!!(r!==null&&Ph(r)))}function P1(r,s,l){switch(s.tag){case 3:Ur(s,s.stateNode.containerInfo),ss(s,Vt,r.memoizedState.cache),iu();break;case 27:case 5:Ml(s);break;case 4:Ur(s,s.stateNode.containerInfo);break;case 10:ss(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(ts(s),s.flags|=128,null):l&s.child.childLanes?lE(r,s,l):(ts(s),r=hr(r,s,l),r!==null?r.sibling:null);ts(s);break;case 19:var d=(r.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(pu(r,s,l,!1),c=(l&s.childLanes)!==0),d){if(c)return cE(r,s,l);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(Lt,Lt.current),c)break;return null;case 22:case 23:return s.lanes=0,iE(r,s,l);case 24:ss(s,Vt,r.memoizedState.cache)}return hr(r,s,l)}function hE(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps)Gt=!0;else{if(!np(r,l)&&!(s.flags&128))return Gt=!1,P1(r,s,l);Gt=!!(r.flags&131072)}else Gt=!1,Ye&&s.flags&1048576&&Yv(s,yh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")gp(c)?(r=ga(c,r),s.tag=1,s=aE(null,s,c,r,l)):(s.tag=0,s=$m(null,s,c,r,l));else{if(c!=null){if(d=c.$$typeof,d===x){s.tag=11,s=eE(null,s,c,r,l);break e}else if(d===z){s.tag=14,s=tE(null,s,c,r,l);break e}}throw s=R(c)||c,Error(i(306,s,""))}}return s;case 0:return $m(r,s,s.type,s.pendingProps,l);case 1:return c=s.type,d=ga(c,s.pendingProps),aE(r,s,c,d,l);case 3:e:{if(Ur(s,s.stateNode.containerInfo),r===null)throw Error(i(387));var g=s.pendingProps;d=s.memoizedState,c=d.element,op(r,s),yu(s,g,null,l);var T=s.memoizedState;if(g=T.cache,ss(s,Vt,g),g!==d.cache&&sp(s,[Vt],l,!0),_u(),g=T.element,d.isDehydrated)if(d={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=oE(r,s,g,l);break e}else if(g!==c){c=$n(Error(i(424)),s),ru(c),s=oE(r,s,g,l);break e}else for(Jt=hi(s.stateNode.containerInfo.firstChild),yn=s,Ye=!0,ui=null,Di=!0,l=r0(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(iu(),g===c){s=hr(r,s,l);break e}en(r,s,g,l)}s=s.child}return s;case 26:return mu(r,s),r===null?(l=mT(s.type,null,s.pendingProps,null))?s.memoizedState=l:Ye||(l=s.type,r=s.pendingProps,c=Xh(Bn.current).createElement(l),c[Ft]=s,c[Mt]=r,tn(c,l,r),dt(c),s.stateNode=c):s.memoizedState=mT(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Ml(s),r===null&&Ye&&(c=s.stateNode=hT(s.type,s.pendingProps,Bn.current),yn=s,Di=!0,Jt=hi(c.firstChild)),c=s.pendingProps.children,r!==null||Ye?en(r,s,c,l):s.child=ha(s,null,c,l),mu(r,s),s.child;case 5:return r===null&&Ye&&((d=c=Jt)&&(c=hN(c,s.type,s.pendingProps,Di),c!==null?(s.stateNode=c,yn=s,Jt=hi(c.firstChild),Di=!1,d=!0):d=!1),d||ca(s)),Ml(s),d=s.type,g=s.pendingProps,T=r!==null?r.memoizedProps:null,c=g.children,Fp(d,g)?c=null:T!==null&&Fp(d,T)&&(s.flags|=32),s.memoizedState!==null&&(d=xm(r,s,I1,null,null,l),Mu._currentValue=d),mu(r,s),en(r,s,c,l),s.child;case 6:return r===null&&Ye&&((r=l=Jt)&&(l=fN(l,s.pendingProps,Di),l!==null?(s.stateNode=l,yn=s,Jt=null,r=!0):r=!1),r||ca(s)),null;case 13:return lE(r,s,l);case 4:return Ur(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=ha(s,null,c,l):en(r,s,c,l),s.child;case 11:return eE(r,s,s.type,s.pendingProps,l);case 7:return en(r,s,s.pendingProps,l),s.child;case 8:return en(r,s,s.pendingProps.children,l),s.child;case 12:return en(r,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,ss(s,s.type,c.value),en(r,s,c.children,l),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,ya(s),d=ln(d),c=c(d),s.flags|=1,en(r,s,c,l),s.child;case 14:return tE(r,s,s.type,s.pendingProps,l);case 15:return nE(r,s,s.type,s.pendingProps,l);case 19:return cE(r,s,l);case 22:return iE(r,s,l);case 24:return ya(s),c=ln(Vt),r===null?(d=Im(),d===null&&(d=ot,g=Cm(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=l),d=g),s.memoizedState={parent:c,cache:d},ap(s),ss(s,Vt,d)):(r.lanes&l&&(op(r,s),yu(s,null,null,l),_u()),d=r.memoizedState,g=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),ss(s,Vt,c)):(c=g.cache,ss(s,Vt,c),c!==d.cache&&sp(s,[Vt],l,!0))),en(r,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}var ip=xe(null),_a=null,fr=null;function ss(r,s,l){Ke(ip,s._currentValue),s._currentValue=l}function dr(r){r._currentValue=ip.current,nt(ip)}function rp(r,s,l){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===l)break;r=r.return}}function sp(r,s,l,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var g=d.dependencies;if(g!==null){var T=d.child;g=g.firstContext;e:for(;g!==null;){var A=g;g=d;for(var M=0;M<s.length;M++)if(A.context===s[M]){g.lanes|=l,A=g.alternate,A!==null&&(A.lanes|=l),rp(g.return,l,r),c||(T=null);break e}g=A.next}}else if(d.tag===18){if(T=d.return,T===null)throw Error(i(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),rp(T,l,r),T=null}else T=d.child;if(T!==null)T.return=d;else for(T=d;T!==null;){if(T===r){T=null;break}if(d=T.sibling,d!==null){d.return=T.return,T=d;break}T=T.return}d=T}}function pu(r,s,l,c){r=null;for(var d=s,g=!1;d!==null;){if(!g){if(d.flags&524288)g=!0;else if(d.flags&262144)break}if(d.tag===10){var T=d.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var A=d.type;Mn(d.pendingProps.value,T.value)||(r!==null?r.push(A):r=[A])}}else if(d===Vr.current){if(T=d.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Mu):r=[Mu])}d=d.return}r!==null&&sp(s,r,l,c),s.flags|=262144}function Ph(r){for(r=r.firstContext;r!==null;){if(!Mn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function ya(r){_a=r,fr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function ln(r){return fE(_a,r)}function Lh(r,s){return _a===null&&ya(r),fE(r,s)}function fE(r,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},fr===null){if(r===null)throw Error(i(308));fr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else fr=fr.next=s;return l}var as=!1;function ap(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function op(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function os(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function ls(r,s,l){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,pt&2){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=gh(r),Qv(r,null,l),s}return ph(r,c,s,l),gh(r)}function gu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=r.pendingLanes,l|=c,s.lanes=l,Hr(r,l)}}function lp(r,s){var l=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var d=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?d=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?d=g=s:g=g.next=s}else d=g=s;l={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}var up=!1;function _u(){if(up){var r=Ao;if(r!==null)throw r}}function yu(r,s,l,c){up=!1;var d=r.updateQueue;as=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var M=A,B=M.next;M.next=null,T===null?g=B:T.next=B,T=M;var Z=r.alternate;Z!==null&&(Z=Z.updateQueue,A=Z.lastBaseUpdate,A!==T&&(A===null?Z.firstBaseUpdate=B:A.next=B,Z.lastBaseUpdate=M))}if(g!==null){var ie=d.baseState;T=0,Z=B=M=null,A=g;do{var Q=A.lane&-536870913,X=Q!==A.lane;if(X?(He&Q)===Q:(c&Q)===Q){Q!==0&&Q===So&&(up=!0),Z!==null&&(Z=Z.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ge=r,Ie=A;Q=s;var Et=l;switch(Ie.tag){case 1:if(ge=Ie.payload,typeof ge=="function"){ie=ge.call(Et,ie,Q);break e}ie=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Ie.payload,Q=typeof ge=="function"?ge.call(Et,ie,Q):ge,Q==null)break e;ie=N({},ie,Q);break e;case 2:as=!0}}Q=A.callback,Q!==null&&(r.flags|=64,X&&(r.flags|=8192),X=d.callbacks,X===null?d.callbacks=[Q]:X.push(Q))}else X={lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},Z===null?(B=Z=X,M=ie):Z=Z.next=X,T|=Q;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;X=A,A=X.next,X.next=null,d.lastBaseUpdate=X,d.shared.pending=null}}while(!0);Z===null&&(M=ie),d.baseState=M,d.firstBaseUpdate=B,d.lastBaseUpdate=Z,g===null&&(d.shared.lanes=0),ds|=T,r.lanes=T,r.memoizedState=ie}}function dE(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function mE(r,s){var l=r.callbacks;if(l!==null)for(r.callbacks=null,r=0;r<l.length;r++)dE(l[r],s)}function vu(r,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var d=c.next;l=d;do{if((l.tag&r)===r){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==d)}}catch(A){at(s,s.return,A)}}function us(r,s,l){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var g=d.next;c=g;do{if((c.tag&r)===r){var T=c.inst,A=T.destroy;if(A!==void 0){T.destroy=void 0,d=s;var M=l;try{A()}catch(B){at(d,M,B)}}}c=c.next}while(c!==g)}}catch(B){at(s,s.return,B)}}function pE(r){var s=r.updateQueue;if(s!==null){var l=r.stateNode;try{mE(s,l)}catch(c){at(r,r.return,c)}}}function gE(r,s,l){l.props=ga(r.type,r.memoizedProps),l.state=r.memoizedState;try{l.componentWillUnmount()}catch(c){at(r,s,c)}}function va(r,s){try{var l=r.ref;if(l!==null){var c=r.stateNode;switch(r.tag){case 26:case 27:case 5:var d=c;break;default:d=c}typeof l=="function"?r.refCleanup=l(d):l.current=d}}catch(g){at(r,s,g)}}function kn(r,s){var l=r.ref,c=r.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(d){at(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(d){at(r,s,d)}else l.current=null}function _E(r){var s=r.type,l=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(d){at(r,r.return,d)}}function yE(r,s,l){try{var c=r.stateNode;aN(c,r.type,l,s),c[Mt]=s}catch(d){at(r,r.return,d)}}function vE(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27||r.tag===4}function cp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||vE(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==27&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function hp(r,s,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Wh));else if(c!==4&&c!==27&&(r=r.child,r!==null))for(hp(r,s,l),r=r.sibling;r!==null;)hp(r,s,l),r=r.sibling}function Vh(r,s,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(c!==4&&c!==27&&(r=r.child,r!==null))for(Vh(r,s,l),r=r.sibling;r!==null;)Vh(r,s,l),r=r.sibling}var mr=!1,yt=!1,fp=!1,EE=typeof WeakSet=="function"?WeakSet:Set,Kt=null,TE=!1;function L1(r,s){if(r=r.containerInfo,Bp=rf,r=Uv(r),mm(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,A=-1,M=-1,B=0,Z=0,ie=r,Q=null;t:for(;;){for(var X;ie!==l||d!==0&&ie.nodeType!==3||(A=T+d),ie!==g||c!==0&&ie.nodeType!==3||(M=T+c),ie.nodeType===3&&(T+=ie.nodeValue.length),(X=ie.firstChild)!==null;)Q=ie,ie=X;for(;;){if(ie===r)break t;if(Q===l&&++B===d&&(A=T),Q===g&&++Z===c&&(M=T),(X=ie.nextSibling)!==null)break;ie=Q,Q=ie.parentNode}ie=X}l=A===-1||M===-1?null:{start:A,end:M}}else l=null}l=l||{start:0,end:0}}else l=null;for(zp={focusedElem:r,selectionRange:l},rf=!1,Kt=s;Kt!==null;)if(s=Kt,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,Kt=r;else for(;Kt!==null;){switch(s=Kt,g=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if(r&1024&&g!==null){r=void 0,l=s,d=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var ge=ga(l.type,d,l.elementType===l.type);r=c.getSnapshotBeforeUpdate(ge,g),c.__reactInternalSnapshotBeforeUpdate=r}catch(Ie){at(l,l.return,Ie)}}break;case 3:if(r&1024){if(r=s.stateNode.containerInfo,l=r.nodeType,l===9)Gp(r);else if(l===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Gp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(r&1024)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Kt=r;break}Kt=s.return}return ge=TE,TE=!1,ge}function wE(r,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:gr(r,l),c&4&&vu(5,l);break;case 1:if(gr(r,l),c&4)if(r=l.stateNode,s===null)try{r.componentDidMount()}catch(A){at(l,l.return,A)}else{var d=ga(l.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(A){at(l,l.return,A)}}c&64&&pE(l),c&512&&va(l,l.return);break;case 3:if(gr(r,l),c&64&&(c=l.updateQueue,c!==null)){if(r=null,l.child!==null)switch(l.child.tag){case 27:case 5:r=l.child.stateNode;break;case 1:r=l.child.stateNode}try{mE(c,r)}catch(A){at(l,l.return,A)}}break;case 26:gr(r,l),c&512&&va(l,l.return);break;case 27:case 5:gr(r,l),s===null&&c&4&&_E(l),c&512&&va(l,l.return);break;case 12:gr(r,l);break;case 13:gr(r,l),c&4&&AE(r,l);break;case 22:if(d=l.memoizedState!==null||mr,!d){s=s!==null&&s.memoizedState!==null||yt;var g=mr,T=yt;mr=d,(yt=s)&&!T?cs(r,l,(l.subtreeFlags&8772)!==0):gr(r,l),mr=g,yt=T}c&512&&(l.memoizedProps.mode==="manual"?va(l,l.return):kn(l,l.return));break;default:gr(r,l)}}function bE(r){var s=r.alternate;s!==null&&(r.alternate=null,bE(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Ys(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var It=null,Pn=!1;function pr(r,s,l){for(l=l.child;l!==null;)SE(r,s,l),l=l.sibling}function SE(r,s,l){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(jr,l)}catch{}switch(l.tag){case 26:yt||kn(l,s),pr(r,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:yt||kn(l,s);var c=It,d=Pn;for(It=l.stateNode,pr(r,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Ys(l),It=c,Pn=d;break;case 5:yt||kn(l,s);case 6:d=It;var g=Pn;if(It=null,pr(r,s,l),It=d,Pn=g,It!==null)if(Pn)try{r=It,c=l.stateNode,r.nodeType===8?r.parentNode.removeChild(c):r.removeChild(c)}catch(T){at(l,s,T)}else try{It.removeChild(l.stateNode)}catch(T){at(l,s,T)}break;case 18:It!==null&&(Pn?(s=It,l=l.stateNode,s.nodeType===8?Hp(s.parentNode,l):s.nodeType===1&&Hp(s,l),Vu(s)):Hp(It,l.stateNode));break;case 4:c=It,d=Pn,It=l.stateNode.containerInfo,Pn=!0,pr(r,s,l),It=c,Pn=d;break;case 0:case 11:case 14:case 15:yt||us(2,l,s),yt||us(4,l,s),pr(r,s,l);break;case 1:yt||(kn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&gE(l,s,c)),pr(r,s,l);break;case 21:pr(r,s,l);break;case 22:yt||kn(l,s),yt=(c=yt)||l.memoizedState!==null,pr(r,s,l),yt=c;break;default:pr(r,s,l)}}function AE(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Vu(r)}catch(l){at(s,s.return,l)}}function V1(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new EE),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new EE),s;default:throw Error(i(435,r.tag))}}function dp(r,s){var l=V1(r);s.forEach(function(c){var d=W1.bind(null,r,c);l.has(c)||(l.add(c),c.then(d,d))})}function Zn(r,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var d=l[c],g=r,T=s,A=T;e:for(;A!==null;){switch(A.tag){case 27:case 5:It=A.stateNode,Pn=!1;break e;case 3:It=A.stateNode.containerInfo,Pn=!0;break e;case 4:It=A.stateNode.containerInfo,Pn=!0;break e}A=A.return}if(It===null)throw Error(i(160));SE(g,T,d),It=null,Pn=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)CE(s,r),s=s.sibling}var ci=null;function CE(r,s){var l=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Zn(s,r),Jn(r),c&4&&(us(3,r,r.return),vu(3,r),us(5,r,r.return));break;case 1:Zn(s,r),Jn(r),c&512&&(yt||l===null||kn(l,l.return)),c&64&&mr&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(l=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var d=ci;if(Zn(s,r),Jn(r),c&512&&(yt||l===null||kn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=r.memoizedState,l===null)if(c===null)if(r.stateNode===null){e:{c=r.type,l=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":g=d.getElementsByTagName("title")[0],(!g||g[Kr]||g[Ft]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(c),d.head.insertBefore(g,d.querySelector("head > title"))),tn(g,c,l),g[Ft]=r,dt(g),c=g;break e;case"link":var T=_T("link","href",d).get(c+(l.href||""));if(T){for(var A=0;A<T.length;A++)if(g=T[A],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(A,1);break t}}g=d.createElement(c),tn(g,c,l),d.head.appendChild(g);break;case"meta":if(T=_T("meta","content",d).get(c+(l.content||""))){for(A=0;A<T.length;A++)if(g=T[A],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(A,1);break t}}g=d.createElement(c),tn(g,c,l),d.head.appendChild(g);break;default:throw Error(i(468,c))}g[Ft]=r,dt(g),c=g}r.stateNode=c}else yT(d,r.type,r.stateNode);else r.stateNode=gT(d,c,r.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?yT(d,r.type,r.stateNode):gT(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&yE(r,r.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&r.alternate===null){d=r.stateNode,g=r.memoizedProps;try{for(var M=d.firstChild;M;){var B=M.nextSibling,Z=M.nodeName;M[Kr]||Z==="HEAD"||Z==="BODY"||Z==="SCRIPT"||Z==="STYLE"||Z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||d.removeChild(M),M=B}for(var ie=r.type,Q=d.attributes;Q.length;)d.removeAttributeNode(Q[0]);tn(d,ie,g),d[Ft]=r,d[Mt]=g}catch(ge){at(r,r.return,ge)}}case 5:if(Zn(s,r),Jn(r),c&512&&(yt||l===null||kn(l,l.return)),r.flags&32){d=r.stateNode;try{qn(d,"")}catch(ge){at(r,r.return,ge)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,yE(r,d,l!==null?l.memoizedProps:d)),c&1024&&(fp=!0);break;case 6:if(Zn(s,r),Jn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,l=r.stateNode;try{l.nodeValue=c}catch(ge){at(r,r.return,ge)}}break;case 3:if(ef=null,d=ci,ci=Zh(s.containerInfo),Zn(s,r),ci=d,Jn(r),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Vu(s.containerInfo)}catch(ge){at(r,r.return,ge)}fp&&(fp=!1,RE(r));break;case 4:c=ci,ci=Zh(r.stateNode.containerInfo),Zn(s,r),Jn(r),ci=c;break;case 12:Zn(s,r),Jn(r);break;case 13:Zn(s,r),Jn(r),r.child.flags&8192&&r.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(wp=wn()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,dp(r,c)));break;case 22:if(c&512&&(yt||l===null||kn(l,l.return)),M=r.memoizedState!==null,B=l!==null&&l.memoizedState!==null,Z=mr,ie=yt,mr=Z||M,yt=ie||B,Zn(s,r),yt=ie,mr=Z,Jn(r),s=r.stateNode,s._current=r,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=M?s._visibility&-2:s._visibility|1,M&&(s=mr||yt,l===null||B||s||No(r)),r.memoizedProps===null||r.memoizedProps.mode!=="manual"))e:for(l=null,s=r;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){B=l=s;try{if(d=B.stateNode,M)g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=B.stateNode,A=B.memoizedProps.style;var X=A!=null&&A.hasOwnProperty("display")?A.display:null;T.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(ge){at(B,B.return,ge)}}}else if(s.tag===6){if(l===null){B=s;try{B.stateNode.nodeValue=M?"":B.memoizedProps}catch(ge){at(B,B.return,ge)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,dp(r,l))));break;case 19:Zn(s,r),Jn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,dp(r,c)));break;case 21:break;default:Zn(s,r),Jn(r)}}function Jn(r){var s=r.flags;if(s&2){try{if(r.tag!==27){e:{for(var l=r.return;l!==null;){if(vE(l)){var c=l;break e}l=l.return}throw Error(i(160))}switch(c.tag){case 27:var d=c.stateNode,g=cp(r);Vh(r,g,d);break;case 5:var T=c.stateNode;c.flags&32&&(qn(T,""),c.flags&=-33);var A=cp(r);Vh(r,A,T);break;case 3:case 4:var M=c.stateNode.containerInfo,B=cp(r);hp(r,B,M);break;default:throw Error(i(161))}}}catch(Z){at(r,r.return,Z)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function RE(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;RE(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function gr(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)wE(r,s.alternate,s),s=s.sibling}function No(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:us(4,s,s.return),No(s);break;case 1:kn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&gE(s,s.return,l),No(s);break;case 26:case 27:case 5:kn(s,s.return),No(s);break;case 22:kn(s,s.return),s.memoizedState===null&&No(s);break;default:No(s)}r=r.sibling}}function cs(r,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:cs(d,g,l),vu(4,g);break;case 1:if(cs(d,g,l),c=g,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(B){at(c,c.return,B)}if(c=g,d=c.updateQueue,d!==null){var A=c.stateNode;try{var M=d.shared.hiddenCallbacks;if(M!==null)for(d.shared.hiddenCallbacks=null,d=0;d<M.length;d++)dE(M[d],A)}catch(B){at(c,c.return,B)}}l&&T&64&&pE(g),va(g,g.return);break;case 26:case 27:case 5:cs(d,g,l),l&&c===null&&T&4&&_E(g),va(g,g.return);break;case 12:cs(d,g,l);break;case 13:cs(d,g,l),l&&T&4&&AE(d,g);break;case 22:g.memoizedState===null&&cs(d,g,l),va(g,g.return);break;default:cs(d,g,l)}s=s.sibling}}function mp(r,s){var l=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==l&&(r!=null&&r.refCount++,l!=null&&uu(l))}function pp(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&uu(r))}function hs(r,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)IE(r,s,l,c),s=s.sibling}function IE(r,s,l,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:hs(r,s,l,c),d&2048&&vu(9,s);break;case 3:hs(r,s,l,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&uu(r)));break;case 12:if(d&2048){hs(r,s,l,c),r=s.stateNode;try{var g=s.memoizedProps,T=g.id,A=g.onPostCommit;typeof A=="function"&&A(T,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(M){at(s,s.return,M)}}else hs(r,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?hs(r,s,l,c):Eu(r,s):g._visibility&4?hs(r,s,l,c):(g._visibility|=4,xo(r,s,l,c,(s.subtreeFlags&10256)!==0)),d&2048&&mp(s.alternate,s);break;case 24:hs(r,s,l,c),d&2048&&pp(s.alternate,s);break;default:hs(r,s,l,c)}}function xo(r,s,l,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=r,T=s,A=l,M=c,B=T.flags;switch(T.tag){case 0:case 11:case 15:xo(g,T,A,M,d),vu(8,T);break;case 23:break;case 22:var Z=T.stateNode;T.memoizedState!==null?Z._visibility&4?xo(g,T,A,M,d):Eu(g,T):(Z._visibility|=4,xo(g,T,A,M,d)),d&&B&2048&&mp(T.alternate,T);break;case 24:xo(g,T,A,M,d),d&&B&2048&&pp(T.alternate,T);break;default:xo(g,T,A,M,d)}s=s.sibling}}function Eu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=r,c=s,d=c.flags;switch(c.tag){case 22:Eu(l,c),d&2048&&mp(c.alternate,c);break;case 24:Eu(l,c),d&2048&&pp(c.alternate,c);break;default:Eu(l,c)}s=s.sibling}}var Tu=8192;function Do(r){if(r.subtreeFlags&Tu)for(r=r.child;r!==null;)NE(r),r=r.sibling}function NE(r){switch(r.tag){case 26:Do(r),r.flags&Tu&&r.memoizedState!==null&&AN(ci,r.memoizedState,r.memoizedProps);break;case 5:Do(r);break;case 3:case 4:var s=ci;ci=Zh(r.stateNode.containerInfo),Do(r),ci=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Tu,Tu=16777216,Do(r),Tu=s):Do(r));break;default:Do(r)}}function xE(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function wu(r){var s=r.deletions;if(r.flags&16){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];Kt=c,OE(c,r)}xE(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)DE(r),r=r.sibling}function DE(r){switch(r.tag){case 0:case 11:case 15:wu(r),r.flags&2048&&us(9,r,r.return);break;case 3:wu(r);break;case 12:wu(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&4&&(r.return===null||r.return.tag!==13)?(s._visibility&=-5,Uh(r)):wu(r);break;default:wu(r)}}function Uh(r){var s=r.deletions;if(r.flags&16){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];Kt=c,OE(c,r)}xE(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:us(8,s,s.return),Uh(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,Uh(s));break;default:Uh(s)}r=r.sibling}}function OE(r,s){for(;Kt!==null;){var l=Kt;switch(l.tag){case 0:case 11:case 15:us(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:uu(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,Kt=c;else e:for(l=r;Kt!==null;){c=Kt;var d=c.sibling,g=c.return;if(bE(c),c===l){Kt=null;break e}if(d!==null){d.return=g,Kt=d;break e}Kt=g}}}function U1(r,s,l,c){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(r,s,l,c){return new U1(r,s,l,c)}function gp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function fs(r,s){var l=r.alternate;return l===null?(l=ei(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&31457280,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l.refCleanup=r.refCleanup,l}function ME(r,s){r.flags&=31457282;var l=r.alternate;return l===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,s=l.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function jh(r,s,l,c,d,g){var T=0;if(c=r,typeof r=="function")gp(r)&&(T=1);else if(typeof r=="string")T=bN(r,l,mn.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case m:return Ea(l.children,d,g,s);case p:T=8,d|=24;break;case y:return r=ei(12,l,s,d|2),r.elementType=y,r.lanes=g,r;case j:return r=ei(13,l,s,d),r.elementType=j,r.lanes=g,r;case V:return r=ei(19,l,s,d),r.elementType=V,r.lanes=g,r;case H:return kE(l,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case E:case S:T=10;break e;case w:T=9;break e;case x:T=11;break e;case z:T=14;break e;case G:T=16,c=null;break e}T=29,l=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=ei(T,l,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function Ea(r,s,l,c){return r=ei(7,r,c,s),r.lanes=l,r}function kE(r,s,l,c){r=ei(22,r,c,s),r.elementType=H,r.lanes=l;var d={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=d._current;if(g===null)throw Error(i(456));if(!(d._pendingVisibility&2)){var T=es(g,2);T!==null&&(d._pendingVisibility|=2,vn(T,g,2))}},attach:function(){var g=d._current;if(g===null)throw Error(i(456));if(d._pendingVisibility&2){var T=es(g,2);T!==null&&(d._pendingVisibility&=-3,vn(T,g,2))}}};return r.stateNode=d,r}function _p(r,s,l){return r=ei(6,r,null,s),r.lanes=l,r}function yp(r,s,l){return s=ei(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function _r(r){r.flags|=4}function PE(r,s){if(s.type!=="stylesheet"||s.state.loading&4)r.flags&=-16777217;else if(r.flags|=16777216,!vT(s)){if(s=Xn.current,s!==null&&((He&4194176)===He?Oi!==null:(He&62914560)!==He&&!(He&536870912)||s!==Oi))throw au=bm,Zv;r.flags|=8192}}function Bh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Fr():536870912,r.lanes|=s,Mo|=s)}function bu(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,c=0;if(s)for(var d=r.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags&31457280,c|=d.flags&31457280,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=l,s}function j1(r,s,l){var c=s.pendingProps;switch(Tm(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(s),null;case 1:return mt(s),null;case 3:return l=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),dr(Vt),Wi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(r===null||r.child===null)&&(nu(s)?_r(s):r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,ui!==null&&(Cp(ui),ui=null))),mt(s),null;case 26:return l=s.memoizedState,r===null?(_r(s),l!==null?(mt(s),PE(s,l)):(mt(s),s.flags&=-16777217)):l?l!==r.memoizedState?(_r(s),mt(s),PE(s,l)):(mt(s),s.flags&=-16777217):(r.memoizedProps!==c&&_r(s),mt(s),s.flags&=-16777217),null;case 27:Xa(s),l=Bn.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&_r(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return mt(s),null}r=mn.current,nu(s)?Wv(s):(r=hT(d,c,l),s.stateNode=r,_r(s))}return mt(s),null;case 5:if(Xa(s),l=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&_r(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return mt(s),null}if(r=mn.current,nu(s))Wv(s);else{switch(d=Xh(Bn.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(l,{is:c.is}):d.createElement(l)}}r[Ft]=s,r[Mt]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(tn(r,l,c),l){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&_r(s)}}return mt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&_r(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=Bn.current,nu(s)){if(r=s.stateNode,l=s.memoizedProps,c=null,d=yn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[Ft]=s,r=!!(r.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||sT(r.nodeValue,l)),r||ca(s)}else r=Xh(r).createTextNode(c),r[Ft]=s,s.stateNode=r}return mt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=nu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Ft]=s}else iu(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;mt(s),d=!1}else ui!==null&&(Cp(ui),ui=null),d=!0;if(!d)return s.flags&256?(ur(s),s):(ur(s),null)}if(ur(s),s.flags&128)return s.lanes=l,s;if(l=c!==null,r=r!==null&&r.memoizedState!==null,l){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==d&&(c.flags|=2048)}return l!==r&&l&&(s.child.flags|=8192),Bh(s,s.updateQueue),mt(s),null;case 4:return Wi(),r===null&&Vp(s.stateNode.containerInfo),mt(s),null;case 10:return dr(s.type),mt(s),null;case 19:if(nt(Lt),d=s.memoizedState,d===null)return mt(s),null;if(c=(s.flags&128)!==0,g=d.rendering,g===null)if(c)bu(d,!1);else{if(vt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(g=bh(r),g!==null){for(s.flags|=128,bu(d,!1),r=g.updateQueue,s.updateQueue=r,Bh(s,r),s.subtreeFlags=0,r=l,l=s.child;l!==null;)ME(l,r),l=l.sibling;return Ke(Lt,Lt.current&1|2),s.child}r=r.sibling}d.tail!==null&&wn()>zh&&(s.flags|=128,c=!0,bu(d,!1),s.lanes=4194304)}else{if(!c)if(r=bh(g),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,Bh(s,r),bu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Ye)return mt(s),null}else 2*wn()-d.renderingStartTime>zh&&l!==536870912&&(s.flags|=128,c=!0,bu(d,!1),s.lanes=4194304);d.isBackwards?(g.sibling=s.child,s.child=g):(r=d.last,r!==null?r.sibling=g:s.child=g,d.last=g)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=wn(),s.sibling=null,r=Lt.current,Ke(Lt,c?r&1|2:r&1),s):(mt(s),null);case 22:case 23:return ur(s),Am(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?l&536870912&&!(s.flags&128)&&(mt(s),s.subtreeFlags&6&&(s.flags|=8192)):mt(s),l=s.updateQueue,l!==null&&Bh(s,l.retryQueue),l=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),r!==null&&nt(fa),null;case 24:return l=null,r!==null&&(l=r.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),dr(Vt),mt(s),null;case 25:return null}throw Error(i(156,s.tag))}function B1(r,s){switch(Tm(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return dr(Vt),Wi(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return Xa(s),null;case 13:if(ur(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));iu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return nt(Lt),null;case 4:return Wi(),null;case 10:return dr(s.type),null;case 22:case 23:return ur(s),Am(),r!==null&&nt(fa),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return dr(Vt),null;case 25:return null;default:return null}}function LE(r,s){switch(Tm(s),s.tag){case 3:dr(Vt),Wi();break;case 26:case 27:case 5:Xa(s);break;case 4:Wi();break;case 13:ur(s);break;case 19:nt(Lt);break;case 10:dr(s.type);break;case 22:case 23:ur(s),Am(),r!==null&&nt(fa);break;case 24:dr(Vt)}}var z1={getCacheForType:function(r){var s=ln(Vt),l=s.data.get(r);return l===void 0&&(l=r(),s.data.set(r,l)),l}},F1=typeof WeakMap=="function"?WeakMap:Map,pt=0,ot=null,Pe=null,He=0,lt=0,Ln=null,yr=!1,Oo=!1,vp=!1,vr=0,vt=0,ds=0,Ta=0,Ep=0,ti=0,Mo=0,Su=null,ki=null,Tp=!1,wp=0,zh=1/0,Fh=null,ms=null,qh=!1,wa=null,Au=0,bp=0,Sp=null,Cu=0,Ap=null;function Vn(){if(pt&2&&He!==0)return He&-He;if(b.T!==null){var r=So;return r!==0?r:Mp()}return Yc()}function VE(){ti===0&&(ti=!(He&536870912)||Ye?Ul():536870912);var r=Xn.current;return r!==null&&(r.flags|=32),ti}function vn(r,s,l){(r===ot&&lt===2||r.cancelPendingCommit!==null)&&(ko(r,0),Er(r,He,ti,!1)),bt(r,l),(!(pt&2)||r!==ot)&&(r===ot&&(!(pt&2)&&(Ta|=l),vt===4&&Er(r,He,ti,!1)),Pi(r))}function UE(r,s,l){if(pt&6)throw Error(i(327));var c=!l&&(s&60)===0&&(s&r.expiredLanes)===0||zr(r,s),d=c?G1(r,s):Np(r,s,!0),g=c;do{if(d===0){Oo&&!c&&Er(r,s,0,!1);break}else if(d===6)Er(r,s,0,!yr);else{if(l=r.current.alternate,g&&!q1(l)){d=Np(r,s,!1),g=!1;continue}if(d===2){if(g=s,r.errorRecoveryDisabledLanes&g)var T=0;else T=r.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var A=r;d=Su;var M=A.current.memoizedState.isDehydrated;if(M&&(ko(A,T).flags|=256),T=Np(A,T,!1),T!==2){if(vp&&!M){A.errorRecoveryDisabledLanes|=g,Ta|=g,d=4;break e}g=ki,ki=d,g!==null&&Cp(g)}d=T}if(g=!1,d!==2)continue}}if(d===1){ko(r,0),Er(r,s,0,!0);break}e:{switch(c=r,d){case 0:case 1:throw Error(i(345));case 4:if((s&4194176)===s){Er(c,s,ti,!yr);break e}break;case 2:ki=null;break;case 3:case 5:break;default:throw Error(i(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=wp+300-wn(),10<g)){if(Er(c,s,ti,!yr),zn(c,0)!==0)break e;c.timeoutHandle=lT(jE.bind(null,c,l,ki,Fh,Tp,s,ti,Ta,Mo,yr,2,-0,0),g);break e}jE(c,l,ki,Fh,Tp,s,ti,Ta,Mo,yr,0,-0,0)}}break}while(!0);Pi(r)}function Cp(r){ki===null?ki=r:ki.push.apply(ki,r)}function jE(r,s,l,c,d,g,T,A,M,B,Z,ie,Q){var X=s.subtreeFlags;if((X&8192||(X&16785408)===16785408)&&(Ou={stylesheets:null,count:0,unsuspend:SN},NE(s),s=CN(),s!==null)){r.cancelPendingCommit=s(KE.bind(null,r,l,c,d,T,A,M,1,ie,Q)),Er(r,g,T,!B);return}KE(r,l,c,d,T,A,M,Z,ie,Q)}function q1(r){for(var s=r;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var d=l[c],g=d.getSnapshot;d=d.value;try{if(!Mn(g(),d))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Er(r,s,l,c){s&=~Ep,s&=~Ta,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var g=31-pn(d),T=1<<g;c[g]=-1,d&=~T}l!==0&&qr(r,l,s)}function Hh(){return pt&6?!0:(Ru(0),!1)}function Rp(){if(Pe!==null){if(lt===0)var r=Pe.return;else r=Pe,fr=_a=null,Mm(r),wo=null,ou=0,r=Pe;for(;r!==null;)LE(r.alternate,r),r=r.return;Pe=null}}function ko(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;l!==-1&&(r.timeoutHandle=-1,lN(l)),l=r.cancelPendingCommit,l!==null&&(r.cancelPendingCommit=null,l()),Rp(),ot=r,Pe=l=fs(r.current,null),He=s,lt=0,Ln=null,yr=!1,Oo=zr(r,s),vp=!1,Mo=ti=Ep=Ta=ds=vt=0,ki=Su=null,Tp=!1,s&8&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-pn(c),g=1<<d;s|=r[d],c&=~g}return vr=s,mh(),l}function BE(r,s){Oe=null,b.H=Mi,s===su?(s=t0(),lt=3):s===Zv?(s=t0(),lt=4):lt=s===J0?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Ln=s,Pe===null&&(vt=1,kh(r,$n(s,r.current)))}function zE(){var r=b.H;return b.H=Mi,r===null?Mi:r}function FE(){var r=b.A;return b.A=z1,r}function Ip(){vt=4,yr||(He&4194176)!==He&&Xn.current!==null||(Oo=!0),!(ds&134217727)&&!(Ta&134217727)||ot===null||Er(ot,He,ti,!1)}function Np(r,s,l){var c=pt;pt|=2;var d=zE(),g=FE();(ot!==r||He!==s)&&(Fh=null,ko(r,s)),s=!1;var T=vt;e:do try{if(lt!==0&&Pe!==null){var A=Pe,M=Ln;switch(lt){case 8:Rp(),T=6;break e;case 3:case 2:case 6:Xn.current===null&&(s=!0);var B=lt;if(lt=0,Ln=null,Po(r,A,M,B),l&&Oo){T=0;break e}break;default:B=lt,lt=0,Ln=null,Po(r,A,M,B)}}H1(),T=vt;break}catch(Z){BE(r,Z)}while(!0);return s&&r.shellSuspendCounter++,fr=_a=null,pt=c,b.H=d,b.A=g,Pe===null&&(ot=null,He=0,mh()),T}function H1(){for(;Pe!==null;)qE(Pe)}function G1(r,s){var l=pt;pt|=2;var c=zE(),d=FE();ot!==r||He!==s?(Fh=null,zh=wn()+500,ko(r,s)):Oo=zr(r,s);e:do try{if(lt!==0&&Pe!==null){s=Pe;var g=Ln;t:switch(lt){case 1:lt=0,Ln=null,Po(r,s,g,1);break;case 2:if(Jv(g)){lt=0,Ln=null,HE(s);break}s=function(){lt===2&&ot===r&&(lt=7),Pi(r)},g.then(s,s);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:Jv(g)?(lt=0,Ln=null,HE(s)):(lt=0,Ln=null,Po(r,s,g,7));break;case 5:var T=null;switch(Pe.tag){case 26:T=Pe.memoizedState;case 5:case 27:var A=Pe;if(!T||vT(T)){lt=0,Ln=null;var M=A.sibling;if(M!==null)Pe=M;else{var B=A.return;B!==null?(Pe=B,Gh(B)):Pe=null}break t}}lt=0,Ln=null,Po(r,s,g,5);break;case 6:lt=0,Ln=null,Po(r,s,g,6);break;case 8:Rp(),vt=6;break e;default:throw Error(i(462))}}K1();break}catch(Z){BE(r,Z)}while(!0);return fr=_a=null,b.H=c,b.A=d,pt=l,Pe!==null?0:(ot=null,He=0,mh(),vt)}function K1(){for(;Pe!==null&&!im();)qE(Pe)}function qE(r){var s=hE(r.alternate,r,vr);r.memoizedProps=r.pendingProps,s===null?Gh(r):Pe=s}function HE(r){var s=r,l=s.alternate;switch(s.tag){case 15:case 0:s=sE(l,s,s.pendingProps,s.type,void 0,He);break;case 11:s=sE(l,s,s.pendingProps,s.type.render,s.ref,He);break;case 5:Mm(s);default:LE(l,s),s=Pe=ME(s,vr),s=hE(l,s,vr)}r.memoizedProps=r.pendingProps,s===null?Gh(r):Pe=s}function Po(r,s,l,c){fr=_a=null,Mm(s),wo=null,ou=0;var d=s.return;try{if(k1(r,d,s,l,He)){vt=1,kh(r,$n(l,r.current)),Pe=null;return}}catch(g){if(d!==null)throw Pe=d,g;vt=1,kh(r,$n(l,r.current)),Pe=null;return}s.flags&32768?(Ye||c===1?r=!0:Oo||He&536870912?r=!1:(yr=r=!0,(c===2||c===3||c===6)&&(c=Xn.current,c!==null&&c.tag===13&&(c.flags|=16384))),GE(s,r)):Gh(s)}function Gh(r){var s=r;do{if(s.flags&32768){GE(s,yr);return}r=s.return;var l=j1(s.alternate,s,vr);if(l!==null){Pe=l;return}if(s=s.sibling,s!==null){Pe=s;return}Pe=s=r}while(s!==null);vt===0&&(vt=5)}function GE(r,s){do{var l=B1(r.alternate,r);if(l!==null){l.flags&=32767,Pe=l;return}if(l=r.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(r=r.sibling,r!==null)){Pe=r;return}Pe=r=l}while(r!==null);vt=6,Pe=null}function KE(r,s,l,c,d,g,T,A,M,B){var Z=b.T,ie=ce.p;try{ce.p=2,b.T=null,Q1(r,s,l,c,ie,d,g,T,A,M,B)}finally{b.T=Z,ce.p=ie}}function Q1(r,s,l,c,d,g,T,A){do Lo();while(wa!==null);if(pt&6)throw Error(i(327));var M=r.finishedWork;if(c=r.finishedLanes,M===null)return null;if(r.finishedWork=null,r.finishedLanes=0,M===r.current)throw Error(i(177));r.callbackNode=null,r.callbackPriority=0,r.cancelPendingCommit=null;var B=M.lanes|M.childLanes;if(B|=ym,Qc(r,c,B,g,T,A),r===ot&&(Pe=ot=null,He=0),!(M.subtreeFlags&10256)&&!(M.flags&10256)||qh||(qh=!0,bp=B,Sp=l,X1(Xi,function(){return Lo(),null})),l=(M.flags&15990)!==0,M.subtreeFlags&15990||l?(l=b.T,b.T=null,g=ce.p,ce.p=2,T=pt,pt|=4,L1(r,M),CE(M,r),_1(zp,r.containerInfo),rf=!!Bp,zp=Bp=null,r.current=M,wE(r,M.alternate,M),kl(),pt=T,ce.p=g,b.T=l):r.current=M,qh?(qh=!1,wa=r,Au=c):QE(r,B),B=r.pendingLanes,B===0&&(ms=null),Ll(M.stateNode),Pi(r),s!==null)for(d=r.onRecoverableError,M=0;M<s.length;M++)B=s[M],d(B.value,{componentStack:B.stack});return Au&3&&Lo(),B=r.pendingLanes,c&4194218&&B&42?r===Ap?Cu++:(Cu=0,Ap=r):Cu=0,Ru(0),null}function QE(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,uu(s)))}function Lo(){if(wa!==null){var r=wa,s=bp;bp=0;var l=$c(Au),c=b.T,d=ce.p;try{if(ce.p=32>l?32:l,b.T=null,wa===null)var g=!1;else{l=Sp,Sp=null;var T=wa,A=Au;if(wa=null,Au=0,pt&6)throw Error(i(331));var M=pt;if(pt|=4,DE(T.current),IE(T,T.current,A,l),pt=M,Ru(0,!1),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(jr,T)}catch{}g=!0}return g}finally{ce.p=d,b.T=c,QE(r,s)}}return!1}function $E(r,s,l){s=$n(l,s),s=Qm(r.stateNode,s,2),r=ls(r,s,2),r!==null&&(bt(r,2),Pi(r))}function at(r,s,l){if(r.tag===3)$E(r,r,l);else for(;s!==null;){if(s.tag===3){$E(s,r,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ms===null||!ms.has(c))){r=$n(l,r),l=X0(2),c=ls(s,l,2),c!==null&&(Z0(l,c,s,r),bt(c,2),Pi(c));break}}s=s.return}}function xp(r,s,l){var c=r.pingCache;if(c===null){c=r.pingCache=new F1;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(l)||(vp=!0,d.add(l),r=$1.bind(null,r,s,l),s.then(r,r))}function $1(r,s,l){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&l,r.warmLanes&=~l,ot===r&&(He&l)===l&&(vt===4||vt===3&&(He&62914560)===He&&300>wn()-wp?!(pt&2)&&ko(r,0):Ep|=l,Mo===He&&(Mo=0)),Pi(r)}function YE(r,s){s===0&&(s=Fr()),r=es(r,s),r!==null&&(bt(r,s),Pi(r))}function Y1(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),YE(r,l)}function W1(r,s){var l=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(l=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),YE(r,l)}function X1(r,s){return Ks(r,s)}var Kh=null,Vo=null,Dp=!1,Qh=!1,Op=!1,ba=0;function Pi(r){r!==Vo&&r.next===null&&(Vo===null?Kh=Vo=r:Vo=Vo.next=r),Qh=!0,Dp||(Dp=!0,J1(Z1))}function Ru(r,s){if(!Op&&Qh){Op=!0;do for(var l=!1,c=Kh;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var g=0;else{var T=c.suspendedLanes,A=c.pingedLanes;g=(1<<31-pn(42|r)+1)-1,g&=d&~(T&~A),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,ZE(c,g))}else g=He,g=zn(c,c===ot?g:0),!(g&3)||zr(c,g)||(l=!0,ZE(c,g));c=c.next}while(l);Op=!1}}function Z1(){Qh=Dp=!1;var r=0;ba!==0&&(oN()&&(r=ba),ba=0);for(var s=wn(),l=null,c=Kh;c!==null;){var d=c.next,g=WE(c,s);g===0?(c.next=null,l===null?Kh=d:l.next=d,d===null&&(Vo=l)):(l=c,(r!==0||g&3)&&(Qh=!0)),c=d}Ru(r)}function WE(r,s){for(var l=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes&-62914561;0<g;){var T=31-pn(g),A=1<<T,M=d[T];M===-1?(!(A&l)||A&c)&&(d[T]=eo(A,s)):M<=s&&(r.expiredLanes|=A),g&=~A}if(s=ot,l=He,l=zn(r,r===s?l:0),c=r.callbackNode,l===0||r===s&&lt===2||r.cancelPendingCommit!==null)return c!==null&&c!==null&&Ja(c),r.callbackNode=null,r.callbackPriority=0;if(!(l&3)||zr(r,l)){if(s=l&-l,s===r.callbackPriority)return s;switch(c!==null&&Ja(c),$c(l)){case 2:case 8:l=zt;break;case 32:l=Xi;break;case 268435456:l=Pl;break;default:l=Xi}return c=XE.bind(null,r),l=Ks(l,c),r.callbackPriority=s,r.callbackNode=l,s}return c!==null&&c!==null&&Ja(c),r.callbackPriority=2,r.callbackNode=null,2}function XE(r,s){var l=r.callbackNode;if(Lo()&&r.callbackNode!==l)return null;var c=He;return c=zn(r,r===ot?c:0),c===0?null:(UE(r,c,s),WE(r,wn()),r.callbackNode!=null&&r.callbackNode===l?XE.bind(null,r):null)}function ZE(r,s){if(Lo())return null;UE(r,s,!0)}function J1(r){uN(function(){pt&6?Ks(Ot,r):r()})}function Mp(){return ba===0&&(ba=Ul()),ba}function JE(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Si(""+r)}function eT(r,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,r.id&&l.setAttribute("form",r.id),s.parentNode.insertBefore(l,s),r=new FormData(r),l.parentNode.removeChild(l),r}function eN(r,s,l,c,d){if(s==="submit"&&l&&l.stateNode===d){var g=JE((d[Mt]||null).action),T=c.submitter;T&&(s=(s=T[Mt]||null)?JE(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var A=new oo("action","action",null,c,d);r.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(ba!==0){var M=T?eT(d,T):new FormData(d);Fm(l,{pending:!0,data:M,method:d.method,action:g},null,M)}}else typeof g=="function"&&(A.preventDefault(),M=T?eT(d,T):new FormData(d),Fm(l,{pending:!0,data:M,method:d.method,action:g},g,M))},currentTarget:d}]})}}for(var kp=0;kp<Kv.length;kp++){var Pp=Kv[kp],tN=Pp.toLowerCase(),nN=Pp[0].toUpperCase()+Pp.slice(1);li(tN,"on"+nN)}li(zv,"onAnimationEnd"),li(Fv,"onAnimationIteration"),li(qv,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(v1,"onTransitionRun"),li(E1,"onTransitionStart"),li(T1,"onTransitionCancel"),li(Hv,"onTransitionEnd"),bn("onMouseEnter",["mouseout","mouseover"]),bn("onMouseLeave",["mouseout","mouseover"]),bn("onPointerEnter",["pointerout","pointerover"]),bn("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Iu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Iu));function tT(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var c=r[l],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var A=c[T],M=A.instance,B=A.currentTarget;if(A=A.listener,M!==g&&d.isPropagationStopped())break e;g=A,d.currentTarget=B;try{g(d)}catch(Z){Mh(Z)}d.currentTarget=null,g=M}else for(T=0;T<c.length;T++){if(A=c[T],M=A.instance,B=A.currentTarget,A=A.listener,M!==g&&d.isPropagationStopped())break e;g=A,d.currentTarget=B;try{g(d)}catch(Z){Mh(Z)}d.currentTarget=null,g=M}}}}function je(r,s){var l=s[$s];l===void 0&&(l=s[$s]=new Set);var c=r+"__bubble";l.has(c)||(nT(s,r,2,!1),l.add(c))}function Lp(r,s,l){var c=0;s&&(c|=4),nT(l,r,c,s)}var $h="_reactListening"+Math.random().toString(36).slice(2);function Vp(r){if(!r[$h]){r[$h]=!0,Bl.forEach(function(l){l!=="selectionchange"&&(iN.has(l)||Lp(l,!1,r),Lp(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[$h]||(s[$h]=!0,Lp("selectionchange",!1,s))}}function nT(r,s,l,c){switch(AT(s)){case 2:var d=NN;break;case 8:d=xN;break;default:d=Wp}l=d.bind(null,s,l,r),d=void 0,!Gn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,l,{capture:!0,passive:d}):r.addEventListener(s,l,!0):d!==void 0?r.addEventListener(s,l,{passive:d}):r.addEventListener(s,l,!1)}function Up(r,s,l,c,d){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var M=T.tag;if((M===3||M===4)&&(M=T.stateNode.containerInfo,M===d||M.nodeType===8&&M.parentNode===d))return;T=T.return}for(;A!==null;){if(T=oi(A),T===null)return;if(M=T.tag,M===5||M===6||M===26||M===27){c=g=T;continue e}A=A.parentNode}}c=c.return}Jc(function(){var B=g,Z=ao(l),ie=[];e:{var Q=Gv.get(r);if(Q!==void 0){var X=oo,ge=r;switch(r){case"keypress":if(Ci(l)===0)break e;case"keydown":case"keyup":X=mo;break;case"focusin":ge="focus",X=co;break;case"focusout":ge="blur",X=co;break;case"beforeblur":case"afterblur":X=co;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=oh;break;case zv:case Fv:case qv:X=ho;break;case Hv:X=uh;break;case"scroll":case"scrollend":X=eh;break;case"wheel":X=po;break;case"copy":case"cut":case"paste":X=fo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Zl;break;case"toggle":case"beforetoggle":X=hh}var Ie=(s&4)!==0,Et=!Ie&&(r==="scroll"||r==="scrollend"),F=Ie?Q!==null?Q+"Capture":null:Q;Ie=[];for(var U=B,K;U!==null;){var ee=U;if(K=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||K===null||F===null||(ee=Js(U,F),ee!=null&&Ie.push(Nu(U,ee,K))),Et)break;U=U.return}0<Ie.length&&(Q=new X(Q,ge,null,l,Z),ie.push({event:Q,listeners:Ie}))}}if(!(s&7)){e:{if(Q=r==="mouseover"||r==="pointerover",X=r==="mouseout"||r==="pointerout",Q&&l!==Hn&&(ge=l.relatedTarget||l.fromElement)&&(oi(ge)||ge[Zi]))break e;if((X||Q)&&(Q=Z.window===Z?Z:(Q=Z.ownerDocument)?Q.defaultView||Q.parentWindow:window,X?(ge=l.relatedTarget||l.toElement,X=B,ge=ge?oi(ge):null,ge!==null&&(Et=_e(ge),Ie=ge.tag,ge!==Et||Ie!==5&&Ie!==27&&Ie!==6)&&(ge=null)):(X=null,ge=B),X!==ge)){if(Ie=Kn,ee="onMouseLeave",F="onMouseEnter",U="mouse",(r==="pointerout"||r==="pointerover")&&(Ie=Zl,ee="onPointerLeave",F="onPointerEnter",U="pointer"),Et=X==null?Q:Qr(X),K=ge==null?Q:Qr(ge),Q=new Ie(ee,U+"leave",X,l,Z),Q.target=Et,Q.relatedTarget=K,ee=null,oi(Z)===B&&(Ie=new Ie(F,U+"enter",ge,l,Z),Ie.target=K,Ie.relatedTarget=Et,ee=Ie),Et=ee,X&&ge)t:{for(Ie=X,F=ge,U=0,K=Ie;K;K=Uo(K))U++;for(K=0,ee=F;ee;ee=Uo(ee))K++;for(;0<U-K;)Ie=Uo(Ie),U--;for(;0<K-U;)F=Uo(F),K--;for(;U--;){if(Ie===F||F!==null&&Ie===F.alternate)break t;Ie=Uo(Ie),F=Uo(F)}Ie=null}else Ie=null;X!==null&&iT(ie,Q,X,Ie,!1),ge!==null&&Et!==null&&iT(ie,Et,ge,Ie,!0)}}e:{if(Q=B?Qr(B):window,X=Q.nodeName&&Q.nodeName.toLowerCase(),X==="select"||X==="input"&&Q.type==="file")var de=xv;else if(Pt(Q))if(Dv)de=p1;else{de=d1;var Me=f1}else X=Q.nodeName,!X||X.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?B&&Gl(B.elementType)&&(de=xv):de=m1;if(de&&(de=de(r,B))){ar(ie,de,l,Z);break e}Me&&Me(r,Q,B),r==="focusout"&&B&&Q.type==="number"&&B.memoizedProps.value!=null&&so(Q,"number",Q.value)}switch(Me=B?Qr(B):window,r){case"focusin":(Pt(Me)||Me.contentEditable==="true")&&(go=Me,pm=B,tu=null);break;case"focusout":tu=pm=go=null;break;case"mousedown":gm=!0;break;case"contextmenu":case"mouseup":case"dragend":gm=!1,jv(ie,l,Z);break;case"selectionchange":if(y1)break;case"keydown":case"keyup":jv(ie,l,Z)}var ye;if(Ni)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Fe?$(r,l)&&(Te="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(v&&l.locale!=="ko"&&(Fe||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Fe&&(ye=Ql()):(Ai=Z,Jr="value"in Ai?Ai.value:Ai.textContent,Fe=!0)),Me=Yh(B,Te),0<Me.length&&(Te=new Wl(Te,r,null,l,Z),ie.push({event:Te,listeners:Me}),ye?Te.data=ye:(ye=oe(l),ye!==null&&(Te.data=ye)))),(ye=_?kt(r,l):qe(r,l))&&(Te=Yh(B,"onBeforeInput"),0<Te.length&&(Me=new Wl("onBeforeInput","beforeinput",null,l,Z),ie.push({event:Me,listeners:Te}),Me.data=ye)),eN(ie,r,B,l,Z)}tT(ie,s)})}function Nu(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Yh(r,s){for(var l=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=Js(r,l),d!=null&&c.unshift(Nu(r,d,g)),d=Js(r,s),d!=null&&c.push(Nu(r,d,g))),r=r.return}return c}function Uo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function iT(r,s,l,c,d){for(var g=s._reactName,T=[];l!==null&&l!==c;){var A=l,M=A.alternate,B=A.stateNode;if(A=A.tag,M!==null&&M===c)break;A!==5&&A!==26&&A!==27||B===null||(M=B,d?(B=Js(l,g),B!=null&&T.unshift(Nu(l,B,M))):d||(B=Js(l,g),B!=null&&T.push(Nu(l,B,M)))),l=l.return}T.length!==0&&r.push({event:s,listeners:T})}var rN=/\r\n?/g,sN=/\u0000|\uFFFD/g;function rT(r){return(typeof r=="string"?r:""+r).replace(rN,`
`).replace(sN,"")}function sT(r,s){return s=rT(s),rT(r)===s}function Wh(){}function rt(r,s,l,c,d,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||qn(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&qn(r,""+c);break;case"className":Wr(r,"class",c);break;case"tabIndex":Wr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Wr(r,l,c);break;case"style":Zc(r,c,g);break;case"data":if(s!=="object"){Wr(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){r.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(l);break}c=Si(""+c),r.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&rt(r,s,"name",d.name,d,null),rt(r,s,"formEncType",d.formEncType,d,null),rt(r,s,"formMethod",d.formMethod,d,null),rt(r,s,"formTarget",d.formTarget,d,null)):(rt(r,s,"encType",d.encType,d,null),rt(r,s,"method",d.method,d,null),rt(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(l);break}c=Si(""+c),r.setAttribute(l,c);break;case"onClick":c!=null&&(r.onclick=Wh);break;case"onScroll":c!=null&&je("scroll",r);break;case"onScrollEnd":c!=null&&je("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=l}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}l=Si(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,""+c):r.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,""):r.removeAttribute(l);break;case"capture":case"download":c===!0?r.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,c):r.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(l,c):r.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(l):r.setAttribute(l,c);break;case"popover":je("beforetoggle",r),je("toggle",r),Yr(r,"popover",c);break;case"xlinkActuate":Fn(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Fn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Fn(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Fn(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Fn(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Fn(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Fn(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Fn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Fn(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Yr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=lm.get(l)||l,Yr(r,l,c))}}function jp(r,s,l,c,d,g){switch(l){case"style":Zc(r,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=l}}break;case"children":typeof c=="string"?qn(r,c):(typeof c=="number"||typeof c=="bigint")&&qn(r,""+c);break;case"onScroll":c!=null&&je("scroll",r);break;case"onScrollEnd":c!=null&&je("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Wh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!io.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(d=l.endsWith("Capture"),s=l.slice(2,d?l.length-7:void 0),g=r[Mt]||null,g=g!=null?g[l]:null,typeof g=="function"&&r.removeEventListener(s,g,d),typeof c=="function")){typeof g!="function"&&g!==null&&(l in r?r[l]=null:r.hasAttribute(l)&&r.removeAttribute(l)),r.addEventListener(s,c,d);break e}l in r?r[l]=c:c===!0?r.setAttribute(l,""):Yr(r,l,c)}}}function tn(r,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":je("error",r),je("load",r);var c=!1,d=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:rt(r,s,g,T,l,null)}}d&&rt(r,s,"srcSet",l.srcSet,l,null),c&&rt(r,s,"src",l.src,l,null);return;case"input":je("invalid",r);var A=g=T=d=null,M=null,B=null;for(c in l)if(l.hasOwnProperty(c)){var Z=l[c];if(Z!=null)switch(c){case"name":d=Z;break;case"type":T=Z;break;case"checked":M=Z;break;case"defaultChecked":B=Z;break;case"value":g=Z;break;case"defaultValue":A=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(i(137,s));break;default:rt(r,s,c,Z,l,null)}}Xs(r,g,A,M,B,T,d,!1),Ws(r);return;case"select":je("invalid",r),c=T=g=null;for(d in l)if(l.hasOwnProperty(d)&&(A=l[d],A!=null))switch(d){case"value":g=A;break;case"defaultValue":T=A;break;case"multiple":c=A;default:rt(r,s,d,A,l,null)}s=g,l=T,r.multiple=!!c,s!=null?$e(r,!!c,s,!1):l!=null&&$e(r,!!c,l,!0);return;case"textarea":je("invalid",r),g=d=c=null;for(T in l)if(l.hasOwnProperty(T)&&(A=l[T],A!=null))switch(T){case"value":c=A;break;case"defaultValue":d=A;break;case"children":g=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(i(91));break;default:rt(r,s,T,A,l,null)}Zr(r,c,d,g),Ws(r);return;case"option":for(M in l)if(l.hasOwnProperty(M)&&(c=l[M],c!=null))switch(M){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:rt(r,s,M,c,l,null)}return;case"dialog":je("cancel",r),je("close",r);break;case"iframe":case"object":je("load",r);break;case"video":case"audio":for(c=0;c<Iu.length;c++)je(Iu[c],r);break;case"image":je("error",r),je("load",r);break;case"details":je("toggle",r);break;case"embed":case"source":case"link":je("error",r),je("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in l)if(l.hasOwnProperty(B)&&(c=l[B],c!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:rt(r,s,B,c,l,null)}return;default:if(Gl(s)){for(Z in l)l.hasOwnProperty(Z)&&(c=l[Z],c!==void 0&&jp(r,s,Z,c,l,void 0));return}}for(A in l)l.hasOwnProperty(A)&&(c=l[A],c!=null&&rt(r,s,A,c,l,null))}function aN(r,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,T=null,A=null,M=null,B=null,Z=null;for(X in l){var ie=l[X];if(l.hasOwnProperty(X)&&ie!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":M=ie;default:c.hasOwnProperty(X)||rt(r,s,X,null,c,ie)}}for(var Q in c){var X=c[Q];if(ie=l[Q],c.hasOwnProperty(Q)&&(X!=null||ie!=null))switch(Q){case"type":g=X;break;case"name":d=X;break;case"checked":B=X;break;case"defaultChecked":Z=X;break;case"value":T=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:X!==ie&&rt(r,s,Q,X,c,ie)}}Xr(r,T,A,M,B,Z,g,d);return;case"select":X=T=A=Q=null;for(g in l)if(M=l[g],l.hasOwnProperty(g)&&M!=null)switch(g){case"value":break;case"multiple":X=M;default:c.hasOwnProperty(g)||rt(r,s,g,null,c,M)}for(d in c)if(g=c[d],M=l[d],c.hasOwnProperty(d)&&(g!=null||M!=null))switch(d){case"value":Q=g;break;case"defaultValue":A=g;break;case"multiple":T=g;default:g!==M&&rt(r,s,d,g,c,M)}s=A,l=T,c=X,Q!=null?$e(r,!!l,Q,!1):!!c!=!!l&&(s!=null?$e(r,!!l,s,!0):$e(r,!!l,l?[]:"",!1));return;case"textarea":X=Q=null;for(A in l)if(d=l[A],l.hasOwnProperty(A)&&d!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:rt(r,s,A,null,c,d)}for(T in c)if(d=c[T],g=l[T],c.hasOwnProperty(T)&&(d!=null||g!=null))switch(T){case"value":Q=d;break;case"defaultValue":X=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==g&&rt(r,s,T,d,c,g)}Zs(r,Q,X);return;case"option":for(var ge in l)if(Q=l[ge],l.hasOwnProperty(ge)&&Q!=null&&!c.hasOwnProperty(ge))switch(ge){case"selected":r.selected=!1;break;default:rt(r,s,ge,null,c,Q)}for(M in c)if(Q=c[M],X=l[M],c.hasOwnProperty(M)&&Q!==X&&(Q!=null||X!=null))switch(M){case"selected":r.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:rt(r,s,M,Q,c,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ie in l)Q=l[Ie],l.hasOwnProperty(Ie)&&Q!=null&&!c.hasOwnProperty(Ie)&&rt(r,s,Ie,null,c,Q);for(B in c)if(Q=c[B],X=l[B],c.hasOwnProperty(B)&&Q!==X&&(Q!=null||X!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,s));break;default:rt(r,s,B,Q,c,X)}return;default:if(Gl(s)){for(var Et in l)Q=l[Et],l.hasOwnProperty(Et)&&Q!==void 0&&!c.hasOwnProperty(Et)&&jp(r,s,Et,void 0,c,Q);for(Z in c)Q=c[Z],X=l[Z],!c.hasOwnProperty(Z)||Q===X||Q===void 0&&X===void 0||jp(r,s,Z,Q,c,X);return}}for(var F in l)Q=l[F],l.hasOwnProperty(F)&&Q!=null&&!c.hasOwnProperty(F)&&rt(r,s,F,null,c,Q);for(ie in c)Q=c[ie],X=l[ie],!c.hasOwnProperty(ie)||Q===X||Q==null&&X==null||rt(r,s,ie,Q,c,X)}var Bp=null,zp=null;function Xh(r){return r.nodeType===9?r:r.ownerDocument}function aT(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function oT(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Fp(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var qp=null;function oN(){var r=window.event;return r&&r.type==="popstate"?r===qp?!1:(qp=r,!0):(qp=null,!1)}var lT=typeof setTimeout=="function"?setTimeout:void 0,lN=typeof clearTimeout=="function"?clearTimeout:void 0,uT=typeof Promise=="function"?Promise:void 0,uN=typeof queueMicrotask=="function"?queueMicrotask:typeof uT<"u"?function(r){return uT.resolve(null).then(r).catch(cN)}:lT;function cN(r){setTimeout(function(){throw r})}function Hp(r,s){var l=s,c=0;do{var d=l.nextSibling;if(r.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"){if(c===0){r.removeChild(d),Vu(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=d}while(l);Vu(s)}function Gp(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":Gp(l),Ys(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}r.removeChild(l)}}function hN(r,s,l,c){for(;r.nodeType===1;){var d=l;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[Kr])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(g=r.getAttribute("rel"),g==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(g!==d.rel||r.getAttribute("href")!==(d.href==null?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(g=r.getAttribute("src"),(g!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===g)return r}else return r;if(r=hi(r.nextSibling),r===null)break}return null}function fN(r,s,l){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!l||(r=hi(r.nextSibling),r===null))return null;return r}function hi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}function cT(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}function hT(r,s,l){switch(s=Xh(l),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}var ni=new Map,fT=new Set;function Zh(r){return typeof r.getRootNode=="function"?r.getRootNode():r.ownerDocument}var Tr=ce.d;ce.d={f:dN,r:mN,D:pN,C:gN,L:_N,m:yN,X:EN,S:vN,M:TN};function dN(){var r=Tr.f(),s=Hh();return r||s}function mN(r){var s=Ji(r);s!==null&&s.tag===5&&s.type==="form"?j0(s):Tr.r(r)}var jo=typeof document>"u"?null:document;function dT(r,s,l){var c=jo;if(c&&typeof s=="string"&&s){var d=_t(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof l=="string"&&(d+='[crossorigin="'+l+'"]'),fT.has(d)||(fT.add(d),r={rel:r,crossOrigin:l,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),tn(s,"link",r),dt(s),c.head.appendChild(s)))}}function pN(r){Tr.D(r),dT("dns-prefetch",r,null)}function gN(r,s){Tr.C(r,s),dT("preconnect",r,s)}function _N(r,s,l){Tr.L(r,s,l);var c=jo;if(c&&r&&s){var d='link[rel="preload"][as="'+_t(s)+'"]';s==="image"&&l&&l.imageSrcSet?(d+='[imagesrcset="'+_t(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(d+='[imagesizes="'+_t(l.imageSizes)+'"]')):d+='[href="'+_t(r)+'"]';var g=d;switch(s){case"style":g=Bo(r);break;case"script":g=zo(r)}ni.has(g)||(r=N({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:r,as:s},l),ni.set(g,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(xu(g))||s==="script"&&c.querySelector(Du(g))||(s=c.createElement("link"),tn(s,"link",r),dt(s),c.head.appendChild(s)))}}function yN(r,s){Tr.m(r,s);var l=jo;if(l&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+_t(c)+'"][href="'+_t(r)+'"]',g=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=zo(r)}if(!ni.has(g)&&(r=N({rel:"modulepreload",href:r},s),ni.set(g,r),l.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Du(g)))return}c=l.createElement("link"),tn(c,"link",r),dt(c),l.head.appendChild(c)}}}function vN(r,s,l){Tr.S(r,s,l);var c=jo;if(c&&r){var d=$r(c).hoistableStyles,g=Bo(r);s=s||"default";var T=d.get(g);if(!T){var A={loading:0,preload:null};if(T=c.querySelector(xu(g)))A.loading=5;else{r=N({rel:"stylesheet",href:r,"data-precedence":s},l),(l=ni.get(g))&&Kp(r,l);var M=T=c.createElement("link");dt(M),tn(M,"link",r),M._p=new Promise(function(B,Z){M.onload=B,M.onerror=Z}),M.addEventListener("load",function(){A.loading|=1}),M.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Jh(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:A},d.set(g,T)}}}function EN(r,s){Tr.X(r,s);var l=jo;if(l&&r){var c=$r(l).hoistableScripts,d=zo(r),g=c.get(d);g||(g=l.querySelector(Du(d)),g||(r=N({src:r,async:!0},s),(s=ni.get(d))&&Qp(r,s),g=l.createElement("script"),dt(g),tn(g,"link",r),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function TN(r,s){Tr.M(r,s);var l=jo;if(l&&r){var c=$r(l).hoistableScripts,d=zo(r),g=c.get(d);g||(g=l.querySelector(Du(d)),g||(r=N({src:r,async:!0,type:"module"},s),(s=ni.get(d))&&Qp(r,s),g=l.createElement("script"),dt(g),tn(g,"link",r),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function mT(r,s,l,c){var d=(d=Bn.current)?Zh(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=Bo(l.href),l=$r(d).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){r=Bo(l.href);var g=$r(d).hoistableStyles,T=g.get(r);if(T||(d=d.ownerDocument||d,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(r,T),(g=d.querySelector(xu(r)))&&!g._p&&(T.instance=g,T.state.loading=5),ni.has(r)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ni.set(r,l),g||wN(d,r,l,T.state))),s&&c===null)throw Error(i(528,""));return T}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=zo(l),l=$r(d).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function Bo(r){return'href="'+_t(r)+'"'}function xu(r){return'link[rel="stylesheet"]['+r+"]"}function pT(r){return N({},r,{"data-precedence":r.precedence,precedence:null})}function wN(r,s,l,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),tn(s,"link",l),dt(s),r.head.appendChild(s))}function zo(r){return'[src="'+_t(r)+'"]'}function Du(r){return"script[async]"+r}function gT(r,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+_t(l.href)+'"]');if(c)return s.instance=c,dt(c),c;var d=N({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),dt(c),tn(c,"style",d),Jh(c,l.precedence,r),s.instance=c;case"stylesheet":d=Bo(l.href);var g=r.querySelector(xu(d));if(g)return s.state.loading|=4,s.instance=g,dt(g),g;c=pT(l),(d=ni.get(d))&&Kp(c,d),g=(r.ownerDocument||r).createElement("link"),dt(g);var T=g;return T._p=new Promise(function(A,M){T.onload=A,T.onerror=M}),tn(g,"link",c),s.state.loading|=4,Jh(g,l.precedence,r),s.instance=g;case"script":return g=zo(l.src),(d=r.querySelector(Du(g)))?(s.instance=d,dt(d),d):(c=l,(d=ni.get(g))&&(c=N({},l),Qp(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),dt(d),tn(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&!(s.state.loading&4)&&(c=s.instance,s.state.loading|=4,Jh(c,l.precedence,r));return s.instance}function Jh(r,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,g=d,T=0;T<c.length;T++){var A=c[T];if(A.dataset.precedence===s)g=A;else if(g!==d)break}g?g.parentNode.insertBefore(r,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(r,s.firstChild))}function Kp(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Qp(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var ef=null;function _T(r,s,l){if(ef===null){var c=new Map,d=ef=new Map;d.set(l,c)}else d=ef,c=d.get(l),c||(c=new Map,d.set(l,c));if(c.has(r))return c;for(c.set(r,null),l=l.getElementsByTagName(r),d=0;d<l.length;d++){var g=l[d];if(!(g[Kr]||g[Ft]||r==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=r+T;var A=c.get(T);A?A.push(g):c.set(T,[g])}}return c}function yT(r,s,l){r=r.ownerDocument||r,r.head.insertBefore(l,s==="title"?r.querySelector("head > title"):null)}function bN(r,s,l){if(l===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function vT(r){return!(r.type==="stylesheet"&&!(r.state.loading&3))}var Ou=null;function SN(){}function AN(r,s,l){if(Ou===null)throw Error(i(475));var c=Ou;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(s.state.loading&4)){if(s.instance===null){var d=Bo(l.href),g=r.querySelector(xu(d));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=tf.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=g,dt(g);return}g=r.ownerDocument||r,l=pT(l),(d=ni.get(d))&&Kp(l,d),g=g.createElement("link"),dt(g);var T=g;T._p=new Promise(function(A,M){T.onload=A,T.onerror=M}),tn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&!(s.state.loading&3)&&(c.count++,s=tf.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function CN(){if(Ou===null)throw Error(i(475));var r=Ou;return r.stylesheets&&r.count===0&&$p(r,r.stylesheets),0<r.count?function(s){var l=setTimeout(function(){if(r.stylesheets&&$p(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(l)}}:null}function tf(){if(this.count--,this.count===0){if(this.stylesheets)$p(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var nf=null;function $p(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,nf=new Map,s.forEach(RN,r),nf=null,tf.call(r))}function RN(r,s){if(!(s.state.loading&4)){var l=nf.get(r);if(l)var c=l.get(null);else{l=new Map,nf.set(r,l);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var T=d[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}d=s.instance,T=d.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,d),l.set(T,d),this.count++,c=tf.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),g?g.parentNode.insertBefore(d,g.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Mu={$$typeof:S,Provider:null,Consumer:null,_currentValue:Ce,_currentValue2:Ce,_threadCount:0};function IN(r,s,l,c,d,g,T,A){this.tag=1,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=to(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.hiddenUpdates=to(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function ET(r,s,l,c,d,g,T,A,M,B,Z,ie){return r=new IN(r,s,l,T,A,M,B,ie),s=1,g===!0&&(s|=24),g=ei(3,null,null,s),r.current=g,g.stateNode=r,s=Cm(),s.refCount++,r.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},ap(g),r}function TT(r){return r?(r=vo,r):vo}function wT(r,s,l,c,d,g){d=TT(d),c.context===null?c.context=d:c.pendingContext=d,c=os(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=ls(r,c,s),l!==null&&(vn(l,r,s),gu(l,r,s))}function bT(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Yp(r,s){bT(r,s),(r=r.alternate)&&bT(r,s)}function ST(r){if(r.tag===13){var s=es(r,67108864);s!==null&&vn(s,r,67108864),Yp(r,67108864)}}var rf=!0;function NN(r,s,l,c){var d=b.T;b.T=null;var g=ce.p;try{ce.p=2,Wp(r,s,l,c)}finally{ce.p=g,b.T=d}}function xN(r,s,l,c){var d=b.T;b.T=null;var g=ce.p;try{ce.p=8,Wp(r,s,l,c)}finally{ce.p=g,b.T=d}}function Wp(r,s,l,c){if(rf){var d=Xp(c);if(d===null)Up(r,s,c,sf,l),CT(r,c);else if(ON(d,r,s,l,c))c.stopPropagation();else if(CT(r,c),s&4&&-1<DN.indexOf(r)){for(;d!==null;){var g=Ji(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=ai(g.pendingLanes);if(T!==0){var A=g;for(A.pendingLanes|=2,A.entangledLanes|=2;T;){var M=1<<31-pn(T);A.entanglements[1]|=M,T&=~M}Pi(g),!(pt&6)&&(zh=wn()+500,Ru(0))}}break;case 13:A=es(g,2),A!==null&&vn(A,g,2),Hh(),Yp(g,2)}if(g=Xp(c),g===null&&Up(r,s,c,sf,l),g===d)break;d=g}d!==null&&c.stopPropagation()}else Up(r,s,c,null,l)}}function Xp(r){return r=ao(r),Zp(r)}var sf=null;function Zp(r){if(sf=null,r=oi(r),r!==null){var s=_e(r);if(s===null)r=null;else{var l=s.tag;if(l===13){if(r=Qe(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return sf=r,null}function AT(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qc()){case Ot:return 2;case zt:return 8;case Xi:case Hc:return 32;case Pl:return 268435456;default:return 32}default:return 32}}var Jp=!1,ps=null,gs=null,_s=null,ku=new Map,Pu=new Map,ys=[],DN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function CT(r,s){switch(r){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":ku.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pu.delete(s.pointerId)}}function Lu(r,s,l,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Ji(s),s!==null&&ST(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function ON(r,s,l,c,d){switch(s){case"focusin":return ps=Lu(ps,r,s,l,c,d),!0;case"dragenter":return gs=Lu(gs,r,s,l,c,d),!0;case"mouseover":return _s=Lu(_s,r,s,l,c,d),!0;case"pointerover":var g=d.pointerId;return ku.set(g,Lu(ku.get(g)||null,r,s,l,c,d)),!0;case"gotpointercapture":return g=d.pointerId,Pu.set(g,Lu(Pu.get(g)||null,r,s,l,c,d)),!0}return!1}function RT(r){var s=oi(r.target);if(s!==null){var l=_e(s);if(l!==null){if(s=l.tag,s===13){if(s=Qe(l),s!==null){r.blockedOn=s,Gr(r.priority,function(){if(l.tag===13){var c=Vn(),d=es(l,c);d!==null&&vn(d,l,c),Yp(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function af(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=Xp(r.nativeEvent);if(l===null){l=r.nativeEvent;var c=new l.constructor(l.type,l);Hn=c,l.target.dispatchEvent(c),Hn=null}else return s=Ji(l),s!==null&&ST(s),r.blockedOn=l,!1;s.shift()}return!0}function IT(r,s,l){af(r)&&l.delete(s)}function MN(){Jp=!1,ps!==null&&af(ps)&&(ps=null),gs!==null&&af(gs)&&(gs=null),_s!==null&&af(_s)&&(_s=null),ku.forEach(IT),Pu.forEach(IT)}function of(r,s){r.blockedOn===s&&(r.blockedOn=null,Jp||(Jp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,MN)))}var lf=null;function NT(r){lf!==r&&(lf=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){lf===r&&(lf=null);for(var s=0;s<r.length;s+=3){var l=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(Zp(c||l)===null)continue;break}var g=Ji(l);g!==null&&(r.splice(s,3),s-=3,Fm(g,{pending:!0,data:d,method:l.method,action:c},c,d))}}))}function Vu(r){function s(M){return of(M,r)}ps!==null&&of(ps,r),gs!==null&&of(gs,r),_s!==null&&of(_s,r),ku.forEach(s),Pu.forEach(s);for(var l=0;l<ys.length;l++){var c=ys[l];c.blockedOn===r&&(c.blockedOn=null)}for(;0<ys.length&&(l=ys[0],l.blockedOn===null);)RT(l),l.blockedOn===null&&ys.shift();if(l=(r.ownerDocument||r).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var d=l[c],g=l[c+1],T=d[Mt]||null;if(typeof g=="function")T||NT(l);else if(T){var A=null;if(g&&g.hasAttribute("formAction")){if(d=g,T=g[Mt]||null)A=T.formAction;else if(Zp(d)!==null)continue}else A=T.action;typeof A=="function"?l[c+1]=A:(l.splice(c,3),c-=3),NT(l)}}}function eg(r){this._internalRoot=r}uf.prototype.render=eg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var l=s.current,c=Vn();wT(l,c,r,s,null,null)},uf.prototype.unmount=eg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;r.tag===0&&Lo(),wT(r.current,2,null,r,null,null),Hh(),s[Zi]=null}};function uf(r){this._internalRoot=r}uf.prototype.unstable_scheduleHydration=function(r){if(r){var s=Yc();r={blockedOn:null,target:r,priority:s};for(var l=0;l<ys.length&&s!==0&&s<ys[l].priority;l++);ys.splice(l,0,r),l===0&&RT(r)}};var xT=e.version;if(xT!=="19.0.0")throw Error(i(527,xT,"19.0.0"));ce.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=se(s),r=r!==null?me(r):null,r=r===null?null:r.stateNode,r};var kN={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:oi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cf.isDisabled&&cf.supportsFiber)try{jr=cf.inject(kN),on=cf}catch{}}return ju.createRoot=function(r,s){if(!a(r))throw Error(i(299));var l=!1,c="",d=Q0,g=$0,T=Y0,A=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(A=s.unstable_transitionCallbacks)),s=ET(r,1,!1,null,null,l,c,d,g,T,A,null),r[Zi]=s.current,Vp(r.nodeType===8?r.parentNode:r),new eg(s)},ju.hydrateRoot=function(r,s,l){if(!a(r))throw Error(i(299));var c=!1,d="",g=Q0,T=$0,A=Y0,M=null,B=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(d=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(A=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(M=l.unstable_transitionCallbacks),l.formState!==void 0&&(B=l.formState)),s=ET(r,1,!0,s,l??null,c,d,g,T,A,M,B),s.context=TT(null),l=s.current,c=Vn(),d=os(c),d.callback=null,ls(l,d,c),s.current.lanes=c,bt(s,c),Pi(s),r[Zi]=s.current,Vp(r),new uf(s)},ju.version="19.0.0",ju}var BT;function GN(){if(BT)return ig.exports;BT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ig.exports=HN(),ig.exports}var KN=GN(),Bu={},zT;function QN(){if(zT)return Bu;zT=1,Object.defineProperty(Bu,"__esModule",{value:!0}),Bu.parse=u,Bu.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const x=new o,j=w.length;if(j<2)return x;const V=(S==null?void 0:S.decode)||y;let z=0;do{const G=w.indexOf("=",z);if(G===-1)break;const H=w.indexOf(";",z),W=H===-1?j:H;if(G>W){z=w.lastIndexOf(";",G-1)+1;continue}const re=f(w,z,G),J=m(w,G,re),O=w.slice(re,J);if(x[O]===void 0){let R=f(w,G+1,W),b=m(w,W,R);const N=V(w.slice(R,b));x[O]=N}z=W+1}while(z<j);return x}function f(w,S,x){do{const j=w.charCodeAt(S);if(j!==32&&j!==9)return S}while(++S<x);return x}function m(w,S,x){for(;S>x;){const j=w.charCodeAt(--S);if(j!==32&&j!==9)return S+1}return x}function p(w,S,x){const j=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const V=j(S);if(!e.test(V))throw new TypeError(`argument val is invalid: ${S}`);let z=w+"="+V;if(!x)return z;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);z+="; Max-Age="+x.maxAge}if(x.domain){if(!t.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);z+="; Domain="+x.domain}if(x.path){if(!i.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);z+="; Path="+x.path}if(x.expires){if(!E(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);z+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(z+="; HttpOnly"),x.secure&&(z+="; Secure"),x.partitioned&&(z+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return z}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function E(w){return a.call(w)==="[object Date]"}return Bu}QN();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var FT="popstate";function $N(n={}){function e(i,a){let{pathname:o,search:u,hash:f}=i.location;return e_("",{pathname:o,search:u,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:uc(a)}return WN(e,t,null,n)}function gt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function zi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YN(){return Math.random().toString(36).substring(2,10)}function qT(n,e){return{usr:n.state,key:n.key,idx:e}}function e_(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?yl(e):e,state:t,key:e&&e.key||i||YN()}}function uc({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function yl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function WN(n,e,t,i={}){let{window:a=document.defaultView,v5Compat:o=!1}=i,u=a.history,f="POP",m=null,p=y();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function y(){return(u.state||{idx:null}).idx}function E(){f="POP";let V=y(),z=V==null?null:V-p;p=V,m&&m({action:f,location:j.location,delta:z})}function w(V,z){f="PUSH";let G=e_(j.location,V,z);p=y()+1;let H=qT(G,p),W=j.createHref(G);try{u.pushState(H,"",W)}catch(re){if(re instanceof DOMException&&re.name==="DataCloneError")throw re;a.location.assign(W)}o&&m&&m({action:f,location:j.location,delta:1})}function S(V,z){f="REPLACE";let G=e_(j.location,V,z);p=y();let H=qT(G,p),W=j.createHref(G);u.replaceState(H,"",W),o&&m&&m({action:f,location:j.location,delta:0})}function x(V){let z=a.location.origin!=="null"?a.location.origin:a.location.href,G=typeof V=="string"?V:uc(V);return G=G.replace(/ $/,"%20"),gt(z,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,z)}let j={get action(){return f},get location(){return n(a,u)},listen(V){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(FT,E),m=V,()=>{a.removeEventListener(FT,E),m=null}},createHref(V){return e(a,V)},createURL:x,encodeLocation(V){let z=x(V);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:w,replace:S,go(V){return u.go(V)}};return j}function LS(n,e,t="/"){return XN(n,e,t,!1)}function XN(n,e,t,i){let a=typeof e=="string"?yl(e):e,o=Ms(a.pathname||"/",t);if(o==null)return null;let u=VS(n);ZN(u);let f=null;for(let m=0;f==null&&m<u.length;++m){let p=ux(o);f=ox(u[m],p,i)}return f}function VS(n,e=[],t=[],i=""){let a=(o,u,f)=>{let m={relativePath:f===void 0?o.path||"":f,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};m.relativePath.startsWith("/")&&(gt(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length));let p=Ir([i,m.relativePath]),y=t.concat(m);o.children&&o.children.length>0&&(gt(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),VS(o.children,e,y,p)),!(o.path==null&&!o.index)&&e.push({path:p,score:sx(p,o.index),routesMeta:y})};return n.forEach((o,u)=>{var f;if(o.path===""||!((f=o.path)!=null&&f.includes("?")))a(o,u);else for(let m of US(o.path))a(o,u,m)}),e}function US(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let u=US(i.join("/")),f=[];return f.push(...u.map(m=>m===""?o:[o,m].join("/"))),a&&f.push(...u),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function ZN(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:ax(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var JN=/^:[\w-]+$/,ex=3,tx=2,nx=1,ix=10,rx=-2,HT=n=>n==="*";function sx(n,e){let t=n.split("/"),i=t.length;return t.some(HT)&&(i+=rx),e&&(i+=tx),t.filter(a=>!HT(a)).reduce((a,o)=>a+(JN.test(o)?ex:o===""?nx:ix),i)}function ax(n,e){return n.length===e.length&&n.slice(0,-1).every((i,a)=>i===e[a])?n[n.length-1]-e[e.length-1]:0}function ox(n,e,t=!1){let{routesMeta:i}=n,a={},o="/",u=[];for(let f=0;f<i.length;++f){let m=i[f],p=f===i.length-1,y=o==="/"?e:e.slice(o.length)||"/",E=Pf({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},y),w=m.route;if(!E&&p&&t&&!i[i.length-1].route.index&&(E=Pf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!E)return null;Object.assign(a,E.params),u.push({params:a,pathname:Ir([o,E.pathname]),pathnameBase:dx(Ir([o,E.pathnameBase])),route:w}),E.pathnameBase!=="/"&&(o=Ir([o,E.pathnameBase]))}return u}function Pf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=lx(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:i.reduce((p,{paramName:y,isOptional:E},w)=>{if(y==="*"){let x=f[w]||"";u=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const S=f[w];return E&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:u,pattern:n}}function lx(n,e=!1,t=!0){zi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,m)=>(i.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function ux(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ms(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function cx(n,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof n=="string"?yl(n):n;return{pathname:t?t.startsWith("/")?t:hx(t,e):e,search:mx(i),hash:px(a)}}function hx(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function og(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fx(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function jS(n){let e=fx(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function BS(n,e,t,i=!1){let a;typeof n=="string"?a=yl(n):(a={...n},gt(!a.pathname||!a.pathname.includes("?"),og("?","pathname","search",a)),gt(!a.pathname||!a.pathname.includes("#"),og("#","pathname","hash",a)),gt(!a.search||!a.search.includes("#"),og("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,f;if(u==null)f=t;else{let E=e.length-1;if(!i&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),E-=1;a.pathname=w.join("/")}f=E>=0?e[E]:"/"}let m=cx(a,f),p=u&&u!=="/"&&u.endsWith("/"),y=(o||u===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(p||y)&&(m.pathname+="/"),m}var Ir=n=>n.join("/").replace(/\/\/+/g,"/"),dx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),mx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,px=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function gx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var zS=["POST","PUT","PATCH","DELETE"];new Set(zS);var _x=["GET",...zS];new Set(_x);var vl=Y.createContext(null);vl.displayName="DataRouter";var _d=Y.createContext(null);_d.displayName="DataRouterState";var FS=Y.createContext({isTransitioning:!1});FS.displayName="ViewTransition";var yx=Y.createContext(new Map);yx.displayName="Fetchers";var vx=Y.createContext(null);vx.displayName="Await";var Ki=Y.createContext(null);Ki.displayName="Navigation";var Cc=Y.createContext(null);Cc.displayName="Location";var Qi=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Qi.displayName="Route";var G_=Y.createContext(null);G_.displayName="RouteError";function Ex(n,{relative:e}={}){gt(Rc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=Y.useContext(Ki),{hash:a,pathname:o,search:u}=Ic(n,{relative:e}),f=o;return t!=="/"&&(f=o==="/"?t:Ir([t,o])),i.createHref({pathname:f,search:u,hash:a})}function Rc(){return Y.useContext(Cc)!=null}function za(){return gt(Rc(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(Cc).location}var qS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function HS(n){Y.useContext(Ki).static||Y.useLayoutEffect(n)}function El(){let{isDataRoute:n}=Y.useContext(Qi);return n?kx():Tx()}function Tx(){gt(Rc(),"useNavigate() may be used only in the context of a <Router> component.");let n=Y.useContext(vl),{basename:e,navigator:t}=Y.useContext(Ki),{matches:i}=Y.useContext(Qi),{pathname:a}=za(),o=JSON.stringify(jS(i)),u=Y.useRef(!1);return HS(()=>{u.current=!0}),Y.useCallback((m,p={})=>{if(zi(u.current,qS),!u.current)return;if(typeof m=="number"){t.go(m);return}let y=BS(m,JSON.parse(o),a,p.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Ir([e,y.pathname])),(p.replace?t.replace:t.push)(y,p.state,p)},[e,t,o,a,n])}Y.createContext(null);function wx(){let{matches:n}=Y.useContext(Qi),e=n[n.length-1];return e?e.params:{}}function Ic(n,{relative:e}={}){let{matches:t}=Y.useContext(Qi),{pathname:i}=za(),a=JSON.stringify(jS(t));return Y.useMemo(()=>BS(n,JSON.parse(a),i,e==="path"),[n,a,i,e])}function bx(n,e){return GS(n,e)}function GS(n,e,t,i){var G;gt(Rc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=Y.useContext(Ki),{matches:u}=Y.useContext(Qi),f=u[u.length-1],m=f?f.params:{},p=f?f.pathname:"/",y=f?f.pathnameBase:"/",E=f&&f.route;{let H=E&&E.path||"";KS(p,!E||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let w=za(),S;if(e){let H=typeof e=="string"?yl(e):e;gt(y==="/"||((G=H.pathname)==null?void 0:G.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${H.pathname}" was given in the \`location\` prop.`),S=H}else S=w;let x=S.pathname||"/",j=x;if(y!=="/"){let H=y.replace(/^\//,"").split("/");j="/"+x.replace(/^\//,"").split("/").slice(H.length).join("/")}let V=!o&&t&&t.matches&&t.matches.length>0?t.matches:LS(n,{pathname:j});zi(E||V!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),zi(V==null||V[V.length-1].route.element!==void 0||V[V.length-1].route.Component!==void 0||V[V.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=Ix(V&&V.map(H=>Object.assign({},H,{params:Object.assign({},m,H.params),pathname:Ir([y,a.encodeLocation?a.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?y:Ir([y,a.encodeLocation?a.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),u,t,i);return e&&z?Y.createElement(Cc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},z):z}function Sx(){let n=Mx(),e=gx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:o},"ErrorBoundary")," or"," ",Y.createElement("code",{style:o},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},e),t?Y.createElement("pre",{style:a},t):null,u)}var Ax=Y.createElement(Sx,null),Cx=class extends Y.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?Y.createElement(Qi.Provider,{value:this.props.routeContext},Y.createElement(G_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Rx({routeContext:n,match:e,children:t}){let i=Y.useContext(vl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),Y.createElement(Qi.Provider,{value:n},t)}function Ix(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let m=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);gt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let u=!1,f=-1;if(t)for(let m=0;m<a.length;m++){let p=a[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=m),p.route.id){let{loaderData:y,errors:E}=t,w=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!E||E[p.route.id]===void 0);if(p.route.lazy||w){u=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((m,p,y)=>{let E,w=!1,S=null,x=null;t&&(E=o&&p.route.id?o[p.route.id]:void 0,S=p.route.errorElement||Ax,u&&(f<0&&y===0?(KS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):f===y&&(w=!0,x=p.route.hydrateFallbackElement||null)));let j=e.concat(a.slice(0,y+1)),V=()=>{let z;return E?z=S:w?z=x:p.route.Component?z=Y.createElement(p.route.Component,null):p.route.element?z=p.route.element:z=m,Y.createElement(Rx,{match:p,routeContext:{outlet:m,matches:j,isDataRoute:t!=null},children:z})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?Y.createElement(Cx,{location:t.location,revalidation:t.revalidation,component:S,error:E,children:V(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):V()},null)}function K_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nx(n){let e=Y.useContext(vl);return gt(e,K_(n)),e}function xx(n){let e=Y.useContext(_d);return gt(e,K_(n)),e}function Dx(n){let e=Y.useContext(Qi);return gt(e,K_(n)),e}function Q_(n){let e=Dx(n),t=e.matches[e.matches.length-1];return gt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Ox(){return Q_("useRouteId")}function Mx(){var i;let n=Y.useContext(G_),e=xx("useRouteError"),t=Q_("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function kx(){let{router:n}=Nx("useNavigate"),e=Q_("useNavigate"),t=Y.useRef(!1);return HS(()=>{t.current=!0}),Y.useCallback(async(a,o={})=>{zi(t.current,qS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var GT={};function KS(n,e,t){!e&&!GT[n]&&(GT[n]=!0,zi(!1,t))}Y.memo(Px);function Px({routes:n,future:e,state:t}){return GS(n,void 0,t,e)}function Sa(n){gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Lx({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:o=!1}){gt(!Rc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),f=Y.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=yl(t));let{pathname:m="/",search:p="",hash:y="",state:E=null,key:w="default"}=t,S=Y.useMemo(()=>{let x=Ms(m,u);return x==null?null:{location:{pathname:x,search:p,hash:y,state:E,key:w},navigationType:i}},[u,m,p,y,E,w,i]);return zi(S!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:Y.createElement(Ki.Provider,{value:f},Y.createElement(Cc.Provider,{children:e,value:S}))}function Vx({children:n,location:e}){return bx(t_(n),e)}function t_(n,e=[]){let t=[];return Y.Children.forEach(n,(i,a)=>{if(!Y.isValidElement(i))return;let o=[...e,a];if(i.type===Y.Fragment){t.push.apply(t,t_(i.props.children,o));return}gt(i.type===Sa,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),gt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=t_(i.props.children,o)),t.push(u)}),t}var Tf="get",wf="application/x-www-form-urlencoded";function yd(n){return n!=null&&typeof n.tagName=="string"}function Ux(n){return yd(n)&&n.tagName.toLowerCase()==="button"}function jx(n){return yd(n)&&n.tagName.toLowerCase()==="form"}function Bx(n){return yd(n)&&n.tagName.toLowerCase()==="input"}function zx(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Fx(n,e){return n.button===0&&(!e||e==="_self")&&!zx(n)}var hf=null;function qx(){if(hf===null)try{new FormData(document.createElement("form"),0),hf=!1}catch{hf=!0}return hf}var Hx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function lg(n){return n!=null&&!Hx.has(n)?(zi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wf}"`),null):n}function Gx(n,e){let t,i,a,o,u;if(jx(n)){let f=n.getAttribute("action");i=f?Ms(f,e):null,t=n.getAttribute("method")||Tf,a=lg(n.getAttribute("enctype"))||wf,o=new FormData(n)}else if(Ux(n)||Bx(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||f.getAttribute("action");if(i=m?Ms(m,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||Tf,a=lg(n.getAttribute("formenctype"))||lg(f.getAttribute("enctype"))||wf,o=new FormData(f,n),!qx()){let{name:p,type:y,value:E}=n;if(y==="image"){let w=p?`${p}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else p&&o.append(p,E)}}else{if(yd(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Tf,i=null,a=wf,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:o,body:u}}function $_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function Kx(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qx(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function $x(n,e,t){let i=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await Kx(o,t);return u.links?u.links():[]}return[]}));return Zx(i.flat(1).filter(Qx).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function KT(n,e,t,i,a,o){let u=(m,p)=>t[p]?m.route.id!==t[p].route.id:!0,f=(m,p)=>{var y;return t[p].pathname!==m.pathname||((y=t[p].route.path)==null?void 0:y.endsWith("*"))&&t[p].params["*"]!==m.params["*"]};return o==="assets"?e.filter((m,p)=>u(m,p)||f(m,p)):o==="data"?e.filter((m,p)=>{var E;let y=i.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(u(m,p)||f(m,p))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Yx(n,e){return Wx(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let a=[i.module];return i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function Wx(n){return[...new Set(n)]}function Xx(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function Zx(n,e){let t=new Set;return new Set(e),n.reduce((i,a)=>{let o=JSON.stringify(Xx(a));return t.has(o)||(t.add(o),i.push({key:o,link:a})),i},[])}function Jx(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function e2(){let n=Y.useContext(vl);return $_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function t2(){let n=Y.useContext(_d);return $_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Y_=Y.createContext(void 0);Y_.displayName="FrameworkContext";function QS(){let n=Y.useContext(Y_);return $_(n,"You must render this element inside a <HydratedRouter> element"),n}function n2(n,e){let t=Y.useContext(Y_),[i,a]=Y.useState(!1),[o,u]=Y.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:p,onMouseLeave:y,onTouchStart:E}=e,w=Y.useRef(null);Y.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let j=z=>{z.forEach(G=>{u(G.isIntersecting)})},V=new IntersectionObserver(j,{threshold:.5});return w.current&&V.observe(w.current),()=>{V.disconnect()}}},[n]),Y.useEffect(()=>{if(i){let j=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(j)}}},[i]);let S=()=>{a(!0)},x=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:zu(f,S),onBlur:zu(m,x),onMouseEnter:zu(p,S),onMouseLeave:zu(y,x),onTouchStart:zu(E,S)}]:[!1,w,{}]}function zu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function i2({page:n,...e}){let{router:t}=e2(),i=Y.useMemo(()=>LS(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?Y.createElement(s2,{page:n,matches:i,...e}):null}function r2(n){let{manifest:e,routeModules:t}=QS(),[i,a]=Y.useState([]);return Y.useEffect(()=>{let o=!1;return $x(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),i}function s2({page:n,matches:e,...t}){let i=za(),{manifest:a,routeModules:o}=QS(),{loaderData:u,matches:f}=t2(),m=Y.useMemo(()=>KT(n,e,f,a,i,"data"),[n,e,f,a,i]),p=Y.useMemo(()=>KT(n,e,f,a,i,"assets"),[n,e,f,a,i]),y=Y.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let S=new Set,x=!1;if(e.forEach(V=>{var G;let z=a.routes[V.route.id];!z||!z.hasLoader||(!m.some(H=>H.route.id===V.route.id)&&V.route.id in u&&((G=o[V.route.id])!=null&&G.shouldRevalidate)||z.hasClientLoader?x=!0:S.add(V.route.id))}),S.size===0)return[];let j=Jx(n);return x&&S.size>0&&j.searchParams.set("_routes",e.filter(V=>S.has(V.route.id)).map(V=>V.route.id).join(",")),[j.pathname+j.search]},[u,i,a,m,e,n,o]),E=Y.useMemo(()=>Yx(p,a),[p,a]),w=r2(p);return Y.createElement(Y.Fragment,null,y.map(S=>Y.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),E.map(S=>Y.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),w.map(({key:S,link:x})=>Y.createElement("link",{key:S,...x})))}function a2(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var $S=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{$S&&(window.__reactRouterVersion="7.1.5")}catch{}function o2({basename:n,children:e,window:t}){let i=Y.useRef();i.current==null&&(i.current=$N({window:t,v5Compat:!0}));let a=i.current,[o,u]=Y.useState({action:a.action,location:a.location}),f=Y.useCallback(m=>{Y.startTransition(()=>u(m))},[u]);return Y.useLayoutEffect(()=>a.listen(f),[a,f]),Y.createElement(Lx,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var YS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xu=Y.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:o,replace:u,state:f,target:m,to:p,preventScrollReset:y,viewTransition:E,...w},S){let{basename:x}=Y.useContext(Ki),j=typeof p=="string"&&YS.test(p),V,z=!1;if(typeof p=="string"&&j&&(V=p,$S))try{let b=new URL(window.location.href),N=p.startsWith("//")?new URL(b.protocol+p):new URL(p),k=Ms(N.pathname,x);N.origin===b.origin&&k!=null?p=k+N.search+N.hash:z=!0}catch{zi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=Ex(p,{relative:a}),[H,W,re]=n2(i,w),J=h2(p,{replace:u,state:f,target:m,preventScrollReset:y,relative:a,viewTransition:E});function O(b){e&&e(b),b.defaultPrevented||J(b)}let R=Y.createElement("a",{...w,...re,href:V||G,onClick:z||o?e:O,ref:a2(S,W),target:m,"data-discover":!j&&t==="render"?"true":void 0});return H&&!j?Y.createElement(Y.Fragment,null,R,Y.createElement(i2,{page:G})):R});Xu.displayName="Link";var l2=Y.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:o,to:u,viewTransition:f,children:m,...p},y){let E=Ic(u,{relative:p.relative}),w=za(),S=Y.useContext(_d),{navigator:x,basename:j}=Y.useContext(Ki),V=S!=null&&g2(E)&&f===!0,z=x.encodeLocation?x.encodeLocation(E).pathname:E.pathname,G=w.pathname,H=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(G=G.toLowerCase(),H=H?H.toLowerCase():null,z=z.toLowerCase()),H&&j&&(H=Ms(H,j)||H);const W=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let re=G===z||!a&&G.startsWith(z)&&G.charAt(W)==="/",J=H!=null&&(H===z||!a&&H.startsWith(z)&&H.charAt(z.length)==="/"),O={isActive:re,isPending:J,isTransitioning:V},R=re?e:void 0,b;typeof i=="function"?b=i(O):b=[i,re?"active":null,J?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let N=typeof o=="function"?o(O):o;return Y.createElement(Xu,{...p,"aria-current":R,className:b,ref:y,style:N,to:u,viewTransition:f},typeof m=="function"?m(O):m)});l2.displayName="NavLink";var u2=Y.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:o,method:u=Tf,action:f,onSubmit:m,relative:p,preventScrollReset:y,viewTransition:E,...w},S)=>{let x=m2(),j=p2(f,{relative:p}),V=u.toLowerCase()==="get"?"get":"post",z=typeof f=="string"&&YS.test(f),G=H=>{if(m&&m(H),H.defaultPrevented)return;H.preventDefault();let W=H.nativeEvent.submitter,re=(W==null?void 0:W.getAttribute("formmethod"))||u;x(W||H.currentTarget,{fetcherKey:e,method:re,navigate:t,replace:a,state:o,relative:p,preventScrollReset:y,viewTransition:E})};return Y.createElement("form",{ref:S,method:V,action:j,onSubmit:i?m:G,...w,"data-discover":!z&&n==="render"?"true":void 0})});u2.displayName="Form";function c2(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function WS(n){let e=Y.useContext(vl);return gt(e,c2(n)),e}function h2(n,{target:e,replace:t,state:i,preventScrollReset:a,relative:o,viewTransition:u}={}){let f=El(),m=za(),p=Ic(n,{relative:o});return Y.useCallback(y=>{if(Fx(y,e)){y.preventDefault();let E=t!==void 0?t:uc(m)===uc(p);f(n,{replace:E,state:i,preventScrollReset:a,relative:o,viewTransition:u})}},[m,f,p,t,i,e,n,a,o,u])}var f2=0,d2=()=>`__${String(++f2)}__`;function m2(){let{router:n}=WS("useSubmit"),{basename:e}=Y.useContext(Ki),t=Ox();return Y.useCallback(async(i,a={})=>{let{action:o,method:u,encType:f,formData:m,body:p}=Gx(i,e);if(a.navigate===!1){let y=a.fetcherKey||d2();await n.fetch(y,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:m,body:p,formMethod:a.method||u,formEncType:a.encType||f,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:m,body:p,formMethod:a.method||u,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function p2(n,{relative:e}={}){let{basename:t}=Y.useContext(Ki),i=Y.useContext(Qi);gt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...Ic(n||".",{relative:e})},u=za();if(n==null){o.search=u.search;let f=new URLSearchParams(o.search),m=f.getAll("index");if(m.some(y=>y==="")){f.delete("index"),m.filter(E=>E).forEach(E=>f.append("index",E));let y=f.toString();o.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Ir([t,o.pathname])),uc(o)}function g2(n,e={}){let t=Y.useContext(FS);gt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=WS("useViewTransitionState"),a=Ic(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Ms(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=Ms(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Pf(a.pathname,u)!=null||Pf(a.pathname,o)!=null}new TextEncoder;var QT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=function(n,e){if(!n)throw Tl(e)},Tl=function(n){return new Error("Firebase Database ("+XS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},_2=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[i++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],f=n[t++],m=((a&7)<<18|(o&63)<<12|(u&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const o=n[t++],u=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},W_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,f=u?n[a+1]:0,m=a+2<n.length,p=m?n[a+2]:0,y=o>>2,E=(o&3)<<4|f>>4;let w=(f&15)<<2|p>>6,S=p&63;m||(S=64,u||(w=64)),i.push(t[y],t[E],t[w],t[S])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ZS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],f=a<n.length?t[n.charAt(a)]:0;++a;const p=a<n.length?t[n.charAt(a)]:64;++a;const E=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||f==null||p==null||E==null)throw new y2;const w=o<<2|f>>4;if(i.push(w),p!==64){const S=f<<4&240|p>>2;if(i.push(S),E!==64){const x=p<<6&192|E;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class y2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const JS=function(n){const e=ZS(n);return W_.encodeByteArray(e,!0)},Lf=function(n){return JS(n).replace(/\./g,"")},Vf=function(n){try{return W_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(n){return eA(void 0,n)}function eA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!E2(t)||(n[t]=eA(n[t],e[t]));return n}function E2(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=()=>T2().__FIREBASE_DEFAULTS__,b2=()=>{if(typeof process>"u"||typeof QT>"u")return;const n=QT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},S2=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vf(n[1]);return e&&JSON.parse(e)},vd=()=>{try{return w2()||b2()||S2()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tA=n=>{var e,t;return(t=(e=vd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},nA=n=>{const e=tA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},iA=()=>{var n;return(n=vd())===null||n===void 0?void 0:n.config},rA=n=>{var e;return(e=vd())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Lf(JSON.stringify(t)),Lf(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function X_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function A2(){var n;const e=(n=vd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function C2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function oA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function R2(){const n=dn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function I2(){return XS.NODE_ADMIN===!0}function N2(){return!A2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lA(){try{return typeof indexedDB=="object"}catch{return!1}}function uA(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function x2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2="FirebaseError";class vi extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=D2,Object.setPrototypeOf(this,vi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?O2(o,i):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new vi(a,f,i)}}function O2(n,e){return n.replace(M2,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const M2=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n){return JSON.parse(n)}function Ut(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=function(n){let e={},t={},i={},a="";try{const o=n.split(".");e=cc(Vf(o[0])||""),t=cc(Vf(o[1])||""),a=o[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:a}},k2=function(n){const e=cA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},P2=function(n){const e=cA(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function tl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function n_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Uf(n,e,t){const i={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=e.call(t,n[a],a,n));return i}function nl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const o=n[a],u=e[a];if($T(o)&&$T(u)){if(!nl(o,u))return!1}else if(o!==u)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function $T(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)i[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)i[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const w=i[E-3]^i[E-8]^i[E-14]^i[E-16];i[E]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],o=this.chain_[1],u=this.chain_[2],f=this.chain_[3],m=this.chain_[4],p,y;for(let E=0;E<80;E++){E<40?E<20?(p=f^o&(u^f),y=1518500249):(p=o^u^f,y=1859775393):E<60?(p=o&u|f&(o|u),y=2400959708):(p=o^u^f,y=3395469782);const w=(a<<5|a>>>27)+p+m+y+i[E]&4294967295;m=f,f=u,u=(o<<30|o>>>2)&4294967295,o=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let a=0;const o=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=i;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(o[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(o),u=0;break}}else for(;a<t;)if(o[u]=e[a],++u,++a,u===this.blockSize){this.compress_(o),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[a]>>o&255,++i;return e}}function V2(n,e){const t=new U2(n,e);return t.subscribe.bind(t)}class U2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");j2(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=ug),a.error===void 0&&(a.error=ug),a.complete===void 0&&(a.complete=ug);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j2(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ug(){}function Z_(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);if(a>=55296&&a<=56319){const o=a-55296;i++,ae(i<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(i)-56320;a=65536+(o<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Td=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2=1e3,F2=2,q2=4*60*60*1e3,H2=.5;function YT(n,e=z2,t=F2){const i=e*Math.pow(t,n),a=Math.round(H2*i*(Math.random()-.5)*2);return Math.min(q2,i+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n){return n&&n._delegate?n._delegate:n}class si{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ed;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Q2(e))try{this.getOrInitializeService({instanceIdentifier:Aa})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});i.resolve(o)}catch{}}}}clearInstance(e=Aa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Aa){return this.instances.has(e)}getOptions(e=Aa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(o);i===f&&u.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:K2(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Aa){return this.component?this.component.multipleInstances?e:Aa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function K2(n){return n===Aa?void 0:n}function Q2(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new G2(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const Y2={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},W2=Le.INFO,X2={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},Z2=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=X2[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=W2,this._logHandler=Z2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Y2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const J2=(n,e)=>e.some(t=>n instanceof t);let WT,XT;function eD(){return WT||(WT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tD(){return XT||(XT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hA=new WeakMap,i_=new WeakMap,fA=new WeakMap,cg=new WeakMap,J_=new WeakMap;function nD(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(Cs(n.result)),a()},u=()=>{i(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&hA.set(t,n)}).catch(()=>{}),J_.set(e,n),e}function iD(n){if(i_.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});i_.set(n,e)}let r_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return i_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Cs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rD(n){r_=n(r_)}function sD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(hg(this),e,...t);return fA.set(i,e.sort?e.sort():[e]),Cs(i)}:tD().includes(n)?function(...e){return n.apply(hg(this),e),Cs(hA.get(this))}:function(...e){return Cs(n.apply(hg(this),e))}}function aD(n){return typeof n=="function"?sD(n):(n instanceof IDBTransaction&&iD(n),J2(n,eD())?new Proxy(n,r_):n)}function Cs(n){if(n instanceof IDBRequest)return nD(n);if(cg.has(n))return cg.get(n);const e=aD(n);return e!==n&&(cg.set(n,e),J_.set(e,n)),e}const hg=n=>J_.get(n);function dA(n,e,{blocked:t,upgrade:i,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),f=Cs(u);return i&&u.addEventListener("upgradeneeded",m=>{i(Cs(u.result),m.oldVersion,m.newVersion,Cs(u.transaction),m)}),t&&u.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{o&&m.addEventListener("close",()=>o()),a&&m.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),f}const oD=["get","getKey","getAll","getAllKeys","count"],lD=["put","add","delete","clear"],fg=new Map;function ZT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(fg.get(e))return fg.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=lD.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||oD.includes(t)))return;const o=async function(u,...f){const m=this.transaction(u,a?"readwrite":"readonly");let p=m.store;return i&&(p=p.index(f.shift())),(await Promise.all([p[t](...f),a&&m.done]))[0]};return fg.set(e,o),o}rD(n=>({...n,get:(e,t,i)=>ZT(e,t)||n.get(e,t,i),has:(e,t)=>!!ZT(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cD(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function cD(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const s_="@firebase/app",JT="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Nc("@firebase/app"),hD="@firebase/app-compat",fD="@firebase/analytics-compat",dD="@firebase/analytics",mD="@firebase/app-check-compat",pD="@firebase/app-check",gD="@firebase/auth",_D="@firebase/auth-compat",yD="@firebase/database",vD="@firebase/data-connect",ED="@firebase/database-compat",TD="@firebase/functions",wD="@firebase/functions-compat",bD="@firebase/installations",SD="@firebase/installations-compat",AD="@firebase/messaging",CD="@firebase/messaging-compat",RD="@firebase/performance",ID="@firebase/performance-compat",ND="@firebase/remote-config",xD="@firebase/remote-config-compat",DD="@firebase/storage",OD="@firebase/storage-compat",MD="@firebase/firestore",kD="@firebase/vertexai",PD="@firebase/firestore-compat",LD="firebase",VD="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="[DEFAULT]",UD={[s_]:"fire-core",[hD]:"fire-core-compat",[dD]:"fire-analytics",[fD]:"fire-analytics-compat",[pD]:"fire-app-check",[mD]:"fire-app-check-compat",[gD]:"fire-auth",[_D]:"fire-auth-compat",[yD]:"fire-rtdb",[vD]:"fire-data-connect",[ED]:"fire-rtdb-compat",[TD]:"fire-fn",[wD]:"fire-fn-compat",[bD]:"fire-iid",[SD]:"fire-iid-compat",[AD]:"fire-fcm",[CD]:"fire-fcm-compat",[RD]:"fire-perf",[ID]:"fire-perf-compat",[ND]:"fire-rc",[xD]:"fire-rc-compat",[DD]:"fire-gcs",[OD]:"fire-gcs-compat",[MD]:"fire-fst",[PD]:"fire-fst-compat",[kD]:"fire-vertex","fire-js":"fire-js",[LD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=new Map,jD=new Map,o_=new Map;function ew(n,e){try{n.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _i(n){const e=n.name;if(o_.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;o_.set(e,n);for(const t of jf.values())ew(t,n);for(const t of jD.values())ew(t,n);return!0}function qs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ii(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rs=new Fa("app","Firebase",BD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=VD;function mA(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:a_,automaticDataCollectionEnabled:!1},e),a=i.name;if(typeof a!="string"||!a)throw Rs.create("bad-app-name",{appName:String(a)});if(t||(t=iA()),!t)throw Rs.create("no-options");const o=jf.get(a);if(o){if(nl(t,o.options)&&nl(i,o.config))return o;throw Rs.create("duplicate-app",{appName:a})}const u=new $2(a);for(const m of o_.values())u.addComponent(m);const f=new zD(t,i,u);return jf.set(a,f),f}function wd(n=a_){const e=jf.get(n);if(!e&&n===a_&&iA())return mA();if(!e)throw Rs.create("no-app",{appName:n});return e}function In(n,e,t){var i;let a=(i=UD[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${a}" with version "${e}":`];o&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(f.join(" "));return}_i(new si(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="firebase-heartbeat-database",qD=1,hc="firebase-heartbeat-store";let dg=null;function pA(){return dg||(dg=dA(FD,qD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(hc)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rs.create("idb-open",{originalErrorMessage:n.message})})),dg}async function HD(n){try{const t=(await pA()).transaction(hc),i=await t.objectStore(hc).get(gA(n));return await t.done,i}catch(e){if(e instanceof vi)Dr.warn(e.message);else{const t=Rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(t.message)}}}async function tw(n,e){try{const i=(await pA()).transaction(hc,"readwrite");await i.objectStore(hc).put(e,gA(n)),await i.done}catch(t){if(t instanceof vi)Dr.warn(t.message);else{const i=Rs.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(i.message)}}}function gA(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=1024,KD=30;class QD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new YD(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=nw();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>KD){const u=WD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Dr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nw(),{heartbeatsToSend:i,unsentEntries:a}=$D(this._heartbeatsCache.heartbeats),o=Lf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Dr.warn(t),""}}}function nw(){return new Date().toISOString().substring(0,10)}function $D(n,e=GD){const t=[];let i=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),iw(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),iw(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class YD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lA()?uA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return tw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return tw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function iw(n){return Lf(JSON.stringify({version:2,heartbeats:n})).length}function WD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(n){_i(new si("platform-logger",e=>new uD(e),"PRIVATE")),_i(new si("heartbeat",e=>new QD(e),"PRIVATE")),In(s_,JT,n),In(s_,JT,"esm2017"),In("fire-js","")}XD("");var rw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Is,_A;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,R){function b(){}b.prototype=R.prototype,O.D=R.prototype,O.prototype=new b,O.prototype.constructor=O,O.C=function(N,k,P){for(var I=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)I[pe-2]=arguments[pe];return R.prototype[k].apply(N,I)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(O,R,b){b||(b=0);var N=Array(16);if(typeof R=="string")for(var k=0;16>k;++k)N[k]=R.charCodeAt(b++)|R.charCodeAt(b++)<<8|R.charCodeAt(b++)<<16|R.charCodeAt(b++)<<24;else for(k=0;16>k;++k)N[k]=R[b++]|R[b++]<<8|R[b++]<<16|R[b++]<<24;R=O.g[0],b=O.g[1],k=O.g[2];var P=O.g[3],I=R+(P^b&(k^P))+N[0]+3614090360&4294967295;R=b+(I<<7&4294967295|I>>>25),I=P+(k^R&(b^k))+N[1]+3905402710&4294967295,P=R+(I<<12&4294967295|I>>>20),I=k+(b^P&(R^b))+N[2]+606105819&4294967295,k=P+(I<<17&4294967295|I>>>15),I=b+(R^k&(P^R))+N[3]+3250441966&4294967295,b=k+(I<<22&4294967295|I>>>10),I=R+(P^b&(k^P))+N[4]+4118548399&4294967295,R=b+(I<<7&4294967295|I>>>25),I=P+(k^R&(b^k))+N[5]+1200080426&4294967295,P=R+(I<<12&4294967295|I>>>20),I=k+(b^P&(R^b))+N[6]+2821735955&4294967295,k=P+(I<<17&4294967295|I>>>15),I=b+(R^k&(P^R))+N[7]+4249261313&4294967295,b=k+(I<<22&4294967295|I>>>10),I=R+(P^b&(k^P))+N[8]+1770035416&4294967295,R=b+(I<<7&4294967295|I>>>25),I=P+(k^R&(b^k))+N[9]+2336552879&4294967295,P=R+(I<<12&4294967295|I>>>20),I=k+(b^P&(R^b))+N[10]+4294925233&4294967295,k=P+(I<<17&4294967295|I>>>15),I=b+(R^k&(P^R))+N[11]+2304563134&4294967295,b=k+(I<<22&4294967295|I>>>10),I=R+(P^b&(k^P))+N[12]+1804603682&4294967295,R=b+(I<<7&4294967295|I>>>25),I=P+(k^R&(b^k))+N[13]+4254626195&4294967295,P=R+(I<<12&4294967295|I>>>20),I=k+(b^P&(R^b))+N[14]+2792965006&4294967295,k=P+(I<<17&4294967295|I>>>15),I=b+(R^k&(P^R))+N[15]+1236535329&4294967295,b=k+(I<<22&4294967295|I>>>10),I=R+(k^P&(b^k))+N[1]+4129170786&4294967295,R=b+(I<<5&4294967295|I>>>27),I=P+(b^k&(R^b))+N[6]+3225465664&4294967295,P=R+(I<<9&4294967295|I>>>23),I=k+(R^b&(P^R))+N[11]+643717713&4294967295,k=P+(I<<14&4294967295|I>>>18),I=b+(P^R&(k^P))+N[0]+3921069994&4294967295,b=k+(I<<20&4294967295|I>>>12),I=R+(k^P&(b^k))+N[5]+3593408605&4294967295,R=b+(I<<5&4294967295|I>>>27),I=P+(b^k&(R^b))+N[10]+38016083&4294967295,P=R+(I<<9&4294967295|I>>>23),I=k+(R^b&(P^R))+N[15]+3634488961&4294967295,k=P+(I<<14&4294967295|I>>>18),I=b+(P^R&(k^P))+N[4]+3889429448&4294967295,b=k+(I<<20&4294967295|I>>>12),I=R+(k^P&(b^k))+N[9]+568446438&4294967295,R=b+(I<<5&4294967295|I>>>27),I=P+(b^k&(R^b))+N[14]+3275163606&4294967295,P=R+(I<<9&4294967295|I>>>23),I=k+(R^b&(P^R))+N[3]+4107603335&4294967295,k=P+(I<<14&4294967295|I>>>18),I=b+(P^R&(k^P))+N[8]+1163531501&4294967295,b=k+(I<<20&4294967295|I>>>12),I=R+(k^P&(b^k))+N[13]+2850285829&4294967295,R=b+(I<<5&4294967295|I>>>27),I=P+(b^k&(R^b))+N[2]+4243563512&4294967295,P=R+(I<<9&4294967295|I>>>23),I=k+(R^b&(P^R))+N[7]+1735328473&4294967295,k=P+(I<<14&4294967295|I>>>18),I=b+(P^R&(k^P))+N[12]+2368359562&4294967295,b=k+(I<<20&4294967295|I>>>12),I=R+(b^k^P)+N[5]+4294588738&4294967295,R=b+(I<<4&4294967295|I>>>28),I=P+(R^b^k)+N[8]+2272392833&4294967295,P=R+(I<<11&4294967295|I>>>21),I=k+(P^R^b)+N[11]+1839030562&4294967295,k=P+(I<<16&4294967295|I>>>16),I=b+(k^P^R)+N[14]+4259657740&4294967295,b=k+(I<<23&4294967295|I>>>9),I=R+(b^k^P)+N[1]+2763975236&4294967295,R=b+(I<<4&4294967295|I>>>28),I=P+(R^b^k)+N[4]+1272893353&4294967295,P=R+(I<<11&4294967295|I>>>21),I=k+(P^R^b)+N[7]+4139469664&4294967295,k=P+(I<<16&4294967295|I>>>16),I=b+(k^P^R)+N[10]+3200236656&4294967295,b=k+(I<<23&4294967295|I>>>9),I=R+(b^k^P)+N[13]+681279174&4294967295,R=b+(I<<4&4294967295|I>>>28),I=P+(R^b^k)+N[0]+3936430074&4294967295,P=R+(I<<11&4294967295|I>>>21),I=k+(P^R^b)+N[3]+3572445317&4294967295,k=P+(I<<16&4294967295|I>>>16),I=b+(k^P^R)+N[6]+76029189&4294967295,b=k+(I<<23&4294967295|I>>>9),I=R+(b^k^P)+N[9]+3654602809&4294967295,R=b+(I<<4&4294967295|I>>>28),I=P+(R^b^k)+N[12]+3873151461&4294967295,P=R+(I<<11&4294967295|I>>>21),I=k+(P^R^b)+N[15]+530742520&4294967295,k=P+(I<<16&4294967295|I>>>16),I=b+(k^P^R)+N[2]+3299628645&4294967295,b=k+(I<<23&4294967295|I>>>9),I=R+(k^(b|~P))+N[0]+4096336452&4294967295,R=b+(I<<6&4294967295|I>>>26),I=P+(b^(R|~k))+N[7]+1126891415&4294967295,P=R+(I<<10&4294967295|I>>>22),I=k+(R^(P|~b))+N[14]+2878612391&4294967295,k=P+(I<<15&4294967295|I>>>17),I=b+(P^(k|~R))+N[5]+4237533241&4294967295,b=k+(I<<21&4294967295|I>>>11),I=R+(k^(b|~P))+N[12]+1700485571&4294967295,R=b+(I<<6&4294967295|I>>>26),I=P+(b^(R|~k))+N[3]+2399980690&4294967295,P=R+(I<<10&4294967295|I>>>22),I=k+(R^(P|~b))+N[10]+4293915773&4294967295,k=P+(I<<15&4294967295|I>>>17),I=b+(P^(k|~R))+N[1]+2240044497&4294967295,b=k+(I<<21&4294967295|I>>>11),I=R+(k^(b|~P))+N[8]+1873313359&4294967295,R=b+(I<<6&4294967295|I>>>26),I=P+(b^(R|~k))+N[15]+4264355552&4294967295,P=R+(I<<10&4294967295|I>>>22),I=k+(R^(P|~b))+N[6]+2734768916&4294967295,k=P+(I<<15&4294967295|I>>>17),I=b+(P^(k|~R))+N[13]+1309151649&4294967295,b=k+(I<<21&4294967295|I>>>11),I=R+(k^(b|~P))+N[4]+4149444226&4294967295,R=b+(I<<6&4294967295|I>>>26),I=P+(b^(R|~k))+N[11]+3174756917&4294967295,P=R+(I<<10&4294967295|I>>>22),I=k+(R^(P|~b))+N[2]+718787259&4294967295,k=P+(I<<15&4294967295|I>>>17),I=b+(P^(k|~R))+N[9]+3951481745&4294967295,O.g[0]=O.g[0]+R&4294967295,O.g[1]=O.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,O.g[2]=O.g[2]+k&4294967295,O.g[3]=O.g[3]+P&4294967295}i.prototype.u=function(O,R){R===void 0&&(R=O.length);for(var b=R-this.blockSize,N=this.B,k=this.h,P=0;P<R;){if(k==0)for(;P<=b;)a(this,O,P),P+=this.blockSize;if(typeof O=="string"){for(;P<R;)if(N[k++]=O.charCodeAt(P++),k==this.blockSize){a(this,N),k=0;break}}else for(;P<R;)if(N[k++]=O[P++],k==this.blockSize){a(this,N),k=0;break}}this.h=k,this.o+=R},i.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var R=1;R<O.length-8;++R)O[R]=0;var b=8*this.o;for(R=O.length-8;R<O.length;++R)O[R]=b&255,b/=256;for(this.u(O),O=Array(16),R=b=0;4>R;++R)for(var N=0;32>N;N+=8)O[b++]=this.g[R]>>>N&255;return O};function o(O,R){var b=f;return Object.prototype.hasOwnProperty.call(b,O)?b[O]:b[O]=R(O)}function u(O,R){this.h=R;for(var b=[],N=!0,k=O.length-1;0<=k;k--){var P=O[k]|0;N&&P==R||(b[k]=P,N=!1)}this.g=b}var f={};function m(O){return-128<=O&&128>O?o(O,function(R){return new u([R|0],0>R?-1:0)}):new u([O|0],0>O?-1:0)}function p(O){if(isNaN(O)||!isFinite(O))return E;if(0>O)return V(p(-O));for(var R=[],b=1,N=0;O>=b;N++)R[N]=O/b|0,b*=4294967296;return new u(R,0)}function y(O,R){if(O.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(O.charAt(0)=="-")return V(y(O.substring(1),R));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=p(Math.pow(R,8)),N=E,k=0;k<O.length;k+=8){var P=Math.min(8,O.length-k),I=parseInt(O.substring(k,k+P),R);8>P?(P=p(Math.pow(R,P)),N=N.j(P).add(p(I))):(N=N.j(b),N=N.add(p(I)))}return N}var E=m(0),w=m(1),S=m(16777216);n=u.prototype,n.m=function(){if(j(this))return-V(this).m();for(var O=0,R=1,b=0;b<this.g.length;b++){var N=this.i(b);O+=(0<=N?N:4294967296+N)*R,R*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(x(this))return"0";if(j(this))return"-"+V(this).toString(O);for(var R=p(Math.pow(O,6)),b=this,N="";;){var k=W(b,R).g;b=z(b,k.j(R));var P=((0<b.g.length?b.g[0]:b.h)>>>0).toString(O);if(b=k,x(b))return P+N;for(;6>P.length;)P="0"+P;N=P+N}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function x(O){if(O.h!=0)return!1;for(var R=0;R<O.g.length;R++)if(O.g[R]!=0)return!1;return!0}function j(O){return O.h==-1}n.l=function(O){return O=z(this,O),j(O)?-1:x(O)?0:1};function V(O){for(var R=O.g.length,b=[],N=0;N<R;N++)b[N]=~O.g[N];return new u(b,~O.h).add(w)}n.abs=function(){return j(this)?V(this):this},n.add=function(O){for(var R=Math.max(this.g.length,O.g.length),b=[],N=0,k=0;k<=R;k++){var P=N+(this.i(k)&65535)+(O.i(k)&65535),I=(P>>>16)+(this.i(k)>>>16)+(O.i(k)>>>16);N=I>>>16,P&=65535,I&=65535,b[k]=I<<16|P}return new u(b,b[b.length-1]&-2147483648?-1:0)};function z(O,R){return O.add(V(R))}n.j=function(O){if(x(this)||x(O))return E;if(j(this))return j(O)?V(this).j(V(O)):V(V(this).j(O));if(j(O))return V(this.j(V(O)));if(0>this.l(S)&&0>O.l(S))return p(this.m()*O.m());for(var R=this.g.length+O.g.length,b=[],N=0;N<2*R;N++)b[N]=0;for(N=0;N<this.g.length;N++)for(var k=0;k<O.g.length;k++){var P=this.i(N)>>>16,I=this.i(N)&65535,pe=O.i(k)>>>16,tt=O.i(k)&65535;b[2*N+2*k]+=I*tt,G(b,2*N+2*k),b[2*N+2*k+1]+=P*tt,G(b,2*N+2*k+1),b[2*N+2*k+1]+=I*pe,G(b,2*N+2*k+1),b[2*N+2*k+2]+=P*pe,G(b,2*N+2*k+2)}for(N=0;N<R;N++)b[N]=b[2*N+1]<<16|b[2*N];for(N=R;N<2*R;N++)b[N]=0;return new u(b,0)};function G(O,R){for(;(O[R]&65535)!=O[R];)O[R+1]+=O[R]>>>16,O[R]&=65535,R++}function H(O,R){this.g=O,this.h=R}function W(O,R){if(x(R))throw Error("division by zero");if(x(O))return new H(E,E);if(j(O))return R=W(V(O),R),new H(V(R.g),V(R.h));if(j(R))return R=W(O,V(R)),new H(V(R.g),R.h);if(30<O.g.length){if(j(O)||j(R))throw Error("slowDivide_ only works with positive integers.");for(var b=w,N=R;0>=N.l(O);)b=re(b),N=re(N);var k=J(b,1),P=J(N,1);for(N=J(N,2),b=J(b,2);!x(N);){var I=P.add(N);0>=I.l(O)&&(k=k.add(b),P=I),N=J(N,1),b=J(b,1)}return R=z(O,k.j(R)),new H(k,R)}for(k=E;0<=O.l(R);){for(b=Math.max(1,Math.floor(O.m()/R.m())),N=Math.ceil(Math.log(b)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),P=p(b),I=P.j(R);j(I)||0<I.l(O);)b-=N,P=p(b),I=P.j(R);x(P)&&(P=w),k=k.add(P),O=z(O,I)}return new H(k,O)}n.A=function(O){return W(this,O).h},n.and=function(O){for(var R=Math.max(this.g.length,O.g.length),b=[],N=0;N<R;N++)b[N]=this.i(N)&O.i(N);return new u(b,this.h&O.h)},n.or=function(O){for(var R=Math.max(this.g.length,O.g.length),b=[],N=0;N<R;N++)b[N]=this.i(N)|O.i(N);return new u(b,this.h|O.h)},n.xor=function(O){for(var R=Math.max(this.g.length,O.g.length),b=[],N=0;N<R;N++)b[N]=this.i(N)^O.i(N);return new u(b,this.h^O.h)};function re(O){for(var R=O.g.length+1,b=[],N=0;N<R;N++)b[N]=O.i(N)<<1|O.i(N-1)>>>31;return new u(b,O.h)}function J(O,R){var b=R>>5;R%=32;for(var N=O.g.length-b,k=[],P=0;P<N;P++)k[P]=0<R?O.i(P+b)>>>R|O.i(P+b+1)<<32-R:O.i(P+b);return new u(k,O.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,_A=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=y,Is=u}).apply(typeof rw<"u"?rw:typeof self<"u"?self:typeof window<"u"?window:{});var ff=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yA,Qu,vA,bf,l_,EA,TA,wA;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof ff=="object"&&ff];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var v=i;h=h.split(".");for(var C=0;C<h.length-1;C++){var q=h[C];if(!(q in v))break e;v=v[q]}h=h[h.length-1],C=v[h],_=_(C),_!=C&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function o(h,_){h instanceof String&&(h+="");var v=0,C=!1,q={next:function(){if(!C&&v<h.length){var $=v++;return{value:_($,h[$]),done:!1}}return C=!0,{done:!0,value:void 0}}};return q[Symbol.iterator]=function(){return q},q}a("Array.prototype.values",function(h){return h||function(){return o(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function p(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function E(h,_,v){if(!h)throw Error();if(2<arguments.length){var C=Array.prototype.slice.call(arguments,2);return function(){var q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(q,C),h.apply(_,q)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,w.apply(null,arguments)}function S(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var C=v.slice();return C.push.apply(C,arguments),h.apply(this,C)}}function x(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(C,q,$){for(var oe=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)oe[Fe-2]=arguments[Fe];return _.prototype[q].apply(C,oe)}}function j(h){const _=h.length;if(0<_){const v=Array(_);for(let C=0;C<_;C++)v[C]=h[C];return v}return[]}function V(h,_){for(let v=1;v<arguments.length;v++){const C=arguments[v];if(m(C)){const q=h.length||0,$=C.length||0;h.length=q+$;for(let oe=0;oe<$;oe++)h[q+oe]=C[oe]}else h.push(C)}}class z{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function G(h){return/^[\s\xa0]*$/.test(h)}function H(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function W(h){return W[" "](h),h}W[" "]=function(){};var re=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function J(h,_,v){for(const C in h)_.call(v,h[C],C,h)}function O(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function R(h){const _={};for(const v in h)_[v]=h[v];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let v,C;for(let q=1;q<arguments.length;q++){C=arguments[q];for(v in C)h[v]=C[v];for(let $=0;$<b.length;$++)v=b[$],Object.prototype.hasOwnProperty.call(C,v)&&(h[v]=C[v])}}function k(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function P(h){f.setTimeout(()=>{throw h},0)}function I(){var h=Qe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class pe{constructor(){this.h=this.g=null}add(_,v){const C=tt.get();C.set(_,v),this.h?this.h.next=C:this.g=C,this.h=C}}var tt=new z(()=>new le,h=>h.reset());class le{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,_e=!1,Qe=new pe,L=()=>{const h=f.Promise.resolve(void 0);Ee=()=>{h.then(se)}};var se=()=>{for(var h;h=I();){try{h.h.call(h.g)}catch(v){P(v)}var _=tt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}_e=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var ce=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};f.addEventListener("test",v,_),f.removeEventListener("test",v,_)}catch{}return h}();function Ce(h,_){if(ue.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,C=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(re){e:{try{W(_.nodeName);var q=!0;break e}catch{}q=!1}q||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,C?(this.clientX=C.clientX!==void 0?C.clientX:C.pageX,this.clientY=C.clientY!==void 0?C.clientY:C.pageY,this.screenX=C.screenX||0,this.screenY=C.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Re[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ce.aa.h.call(this)}}x(Ce,ue);var Re={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ze="closure_listenable_"+(1e6*Math.random()|0),xe=0;function nt(h,_,v,C,q){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!C,this.ha=q,this.key=++xe,this.da=this.fa=!1}function Ke(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function mn(h){this.src=h,this.g={},this.h=0}mn.prototype.add=function(h,_,v,C,q){var $=h.toString();h=this.g[$],h||(h=this.g[$]=[],this.h++);var oe=Bn(h,_,C,q);return-1<oe?(_=h[oe],v||(_.fa=!1)):(_=new nt(_,this.src,$,!!C,q),_.fa=v,h.push(_)),_};function Yi(h,_){var v=_.type;if(v in h.g){var C=h.g[v],q=Array.prototype.indexOf.call(C,_,void 0),$;($=0<=q)&&Array.prototype.splice.call(C,q,1),$&&(Ke(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Bn(h,_,v,C){for(var q=0;q<h.length;++q){var $=h[q];if(!$.da&&$.listener==_&&$.capture==!!v&&$.ha==C)return q}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),Ur={};function Wi(h,_,v,C,q){if(Array.isArray(_)){for(var $=0;$<_.length;$++)Wi(h,_[$],v,C,q);return null}return v=qc(v),h&&h[Ze]?h.K(_,v,p(C)?!!C.capture:!1,q):Ml(h,_,v,!1,C,q)}function Ml(h,_,v,C,q,$){if(!_)throw Error("Invalid event type");var oe=p(q)?!!q.capture:!!q,Fe=kl(h);if(Fe||(h[Vr]=Fe=new mn(h)),v=Fe.add(_,v,C,oe,$),v.proxy)return v;if(C=Xa(),v.proxy=C,C.src=h,C.listener=v,h.addEventListener)ce||(q=oe),q===void 0&&(q=!1),h.addEventListener(_.toString(),C,q);else if(h.attachEvent)h.attachEvent(Ja(_.toString()),C);else if(h.addListener&&h.removeListener)h.addListener(C);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Xa(){function h(v){return _.call(h.src,h.listener,v)}const _=im;return h}function Za(h,_,v,C,q){if(Array.isArray(_))for(var $=0;$<_.length;$++)Za(h,_[$],v,C,q);else C=p(C)?!!C.capture:!!C,v=qc(v),h&&h[Ze]?(h=h.i,_=String(_).toString(),_ in h.g&&($=h.g[_],v=Bn($,v,C,q),-1<v&&(Ke($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete h.g[_],h.h--)))):h&&(h=kl(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Bn(_,v,C,q)),(v=-1<h?_[h]:null)&&Ks(v))}function Ks(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Ze])Yi(_.i,h);else{var v=h.type,C=h.proxy;_.removeEventListener?_.removeEventListener(v,C,h.capture):_.detachEvent?_.detachEvent(Ja(v),C):_.addListener&&_.removeListener&&_.removeListener(C),(v=kl(_))?(Yi(v,h),v.h==0&&(v.src=null,_[Vr]=null)):Ke(h)}}}function Ja(h){return h in Ur?Ur[h]:Ur[h]="on"+h}function im(h,_){if(h.da)h=!0;else{_=new Ce(_,this);var v=h.listener,C=h.ha||h.src;h.fa&&Ks(h),h=v.call(C,_)}return h}function kl(h){return h=h[Vr],h instanceof mn?h:null}var wn="__closure_events_fn_"+(1e9*Math.random()>>>0);function qc(h){return typeof h=="function"?h:(h[wn]||(h[wn]=function(_){return h.handleEvent(_)}),h[wn])}function Ot(){me.call(this),this.i=new mn(this),this.M=this,this.F=null}x(Ot,me),Ot.prototype[Ze]=!0,Ot.prototype.removeEventListener=function(h,_,v,C){Za(this,h,_,v,C)};function zt(h,_){var v,C=h.F;if(C)for(v=[];C;C=C.F)v.push(C);if(h=h.M,C=_.type||_,typeof _=="string")_=new ue(_,h);else if(_ instanceof ue)_.target=_.target||h;else{var q=_;_=new ue(C,h),N(_,q)}if(q=!0,v)for(var $=v.length-1;0<=$;$--){var oe=_.g=v[$];q=Xi(oe,C,!0,_)&&q}if(oe=_.g=h,q=Xi(oe,C,!0,_)&&q,q=Xi(oe,C,!1,_)&&q,v)for($=0;$<v.length;$++)oe=_.g=v[$],q=Xi(oe,C,!1,_)&&q}Ot.prototype.N=function(){if(Ot.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],C=0;C<v.length;C++)Ke(v[C]);delete h.g[_],h.h--}}this.F=null},Ot.prototype.K=function(h,_,v,C){return this.i.add(String(h),_,!1,v,C)},Ot.prototype.L=function(h,_,v,C){return this.i.add(String(h),_,!0,v,C)};function Xi(h,_,v,C){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var q=!0,$=0;$<_.length;++$){var oe=_[$];if(oe&&!oe.da&&oe.capture==v){var Fe=oe.listener,kt=oe.ha||oe.src;oe.fa&&Yi(h.i,oe),q=Fe.call(kt,C)!==!1&&q}}return q&&!C.defaultPrevented}function Hc(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function Pl(h){h.g=Hc(()=>{h.g=null,h.i&&(h.i=!1,Pl(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class rm extends me{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Pl(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qs(h){me.call(this),this.h=h,this.g={}}x(Qs,me);var jr=[];function on(h){J(h.g,function(_,v){this.g.hasOwnProperty(v)&&Ks(_)},h),h.g={}}Qs.prototype.N=function(){Qs.aa.N.call(this),on(this)},Qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ll=f.JSON.stringify,Ei=f.JSON.parse,pn=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function Vl(){}Vl.prototype.h=null;function Gc(h){return h.h||(h.h=h.i())}function Kc(){}var Ti={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){ue.call(this,"d")}x(Br,ue);function ai(){ue.call(this,"c")}x(ai,ue);var zn={},zr=null;function eo(){return zr=zr||new Ot}zn.La="serverreachability";function Ul(h){ue.call(this,zn.La,h)}x(Ul,ue);function Fr(h){const _=eo();zt(_,new Ul(_))}zn.STAT_EVENT="statevent";function to(h,_){ue.call(this,zn.STAT_EVENT,h),this.stat=_}x(to,ue);function bt(h){const _=eo();zt(_,new to(_,h))}zn.Ma="timingevent";function Qc(h,_){ue.call(this,zn.Ma,h),this.size=_}x(Qc,ue);function qr(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function Hr(){this.g=!0}Hr.prototype.xa=function(){this.g=!1};function $c(h,_,v,C,q,$){h.info(function(){if(h.g)if($)for(var oe="",Fe=$.split("&"),kt=0;kt<Fe.length;kt++){var qe=Fe[kt].split("=");if(1<qe.length){var Ht=qe[0];qe=qe[1];var Pt=Ht.split("_");oe=2<=Pt.length&&Pt[1]=="type"?oe+(Ht+"="+qe+"&"):oe+(Ht+"=redacted&")}}else oe=null;else oe=$;return"XMLHTTP REQ ("+C+") [attempt "+q+"]: "+_+`
`+v+`
`+oe})}function Yc(h,_,v,C,q,$,oe){h.info(function(){return"XMLHTTP RESP ("+C+") [ attempt "+q+"]: "+_+`
`+v+`
`+$+" "+oe})}function Gr(h,_,v,C){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Ft(h,v)+(C?" "+C:"")})}function wi(h,_){h.info(function(){return"TIMEOUT: "+_})}Hr.prototype.info=function(){};function Ft(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var C=v[h];if(!(2>C.length)){var q=C[1];if(Array.isArray(q)&&!(1>q.length)){var $=q[0];if($!="noop"&&$!="stop"&&$!="close")for(var oe=1;oe<q.length;oe++)q[oe]=""}}}}return Ll(v)}catch{return _}}var Mt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$s;function no(){}x(no,Vl),no.prototype.g=function(){return new XMLHttpRequest},no.prototype.i=function(){return{}},$s=new no;function bi(h,_,v,C){this.j=h,this.i=_,this.l=v,this.R=C||1,this.U=new Qs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jl}function jl(){this.i=null,this.g="",this.h=!1}var Kr={},Ys={};function oi(h,_,v){h.L=1,h.v=Zs(_t(_)),h.m=v,h.P=!0,Ji(h,null)}function Ji(h,_){h.F=Date.now(),dt(h),h.A=_t(h.v);var v=h.A,C=h.R;Array.isArray(C)||(C=[String(C)]),nr(v.i,"t",C),h.C=0,v=h.j.J,h.h=new jl,h.g=uh(h.j,v?_:null,!h.m),0<h.O&&(h.M=new rm(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,C=h.ca;var q="readystatechange";Array.isArray(q)||(q&&(jr[0]=q.toString()),q=jr);for(var $=0;$<q.length;$++){var oe=Wi(v,q[$],C||_.handleEvent,!1,_.h||_);if(!oe)break;_.g[oe.key]=oe}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Fr(),$c(h.i,h.u,h.A,h.l,h.R,h.m)}bi.prototype.ca=function(h){h=h.target;const _=this.M;_&&Kn(h)==3?_.j():this.Y(h)},bi.prototype.Y=function(h){try{if(h==this.g)e:{const Pt=Kn(this.g);var _=this.g.Ba();const ar=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||th(this.g)))){this.J||Pt!=4||_==7||(_==8||0>=ar?Fr(3):Fr(2)),io(this);var v=this.g.Z();this.X=v;t:if(Qr(this)){var C=th(this.g);h="";var q=C.length,$=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Dn(this);var oe="";break t}this.h.i=new f.TextDecoder}for(_=0;_<q;_++)this.h.h=!0,h+=this.h.i.decode(C[_],{stream:!($&&_==q-1)});C.length=0,this.h.g+=h,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,Yc(this.i,this.u,this.A,this.l,this.R,Pt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,kt=this.g;if((Fe=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Fe)){var qe=Fe;break t}}qe=null}if(v=qe)Gr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,On(this,v);else{this.o=!1,this.s=3,bt(12),bn(this),Dn(this);break e}}if(this.P){v=!0;let Zt;for(;!this.J&&this.C<oe.length;)if(Zt=$r(this,oe),Zt==Ys){Pt==4&&(this.s=4,bt(14),v=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==Kr){this.s=4,bt(15),Gr(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Gr(this.i,this.l,Zt,null),On(this,Zt);if(Qr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||oe.length!=0||this.h.h||(this.s=1,bt(16),v=!1),this.o=this.o&&v,!v)Gr(this.i,this.l,oe,"[Invalid Chunked Response]"),bn(this),Dn(this);else if(0<oe.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),sa(Ht),Ht.M=!0,bt(11))}}else Gr(this.i,this.l,oe,null),On(this,oe);Pt==4&&bn(this),this.o&&!this.J&&(Pt==4?ah(this.j,this):(this.o=!1,dt(this)))}else cm(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),bn(this),Dn(this)}}}catch{}finally{}};function Qr(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function $r(h,_){var v=h.C,C=_.indexOf(`
`,v);return C==-1?Ys:(v=Number(_.substring(v,C)),isNaN(v)?Kr:(C+=1,C+v>_.length?Ys:(_=_.slice(C,C+v),h.C=C+v,_)))}bi.prototype.cancel=function(){this.J=!0,bn(this)};function dt(h){h.S=Date.now()+h.I,Bl(h,h.I)}function Bl(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=qr(w(h.ba,h),_)}function io(h){h.B&&(f.clearTimeout(h.B),h.B=null)}bi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(wi(this.i,this.A),this.L!=2&&(Fr(),bt(17)),bn(this),this.s=2,Dn(this)):Bl(this,this.S-h)};function Dn(h){h.j.G==0||h.J||ah(h.j,h)}function bn(h){io(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,on(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function On(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Yr(v.h,h))){if(!h.K&&Yr(v.h,h)&&v.G==3){try{var C=v.Da.g.parse(_)}catch{C=null}if(Array.isArray(C)&&C.length==3){var q=C;if(q[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)mo(v),ho(v);else break e;Xl(v),bt(18)}}else v.za=q[1],0<v.za-v.T&&37500>q[2]&&v.F&&v.v==0&&!v.C&&(v.C=qr(w(v.Za,v),6e3));if(1>=Wc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else sr(v,11)}else if((h.K||v.g==h)&&mo(v),!G(_))for(q=v.Da.g.parse(_),_=0;_<q.length;_++){let qe=q[_];if(v.T=qe[0],qe=qe[1],v.G==2)if(qe[0]=="c"){v.K=qe[1],v.ia=qe[2];const Ht=qe[3];Ht!=null&&(v.la=Ht,v.j.info("VER="+v.la));const Pt=qe[4];Pt!=null&&(v.Aa=Pt,v.j.info("SVER="+v.Aa));const ar=qe[5];ar!=null&&typeof ar=="number"&&0<ar&&(C=1.5*ar,v.L=C,v.j.info("backChannelRequestTimeoutMs_="+C)),C=v;const Zt=h.g;if(Zt){const xi=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xi){var $=C.h;$.g||xi.indexOf("spdy")==-1&&xi.indexOf("quic")==-1&&xi.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Wr($,$.h),$.h=null))}if(C.D){const Jl=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Jl&&(C.ya=Jl,$e(C.I,C.D,Jl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),C=v;var oe=h;if(C.qa=lh(C,C.J?C.ia:null,C.W),oe.K){Fn(C.h,oe);var Fe=oe,kt=C.L;kt&&(Fe.I=kt),Fe.B&&(io(Fe),dt(Fe)),C.g=oe}else rh(C);0<v.i.length&&fo(v)}else qe[0]!="stop"&&qe[0]!="close"||sr(v,7);else v.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?sr(v,7):Yl(v):qe[0]!="noop"&&v.l&&v.l.ta(qe),v.v=0)}}Fr(4)}catch{}}var sm=class{constructor(h,_){this.g=h,this.map=_}};function zl(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Wc(h){return h.h?1:h.g?h.g.size:0}function Yr(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Wr(h,_){h.g?h.g.add(_):h.h=_}function Fn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}zl.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function gn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return j(h.i)}function Xc(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,C=0;C<v;C++)_.push(h[C]);return _}_=[],v=0;for(C in h)_[v++]=h[C];return _}function am(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const C in h)_[v++]=C;return _}}}function Ws(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=am(h),C=Xc(h),q=C.length,$=0;$<q;$++)_.call(void 0,C[$],v&&v[$],h)}var ql=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ro(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var C=h[v].indexOf("="),q=null;if(0<=C){var $=h[v].substring(0,C);q=h[v].substring(C+1)}else $=h[v];_($,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function er(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof er){this.h=h.h,Xr(this,h.j),this.o=h.o,this.g=h.g,Xs(this,h.s),this.l=h.l;var _=h.i,v=new Si;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),so(this,v),this.m=h.m}else h&&(_=String(h).match(ql))?(this.h=!1,Xr(this,_[1]||"",!0),this.o=Zr(_[2]||""),this.g=Zr(_[3]||"",!0),Xs(this,_[4]),this.l=Zr(_[5]||"",!0),so(this,_[6]||"",!0),this.m=Zr(_[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}er.prototype.toString=function(){var h=[],_=this.j;_&&h.push(qn(_,Hl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(qn(_,Hl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(qn(v,v.charAt(0)=="/"?Gl:Zc,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",qn(v,um)),h.join("")};function _t(h){return new er(h)}function Xr(h,_,v){h.j=v?Zr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Xs(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function so(h,_,v){_ instanceof Si?(h.i=_,Kl(h.i,h.h)):(v||(_=qn(_,lm)),h.i=new Si(_,h.h))}function $e(h,_,v){h.i.set(_,v)}function Zs(h){return $e(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Zr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function qn(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,om),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function om(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Hl=/[#\/\?@]/g,Zc=/[#\?:]/g,Gl=/[#\?]/g,lm=/[#\?@]/g,um=/#/g;function Si(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Hn(h){h.g||(h.g=new Map,h.h=0,h.i&&ro(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=Si.prototype,n.add=function(h,_){Hn(this),this.i=null,h=ir(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ao(h,_){Hn(h),_=ir(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function tr(h,_){return Hn(h),_=ir(h,_),h.g.has(_)}n.forEach=function(h,_){Hn(this),this.g.forEach(function(v,C){v.forEach(function(q){h.call(_,q,C,this)},this)},this)},n.na=function(){Hn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let C=0;C<_.length;C++){const q=h[C];for(let $=0;$<q.length;$++)v.push(_[C])}return v},n.V=function(h){Hn(this);let _=[];if(typeof h=="string")tr(this,h)&&(_=_.concat(this.g.get(ir(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return Hn(this),this.i=null,h=ir(this,h),tr(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function nr(h,_,v){ao(h,_),0<v.length&&(h.i=null,h.g.set(ir(h,_),j(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var C=_[v];const $=encodeURIComponent(String(C)),oe=this.V(C);for(C=0;C<oe.length;C++){var q=$;oe[C]!==""&&(q+="="+encodeURIComponent(String(oe[C]))),h.push(q)}}return this.i=h.join("&")};function ir(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Kl(h,_){_&&!h.j&&(Hn(h),h.i=null,h.g.forEach(function(v,C){var q=C.toLowerCase();C!=q&&(ao(this,C),nr(this,q,v))},h)),h.j=_}function Jc(h,_){const v=new Hr;if(f.Image){const C=new Image;C.onload=S(Gn,v,"TestLoadImage: loaded",!0,_,C),C.onerror=S(Gn,v,"TestLoadImage: error",!1,_,C),C.onabort=S(Gn,v,"TestLoadImage: abort",!1,_,C),C.ontimeout=S(Gn,v,"TestLoadImage: timeout",!1,_,C),f.setTimeout(function(){C.ontimeout&&C.ontimeout()},1e4),C.src=h}else _(!1)}function Js(h,_){const v=new Hr,C=new AbortController,q=setTimeout(()=>{C.abort(),Gn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:C.signal}).then($=>{clearTimeout(q),$.ok?Gn(v,"TestPingServer: ok",!0,_):Gn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(q),Gn(v,"TestPingServer: error",!1,_)})}function Gn(h,_,v,C,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),C(v)}catch{}}function ea(){this.g=new pn}function Ai(h,_,v){const C=v||"";try{Ws(h,function(q,$){let oe=q;p(q)&&(oe=Ll(q)),_.push(C+$+"="+encodeURIComponent(oe))})}catch(q){throw _.push(C+"type="+encodeURIComponent("_badmap")),q}}function Jr(h){this.l=h.Ub||null,this.j=h.eb||!1}x(Jr,Vl),Jr.prototype.g=function(){return new rr(this.l,this.j)},Jr.prototype.i=function(h){return function(){return h}}({});function rr(h,_){Ot.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(rr,Ot),n=rr.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ri(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ci(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ql(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ql(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ci(this):Ri(this),this.readyState==3&&Ql(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ci(this))},n.Qa=function(h){this.g&&(this.response=h,Ci(this))},n.ga=function(){this.g&&Ci(this)};function Ci(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ri(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ri(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function $l(h){let _="";return J(h,function(v,C){_+=C,_+=":",_+=v,_+=`\r
`}),_}function qt(h,_,v){e:{for(C in v){var C=!1;break e}C=!0}C||(v=$l(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):$e(h,_,v))}function Je(h){Ot.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Je,Ot);var oo=/^https?$/i,ta=["POST","PUT"];n=Je.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,C){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$s.g(),this.v=this.o?Gc(this.o):Gc($s),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch($){eh(this,$);return}if(h=v||"",v=new Map(this.headers),C)if(Object.getPrototypeOf(C)===Object.prototype)for(var q in C)v.set(q,C[q]);else if(typeof C.keys=="function"&&typeof C.get=="function")for(const $ of C.keys())v.set($,C.get($));else throw Error("Unknown input type for opt_headers: "+String(C));C=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),q=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ta,_,void 0))||C||q||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,oe]of v)this.g.setRequestHeader($,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{na(this),this.u=!0,this.g.send(h),this.u=!1}catch($){eh(this,$)}};function eh(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,lo(h),Ii(h)}function lo(h){h.A||(h.A=!0,zt(h,"complete"),zt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,zt(this,"complete"),zt(this,"abort"),Ii(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ii(this,!0)),Je.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?uo(this):this.bb())},n.bb=function(){uo(this)};function uo(h){if(h.h&&typeof u<"u"&&(!h.v[1]||Kn(h)!=4||h.Z()!=2)){if(h.u&&Kn(h)==4)Hc(h.Ea,0,h);else if(zt(h,"readystatechange"),Kn(h)==4){h.h=!1;try{const oe=h.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var C;if(C=oe===0){var q=String(h.D).match(ql)[1]||null;!q&&f.self&&f.self.location&&(q=f.self.location.protocol.slice(0,-1)),C=!oo.test(q?q.toLowerCase():"")}v=C}if(v)zt(h,"complete"),zt(h,"success");else{h.m=6;try{var $=2<Kn(h)?h.g.statusText:""}catch{$=""}h.l=$+" ["+h.Z()+"]",lo(h)}}finally{Ii(h)}}}}function Ii(h,_){if(h.g){na(h);const v=h.g,C=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||zt(h,"ready");try{v.onreadystatechange=C}catch{}}}function na(h){h.I&&(f.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Kn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Ei(_)}};function th(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function cm(h){const _={};h=(h.g&&2<=Kn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let C=0;C<h.length;C++){if(G(h[C]))continue;var v=k(h[C]);const q=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=_[q]||[];_[q]=$,$.push(v)}O(_,function(C){return C.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ia(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function co(h){this.Aa=0,this.i=[],this.j=new Hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ia("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ia("baseRetryDelayMs",5e3,h),this.cb=ia("retryDelaySeedMs",1e4,h),this.Wa=ia("forwardChannelMaxRetries",2,h),this.wa=ia("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new zl(h&&h.concurrentRequestLimit),this.Da=new ea,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=co.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,C){bt(0),this.W=h,this.H=_||{},v&&C!==void 0&&(this.H.OSID=v,this.H.OAID=C),this.F=this.X,this.I=lh(this,null,this.W),fo(this)};function Yl(h){if(nh(h),h.G==3){var _=h.U++,v=_t(h.I);if($e(v,"SID",h.K),$e(v,"RID",_),$e(v,"TYPE","terminate"),ra(h,v),_=new bi(h,h.j,_),_.L=2,_.v=Zs(_t(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=_.v,v=!0),v||(_.g=uh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),dt(_)}oh(h)}function ho(h){h.g&&(sa(h),h.g.cancel(),h.g=null)}function nh(h){ho(h),h.u&&(f.clearTimeout(h.u),h.u=null),mo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function fo(h){if(!Fl(h.h)&&!h.s){h.s=!0;var _=h.Ga;Ee||L(),_e||(Ee(),_e=!0),Qe.add(_,h),h.B=0}}function hm(h,_){return Wc(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=qr(w(h.Ga,h,_),Zl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const q=new bi(this,this.j,h);let $=this.o;if(this.S&&($?($=R($),N($,this.S)):$=this.S),this.m!==null||this.O||(q.H=$,$=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var C=this.i[v];if("__data__"in C.map&&(C=C.map.__data__,typeof C=="string")){C=C.length;break t}C=void 0}if(C===void 0)break;if(_+=C,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=ih(this,q,_),v=_t(this.I),$e(v,"RID",h),$e(v,"CVER",22),this.D&&$e(v,"X-HTTP-Session-Id",this.D),ra(this,v),$&&(this.O?_="headers="+encodeURIComponent(String($l($)))+"&"+_:this.m&&qt(v,this.m,$)),Wr(this.h,q),this.Ua&&$e(v,"TYPE","init"),this.P?($e(v,"$req",_),$e(v,"SID","null"),q.T=!0,oi(q,v,null)):oi(q,v,_),this.G=2}}else this.G==3&&(h?Wl(this,h):this.i.length==0||Fl(this.h)||Wl(this))};function Wl(h,_){var v;_?v=_.l:v=h.U++;const C=_t(h.I);$e(C,"SID",h.K),$e(C,"RID",v),$e(C,"AID",h.T),ra(h,C),h.m&&h.o&&qt(C,h.m,h.o),v=new bi(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=ih(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Wr(h.h,v),oi(v,C,_)}function ra(h,_){h.H&&J(h.H,function(v,C){$e(_,C,v)}),h.l&&Ws({},function(v,C){$e(_,C,v)})}function ih(h,_,v){v=Math.min(h.i.length,v);var C=h.l?w(h.l.Na,h.l,h):null;e:{var q=h.i;let $=-1;for(;;){const oe=["count="+v];$==-1?0<v?($=q[0].g,oe.push("ofs="+$)):$=0:oe.push("ofs="+$);let Fe=!0;for(let kt=0;kt<v;kt++){let qe=q[kt].g;const Ht=q[kt].map;if(qe-=$,0>qe)$=Math.max(0,q[kt].g-100),Fe=!1;else try{Ai(Ht,oe,"req"+qe+"_")}catch{C&&C(Ht)}}if(Fe){C=oe.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,C}function rh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;Ee||L(),_e||(Ee(),_e=!0),Qe.add(_,h),h.v=0}}function Xl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=qr(w(h.Fa,h),Zl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,sh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=qr(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),ho(this),sh(this))};function sa(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function sh(h){h.g=new bi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=_t(h.qa);$e(_,"RID","rpc"),$e(_,"SID",h.K),$e(_,"AID",h.T),$e(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&$e(_,"TO",h.ja),$e(_,"TYPE","xmlhttp"),ra(h,_),h.m&&h.o&&qt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Zs(_t(_)),v.m=null,v.P=!0,Ji(v,h)}n.Za=function(){this.C!=null&&(this.C=null,ho(this),Xl(this),bt(19))};function mo(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function ah(h,_){var v=null;if(h.g==_){mo(h),sa(h),h.g=null;var C=2}else if(Yr(h.h,_))v=_.D,Fn(h.h,_),C=1;else return;if(h.G!=0){if(_.o)if(C==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var q=h.B;C=eo(),zt(C,new Qc(C,v)),fo(h)}else rh(h);else if(q=_.s,q==3||q==0&&0<_.X||!(C==1&&hm(h,_)||C==2&&Xl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),q){case 1:sr(h,5);break;case 4:sr(h,10);break;case 3:sr(h,6);break;default:sr(h,2)}}}function Zl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function sr(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),C=h.Xa;const q=!C;C=new er(C||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Xr(C,"https"),Zs(C),q?Jc(C.toString(),v):Js(C.toString(),v)}else bt(2);h.G=0,h.l&&h.l.sa(_),oh(h),nh(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function oh(h){if(h.G=0,h.ka=[],h.l){const _=gn(h.h);(_.length!=0||h.i.length!=0)&&(V(h.ka,_),V(h.ka,h.i),h.h.i.length=0,j(h.i),h.i.length=0),h.l.ra()}}function lh(h,_,v){var C=v instanceof er?_t(v):new er(v);if(C.g!="")_&&(C.g=_+"."+C.g),Xs(C,C.s);else{var q=f.location;C=q.protocol,_=_?_+"."+q.hostname:q.hostname,q=+q.port;var $=new er(null);C&&Xr($,C),_&&($.g=_),q&&Xs($,q),v&&($.l=v),C=$}return v=h.D,_=h.ya,v&&_&&$e(C,v,_),$e(C,"VER",h.la),ra(h,C),C}function uh(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Je(new Jr({eb:v})):new Je(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}n=ch.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function po(){}po.prototype.g=function(h,_){return new _n(h,_)};function _n(h,_){Ot.call(this),this.g=new co(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!G(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!G(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ni(this)}x(_n,Ot),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){Yl(this.g)},_n.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=Ll(h),h=v);_.i.push(new sm(_.Ya++,h)),_.G==3&&fo(_)},_n.prototype.N=function(){this.g.l=null,delete this.j,Yl(this.g),delete this.g,_n.aa.N.call(this)};function hh(h){Br.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}x(hh,Br);function fh(){ai.call(this),this.status=1}x(fh,ai);function Ni(h){this.g=h}x(Ni,ch),Ni.prototype.ua=function(){zt(this.g,"a")},Ni.prototype.ta=function(h){zt(this.g,new hh(h))},Ni.prototype.sa=function(h){zt(this.g,new fh)},Ni.prototype.ra=function(){zt(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,wA=function(){return new po},TA=function(){return eo()},EA=zn,l_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mt.NO_ERROR=0,Mt.TIMEOUT=8,Mt.HTTP_ERROR=6,bf=Mt,Zi.COMPLETE="complete",vA=Zi,Kc.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",Ot.prototype.listen=Ot.prototype.K,Qu=Kc,Je.prototype.listenOnce=Je.prototype.L,Je.prototype.getLastError=Je.prototype.Ka,Je.prototype.getLastErrorCode=Je.prototype.Ba,Je.prototype.getStatus=Je.prototype.Z,Je.prototype.getResponseJson=Je.prototype.Oa,Je.prototype.getResponseText=Je.prototype.oa,Je.prototype.send=Je.prototype.ea,Je.prototype.setWithCredentials=Je.prototype.Ha,yA=Je}).apply(typeof ff<"u"?ff:typeof self<"u"?self:typeof window<"u"?window:{});const sw="@firebase/firestore",aw="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}hn.UNAUTHENTICATED=new hn(null),hn.GOOGLE_CREDENTIALS=new hn("google-credentials-uid"),hn.FIRST_PARTY=new hn("first-party-uid"),hn.MOCK_USER=new hn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bl="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Nc("@firebase/firestore");function Ho(){return Ma.logLevel}function he(n,...e){if(Ma.logLevel<=Le.DEBUG){const t=e.map(ey);Ma.debug(`Firestore (${bl}): ${n}`,...t)}}function Or(n,...e){if(Ma.logLevel<=Le.ERROR){const t=e.map(ey);Ma.error(`Firestore (${bl}): ${n}`,...t)}}function il(n,...e){if(Ma.logLevel<=Le.WARN){const t=e.map(ey);Ma.warn(`Firestore (${bl}): ${n}`,...t)}}function ey(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n="Unexpected state"){const e=`FIRESTORE (${bl}) INTERNAL ASSERTION FAILED: `+n;throw Or(e),new Error(e)}function et(n,e){n||be()}function Ne(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends vi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ZD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(hn.UNAUTHENTICATED))}shutdown(){}}class JD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eO{constructor(e){this.t=e,this.currentUser=hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){et(this.o===void 0);let i=this.i;const a=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let o=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Nr,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const m=o;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},f=m=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Nr)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(et(typeof i.accessToken=="string"),new bA(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new hn(e)}}class tO{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=hn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class nO{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new tO(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(hn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ow{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iO{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ii(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){et(this.o===void 0);const i=o=>{o.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,he("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const a=o=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ow(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(et(typeof t.token=="string"),this.R=t.token,new ow(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=rO(40);for(let o=0;o<a.length;++o)i.length<20&&a[o]<t&&(i+=e.charAt(a[o]%62))}return i}}function Be(n,e){return n<e?-1:n>e?1:0}function rl(n,e,t){return n.length===e.length&&n.every((i,a)=>t(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=-62135596800,uw=1e6;class jt{static now(){return jt.fromMillis(Date.now())}static fromDate(e){return jt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*uw);return new jt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<lw)throw new fe(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uw}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-lw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new jt(0,0))}static max(){return new Ae(new jt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw="__name__";class Vi{constructor(e,t,i){t===void 0?t=0:t>e.length&&be(),i===void 0?i=e.length-t:i>e.length-t&&be(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Vi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Vi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const o=Vi.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=Vi.isNumericId(e),a=Vi.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?Vi.extractNumericId(e).compare(Vi.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Is.fromString(e.substring(4,e.length-2))}}class ht extends Vi{construct(e,t,i){return new ht(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new fe(ne.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(a=>a.length>0))}return new ht(t)}static emptyPath(){return new ht([])}}const sO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Vi{construct(e,t,i){return new rn(e,t,i)}static isValidIdentifier(e){return sO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cw}static keyField(){return new rn([cw])}static fromServerFormat(e){const t=[];let i="",a=0;const o=()=>{if(i.length===0)throw new fe(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new fe(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new fe(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,a+=2}else f==="`"?(u=!u,a++):f!=="."||u?(i+=f,a++):(o(),a++)}if(o(),u)throw new fe(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(ht.fromString(e))}static fromName(e){return new ve(ht.fromString(e).popFirst(5))}static empty(){return new ve(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ht.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ht.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new ht(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=-1;function aO(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,a=Ae.fromTimestamp(i===1e9?new jt(t+1,0):new jt(t,i));return new ks(a,ve.empty(),e)}function oO(n){return new ks(n.readTime,n.key,fc)}class ks{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ks(Ae.min(),ve.empty(),fc)}static max(){return new ks(Ae.max(),ve.empty(),fc)}}function lO(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(n){if(n.code!==ne.FAILED_PRECONDITION||n.message!==uO)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&be(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te((i,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):te.reject(t)}static resolve(e){return new te((t,i)=>{t(e)})}static reject(e){return new te((t,i)=>{i(e)})}static waitFor(e){return new te((t,i)=>{let a=0,o=0,u=!1;e.forEach(f=>{++a,f.next(()=>{++o,u&&o===a&&t()},m=>i(m))}),u=!0,o===a&&t()})}static or(e){let t=te.resolve(!1);for(const i of e)t=t.next(a=>a?te.resolve(a):i());return t}static forEach(e,t){const i=[];return e.forEach((a,o)=>{i.push(t.call(this,a,o))}),this.waitFor(i)}static mapArray(e,t){return new te((i,a)=>{const o=e.length,u=new Array(o);let f=0;for(let m=0;m<o;m++){const p=m;t(e[p]).next(y=>{u[p]=y,++f,f===o&&i(u)},y=>a(y))}})}static doWhile(e,t){return new te((i,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):i()};o()})}}function hO(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Al(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}bd.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=-1;function Sd(n){return n==null}function Bf(n){return n===0&&1/n==-1/0}function fO(n){return typeof n=="number"&&Number.isInteger(n)&&!Bf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="";function dO(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hw(e)),e=mO(n.get(t),e);return hw(e)}function mO(n,e){let t=e;const i=n.length;for(let a=0;a<i;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case AA:t+="";break;default:t+=o}}return t}function hw(n){return n+AA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Hs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function CA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dt=class u_{constructor(e,t){this.comparator=e,this.root=t||Ns.EMPTY}insert(e,t){return new u_(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ns.BLACK,null,null))}remove(e){return new u_(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ns.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new df(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new df(this.root,e,this.comparator,!1)}getReverseIterator(){return new df(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new df(this.root,e,this.comparator,!0)}},df=class{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ns=class wr{constructor(e,t,i,a,o){this.key=e,this.value=t,this.color=i??wr.RED,this.left=a??wr.EMPTY,this.right=o??wr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,o){return new wr(e??this.key,t??this.value,i??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const o=i(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,i),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return wr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return wr.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw be();const e=this.left.check();if(e!==this.right.check())throw be();return e+(this.isRed()?0:1)}};Ns.EMPTY=null,Ns.RED=!0,Ns.BLACK=!1;Ns.EMPTY=new class{constructor(){this.size=0}get key(){throw be()}get value(){throw be()}get color(){throw be()}get left(){throw be()}get right(){throw be()}copy(e,t,i,a,o){return this}insert(e,t,i){return new Ns(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new dw(this.data.getIterator())}getIteratorFrom(e){return new dw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=i.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class dw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new Un([])}unionWith(e){let t=new Bt(rn.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rl(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new RA("Invalid base64 string: "+o):o}}(e);return new sn(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new sn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const pO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ps(n){if(et(!!n),typeof n=="string"){let e=0;const t=pO.exec(n);if(et(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ls(n){return typeof n=="string"?sn.fromBase64String(n):sn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA="server_timestamp",NA="__type__",xA="__previous_value__",DA="__local_write_time__";function ny(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[NA])===null||t===void 0?void 0:t.stringValue)===IA}function Ad(n){const e=n.mapValue.fields[xA];return ny(e)?Ad(e):e}function dc(n){const e=Ps(n.mapValue.fields[DA].timestampValue);return new jt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e,t,i,a,o,u,f,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=p}}const zf="(default)";class mc{constructor(e,t){this.projectId=e,this.database=t||zf}static empty(){return new mc("","")}get isDefaultDatabase(){return this.database===zf}isEqual(e){return e instanceof mc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA="__type__",_O="__max__",mf={mapValue:{}},MA="__vector__",Ff="value";function Vs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ny(n)?4:vO(n)?9007199254740991:yO(n)?10:11:be()}function Fi(n,e){if(n===e)return!0;const t=Vs(n);if(t!==Vs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dc(n).isEqual(dc(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Ps(a.timestampValue),f=Ps(o.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Ls(a.bytesValue).isEqual(Ls(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return At(a.geoPointValue.latitude)===At(o.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return At(a.integerValue)===At(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=At(a.doubleValue),f=At(o.doubleValue);return u===f?Bf(u)===Bf(f):isNaN(u)&&isNaN(f)}return!1}(n,e);case 9:return rl(n.arrayValue.values||[],e.arrayValue.values||[],Fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},f=o.mapValue.fields||{};if(fw(u)!==fw(f))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(f[m]===void 0||!Fi(u[m],f[m])))return!1;return!0}(n,e);default:return be()}}function pc(n,e){return(n.values||[]).find(t=>Fi(t,e))!==void 0}function sl(n,e){if(n===e)return 0;const t=Vs(n),i=Vs(e);if(t!==i)return Be(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(n.booleanValue,e.booleanValue);case 2:return function(o,u){const f=At(o.integerValue||o.doubleValue),m=At(u.integerValue||u.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(n,e);case 3:return mw(n.timestampValue,e.timestampValue);case 4:return mw(dc(n),dc(e));case 5:return Be(n.stringValue,e.stringValue);case 6:return function(o,u){const f=Ls(o),m=Ls(u);return f.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const f=o.split("/"),m=u.split("/");for(let p=0;p<f.length&&p<m.length;p++){const y=Be(f[p],m[p]);if(y!==0)return y}return Be(f.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const f=Be(At(o.latitude),At(u.latitude));return f!==0?f:Be(At(o.longitude),At(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return pw(n.arrayValue,e.arrayValue);case 10:return function(o,u){var f,m,p,y;const E=o.fields||{},w=u.fields||{},S=(f=E[Ff])===null||f===void 0?void 0:f.arrayValue,x=(m=w[Ff])===null||m===void 0?void 0:m.arrayValue,j=Be(((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0,((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0);return j!==0?j:pw(S,x)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===mf.mapValue&&u===mf.mapValue)return 0;if(o===mf.mapValue)return 1;if(u===mf.mapValue)return-1;const f=o.fields||{},m=Object.keys(f),p=u.fields||{},y=Object.keys(p);m.sort(),y.sort();for(let E=0;E<m.length&&E<y.length;++E){const w=Be(m[E],y[E]);if(w!==0)return w;const S=sl(f[m[E]],p[y[E]]);if(S!==0)return S}return Be(m.length,y.length)}(n.mapValue,e.mapValue);default:throw be()}}function mw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Be(n,e);const t=Ps(n),i=Ps(e),a=Be(t.seconds,i.seconds);return a!==0?a:Be(t.nanos,i.nanos)}function pw(n,e){const t=n.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const o=sl(t[a],i[a]);if(o)return o}return Be(t.length,i.length)}function al(n){return c_(n)}function c_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ps(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ls(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",a=!0;for(const o of t.values||[])a?a=!1:i+=",",i+=c_(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of i)o?o=!1:a+=",",a+=`${u}:${c_(t.fields[u])}`;return a+"}"}(n.mapValue):be()}function Sf(n){switch(Vs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ad(n);return e?16+Sf(e):16;case 5:return 2*n.stringValue.length;case 6:return Ls(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,o)=>a+Sf(o),0)}(n.arrayValue);case 10:case 11:return function(i){let a=0;return Hs(i.fields,(o,u)=>{a+=o.length+Sf(u)}),a}(n.mapValue);default:throw be()}}function gw(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function h_(n){return!!n&&"integerValue"in n}function iy(n){return!!n&&"arrayValue"in n}function _w(n){return!!n&&"nullValue"in n}function yw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Af(n){return!!n&&"mapValue"in n}function yO(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[OA])===null||t===void 0?void 0:t.stringValue)===MA}function Zu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Hs(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Zu(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Zu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function vO(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_O}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Af(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zu(t)}setAll(e){let t=rn.emptyPath(),i={},a=[];e.forEach((u,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,i,a),i={},a=[],t=f.popLast()}u?i[f.lastSegment()]=Zu(u):a.push(f.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,i,a)}delete(e){const t=this.field(e.popLast());Af(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];Af(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){Hs(t,(a,o)=>e[a]=o);for(const a of i)delete e[a]}clone(){return new Cn(Zu(this.value))}}function kA(n){const e=[];return Hs(n.fields,(t,i)=>{const a=new rn([t]);if(Af(i)){const o=kA(i.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,i,a,o,u,f){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=o,this.data=u,this.documentState=f}static newInvalidDocument(e){return new fn(e,0,Ae.min(),Ae.min(),Ae.min(),Cn.empty(),0)}static newFoundDocument(e,t,i,a){return new fn(e,1,t,Ae.min(),i,a,0)}static newNoDocument(e,t){return new fn(e,2,t,Ae.min(),Ae.min(),Cn.empty(),0)}static newUnknownDocument(e,t){return new fn(e,3,t,Ae.min(),Ae.min(),Cn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.position=e,this.inclusive=t}}function vw(n,e,t){let i=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?i=ve.comparator(ve.fromName(u.referenceValue),t.key):i=sl(u,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ew(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fi(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t="asc"){this.field=e,this.dir=t}}function EO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{}class xt extends PA{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new wO(e,t,i):t==="array-contains"?new AO(e,i):t==="in"?new CO(e,i):t==="not-in"?new RO(e,i):t==="array-contains-any"?new IO(e,i):new xt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new bO(e,i):new SO(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(sl(t,this.value)):t!==null&&Vs(this.value)===Vs(t)&&this.matchesComparison(sl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yi extends PA{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new yi(e,t)}matches(e){return LA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function LA(n){return n.op==="and"}function VA(n){return TO(n)&&LA(n)}function TO(n){for(const e of n.filters)if(e instanceof yi)return!1;return!0}function f_(n){if(n instanceof xt)return n.field.canonicalString()+n.op.toString()+al(n.value);if(VA(n))return n.filters.map(e=>f_(e)).join(",");{const e=n.filters.map(t=>f_(t)).join(",");return`${n.op}(${e})`}}function UA(n,e){return n instanceof xt?function(i,a){return a instanceof xt&&i.op===a.op&&i.field.isEqual(a.field)&&Fi(i.value,a.value)}(n,e):n instanceof yi?function(i,a){return a instanceof yi&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((o,u,f)=>o&&UA(u,a.filters[f]),!0):!1}(n,e):void be()}function jA(n){return n instanceof xt?function(t){return`${t.field.canonicalString()} ${t.op} ${al(t.value)}`}(n):n instanceof yi?function(t){return t.op.toString()+" {"+t.getFilters().map(jA).join(" ,")+"}"}(n):"Filter"}class wO extends xt{constructor(e,t,i){super(e,t,i),this.key=ve.fromName(i.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class bO extends xt{constructor(e,t){super(e,"in",t),this.keys=BA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class SO extends xt{constructor(e,t){super(e,"not-in",t),this.keys=BA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function BA(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ve.fromName(i.referenceValue))}class AO extends xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return iy(t)&&pc(t.arrayValue,this.value)}}class CO extends xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&pc(this.value.arrayValue,t)}}class RO extends xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(pc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!pc(this.value.arrayValue,t)}}class IO extends xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!iy(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>pc(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,t=null,i=[],a=[],o=null,u=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=o,this.startAt=u,this.endAt=f,this.le=null}}function Tw(n,e=null,t=[],i=[],a=null,o=null,u=null){return new NO(n,e,t,i,a,o,u)}function ry(n){const e=Ne(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>f_(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Sd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>al(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>al(i)).join(",")),e.le=t}return e.le}function sy(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!UA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ew(n.startAt,e.startAt)&&Ew(n.endAt,e.endAt)}function d_(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t=null,i=[],a=[],o=null,u="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=o,this.limitType=u,this.startAt=f,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function xO(n,e,t,i,a,o,u,f){return new xc(n,e,t,i,a,o,u,f)}function ay(n){return new xc(n)}function ww(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zA(n){return n.collectionGroup!==null}function Ju(n){const e=Ne(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new Bt(rn.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(p=>{p.isInequality()&&(f=f.add(p.field))})}),f})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Hf(o,i))}),t.has(rn.keyField().canonicalString())||e.he.push(new Hf(rn.keyField(),i))}return e.he}function Ui(n){const e=Ne(n);return e.Pe||(e.Pe=DO(e,Ju(n))),e.Pe}function DO(n,e){if(n.limitType==="F")return Tw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Hf(a.field,o)});const t=n.endAt?new qf(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new qf(n.startAt.position,n.startAt.inclusive):null;return Tw(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function m_(n,e){const t=n.filters.concat([e]);return new xc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function p_(n,e,t){return new xc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Cd(n,e){return sy(Ui(n),Ui(e))&&n.limitType===e.limitType}function FA(n){return`${ry(Ui(n))}|lt:${n.limitType}`}function Go(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(a=>jA(a)).join(", ")}]`),Sd(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>al(a)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>al(a)).join(",")),`Target(${i})`}(Ui(n))}; limitType=${n.limitType})`}function Rd(n,e){return e.isFoundDocument()&&function(i,a){const o=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):ve.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,e)&&function(i,a){for(const o of Ju(i))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(i,a){for(const o of i.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(i,a){return!(i.startAt&&!function(u,f,m){const p=vw(u,f,m);return u.inclusive?p<=0:p<0}(i.startAt,Ju(i),a)||i.endAt&&!function(u,f,m){const p=vw(u,f,m);return u.inclusive?p>=0:p>0}(i.endAt,Ju(i),a))}(n,e)}function OO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qA(n){return(e,t)=>{let i=!1;for(const a of Ju(n)){const o=MO(a,e,t);if(o!==0)return o;i=i||a.field.isKeyField()}return 0}}function MO(n,e,t){const i=n.field.isKeyField()?ve.comparator(e.key,t.key):function(o,u,f){const m=u.data.field(o),p=f.data.field(o);return m!==null&&p!==null?sl(m,p):be()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return be()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,o]of i)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Hs(this.inner,(t,i)=>{for(const[a,o]of i)e(a,o)})}isEmpty(){return CA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=new Dt(ve.comparator);function Mr(){return kO}const HA=new Dt(ve.comparator);function $u(...n){let e=HA;for(const t of n)e=e.insert(t.key,t);return e}function GA(n){let e=HA;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ra(){return ec()}function KA(){return ec()}function ec(){return new Ha(n=>n.toString(),(n,e)=>n.isEqual(e))}const PO=new Dt(ve.comparator),LO=new Bt(ve.comparator);function Ue(...n){let e=LO;for(const t of n)e=e.add(t);return e}const VO=new Bt(Be);function UO(){return VO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bf(e)?"-0":e}}function QA(n){return{integerValue:""+n}}function jO(n,e){return fO(e)?QA(e):oy(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(){this._=void 0}}function BO(n,e,t){return n instanceof Gf?function(a,o){const u={fields:{[NA]:{stringValue:IA},[DA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&ny(o)&&(o=Ad(o)),o&&(u.fields[xA]=o),{mapValue:u}}(t,e):n instanceof ol?YA(n,e):n instanceof gc?WA(n,e):function(a,o){const u=$A(a,o),f=bw(u)+bw(a.Ie);return h_(u)&&h_(a.Ie)?QA(f):oy(a.serializer,f)}(n,e)}function zO(n,e,t){return n instanceof ol?YA(n,e):n instanceof gc?WA(n,e):t}function $A(n,e){return n instanceof Kf?function(i){return h_(i)||function(o){return!!o&&"doubleValue"in o}(i)}(e)?e:{integerValue:0}:null}class Gf extends Id{}class ol extends Id{constructor(e){super(),this.elements=e}}function YA(n,e){const t=XA(e);for(const i of n.elements)t.some(a=>Fi(a,i))||t.push(i);return{arrayValue:{values:t}}}class gc extends Id{constructor(e){super(),this.elements=e}}function WA(n,e){let t=XA(e);for(const i of n.elements)t=t.filter(a=>!Fi(a,i));return{arrayValue:{values:t}}}class Kf extends Id{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function bw(n){return At(n.integerValue||n.doubleValue)}function XA(n){return iy(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,t){this.field=e,this.transform=t}}function qO(n,e){return n.field.isEqual(e.field)&&function(i,a){return i instanceof ol&&a instanceof ol||i instanceof gc&&a instanceof gc?rl(i.elements,a.elements,Fi):i instanceof Kf&&a instanceof Kf?Fi(i.Ie,a.Ie):i instanceof Gf&&a instanceof Gf}(n.transform,e.transform)}class HO{constructor(e,t){this.version=e,this.transformResults=t}}class mi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mi}static exists(e){return new mi(void 0,e)}static updateTime(e){return new mi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Nd{}function ZA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new eC(n.key,mi.none()):new Dc(n.key,n.data,mi.none());{const t=n.data,i=Cn.empty();let a=new Bt(rn.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?i.delete(o):i.set(o,u),a=a.add(o)}return new Gs(n.key,i,new Un(a.toArray()),mi.none())}}function GO(n,e,t){n instanceof Dc?function(a,o,u){const f=a.value.clone(),m=Aw(a.fieldTransforms,o,u.transformResults);f.setAll(m),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):n instanceof Gs?function(a,o,u){if(!Cf(a.precondition,o))return void o.convertToUnknownDocument(u.version);const f=Aw(a.fieldTransforms,o,u.transformResults),m=o.data;m.setAll(JA(a)),m.setAll(f),o.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function tc(n,e,t,i){return n instanceof Dc?function(o,u,f,m){if(!Cf(o.precondition,u))return f;const p=o.value.clone(),y=Cw(o.fieldTransforms,m,u);return p.setAll(y),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,e,t,i):n instanceof Gs?function(o,u,f,m){if(!Cf(o.precondition,u))return f;const p=Cw(o.fieldTransforms,m,u),y=u.data;return y.setAll(JA(o)),y.setAll(p),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),f===null?null:f.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(o,u,f){return Cf(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f}(n,e,t)}function KO(n,e){let t=null;for(const i of n.fieldTransforms){const a=e.data.field(i.field),o=$A(i.transform,a||null);o!=null&&(t===null&&(t=Cn.empty()),t.set(i.field,o))}return t||null}function Sw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&rl(i,a,(o,u)=>qO(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Dc extends Nd{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Gs extends Nd{constructor(e,t,i,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function JA(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Aw(n,e,t){const i=new Map;et(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,f=e.data.field(o.field);i.set(o.field,zO(u,f,t[a]))}return i}function Cw(n,e,t){const i=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);i.set(a.field,BO(o,u,e))}return i}class eC extends Nd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class QO extends Nd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&GO(o,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=tc(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=tc(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=KA();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let f=this.applyToLocalView(u,o.mutatedFields);f=t.has(a.key)?null:f;const m=ZA(u,f);m!==null&&i.set(a.key,m),u.isValidDocument()||u.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ue())}isEqual(e){return this.batchId===e.batchId&&rl(this.mutations,e.mutations,(t,i)=>Sw(t,i))&&rl(this.baseMutations,e.baseMutations,(t,i)=>Sw(t,i))}}class ly{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){et(e.mutations.length===i.length);let a=function(){return PO}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,i[u].version);return new ly(e,t,i,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt,Ge;function XO(n){switch(n){case ne.OK:return be();case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return be()}}function tC(n){if(n===void 0)return Or("GRPC error has no .code"),ne.UNKNOWN;switch(n){case Nt.OK:return ne.OK;case Nt.CANCELLED:return ne.CANCELLED;case Nt.UNKNOWN:return ne.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return ne.INTERNAL;case Nt.UNAVAILABLE:return ne.UNAVAILABLE;case Nt.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Nt.NOT_FOUND:return ne.NOT_FOUND;case Nt.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Nt.ABORTED:return ne.ABORTED;case Nt.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Nt.DATA_LOSS:return ne.DATA_LOSS;default:return be()}}(Ge=Nt||(Nt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=new Is([4294967295,4294967295],0);function Rw(n){const e=ZO().encode(n),t=new _A;return t.update(e),new Uint8Array(t.digest())}function Iw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Is([t,i],0),new Is([a,o],0)]}class uy{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Yu(`Invalid padding: ${t}`);if(i<0)throw new Yu(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Yu(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Yu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Is.fromNumber(this.Ee)}Ae(e,t,i){let a=e.add(t.multiply(Is.fromNumber(i)));return a.compare(JO)===1&&(a=new Is([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Rw(e),[i,a]=Iw(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(i,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new uy(o,a,t);return i.forEach(f=>u.insert(f)),u}insert(e){if(this.Ee===0)return;const t=Rw(e),[i,a]=Iw(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(i,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Yu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,t,i,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,Oc.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new xd(Ae.min(),a,new Dt(Be),Mr(),Ue())}}class Oc{constructor(e,t,i,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Oc(i,t,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,i,a){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=a}}class nC{constructor(e,t){this.targetId=e,this.ge=t}}class iC{constructor(e,t,i=sn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class Nw{constructor(){this.pe=0,this.ye=xw(),this.we=sn.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ue(),t=Ue(),i=Ue();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:be()}}),new Oc(this.we,this.Se,e,t,i)}Me(){this.be=!1,this.ye=xw()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,et(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class eM{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Mr(),this.$e=pf(),this.Ke=pf(),this.Ue=new Dt(Be)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:be()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,i=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(d_(o))if(i===0){const u=new ve(o.path);this.ze(t,u,fn.newNoDocument(u,Ae.min()))}else et(i===1);else{const u=this.et(t);if(u!==i){const f=this.tt(e),m=f?this.nt(f,e,u):1;if(m!==0){this.Ye(t);const p=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,p)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:o=0}=t;let u,f;try{u=Ls(i).toUint8Array()}catch(m){if(m instanceof RA)return il("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new uy(u,a,o)}catch(m){return il(m instanceof Yu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.Ee===0?null:f}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let a=0;return i.forEach(o=>{const u=this.ke.it(),f=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(f)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const f=this.Xe(u);if(f){if(o.current&&d_(f.target)){const m=new ve(f.target.path);this._t(m).has(u)||this.ut(u,m)||this.ze(u,m,fn.newNoDocument(m,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let i=Ue();this.Ke.forEach((o,u)=>{let f=!0;u.forEachWhile(m=>{const p=this.Xe(m);return!p||p.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new xd(e,t,this.Ue,this.Qe,i);return this.Qe=Mr(),this.$e=pf(),this.Ke=pf(),this.Ue=new Dt(Be),a}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Nw,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Bt(Be),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Bt(Be),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Nw),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function pf(){return new Dt(ve.comparator)}function xw(){return new Dt(ve.comparator)}const tM={asc:"ASCENDING",desc:"DESCENDING"},nM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iM={and:"AND",or:"OR"};class rM{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function g_(n,e){return n.useProto3Json||Sd(e)?e:{value:e}}function Qf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function sM(n,e){return Qf(n,e.toTimestamp())}function ji(n){return et(!!n),Ae.fromTimestamp(function(t){const i=Ps(t);return new jt(i.seconds,i.nanos)}(n))}function cy(n,e){return __(n,e).canonicalString()}function __(n,e){const t=function(a){return new ht(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function sC(n){const e=ht.fromString(n);return et(cC(e)),e}function y_(n,e){return cy(n.databaseId,e.path)}function mg(n,e){const t=sC(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(oC(t))}function aC(n,e){return cy(n.databaseId,e)}function aM(n){const e=sC(n);return e.length===4?ht.emptyPath():oC(e)}function v_(n){return new ht(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function oC(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Dw(n,e,t){return{name:y_(n,e),fields:t.value.mapValue.fields}}function oM(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:be()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(p,y){return p.useProto3Json?(et(y===void 0||typeof y=="string"),sn.fromBase64String(y||"")):(et(y===void 0||y instanceof Buffer||y instanceof Uint8Array),sn.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,f=u&&function(p){const y=p.code===void 0?ne.UNKNOWN:tC(p.code);return new fe(y,p.message||"")}(u);t=new iC(i,a,o,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=mg(n,i.document.name),o=ji(i.document.updateTime),u=i.document.createTime?ji(i.document.createTime):Ae.min(),f=new Cn({mapValue:{fields:i.document.fields}}),m=fn.newFoundDocument(a,o,u,f),p=i.targetIds||[],y=i.removedTargetIds||[];t=new Rf(p,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=mg(n,i.document),o=i.readTime?ji(i.readTime):Ae.min(),u=fn.newNoDocument(a,o),f=i.removedTargetIds||[];t=new Rf([],f,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=mg(n,i.document),o=i.removedTargetIds||[];t=new Rf([],o,a,null)}else{if(!("filter"in e))return be();{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:o}=i,u=new WO(a,o),f=i.targetId;t=new nC(f,u)}}return t}function lM(n,e){let t;if(e instanceof Dc)t={update:Dw(n,e.key,e.value)};else if(e instanceof eC)t={delete:y_(n,e.key)};else if(e instanceof Gs)t={update:Dw(n,e.key,e.data),updateMask:_M(e.fieldMask)};else{if(!(e instanceof QO))return be();t={verify:y_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(o,u){const f=u.transform;if(f instanceof Gf)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ol)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof gc)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Kf)return{fieldPath:u.field.canonicalString(),increment:f.Ie};throw be()}(0,i))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:sM(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:be()}(n,e.precondition)),t}function uM(n,e){return n&&n.length>0?(et(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?ji(a.updateTime):ji(o);return u.isEqual(Ae.min())&&(u=ji(o)),new HO(u,a.transformResults||[])}(t,e))):[]}function cM(n,e){return{documents:[aC(n,e.path)]}}function hM(n,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=aC(n,a);const o=function(p){if(p.length!==0)return uC(yi.create(p,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(p){if(p.length!==0)return p.map(y=>function(w){return{field:Ko(w.field),direction:mM(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const f=g_(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ht:t,parent:a}}function fM(n){let e=aM(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){et(i===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(E){const w=lC(E);return w instanceof yi&&VA(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(E){return E.map(w=>function(x){return new Hf(Qo(x.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(t.orderBy));let f=null;t.limit&&(f=function(E){let w;return w=typeof E=="object"?E.value:E,Sd(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(E){const w=!!E.before,S=E.values||[];return new qf(S,w)}(t.startAt));let p=null;return t.endAt&&(p=function(E){const w=!E.before,S=E.values||[];return new qf(S,w)}(t.endAt)),xO(e,a,u,o,f,"F",m,p)}function dM(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function lC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Qo(t.unaryFilter.field);return xt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=Qo(t.unaryFilter.field);return xt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qo(t.unaryFilter.field);return xt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Qo(t.unaryFilter.field);return xt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return be()}}(n):n.fieldFilter!==void 0?function(t){return xt.create(Qo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return be()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return yi.create(t.compositeFilter.filters.map(i=>lC(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return be()}}(t.compositeFilter.op))}(n):be()}function mM(n){return tM[n]}function pM(n){return nM[n]}function gM(n){return iM[n]}function Ko(n){return{fieldPath:n.canonicalString()}}function Qo(n){return rn.fromServerFormat(n.fieldPath)}function uC(n){return n instanceof xt?function(t){if(t.op==="=="){if(yw(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NAN"}};if(_w(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yw(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NAN"}};if(_w(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ko(t.field),op:pM(t.op),value:t.value}}}(n):n instanceof yi?function(t){const i=t.getFilters().map(a=>uC(a));return i.length===1?i[0]:{compositeFilter:{op:gM(t.op),filters:i}}}(n):be()}function _M(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function cC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,i,a,o=Ae.min(),u=Ae.min(),f=sn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new As(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yM{constructor(e){this.Tt=e}}function vM(n){const e=fM({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?p_(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EM{constructor(){this.Tn=new TM}addToCollectionParentIndex(e,t){return this.Tn.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(ks.min())}updateCollectionGroup(e,t,i){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class TM{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new Bt(ht.comparator),o=!a.has(i);return this.index[t]=a.add(i),o}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Bt(ht.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},hC=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(hC,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new ll(0)}static Un(){return new ll(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="LruGarbageCollector",wM=1048576;function kw([n,e],[t,i]){const a=Be(n,t);return a===0?Be(e,i):a}class bM{constructor(e){this.Hn=e,this.buffer=new Bt(kw),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();kw(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class SM{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){he(Mw,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Al(t)?he(Mw,"Ignoring IndexedDB error during garbage collection: ",t):await Sl(t)}await this.er(3e5)})}}class AM{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return te.resolve(bd.ae);const i=new bM(t);return this.tr.forEachTarget(e,a=>i.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>i.Zn(a))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),te.resolve(Ow)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ow):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,a,o,u,f,m,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),a=this.params.maximumSequenceNumbersToCollect):a=E,u=Date.now(),this.nthSequenceNumber(e,a))).next(E=>(i=E,f=Date.now(),this.removeTargets(e,i,t))).next(E=>(o=E,m=Date.now(),this.removeOrphanedDocuments(e,i))).next(E=>(p=Date.now(),Ho()<=Le.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(f-u)+`ms
	Removed ${o} targets in `+(m-f)+`ms
	Removed ${E} documents in `+(p-m)+`ms
Total Duration: ${p-y}ms`),te.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:E})))}}function CM(n,e){return new AM(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RM{constructor(){this.changes=new Ha(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?te.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(i!==null&&tc(i.mutation,a,Un.empty(),jt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ue()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ue()){const a=Ra();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,i).next(o=>{let u=$u();return o.forEach((f,m)=>{u=u.insert(f,m.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const i=Ra();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ue()))}populateOverlays(e,t,i){const a=[];return i.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,f)=>{t.set(u,f)})})}computeViews(e,t,i,a){let o=Mr();const u=ec(),f=function(){return ec()}();return t.forEach((m,p)=>{const y=i.get(p.key);a.has(p.key)&&(y===void 0||y.mutation instanceof Gs)?o=o.insert(p.key,p):y!==void 0?(u.set(p.key,y.mutation.getFieldMask()),tc(y.mutation,p,y.mutation.getFieldMask(),jt.now())):u.set(p.key,Un.empty())}),this.recalculateAndSaveOverlays(e,o).next(m=>(m.forEach((p,y)=>u.set(p,y)),t.forEach((p,y)=>{var E;return f.set(p,new IM(y,(E=u.get(p))!==null&&E!==void 0?E:null))}),f))}recalculateAndSaveOverlays(e,t){const i=ec();let a=new Dt((u,f)=>u-f),o=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const f of u)f.keys().forEach(m=>{const p=t.get(m);if(p===null)return;let y=i.get(m)||Un.empty();y=f.applyToLocalView(p,y),i.set(m,y);const E=(a.get(f.batchId)||Ue()).add(m);a=a.insert(f.batchId,E)})}).next(()=>{const u=[],f=a.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),p=m.key,y=m.value,E=KA();y.forEach(w=>{if(!o.has(w)){const S=ZA(t.get(w),i.get(w));S!==null&&E.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,p,E))}return te.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,a){return function(u){return ve.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-o.size):te.resolve(Ra());let f=fc,m=o;return u.next(p=>te.forEach(p,(y,E)=>(f<E.largestBatchId&&(f=E.largestBatchId),o.get(y)?te.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{m=m.insert(y,w)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,m,p,Ue())).next(y=>({batchId:f,changes:GA(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(i=>{let a=$u();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const o=t.collectionGroup;let u=$u();return this.indexManager.getCollectionParents(e,o).next(f=>te.forEach(f,m=>{const p=function(E,w){return new xc(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,m.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,i,a).next(y=>{y.forEach((E,w)=>{u=u.insert(E,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,i,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,a))).next(u=>{o.forEach((m,p)=>{const y=p.getKey();u.get(y)===null&&(u=u.insert(y,fn.newInvalidDocument(y)))});let f=$u();return u.forEach((m,p)=>{const y=o.get(m);y!==void 0&&tc(y.mutation,p,Un.empty(),jt.now()),Rd(t,p)&&(f=f.insert(m,p))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return te.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:ji(a.createTime)}}(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:vM(a.bundledQuery),readTime:ji(a.readTime)}}(t)),te.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(){this.overlays=new Dt(ve.comparator),this.Rr=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ra();return te.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&i.set(a,o)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((a,o)=>{this.Et(e,t,o)}),te.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Rr.get(i);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(i)),te.resolve()}getOverlaysForCollection(e,t,i){const a=Ra(),o=t.length+1,u=new ve(t.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const m=f.getNext().value,p=m.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===o&&m.largestBatchId>i&&a.set(m.getKey(),m)}return te.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let o=new Dt((p,y)=>p-y);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>i){let y=o.get(p.largestBatchId);y===null&&(y=Ra(),o=o.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const f=Ra(),m=o.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((p,y)=>f.set(p,y)),!(f.size()>=a)););return te.resolve(f)}Et(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(i.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new YO(t,i));let o=this.Rr.get(t);o===void 0&&(o=Ue(),this.Rr.set(t,o)),this.Rr.set(t,o.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OM{constructor(){this.sessionToken=sn.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.Vr=new Bt(Yt.mr),this.gr=new Bt(Yt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new Yt(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new Yt(e,t))}Sr(e,t){e.forEach(i=>this.removeReference(i,t))}br(e){const t=new ve(new ht([])),i=new Yt(t,e),a=new Yt(t,e+1),o=[];return this.gr.forEachInRange([i,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ve(new ht([])),i=new Yt(t,e),a=new Yt(t,e+1);let o=Ue();return this.gr.forEachInRange([i,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new Yt(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Yt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ve.comparator(e.key,t.key)||Be(e.Cr,t.Cr)}static pr(e,t){return Be(e.Cr,t.Cr)||ve.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Bt(Yt.mr)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new $O(o,t,i,a);this.mutationQueue.push(u);for(const f of a)this.Mr=this.Mr.add(new Yt(f.key,o)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return te.resolve(u)}lookupMutationBatch(e,t){return te.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.Nr(i),o=a<0?0:a;return te.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?ty:this.Fr-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Yt(t,0),a=new Yt(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([i,a],u=>{const f=this.Or(u.Cr);o.push(f)}),te.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Bt(Be);return t.forEach(a=>{const o=new Yt(a,0),u=new Yt(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],f=>{i=i.add(f.Cr)})}),te.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let o=i;ve.isDocumentKey(o)||(o=o.child(""));const u=new Yt(new ve(o),0);let f=new Bt(Be);return this.Mr.forEachWhile(m=>{const p=m.key.path;return!!i.isPrefixOf(p)&&(p.length===a&&(f=f.add(m.Cr)),!0)},u),te.resolve(this.Br(f))}Br(e){const t=[];return e.forEach(i=>{const a=this.Or(i);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){et(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return te.forEach(t.mutations,a=>{const o=new Yt(a.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new Yt(t,0),a=this.Mr.firstAfterOrEqual(i);return te.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e){this.kr=e,this.docs=function(){return new Dt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return te.resolve(i?i.document.mutableCopy():fn.newInvalidDocument(t))}getEntries(e,t){let i=Mr();return t.forEach(a=>{const o=this.docs.get(a);i=i.insert(a,o?o.document.mutableCopy():fn.newInvalidDocument(a))}),te.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let o=Mr();const u=t.path,f=new ve(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:p,value:{document:y}}=m.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||lO(oO(y),i)<=0||(a.has(y.key)||Rd(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return te.resolve(o)}getAllFromCollectionGroup(e,t,i,a){be()}qr(e,t){return te.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new PM(this)}getSize(e){return te.resolve(this.size)}}class PM extends RM{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(i)}),te.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e){this.persistence=e,this.Qr=new Ha(t=>ry(t),sy),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.$r=0,this.Kr=new hy,this.targetCount=0,this.Ur=ll.Kn()}forEachTarget(e,t){return this.Qr.forEach((i,a)=>t(a)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),te.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new ll(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.zn(t),te.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,i){let a=0;const o=[];return this.Qr.forEach((u,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)}),te.waitFor(o).next(()=>a)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return te.resolve(i)}addMatchingKeys(e,t,i){return this.Kr.yr(t,i),te.resolve()}removeMatchingKeys(e,t,i){this.Kr.Sr(t,i);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),te.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),te.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Kr.vr(t);return te.resolve(i)}containsKey(e,t){return te.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new bd(0),this.zr=!1,this.zr=!0,this.jr=new OM,this.referenceDelegate=e(this),this.Hr=new LM(this),this.indexManager=new EM,this.remoteDocumentCache=function(a){return new kM(a)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new yM(t),this.Yr=new xM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new DM,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new MM(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){he("MemoryPersistence","Starting transaction:",e);const a=new VM(this.Gr.next());return this.referenceDelegate.Zr(),i(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return te.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class VM extends cO{constructor(e){super(),this.currentSequenceNumber=e}}class fy{constructor(e){this.persistence=e,this.ti=new hy,this.ni=null}static ri(e){return new fy(e)}get ii(){if(this.ni)return this.ni;throw be()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),te.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),te.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.ii,i=>{const a=ve.fromPath(i);return this.si(e,a).next(o=>{o||t.removeEntry(a,Ae.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return te.or([()=>te.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class $f{constructor(e,t){this.persistence=e,this.oi=new Ha(i=>dO(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=CM(this,t)}static ri(e,t){return new $f(e,t)}Zr(){}Xr(e){return te.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return te.forEach(this.oi,(i,a)=>this.ar(e,i,a).next(o=>o?te.resolve():t(a)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(f=>{f||(i++,o.removeEntry(u,Ae.min()))})).next(()=>o.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),te.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),te.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),te.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),te.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Sf(e.data.value)),t}ar(e,t,i){return te.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return te.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=a}static Yi(e,t){let i=Ue(),a=Ue();for(const o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new dy(e,t.fromCache,i,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return N2()?8:hO(dn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new UM;return this._s(e,t,u).next(f=>{if(o.result=f,this.Xi)return this.us(e,t,u,f.size)})}).next(()=>o.result)}us(e,t,i,a){return i.documentReadCount<this.es?(Ho()<=Le.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),te.resolve()):(Ho()<=Le.DEBUG&&he("QueryEngine","Query:",Go(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.ts*a?(Ho()<=Le.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ui(t))):te.resolve())}rs(e,t){if(ww(t))return te.resolve(null);let i=Ui(t);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=p_(t,null,"F"),i=Ui(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const u=Ue(...o);return this.ns.getDocuments(e,u).next(f=>this.indexManager.getMinOffset(e,i).next(m=>{const p=this.cs(t,f);return this.ls(t,p,u,m.readTime)?this.rs(e,p_(t,null,"F")):this.hs(e,p,t,m)}))})))}ss(e,t,i,a){return ww(t)||a.isEqual(Ae.min())?te.resolve(null):this.ns.getDocuments(e,i).next(o=>{const u=this.cs(t,o);return this.ls(t,u,i,a)?te.resolve(null):(Ho()<=Le.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Go(t)),this.hs(e,u,t,aO(a,fc)).next(f=>f))})}cs(e,t){let i=new Bt(qA(e));return t.forEach((a,o)=>{Rd(e,o)&&(i=i.add(o))}),i}ls(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,i){return Ho()<=Le.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Go(t)),this.ns.getDocumentsMatchingQuery(e,t,ks.min(),i)}hs(e,t,i,a){return this.ns.getDocumentsMatchingQuery(e,i,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="LocalStore",BM=3e8;class zM{constructor(e,t,i,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new Dt(Be),this.Is=new Ha(o=>ry(o),sy),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NM(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function FM(n,e,t,i){return new zM(n,e,t,i)}async function dC(n,e){const t=Ne(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],f=[];let m=Ue();for(const p of a){u.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}for(const p of o){f.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(i,m).next(p=>({Rs:p,removedBatchIds:u,addedBatchIds:f}))})})}function qM(n,e){const t=Ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(f,m,p,y){const E=p.batch,w=E.keys();let S=te.resolve();return w.forEach(x=>{S=S.next(()=>y.getEntry(m,x)).next(j=>{const V=p.docVersions.get(x);et(V!==null),j.version.compareTo(V)<0&&(E.applyToRemoteDocument(j,p),j.isValidDocument()&&(j.setReadTime(p.commitVersion),y.addEntry(j)))})}),S.next(()=>f.mutationQueue.removeMutationBatch(m,E))}(t,i,e,o).next(()=>o.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let m=Ue();for(let p=0;p<f.mutationResults.length;++p)f.mutationResults[p].transformResults.length>0&&(m=m.add(f.batch.mutations[p].key));return m}(e))).next(()=>t.localDocuments.getDocuments(i,a))})}function mC(n){const e=Ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function HM(n,e){const t=Ne(n),i=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const f=[];e.targetChanges.forEach((y,E)=>{const w=a.get(E);if(!w)return;f.push(t.Hr.removeMatchingKeys(o,y.removedDocuments,E).next(()=>t.Hr.addMatchingKeys(o,y.addedDocuments,E)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(E)!==null?S=S.withResumeToken(sn.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,i)),a=a.insert(E,S),function(j,V,z){return j.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=BM?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(w,S,y)&&f.push(t.Hr.updateTargetData(o,S))});let m=Mr(),p=Ue();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),f.push(GM(o,u,e.documentUpdates).next(y=>{m=y.Vs,p=y.fs})),!i.isEqual(Ae.min())){const y=t.Hr.getLastRemoteSnapshotVersion(o).next(E=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,i));f.push(y)}return te.waitFor(f).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,m,p)).next(()=>m)}).then(o=>(t.Ts=a,o))}function GM(n,e,t){let i=Ue(),a=Ue();return t.forEach(o=>i=i.add(o)),e.getEntries(n,i).next(o=>{let u=Mr();return t.forEach((f,m)=>{const p=o.get(f);m.isFoundDocument()!==p.isFoundDocument()&&(a=a.add(f)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(f,m.readTime),u=u.insert(f,m)):!p.isValidDocument()||m.version.compareTo(p.version)>0||m.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(m),u=u.insert(f,m)):he(my,"Ignoring outdated watch update for ",f,". Current version:",p.version," Watch version:",m.version)}),{Vs:u,fs:a}})}function KM(n,e){const t=Ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=ty),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function QM(n,e){const t=Ne(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return t.Hr.getTargetData(i,e).next(o=>o?(a=o,te.resolve(a)):t.Hr.allocateTargetId(i).next(u=>(a=new As(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=t.Ts.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function E_(n,e,t){const i=Ne(n),a=i.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",o,u=>i.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Al(u))throw u;he(my,`Failed to update sequence numbers for target ${e}: ${u}`)}i.Ts=i.Ts.remove(e),i.Is.delete(a.target)}function Pw(n,e,t){const i=Ne(n);let a=Ae.min(),o=Ue();return i.persistence.runTransaction("Execute query","readwrite",u=>function(m,p,y){const E=Ne(m),w=E.Is.get(y);return w!==void 0?te.resolve(E.Ts.get(w)):E.Hr.getTargetData(p,y)}(i,u,Ui(e)).next(f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(u,f.targetId).next(m=>{o=m})}).next(()=>i.Ps.getDocumentsMatchingQuery(u,e,t?a:Ae.min(),t?o:Ue())).next(f=>($M(i,OO(e),f),{documents:f,gs:o})))}function $M(n,e,t){let i=n.Es.get(e)||Ae.min();t.forEach((a,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),n.Es.set(e,i)}class Lw{constructor(){this.activeTargetIds=UO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YM{constructor(){this.ho=new Lw,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Lw,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="ConnectivityMonitor";class Uw{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){he(Vw,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){he(Vw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gf=null;function T_(){return gf===null?gf=function(){return 268435456+Math.round(2147483648*Math.random())}():gf++,"0x"+gf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg="RestConnection",XM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class ZM{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${a}`,this.wo=this.databaseId.database===zf?`project_id=${i}`:`project_id=${i}&database_id=${a}`}So(e,t,i,a,o){const u=T_(),f=this.bo(e,t.toUriEncodedString());he(pg,`Sending RPC '${e}' ${u}:`,f,i);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,a,o),this.vo(e,f,m,i).then(p=>(he(pg,`Received RPC '${e}' ${u}: `,p),p),p=>{throw il(pg,`RPC '${e}' ${u} failed with error: `,p,"url: ",f,"request:",i),p})}Co(e,t,i,a,o,u){return this.So(e,t,i,a,o)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),i&&i.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const i=XM[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="WebChannelConnection";class ek extends ZM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,a){const o=T_();return new Promise((u,f)=>{const m=new yA;m.setWithCredentials(!0),m.listenOnce(vA.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case bf.NO_ERROR:const y=m.getResponseJson();he(cn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),u(y);break;case bf.TIMEOUT:he(cn,`RPC '${e}' ${o} timed out`),f(new fe(ne.DEADLINE_EXCEEDED,"Request time out"));break;case bf.HTTP_ERROR:const E=m.getStatus();if(he(cn,`RPC '${e}' ${o} failed with status:`,E,"response text:",m.getResponseText()),E>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const x=function(V){const z=V.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(z)>=0?z:ne.UNKNOWN}(S.status);f(new fe(x,S.message))}else f(new fe(ne.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new fe(ne.UNAVAILABLE,"Connection failed."));break;default:be()}}finally{he(cn,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(a);he(cn,`RPC '${e}' ${o} sending request:`,a),m.send(t,"POST",p,i,15)})}Wo(e,t,i){const a=T_(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=wA(),f=TA(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const y=o.join("");he(cn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const E=u.createWebChannel(y,m);let w=!1,S=!1;const x=new JM({Fo:V=>{S?he(cn,`Not sending because RPC '${e}' stream ${a} is closed:`,V):(w||(he(cn,`Opening RPC '${e}' stream ${a} transport.`),E.open(),w=!0),he(cn,`RPC '${e}' stream ${a} sending:`,V),E.send(V))},Mo:()=>E.close()}),j=(V,z,G)=>{V.listen(z,H=>{try{G(H)}catch(W){setTimeout(()=>{throw W},0)}})};return j(E,Qu.EventType.OPEN,()=>{S||(he(cn,`RPC '${e}' stream ${a} transport opened.`),x.Qo())}),j(E,Qu.EventType.CLOSE,()=>{S||(S=!0,he(cn,`RPC '${e}' stream ${a} transport closed`),x.Ko())}),j(E,Qu.EventType.ERROR,V=>{S||(S=!0,il(cn,`RPC '${e}' stream ${a} transport errored:`,V),x.Ko(new fe(ne.UNAVAILABLE,"The operation could not be completed")))}),j(E,Qu.EventType.MESSAGE,V=>{var z;if(!S){const G=V.data[0];et(!!G);const H=G,W=(H==null?void 0:H.error)||((z=H[0])===null||z===void 0?void 0:z.error);if(W){he(cn,`RPC '${e}' stream ${a} received error:`,W);const re=W.status;let J=function(b){const N=Nt[b];if(N!==void 0)return tC(N)}(re),O=W.message;J===void 0&&(J=ne.INTERNAL,O="Unknown error status: "+re+" with message "+W.message),S=!0,x.Ko(new fe(J,O)),E.close()}else he(cn,`RPC '${e}' stream ${a} received:`,G),x.Uo(G)}}),j(f,EA.STAT_EVENT,V=>{V.stat===l_.PROXY?he(cn,`RPC '${e}' stream ${a} detected buffering proxy`):V.stat===l_.NOPROXY&&he(cn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{x.$o()},0),x}}function gg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(n){return new rM(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,t,i=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-i);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="PersistentStream";class gC{constructor(e,t,i,a,o,u,f,m){this.Ti=e,this.n_=i,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new pC(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ne.RESOURCE_EXHAUSTED?(Or(t.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.i_===t&&this.V_(i,a)},i=>{e(()=>{const a=new fe(ne.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(a)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{i(()=>this.m_(a))}),this.stream.onMessage(a=>{i(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return he(jw,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(he(jw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tk extends gC{constructor(e,t,i,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=oM(this.serializer,e),i=function(o){if(!("targetChange"in o))return Ae.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Ae.min():u.readTime?ji(u.readTime):Ae.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=v_(this.serializer),t.addTarget=function(o,u){let f;const m=u.target;if(f=d_(m)?{documents:cM(o,m)}:{query:hM(o,m).ht},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=rC(o,u.resumeToken);const p=g_(o,u.expectedCount);p!==null&&(f.expectedCount=p)}else if(u.snapshotVersion.compareTo(Ae.min())>0){f.readTime=Qf(o,u.snapshotVersion.toTimestamp());const p=g_(o,u.expectedCount);p!==null&&(f.expectedCount=p)}return f}(this.serializer,e);const i=dM(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=v_(this.serializer),t.removeTarget=e,this.I_(t)}}class nk extends gC{constructor(e,t,i,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return et(!!e.streamToken),this.lastStreamToken=e.streamToken,et(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=uM(e.writeResults,e.commitTime),i=ji(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=v_(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>lM(this.serializer,i))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{}class rk extends ik{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new fe(ne.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,i,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,__(t,i),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new fe(ne.UNKNOWN,o.toString())})}Co(e,t,i,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Co(e,__(t,i),a,u,f,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new fe(ne.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class sk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Or(t),this.N_=!1):he("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="RemoteStore";class ak{constructor(e,t,i,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{i.enqueueAndForget(async()=>{Ga(this)&&(he(ka,"Restarting streams for network reachability change."),await async function(m){const p=Ne(m);p.W_.add(4),await Mc(p),p.j_.set("Unknown"),p.W_.delete(4),await Od(p)}(this))})}),this.j_=new sk(i,a)}}async function Od(n){if(Ga(n))for(const e of n.G_)await e(!0)}async function Mc(n){for(const e of n.G_)await e(!1)}function _C(n,e){const t=Ne(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),yy(t)?_y(t):Cl(t).c_()&&gy(t,e))}function py(n,e){const t=Ne(n),i=Cl(t);t.U_.delete(e),i.c_()&&yC(t,e),t.U_.size===0&&(i.c_()?i.P_():Ga(t)&&t.j_.set("Unknown"))}function gy(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cl(n).y_(e)}function yC(n,e){n.H_.Ne(e),Cl(n).w_(e)}function _y(n){n.H_=new eM({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Cl(n).start(),n.j_.B_()}function yy(n){return Ga(n)&&!Cl(n).u_()&&n.U_.size>0}function Ga(n){return Ne(n).W_.size===0}function vC(n){n.H_=void 0}async function ok(n){n.j_.set("Online")}async function lk(n){n.U_.forEach((e,t)=>{gy(n,e)})}async function uk(n,e){vC(n),yy(n)?(n.j_.q_(e),_y(n)):n.j_.set("Unknown")}async function ck(n,e,t){if(n.j_.set("Online"),e instanceof iC&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const f of o.targetIds)a.U_.has(f)&&(await a.remoteSyncer.rejectListen(f,u),a.U_.delete(f),a.H_.removeTarget(f))}(n,e)}catch(i){he(ka,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Yf(n,i)}else if(e instanceof Rf?n.H_.We(e):e instanceof nC?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Ae.min()))try{const i=await mC(n.localStore);t.compareTo(i)>=0&&await function(o,u){const f=o.H_.ot(u);return f.targetChanges.forEach((m,p)=>{if(m.resumeToken.approximateByteSize()>0){const y=o.U_.get(p);y&&o.U_.set(p,y.withResumeToken(m.resumeToken,u))}}),f.targetMismatches.forEach((m,p)=>{const y=o.U_.get(m);if(!y)return;o.U_.set(m,y.withResumeToken(sn.EMPTY_BYTE_STRING,y.snapshotVersion)),yC(o,m);const E=new As(y.target,m,p,y.sequenceNumber);gy(o,E)}),o.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(i){he(ka,"Failed to raise snapshot:",i),await Yf(n,i)}}async function Yf(n,e,t){if(!Al(e))throw e;n.W_.add(1),await Mc(n),n.j_.set("Offline"),t||(t=()=>mC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{he(ka,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Od(n)})}function EC(n,e){return e().catch(t=>Yf(n,t,e))}async function Md(n){const e=Ne(n),t=Us(e);let i=e.K_.length>0?e.K_[e.K_.length-1].batchId:ty;for(;hk(e);)try{const a=await KM(e.localStore,i);if(a===null){e.K_.length===0&&t.P_();break}i=a.batchId,fk(e,a)}catch(a){await Yf(e,a)}TC(e)&&wC(e)}function hk(n){return Ga(n)&&n.K_.length<10}function fk(n,e){n.K_.push(e);const t=Us(n);t.c_()&&t.S_&&t.b_(e.mutations)}function TC(n){return Ga(n)&&!Us(n).u_()&&n.K_.length>0}function wC(n){Us(n).start()}async function dk(n){Us(n).C_()}async function mk(n){const e=Us(n);for(const t of n.K_)e.b_(t.mutations)}async function pk(n,e,t){const i=n.K_.shift(),a=ly.from(i,e,t);await EC(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Md(n)}async function gk(n,e){e&&Us(n).S_&&await async function(i,a){if(function(u){return XO(u)&&u!==ne.ABORTED}(a.code)){const o=i.K_.shift();Us(i).h_(),await EC(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Md(i)}}(n,e),TC(n)&&wC(n)}async function Bw(n,e){const t=Ne(n);t.asyncQueue.verifyOperationInProgress(),he(ka,"RemoteStore received new credentials");const i=Ga(t);t.W_.add(3),await Mc(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Od(t)}async function _k(n,e){const t=Ne(n);e?(t.W_.delete(2),await Od(t)):e||(t.W_.add(2),await Mc(t),t.j_.set("Unknown"))}function Cl(n){return n.J_||(n.J_=function(t,i,a){const o=Ne(t);return o.M_(),new tk(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:ok.bind(null,n),No:lk.bind(null,n),Lo:uk.bind(null,n),p_:ck.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),yy(n)?_y(n):n.j_.set("Unknown")):(await n.J_.stop(),vC(n))})),n.J_}function Us(n){return n.Y_||(n.Y_=function(t,i,a){const o=Ne(t);return o.M_(),new nk(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:dk.bind(null,n),Lo:gk.bind(null,n),D_:mk.bind(null,n),v_:pk.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Md(n)):(await n.Y_.stop(),n.K_.length>0&&(he(ka,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t,i,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=o,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,o){const u=Date.now()+i,f=new vy(e,t,u,a,o);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ey(n,e){if(Or("AsyncQueue",`${e}: ${n}`),Al(n))return new fe(ne.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{static emptySet(e){return new Yo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ve.comparator(t.key,i.key):(t,i)=>ve.comparator(t.key,i.key),this.keyedMap=$u(),this.sortedSet=new Dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=i.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Yo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(){this.Z_=new Dt(ve.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):be():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class ul{constructor(e,t,i,a,o,u,f,m,p){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=p}static fromInitialDocuments(e,t,i,a,o){const u=[];return t.forEach(f=>{u.push({type:0,doc:f})}),new ul(e,t,Yo.emptySet(t),u,i,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class vk{constructor(){this.queries=Fw(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const a=Ne(t),o=a.queries;a.queries=Fw(),o.forEach((u,f)=>{for(const m of f.ta)m.onError(i)})})(this,new fe(ne.ABORTED,"Firestore shutting down"))}}function Fw(){return new Ha(n=>FA(n),Cd)}async function bC(n,e){const t=Ne(n);let i=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(i=2):(o=new yk,i=e.ra()?0:1);try{switch(i){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const f=Ey(u,`Initialization of query '${Go(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&Ty(t)}async function SC(n,e){const t=Ne(n),i=e.query;let a=3;const o=t.queries.get(i);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Ek(n,e){const t=Ne(n);let i=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const f of u.ta)f.oa(a)&&(i=!0);u.ea=a}}i&&Ty(t)}function Tk(n,e,t){const i=Ne(n),a=i.queries.get(e);if(a)for(const o of a.ta)o.onError(t);i.queries.delete(e)}function Ty(n){n.ia.forEach(e=>{e.next()})}var w_,qw;(qw=w_||(w_={}))._a="default",qw.Cache="cache";class AC{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new ul(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=ul.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==w_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.key=e}}class RC{constructor(e){this.key=e}}class wk{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ue(),this.mutatedKeys=Ue(),this.ya=qA(e),this.wa=new Yo(this.ya)}get Sa(){return this.fa}ba(e,t){const i=t?t.Da:new zw,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,f=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,p=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,E)=>{const w=a.get(y),S=Rd(this.query,E)?E:null,x=!!w&&this.mutatedKeys.has(w.key),j=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let V=!1;w&&S?w.data.isEqual(S.data)?x!==j&&(i.track({type:3,doc:S}),V=!0):this.va(w,S)||(i.track({type:2,doc:S}),V=!0,(m&&this.ya(S,m)>0||p&&this.ya(S,p)<0)&&(f=!0)):!w&&S?(i.track({type:0,doc:S}),V=!0):w&&!S&&(i.track({type:1,doc:w}),V=!0,(m||p)&&(f=!0)),V&&(S?(u=u.add(S),o=j?o.add(y):o.delete(y)):(u=u.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),o=o.delete(y.key),i.track({type:1,doc:y})}return{wa:u,Da:i,ls:f,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((y,E)=>function(S,x){const j=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be()}};return j(S)-j(x)}(y.type,E.type)||this.ya(y.doc,E.doc)),this.Ca(i),a=a!=null&&a;const f=t&&!a?this.Fa():[],m=this.pa.size===0&&this.current&&!a?1:0,p=m!==this.ga;return this.ga=m,u.length!==0||p?{snapshot:new ul(this.query,e.wa,o,u,e.mutatedKeys,m===0,p,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:f}:{Ma:f}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new zw,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ue(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new RC(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new CC(i))}),t}Oa(e){this.fa=e.gs,this.pa=Ue();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return ul.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const wy="SyncEngine";class bk{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Sk{constructor(e){this.key=e,this.Ba=!1}}class Ak{constructor(e,t,i,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new Ha(f=>FA(f),Cd),this.qa=new Map,this.Qa=new Set,this.$a=new Dt(ve.comparator),this.Ka=new Map,this.Ua=new hy,this.Wa={},this.Ga=new Map,this.za=ll.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Ck(n,e,t=!0){const i=MC(n);let a;const o=i.ka.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await IC(i,e,t,!0),a}async function Rk(n,e){const t=MC(n);await IC(t,e,!0,!1)}async function IC(n,e,t,i){const a=await QM(n.localStore,Ui(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let f;return i&&(f=await Ik(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&_C(n.remoteStore,a),f}async function Ik(n,e,t,i,a){n.Ha=(E,w,S)=>async function(j,V,z,G){let H=V.view.ba(z);H.ls&&(H=await Pw(j.localStore,V.query,!1).then(({documents:O})=>V.view.ba(O,H)));const W=G&&G.targetChanges.get(V.targetId),re=G&&G.targetMismatches.get(V.targetId)!=null,J=V.view.applyChanges(H,j.isPrimaryClient,W,re);return Gw(j,V.targetId,J.Ma),J.snapshot}(n,E,w,S);const o=await Pw(n.localStore,e,!0),u=new wk(e,o.gs),f=u.ba(o.documents),m=Oc.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",a),p=u.applyChanges(f,n.isPrimaryClient,m);Gw(n,t,p.Ma);const y=new bk(e,t,u);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),p.snapshot}async function Nk(n,e,t){const i=Ne(n),a=i.ka.get(e),o=i.qa.get(a.targetId);if(o.length>1)return i.qa.set(a.targetId,o.filter(u=>!Cd(u,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await E_(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),t&&py(i.remoteStore,a.targetId),b_(i,a.targetId)}).catch(Sl)):(b_(i,a.targetId),await E_(i.localStore,a.targetId,!0))}async function xk(n,e){const t=Ne(n),i=t.ka.get(e),a=t.qa.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),py(t.remoteStore,i.targetId))}async function Dk(n,e,t){const i=Uk(n);try{const a=await function(u,f){const m=Ne(u),p=jt.now(),y=f.reduce((S,x)=>S.add(x.key),Ue());let E,w;return m.persistence.runTransaction("Locally write mutations","readwrite",S=>{let x=Mr(),j=Ue();return m.ds.getEntries(S,y).next(V=>{x=V,x.forEach((z,G)=>{G.isValidDocument()||(j=j.add(z))})}).next(()=>m.localDocuments.getOverlayedDocuments(S,x)).next(V=>{E=V;const z=[];for(const G of f){const H=KO(G,E.get(G.key).overlayedDocument);H!=null&&z.push(new Gs(G.key,H,kA(H.value.mapValue),mi.exists(!0)))}return m.mutationQueue.addMutationBatch(S,p,z,f)}).next(V=>{w=V;const z=V.applyToLocalDocumentSet(E,j);return m.documentOverlayCache.saveOverlays(S,V.batchId,z)})}).then(()=>({batchId:w.batchId,changes:GA(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(u,f,m){let p=u.Wa[u.currentUser.toKey()];p||(p=new Dt(Be)),p=p.insert(f,m),u.Wa[u.currentUser.toKey()]=p}(i,a.batchId,t),await kc(i,a.changes),await Md(i.remoteStore)}catch(a){const o=Ey(a,"Failed to persist write");t.reject(o)}}async function NC(n,e){const t=Ne(n);try{const i=await HM(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ka.get(o);u&&(et(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?et(u.Ba):a.removedDocuments.size>0&&(et(u.Ba),u.Ba=!1))}),await kc(t,i,e)}catch(i){await Sl(i)}}function Hw(n,e,t){const i=Ne(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.ka.forEach((o,u)=>{const f=u.view.sa(e);f.snapshot&&a.push(f.snapshot)}),function(u,f){const m=Ne(u);m.onlineState=f;let p=!1;m.queries.forEach((y,E)=>{for(const w of E.ta)w.sa(f)&&(p=!0)}),p&&Ty(m)}(i.eventManager,e),a.length&&i.La.p_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Ok(n,e,t){const i=Ne(n);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Ka.get(e),o=a&&a.key;if(o){let u=new Dt(ve.comparator);u=u.insert(o,fn.newNoDocument(o,Ae.min()));const f=Ue().add(o),m=new xd(Ae.min(),new Map,new Dt(Be),u,f);await NC(i,m),i.$a=i.$a.remove(o),i.Ka.delete(e),by(i)}else await E_(i.localStore,e,!1).then(()=>b_(i,e,t)).catch(Sl)}async function Mk(n,e){const t=Ne(n),i=e.batch.batchId;try{const a=await qM(t.localStore,e);DC(t,i,null),xC(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await kc(t,a)}catch(a){await Sl(a)}}async function kk(n,e,t){const i=Ne(n);try{const a=await function(u,f){const m=Ne(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return m.mutationQueue.lookupMutationBatch(p,f).next(E=>(et(E!==null),y=E.keys(),m.mutationQueue.removeMutationBatch(p,E))).next(()=>m.mutationQueue.performConsistencyCheck(p)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(p,y,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>m.localDocuments.getDocuments(p,y))})}(i.localStore,e);DC(i,e,t),xC(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await kc(i,a)}catch(a){await Sl(a)}}function xC(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function DC(n,e,t){const i=Ne(n);let a=i.Wa[i.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),i.Wa[i.currentUser.toKey()]=a}}function b_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach(i=>{n.Ua.containsKey(i)||OC(n,i)})}function OC(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(py(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),by(n))}function Gw(n,e,t){for(const i of t)i instanceof CC?(n.Ua.addReference(i.key,e),Pk(n,i)):i instanceof RC?(he(wy,"Document no longer in limbo: "+i.key),n.Ua.removeReference(i.key,e),n.Ua.containsKey(i.key)||OC(n,i.key)):be()}function Pk(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(he(wy,"New document in limbo: "+t),n.Qa.add(i),by(n))}function by(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ve(ht.fromString(e)),i=n.za.next();n.Ka.set(i,new Sk(t)),n.$a=n.$a.insert(t,i),_C(n.remoteStore,new As(Ui(ay(t.path)),i,"TargetPurposeLimboResolution",bd.ae))}}async function kc(n,e,t){const i=Ne(n),a=[],o=[],u=[];i.ka.isEmpty()||(i.ka.forEach((f,m)=>{u.push(i.Ha(m,e,t).then(p=>{var y;if((p||t)&&i.isPrimaryClient){const E=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(m.targetId,E?"current":"not-current")}if(p){a.push(p);const E=dy.Yi(m.targetId,p);o.push(E)}}))}),await Promise.all(u),i.La.p_(a),await async function(m,p){const y=Ne(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>te.forEach(p,w=>te.forEach(w.Hi,S=>y.persistence.referenceDelegate.addReference(E,w.targetId,S)).next(()=>te.forEach(w.Ji,S=>y.persistence.referenceDelegate.removeReference(E,w.targetId,S)))))}catch(E){if(!Al(E))throw E;he(my,"Failed to update sequence numbers: "+E)}for(const E of p){const w=E.targetId;if(!E.fromCache){const S=y.Ts.get(w),x=S.snapshotVersion,j=S.withLastLimboFreeSnapshotVersion(x);y.Ts=y.Ts.insert(w,j)}}}(i.localStore,o))}async function Lk(n,e){const t=Ne(n);if(!t.currentUser.isEqual(e)){he(wy,"User change. New user:",e.toKey());const i=await dC(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(f=>{f.forEach(m=>{m.reject(new fe(ne.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await kc(t,i.Rs)}}function Vk(n,e){const t=Ne(n),i=t.Ka.get(e);if(i&&i.Ba)return Ue().add(i.key);{let a=Ue();const o=t.qa.get(e);if(!o)return a;for(const u of o){const f=t.ka.get(u);a=a.unionWith(f.view.Sa)}return a}}function MC(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=NC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Vk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ok.bind(null,e),e.La.p_=Ek.bind(null,e.eventManager),e.La.Ja=Tk.bind(null,e.eventManager),e}function Uk(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kk.bind(null,e),e}class Wf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Dd(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return FM(this.persistence,new jM,e.initialUser,this.serializer)}Xa(e){return new fC(fy.ri,this.serializer)}Za(e){return new YM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Wf.provider={build:()=>new Wf};class jk extends Wf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){et(this.persistence.referenceDelegate instanceof $f);const i=this.persistence.referenceDelegate.garbageCollector;return new SM(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new fC(i=>$f.ri(i,t),this.serializer)}}class S_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Hw(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Lk.bind(null,this.syncEngine),await _k(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vk}()}createDatastore(e){const t=Dd(e.databaseInfo.databaseId),i=function(o){return new ek(o)}(e.databaseInfo);return function(o,u,f,m){return new rk(o,u,f,m)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,a,o,u,f){return new ak(i,a,o,u,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Hw(this.syncEngine,t,0),function(){return Uw.D()?new Uw:new WM}())}createSyncEngine(e,t){return function(a,o,u,f,m,p,y){const E=new Ak(a,o,u,f,m,p);return y&&(E.ja=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=Ne(a);he(ka,"RemoteStore shutting down."),o.W_.add(5),await Mc(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}S_.provider={build:()=>new S_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const js="FirestoreClient";class Bk{constructor(e,t,i,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=hn.UNAUTHENTICATED,this.clientId=SA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{he(js,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(he(js,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Ey(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function _g(n,e){n.asyncQueue.verifyOperationInProgress(),he(js,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async a=>{i.isEqual(a)||(await dC(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Kw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zk(n);he(js,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Bw(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,a)=>Bw(e.remoteStore,a)),n._onlineComponents=e}async function zk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(js,"Using user provided OfflineComponentProvider");try{await _g(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ne.FAILED_PRECONDITION||a.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;il("Error using user provided cache. Falling back to memory cache: "+t),await _g(n,new Wf)}}else he(js,"Using default OfflineComponentProvider"),await _g(n,new jk(void 0));return n._offlineComponents}async function PC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(js,"Using user provided OnlineComponentProvider"),await Kw(n,n._uninitializedComponentsProvider._online)):(he(js,"Using default OnlineComponentProvider"),await Kw(n,new S_))),n._onlineComponents}function Fk(n){return PC(n).then(e=>e.syncEngine)}async function LC(n){const e=await PC(n),t=e.eventManager;return t.onListen=Ck.bind(null,e.syncEngine),t.onUnlisten=Nk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Rk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xk.bind(null,e.syncEngine),t}function qk(n,e,t={}){const i=new Nr;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,f,m,p){const y=new kC({next:w=>{y.su(),u.enqueueAndForget(()=>SC(o,E));const S=w.docs.has(f);!S&&w.fromCache?p.reject(new fe(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&m&&m.source==="server"?p.reject(new fe(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),E=new AC(ay(f.path),y,{includeMetadataChanges:!0,Ta:!0});return bC(o,E)}(await LC(n),n.asyncQueue,e,t,i)),i.promise}function Hk(n,e,t={}){const i=new Nr;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,f,m,p){const y=new kC({next:w=>{y.su(),u.enqueueAndForget(()=>SC(o,E)),w.fromCache&&m.source==="server"?p.reject(new fe(ne.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),E=new AC(f,y,{includeMetadataChanges:!0,Ta:!0});return bC(o,E)}(await LC(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UC(n,e,t){if(!t)throw new fe(ne.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gk(n,e,t,i){if(e===!0&&i===!0)throw new fe(ne.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $w(n){if(!ve.isDocumentKey(n))throw new fe(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Yw(n){if(ve.isDocumentKey(n))throw new fe(ne.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function kd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":be()}function qi(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=kd(n);throw new fe(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC="firestore.googleapis.com",Ww=!0;class Xw{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jC,this.ssl=Ww}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ww;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=hC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wM)throw new fe(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=VC((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new fe(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new fe(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new fe(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pd{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xw(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new ZD;switch(i.type){case"firstParty":return new nO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new fe(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Qw.get(t);i&&(he("ComponentProvider","Removing Datastore"),Qw.delete(t),i.terminate())}(this),Promise.resolve()}}function Kk(n,e,t,i={}){var a;const o=(n=qi(n,Pd))._getSettings(),u=`${e}:${t}`;if(o.host!==jC&&o.host!==u&&il("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let f,m;if(typeof i.mockUserToken=="string")f=i.mockUserToken,m=hn.MOCK_USER;else{f=sA(i.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new fe(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new hn(p)}n._authCredentials=new JD(new bA(f,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Rl(this.firestore,e,this._query)}}class Tn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tn(this.firestore,e,this._key)}}class xs extends Rl{constructor(e,t,i){super(e,t,ay(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tn(this.firestore,null,new ve(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function If(n,e,...t){if(n=ft(n),UC("collection","path",e),n instanceof Pd){const i=ht.fromString(e,...t);return Yw(i),new xs(n,null,i)}{if(!(n instanceof Tn||n instanceof xs))throw new fe(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ht.fromString(e,...t));return Yw(i),new xs(n.firestore,null,i)}}function cl(n,e,...t){if(n=ft(n),arguments.length===1&&(e=SA.newId()),UC("doc","path",e),n instanceof Pd){const i=ht.fromString(e,...t);return $w(i),new Tn(n,null,new ve(i))}{if(!(n instanceof Tn||n instanceof xs))throw new fe(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ht.fromString(e,...t));return $w(i),new Tn(n.firestore,n instanceof xs?n.converter:null,new ve(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="AsyncQueue";class Jw{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new pC(this,"async_queue_retry"),this.Su=()=>{const i=gg();i&&he(Zw,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const t=gg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=gg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Nr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Al(e))throw e;he(Zw,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const a=function(u){let f=u.message||"";return u.stack&&(f=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),f}(i);throw Or("INTERNAL UNHANDLED ERROR: ",a),i}).then(i=>(this.pu=!1,i))));return this.bu=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=vy.createAndSchedule(this,e,t,i,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&be()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Il extends Pd{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new Jw,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jw(e),this._firestoreClient=void 0,await e}}}function Ld(n,e){const t=typeof n=="object"?n:wd(),i=typeof n=="string"?n:zf,a=qs(t,"firestore").getImmediate({identifier:i});if(!a._initialized){const o=nA("firestore");o&&Kk(a,...o)}return a}function Sy(n){if(n._terminated)throw new fe(ne.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Qk(n),n._firestoreClient}function Qk(n){var e,t,i;const a=n._freezeSettings(),o=function(f,m,p,y){return new gO(f,m,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,VC(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new Bk(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hl(sn.fromBase64String(e))}catch(t){throw new fe(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new hl(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $k=/^__.*__$/;class Yk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Gs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dc(e,this.data,t,this.fieldTransforms)}}class BC{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Gs(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be()}}class jd{constructor(e,t,i,a,o,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new jd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.$u(e),a}Ku(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Xf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(zC(this.Lu)&&$k.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Wk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Dd(e)}ju(e,t,i,a=!1){return new jd({Lu:e,methodName:t,zu:i,path:rn.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bd(n){const e=n._freezeSettings(),t=Dd(n._databaseId);return new Wk(n._databaseId,!!e.ignoreUndefinedProperties,t)}function FC(n,e,t,i,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);Iy("Data must be an object, but it was:",u,i);const f=qC(i,u);let m,p;if(o.merge)m=new Un(u.fieldMask),p=u.fieldTransforms;else if(o.mergeFields){const y=[];for(const E of o.mergeFields){const w=A_(e,E,t);if(!u.contains(w))throw new fe(ne.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);GC(y,w)||y.push(w)}m=new Un(y),p=u.fieldTransforms.filter(E=>m.covers(E.field))}else m=null,p=u.fieldTransforms;return new Yk(new Cn(f),m,p)}class zd extends Ud{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zd}}function Xk(n,e,t){return new jd({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ry extends Ud{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=Xk(this,e,!0),i=this.Hu.map(o=>Nl(o,t)),a=new ol(i);return new FO(e.path,a)}isEqual(e){return e instanceof Ry&&nl(this.Hu,e.Hu)}}function Zk(n,e,t,i){const a=n.ju(1,e,t);Iy("Data must be an object, but it was:",a,i);const o=[],u=Cn.empty();Hs(i,(m,p)=>{const y=Ny(e,m,t);p=ft(p);const E=a.Ku(y);if(p instanceof zd)o.push(y);else{const w=Nl(p,E);w!=null&&(o.push(y),u.set(y,w))}});const f=new Un(o);return new BC(u,f,a.fieldTransforms)}function Jk(n,e,t,i,a,o){const u=n.ju(1,e,t),f=[A_(e,i,t)],m=[a];if(o.length%2!=0)throw new fe(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)f.push(A_(e,o[w])),m.push(o[w+1]);const p=[],y=Cn.empty();for(let w=f.length-1;w>=0;--w)if(!GC(p,f[w])){const S=f[w];let x=m[w];x=ft(x);const j=u.Ku(S);if(x instanceof zd)p.push(S);else{const V=Nl(x,j);V!=null&&(p.push(S),y.set(S,V))}}const E=new Un(p);return new BC(y,E,u.fieldTransforms)}function eP(n,e,t,i=!1){return Nl(t,n.ju(i?4:3,e))}function Nl(n,e){if(HC(n=ft(n)))return Iy("Unsupported field value:",e,n),qC(n,e);if(n instanceof Ud)return function(i,a){if(!zC(a.Lu))throw a.Wu(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,a){const o=[];let u=0;for(const f of i){let m=Nl(f,a.Uu(u));m==null&&(m={nullValue:"NULL_VALUE"}),o.push(m),u++}return{arrayValue:{values:o}}}(n,e)}return function(i,a){if((i=ft(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return jO(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=jt.fromDate(i);return{timestampValue:Qf(a.serializer,o)}}if(i instanceof jt){const o=new jt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Qf(a.serializer,o)}}if(i instanceof Ay)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof hl)return{bytesValue:rC(a.serializer,i._byteString)};if(i instanceof Tn){const o=a.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:cy(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof Cy)return function(u,f){return{mapValue:{fields:{[OA]:{stringValue:MA},[Ff]:{arrayValue:{values:u.toArray().map(p=>{if(typeof p!="number")throw f.Wu("VectorValues must only contain numeric values.");return oy(f.serializer,p)})}}}}}}(i,a);throw a.Wu(`Unsupported field value: ${kd(i)}`)}(n,e)}function qC(n,e){const t={};return CA(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hs(n,(i,a)=>{const o=Nl(a,e.qu(i));o!=null&&(t[i]=o)}),{mapValue:{fields:t}}}function HC(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof jt||n instanceof Ay||n instanceof hl||n instanceof Tn||n instanceof Ud||n instanceof Cy)}function Iy(n,e,t){if(!HC(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const i=kd(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function A_(n,e,t){if((e=ft(e))instanceof Vd)return e._internalPath;if(typeof e=="string")return Ny(n,e);throw Xf("Field path arguments must be of type string or ",n,!1,void 0,t)}const tP=new RegExp("[~\\*/\\[\\]]");function Ny(n,e,t){if(e.search(tP)>=0)throw Xf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Vd(...e.split("."))._internalPath}catch{throw Xf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Xf(n,e,t,i,a){const o=i&&!i.isEmpty(),u=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(o||u)&&(m+=" (found",o&&(m+=` in field ${i}`),u&&(m+=` in document ${a}`),m+=")"),new fe(ne.INVALID_ARGUMENT,f+n+m)}function GC(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,t,i,a,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xy("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class nP extends KC{data(){return super.data()}}function xy(n,e){return typeof e=="string"?Ny(n,e):e instanceof Vd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(ne.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dy{}class rP extends Dy{}function sP(n,e,...t){let i=[];e instanceof Dy&&i.push(e),i=i.concat(t),function(o){const u=o.filter(m=>m instanceof Oy).length,f=o.filter(m=>m instanceof Fd).length;if(u>1||u>0&&f>0)throw new fe(ne.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)n=a._apply(n);return n}class Fd extends rP{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Fd(e,t,i)}_apply(e){const t=this._parse(e);return QC(e._query,t),new Rl(e.firestore,e.converter,m_(e._query,t))}_parse(e){const t=Bd(e.firestore);return function(o,u,f,m,p,y,E){let w;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new fe(ne.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){tb(E,y);const x=[];for(const j of E)x.push(eb(m,o,j));w={arrayValue:{values:x}}}else w=eb(m,o,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||tb(E,y),w=eP(f,u,E,y==="in"||y==="not-in");return xt.create(p,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function aP(n,e,t){const i=e,a=xy("where",n);return Fd._create(a,i,t)}class Oy extends Dy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Oy(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:yi.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const f=o.getFlattenedFilters();for(const m of f)QC(u,m),u=m_(u,m)}(e._query,t),new Rl(e.firestore,e.converter,m_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function eb(n,e,t){if(typeof(t=ft(t))=="string"){if(t==="")throw new fe(ne.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zA(e)&&t.indexOf("/")!==-1)throw new fe(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ht.fromString(t));if(!ve.isDocumentKey(i))throw new fe(ne.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return gw(n,new ve(i))}if(t instanceof Tn)return gw(n,t._key);throw new fe(ne.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kd(t)}.`)}function tb(n,e){if(!Array.isArray(n)||n.length===0)throw new fe(ne.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QC(n,e){const t=function(a,o){for(const u of a)for(const f of u.getFlattenedFilters())if(o.indexOf(f.op)>=0)return f.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new fe(ne.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(ne.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class oP{convertValue(e,t="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw be()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Hs(e,(a,o)=>{i[a]=this.convertValue(o,t)}),i}convertVectorValue(e){var t,i,a;const o=(a=(i=(t=e.fields)===null||t===void 0?void 0:t[Ff].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map(u=>At(u.doubleValue));return new Cy(o)}convertGeoPoint(e){return new Ay(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Ad(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(dc(e));default:return null}}convertTimestamp(e){const t=Ps(e);return new jt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ht.fromString(e);et(cC(i));const a=new mc(i.get(1),i.get(3)),o=new ve(i.popFirst(5));return a.isEqual(t)||Or(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class YC extends KC{constructor(e,t,i,a,o,u){super(e,t,i,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(xy("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Nf extends YC{data(e={}){return super.data(e)}}class lP{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Wu(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Nf(this._firestore,this._userDataWriter,i.key,i,new Wu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(f=>{const m=new Nf(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Wu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(f=>o||f.type!==3).map(f=>{const m=new Nf(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Wu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let p=-1,y=-1;return f.type!==0&&(p=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),y=u.indexOf(f.doc.key)),{type:uP(f.type),doc:m,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function uP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(n){n=qi(n,Tn);const e=qi(n.firestore,Il);return qk(Sy(e),n._key).then(t=>dP(e,n,t))}class WC extends oP{constructor(e){super(),this.firestore=e}convertBytes(e){return new hl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tn(this.firestore,null,t)}}function C_(n){n=qi(n,Rl);const e=qi(n.firestore,Il),t=Sy(e),i=new WC(e);return iP(n._query),Hk(t,n._query).then(a=>new lP(e,i,n,a))}function R_(n,e,t){n=qi(n,Tn);const i=qi(n.firestore,Il),a=$C(n.converter,e,t);return My(i,[FC(Bd(i),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,mi.none())])}function hP(n,e,t,...i){n=qi(n,Tn);const a=qi(n.firestore,Il),o=Bd(a);let u;return u=typeof(e=ft(e))=="string"||e instanceof Vd?Jk(o,"updateDoc",n._key,e,t,i):Zk(o,"updateDoc",n._key,e),My(a,[u.toMutation(n._key,mi.exists(!0))])}function fP(n,e){const t=qi(n.firestore,Il),i=cl(n),a=$C(n.converter,e);return My(t,[FC(Bd(n.firestore),"addDoc",i._key,a,n.converter!==null,{}).toMutation(i._key,mi.exists(!1))]).then(()=>i)}function My(n,e){return function(i,a){const o=new Nr;return i.asyncQueue.enqueueAndForget(async()=>Dk(await Fk(i),a,o)),o.promise}(Sy(n),e)}function dP(n,e,t){const i=t.docs.get(e._key),a=new WC(n);return new YC(n,a,e._key,i,new Wu(t.hasPendingWrites,t.fromCache),e.converter)}function mP(...n){return new Ry("arrayUnion",n)}(function(e,t=!0){(function(a){bl=a})(qa),_i(new si("firestore",(i,{instanceIdentifier:a,options:o})=>{const u=i.getProvider("app").getImmediate(),f=new Il(new eO(i.getProvider("auth-internal")),new iO(u,i.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new fe(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mc(p.options.projectId,y)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),f._setSettings(o),f},"PUBLIC").setMultipleInstances(!0)),In(sw,aw,e),In(sw,aw,"esm2017")})();var pP="firebase",gP="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(pP,gP,"app");const XC="@firebase/installations",ky="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=1e4,JC=`w:${ky}`,eR="FIS_v2",_P="https://firebaseinstallations.googleapis.com/v1",yP=60*60*1e3,vP="installations",EP="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pa=new Fa(vP,EP,TP);function tR(n){return n instanceof vi&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR({projectId:n}){return`${_P}/projects/${n}/installations`}function iR(n){return{token:n.token,requestStatus:2,expiresIn:bP(n.expiresIn),creationTime:Date.now()}}async function rR(n,e){const i=(await e.json()).error;return Pa.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function sR({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function wP(n,{refreshToken:e}){const t=sR(n);return t.append("Authorization",SP(e)),t}async function aR(n){const e=await n();return e.status>=500&&e.status<600?n():e}function bP(n){return Number(n.replace("s","000"))}function SP(n){return`${eR} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=nR(n),a=sR(n),o=e.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={fid:t,authVersion:eR,appId:n.appId,sdkVersion:JC},f={method:"POST",headers:a,body:JSON.stringify(u)},m=await aR(()=>fetch(i,f));if(m.ok){const p=await m.json();return{fid:p.fid||t,registrationStatus:2,refreshToken:p.refreshToken,authToken:iR(p.authToken)}}else throw await rR("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=/^[cdef][\w-]{21}$/,I_="";function IP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=NP(n);return RP.test(t)?t:I_}catch{return I_}}function NP(n){return CP(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=new Map;function uR(n,e){const t=qd(n);cR(t,e),xP(t,e)}function cR(n,e){const t=lR.get(n);if(t)for(const i of t)i(e)}function xP(n,e){const t=DP();t&&t.postMessage({key:n,fid:e}),OP()}let Ia=null;function DP(){return!Ia&&"BroadcastChannel"in self&&(Ia=new BroadcastChannel("[Firebase] FID Change"),Ia.onmessage=n=>{cR(n.data.key,n.data.fid)}),Ia}function OP(){lR.size===0&&Ia&&(Ia.close(),Ia=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP="firebase-installations-database",kP=1,La="firebase-installations-store";let yg=null;function Py(){return yg||(yg=dA(MP,kP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(La)}}})),yg}async function Zf(n,e){const t=qd(n),a=(await Py()).transaction(La,"readwrite"),o=a.objectStore(La),u=await o.get(t);return await o.put(e,t),await a.done,(!u||u.fid!==e.fid)&&uR(n,e.fid),e}async function hR(n){const e=qd(n),i=(await Py()).transaction(La,"readwrite");await i.objectStore(La).delete(e),await i.done}async function Hd(n,e){const t=qd(n),a=(await Py()).transaction(La,"readwrite"),o=a.objectStore(La),u=await o.get(t),f=e(u);return f===void 0?await o.delete(t):await o.put(f,t),await a.done,f&&(!u||u.fid!==f.fid)&&uR(n,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(n){let e;const t=await Hd(n.appConfig,i=>{const a=PP(i),o=LP(n,a);return e=o.registrationPromise,o.installationEntry});return t.fid===I_?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function PP(n){const e=n||{fid:IP(),registrationStatus:0};return fR(e)}function LP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Pa.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=VP(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:UP(n)}:{installationEntry:e}}async function VP(n,e){try{const t=await AP(n,e);return Zf(n.appConfig,t)}catch(t){throw tR(t)&&t.customData.serverCode===409?await hR(n.appConfig):await Zf(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function UP(n){let e=await nb(n.appConfig);for(;e.registrationStatus===1;)await oR(100),e=await nb(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Ly(n);return i||t}return e}function nb(n){return Hd(n,e=>{if(!e)throw Pa.create("installation-not-found");return fR(e)})}function fR(n){return jP(n)?{fid:n.fid,registrationStatus:0}:n}function jP(n){return n.registrationStatus===1&&n.registrationTime+ZC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BP({appConfig:n,heartbeatServiceProvider:e},t){const i=zP(n,t),a=wP(n,t),o=e.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={installation:{sdkVersion:JC,appId:n.appId}},f={method:"POST",headers:a,body:JSON.stringify(u)},m=await aR(()=>fetch(i,f));if(m.ok){const p=await m.json();return iR(p)}else throw await rR("Generate Auth Token",m)}function zP(n,{fid:e}){return`${nR(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(n,e=!1){let t;const i=await Hd(n.appConfig,o=>{if(!dR(o))throw Pa.create("not-registered");const u=o.authToken;if(!e&&HP(u))return o;if(u.requestStatus===1)return t=FP(n,e),o;{if(!navigator.onLine)throw Pa.create("app-offline");const f=KP(o);return t=qP(n,f),f}});return t?await t:i.authToken}async function FP(n,e){let t=await ib(n.appConfig);for(;t.authToken.requestStatus===1;)await oR(100),t=await ib(n.appConfig);const i=t.authToken;return i.requestStatus===0?Vy(n,e):i}function ib(n){return Hd(n,e=>{if(!dR(e))throw Pa.create("not-registered");const t=e.authToken;return QP(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qP(n,e){try{const t=await BP(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Zf(n.appConfig,i),t}catch(t){if(tR(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await hR(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zf(n.appConfig,i)}throw t}}function dR(n){return n!==void 0&&n.registrationStatus===2}function HP(n){return n.requestStatus===2&&!GP(n)}function GP(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+yP}function KP(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function QP(n){return n.requestStatus===1&&n.requestTime+ZC<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(n){const e=n,{installationEntry:t,registrationPromise:i}=await Ly(e);return i?i.catch(console.error):Vy(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(n,e=!1){const t=n;return await WP(t),(await Vy(t,e)).token}async function WP(n){const{registrationPromise:e}=await Ly(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XP(n){if(!n||!n.options)throw vg("App Configuration");if(!n.name)throw vg("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw vg(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function vg(n){return Pa.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="installations",ZP="installations-internal",JP=n=>{const e=n.getProvider("app").getImmediate(),t=XP(e),i=qs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},eL=n=>{const e=n.getProvider("app").getImmediate(),t=qs(e,mR).getImmediate();return{getId:()=>$P(t),getToken:a=>YP(t,a)}};function tL(){_i(new si(mR,JP,"PUBLIC")),_i(new si(ZP,eL,"PRIVATE"))}tL();In(XC,ky);In(XC,ky,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="analytics",nL="firebase_id",iL="origin",rL=60*1e3,sL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Uy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Nc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jn=new Fa("analytics","Analytics",aL);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oL(n){if(!n.startsWith(Uy)){const e=jn.create("invalid-gtag-resource",{gtagURL:n});return Nn.warn(e.message),""}return n}function pR(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function lL(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function uL(n,e){const t=lL("firebase-js-sdk-policy",{createScriptURL:oL}),i=document.createElement("script"),a=`${Uy}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function cL(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function hL(n,e,t,i,a,o){const u=i[a];try{if(u)await e[u];else{const m=(await pR(t)).find(p=>p.measurementId===a);m&&await e[m.appId]}}catch(f){Nn.error(f)}n("config",a,o)}async function fL(n,e,t,i,a){try{let o=[];if(a&&a.send_to){let u=a.send_to;Array.isArray(u)||(u=[u]);const f=await pR(t);for(const m of u){const p=f.find(E=>E.measurementId===m),y=p&&e[p.appId];if(y)o.push(y);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",i,a||{})}catch(o){Nn.error(o)}}function dL(n,e,t,i){async function a(o,...u){try{if(o==="event"){const[f,m]=u;await fL(n,e,t,f,m)}else if(o==="config"){const[f,m]=u;await hL(n,e,t,i,f,m)}else if(o==="consent"){const[f,m]=u;n("consent",f,m)}else if(o==="get"){const[f,m,p]=u;n("get",f,m,p)}else if(o==="set"){const[f]=u;n("set",f)}else n(o,...u)}catch(f){Nn.error(f)}}return a}function mL(n,e,t,i,a){let o=function(...u){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(o=window[a]),window[a]=dL(o,n,e,t),{gtagCore:o,wrappedGtag:window[a]}}function pL(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Uy)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=30,_L=1e3;class yL{constructor(e={},t=_L){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gR=new yL;function vL(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function EL(n){var e;const{appId:t,apiKey:i}=n,a={method:"GET",headers:vL(i)},o=sL.replace("{app-id}",t),u=await fetch(o,a);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();!((e=m.error)===null||e===void 0)&&e.message&&(f=m.error.message)}catch{}throw jn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function TL(n,e=gR,t){const{appId:i,apiKey:a,measurementId:o}=n.options;if(!i)throw jn.create("no-app-id");if(!a){if(o)return{measurementId:o,appId:i};throw jn.create("no-api-key")}const u=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new SL;return setTimeout(async()=>{f.abort()},rL),_R({appId:i,apiKey:a,measurementId:o},u,f,e)}async function _R(n,{throttleEndTimeMillis:e,backoffCount:t},i,a=gR){var o;const{appId:u,measurementId:f}=n;try{await wL(i,e)}catch(m){if(f)return Nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:f};throw m}try{const m=await EL(n);return a.deleteThrottleMetadata(u),m}catch(m){const p=m;if(!bL(p)){if(a.deleteThrottleMetadata(u),f)return Nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:u,measurementId:f};throw m}const y=Number((o=p==null?void 0:p.customData)===null||o===void 0?void 0:o.httpStatus)===503?YT(t,a.intervalMillis,gL):YT(t,a.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return a.setThrottleMetadata(u,E),Nn.debug(`Calling attemptFetch again in ${y} millis`),_R(n,E,i,a)}}function wL(n,e){return new Promise((t,i)=>{const a=Math.max(e-Date.now(),0),o=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(o),i(jn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bL(n){if(!(n instanceof vi)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class SL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function AL(n,e,t,i,a){if(a&&a.global){n("event",t,i);return}else{const o=await e,u=Object.assign(Object.assign({},i),{send_to:o});n("event",t,u)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CL(){if(lA())try{await uA()}catch(n){return Nn.warn(jn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Nn.warn(jn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function RL(n,e,t,i,a,o,u){var f;const m=TL(n);m.then(S=>{t[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&Nn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>Nn.error(S)),e.push(m);const p=CL().then(S=>{if(S)return i.getId()}),[y,E]=await Promise.all([m,p]);pL(o)||uL(o,y.measurementId),a("js",new Date);const w=(f=u==null?void 0:u.config)!==null&&f!==void 0?f:{};return w[iL]="firebase",w.update=!0,E!=null&&(w[nL]=E),a("config",y.measurementId,w),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e){this.app=e}_delete(){return delete nc[this.app.options.appId],Promise.resolve()}}let nc={},rb=[];const sb={};let Eg="dataLayer",NL="gtag",ab,yR,ob=!1;function xL(){const n=[];if(aA()&&n.push("This is a browser extension environment."),x2()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,a)=>`(${a+1}) ${i}`).join(" "),t=jn.create("invalid-analytics-context",{errorInfo:e});Nn.warn(t.message)}}function DL(n,e,t){xL();const i=n.options.appId;if(!i)throw jn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jn.create("no-api-key");if(nc[i]!=null)throw jn.create("already-exists",{id:i});if(!ob){cL(Eg);const{wrappedGtag:o,gtagCore:u}=mL(nc,rb,sb,Eg,NL);yR=o,ab=u,ob=!0}return nc[i]=RL(n,rb,sb,e,ab,Eg,t),new IL(n)}function OL(n=wd()){n=ft(n);const e=qs(n,Jf);return e.isInitialized()?e.getImmediate():ML(n)}function ML(n,e={}){const t=qs(n,Jf);if(t.isInitialized()){const a=t.getImmediate();if(nl(e,t.getOptions()))return a;throw jn.create("already-initialized")}return t.initialize({options:e})}function kL(n,e,t,i){n=ft(n),AL(yR,nc[n.app.options.appId],e,t,i).catch(a=>Nn.error(a))}const lb="@firebase/analytics",ub="0.10.11";function PL(){_i(new si(Jf,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return DL(i,a,t)},"PUBLIC")),_i(new si("analytics-internal",n,"PRIVATE")),In(lb,ub),In(lb,ub,"esm2017");function n(e){try{const t=e.getProvider(Jf).getImmediate();return{logEvent:(i,a,o)=>kL(t,i,a,o)}}catch(t){throw jn.create("interop-component-reg-failed",{reason:t})}}}PL();function jy(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]]);return t}function vR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LL=vR,ER=new Fa("auth","Firebase",vR());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=new Nc("@firebase/auth");function VL(n,...e){ed.logLevel<=Le.WARN&&ed.warn(`Auth (${qa}): ${n}`,...e)}function xf(n,...e){ed.logLevel<=Le.ERROR&&ed.error(`Auth (${qa}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n,...e){throw zy(n,...e)}function pi(n,...e){return zy(n,...e)}function By(n,e,t){const i=Object.assign(Object.assign({},LL()),{[e]:t});return new Fa("auth","Firebase",i).create(e,{appName:n.name})}function Oa(n){return By(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function UL(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Hi(n,"argument-error"),By(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zy(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ER.create(n,...e)}function Se(n,e,...t){if(!n)throw zy(e,...t)}function Sr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xf(e),new Error(e)}function kr(n,e){n||Sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function jL(){return cb()==="http:"||cb()==="https:"}function cb(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jL()||aA()||"connection"in navigator)?navigator.onLine:!0}function zL(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.shortDelay=e,this.longDelay=t,kr(t>e,"Short delay should be less than long delay!"),this.isMobile=X_()||oA()}get(){return BL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(n,e){kr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=new Pc(3e4,6e4);function qy(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ka(n,e,t,i,a={}){return wR(n,a,async()=>{let o={},u={};i&&(e==="GET"?u=i:o={body:JSON.stringify(i)});const f=wl(Object.assign({key:n.config.apiKey},u)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:m},o);return C2()||(p.referrerPolicy="no-referrer"),TR.fetch()(bR(n,n.config.apiHost,t,f),p)})}async function wR(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},FL),e);try{const a=new GL(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw _f(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const f=o.ok?u.errorMessage:u.error.message,[m,p]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw _f(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw _f(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw _f(n,"user-disabled",u);const y=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw By(n,y,p);Hi(n,y)}}catch(a){if(a instanceof vi)throw a;Hi(n,"network-request-failed",{message:String(a)})}}async function HL(n,e,t,i,a={}){const o=await Ka(n,e,t,i,a);return"mfaPendingCredential"in o&&Hi(n,"multi-factor-auth-required",{_serverResponse:o}),o}function bR(n,e,t,i){const a=`${e}${t}?${i}`;return n.config.emulator?Fy(n.config,a):`${n.config.apiScheme}://${a}`}class GL{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(pi(this.auth,"network-request-failed")),qL.get())})}}function _f(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=pi(n,e,i);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(n,e){return Ka(n,"POST","/v1/accounts:delete",e)}async function SR(n,e){return Ka(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QL(n,e=!1){const t=ft(n),i=await t.getIdToken(e),a=Hy(i);Se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:i,authTime:ic(Tg(a.auth_time)),issuedAtTime:ic(Tg(a.iat)),expirationTime:ic(Tg(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Tg(n){return Number(n)*1e3}function Hy(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return xf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Vf(t);return a?JSON.parse(a):(xf("Failed to decode base64 JWT payload"),null)}catch(a){return xf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function hb(n){const e=Hy(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof vi&&$L(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function $L({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ic(this.lastLoginAt),this.creationTime=ic(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function td(n){var e;const t=n.auth,i=await n.getIdToken(),a=await fl(n,SR(t,{idToken:i}));Se(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?AR(o.providerUserInfo):[],f=XL(n.providerData,u),m=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(f!=null&&f.length),y=m?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new x_(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function WL(n){const e=ft(n);await td(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XL(n,e){return[...n.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function AR(n){return n.map(e=>{var{providerId:t}=e,i=jy(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZL(n,e){const t=await wR(n,{},async()=>{const i=wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=bR(n,a,"/v1/token",`key=${o}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",TR.fetch()(u,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function JL(n,e){return Ka(n,"POST","/v2/accounts:revokeToken",qy(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=hb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:o}=await ZL(e,t);this.updateTokensAndExpiration(i,a,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:o}=t,u=new Wo;return i&&(Se(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),a&&(Se(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(Se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ar{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,o=jy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new x_(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await fl(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return QL(this,e)}reload(){return WL(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await td(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ii(this.auth.app))return Promise.reject(Oa(this.auth));const e=await this.getIdToken();return await fl(this,KL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,o,u,f,m,p,y;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,x=(u=t.photoURL)!==null&&u!==void 0?u:void 0,j=(f=t.tenantId)!==null&&f!==void 0?f:void 0,V=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,z=(p=t.createdAt)!==null&&p!==void 0?p:void 0,G=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:H,emailVerified:W,isAnonymous:re,providerData:J,stsTokenManager:O}=t;Se(H&&O,e,"internal-error");const R=Wo.fromJSON(this.name,O);Se(typeof H=="string",e,"internal-error"),Es(E,e.name),Es(w,e.name),Se(typeof W=="boolean",e,"internal-error"),Se(typeof re=="boolean",e,"internal-error"),Es(S,e.name),Es(x,e.name),Es(j,e.name),Es(V,e.name),Es(z,e.name),Es(G,e.name);const b=new Ar({uid:H,auth:e,email:w,emailVerified:W,displayName:E,isAnonymous:re,photoURL:x,phoneNumber:S,tenantId:j,stsTokenManager:R,createdAt:z,lastLoginAt:G});return J&&Array.isArray(J)&&(b.providerData=J.map(N=>Object.assign({},N))),V&&(b._redirectEventId=V),b}static async _fromIdTokenResponse(e,t,i=!1){const a=new Wo;a.updateFromServerResponse(t);const o=new Ar({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await td(o),o}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];Se(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?AR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),f=new Wo;f.updateFromIdToken(i);const m=new Ar({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:u}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new x_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(m,p),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new Map;function Cr(n){kr(n instanceof Function,"Expected a class definition");let e=fb.get(n);return e?(kr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fb.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}CR.type="NONE";const db=CR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(n,e,t){return`firebase:${n}:${e}:${t}`}class Xo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:o}=this.auth;this.fullUserKey=Df(this.userKey,a.apiKey,o),this.fullPersistenceKey=Df("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Xo(Cr(db),e,i);const a=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=a[0]||Cr(db);const u=Df(i,e.config.apiKey,e.name);let f=null;for(const p of t)try{const y=await p._get(u);if(y){const E=Ar._fromJSON(e,y);p!==o&&(f=E),o=p;break}}catch{}const m=a.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!m.length?new Xo(o,e,i):(o=m[0],f&&await o._set(u,f.toJSON()),await Promise.all(t.map(async p=>{if(p!==o)try{await p._remove(u)}catch{}})),new Xo(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OR(e))return"Blackberry";if(MR(e))return"Webos";if(IR(e))return"Safari";if((e.includes("chrome/")||NR(e))&&!e.includes("edge/"))return"Chrome";if(DR(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function RR(n=dn()){return/firefox\//i.test(n)}function IR(n=dn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NR(n=dn()){return/crios\//i.test(n)}function xR(n=dn()){return/iemobile/i.test(n)}function DR(n=dn()){return/android/i.test(n)}function OR(n=dn()){return/blackberry/i.test(n)}function MR(n=dn()){return/webos/i.test(n)}function Gy(n=dn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function eV(n=dn()){var e;return Gy(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tV(){return R2()&&document.documentMode===10}function kR(n=dn()){return Gy(n)||DR(n)||MR(n)||OR(n)||/windows phone/i.test(n)||xR(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(n,e=[]){let t;switch(n){case"Browser":t=mb(dn());break;case"Worker":t=`${mb(dn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qa}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((u,f)=>{try{const m=e(o);u(m)}catch(m){f(m)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iV(n,e={}){return Ka(n,"GET","/v2/passwordPolicy",qy(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=6;class sV{constructor(e){var t,i,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:rV,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,o,u,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(o=m.containsUppercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsNumericCharacter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pb(this),this.idTokenSubscription=new pb(this),this.beforeStateQueue=new nV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ER,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var i,a;if(!this._deleted&&(this.persistenceManager=await Xo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await SR(this,{idToken:e}),i=await Ar._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ii(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===f)&&(m!=null&&m.user)&&(a=m.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await td(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ii(this.app))return Promise.reject(Oa(this));const t=e?ft(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ii(this.app)?Promise.reject(Oa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ii(this.app)?Promise.reject(Oa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iV(this),t=new sV(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fa("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await JL(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Xo.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(f,this,"internal-error"),f.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,a);return()=>{u=!0,m()}}else{const m=e.addObserver(t);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ii(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&VL(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Gd(n){return ft(n)}class pb{constructor(e){this.auth=e,this.observer=null,this.addObserver=V2(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ky={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oV(n){Ky=n}function lV(n){return Ky.loadJS(n)}function uV(){return Ky.gapiScript}function cV(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(n,e){const t=qs(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),o=t.getOptions();if(nl(o,e??{}))return a;Hi(a,"already-initialized")}return t.initialize({options:e})}function fV(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function dV(n,e,t){const i=Gd(n);Se(i._canInitEmulator,i,"emulator-config-failed"),Se(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,o=LR(e),{host:u,port:f}=mV(e),m=f===null?"":`:${f}`;i.config.emulator={url:`${o}//${u}${m}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:f,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),pV()}function LR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mV(n){const e=LR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const o=a[1];return{host:o,port:gb(i.substr(o.length+1))}}else{const[o,u]=i.split(":");return{host:o,port:gb(u)}}}function gb(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function pV(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(n,e){return HL(n,"POST","/v1/accounts:signInWithIdp",qy(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gV="http://localhost";class Va extends VR{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Va(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,o=jy(t,["providerId","signInMethod"]);if(!i||!a)return null;const u=new Va(i,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Zo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Zo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zo(e,t)}buildRequest(){const e={requestUri:gV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Qy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Lc{constructor(){super("facebook.com")}static credential(e){return Va._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ws.credential(e.oauthAccessToken)}catch{return null}}}ws.FACEBOOK_SIGN_IN_METHOD="facebook.com";ws.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Lc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Va._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return br.credential(t,i)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Lc{constructor(){super("github.com")}static credential(e){return Va._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bs.credential(e.oauthAccessToken)}catch{return null}}}bs.GITHUB_SIGN_IN_METHOD="github.com";bs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Lc{constructor(){super("twitter.com")}static credential(e,t){return Va._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ss.credential(t,i)}catch{return null}}}Ss.TWITTER_SIGN_IN_METHOD="twitter.com";Ss.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const o=await Ar._fromIdTokenResponse(e,i,a),u=_b(i);return new dl({user:o,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=_b(i);return new dl({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function _b(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd extends vi{constructor(e,t,i,a){var o;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,nd.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new nd(e,t,i,a)}}function UR(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?nd._fromErrorAndOperation(n,o,e,i):o})}async function _V(n,e,t=!1){const i=await fl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dl._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yV(n,e,t=!1){const{auth:i}=n;if(ii(i.app))return Promise.reject(Oa(i));const a="reauthenticate";try{const o=await fl(n,UR(i,a,e,n),t);Se(o.idToken,i,"internal-error");const u=Hy(o.idToken);Se(u,i,"internal-error");const{sub:f}=u;return Se(n.uid===f,i,"user-mismatch"),dl._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Hi(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vV(n,e,t=!1){if(ii(n.app))return Promise.reject(Oa(n));const i="signIn",a=await UR(n,i,e),o=await dl._fromIdTokenResponse(n,i,a);return t||await n._updateCurrentUser(o.user),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EV(n,e){return Ka(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TV(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ft(n),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await fl(i,EV(i.auth,o));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const f=i.providerData.find(({providerId:m})=>m==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function wV(n,e,t,i){return ft(n).onIdTokenChanged(e,t,i)}function bV(n,e,t){return ft(n).beforeAuthStateChanged(e,t)}function SV(n){return ft(n).signOut()}const id="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(id,"1"),this.storage.removeItem(id),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV=1e3,CV=10;class BR extends jR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,f,m)=>{this.notifyListeners(u,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},o=this.storage.getItem(i);tV()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,CV):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},AV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}BR.type="LOCAL";const RV=BR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR extends jR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zR.type="SESSION";const FR=zR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IV(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new Kd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(u).map(async p=>p(t.origin,o)),m=await IV(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((f,m)=>{const p=$y("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},i);u={messageChannel:a,onMessage(E){const w=E;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),f(w.data.response);break;default:clearTimeout(y),clearTimeout(o),m(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(){return window}function xV(n){Bi().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(){return typeof Bi().WorkerGlobalScope<"u"&&typeof Bi().importScripts=="function"}async function DV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OV(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function MV(){return qR()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="firebaseLocalStorageDb",kV=1,rd="firebaseLocalStorage",GR="fbase_key";class Vc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qd(n,e){return n.transaction([rd],e?"readwrite":"readonly").objectStore(rd)}function PV(){const n=indexedDB.deleteDatabase(HR);return new Vc(n).toPromise()}function D_(){const n=indexedDB.open(HR,kV);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(rd,{keyPath:GR})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(rd)?e(i):(i.close(),await PV(),e(await D_()))})})}async function yb(n,e,t){const i=Qd(n,!0).put({[GR]:e,value:t});return new Vc(i).toPromise()}async function LV(n,e){const t=Qd(n,!1).get(e),i=await new Vc(t).toPromise();return i===void 0?null:i.value}function vb(n,e){const t=Qd(n,!0).delete(e);return new Vc(t).toPromise()}const VV=800,UV=3;class KR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await D_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>UV)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kd._getInstance(MV()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await DV(),!this.activeServiceWorker)return;this.sender=new NV(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await D_();return await yb(e,id,"1"),await vb(e,id),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>yb(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>LV(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>vb(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Qd(a,!1).getAll();return new Vc(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}KR.type="LOCAL";const jV=KR;new Pc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(n,e){return e?Cr(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy extends VR{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function BV(n){return vV(n.auth,new Yy(n),n.bypassAuthState)}function zV(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),yV(t,new Yy(n),n.bypassAuthState)}async function FV(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),_V(t,new Yy(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,t,i,a,o=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:o,error:u,type:f}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BV;case"linkViaPopup":case"linkViaRedirect":return FV;case"reauthViaPopup":case"reauthViaRedirect":return zV;default:Hi(this.auth,"internal-error")}}resolve(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV=new Pc(2e3,1e4);async function HV(n,e,t){if(ii(n.app))return Promise.reject(pi(n,"operation-not-supported-in-this-environment"));const i=Gd(n);UL(n,e,Qy);const a=QR(i,t);return new Na(i,"signInViaPopup",e,a).executeNotNull()}class Na extends $R{constructor(e,t,i,a,o){super(e,t,a,o),this.provider=i,this.authWindow=null,this.pollId=null,Na.currentPopupAction&&Na.currentPopupAction.cancel(),Na.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){kr(this.filter.length===1,"Popup operations only handle one event");const e=$y();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Na.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qV.get())};e()}}Na.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV="pendingRedirect",Of=new Map;class KV extends $R{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Of.get(this.auth._key());if(!e){try{const i=await QV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Of.set(this.auth._key(),e)}return this.bypassAuthState||Of.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QV(n,e){const t=WV(e),i=YV(n);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}function $V(n,e){Of.set(n._key(),e)}function YV(n){return Cr(n._redirectPersistence)}function WV(n){return Df(GV,n.config.apiKey,n.name)}async function XV(n,e,t=!1){if(ii(n.app))return Promise.reject(Oa(n));const i=Gd(n),a=QR(i,e),u=await new KV(i,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZV=10*60*1e3;class JV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!e4(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!YR(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(pi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZV&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eb(e))}saveEventToCache(e){this.cachedEventUids.add(Eb(e)),this.lastProcessedEventTime=Date.now()}}function Eb(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function YR({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function e4(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YR(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t4(n,e={}){return Ka(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i4=/^https?/;async function r4(n){if(n.config.emulator)return;const{authorizedDomains:e}=await t4(n);for(const t of e)try{if(s4(t))return}catch{}Hi(n,"unauthorized-domain")}function s4(n){const e=N_(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!i4.test(t))return!1;if(n4.test(n))return i===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=new Pc(3e4,6e4);function Tb(){const n=Bi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function o4(n){return new Promise((e,t)=>{var i,a,o;function u(){Tb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tb(),t(pi(n,"network-request-failed"))},timeout:a4.get()})}if(!((a=(i=Bi().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=Bi().gapi)===null||o===void 0)&&o.load)u();else{const f=cV("iframefcb");return Bi()[f]=()=>{gapi.load?u():t(pi(n,"network-request-failed"))},lV(`${uV()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Mf=null,e})}let Mf=null;function l4(n){return Mf=Mf||o4(n),Mf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4=new Pc(5e3,15e3),c4="__/auth/iframe",h4="emulator/auth/iframe",f4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function m4(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Fy(e,h4):`https://${n.config.authDomain}/${c4}`,i={apiKey:e.apiKey,appName:n.name,v:qa},a=d4.get(n.config.apiHost);a&&(i.eid=a);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${wl(i).slice(1)}`}async function p4(n){const e=await l4(n),t=Bi().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:m4(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f4,dontclear:!0},i=>new Promise(async(a,o)=>{await i.restyle({setHideOnLeave:!1});const u=pi(n,"network-request-failed"),f=Bi().setTimeout(()=>{o(u)},u4.get());function m(){Bi().clearTimeout(f),a(i)}i.ping(m).then(m,()=>{o(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_4=500,y4=600,v4="_blank",E4="http://localhost";class wb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function T4(n,e,t,i=_4,a=y4){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const m=Object.assign(Object.assign({},g4),{width:i.toString(),height:a.toString(),top:o,left:u}),p=dn().toLowerCase();t&&(f=NR(p)?v4:t),RR(p)&&(e=e||E4,m.scrollbars="yes");const y=Object.entries(m).reduce((w,[S,x])=>`${w}${S}=${x},`,"");if(eV(p)&&f!=="_self")return w4(e||"",f),new wb(null);const E=window.open(e||"",f,y);Se(E,n,"popup-blocked");try{E.focus()}catch{}return new wb(E)}function w4(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b4="__/auth/handler",S4="emulator/auth/handler",A4=encodeURIComponent("fac");async function bb(n,e,t,i,a,o){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:qa,eventId:a};if(e instanceof Qy){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",n_(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof Lc){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await n._getAppCheckToken(),p=m?`#${A4}=${encodeURIComponent(m)}`:"";return`${C4(n)}?${wl(f).slice(1)}${p}`}function C4({config:n}){return n.emulator?Fy(n,S4):`https://${n.authDomain}/${b4}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="webStorageSupport";class R4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=FR,this._completeRedirectFn=XV,this._overrideRedirectResult=$V}async _openPopup(e,t,i,a){var o;kr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await bb(e,t,i,N_(),a);return T4(e,u,$y())}async _openRedirect(e,t,i,a){await this._originValidation(e);const o=await bb(e,t,i,N_(),a);return xV(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(kr(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await p4(e),i=new JV(e);return t.register("authEvent",a=>(Se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(wg,{type:wg},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[wg];u!==void 0&&t(!!u),Hi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=r4(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kR()||IR()||Gy()}}const I4=R4;var Sb="@firebase/auth",Ab="1.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function D4(n){_i(new si("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;Se(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:u,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PR(n)},p=new aV(i,a,o,m);return fV(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),_i(new si("auth-internal",e=>{const t=Gd(e.getProvider("auth").getImmediate());return(i=>new N4(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Sb,Ab,x4(n)),In(Sb,Ab,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4=5*60,M4=rA("authIdTokenMaxAge")||O4;let Cb=null;const k4=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>M4)return;const a=t==null?void 0:t.token;Cb!==a&&(Cb=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function $d(n=wd()){const e=qs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=hV(n,{popupRedirectResolver:I4,persistence:[jV,RV,FR]}),i=rA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const u=k4(o.toString());bV(t,u,()=>u(t.currentUser)),wV(t,f=>u(f))}}const a=tA("auth");return a&&dV(t,`http://${a}`),t}function P4(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}oV({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=a=>{const o=pi("internal-error");o.customData=a,t(o)},i.type="text/javascript",i.charset="UTF-8",P4().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});D4("Browser");const L4={apiKey:"AIzaSyDk7mEkayeHxrKerk0hOOCsxmztdYh9uck",authDomain:"final-web-app-5880c.firebaseapp.com",projectId:"final-web-app-5880c",storageBucket:"final-web-app-5880c.firebasestorage.app",messagingSenderId:"725331159486",appId:"1:725331159486:web:3ac104befd96704203b1ef",measurementId:"G-P0380Q8BWN"},Wy=mA(L4),V4=Ld(Wy);OL(Wy);const U4=$d(Wy),j4=async()=>{const n=new br;try{const e=await HV(U4,n),t=e.user;if(console.log("User Logged In:",t),t){const{uid:i,displayName:a,email:o,photoURL:u}=t;console.log("Saving to Firestore:",i,a,o);const f=cl(V4,"users",i);return await R_(f,{uid:i,name:a,email:o,photoURL:u},{merge:!0}),console.log("Firestore Saved Successfully!"),e}}catch(e){throw console.error("Error signing in with Google:",e),e}},B4=()=>{const n=El(),[e,t]=Y.useState(!1);Y.useEffect(()=>{JSON.parse(localStorage.getItem("user"))&&n("/home")},[n]);const i=()=>{t(!0),j4().then(a=>{const o=a.user;localStorage.setItem("user",JSON.stringify(o)),n("/home")}).catch(a=>{console.error("Error during sign in: ",a.message),alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ: "+a.message)}).finally(()=>{t(!1)})};return e?D.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center",children:D.jsxs("div",{className:"p-8 bg-white rounded-xl shadow-xl",children:[D.jsx("div",{className:"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"}),D.jsx("p",{className:"mt-4 text-gray-600 font-medium text-center",children:"กำลังเข้าสู่ระบบ..."})]})}):D.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:D.jsxs("div",{className:"max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl transform transition-all hover:scale-[1.01]",children:[D.jsxs("div",{className:"text-center",children:[D.jsx("div",{className:"flex justify-center mb-8",children:D.jsx("div",{className:"p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full shadow-inner",children:D.jsxs("svg",{className:"w-14 h-14 text-blue-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[D.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),D.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]})})}),D.jsx("h1",{className:"text-4xl font-bold mb-3 text-gray-800 tracking-tight",children:"ระบบจัดการห้องเรียน"}),D.jsx("h2",{className:"text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text",children:"สำหรับอาจารย์"}),D.jsx("p",{className:"text-gray-600 text-lg",children:"กรุณาเข้าสู่ระบบด้วยบัญชี Google ของท่าน"})]}),D.jsx("button",{onClick:i,disabled:e,className:`w-full flex items-center justify-center px-6 py-4 
            text-gray-700 bg-white rounded-xl 
            border-2 border-gray-200
            hover:bg-gray-50 hover:border-blue-300 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transform transition-all duration-200 active:scale-95
            shadow-sm hover:shadow-md
            ${e?"opacity-50 cursor-not-allowed":""}`,children:e?D.jsx("div",{className:"w-6 h-6 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"}):D.jsxs(D.Fragment,{children:[D.jsx("svg",{className:"w-6 h-6 mr-3",viewBox:"0 0 24 24"}),D.jsx("span",{className:"text-lg font-medium cursor-pointer",children:"เข้าสู่ระบบด้วย Google"})]})}),D.jsx("div",{className:"mt-8 text-center text-sm text-gray-500",children:D.jsx("span",{className:"bg-yellow-50 px-3 py-1 rounded-full",children:"ระบบนี้รองรับการใช้งานผ่านบัญชี Google เท่านั้น"})})]})})},z4=()=>{const n=El(),e=$d(),t=Ld(),[i,a]=Y.useState([]),[o,u]=Y.useState(null),[f,m]=Y.useState(!1);Y.useEffect(()=>{const w=e.currentUser;if(w){u(w);const S=If(t,"classroom"),x=sP(S,aP("owner","==",w.uid));(async()=>{const z=(await C_(x)).docs.map(G=>{var W,re,J,O;const H=G.data();return{id:G.id,name:((W=H.info)==null?void 0:W.name)||"ไม่มีชื่อวิชา",code:((re=H.info)==null?void 0:re.code)||"ไม่มีรหัสวิชา",room:((J=H.info)==null?void 0:J.room)||"ไม่มีห้องเรียน",photo:((O=H.info)==null?void 0:O.photo)||"https://via.placeholder.com/400x200?text=No+Image"}});a(z)})()}else n("/")},[e,t,n]);const p=()=>{m(!0)},y=async()=>{try{await SV(e),localStorage.removeItem("user"),n("/",{replace:!0})}catch(w){console.error("Logout error:",w)}},E=()=>{m(!1)};return D.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50",children:[D.jsx("header",{className:"bg-white shadow-md",children:D.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsx("div",{className:"flex items-center space-x-3",children:D.jsx("h1",{className:"text-3xl font-bold text-indigo-600",children:"ระบบจัดการห้องเรียน"})}),D.jsxs("div",{className:"flex items-center space-x-6",children:[o&&D.jsxs("div",{className:"flex items-center bg-gray-50 rounded-full px-4 py-2",children:[D.jsx("img",{src:o.photoURL,alt:o.displayName,className:"w-10 h-10 rounded-full border-2 border-indigo-200"}),D.jsxs("div",{className:"ml-3",children:[D.jsx("p",{className:"text-sm font-semibold text-gray-800",children:o.displayName}),D.jsx("p",{className:"text-xs text-gray-500",children:o.email})]})]}),D.jsxs("div",{className:"flex items-center space-x-3",children:[D.jsx(Xu,{to:"/edit-profile",className:"px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors duration-200",children:"แก้ไขข้อมูลส่วนตัว"}),D.jsx(Xu,{to:"/add-course",className:"px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200",children:"เพิ่มวิชา"}),D.jsx("button",{onClick:p,className:"px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200",children:"ออกจากระบบ"})]})]})]})})}),D.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[D.jsx("div",{className:"flex justify-between items-center mb-8",children:D.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"รายวิชาที่สอน"})}),i.length===0?D.jsx("div",{className:"bg-white rounded-xl shadow-md p-8 text-center",children:D.jsx("p",{className:"text-gray-500 text-lg",children:"ยังไม่มีรายวิชาที่สอน กรุณาเพิ่มวิชาใหม่"})}):D.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:i.map(w=>D.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200",children:[D.jsx("div",{className:"h-48 bg-cover bg-center",style:{backgroundImage:`url(${w.photo})`}}),D.jsxs("div",{className:"p-6",children:[D.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:w.name}),D.jsxs("div",{className:"space-y-2 mb-6",children:[D.jsxs("p",{className:"text-gray-600 text-sm flex items-center",children:[D.jsx("span",{className:"font-medium mr-2",children:"รหัสวิชา:"}),w.code]}),D.jsxs("p",{className:"text-gray-600 text-sm flex items-center",children:[D.jsx("span",{className:"font-medium mr-2",children:"ห้องเรียน:"}),w.room]})]}),D.jsx(Xu,{to:`/manage-classroom/${w.id}`,className:"block w-full text-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium",children:"จัดการห้องเรียน"})]})]},w.id))})]}),f&&D.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 popup-logout",children:D.jsxs("div",{className:"bg-white rounded-xl p-8 max-w-sm w-full mx-4 shadow-2xl",children:[D.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"ยืนยันการออกจากระบบ"}),D.jsx("p",{className:"text-gray-600 mb-6",children:"คุณต้องการออกจากระบบใช่หรือไม่?"}),D.jsxs("div",{className:"flex justify-end space-x-4",children:[D.jsx("button",{onClick:E,className:"px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium",children:"ยกเลิก"}),D.jsx("button",{onClick:y,className:"px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium",children:"ยืนยัน"})]})]})})]})};var Rb={};const Ib="@firebase/database",Nb="1.0.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WR="";function F4(n){WR=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:cc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return $i(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new q4(e)}}catch{}return new H4},xa=XR("localStorage"),G4=XR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=new Nc("@firebase/database"),K4=function(){let n=1;return function(){return n++}}(),ZR=function(n){const e=B2(n),t=new L2;t.update(e);const i=t.digest();return W_.encodeByteArray(i)},Uc=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Uc.apply(null,i):typeof i=="object"?e+=Ut(i):e+=i,e+=" "}return e};let rc=null,xb=!0;const Q4=function(n,e){ae(!0,"Can't turn on custom loggers persistently."),Jo.logLevel=Le.VERBOSE,rc=Jo.log.bind(Jo)},nn=function(...n){if(xb===!0&&(xb=!1,rc===null&&G4.get("logging_enabled")===!0&&Q4()),rc){const e=Uc.apply(null,n);rc(e)}},jc=function(n){return function(...e){nn(n,...e)}},O_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Uc(...n);Jo.error(e)},Pr=function(...n){const e=`FIREBASE FATAL ERROR: ${Uc(...n)}`;throw Jo.error(e),new Error(e)},xn=function(...n){const e="FIREBASE WARNING: "+Uc(...n);Jo.warn(e)},$4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xy=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Y4=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ml="[MIN_NAME]",Ua="[MAX_NAME]",Qa=function(n,e){if(n===e)return 0;if(n===ml||e===Ua)return-1;if(e===ml||n===Ua)return 1;{const t=Db(n),i=Db(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},W4=function(n,e){return n===e?0:n<e?-1:1},Fu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ut(e))},Zy=function(n){if(typeof n!="object"||n===null)return Ut(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Ut(e[i]),t+=":",t+=Zy(n[e[i]]);return t+="}",t},JR=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let a=0;a<t;a+=e)a+e>t?i.push(n.substring(a,t)):i.push(n.substring(a,a+e));return i};function an(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const eI=function(n){ae(!Xy(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let a,o,u,f,m;n===0?(o=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),i),o=f+i,u=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(o=0,u=Math.round(n/Math.pow(2,1-i-t))));const p=[];for(m=t;m;m-=1)p.push(u%2?1:0),u=Math.floor(u/2);for(m=e;m;m-=1)p.push(o%2?1:0),o=Math.floor(o/2);p.push(a?1:0),p.reverse();const y=p.join("");let E="";for(m=0;m<64;m+=8){let w=parseInt(y.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),E=E+w}return E.toLowerCase()},X4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Z4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function J4(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const eU=new RegExp("^-?(0*)\\d{1,10}$"),tU=-2147483648,nU=2147483647,Db=function(n){if(eU.test(n)){const e=Number(n);if(e>=tU&&e<=nU)return e}return null},xl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xn("Exception was thrown by user callback.",t),e},Math.floor(0))}},iU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},sc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ii(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){xn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(nn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xn(e)}}class kf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}kf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="5",tI="v",nI="s",iI="r",rI="f",sI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aI="ls",oI="p",M_="ac",lI="websocket",uI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,t,i,a,o=!1,u="",f=!1,m=!1){this.secure=t,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function aU(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function hI(n,e,t){ae(typeof e=="string","typeof type must == string"),ae(typeof t=="object","typeof params must == object");let i;if(e===lI)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===uI)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);aU(n)&&(t.ns=n.namespace);const a=[];return an(t,(o,u)=>{a.push(o+"="+u)}),i+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(){this.counters_={}}incrementCounter(e,t=1){$i(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return v2(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg={},Sg={};function ev(n){const e=n.toString();return bg[e]||(bg[e]=new oU),bg[e]}function lU(n,e){const t=n.toString();return Sg[t]||(Sg[t]=e()),Sg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&xl(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="start",cU="close",hU="pLPCommand",fU="pRTLPCB",fI="id",dI="pw",mI="ser",dU="cb",mU="seg",pU="ts",gU="d",_U="dframe",pI=1870,gI=30,yU=pI-gI,vU=25e3,EU=3e4;class $o{constructor(e,t,i,a,o,u,f){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jc(e),this.stats_=ev(t),this.urlFn=m=>(this.appCheckToken&&(m[M_]=this.appCheckToken),hI(t,uI,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new uU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EU)),Y4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tv((...o)=>{const[u,f,m,p,y]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Ob)this.id=f,this.password=m;else if(u===cU)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...o)=>{const[u,f]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ob]="t",i[mI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[dU]=this.scriptTagHolder.uniqueCallbackIdentifier),i[tI]=Jy,this.transportSessionId&&(i[nI]=this.transportSessionId),this.lastSessionId&&(i[aI]=this.lastSessionId),this.applicationId&&(i[oI]=this.applicationId),this.appCheckToken&&(i[M_]=this.appCheckToken),typeof location<"u"&&location.hostname&&sI.test(location.hostname)&&(i[iI]=rI);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$o.forceAllow_=!0}static forceDisallow(){$o.forceDisallow_=!0}static isAvailable(){return $o.forceAllow_?!0:!$o.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!X4()&&!Z4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=JS(t),a=JR(i,yU);for(let o=0;o<a.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[_U]="t",i[fI]=e,i[dI]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ut(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class tv{constructor(e,t,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=K4(),window[hU+this.uniqueCallbackIdentifier]=e,window[fU+this.uniqueCallbackIdentifier]=t,this.myIFrame=tv.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){nn("frame writing exception"),f.stack&&nn(f.stack),nn(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fI]=this.myID,e[dI]=this.myPW,e[mI]=this.currentSerial;let t=this.urlFn(e),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gI+i.length<=pI;){const u=this.pendingSegs.shift();i=i+"&"+mU+a+"="+u.seg+"&"+pU+a+"="+u.ts+"&"+gU+a+"="+u.d,a++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(i,Math.floor(vU)),o=()=>{clearTimeout(a),i()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{nn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TU=16384,wU=45e3;let sd=null;typeof MozWebSocket<"u"?sd=MozWebSocket:typeof WebSocket<"u"&&(sd=WebSocket);class fi{constructor(e,t,i,a,o,u,f){this.connId=e,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jc(this.connId),this.stats_=ev(t),this.connURL=fi.connectionURL_(t,u,f,a,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,a,o){const u={};return u[tI]=Jy,typeof location<"u"&&location.hostname&&sI.test(location.hostname)&&(u[iI]=rI),t&&(u[nI]=t),i&&(u[aI]=i),a&&(u[M_]=a),o&&(u[oI]=o),hI(e,lI,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xa.set("previous_websocket_failure",!0);try{let i;I2(),this.mySock=new sd(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){fi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&sd!==null&&!fi.forceDisallow_}static previouslyFailed(){return xa.isInMemoryStorage||xa.get("previous_websocket_failure")===!0}markConnectionHealthy(){xa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=cc(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ae(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=JR(t,TU);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wU))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fi.responsesRequiredToBeHealthy=2;fi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{static get ALL_TRANSPORTS(){return[$o,fi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=fi&&fi.isAvailable();let i=t&&!fi.previouslyFailed();if(e.webSocketOnly&&(t||xn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[fi];else{const a=this.transports_=[];for(const o of _c.ALL_TRANSPORTS)o&&o.isAvailable()&&a.push(o);_c.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_c.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bU=6e4,SU=5e3,AU=10*1024,CU=100*1024,Ag="t",Mb="d",RU="s",kb="r",IU="e",Pb="o",Lb="a",Vb="n",Ub="p",NU="h";class xU{constructor(e,t,i,a,o,u,f,m,p,y){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=m,this.onKill_=p,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jc("c:"+this.id+":"),this.transportManager_=new _c(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=sc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>CU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>AU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ag in e){const t=e[Ag];t===Lb?this.upgradeIfSecondaryHealthy_():t===kb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Pb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Fu("t",e),i=Fu("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ub,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Lb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Fu("t",e),i=Fu("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Fu(Ag,e);if(Mb in e){const i=e[Mb];if(t===NU){const a=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===Vb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===RU?this.onConnectionShutdown_(i):t===kb?this.onReset_(i):t===IU?O_("Server Error: "+i):t===Pb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):O_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Jy!==i&&xn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),sc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(bU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):sc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(SU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ub,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{put(e,t,i,a){}merge(e,t,i,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.allowedEvents_=e,this.listeners_={},ae(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const a=this.getInitialEvent(e);a&&t.apply(i,a)}off(e,t,i){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let o=0;o<a.length;o++)if(a[o].callback===t&&(!i||i===a[o].context)){a.splice(o,1);return}}validateEventType_(e){ae(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad extends yI{static getInstance(){return new ad}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!X_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ae(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=32,Bb=768;class st{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Xe(){return new st("")}function ze(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Bs(n){return n.pieces_.length-n.pieceNum_}function ct(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new st(n.pieces_,e)}function nv(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function DU(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function yc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function vI(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new st(e,0)}function Tt(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof st)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&t.push(i[a])}return new st(t,0)}function Ve(n){return n.pieceNum_>=n.pieces_.length}function En(n,e){const t=ze(n),i=ze(e);if(t===null)return e;if(t===i)return En(ct(n),ct(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function OU(n,e){const t=yc(n,0),i=yc(e,0);for(let a=0;a<t.length&&a<i.length;a++){const o=Qa(t[a],i[a]);if(o!==0)return o}return t.length===i.length?0:t.length<i.length?-1:1}function EI(n,e){if(Bs(n)!==Bs(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ri(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Bs(n)>Bs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class MU{constructor(e,t){this.errorPrefix_=t,this.parts_=yc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Td(this.parts_[i]);TI(this)}}function kU(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Td(e),TI(n)}function PU(n){const e=n.parts_.pop();n.byteLength_-=Td(e),n.parts_.length>0&&(n.byteLength_-=1)}function TI(n){if(n.byteLength_>Bb)throw new Error(n.errorPrefix_+"has a key path longer than "+Bb+" bytes ("+n.byteLength_+").");if(n.parts_.length>jb)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+jb+") or object contains a cycle "+Ca(n))}function Ca(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv extends yI{static getInstance(){return new iv}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return ae(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=1e3,LU=60*5*1e3,zb=30*1e3,VU=1.3,UU=3e4,jU="server_kill",Fb=3;class xr extends _I{constructor(e,t,i,a,o,u,f,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=o,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=xr.nextPersistentConnectionId_++,this.log_=jc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qu,this.maxReconnectDelay_=LU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");iv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ad.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const a=++this.requestNumber_,o={r:a,a:e,b:t};this.log_(Ut(o)),ae(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[a]=i)}get(e){this.initConnection_();const t=new Ed,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,i,a){this.initConnection_();const o=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+o),this.listens.has(u)||this.listens.set(u,new Map),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ae(!this.listens.get(u).has(o),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:t,query:e,tag:i};this.listens.get(u).set(o,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+i+" for "+a);const o={p:i},u="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(u,o,f=>{const m=f.d,p=f.s;xr.warnOnListenWarnings_(m,t),(this.listens.get(i)&&this.listens.get(i).get(a))===e&&(this.log_("listen response",f),p!=="ok"&&this.removeListen_(i,a),e.onComplete&&e.onComplete(p,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&$i(e,"w")){const i=tl(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();xn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||P2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=zb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=k2(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,a=>{const o=a.s,u=a.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,e._queryObject,t)}sendUnlisten_(e,t,i,a){this.log_("Unlisten on "+e+" for "+t);const o={p:e},u="n";a&&(o.q=i,o.t=a),this.sendRequest(u,o)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,a){const o={p:t,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,i,a){this.putInternal("p",e,t,i,a)}merge(e,t,i,a){this.putInternal("m",e,t,i,a)}putInternal(e,t,i,a,o){this.initConnection_();const u={p:t,d:i};o!==void 0&&(u.h=o),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):O_("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ae(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UU&&(this.reconnectDelay_=qu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*VU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+xr.nextConnectionId_++,o=this.lastSessionId;let u=!1,f=null;const m=function(){f?f.close():(u=!0,i())},p=function(E){ae(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(E)};this.realtime_={close:m,sendRequest:p};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?nn("getToken() completed but was canceled"):(nn("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=w&&w.token,f=new xU(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,S=>{xn(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(jU)},o))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&xn(E),m())}}}interrupt(e){nn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],n_(this.interruptReasons_)&&(this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(o=>Zy(o)).join("$"):i="default";const a=this.removeListen_(e,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const i=new st(e).toString();let a;if(this.listens.has(i)){const o=this.listens.get(i);a=o.get(t),o.delete(t),o.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(e,t){nn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Fb&&(this.reconnectDelay_=zb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){nn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Fb&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+WR.replace(/\./g,"-")]=1,X_()?e["framework.cordova"]=1:oA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ad.getInstance().currentlyOnline();return n_(this.interruptReasons_)&&e}}xr.nextPersistentConnectionId_=0;xr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ke(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new ke(ml,e),a=new ke(ml,t);return this.compare(i,a)!==0}minPost(){return ke.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yf;class wI extends Yd{static get __EMPTY_NODE(){return yf}static set __EMPTY_NODE(e){yf=e}compare(e,t){return Qa(e.name,t.name)}isDefinedOn(e){throw Tl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ke.MIN}maxPost(){return new ke(Ua,yf)}makePost(e,t){return ae(typeof e=="string","KeyIndex indexValue must always be a string."),new ke(e,yf)}toString(){return".key"}}const el=new wI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,i,a,o=null){this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?i(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,t,i,a,o){this.key=e,this.value=t,this.color=i??Wt.RED,this.left=a??Rn.EMPTY_NODE,this.right=o??Rn.EMPTY_NODE}copy(e,t,i,a,o){return new Wt(e??this.key,t??this.value,i??this.color,a??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const o=i(e,a.key);return o<0?a=a.copy(null,null,null,a.left.insert(e,t,i),null):o===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,a;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Rn.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0;Wt.BLACK=!1;class BU{copy(e,t,i,a,o){return this}insert(e,t,i){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rn{constructor(e,t=Rn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,a=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new vf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new vf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new vf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new vf(this.root_,null,this.comparator_,!0,e)}}Rn.EMPTY_NODE=new BU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zU(n,e){return Qa(n.name,e.name)}function rv(n,e){return Qa(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k_;function FU(n){k_=n}const bI=function(n){return typeof n=="number"?"number:"+eI(n):"string:"+n},SI=function(n){if(n.isLeafNode()){const e=n.val();ae(typeof e=="string"||typeof e=="number"||typeof e=="object"&&$i(e,".sv"),"Priority must be a string or number.")}else ae(n===k_||n.isEmpty(),"priority of unexpected type.");ae(n===k_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qb;class $t{static set __childrenNodeConstructor(e){qb=e}static get __childrenNodeConstructor(){return qb}constructor(e,t=$t.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ae(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),SI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $t(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$t.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ve(e)?this:ze(e)===".priority"?this.priorityNode_:$t.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=ze(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ae(i!==".priority"||Bs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,$t.__childrenNodeConstructor.EMPTY_NODE.updateChild(ct(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+bI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=eI(this.value_):e+=this.value_,this.lazyHash_=ZR(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $t.__childrenNodeConstructor?-1:(ae(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,a=$t.VALUE_TYPE_ORDER.indexOf(t),o=$t.VALUE_TYPE_ORDER.indexOf(i);return ae(a>=0,"Unknown leaf type: "+t),ae(o>=0,"Unknown leaf type: "+i),a===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$t.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AI,CI;function qU(n){AI=n}function HU(n){CI=n}class GU extends Yd{compare(e,t){const i=e.node.getPriority(),a=t.node.getPriority(),o=i.compareTo(a);return o===0?Qa(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ke.MIN}maxPost(){return new ke(Ua,new $t("[PRIORITY-POST]",CI))}makePost(e,t){const i=AI(e);return new ke(t,new $t("[PRIORITY-POST]",i))}toString(){return".priority"}}const wt=new GU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KU=Math.log(2);class QU{constructor(e){const t=o=>parseInt(Math.log(o)/KU,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=i(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const od=function(n,e,t,i){n.sort(e);const a=function(m,p){const y=p-m;let E,w;if(y===0)return null;if(y===1)return E=n[m],w=t?t(E):E,new Wt(w,E.node,Wt.BLACK,null,null);{const S=parseInt(y/2,10)+m,x=a(m,S),j=a(S+1,p);return E=n[S],w=t?t(E):E,new Wt(w,E.node,Wt.BLACK,x,j)}},o=function(m){let p=null,y=null,E=n.length;const w=function(x,j){const V=E-x,z=E;E-=x;const G=a(V+1,z),H=n[V],W=t?t(H):H;S(new Wt(W,H.node,j,null,G))},S=function(x){p?(p.left=x,p=x):(y=x,p=x)};for(let x=0;x<m.count;++x){const j=m.nextBitIsOne(),V=Math.pow(2,m.count-(x+1));j?w(V,Wt.BLACK):(w(V,Wt.BLACK),w(V,Wt.RED))}return y},u=new QU(n.length),f=o(u);return new Rn(i||e,f)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cg;const Fo={};class Rr{static get Default(){return ae(Fo&&wt,"ChildrenNode.ts has not been loaded"),Cg=Cg||new Rr({".priority":Fo},{".priority":wt}),Cg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=tl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rn?t:null}hasIndex(e){return $i(this.indexSet_,e.toString())}addIndex(e,t){ae(e!==el,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const o=t.getIterator(ke.Wrap);let u=o.getNext();for(;u;)a=a||e.isDefinedOn(u.node),i.push(u),u=o.getNext();let f;a?f=od(i,e.getCompare()):f=Fo;const m=e.toString(),p=Object.assign({},this.indexSet_);p[m]=e;const y=Object.assign({},this.indexes_);return y[m]=f,new Rr(y,p)}addToIndexes(e,t){const i=Uf(this.indexes_,(a,o)=>{const u=tl(this.indexSet_,o);if(ae(u,"Missing index implementation for "+o),a===Fo)if(u.isDefinedOn(e.node)){const f=[],m=t.getIterator(ke.Wrap);let p=m.getNext();for(;p;)p.name!==e.name&&f.push(p),p=m.getNext();return f.push(e),od(f,u.getCompare())}else return Fo;else{const f=t.get(e.name);let m=a;return f&&(m=m.remove(new ke(e.name,f))),m.insert(e,e.node)}});return new Rr(i,this.indexSet_)}removeFromIndexes(e,t){const i=Uf(this.indexes_,a=>{if(a===Fo)return a;{const o=t.get(e.name);return o?a.remove(new ke(e.name,o)):a}});return new Rr(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu;class we{static get EMPTY_NODE(){return Hu||(Hu=new we(new Rn(rv),null,Rr.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&SI(this.priorityNode_),this.children_.isEmpty()&&ae(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Hu}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Hu:t}}getChild(e){const t=ze(e);return t===null?this:this.getImmediateChild(t).getChild(ct(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ae(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new ke(e,t);let a,o;t.isEmpty()?(a=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(i,this.children_));const u=a.isEmpty()?Hu:this.priorityNode_;return new we(a,u,o)}}updateChild(e,t){const i=ze(e);if(i===null)return t;{ae(ze(e)!==".priority"||Bs(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(ct(e),t);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,a=0,o=!0;if(this.forEachChild(wt,(u,f)=>{t[u]=f.val(e),i++,o&&we.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):o=!1}),!e&&o&&a<2*i){const u=[];for(const f in t)u[f]=t[f];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+bI(this.getPriority().val())+":"),this.forEachChild(wt,(t,i)=>{const a=i.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":ZR(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const a=this.resolveIndex_(i);if(a){const o=a.getPredecessorKey(new ke(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ke(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ke(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,ke.Wrap);let o=a.peek();for(;o!=null&&t.compare(o,e)<0;)a.getNext(),o=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,ke.Wrap);let o=a.peek();for(;o!=null&&t.compare(o,e)>0;)a.getNext(),o=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bc?-1:0}withIndex(e){if(e===el||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===el||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(wt),a=t.getIterator(wt);let o=i.getNext(),u=a.getNext();for(;o&&u;){if(o.name!==u.name||!o.node.equals(u.node))return!1;o=i.getNext(),u=a.getNext()}return o===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===el?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class $U extends we{constructor(){super(new Rn(rv),we.EMPTY_NODE,Rr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Bc=new $U;Object.defineProperties(ke,{MIN:{value:new ke(ml,we.EMPTY_NODE)},MAX:{value:new ke(Ua,Bc)}});wI.__EMPTY_NODE=we.EMPTY_NODE;$t.__childrenNodeConstructor=we;FU(Bc);HU(Bc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YU=!0;function Xt(n,e=null){if(n===null)return we.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ae(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $t(t,Xt(e))}if(!(n instanceof Array)&&YU){const t=[];let i=!1;if(an(n,(u,f)=>{if(u.substring(0,1)!=="."){const m=Xt(f);m.isEmpty()||(i=i||!m.getPriority().isEmpty(),t.push(new ke(u,m)))}}),t.length===0)return we.EMPTY_NODE;const o=od(t,zU,u=>u.name,rv);if(i){const u=od(t,wt.getCompare());return new we(o,Xt(e),new Rr({".priority":u},{".priority":wt}))}else return new we(o,Xt(e),Rr.Default)}else{let t=we.EMPTY_NODE;return an(n,(i,a)=>{if($i(n,i)&&i.substring(0,1)!=="."){const o=Xt(a);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(i,o))}}),t.updatePriority(Xt(e))}}qU(Xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WU extends Yd{constructor(e){super(),this.indexPath_=e,ae(!Ve(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),a=this.extractChild(t.node),o=i.compareTo(a);return o===0?Qa(e.name,t.name):o}makePost(e,t){const i=Xt(e),a=we.EMPTY_NODE.updateChild(this.indexPath_,i);return new ke(t,a)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Bc);return new ke(Ua,e)}toString(){return yc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XU extends Yd{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Qa(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ke.MIN}maxPost(){return ke.MAX}makePost(e,t){const i=Xt(e);return new ke(t,i)}toString(){return".value"}}const ZU=new XU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(n){return{type:"value",snapshotNode:n}}function pl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ec(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function JU(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e){this.index_=e}updateChild(e,t,i,a,o,u){ae(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(a).equals(i.getChild(a))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?e.hasChild(t)?u.trackChildChange(vc(t,f)):ae(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(pl(t,i)):u.trackChildChange(Ec(t,i,f))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(wt,(a,o)=>{t.hasChild(a)||i.trackChildChange(vc(a,o))}),t.isLeafNode()||t.forEachChild(wt,(a,o)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(o)||i.trackChildChange(Ec(a,o,u))}else i.trackChildChange(pl(a,o))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?we.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.indexedFilter_=new sv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tc.getStartPost_(e),this.endPost_=Tc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,a,o,u){return this.matches(new ke(t,i))||(i=we.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,a,o,u)}updateFullNode(e,t,i){t.isLeafNode()&&(t=we.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(we.EMPTY_NODE);const o=this;return t.forEachChild(wt,(u,f)=>{o.matches(new ke(u,f))||(a=a.updateImmediateChild(u,we.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Tc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,a,o,u){return this.rangedFilter_.matches(new ke(t,i))||(i=we.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,a,o,u):this.fullLimitUpdateChild_(e,t,i,o,u)}updateFullNode(e,t,i){let a;if(t.isLeafNode()||t.isEmpty())a=we.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=we.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;o.hasNext()&&u<this.limit_;){const f=o.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(we.EMPTY_NODE);let o;this.reverse_?o=a.getReverseIterator(this.index_):o=a.getIterator(this.index_);let u=0;for(;o.hasNext();){const f=o.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:a=a.updateImmediateChild(f.name,we.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,a,o){let u;if(this.reverse_){const E=this.index_.getCompare();u=(w,S)=>E(S,w)}else u=this.index_.getCompare();const f=e;ae(f.numChildren()===this.limit_,"");const m=new ke(t,i),p=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(m);if(f.hasChild(t)){const E=f.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,p,this.reverse_);for(;w!=null&&(w.name===t||f.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const S=w==null?1:u(w,m);if(y&&!i.isEmpty()&&S>=0)return o!=null&&o.trackChildChange(Ec(t,i,E)),f.updateImmediateChild(t,i);{o!=null&&o.trackChildChange(vc(t,E));const j=f.updateImmediateChild(t,we.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(o!=null&&o.trackChildChange(pl(w.name,w.node)),j.updateImmediateChild(w.name,w.node)):j}}else return i.isEmpty()?e:y&&u(p,m)>=0?(o!=null&&(o.trackChildChange(vc(p.name,p.node)),o.trackChildChange(pl(t,i))),f.updateImmediateChild(t,i).updateImmediateChild(p.name,we.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ae(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ae(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ml}hasEnd(){return this.endSet_}getIndexEndValue(){return ae(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ae(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ua}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ae(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new av;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function t6(n){return n.loadsAllData()?new sv(n.getIndex()):n.hasLimit()?new e6(n):new Tc(n)}function Hb(n){const e={};if(n.isDefault())return e;let t;if(n.index_===wt?t="$priority":n.index_===ZU?t="$value":n.index_===el?t="$key":(ae(n.index_ instanceof WU,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ut(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Ut(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Ut(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Ut(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Ut(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Gb(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==wt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ld extends _I{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ae(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=jc("p:rest:"),this.listens_={}}listen(e,t,i,a){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const u=ld.getListenId_(e,i),f={};this.listens_[u]=f;const m=Hb(e._queryParams);this.restRequest_(o+".json",m,(p,y)=>{let E=y;if(p===404&&(E=null,p=null),p===null&&this.onDataUpdate_(o,E,!1,i),tl(this.listens_,u)===f){let w;p?p===401?w="permission_denied":w="rest_error:"+p:w="ok",a(w,null)}})}unlisten(e,t){const i=ld.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Hb(e._queryParams),i=e._path.toString(),a=new Ed;return this.restRequest_(i+".json",t,(o,u)=>{let f=u;o===404&&(f=null,o=null),o===null?(this.onDataUpdate_(i,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,o])=>{a&&a.accessToken&&(t.auth=a.accessToken),o&&o.token&&(t.ac=o.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wl(t);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=cc(f.responseText)}catch{xn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,m)}else f.status!==401&&f.status!==404&&xn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ud(){return{value:null,children:new Map}}function II(n,e,t){if(Ve(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=ze(e);n.children.has(i)||n.children.set(i,ud());const a=n.children.get(i);e=ct(e),II(a,e,t)}}function P_(n,e,t){n.value!==null?t(e,n.value):i6(n,(i,a)=>{const o=new st(e.toString()+"/"+i);P_(a,o,t)})}function i6(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&an(this.last_,(i,a)=>{t[i]=t[i]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb=10*1e3,s6=30*1e3,a6=5*60*1e3;class o6{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new r6(e);const i=Kb+(s6-Kb)*Math.random();sc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;an(e,(a,o)=>{o>0&&$i(this.statsToReport_,a)&&(t[a]=o,i=!0)}),i&&this.server_.reportStats(t),sc(this.reportStats_.bind(this),Math.floor(Math.random()*2*a6))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(di||(di={}));function ov(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=di.ACK_USER_WRITE,this.source=ov()}operationForChild(e){if(Ve(this.path)){if(this.affectedTree.value!=null)return ae(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new st(e));return new cd(Xe(),t,this.revert)}}else return ae(ze(this.path)===e,"operationForChild called for unrelated child."),new cd(ct(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.source=e,this.path=t,this.type=di.LISTEN_COMPLETE}operationForChild(e){return Ve(this.path)?new wc(this.source,Xe()):new wc(this.source,ct(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=di.OVERWRITE}operationForChild(e){return Ve(this.path)?new ja(this.source,Xe(),this.snap.getImmediateChild(e)):new ja(this.source,ct(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=di.MERGE}operationForChild(e){if(Ve(this.path)){const t=this.children.subtree(new st(e));return t.isEmpty()?null:t.value?new ja(this.source,Xe(),t.value):new gl(this.source,Xe(),t)}else return ae(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gl(this.source,ct(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=ze(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l6{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function u6(n,e,t,i){const a=[],o=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&o.push(JU(u.childName,u.snapshotNode))}),Gu(n,a,"child_removed",e,i,t),Gu(n,a,"child_added",e,i,t),Gu(n,a,"child_moved",o,i,t),Gu(n,a,"child_changed",e,i,t),Gu(n,a,"value",e,i,t),a}function Gu(n,e,t,i,a,o){const u=i.filter(f=>f.type===t);u.sort((f,m)=>h6(n,f,m)),u.forEach(f=>{const m=c6(n,f,o);a.forEach(p=>{p.respondsTo(f.type)&&e.push(p.createEvent(m,n.query_))})})}function c6(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function h6(n,e,t){if(e.childName==null||t.childName==null)throw Tl("Should only compare child_ events.");const i=new ke(e.childName,e.snapshotNode),a=new ke(t.childName,t.snapshotNode);return n.index_.compare(i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(n,e){return{eventCache:n,serverCache:e}}function ac(n,e,t,i){return Wd(new zs(e,t,i),n.serverCache)}function NI(n,e,t,i){return Wd(n.eventCache,new zs(e,t,i))}function hd(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ba(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rg;const f6=()=>(Rg||(Rg=new Rn(W4)),Rg);class ut{static fromObject(e){let t=new ut(null);return an(e,(i,a)=>{t=t.set(new st(i),a)}),t}constructor(e,t=f6()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Xe(),value:this.value};if(Ve(e))return null;{const i=ze(e),a=this.children.get(i);if(a!==null){const o=a.findRootMostMatchingPathAndValue(ct(e),t);return o!=null?{path:Tt(new st(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ve(e))return this;{const t=ze(e),i=this.children.get(t);return i!==null?i.subtree(ct(e)):new ut(null)}}set(e,t){if(Ve(e))return new ut(t,this.children);{const i=ze(e),o=(this.children.get(i)||new ut(null)).set(ct(e),t),u=this.children.insert(i,o);return new ut(this.value,u)}}remove(e){if(Ve(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=ze(e),i=this.children.get(t);if(i){const a=i.remove(ct(e));let o;return a.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,a),this.value===null&&o.isEmpty()?new ut(null):new ut(this.value,o)}else return this}}get(e){if(Ve(e))return this.value;{const t=ze(e),i=this.children.get(t);return i?i.get(ct(e)):null}}setTree(e,t){if(Ve(e))return t;{const i=ze(e),o=(this.children.get(i)||new ut(null)).setTree(ct(e),t);let u;return o.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,o),new ut(this.value,u)}}fold(e){return this.fold_(Xe(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((a,o)=>{i[a]=o.fold_(Tt(e,a),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Xe(),t)}findOnPath_(e,t,i){const a=this.value?i(t,this.value):!1;if(a)return a;if(Ve(e))return null;{const o=ze(e),u=this.children.get(o);return u?u.findOnPath_(ct(e),Tt(t,o),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Xe(),t)}foreachOnPath_(e,t,i){if(Ve(e))return this;{this.value&&i(t,this.value);const a=ze(e),o=this.children.get(a);return o?o.foreachOnPath_(ct(e),Tt(t,a),i):new ut(null)}}foreach(e){this.foreach_(Xe(),e)}foreach_(e,t){this.children.inorderTraversal((i,a)=>{a.foreach_(Tt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.writeTree_=e}static empty(){return new gi(new ut(null))}}function oc(n,e,t){if(Ve(e))return new gi(new ut(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const a=i.path;let o=i.value;const u=En(a,e);return o=o.updateChild(u,t),new gi(n.writeTree_.set(a,o))}else{const a=new ut(t),o=n.writeTree_.setTree(e,a);return new gi(o)}}}function L_(n,e,t){let i=n;return an(t,(a,o)=>{i=oc(i,Tt(e,a),o)}),i}function Qb(n,e){if(Ve(e))return gi.empty();{const t=n.writeTree_.setTree(e,new ut(null));return new gi(t)}}function V_(n,e){return $a(n,e)!=null}function $a(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(En(t.path,e)):null}function $b(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(wt,(i,a)=>{e.push(new ke(i,a))}):n.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&e.push(new ke(i,a.value))}),e}function Ds(n,e){if(Ve(e))return n;{const t=$a(n,e);return t!=null?new gi(new ut(t)):new gi(n.writeTree_.subtree(e))}}function U_(n){return n.writeTree_.isEmpty()}function _l(n,e){return xI(Xe(),n.writeTree_,e)}function xI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((a,o)=>{a===".priority"?(ae(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):t=xI(Tt(n,a),o,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Tt(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n,e){return kI(e,n)}function d6(n,e,t,i,a){ae(i>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:a}),a&&(n.visibleWrites=oc(n.visibleWrites,e,t)),n.lastWriteId=i}function m6(n,e,t,i){ae(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=L_(n.visibleWrites,e,t),n.lastWriteId=i}function p6(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function g6(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);ae(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let a=i.visible,o=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const f=n.allWrites[u];f.visible&&(u>=t&&_6(f,i.path)?a=!1:ri(i.path,f.path)&&(o=!0)),u--}if(a){if(o)return y6(n),!0;if(i.snap)n.visibleWrites=Qb(n.visibleWrites,i.path);else{const f=i.children;an(f,m=>{n.visibleWrites=Qb(n.visibleWrites,Tt(i.path,m))})}return!0}else return!1}function _6(n,e){if(n.snap)return ri(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ri(Tt(n.path,t),e))return!0;return!1}function y6(n){n.visibleWrites=DI(n.allWrites,v6,Xe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function v6(n){return n.visible}function DI(n,e,t){let i=gi.empty();for(let a=0;a<n.length;++a){const o=n[a];if(e(o)){const u=o.path;let f;if(o.snap)ri(t,u)?(f=En(t,u),i=oc(i,f,o.snap)):ri(u,t)&&(f=En(u,t),i=oc(i,Xe(),o.snap.getChild(f)));else if(o.children){if(ri(t,u))f=En(t,u),i=L_(i,f,o.children);else if(ri(u,t))if(f=En(u,t),Ve(f))i=L_(i,Xe(),o.children);else{const m=tl(o.children,ze(f));if(m){const p=m.getChild(ct(f));i=oc(i,Xe(),p)}}}else throw Tl("WriteRecord should have .snap or .children")}}return i}function OI(n,e,t,i,a){if(!i&&!a){const o=$a(n.visibleWrites,e);if(o!=null)return o;{const u=Ds(n.visibleWrites,e);if(U_(u))return t;if(t==null&&!V_(u,Xe()))return null;{const f=t||we.EMPTY_NODE;return _l(u,f)}}}else{const o=Ds(n.visibleWrites,e);if(!a&&U_(o))return t;if(!a&&t==null&&!V_(o,Xe()))return null;{const u=function(p){return(p.visible||a)&&(!i||!~i.indexOf(p.writeId))&&(ri(p.path,e)||ri(e,p.path))},f=DI(n.allWrites,u,e),m=t||we.EMPTY_NODE;return _l(f,m)}}}function E6(n,e,t){let i=we.EMPTY_NODE;const a=$a(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(wt,(o,u)=>{i=i.updateImmediateChild(o,u)}),i;if(t){const o=Ds(n.visibleWrites,e);return t.forEachChild(wt,(u,f)=>{const m=_l(Ds(o,new st(u)),f);i=i.updateImmediateChild(u,m)}),$b(o).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const o=Ds(n.visibleWrites,e);return $b(o).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function T6(n,e,t,i,a){ae(i||a,"Either existingEventSnap or existingServerSnap must exist");const o=Tt(e,t);if(V_(n.visibleWrites,o))return null;{const u=Ds(n.visibleWrites,o);return U_(u)?a.getChild(t):_l(u,a.getChild(t))}}function w6(n,e,t,i){const a=Tt(e,t),o=$a(n.visibleWrites,a);if(o!=null)return o;if(i.isCompleteForChild(t)){const u=Ds(n.visibleWrites,a);return _l(u,i.getNode().getImmediateChild(t))}else return null}function b6(n,e){return $a(n.visibleWrites,e)}function S6(n,e,t,i,a,o,u){let f;const m=Ds(n.visibleWrites,e),p=$a(m,Xe());if(p!=null)f=p;else if(t!=null)f=_l(m,t);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],E=u.getCompare(),w=o?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let S=w.getNext();for(;S&&y.length<a;)E(S,i)!==0&&y.push(S),S=w.getNext();return y}else return[]}function A6(){return{visibleWrites:gi.empty(),allWrites:[],lastWriteId:-1}}function fd(n,e,t,i){return OI(n.writeTree,n.treePath,e,t,i)}function cv(n,e){return E6(n.writeTree,n.treePath,e)}function Yb(n,e,t,i){return T6(n.writeTree,n.treePath,e,t,i)}function dd(n,e){return b6(n.writeTree,Tt(n.treePath,e))}function C6(n,e,t,i,a,o){return S6(n.writeTree,n.treePath,e,t,i,a,o)}function hv(n,e,t){return w6(n.writeTree,n.treePath,e,t)}function MI(n,e){return kI(Tt(n.treePath,e),n.writeTree)}function kI(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;ae(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ae(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const o=a.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(i,Ec(i,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(i,vc(i,a.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(i,pl(i,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(i,Ec(i,e.snapshotNode,a.oldSnap));else throw Tl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I6{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const PI=new I6;class fv{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new zs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hv(this.writes_,e,i)}}getChildAfterChild(e,t,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ba(this.viewCache_),o=C6(this.writes_,a,t,1,i,e);return o.length===0?null:o[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N6(n){return{filter:n}}function x6(n,e){ae(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ae(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function D6(n,e,t,i,a){const o=new R6;let u,f;if(t.type===di.OVERWRITE){const p=t;p.source.fromUser?u=j_(n,e,p.path,p.snap,i,a,o):(ae(p.source.fromServer,"Unknown source."),f=p.source.tagged||e.serverCache.isFiltered()&&!Ve(p.path),u=md(n,e,p.path,p.snap,i,a,f,o))}else if(t.type===di.MERGE){const p=t;p.source.fromUser?u=M6(n,e,p.path,p.children,i,a,o):(ae(p.source.fromServer,"Unknown source."),f=p.source.tagged||e.serverCache.isFiltered(),u=B_(n,e,p.path,p.children,i,a,f,o))}else if(t.type===di.ACK_USER_WRITE){const p=t;p.revert?u=L6(n,e,p.path,i,a,o):u=k6(n,e,p.path,p.affectedTree,i,a,o)}else if(t.type===di.LISTEN_COMPLETE)u=P6(n,e,t.path,i,o);else throw Tl("Unknown operation type: "+t.type);const m=o.getChanges();return O6(e,u,m),{viewCache:u,changes:m}}function O6(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=hd(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(RI(hd(e)))}}function LI(n,e,t,i,a,o){const u=e.eventCache;if(dd(i,t)!=null)return e;{let f,m;if(Ve(t))if(ae(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=Ba(e),y=p instanceof we?p:we.EMPTY_NODE,E=cv(i,y);f=n.filter.updateFullNode(e.eventCache.getNode(),E,o)}else{const p=fd(i,Ba(e));f=n.filter.updateFullNode(e.eventCache.getNode(),p,o)}else{const p=ze(t);if(p===".priority"){ae(Bs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();m=e.serverCache.getNode();const E=Yb(i,t,y,m);E!=null?f=n.filter.updatePriority(y,E):f=u.getNode()}else{const y=ct(t);let E;if(u.isCompleteForChild(p)){m=e.serverCache.getNode();const w=Yb(i,t,u.getNode(),m);w!=null?E=u.getNode().getImmediateChild(p).updateChild(y,w):E=u.getNode().getImmediateChild(p)}else E=hv(i,p,e.serverCache);E!=null?f=n.filter.updateChild(u.getNode(),p,E,y,a,o):f=u.getNode()}}return ac(e,f,u.isFullyInitialized()||Ve(t),n.filter.filtersNodes())}}function md(n,e,t,i,a,o,u,f){const m=e.serverCache;let p;const y=u?n.filter:n.filter.getIndexedFilter();if(Ve(t))p=y.updateFullNode(m.getNode(),i,null);else if(y.filtersNodes()&&!m.isFiltered()){const S=m.getNode().updateChild(t,i);p=y.updateFullNode(m.getNode(),S,null)}else{const S=ze(t);if(!m.isCompleteForPath(t)&&Bs(t)>1)return e;const x=ct(t),V=m.getNode().getImmediateChild(S).updateChild(x,i);S===".priority"?p=y.updatePriority(m.getNode(),V):p=y.updateChild(m.getNode(),S,V,x,PI,null)}const E=NI(e,p,m.isFullyInitialized()||Ve(t),y.filtersNodes()),w=new fv(a,E,o);return LI(n,E,t,a,w,f)}function j_(n,e,t,i,a,o,u){const f=e.eventCache;let m,p;const y=new fv(a,e,o);if(Ve(t))p=n.filter.updateFullNode(e.eventCache.getNode(),i,u),m=ac(e,p,!0,n.filter.filtersNodes());else{const E=ze(t);if(E===".priority")p=n.filter.updatePriority(e.eventCache.getNode(),i),m=ac(e,p,f.isFullyInitialized(),f.isFiltered());else{const w=ct(t),S=f.getNode().getImmediateChild(E);let x;if(Ve(w))x=i;else{const j=y.getCompleteChild(E);j!=null?nv(w)===".priority"&&j.getChild(vI(w)).isEmpty()?x=j:x=j.updateChild(w,i):x=we.EMPTY_NODE}if(S.equals(x))m=e;else{const j=n.filter.updateChild(f.getNode(),E,x,w,y,u);m=ac(e,j,f.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function Wb(n,e){return n.eventCache.isCompleteForChild(e)}function M6(n,e,t,i,a,o,u){let f=e;return i.foreach((m,p)=>{const y=Tt(t,m);Wb(e,ze(y))&&(f=j_(n,f,y,p,a,o,u))}),i.foreach((m,p)=>{const y=Tt(t,m);Wb(e,ze(y))||(f=j_(n,f,y,p,a,o,u))}),f}function Xb(n,e,t){return t.foreach((i,a)=>{e=e.updateChild(i,a)}),e}function B_(n,e,t,i,a,o,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,p;Ve(t)?p=i:p=new ut(null).setTree(t,i);const y=e.serverCache.getNode();return p.children.inorderTraversal((E,w)=>{if(y.hasChild(E)){const S=e.serverCache.getNode().getImmediateChild(E),x=Xb(n,S,w);m=md(n,m,new st(E),x,a,o,u,f)}}),p.children.inorderTraversal((E,w)=>{const S=!e.serverCache.isCompleteForChild(E)&&w.value===null;if(!y.hasChild(E)&&!S){const x=e.serverCache.getNode().getImmediateChild(E),j=Xb(n,x,w);m=md(n,m,new st(E),j,a,o,u,f)}}),m}function k6(n,e,t,i,a,o,u){if(dd(a,t)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(i.value!=null){if(Ve(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return md(n,e,t,m.getNode().getChild(t),a,o,f,u);if(Ve(t)){let p=new ut(null);return m.getNode().forEachChild(el,(y,E)=>{p=p.set(new st(y),E)}),B_(n,e,t,p,a,o,f,u)}else return e}else{let p=new ut(null);return i.foreach((y,E)=>{const w=Tt(t,y);m.isCompleteForPath(w)&&(p=p.set(y,m.getNode().getChild(w)))}),B_(n,e,t,p,a,o,f,u)}}function P6(n,e,t,i,a){const o=e.serverCache,u=NI(e,o.getNode(),o.isFullyInitialized()||Ve(t),o.isFiltered());return LI(n,u,t,i,PI,a)}function L6(n,e,t,i,a,o){let u;if(dd(i,t)!=null)return e;{const f=new fv(i,e,a),m=e.eventCache.getNode();let p;if(Ve(t)||ze(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=fd(i,Ba(e));else{const E=e.serverCache.getNode();ae(E instanceof we,"serverChildren would be complete if leaf node"),y=cv(i,E)}y=y,p=n.filter.updateFullNode(m,y,o)}else{const y=ze(t);let E=hv(i,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=m.getImmediateChild(y)),E!=null?p=n.filter.updateChild(m,y,E,ct(t),f,o):e.eventCache.getNode().hasChild(y)?p=n.filter.updateChild(m,y,we.EMPTY_NODE,ct(t),f,o):p=m,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=fd(i,Ba(e)),u.isLeafNode()&&(p=n.filter.updateFullNode(p,u,o)))}return u=e.serverCache.isFullyInitialized()||dd(i,Xe())!=null,ac(e,p,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V6{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,a=new sv(i.getIndex()),o=t6(i);this.processor_=N6(o);const u=t.serverCache,f=t.eventCache,m=a.updateFullNode(we.EMPTY_NODE,u.getNode(),null),p=o.updateFullNode(we.EMPTY_NODE,f.getNode(),null),y=new zs(m,u.isFullyInitialized(),a.filtersNodes()),E=new zs(p,f.isFullyInitialized(),o.filtersNodes());this.viewCache_=Wd(E,y),this.eventGenerator_=new l6(this.query_)}get query(){return this.query_}}function U6(n){return n.viewCache_.serverCache.getNode()}function j6(n){return hd(n.viewCache_)}function B6(n,e){const t=Ba(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ve(e)&&!t.getImmediateChild(ze(e)).isEmpty())?t.getChild(e):null}function Zb(n){return n.eventRegistrations_.length===0}function z6(n,e){n.eventRegistrations_.push(e)}function Jb(n,e,t){const i=[];if(t){ae(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(o=>{const u=o.createCancelEvent(t,a);u&&i.push(u)})}if(e){let a=[];for(let o=0;o<n.eventRegistrations_.length;++o){const u=n.eventRegistrations_[o];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(o+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return i}function eS(n,e,t,i){e.type===di.MERGE&&e.source.queryId!==null&&(ae(Ba(n.viewCache_),"We should always have a full cache before handling merges"),ae(hd(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,o=D6(n.processor_,a,e,t,i);return x6(n.processor_,o.viewCache),ae(o.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,VI(n,o.changes,o.viewCache.eventCache.getNode(),null)}function F6(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(wt,(o,u)=>{i.push(pl(o,u))}),t.isFullyInitialized()&&i.push(RI(t.getNode())),VI(n,i,t.getNode(),e)}function VI(n,e,t,i){const a=i?[i]:n.eventRegistrations_;return u6(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd;class UI{constructor(){this.views=new Map}}function q6(n){ae(!pd,"__referenceConstructor has already been defined"),pd=n}function H6(){return ae(pd,"Reference.ts has not been loaded"),pd}function G6(n){return n.views.size===0}function dv(n,e,t,i){const a=e.source.queryId;if(a!==null){const o=n.views.get(a);return ae(o!=null,"SyncTree gave us an op for an invalid query."),eS(o,e,t,i)}else{let o=[];for(const u of n.views.values())o=o.concat(eS(u,e,t,i));return o}}function jI(n,e,t,i,a){const o=e._queryIdentifier,u=n.views.get(o);if(!u){let f=fd(t,a?i:null),m=!1;f?m=!0:i instanceof we?(f=cv(t,i),m=!1):(f=we.EMPTY_NODE,m=!1);const p=Wd(new zs(f,m,!1),new zs(i,a,!1));return new V6(e,p)}return u}function K6(n,e,t,i,a,o){const u=jI(n,e,i,a,o);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),z6(u,t),F6(u,t)}function Q6(n,e,t,i){const a=e._queryIdentifier,o=[];let u=[];const f=Fs(n);if(a==="default")for(const[m,p]of n.views.entries())u=u.concat(Jb(p,t,i)),Zb(p)&&(n.views.delete(m),p.query._queryParams.loadsAllData()||o.push(p.query));else{const m=n.views.get(a);m&&(u=u.concat(Jb(m,t,i)),Zb(m)&&(n.views.delete(a),m.query._queryParams.loadsAllData()||o.push(m.query)))}return f&&!Fs(n)&&o.push(new(H6())(e._repo,e._path)),{removed:o,events:u}}function BI(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Os(n,e){let t=null;for(const i of n.views.values())t=t||B6(i,e);return t}function zI(n,e){if(e._queryParams.loadsAllData())return Zd(n);{const i=e._queryIdentifier;return n.views.get(i)}}function FI(n,e){return zI(n,e)!=null}function Fs(n){return Zd(n)!=null}function Zd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gd;function $6(n){ae(!gd,"__referenceConstructor has already been defined"),gd=n}function Y6(){return ae(gd,"Reference.ts has not been loaded"),gd}let W6=1;class tS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=A6(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function X6(n,e,t,i,a){return d6(n.pendingWriteTree_,e,t,i,a),a?Dl(n,new ja(ov(),e,t)):[]}function Z6(n,e,t,i){m6(n.pendingWriteTree_,e,t,i);const a=ut.fromObject(t);return Dl(n,new gl(ov(),e,a))}function Da(n,e,t=!1){const i=p6(n.pendingWriteTree_,e);if(g6(n.pendingWriteTree_,e)){let o=new ut(null);return i.snap!=null?o=o.set(Xe(),!0):an(i.children,u=>{o=o.set(new st(u),!0)}),Dl(n,new cd(i.path,o,t))}else return[]}function zc(n,e,t){return Dl(n,new ja(lv(),e,t))}function J6(n,e,t){const i=ut.fromObject(t);return Dl(n,new gl(lv(),e,i))}function e5(n,e){return Dl(n,new wc(lv(),e))}function t5(n,e,t){const i=mv(n,t);if(i){const a=pv(i),o=a.path,u=a.queryId,f=En(o,e),m=new wc(uv(u),f);return gv(n,o,m)}else return[]}function qI(n,e,t,i,a=!1){const o=e._path,u=n.syncPointTree_.get(o);let f=[];if(u&&(e._queryIdentifier==="default"||FI(u,e))){const m=Q6(u,e,t,i);G6(u)&&(n.syncPointTree_=n.syncPointTree_.remove(o));const p=m.removed;if(f=m.events,!a){const y=p.findIndex(w=>w._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(o,(w,S)=>Fs(S));if(y&&!E){const w=n.syncPointTree_.subtree(o);if(!w.isEmpty()){const S=s5(w);for(let x=0;x<S.length;++x){const j=S[x],V=j.query,z=$I(n,j);n.listenProvider_.startListening(lc(V),bc(n,V),z.hashFn,z.onComplete)}}}!E&&p.length>0&&!i&&(y?n.listenProvider_.stopListening(lc(e),null):p.forEach(w=>{const S=n.queryToTagMap.get(Jd(w));n.listenProvider_.stopListening(lc(w),S)}))}a5(n,p)}return f}function HI(n,e,t,i){const a=mv(n,i);if(a!=null){const o=pv(a),u=o.path,f=o.queryId,m=En(u,e),p=new ja(uv(f),m,t);return gv(n,u,p)}else return[]}function n5(n,e,t,i){const a=mv(n,i);if(a){const o=pv(a),u=o.path,f=o.queryId,m=En(u,e),p=ut.fromObject(t),y=new gl(uv(f),m,p);return gv(n,u,y)}else return[]}function i5(n,e,t,i=!1){const a=e._path;let o=null,u=!1;n.syncPointTree_.foreachOnPath(a,(w,S)=>{const x=En(w,a);o=o||Os(S,x),u=u||Fs(S)});let f=n.syncPointTree_.get(a);f?(u=u||Fs(f),o=o||Os(f,Xe())):(f=new UI,n.syncPointTree_=n.syncPointTree_.set(a,f));let m;o!=null?m=!0:(m=!1,o=we.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((S,x)=>{const j=Os(x,Xe());j&&(o=o.updateImmediateChild(S,j))}));const p=FI(f,e);if(!p&&!e._queryParams.loadsAllData()){const w=Jd(e);ae(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const S=o5();n.queryToTagMap.set(w,S),n.tagToQueryMap.set(S,w)}const y=Xd(n.pendingWriteTree_,a);let E=K6(f,e,t,y,o,m);if(!p&&!u&&!i){const w=zI(f,e);E=E.concat(l5(n,e,w))}return E}function GI(n,e,t){const a=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(u,f)=>{const m=En(u,e),p=Os(f,m);if(p)return p});return OI(a,e,o,t,!0)}function r5(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(p,y)=>{const E=En(p,t);i=i||Os(y,E)});let a=n.syncPointTree_.get(t);a?i=i||Os(a,Xe()):(a=new UI,n.syncPointTree_=n.syncPointTree_.set(t,a));const o=i!=null,u=o?new zs(i,!0,!1):null,f=Xd(n.pendingWriteTree_,e._path),m=jI(a,e,f,o?u.getNode():we.EMPTY_NODE,o);return j6(m)}function Dl(n,e){return KI(e,n.syncPointTree_,null,Xd(n.pendingWriteTree_,Xe()))}function KI(n,e,t,i){if(Ve(n.path))return QI(n,e,t,i);{const a=e.get(Xe());t==null&&a!=null&&(t=Os(a,Xe()));let o=[];const u=ze(n.path),f=n.operationForChild(u),m=e.children.get(u);if(m&&f){const p=t?t.getImmediateChild(u):null,y=MI(i,u);o=o.concat(KI(f,m,p,y))}return a&&(o=o.concat(dv(a,n,i,t))),o}}function QI(n,e,t,i){const a=e.get(Xe());t==null&&a!=null&&(t=Os(a,Xe()));let o=[];return e.children.inorderTraversal((u,f)=>{const m=t?t.getImmediateChild(u):null,p=MI(i,u),y=n.operationForChild(u);y&&(o=o.concat(QI(y,f,m,p)))}),a&&(o=o.concat(dv(a,n,i,t))),o}function $I(n,e){const t=e.query,i=bc(n,t);return{hashFn:()=>(U6(e)||we.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return i?t5(n,t._path,i):e5(n,t._path);{const o=J4(a,t);return qI(n,t,null,o)}}}}function bc(n,e){const t=Jd(e);return n.queryToTagMap.get(t)}function Jd(n){return n._path.toString()+"$"+n._queryIdentifier}function mv(n,e){return n.tagToQueryMap.get(e)}function pv(n){const e=n.indexOf("$");return ae(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new st(n.substr(0,e))}}function gv(n,e,t){const i=n.syncPointTree_.get(e);ae(i,"Missing sync point for query tag that we're tracking");const a=Xd(n.pendingWriteTree_,e);return dv(i,t,a,null)}function s5(n){return n.fold((e,t,i)=>{if(t&&Fs(t))return[Zd(t)];{let a=[];return t&&(a=BI(t)),an(i,(o,u)=>{a=a.concat(u)}),a}})}function lc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Y6())(n._repo,n._path):n}function a5(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const a=Jd(i),o=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(o)}}}function o5(){return W6++}function l5(n,e,t){const i=e._path,a=bc(n,e),o=$I(n,t),u=n.listenProvider_.startListening(lc(e),a,o.hashFn,o.onComplete),f=n.syncPointTree_.subtree(i);if(a)ae(!Fs(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((p,y,E)=>{if(!Ve(p)&&y&&Fs(y))return[Zd(y).query];{let w=[];return y&&(w=w.concat(BI(y).map(S=>S.query))),an(E,(S,x)=>{w=w.concat(x)}),w}});for(let p=0;p<m.length;++p){const y=m[p];n.listenProvider_.stopListening(lc(y),bc(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new _v(t)}node(){return this.node_}}class yv{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Tt(this.path_,e);return new yv(this.syncTree_,t)}node(){return GI(this.syncTree_,this.path_)}}const u5=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},nS=function(n,e,t){if(!n||typeof n!="object")return n;if(ae(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return c5(n[".sv"],e,t);if(typeof n[".sv"]=="object")return h5(n[".sv"],e);ae(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},c5=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ae(!1,"Unexpected server value: "+n)}},h5=function(n,e,t){n.hasOwnProperty("increment")||ae(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&ae(!1,"Unexpected increment value: "+i);const a=e.node();if(ae(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const u=a.getValue();return typeof u!="number"?i:u+i},YI=function(n,e,t,i){return vv(e,new yv(t,n),i)},f5=function(n,e,t){return vv(n,new _v(e),t)};function vv(n,e,t){const i=n.getPriority().val(),a=nS(i,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const u=n,f=nS(u.getValue(),e,t);return f!==u.getValue()||a!==u.getPriority().val()?new $t(f,Xt(a)):n}else{const u=n;return o=u,a!==u.getPriority().val()&&(o=o.updatePriority(new $t(a))),u.forEachChild(wt,(f,m)=>{const p=vv(m,e.getImmediateChild(f),t);p!==m&&(o=o.updateImmediateChild(f,p))}),o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Tv(n,e){let t=e instanceof st?e:new st(e),i=n,a=ze(t);for(;a!==null;){const o=tl(i.node.children,a)||{children:{},childCount:0};i=new Ev(a,i,o),t=ct(t),a=ze(t)}return i}function Ol(n){return n.node.value}function WI(n,e){n.node.value=e,z_(n)}function XI(n){return n.node.childCount>0}function d5(n){return Ol(n)===void 0&&!XI(n)}function em(n,e){an(n.node.children,(t,i)=>{e(new Ev(t,n,i))})}function ZI(n,e,t,i){t&&e(n),em(n,a=>{ZI(a,e,!0)})}function m5(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Fc(n){return new st(n.parent===null?n.name:Fc(n.parent)+"/"+n.name)}function z_(n){n.parent!==null&&p5(n.parent,n.name,n)}function p5(n,e,t){const i=d5(t),a=$i(n.node.children,e);i&&a?(delete n.node.children[e],n.node.childCount--,z_(n)):!i&&!a&&(n.node.children[e]=t.node,n.node.childCount++,z_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g5=/[\[\].#$\/\u0000-\u001F\u007F]/,_5=/[\[\].#$\u0000-\u001F\u007F]/,Ig=10*1024*1024,wv=function(n){return typeof n=="string"&&n.length!==0&&!g5.test(n)},JI=function(n){return typeof n=="string"&&n.length!==0&&!_5.test(n)},y5=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),JI(n)},v5=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Xy(n)||n&&typeof n=="object"&&$i(n,".sv")},bv=function(n,e,t){const i=t instanceof st?new MU(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ca(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ca(i)+" with contents = "+e.toString());if(Xy(e))throw new Error(n+"contains "+e.toString()+" "+Ca(i));if(typeof e=="string"&&e.length>Ig/3&&Td(e)>Ig)throw new Error(n+"contains a string greater than "+Ig+" utf8 bytes "+Ca(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,o=!1;if(an(e,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(o=!0,!wv(u)))throw new Error(n+" contains an invalid key ("+u+") "+Ca(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kU(i,u),bv(n,f,i),PU(i)}),a&&o)throw new Error(n+' contains ".value" child '+Ca(i)+" in addition to actual children.")}},E5=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const o=yc(i);for(let u=0;u<o.length;u++)if(!(o[u]===".priority"&&u===o.length-1)){if(!wv(o[u]))throw new Error(n+"contains an invalid key ("+o[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(OU);let a=null;for(t=0;t<e.length;t++){if(i=e[t],a!==null&&ri(a,i))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+i.toString());a=i}},T5=function(n,e,t,i){const a=Z_(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const o=[];an(e,(u,f)=>{const m=new st(u);if(bv(a,f,Tt(t,m)),nv(m)===".priority"&&!v5(f))throw new Error(a+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(m)}),E5(a,o)},e1=function(n,e,t,i){if(!JI(t))throw new Error(Z_(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},w5=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),e1(n,e,t)},b5=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!y5(t))throw new Error(Z_(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function t1(n,e){let t=null;for(let i=0;i<e.length;i++){const a=e[i],o=a.getPath();t!==null&&!EI(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(a)}t&&n.eventLists_.push(t)}function Gi(n,e,t){t1(n,t),A5(n,i=>ri(i,e)||ri(e,i))}function A5(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const a=n.eventLists_[i];if(a){const o=a.path;e(o)?(C5(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function C5(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();rc&&nn("event: "+t.toString()),xl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R5="repo_interrupt",I5=25;class N5{constructor(e,t,i,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new S5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ud(),this.transactionQueueTree_=new Ev,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function x5(n,e,t){if(n.stats_=ev(n.repoInfo_),n.forceRestClient_||iU())n.server_=new ld(n.repoInfo_,(i,a,o,u)=>{iS(n,i,a,o,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>rS(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new xr(n.repoInfo_,e,(i,a,o,u)=>{iS(n,i,a,o,u)},i=>{rS(n,i)},i=>{O5(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=lU(n.repoInfo_,()=>new o6(n.stats_,n.server_)),n.infoData_=new n6,n.infoSyncTree_=new tS({startListening:(i,a,o,u)=>{let f=[];const m=n.infoData_.getNode(i._path);return m.isEmpty()||(f=zc(n.infoSyncTree_,i._path,m),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),Av(n,"connected",!1),n.serverSyncTree_=new tS({startListening:(i,a,o,u)=>(n.server_.listen(i,o,a,(f,m)=>{const p=u(f,m);Gi(n.eventQueue_,i._path,p)}),[]),stopListening:(i,a)=>{n.server_.unlisten(i,a)}})}function D5(n){const t=n.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Sv(n){return u5({timestamp:D5(n)})}function iS(n,e,t,i,a){n.dataUpdateCount++;const o=new st(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(i){const m=Uf(t,p=>Xt(p));u=n5(n.serverSyncTree_,o,m,a)}else{const m=Xt(t);u=HI(n.serverSyncTree_,o,m,a)}else if(i){const m=Uf(t,p=>Xt(p));u=J6(n.serverSyncTree_,o,m)}else{const m=Xt(t);u=zc(n.serverSyncTree_,o,m)}let f=o;u.length>0&&(f=Sc(n,o)),Gi(n.eventQueue_,f,u)}function rS(n,e){Av(n,"connected",e),e===!1&&P5(n)}function O5(n,e){an(e,(t,i)=>{Av(n,t,i)})}function Av(n,e,t){const i=new st("/.info/"+e),a=Xt(t);n.infoData_.updateSnapshot(i,a);const o=zc(n.infoSyncTree_,i,a);Gi(n.eventQueue_,i,o)}function n1(n){return n.nextWriteId_++}function M5(n,e,t){const i=r5(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(a=>{const o=Xt(a).withIndex(e._queryParams.getIndex());i5(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=zc(n.serverSyncTree_,e._path,o);else{const f=bc(n.serverSyncTree_,e);u=HI(n.serverSyncTree_,e._path,o,f)}return Gi(n.eventQueue_,e._path,u),qI(n.serverSyncTree_,e,t,null,!0),o},a=>(tm(n,"get for query "+Ut(e)+" failed: "+a),Promise.reject(new Error(a))))}function k5(n,e,t,i){tm(n,"update",{path:e.toString(),value:t});let a=!0;const o=Sv(n),u={};if(an(t,(f,m)=>{a=!1,u[f]=YI(Tt(e,f),Xt(m),n.serverSyncTree_,o)}),a)nn("update() called with empty data.  Don't do anything."),sS(n,i,"ok",void 0);else{const f=n1(n),m=Z6(n.serverSyncTree_,e,u,f);t1(n.eventQueue_,m),n.server_.merge(e.toString(),t,(p,y)=>{const E=p==="ok";E||xn("update at "+e+" failed: "+p);const w=Da(n.serverSyncTree_,f,!E),S=w.length>0?Sc(n,e):e;Gi(n.eventQueue_,S,w),sS(n,i,p,y)}),an(t,p=>{const y=o1(n,Tt(e,p));Sc(n,y)}),Gi(n.eventQueue_,e,[])}}function P5(n){tm(n,"onDisconnectEvents");const e=Sv(n),t=ud();P_(n.onDisconnect_,Xe(),(a,o)=>{const u=YI(a,o,n.serverSyncTree_,e);II(t,a,u)});let i=[];P_(t,Xe(),(a,o)=>{i=i.concat(zc(n.serverSyncTree_,a,o));const u=o1(n,a);Sc(n,u)}),n.onDisconnect_=ud(),Gi(n.eventQueue_,Xe(),i)}function L5(n){n.persistentConnection_&&n.persistentConnection_.interrupt(R5)}function tm(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),nn(t,...e)}function sS(n,e,t,i){e&&xl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let o=a;i&&(o+=": "+i);const u=new Error(o);u.code=a,e(u)}})}function i1(n,e,t){return GI(n.serverSyncTree_,e,t)||we.EMPTY_NODE}function Cv(n,e=n.transactionQueueTree_){if(e||nm(n,e),Ol(e)){const t=s1(n,e);ae(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&V5(n,Fc(e),t)}else XI(e)&&em(e,t=>{Cv(n,t)})}function V5(n,e,t){const i=t.map(p=>p.currentWriteId),a=i1(n,e,i);let o=a;const u=a.hash();for(let p=0;p<t.length;p++){const y=t[p];ae(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=En(e,y.path);o=o.updateChild(E,y.currentOutputSnapshotRaw)}const f=o.val(!0),m=e;n.server_.put(m.toString(),f,p=>{tm(n,"transaction put response",{path:m.toString(),status:p});let y=[];if(p==="ok"){const E=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Da(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&E.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();nm(n,Tv(n.transactionQueueTree_,e)),Cv(n,n.transactionQueueTree_),Gi(n.eventQueue_,e,y);for(let w=0;w<E.length;w++)xl(E[w])}else{if(p==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{xn("transaction at "+m.toString()+" failed: "+p);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=p}Sc(n,e)}},u)}function Sc(n,e){const t=r1(n,e),i=Fc(t),a=s1(n,t);return U5(n,a,i),i}function U5(n,e,t){if(e.length===0)return;const i=[];let a=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],p=En(t,m.path);let y=!1,E;if(ae(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)y=!0,E=m.abortReason,a=a.concat(Da(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=I5)y=!0,E="maxretry",a=a.concat(Da(n.serverSyncTree_,m.currentWriteId,!0));else{const w=i1(n,m.path,u);m.currentInputSnapshot=w;const S=e[f].update(w.val());if(S!==void 0){bv("transaction failed: Data returned ",S,m.path);let x=Xt(S);typeof S=="object"&&S!=null&&$i(S,".priority")||(x=x.updatePriority(w.getPriority()));const V=m.currentWriteId,z=Sv(n),G=f5(x,w,z);m.currentOutputSnapshotRaw=x,m.currentOutputSnapshotResolved=G,m.currentWriteId=n1(n),u.splice(u.indexOf(V),1),a=a.concat(X6(n.serverSyncTree_,m.path,G,m.currentWriteId,m.applyLocally)),a=a.concat(Da(n.serverSyncTree_,V,!0))}else y=!0,E="nodata",a=a.concat(Da(n.serverSyncTree_,m.currentWriteId,!0))}Gi(n.eventQueue_,t,a),a=[],y&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(E==="nodata"?i.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):i.push(()=>e[f].onComplete(new Error(E),!1,null))))}nm(n,n.transactionQueueTree_);for(let f=0;f<i.length;f++)xl(i[f]);Cv(n,n.transactionQueueTree_)}function r1(n,e){let t,i=n.transactionQueueTree_;for(t=ze(e);t!==null&&Ol(i)===void 0;)i=Tv(i,t),e=ct(e),t=ze(e);return i}function s1(n,e){const t=[];return a1(n,e,t),t.sort((i,a)=>i.order-a.order),t}function a1(n,e,t){const i=Ol(e);if(i)for(let a=0;a<i.length;a++)t.push(i[a]);em(e,a=>{a1(n,a,t)})}function nm(n,e){const t=Ol(e);if(t){let i=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[i]=t[a],i++);t.length=i,WI(e,t.length>0?t:void 0)}em(e,i=>{nm(n,i)})}function o1(n,e){const t=Fc(r1(n,e)),i=Tv(n.transactionQueueTree_,e);return m5(i,a=>{Ng(n,a)}),Ng(n,i),ZI(i,a=>{Ng(n,a)}),t}function Ng(n,e){const t=Ol(e);if(t){const i=[];let a=[],o=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ae(o===u-1,"All SENT items should be at beginning of queue."),o=u,t[u].status=3,t[u].abortReason="set"):(ae(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(Da(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&i.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));o===-1?WI(e,void 0):t.length=o+1,Gi(n.eventQueue_,Fc(e),a);for(let u=0;u<i.length;u++)xl(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j5(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let a=t[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function B5(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xn(`Invalid query segment '${t}' in query '${n}'`)}return e}const aS=function(n,e){const t=z5(n),i=t.namespace;t.domain==="firebase.com"&&Pr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Pr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||$4();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new cI(t.host,t.secure,i,a,e,"",i!==t.subdomain),path:new st(t.pathString)}},z5=function(n){let e="",t="",i="",a="",o="",u=!0,f="https",m=443;if(typeof n=="string"){let p=n.indexOf("//");p>=0&&(f=n.substring(0,p-1),n=n.substring(p+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(a=j5(n.substring(y,E)));const w=B5(n.substring(Math.min(n.length,E)));p=e.indexOf(":"),p>=0?(u=f==="https"||f==="wss",m=parseInt(e.substring(p+1),10)):p=e.length;const S=e.slice(0,p);if(S.toLowerCase()==="localhost")t="localhost";else if(S.split(".").length<=2)t=S;else{const x=e.indexOf(".");i=e.substring(0,x).toLowerCase(),t=e.substring(x+1),o=i}"ns"in w&&(o=w.ns)}return{host:e,port:m,domain:t,subdomain:i,secure:u,scheme:f,pathString:a,namespace:o}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F5{constructor(e,t,i,a){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class q5{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ae(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t,i,a){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=a}get key(){return Ve(this._path)?null:nv(this._path)}get ref(){return new Lr(this._repo,this._path)}get _queryIdentifier(){const e=Gb(this._queryParams),t=Zy(e);return t==="{}"?"default":t}get _queryObject(){return Gb(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof Rv))return!1;const t=this._repo===e._repo,i=EI(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+DU(this._path)}}class Lr extends Rv{constructor(e,t){super(e,t,new av,!1)}get parent(){const e=vI(this._path);return e===null?null:new Lr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ac{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new st(e),i=F_(this.ref,e);return new Ac(this._node.getChild(t),i,wt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,a)=>e(new Ac(a,F_(this.ref,i),wt)))}hasChild(e){const t=new st(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xg(n,e){return n=ft(n),n._checkNotDeleted("ref"),e!==void 0?F_(n._root,e):n._root}function F_(n,e){return n=ft(n),ze(n._path)===null?w5("child","path",e):e1("child","path",e),new Lr(n._repo,Tt(n._path,e))}function G5(n,e){T5("update",e,n._path);const t=new Ed;return k5(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function oS(n){n=ft(n);const e=new H5(()=>{}),t=new Iv(e);return M5(n._repo,n,t).then(i=>new Ac(i,new Lr(n._repo,n._path),n._queryParams.getIndex()))}class Iv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new F5("value",this,new Ac(e.snapshotNode,new Lr(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new q5(this,e,t):null}matches(e){return e instanceof Iv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}q6(Lr);$6(Lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K5="FIREBASE_DATABASE_EMULATOR_HOST",q_={};let Q5=!1;function $5(n,e,t,i){n.repoInfo_=new cI(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Y5(n,e,t,i,a){let o=i||n.options.databaseURL;o===void 0&&(n.options.projectId||Pr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nn("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=aS(o,a),f=u.repoInfo,m;typeof process<"u"&&Rb&&(m=Rb[K5]),m?(o=`http://${m}?ns=${f.namespace}`,u=aS(o,a),f=u.repoInfo):u.repoInfo.secure;const p=new sU(n.name,n.options,e);b5("Invalid Firebase Database URL",u),Ve(u.path)||Pr("Database URL must point to the root of a Firebase Database (not including a child path).");const y=X5(f,n,p,new rU(n,t));return new Z5(y,n)}function W5(n,e){const t=q_[e];(!t||t[n.key]!==n)&&Pr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),L5(n),delete t[n.key]}function X5(n,e,t,i){let a=q_[e.name];a||(a={},q_[e.name]=a);let o=a[n.toURLString()];return o&&Pr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new N5(n,Q5,t,i),a[n.toURLString()]=o,o}class Z5{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(x5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Lr(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(W5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pr("Cannot call "+e+" on a deleted database.")}}function J5(n=wd(),e){const t=qs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=nA("database");i&&e3(t,...i)}return t}function e3(n,e,t,i={}){n=ft(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Pr("Cannot call useEmulator() after instance has already been initialized.");const a=n._repoInternal;let o;if(a.repoInfo_.nodeAdmin)i.mockUserToken&&Pr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new kf(kf.OWNER);else if(i.mockUserToken){const u=typeof i.mockUserToken=="string"?i.mockUserToken:sA(i.mockUserToken,n.app.options.projectId);o=new kf(u)}$5(a,e,t,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t3(n){F4(qa),_i(new si("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return Y5(i,a,o,t)},"PUBLIC").setMultipleInstances(!0)),In(Ib,Nb,n),In(Ib,Nb,"esm2017")}xr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};t3();const n3=()=>{const n=El(),e=$d(),t=J5(),[i,a]=Y.useState(""),[o,u]=Y.useState(""),[f,m]=Y.useState(""),[p,y]=Y.useState(""),[E,w]=Y.useState(!1),[S,x]=Y.useState(""),[j,V]=Y.useState("");Y.useEffect(()=>{const G=e.currentUser;if(!G){n("/");return}a(G.displayName||""),u(G.email||""),m(G.photoURL||"");const H=xg(t,`users/${G.uid}/profile`);oS(H).then(W=>{if(W.exists()){const re=W.val();re.displayName&&a(re.displayName),re.photoURL&&m(re.photoURL)}})},[e,t,n]);const z=async G=>{G.preventDefault(),w(!0),x(""),V("");try{const H=e.currentUser;if(!H)throw new Error("ไม่พบข้อมูลผู้ใช้");let W=p||f;await TV(H,{displayName:i,photoURL:W}),V("อัปเดตข้อมูลผู้ใช้ในระบบแล้ว"),w(!1),n("/home"),await G5(xg(t,`users/${H.uid}/profile`),{displayName:i,email:o,photoURL:W});const re=xg(t,`users/${H.uid}/profile`),J=await oS(re);if(J.exists()){const O=J.val();a(O.displayName),m(O.photoURL)}y("")}catch(H){console.error("Error updating profile:",H),x("เกิดข้อผิดพลาดในการอัปเดตข้อมูล: "+H.message),w(!1)}};return D.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100",children:D.jsx("div",{className:"container mx-auto px-4 py-12 sm:px-6 lg:px-8",children:D.jsx("div",{className:"max-w-3xl mx-auto",children:D.jsxs("div",{className:" bg-white/80 rounded-3xl shadow-2xl overflow-hidden border border-white/50",children:[D.jsxs("div",{className:"px-8 py-8 bg-gradient-to-r from-indigo-600 to-purple-600 relative",children:[D.jsx("div",{className:"absolute inset-0 bg-pattern opacity-10"}),D.jsxs("div",{className:"relative z-10",children:[D.jsx("h1",{className:"text-3xl font-bold text-white text-center mb-2",children:"แก้ไขข้อมูลส่วนตัว"}),D.jsx("p",{className:"text-indigo-100 text-center text-sm",children:"ปรับแต่งโปรไฟล์ของคุณให้ตรงกับตัวตน"})]})]}),D.jsxs("form",{onSubmit:z,className:"p-8 sm:p-10",children:[D.jsx("div",{className:"mb-12",children:D.jsxs("div",{className:"relative w-36 h-36 mx-auto",children:[D.jsx("div",{className:"w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 ring-4 ring-indigo-100/50",children:f||p?D.jsx("img",{src:p||f,alt:"Profile",className:"w-full h-full object-cover transition-all duration-300",onError:G=>{G.target.onerror=null,G.target.src="",G.target.className="hidden",G.target.parentElement.innerHTML='<div class="w-full h-full flex items-center justify-center text-sm text-red-500 bg-red-50">ไม่สามารถโหลดรูปได้</div>'}}):D.jsx("div",{className:"w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50",children:D.jsx("span",{className:"text-5xl",children:"👤"})})}),D.jsx("div",{className:"absolute -bottom-2 -right-2 p-2.5 bg-white rounded-full shadow-lg ring-2 ring-indigo-100/50",children:D.jsxs("svg",{className:"w-6 h-6 text-indigo-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"}),D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 13a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})}),S&&D.jsx("div",{className:"mb-8 p-4 bg-red-50/80  border border-red-200 rounded-2xl animate-fadeIn",children:D.jsxs("div",{className:"flex items-center text-red-700",children:[D.jsx("svg",{className:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),D.jsx("p",{className:"text-sm font-medium",children:S})]})}),j&&D.jsx("div",{className:"mb-8 p-4 bg-green-50/80  border border-green-200 rounded-2xl animate-fadeIn",children:D.jsxs("div",{className:"flex items-center text-green-700",children:[D.jsx("svg",{className:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),D.jsx("p",{className:"text-sm font-medium",children:j})]})}),D.jsxs("div",{className:"space-y-8",children:[D.jsxs("div",{children:[D.jsx("label",{htmlFor:"display-name",className:"block text-sm font-medium text-gray-700 mb-2",children:"ชื่อผู้ใช้"}),D.jsx("input",{type:"text",id:"display-name",value:i,onChange:G=>a(G.target.value),className:"w-full px-4 py-3.5 bg-white/50  border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"})]}),D.jsxs("div",{children:[D.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"อีเมล"}),D.jsx("input",{type:"email",id:"email",value:o,onChange:G=>u(G.target.value),disabled:!0,className:"w-full px-4 py-3.5 bg-gray-100/80  border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"})]}),D.jsxs("div",{children:[D.jsx("label",{htmlFor:"photo-url",className:"block text-sm font-medium text-gray-700 mb-2",children:"ใส่ลิงก์รูปภาพใหม่"}),D.jsx("input",{type:"text",id:"photo-url",value:p,onChange:G=>y(G.target.value),placeholder:"ใส่ URL รูปภาพ",className:"w-full px-4 py-3.5 bg-white/50  border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"})]})]}),D.jsxs("div",{className:"mt-12 flex justify-end space-x-4",children:[D.jsx("button",{type:"button",onClick:()=>n("/home"),className:"px-6 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium focus:ring-2 focus:ring-gray-200",children:"ยกเลิก"}),D.jsx("button",{type:"submit",disabled:E,className:"px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed font-medium focus:ring-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/20",children:E?D.jsxs("span",{className:"flex items-center",children:[D.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[D.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),D.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"กำลังบันทึก..."]}):"บันทึก"})]})]})]})})})})},i3=()=>{const n=El(),e=$d(),t=Ld(),[i,a]=Y.useState({courseCode:"",courseName:"",className:"",imageUrl:""}),[o,u]=Y.useState(""),[f,m]=Y.useState(!1),[p,y]=Y.useState(null),[E,w]=Y.useState(!1);Y.useEffect(()=>{if(i.imageUrl){const V=new Image;V.onload=()=>{y(i.imageUrl),w(!1)},V.onerror=()=>{y(null),w(!0)},V.src=i.imageUrl}else y(null),w(!1)},[i.imageUrl]);const S=V=>{a({...i,[V.target.name]:V.target.value})},x=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),j=async V=>{V.preventDefault(),m(!0),u("");try{const z=e.currentUser;if(!z)throw new Error("ไม่พบข้อมูลผู้ใช้ กรุณาเข้าสู่ระบบใหม่");if(!i.courseCode||!i.courseName||!i.className)throw new Error("กรุณากรอกข้อมูลให้ครบถ้วน");let G=i.imageUrl;(!G||!G.startsWith("http")||E)&&(G="https://via.placeholder.com/400x200?text=No+Image");const H=x();await R_(cl(t,"classroom",H),{owner:z.uid,info:{code:i.courseCode,name:i.courseName,room:i.className,photo:G}}),await R_(cl(t,"users",z.uid,"classroom",H),{status:1,info:{code:i.courseCode,name:i.courseName,room:i.className,photo:G}}),n("/home")}catch(z){console.error("Error adding course:",z),u(z.message)}finally{m(!1)}};return D.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16",children:D.jsx("div",{className:"container mx-auto px-4",children:D.jsx("div",{className:"max-w-4xl mx-auto",children:D.jsxs("div",{className:" bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-white/50 transform hover:scale-[1.01] transition-all duration-300",children:[D.jsxs("div",{className:"px-8 py-12 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden",children:[D.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-70"}),D.jsx("div",{className:"absolute -right-20 -top-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"}),D.jsx("div",{className:"absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl"}),D.jsxs("div",{className:"relative z-10",children:[D.jsx("h1",{className:"text-4xl font-bold text-white text-center mb-3 tracking-tight",children:"เพิ่มวิชาใหม่"}),D.jsx("p",{className:"text-indigo-100 text-center text-lg font-light",children:"สร้างรายวิชาใหม่สำหรับการเรียนการสอน"})]})]}),D.jsxs("form",{onSubmit:j,className:"p-10 space-y-8",children:[D.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[D.jsxs("div",{className:"space-y-6",children:[D.jsxs("div",{className:"group",children:[D.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors",children:"รหัสวิชา"}),D.jsx("input",{type:"text",name:"courseCode",value:i.courseCode,onChange:S,placeholder:"เช่น SC310001",required:!0,className:"w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"})]}),D.jsxs("div",{className:"group",children:[D.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors",children:"ชื่อวิชา"}),D.jsx("input",{type:"text",name:"courseName",value:i.courseName,onChange:S,placeholder:"เช่น Computer Programming",required:!0,className:"w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"})]}),D.jsxs("div",{className:"group",children:[D.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors",children:"ห้องเรียน"}),D.jsx("input",{type:"text",name:"className",value:i.className,onChange:S,placeholder:"เช่น SC5101",required:!0,className:"w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"})]})]}),D.jsxs("div",{className:"space-y-6",children:[D.jsxs("div",{className:"group",children:[D.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors",children:"รูปภาพปก"}),D.jsx("input",{type:"url",name:"imageUrl",value:i.imageUrl,onChange:S,placeholder:"https://example.com/image.jpg",className:"w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"}),E&&D.jsx("div",{className:"mt-3 p-4 bg-red-50/90  border-2 border-red-100 rounded-2xl animate-pulse",children:D.jsxs("div",{className:"flex items-center text-red-700",children:[D.jsx("svg",{className:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),D.jsx("p",{className:"text-sm font-medium",children:"ไม่สามารถโหลดรูปภาพได้ กรุณาตรวจสอบ URL อีกครั้ง"})]})})]}),D.jsxs("div",{className:"mt-6",children:[D.jsx("p",{className:"text-base font-medium text-gray-700 mb-2",children:"ตัวอย่างรูปภาพ"}),D.jsx("div",{className:"border-2 border-gray-100 rounded-2xl overflow-hidden aspect-video bg-white/80  group hover:border-indigo-200 transition-all duration-300",children:p?D.jsx("img",{src:p,alt:"Course preview",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}):D.jsx("div",{className:"w-full h-full flex items-center justify-center text-gray-400 text-lg",children:E?"ไม่สามารถโหลดรูปภาพได้":"ไม่มีรูปภาพ"})})]})]})]}),o&&D.jsx("div",{className:"p-4 bg-red-50/90  border-2 border-red-100 rounded-2xl animate-pulse",children:D.jsxs("div",{className:"flex items-center text-red-700",children:[D.jsx("svg",{className:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),D.jsx("p",{className:"text-sm font-medium",children:o})]})}),D.jsxs("div",{className:"flex justify-end space-x-4 pt-8 border-t border-gray-100",children:[D.jsx("button",{type:"button",onClick:()=>n("/home"),className:"px-8 py-4 border-2 border-gray-200 rounded-2xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-medium focus:ring-4 focus:ring-gray-200/50  text-base",children:"ยกเลิก"}),D.jsxs("button",{type:"submit",disabled:f,className:"px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed font-medium focus:ring-4 focus:ring-indigo-500/50 shadow-xl shadow-indigo-500/20 text-base relative overflow-hidden group",children:[D.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),f?D.jsxs("span",{className:"flex items-center",children:[D.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[D.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),D.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"กำลังบันทึก..."]}):"บันทึก"]})]})]})]})})})})};var qo={},Dg,lS;function r3(){return lS||(lS=1,Dg=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Dg}var Og={},Ts={},uS;function Ya(){if(uS)return Ts;uS=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Ts.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},Ts.getSymbolTotalCodewords=function(i){return e[i]},Ts.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},Ts.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},Ts.isKanjiModeEnabled=function(){return typeof n<"u"},Ts.toSJIS=function(i){return n(i)},Ts}var Mg={},cS;function Nv(){return cS||(cS=1,function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,a){if(n.isValid(i))return i;try{return e(i)}catch{return a}}}(Mg)),Mg}var kg,hS;function s3(){if(hS)return kg;hS=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},kg=n,kg}var Pg,fS;function a3(){if(fS)return Pg;fS=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,a){const o=e*this.size+t;this.data[o]=i,a&&(this.reservedBit[o]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Pg=n,Pg}var Lg={},dS;function o3(){return dS||(dS=1,function(n){const e=Ya().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const a=Math.floor(i/7)+2,o=e(i),u=o===145?26:Math.ceil((o-13)/(2*a-2))*2,f=[o-7];for(let m=1;m<a-1;m++)f[m]=f[m-1]-u;return f.push(6),f.reverse()},n.getPositions=function(i){const a=[],o=n.getRowColCoords(i),u=o.length;for(let f=0;f<u;f++)for(let m=0;m<u;m++)f===0&&m===0||f===0&&m===u-1||f===u-1&&m===0||a.push([o[f],o[m]]);return a}}(Lg)),Lg}var Vg={},mS;function l3(){if(mS)return Vg;mS=1;const n=Ya().getSymbolSize,e=7;return Vg.getPositions=function(i){const a=n(i);return[[0,0],[a-e,0],[0,a-e]]},Vg}var Ug={},pS;function u3(){return pS||(pS=1,function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(a){return a!=null&&a!==""&&!isNaN(a)&&a>=0&&a<=7},n.from=function(a){return n.isValid(a)?parseInt(a,10):void 0},n.getPenaltyN1=function(a){const o=a.size;let u=0,f=0,m=0,p=null,y=null;for(let E=0;E<o;E++){f=m=0,p=y=null;for(let w=0;w<o;w++){let S=a.get(E,w);S===p?f++:(f>=5&&(u+=e.N1+(f-5)),p=S,f=1),S=a.get(w,E),S===y?m++:(m>=5&&(u+=e.N1+(m-5)),y=S,m=1)}f>=5&&(u+=e.N1+(f-5)),m>=5&&(u+=e.N1+(m-5))}return u},n.getPenaltyN2=function(a){const o=a.size;let u=0;for(let f=0;f<o-1;f++)for(let m=0;m<o-1;m++){const p=a.get(f,m)+a.get(f,m+1)+a.get(f+1,m)+a.get(f+1,m+1);(p===4||p===0)&&u++}return u*e.N2},n.getPenaltyN3=function(a){const o=a.size;let u=0,f=0,m=0;for(let p=0;p<o;p++){f=m=0;for(let y=0;y<o;y++)f=f<<1&2047|a.get(p,y),y>=10&&(f===1488||f===93)&&u++,m=m<<1&2047|a.get(y,p),y>=10&&(m===1488||m===93)&&u++}return u*e.N3},n.getPenaltyN4=function(a){let o=0;const u=a.data.length;for(let m=0;m<u;m++)o+=a.data[m];return Math.abs(Math.ceil(o*100/u/5)-10)*e.N4};function t(i,a,o){switch(i){case n.Patterns.PATTERN000:return(a+o)%2===0;case n.Patterns.PATTERN001:return a%2===0;case n.Patterns.PATTERN010:return o%3===0;case n.Patterns.PATTERN011:return(a+o)%3===0;case n.Patterns.PATTERN100:return(Math.floor(a/2)+Math.floor(o/3))%2===0;case n.Patterns.PATTERN101:return a*o%2+a*o%3===0;case n.Patterns.PATTERN110:return(a*o%2+a*o%3)%2===0;case n.Patterns.PATTERN111:return(a*o%3+(a+o)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(a,o){const u=o.size;for(let f=0;f<u;f++)for(let m=0;m<u;m++)o.isReserved(m,f)||o.xor(m,f,t(a,m,f))},n.getBestMask=function(a,o){const u=Object.keys(n.Patterns).length;let f=0,m=1/0;for(let p=0;p<u;p++){o(p),n.applyMask(p,a);const y=n.getPenaltyN1(a)+n.getPenaltyN2(a)+n.getPenaltyN3(a)+n.getPenaltyN4(a);n.applyMask(p,a),y<m&&(m=y,f=p)}return f}}(Ug)),Ug}var Ef={},gS;function l1(){if(gS)return Ef;gS=1;const n=Nv(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Ef.getBlocksCount=function(a,o){switch(o){case n.L:return e[(a-1)*4+0];case n.M:return e[(a-1)*4+1];case n.Q:return e[(a-1)*4+2];case n.H:return e[(a-1)*4+3];default:return}},Ef.getTotalCodewordsCount=function(a,o){switch(o){case n.L:return t[(a-1)*4+0];case n.M:return t[(a-1)*4+1];case n.Q:return t[(a-1)*4+2];case n.H:return t[(a-1)*4+3];default:return}},Ef}var jg={},Ku={},_S;function c3(){if(_S)return Ku;_S=1;const n=new Uint8Array(512),e=new Uint8Array(256);return function(){let i=1;for(let a=0;a<255;a++)n[a]=i,e[i]=a,i<<=1,i&256&&(i^=285);for(let a=255;a<512;a++)n[a]=n[a-255]}(),Ku.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},Ku.exp=function(i){return n[i]},Ku.mul=function(i,a){return i===0||a===0?0:n[e[i]+e[a]]},Ku}var yS;function h3(){return yS||(yS=1,function(n){const e=c3();n.mul=function(i,a){const o=new Uint8Array(i.length+a.length-1);for(let u=0;u<i.length;u++)for(let f=0;f<a.length;f++)o[u+f]^=e.mul(i[u],a[f]);return o},n.mod=function(i,a){let o=new Uint8Array(i);for(;o.length-a.length>=0;){const u=o[0];for(let m=0;m<a.length;m++)o[m]^=e.mul(a[m],u);let f=0;for(;f<o.length&&o[f]===0;)f++;o=o.slice(f)}return o},n.generateECPolynomial=function(i){let a=new Uint8Array([1]);for(let o=0;o<i;o++)a=n.mul(a,new Uint8Array([1,e.exp(o)]));return a}}(jg)),jg}var Bg,vS;function f3(){if(vS)return Bg;vS=1;const n=h3();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const a=new Uint8Array(i.length+this.degree);a.set(i);const o=n.mod(a,this.genPoly),u=this.degree-o.length;if(u>0){const f=new Uint8Array(this.degree);return f.set(o,u),f}return o},Bg=e,Bg}var zg={},Fg={},qg={},ES;function u1(){return ES||(ES=1,qg.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),qg}var Li={},TS;function c1(){if(TS)return Li;TS=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Li.KANJI=new RegExp(t,"g"),Li.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Li.BYTE=new RegExp(i,"g"),Li.NUMERIC=new RegExp(n,"g"),Li.ALPHANUMERIC=new RegExp(e,"g");const a=new RegExp("^"+t+"$"),o=new RegExp("^"+n+"$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Li.testKanji=function(m){return a.test(m)},Li.testNumeric=function(m){return o.test(m)},Li.testAlphanumeric=function(m){return u.test(m)},Li}var wS;function Wa(){return wS||(wS=1,function(n){const e=u1(),t=c1();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(o,u){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(u))throw new Error("Invalid version: "+u);return u>=1&&u<10?o.ccBits[0]:u<27?o.ccBits[1]:o.ccBits[2]},n.getBestModeForData=function(o){return t.testNumeric(o)?n.NUMERIC:t.testAlphanumeric(o)?n.ALPHANUMERIC:t.testKanji(o)?n.KANJI:n.BYTE},n.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},n.isValid=function(o){return o&&o.bit&&o.ccBits};function i(a){if(typeof a!="string")throw new Error("Param is not a string");switch(a.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+a)}}n.from=function(o,u){if(n.isValid(o))return o;try{return i(o)}catch{return u}}}(Fg)),Fg}var bS;function d3(){return bS||(bS=1,function(n){const e=Ya(),t=l1(),i=Nv(),a=Wa(),o=u1(),u=7973,f=e.getBCHDigit(u);function m(w,S,x){for(let j=1;j<=40;j++)if(S<=n.getCapacity(j,x,w))return j}function p(w,S){return a.getCharCountIndicator(w,S)+4}function y(w,S){let x=0;return w.forEach(function(j){const V=p(j.mode,S);x+=V+j.getBitsLength()}),x}function E(w,S){for(let x=1;x<=40;x++)if(y(w,x)<=n.getCapacity(x,S,a.MIXED))return x}n.from=function(S,x){return o.isValid(S)?parseInt(S,10):x},n.getCapacity=function(S,x,j){if(!o.isValid(S))throw new Error("Invalid QR Code version");typeof j>"u"&&(j=a.BYTE);const V=e.getSymbolTotalCodewords(S),z=t.getTotalCodewordsCount(S,x),G=(V-z)*8;if(j===a.MIXED)return G;const H=G-p(j,S);switch(j){case a.NUMERIC:return Math.floor(H/10*3);case a.ALPHANUMERIC:return Math.floor(H/11*2);case a.KANJI:return Math.floor(H/13);case a.BYTE:default:return Math.floor(H/8)}},n.getBestVersionForData=function(S,x){let j;const V=i.from(x,i.M);if(Array.isArray(S)){if(S.length>1)return E(S,V);if(S.length===0)return 1;j=S[0]}else j=S;return m(j.mode,j.getLength(),V)},n.getEncodedBits=function(S){if(!o.isValid(S)||S<7)throw new Error("Invalid QR Code version");let x=S<<12;for(;e.getBCHDigit(x)-f>=0;)x^=u<<e.getBCHDigit(x)-f;return S<<12|x}}(zg)),zg}var Hg={},SS;function m3(){if(SS)return Hg;SS=1;const n=Ya(),e=1335,t=21522,i=n.getBCHDigit(e);return Hg.getEncodedBits=function(o,u){const f=o.bit<<3|u;let m=f<<10;for(;n.getBCHDigit(m)-i>=0;)m^=e<<n.getBCHDigit(m)-i;return(f<<10|m)^t},Hg}var Gg={},Kg,AS;function p3(){if(AS)return Kg;AS=1;const n=Wa();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let a,o,u;for(a=0;a+3<=this.data.length;a+=3)o=this.data.substr(a,3),u=parseInt(o,10),i.put(u,10);const f=this.data.length-a;f>0&&(o=this.data.substr(a),u=parseInt(o,10),i.put(u,f*3+1))},Kg=e,Kg}var Qg,CS;function g3(){if(CS)return Qg;CS=1;const n=Wa(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(a){return 11*Math.floor(a/2)+6*(a%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(a){let o;for(o=0;o+2<=this.data.length;o+=2){let u=e.indexOf(this.data[o])*45;u+=e.indexOf(this.data[o+1]),a.put(u,11)}this.data.length%2&&a.put(e.indexOf(this.data[o]),6)},Qg=t,Qg}var $g,RS;function _3(){if(RS)return $g;RS=1;const n=Wa();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,a=this.data.length;i<a;i++)t.put(this.data[i],8)},$g=e,$g}var Yg,IS;function y3(){if(IS)return Yg;IS=1;const n=Wa(),e=Ya();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(a){return a*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let a;for(a=0;a<this.data.length;a++){let o=e.toSJIS(this.data[a]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[a]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),i.put(o,13)}},Yg=t,Yg}var Wg={exports:{}},NS;function v3(){return NS||(NS=1,function(n){var e={single_source_shortest_paths:function(t,i,a){var o={},u={};u[i]=0;var f=e.PriorityQueue.make();f.push(i,0);for(var m,p,y,E,w,S,x,j,V;!f.empty();){m=f.pop(),p=m.value,E=m.cost,w=t[p]||{};for(y in w)w.hasOwnProperty(y)&&(S=w[y],x=E+S,j=u[y],V=typeof u[y]>"u",(V||j>x)&&(u[y]=x,f.push(y,x),o[y]=p))}if(typeof a<"u"&&typeof u[a]>"u"){var z=["Could not find a path from ",i," to ",a,"."].join("");throw new Error(z)}return o},extract_shortest_path_from_predecessor_list:function(t,i){for(var a=[],o=i;o;)a.push(o),t[o],o=t[o];return a.reverse(),a},find_path:function(t,i,a){var o=e.single_source_shortest_paths(t,i,a);return e.extract_shortest_path_from_predecessor_list(o,a)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,a={},o;t=t||{};for(o in i)i.hasOwnProperty(o)&&(a[o]=i[o]);return a.queue=[],a.sorter=t.sorter||i.default_sorter,a},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var a={value:t,cost:i};this.queue.push(a),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(Wg)),Wg.exports}var xS;function E3(){return xS||(xS=1,function(n){const e=Wa(),t=p3(),i=g3(),a=_3(),o=y3(),u=c1(),f=Ya(),m=v3();function p(z){return unescape(encodeURIComponent(z)).length}function y(z,G,H){const W=[];let re;for(;(re=z.exec(H))!==null;)W.push({data:re[0],index:re.index,mode:G,length:re[0].length});return W}function E(z){const G=y(u.NUMERIC,e.NUMERIC,z),H=y(u.ALPHANUMERIC,e.ALPHANUMERIC,z);let W,re;return f.isKanjiModeEnabled()?(W=y(u.BYTE,e.BYTE,z),re=y(u.KANJI,e.KANJI,z)):(W=y(u.BYTE_KANJI,e.BYTE,z),re=[]),G.concat(H,W,re).sort(function(O,R){return O.index-R.index}).map(function(O){return{data:O.data,mode:O.mode,length:O.length}})}function w(z,G){switch(G){case e.NUMERIC:return t.getBitsLength(z);case e.ALPHANUMERIC:return i.getBitsLength(z);case e.KANJI:return o.getBitsLength(z);case e.BYTE:return a.getBitsLength(z)}}function S(z){return z.reduce(function(G,H){const W=G.length-1>=0?G[G.length-1]:null;return W&&W.mode===H.mode?(G[G.length-1].data+=H.data,G):(G.push(H),G)},[])}function x(z){const G=[];for(let H=0;H<z.length;H++){const W=z[H];switch(W.mode){case e.NUMERIC:G.push([W,{data:W.data,mode:e.ALPHANUMERIC,length:W.length},{data:W.data,mode:e.BYTE,length:W.length}]);break;case e.ALPHANUMERIC:G.push([W,{data:W.data,mode:e.BYTE,length:W.length}]);break;case e.KANJI:G.push([W,{data:W.data,mode:e.BYTE,length:p(W.data)}]);break;case e.BYTE:G.push([{data:W.data,mode:e.BYTE,length:p(W.data)}])}}return G}function j(z,G){const H={},W={start:{}};let re=["start"];for(let J=0;J<z.length;J++){const O=z[J],R=[];for(let b=0;b<O.length;b++){const N=O[b],k=""+J+b;R.push(k),H[k]={node:N,lastCount:0},W[k]={};for(let P=0;P<re.length;P++){const I=re[P];H[I]&&H[I].node.mode===N.mode?(W[I][k]=w(H[I].lastCount+N.length,N.mode)-w(H[I].lastCount,N.mode),H[I].lastCount+=N.length):(H[I]&&(H[I].lastCount=N.length),W[I][k]=w(N.length,N.mode)+4+e.getCharCountIndicator(N.mode,G))}}re=R}for(let J=0;J<re.length;J++)W[re[J]].end=0;return{map:W,table:H}}function V(z,G){let H;const W=e.getBestModeForData(z);if(H=e.from(G,W),H!==e.BYTE&&H.bit<W.bit)throw new Error('"'+z+'" cannot be encoded with mode '+e.toString(H)+`.
 Suggested mode is: `+e.toString(W));switch(H===e.KANJI&&!f.isKanjiModeEnabled()&&(H=e.BYTE),H){case e.NUMERIC:return new t(z);case e.ALPHANUMERIC:return new i(z);case e.KANJI:return new o(z);case e.BYTE:return new a(z)}}n.fromArray=function(G){return G.reduce(function(H,W){return typeof W=="string"?H.push(V(W,null)):W.data&&H.push(V(W.data,W.mode)),H},[])},n.fromString=function(G,H){const W=E(G,f.isKanjiModeEnabled()),re=x(W),J=j(re,H),O=m.find_path(J.map,"start","end"),R=[];for(let b=1;b<O.length-1;b++)R.push(J.table[O[b]].node);return n.fromArray(S(R))},n.rawSplit=function(G){return n.fromArray(E(G,f.isKanjiModeEnabled()))}}(Gg)),Gg}var DS;function T3(){if(DS)return Og;DS=1;const n=Ya(),e=Nv(),t=s3(),i=a3(),a=o3(),o=l3(),u=u3(),f=l1(),m=f3(),p=d3(),y=m3(),E=Wa(),w=E3();function S(J,O){const R=J.size,b=o.getPositions(O);for(let N=0;N<b.length;N++){const k=b[N][0],P=b[N][1];for(let I=-1;I<=7;I++)if(!(k+I<=-1||R<=k+I))for(let pe=-1;pe<=7;pe++)P+pe<=-1||R<=P+pe||(I>=0&&I<=6&&(pe===0||pe===6)||pe>=0&&pe<=6&&(I===0||I===6)||I>=2&&I<=4&&pe>=2&&pe<=4?J.set(k+I,P+pe,!0,!0):J.set(k+I,P+pe,!1,!0))}}function x(J){const O=J.size;for(let R=8;R<O-8;R++){const b=R%2===0;J.set(R,6,b,!0),J.set(6,R,b,!0)}}function j(J,O){const R=a.getPositions(O);for(let b=0;b<R.length;b++){const N=R[b][0],k=R[b][1];for(let P=-2;P<=2;P++)for(let I=-2;I<=2;I++)P===-2||P===2||I===-2||I===2||P===0&&I===0?J.set(N+P,k+I,!0,!0):J.set(N+P,k+I,!1,!0)}}function V(J,O){const R=J.size,b=p.getEncodedBits(O);let N,k,P;for(let I=0;I<18;I++)N=Math.floor(I/3),k=I%3+R-8-3,P=(b>>I&1)===1,J.set(N,k,P,!0),J.set(k,N,P,!0)}function z(J,O,R){const b=J.size,N=y.getEncodedBits(O,R);let k,P;for(k=0;k<15;k++)P=(N>>k&1)===1,k<6?J.set(k,8,P,!0):k<8?J.set(k+1,8,P,!0):J.set(b-15+k,8,P,!0),k<8?J.set(8,b-k-1,P,!0):k<9?J.set(8,15-k-1+1,P,!0):J.set(8,15-k-1,P,!0);J.set(b-8,8,1,!0)}function G(J,O){const R=J.size;let b=-1,N=R-1,k=7,P=0;for(let I=R-1;I>0;I-=2)for(I===6&&I--;;){for(let pe=0;pe<2;pe++)if(!J.isReserved(N,I-pe)){let tt=!1;P<O.length&&(tt=(O[P]>>>k&1)===1),J.set(N,I-pe,tt),k--,k===-1&&(P++,k=7)}if(N+=b,N<0||R<=N){N-=b,b=-b;break}}}function H(J,O,R){const b=new t;R.forEach(function(pe){b.put(pe.mode.bit,4),b.put(pe.getLength(),E.getCharCountIndicator(pe.mode,J)),pe.write(b)});const N=n.getSymbolTotalCodewords(J),k=f.getTotalCodewordsCount(J,O),P=(N-k)*8;for(b.getLengthInBits()+4<=P&&b.put(0,4);b.getLengthInBits()%8!==0;)b.putBit(0);const I=(P-b.getLengthInBits())/8;for(let pe=0;pe<I;pe++)b.put(pe%2?17:236,8);return W(b,J,O)}function W(J,O,R){const b=n.getSymbolTotalCodewords(O),N=f.getTotalCodewordsCount(O,R),k=b-N,P=f.getBlocksCount(O,R),I=b%P,pe=P-I,tt=Math.floor(b/P),le=Math.floor(k/P),Ee=le+1,_e=tt-le,Qe=new m(_e);let L=0;const se=new Array(P),me=new Array(P);let ue=0;const ce=new Uint8Array(J.buffer);for(let nt=0;nt<P;nt++){const Ke=nt<pe?le:Ee;se[nt]=ce.slice(L,L+Ke),me[nt]=Qe.encode(se[nt]),L+=Ke,ue=Math.max(ue,Ke)}const Ce=new Uint8Array(b);let Re=0,Ze,xe;for(Ze=0;Ze<ue;Ze++)for(xe=0;xe<P;xe++)Ze<se[xe].length&&(Ce[Re++]=se[xe][Ze]);for(Ze=0;Ze<_e;Ze++)for(xe=0;xe<P;xe++)Ce[Re++]=me[xe][Ze];return Ce}function re(J,O,R,b){let N;if(Array.isArray(J))N=w.fromArray(J);else if(typeof J=="string"){let tt=O;if(!tt){const le=w.rawSplit(J);tt=p.getBestVersionForData(le,R)}N=w.fromString(J,tt||40)}else throw new Error("Invalid data");const k=p.getBestVersionForData(N,R);if(!k)throw new Error("The amount of data is too big to be stored in a QR Code");if(!O)O=k;else if(O<k)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+k+`.
`);const P=H(O,R,N),I=n.getSymbolSize(O),pe=new i(I);return S(pe,O),x(pe),j(pe,O),z(pe,R,0),O>=7&&V(pe,O),G(pe,P),isNaN(b)&&(b=u.getBestMask(pe,z.bind(null,pe,R))),u.applyMask(b,pe),z(pe,R,b),{modules:pe,version:O,errorCorrectionLevel:R,maskPattern:b,segments:N}}return Og.create=function(O,R){if(typeof O>"u"||O==="")throw new Error("No input text");let b=e.M,N,k;return typeof R<"u"&&(b=e.from(R.errorCorrectionLevel,e.M),N=p.from(R.version),k=u.from(R.maskPattern),R.toSJISFunc&&n.setToSJISFunction(R.toSJISFunc)),re(O,N,b,k)},Og}var Xg={},Zg={},OS;function h1(){return OS||(OS=1,function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(o){return[o,o]}))),i.length===6&&i.push("F","F");const a=parseInt(i.join(""),16);return{r:a>>24&255,g:a>>16&255,b:a>>8&255,a:a&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const a=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,o=i.width&&i.width>=21?i.width:void 0,u=i.scale||4;return{width:o,scale:o?4:u,margin:a,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,a){return a.width&&a.width>=i+a.margin*2?a.width/(i+a.margin*2):a.scale},n.getImageWidth=function(i,a){const o=n.getScale(i,a);return Math.floor((i+a.margin*2)*o)},n.qrToImageData=function(i,a,o){const u=a.modules.size,f=a.modules.data,m=n.getScale(u,o),p=Math.floor((u+o.margin*2)*m),y=o.margin*m,E=[o.color.light,o.color.dark];for(let w=0;w<p;w++)for(let S=0;S<p;S++){let x=(w*p+S)*4,j=o.color.light;if(w>=y&&S>=y&&w<p-y&&S<p-y){const V=Math.floor((w-y)/m),z=Math.floor((S-y)/m);j=E[f[V*u+z]?1:0]}i[x++]=j.r,i[x++]=j.g,i[x++]=j.b,i[x]=j.a}}}(Zg)),Zg}var MS;function w3(){return MS||(MS=1,function(n){const e=h1();function t(a,o,u){a.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=u,o.width=u,o.style.height=u+"px",o.style.width=u+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(o,u,f){let m=f,p=u;typeof m>"u"&&(!u||!u.getContext)&&(m=u,u=void 0),u||(p=i()),m=e.getOptions(m);const y=e.getImageWidth(o.modules.size,m),E=p.getContext("2d"),w=E.createImageData(y,y);return e.qrToImageData(w.data,o,m),t(E,p,y),E.putImageData(w,0,0),p},n.renderToDataURL=function(o,u,f){let m=f;typeof m>"u"&&(!u||!u.getContext)&&(m=u,u=void 0),m||(m={});const p=n.render(o,u,m),y=m.type||"image/png",E=m.rendererOpts||{};return p.toDataURL(y,E.quality)}}(Xg)),Xg}var Jg={},kS;function b3(){if(kS)return Jg;kS=1;const n=h1();function e(a,o){const u=a.a/255,f=o+'="'+a.hex+'"';return u<1?f+" "+o+'-opacity="'+u.toFixed(2).slice(1)+'"':f}function t(a,o,u){let f=a+o;return typeof u<"u"&&(f+=" "+u),f}function i(a,o,u){let f="",m=0,p=!1,y=0;for(let E=0;E<a.length;E++){const w=Math.floor(E%o),S=Math.floor(E/o);!w&&!p&&(p=!0),a[E]?(y++,E>0&&w>0&&a[E-1]||(f+=p?t("M",w+u,.5+S+u):t("m",m,0),m=0,p=!1),w+1<o&&a[E+1]||(f+=t("h",y),y=0)):m++}return f}return Jg.render=function(o,u,f){const m=n.getOptions(u),p=o.modules.size,y=o.modules.data,E=p+m.margin*2,w=m.color.light.a?"<path "+e(m.color.light,"fill")+' d="M0 0h'+E+"v"+E+'H0z"/>':"",S="<path "+e(m.color.dark,"stroke")+' d="'+i(y,p,m.margin)+'"/>',x='viewBox="0 0 '+E+" "+E+'"',V='<svg xmlns="http://www.w3.org/2000/svg" '+(m.width?'width="'+m.width+'" height="'+m.width+'" ':"")+x+' shape-rendering="crispEdges">'+w+S+`</svg>
`;return typeof f=="function"&&f(null,V),V},Jg}var PS;function S3(){if(PS)return qo;PS=1;const n=r3(),e=T3(),t=w3(),i=b3();function a(o,u,f,m,p){const y=[].slice.call(arguments,1),E=y.length,w=typeof y[E-1]=="function";if(!w&&!n())throw new Error("Callback required as last argument");if(w){if(E<2)throw new Error("Too few arguments provided");E===2?(p=f,f=u,u=m=void 0):E===3&&(u.getContext&&typeof p>"u"?(p=m,m=void 0):(p=m,m=f,f=u,u=void 0))}else{if(E<1)throw new Error("Too few arguments provided");return E===1?(f=u,u=m=void 0):E===2&&!u.getContext&&(m=f,f=u,u=void 0),new Promise(function(S,x){try{const j=e.create(f,m);S(o(j,u,m))}catch(j){x(j)}})}try{const S=e.create(f,m);p(null,o(S,u,m))}catch(S){p(S)}}return qo.create=e.create,qo.toCanvas=a.bind(null,t.render),qo.toDataURL=a.bind(null,t.renderToDataURL),qo.toString=a.bind(null,function(o,u,f){return i.render(o,f)}),qo}var A3=S3();const C3=LN(A3),R3=()=>{var z,G,H;const{id:n}=wx(),e=El(),t=Ld(),[i,a]=Y.useState(null),[o,u]=Y.useState([]),[f,m]=Y.useState([]),[p,y]=Y.useState(!0),[E,w]=Y.useState(!1),S=Y.useRef(null);Y.useEffect(()=>{(async()=>{try{const re=cl(t,"classroom",n),J=await cP(re);J.exists()&&a(J.data());const O=If(t,"classroom",n,"students"),R=await C_(O);u(R.docs.map(k=>({id:k.id,...k.data()})));const b=If(t,"classroom",n,"checkin"),N=await C_(b);m(N.docs.map(k=>({id:k.id,...k.data()}))),y(!1)}catch(re){console.error("Error fetching data:",re),y(!1)}})()},[n,t]);const x=async()=>{if(S.current)try{const W=document.createElement("canvas");await C3.toCanvas(W,String(n),{width:256,margin:2,color:{dark:"#000000",light:"#ffffff"}}),S.current.innerHTML="",S.current.appendChild(W)}catch(W){console.error("Error generating QR Code:",W)}},j=async()=>{try{const W={date:new Date,students:o.map(J=>({...J,status:0}))},re=await fP(If(t,"classroom",n,"checkin"),W);m(J=>[...J,{id:re.id,...W}])}catch(W){console.error("Error adding checkin:",W)}},V=async(W,re)=>{try{const J=cl(t,"classroom",n,"checkin",W);await hP(J,{students:mP({studentId:re,status:1})}),m(O=>O.map(R=>R.id===W?{...R,students:R.students.map(b=>b.id===re?{...b,status:1}:b)}:R))}catch(J){console.error("Error updating checkin status:",J)}};return p?D.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center",children:D.jsxs("div",{className:"p-8 bg-white rounded-xl shadow-xl",children:[D.jsx("div",{className:"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"}),D.jsx("p",{className:"mt-4 text-gray-600 font-medium text-center",children:"กำลังโหลดข้อมูล..."})]})}):i?D.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8",children:D.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[D.jsxs("button",{onClick:()=>e("/home"),className:"group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-white transition duration-200 mb-6",children:[D.jsx("svg",{className:"w-5 h-5 transform group-hover:-translate-x-1 transition duration-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),D.jsx("span",{className:"font-medium",children:"กลับสู่หน้าหลัก"})]}),D.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-8",children:[D.jsxs("div",{className:"relative z-10 p-8",children:[D.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:(z=i.info)==null?void 0:z.name}),D.jsxs("div",{className:"space-y-2 text-white/90",children:[D.jsxs("p",{className:"text-lg",children:["รหัสวิชา: ",(G=i.info)==null?void 0:G.code]}),D.jsxs("p",{className:"text-lg",children:["ห้องเรียน: ",(H=i.info)==null?void 0:H.room]})]}),D.jsx("button",{onClick:()=>{w(!0),setTimeout(x,100)},className:"mt-6 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium backdrop-blur-sm transition duration-200 transform hover:scale-105",children:"แสดง QR Code ลงทะเบียน"})]}),D.jsx("div",{className:"absolute top-0 right-0 -mt-20 -mr-20",children:D.jsx("div",{className:"w-40 h-40 bg-white/10 rounded-full blur-2xl"})})]}),E&&D.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50",children:D.jsxs("div",{className:"bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full mx-4",children:[D.jsxs("div",{className:"flex justify-between items-center mb-4",children:[D.jsx("h3",{className:"text-xl font-bold text-gray-800",children:"QR Code สำหรับลงทะเบียน"}),D.jsx("button",{onClick:()=>w(!1),className:"p-2 hover:bg-gray-100 rounded-full transition duration-200",children:D.jsx("svg",{className:"w-6 h-6 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),D.jsx("div",{ref:S,className:"bg-gray-50 p-6 rounded-xl flex justify-center items-center min-h-[300px]"})]})}),D.jsxs("div",{className:"grid gap-8",children:[D.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[D.jsx("div",{className:"p-6 border-b border-gray-100",children:D.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"รายชื่อนักเรียนที่ลงทะเบียน"})}),D.jsx("div",{className:"overflow-x-auto",children:D.jsxs("table",{className:"w-full",children:[D.jsx("thead",{children:D.jsxs("tr",{className:"bg-gray-50",children:[D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"ลำดับ"}),D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"รหัส"}),D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"ชื่อ"}),D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"รูปภาพ"}),D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"สถานะ"})]})}),D.jsx("tbody",{className:"divide-y divide-gray-100",children:o.map((W,re)=>D.jsxs("tr",{className:"hover:bg-gray-50/50 transition duration-150",children:[D.jsx("td",{className:"px-6 py-4 text-gray-600",children:re+1}),D.jsx("td",{className:"px-6 py-4 font-medium text-gray-900",children:W.code}),D.jsx("td",{className:"px-6 py-4 text-gray-800",children:W.name}),D.jsx("td",{className:"px-6 py-4",children:D.jsx("img",{src:W.imageUrl||"/api/placeholder/40/40",alt:W.name,className:"w-10 h-10 rounded-full ring-2 ring-gray-100"})}),D.jsx("td",{className:"px-6 py-4",children:D.jsx("span",{className:`inline-flex px-3 py-1 rounded-full text-sm font-medium ${W.status===1?"bg-green-50 text-green-700 ring-1 ring-green-600/20":"bg-gray-50 text-gray-600 ring-1 ring-gray-500/20"}`,children:W.status===1?"เช็คชื่อแล้ว":"ยังไม่ได้เช็คชื่อ"})})]},W.id))})]})})]}),D.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[D.jsxs("div",{className:"p-6 border-b border-gray-100 flex justify-between items-center",children:[D.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"ประวัติการเช็คชื่อ"}),D.jsx("button",{onClick:j,className:"px-6 py-3 bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition duration-200 transform hover:scale-105",children:"เพิ่มการเช็คชื่อ"})]}),D.jsx("div",{className:"overflow-x-auto",children:D.jsxs("table",{className:"w-full",children:[D.jsx("thead",{children:D.jsxs("tr",{className:"bg-gray-50",children:[D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"ลำดับ"}),D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"วัน-เวลา"}),D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"จำนวนคนเข้าเรียน"}),D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"สถานะ"}),D.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"จัดการ"})]})}),D.jsx("tbody",{className:"divide-y divide-gray-100",children:f.map((W,re)=>{var J,O,R;return D.jsxs("tr",{className:"hover:bg-gray-50/50 transition duration-150",children:[D.jsx("td",{className:"px-6 py-4 text-gray-600",children:re+1}),D.jsx("td",{className:"px-6 py-4 text-gray-800",children:new Date(W.date).toLocaleString("th-TH")}),D.jsxs("td",{className:"px-6 py-4 font-medium text-gray-900",children:[((J=W.students)==null?void 0:J.filter(b=>b.status===1).length)||0," ","คน"]}),D.jsx("td",{className:"px-6 py-4",children:D.jsx("span",{className:`inline-flex px-3 py-1 rounded-full text-sm font-medium ${(O=W.students)!=null&&O.every(b=>b.status===1)?"bg-green-50 text-green-700 ring-1 ring-green-600/20":"bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20"}`,children:(R=W.students)!=null&&R.every(b=>b.status===1)?"จบการเช็คชื่อ":"กำลังเรียน"})}),D.jsx("td",{className:"px-6 py-4",children:D.jsx("button",{onClick:()=>V(W.id),className:"text-blue-500 hover:text-blue-700 font-medium transition-colors",children:"เช็คชื่อ"})})]},W.id)})})]})})]})]})]})}):D.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center",children:D.jsxs("div",{className:"p-8 bg-white rounded-xl shadow-xl text-center max-w-md mx-4",children:[D.jsx("div",{className:"w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4",children:D.jsx("svg",{className:"w-10 h-10 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:D.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),D.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"ไม่พบข้อมูลห้องเรียน"}),D.jsx("p",{className:"text-gray-600",children:"กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง"})]})})},I3=()=>D.jsx("div",{className:"Question"});function N3(){return D.jsx("div",{children:D.jsxs(Vx,{children:[D.jsx(Sa,{path:"/",element:D.jsx(B4,{})}),D.jsx(Sa,{path:"/home",element:D.jsx(z4,{})}),D.jsx(Sa,{path:"/edit-profile",element:D.jsx(n3,{})}),D.jsx(Sa,{path:"/add-course",element:D.jsx(i3,{})}),D.jsx(Sa,{path:"/manage-classroom/:id",element:D.jsx(R3,{})}),D.jsx(Sa,{path:"/question",element:D.jsx(I3,{})})]})})}console.log("App is being rendered");KN.createRoot(document.getElementById("root")).render(D.jsx(Y.StrictMode,{children:D.jsx(o2,{basename:"/final-web-app-SC310006/",children:D.jsx(N3,{})})}));
