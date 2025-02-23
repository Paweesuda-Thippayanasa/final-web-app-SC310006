(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function qN(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rg={exports:{}},Vu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT;function HN(){if(LT)return Vu;LT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,o){var u=null;if(o!==void 0&&(u=""+o),a.key!==void 0&&(u=""+a.key),"key"in a){o={};for(var f in a)f!=="key"&&(o[f]=a[f])}else o=a;return a=o.ref,{$$typeof:n,type:i,key:u,ref:a!==void 0?a:null,props:o}}return Vu.Fragment=e,Vu.jsx=t,Vu.jsxs=t,Vu}var VT;function GN(){return VT||(VT=1,rg.exports=HN()),rg.exports}var C=GN(),sg={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UT;function KN(){if(UT)return De;UT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function w(V){return V===null||typeof V!="object"?null:(V=E&&V[E]||V["@@iterator"],typeof V=="function"?V:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,U={};function P(V,re,me){this.props=V,this.context=re,this.refs=U,this.updater=me||S}P.prototype.isReactComponent={},P.prototype.setState=function(V,re){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,re,"setState")},P.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function z(){}z.prototype=P.prototype;function H(V,re,me){this.props=V,this.context=re,this.refs=U,this.updater=me||S}var G=H.prototype=new z;G.constructor=H,D(G,P.prototype),G.isPureReactComponent=!0;var ne=Array.isArray,se={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function O(V,re,me,ue,ce,Ce){return me=Ce.ref,{$$typeof:n,type:V,key:re,ref:me!==void 0?me:null,props:Ce}}function I(V,re){return O(V.type,re,void 0,void 0,void 0,V.props)}function b(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function x(V){var re={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(me){return re[me]})}var k=/\/+/g;function L(V,re){return typeof V=="object"&&V!==null&&V.key!=null?x(""+V.key):re.toString(36)}function N(){}function pe(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(N,N):(V.status="pending",V.then(function(re){V.status==="pending"&&(V.status="fulfilled",V.value=re)},function(re){V.status==="pending"&&(V.status="rejected",V.reason=re)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function tt(V,re,me,ue,ce){var Ce=typeof V;(Ce==="undefined"||Ce==="boolean")&&(V=null);var Re=!1;if(V===null)Re=!0;else switch(Ce){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(V.$$typeof){case n:case e:Re=!0;break;case y:return Re=V._init,tt(Re(V._payload),re,me,ue,ce)}}if(Re)return ce=ce(V),Re=ue===""?"."+L(V,0):ue,ne(ce)?(me="",Re!=null&&(me=Re.replace(k,"$&/")+"/"),tt(ce,re,me,"",function(nt){return nt})):ce!=null&&(b(ce)&&(ce=I(ce,me+(ce.key==null||V&&V.key===ce.key?"":(""+ce.key).replace(k,"$&/")+"/")+Re)),re.push(ce)),1;Re=0;var Je=ue===""?".":ue+":";if(ne(V))for(var xe=0;xe<V.length;xe++)ue=V[xe],Ce=Je+L(ue,xe),Re+=tt(ue,re,me,Ce,ce);else if(xe=w(V),typeof xe=="function")for(V=xe.call(V),xe=0;!(ue=V.next()).done;)ue=ue.value,Ce=Je+L(ue,xe++),Re+=tt(ue,re,me,Ce,ce);else if(Ce==="object"){if(typeof V.then=="function")return tt(pe(V),re,me,ue,ce);throw re=String(V),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.")}return Re}function le(V,re,me){if(V==null)return V;var ue=[],ce=0;return tt(V,ue,"","",function(Ce){return re.call(me,Ce,ce++)}),ue}function Ee(V){if(V._status===-1){var re=V._result;re=re(),re.then(function(me){(V._status===0||V._status===-1)&&(V._status=1,V._result=me)},function(me){(V._status===0||V._status===-1)&&(V._status=2,V._result=me)}),V._status===-1&&(V._status=0,V._result=re)}if(V._status===1)return V._result.default;throw V._result}var _e=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var re=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(re))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)};function Qe(){}return De.Children={map:le,forEach:function(V,re,me){le(V,function(){re.apply(this,arguments)},me)},count:function(V){var re=0;return le(V,function(){re++}),re},toArray:function(V){return le(V,function(re){return re})||[]},only:function(V){if(!b(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},De.Component=P,De.Fragment=t,De.Profiler=a,De.PureComponent=H,De.StrictMode=i,De.Suspense=m,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,De.act=function(){throw Error("act(...) is not supported in production builds of React.")},De.cache=function(V){return function(){return V.apply(null,arguments)}},De.cloneElement=function(V,re,me){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var ue=D({},V.props),ce=V.key,Ce=void 0;if(re!=null)for(Re in re.ref!==void 0&&(Ce=void 0),re.key!==void 0&&(ce=""+re.key),re)!W.call(re,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&re.ref===void 0||(ue[Re]=re[Re]);var Re=arguments.length-2;if(Re===1)ue.children=me;else if(1<Re){for(var Je=Array(Re),xe=0;xe<Re;xe++)Je[xe]=arguments[xe+2];ue.children=Je}return O(V.type,ce,void 0,void 0,Ce,ue)},De.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:o,_context:V},V},De.createElement=function(V,re,me){var ue,ce={},Ce=null;if(re!=null)for(ue in re.key!==void 0&&(Ce=""+re.key),re)W.call(re,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(ce[ue]=re[ue]);var Re=arguments.length-2;if(Re===1)ce.children=me;else if(1<Re){for(var Je=Array(Re),xe=0;xe<Re;xe++)Je[xe]=arguments[xe+2];ce.children=Je}if(V&&V.defaultProps)for(ue in Re=V.defaultProps,Re)ce[ue]===void 0&&(ce[ue]=Re[ue]);return O(V,Ce,void 0,void 0,null,ce)},De.createRef=function(){return{current:null}},De.forwardRef=function(V){return{$$typeof:f,render:V}},De.isValidElement=b,De.lazy=function(V){return{$$typeof:y,_payload:{_status:-1,_result:V},_init:Ee}},De.memo=function(V,re){return{$$typeof:p,type:V,compare:re===void 0?null:re}},De.startTransition=function(V){var re=se.T,me={};se.T=me;try{var ue=V(),ce=se.S;ce!==null&&ce(me,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(Qe,_e)}catch(Ce){_e(Ce)}finally{se.T=re}},De.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},De.use=function(V){return se.H.use(V)},De.useActionState=function(V,re,me){return se.H.useActionState(V,re,me)},De.useCallback=function(V,re){return se.H.useCallback(V,re)},De.useContext=function(V){return se.H.useContext(V)},De.useDebugValue=function(){},De.useDeferredValue=function(V,re){return se.H.useDeferredValue(V,re)},De.useEffect=function(V,re){return se.H.useEffect(V,re)},De.useId=function(){return se.H.useId()},De.useImperativeHandle=function(V,re,me){return se.H.useImperativeHandle(V,re,me)},De.useInsertionEffect=function(V,re){return se.H.useInsertionEffect(V,re)},De.useLayoutEffect=function(V,re){return se.H.useLayoutEffect(V,re)},De.useMemo=function(V,re){return se.H.useMemo(V,re)},De.useOptimistic=function(V,re){return se.H.useOptimistic(V,re)},De.useReducer=function(V,re,me){return se.H.useReducer(V,re,me)},De.useRef=function(V){return se.H.useRef(V)},De.useState=function(V){return se.H.useState(V)},De.useSyncExternalStore=function(V,re,me){return se.H.useSyncExternalStore(V,re,me)},De.useTransition=function(){return se.H.useTransition()},De.version="19.0.0",De}var jT;function Q_(){return jT||(jT=1,sg.exports=KN()),sg.exports}var $=Q_(),ag={exports:{}},Uu={},og={exports:{}},lg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BT;function QN(){return BT||(BT=1,function(n){function e(le,Ee){var _e=le.length;le.push(Ee);e:for(;0<_e;){var Qe=_e-1>>>1,V=le[Qe];if(0<a(V,Ee))le[Qe]=Ee,le[_e]=V,_e=Qe;else break e}}function t(le){return le.length===0?null:le[0]}function i(le){if(le.length===0)return null;var Ee=le[0],_e=le.pop();if(_e!==Ee){le[0]=_e;e:for(var Qe=0,V=le.length,re=V>>>1;Qe<re;){var me=2*(Qe+1)-1,ue=le[me],ce=me+1,Ce=le[ce];if(0>a(ue,_e))ce<V&&0>a(Ce,ue)?(le[Qe]=Ce,le[ce]=_e,Qe=ce):(le[Qe]=ue,le[me]=_e,Qe=me);else if(ce<V&&0>a(Ce,_e))le[Qe]=Ce,le[ce]=_e,Qe=ce;else break e}}return Ee}function a(le,Ee){var _e=le.sortIndex-Ee.sortIndex;return _e!==0?_e:le.id-Ee.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var m=[],p=[],y=1,E=null,w=3,S=!1,D=!1,U=!1,P=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function G(le){for(var Ee=t(p);Ee!==null;){if(Ee.callback===null)i(p);else if(Ee.startTime<=le)i(p),Ee.sortIndex=Ee.expirationTime,e(m,Ee);else break;Ee=t(p)}}function ne(le){if(U=!1,G(le),!D)if(t(m)!==null)D=!0,pe();else{var Ee=t(p);Ee!==null&&tt(ne,Ee.startTime-le)}}var se=!1,W=-1,O=5,I=-1;function b(){return!(n.unstable_now()-I<O)}function x(){if(se){var le=n.unstable_now();I=le;var Ee=!0;try{e:{D=!1,U&&(U=!1,z(W),W=-1),S=!0;var _e=w;try{t:{for(G(le),E=t(m);E!==null&&!(E.expirationTime>le&&b());){var Qe=E.callback;if(typeof Qe=="function"){E.callback=null,w=E.priorityLevel;var V=Qe(E.expirationTime<=le);if(le=n.unstable_now(),typeof V=="function"){E.callback=V,G(le),Ee=!0;break t}E===t(m)&&i(m),G(le)}else i(m);E=t(m)}if(E!==null)Ee=!0;else{var re=t(p);re!==null&&tt(ne,re.startTime-le),Ee=!1}}break e}finally{E=null,w=_e,S=!1}Ee=void 0}}finally{Ee?k():se=!1}}}var k;if(typeof H=="function")k=function(){H(x)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,N=L.port2;L.port1.onmessage=x,k=function(){N.postMessage(null)}}else k=function(){P(x,0)};function pe(){se||(se=!0,k())}function tt(le,Ee){W=P(function(){le(n.unstable_now())},Ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(le){le.callback=null},n.unstable_continueExecution=function(){D||S||(D=!0,pe())},n.unstable_forceFrameRate=function(le){0>le||125<le?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<le?Math.floor(1e3/le):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(le){switch(w){case 1:case 2:case 3:var Ee=3;break;default:Ee=w}var _e=w;w=Ee;try{return le()}finally{w=_e}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(le,Ee){switch(le){case 1:case 2:case 3:case 4:case 5:break;default:le=3}var _e=w;w=le;try{return Ee()}finally{w=_e}},n.unstable_scheduleCallback=function(le,Ee,_e){var Qe=n.unstable_now();switch(typeof _e=="object"&&_e!==null?(_e=_e.delay,_e=typeof _e=="number"&&0<_e?Qe+_e:Qe):_e=Qe,le){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=_e+V,le={id:y++,callback:Ee,priorityLevel:le,startTime:_e,expirationTime:V,sortIndex:-1},_e>Qe?(le.sortIndex=_e,e(p,le),t(m)===null&&le===t(p)&&(U?(z(W),W=-1):U=!0,tt(ne,_e-Qe))):(le.sortIndex=V,e(m,le),D||S||(D=!0,pe())),le},n.unstable_shouldYield=b,n.unstable_wrapCallback=function(le){var Ee=w;return function(){var _e=w;w=Ee;try{return le.apply(this,arguments)}finally{w=_e}}}}(lg)),lg}var zT;function $N(){return zT||(zT=1,og.exports=QN()),og.exports}var ug={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FT;function YN(){if(FT)return un;FT=1;var n=Q_();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function o(m,p,y){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:E==null?null:""+E,children:m,containerInfo:p,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,un.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return o(m,p,null,y)},un.flushSync=function(m){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,m)return m()}finally{u.T=p,i.p=y,i.d.f()}},un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(m,p))},un.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,E=f(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:E,integrity:w,fetchPriority:S}):y==="script"&&i.d.X(m,{crossOrigin:E,integrity:w,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=f(p.as,p.crossOrigin);i.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(m)},un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,E=f(y,p.crossOrigin);i.d.L(m,y,{crossOrigin:E,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},un.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=f(p.as,p.crossOrigin);i.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(m)},un.requestFormReset=function(m){i.d.r(m)},un.unstable_batchedUpdates=function(m,p){return m(p)},un.useFormState=function(m,p,y){return u.H.useFormState(m,p,y)},un.useFormStatus=function(){return u.H.useHostTransitionStatus()},un.version="19.0.0",un}var qT;function WN(){if(qT)return ug.exports;qT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ug.exports=YN(),ug.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HT;function XN(){if(HT)return Uu;HT=1;var n=$N(),e=Q_(),t=WN();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}var o=Symbol.for("react.element"),u=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),S=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),ne=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function W(r){return r===null||typeof r!="object"?null:(r=se&&r[se]||r["@@iterator"],typeof r=="function"?r:null)}var O=Symbol.for("react.client.reference");function I(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===O?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case m:return"Fragment";case f:return"Portal";case y:return"Profiler";case p:return"StrictMode";case U:return"Suspense";case P:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case S:return(r.displayName||"Context")+".Provider";case w:return(r._context.displayName||"Context")+".Consumer";case D:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case z:return s=r.displayName||null,s!==null?s:I(r.type)||"Memo";case H:s=r._payload,r=r._init;try{return I(r(s))}catch{}}return null}var b=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x=Object.assign,k,L;function N(r){if(k===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||"",L=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+k+r+L}var pe=!1;function tt(r,s){if(!r||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(X){var Q=X}Reflect.construct(r,[],ie)}else{try{ie.call()}catch(X){Q=X}r.call(ie.prototype)}}else{try{throw Error()}catch(X){Q=X}(ie=r())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(X){if(X&&Q&&typeof X.stack=="string")return[X.stack,Q.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],A=g[1];if(T&&A){var M=T.split(`
`),B=A.split(`
`);for(d=c=0;c<M.length&&!M[c].includes("DetermineComponentFrameRoot");)c++;for(;d<B.length&&!B[d].includes("DetermineComponentFrameRoot");)d++;if(c===M.length||d===B.length)for(c=M.length-1,d=B.length-1;1<=c&&0<=d&&M[c]!==B[d];)d--;for(;1<=c&&0<=d;c--,d--)if(M[c]!==B[d]){if(c!==1||d!==1)do if(c--,d--,0>d||M[c]!==B[d]){var J=`
`+M[c].replace(" at new "," at ");return r.displayName&&J.includes("<anonymous>")&&(J=J.replace("<anonymous>",r.displayName)),J}while(1<=c&&0<=d);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(l=r?r.displayName||r.name:"")?N(l):""}function le(r){switch(r.tag){case 26:case 27:case 5:return N(r.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 15:return r=tt(r.type,!1),r;case 11:return r=tt(r.type.render,!1),r;case 1:return r=tt(r.type,!0),r;default:return""}}function Ee(r){try{var s="";do s+=le(r),r=r.return;while(r);return s}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function _e(r){var s=r,l=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(l=s.return),r=s.return;while(r)}return s.tag===3?l:null}function Qe(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function V(r){if(_e(r)!==r)throw Error(i(188))}function re(r){var s=r.alternate;if(!s){if(s=_e(r),s===null)throw Error(i(188));return s!==r?null:r}for(var l=r,c=s;;){var d=l.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){l=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===l)return V(d),r;if(g===c)return V(d),s;g=g.sibling}throw Error(i(188))}if(l.return!==c.return)l=d,c=g;else{for(var T=!1,A=d.child;A;){if(A===l){T=!0,l=d,c=g;break}if(A===c){T=!0,c=d,l=g;break}A=A.sibling}if(!T){for(A=g.child;A;){if(A===l){T=!0,l=g,c=d;break}if(A===c){T=!0,c=g,l=d;break}A=A.sibling}if(!T)throw Error(i(189))}}if(l.alternate!==c)throw Error(i(190))}if(l.tag!==3)throw Error(i(188));return l.stateNode.current===l?r:s}function me(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=me(r),s!==null)return s;r=r.sibling}return null}var ue=Array.isArray,ce=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce={pending:!1,data:null,method:null,action:null},Re=[],Je=-1;function xe(r){return{current:r}}function nt(r){0>Je||(r.current=Re[Je],Re[Je]=null,Je--)}function Ke(r,s){Je++,Re[Je]=r.current,r.current=s}var mn=xe(null),Yi=xe(null),Bn=xe(null),Vr=xe(null);function Ur(r,s){switch(Ke(Bn,s),Ke(Yi,r),Ke(mn,null),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?hT(s):0;break;default:if(r=r===8?s.parentNode:s,s=r.tagName,r=r.namespaceURI)r=hT(r),s=fT(r,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}nt(mn),Ke(mn,s)}function Wi(){nt(mn),nt(Yi),nt(Bn)}function Ol(r){r.memoizedState!==null&&Ke(Vr,r);var s=mn.current,l=fT(s,r.type);s!==l&&(Ke(Yi,r),Ke(mn,l))}function Xa(r){Yi.current===r&&(nt(mn),nt(Yi)),Vr.current===r&&(nt(Vr),Ou._currentValue=Ce)}var Ja=Object.prototype.hasOwnProperty,Qs=n.unstable_scheduleCallback,Za=n.unstable_cancelCallback,am=n.unstable_shouldYield,kl=n.unstable_requestPaint,wn=n.unstable_now,Hc=n.unstable_getCurrentPriorityLevel,Ot=n.unstable_ImmediatePriority,zt=n.unstable_UserBlockingPriority,Xi=n.unstable_NormalPriority,Gc=n.unstable_LowPriority,Ml=n.unstable_IdlePriority,om=n.log,$s=n.unstable_setDisableYieldValue,jr=null,on=null;function Pl(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(jr,r,void 0,(r.current.flags&128)===128)}catch{}}function vi(r){if(typeof om=="function"&&$s(r),on&&typeof on.setStrictMode=="function")try{on.setStrictMode(jr,r)}catch{}}var pn=Math.clz32?Math.clz32:Qc,Ll=Math.log,Kc=Math.LN2;function Qc(r){return r>>>=0,r===0?32:31-(Ll(r)/Kc|0)|0}var Ei=128,Br=4194304;function ai(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function zn(r,s){var l=r.pendingLanes;if(l===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,T=r.warmLanes;r=r.finishedLanes!==0;var A=l&134217727;return A!==0?(l=A&~d,l!==0?c=ai(l):(g&=A,g!==0?c=ai(g):r||(T=A&~T,T!==0&&(c=ai(T))))):(A=l&~d,A!==0?c=ai(A):g!==0?c=ai(g):r||(T=l&~T,T!==0&&(c=ai(T)))),c===0?0:s!==0&&s!==c&&!(s&d)&&(d=c&-c,T=s&-s,d>=T||d===32&&(T&4194176)!==0)?s:c}function zr(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function eo(r,s){switch(r){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vl(){var r=Ei;return Ei<<=1,!(Ei&4194176)&&(Ei=128),r}function Fr(){var r=Br;return Br<<=1,!(Br&62914560)&&(Br=4194304),r}function to(r){for(var s=[],l=0;31>l;l++)s.push(r);return s}function bt(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function $c(r,s,l,c,d,g){var T=r.pendingLanes;r.pendingLanes=l,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=l,r.entangledLanes&=l,r.errorRecoveryDisabledLanes&=l,r.shellSuspendCounter=0;var A=r.entanglements,M=r.expirationTimes,B=r.hiddenUpdates;for(l=T&~l;0<l;){var J=31-pn(l),ie=1<<J;A[J]=0,M[J]=-1;var Q=B[J];if(Q!==null)for(B[J]=null,J=0;J<Q.length;J++){var X=Q[J];X!==null&&(X.lane&=-536870913)}l&=~ie}c!==0&&qr(r,c,0),g!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=g&~(T&~s))}function qr(r,s,l){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-pn(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|l&4194218}function Hr(r,s){var l=r.entangledLanes|=s;for(r=r.entanglements;l;){var c=31-pn(l),d=1<<c;d&s|r[c]&s&&(r[c]|=s),l&=~d}}function Yc(r){return r&=-r,2<r?8<r?r&134217727?32:268435456:8:2}function Wc(){var r=ce.p;return r!==0?r:(r=window.event,r===void 0?32:xT(r.type))}function Gr(r,s){var l=ce.p;try{return ce.p=r,s()}finally{ce.p=l}}var Ti=Math.random().toString(36).slice(2),Ft="__reactFiber$"+Ti,kt="__reactProps$"+Ti,Ji="__reactContainer$"+Ti,Ys="__reactEvents$"+Ti,no="__reactListeners$"+Ti,wi="__reactHandles$"+Ti,Ul="__reactResources$"+Ti,Kr="__reactMarker$"+Ti;function Ws(r){delete r[Ft],delete r[kt],delete r[Ys],delete r[no],delete r[wi]}function oi(r){var s=r[Ft];if(s)return s;for(var l=r.parentNode;l;){if(s=l[Ji]||l[Ft]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(r=pT(r);r!==null;){if(l=r[Ft])return l;r=pT(r)}return s}r=l,l=r.parentNode}return null}function Zi(r){if(r=r[Ft]||r[Ji]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Qr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function $r(r){var s=r[Ul];return s||(s=r[Ul]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function dt(r){r[Kr]=!0}var jl=new Set,io={};function Dn(r,s){bn(r,s),bn(r+"Capture",s)}function bn(r,s){for(io[r]=s,r=0;r<s.length;r++)jl.add(s[r])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bl={},zl={};function Xc(r){return Ja.call(zl,r)?!0:Ja.call(Bl,r)?!1:lm.test(r)?zl[r]=!0:(Bl[r]=!0,!1)}function Yr(r,s,l){if(Xc(s))if(l===null)r.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+l)}}function Wr(r,s,l){if(l===null)r.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+l)}}function Fn(r,s,l,c){if(c===null)r.removeAttribute(l);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(l);return}r.setAttributeNS(s,l,""+c)}}function gn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Jc(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function um(r){var s=Jc(r)?"checked":"value",l=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var d=l.get,g=l.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(r,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Xs(r){r._valueTracker||(r._valueTracker=um(r))}function Fl(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return r&&(c=Jc(r)?r.checked?"true":"false":r.value),r=c,r!==l?(s.setValue(r),!0):!1}function ro(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var er=/[\n"\\]/g;function _t(r){return r.replace(er,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Xr(r,s,l,c,d,g,T,A){r.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.type=T:r.removeAttribute("type"),s!=null?T==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+gn(s)):r.value!==""+gn(s)&&(r.value=""+gn(s)):T!=="submit"&&T!=="reset"||r.removeAttribute("value"),s!=null?so(r,T,gn(s)):l!=null?so(r,T,gn(l)):c!=null&&r.removeAttribute("value"),d==null&&g!=null&&(r.defaultChecked=!!g),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?r.name=""+gn(A):r.removeAttribute("name")}function Js(r,s,l,c,d,g,T,A){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(r.type=g),s!=null||l!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;l=l!=null?""+gn(l):"",s=s!=null?""+gn(s):l,A||s===r.value||(r.value=s),r.defaultValue=s}c=c??d,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=A?r.checked:!!c,r.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(r.name=T)}function so(r,s,l){s==="number"&&ro(r.ownerDocument)===r||r.defaultValue===""+l||(r.defaultValue=""+l)}function $e(r,s,l,c){if(r=r.options,s){s={};for(var d=0;d<l.length;d++)s["$"+l[d]]=!0;for(l=0;l<r.length;l++)d=s.hasOwnProperty("$"+r[l].value),r[l].selected!==d&&(r[l].selected=d),d&&c&&(r[l].defaultSelected=!0)}else{for(l=""+gn(l),s=null,d=0;d<r.length;d++){if(r[d].value===l){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Zs(r,s,l){if(s!=null&&(s=""+gn(s),s!==r.value&&(r.value=s),l==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=l!=null?""+gn(l):""}function Jr(r,s,l,c){if(s==null){if(c!=null){if(l!=null)throw Error(i(92));if(ue(c)){if(1<c.length)throw Error(i(93));c=c[0]}l=c}l==null&&(l=""),s=l}l=gn(s),r.defaultValue=l,c=r.textContent,c===l&&c!==""&&c!==null&&(r.value=c)}function qn(r,s){if(s){var l=r.firstChild;if(l&&l===r.lastChild&&l.nodeType===3){l.nodeValue=s;return}}r.textContent=s}var cm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ql(r,s,l){var c=s.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,l):typeof l!="number"||l===0||cm.has(s)?s==="float"?r.cssFloat=l:r[s]=(""+l).trim():r[s]=l+"px"}function Zc(r,s,l){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,l!=null){for(var c in l)!l.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var d in s)c=s[d],s.hasOwnProperty(d)&&l[d]!==c&&ql(r,d,c)}else for(var g in s)s.hasOwnProperty(g)&&ql(r,g,s[g])}function Hl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bi(r){return fm.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Hn=null;function ao(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var tr=null,nr=null;function ir(r){var s=Zi(r);if(s&&(r=s.stateNode)){var l=r[kt]||null;e:switch(r=s.stateNode,s.type){case"input":if(Xr(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),s=l.name,l.type==="radio"&&s!=null){for(l=r;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+_t(""+s)+'"][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==r&&c.form===r.form){var d=c[kt]||null;if(!d)throw Error(i(90));Xr(c,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<l.length;s++)c=l[s],c.form===r.form&&Fl(c)}break e;case"textarea":Zs(r,l.value,l.defaultValue);break e;case"select":s=l.value,s!=null&&$e(r,!!l.multiple,s,!1)}}}var Gl=!1;function eh(r,s,l){if(Gl)return r(s,l);Gl=!0;try{var c=r(s);return c}finally{if(Gl=!1,(tr!==null||nr!==null)&&(Gh(),tr&&(s=tr,r=nr,nr=tr=null,ir(s),r)))for(s=0;s<r.length;s++)ir(r[s])}}function ea(r,s){var l=r.stateNode;if(l===null)return null;var c=l[kt]||null;if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(l&&typeof l!="function")throw Error(i(231,s,typeof l));return l}var Gn=!1;if(On)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){Gn=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{Gn=!1}var Si=null,Zr=null,rr=null;function Kl(){if(rr)return rr;var r,s=Zr,l=s.length,c,d="value"in Si?Si.value:Si.textContent,g=d.length;for(r=0;r<l&&s[r]===d[r];r++);var T=l-r;for(c=1;c<=T&&s[l-c]===d[g-c];c++);return rr=d.slice(r,1<c?1-c:void 0)}function Ai(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Ci(){return!0}function Ql(){return!1}function qt(r){function s(l,c,d,g,T){this._reactName=l,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(l=r[A],this[A]=l?l(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ci:Ql,this.isPropagationStopped=Ql,this}return x(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ci)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ci)},persist:function(){},isPersistent:Ci}),s}var Ze={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oo=qt(Ze),na=x({},Ze,{view:0,detail:0}),th=qt(na),lo,uo,Ri,ia=x({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:aa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ri&&(Ri&&r.type==="mousemove"?(lo=r.screenX-Ri.screenX,uo=r.screenY-Ri.screenY):uo=lo=0,Ri=r),lo)},movementY:function(r){return"movementY"in r?r.movementY:uo}}),Kn=qt(ia),nh=x({},ia,{dataTransfer:0}),dm=qt(nh),ra=x({},na,{relatedTarget:0}),co=qt(ra),$l=x({},Ze,{animationName:0,elapsedTime:0,pseudoElement:0}),ho=qt($l),ih=x({},Ze,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),fo=qt(ih),mm=x({},Ze,{data:0}),Yl=qt(mm),sa={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=sh[r])?!!s[r]:!1}function aa(){return Wl}var ah=x({},na,{key:function(r){if(r.key){var s=sa[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ai(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?rh[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:aa,charCode:function(r){return r.type==="keypress"?Ai(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ai(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),mo=qt(ah),oh=x({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xl=qt(oh),sr=x({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:aa}),lh=qt(sr),uh=x({},Ze,{propertyName:0,elapsedTime:0,pseudoElement:0}),ch=qt(uh),hh=x({},ia,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),po=qt(hh),_n=x({},Ze,{newState:0,oldState:0}),fh=qt(_n),dh=[9,13,27,32],Ii=On&&"CompositionEvent"in window,h=null;On&&"documentMode"in document&&(h=document.documentMode);var _=On&&"TextEvent"in window&&!h,v=On&&(!Ii||h&&8<h&&11>=h),R=" ",q=!1;function Y(r,s){switch(r){case"keyup":return dh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oe(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Fe=!1;function Mt(r,s){switch(r){case"compositionend":return oe(s);case"keypress":return s.which!==32?null:(q=!0,R);case"textInput":return r=s.data,r===R&&q?null:r;default:return null}}function qe(r,s){if(Fe)return r==="compositionend"||!Ii&&Y(r,s)?(r=Kl(),rr=Zr=Si=null,Fe=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Ht={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Ht[r.type]:s==="textarea"}function ar(r,s,l,c){tr?nr?nr.push(c):nr=[c]:tr=c,s=Wh(s,"onChange"),0<s.length&&(l=new oo("onChange","change",null,l,c),r.push({event:l,listeners:s}))}var Jt=null,Ni=null;function Jl(r){aT(r,0)}function mh(r){var s=Qr(r);if(Fl(s))return r}function Pv(r,s){if(r==="change")return s}var Lv=!1;if(On){var pm;if(On){var gm="oninput"in document;if(!gm){var Vv=document.createElement("div");Vv.setAttribute("oninput","return;"),gm=typeof Vv.oninput=="function"}pm=gm}else pm=!1;Lv=pm&&(!document.documentMode||9<document.documentMode)}function Uv(){Jt&&(Jt.detachEvent("onpropertychange",jv),Ni=Jt=null)}function jv(r){if(r.propertyName==="value"&&mh(Ni)){var s=[];ar(s,Ni,r,ao(r)),eh(Jl,s)}}function v1(r,s,l){r==="focusin"?(Uv(),Jt=s,Ni=l,Jt.attachEvent("onpropertychange",jv)):r==="focusout"&&Uv()}function E1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return mh(Ni)}function T1(r,s){if(r==="click")return mh(s)}function w1(r,s){if(r==="input"||r==="change")return mh(s)}function b1(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var kn=typeof Object.is=="function"?Object.is:b1;function Zl(r,s){if(kn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var l=Object.keys(r),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var d=l[c];if(!Ja.call(s,d)||!kn(r[d],s[d]))return!1}return!0}function Bv(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function zv(r,s){var l=Bv(r);r=0;for(var c;l;){if(l.nodeType===3){if(c=r+l.textContent.length,r<=s&&c>=s)return{node:l,offset:s-r};r=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Bv(l)}}function Fv(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Fv(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function qv(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ro(r.document);s instanceof r.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)r=s.contentWindow;else break;s=ro(r.document)}return s}function _m(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function S1(r,s){var l=qv(s);s=r.focusedElem;var c=r.selectionRange;if(l!==s&&s&&s.ownerDocument&&Fv(s.ownerDocument.documentElement,s)){if(c!==null&&_m(s)){if(r=c.start,l=c.end,l===void 0&&(l=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(l,s.value.length);else if(l=(r=s.ownerDocument||document)&&r.defaultView||window,l.getSelection){l=l.getSelection();var d=s.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!l.extend&&g>c&&(d=c,c=g,g=d),d=zv(s,g);var T=zv(s,c);d&&T&&(l.rangeCount!==1||l.anchorNode!==d.node||l.anchorOffset!==d.offset||l.focusNode!==T.node||l.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(d.node,d.offset),l.removeAllRanges(),g>c?(l.addRange(r),l.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),l.addRange(r)))}}for(r=[],l=s;l=l.parentNode;)l.nodeType===1&&r.push({element:l,left:l.scrollLeft,top:l.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)l=r[s],l.element.scrollLeft=l.left,l.element.scrollTop=l.top}}var A1=On&&"documentMode"in document&&11>=document.documentMode,go=null,ym=null,eu=null,vm=!1;function Hv(r,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;vm||go==null||go!==ro(c)||(c=go,"selectionStart"in c&&_m(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),eu&&Zl(eu,c)||(eu=c,c=Wh(ym,"onSelect"),0<c.length&&(s=new oo("onSelect","select",null,s,l),r.push({event:s,listeners:c}),s.target=go)))}function oa(r,s){var l={};return l[r.toLowerCase()]=s.toLowerCase(),l["Webkit"+r]="webkit"+s,l["Moz"+r]="moz"+s,l}var _o={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionrun:oa("Transition","TransitionRun"),transitionstart:oa("Transition","TransitionStart"),transitioncancel:oa("Transition","TransitionCancel"),transitionend:oa("Transition","TransitionEnd")},Em={},Gv={};On&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function la(r){if(Em[r])return Em[r];if(!_o[r])return r;var s=_o[r],l;for(l in s)if(s.hasOwnProperty(l)&&l in Gv)return Em[r]=s[l];return r}var Kv=la("animationend"),Qv=la("animationiteration"),$v=la("animationstart"),C1=la("transitionrun"),R1=la("transitionstart"),I1=la("transitioncancel"),Yv=la("transitionend"),Wv=new Map,Xv="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function li(r,s){Wv.set(r,s),Dn(s,[r])}var Qn=[],yo=0,Tm=0;function ph(){for(var r=yo,s=Tm=yo=0;s<r;){var l=Qn[s];Qn[s++]=null;var c=Qn[s];Qn[s++]=null;var d=Qn[s];Qn[s++]=null;var g=Qn[s];if(Qn[s++]=null,c!==null&&d!==null){var T=c.pending;T===null?d.next=d:(d.next=T.next,T.next=d),c.pending=d}g!==0&&Jv(l,d,g)}}function gh(r,s,l,c){Qn[yo++]=r,Qn[yo++]=s,Qn[yo++]=l,Qn[yo++]=c,Tm|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function wm(r,s,l,c){return gh(r,s,l,c),_h(r)}function es(r,s){return gh(r,null,null,s),_h(r)}function Jv(r,s,l){r.lanes|=l;var c=r.alternate;c!==null&&(c.lanes|=l);for(var d=!1,g=r.return;g!==null;)g.childLanes|=l,c=g.alternate,c!==null&&(c.childLanes|=l),g.tag===22&&(r=g.stateNode,r===null||r._visibility&1||(d=!0)),r=g,g=g.return;d&&s!==null&&r.tag===3&&(g=r.stateNode,d=31-pn(l),g=g.hiddenUpdates,r=g[d],r===null?g[d]=[s]:r.push(s),s.lane=l|536870912)}function _h(r){if(50<Au)throw Au=0,Ip=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var vo={},Zv=new WeakMap;function $n(r,s){if(typeof r=="object"&&r!==null){var l=Zv.get(r);return l!==void 0?l:(s={value:r,source:s,stack:Ee(s)},Zv.set(r,s),s)}return{value:r,source:s,stack:Ee(s)}}var Eo=[],To=0,yh=null,vh=0,Yn=[],Wn=0,ua=null,or=1,lr="";function ca(r,s){Eo[To++]=vh,Eo[To++]=yh,yh=r,vh=s}function e0(r,s,l){Yn[Wn++]=or,Yn[Wn++]=lr,Yn[Wn++]=ua,ua=r;var c=or;r=lr;var d=32-pn(c)-1;c&=~(1<<d),l+=1;var g=32-pn(s)+d;if(30<g){var T=d-d%5;g=(c&(1<<T)-1).toString(32),c>>=T,d-=T,or=1<<32-pn(s)+d|l<<d|c,lr=g+r}else or=1<<g|l<<d|c,lr=r}function bm(r){r.return!==null&&(ca(r,1),e0(r,1,0))}function Sm(r){for(;r===yh;)yh=Eo[--To],Eo[To]=null,vh=Eo[--To],Eo[To]=null;for(;r===ua;)ua=Yn[--Wn],Yn[Wn]=null,lr=Yn[--Wn],Yn[Wn]=null,or=Yn[--Wn],Yn[Wn]=null}var yn=null,Zt=null,Ye=!1,ui=null,xi=!1,Am=Error(i(519));function ha(r){var s=Error(i(418,""));throw iu($n(s,r)),Am}function t0(r){var s=r.stateNode,l=r.type,c=r.memoizedProps;switch(s[Ft]=r,s[kt]=c,l){case"dialog":Be("cancel",s),Be("close",s);break;case"iframe":case"object":case"embed":Be("load",s);break;case"video":case"audio":for(l=0;l<Ru.length;l++)Be(Ru[l],s);break;case"source":Be("error",s);break;case"img":case"image":case"link":Be("error",s),Be("load",s);break;case"details":Be("toggle",s);break;case"input":Be("invalid",s),Js(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Xs(s);break;case"select":Be("invalid",s);break;case"textarea":Be("invalid",s),Jr(s,c.value,c.defaultValue,c.children),Xs(s)}l=c.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||s.textContent===""+l||c.suppressHydrationWarning===!0||cT(s.textContent,l)?(c.popover!=null&&(Be("beforetoggle",s),Be("toggle",s)),c.onScroll!=null&&Be("scroll",s),c.onScrollEnd!=null&&Be("scrollend",s),c.onClick!=null&&(s.onclick=Xh),s=!0):s=!1,s||ha(r)}function n0(r){for(yn=r.return;yn;)switch(yn.tag){case 3:case 27:xi=!0;return;case 5:case 13:xi=!1;return;default:yn=yn.return}}function tu(r){if(r!==yn)return!1;if(!Ye)return n0(r),Ye=!0,!1;var s=!1,l;if((l=r.tag!==3&&r.tag!==27)&&((l=r.tag===5)&&(l=r.type,l=!(l!=="form"&&l!=="button")||Gp(r.type,r.memoizedProps)),l=!l),l&&(s=!0),s&&Zt&&ha(r),n0(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(l=r.data,l==="/$"){if(s===0){Zt=hi(r.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++;r=r.nextSibling}Zt=null}}else Zt=yn?hi(r.stateNode.nextSibling):null;return!0}function nu(){Zt=yn=null,Ye=!1}function iu(r){ui===null?ui=[r]:ui.push(r)}var ru=Error(i(460)),i0=Error(i(474)),Cm={then:function(){}};function r0(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Eh(){}function s0(r,s,l){switch(l=r[l],l===void 0?r.push(s):l!==s&&(s.then(Eh,Eh),s=l),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r===ru?Error(i(483)):r;default:if(typeof s.status=="string")s.then(Eh,Eh);else{if(r=ot,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=c}},function(c){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r===ru?Error(i(483)):r}throw su=s,ru}}var su=null;function a0(){if(su===null)throw Error(i(459));var r=su;return su=null,r}var wo=null,au=0;function Th(r){var s=au;return au+=1,wo===null&&(wo=[]),s0(wo,r,s)}function ou(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function wh(r,s){throw s.$$typeof===o?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function o0(r){var s=r._init;return s(r._payload)}function l0(r){function s(F,j){if(r){var K=F.deletions;K===null?(F.deletions=[j],F.flags|=16):K.push(j)}}function l(F,j){if(!r)return null;for(;j!==null;)s(F,j),j=j.sibling;return null}function c(F){for(var j=new Map;F!==null;)F.key!==null?j.set(F.key,F):j.set(F.index,F),F=F.sibling;return j}function d(F,j){return F=fs(F,j),F.index=0,F.sibling=null,F}function g(F,j,K){return F.index=K,r?(K=F.alternate,K!==null?(K=K.index,K<j?(F.flags|=33554434,j):K):(F.flags|=33554434,j)):(F.flags|=1048576,j)}function T(F){return r&&F.alternate===null&&(F.flags|=33554434),F}function A(F,j,K,Z){return j===null||j.tag!==6?(j=Ep(K,F.mode,Z),j.return=F,j):(j=d(j,K),j.return=F,j)}function M(F,j,K,Z){var de=K.type;return de===m?J(F,j,K.props.children,Z,K.key):j!==null&&(j.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===H&&o0(de)===j.type)?(j=d(j,K.props),ou(j,K),j.return=F,j):(j=Bh(K.type,K.key,K.props,null,F.mode,Z),ou(j,K),j.return=F,j)}function B(F,j,K,Z){return j===null||j.tag!==4||j.stateNode.containerInfo!==K.containerInfo||j.stateNode.implementation!==K.implementation?(j=Tp(K,F.mode,Z),j.return=F,j):(j=d(j,K.children||[]),j.return=F,j)}function J(F,j,K,Z,de){return j===null||j.tag!==7?(j=Ta(K,F.mode,Z,de),j.return=F,j):(j=d(j,K),j.return=F,j)}function ie(F,j,K){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ep(""+j,F.mode,K),j.return=F,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case u:return K=Bh(j.type,j.key,j.props,null,F.mode,K),ou(K,j),K.return=F,K;case f:return j=Tp(j,F.mode,K),j.return=F,j;case H:var Z=j._init;return j=Z(j._payload),ie(F,j,K)}if(ue(j)||W(j))return j=Ta(j,F.mode,K,null),j.return=F,j;if(typeof j.then=="function")return ie(F,Th(j),K);if(j.$$typeof===S)return ie(F,Vh(F,j),K);wh(F,j)}return null}function Q(F,j,K,Z){var de=j!==null?j.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return de!==null?null:A(F,j,""+K,Z);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case u:return K.key===de?M(F,j,K,Z):null;case f:return K.key===de?B(F,j,K,Z):null;case H:return de=K._init,K=de(K._payload),Q(F,j,K,Z)}if(ue(K)||W(K))return de!==null?null:J(F,j,K,Z,null);if(typeof K.then=="function")return Q(F,j,Th(K),Z);if(K.$$typeof===S)return Q(F,j,Vh(F,K),Z);wh(F,K)}return null}function X(F,j,K,Z,de){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return F=F.get(K)||null,A(j,F,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case u:return F=F.get(Z.key===null?K:Z.key)||null,M(j,F,Z,de);case f:return F=F.get(Z.key===null?K:Z.key)||null,B(j,F,Z,de);case H:var ke=Z._init;return Z=ke(Z._payload),X(F,j,K,Z,de)}if(ue(Z)||W(Z))return F=F.get(K)||null,J(j,F,Z,de,null);if(typeof Z.then=="function")return X(F,j,K,Th(Z),de);if(Z.$$typeof===S)return X(F,j,K,Vh(j,Z),de);wh(j,Z)}return null}function ge(F,j,K,Z){for(var de=null,ke=null,ye=j,Te=j=0,Qt=null;ye!==null&&Te<K.length;Te++){ye.index>Te?(Qt=ye,ye=null):Qt=ye.sibling;var We=Q(F,ye,K[Te],Z);if(We===null){ye===null&&(ye=Qt);break}r&&ye&&We.alternate===null&&s(F,ye),j=g(We,j,Te),ke===null?de=We:ke.sibling=We,ke=We,ye=Qt}if(Te===K.length)return l(F,ye),Ye&&ca(F,Te),de;if(ye===null){for(;Te<K.length;Te++)ye=ie(F,K[Te],Z),ye!==null&&(j=g(ye,j,Te),ke===null?de=ye:ke.sibling=ye,ke=ye);return Ye&&ca(F,Te),de}for(ye=c(ye);Te<K.length;Te++)Qt=X(ye,F,Te,K[Te],Z),Qt!==null&&(r&&Qt.alternate!==null&&ye.delete(Qt.key===null?Te:Qt.key),j=g(Qt,j,Te),ke===null?de=Qt:ke.sibling=Qt,ke=Qt);return r&&ye.forEach(function(vs){return s(F,vs)}),Ye&&ca(F,Te),de}function Ie(F,j,K,Z){if(K==null)throw Error(i(151));for(var de=null,ke=null,ye=j,Te=j=0,Qt=null,We=K.next();ye!==null&&!We.done;Te++,We=K.next()){ye.index>Te?(Qt=ye,ye=null):Qt=ye.sibling;var vs=Q(F,ye,We.value,Z);if(vs===null){ye===null&&(ye=Qt);break}r&&ye&&vs.alternate===null&&s(F,ye),j=g(vs,j,Te),ke===null?de=vs:ke.sibling=vs,ke=vs,ye=Qt}if(We.done)return l(F,ye),Ye&&ca(F,Te),de;if(ye===null){for(;!We.done;Te++,We=K.next())We=ie(F,We.value,Z),We!==null&&(j=g(We,j,Te),ke===null?de=We:ke.sibling=We,ke=We);return Ye&&ca(F,Te),de}for(ye=c(ye);!We.done;Te++,We=K.next())We=X(ye,F,Te,We.value,Z),We!==null&&(r&&We.alternate!==null&&ye.delete(We.key===null?Te:We.key),j=g(We,j,Te),ke===null?de=We:ke.sibling=We,ke=We);return r&&ye.forEach(function(FN){return s(F,FN)}),Ye&&ca(F,Te),de}function Et(F,j,K,Z){if(typeof K=="object"&&K!==null&&K.type===m&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case u:e:{for(var de=K.key;j!==null;){if(j.key===de){if(de=K.type,de===m){if(j.tag===7){l(F,j.sibling),Z=d(j,K.props.children),Z.return=F,F=Z;break e}}else if(j.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===H&&o0(de)===j.type){l(F,j.sibling),Z=d(j,K.props),ou(Z,K),Z.return=F,F=Z;break e}l(F,j);break}else s(F,j);j=j.sibling}K.type===m?(Z=Ta(K.props.children,F.mode,Z,K.key),Z.return=F,F=Z):(Z=Bh(K.type,K.key,K.props,null,F.mode,Z),ou(Z,K),Z.return=F,F=Z)}return T(F);case f:e:{for(de=K.key;j!==null;){if(j.key===de)if(j.tag===4&&j.stateNode.containerInfo===K.containerInfo&&j.stateNode.implementation===K.implementation){l(F,j.sibling),Z=d(j,K.children||[]),Z.return=F,F=Z;break e}else{l(F,j);break}else s(F,j);j=j.sibling}Z=Tp(K,F.mode,Z),Z.return=F,F=Z}return T(F);case H:return de=K._init,K=de(K._payload),Et(F,j,K,Z)}if(ue(K))return ge(F,j,K,Z);if(W(K)){if(de=W(K),typeof de!="function")throw Error(i(150));return K=de.call(K),Ie(F,j,K,Z)}if(typeof K.then=="function")return Et(F,j,Th(K),Z);if(K.$$typeof===S)return Et(F,j,Vh(F,K),Z);wh(F,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,j!==null&&j.tag===6?(l(F,j.sibling),Z=d(j,K),Z.return=F,F=Z):(l(F,j),Z=Ep(K,F.mode,Z),Z.return=F,F=Z),T(F)):l(F,j)}return function(F,j,K,Z){try{au=0;var de=Et(F,j,K,Z);return wo=null,de}catch(ye){if(ye===ru)throw ye;var ke=ei(29,ye,null,F.mode);return ke.lanes=Z,ke.return=F,ke}finally{}}}var fa=l0(!0),u0=l0(!1),bo=xe(null),bh=xe(0);function c0(r,s){r=vr,Ke(bh,r),Ke(bo,s),vr=r|s.baseLanes}function Rm(){Ke(bh,vr),Ke(bo,bo.current)}function Im(){vr=bh.current,nt(bo),nt(bh)}var Xn=xe(null),Di=null;function ts(r){var s=r.alternate;Ke(Lt,Lt.current&1),Ke(Xn,r),Di===null&&(s===null||bo.current!==null||s.memoizedState!==null)&&(Di=r)}function h0(r){if(r.tag===22){if(Ke(Lt,Lt.current),Ke(Xn,r),Di===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Di=r)}}else ns()}function ns(){Ke(Lt,Lt.current),Ke(Xn,Xn.current)}function ur(r){nt(Xn),Di===r&&(Di=null),nt(Lt)}var Lt=xe(0);function Sh(r){for(var s=r;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var N1=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(l,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(l){return l()})}},x1=n.unstable_scheduleCallback,D1=n.unstable_NormalPriority,Vt={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nm(){return{controller:new N1,data:new Map,refCount:0}}function lu(r){r.refCount--,r.refCount===0&&x1(D1,function(){r.controller.abort()})}var uu=null,xm=0,So=0,Ao=null;function O1(r,s){if(uu===null){var l=uu=[];xm=0,So=Lp(),Ao={status:"pending",value:void 0,then:function(c){l.push(c)}}}return xm++,s.then(f0,f0),s}function f0(){if(--xm===0&&uu!==null){Ao!==null&&(Ao.status="fulfilled");var r=uu;uu=null,So=0,Ao=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function k1(r,s){var l=[],c={status:"pending",value:null,reason:null,then:function(d){l.push(d)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var d=0;d<l.length;d++)(0,l[d])(s)},function(d){for(c.status="rejected",c.reason=d,d=0;d<l.length;d++)(0,l[d])(void 0)}),c}var d0=b.S;b.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&O1(r,s),d0!==null&&d0(r,s)};var da=xe(null);function Dm(){var r=da.current;return r!==null?r:ot.pooledCache}function Ah(r,s){s===null?Ke(da,da.current):Ke(da,s.pool)}function m0(){var r=Dm();return r===null?null:{parent:Vt._currentValue,pool:r}}var is=0,Oe=null,it=null,Ct=null,Ch=!1,Co=!1,ma=!1,Rh=0,cu=0,Ro=null,M1=0;function St(){throw Error(i(321))}function Om(r,s){if(s===null)return!1;for(var l=0;l<s.length&&l<r.length;l++)if(!kn(r[l],s[l]))return!1;return!0}function km(r,s,l,c,d,g){return is=g,Oe=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,b.H=r===null||r.memoizedState===null?pa:rs,ma=!1,g=l(c,d),ma=!1,Co&&(g=g0(s,l,c,d)),p0(r),g}function p0(r){b.H=Oi;var s=it!==null&&it.next!==null;if(is=0,Ct=it=Oe=null,Ch=!1,cu=0,Ro=null,s)throw Error(i(300));r===null||Gt||(r=r.dependencies,r!==null&&Lh(r)&&(Gt=!0))}function g0(r,s,l,c){Oe=r;var d=0;do{if(Co&&(Ro=null),cu=0,Co=!1,25<=d)throw Error(i(301));if(d+=1,Ct=it=null,r.updateQueue!=null){var g=r.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}b.H=ga,g=s(l,c)}while(Co);return g}function P1(){var r=b.H,s=r.useState()[0];return s=typeof s.then=="function"?hu(s):s,r=r.useState()[0],(it!==null?it.memoizedState:null)!==r&&(Oe.flags|=1024),s}function Mm(){var r=Rh!==0;return Rh=0,r}function Pm(r,s,l){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~l}function Lm(r){if(Ch){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ch=!1}is=0,Ct=it=Oe=null,Co=!1,cu=Rh=0,Ro=null}function Sn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Oe.memoizedState=Ct=r:Ct=Ct.next=r,Ct}function Rt(){if(it===null){var r=Oe.alternate;r=r!==null?r.memoizedState:null}else r=it.next;var s=Ct===null?Oe.memoizedState:Ct.next;if(s!==null)Ct=s,it=r;else{if(r===null)throw Oe.alternate===null?Error(i(467)):Error(i(310));it=r,r={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},Ct===null?Oe.memoizedState=Ct=r:Ct=Ct.next=r}return Ct}var Ih;Ih=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function hu(r){var s=cu;return cu+=1,Ro===null&&(Ro=[]),r=s0(Ro,r,s),s=Oe,(Ct===null?s.memoizedState:Ct.next)===null&&(s=s.alternate,b.H=s===null||s.memoizedState===null?pa:rs),r}function Nh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return hu(r);if(r.$$typeof===S)return ln(r)}throw Error(i(438,String(r)))}function Vm(r){var s=null,l=Oe.updateQueue;if(l!==null&&(s=l.memoCache),s==null){var c=Oe.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),l===null&&(l=Ih(),Oe.updateQueue=l),l.memoCache=s,l=s.data[s.index],l===void 0)for(l=s.data[s.index]=Array(r),c=0;c<r;c++)l[c]=ne;return s.index++,l}function cr(r,s){return typeof s=="function"?s(r):s}function xh(r){var s=Rt();return Um(s,it,r)}function Um(r,s,l){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=l;var d=r.baseQueue,g=c.pending;if(g!==null){if(d!==null){var T=d.next;d.next=g.next,g.next=T}s.baseQueue=d=g,c.pending=null}if(g=r.baseState,d===null)r.memoizedState=g;else{s=d.next;var A=T=null,M=null,B=s,J=!1;do{var ie=B.lane&-536870913;if(ie!==B.lane?(He&ie)===ie:(is&ie)===ie){var Q=B.revertLane;if(Q===0)M!==null&&(M=M.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),ie===So&&(J=!0);else if((is&Q)===Q){B=B.next,Q===So&&(J=!0);continue}else ie={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},M===null?(A=M=ie,T=g):M=M.next=ie,Oe.lanes|=Q,ds|=Q;ie=B.action,ma&&l(g,ie),g=B.hasEagerState?B.eagerState:l(g,ie)}else Q={lane:ie,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},M===null?(A=M=Q,T=g):M=M.next=Q,Oe.lanes|=ie,ds|=ie;B=B.next}while(B!==null&&B!==s);if(M===null?T=g:M.next=A,!kn(g,r.memoizedState)&&(Gt=!0,J&&(l=Ao,l!==null)))throw l;r.memoizedState=g,r.baseState=T,r.baseQueue=M,c.lastRenderedState=g}return d===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function jm(r){var s=Rt(),l=s.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=r;var c=l.dispatch,d=l.pending,g=s.memoizedState;if(d!==null){l.pending=null;var T=d=d.next;do g=r(g,T.action),T=T.next;while(T!==d);kn(g,s.memoizedState)||(Gt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),l.lastRenderedState=g}return[g,c]}function _0(r,s,l){var c=Oe,d=Rt(),g=Ye;if(g){if(l===void 0)throw Error(i(407));l=l()}else l=s();var T=!kn((it||d).memoizedState,l);if(T&&(d.memoizedState=l,Gt=!0),d=d.queue,Fm(E0.bind(null,c,d,r),[r]),d.getSnapshot!==s||T||Ct!==null&&Ct.memoizedState.tag&1){if(c.flags|=2048,Io(9,v0.bind(null,c,d,l,s),{destroy:void 0},null),ot===null)throw Error(i(349));g||is&60||y0(c,s,l)}return l}function y0(r,s,l){r.flags|=16384,r={getSnapshot:s,value:l},s=Oe.updateQueue,s===null?(s=Ih(),Oe.updateQueue=s,s.stores=[r]):(l=s.stores,l===null?s.stores=[r]:l.push(r))}function v0(r,s,l,c){s.value=l,s.getSnapshot=c,T0(s)&&w0(r)}function E0(r,s,l){return l(function(){T0(s)&&w0(r)})}function T0(r){var s=r.getSnapshot;r=r.value;try{var l=s();return!kn(r,l)}catch{return!0}}function w0(r){var s=es(r,2);s!==null&&vn(s,r,2)}function Bm(r){var s=Sn();if(typeof r=="function"){var l=r;if(r=l(),ma){vi(!0);try{l()}finally{vi(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:r},s}function b0(r,s,l,c){return r.baseState=l,Um(r,it,typeof c=="function"?c:cr)}function L1(r,s,l,c,d){if(kh(r))throw Error(i(485));if(r=s.action,r!==null){var g={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};b.T!==null?l(!0):g.isTransition=!1,c(g),l=s.pending,l===null?(g.next=s.pending=g,S0(s,g)):(g.next=l.next,s.pending=l.next=g)}}function S0(r,s){var l=s.action,c=s.payload,d=r.state;if(s.isTransition){var g=b.T,T={};b.T=T;try{var A=l(d,c),M=b.S;M!==null&&M(T,A),A0(r,s,A)}catch(B){zm(r,s,B)}finally{b.T=g}}else try{g=l(d,c),A0(r,s,g)}catch(B){zm(r,s,B)}}function A0(r,s,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(c){C0(r,s,c)},function(c){return zm(r,s,c)}):C0(r,s,l)}function C0(r,s,l){s.status="fulfilled",s.value=l,R0(s),r.state=l,s=r.pending,s!==null&&(l=s.next,l===s?r.pending=null:(l=l.next,s.next=l,S0(r,l)))}function zm(r,s,l){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=l,R0(s),s=s.next;while(s!==c)}r.action=null}function R0(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function I0(r,s){return s}function N0(r,s){if(Ye){var l=ot.formState;if(l!==null){e:{var c=Oe;if(Ye){if(Zt){t:{for(var d=Zt,g=xi;d.nodeType!==8;){if(!g){d=null;break t}if(d=hi(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){Zt=hi(d.nextSibling),c=d.data==="F!";break e}}ha(c)}c=!1}c&&(s=l[0])}}return l=Sn(),l.memoizedState=l.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I0,lastRenderedState:s},l.queue=c,l=Q0.bind(null,Oe,c),c.dispatch=l,c=Bm(!1),g=Qm.bind(null,Oe,!1,c.queue),c=Sn(),d={state:s,dispatch:null,action:r,pending:null},c.queue=d,l=L1.bind(null,Oe,d,g,l),d.dispatch=l,c.memoizedState=r,[s,l,!1]}function x0(r){var s=Rt();return D0(s,it,r)}function D0(r,s,l){s=Um(r,s,I0)[0],r=xh(cr)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?hu(s):s;var c=Rt(),d=c.queue,g=d.dispatch;return l!==c.memoizedState&&(Oe.flags|=2048,Io(9,V1.bind(null,d,l),{destroy:void 0},null)),[s,g,r]}function V1(r,s){r.action=s}function O0(r){var s=Rt(),l=it;if(l!==null)return D0(s,l,r);Rt(),s=s.memoizedState,l=Rt();var c=l.queue.dispatch;return l.memoizedState=r,[s,c,!1]}function Io(r,s,l,c){return r={tag:r,create:s,inst:l,deps:c,next:null},s=Oe.updateQueue,s===null&&(s=Ih(),Oe.updateQueue=s),l=s.lastEffect,l===null?s.lastEffect=r.next=r:(c=l.next,l.next=r,r.next=c,s.lastEffect=r),r}function k0(){return Rt().memoizedState}function Dh(r,s,l,c){var d=Sn();Oe.flags|=r,d.memoizedState=Io(1|s,l,{destroy:void 0},c===void 0?null:c)}function Oh(r,s,l,c){var d=Rt();c=c===void 0?null:c;var g=d.memoizedState.inst;it!==null&&c!==null&&Om(c,it.memoizedState.deps)?d.memoizedState=Io(s,l,g,c):(Oe.flags|=r,d.memoizedState=Io(1|s,l,g,c))}function M0(r,s){Dh(8390656,8,r,s)}function Fm(r,s){Oh(2048,8,r,s)}function P0(r,s){return Oh(4,2,r,s)}function L0(r,s){return Oh(4,4,r,s)}function V0(r,s){if(typeof s=="function"){r=r();var l=s(r);return function(){typeof l=="function"?l():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function U0(r,s,l){l=l!=null?l.concat([r]):null,Oh(4,4,V0.bind(null,s,r),l)}function qm(){}function j0(r,s){var l=Rt();s=s===void 0?null:s;var c=l.memoizedState;return s!==null&&Om(s,c[1])?c[0]:(l.memoizedState=[r,s],r)}function B0(r,s){var l=Rt();s=s===void 0?null:s;var c=l.memoizedState;if(s!==null&&Om(s,c[1]))return c[0];if(c=r(),ma){vi(!0);try{r()}finally{vi(!1)}}return l.memoizedState=[c,s],c}function Hm(r,s,l){return l===void 0||is&1073741824?r.memoizedState=s:(r.memoizedState=l,r=FE(),Oe.lanes|=r,ds|=r,l)}function z0(r,s,l,c){return kn(l,s)?l:bo.current!==null?(r=Hm(r,l,c),kn(r,s)||(Gt=!0),r):is&42?(r=FE(),Oe.lanes|=r,ds|=r,s):(Gt=!0,r.memoizedState=l)}function F0(r,s,l,c,d){var g=ce.p;ce.p=g!==0&&8>g?g:8;var T=b.T,A={};b.T=A,Qm(r,!1,s,l);try{var M=d(),B=b.S;if(B!==null&&B(A,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var J=k1(M,c);fu(r,s,J,Vn(r))}else fu(r,s,c,Vn(r))}catch(ie){fu(r,s,{then:function(){},status:"rejected",reason:ie},Vn())}finally{ce.p=g,b.T=T}}function U1(){}function Gm(r,s,l,c){if(r.tag!==5)throw Error(i(476));var d=q0(r).queue;F0(r,d,s,Ce,l===null?U1:function(){return H0(r),l(c)})}function q0(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:Ce,baseState:Ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:Ce},next:null};var l={};return s.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:cr,lastRenderedState:l},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function H0(r){var s=q0(r).next.queue;fu(r,s,{},Vn())}function Km(){return ln(Ou)}function G0(){return Rt().memoizedState}function K0(){return Rt().memoizedState}function j1(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var l=Vn();r=os(l);var c=ls(s,r,l);c!==null&&(vn(c,s,l),pu(c,s,l)),s={cache:Nm()},r.payload=s;return}s=s.return}}function B1(r,s,l){var c=Vn();l={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},kh(r)?$0(s,l):(l=wm(r,s,l,c),l!==null&&(vn(l,r,c),Y0(l,s,c)))}function Q0(r,s,l){var c=Vn();fu(r,s,l,c)}function fu(r,s,l,c){var d={lane:c,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(kh(r))$0(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,A=g(T,l);if(d.hasEagerState=!0,d.eagerState=A,kn(A,T))return gh(r,s,d,0),ot===null&&ph(),!1}catch{}finally{}if(l=wm(r,s,d,c),l!==null)return vn(l,r,c),Y0(l,s,c),!0}return!1}function Qm(r,s,l,c){if(c={lane:2,revertLane:Lp(),action:c,hasEagerState:!1,eagerState:null,next:null},kh(r)){if(s)throw Error(i(479))}else s=wm(r,l,c,2),s!==null&&vn(s,r,2)}function kh(r){var s=r.alternate;return r===Oe||s!==null&&s===Oe}function $0(r,s){Co=Ch=!0;var l=r.pending;l===null?s.next=s:(s.next=l.next,l.next=s),r.pending=s}function Y0(r,s,l){if(l&4194176){var c=s.lanes;c&=r.pendingLanes,l|=c,s.lanes=l,Hr(r,l)}}var Oi={readContext:ln,use:Nh,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St};Oi.useCacheRefresh=St,Oi.useMemoCache=St,Oi.useHostTransitionStatus=St,Oi.useFormState=St,Oi.useActionState=St,Oi.useOptimistic=St;var pa={readContext:ln,use:Nh,useCallback:function(r,s){return Sn().memoizedState=[r,s===void 0?null:s],r},useContext:ln,useEffect:M0,useImperativeHandle:function(r,s,l){l=l!=null?l.concat([r]):null,Dh(4194308,4,V0.bind(null,s,r),l)},useLayoutEffect:function(r,s){return Dh(4194308,4,r,s)},useInsertionEffect:function(r,s){Dh(4,2,r,s)},useMemo:function(r,s){var l=Sn();s=s===void 0?null:s;var c=r();if(ma){vi(!0);try{r()}finally{vi(!1)}}return l.memoizedState=[c,s],c},useReducer:function(r,s,l){var c=Sn();if(l!==void 0){var d=l(s);if(ma){vi(!0);try{l(s)}finally{vi(!1)}}}else d=s;return c.memoizedState=c.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},c.queue=r,r=r.dispatch=B1.bind(null,Oe,r),[c.memoizedState,r]},useRef:function(r){var s=Sn();return r={current:r},s.memoizedState=r},useState:function(r){r=Bm(r);var s=r.queue,l=Q0.bind(null,Oe,s);return s.dispatch=l,[r.memoizedState,l]},useDebugValue:qm,useDeferredValue:function(r,s){var l=Sn();return Hm(l,r,s)},useTransition:function(){var r=Bm(!1);return r=F0.bind(null,Oe,r.queue,!0,!1),Sn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,l){var c=Oe,d=Sn();if(Ye){if(l===void 0)throw Error(i(407));l=l()}else{if(l=s(),ot===null)throw Error(i(349));He&60||y0(c,s,l)}d.memoizedState=l;var g={value:l,getSnapshot:s};return d.queue=g,M0(E0.bind(null,c,g,r),[r]),c.flags|=2048,Io(9,v0.bind(null,c,g,l,s),{destroy:void 0},null),l},useId:function(){var r=Sn(),s=ot.identifierPrefix;if(Ye){var l=lr,c=or;l=(c&~(1<<32-pn(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=Rh++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=M1++,s=":"+s+"r"+l.toString(32)+":";return r.memoizedState=s},useCacheRefresh:function(){return Sn().memoizedState=j1.bind(null,Oe)}};pa.useMemoCache=Vm,pa.useHostTransitionStatus=Km,pa.useFormState=N0,pa.useActionState=N0,pa.useOptimistic=function(r){var s=Sn();s.memoizedState=s.baseState=r;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=l,s=Qm.bind(null,Oe,!0,l),l.dispatch=s,[r,s]};var rs={readContext:ln,use:Nh,useCallback:j0,useContext:ln,useEffect:Fm,useImperativeHandle:U0,useInsertionEffect:P0,useLayoutEffect:L0,useMemo:B0,useReducer:xh,useRef:k0,useState:function(){return xh(cr)},useDebugValue:qm,useDeferredValue:function(r,s){var l=Rt();return z0(l,it.memoizedState,r,s)},useTransition:function(){var r=xh(cr)[0],s=Rt().memoizedState;return[typeof r=="boolean"?r:hu(r),s]},useSyncExternalStore:_0,useId:G0};rs.useCacheRefresh=K0,rs.useMemoCache=Vm,rs.useHostTransitionStatus=Km,rs.useFormState=x0,rs.useActionState=x0,rs.useOptimistic=function(r,s){var l=Rt();return b0(l,it,r,s)};var ga={readContext:ln,use:Nh,useCallback:j0,useContext:ln,useEffect:Fm,useImperativeHandle:U0,useInsertionEffect:P0,useLayoutEffect:L0,useMemo:B0,useReducer:jm,useRef:k0,useState:function(){return jm(cr)},useDebugValue:qm,useDeferredValue:function(r,s){var l=Rt();return it===null?Hm(l,r,s):z0(l,it.memoizedState,r,s)},useTransition:function(){var r=jm(cr)[0],s=Rt().memoizedState;return[typeof r=="boolean"?r:hu(r),s]},useSyncExternalStore:_0,useId:G0};ga.useCacheRefresh=K0,ga.useMemoCache=Vm,ga.useHostTransitionStatus=Km,ga.useFormState=O0,ga.useActionState=O0,ga.useOptimistic=function(r,s){var l=Rt();return it!==null?b0(l,it,r,s):(l.baseState=r,[r,l.queue.dispatch])};function $m(r,s,l,c){s=r.memoizedState,l=l(c,s),l=l==null?s:x({},s,l),r.memoizedState=l,r.lanes===0&&(r.updateQueue.baseState=l)}var Ym={isMounted:function(r){return(r=r._reactInternals)?_e(r)===r:!1},enqueueSetState:function(r,s,l){r=r._reactInternals;var c=Vn(),d=os(c);d.payload=s,l!=null&&(d.callback=l),s=ls(r,d,c),s!==null&&(vn(s,r,c),pu(s,r,c))},enqueueReplaceState:function(r,s,l){r=r._reactInternals;var c=Vn(),d=os(c);d.tag=1,d.payload=s,l!=null&&(d.callback=l),s=ls(r,d,c),s!==null&&(vn(s,r,c),pu(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var l=Vn(),c=os(l);c.tag=2,s!=null&&(c.callback=s),s=ls(r,c,l),s!==null&&(vn(s,r,l),pu(s,r,l))}};function W0(r,s,l,c,d,g,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!Zl(l,c)||!Zl(d,g):!0}function X0(r,s,l,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==r&&Ym.enqueueReplaceState(s,s.state,null)}function _a(r,s){var l=s;if("ref"in s){l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}if(r=r.defaultProps){l===s&&(l=x({},l));for(var d in r)l[d]===void 0&&(l[d]=r[d])}return l}var Mh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function J0(r){Mh(r)}function Z0(r){console.error(r)}function eE(r){Mh(r)}function Ph(r,s){try{var l=r.onUncaughtError;l(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function tE(r,s,l){try{var c=r.onCaughtError;c(l.value,{componentStack:l.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Wm(r,s,l){return l=os(l),l.tag=3,l.payload={element:null},l.callback=function(){Ph(r,s)},l}function nE(r){return r=os(r),r.tag=3,r}function iE(r,s,l,c){var d=l.type.getDerivedStateFromError;if(typeof d=="function"){var g=c.value;r.payload=function(){return d(g)},r.callback=function(){tE(s,l,c)}}var T=l.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(r.callback=function(){tE(s,l,c),typeof d!="function"&&(ms===null?ms=new Set([this]):ms.add(this));var A=c.stack;this.componentDidCatch(c.value,{componentStack:A!==null?A:""})})}function z1(r,s,l,c,d){if(l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=l.alternate,s!==null&&mu(s,l,d,!0),l=Xn.current,l!==null){switch(l.tag){case 13:return Di===null?Dp():l.alternate===null&&vt===0&&(vt=3),l.flags&=-257,l.flags|=65536,l.lanes=d,c===Cm?l.flags|=16384:(s=l.updateQueue,s===null?l.updateQueue=new Set([c]):s.add(c),kp(r,c,d)),!1;case 22:return l.flags|=65536,c===Cm?l.flags|=16384:(s=l.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},l.updateQueue=s):(l=s.retryQueue,l===null?s.retryQueue=new Set([c]):l.add(c)),kp(r,c,d)),!1}throw Error(i(435,l.tag))}return kp(r,c,d),Dp(),!1}if(Ye)return s=Xn.current,s!==null?(!(s.flags&65536)&&(s.flags|=256),s.flags|=65536,s.lanes=d,c!==Am&&(r=Error(i(422),{cause:c}),iu($n(r,l)))):(c!==Am&&(s=Error(i(423),{cause:c}),iu($n(s,l))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,c=$n(c,l),d=Wm(r.stateNode,c,d),hp(r,d),vt!==4&&(vt=2)),!1;var g=Error(i(520),{cause:c});if(g=$n(g,l),bu===null?bu=[g]:bu.push(g),vt!==4&&(vt=2),s===null)return!0;c=$n(c,l),l=s;do{switch(l.tag){case 3:return l.flags|=65536,r=d&-d,l.lanes|=r,r=Wm(l.stateNode,c,r),hp(l,r),!1;case 1:if(s=l.type,g=l.stateNode,(l.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(ms===null||!ms.has(g))))return l.flags|=65536,d&=-d,l.lanes|=d,d=nE(d),iE(d,r,l,c),hp(l,d),!1}l=l.return}while(l!==null);return!1}var rE=Error(i(461)),Gt=!1;function en(r,s,l,c){s.child=r===null?u0(s,null,l,c):fa(s,r.child,l,c)}function sE(r,s,l,c,d){l=l.render;var g=s.ref;if("ref"in c){var T={};for(var A in c)A!=="ref"&&(T[A]=c[A])}else T=c;return va(s),c=km(r,s,l,T,g,d),A=Mm(),r!==null&&!Gt?(Pm(r,s,d),hr(r,s,d)):(Ye&&A&&bm(s),s.flags|=1,en(r,s,c,d),s.child)}function aE(r,s,l,c,d){if(r===null){var g=l.type;return typeof g=="function"&&!vp(g)&&g.defaultProps===void 0&&l.compare===null?(s.tag=15,s.type=g,oE(r,s,g,c,d)):(r=Bh(l.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!sp(r,d)){var T=g.memoizedProps;if(l=l.compare,l=l!==null?l:Zl,l(T,c)&&r.ref===s.ref)return hr(r,s,d)}return s.flags|=1,r=fs(g,c),r.ref=s.ref,r.return=s,s.child=r}function oE(r,s,l,c,d){if(r!==null){var g=r.memoizedProps;if(Zl(g,c)&&r.ref===s.ref)if(Gt=!1,s.pendingProps=c=g,sp(r,d))r.flags&131072&&(Gt=!0);else return s.lanes=r.lanes,hr(r,s,d)}return Xm(r,s,l,c,d)}function lE(r,s,l){var c=s.pendingProps,d=c.children,g=(s.stateNode._pendingVisibility&2)!==0,T=r!==null?r.memoizedState:null;if(du(r,s),c.mode==="hidden"||g){if(s.flags&128){if(c=T!==null?T.baseLanes|l:l,r!==null){for(d=s.child=r.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return uE(r,s,c,l)}if(l&536870912)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Ah(s,T!==null?T.cachePool:null),T!==null?c0(s,T):Rm(),h0(s);else return s.lanes=s.childLanes=536870912,uE(r,s,T!==null?T.baseLanes|l:l,l)}else T!==null?(Ah(s,T.cachePool),c0(s,T),ns(),s.memoizedState=null):(r!==null&&Ah(s,null),Rm(),ns());return en(r,s,d,l),s.child}function uE(r,s,l,c){var d=Dm();return d=d===null?null:{parent:Vt._currentValue,pool:d},s.memoizedState={baseLanes:l,cachePool:d},r!==null&&Ah(s,null),Rm(),h0(s),r!==null&&mu(r,s,c,!0),null}function du(r,s){var l=s.ref;if(l===null)r!==null&&r.ref!==null&&(s.flags|=2097664);else{if(typeof l!="function"&&typeof l!="object")throw Error(i(284));(r===null||r.ref!==l)&&(s.flags|=2097664)}}function Xm(r,s,l,c,d){return va(s),l=km(r,s,l,c,void 0,d),c=Mm(),r!==null&&!Gt?(Pm(r,s,d),hr(r,s,d)):(Ye&&c&&bm(s),s.flags|=1,en(r,s,l,d),s.child)}function cE(r,s,l,c,d,g){return va(s),s.updateQueue=null,l=g0(s,c,l,d),p0(r),c=Mm(),r!==null&&!Gt?(Pm(r,s,g),hr(r,s,g)):(Ye&&c&&bm(s),s.flags|=1,en(r,s,l,g),s.child)}function hE(r,s,l,c,d){if(va(s),s.stateNode===null){var g=vo,T=l.contextType;typeof T=="object"&&T!==null&&(g=ln(T)),g=new l(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=Ym,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},up(s),T=l.contextType,g.context=typeof T=="object"&&T!==null?ln(T):vo,g.state=s.memoizedState,T=l.getDerivedStateFromProps,typeof T=="function"&&($m(s,l,T,c),g.state=s.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&Ym.enqueueReplaceState(g,g.state,null),_u(s,c,g,d),gu(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){g=s.stateNode;var A=s.memoizedProps,M=_a(l,A);g.props=M;var B=g.context,J=l.contextType;T=vo,typeof J=="object"&&J!==null&&(T=ln(J));var ie=l.getDerivedStateFromProps;J=typeof ie=="function"||typeof g.getSnapshotBeforeUpdate=="function",A=s.pendingProps!==A,J||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A||B!==T)&&X0(s,g,c,T),as=!1;var Q=s.memoizedState;g.state=Q,_u(s,c,g,d),gu(),B=s.memoizedState,A||Q!==B||as?(typeof ie=="function"&&($m(s,l,ie,c),B=s.memoizedState),(M=as||W0(s,l,M,c,Q,B,T))?(J||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=B),g.props=c,g.state=B,g.context=T,c=M):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,cp(r,s),T=s.memoizedProps,J=_a(l,T),g.props=J,ie=s.pendingProps,Q=g.context,B=l.contextType,M=vo,typeof B=="object"&&B!==null&&(M=ln(B)),A=l.getDerivedStateFromProps,(B=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==ie||Q!==M)&&X0(s,g,c,M),as=!1,Q=s.memoizedState,g.state=Q,_u(s,c,g,d),gu();var X=s.memoizedState;T!==ie||Q!==X||as||r!==null&&r.dependencies!==null&&Lh(r.dependencies)?(typeof A=="function"&&($m(s,l,A,c),X=s.memoizedState),(J=as||W0(s,l,J,c,Q,X,M)||r!==null&&r.dependencies!==null&&Lh(r.dependencies))?(B||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,X,M),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,X,M)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=X),g.props=c,g.state=X,g.context=M,c=J):(typeof g.componentDidUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&Q===r.memoizedState||(s.flags|=1024),c=!1)}return g=c,du(r,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,l=c&&typeof l.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,r!==null&&c?(s.child=fa(s,r.child,null,d),s.child=fa(s,null,l,d)):en(r,s,l,d),s.memoizedState=g.state,r=s.child):r=hr(r,s,d),r}function fE(r,s,l,c){return nu(),s.flags|=256,en(r,s,l,c),s.child}var Jm={dehydrated:null,treeContext:null,retryLane:0};function Zm(r){return{baseLanes:r,cachePool:m0()}}function ep(r,s,l){return r=r!==null?r.childLanes&~l:0,s&&(r|=ti),r}function dE(r,s,l){var c=s.pendingProps,d=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=r!==null&&r.memoizedState===null?!1:(Lt.current&2)!==0),T&&(d=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ye){if(d?ts(s):ns(),Ye){var A=Zt,M;if(M=A){e:{for(M=A,A=xi;M.nodeType!==8;){if(!A){A=null;break e}if(M=hi(M.nextSibling),M===null){A=null;break e}}A=M}A!==null?(s.memoizedState={dehydrated:A,treeContext:ua!==null?{id:or,overflow:lr}:null,retryLane:536870912},M=ei(18,null,null,0),M.stateNode=A,M.return=s,s.child=M,yn=s,Zt=null,M=!0):M=!1}M||ha(s)}if(A=s.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?s.lanes=16:s.lanes=536870912,null;ur(s)}return A=c.children,c=c.fallback,d?(ns(),d=s.mode,A=np({mode:"hidden",children:A},d),c=Ta(c,d,l,null),A.return=s,c.return=s,A.sibling=c,s.child=A,d=s.child,d.memoizedState=Zm(l),d.childLanes=ep(r,T,l),s.memoizedState=Jm,c):(ts(s),tp(s,A))}if(M=r.memoizedState,M!==null&&(A=M.dehydrated,A!==null)){if(g)s.flags&256?(ts(s),s.flags&=-257,s=ip(r,s,l)):s.memoizedState!==null?(ns(),s.child=r.child,s.flags|=128,s=null):(ns(),d=c.fallback,A=s.mode,c=np({mode:"visible",children:c.children},A),d=Ta(d,A,l,null),d.flags|=2,c.return=s,d.return=s,c.sibling=d,s.child=c,fa(s,r.child,null,l),c=s.child,c.memoizedState=Zm(l),c.childLanes=ep(r,T,l),s.memoizedState=Jm,s=d);else if(ts(s),A.data==="$!"){if(T=A.nextSibling&&A.nextSibling.dataset,T)var B=T.dgst;T=B,c=Error(i(419)),c.stack="",c.digest=T,iu({value:c,source:null,stack:null}),s=ip(r,s,l)}else if(Gt||mu(r,s,l,!1),T=(l&r.childLanes)!==0,Gt||T){if(T=ot,T!==null){if(c=l&-l,c&42)c=1;else switch(c){case 2:c=1;break;case 8:c=4;break;case 32:c=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:c=64;break;case 268435456:c=134217728;break;default:c=0}if(c=c&(T.suspendedLanes|l)?0:c,c!==0&&c!==M.retryLane)throw M.retryLane=c,es(r,c),vn(T,r,c),rE}A.data==="$?"||Dp(),s=ip(r,s,l)}else A.data==="$?"?(s.flags|=128,s.child=r.child,s=nN.bind(null,r),A._reactRetry=s,s=null):(r=M.treeContext,Zt=hi(A.nextSibling),yn=s,Ye=!0,ui=null,xi=!1,r!==null&&(Yn[Wn++]=or,Yn[Wn++]=lr,Yn[Wn++]=ua,or=r.id,lr=r.overflow,ua=s),s=tp(s,c.children),s.flags|=4096);return s}return d?(ns(),d=c.fallback,A=s.mode,M=r.child,B=M.sibling,c=fs(M,{mode:"hidden",children:c.children}),c.subtreeFlags=M.subtreeFlags&31457280,B!==null?d=fs(B,d):(d=Ta(d,A,l,null),d.flags|=2),d.return=s,c.return=s,c.sibling=d,s.child=c,c=d,d=s.child,A=r.child.memoizedState,A===null?A=Zm(l):(M=A.cachePool,M!==null?(B=Vt._currentValue,M=M.parent!==B?{parent:B,pool:B}:M):M=m0(),A={baseLanes:A.baseLanes|l,cachePool:M}),d.memoizedState=A,d.childLanes=ep(r,T,l),s.memoizedState=Jm,c):(ts(s),l=r.child,r=l.sibling,l=fs(l,{mode:"visible",children:c.children}),l.return=s,l.sibling=null,r!==null&&(T=s.deletions,T===null?(s.deletions=[r],s.flags|=16):T.push(r)),s.child=l,s.memoizedState=null,l)}function tp(r,s){return s=np({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function np(r,s){return jE(r,s,0,null)}function ip(r,s,l){return fa(s,r.child,null,l),r=tp(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function mE(r,s,l){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),op(r.return,s,l)}function rp(r,s,l,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=d)}function pE(r,s,l){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(en(r,s,c.children,l),c=Lt.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&mE(r,l,s);else if(r.tag===19)mE(r,l,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(Ke(Lt,c),d){case"forwards":for(l=s.child,d=null;l!==null;)r=l.alternate,r!==null&&Sh(r)===null&&(d=l),l=l.sibling;l=d,l===null?(d=s.child,s.child=null):(d=l.sibling,l.sibling=null),rp(s,!1,d,l,g);break;case"backwards":for(l=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Sh(r)===null){s.child=d;break}r=d.sibling,d.sibling=l,l=d,d=r}rp(s,!0,l,null,g);break;case"together":rp(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function hr(r,s,l){if(r!==null&&(s.dependencies=r.dependencies),ds|=s.lanes,!(l&s.childLanes))if(r!==null){if(mu(r,s,l,!1),(l&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,l=fs(r,r.pendingProps),s.child=l,l.return=s;r.sibling!==null;)r=r.sibling,l=l.sibling=fs(r,r.pendingProps),l.return=s;l.sibling=null}return s.child}function sp(r,s){return r.lanes&s?!0:(r=r.dependencies,!!(r!==null&&Lh(r)))}function F1(r,s,l){switch(s.tag){case 3:Ur(s,s.stateNode.containerInfo),ss(s,Vt,r.memoizedState.cache),nu();break;case 27:case 5:Ol(s);break;case 4:Ur(s,s.stateNode.containerInfo);break;case 10:ss(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(ts(s),s.flags|=128,null):l&s.child.childLanes?dE(r,s,l):(ts(s),r=hr(r,s,l),r!==null?r.sibling:null);ts(s);break;case 19:var d=(r.flags&128)!==0;if(c=(l&s.childLanes)!==0,c||(mu(r,s,l,!1),c=(l&s.childLanes)!==0),d){if(c)return pE(r,s,l);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ke(Lt,Lt.current),c)break;return null;case 22:case 23:return s.lanes=0,lE(r,s,l);case 24:ss(s,Vt,r.memoizedState.cache)}return hr(r,s,l)}function gE(r,s,l){if(r!==null)if(r.memoizedProps!==s.pendingProps)Gt=!0;else{if(!sp(r,l)&&!(s.flags&128))return Gt=!1,F1(r,s,l);Gt=!!(r.flags&131072)}else Gt=!1,Ye&&s.flags&1048576&&e0(s,vh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,d=c._init;if(c=d(c._payload),s.type=c,typeof c=="function")vp(c)?(r=_a(c,r),s.tag=1,s=hE(null,s,c,r,l)):(s.tag=0,s=Xm(null,s,c,r,l));else{if(c!=null){if(d=c.$$typeof,d===D){s.tag=11,s=sE(null,s,c,r,l);break e}else if(d===z){s.tag=14,s=aE(null,s,c,r,l);break e}}throw s=I(c)||c,Error(i(306,s,""))}}return s;case 0:return Xm(r,s,s.type,s.pendingProps,l);case 1:return c=s.type,d=_a(c,s.pendingProps),hE(r,s,c,d,l);case 3:e:{if(Ur(s,s.stateNode.containerInfo),r===null)throw Error(i(387));var g=s.pendingProps;d=s.memoizedState,c=d.element,cp(r,s),_u(s,g,null,l);var T=s.memoizedState;if(g=T.cache,ss(s,Vt,g),g!==d.cache&&lp(s,[Vt],l,!0),gu(),g=T.element,d.isDehydrated)if(d={element:g,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=d,s.memoizedState=d,s.flags&256){s=fE(r,s,g,l);break e}else if(g!==c){c=$n(Error(i(424)),s),iu(c),s=fE(r,s,g,l);break e}else for(Zt=hi(s.stateNode.containerInfo.firstChild),yn=s,Ye=!0,ui=null,xi=!0,l=u0(s,null,g,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(nu(),g===c){s=hr(r,s,l);break e}en(r,s,g,l)}s=s.child}return s;case 26:return du(r,s),r===null?(l=vT(s.type,null,s.pendingProps,null))?s.memoizedState=l:Ye||(l=s.type,r=s.pendingProps,c=Jh(Bn.current).createElement(l),c[Ft]=s,c[kt]=r,tn(c,l,r),dt(c),s.stateNode=c):s.memoizedState=vT(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Ol(s),r===null&&Ye&&(c=s.stateNode=gT(s.type,s.pendingProps,Bn.current),yn=s,xi=!0,Zt=hi(c.firstChild)),c=s.pendingProps.children,r!==null||Ye?en(r,s,c,l):s.child=fa(s,null,c,l),du(r,s),s.child;case 5:return r===null&&Ye&&((d=c=Zt)&&(c=yN(c,s.type,s.pendingProps,xi),c!==null?(s.stateNode=c,yn=s,Zt=hi(c.firstChild),xi=!1,d=!0):d=!1),d||ha(s)),Ol(s),d=s.type,g=s.pendingProps,T=r!==null?r.memoizedProps:null,c=g.children,Gp(d,g)?c=null:T!==null&&Gp(d,T)&&(s.flags|=32),s.memoizedState!==null&&(d=km(r,s,P1,null,null,l),Ou._currentValue=d),du(r,s),en(r,s,c,l),s.child;case 6:return r===null&&Ye&&((r=l=Zt)&&(l=vN(l,s.pendingProps,xi),l!==null?(s.stateNode=l,yn=s,Zt=null,r=!0):r=!1),r||ha(s)),null;case 13:return dE(r,s,l);case 4:return Ur(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=fa(s,null,c,l):en(r,s,c,l),s.child;case 11:return sE(r,s,s.type,s.pendingProps,l);case 7:return en(r,s,s.pendingProps,l),s.child;case 8:return en(r,s,s.pendingProps.children,l),s.child;case 12:return en(r,s,s.pendingProps.children,l),s.child;case 10:return c=s.pendingProps,ss(s,s.type,c.value),en(r,s,c.children,l),s.child;case 9:return d=s.type._context,c=s.pendingProps.children,va(s),d=ln(d),c=c(d),s.flags|=1,en(r,s,c,l),s.child;case 14:return aE(r,s,s.type,s.pendingProps,l);case 15:return oE(r,s,s.type,s.pendingProps,l);case 19:return pE(r,s,l);case 22:return lE(r,s,l);case 24:return va(s),c=ln(Vt),r===null?(d=Dm(),d===null&&(d=ot,g=Nm(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=l),d=g),s.memoizedState={parent:c,cache:d},up(s),ss(s,Vt,d)):(r.lanes&l&&(cp(r,s),_u(s,null,null,l),gu()),d=r.memoizedState,g=s.memoizedState,d.parent!==c?(d={parent:c,cache:c},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),ss(s,Vt,c)):(c=g.cache,ss(s,Vt,c),c!==d.cache&&lp(s,[Vt],l,!0))),en(r,s,s.pendingProps.children,l),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}var ap=xe(null),ya=null,fr=null;function ss(r,s,l){Ke(ap,s._currentValue),s._currentValue=l}function dr(r){r._currentValue=ap.current,nt(ap)}function op(r,s,l){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===l)break;r=r.return}}function lp(r,s,l,c){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var g=d.dependencies;if(g!==null){var T=d.child;g=g.firstContext;e:for(;g!==null;){var A=g;g=d;for(var M=0;M<s.length;M++)if(A.context===s[M]){g.lanes|=l,A=g.alternate,A!==null&&(A.lanes|=l),op(g.return,l,r),c||(T=null);break e}g=A.next}}else if(d.tag===18){if(T=d.return,T===null)throw Error(i(341));T.lanes|=l,g=T.alternate,g!==null&&(g.lanes|=l),op(T,l,r),T=null}else T=d.child;if(T!==null)T.return=d;else for(T=d;T!==null;){if(T===r){T=null;break}if(d=T.sibling,d!==null){d.return=T.return,T=d;break}T=T.return}d=T}}function mu(r,s,l,c){r=null;for(var d=s,g=!1;d!==null;){if(!g){if(d.flags&524288)g=!0;else if(d.flags&262144)break}if(d.tag===10){var T=d.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var A=d.type;kn(d.pendingProps.value,T.value)||(r!==null?r.push(A):r=[A])}}else if(d===Vr.current){if(T=d.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(Ou):r=[Ou])}d=d.return}r!==null&&lp(s,r,l,c),s.flags|=262144}function Lh(r){for(r=r.firstContext;r!==null;){if(!kn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function va(r){ya=r,fr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function ln(r){return _E(ya,r)}function Vh(r,s){return ya===null&&va(r),_E(r,s)}function _E(r,s){var l=s._currentValue;if(s={context:s,memoizedValue:l,next:null},fr===null){if(r===null)throw Error(i(308));fr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else fr=fr.next=s;return l}var as=!1;function up(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function os(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function ls(r,s,l){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,pt&2){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,s=_h(r),Jv(r,null,l),s}return gh(r,c,s,l),_h(r)}function pu(r,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194176)!==0)){var c=s.lanes;c&=r.pendingLanes,l|=c,s.lanes=l,Hr(r,l)}}function hp(r,s){var l=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var d=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var T={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};g===null?d=g=T:g=g.next=T,l=l.next}while(l!==null);g===null?d=g=s:g=g.next=s}else d=g=s;l={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},r.updateQueue=l;return}r=l.lastBaseUpdate,r===null?l.firstBaseUpdate=s:r.next=s,l.lastBaseUpdate=s}var fp=!1;function gu(){if(fp){var r=Ao;if(r!==null)throw r}}function _u(r,s,l,c){fp=!1;var d=r.updateQueue;as=!1;var g=d.firstBaseUpdate,T=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var M=A,B=M.next;M.next=null,T===null?g=B:T.next=B,T=M;var J=r.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==T&&(A===null?J.firstBaseUpdate=B:A.next=B,J.lastBaseUpdate=M))}if(g!==null){var ie=d.baseState;T=0,J=B=M=null,A=g;do{var Q=A.lane&-536870913,X=Q!==A.lane;if(X?(He&Q)===Q:(c&Q)===Q){Q!==0&&Q===So&&(fp=!0),J!==null&&(J=J.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var ge=r,Ie=A;Q=s;var Et=l;switch(Ie.tag){case 1:if(ge=Ie.payload,typeof ge=="function"){ie=ge.call(Et,ie,Q);break e}ie=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=Ie.payload,Q=typeof ge=="function"?ge.call(Et,ie,Q):ge,Q==null)break e;ie=x({},ie,Q);break e;case 2:as=!0}}Q=A.callback,Q!==null&&(r.flags|=64,X&&(r.flags|=8192),X=d.callbacks,X===null?d.callbacks=[Q]:X.push(Q))}else X={lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(B=J=X,M=ie):J=J.next=X,T|=Q;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;X=A,A=X.next,X.next=null,d.lastBaseUpdate=X,d.shared.pending=null}}while(!0);J===null&&(M=ie),d.baseState=M,d.firstBaseUpdate=B,d.lastBaseUpdate=J,g===null&&(d.shared.lanes=0),ds|=T,r.lanes=T,r.memoizedState=ie}}function yE(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function vE(r,s){var l=r.callbacks;if(l!==null)for(r.callbacks=null,r=0;r<l.length;r++)yE(l[r],s)}function yu(r,s){try{var l=s.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var d=c.next;l=d;do{if((l.tag&r)===r){c=void 0;var g=l.create,T=l.inst;c=g(),T.destroy=c}l=l.next}while(l!==d)}}catch(A){at(s,s.return,A)}}function us(r,s,l){try{var c=s.updateQueue,d=c!==null?c.lastEffect:null;if(d!==null){var g=d.next;c=g;do{if((c.tag&r)===r){var T=c.inst,A=T.destroy;if(A!==void 0){T.destroy=void 0,d=s;var M=l;try{A()}catch(B){at(d,M,B)}}}c=c.next}while(c!==g)}}catch(B){at(s,s.return,B)}}function EE(r){var s=r.updateQueue;if(s!==null){var l=r.stateNode;try{vE(s,l)}catch(c){at(r,r.return,c)}}}function TE(r,s,l){l.props=_a(r.type,r.memoizedProps),l.state=r.memoizedState;try{l.componentWillUnmount()}catch(c){at(r,s,c)}}function Ea(r,s){try{var l=r.ref;if(l!==null){var c=r.stateNode;switch(r.tag){case 26:case 27:case 5:var d=c;break;default:d=c}typeof l=="function"?r.refCleanup=l(d):l.current=d}}catch(g){at(r,s,g)}}function Mn(r,s){var l=r.ref,c=r.refCleanup;if(l!==null)if(typeof c=="function")try{c()}catch(d){at(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(d){at(r,s,d)}else l.current=null}function wE(r){var s=r.type,l=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":l.autoFocus&&c.focus();break e;case"img":l.src?c.src=l.src:l.srcSet&&(c.srcset=l.srcSet)}}catch(d){at(r,r.return,d)}}function bE(r,s,l){try{var c=r.stateNode;dN(c,r.type,l,s),c[kt]=s}catch(d){at(r,r.return,d)}}function SE(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27||r.tag===4}function dp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||SE(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==27&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function mp(r,s,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(r,s):l.insertBefore(r,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(r,l)):(s=l,s.appendChild(r)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Xh));else if(c!==4&&c!==27&&(r=r.child,r!==null))for(mp(r,s,l),r=r.sibling;r!==null;)mp(r,s,l),r=r.sibling}function Uh(r,s,l){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?l.insertBefore(r,s):l.appendChild(r);else if(c!==4&&c!==27&&(r=r.child,r!==null))for(Uh(r,s,l),r=r.sibling;r!==null;)Uh(r,s,l),r=r.sibling}var mr=!1,yt=!1,pp=!1,AE=typeof WeakSet=="function"?WeakSet:Set,Kt=null,CE=!1;function q1(r,s){if(r=r.containerInfo,qp=sf,r=qv(r),_m(r)){if("selectionStart"in r)var l={start:r.selectionStart,end:r.selectionEnd};else e:{l=(l=r.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var T=0,A=-1,M=-1,B=0,J=0,ie=r,Q=null;t:for(;;){for(var X;ie!==l||d!==0&&ie.nodeType!==3||(A=T+d),ie!==g||c!==0&&ie.nodeType!==3||(M=T+c),ie.nodeType===3&&(T+=ie.nodeValue.length),(X=ie.firstChild)!==null;)Q=ie,ie=X;for(;;){if(ie===r)break t;if(Q===l&&++B===d&&(A=T),Q===g&&++J===c&&(M=T),(X=ie.nextSibling)!==null)break;ie=Q,Q=ie.parentNode}ie=X}l=A===-1||M===-1?null:{start:A,end:M}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hp={focusedElem:r,selectionRange:l},sf=!1,Kt=s;Kt!==null;)if(s=Kt,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,Kt=r;else for(;Kt!==null;){switch(s=Kt,g=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if(r&1024&&g!==null){r=void 0,l=s,d=g.memoizedProps,g=g.memoizedState,c=l.stateNode;try{var ge=_a(l.type,d,l.elementType===l.type);r=c.getSnapshotBeforeUpdate(ge,g),c.__reactInternalSnapshotBeforeUpdate=r}catch(Ie){at(l,l.return,Ie)}}break;case 3:if(r&1024){if(r=s.stateNode.containerInfo,l=r.nodeType,l===9)$p(r);else if(l===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":$p(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(r&1024)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Kt=r;break}Kt=s.return}return ge=CE,CE=!1,ge}function RE(r,s,l){var c=l.flags;switch(l.tag){case 0:case 11:case 15:gr(r,l),c&4&&yu(5,l);break;case 1:if(gr(r,l),c&4)if(r=l.stateNode,s===null)try{r.componentDidMount()}catch(A){at(l,l.return,A)}else{var d=_a(l.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(A){at(l,l.return,A)}}c&64&&EE(l),c&512&&Ea(l,l.return);break;case 3:if(gr(r,l),c&64&&(c=l.updateQueue,c!==null)){if(r=null,l.child!==null)switch(l.child.tag){case 27:case 5:r=l.child.stateNode;break;case 1:r=l.child.stateNode}try{vE(c,r)}catch(A){at(l,l.return,A)}}break;case 26:gr(r,l),c&512&&Ea(l,l.return);break;case 27:case 5:gr(r,l),s===null&&c&4&&wE(l),c&512&&Ea(l,l.return);break;case 12:gr(r,l);break;case 13:gr(r,l),c&4&&xE(r,l);break;case 22:if(d=l.memoizedState!==null||mr,!d){s=s!==null&&s.memoizedState!==null||yt;var g=mr,T=yt;mr=d,(yt=s)&&!T?cs(r,l,(l.subtreeFlags&8772)!==0):gr(r,l),mr=g,yt=T}c&512&&(l.memoizedProps.mode==="manual"?Ea(l,l.return):Mn(l,l.return));break;default:gr(r,l)}}function IE(r){var s=r.alternate;s!==null&&(r.alternate=null,IE(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Ws(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var It=null,Pn=!1;function pr(r,s,l){for(l=l.child;l!==null;)NE(r,s,l),l=l.sibling}function NE(r,s,l){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(jr,l)}catch{}switch(l.tag){case 26:yt||Mn(l,s),pr(r,s,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:yt||Mn(l,s);var c=It,d=Pn;for(It=l.stateNode,pr(r,s,l),l=l.stateNode,s=l.attributes;s.length;)l.removeAttributeNode(s[0]);Ws(l),It=c,Pn=d;break;case 5:yt||Mn(l,s);case 6:d=It;var g=Pn;if(It=null,pr(r,s,l),It=d,Pn=g,It!==null)if(Pn)try{r=It,c=l.stateNode,r.nodeType===8?r.parentNode.removeChild(c):r.removeChild(c)}catch(T){at(l,s,T)}else try{It.removeChild(l.stateNode)}catch(T){at(l,s,T)}break;case 18:It!==null&&(Pn?(s=It,l=l.stateNode,s.nodeType===8?Qp(s.parentNode,l):s.nodeType===1&&Qp(s,l),Lu(s)):Qp(It,l.stateNode));break;case 4:c=It,d=Pn,It=l.stateNode.containerInfo,Pn=!0,pr(r,s,l),It=c,Pn=d;break;case 0:case 11:case 14:case 15:yt||us(2,l,s),yt||us(4,l,s),pr(r,s,l);break;case 1:yt||(Mn(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"&&TE(l,s,c)),pr(r,s,l);break;case 21:pr(r,s,l);break;case 22:yt||Mn(l,s),yt=(c=yt)||l.memoizedState!==null,pr(r,s,l),yt=c;break;default:pr(r,s,l)}}function xE(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Lu(r)}catch(l){at(s,s.return,l)}}function H1(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new AE),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new AE),s;default:throw Error(i(435,r.tag))}}function gp(r,s){var l=H1(r);s.forEach(function(c){var d=iN.bind(null,r,c);l.has(c)||(l.add(c),c.then(d,d))})}function Jn(r,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var d=l[c],g=r,T=s,A=T;e:for(;A!==null;){switch(A.tag){case 27:case 5:It=A.stateNode,Pn=!1;break e;case 3:It=A.stateNode.containerInfo,Pn=!0;break e;case 4:It=A.stateNode.containerInfo,Pn=!0;break e}A=A.return}if(It===null)throw Error(i(160));NE(g,T,d),It=null,Pn=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)DE(s,r),s=s.sibling}var ci=null;function DE(r,s){var l=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Jn(s,r),Zn(r),c&4&&(us(3,r,r.return),yu(3,r),us(5,r,r.return));break;case 1:Jn(s,r),Zn(r),c&512&&(yt||l===null||Mn(l,l.return)),c&64&&mr&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(l=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=l===null?c:l.concat(c))));break;case 26:var d=ci;if(Jn(s,r),Zn(r),c&512&&(yt||l===null||Mn(l,l.return)),c&4){var g=l!==null?l.memoizedState:null;if(c=r.memoizedState,l===null)if(c===null)if(r.stateNode===null){e:{c=r.type,l=r.memoizedProps,d=d.ownerDocument||d;t:switch(c){case"title":g=d.getElementsByTagName("title")[0],(!g||g[Kr]||g[Ft]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(c),d.head.insertBefore(g,d.querySelector("head > title"))),tn(g,c,l),g[Ft]=r,dt(g),c=g;break e;case"link":var T=wT("link","href",d).get(c+(l.href||""));if(T){for(var A=0;A<T.length;A++)if(g=T[A],g.getAttribute("href")===(l.href==null?null:l.href)&&g.getAttribute("rel")===(l.rel==null?null:l.rel)&&g.getAttribute("title")===(l.title==null?null:l.title)&&g.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){T.splice(A,1);break t}}g=d.createElement(c),tn(g,c,l),d.head.appendChild(g);break;case"meta":if(T=wT("meta","content",d).get(c+(l.content||""))){for(A=0;A<T.length;A++)if(g=T[A],g.getAttribute("content")===(l.content==null?null:""+l.content)&&g.getAttribute("name")===(l.name==null?null:l.name)&&g.getAttribute("property")===(l.property==null?null:l.property)&&g.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&g.getAttribute("charset")===(l.charSet==null?null:l.charSet)){T.splice(A,1);break t}}g=d.createElement(c),tn(g,c,l),d.head.appendChild(g);break;default:throw Error(i(468,c))}g[Ft]=r,dt(g),c=g}r.stateNode=c}else bT(d,r.type,r.stateNode);else r.stateNode=TT(d,c,r.memoizedProps);else g!==c?(g===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):g.count--,c===null?bT(d,r.type,r.stateNode):TT(d,c,r.memoizedProps)):c===null&&r.stateNode!==null&&bE(r,r.memoizedProps,l.memoizedProps)}break;case 27:if(c&4&&r.alternate===null){d=r.stateNode,g=r.memoizedProps;try{for(var M=d.firstChild;M;){var B=M.nextSibling,J=M.nodeName;M[Kr]||J==="HEAD"||J==="BODY"||J==="SCRIPT"||J==="STYLE"||J==="LINK"&&M.rel.toLowerCase()==="stylesheet"||d.removeChild(M),M=B}for(var ie=r.type,Q=d.attributes;Q.length;)d.removeAttributeNode(Q[0]);tn(d,ie,g),d[Ft]=r,d[kt]=g}catch(ge){at(r,r.return,ge)}}case 5:if(Jn(s,r),Zn(r),c&512&&(yt||l===null||Mn(l,l.return)),r.flags&32){d=r.stateNode;try{qn(d,"")}catch(ge){at(r,r.return,ge)}}c&4&&r.stateNode!=null&&(d=r.memoizedProps,bE(r,d,l!==null?l.memoizedProps:d)),c&1024&&(pp=!0);break;case 6:if(Jn(s,r),Zn(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,l=r.stateNode;try{l.nodeValue=c}catch(ge){at(r,r.return,ge)}}break;case 3:if(tf=null,d=ci,ci=Zh(s.containerInfo),Jn(s,r),ci=d,Zn(r),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Lu(s.containerInfo)}catch(ge){at(r,r.return,ge)}pp&&(pp=!1,OE(r));break;case 4:c=ci,ci=Zh(r.stateNode.containerInfo),Jn(s,r),Zn(r),ci=c;break;case 12:Jn(s,r),Zn(r);break;case 13:Jn(s,r),Zn(r),r.child.flags&8192&&r.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Ap=wn()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,gp(r,c)));break;case 22:if(c&512&&(yt||l===null||Mn(l,l.return)),M=r.memoizedState!==null,B=l!==null&&l.memoizedState!==null,J=mr,ie=yt,mr=J||M,yt=ie||B,Jn(s,r),yt=ie,mr=J,Zn(r),s=r.stateNode,s._current=r,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,c&8192&&(s._visibility=M?s._visibility&-2:s._visibility|1,M&&(s=mr||yt,l===null||B||s||No(r)),r.memoizedProps===null||r.memoizedProps.mode!=="manual"))e:for(l=null,s=r;;){if(s.tag===5||s.tag===26||s.tag===27){if(l===null){B=l=s;try{if(d=B.stateNode,M)g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=B.stateNode,A=B.memoizedProps.style;var X=A!=null&&A.hasOwnProperty("display")?A.display:null;T.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(ge){at(B,B.return,ge)}}}else if(s.tag===6){if(l===null){B=s;try{B.stateNode.nodeValue=M?"":B.memoizedProps}catch(ge){at(B,B.return,ge)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;l===s&&(l=null),s=s.return}l===s&&(l=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(l=c.retryQueue,l!==null&&(c.retryQueue=null,gp(r,l))));break;case 19:Jn(s,r),Zn(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,gp(r,c)));break;case 21:break;default:Jn(s,r),Zn(r)}}function Zn(r){var s=r.flags;if(s&2){try{if(r.tag!==27){e:{for(var l=r.return;l!==null;){if(SE(l)){var c=l;break e}l=l.return}throw Error(i(160))}switch(c.tag){case 27:var d=c.stateNode,g=dp(r);Uh(r,g,d);break;case 5:var T=c.stateNode;c.flags&32&&(qn(T,""),c.flags&=-33);var A=dp(r);Uh(r,A,T);break;case 3:case 4:var M=c.stateNode.containerInfo,B=dp(r);mp(r,B,M);break;default:throw Error(i(161))}}}catch(J){at(r,r.return,J)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function OE(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;OE(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function gr(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)RE(r,s.alternate,s),s=s.sibling}function No(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:us(4,s,s.return),No(s);break;case 1:Mn(s,s.return);var l=s.stateNode;typeof l.componentWillUnmount=="function"&&TE(s,s.return,l),No(s);break;case 26:case 27:case 5:Mn(s,s.return),No(s);break;case 22:Mn(s,s.return),s.memoizedState===null&&No(s);break;default:No(s)}r=r.sibling}}function cs(r,s,l){for(l=l&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,d=r,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:cs(d,g,l),yu(4,g);break;case 1:if(cs(d,g,l),c=g,d=c.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(B){at(c,c.return,B)}if(c=g,d=c.updateQueue,d!==null){var A=c.stateNode;try{var M=d.shared.hiddenCallbacks;if(M!==null)for(d.shared.hiddenCallbacks=null,d=0;d<M.length;d++)yE(M[d],A)}catch(B){at(c,c.return,B)}}l&&T&64&&EE(g),Ea(g,g.return);break;case 26:case 27:case 5:cs(d,g,l),l&&c===null&&T&4&&wE(g),Ea(g,g.return);break;case 12:cs(d,g,l);break;case 13:cs(d,g,l),l&&T&4&&xE(d,g);break;case 22:g.memoizedState===null&&cs(d,g,l),Ea(g,g.return);break;default:cs(d,g,l)}s=s.sibling}}function _p(r,s){var l=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==l&&(r!=null&&r.refCount++,l!=null&&lu(l))}function yp(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&lu(r))}function hs(r,s,l,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)kE(r,s,l,c),s=s.sibling}function kE(r,s,l,c){var d=s.flags;switch(s.tag){case 0:case 11:case 15:hs(r,s,l,c),d&2048&&yu(9,s);break;case 3:hs(r,s,l,c),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&lu(r)));break;case 12:if(d&2048){hs(r,s,l,c),r=s.stateNode;try{var g=s.memoizedProps,T=g.id,A=g.onPostCommit;typeof A=="function"&&A(T,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(M){at(s,s.return,M)}}else hs(r,s,l,c);break;case 23:break;case 22:g=s.stateNode,s.memoizedState!==null?g._visibility&4?hs(r,s,l,c):vu(r,s):g._visibility&4?hs(r,s,l,c):(g._visibility|=4,xo(r,s,l,c,(s.subtreeFlags&10256)!==0)),d&2048&&_p(s.alternate,s);break;case 24:hs(r,s,l,c),d&2048&&yp(s.alternate,s);break;default:hs(r,s,l,c)}}function xo(r,s,l,c,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=r,T=s,A=l,M=c,B=T.flags;switch(T.tag){case 0:case 11:case 15:xo(g,T,A,M,d),yu(8,T);break;case 23:break;case 22:var J=T.stateNode;T.memoizedState!==null?J._visibility&4?xo(g,T,A,M,d):vu(g,T):(J._visibility|=4,xo(g,T,A,M,d)),d&&B&2048&&_p(T.alternate,T);break;case 24:xo(g,T,A,M,d),d&&B&2048&&yp(T.alternate,T);break;default:xo(g,T,A,M,d)}s=s.sibling}}function vu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var l=r,c=s,d=c.flags;switch(c.tag){case 22:vu(l,c),d&2048&&_p(c.alternate,c);break;case 24:vu(l,c),d&2048&&yp(c.alternate,c);break;default:vu(l,c)}s=s.sibling}}var Eu=8192;function Do(r){if(r.subtreeFlags&Eu)for(r=r.child;r!==null;)ME(r),r=r.sibling}function ME(r){switch(r.tag){case 26:Do(r),r.flags&Eu&&r.memoizedState!==null&&ON(ci,r.memoizedState,r.memoizedProps);break;case 5:Do(r);break;case 3:case 4:var s=ci;ci=Zh(r.stateNode.containerInfo),Do(r),ci=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=Eu,Eu=16777216,Do(r),Eu=s):Do(r));break;default:Do(r)}}function PE(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Tu(r){var s=r.deletions;if(r.flags&16){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];Kt=c,VE(c,r)}PE(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)LE(r),r=r.sibling}function LE(r){switch(r.tag){case 0:case 11:case 15:Tu(r),r.flags&2048&&us(9,r,r.return);break;case 3:Tu(r);break;case 12:Tu(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&4&&(r.return===null||r.return.tag!==13)?(s._visibility&=-5,jh(r)):Tu(r);break;default:Tu(r)}}function jh(r){var s=r.deletions;if(r.flags&16){if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];Kt=c,VE(c,r)}PE(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:us(8,s,s.return),jh(s);break;case 22:l=s.stateNode,l._visibility&4&&(l._visibility&=-5,jh(s));break;default:jh(s)}r=r.sibling}}function VE(r,s){for(;Kt!==null;){var l=Kt;switch(l.tag){case 0:case 11:case 15:us(8,l,s);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var c=l.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:lu(l.memoizedState.cache)}if(c=l.child,c!==null)c.return=l,Kt=c;else e:for(l=r;Kt!==null;){c=Kt;var d=c.sibling,g=c.return;if(IE(c),c===l){Kt=null;break e}if(d!==null){d.return=g,Kt=d;break e}Kt=g}}}function G1(r,s,l,c){this.tag=r,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(r,s,l,c){return new G1(r,s,l,c)}function vp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function fs(r,s){var l=r.alternate;return l===null?(l=ei(r.tag,s,r.key,r.mode),l.elementType=r.elementType,l.type=r.type,l.stateNode=r.stateNode,l.alternate=r,r.alternate=l):(l.pendingProps=s,l.type=r.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=r.flags&31457280,l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,s=r.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=r.sibling,l.index=r.index,l.ref=r.ref,l.refCleanup=r.refCleanup,l}function UE(r,s){r.flags&=31457282;var l=r.alternate;return l===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=l.childLanes,r.lanes=l.lanes,r.child=l.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=l.memoizedProps,r.memoizedState=l.memoizedState,r.updateQueue=l.updateQueue,r.type=l.type,s=l.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Bh(r,s,l,c,d,g){var T=0;if(c=r,typeof r=="function")vp(r)&&(T=1);else if(typeof r=="string")T=xN(r,l,mn.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case m:return Ta(l.children,d,g,s);case p:T=8,d|=24;break;case y:return r=ei(12,l,s,d|2),r.elementType=y,r.lanes=g,r;case U:return r=ei(13,l,s,d),r.elementType=U,r.lanes=g,r;case P:return r=ei(19,l,s,d),r.elementType=P,r.lanes=g,r;case G:return jE(l,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case E:case S:T=10;break e;case w:T=9;break e;case D:T=11;break e;case z:T=14;break e;case H:T=16,c=null;break e}T=29,l=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=ei(T,l,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function Ta(r,s,l,c){return r=ei(7,r,c,s),r.lanes=l,r}function jE(r,s,l,c){r=ei(22,r,c,s),r.elementType=G,r.lanes=l;var d={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var g=d._current;if(g===null)throw Error(i(456));if(!(d._pendingVisibility&2)){var T=es(g,2);T!==null&&(d._pendingVisibility|=2,vn(T,g,2))}},attach:function(){var g=d._current;if(g===null)throw Error(i(456));if(d._pendingVisibility&2){var T=es(g,2);T!==null&&(d._pendingVisibility&=-3,vn(T,g,2))}}};return r.stateNode=d,r}function Ep(r,s,l){return r=ei(6,r,null,s),r.lanes=l,r}function Tp(r,s,l){return s=ei(4,r.children!==null?r.children:[],r.key,s),s.lanes=l,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function _r(r){r.flags|=4}function BE(r,s){if(s.type!=="stylesheet"||s.state.loading&4)r.flags&=-16777217;else if(r.flags|=16777216,!ST(s)){if(s=Xn.current,s!==null&&((He&4194176)===He?Di!==null:(He&62914560)!==He&&!(He&536870912)||s!==Di))throw su=Cm,i0;r.flags|=8192}}function zh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Fr():536870912,r.lanes|=s,ko|=s)}function wu(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r.tail=null:l.sibling=null;break;case"collapsed":l=r.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function mt(r){var s=r.alternate!==null&&r.alternate.child===r.child,l=0,c=0;if(s)for(var d=r.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags&31457280,c|=d.flags&31457280,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)l|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=l,s}function K1(r,s,l){var c=s.pendingProps;switch(Sm(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(s),null;case 1:return mt(s),null;case 3:return l=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),dr(Vt),Wi(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(r===null||r.child===null)&&(tu(s)?_r(s):r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,ui!==null&&(Np(ui),ui=null))),mt(s),null;case 26:return l=s.memoizedState,r===null?(_r(s),l!==null?(mt(s),BE(s,l)):(mt(s),s.flags&=-16777217)):l?l!==r.memoizedState?(_r(s),mt(s),BE(s,l)):(mt(s),s.flags&=-16777217):(r.memoizedProps!==c&&_r(s),mt(s),s.flags&=-16777217),null;case 27:Xa(s),l=Bn.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&_r(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return mt(s),null}r=mn.current,tu(s)?t0(s):(r=gT(d,c,l),s.stateNode=r,_r(s))}return mt(s),null;case 5:if(Xa(s),l=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&_r(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return mt(s),null}if(r=mn.current,tu(s))t0(s);else{switch(d=Jh(Bn.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?d.createElement("select",{is:c.is}):d.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?d.createElement(l,{is:c.is}):d.createElement(l)}}r[Ft]=s,r[kt]=c;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(tn(r,l,c),l){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&_r(s)}}return mt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&_r(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=Bn.current,tu(s)){if(r=s.stateNode,l=s.memoizedProps,c=null,d=yn,d!==null)switch(d.tag){case 27:case 5:c=d.memoizedProps}r[Ft]=s,r=!!(r.nodeValue===l||c!==null&&c.suppressHydrationWarning===!0||cT(r.nodeValue,l)),r||ha(s)}else r=Jh(r).createTextNode(c),r[Ft]=s,s.stateNode=r}return mt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=tu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Ft]=s}else nu(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;mt(s),d=!1}else ui!==null&&(Np(ui),ui=null),d=!0;if(!d)return s.flags&256?(ur(s),s):(ur(s),null)}if(ur(s),s.flags&128)return s.lanes=l,s;if(l=c!==null,r=r!==null&&r.memoizedState!==null,l){c=s.child,d=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(d=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==d&&(c.flags|=2048)}return l!==r&&l&&(s.child.flags|=8192),zh(s,s.updateQueue),mt(s),null;case 4:return Wi(),r===null&&Bp(s.stateNode.containerInfo),mt(s),null;case 10:return dr(s.type),mt(s),null;case 19:if(nt(Lt),d=s.memoizedState,d===null)return mt(s),null;if(c=(s.flags&128)!==0,g=d.rendering,g===null)if(c)wu(d,!1);else{if(vt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(g=Sh(r),g!==null){for(s.flags|=128,wu(d,!1),r=g.updateQueue,s.updateQueue=r,zh(s,r),s.subtreeFlags=0,r=l,l=s.child;l!==null;)UE(l,r),l=l.sibling;return Ke(Lt,Lt.current&1|2),s.child}r=r.sibling}d.tail!==null&&wn()>Fh&&(s.flags|=128,c=!0,wu(d,!1),s.lanes=4194304)}else{if(!c)if(r=Sh(g),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,zh(s,r),wu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Ye)return mt(s),null}else 2*wn()-d.renderingStartTime>Fh&&l!==536870912&&(s.flags|=128,c=!0,wu(d,!1),s.lanes=4194304);d.isBackwards?(g.sibling=s.child,s.child=g):(r=d.last,r!==null?r.sibling=g:s.child=g,d.last=g)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=wn(),s.sibling=null,r=Lt.current,Ke(Lt,c?r&1|2:r&1),s):(mt(s),null);case 22:case 23:return ur(s),Im(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?l&536870912&&!(s.flags&128)&&(mt(s),s.subtreeFlags&6&&(s.flags|=8192)):mt(s),l=s.updateQueue,l!==null&&zh(s,l.retryQueue),l=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==l&&(s.flags|=2048),r!==null&&nt(da),null;case 24:return l=null,r!==null&&(l=r.memoizedState.cache),s.memoizedState.cache!==l&&(s.flags|=2048),dr(Vt),mt(s),null;case 25:return null}throw Error(i(156,s.tag))}function Q1(r,s){switch(Sm(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return dr(Vt),Wi(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return Xa(s),null;case 13:if(ur(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));nu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return nt(Lt),null;case 4:return Wi(),null;case 10:return dr(s.type),null;case 22:case 23:return ur(s),Im(),r!==null&&nt(da),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return dr(Vt),null;case 25:return null;default:return null}}function zE(r,s){switch(Sm(s),s.tag){case 3:dr(Vt),Wi();break;case 26:case 27:case 5:Xa(s);break;case 4:Wi();break;case 13:ur(s);break;case 19:nt(Lt);break;case 10:dr(s.type);break;case 22:case 23:ur(s),Im(),r!==null&&nt(da);break;case 24:dr(Vt)}}var $1={getCacheForType:function(r){var s=ln(Vt),l=s.data.get(r);return l===void 0&&(l=r(),s.data.set(r,l)),l}},Y1=typeof WeakMap=="function"?WeakMap:Map,pt=0,ot=null,Pe=null,He=0,lt=0,Ln=null,yr=!1,Oo=!1,wp=!1,vr=0,vt=0,ds=0,wa=0,bp=0,ti=0,ko=0,bu=null,ki=null,Sp=!1,Ap=0,Fh=1/0,qh=null,ms=null,Hh=!1,ba=null,Su=0,Cp=0,Rp=null,Au=0,Ip=null;function Vn(){if(pt&2&&He!==0)return He&-He;if(b.T!==null){var r=So;return r!==0?r:Lp()}return Wc()}function FE(){ti===0&&(ti=!(He&536870912)||Ye?Vl():536870912);var r=Xn.current;return r!==null&&(r.flags|=32),ti}function vn(r,s,l){(r===ot&&lt===2||r.cancelPendingCommit!==null)&&(Mo(r,0),Er(r,He,ti,!1)),bt(r,l),(!(pt&2)||r!==ot)&&(r===ot&&(!(pt&2)&&(wa|=l),vt===4&&Er(r,He,ti,!1)),Mi(r))}function qE(r,s,l){if(pt&6)throw Error(i(327));var c=!l&&(s&60)===0&&(s&r.expiredLanes)===0||zr(r,s),d=c?J1(r,s):Op(r,s,!0),g=c;do{if(d===0){Oo&&!c&&Er(r,s,0,!1);break}else if(d===6)Er(r,s,0,!yr);else{if(l=r.current.alternate,g&&!W1(l)){d=Op(r,s,!1),g=!1;continue}if(d===2){if(g=s,r.errorRecoveryDisabledLanes&g)var T=0;else T=r.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var A=r;d=bu;var M=A.current.memoizedState.isDehydrated;if(M&&(Mo(A,T).flags|=256),T=Op(A,T,!1),T!==2){if(wp&&!M){A.errorRecoveryDisabledLanes|=g,wa|=g,d=4;break e}g=ki,ki=d,g!==null&&Np(g)}d=T}if(g=!1,d!==2)continue}}if(d===1){Mo(r,0),Er(r,s,0,!0);break}e:{switch(c=r,d){case 0:case 1:throw Error(i(345));case 4:if((s&4194176)===s){Er(c,s,ti,!yr);break e}break;case 2:ki=null;break;case 3:case 5:break;default:throw Error(i(329))}if(c.finishedWork=l,c.finishedLanes=s,(s&62914560)===s&&(g=Ap+300-wn(),10<g)){if(Er(c,s,ti,!yr),zn(c,0)!==0)break e;c.timeoutHandle=dT(HE.bind(null,c,l,ki,qh,Sp,s,ti,wa,ko,yr,2,-0,0),g);break e}HE(c,l,ki,qh,Sp,s,ti,wa,ko,yr,0,-0,0)}}break}while(!0);Mi(r)}function Np(r){ki===null?ki=r:ki.push.apply(ki,r)}function HE(r,s,l,c,d,g,T,A,M,B,J,ie,Q){var X=s.subtreeFlags;if((X&8192||(X&16785408)===16785408)&&(Du={stylesheets:null,count:0,unsuspend:DN},ME(s),s=kN(),s!==null)){r.cancelPendingCommit=s(XE.bind(null,r,l,c,d,T,A,M,1,ie,Q)),Er(r,g,T,!B);return}XE(r,l,c,d,T,A,M,J,ie,Q)}function W1(r){for(var s=r;;){var l=s.tag;if((l===0||l===11||l===15)&&s.flags&16384&&(l=s.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var c=0;c<l.length;c++){var d=l[c],g=d.getSnapshot;d=d.value;try{if(!kn(g(),d))return!1}catch{return!1}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Er(r,s,l,c){s&=~bp,s&=~wa,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var d=s;0<d;){var g=31-pn(d),T=1<<g;c[g]=-1,d&=~T}l!==0&&qr(r,l,s)}function Gh(){return pt&6?!0:(Cu(0),!1)}function xp(){if(Pe!==null){if(lt===0)var r=Pe.return;else r=Pe,fr=ya=null,Lm(r),wo=null,au=0,r=Pe;for(;r!==null;)zE(r.alternate,r),r=r.return;Pe=null}}function Mo(r,s){r.finishedWork=null,r.finishedLanes=0;var l=r.timeoutHandle;l!==-1&&(r.timeoutHandle=-1,pN(l)),l=r.cancelPendingCommit,l!==null&&(r.cancelPendingCommit=null,l()),xp(),ot=r,Pe=l=fs(r.current,null),He=s,lt=0,Ln=null,yr=!1,Oo=zr(r,s),wp=!1,ko=ti=bp=wa=ds=vt=0,ki=bu=null,Sp=!1,s&8&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var d=31-pn(c),g=1<<d;s|=r[d],c&=~g}return vr=s,ph(),l}function GE(r,s){Oe=null,b.H=Oi,s===ru?(s=a0(),lt=3):s===i0?(s=a0(),lt=4):lt=s===rE?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Ln=s,Pe===null&&(vt=1,Ph(r,$n(s,r.current)))}function KE(){var r=b.H;return b.H=Oi,r===null?Oi:r}function QE(){var r=b.A;return b.A=$1,r}function Dp(){vt=4,yr||(He&4194176)!==He&&Xn.current!==null||(Oo=!0),!(ds&134217727)&&!(wa&134217727)||ot===null||Er(ot,He,ti,!1)}function Op(r,s,l){var c=pt;pt|=2;var d=KE(),g=QE();(ot!==r||He!==s)&&(qh=null,Mo(r,s)),s=!1;var T=vt;e:do try{if(lt!==0&&Pe!==null){var A=Pe,M=Ln;switch(lt){case 8:xp(),T=6;break e;case 3:case 2:case 6:Xn.current===null&&(s=!0);var B=lt;if(lt=0,Ln=null,Po(r,A,M,B),l&&Oo){T=0;break e}break;default:B=lt,lt=0,Ln=null,Po(r,A,M,B)}}X1(),T=vt;break}catch(J){GE(r,J)}while(!0);return s&&r.shellSuspendCounter++,fr=ya=null,pt=c,b.H=d,b.A=g,Pe===null&&(ot=null,He=0,ph()),T}function X1(){for(;Pe!==null;)$E(Pe)}function J1(r,s){var l=pt;pt|=2;var c=KE(),d=QE();ot!==r||He!==s?(qh=null,Fh=wn()+500,Mo(r,s)):Oo=zr(r,s);e:do try{if(lt!==0&&Pe!==null){s=Pe;var g=Ln;t:switch(lt){case 1:lt=0,Ln=null,Po(r,s,g,1);break;case 2:if(r0(g)){lt=0,Ln=null,YE(s);break}s=function(){lt===2&&ot===r&&(lt=7),Mi(r)},g.then(s,s);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:r0(g)?(lt=0,Ln=null,YE(s)):(lt=0,Ln=null,Po(r,s,g,7));break;case 5:var T=null;switch(Pe.tag){case 26:T=Pe.memoizedState;case 5:case 27:var A=Pe;if(!T||ST(T)){lt=0,Ln=null;var M=A.sibling;if(M!==null)Pe=M;else{var B=A.return;B!==null?(Pe=B,Kh(B)):Pe=null}break t}}lt=0,Ln=null,Po(r,s,g,5);break;case 6:lt=0,Ln=null,Po(r,s,g,6);break;case 8:xp(),vt=6;break e;default:throw Error(i(462))}}Z1();break}catch(J){GE(r,J)}while(!0);return fr=ya=null,b.H=c,b.A=d,pt=l,Pe!==null?0:(ot=null,He=0,ph(),vt)}function Z1(){for(;Pe!==null&&!am();)$E(Pe)}function $E(r){var s=gE(r.alternate,r,vr);r.memoizedProps=r.pendingProps,s===null?Kh(r):Pe=s}function YE(r){var s=r,l=s.alternate;switch(s.tag){case 15:case 0:s=cE(l,s,s.pendingProps,s.type,void 0,He);break;case 11:s=cE(l,s,s.pendingProps,s.type.render,s.ref,He);break;case 5:Lm(s);default:zE(l,s),s=Pe=UE(s,vr),s=gE(l,s,vr)}r.memoizedProps=r.pendingProps,s===null?Kh(r):Pe=s}function Po(r,s,l,c){fr=ya=null,Lm(s),wo=null,au=0;var d=s.return;try{if(z1(r,d,s,l,He)){vt=1,Ph(r,$n(l,r.current)),Pe=null;return}}catch(g){if(d!==null)throw Pe=d,g;vt=1,Ph(r,$n(l,r.current)),Pe=null;return}s.flags&32768?(Ye||c===1?r=!0:Oo||He&536870912?r=!1:(yr=r=!0,(c===2||c===3||c===6)&&(c=Xn.current,c!==null&&c.tag===13&&(c.flags|=16384))),WE(s,r)):Kh(s)}function Kh(r){var s=r;do{if(s.flags&32768){WE(s,yr);return}r=s.return;var l=K1(s.alternate,s,vr);if(l!==null){Pe=l;return}if(s=s.sibling,s!==null){Pe=s;return}Pe=s=r}while(s!==null);vt===0&&(vt=5)}function WE(r,s){do{var l=Q1(r.alternate,r);if(l!==null){l.flags&=32767,Pe=l;return}if(l=r.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!s&&(r=r.sibling,r!==null)){Pe=r;return}Pe=r=l}while(r!==null);vt=6,Pe=null}function XE(r,s,l,c,d,g,T,A,M,B){var J=b.T,ie=ce.p;try{ce.p=2,b.T=null,eN(r,s,l,c,ie,d,g,T,A,M,B)}finally{b.T=J,ce.p=ie}}function eN(r,s,l,c,d,g,T,A){do Lo();while(ba!==null);if(pt&6)throw Error(i(327));var M=r.finishedWork;if(c=r.finishedLanes,M===null)return null;if(r.finishedWork=null,r.finishedLanes=0,M===r.current)throw Error(i(177));r.callbackNode=null,r.callbackPriority=0,r.cancelPendingCommit=null;var B=M.lanes|M.childLanes;if(B|=Tm,$c(r,c,B,g,T,A),r===ot&&(Pe=ot=null,He=0),!(M.subtreeFlags&10256)&&!(M.flags&10256)||Hh||(Hh=!0,Cp=B,Rp=l,rN(Xi,function(){return Lo(),null})),l=(M.flags&15990)!==0,M.subtreeFlags&15990||l?(l=b.T,b.T=null,g=ce.p,ce.p=2,T=pt,pt|=4,q1(r,M),DE(M,r),S1(Hp,r.containerInfo),sf=!!qp,Hp=qp=null,r.current=M,RE(r,M.alternate,M),kl(),pt=T,ce.p=g,b.T=l):r.current=M,Hh?(Hh=!1,ba=r,Su=c):JE(r,B),B=r.pendingLanes,B===0&&(ms=null),Pl(M.stateNode),Mi(r),s!==null)for(d=r.onRecoverableError,M=0;M<s.length;M++)B=s[M],d(B.value,{componentStack:B.stack});return Su&3&&Lo(),B=r.pendingLanes,c&4194218&&B&42?r===Ip?Au++:(Au=0,Ip=r):Au=0,Cu(0),null}function JE(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,lu(s)))}function Lo(){if(ba!==null){var r=ba,s=Cp;Cp=0;var l=Yc(Su),c=b.T,d=ce.p;try{if(ce.p=32>l?32:l,b.T=null,ba===null)var g=!1;else{l=Rp,Rp=null;var T=ba,A=Su;if(ba=null,Su=0,pt&6)throw Error(i(331));var M=pt;if(pt|=4,LE(T.current),kE(T,T.current,A,l),pt=M,Cu(0,!1),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(jr,T)}catch{}g=!0}return g}finally{ce.p=d,b.T=c,JE(r,s)}}return!1}function ZE(r,s,l){s=$n(l,s),s=Wm(r.stateNode,s,2),r=ls(r,s,2),r!==null&&(bt(r,2),Mi(r))}function at(r,s,l){if(r.tag===3)ZE(r,r,l);else for(;s!==null;){if(s.tag===3){ZE(s,r,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ms===null||!ms.has(c))){r=$n(l,r),l=nE(2),c=ls(s,l,2),c!==null&&(iE(l,c,s,r),bt(c,2),Mi(c));break}}s=s.return}}function kp(r,s,l){var c=r.pingCache;if(c===null){c=r.pingCache=new Y1;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(l)||(wp=!0,d.add(l),r=tN.bind(null,r,s,l),s.then(r,r))}function tN(r,s,l){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&l,r.warmLanes&=~l,ot===r&&(He&l)===l&&(vt===4||vt===3&&(He&62914560)===He&&300>wn()-Ap?!(pt&2)&&Mo(r,0):bp|=l,ko===He&&(ko=0)),Mi(r)}function eT(r,s){s===0&&(s=Fr()),r=es(r,s),r!==null&&(bt(r,s),Mi(r))}function nN(r){var s=r.memoizedState,l=0;s!==null&&(l=s.retryLane),eT(r,l)}function iN(r,s){var l=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(l=d.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),eT(r,l)}function rN(r,s){return Qs(r,s)}var Qh=null,Vo=null,Mp=!1,$h=!1,Pp=!1,Sa=0;function Mi(r){r!==Vo&&r.next===null&&(Vo===null?Qh=Vo=r:Vo=Vo.next=r),$h=!0,Mp||(Mp=!0,aN(sN))}function Cu(r,s){if(!Pp&&$h){Pp=!0;do for(var l=!1,c=Qh;c!==null;){if(r!==0){var d=c.pendingLanes;if(d===0)var g=0;else{var T=c.suspendedLanes,A=c.pingedLanes;g=(1<<31-pn(42|r)+1)-1,g&=d&~(T&~A),g=g&201326677?g&201326677|1:g?g|2:0}g!==0&&(l=!0,iT(c,g))}else g=He,g=zn(c,c===ot?g:0),!(g&3)||zr(c,g)||(l=!0,iT(c,g));c=c.next}while(l);Pp=!1}}function sN(){$h=Mp=!1;var r=0;Sa!==0&&(mN()&&(r=Sa),Sa=0);for(var s=wn(),l=null,c=Qh;c!==null;){var d=c.next,g=tT(c,s);g===0?(c.next=null,l===null?Qh=d:l.next=d,d===null&&(Vo=l)):(l=c,(r!==0||g&3)&&($h=!0)),c=d}Cu(r)}function tT(r,s){for(var l=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes&-62914561;0<g;){var T=31-pn(g),A=1<<T,M=d[T];M===-1?(!(A&l)||A&c)&&(d[T]=eo(A,s)):M<=s&&(r.expiredLanes|=A),g&=~A}if(s=ot,l=He,l=zn(r,r===s?l:0),c=r.callbackNode,l===0||r===s&&lt===2||r.cancelPendingCommit!==null)return c!==null&&c!==null&&Za(c),r.callbackNode=null,r.callbackPriority=0;if(!(l&3)||zr(r,l)){if(s=l&-l,s===r.callbackPriority)return s;switch(c!==null&&Za(c),Yc(l)){case 2:case 8:l=zt;break;case 32:l=Xi;break;case 268435456:l=Ml;break;default:l=Xi}return c=nT.bind(null,r),l=Qs(l,c),r.callbackPriority=s,r.callbackNode=l,s}return c!==null&&c!==null&&Za(c),r.callbackPriority=2,r.callbackNode=null,2}function nT(r,s){var l=r.callbackNode;if(Lo()&&r.callbackNode!==l)return null;var c=He;return c=zn(r,r===ot?c:0),c===0?null:(qE(r,c,s),tT(r,wn()),r.callbackNode!=null&&r.callbackNode===l?nT.bind(null,r):null)}function iT(r,s){if(Lo())return null;qE(r,s,!0)}function aN(r){gN(function(){pt&6?Qs(Ot,r):r()})}function Lp(){return Sa===0&&(Sa=Vl()),Sa}function rT(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:bi(""+r)}function sT(r,s){var l=s.ownerDocument.createElement("input");return l.name=s.name,l.value=s.value,r.id&&l.setAttribute("form",r.id),s.parentNode.insertBefore(l,s),r=new FormData(r),l.parentNode.removeChild(l),r}function oN(r,s,l,c,d){if(s==="submit"&&l&&l.stateNode===d){var g=rT((d[kt]||null).action),T=c.submitter;T&&(s=(s=T[kt]||null)?rT(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var A=new oo("action","action",null,c,d);r.push({event:A,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Sa!==0){var M=T?sT(d,T):new FormData(d);Gm(l,{pending:!0,data:M,method:d.method,action:g},null,M)}}else typeof g=="function"&&(A.preventDefault(),M=T?sT(d,T):new FormData(d),Gm(l,{pending:!0,data:M,method:d.method,action:g},g,M))},currentTarget:d}]})}}for(var Vp=0;Vp<Xv.length;Vp++){var Up=Xv[Vp],lN=Up.toLowerCase(),uN=Up[0].toUpperCase()+Up.slice(1);li(lN,"on"+uN)}li(Kv,"onAnimationEnd"),li(Qv,"onAnimationIteration"),li($v,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(C1,"onTransitionRun"),li(R1,"onTransitionStart"),li(I1,"onTransitionCancel"),li(Yv,"onTransitionEnd"),bn("onMouseEnter",["mouseout","mouseover"]),bn("onMouseLeave",["mouseout","mouseover"]),bn("onPointerEnter",["pointerout","pointerover"]),bn("onPointerLeave",["pointerout","pointerover"]),Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ru));function aT(r,s){s=(s&4)!==0;for(var l=0;l<r.length;l++){var c=r[l],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var A=c[T],M=A.instance,B=A.currentTarget;if(A=A.listener,M!==g&&d.isPropagationStopped())break e;g=A,d.currentTarget=B;try{g(d)}catch(J){Mh(J)}d.currentTarget=null,g=M}else for(T=0;T<c.length;T++){if(A=c[T],M=A.instance,B=A.currentTarget,A=A.listener,M!==g&&d.isPropagationStopped())break e;g=A,d.currentTarget=B;try{g(d)}catch(J){Mh(J)}d.currentTarget=null,g=M}}}}function Be(r,s){var l=s[Ys];l===void 0&&(l=s[Ys]=new Set);var c=r+"__bubble";l.has(c)||(oT(s,r,2,!1),l.add(c))}function jp(r,s,l){var c=0;s&&(c|=4),oT(l,r,c,s)}var Yh="_reactListening"+Math.random().toString(36).slice(2);function Bp(r){if(!r[Yh]){r[Yh]=!0,jl.forEach(function(l){l!=="selectionchange"&&(cN.has(l)||jp(l,!1,r),jp(l,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Yh]||(s[Yh]=!0,jp("selectionchange",!1,s))}}function oT(r,s,l,c){switch(xT(s)){case 2:var d=LN;break;case 8:d=VN;break;default:d=Zp}l=d.bind(null,s,l,r),d=void 0,!Gn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,l,{capture:!0,passive:d}):r.addEventListener(s,l,!0):d!==void 0?r.addEventListener(s,l,{passive:d}):r.addEventListener(s,l,!1)}function zp(r,s,l,c,d){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var A=c.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var M=T.tag;if((M===3||M===4)&&(M=T.stateNode.containerInfo,M===d||M.nodeType===8&&M.parentNode===d))return;T=T.return}for(;A!==null;){if(T=oi(A),T===null)return;if(M=T.tag,M===5||M===6||M===26||M===27){c=g=T;continue e}A=A.parentNode}}c=c.return}eh(function(){var B=g,J=ao(l),ie=[];e:{var Q=Wv.get(r);if(Q!==void 0){var X=oo,ge=r;switch(r){case"keypress":if(Ai(l)===0)break e;case"keydown":case"keyup":X=mo;break;case"focusin":ge="focus",X=co;break;case"focusout":ge="blur",X=co;break;case"beforeblur":case"afterblur":X=co;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=lh;break;case Kv:case Qv:case $v:X=ho;break;case Yv:X=ch;break;case"scroll":case"scrollend":X=th;break;case"wheel":X=po;break;case"copy":case"cut":case"paste":X=fo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Xl;break;case"toggle":case"beforetoggle":X=fh}var Ie=(s&4)!==0,Et=!Ie&&(r==="scroll"||r==="scrollend"),F=Ie?Q!==null?Q+"Capture":null:Q;Ie=[];for(var j=B,K;j!==null;){var Z=j;if(K=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||K===null||F===null||(Z=ea(j,F),Z!=null&&Ie.push(Iu(j,Z,K))),Et)break;j=j.return}0<Ie.length&&(Q=new X(Q,ge,null,l,J),ie.push({event:Q,listeners:Ie}))}}if(!(s&7)){e:{if(Q=r==="mouseover"||r==="pointerover",X=r==="mouseout"||r==="pointerout",Q&&l!==Hn&&(ge=l.relatedTarget||l.fromElement)&&(oi(ge)||ge[Ji]))break e;if((X||Q)&&(Q=J.window===J?J:(Q=J.ownerDocument)?Q.defaultView||Q.parentWindow:window,X?(ge=l.relatedTarget||l.toElement,X=B,ge=ge?oi(ge):null,ge!==null&&(Et=_e(ge),Ie=ge.tag,ge!==Et||Ie!==5&&Ie!==27&&Ie!==6)&&(ge=null)):(X=null,ge=B),X!==ge)){if(Ie=Kn,Z="onMouseLeave",F="onMouseEnter",j="mouse",(r==="pointerout"||r==="pointerover")&&(Ie=Xl,Z="onPointerLeave",F="onPointerEnter",j="pointer"),Et=X==null?Q:Qr(X),K=ge==null?Q:Qr(ge),Q=new Ie(Z,j+"leave",X,l,J),Q.target=Et,Q.relatedTarget=K,Z=null,oi(J)===B&&(Ie=new Ie(F,j+"enter",ge,l,J),Ie.target=K,Ie.relatedTarget=Et,Z=Ie),Et=Z,X&&ge)t:{for(Ie=X,F=ge,j=0,K=Ie;K;K=Uo(K))j++;for(K=0,Z=F;Z;Z=Uo(Z))K++;for(;0<j-K;)Ie=Uo(Ie),j--;for(;0<K-j;)F=Uo(F),K--;for(;j--;){if(Ie===F||F!==null&&Ie===F.alternate)break t;Ie=Uo(Ie),F=Uo(F)}Ie=null}else Ie=null;X!==null&&lT(ie,Q,X,Ie,!1),ge!==null&&Et!==null&&lT(ie,Et,ge,Ie,!0)}}e:{if(Q=B?Qr(B):window,X=Q.nodeName&&Q.nodeName.toLowerCase(),X==="select"||X==="input"&&Q.type==="file")var de=Pv;else if(Pt(Q))if(Lv)de=w1;else{de=E1;var ke=v1}else X=Q.nodeName,!X||X.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?B&&Hl(B.elementType)&&(de=Pv):de=T1;if(de&&(de=de(r,B))){ar(ie,de,l,J);break e}ke&&ke(r,Q,B),r==="focusout"&&B&&Q.type==="number"&&B.memoizedProps.value!=null&&so(Q,"number",Q.value)}switch(ke=B?Qr(B):window,r){case"focusin":(Pt(ke)||ke.contentEditable==="true")&&(go=ke,ym=B,eu=null);break;case"focusout":eu=ym=go=null;break;case"mousedown":vm=!0;break;case"contextmenu":case"mouseup":case"dragend":vm=!1,Hv(ie,l,J);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":Hv(ie,l,J)}var ye;if(Ii)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Fe?Y(r,l)&&(Te="onCompositionEnd"):r==="keydown"&&l.keyCode===229&&(Te="onCompositionStart");Te&&(v&&l.locale!=="ko"&&(Fe||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Fe&&(ye=Kl()):(Si=J,Zr="value"in Si?Si.value:Si.textContent,Fe=!0)),ke=Wh(B,Te),0<ke.length&&(Te=new Yl(Te,r,null,l,J),ie.push({event:Te,listeners:ke}),ye?Te.data=ye:(ye=oe(l),ye!==null&&(Te.data=ye)))),(ye=_?Mt(r,l):qe(r,l))&&(Te=Wh(B,"onBeforeInput"),0<Te.length&&(ke=new Yl("onBeforeInput","beforeinput",null,l,J),ie.push({event:ke,listeners:Te}),ke.data=ye)),oN(ie,r,B,l,J)}aT(ie,s)})}function Iu(r,s,l){return{instance:r,listener:s,currentTarget:l}}function Wh(r,s){for(var l=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=ea(r,l),d!=null&&c.unshift(Iu(r,d,g)),d=ea(r,s),d!=null&&c.push(Iu(r,d,g))),r=r.return}return c}function Uo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function lT(r,s,l,c,d){for(var g=s._reactName,T=[];l!==null&&l!==c;){var A=l,M=A.alternate,B=A.stateNode;if(A=A.tag,M!==null&&M===c)break;A!==5&&A!==26&&A!==27||B===null||(M=B,d?(B=ea(l,g),B!=null&&T.unshift(Iu(l,B,M))):d||(B=ea(l,g),B!=null&&T.push(Iu(l,B,M)))),l=l.return}T.length!==0&&r.push({event:s,listeners:T})}var hN=/\r\n?/g,fN=/\u0000|\uFFFD/g;function uT(r){return(typeof r=="string"?r:""+r).replace(hN,`
`).replace(fN,"")}function cT(r,s){return s=uT(s),uT(r)===s}function Xh(){}function rt(r,s,l,c,d,g){switch(l){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||qn(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&qn(r,""+c);break;case"className":Wr(r,"class",c);break;case"tabIndex":Wr(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Wr(r,l,c);break;case"style":Zc(r,c,g);break;case"data":if(s!=="object"){Wr(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||l!=="href")){r.removeAttribute(l);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(l);break}c=bi(""+c),r.setAttribute(l,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(l==="formAction"?(s!=="input"&&rt(r,s,"name",d.name,d,null),rt(r,s,"formEncType",d.formEncType,d,null),rt(r,s,"formMethod",d.formMethod,d,null),rt(r,s,"formTarget",d.formTarget,d,null)):(rt(r,s,"encType",d.encType,d,null),rt(r,s,"method",d.method,d,null),rt(r,s,"target",d.target,d,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(l);break}c=bi(""+c),r.setAttribute(l,c);break;case"onClick":c!=null&&(r.onclick=Xh);break;case"onScroll":c!=null&&Be("scroll",r);break;case"onScrollEnd":c!=null&&Be("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=l}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}l=bi(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,""+c):r.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,""):r.removeAttribute(l);break;case"capture":case"download":c===!0?r.setAttribute(l,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(l,c):r.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(l,c):r.removeAttribute(l);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(l):r.setAttribute(l,c);break;case"popover":Be("beforetoggle",r),Be("toggle",r),Yr(r,"popover",c);break;case"xlinkActuate":Fn(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Fn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Fn(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Fn(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Fn(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Fn(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Fn(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Fn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Fn(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Yr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=hm.get(l)||l,Yr(r,l,c))}}function Fp(r,s,l,c,d,g){switch(l){case"style":Zc(r,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(l=c.__html,l!=null){if(d.children!=null)throw Error(i(60));r.innerHTML=l}}break;case"children":typeof c=="string"?qn(r,c):(typeof c=="number"||typeof c=="bigint")&&qn(r,""+c);break;case"onScroll":c!=null&&Be("scroll",r);break;case"onScrollEnd":c!=null&&Be("scrollend",r);break;case"onClick":c!=null&&(r.onclick=Xh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!io.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(d=l.endsWith("Capture"),s=l.slice(2,d?l.length-7:void 0),g=r[kt]||null,g=g!=null?g[l]:null,typeof g=="function"&&r.removeEventListener(s,g,d),typeof c=="function")){typeof g!="function"&&g!==null&&(l in r?r[l]=null:r.hasAttribute(l)&&r.removeAttribute(l)),r.addEventListener(s,c,d);break e}l in r?r[l]=c:c===!0?r.setAttribute(l,""):Yr(r,l,c)}}}function tn(r,s,l){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",r),Be("load",r);var c=!1,d=!1,g;for(g in l)if(l.hasOwnProperty(g)){var T=l[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:rt(r,s,g,T,l,null)}}d&&rt(r,s,"srcSet",l.srcSet,l,null),c&&rt(r,s,"src",l.src,l,null);return;case"input":Be("invalid",r);var A=g=T=d=null,M=null,B=null;for(c in l)if(l.hasOwnProperty(c)){var J=l[c];if(J!=null)switch(c){case"name":d=J;break;case"type":T=J;break;case"checked":M=J;break;case"defaultChecked":B=J;break;case"value":g=J;break;case"defaultValue":A=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(i(137,s));break;default:rt(r,s,c,J,l,null)}}Js(r,g,A,M,B,T,d,!1),Xs(r);return;case"select":Be("invalid",r),c=T=g=null;for(d in l)if(l.hasOwnProperty(d)&&(A=l[d],A!=null))switch(d){case"value":g=A;break;case"defaultValue":T=A;break;case"multiple":c=A;default:rt(r,s,d,A,l,null)}s=g,l=T,r.multiple=!!c,s!=null?$e(r,!!c,s,!1):l!=null&&$e(r,!!c,l,!0);return;case"textarea":Be("invalid",r),g=d=c=null;for(T in l)if(l.hasOwnProperty(T)&&(A=l[T],A!=null))switch(T){case"value":c=A;break;case"defaultValue":d=A;break;case"children":g=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(i(91));break;default:rt(r,s,T,A,l,null)}Jr(r,c,d,g),Xs(r);return;case"option":for(M in l)if(l.hasOwnProperty(M)&&(c=l[M],c!=null))switch(M){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:rt(r,s,M,c,l,null)}return;case"dialog":Be("cancel",r),Be("close",r);break;case"iframe":case"object":Be("load",r);break;case"video":case"audio":for(c=0;c<Ru.length;c++)Be(Ru[c],r);break;case"image":Be("error",r),Be("load",r);break;case"details":Be("toggle",r);break;case"embed":case"source":case"link":Be("error",r),Be("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in l)if(l.hasOwnProperty(B)&&(c=l[B],c!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:rt(r,s,B,c,l,null)}return;default:if(Hl(s)){for(J in l)l.hasOwnProperty(J)&&(c=l[J],c!==void 0&&Fp(r,s,J,c,l,void 0));return}}for(A in l)l.hasOwnProperty(A)&&(c=l[A],c!=null&&rt(r,s,A,c,l,null))}function dN(r,s,l,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,T=null,A=null,M=null,B=null,J=null;for(X in l){var ie=l[X];if(l.hasOwnProperty(X)&&ie!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":M=ie;default:c.hasOwnProperty(X)||rt(r,s,X,null,c,ie)}}for(var Q in c){var X=c[Q];if(ie=l[Q],c.hasOwnProperty(Q)&&(X!=null||ie!=null))switch(Q){case"type":g=X;break;case"name":d=X;break;case"checked":B=X;break;case"defaultChecked":J=X;break;case"value":T=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:X!==ie&&rt(r,s,Q,X,c,ie)}}Xr(r,T,A,M,B,J,g,d);return;case"select":X=T=A=Q=null;for(g in l)if(M=l[g],l.hasOwnProperty(g)&&M!=null)switch(g){case"value":break;case"multiple":X=M;default:c.hasOwnProperty(g)||rt(r,s,g,null,c,M)}for(d in c)if(g=c[d],M=l[d],c.hasOwnProperty(d)&&(g!=null||M!=null))switch(d){case"value":Q=g;break;case"defaultValue":A=g;break;case"multiple":T=g;default:g!==M&&rt(r,s,d,g,c,M)}s=A,l=T,c=X,Q!=null?$e(r,!!l,Q,!1):!!c!=!!l&&(s!=null?$e(r,!!l,s,!0):$e(r,!!l,l?[]:"",!1));return;case"textarea":X=Q=null;for(A in l)if(d=l[A],l.hasOwnProperty(A)&&d!=null&&!c.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:rt(r,s,A,null,c,d)}for(T in c)if(d=c[T],g=l[T],c.hasOwnProperty(T)&&(d!=null||g!=null))switch(T){case"value":Q=d;break;case"defaultValue":X=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==g&&rt(r,s,T,d,c,g)}Zs(r,Q,X);return;case"option":for(var ge in l)if(Q=l[ge],l.hasOwnProperty(ge)&&Q!=null&&!c.hasOwnProperty(ge))switch(ge){case"selected":r.selected=!1;break;default:rt(r,s,ge,null,c,Q)}for(M in c)if(Q=c[M],X=l[M],c.hasOwnProperty(M)&&Q!==X&&(Q!=null||X!=null))switch(M){case"selected":r.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:rt(r,s,M,Q,c,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ie in l)Q=l[Ie],l.hasOwnProperty(Ie)&&Q!=null&&!c.hasOwnProperty(Ie)&&rt(r,s,Ie,null,c,Q);for(B in c)if(Q=c[B],X=l[B],c.hasOwnProperty(B)&&Q!==X&&(Q!=null||X!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,s));break;default:rt(r,s,B,Q,c,X)}return;default:if(Hl(s)){for(var Et in l)Q=l[Et],l.hasOwnProperty(Et)&&Q!==void 0&&!c.hasOwnProperty(Et)&&Fp(r,s,Et,void 0,c,Q);for(J in c)Q=c[J],X=l[J],!c.hasOwnProperty(J)||Q===X||Q===void 0&&X===void 0||Fp(r,s,J,Q,c,X);return}}for(var F in l)Q=l[F],l.hasOwnProperty(F)&&Q!=null&&!c.hasOwnProperty(F)&&rt(r,s,F,null,c,Q);for(ie in c)Q=c[ie],X=l[ie],!c.hasOwnProperty(ie)||Q===X||Q==null&&X==null||rt(r,s,ie,Q,c,X)}var qp=null,Hp=null;function Jh(r){return r.nodeType===9?r:r.ownerDocument}function hT(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fT(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Gp(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Kp=null;function mN(){var r=window.event;return r&&r.type==="popstate"?r===Kp?!1:(Kp=r,!0):(Kp=null,!1)}var dT=typeof setTimeout=="function"?setTimeout:void 0,pN=typeof clearTimeout=="function"?clearTimeout:void 0,mT=typeof Promise=="function"?Promise:void 0,gN=typeof queueMicrotask=="function"?queueMicrotask:typeof mT<"u"?function(r){return mT.resolve(null).then(r).catch(_N)}:dT;function _N(r){setTimeout(function(){throw r})}function Qp(r,s){var l=s,c=0;do{var d=l.nextSibling;if(r.removeChild(l),d&&d.nodeType===8)if(l=d.data,l==="/$"){if(c===0){r.removeChild(d),Lu(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=d}while(l);Lu(s)}function $p(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var l=s;switch(s=s.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":$p(l),Ws(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}r.removeChild(l)}}function yN(r,s,l,c){for(;r.nodeType===1;){var d=l;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[Kr])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(g=r.getAttribute("rel"),g==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(g!==d.rel||r.getAttribute("href")!==(d.href==null?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(g=r.getAttribute("src"),(g!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===g)return r}else return r;if(r=hi(r.nextSibling),r===null)break}return null}function vN(r,s,l){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!l||(r=hi(r.nextSibling),r===null))return null;return r}function hi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}function pT(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var l=r.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return r;s--}else l==="/$"&&s++}r=r.previousSibling}return null}function gT(r,s,l){switch(s=Jh(l),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}var ni=new Map,_T=new Set;function Zh(r){return typeof r.getRootNode=="function"?r.getRootNode():r.ownerDocument}var Tr=ce.d;ce.d={f:EN,r:TN,D:wN,C:bN,L:SN,m:AN,X:RN,S:CN,M:IN};function EN(){var r=Tr.f(),s=Gh();return r||s}function TN(r){var s=Zi(r);s!==null&&s.tag===5&&s.type==="form"?H0(s):Tr.r(r)}var jo=typeof document>"u"?null:document;function yT(r,s,l){var c=jo;if(c&&typeof s=="string"&&s){var d=_t(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof l=="string"&&(d+='[crossorigin="'+l+'"]'),_T.has(d)||(_T.add(d),r={rel:r,crossOrigin:l,href:s},c.querySelector(d)===null&&(s=c.createElement("link"),tn(s,"link",r),dt(s),c.head.appendChild(s)))}}function wN(r){Tr.D(r),yT("dns-prefetch",r,null)}function bN(r,s){Tr.C(r,s),yT("preconnect",r,s)}function SN(r,s,l){Tr.L(r,s,l);var c=jo;if(c&&r&&s){var d='link[rel="preload"][as="'+_t(s)+'"]';s==="image"&&l&&l.imageSrcSet?(d+='[imagesrcset="'+_t(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(d+='[imagesizes="'+_t(l.imageSizes)+'"]')):d+='[href="'+_t(r)+'"]';var g=d;switch(s){case"style":g=Bo(r);break;case"script":g=zo(r)}ni.has(g)||(r=x({rel:"preload",href:s==="image"&&l&&l.imageSrcSet?void 0:r,as:s},l),ni.set(g,r),c.querySelector(d)!==null||s==="style"&&c.querySelector(Nu(g))||s==="script"&&c.querySelector(xu(g))||(s=c.createElement("link"),tn(s,"link",r),dt(s),c.head.appendChild(s)))}}function AN(r,s){Tr.m(r,s);var l=jo;if(l&&r){var c=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+_t(c)+'"][href="'+_t(r)+'"]',g=d;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=zo(r)}if(!ni.has(g)&&(r=x({rel:"modulepreload",href:r},s),ni.set(g,r),l.querySelector(d)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(xu(g)))return}c=l.createElement("link"),tn(c,"link",r),dt(c),l.head.appendChild(c)}}}function CN(r,s,l){Tr.S(r,s,l);var c=jo;if(c&&r){var d=$r(c).hoistableStyles,g=Bo(r);s=s||"default";var T=d.get(g);if(!T){var A={loading:0,preload:null};if(T=c.querySelector(Nu(g)))A.loading=5;else{r=x({rel:"stylesheet",href:r,"data-precedence":s},l),(l=ni.get(g))&&Yp(r,l);var M=T=c.createElement("link");dt(M),tn(M,"link",r),M._p=new Promise(function(B,J){M.onload=B,M.onerror=J}),M.addEventListener("load",function(){A.loading|=1}),M.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ef(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:A},d.set(g,T)}}}function RN(r,s){Tr.X(r,s);var l=jo;if(l&&r){var c=$r(l).hoistableScripts,d=zo(r),g=c.get(d);g||(g=l.querySelector(xu(d)),g||(r=x({src:r,async:!0},s),(s=ni.get(d))&&Wp(r,s),g=l.createElement("script"),dt(g),tn(g,"link",r),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function IN(r,s){Tr.M(r,s);var l=jo;if(l&&r){var c=$r(l).hoistableScripts,d=zo(r),g=c.get(d);g||(g=l.querySelector(xu(d)),g||(r=x({src:r,async:!0,type:"module"},s),(s=ni.get(d))&&Wp(r,s),g=l.createElement("script"),dt(g),tn(g,"link",r),l.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(d,g))}}function vT(r,s,l,c){var d=(d=Bn.current)?Zh(d):null;if(!d)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(s=Bo(l.href),l=$r(d).hoistableStyles,c=l.get(s),c||(c={type:"style",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){r=Bo(l.href);var g=$r(d).hoistableStyles,T=g.get(r);if(T||(d=d.ownerDocument||d,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(r,T),(g=d.querySelector(Nu(r)))&&!g._p&&(T.instance=g,T.state.loading=5),ni.has(r)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ni.set(r,l),g||NN(d,r,l,T.state))),s&&c===null)throw Error(i(528,""));return T}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=l.async,l=l.src,typeof l=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=zo(l),l=$r(d).hoistableScripts,c=l.get(s),c||(c={type:"script",instance:null,count:0,state:null},l.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function Bo(r){return'href="'+_t(r)+'"'}function Nu(r){return'link[rel="stylesheet"]['+r+"]"}function ET(r){return x({},r,{"data-precedence":r.precedence,precedence:null})}function NN(r,s,l,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),tn(s,"link",l),dt(s),r.head.appendChild(s))}function zo(r){return'[src="'+_t(r)+'"]'}function xu(r){return"script[async]"+r}function TT(r,s,l){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+_t(l.href)+'"]');if(c)return s.instance=c,dt(c),c;var d=x({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),dt(c),tn(c,"style",d),ef(c,l.precedence,r),s.instance=c;case"stylesheet":d=Bo(l.href);var g=r.querySelector(Nu(d));if(g)return s.state.loading|=4,s.instance=g,dt(g),g;c=ET(l),(d=ni.get(d))&&Yp(c,d),g=(r.ownerDocument||r).createElement("link"),dt(g);var T=g;return T._p=new Promise(function(A,M){T.onload=A,T.onerror=M}),tn(g,"link",c),s.state.loading|=4,ef(g,l.precedence,r),s.instance=g;case"script":return g=zo(l.src),(d=r.querySelector(xu(g)))?(s.instance=d,dt(d),d):(c=l,(d=ni.get(g))&&(c=x({},l),Wp(c,d)),r=r.ownerDocument||r,d=r.createElement("script"),dt(d),tn(d,"link",c),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&!(s.state.loading&4)&&(c=s.instance,s.state.loading|=4,ef(c,l.precedence,r));return s.instance}function ef(r,s,l){for(var c=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=c.length?c[c.length-1]:null,g=d,T=0;T<c.length;T++){var A=c[T];if(A.dataset.precedence===s)g=A;else if(g!==d)break}g?g.parentNode.insertBefore(r,g.nextSibling):(s=l.nodeType===9?l.head:l,s.insertBefore(r,s.firstChild))}function Yp(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Wp(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var tf=null;function wT(r,s,l){if(tf===null){var c=new Map,d=tf=new Map;d.set(l,c)}else d=tf,c=d.get(l),c||(c=new Map,d.set(l,c));if(c.has(r))return c;for(c.set(r,null),l=l.getElementsByTagName(r),d=0;d<l.length;d++){var g=l[d];if(!(g[Kr]||g[Ft]||r==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=r+T;var A=c.get(T);A?A.push(g):c.set(T,[g])}}return c}function bT(r,s,l){r=r.ownerDocument||r,r.head.insertBefore(l,s==="title"?r.querySelector("head > title"):null)}function xN(r,s,l){if(l===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function ST(r){return!(r.type==="stylesheet"&&!(r.state.loading&3))}var Du=null;function DN(){}function ON(r,s,l){if(Du===null)throw Error(i(475));var c=Du;if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(s.state.loading&4)){if(s.instance===null){var d=Bo(l.href),g=r.querySelector(Nu(d));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=nf.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=g,dt(g);return}g=r.ownerDocument||r,l=ET(l),(d=ni.get(d))&&Yp(l,d),g=g.createElement("link"),dt(g);var T=g;T._p=new Promise(function(A,M){T.onload=A,T.onerror=M}),tn(g,"link",l),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&!(s.state.loading&3)&&(c.count++,s=nf.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function kN(){if(Du===null)throw Error(i(475));var r=Du;return r.stylesheets&&r.count===0&&Xp(r,r.stylesheets),0<r.count?function(s){var l=setTimeout(function(){if(r.stylesheets&&Xp(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(l)}}:null}function nf(){if(this.count--,this.count===0){if(this.stylesheets)Xp(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var rf=null;function Xp(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,rf=new Map,s.forEach(MN,r),rf=null,nf.call(r))}function MN(r,s){if(!(s.state.loading&4)){var l=rf.get(r);if(l)var c=l.get(null);else{l=new Map,rf.set(r,l);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var T=d[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(l.set(T.dataset.precedence,T),c=T)}c&&l.set(null,c)}d=s.instance,T=d.getAttribute("data-precedence"),g=l.get(T)||c,g===c&&l.set(null,d),l.set(T,d),this.count++,c=nf.bind(this),d.addEventListener("load",c),d.addEventListener("error",c),g?g.parentNode.insertBefore(d,g.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var Ou={$$typeof:S,Provider:null,Consumer:null,_currentValue:Ce,_currentValue2:Ce,_threadCount:0};function PN(r,s,l,c,d,g,T,A){this.tag=1,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=to(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.hiddenUpdates=to(null),this.identifierPrefix=c,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function AT(r,s,l,c,d,g,T,A,M,B,J,ie){return r=new PN(r,s,l,T,A,M,B,ie),s=1,g===!0&&(s|=24),g=ei(3,null,null,s),r.current=g,g.stateNode=r,s=Nm(),s.refCount++,r.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:l,cache:s},up(g),r}function CT(r){return r?(r=vo,r):vo}function RT(r,s,l,c,d,g){d=CT(d),c.context===null?c.context=d:c.pendingContext=d,c=os(s),c.payload={element:l},g=g===void 0?null:g,g!==null&&(c.callback=g),l=ls(r,c,s),l!==null&&(vn(l,r,s),pu(l,r,s))}function IT(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var l=r.retryLane;r.retryLane=l!==0&&l<s?l:s}}function Jp(r,s){IT(r,s),(r=r.alternate)&&IT(r,s)}function NT(r){if(r.tag===13){var s=es(r,67108864);s!==null&&vn(s,r,67108864),Jp(r,67108864)}}var sf=!0;function LN(r,s,l,c){var d=b.T;b.T=null;var g=ce.p;try{ce.p=2,Zp(r,s,l,c)}finally{ce.p=g,b.T=d}}function VN(r,s,l,c){var d=b.T;b.T=null;var g=ce.p;try{ce.p=8,Zp(r,s,l,c)}finally{ce.p=g,b.T=d}}function Zp(r,s,l,c){if(sf){var d=eg(c);if(d===null)zp(r,s,c,af,l),DT(r,c);else if(jN(d,r,s,l,c))c.stopPropagation();else if(DT(r,c),s&4&&-1<UN.indexOf(r)){for(;d!==null;){var g=Zi(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=ai(g.pendingLanes);if(T!==0){var A=g;for(A.pendingLanes|=2,A.entangledLanes|=2;T;){var M=1<<31-pn(T);A.entanglements[1]|=M,T&=~M}Mi(g),!(pt&6)&&(Fh=wn()+500,Cu(0))}}break;case 13:A=es(g,2),A!==null&&vn(A,g,2),Gh(),Jp(g,2)}if(g=eg(c),g===null&&zp(r,s,c,af,l),g===d)break;d=g}d!==null&&c.stopPropagation()}else zp(r,s,c,null,l)}}function eg(r){return r=ao(r),tg(r)}var af=null;function tg(r){if(af=null,r=oi(r),r!==null){var s=_e(r);if(s===null)r=null;else{var l=s.tag;if(l===13){if(r=Qe(s),r!==null)return r;r=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return af=r,null}function xT(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hc()){case Ot:return 2;case zt:return 8;case Xi:case Gc:return 32;case Ml:return 268435456;default:return 32}default:return 32}}var ng=!1,ps=null,gs=null,_s=null,ku=new Map,Mu=new Map,ys=[],UN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function DT(r,s){switch(r){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":ku.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mu.delete(s.pointerId)}}function Pu(r,s,l,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Zi(s),s!==null&&NT(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function jN(r,s,l,c,d){switch(s){case"focusin":return ps=Pu(ps,r,s,l,c,d),!0;case"dragenter":return gs=Pu(gs,r,s,l,c,d),!0;case"mouseover":return _s=Pu(_s,r,s,l,c,d),!0;case"pointerover":var g=d.pointerId;return ku.set(g,Pu(ku.get(g)||null,r,s,l,c,d)),!0;case"gotpointercapture":return g=d.pointerId,Mu.set(g,Pu(Mu.get(g)||null,r,s,l,c,d)),!0}return!1}function OT(r){var s=oi(r.target);if(s!==null){var l=_e(s);if(l!==null){if(s=l.tag,s===13){if(s=Qe(l),s!==null){r.blockedOn=s,Gr(r.priority,function(){if(l.tag===13){var c=Vn(),d=es(l,c);d!==null&&vn(d,l,c),Jp(l,c)}});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){r.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}r.blockedOn=null}function of(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var l=eg(r.nativeEvent);if(l===null){l=r.nativeEvent;var c=new l.constructor(l.type,l);Hn=c,l.target.dispatchEvent(c),Hn=null}else return s=Zi(l),s!==null&&NT(s),r.blockedOn=l,!1;s.shift()}return!0}function kT(r,s,l){of(r)&&l.delete(s)}function BN(){ng=!1,ps!==null&&of(ps)&&(ps=null),gs!==null&&of(gs)&&(gs=null),_s!==null&&of(_s)&&(_s=null),ku.forEach(kT),Mu.forEach(kT)}function lf(r,s){r.blockedOn===s&&(r.blockedOn=null,ng||(ng=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,BN)))}var uf=null;function MT(r){uf!==r&&(uf=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){uf===r&&(uf=null);for(var s=0;s<r.length;s+=3){var l=r[s],c=r[s+1],d=r[s+2];if(typeof c!="function"){if(tg(c||l)===null)continue;break}var g=Zi(l);g!==null&&(r.splice(s,3),s-=3,Gm(g,{pending:!0,data:d,method:l.method,action:c},c,d))}}))}function Lu(r){function s(M){return lf(M,r)}ps!==null&&lf(ps,r),gs!==null&&lf(gs,r),_s!==null&&lf(_s,r),ku.forEach(s),Mu.forEach(s);for(var l=0;l<ys.length;l++){var c=ys[l];c.blockedOn===r&&(c.blockedOn=null)}for(;0<ys.length&&(l=ys[0],l.blockedOn===null);)OT(l),l.blockedOn===null&&ys.shift();if(l=(r.ownerDocument||r).$$reactFormReplay,l!=null)for(c=0;c<l.length;c+=3){var d=l[c],g=l[c+1],T=d[kt]||null;if(typeof g=="function")T||MT(l);else if(T){var A=null;if(g&&g.hasAttribute("formAction")){if(d=g,T=g[kt]||null)A=T.formAction;else if(tg(d)!==null)continue}else A=T.action;typeof A=="function"?l[c+1]=A:(l.splice(c,3),c-=3),MT(l)}}}function ig(r){this._internalRoot=r}cf.prototype.render=ig.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var l=s.current,c=Vn();RT(l,c,r,s,null,null)},cf.prototype.unmount=ig.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;r.tag===0&&Lo(),RT(r.current,2,null,r,null,null),Gh(),s[Ji]=null}};function cf(r){this._internalRoot=r}cf.prototype.unstable_scheduleHydration=function(r){if(r){var s=Wc();r={blockedOn:null,target:r,priority:s};for(var l=0;l<ys.length&&s!==0&&s<ys[l].priority;l++);ys.splice(l,0,r),l===0&&OT(r)}};var PT=e.version;if(PT!=="19.0.0")throw Error(i(527,PT,"19.0.0"));ce.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=re(s),r=r!==null?me(r):null,r=r===null?null:r.stateNode,r};var zN={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:b,findFiberByHostInstance:oi,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hf.isDisabled&&hf.supportsFiber)try{jr=hf.inject(zN),on=hf}catch{}}return Uu.createRoot=function(r,s){if(!a(r))throw Error(i(299));var l=!1,c="",d=J0,g=Z0,T=eE,A=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(A=s.unstable_transitionCallbacks)),s=AT(r,1,!1,null,null,l,c,d,g,T,A,null),r[Ji]=s.current,Bp(r.nodeType===8?r.parentNode:r),new ig(s)},Uu.hydrateRoot=function(r,s,l){if(!a(r))throw Error(i(299));var c=!1,d="",g=J0,T=Z0,A=eE,M=null,B=null;return l!=null&&(l.unstable_strictMode===!0&&(c=!0),l.identifierPrefix!==void 0&&(d=l.identifierPrefix),l.onUncaughtError!==void 0&&(g=l.onUncaughtError),l.onCaughtError!==void 0&&(T=l.onCaughtError),l.onRecoverableError!==void 0&&(A=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(M=l.unstable_transitionCallbacks),l.formState!==void 0&&(B=l.formState)),s=AT(r,1,!0,s,l??null,c,d,g,T,A,M,B),s.context=CT(null),l=s.current,c=Vn(),d=os(c),d.callback=null,ls(l,d,c),s.current.lanes=c,bt(s,c),Mi(s),r[Ji]=s.current,Bp(r),new cf(s)},Uu.version="19.0.0",Uu}var GT;function JN(){if(GT)return ag.exports;GT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),ag.exports=XN(),ag.exports}var ZN=JN(),ju={},KT;function ex(){if(KT)return ju;KT=1,Object.defineProperty(ju,"__esModule",{value:!0}),ju.parse=u,ju.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,o=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,S){const D=new o,U=w.length;if(U<2)return D;const P=(S==null?void 0:S.decode)||y;let z=0;do{const H=w.indexOf("=",z);if(H===-1)break;const G=w.indexOf(";",z),ne=G===-1?U:G;if(H>ne){z=w.lastIndexOf(";",H-1)+1;continue}const se=f(w,z,H),W=m(w,H,se),O=w.slice(se,W);if(D[O]===void 0){let I=f(w,H+1,ne),b=m(w,ne,I);const x=P(w.slice(I,b));D[O]=x}z=ne+1}while(z<U);return D}function f(w,S,D){do{const U=w.charCodeAt(S);if(U!==32&&U!==9)return S}while(++S<D);return D}function m(w,S,D){for(;S>D;){const U=w.charCodeAt(--S);if(U!==32&&U!==9)return S+1}return D}function p(w,S,D){const U=(D==null?void 0:D.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const P=U(S);if(!e.test(P))throw new TypeError(`argument val is invalid: ${S}`);let z=w+"="+P;if(!D)return z;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);z+="; Max-Age="+D.maxAge}if(D.domain){if(!t.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);z+="; Domain="+D.domain}if(D.path){if(!i.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);z+="; Path="+D.path}if(D.expires){if(!E(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);z+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&(z+="; HttpOnly"),D.secure&&(z+="; Secure"),D.partitioned&&(z+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":z+="; Priority=Low";break;case"medium":z+="; Priority=Medium";break;case"high":z+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":z+="; SameSite=Strict";break;case"lax":z+="; SameSite=Lax";break;case"none":z+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return z}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function E(w){return a.call(w)==="[object Date]"}return ju}ex();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var QT="popstate";function tx(n={}){function e(i,a){let{pathname:o,search:u,hash:f}=i.location;return n_("",{pathname:o,search:u,hash:f},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:lc(a)}return ix(e,t,null,n)}function gt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function zi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nx(){return Math.random().toString(36).substring(2,10)}function $T(n,e){return{usr:n.state,key:n.key,idx:e}}function n_(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?yl(e):e,state:t,key:e&&e.key||i||nx()}}function lc({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function yl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function ix(n,e,t,i={}){let{window:a=document.defaultView,v5Compat:o=!1}=i,u=a.history,f="POP",m=null,p=y();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function y(){return(u.state||{idx:null}).idx}function E(){f="POP";let P=y(),z=P==null?null:P-p;p=P,m&&m({action:f,location:U.location,delta:z})}function w(P,z){f="PUSH";let H=n_(U.location,P,z);p=y()+1;let G=$T(H,p),ne=U.createHref(H);try{u.pushState(G,"",ne)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;a.location.assign(ne)}o&&m&&m({action:f,location:U.location,delta:1})}function S(P,z){f="REPLACE";let H=n_(U.location,P,z);p=y();let G=$T(H,p),ne=U.createHref(H);u.replaceState(G,"",ne),o&&m&&m({action:f,location:U.location,delta:0})}function D(P){let z=a.location.origin!=="null"?a.location.origin:a.location.href,H=typeof P=="string"?P:lc(P);return H=H.replace(/ $/,"%20"),gt(z,`No window.location.(origin|href) available to create URL for href: ${H}`),new URL(H,z)}let U={get action(){return f},get location(){return n(a,u)},listen(P){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(QT,E),m=P,()=>{a.removeEventListener(QT,E),m=null}},createHref(P){return e(a,P)},createURL:D,encodeLocation(P){let z=D(P);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:w,replace:S,go(P){return u.go(P)}};return U}function zS(n,e,t="/"){return rx(n,e,t,!1)}function rx(n,e,t,i){let a=typeof e=="string"?yl(e):e,o=Ms(a.pathname||"/",t);if(o==null)return null;let u=FS(n);sx(u);let f=null;for(let m=0;f==null&&m<u.length;++m){let p=gx(o);f=mx(u[m],p,i)}return f}function FS(n,e=[],t=[],i=""){let a=(o,u,f)=>{let m={relativePath:f===void 0?o.path||"":f,caseSensitive:o.caseSensitive===!0,childrenIndex:u,route:o};m.relativePath.startsWith("/")&&(gt(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length));let p=Ir([i,m.relativePath]),y=t.concat(m);o.children&&o.children.length>0&&(gt(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),FS(o.children,e,y,p)),!(o.path==null&&!o.index)&&e.push({path:p,score:fx(p,o.index),routesMeta:y})};return n.forEach((o,u)=>{var f;if(o.path===""||!((f=o.path)!=null&&f.includes("?")))a(o,u);else for(let m of qS(o.path))a(o,u,m)}),e}function qS(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return a?[o,""]:[o];let u=qS(i.join("/")),f=[];return f.push(...u.map(m=>m===""?o:[o,m].join("/"))),a&&f.push(...u),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function sx(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:dx(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var ax=/^:[\w-]+$/,ox=3,lx=2,ux=1,cx=10,hx=-2,YT=n=>n==="*";function fx(n,e){let t=n.split("/"),i=t.length;return t.some(YT)&&(i+=hx),e&&(i+=lx),t.filter(a=>!YT(a)).reduce((a,o)=>a+(ax.test(o)?ox:o===""?ux:cx),i)}function dx(n,e){return n.length===e.length&&n.slice(0,-1).every((i,a)=>i===e[a])?n[n.length-1]-e[e.length-1]:0}function mx(n,e,t=!1){let{routesMeta:i}=n,a={},o="/",u=[];for(let f=0;f<i.length;++f){let m=i[f],p=f===i.length-1,y=o==="/"?e:e.slice(o.length)||"/",E=Lf({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},y),w=m.route;if(!E&&p&&t&&!i[i.length-1].route.index&&(E=Lf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!E)return null;Object.assign(a,E.params),u.push({params:a,pathname:Ir([o,E.pathname]),pathnameBase:Ex(Ir([o,E.pathnameBase])),route:w}),E.pathnameBase!=="/"&&(o=Ir([o,E.pathnameBase]))}return u}function Lf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=px(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let o=a[0],u=o.replace(/(.)\/+$/,"$1"),f=a.slice(1);return{params:i.reduce((p,{paramName:y,isOptional:E},w)=>{if(y==="*"){let D=f[w]||"";u=o.slice(0,o.length-D.length).replace(/(.)\/+$/,"$1")}const S=f[w];return E&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:u,pattern:n}}function px(n,e=!1,t=!0){zi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,m)=>(i.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function gx(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ms(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function _x(n,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof n=="string"?yl(n):n;return{pathname:t?t.startsWith("/")?t:yx(t,e):e,search:Tx(i),hash:wx(a)}}function yx(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function cg(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vx(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function HS(n){let e=vx(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function GS(n,e,t,i=!1){let a;typeof n=="string"?a=yl(n):(a={...n},gt(!a.pathname||!a.pathname.includes("?"),cg("?","pathname","search",a)),gt(!a.pathname||!a.pathname.includes("#"),cg("#","pathname","hash",a)),gt(!a.search||!a.search.includes("#"),cg("#","search","hash",a)));let o=n===""||a.pathname==="",u=o?"/":a.pathname,f;if(u==null)f=t;else{let E=e.length-1;if(!i&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),E-=1;a.pathname=w.join("/")}f=E>=0?e[E]:"/"}let m=_x(a,f),p=u&&u!=="/"&&u.endsWith("/"),y=(o||u===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(p||y)&&(m.pathname+="/"),m}var Ir=n=>n.join("/").replace(/\/\/+/g,"/"),Ex=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Tx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,wx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bx(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var KS=["POST","PUT","PATCH","DELETE"];new Set(KS);var Sx=["GET",...KS];new Set(Sx);var vl=$.createContext(null);vl.displayName="DataRouter";var Ed=$.createContext(null);Ed.displayName="DataRouterState";var QS=$.createContext({isTransitioning:!1});QS.displayName="ViewTransition";var Ax=$.createContext(new Map);Ax.displayName="Fetchers";var Cx=$.createContext(null);Cx.displayName="Await";var Gi=$.createContext(null);Gi.displayName="Navigation";var Ac=$.createContext(null);Ac.displayName="Location";var Ki=$.createContext({outlet:null,matches:[],isDataRoute:!1});Ki.displayName="Route";var $_=$.createContext(null);$_.displayName="RouteError";function Rx(n,{relative:e}={}){gt(Cc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=$.useContext(Gi),{hash:a,pathname:o,search:u}=Rc(n,{relative:e}),f=o;return t!=="/"&&(f=o==="/"?t:Ir([t,o])),i.createHref({pathname:f,search:u,hash:a})}function Cc(){return $.useContext(Ac)!=null}function za(){return gt(Cc(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(Ac).location}var $S="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function YS(n){$.useContext(Gi).static||$.useLayoutEffect(n)}function El(){let{isDataRoute:n}=$.useContext(Ki);return n?zx():Ix()}function Ix(){gt(Cc(),"useNavigate() may be used only in the context of a <Router> component.");let n=$.useContext(vl),{basename:e,navigator:t}=$.useContext(Gi),{matches:i}=$.useContext(Ki),{pathname:a}=za(),o=JSON.stringify(HS(i)),u=$.useRef(!1);return YS(()=>{u.current=!0}),$.useCallback((m,p={})=>{if(zi(u.current,$S),!u.current)return;if(typeof m=="number"){t.go(m);return}let y=GS(m,JSON.parse(o),a,p.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:Ir([e,y.pathname])),(p.replace?t.replace:t.push)(y,p.state,p)},[e,t,o,a,n])}$.createContext(null);function Nx(){let{matches:n}=$.useContext(Ki),e=n[n.length-1];return e?e.params:{}}function Rc(n,{relative:e}={}){let{matches:t}=$.useContext(Ki),{pathname:i}=za(),a=JSON.stringify(HS(t));return $.useMemo(()=>GS(n,JSON.parse(a),i,e==="path"),[n,a,i,e])}function xx(n,e){return WS(n,e)}function WS(n,e,t,i){var H;gt(Cc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:o}=$.useContext(Gi),{matches:u}=$.useContext(Ki),f=u[u.length-1],m=f?f.params:{},p=f?f.pathname:"/",y=f?f.pathnameBase:"/",E=f&&f.route;{let G=E&&E.path||"";XS(p,!E||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let w=za(),S;if(e){let G=typeof e=="string"?yl(e):e;gt(y==="/"||((H=G.pathname)==null?void 0:H.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${G.pathname}" was given in the \`location\` prop.`),S=G}else S=w;let D=S.pathname||"/",U=D;if(y!=="/"){let G=y.replace(/^\//,"").split("/");U="/"+D.replace(/^\//,"").split("/").slice(G.length).join("/")}let P=!o&&t&&t.matches&&t.matches.length>0?t.matches:zS(n,{pathname:U});zi(E||P!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),zi(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let z=Px(P&&P.map(G=>Object.assign({},G,{params:Object.assign({},m,G.params),pathname:Ir([y,a.encodeLocation?a.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?y:Ir([y,a.encodeLocation?a.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),u,t,i);return e&&z?$.createElement(Ac.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},z):z}function Dx(){let n=Bx(),e=bx(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:o},"ErrorBoundary")," or"," ",$.createElement("code",{style:o},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),t?$.createElement("pre",{style:a},t):null,u)}var Ox=$.createElement(Dx,null),kx=class extends $.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?$.createElement(Ki.Provider,{value:this.props.routeContext},$.createElement($_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Mx({routeContext:n,match:e,children:t}){let i=$.useContext(vl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),$.createElement(Ki.Provider,{value:n},t)}function Px(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,o=t==null?void 0:t.errors;if(o!=null){let m=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);gt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let u=!1,f=-1;if(t)for(let m=0;m<a.length;m++){let p=a[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=m),p.route.id){let{loaderData:y,errors:E}=t,w=p.route.loader&&!y.hasOwnProperty(p.route.id)&&(!E||E[p.route.id]===void 0);if(p.route.lazy||w){u=!0,f>=0?a=a.slice(0,f+1):a=[a[0]];break}}}return a.reduceRight((m,p,y)=>{let E,w=!1,S=null,D=null;t&&(E=o&&p.route.id?o[p.route.id]:void 0,S=p.route.errorElement||Ox,u&&(f<0&&y===0?(XS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,D=null):f===y&&(w=!0,D=p.route.hydrateFallbackElement||null)));let U=e.concat(a.slice(0,y+1)),P=()=>{let z;return E?z=S:w?z=D:p.route.Component?z=$.createElement(p.route.Component,null):p.route.element?z=p.route.element:z=m,$.createElement(Mx,{match:p,routeContext:{outlet:m,matches:U,isDataRoute:t!=null},children:z})};return t&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?$.createElement(kx,{location:t.location,revalidation:t.revalidation,component:S,error:E,children:P(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):P()},null)}function Y_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lx(n){let e=$.useContext(vl);return gt(e,Y_(n)),e}function Vx(n){let e=$.useContext(Ed);return gt(e,Y_(n)),e}function Ux(n){let e=$.useContext(Ki);return gt(e,Y_(n)),e}function W_(n){let e=Ux(n),t=e.matches[e.matches.length-1];return gt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function jx(){return W_("useRouteId")}function Bx(){var i;let n=$.useContext($_),e=Vx("useRouteError"),t=W_("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function zx(){let{router:n}=Lx("useNavigate"),e=W_("useNavigate"),t=$.useRef(!1);return YS(()=>{t.current=!0}),$.useCallback(async(a,o={})=>{zi(t.current,$S),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...o}))},[n,e])}var WT={};function XS(n,e,t){!e&&!WT[n]&&(WT[n]=!0,zi(!1,t))}$.memo(Fx);function Fx({routes:n,future:e,state:t}){return WS(n,void 0,t,e)}function ws(n){gt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qx({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:o=!1}){gt(!Cc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),f=$.useMemo(()=>({basename:u,navigator:a,static:o,future:{}}),[u,a,o]);typeof t=="string"&&(t=yl(t));let{pathname:m="/",search:p="",hash:y="",state:E=null,key:w="default"}=t,S=$.useMemo(()=>{let D=Ms(m,u);return D==null?null:{location:{pathname:D,search:p,hash:y,state:E,key:w},navigationType:i}},[u,m,p,y,E,w,i]);return zi(S!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:$.createElement(Gi.Provider,{value:f},$.createElement(Ac.Provider,{children:e,value:S}))}function Hx({children:n,location:e}){return xx(i_(n),e)}function i_(n,e=[]){let t=[];return $.Children.forEach(n,(i,a)=>{if(!$.isValidElement(i))return;let o=[...e,a];if(i.type===$.Fragment){t.push.apply(t,i_(i.props.children,o));return}gt(i.type===ws,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),gt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||o.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=i_(i.props.children,o)),t.push(u)}),t}var wf="get",bf="application/x-www-form-urlencoded";function Td(n){return n!=null&&typeof n.tagName=="string"}function Gx(n){return Td(n)&&n.tagName.toLowerCase()==="button"}function Kx(n){return Td(n)&&n.tagName.toLowerCase()==="form"}function Qx(n){return Td(n)&&n.tagName.toLowerCase()==="input"}function $x(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Yx(n,e){return n.button===0&&(!e||e==="_self")&&!$x(n)}var ff=null;function Wx(){if(ff===null)try{new FormData(document.createElement("form"),0),ff=!1}catch{ff=!0}return ff}var Xx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function hg(n){return n!=null&&!Xx.has(n)?(zi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bf}"`),null):n}function Jx(n,e){let t,i,a,o,u;if(Kx(n)){let f=n.getAttribute("action");i=f?Ms(f,e):null,t=n.getAttribute("method")||wf,a=hg(n.getAttribute("enctype"))||bf,o=new FormData(n)}else if(Gx(n)||Qx(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||f.getAttribute("action");if(i=m?Ms(m,e):null,t=n.getAttribute("formmethod")||f.getAttribute("method")||wf,a=hg(n.getAttribute("formenctype"))||hg(f.getAttribute("enctype"))||bf,o=new FormData(f,n),!Wx()){let{name:p,type:y,value:E}=n;if(y==="image"){let w=p?`${p}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else p&&o.append(p,E)}}else{if(Td(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=wf,i=null,a=bf,u=n}return o&&a==="text/plain"&&(u=o,o=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:o,body:u}}function X_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function Zx(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function e2(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function t2(n,e,t){let i=await Promise.all(n.map(async a=>{let o=e.routes[a.route.id];if(o){let u=await Zx(o,t);return u.links?u.links():[]}return[]}));return s2(i.flat(1).filter(e2).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function XT(n,e,t,i,a,o){let u=(m,p)=>t[p]?m.route.id!==t[p].route.id:!0,f=(m,p)=>{var y;return t[p].pathname!==m.pathname||((y=t[p].route.path)==null?void 0:y.endsWith("*"))&&t[p].params["*"]!==m.params["*"]};return o==="assets"?e.filter((m,p)=>u(m,p)||f(m,p)):o==="data"?e.filter((m,p)=>{var E;let y=i.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(u(m,p)||f(m,p))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function n2(n,e){return i2(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let a=[i.module];return i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function i2(n){return[...new Set(n)]}function r2(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function s2(n,e){let t=new Set;return new Set(e),n.reduce((i,a)=>{let o=JSON.stringify(r2(a));return t.has(o)||(t.add(o),i.push({key:o,link:a})),i},[])}function a2(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function o2(){let n=$.useContext(vl);return X_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function l2(){let n=$.useContext(Ed);return X_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var J_=$.createContext(void 0);J_.displayName="FrameworkContext";function JS(){let n=$.useContext(J_);return X_(n,"You must render this element inside a <HydratedRouter> element"),n}function u2(n,e){let t=$.useContext(J_),[i,a]=$.useState(!1),[o,u]=$.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:p,onMouseLeave:y,onTouchStart:E}=e,w=$.useRef(null);$.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let U=z=>{z.forEach(H=>{u(H.isIntersecting)})},P=new IntersectionObserver(U,{threshold:.5});return w.current&&P.observe(w.current),()=>{P.disconnect()}}},[n]),$.useEffect(()=>{if(i){let U=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(U)}}},[i]);let S=()=>{a(!0)},D=()=>{a(!1),u(!1)};return t?n!=="intent"?[o,w,{}]:[o,w,{onFocus:Bu(f,S),onBlur:Bu(m,D),onMouseEnter:Bu(p,S),onMouseLeave:Bu(y,D),onTouchStart:Bu(E,S)}]:[!1,w,{}]}function Bu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function c2({page:n,...e}){let{router:t}=o2(),i=$.useMemo(()=>zS(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?$.createElement(f2,{page:n,matches:i,...e}):null}function h2(n){let{manifest:e,routeModules:t}=JS(),[i,a]=$.useState([]);return $.useEffect(()=>{let o=!1;return t2(n,e,t).then(u=>{o||a(u)}),()=>{o=!0}},[n,e,t]),i}function f2({page:n,matches:e,...t}){let i=za(),{manifest:a,routeModules:o}=JS(),{loaderData:u,matches:f}=l2(),m=$.useMemo(()=>XT(n,e,f,a,i,"data"),[n,e,f,a,i]),p=$.useMemo(()=>XT(n,e,f,a,i,"assets"),[n,e,f,a,i]),y=$.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let S=new Set,D=!1;if(e.forEach(P=>{var H;let z=a.routes[P.route.id];!z||!z.hasLoader||(!m.some(G=>G.route.id===P.route.id)&&P.route.id in u&&((H=o[P.route.id])!=null&&H.shouldRevalidate)||z.hasClientLoader?D=!0:S.add(P.route.id))}),S.size===0)return[];let U=a2(n);return D&&S.size>0&&U.searchParams.set("_routes",e.filter(P=>S.has(P.route.id)).map(P=>P.route.id).join(",")),[U.pathname+U.search]},[u,i,a,m,e,n,o]),E=$.useMemo(()=>n2(p,a),[p,a]),w=h2(p);return $.createElement($.Fragment,null,y.map(S=>$.createElement("link",{key:S,rel:"prefetch",as:"fetch",href:S,...t})),E.map(S=>$.createElement("link",{key:S,rel:"modulepreload",href:S,...t})),w.map(({key:S,link:D})=>$.createElement("link",{key:S,...D})))}function d2(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var ZS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ZS&&(window.__reactRouterVersion="7.1.5")}catch{}function m2({basename:n,children:e,window:t}){let i=$.useRef();i.current==null&&(i.current=tx({window:t,v5Compat:!0}));let a=i.current,[o,u]=$.useState({action:a.action,location:a.location}),f=$.useCallback(m=>{$.startTransition(()=>u(m))},[u]);return $.useLayoutEffect(()=>a.listen(f),[a,f]),$.createElement(qx,{basename:n,children:e,location:o.location,navigationType:o.action,navigator:a})}var eA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wu=$.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:o,replace:u,state:f,target:m,to:p,preventScrollReset:y,viewTransition:E,...w},S){let{basename:D}=$.useContext(Gi),U=typeof p=="string"&&eA.test(p),P,z=!1;if(typeof p=="string"&&U&&(P=p,ZS))try{let b=new URL(window.location.href),x=p.startsWith("//")?new URL(b.protocol+p):new URL(p),k=Ms(x.pathname,D);x.origin===b.origin&&k!=null?p=k+x.search+x.hash:z=!0}catch{zi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let H=Rx(p,{relative:a}),[G,ne,se]=u2(i,w),W=y2(p,{replace:u,state:f,target:m,preventScrollReset:y,relative:a,viewTransition:E});function O(b){e&&e(b),b.defaultPrevented||W(b)}let I=$.createElement("a",{...w,...se,href:P||H,onClick:z||o?e:O,ref:d2(S,ne),target:m,"data-discover":!U&&t==="render"?"true":void 0});return G&&!U?$.createElement($.Fragment,null,I,$.createElement(c2,{page:H})):I});Wu.displayName="Link";var p2=$.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:o,to:u,viewTransition:f,children:m,...p},y){let E=Rc(u,{relative:p.relative}),w=za(),S=$.useContext(Ed),{navigator:D,basename:U}=$.useContext(Gi),P=S!=null&&b2(E)&&f===!0,z=D.encodeLocation?D.encodeLocation(E).pathname:E.pathname,H=w.pathname,G=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;t||(H=H.toLowerCase(),G=G?G.toLowerCase():null,z=z.toLowerCase()),G&&U&&(G=Ms(G,U)||G);const ne=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let se=H===z||!a&&H.startsWith(z)&&H.charAt(ne)==="/",W=G!=null&&(G===z||!a&&G.startsWith(z)&&G.charAt(z.length)==="/"),O={isActive:se,isPending:W,isTransitioning:P},I=se?e:void 0,b;typeof i=="function"?b=i(O):b=[i,se?"active":null,W?"pending":null,P?"transitioning":null].filter(Boolean).join(" ");let x=typeof o=="function"?o(O):o;return $.createElement(Wu,{...p,"aria-current":I,className:b,ref:y,style:x,to:u,viewTransition:f},typeof m=="function"?m(O):m)});p2.displayName="NavLink";var g2=$.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:o,method:u=wf,action:f,onSubmit:m,relative:p,preventScrollReset:y,viewTransition:E,...w},S)=>{let D=T2(),U=w2(f,{relative:p}),P=u.toLowerCase()==="get"?"get":"post",z=typeof f=="string"&&eA.test(f),H=G=>{if(m&&m(G),G.defaultPrevented)return;G.preventDefault();let ne=G.nativeEvent.submitter,se=(ne==null?void 0:ne.getAttribute("formmethod"))||u;D(ne||G.currentTarget,{fetcherKey:e,method:se,navigate:t,replace:a,state:o,relative:p,preventScrollReset:y,viewTransition:E})};return $.createElement("form",{ref:S,method:P,action:U,onSubmit:i?m:H,...w,"data-discover":!z&&n==="render"?"true":void 0})});g2.displayName="Form";function _2(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tA(n){let e=$.useContext(vl);return gt(e,_2(n)),e}function y2(n,{target:e,replace:t,state:i,preventScrollReset:a,relative:o,viewTransition:u}={}){let f=El(),m=za(),p=Rc(n,{relative:o});return $.useCallback(y=>{if(Yx(y,e)){y.preventDefault();let E=t!==void 0?t:lc(m)===lc(p);f(n,{replace:E,state:i,preventScrollReset:a,relative:o,viewTransition:u})}},[m,f,p,t,i,e,n,a,o,u])}var v2=0,E2=()=>`__${String(++v2)}__`;function T2(){let{router:n}=tA("useSubmit"),{basename:e}=$.useContext(Gi),t=jx();return $.useCallback(async(i,a={})=>{let{action:o,method:u,encType:f,formData:m,body:p}=Jx(i,e);if(a.navigate===!1){let y=a.fetcherKey||E2();await n.fetch(y,t,a.action||o,{preventScrollReset:a.preventScrollReset,formData:m,body:p,formMethod:a.method||u,formEncType:a.encType||f,flushSync:a.flushSync})}else await n.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:m,body:p,formMethod:a.method||u,formEncType:a.encType||f,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function w2(n,{relative:e}={}){let{basename:t}=$.useContext(Gi),i=$.useContext(Ki);gt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),o={...Rc(n||".",{relative:e})},u=za();if(n==null){o.search=u.search;let f=new URLSearchParams(o.search),m=f.getAll("index");if(m.some(y=>y==="")){f.delete("index"),m.filter(E=>E).forEach(E=>f.append("index",E));let y=f.toString();o.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Ir([t,o.pathname])),lc(o)}function b2(n,e={}){let t=$.useContext(QS);gt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=tA("useViewTransitionState"),a=Rc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let o=Ms(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=Ms(t.nextLocation.pathname,i)||t.nextLocation.pathname;return Lf(a.pathname,u)!=null||Lf(a.pathname,o)!=null}new TextEncoder;var JT={};/**
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
 */const nA={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ae=function(n,e){if(!n)throw Tl(e)},Tl=function(n){return new Error("Firebase Database ("+nA.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const iA=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},S2=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const o=n[t++];e[i++]=String.fromCharCode((a&31)<<6|o&63)}else if(a>239&&a<365){const o=n[t++],u=n[t++],f=n[t++],m=((a&7)<<18|(o&63)<<12|(u&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const o=n[t++],u=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(o&63)<<6|u&63)}}return e.join("")},Z_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const o=n[a],u=a+1<n.length,f=u?n[a+1]:0,m=a+2<n.length,p=m?n[a+2]:0,y=o>>2,E=(o&3)<<4|f>>4;let w=(f&15)<<2|p>>6,S=p&63;m||(S=64,u||(w=64)),i.push(t[y],t[E],t[w],t[S])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(iA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):S2(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const o=t[n.charAt(a++)],f=a<n.length?t[n.charAt(a)]:0;++a;const p=a<n.length?t[n.charAt(a)]:64;++a;const E=a<n.length?t[n.charAt(a)]:64;if(++a,o==null||f==null||p==null||E==null)throw new A2;const w=o<<2|f>>4;if(i.push(w),p!==64){const S=f<<4&240|p>>2;if(i.push(S),E!==64){const D=p<<6&192|E;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class A2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rA=function(n){const e=iA(n);return Z_.encodeByteArray(e,!0)},Vf=function(n){return rA(n).replace(/\./g,"")},Uf=function(n){try{return Z_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function C2(n){return sA(void 0,n)}function sA(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!R2(t)||(n[t]=sA(n[t],e[t]));return n}function R2(n){return n!=="__proto__"}/**
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
 */function I2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const N2=()=>I2().__FIREBASE_DEFAULTS__,x2=()=>{if(typeof process>"u"||typeof JT>"u")return;const n=JT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},D2=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Uf(n[1]);return e&&JSON.parse(e)},wd=()=>{try{return N2()||x2()||D2()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},aA=n=>{var e,t;return(t=(e=wd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},oA=n=>{const e=aA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},lA=()=>{var n;return(n=wd())===null||n===void 0?void 0:n.config},uA=n=>{var e;return(e=wd())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function cA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Vf(JSON.stringify(t)),Vf(JSON.stringify(u)),""].join(".")}/**
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
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ey(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function O2(){var n;const e=(n=wd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function k2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M2(){const n=dn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function P2(){return nA.NODE_ADMIN===!0}function L2(){return!O2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dA(){try{return typeof indexedDB=="object"}catch{return!1}}function mA(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var o;e(((o=a.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function V2(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const U2="FirebaseError";class yi extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=U2,Object.setPrototypeOf(this,yi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fa.prototype.create)}}class Fa{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,o=this.errors[e],u=o?j2(o,i):"Error",f=`${this.serviceName}: ${u} (${a}).`;return new yi(a,f,i)}}function j2(n,e){return n.replace(B2,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const B2=/\{\$([^}]+)}/g;/**
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
 */function uc(n){return JSON.parse(n)}function Ut(n){return JSON.stringify(n)}/**
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
 */const pA=function(n){let e={},t={},i={},a="";try{const o=n.split(".");e=uc(Uf(o[0])||""),t=uc(Uf(o[1])||""),a=o[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:a}},z2=function(n){const e=pA(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},F2=function(n){const e=pA(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Qi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function tl(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function r_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function jf(n,e,t){const i={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=e.call(t,n[a],a,n));return i}function nl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const o=n[a],u=e[a];if(ZT(o)&&ZT(u)){if(!nl(o,u))return!1}else if(o!==u)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function ZT(n){return n!==null&&typeof n=="object"}/**
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
 */class q2{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)i[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)i[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const w=i[E-3]^i[E-8]^i[E-14]^i[E-16];i[E]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],o=this.chain_[1],u=this.chain_[2],f=this.chain_[3],m=this.chain_[4],p,y;for(let E=0;E<80;E++){E<40?E<20?(p=f^o&(u^f),y=1518500249):(p=o^u^f,y=1859775393):E<60?(p=o&u|f&(o|u),y=2400959708):(p=o^u^f,y=3395469782);const w=(a<<5|a>>>27)+p+m+y+i[E]&4294967295;m=f,f=u,u=(o<<30|o>>>2)&4294967295,o=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let a=0;const o=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=i;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(o[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(o),u=0;break}}else for(;a<t;)if(o[u]=e[a],++u,++a,u===this.blockSize){this.compress_(o),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let o=24;o>=0;o-=8)e[i]=this.chain_[a]>>o&255,++i;return e}}function H2(n,e){const t=new G2(n,e);return t.subscribe.bind(t)}class G2{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");K2(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=fg),a.error===void 0&&(a.error=fg),a.complete===void 0&&(a.complete=fg);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K2(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fg(){}function ty(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Q2=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);if(a>=55296&&a<=56319){const o=a-55296;i++,ae(i<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(i)-56320;a=65536+(o<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Sd=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const $2=1e3,Y2=2,W2=4*60*60*1e3,X2=.5;function ew(n,e=$2,t=Y2){const i=e*Math.pow(t,n),a=Math.round(X2*i*(Math.random()-.5)*2);return Math.min(W2,i+a)}/**
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
 */class J2{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new bd;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(o){if(a)return null;throw o}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eD(e))try{this.getOrInitializeService({instanceIdentifier:Aa})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:a});i.resolve(o)}catch{}}}}clearInstance(e=Aa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Aa){return this.instances.has(e)}getOptions(e=Aa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,u]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(o);i===f&&u.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),o=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;o.add(e),this.onInitCallbacks.set(a,o);const u=this.instances.get(a);return u&&e(u,a),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Z2(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Aa){return this.component?this.component.multipleInstances?e:Aa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z2(n){return n===Aa?void 0:n}function eD(n){return n.instantiationMode==="EAGER"}/**
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
 */class tD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new J2(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const nD={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},iD=Le.INFO,rD={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},sD=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=rD[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=iD,this._logHandler=sD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const aD=(n,e)=>e.some(t=>n instanceof t);let tw,nw;function oD(){return tw||(tw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lD(){return nw||(nw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gA=new WeakMap,s_=new WeakMap,_A=new WeakMap,dg=new WeakMap,ny=new WeakMap;function uD(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{t(Rs(n.result)),a()},u=()=>{i(n.error),a()};n.addEventListener("success",o),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&gA.set(t,n)}).catch(()=>{}),ny.set(e,n),e}function cD(n){if(s_.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{t(),a()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});s_.set(n,e)}let a_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return s_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_A.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hD(n){a_=n(a_)}function fD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(mg(this),e,...t);return _A.set(i,e.sort?e.sort():[e]),Rs(i)}:lD().includes(n)?function(...e){return n.apply(mg(this),e),Rs(gA.get(this))}:function(...e){return Rs(n.apply(mg(this),e))}}function dD(n){return typeof n=="function"?fD(n):(n instanceof IDBTransaction&&cD(n),aD(n,oD())?new Proxy(n,a_):n)}function Rs(n){if(n instanceof IDBRequest)return uD(n);if(dg.has(n))return dg.get(n);const e=dD(n);return e!==n&&(dg.set(n,e),ny.set(e,n)),e}const mg=n=>ny.get(n);function yA(n,e,{blocked:t,upgrade:i,blocking:a,terminated:o}={}){const u=indexedDB.open(n,e),f=Rs(u);return i&&u.addEventListener("upgradeneeded",m=>{i(Rs(u.result),m.oldVersion,m.newVersion,Rs(u.transaction),m)}),t&&u.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{o&&m.addEventListener("close",()=>o()),a&&m.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),f}const mD=["get","getKey","getAll","getAllKeys","count"],pD=["put","add","delete","clear"],pg=new Map;function iw(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(pg.get(e))return pg.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=pD.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||mD.includes(t)))return;const o=async function(u,...f){const m=this.transaction(u,a?"readwrite":"readonly");let p=m.store;return i&&(p=p.index(f.shift())),(await Promise.all([p[t](...f),a&&m.done]))[0]};return pg.set(e,o),o}hD(n=>({...n,get:(e,t,i)=>iw(e,t)||n.get(e,t,i),has:(e,t)=>!!iw(e,t)||n.has(e,t)}));/**
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
 */class gD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_D(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function _D(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const o_="@firebase/app",rw="0.11.1";/**
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
 */const Dr=new Ic("@firebase/app"),yD="@firebase/app-compat",vD="@firebase/analytics-compat",ED="@firebase/analytics",TD="@firebase/app-check-compat",wD="@firebase/app-check",bD="@firebase/auth",SD="@firebase/auth-compat",AD="@firebase/database",CD="@firebase/data-connect",RD="@firebase/database-compat",ID="@firebase/functions",ND="@firebase/functions-compat",xD="@firebase/installations",DD="@firebase/installations-compat",OD="@firebase/messaging",kD="@firebase/messaging-compat",MD="@firebase/performance",PD="@firebase/performance-compat",LD="@firebase/remote-config",VD="@firebase/remote-config-compat",UD="@firebase/storage",jD="@firebase/storage-compat",BD="@firebase/firestore",zD="@firebase/vertexai",FD="@firebase/firestore-compat",qD="firebase",HD="11.3.1";/**
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
 */const l_="[DEFAULT]",GD={[o_]:"fire-core",[yD]:"fire-core-compat",[ED]:"fire-analytics",[vD]:"fire-analytics-compat",[wD]:"fire-app-check",[TD]:"fire-app-check-compat",[bD]:"fire-auth",[SD]:"fire-auth-compat",[AD]:"fire-rtdb",[CD]:"fire-data-connect",[RD]:"fire-rtdb-compat",[ID]:"fire-fn",[ND]:"fire-fn-compat",[xD]:"fire-iid",[DD]:"fire-iid-compat",[OD]:"fire-fcm",[kD]:"fire-fcm-compat",[MD]:"fire-perf",[PD]:"fire-perf-compat",[LD]:"fire-rc",[VD]:"fire-rc-compat",[UD]:"fire-gcs",[jD]:"fire-gcs-compat",[BD]:"fire-fst",[FD]:"fire-fst-compat",[zD]:"fire-vertex","fire-js":"fire-js",[qD]:"fire-js-all"};/**
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
 */const Bf=new Map,KD=new Map,u_=new Map;function sw(n,e){try{n.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gi(n){const e=n.name;if(u_.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;u_.set(e,n);for(const t of Bf.values())sw(t,n);for(const t of KD.values())sw(t,n);return!0}function Hs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ii(n){return n==null?!1:n.settings!==void 0}/**
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
 */const QD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Is=new Fa("app","Firebase",QD);/**
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
 */class $D{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
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
 */const qa=HD;function vA(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:l_,automaticDataCollectionEnabled:!1},e),a=i.name;if(typeof a!="string"||!a)throw Is.create("bad-app-name",{appName:String(a)});if(t||(t=lA()),!t)throw Is.create("no-options");const o=Bf.get(a);if(o){if(nl(t,o.options)&&nl(i,o.config))return o;throw Is.create("duplicate-app",{appName:a})}const u=new tD(a);for(const m of u_.values())u.addComponent(m);const f=new $D(t,i,u);return Bf.set(a,f),f}function Ad(n=l_){const e=Bf.get(n);if(!e&&n===l_&&lA())return vA();if(!e)throw Is.create("no-app",{appName:n});return e}function In(n,e,t){var i;let a=(i=GD[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const o=a.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const f=[`Unable to register library "${a}" with version "${e}":`];o&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(f.join(" "));return}gi(new si(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const YD="firebase-heartbeat-database",WD=1,cc="firebase-heartbeat-store";let gg=null;function EA(){return gg||(gg=yA(YD,WD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(cc)}catch(t){console.warn(t)}}}}).catch(n=>{throw Is.create("idb-open",{originalErrorMessage:n.message})})),gg}async function XD(n){try{const t=(await EA()).transaction(cc),i=await t.objectStore(cc).get(TA(n));return await t.done,i}catch(e){if(e instanceof yi)Dr.warn(e.message);else{const t=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(t.message)}}}async function aw(n,e){try{const i=(await EA()).transaction(cc,"readwrite");await i.objectStore(cc).put(e,TA(n)),await i.done}catch(t){if(t instanceof yi)Dr.warn(t.message);else{const i=Is.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(i.message)}}}function TA(n){return`${n.name}!${n.options.appId}`}/**
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
 */const JD=1024,ZD=30;class eO{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nO(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ow();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:a}),this._heartbeatsCache.heartbeats.length>ZD){const u=iO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Dr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ow(),{heartbeatsToSend:i,unsentEntries:a}=tO(this._heartbeatsCache.heartbeats),o=Vf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Dr.warn(t),""}}}function ow(){return new Date().toISOString().substring(0,10)}function tO(n,e=JD){const t=[];let i=n.slice();for(const a of n){const o=t.find(u=>u.agent===a.agent);if(o){if(o.dates.push(a.date),lw(t)>e){o.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),lw(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class nO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dA()?mA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await XD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return aw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return aw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function lw(n){return Vf(JSON.stringify({version:2,heartbeats:n})).length}function iO(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function rO(n){gi(new si("platform-logger",e=>new gD(e),"PRIVATE")),gi(new si("heartbeat",e=>new eO(e),"PRIVATE")),In(o_,rw,n),In(o_,rw,"esm2017"),In("fire-js","")}rO("");var uw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ns,wA;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,I){function b(){}b.prototype=I.prototype,O.D=I.prototype,O.prototype=new b,O.prototype.constructor=O,O.C=function(x,k,L){for(var N=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)N[pe-2]=arguments[pe];return I.prototype[k].apply(x,N)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(O,I,b){b||(b=0);var x=Array(16);if(typeof I=="string")for(var k=0;16>k;++k)x[k]=I.charCodeAt(b++)|I.charCodeAt(b++)<<8|I.charCodeAt(b++)<<16|I.charCodeAt(b++)<<24;else for(k=0;16>k;++k)x[k]=I[b++]|I[b++]<<8|I[b++]<<16|I[b++]<<24;I=O.g[0],b=O.g[1],k=O.g[2];var L=O.g[3],N=I+(L^b&(k^L))+x[0]+3614090360&4294967295;I=b+(N<<7&4294967295|N>>>25),N=L+(k^I&(b^k))+x[1]+3905402710&4294967295,L=I+(N<<12&4294967295|N>>>20),N=k+(b^L&(I^b))+x[2]+606105819&4294967295,k=L+(N<<17&4294967295|N>>>15),N=b+(I^k&(L^I))+x[3]+3250441966&4294967295,b=k+(N<<22&4294967295|N>>>10),N=I+(L^b&(k^L))+x[4]+4118548399&4294967295,I=b+(N<<7&4294967295|N>>>25),N=L+(k^I&(b^k))+x[5]+1200080426&4294967295,L=I+(N<<12&4294967295|N>>>20),N=k+(b^L&(I^b))+x[6]+2821735955&4294967295,k=L+(N<<17&4294967295|N>>>15),N=b+(I^k&(L^I))+x[7]+4249261313&4294967295,b=k+(N<<22&4294967295|N>>>10),N=I+(L^b&(k^L))+x[8]+1770035416&4294967295,I=b+(N<<7&4294967295|N>>>25),N=L+(k^I&(b^k))+x[9]+2336552879&4294967295,L=I+(N<<12&4294967295|N>>>20),N=k+(b^L&(I^b))+x[10]+4294925233&4294967295,k=L+(N<<17&4294967295|N>>>15),N=b+(I^k&(L^I))+x[11]+2304563134&4294967295,b=k+(N<<22&4294967295|N>>>10),N=I+(L^b&(k^L))+x[12]+1804603682&4294967295,I=b+(N<<7&4294967295|N>>>25),N=L+(k^I&(b^k))+x[13]+4254626195&4294967295,L=I+(N<<12&4294967295|N>>>20),N=k+(b^L&(I^b))+x[14]+2792965006&4294967295,k=L+(N<<17&4294967295|N>>>15),N=b+(I^k&(L^I))+x[15]+1236535329&4294967295,b=k+(N<<22&4294967295|N>>>10),N=I+(k^L&(b^k))+x[1]+4129170786&4294967295,I=b+(N<<5&4294967295|N>>>27),N=L+(b^k&(I^b))+x[6]+3225465664&4294967295,L=I+(N<<9&4294967295|N>>>23),N=k+(I^b&(L^I))+x[11]+643717713&4294967295,k=L+(N<<14&4294967295|N>>>18),N=b+(L^I&(k^L))+x[0]+3921069994&4294967295,b=k+(N<<20&4294967295|N>>>12),N=I+(k^L&(b^k))+x[5]+3593408605&4294967295,I=b+(N<<5&4294967295|N>>>27),N=L+(b^k&(I^b))+x[10]+38016083&4294967295,L=I+(N<<9&4294967295|N>>>23),N=k+(I^b&(L^I))+x[15]+3634488961&4294967295,k=L+(N<<14&4294967295|N>>>18),N=b+(L^I&(k^L))+x[4]+3889429448&4294967295,b=k+(N<<20&4294967295|N>>>12),N=I+(k^L&(b^k))+x[9]+568446438&4294967295,I=b+(N<<5&4294967295|N>>>27),N=L+(b^k&(I^b))+x[14]+3275163606&4294967295,L=I+(N<<9&4294967295|N>>>23),N=k+(I^b&(L^I))+x[3]+4107603335&4294967295,k=L+(N<<14&4294967295|N>>>18),N=b+(L^I&(k^L))+x[8]+1163531501&4294967295,b=k+(N<<20&4294967295|N>>>12),N=I+(k^L&(b^k))+x[13]+2850285829&4294967295,I=b+(N<<5&4294967295|N>>>27),N=L+(b^k&(I^b))+x[2]+4243563512&4294967295,L=I+(N<<9&4294967295|N>>>23),N=k+(I^b&(L^I))+x[7]+1735328473&4294967295,k=L+(N<<14&4294967295|N>>>18),N=b+(L^I&(k^L))+x[12]+2368359562&4294967295,b=k+(N<<20&4294967295|N>>>12),N=I+(b^k^L)+x[5]+4294588738&4294967295,I=b+(N<<4&4294967295|N>>>28),N=L+(I^b^k)+x[8]+2272392833&4294967295,L=I+(N<<11&4294967295|N>>>21),N=k+(L^I^b)+x[11]+1839030562&4294967295,k=L+(N<<16&4294967295|N>>>16),N=b+(k^L^I)+x[14]+4259657740&4294967295,b=k+(N<<23&4294967295|N>>>9),N=I+(b^k^L)+x[1]+2763975236&4294967295,I=b+(N<<4&4294967295|N>>>28),N=L+(I^b^k)+x[4]+1272893353&4294967295,L=I+(N<<11&4294967295|N>>>21),N=k+(L^I^b)+x[7]+4139469664&4294967295,k=L+(N<<16&4294967295|N>>>16),N=b+(k^L^I)+x[10]+3200236656&4294967295,b=k+(N<<23&4294967295|N>>>9),N=I+(b^k^L)+x[13]+681279174&4294967295,I=b+(N<<4&4294967295|N>>>28),N=L+(I^b^k)+x[0]+3936430074&4294967295,L=I+(N<<11&4294967295|N>>>21),N=k+(L^I^b)+x[3]+3572445317&4294967295,k=L+(N<<16&4294967295|N>>>16),N=b+(k^L^I)+x[6]+76029189&4294967295,b=k+(N<<23&4294967295|N>>>9),N=I+(b^k^L)+x[9]+3654602809&4294967295,I=b+(N<<4&4294967295|N>>>28),N=L+(I^b^k)+x[12]+3873151461&4294967295,L=I+(N<<11&4294967295|N>>>21),N=k+(L^I^b)+x[15]+530742520&4294967295,k=L+(N<<16&4294967295|N>>>16),N=b+(k^L^I)+x[2]+3299628645&4294967295,b=k+(N<<23&4294967295|N>>>9),N=I+(k^(b|~L))+x[0]+4096336452&4294967295,I=b+(N<<6&4294967295|N>>>26),N=L+(b^(I|~k))+x[7]+1126891415&4294967295,L=I+(N<<10&4294967295|N>>>22),N=k+(I^(L|~b))+x[14]+2878612391&4294967295,k=L+(N<<15&4294967295|N>>>17),N=b+(L^(k|~I))+x[5]+4237533241&4294967295,b=k+(N<<21&4294967295|N>>>11),N=I+(k^(b|~L))+x[12]+1700485571&4294967295,I=b+(N<<6&4294967295|N>>>26),N=L+(b^(I|~k))+x[3]+2399980690&4294967295,L=I+(N<<10&4294967295|N>>>22),N=k+(I^(L|~b))+x[10]+4293915773&4294967295,k=L+(N<<15&4294967295|N>>>17),N=b+(L^(k|~I))+x[1]+2240044497&4294967295,b=k+(N<<21&4294967295|N>>>11),N=I+(k^(b|~L))+x[8]+1873313359&4294967295,I=b+(N<<6&4294967295|N>>>26),N=L+(b^(I|~k))+x[15]+4264355552&4294967295,L=I+(N<<10&4294967295|N>>>22),N=k+(I^(L|~b))+x[6]+2734768916&4294967295,k=L+(N<<15&4294967295|N>>>17),N=b+(L^(k|~I))+x[13]+1309151649&4294967295,b=k+(N<<21&4294967295|N>>>11),N=I+(k^(b|~L))+x[4]+4149444226&4294967295,I=b+(N<<6&4294967295|N>>>26),N=L+(b^(I|~k))+x[11]+3174756917&4294967295,L=I+(N<<10&4294967295|N>>>22),N=k+(I^(L|~b))+x[2]+718787259&4294967295,k=L+(N<<15&4294967295|N>>>17),N=b+(L^(k|~I))+x[9]+3951481745&4294967295,O.g[0]=O.g[0]+I&4294967295,O.g[1]=O.g[1]+(k+(N<<21&4294967295|N>>>11))&4294967295,O.g[2]=O.g[2]+k&4294967295,O.g[3]=O.g[3]+L&4294967295}i.prototype.u=function(O,I){I===void 0&&(I=O.length);for(var b=I-this.blockSize,x=this.B,k=this.h,L=0;L<I;){if(k==0)for(;L<=b;)a(this,O,L),L+=this.blockSize;if(typeof O=="string"){for(;L<I;)if(x[k++]=O.charCodeAt(L++),k==this.blockSize){a(this,x),k=0;break}}else for(;L<I;)if(x[k++]=O[L++],k==this.blockSize){a(this,x),k=0;break}}this.h=k,this.o+=I},i.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var I=1;I<O.length-8;++I)O[I]=0;var b=8*this.o;for(I=O.length-8;I<O.length;++I)O[I]=b&255,b/=256;for(this.u(O),O=Array(16),I=b=0;4>I;++I)for(var x=0;32>x;x+=8)O[b++]=this.g[I]>>>x&255;return O};function o(O,I){var b=f;return Object.prototype.hasOwnProperty.call(b,O)?b[O]:b[O]=I(O)}function u(O,I){this.h=I;for(var b=[],x=!0,k=O.length-1;0<=k;k--){var L=O[k]|0;x&&L==I||(b[k]=L,x=!1)}this.g=b}var f={};function m(O){return-128<=O&&128>O?o(O,function(I){return new u([I|0],0>I?-1:0)}):new u([O|0],0>O?-1:0)}function p(O){if(isNaN(O)||!isFinite(O))return E;if(0>O)return P(p(-O));for(var I=[],b=1,x=0;O>=b;x++)I[x]=O/b|0,b*=4294967296;return new u(I,0)}function y(O,I){if(O.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(O.charAt(0)=="-")return P(y(O.substring(1),I));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=p(Math.pow(I,8)),x=E,k=0;k<O.length;k+=8){var L=Math.min(8,O.length-k),N=parseInt(O.substring(k,k+L),I);8>L?(L=p(Math.pow(I,L)),x=x.j(L).add(p(N))):(x=x.j(b),x=x.add(p(N)))}return x}var E=m(0),w=m(1),S=m(16777216);n=u.prototype,n.m=function(){if(U(this))return-P(this).m();for(var O=0,I=1,b=0;b<this.g.length;b++){var x=this.i(b);O+=(0<=x?x:4294967296+x)*I,I*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(D(this))return"0";if(U(this))return"-"+P(this).toString(O);for(var I=p(Math.pow(O,6)),b=this,x="";;){var k=ne(b,I).g;b=z(b,k.j(I));var L=((0<b.g.length?b.g[0]:b.h)>>>0).toString(O);if(b=k,D(b))return L+x;for(;6>L.length;)L="0"+L;x=L+x}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function D(O){if(O.h!=0)return!1;for(var I=0;I<O.g.length;I++)if(O.g[I]!=0)return!1;return!0}function U(O){return O.h==-1}n.l=function(O){return O=z(this,O),U(O)?-1:D(O)?0:1};function P(O){for(var I=O.g.length,b=[],x=0;x<I;x++)b[x]=~O.g[x];return new u(b,~O.h).add(w)}n.abs=function(){return U(this)?P(this):this},n.add=function(O){for(var I=Math.max(this.g.length,O.g.length),b=[],x=0,k=0;k<=I;k++){var L=x+(this.i(k)&65535)+(O.i(k)&65535),N=(L>>>16)+(this.i(k)>>>16)+(O.i(k)>>>16);x=N>>>16,L&=65535,N&=65535,b[k]=N<<16|L}return new u(b,b[b.length-1]&-2147483648?-1:0)};function z(O,I){return O.add(P(I))}n.j=function(O){if(D(this)||D(O))return E;if(U(this))return U(O)?P(this).j(P(O)):P(P(this).j(O));if(U(O))return P(this.j(P(O)));if(0>this.l(S)&&0>O.l(S))return p(this.m()*O.m());for(var I=this.g.length+O.g.length,b=[],x=0;x<2*I;x++)b[x]=0;for(x=0;x<this.g.length;x++)for(var k=0;k<O.g.length;k++){var L=this.i(x)>>>16,N=this.i(x)&65535,pe=O.i(k)>>>16,tt=O.i(k)&65535;b[2*x+2*k]+=N*tt,H(b,2*x+2*k),b[2*x+2*k+1]+=L*tt,H(b,2*x+2*k+1),b[2*x+2*k+1]+=N*pe,H(b,2*x+2*k+1),b[2*x+2*k+2]+=L*pe,H(b,2*x+2*k+2)}for(x=0;x<I;x++)b[x]=b[2*x+1]<<16|b[2*x];for(x=I;x<2*I;x++)b[x]=0;return new u(b,0)};function H(O,I){for(;(O[I]&65535)!=O[I];)O[I+1]+=O[I]>>>16,O[I]&=65535,I++}function G(O,I){this.g=O,this.h=I}function ne(O,I){if(D(I))throw Error("division by zero");if(D(O))return new G(E,E);if(U(O))return I=ne(P(O),I),new G(P(I.g),P(I.h));if(U(I))return I=ne(O,P(I)),new G(P(I.g),I.h);if(30<O.g.length){if(U(O)||U(I))throw Error("slowDivide_ only works with positive integers.");for(var b=w,x=I;0>=x.l(O);)b=se(b),x=se(x);var k=W(b,1),L=W(x,1);for(x=W(x,2),b=W(b,2);!D(x);){var N=L.add(x);0>=N.l(O)&&(k=k.add(b),L=N),x=W(x,1),b=W(b,1)}return I=z(O,k.j(I)),new G(k,I)}for(k=E;0<=O.l(I);){for(b=Math.max(1,Math.floor(O.m()/I.m())),x=Math.ceil(Math.log(b)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),L=p(b),N=L.j(I);U(N)||0<N.l(O);)b-=x,L=p(b),N=L.j(I);D(L)&&(L=w),k=k.add(L),O=z(O,N)}return new G(k,O)}n.A=function(O){return ne(this,O).h},n.and=function(O){for(var I=Math.max(this.g.length,O.g.length),b=[],x=0;x<I;x++)b[x]=this.i(x)&O.i(x);return new u(b,this.h&O.h)},n.or=function(O){for(var I=Math.max(this.g.length,O.g.length),b=[],x=0;x<I;x++)b[x]=this.i(x)|O.i(x);return new u(b,this.h|O.h)},n.xor=function(O){for(var I=Math.max(this.g.length,O.g.length),b=[],x=0;x<I;x++)b[x]=this.i(x)^O.i(x);return new u(b,this.h^O.h)};function se(O){for(var I=O.g.length+1,b=[],x=0;x<I;x++)b[x]=O.i(x)<<1|O.i(x-1)>>>31;return new u(b,O.h)}function W(O,I){var b=I>>5;I%=32;for(var x=O.g.length-b,k=[],L=0;L<x;L++)k[L]=0<I?O.i(L+b)>>>I|O.i(L+b+1)<<32-I:O.i(L+b);return new u(k,O.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,wA=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=p,u.fromString=y,Ns=u}).apply(typeof uw<"u"?uw:typeof self<"u"?self:typeof window<"u"?window:{});var df=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bA,Ku,SA,Sf,c_,AA,CA,RA;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof df=="object"&&df];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var v=i;h=h.split(".");for(var R=0;R<h.length-1;R++){var q=h[R];if(!(q in v))break e;v=v[q]}h=h[h.length-1],R=v[h],_=_(R),_!=R&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function o(h,_){h instanceof String&&(h+="");var v=0,R=!1,q={next:function(){if(!R&&v<h.length){var Y=v++;return{value:_(Y,h[Y]),done:!1}}return R=!0,{done:!0,value:void 0}}};return q[Symbol.iterator]=function(){return q},q}a("Array.prototype.values",function(h){return h||function(){return o(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function p(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function E(h,_,v){if(!h)throw Error();if(2<arguments.length){var R=Array.prototype.slice.call(arguments,2);return function(){var q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(q,R),h.apply(_,q)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,w.apply(null,arguments)}function S(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var R=v.slice();return R.push.apply(R,arguments),h.apply(this,R)}}function D(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(R,q,Y){for(var oe=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)oe[Fe-2]=arguments[Fe];return _.prototype[q].apply(R,oe)}}function U(h){const _=h.length;if(0<_){const v=Array(_);for(let R=0;R<_;R++)v[R]=h[R];return v}return[]}function P(h,_){for(let v=1;v<arguments.length;v++){const R=arguments[v];if(m(R)){const q=h.length||0,Y=R.length||0;h.length=q+Y;for(let oe=0;oe<Y;oe++)h[q+oe]=R[oe]}else h.push(R)}}class z{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function H(h){return/^[\s\xa0]*$/.test(h)}function G(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function ne(h){return ne[" "](h),h}ne[" "]=function(){};var se=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function W(h,_,v){for(const R in h)_.call(v,h[R],R,h)}function O(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function I(h){const _={};for(const v in h)_[v]=h[v];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(h,_){let v,R;for(let q=1;q<arguments.length;q++){R=arguments[q];for(v in R)h[v]=R[v];for(let Y=0;Y<b.length;Y++)v=b[Y],Object.prototype.hasOwnProperty.call(R,v)&&(h[v]=R[v])}}function k(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function L(h){f.setTimeout(()=>{throw h},0)}function N(){var h=Qe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class pe{constructor(){this.h=this.g=null}add(_,v){const R=tt.get();R.set(_,v),this.h?this.h.next=R:this.g=R,this.h=R}}var tt=new z(()=>new le,h=>h.reset());class le{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,_e=!1,Qe=new pe,V=()=>{const h=f.Promise.resolve(void 0);Ee=()=>{h.then(re)}};var re=()=>{for(var h;h=N();){try{h.h.call(h.g)}catch(v){L(v)}var _=tt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}_e=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var ce=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};f.addEventListener("test",v,_),f.removeEventListener("test",v,_)}catch{}return h}();function Ce(h,_){if(ue.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,R=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(se){e:{try{ne(_.nodeName);var q=!0;break e}catch{}q=!1}q||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,R?(this.clientX=R.clientX!==void 0?R.clientX:R.pageX,this.clientY=R.clientY!==void 0?R.clientY:R.pageY,this.screenX=R.screenX||0,this.screenY=R.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Re[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ce.aa.h.call(this)}}D(Ce,ue);var Re={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Je="closure_listenable_"+(1e6*Math.random()|0),xe=0;function nt(h,_,v,R,q){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!R,this.ha=q,this.key=++xe,this.da=this.fa=!1}function Ke(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function mn(h){this.src=h,this.g={},this.h=0}mn.prototype.add=function(h,_,v,R,q){var Y=h.toString();h=this.g[Y],h||(h=this.g[Y]=[],this.h++);var oe=Bn(h,_,R,q);return-1<oe?(_=h[oe],v||(_.fa=!1)):(_=new nt(_,this.src,Y,!!R,q),_.fa=v,h.push(_)),_};function Yi(h,_){var v=_.type;if(v in h.g){var R=h.g[v],q=Array.prototype.indexOf.call(R,_,void 0),Y;(Y=0<=q)&&Array.prototype.splice.call(R,q,1),Y&&(Ke(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Bn(h,_,v,R){for(var q=0;q<h.length;++q){var Y=h[q];if(!Y.da&&Y.listener==_&&Y.capture==!!v&&Y.ha==R)return q}return-1}var Vr="closure_lm_"+(1e6*Math.random()|0),Ur={};function Wi(h,_,v,R,q){if(Array.isArray(_)){for(var Y=0;Y<_.length;Y++)Wi(h,_[Y],v,R,q);return null}return v=Hc(v),h&&h[Je]?h.K(_,v,p(R)?!!R.capture:!1,q):Ol(h,_,v,!1,R,q)}function Ol(h,_,v,R,q,Y){if(!_)throw Error("Invalid event type");var oe=p(q)?!!q.capture:!!q,Fe=kl(h);if(Fe||(h[Vr]=Fe=new mn(h)),v=Fe.add(_,v,R,oe,Y),v.proxy)return v;if(R=Xa(),v.proxy=R,R.src=h,R.listener=v,h.addEventListener)ce||(q=oe),q===void 0&&(q=!1),h.addEventListener(_.toString(),R,q);else if(h.attachEvent)h.attachEvent(Za(_.toString()),R);else if(h.addListener&&h.removeListener)h.addListener(R);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Xa(){function h(v){return _.call(h.src,h.listener,v)}const _=am;return h}function Ja(h,_,v,R,q){if(Array.isArray(_))for(var Y=0;Y<_.length;Y++)Ja(h,_[Y],v,R,q);else R=p(R)?!!R.capture:!!R,v=Hc(v),h&&h[Je]?(h=h.i,_=String(_).toString(),_ in h.g&&(Y=h.g[_],v=Bn(Y,v,R,q),-1<v&&(Ke(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete h.g[_],h.h--)))):h&&(h=kl(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Bn(_,v,R,q)),(v=-1<h?_[h]:null)&&Qs(v))}function Qs(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Je])Yi(_.i,h);else{var v=h.type,R=h.proxy;_.removeEventListener?_.removeEventListener(v,R,h.capture):_.detachEvent?_.detachEvent(Za(v),R):_.addListener&&_.removeListener&&_.removeListener(R),(v=kl(_))?(Yi(v,h),v.h==0&&(v.src=null,_[Vr]=null)):Ke(h)}}}function Za(h){return h in Ur?Ur[h]:Ur[h]="on"+h}function am(h,_){if(h.da)h=!0;else{_=new Ce(_,this);var v=h.listener,R=h.ha||h.src;h.fa&&Qs(h),h=v.call(R,_)}return h}function kl(h){return h=h[Vr],h instanceof mn?h:null}var wn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hc(h){return typeof h=="function"?h:(h[wn]||(h[wn]=function(_){return h.handleEvent(_)}),h[wn])}function Ot(){me.call(this),this.i=new mn(this),this.M=this,this.F=null}D(Ot,me),Ot.prototype[Je]=!0,Ot.prototype.removeEventListener=function(h,_,v,R){Ja(this,h,_,v,R)};function zt(h,_){var v,R=h.F;if(R)for(v=[];R;R=R.F)v.push(R);if(h=h.M,R=_.type||_,typeof _=="string")_=new ue(_,h);else if(_ instanceof ue)_.target=_.target||h;else{var q=_;_=new ue(R,h),x(_,q)}if(q=!0,v)for(var Y=v.length-1;0<=Y;Y--){var oe=_.g=v[Y];q=Xi(oe,R,!0,_)&&q}if(oe=_.g=h,q=Xi(oe,R,!0,_)&&q,q=Xi(oe,R,!1,_)&&q,v)for(Y=0;Y<v.length;Y++)oe=_.g=v[Y],q=Xi(oe,R,!1,_)&&q}Ot.prototype.N=function(){if(Ot.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],R=0;R<v.length;R++)Ke(v[R]);delete h.g[_],h.h--}}this.F=null},Ot.prototype.K=function(h,_,v,R){return this.i.add(String(h),_,!1,v,R)},Ot.prototype.L=function(h,_,v,R){return this.i.add(String(h),_,!0,v,R)};function Xi(h,_,v,R){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var q=!0,Y=0;Y<_.length;++Y){var oe=_[Y];if(oe&&!oe.da&&oe.capture==v){var Fe=oe.listener,Mt=oe.ha||oe.src;oe.fa&&Yi(h.i,oe),q=Fe.call(Mt,R)!==!1&&q}}return q&&!R.defaultPrevented}function Gc(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function Ml(h){h.g=Gc(()=>{h.g=null,h.i&&(h.i=!1,Ml(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class om extends me{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Ml(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $s(h){me.call(this),this.h=h,this.g={}}D($s,me);var jr=[];function on(h){W(h.g,function(_,v){this.g.hasOwnProperty(v)&&Qs(_)},h),h.g={}}$s.prototype.N=function(){$s.aa.N.call(this),on(this)},$s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pl=f.JSON.stringify,vi=f.JSON.parse,pn=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function Ll(){}Ll.prototype.h=null;function Kc(h){return h.h||(h.h=h.i())}function Qc(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){ue.call(this,"d")}D(Br,ue);function ai(){ue.call(this,"c")}D(ai,ue);var zn={},zr=null;function eo(){return zr=zr||new Ot}zn.La="serverreachability";function Vl(h){ue.call(this,zn.La,h)}D(Vl,ue);function Fr(h){const _=eo();zt(_,new Vl(_))}zn.STAT_EVENT="statevent";function to(h,_){ue.call(this,zn.STAT_EVENT,h),this.stat=_}D(to,ue);function bt(h){const _=eo();zt(_,new to(_,h))}zn.Ma="timingevent";function $c(h,_){ue.call(this,zn.Ma,h),this.size=_}D($c,ue);function qr(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function Hr(){this.g=!0}Hr.prototype.xa=function(){this.g=!1};function Yc(h,_,v,R,q,Y){h.info(function(){if(h.g)if(Y)for(var oe="",Fe=Y.split("&"),Mt=0;Mt<Fe.length;Mt++){var qe=Fe[Mt].split("=");if(1<qe.length){var Ht=qe[0];qe=qe[1];var Pt=Ht.split("_");oe=2<=Pt.length&&Pt[1]=="type"?oe+(Ht+"="+qe+"&"):oe+(Ht+"=redacted&")}}else oe=null;else oe=Y;return"XMLHTTP REQ ("+R+") [attempt "+q+"]: "+_+`
`+v+`
`+oe})}function Wc(h,_,v,R,q,Y,oe){h.info(function(){return"XMLHTTP RESP ("+R+") [ attempt "+q+"]: "+_+`
`+v+`
`+Y+" "+oe})}function Gr(h,_,v,R){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Ft(h,v)+(R?" "+R:"")})}function Ti(h,_){h.info(function(){return"TIMEOUT: "+_})}Hr.prototype.info=function(){};function Ft(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var R=v[h];if(!(2>R.length)){var q=R[1];if(Array.isArray(q)&&!(1>q.length)){var Y=q[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var oe=1;oe<q.length;oe++)q[oe]=""}}}}return Pl(v)}catch{return _}}var kt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ys;function no(){}D(no,Ll),no.prototype.g=function(){return new XMLHttpRequest},no.prototype.i=function(){return{}},Ys=new no;function wi(h,_,v,R){this.j=h,this.i=_,this.l=v,this.R=R||1,this.U=new $s(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ul}function Ul(){this.i=null,this.g="",this.h=!1}var Kr={},Ws={};function oi(h,_,v){h.L=1,h.v=Zs(_t(_)),h.m=v,h.P=!0,Zi(h,null)}function Zi(h,_){h.F=Date.now(),dt(h),h.A=_t(h.v);var v=h.A,R=h.R;Array.isArray(R)||(R=[String(R)]),nr(v.i,"t",R),h.C=0,v=h.j.J,h.h=new Ul,h.g=ch(h.j,v?_:null,!h.m),0<h.O&&(h.M=new om(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,R=h.ca;var q="readystatechange";Array.isArray(q)||(q&&(jr[0]=q.toString()),q=jr);for(var Y=0;Y<q.length;Y++){var oe=Wi(v,q[Y],R||_.handleEvent,!1,_.h||_);if(!oe)break;_.g[oe.key]=oe}_=h.H?I(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Fr(),Yc(h.i,h.u,h.A,h.l,h.R,h.m)}wi.prototype.ca=function(h){h=h.target;const _=this.M;_&&Kn(h)==3?_.j():this.Y(h)},wi.prototype.Y=function(h){try{if(h==this.g)e:{const Pt=Kn(this.g);var _=this.g.Ba();const ar=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||nh(this.g)))){this.J||Pt!=4||_==7||(_==8||0>=ar?Fr(3):Fr(2)),io(this);var v=this.g.Z();this.X=v;t:if(Qr(this)){var R=nh(this.g);h="";var q=R.length,Y=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){bn(this),Dn(this);var oe="";break t}this.h.i=new f.TextDecoder}for(_=0;_<q;_++)this.h.h=!0,h+=this.h.i.decode(R[_],{stream:!(Y&&_==q-1)});R.length=0,this.h.g+=h,this.C=0,oe=this.h.g}else oe=this.g.oa();if(this.o=v==200,Wc(this.i,this.u,this.A,this.l,this.R,Pt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,Mt=this.g;if((Fe=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Fe)){var qe=Fe;break t}}qe=null}if(v=qe)Gr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,On(this,v);else{this.o=!1,this.s=3,bt(12),bn(this),Dn(this);break e}}if(this.P){v=!0;let Jt;for(;!this.J&&this.C<oe.length;)if(Jt=$r(this,oe),Jt==Ws){Pt==4&&(this.s=4,bt(14),v=!1),Gr(this.i,this.l,null,"[Incomplete Response]");break}else if(Jt==Kr){this.s=4,bt(15),Gr(this.i,this.l,oe,"[Invalid Chunk]"),v=!1;break}else Gr(this.i,this.l,Jt,null),On(this,Jt);if(Qr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||oe.length!=0||this.h.h||(this.s=1,bt(16),v=!1),this.o=this.o&&v,!v)Gr(this.i,this.l,oe,"[Invalid Chunked Response]"),bn(this),Dn(this);else if(0<oe.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+oe.length),aa(Ht),Ht.M=!0,bt(11))}}else Gr(this.i,this.l,oe,null),On(this,oe);Pt==4&&bn(this),this.o&&!this.J&&(Pt==4?oh(this.j,this):(this.o=!1,dt(this)))}else dm(this.g),v==400&&0<oe.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),bn(this),Dn(this)}}}catch{}finally{}};function Qr(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function $r(h,_){var v=h.C,R=_.indexOf(`
`,v);return R==-1?Ws:(v=Number(_.substring(v,R)),isNaN(v)?Kr:(R+=1,R+v>_.length?Ws:(_=_.slice(R,R+v),h.C=R+v,_)))}wi.prototype.cancel=function(){this.J=!0,bn(this)};function dt(h){h.S=Date.now()+h.I,jl(h,h.I)}function jl(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=qr(w(h.ba,h),_)}function io(h){h.B&&(f.clearTimeout(h.B),h.B=null)}wi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Ti(this.i,this.A),this.L!=2&&(Fr(),bt(17)),bn(this),this.s=2,Dn(this)):jl(this,this.S-h)};function Dn(h){h.j.G==0||h.J||oh(h.j,h)}function bn(h){io(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,on(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function On(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Yr(v.h,h))){if(!h.K&&Yr(v.h,h)&&v.G==3){try{var R=v.Da.g.parse(_)}catch{R=null}if(Array.isArray(R)&&R.length==3){var q=R;if(q[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)mo(v),ho(v);else break e;Wl(v),bt(18)}}else v.za=q[1],0<v.za-v.T&&37500>q[2]&&v.F&&v.v==0&&!v.C&&(v.C=qr(w(v.Za,v),6e3));if(1>=Xc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else sr(v,11)}else if((h.K||v.g==h)&&mo(v),!H(_))for(q=v.Da.g.parse(_),_=0;_<q.length;_++){let qe=q[_];if(v.T=qe[0],qe=qe[1],v.G==2)if(qe[0]=="c"){v.K=qe[1],v.ia=qe[2];const Ht=qe[3];Ht!=null&&(v.la=Ht,v.j.info("VER="+v.la));const Pt=qe[4];Pt!=null&&(v.Aa=Pt,v.j.info("SVER="+v.Aa));const ar=qe[5];ar!=null&&typeof ar=="number"&&0<ar&&(R=1.5*ar,v.L=R,v.j.info("backChannelRequestTimeoutMs_="+R)),R=v;const Jt=h.g;if(Jt){const Ni=Jt.g?Jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var Y=R.h;Y.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Wr(Y,Y.h),Y.h=null))}if(R.D){const Jl=Jt.g?Jt.g.getResponseHeader("X-HTTP-Session-Id"):null;Jl&&(R.ya=Jl,$e(R.I,R.D,Jl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),R=v;var oe=h;if(R.qa=uh(R,R.J?R.ia:null,R.W),oe.K){Fn(R.h,oe);var Fe=oe,Mt=R.L;Mt&&(Fe.I=Mt),Fe.B&&(io(Fe),dt(Fe)),R.g=oe}else sh(R);0<v.i.length&&fo(v)}else qe[0]!="stop"&&qe[0]!="close"||sr(v,7);else v.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?sr(v,7):$l(v):qe[0]!="noop"&&v.l&&v.l.ta(qe),v.v=0)}}Fr(4)}catch{}}var lm=class{constructor(h,_){this.g=h,this.map=_}};function Bl(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Xc(h){return h.h?1:h.g?h.g.size:0}function Yr(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Wr(h,_){h.g?h.g.add(_):h.h=_}function Fn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Bl.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function gn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return U(h.i)}function Jc(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,R=0;R<v;R++)_.push(h[R]);return _}_=[],v=0;for(R in h)_[v++]=h[R];return _}function um(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const R in h)_[v++]=R;return _}}}function Xs(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=um(h),R=Jc(h),q=R.length,Y=0;Y<q;Y++)_.call(void 0,R[Y],v&&v[Y],h)}var Fl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ro(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var R=h[v].indexOf("="),q=null;if(0<=R){var Y=h[v].substring(0,R);q=h[v].substring(R+1)}else Y=h[v];_(Y,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function er(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof er){this.h=h.h,Xr(this,h.j),this.o=h.o,this.g=h.g,Js(this,h.s),this.l=h.l;var _=h.i,v=new bi;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),so(this,v),this.m=h.m}else h&&(_=String(h).match(Fl))?(this.h=!1,Xr(this,_[1]||"",!0),this.o=Jr(_[2]||""),this.g=Jr(_[3]||"",!0),Js(this,_[4]),this.l=Jr(_[5]||"",!0),so(this,_[6]||"",!0),this.m=Jr(_[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}er.prototype.toString=function(){var h=[],_=this.j;_&&h.push(qn(_,ql,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(qn(_,ql,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(qn(v,v.charAt(0)=="/"?Hl:Zc,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",qn(v,fm)),h.join("")};function _t(h){return new er(h)}function Xr(h,_,v){h.j=v?Jr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Js(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function so(h,_,v){_ instanceof bi?(h.i=_,Gl(h.i,h.h)):(v||(_=qn(_,hm)),h.i=new bi(_,h.h))}function $e(h,_,v){h.i.set(_,v)}function Zs(h){return $e(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Jr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function qn(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,cm),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function cm(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var ql=/[#\/\?@]/g,Zc=/[#\?:]/g,Hl=/[#\?]/g,hm=/[#\?@]/g,fm=/#/g;function bi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Hn(h){h.g||(h.g=new Map,h.h=0,h.i&&ro(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=bi.prototype,n.add=function(h,_){Hn(this),this.i=null,h=ir(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ao(h,_){Hn(h),_=ir(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function tr(h,_){return Hn(h),_=ir(h,_),h.g.has(_)}n.forEach=function(h,_){Hn(this),this.g.forEach(function(v,R){v.forEach(function(q){h.call(_,q,R,this)},this)},this)},n.na=function(){Hn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let R=0;R<_.length;R++){const q=h[R];for(let Y=0;Y<q.length;Y++)v.push(_[R])}return v},n.V=function(h){Hn(this);let _=[];if(typeof h=="string")tr(this,h)&&(_=_.concat(this.g.get(ir(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return Hn(this),this.i=null,h=ir(this,h),tr(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function nr(h,_,v){ao(h,_),0<v.length&&(h.i=null,h.g.set(ir(h,_),U(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var R=_[v];const Y=encodeURIComponent(String(R)),oe=this.V(R);for(R=0;R<oe.length;R++){var q=Y;oe[R]!==""&&(q+="="+encodeURIComponent(String(oe[R]))),h.push(q)}}return this.i=h.join("&")};function ir(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Gl(h,_){_&&!h.j&&(Hn(h),h.i=null,h.g.forEach(function(v,R){var q=R.toLowerCase();R!=q&&(ao(this,R),nr(this,q,v))},h)),h.j=_}function eh(h,_){const v=new Hr;if(f.Image){const R=new Image;R.onload=S(Gn,v,"TestLoadImage: loaded",!0,_,R),R.onerror=S(Gn,v,"TestLoadImage: error",!1,_,R),R.onabort=S(Gn,v,"TestLoadImage: abort",!1,_,R),R.ontimeout=S(Gn,v,"TestLoadImage: timeout",!1,_,R),f.setTimeout(function(){R.ontimeout&&R.ontimeout()},1e4),R.src=h}else _(!1)}function ea(h,_){const v=new Hr,R=new AbortController,q=setTimeout(()=>{R.abort(),Gn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:R.signal}).then(Y=>{clearTimeout(q),Y.ok?Gn(v,"TestPingServer: ok",!0,_):Gn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(q),Gn(v,"TestPingServer: error",!1,_)})}function Gn(h,_,v,R,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),R(v)}catch{}}function ta(){this.g=new pn}function Si(h,_,v){const R=v||"";try{Xs(h,function(q,Y){let oe=q;p(q)&&(oe=Pl(q)),_.push(R+Y+"="+encodeURIComponent(oe))})}catch(q){throw _.push(R+"type="+encodeURIComponent("_badmap")),q}}function Zr(h){this.l=h.Ub||null,this.j=h.eb||!1}D(Zr,Ll),Zr.prototype.g=function(){return new rr(this.l,this.j)},Zr.prototype.i=function(h){return function(){return h}}({});function rr(h,_){Ot.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(rr,Ot),n=rr.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ci(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ai(this):Ci(this),this.readyState==3&&Kl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ai(this))},n.Qa=function(h){this.g&&(this.response=h,Ai(this))},n.ga=function(){this.g&&Ai(this)};function Ai(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ci(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ci(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Ql(h){let _="";return W(h,function(v,R){_+=R,_+=":",_+=v,_+=`\r
`}),_}function qt(h,_,v){e:{for(R in v){var R=!1;break e}R=!0}R||(v=Ql(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):$e(h,_,v))}function Ze(h){Ot.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Ze,Ot);var oo=/^https?$/i,na=["POST","PUT"];n=Ze.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,R){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ys.g(),this.v=this.o?Kc(this.o):Kc(Ys),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Y){th(this,Y);return}if(h=v||"",v=new Map(this.headers),R)if(Object.getPrototypeOf(R)===Object.prototype)for(var q in R)v.set(q,R[q]);else if(typeof R.keys=="function"&&typeof R.get=="function")for(const Y of R.keys())v.set(Y,R.get(Y));else throw Error("Unknown input type for opt_headers: "+String(R));R=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),q=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(na,_,void 0))||R||q||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,oe]of v)this.g.setRequestHeader(Y,oe);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ia(this),this.u=!0,this.g.send(h),this.u=!1}catch(Y){th(this,Y)}};function th(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,lo(h),Ri(h)}function lo(h){h.A||(h.A=!0,zt(h,"complete"),zt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,zt(this,"complete"),zt(this,"abort"),Ri(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?uo(this):this.bb())},n.bb=function(){uo(this)};function uo(h){if(h.h&&typeof u<"u"&&(!h.v[1]||Kn(h)!=4||h.Z()!=2)){if(h.u&&Kn(h)==4)Gc(h.Ea,0,h);else if(zt(h,"readystatechange"),Kn(h)==4){h.h=!1;try{const oe=h.Z();e:switch(oe){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var R;if(R=oe===0){var q=String(h.D).match(Fl)[1]||null;!q&&f.self&&f.self.location&&(q=f.self.location.protocol.slice(0,-1)),R=!oo.test(q?q.toLowerCase():"")}v=R}if(v)zt(h,"complete"),zt(h,"success");else{h.m=6;try{var Y=2<Kn(h)?h.g.statusText:""}catch{Y=""}h.l=Y+" ["+h.Z()+"]",lo(h)}}finally{Ri(h)}}}}function Ri(h,_){if(h.g){ia(h);const v=h.g,R=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||zt(h,"ready");try{v.onreadystatechange=R}catch{}}}function ia(h){h.I&&(f.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Kn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),vi(_)}};function nh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function dm(h){const _={};h=(h.g&&2<=Kn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let R=0;R<h.length;R++){if(H(h[R]))continue;var v=k(h[R]);const q=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=_[q]||[];_[q]=Y,Y.push(v)}O(_,function(R){return R.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ra(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function co(h){this.Aa=0,this.i=[],this.j=new Hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ra("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ra("baseRetryDelayMs",5e3,h),this.cb=ra("retryDelaySeedMs",1e4,h),this.Wa=ra("forwardChannelMaxRetries",2,h),this.wa=ra("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Bl(h&&h.concurrentRequestLimit),this.Da=new ta,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=co.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,R){bt(0),this.W=h,this.H=_||{},v&&R!==void 0&&(this.H.OSID=v,this.H.OAID=R),this.F=this.X,this.I=uh(this,null,this.W),fo(this)};function $l(h){if(ih(h),h.G==3){var _=h.U++,v=_t(h.I);if($e(v,"SID",h.K),$e(v,"RID",_),$e(v,"TYPE","terminate"),sa(h,v),_=new wi(h,h.j,_),_.L=2,_.v=Zs(_t(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=_.v,v=!0),v||(_.g=ch(_.j,null),_.g.ea(_.v)),_.F=Date.now(),dt(_)}lh(h)}function ho(h){h.g&&(aa(h),h.g.cancel(),h.g=null)}function ih(h){ho(h),h.u&&(f.clearTimeout(h.u),h.u=null),mo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function fo(h){if(!zl(h.h)&&!h.s){h.s=!0;var _=h.Ga;Ee||V(),_e||(Ee(),_e=!0),Qe.add(_,h),h.B=0}}function mm(h,_){return Xc(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=qr(w(h.Ga,h,_),Xl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const q=new wi(this,this.j,h);let Y=this.o;if(this.S&&(Y?(Y=I(Y),x(Y,this.S)):Y=this.S),this.m!==null||this.O||(q.H=Y,Y=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var R=this.i[v];if("__data__"in R.map&&(R=R.map.__data__,typeof R=="string")){R=R.length;break t}R=void 0}if(R===void 0)break;if(_+=R,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=rh(this,q,_),v=_t(this.I),$e(v,"RID",h),$e(v,"CVER",22),this.D&&$e(v,"X-HTTP-Session-Id",this.D),sa(this,v),Y&&(this.O?_="headers="+encodeURIComponent(String(Ql(Y)))+"&"+_:this.m&&qt(v,this.m,Y)),Wr(this.h,q),this.Ua&&$e(v,"TYPE","init"),this.P?($e(v,"$req",_),$e(v,"SID","null"),q.T=!0,oi(q,v,null)):oi(q,v,_),this.G=2}}else this.G==3&&(h?Yl(this,h):this.i.length==0||zl(this.h)||Yl(this))};function Yl(h,_){var v;_?v=_.l:v=h.U++;const R=_t(h.I);$e(R,"SID",h.K),$e(R,"RID",v),$e(R,"AID",h.T),sa(h,R),h.m&&h.o&&qt(R,h.m,h.o),v=new wi(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=rh(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Wr(h.h,v),oi(v,R,_)}function sa(h,_){h.H&&W(h.H,function(v,R){$e(_,R,v)}),h.l&&Xs({},function(v,R){$e(_,R,v)})}function rh(h,_,v){v=Math.min(h.i.length,v);var R=h.l?w(h.l.Na,h.l,h):null;e:{var q=h.i;let Y=-1;for(;;){const oe=["count="+v];Y==-1?0<v?(Y=q[0].g,oe.push("ofs="+Y)):Y=0:oe.push("ofs="+Y);let Fe=!0;for(let Mt=0;Mt<v;Mt++){let qe=q[Mt].g;const Ht=q[Mt].map;if(qe-=Y,0>qe)Y=Math.max(0,q[Mt].g-100),Fe=!1;else try{Si(Ht,oe,"req"+qe+"_")}catch{R&&R(Ht)}}if(Fe){R=oe.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,R}function sh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;Ee||V(),_e||(Ee(),_e=!0),Qe.add(_,h),h.v=0}}function Wl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=qr(w(h.Fa,h),Xl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,ah(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=qr(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),ho(this),ah(this))};function aa(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function ah(h){h.g=new wi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=_t(h.qa);$e(_,"RID","rpc"),$e(_,"SID",h.K),$e(_,"AID",h.T),$e(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&$e(_,"TO",h.ja),$e(_,"TYPE","xmlhttp"),sa(h,_),h.m&&h.o&&qt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Zs(_t(_)),v.m=null,v.P=!0,Zi(v,h)}n.Za=function(){this.C!=null&&(this.C=null,ho(this),Wl(this),bt(19))};function mo(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function oh(h,_){var v=null;if(h.g==_){mo(h),aa(h),h.g=null;var R=2}else if(Yr(h.h,_))v=_.D,Fn(h.h,_),R=1;else return;if(h.G!=0){if(_.o)if(R==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var q=h.B;R=eo(),zt(R,new $c(R,v)),fo(h)}else sh(h);else if(q=_.s,q==3||q==0&&0<_.X||!(R==1&&mm(h,_)||R==2&&Wl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),q){case 1:sr(h,5);break;case 4:sr(h,10);break;case 3:sr(h,6);break;default:sr(h,2)}}}function Xl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function sr(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),R=h.Xa;const q=!R;R=new er(R||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Xr(R,"https"),Zs(R),q?eh(R.toString(),v):ea(R.toString(),v)}else bt(2);h.G=0,h.l&&h.l.sa(_),lh(h),ih(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function lh(h){if(h.G=0,h.ka=[],h.l){const _=gn(h.h);(_.length!=0||h.i.length!=0)&&(P(h.ka,_),P(h.ka,h.i),h.h.i.length=0,U(h.i),h.i.length=0),h.l.ra()}}function uh(h,_,v){var R=v instanceof er?_t(v):new er(v);if(R.g!="")_&&(R.g=_+"."+R.g),Js(R,R.s);else{var q=f.location;R=q.protocol,_=_?_+"."+q.hostname:q.hostname,q=+q.port;var Y=new er(null);R&&Xr(Y,R),_&&(Y.g=_),q&&Js(Y,q),v&&(Y.l=v),R=Y}return v=h.D,_=h.ya,v&&_&&$e(R,v,_),$e(R,"VER",h.la),sa(h,R),R}function ch(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ze(new Zr({eb:v})):new Ze(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hh(){}n=hh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function po(){}po.prototype.g=function(h,_){return new _n(h,_)};function _n(h,_){Ot.call(this),this.g=new co(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!H(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!H(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ii(this)}D(_n,Ot),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){$l(this.g)},_n.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=Pl(h),h=v);_.i.push(new lm(_.Ya++,h)),_.G==3&&fo(_)},_n.prototype.N=function(){this.g.l=null,delete this.j,$l(this.g),delete this.g,_n.aa.N.call(this)};function fh(h){Br.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}D(fh,Br);function dh(){ai.call(this),this.status=1}D(dh,ai);function Ii(h){this.g=h}D(Ii,hh),Ii.prototype.ua=function(){zt(this.g,"a")},Ii.prototype.ta=function(h){zt(this.g,new fh(h))},Ii.prototype.sa=function(h){zt(this.g,new dh)},Ii.prototype.ra=function(){zt(this.g,"b")},po.prototype.createWebChannel=po.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,RA=function(){return new po},CA=function(){return eo()},AA=zn,c_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kt.NO_ERROR=0,kt.TIMEOUT=8,kt.HTTP_ERROR=6,Sf=kt,Ji.COMPLETE="complete",SA=Ji,Qc.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",Ot.prototype.listen=Ot.prototype.K,Ku=Qc,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,bA=Ze}).apply(typeof df<"u"?df:typeof self<"u"?self:typeof window<"u"?window:{});const cw="@firebase/firestore",hw="4.7.8";/**
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
 */const ka=new Ic("@firebase/firestore");function Ho(){return ka.logLevel}function he(n,...e){if(ka.logLevel<=Le.DEBUG){const t=e.map(iy);ka.debug(`Firestore (${bl}): ${n}`,...t)}}function Or(n,...e){if(ka.logLevel<=Le.ERROR){const t=e.map(iy);ka.error(`Firestore (${bl}): ${n}`,...t)}}function il(n,...e){if(ka.logLevel<=Le.WARN){const t=e.map(iy);ka.warn(`Firestore (${bl}): ${n}`,...t)}}function iy(n){if(typeof n=="string")return n;try{/**
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
 */const te={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends yi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class IA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(hn.UNAUTHENTICATED))}shutdown(){}}class aO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oO{constructor(e){this.t=e,this.currentUser=hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){et(this.o===void 0);let i=this.i;const a=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let o=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Nr,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const m=o;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},f=m=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Nr)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(et(typeof i.accessToken=="string"),new IA(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new hn(e)}}class lO{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=hn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class uO{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new lO(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(hn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cO{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ii(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){et(this.o===void 0);const i=o=>{o.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,he("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>i(o))};const a=o=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>a(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?a(o):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new fw(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(et(typeof t.token=="string"),this.R=t.token,new fw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function hO(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class NA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=hO(40);for(let o=0;o<a.length;++o)i.length<20&&a[o]<t&&(i+=e.charAt(a[o]%62))}return i}}function ze(n,e){return n<e?-1:n>e?1:0}function rl(n,e,t){return n.length===e.length&&n.every((i,a)=>t(i,e[a]))}/**
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
 */const dw=-62135596800,mw=1e6;class jt{static now(){return jt.fromMillis(Date.now())}static fromDate(e){return jt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*mw);return new jt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<dw)throw new fe(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mw}_compareTo(e){return this.seconds===e.seconds?ze(this.nanoseconds,e.nanoseconds):ze(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-dw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const pw="__name__";class Li{constructor(e,t,i){t===void 0?t=0:t>e.length&&be(),i===void 0?i=e.length-t:i>e.length-t&&be(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Li.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Li?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const o=Li.compareSegments(e.get(a),t.get(a));if(o!==0)return o}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=Li.isNumericId(e),a=Li.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?Li.extractNumericId(e).compare(Li.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ns.fromString(e.substring(4,e.length-2))}}class ht extends Li{construct(e,t,i){return new ht(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new fe(te.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(a=>a.length>0))}return new ht(t)}static emptyPath(){return new ht([])}}const fO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Li{construct(e,t,i){return new rn(e,t,i)}static isValidIdentifier(e){return fO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pw}static keyField(){return new rn([pw])}static fromServerFormat(e){const t=[];let i="",a=0;const o=()=>{if(i.length===0)throw new fe(te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new fe(te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new fe(te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,a+=2}else f==="`"?(u=!u,a++):f!=="."||u?(i+=f,a++):(o(),a++)}if(o(),u)throw new fe(te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
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
 */const hc=-1;function dO(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,a=Ae.fromTimestamp(i===1e9?new jt(t+1,0):new jt(t,i));return new Ps(a,ve.empty(),e)}function mO(n){return new Ps(n.readTime,n.key,hc)}class Ps{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ps(Ae.min(),ve.empty(),hc)}static max(){return new Ps(Ae.max(),ve.empty(),hc)}}function pO(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:ze(n.largestBatchId,e.largestBatchId))}/**
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
 */const gO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _O{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Sl(n){if(n.code!==te.FAILED_PRECONDITION||n.message!==gO)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&be(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((i,a)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,a)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,i)=>{t(e)})}static reject(e){return new ee((t,i)=>{i(e)})}static waitFor(e){return new ee((t,i)=>{let a=0,o=0,u=!1;e.forEach(f=>{++a,f.next(()=>{++o,u&&o===a&&t()},m=>i(m))}),u=!0,o===a&&t()})}static or(e){let t=ee.resolve(!1);for(const i of e)t=t.next(a=>a?ee.resolve(a):i());return t}static forEach(e,t){const i=[];return e.forEach((a,o)=>{i.push(t.call(this,a,o))}),this.waitFor(i)}static mapArray(e,t){return new ee((i,a)=>{const o=e.length,u=new Array(o);let f=0;for(let m=0;m<o;m++){const p=m;t(e[p]).next(y=>{u[p]=y,++f,f===o&&i(u)},y=>a(y))}})}static doWhile(e,t){return new ee((i,a)=>{const o=()=>{e()===!0?t().next(()=>{o()},a):i()};o()})}}function yO(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Al(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Cd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Cd.ae=-1;/**
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
 */const ry=-1;function Rd(n){return n==null}function zf(n){return n===0&&1/n==-1/0}function vO(n){return typeof n=="number"&&Number.isInteger(n)&&!zf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const xA="";function EO(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gw(e)),e=TO(n.get(t),e);return gw(e)}function TO(n,e){let t=e;const i=n.length;for(let a=0;a<i;a++){const o=n.charAt(a);switch(o){case"\0":t+="";break;case xA:t+="";break;default:t+=o}}return t}function gw(n){return n+xA+""}/**
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
 */function _w(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Gs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function DA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Dt=class h_{constructor(e,t){this.comparator=e,this.root=t||xs.EMPTY}insert(e,t){return new h_(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xs.BLACK,null,null))}remove(e){return new h_(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new mf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new mf(this.root,e,this.comparator,!1)}getReverseIterator(){return new mf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new mf(this.root,e,this.comparator,!0)}},mf=class{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,t&&a&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},xs=class wr{constructor(e,t,i,a,o){this.key=e,this.value=t,this.color=i??wr.RED,this.left=a??wr.EMPTY,this.right=o??wr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,o){return new wr(e??this.key,t??this.value,i??this.color,a??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const o=i(e,a.key);return a=o<0?a.copy(null,null,null,a.left.insert(e,t,i),null):o===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return wr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return wr.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,wr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,wr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw be();const e=this.left.check();if(e!==this.right.check())throw be();return e+(this.isRed()?0:1)}};xs.EMPTY=null,xs.RED=!0,xs.BLACK=!1;xs.EMPTY=new class{constructor(){this.size=0}get key(){throw be()}get value(){throw be()}get color(){throw be()}get left(){throw be()}get right(){throw be()}copy(e,t,i,a,o){return this}insert(e,t,i){return new xs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Bt{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new yw(this.data.getIterator())}getIteratorFrom(e){return new yw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Bt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=i.getNext().key;if(this.comparator(a,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Bt(this.comparator);return t.data=e,t}}class yw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class OA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new OA("Invalid base64 string: "+o):o}}(e);return new sn(t)}static fromUint8Array(e){const t=function(a){let o="";for(let u=0;u<a.length;++u)o+=String.fromCharCode(a[u]);return o}(e);return new sn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ze(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const wO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ls(n){if(et(!!n),typeof n=="string"){let e=0;const t=wO.exec(n);if(et(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:At(n.seconds),nanos:At(n.nanos)}}function At(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Vs(n){return typeof n=="string"?sn.fromBase64String(n):sn.fromUint8Array(n)}/**
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
 */const kA="server_timestamp",MA="__type__",PA="__previous_value__",LA="__local_write_time__";function sy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[MA])===null||t===void 0?void 0:t.stringValue)===kA}function Id(n){const e=n.mapValue.fields[PA];return sy(e)?Id(e):e}function fc(n){const e=Ls(n.mapValue.fields[LA].timestampValue);return new jt(e.seconds,e.nanos)}/**
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
 */class bO{constructor(e,t,i,a,o,u,f,m,p){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=p}}const Ff="(default)";class dc{constructor(e,t){this.projectId=e,this.database=t||Ff}static empty(){return new dc("","")}get isDefaultDatabase(){return this.database===Ff}isEqual(e){return e instanceof dc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const VA="__type__",SO="__max__",pf={mapValue:{}},UA="__vector__",qf="value";function Us(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sy(n)?4:CO(n)?9007199254740991:AO(n)?10:11:be()}function Fi(n,e){if(n===e)return!0;const t=Us(n);if(t!==Us(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return fc(n).isEqual(fc(e));case 3:return function(a,o){if(typeof a.timestampValue=="string"&&typeof o.timestampValue=="string"&&a.timestampValue.length===o.timestampValue.length)return a.timestampValue===o.timestampValue;const u=Ls(a.timestampValue),f=Ls(o.timestampValue);return u.seconds===f.seconds&&u.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,o){return Vs(a.bytesValue).isEqual(Vs(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,o){return At(a.geoPointValue.latitude)===At(o.geoPointValue.latitude)&&At(a.geoPointValue.longitude)===At(o.geoPointValue.longitude)}(n,e);case 2:return function(a,o){if("integerValue"in a&&"integerValue"in o)return At(a.integerValue)===At(o.integerValue);if("doubleValue"in a&&"doubleValue"in o){const u=At(a.doubleValue),f=At(o.doubleValue);return u===f?zf(u)===zf(f):isNaN(u)&&isNaN(f)}return!1}(n,e);case 9:return rl(n.arrayValue.values||[],e.arrayValue.values||[],Fi);case 10:case 11:return function(a,o){const u=a.mapValue.fields||{},f=o.mapValue.fields||{};if(_w(u)!==_w(f))return!1;for(const m in u)if(u.hasOwnProperty(m)&&(f[m]===void 0||!Fi(u[m],f[m])))return!1;return!0}(n,e);default:return be()}}function mc(n,e){return(n.values||[]).find(t=>Fi(t,e))!==void 0}function sl(n,e){if(n===e)return 0;const t=Us(n),i=Us(e);if(t!==i)return ze(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ze(n.booleanValue,e.booleanValue);case 2:return function(o,u){const f=At(o.integerValue||o.doubleValue),m=At(u.integerValue||u.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(n,e);case 3:return vw(n.timestampValue,e.timestampValue);case 4:return vw(fc(n),fc(e));case 5:return ze(n.stringValue,e.stringValue);case 6:return function(o,u){const f=Vs(o),m=Vs(u);return f.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(o,u){const f=o.split("/"),m=u.split("/");for(let p=0;p<f.length&&p<m.length;p++){const y=ze(f[p],m[p]);if(y!==0)return y}return ze(f.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,u){const f=ze(At(o.latitude),At(u.latitude));return f!==0?f:ze(At(o.longitude),At(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ew(n.arrayValue,e.arrayValue);case 10:return function(o,u){var f,m,p,y;const E=o.fields||{},w=u.fields||{},S=(f=E[qf])===null||f===void 0?void 0:f.arrayValue,D=(m=w[qf])===null||m===void 0?void 0:m.arrayValue,U=ze(((p=S==null?void 0:S.values)===null||p===void 0?void 0:p.length)||0,((y=D==null?void 0:D.values)===null||y===void 0?void 0:y.length)||0);return U!==0?U:Ew(S,D)}(n.mapValue,e.mapValue);case 11:return function(o,u){if(o===pf.mapValue&&u===pf.mapValue)return 0;if(o===pf.mapValue)return 1;if(u===pf.mapValue)return-1;const f=o.fields||{},m=Object.keys(f),p=u.fields||{},y=Object.keys(p);m.sort(),y.sort();for(let E=0;E<m.length&&E<y.length;++E){const w=ze(m[E],y[E]);if(w!==0)return w;const S=sl(f[m[E]],p[y[E]]);if(S!==0)return S}return ze(m.length,y.length)}(n.mapValue,e.mapValue);default:throw be()}}function vw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ze(n,e);const t=Ls(n),i=Ls(e),a=ze(t.seconds,i.seconds);return a!==0?a:ze(t.nanos,i.nanos)}function Ew(n,e){const t=n.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const o=sl(t[a],i[a]);if(o)return o}return ze(t.length,i.length)}function al(n){return f_(n)}function f_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ls(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Vs(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",a=!0;for(const o of t.values||[])a?a=!1:i+=",",i+=f_(o);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let a="{",o=!0;for(const u of i)o?o=!1:a+=",",a+=`${u}:${f_(t.fields[u])}`;return a+"}"}(n.mapValue):be()}function Af(n){switch(Us(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Id(n);return e?16+Af(e):16;case 5:return 2*n.stringValue.length;case 6:return Vs(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,o)=>a+Af(o),0)}(n.arrayValue);case 10:case 11:return function(i){let a=0;return Gs(i.fields,(o,u)=>{a+=o.length+Af(u)}),a}(n.mapValue);default:throw be()}}function Tw(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function d_(n){return!!n&&"integerValue"in n}function ay(n){return!!n&&"arrayValue"in n}function ww(n){return!!n&&"nullValue"in n}function bw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Cf(n){return!!n&&"mapValue"in n}function AO(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[VA])===null||t===void 0?void 0:t.stringValue)===UA}function Xu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Gs(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Xu(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function CO(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===SO}/**
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
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Cf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xu(t)}setAll(e){let t=rn.emptyPath(),i={},a=[];e.forEach((u,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,i,a),i={},a=[],t=f.popLast()}u?i[f.lastSegment()]=Xu(u):a.push(f.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,i,a)}delete(e){const t=this.field(e.popLast());Cf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];Cf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){Gs(t,(a,o)=>e[a]=o);for(const a of i)delete e[a]}clone(){return new Cn(Xu(this.value))}}function jA(n){const e=[];return Gs(n.fields,(t,i)=>{const a=new rn([t]);if(Cf(i)){const o=jA(i.mapValue).fields;if(o.length===0)e.push(a);else for(const u of o)e.push(a.child(u))}else e.push(a)}),new Un(e)}/**
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
 */class Hf{constructor(e,t){this.position=e,this.inclusive=t}}function Sw(n,e,t){let i=0;for(let a=0;a<n.position.length;a++){const o=e[a],u=n.position[a];if(o.field.isKeyField()?i=ve.comparator(ve.fromName(u.referenceValue),t.key):i=sl(u,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Aw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Gf{constructor(e,t="asc"){this.field=e,this.dir=t}}function RO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class BA{}class xt extends BA{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new NO(e,t,i):t==="array-contains"?new OO(e,i):t==="in"?new kO(e,i):t==="not-in"?new MO(e,i):t==="array-contains-any"?new PO(e,i):new xt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new xO(e,i):new DO(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(sl(t,this.value)):t!==null&&Us(this.value)===Us(t)&&this.matchesComparison(sl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _i extends BA{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new _i(e,t)}matches(e){return zA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function zA(n){return n.op==="and"}function FA(n){return IO(n)&&zA(n)}function IO(n){for(const e of n.filters)if(e instanceof _i)return!1;return!0}function m_(n){if(n instanceof xt)return n.field.canonicalString()+n.op.toString()+al(n.value);if(FA(n))return n.filters.map(e=>m_(e)).join(",");{const e=n.filters.map(t=>m_(t)).join(",");return`${n.op}(${e})`}}function qA(n,e){return n instanceof xt?function(i,a){return a instanceof xt&&i.op===a.op&&i.field.isEqual(a.field)&&Fi(i.value,a.value)}(n,e):n instanceof _i?function(i,a){return a instanceof _i&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((o,u,f)=>o&&qA(u,a.filters[f]),!0):!1}(n,e):void be()}function HA(n){return n instanceof xt?function(t){return`${t.field.canonicalString()} ${t.op} ${al(t.value)}`}(n):n instanceof _i?function(t){return t.op.toString()+" {"+t.getFilters().map(HA).join(" ,")+"}"}(n):"Filter"}class NO extends xt{constructor(e,t,i){super(e,t,i),this.key=ve.fromName(i.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class xO extends xt{constructor(e,t){super(e,"in",t),this.keys=GA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class DO extends xt{constructor(e,t){super(e,"not-in",t),this.keys=GA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function GA(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>ve.fromName(i.referenceValue))}class OO extends xt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ay(t)&&mc(t.arrayValue,this.value)}}class kO extends xt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&mc(this.value.arrayValue,t)}}class MO extends xt{constructor(e,t){super(e,"not-in",t)}matches(e){if(mc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!mc(this.value.arrayValue,t)}}class PO extends xt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ay(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>mc(this.value.arrayValue,i))}}/**
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
 */class LO{constructor(e,t=null,i=[],a=[],o=null,u=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=o,this.startAt=u,this.endAt=f,this.le=null}}function Cw(n,e=null,t=[],i=[],a=null,o=null,u=null){return new LO(n,e,t,i,a,o,u)}function oy(n){const e=Ne(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>m_(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(o){return o.field.canonicalString()+o.dir}(i)).join(","),Rd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>al(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>al(i)).join(",")),e.le=t}return e.le}function ly(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!RO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!qA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Aw(n.startAt,e.startAt)&&Aw(n.endAt,e.endAt)}function p_(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Nc{constructor(e,t=null,i=[],a=[],o=null,u="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=o,this.limitType=u,this.startAt=f,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function VO(n,e,t,i,a,o,u,f){return new Nc(n,e,t,i,a,o,u,f)}function uy(n){return new Nc(n)}function Rw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function KA(n){return n.collectionGroup!==null}function Ju(n){const e=Ne(n);if(e.he===null){e.he=[];const t=new Set;for(const o of e.explicitOrderBy)e.he.push(o),t.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let f=new Bt(rn.comparator);return u.filters.forEach(m=>{m.getFlattenedFilters().forEach(p=>{p.isInequality()&&(f=f.add(p.field))})}),f})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.he.push(new Gf(o,i))}),t.has(rn.keyField().canonicalString())||e.he.push(new Gf(rn.keyField(),i))}return e.he}function Vi(n){const e=Ne(n);return e.Pe||(e.Pe=UO(e,Ju(n))),e.Pe}function UO(n,e){if(n.limitType==="F")return Cw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const o=a.dir==="desc"?"asc":"desc";return new Gf(a.field,o)});const t=n.endAt?new Hf(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Hf(n.startAt.position,n.startAt.inclusive):null;return Cw(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function g_(n,e){const t=n.filters.concat([e]);return new Nc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function __(n,e,t){return new Nc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Nd(n,e){return ly(Vi(n),Vi(e))&&n.limitType===e.limitType}function QA(n){return`${oy(Vi(n))}|lt:${n.limitType}`}function Go(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(a=>HA(a)).join(", ")}]`),Rd(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>al(a)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>al(a)).join(",")),`Target(${i})`}(Vi(n))}; limitType=${n.limitType})`}function xd(n,e){return e.isFoundDocument()&&function(i,a){const o=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):ve.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)}(n,e)&&function(i,a){for(const o of Ju(i))if(!o.field.isKeyField()&&a.data.field(o.field)===null)return!1;return!0}(n,e)&&function(i,a){for(const o of i.filters)if(!o.matches(a))return!1;return!0}(n,e)&&function(i,a){return!(i.startAt&&!function(u,f,m){const p=Sw(u,f,m);return u.inclusive?p<=0:p<0}(i.startAt,Ju(i),a)||i.endAt&&!function(u,f,m){const p=Sw(u,f,m);return u.inclusive?p>=0:p>0}(i.endAt,Ju(i),a))}(n,e)}function jO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $A(n){return(e,t)=>{let i=!1;for(const a of Ju(n)){const o=BO(a,e,t);if(o!==0)return o;i=i||a.field.isKeyField()}return 0}}function BO(n,e,t){const i=n.field.isKeyField()?ve.comparator(e.key,t.key):function(o,u,f){const m=u.data.field(o),p=f.data.field(o);return m!==null&&p!==null?sl(m,p):be()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return be()}}/**
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
 */class Ha{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,o]of i)if(this.equalsFn(a,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<a.length;o++)if(this.equalsFn(a[o][0],e))return void(a[o]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(t,i)=>{for(const[a,o]of i)e(a,o)})}isEmpty(){return DA(this.inner)}size(){return this.innerSize}}/**
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
 */const zO=new Dt(ve.comparator);function kr(){return zO}const YA=new Dt(ve.comparator);function Qu(...n){let e=YA;for(const t of n)e=e.insert(t.key,t);return e}function WA(n){let e=YA;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ra(){return Zu()}function XA(){return Zu()}function Zu(){return new Ha(n=>n.toString(),(n,e)=>n.isEqual(e))}const FO=new Dt(ve.comparator),qO=new Bt(ve.comparator);function je(...n){let e=qO;for(const t of n)e=e.add(t);return e}const HO=new Bt(ze);function GO(){return HO}/**
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
 */function cy(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zf(e)?"-0":e}}function JA(n){return{integerValue:""+n}}function KO(n,e){return vO(e)?JA(e):cy(n,e)}/**
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
 */class Dd{constructor(){this._=void 0}}function QO(n,e,t){return n instanceof Kf?function(a,o){const u={fields:{[MA]:{stringValue:kA},[LA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return o&&sy(o)&&(o=Id(o)),o&&(u.fields[PA]=o),{mapValue:u}}(t,e):n instanceof ol?eC(n,e):n instanceof pc?tC(n,e):function(a,o){const u=ZA(a,o),f=Iw(u)+Iw(a.Ie);return d_(u)&&d_(a.Ie)?JA(f):cy(a.serializer,f)}(n,e)}function $O(n,e,t){return n instanceof ol?eC(n,e):n instanceof pc?tC(n,e):t}function ZA(n,e){return n instanceof Qf?function(i){return d_(i)||function(o){return!!o&&"doubleValue"in o}(i)}(e)?e:{integerValue:0}:null}class Kf extends Dd{}class ol extends Dd{constructor(e){super(),this.elements=e}}function eC(n,e){const t=nC(e);for(const i of n.elements)t.some(a=>Fi(a,i))||t.push(i);return{arrayValue:{values:t}}}class pc extends Dd{constructor(e){super(),this.elements=e}}function tC(n,e){let t=nC(e);for(const i of n.elements)t=t.filter(a=>!Fi(a,i));return{arrayValue:{values:t}}}class Qf extends Dd{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Iw(n){return At(n.integerValue||n.doubleValue)}function nC(n){return ay(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class YO{constructor(e,t){this.field=e,this.transform=t}}function WO(n,e){return n.field.isEqual(e.field)&&function(i,a){return i instanceof ol&&a instanceof ol||i instanceof pc&&a instanceof pc?rl(i.elements,a.elements,Fi):i instanceof Qf&&a instanceof Qf?Fi(i.Ie,a.Ie):i instanceof Kf&&a instanceof Kf}(n.transform,e.transform)}class XO{constructor(e,t){this.version=e,this.transformResults=t}}class Ui{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ui}static exists(e){return new Ui(void 0,e)}static updateTime(e){return new Ui(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Od{}function iC(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sC(n.key,Ui.none()):new xc(n.key,n.data,Ui.none());{const t=n.data,i=Cn.empty();let a=new Bt(rn.comparator);for(let o of e.fields)if(!a.has(o)){let u=t.field(o);u===null&&o.length>1&&(o=o.popLast(),u=t.field(o)),u===null?i.delete(o):i.set(o,u),a=a.add(o)}return new Ks(n.key,i,new Un(a.toArray()),Ui.none())}}function JO(n,e,t){n instanceof xc?function(a,o,u){const f=a.value.clone(),m=xw(a.fieldTransforms,o,u.transformResults);f.setAll(m),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(n,e,t):n instanceof Ks?function(a,o,u){if(!Rf(a.precondition,o))return void o.convertToUnknownDocument(u.version);const f=xw(a.fieldTransforms,o,u.transformResults),m=o.data;m.setAll(rC(a)),m.setAll(f),o.convertToFoundDocument(u.version,m).setHasCommittedMutations()}(n,e,t):function(a,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function ec(n,e,t,i){return n instanceof xc?function(o,u,f,m){if(!Rf(o.precondition,u))return f;const p=o.value.clone(),y=Dw(o.fieldTransforms,m,u);return p.setAll(y),u.convertToFoundDocument(u.version,p).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ks?function(o,u,f,m){if(!Rf(o.precondition,u))return f;const p=Dw(o.fieldTransforms,m,u),y=u.data;return y.setAll(rC(o)),y.setAll(p),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),f===null?null:f.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(o,u,f){return Rf(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):f}(n,e,t)}function ZO(n,e){let t=null;for(const i of n.fieldTransforms){const a=e.data.field(i.field),o=ZA(i.transform,a||null);o!=null&&(t===null&&(t=Cn.empty()),t.set(i.field,o))}return t||null}function Nw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&rl(i,a,(o,u)=>WO(o,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xc extends Od{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ks extends Od{constructor(e,t,i,a,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function rC(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function xw(n,e,t){const i=new Map;et(n.length===t.length);for(let a=0;a<t.length;a++){const o=n[a],u=o.transform,f=e.data.field(o.field);i.set(o.field,$O(u,f,t[a]))}return i}function Dw(n,e,t){const i=new Map;for(const a of n){const o=a.transform,u=t.data.field(a.field);i.set(a.field,QO(o,u,e))}return i}class sC extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ek extends Od{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tk{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const o=this.mutations[a];o.key.isEqual(e.key)&&JO(o,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ec(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ec(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=XA();return this.mutations.forEach(a=>{const o=e.get(a.key),u=o.overlayedDocument;let f=this.applyToLocalView(u,o.mutatedFields);f=t.has(a.key)?null:f;const m=iC(u,f);m!==null&&i.set(a.key,m),u.isValidDocument()||u.convertToNoDocument(Ae.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),je())}isEqual(e){return this.batchId===e.batchId&&rl(this.mutations,e.mutations,(t,i)=>Nw(t,i))&&rl(this.baseMutations,e.baseMutations,(t,i)=>Nw(t,i))}}class hy{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){et(e.mutations.length===i.length);let a=function(){return FO}();const o=e.mutations;for(let u=0;u<o.length;u++)a=a.insert(o[u].key,i[u].version);return new hy(e,t,i,a)}}/**
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
 */class nk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ik{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Nt,Ge;function rk(n){switch(n){case te.OK:return be();case te.CANCELLED:case te.UNKNOWN:case te.DEADLINE_EXCEEDED:case te.RESOURCE_EXHAUSTED:case te.INTERNAL:case te.UNAVAILABLE:case te.UNAUTHENTICATED:return!1;case te.INVALID_ARGUMENT:case te.NOT_FOUND:case te.ALREADY_EXISTS:case te.PERMISSION_DENIED:case te.FAILED_PRECONDITION:case te.ABORTED:case te.OUT_OF_RANGE:case te.UNIMPLEMENTED:case te.DATA_LOSS:return!0;default:return be()}}function aC(n){if(n===void 0)return Or("GRPC error has no .code"),te.UNKNOWN;switch(n){case Nt.OK:return te.OK;case Nt.CANCELLED:return te.CANCELLED;case Nt.UNKNOWN:return te.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return te.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return te.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return te.INTERNAL;case Nt.UNAVAILABLE:return te.UNAVAILABLE;case Nt.UNAUTHENTICATED:return te.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return te.INVALID_ARGUMENT;case Nt.NOT_FOUND:return te.NOT_FOUND;case Nt.ALREADY_EXISTS:return te.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return te.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return te.FAILED_PRECONDITION;case Nt.ABORTED:return te.ABORTED;case Nt.OUT_OF_RANGE:return te.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return te.UNIMPLEMENTED;case Nt.DATA_LOSS:return te.DATA_LOSS;default:return be()}}(Ge=Nt||(Nt={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sk(){return new TextEncoder}/**
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
 */const ak=new Ns([4294967295,4294967295],0);function Ow(n){const e=sk().encode(n),t=new wA;return t.update(e),new Uint8Array(t.digest())}function kw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ns([t,i],0),new Ns([a,o],0)]}class fy{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new $u(`Invalid padding: ${t}`);if(i<0)throw new $u(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new $u(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new $u(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=Ns.fromNumber(this.Ee)}Ae(e,t,i){let a=e.add(t.multiply(Ns.fromNumber(i)));return a.compare(ak)===1&&(a=new Ns([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=Ow(e),[i,a]=kw(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(i,a,o);if(!this.Re(u))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),u=new fy(o,a,t);return i.forEach(f=>u.insert(f)),u}insert(e){if(this.Ee===0)return;const t=Ow(e),[i,a]=kw(t);for(let o=0;o<this.hashCount;o++){const u=this.Ae(i,a,o);this.Ve(u)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class $u extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class kd{constructor(e,t,i,a,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,Dc.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new kd(Ae.min(),a,new Dt(ze),kr(),je())}}class Dc{constructor(e,t,i,a,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Dc(i,t,je(),je(),je())}}/**
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
 */class If{constructor(e,t,i,a){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=a}}class oC{constructor(e,t){this.targetId=e,this.ge=t}}class lC{constructor(e,t,i=sn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class Mw{constructor(){this.pe=0,this.ye=Pw(),this.we=sn.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=je(),t=je(),i=je();return this.ye.forEach((a,o)=>{switch(o){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:be()}}),new Dc(this.we,this.Se,e,t,i)}Me(){this.be=!1,this.ye=Pw()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,et(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class ok{constructor(e){this.ke=e,this.qe=new Map,this.Qe=kr(),this.$e=gf(),this.Ke=gf(),this.Ue=new Dt(ze)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:be()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,i=e.ge.count,a=this.Xe(t);if(a){const o=a.target;if(p_(o))if(i===0){const u=new ve(o.path);this.ze(t,u,fn.newNoDocument(u,Ae.min()))}else et(i===1);else{const u=this.et(t);if(u!==i){const f=this.tt(e),m=f?this.nt(f,e,u):1;if(m!==0){this.Ye(t);const p=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,p)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:o=0}=t;let u,f;try{u=Vs(i).toUint8Array()}catch(m){if(m instanceof OA)return il("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new fy(u,a,o)}catch(m){return il(m instanceof $u?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.Ee===0?null:f}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let a=0;return i.forEach(o=>{const u=this.ke.it(),f=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;e.mightContain(f)||(this.ze(t,o,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((o,u)=>{const f=this.Xe(u);if(f){if(o.current&&p_(f.target)){const m=new ve(f.target.path);this._t(m).has(u)||this.ut(u,m)||this.ze(u,m,fn.newNoDocument(m,e))}o.ve&&(t.set(u,o.Fe()),o.Me())}});let i=je();this.Ke.forEach((o,u)=>{let f=!0;u.forEachWhile(m=>{const p=this.Xe(m);return!p||p.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(e));const a=new kd(e,t,this.Ue,this.Qe,i);return this.Qe=kr(),this.$e=gf(),this.Ke=gf(),this.Ue=new Dt(ze),a}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new Mw,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Bt(ze),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Bt(ze),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Mw),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function gf(){return new Dt(ve.comparator)}function Pw(){return new Dt(ve.comparator)}const lk={asc:"ASCENDING",desc:"DESCENDING"},uk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ck={and:"AND",or:"OR"};class hk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function y_(n,e){return n.useProto3Json||Rd(e)?e:{value:e}}function $f(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uC(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function fk(n,e){return $f(n,e.toTimestamp())}function ji(n){return et(!!n),Ae.fromTimestamp(function(t){const i=Ls(t);return new jt(i.seconds,i.nanos)}(n))}function dy(n,e){return v_(n,e).canonicalString()}function v_(n,e){const t=function(a){return new ht(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function cC(n){const e=ht.fromString(n);return et(pC(e)),e}function E_(n,e){return dy(n.databaseId,e.path)}function _g(n,e){const t=cC(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(te.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(te.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(fC(t))}function hC(n,e){return dy(n.databaseId,e)}function dk(n){const e=cC(n);return e.length===4?ht.emptyPath():fC(e)}function T_(n){return new ht(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function fC(n){return et(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Lw(n,e,t){return{name:E_(n,e),fields:t.value.mapValue.fields}}function mk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:be()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],o=function(p,y){return p.useProto3Json?(et(y===void 0||typeof y=="string"),sn.fromBase64String(y||"")):(et(y===void 0||y instanceof Buffer||y instanceof Uint8Array),sn.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,f=u&&function(p){const y=p.code===void 0?te.UNKNOWN:aC(p.code);return new fe(y,p.message||"")}(u);t=new lC(i,a,o,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=_g(n,i.document.name),o=ji(i.document.updateTime),u=i.document.createTime?ji(i.document.createTime):Ae.min(),f=new Cn({mapValue:{fields:i.document.fields}}),m=fn.newFoundDocument(a,o,u,f),p=i.targetIds||[],y=i.removedTargetIds||[];t=new If(p,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=_g(n,i.document),o=i.readTime?ji(i.readTime):Ae.min(),u=fn.newNoDocument(a,o),f=i.removedTargetIds||[];t=new If([],f,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=_g(n,i.document),o=i.removedTargetIds||[];t=new If([],o,a,null)}else{if(!("filter"in e))return be();{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:o}=i,u=new ik(a,o),f=i.targetId;t=new oC(f,u)}}return t}function pk(n,e){let t;if(e instanceof xc)t={update:Lw(n,e.key,e.value)};else if(e instanceof sC)t={delete:E_(n,e.key)};else if(e instanceof Ks)t={update:Lw(n,e.key,e.data),updateMask:Sk(e.fieldMask)};else{if(!(e instanceof ek))return be();t={verify:E_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(o,u){const f=u.transform;if(f instanceof Kf)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ol)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof pc)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Qf)return{fieldPath:u.field.canonicalString(),increment:f.Ie};throw be()}(0,i))),e.precondition.isNone||(t.currentDocument=function(a,o){return o.updateTime!==void 0?{updateTime:fk(a,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:be()}(n,e.precondition)),t}function gk(n,e){return n&&n.length>0?(et(e!==void 0),n.map(t=>function(a,o){let u=a.updateTime?ji(a.updateTime):ji(o);return u.isEqual(Ae.min())&&(u=ji(o)),new XO(u,a.transformResults||[])}(t,e))):[]}function _k(n,e){return{documents:[hC(n,e.path)]}}function yk(n,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=hC(n,a);const o=function(p){if(p.length!==0)return mC(_i.create(p,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const u=function(p){if(p.length!==0)return p.map(y=>function(w){return{field:Ko(w.field),direction:Tk(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const f=y_(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ht:t,parent:a}}function vk(n){let e=dk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){et(i===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let o=[];t.where&&(o=function(E){const w=dC(E);return w instanceof _i&&FA(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(E){return E.map(w=>function(D){return new Gf(Qo(D.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(w))}(t.orderBy));let f=null;t.limit&&(f=function(E){let w;return w=typeof E=="object"?E.value:E,Rd(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(E){const w=!!E.before,S=E.values||[];return new Hf(S,w)}(t.startAt));let p=null;return t.endAt&&(p=function(E){const w=!E.before,S=E.values||[];return new Hf(S,w)}(t.endAt)),VO(e,a,u,o,f,"F",m,p)}function Ek(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function dC(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Qo(t.unaryFilter.field);return xt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=Qo(t.unaryFilter.field);return xt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Qo(t.unaryFilter.field);return xt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Qo(t.unaryFilter.field);return xt.create(u,"!=",{nullValue:"NULL_VALUE"});default:return be()}}(n):n.fieldFilter!==void 0?function(t){return xt.create(Qo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return be()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return _i.create(t.compositeFilter.filters.map(i=>dC(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return be()}}(t.compositeFilter.op))}(n):be()}function Tk(n){return lk[n]}function wk(n){return uk[n]}function bk(n){return ck[n]}function Ko(n){return{fieldPath:n.canonicalString()}}function Qo(n){return rn.fromServerFormat(n.fieldPath)}function mC(n){return n instanceof xt?function(t){if(t.op==="=="){if(bw(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NAN"}};if(ww(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bw(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NAN"}};if(ww(t.value))return{unaryFilter:{field:Ko(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ko(t.field),op:wk(t.op),value:t.value}}}(n):n instanceof _i?function(t){const i=t.getFilters().map(a=>mC(a));return i.length===1?i[0]:{compositeFilter:{op:bk(t.op),filters:i}}}(n):be()}function Sk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function pC(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Cs{constructor(e,t,i,a,o=Ae.min(),u=Ae.min(),f=sn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new Cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ak{constructor(e){this.Tt=e}}function Ck(n){const e=vk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?__(e,e.limit,"L"):e}/**
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
 */class Rk{constructor(){this.Tn=new Ik}addToCollectionParentIndex(e,t){return this.Tn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(Ps.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(Ps.min())}updateCollectionGroup(e,t,i){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class Ik{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new Bt(ht.comparator),o=!a.has(i);return this.index[t]=a.add(i),o}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Bt(ht.comparator)).toArray()}}/**
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
 */const Vw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gC=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
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
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(gC,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
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
 */const Uw="LruGarbageCollector",Nk=1048576;function jw([n,e],[t,i]){const a=ze(n,t);return a===0?ze(e,i):a}class xk{constructor(e){this.Hn=e,this.buffer=new Bt(jw),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();jw(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Dk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){he(Uw,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Al(t)?he(Uw,"Ignoring IndexedDB error during garbage collection: ",t):await Sl(t)}await this.er(3e5)})}}class Ok{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Cd.ae);const i=new xk(t);return this.tr.forEachTarget(e,a=>i.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>i.Zn(a))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Vw)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vw):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,a,o,u,f,m,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),a=this.params.maximumSequenceNumbersToCollect):a=E,u=Date.now(),this.nthSequenceNumber(e,a))).next(E=>(i=E,f=Date.now(),this.removeTargets(e,i,t))).next(E=>(o=E,m=Date.now(),this.removeOrphanedDocuments(e,i))).next(E=>(p=Date.now(),Ho()<=Le.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(f-u)+`ms
	Removed ${o} targets in `+(m-f)+`ms
	Removed ${E} documents in `+(p-m)+`ms
Total Duration: ${p-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:o,documentsRemoved:E})))}}function kk(n,e){return new Ok(n,e)}/**
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
 */class Mk{constructor(){this.changes=new Ha(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?ee.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Pk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Lk{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(i!==null&&ec(i.mutation,a,Un.empty(),jt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,je()).next(()=>i))}getLocalViewOfDocuments(e,t,i=je()){const a=Ra();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,i).next(o=>{let u=Qu();return o.forEach((f,m)=>{u=u.insert(f,m.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const i=Ra();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,je()))}populateOverlays(e,t,i){const a=[];return i.forEach(o=>{t.has(o)||a.push(o)}),this.documentOverlayCache.getOverlays(e,a).next(o=>{o.forEach((u,f)=>{t.set(u,f)})})}computeViews(e,t,i,a){let o=kr();const u=Zu(),f=function(){return Zu()}();return t.forEach((m,p)=>{const y=i.get(p.key);a.has(p.key)&&(y===void 0||y.mutation instanceof Ks)?o=o.insert(p.key,p):y!==void 0?(u.set(p.key,y.mutation.getFieldMask()),ec(y.mutation,p,y.mutation.getFieldMask(),jt.now())):u.set(p.key,Un.empty())}),this.recalculateAndSaveOverlays(e,o).next(m=>(m.forEach((p,y)=>u.set(p,y)),t.forEach((p,y)=>{var E;return f.set(p,new Pk(y,(E=u.get(p))!==null&&E!==void 0?E:null))}),f))}recalculateAndSaveOverlays(e,t){const i=Zu();let a=new Dt((u,f)=>u-f),o=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const f of u)f.keys().forEach(m=>{const p=t.get(m);if(p===null)return;let y=i.get(m)||Un.empty();y=f.applyToLocalView(p,y),i.set(m,y);const E=(a.get(f.batchId)||je()).add(m);a=a.insert(f.batchId,E)})}).next(()=>{const u=[],f=a.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),p=m.key,y=m.value,E=XA();y.forEach(w=>{if(!o.has(w)){const S=iC(t.get(w),i.get(w));S!==null&&E.set(w,S),o=o.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,p,E))}return ee.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,a){return function(u){return ve.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):KA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next(o=>{const u=a-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-o.size):ee.resolve(Ra());let f=hc,m=o;return u.next(p=>ee.forEach(p,(y,E)=>(f<E.largestBatchId&&(f=E.largestBatchId),o.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{m=m.insert(y,w)}))).next(()=>this.populateOverlays(e,p,o)).next(()=>this.computeViews(e,m,p,je())).next(y=>({batchId:f,changes:WA(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(i=>{let a=Qu();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const o=t.collectionGroup;let u=Qu();return this.indexManager.getCollectionParents(e,o).next(f=>ee.forEach(f,m=>{const p=function(E,w){return new Nc(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,m.child(o));return this.getDocumentsMatchingCollectionQuery(e,p,i,a).next(y=>{y.forEach((E,w)=>{u=u.insert(E,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,i,a){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,a))).next(u=>{o.forEach((m,p)=>{const y=p.getKey();u.get(y)===null&&(u=u.insert(y,fn.newInvalidDocument(y)))});let f=Qu();return u.forEach((m,p)=>{const y=o.get(m);y!==void 0&&ec(y.mutation,p,Un.empty(),jt.now()),xd(t,p)&&(f=f.insert(m,p))}),f})}}/**
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
 */class Vk{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return ee.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:ji(a.createTime)}}(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:Ck(a.bundledQuery),readTime:ji(a.readTime)}}(t)),ee.resolve()}}/**
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
 */class Uk{constructor(){this.overlays=new Dt(ve.comparator),this.Rr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ra();return ee.forEach(t,a=>this.getOverlay(e,a).next(o=>{o!==null&&i.set(a,o)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((a,o)=>{this.Et(e,t,o)}),ee.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Rr.get(i);return a!==void 0&&(a.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(i)),ee.resolve()}getOverlaysForCollection(e,t,i){const a=Ra(),o=t.length+1,u=new ve(t.child("")),f=this.overlays.getIteratorFrom(u);for(;f.hasNext();){const m=f.getNext().value,p=m.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===o&&m.largestBatchId>i&&a.set(m.getKey(),m)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let o=new Dt((p,y)=>p-y);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>i){let y=o.get(p.largestBatchId);y===null&&(y=Ra(),o=o.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const f=Ra(),m=o.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((p,y)=>f.set(p,y)),!(f.size()>=a)););return ee.resolve(f)}Et(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const u=this.Rr.get(a.largestBatchId).delete(i.key);this.Rr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new nk(t,i));let o=this.Rr.get(t);o===void 0&&(o=je(),this.Rr.set(t,o)),this.Rr.set(t,o.add(i.key))}}/**
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
 */class jk{constructor(){this.sessionToken=sn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
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
 */class my{constructor(){this.Vr=new Bt(Yt.mr),this.gr=new Bt(Yt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new Yt(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new Yt(e,t))}Sr(e,t){e.forEach(i=>this.removeReference(i,t))}br(e){const t=new ve(new ht([])),i=new Yt(t,e),a=new Yt(t,e+1),o=[];return this.gr.forEachInRange([i,a],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ve(new ht([])),i=new Yt(t,e),a=new Yt(t,e+1);let o=je();return this.gr.forEachInRange([i,a],u=>{o=o.add(u.key)}),o}containsKey(e){const t=new Yt(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Yt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ve.comparator(e.key,t.key)||ze(e.Cr,t.Cr)}static pr(e,t){return ze(e.Cr,t.Cr)||ve.comparator(e.key,t.key)}}/**
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
 */class Bk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Bt(Yt.mr)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new tk(o,t,i,a);this.mutationQueue.push(u);for(const f of a)this.Mr=this.Mr.add(new Yt(f.key,o)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return ee.resolve(u)}lookupMutationBatch(e,t){return ee.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.Nr(i),o=a<0?0:a;return ee.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?ry:this.Fr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Yt(t,0),a=new Yt(t,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([i,a],u=>{const f=this.Or(u.Cr);o.push(f)}),ee.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Bt(ze);return t.forEach(a=>{const o=new Yt(a,0),u=new Yt(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],f=>{i=i.add(f.Cr)})}),ee.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let o=i;ve.isDocumentKey(o)||(o=o.child(""));const u=new Yt(new ve(o),0);let f=new Bt(ze);return this.Mr.forEachWhile(m=>{const p=m.key.path;return!!i.isPrefixOf(p)&&(p.length===a&&(f=f.add(m.Cr)),!0)},u),ee.resolve(this.Br(f))}Br(e){const t=[];return e.forEach(i=>{const a=this.Or(i);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){et(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return ee.forEach(t.mutations,a=>{const o=new Yt(a.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new Yt(t,0),a=this.Mr.firstAfterOrEqual(i);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class zk{constructor(e){this.kr=e,this.docs=function(){return new Dt(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),o=a?a.size:0,u=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return ee.resolve(i?i.document.mutableCopy():fn.newInvalidDocument(t))}getEntries(e,t){let i=kr();return t.forEach(a=>{const o=this.docs.get(a);i=i.insert(a,o?o.document.mutableCopy():fn.newInvalidDocument(a))}),ee.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let o=kr();const u=t.path,f=new ve(u.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:p,value:{document:y}}=m.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||pO(mO(y),i)<=0||(a.has(y.key)||xd(t,y))&&(o=o.insert(y.key,y.mutableCopy()))}return ee.resolve(o)}getAllFromCollectionGroup(e,t,i,a){be()}qr(e,t){return ee.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new Fk(this)}getSize(e){return ee.resolve(this.size)}}class Fk extends Mk{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(i)}),ee.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class qk{constructor(e){this.persistence=e,this.Qr=new Ha(t=>oy(t),ly),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.$r=0,this.Kr=new my,this.targetCount=0,this.Ur=ll.Kn()}forEachTarget(e,t){return this.Qr.forEach((i,a)=>t(a)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),ee.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new ll(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.zn(t),ee.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,i){let a=0;const o=[];return this.Qr.forEach((u,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)}),ee.waitFor(o).next(()=>a)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return ee.resolve(i)}addMatchingKeys(e,t,i){return this.Kr.yr(t,i),ee.resolve()}removeMatchingKeys(e,t,i){this.Kr.Sr(t,i);const a=this.persistence.referenceDelegate,o=[];return a&&t.forEach(u=>{o.push(a.markPotentiallyOrphaned(e,u))}),ee.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Kr.vr(t);return ee.resolve(i)}containsKey(e,t){return ee.resolve(this.Kr.containsKey(t))}}/**
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
 */class _C{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Cd(0),this.zr=!1,this.zr=!0,this.jr=new jk,this.referenceDelegate=e(this),this.Hr=new qk(this),this.indexManager=new Rk,this.remoteDocumentCache=function(a){return new zk(a)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new Ak(t),this.Yr=new Vk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Uk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new Bk(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){he("MemoryPersistence","Starting transaction:",e);const a=new Hk(this.Gr.next());return this.referenceDelegate.Zr(),i(a).next(o=>this.referenceDelegate.Xr(a).next(()=>o)).toPromise().then(o=>(a.raiseOnCommittedEvent(),o))}ei(e,t){return ee.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class Hk extends _O{constructor(e){super(),this.currentSequenceNumber=e}}class py{constructor(e){this.persistence=e,this.ti=new my,this.ni=null}static ri(e){return new py(e)}get ii(){if(this.ni)return this.ni;throw be()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),ee.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),ee.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(o=>this.ii.add(o.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.ii,i=>{const a=ve.fromPath(i);return this.si(e,a).next(o=>{o||t.removeEntry(a,Ae.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return ee.or([()=>ee.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Yf{constructor(e,t){this.persistence=e,this.oi=new Ha(i=>EO(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=kk(this,t)}static ri(e,t){return new Yf(e,t)}Zr(){}Xr(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return ee.forEach(this.oi,(i,a)=>this.ar(e,i,a).next(o=>o?ee.resolve():t(a)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),o=a.newChangeBuffer();return a.qr(e,u=>this.ar(e,u,t).next(f=>{f||(i++,o.removeEntry(u,Ae.min()))})).next(()=>o.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),ee.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Af(e.data.value)),t}ar(e,t,i){return ee.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return ee.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class gy{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=a}static Yi(e,t){let i=je(),a=je();for(const o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:a=a.add(o.doc.key)}return new gy(e,t.fromCache,i,a)}}/**
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
 */class Gk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Kk{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return L2()?8:yO(dn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,a){const o={result:null};return this.rs(e,t).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(e,t,a,i).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Gk;return this._s(e,t,u).next(f=>{if(o.result=f,this.Xi)return this.us(e,t,u,f.size)})}).next(()=>o.result)}us(e,t,i,a){return i.documentReadCount<this.es?(Ho()<=Le.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Go(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),ee.resolve()):(Ho()<=Le.DEBUG&&he("QueryEngine","Query:",Go(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.ts*a?(Ho()<=Le.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Go(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vi(t))):ee.resolve())}rs(e,t){if(Rw(t))return ee.resolve(null);let i=Vi(t);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=__(t,null,"F"),i=Vi(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(o=>{const u=je(...o);return this.ns.getDocuments(e,u).next(f=>this.indexManager.getMinOffset(e,i).next(m=>{const p=this.cs(t,f);return this.ls(t,p,u,m.readTime)?this.rs(e,__(t,null,"F")):this.hs(e,p,t,m)}))})))}ss(e,t,i,a){return Rw(t)||a.isEqual(Ae.min())?ee.resolve(null):this.ns.getDocuments(e,i).next(o=>{const u=this.cs(t,o);return this.ls(t,u,i,a)?ee.resolve(null):(Ho()<=Le.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Go(t)),this.hs(e,u,t,dO(a,hc)).next(f=>f))})}cs(e,t){let i=new Bt($A(e));return t.forEach((a,o)=>{xd(e,o)&&(i=i.add(o))}),i}ls(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(a)>0)}_s(e,t,i){return Ho()<=Le.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Go(t)),this.ns.getDocumentsMatchingQuery(e,t,Ps.min(),i)}hs(e,t,i,a){return this.ns.getDocumentsMatchingQuery(e,i,a).next(o=>(t.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
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
 */const _y="LocalStore",Qk=3e8;class $k{constructor(e,t,i,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new Dt(ze),this.Is=new Ha(o=>oy(o),ly),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lk(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function Yk(n,e,t,i){return new $k(n,e,t,i)}async function yC(n,e){const t=Ne(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next(o=>(a=o,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(o=>{const u=[],f=[];let m=je();for(const p of a){u.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}for(const p of o){f.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(i,m).next(p=>({Rs:p,removedBatchIds:u,addedBatchIds:f}))})})}function Wk(n,e){const t=Ne(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),o=t.ds.newChangeBuffer({trackRemovals:!0});return function(f,m,p,y){const E=p.batch,w=E.keys();let S=ee.resolve();return w.forEach(D=>{S=S.next(()=>y.getEntry(m,D)).next(U=>{const P=p.docVersions.get(D);et(P!==null),U.version.compareTo(P)<0&&(E.applyToRemoteDocument(U,p),U.isValidDocument()&&(U.setReadTime(p.commitVersion),y.addEntry(U)))})}),S.next(()=>f.mutationQueue.removeMutationBatch(m,E))}(t,i,e,o).next(()=>o.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let m=je();for(let p=0;p<f.mutationResults.length;++p)f.mutationResults[p].transformResults.length>0&&(m=m.add(f.batch.mutations[p].key));return m}(e))).next(()=>t.localDocuments.getDocuments(i,a))})}function vC(n){const e=Ne(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function Xk(n,e){const t=Ne(n),i=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const f=[];e.targetChanges.forEach((y,E)=>{const w=a.get(E);if(!w)return;f.push(t.Hr.removeMatchingKeys(o,y.removedDocuments,E).next(()=>t.Hr.addMatchingKeys(o,y.addedDocuments,E)));let S=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(E)!==null?S=S.withResumeToken(sn.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):y.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(y.resumeToken,i)),a=a.insert(E,S),function(U,P,z){return U.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=Qk?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(w,S,y)&&f.push(t.Hr.updateTargetData(o,S))});let m=kr(),p=je();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(o,y))}),f.push(Jk(o,u,e.documentUpdates).next(y=>{m=y.Vs,p=y.fs})),!i.isEqual(Ae.min())){const y=t.Hr.getLastRemoteSnapshotVersion(o).next(E=>t.Hr.setTargetsMetadata(o,o.currentSequenceNumber,i));f.push(y)}return ee.waitFor(f).next(()=>u.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,m,p)).next(()=>m)}).then(o=>(t.Ts=a,o))}function Jk(n,e,t){let i=je(),a=je();return t.forEach(o=>i=i.add(o)),e.getEntries(n,i).next(o=>{let u=kr();return t.forEach((f,m)=>{const p=o.get(f);m.isFoundDocument()!==p.isFoundDocument()&&(a=a.add(f)),m.isNoDocument()&&m.version.isEqual(Ae.min())?(e.removeEntry(f,m.readTime),u=u.insert(f,m)):!p.isValidDocument()||m.version.compareTo(p.version)>0||m.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(m),u=u.insert(f,m)):he(_y,"Ignoring outdated watch update for ",f,". Current version:",p.version," Watch version:",m.version)}),{Vs:u,fs:a}})}function Zk(n,e){const t=Ne(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=ry),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function eM(n,e){const t=Ne(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return t.Hr.getTargetData(i,e).next(o=>o?(a=o,ee.resolve(a)):t.Hr.allocateTargetId(i).next(u=>(a=new Cs(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=t.Ts.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function w_(n,e,t){const i=Ne(n),a=i.Ts.get(e),o=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",o,u=>i.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Al(u))throw u;he(_y,`Failed to update sequence numbers for target ${e}: ${u}`)}i.Ts=i.Ts.remove(e),i.Is.delete(a.target)}function Bw(n,e,t){const i=Ne(n);let a=Ae.min(),o=je();return i.persistence.runTransaction("Execute query","readwrite",u=>function(m,p,y){const E=Ne(m),w=E.Is.get(y);return w!==void 0?ee.resolve(E.Ts.get(w)):E.Hr.getTargetData(p,y)}(i,u,Vi(e)).next(f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(u,f.targetId).next(m=>{o=m})}).next(()=>i.Ps.getDocumentsMatchingQuery(u,e,t?a:Ae.min(),t?o:je())).next(f=>(tM(i,jO(e),f),{documents:f,gs:o})))}function tM(n,e,t){let i=n.Es.get(e)||Ae.min();t.forEach((a,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)}),n.Es.set(e,i)}class zw{constructor(){this.activeTargetIds=GO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nM{constructor(){this.ho=new zw,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new zw,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iM{To(e){}shutdown(){}}/**
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
 */const Fw="ConnectivityMonitor";class qw{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){he(Fw,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){he(Fw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _f=null;function b_(){return _f===null?_f=function(){return 268435456+Math.round(2147483648*Math.random())}():_f++,"0x"+_f.toString(16)}/**
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
 */const yg="RestConnection",rM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sM{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${a}`,this.wo=this.databaseId.database===Ff?`project_id=${i}`:`project_id=${i}&database_id=${a}`}So(e,t,i,a,o){const u=b_(),f=this.bo(e,t.toUriEncodedString());he(yg,`Sending RPC '${e}' ${u}:`,f,i);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,a,o),this.vo(e,f,m,i).then(p=>(he(yg,`Received RPC '${e}' ${u}: `,p),p),p=>{throw il(yg,`RPC '${e}' ${u} failed with error: `,p,"url: ",f,"request:",i),p})}Co(e,t,i,a,o,u){return this.So(e,t,i,a,o)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,o)=>e[o]=a),i&&i.headers.forEach((a,o)=>e[o]=a)}bo(e,t){const i=rM[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
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
 */class aM{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const cn="WebChannelConnection";class oM extends sM{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,a){const o=b_();return new Promise((u,f)=>{const m=new bA;m.setWithCredentials(!0),m.listenOnce(SA.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Sf.NO_ERROR:const y=m.getResponseJson();he(cn,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),u(y);break;case Sf.TIMEOUT:he(cn,`RPC '${e}' ${o} timed out`),f(new fe(te.DEADLINE_EXCEEDED,"Request time out"));break;case Sf.HTTP_ERROR:const E=m.getStatus();if(he(cn,`RPC '${e}' ${o} failed with status:`,E,"response text:",m.getResponseText()),E>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const D=function(P){const z=P.toLowerCase().replace(/_/g,"-");return Object.values(te).indexOf(z)>=0?z:te.UNKNOWN}(S.status);f(new fe(D,S.message))}else f(new fe(te.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new fe(te.UNAVAILABLE,"Connection failed."));break;default:be()}}finally{he(cn,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(a);he(cn,`RPC '${e}' ${o} sending request:`,a),m.send(t,"POST",p,i,15)})}Wo(e,t,i){const a=b_(),o=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=RA(),f=CA(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const y=o.join("");he(cn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const E=u.createWebChannel(y,m);let w=!1,S=!1;const D=new aM({Fo:P=>{S?he(cn,`Not sending because RPC '${e}' stream ${a} is closed:`,P):(w||(he(cn,`Opening RPC '${e}' stream ${a} transport.`),E.open(),w=!0),he(cn,`RPC '${e}' stream ${a} sending:`,P),E.send(P))},Mo:()=>E.close()}),U=(P,z,H)=>{P.listen(z,G=>{try{H(G)}catch(ne){setTimeout(()=>{throw ne},0)}})};return U(E,Ku.EventType.OPEN,()=>{S||(he(cn,`RPC '${e}' stream ${a} transport opened.`),D.Qo())}),U(E,Ku.EventType.CLOSE,()=>{S||(S=!0,he(cn,`RPC '${e}' stream ${a} transport closed`),D.Ko())}),U(E,Ku.EventType.ERROR,P=>{S||(S=!0,il(cn,`RPC '${e}' stream ${a} transport errored:`,P),D.Ko(new fe(te.UNAVAILABLE,"The operation could not be completed")))}),U(E,Ku.EventType.MESSAGE,P=>{var z;if(!S){const H=P.data[0];et(!!H);const G=H,ne=(G==null?void 0:G.error)||((z=G[0])===null||z===void 0?void 0:z.error);if(ne){he(cn,`RPC '${e}' stream ${a} received error:`,ne);const se=ne.status;let W=function(b){const x=Nt[b];if(x!==void 0)return aC(x)}(se),O=ne.message;W===void 0&&(W=te.INTERNAL,O="Unknown error status: "+se+" with message "+ne.message),S=!0,D.Ko(new fe(W,O)),E.close()}else he(cn,`RPC '${e}' stream ${a} received:`,H),D.Uo(H)}}),U(f,AA.STAT_EVENT,P=>{P.stat===c_.PROXY?he(cn,`RPC '${e}' stream ${a} detected buffering proxy`):P.stat===c_.NOPROXY&&he(cn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function vg(){return typeof document<"u"?document:null}/**
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
 */function Md(n){return new hk(n,!0)}/**
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
 */class EC{constructor(e,t,i=1e3,a=1.5,o=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=a,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-i);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Hw="PersistentStream";class TC{constructor(e,t,i,a,o,u,f,m){this.Ti=e,this.n_=i,this.r_=a,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new EC(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===te.RESOURCE_EXHAUSTED?(Or(t.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===te.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.i_===t&&this.V_(i,a)},i=>{e(()=>{const a=new fe(te.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(a)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{i(()=>this.m_(a))}),this.stream.onMessage(a=>{i(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return he(Hw,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(he(Hw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lM extends TC{constructor(e,t,i,a,o,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,u),this.serializer=o}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=mk(this.serializer,e),i=function(o){if(!("targetChange"in o))return Ae.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?Ae.min():u.readTime?ji(u.readTime):Ae.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=T_(this.serializer),t.addTarget=function(o,u){let f;const m=u.target;if(f=p_(m)?{documents:_k(o,m)}:{query:yk(o,m).ht},f.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){f.resumeToken=uC(o,u.resumeToken);const p=y_(o,u.expectedCount);p!==null&&(f.expectedCount=p)}else if(u.snapshotVersion.compareTo(Ae.min())>0){f.readTime=$f(o,u.snapshotVersion.toTimestamp());const p=y_(o,u.expectedCount);p!==null&&(f.expectedCount=p)}return f}(this.serializer,e);const i=Ek(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=T_(this.serializer),t.removeTarget=e,this.I_(t)}}class uM extends TC{constructor(e,t,i,a,o,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return et(!!e.streamToken),this.lastStreamToken=e.streamToken,et(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=gk(e.writeResults,e.commitTime),i=ji(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=T_(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>pk(this.serializer,i))};this.I_(t)}}/**
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
 */class cM{}class hM extends cM{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new fe(te.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,i,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(e,v_(t,i),a,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new fe(te.UNKNOWN,o.toString())})}Co(e,t,i,a,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Co(e,v_(t,i),a,u,f,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===te.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new fe(te.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class fM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Ma="RemoteStore";class dM{constructor(e,t,i,a,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{i.enqueueAndForget(async()=>{Ga(this)&&(he(Ma,"Restarting streams for network reachability change."),await async function(m){const p=Ne(m);p.W_.add(4),await Oc(p),p.j_.set("Unknown"),p.W_.delete(4),await Pd(p)}(this))})}),this.j_=new fM(i,a)}}async function Pd(n){if(Ga(n))for(const e of n.G_)await e(!0)}async function Oc(n){for(const e of n.G_)await e(!1)}function wC(n,e){const t=Ne(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),Ty(t)?Ey(t):Cl(t).c_()&&vy(t,e))}function yy(n,e){const t=Ne(n),i=Cl(t);t.U_.delete(e),i.c_()&&bC(t,e),t.U_.size===0&&(i.c_()?i.P_():Ga(t)&&t.j_.set("Unknown"))}function vy(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Cl(n).y_(e)}function bC(n,e){n.H_.Ne(e),Cl(n).w_(e)}function Ey(n){n.H_=new ok({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Cl(n).start(),n.j_.B_()}function Ty(n){return Ga(n)&&!Cl(n).u_()&&n.U_.size>0}function Ga(n){return Ne(n).W_.size===0}function SC(n){n.H_=void 0}async function mM(n){n.j_.set("Online")}async function pM(n){n.U_.forEach((e,t)=>{vy(n,e)})}async function gM(n,e){SC(n),Ty(n)?(n.j_.q_(e),Ey(n)):n.j_.set("Unknown")}async function _M(n,e,t){if(n.j_.set("Online"),e instanceof lC&&e.state===2&&e.cause)try{await async function(a,o){const u=o.cause;for(const f of o.targetIds)a.U_.has(f)&&(await a.remoteSyncer.rejectListen(f,u),a.U_.delete(f),a.H_.removeTarget(f))}(n,e)}catch(i){he(Ma,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Wf(n,i)}else if(e instanceof If?n.H_.We(e):e instanceof oC?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Ae.min()))try{const i=await vC(n.localStore);t.compareTo(i)>=0&&await function(o,u){const f=o.H_.ot(u);return f.targetChanges.forEach((m,p)=>{if(m.resumeToken.approximateByteSize()>0){const y=o.U_.get(p);y&&o.U_.set(p,y.withResumeToken(m.resumeToken,u))}}),f.targetMismatches.forEach((m,p)=>{const y=o.U_.get(m);if(!y)return;o.U_.set(m,y.withResumeToken(sn.EMPTY_BYTE_STRING,y.snapshotVersion)),bC(o,m);const E=new Cs(y.target,m,p,y.sequenceNumber);vy(o,E)}),o.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(i){he(Ma,"Failed to raise snapshot:",i),await Wf(n,i)}}async function Wf(n,e,t){if(!Al(e))throw e;n.W_.add(1),await Oc(n),n.j_.set("Offline"),t||(t=()=>vC(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{he(Ma,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Pd(n)})}function AC(n,e){return e().catch(t=>Wf(n,t,e))}async function Ld(n){const e=Ne(n),t=js(e);let i=e.K_.length>0?e.K_[e.K_.length-1].batchId:ry;for(;yM(e);)try{const a=await Zk(e.localStore,i);if(a===null){e.K_.length===0&&t.P_();break}i=a.batchId,vM(e,a)}catch(a){await Wf(e,a)}CC(e)&&RC(e)}function yM(n){return Ga(n)&&n.K_.length<10}function vM(n,e){n.K_.push(e);const t=js(n);t.c_()&&t.S_&&t.b_(e.mutations)}function CC(n){return Ga(n)&&!js(n).u_()&&n.K_.length>0}function RC(n){js(n).start()}async function EM(n){js(n).C_()}async function TM(n){const e=js(n);for(const t of n.K_)e.b_(t.mutations)}async function wM(n,e,t){const i=n.K_.shift(),a=hy.from(i,e,t);await AC(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Ld(n)}async function bM(n,e){e&&js(n).S_&&await async function(i,a){if(function(u){return rk(u)&&u!==te.ABORTED}(a.code)){const o=i.K_.shift();js(i).h_(),await AC(i,()=>i.remoteSyncer.rejectFailedWrite(o.batchId,a)),await Ld(i)}}(n,e),CC(n)&&RC(n)}async function Gw(n,e){const t=Ne(n);t.asyncQueue.verifyOperationInProgress(),he(Ma,"RemoteStore received new credentials");const i=Ga(t);t.W_.add(3),await Oc(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Pd(t)}async function SM(n,e){const t=Ne(n);e?(t.W_.delete(2),await Pd(t)):e||(t.W_.add(2),await Oc(t),t.j_.set("Unknown"))}function Cl(n){return n.J_||(n.J_=function(t,i,a){const o=Ne(t);return o.M_(),new lM(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:mM.bind(null,n),No:pM.bind(null,n),Lo:gM.bind(null,n),p_:_M.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Ty(n)?Ey(n):n.j_.set("Unknown")):(await n.J_.stop(),SC(n))})),n.J_}function js(n){return n.Y_||(n.Y_=function(t,i,a){const o=Ne(t);return o.M_(),new uM(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:EM.bind(null,n),Lo:bM.bind(null,n),D_:TM.bind(null,n),v_:wM.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Ld(n)):(await n.Y_.stop(),n.K_.length>0&&(he(Ma,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class wy{constructor(e,t,i,a,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=o,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,o){const u=Date.now()+i,f=new wy(e,t,u,a,o);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function by(n,e){if(Or("AsyncQueue",`${e}: ${n}`),Al(n))return new fe(te.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Yo{static emptySet(e){return new Yo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||ve.comparator(t.key,i.key):(t,i)=>ve.comparator(t.key,i.key),this.keyedMap=Qu(),this.sortedSet=new Dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,o=i.getNext().key;if(!a.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Kw{constructor(){this.Z_=new Dt(ve.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):be():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class ul{constructor(e,t,i,a,o,u,f,m,p){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=p}static fromInitialDocuments(e,t,i,a,o){const u=[];return t.forEach(f=>{u.push({type:0,doc:f})}),new ul(e,t,Yo.emptySet(t),u,i,a,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
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
 */class AM{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class CM{constructor(){this.queries=Qw(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const a=Ne(t),o=a.queries;a.queries=Qw(),o.forEach((u,f)=>{for(const m of f.ta)m.onError(i)})})(this,new fe(te.ABORTED,"Firestore shutting down"))}}function Qw(){return new Ha(n=>QA(n),Nd)}async function IC(n,e){const t=Ne(n);let i=3;const a=e.query;let o=t.queries.get(a);o?!o.na()&&e.ra()&&(i=2):(o=new AM,i=e.ra()?0:1);try{switch(i){case 0:o.ea=await t.onListen(a,!0);break;case 1:o.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const f=by(u,`Initialization of query '${Go(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,o),o.ta.push(e),e.sa(t.onlineState),o.ea&&e.oa(o.ea)&&Sy(t)}async function NC(n,e){const t=Ne(n),i=e.query;let a=3;const o=t.queries.get(i);if(o){const u=o.ta.indexOf(e);u>=0&&(o.ta.splice(u,1),o.ta.length===0?a=e.ra()?0:1:!o.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function RM(n,e){const t=Ne(n);let i=!1;for(const a of e){const o=a.query,u=t.queries.get(o);if(u){for(const f of u.ta)f.oa(a)&&(i=!0);u.ea=a}}i&&Sy(t)}function IM(n,e,t){const i=Ne(n),a=i.queries.get(e);if(a)for(const o of a.ta)o.onError(t);i.queries.delete(e)}function Sy(n){n.ia.forEach(e=>{e.next()})}var S_,$w;($w=S_||(S_={}))._a="default",$w.Cache="cache";class xC{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new ul(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=ul.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==S_.Cache}}/**
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
 */class DC{constructor(e){this.key=e}}class OC{constructor(e){this.key=e}}class NM{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=je(),this.mutatedKeys=je(),this.ya=$A(e),this.wa=new Yo(this.ya)}get Sa(){return this.fa}ba(e,t){const i=t?t.Da:new Kw,a=t?t.wa:this.wa;let o=t?t.mutatedKeys:this.mutatedKeys,u=a,f=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,p=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,E)=>{const w=a.get(y),S=xd(this.query,E)?E:null,D=!!w&&this.mutatedKeys.has(w.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;w&&S?w.data.isEqual(S.data)?D!==U&&(i.track({type:3,doc:S}),P=!0):this.va(w,S)||(i.track({type:2,doc:S}),P=!0,(m&&this.ya(S,m)>0||p&&this.ya(S,p)<0)&&(f=!0)):!w&&S?(i.track({type:0,doc:S}),P=!0):w&&!S&&(i.track({type:1,doc:w}),P=!0,(m||p)&&(f=!0)),P&&(S?(u=u.add(S),o=U?o.add(y):o.delete(y)):(u=u.delete(y),o=o.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),o=o.delete(y.key),i.track({type:1,doc:y})}return{wa:u,Da:i,ls:f,mutatedKeys:o}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const o=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const u=e.Da.X_();u.sort((y,E)=>function(S,D){const U=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be()}};return U(S)-U(D)}(y.type,E.type)||this.ya(y.doc,E.doc)),this.Ca(i),a=a!=null&&a;const f=t&&!a?this.Fa():[],m=this.pa.size===0&&this.current&&!a?1:0,p=m!==this.ga;return this.ga=m,u.length!==0||p?{snapshot:new ul(this.query,e.wa,o,u,e.mutatedKeys,m===0,p,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:f}:{Ma:f}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Kw,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=je(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new OC(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new DC(i))}),t}Oa(e){this.fa=e.gs,this.pa=je();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return ul.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Ay="SyncEngine";class xM{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class DM{constructor(e){this.key=e,this.Ba=!1}}class OM{constructor(e,t,i,a,o,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new Ha(f=>QA(f),Nd),this.qa=new Map,this.Qa=new Set,this.$a=new Dt(ve.comparator),this.Ka=new Map,this.Ua=new my,this.Wa={},this.Ga=new Map,this.za=ll.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function kM(n,e,t=!0){const i=UC(n);let a;const o=i.ka.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),a=o.view.Na()):a=await kC(i,e,t,!0),a}async function MM(n,e){const t=UC(n);await kC(t,e,!0,!1)}async function kC(n,e,t,i){const a=await eM(n.localStore,Vi(e)),o=a.targetId,u=n.sharedClientState.addLocalQueryTarget(o,t);let f;return i&&(f=await PM(n,e,o,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&wC(n.remoteStore,a),f}async function PM(n,e,t,i,a){n.Ha=(E,w,S)=>async function(U,P,z,H){let G=P.view.ba(z);G.ls&&(G=await Bw(U.localStore,P.query,!1).then(({documents:O})=>P.view.ba(O,G)));const ne=H&&H.targetChanges.get(P.targetId),se=H&&H.targetMismatches.get(P.targetId)!=null,W=P.view.applyChanges(G,U.isPrimaryClient,ne,se);return Ww(U,P.targetId,W.Ma),W.snapshot}(n,E,w,S);const o=await Bw(n.localStore,e,!0),u=new NM(e,o.gs),f=u.ba(o.documents),m=Dc.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",a),p=u.applyChanges(f,n.isPrimaryClient,m);Ww(n,t,p.Ma);const y=new xM(e,t,u);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),p.snapshot}async function LM(n,e,t){const i=Ne(n),a=i.ka.get(e),o=i.qa.get(a.targetId);if(o.length>1)return i.qa.set(a.targetId,o.filter(u=>!Nd(u,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await w_(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),t&&yy(i.remoteStore,a.targetId),A_(i,a.targetId)}).catch(Sl)):(A_(i,a.targetId),await w_(i.localStore,a.targetId,!0))}async function VM(n,e){const t=Ne(n),i=t.ka.get(e),a=t.qa.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),yy(t.remoteStore,i.targetId))}async function UM(n,e,t){const i=GM(n);try{const a=await function(u,f){const m=Ne(u),p=jt.now(),y=f.reduce((S,D)=>S.add(D.key),je());let E,w;return m.persistence.runTransaction("Locally write mutations","readwrite",S=>{let D=kr(),U=je();return m.ds.getEntries(S,y).next(P=>{D=P,D.forEach((z,H)=>{H.isValidDocument()||(U=U.add(z))})}).next(()=>m.localDocuments.getOverlayedDocuments(S,D)).next(P=>{E=P;const z=[];for(const H of f){const G=ZO(H,E.get(H.key).overlayedDocument);G!=null&&z.push(new Ks(H.key,G,jA(G.value.mapValue),Ui.exists(!0)))}return m.mutationQueue.addMutationBatch(S,p,z,f)}).next(P=>{w=P;const z=P.applyToLocalDocumentSet(E,U);return m.documentOverlayCache.saveOverlays(S,P.batchId,z)})}).then(()=>({batchId:w.batchId,changes:WA(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(u,f,m){let p=u.Wa[u.currentUser.toKey()];p||(p=new Dt(ze)),p=p.insert(f,m),u.Wa[u.currentUser.toKey()]=p}(i,a.batchId,t),await kc(i,a.changes),await Ld(i.remoteStore)}catch(a){const o=by(a,"Failed to persist write");t.reject(o)}}async function MC(n,e){const t=Ne(n);try{const i=await Xk(t.localStore,e);e.targetChanges.forEach((a,o)=>{const u=t.Ka.get(o);u&&(et(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?u.Ba=!0:a.modifiedDocuments.size>0?et(u.Ba):a.removedDocuments.size>0&&(et(u.Ba),u.Ba=!1))}),await kc(t,i,e)}catch(i){await Sl(i)}}function Yw(n,e,t){const i=Ne(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.ka.forEach((o,u)=>{const f=u.view.sa(e);f.snapshot&&a.push(f.snapshot)}),function(u,f){const m=Ne(u);m.onlineState=f;let p=!1;m.queries.forEach((y,E)=>{for(const w of E.ta)w.sa(f)&&(p=!0)}),p&&Sy(m)}(i.eventManager,e),a.length&&i.La.p_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function jM(n,e,t){const i=Ne(n);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Ka.get(e),o=a&&a.key;if(o){let u=new Dt(ve.comparator);u=u.insert(o,fn.newNoDocument(o,Ae.min()));const f=je().add(o),m=new kd(Ae.min(),new Map,new Dt(ze),u,f);await MC(i,m),i.$a=i.$a.remove(o),i.Ka.delete(e),Cy(i)}else await w_(i.localStore,e,!1).then(()=>A_(i,e,t)).catch(Sl)}async function BM(n,e){const t=Ne(n),i=e.batch.batchId;try{const a=await Wk(t.localStore,e);LC(t,i,null),PC(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await kc(t,a)}catch(a){await Sl(a)}}async function zM(n,e,t){const i=Ne(n);try{const a=await function(u,f){const m=Ne(u);return m.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return m.mutationQueue.lookupMutationBatch(p,f).next(E=>(et(E!==null),y=E.keys(),m.mutationQueue.removeMutationBatch(p,E))).next(()=>m.mutationQueue.performConsistencyCheck(p)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(p,y,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>m.localDocuments.getDocuments(p,y))})}(i.localStore,e);LC(i,e,t),PC(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await kc(i,a)}catch(a){await Sl(a)}}function PC(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function LC(n,e,t){const i=Ne(n);let a=i.Wa[i.currentUser.toKey()];if(a){const o=a.get(e);o&&(t?o.reject(t):o.resolve(),a=a.remove(e)),i.Wa[i.currentUser.toKey()]=a}}function A_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach(i=>{n.Ua.containsKey(i)||VC(n,i)})}function VC(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(yy(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),Cy(n))}function Ww(n,e,t){for(const i of t)i instanceof DC?(n.Ua.addReference(i.key,e),FM(n,i)):i instanceof OC?(he(Ay,"Document no longer in limbo: "+i.key),n.Ua.removeReference(i.key,e),n.Ua.containsKey(i.key)||VC(n,i.key)):be()}function FM(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(he(Ay,"New document in limbo: "+t),n.Qa.add(i),Cy(n))}function Cy(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ve(ht.fromString(e)),i=n.za.next();n.Ka.set(i,new DM(t)),n.$a=n.$a.insert(t,i),wC(n.remoteStore,new Cs(Vi(uy(t.path)),i,"TargetPurposeLimboResolution",Cd.ae))}}async function kc(n,e,t){const i=Ne(n),a=[],o=[],u=[];i.ka.isEmpty()||(i.ka.forEach((f,m)=>{u.push(i.Ha(m,e,t).then(p=>{var y;if((p||t)&&i.isPrimaryClient){const E=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(m.targetId,E?"current":"not-current")}if(p){a.push(p);const E=gy.Yi(m.targetId,p);o.push(E)}}))}),await Promise.all(u),i.La.p_(a),await async function(m,p){const y=Ne(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>ee.forEach(p,w=>ee.forEach(w.Hi,S=>y.persistence.referenceDelegate.addReference(E,w.targetId,S)).next(()=>ee.forEach(w.Ji,S=>y.persistence.referenceDelegate.removeReference(E,w.targetId,S)))))}catch(E){if(!Al(E))throw E;he(_y,"Failed to update sequence numbers: "+E)}for(const E of p){const w=E.targetId;if(!E.fromCache){const S=y.Ts.get(w),D=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(D);y.Ts=y.Ts.insert(w,U)}}}(i.localStore,o))}async function qM(n,e){const t=Ne(n);if(!t.currentUser.isEqual(e)){he(Ay,"User change. New user:",e.toKey());const i=await yC(t.localStore,e);t.currentUser=e,function(o,u){o.Ga.forEach(f=>{f.forEach(m=>{m.reject(new fe(te.CANCELLED,u))})}),o.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await kc(t,i.Rs)}}function HM(n,e){const t=Ne(n),i=t.Ka.get(e);if(i&&i.Ba)return je().add(i.key);{let a=je();const o=t.qa.get(e);if(!o)return a;for(const u of o){const f=t.ka.get(u);a=a.unionWith(f.view.Sa)}return a}}function UC(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=MC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jM.bind(null,e),e.La.p_=RM.bind(null,e.eventManager),e.La.Ja=IM.bind(null,e.eventManager),e}function GM(n){const e=Ne(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zM.bind(null,e),e}class Xf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Md(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return Yk(this.persistence,new Kk,e.initialUser,this.serializer)}Xa(e){return new _C(py.ri,this.serializer)}Za(e){return new nM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xf.provider={build:()=>new Xf};class KM extends Xf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){et(this.persistence.referenceDelegate instanceof Yf);const i=this.persistence.referenceDelegate.garbageCollector;return new Dk(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new _C(i=>Yf.ri(i,t),this.serializer)}}class C_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Yw(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=qM.bind(null,this.syncEngine),await SM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CM}()}createDatastore(e){const t=Md(e.databaseInfo.databaseId),i=function(o){return new oM(o)}(e.databaseInfo);return function(o,u,f,m){return new hM(o,u,f,m)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,a,o,u,f){return new dM(i,a,o,u,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Yw(this.syncEngine,t,0),function(){return qw.D()?new qw:new iM}())}createSyncEngine(e,t){return function(a,o,u,f,m,p,y){const E=new OM(a,o,u,f,m,p);return y&&(E.ja=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const o=Ne(a);he(Ma,"RemoteStore shutting down."),o.W_.add(5),await Oc(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}C_.provider={build:()=>new C_};/**
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
 */class jC{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Or("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Bs="FirestoreClient";class QM{constructor(e,t,i,a,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=hn.UNAUTHENTICATED,this.clientId=NA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,async u=>{he(Bs,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(he(Bs,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=by(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Eg(n,e){n.asyncQueue.verifyOperationInProgress(),he(Bs,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async a=>{i.isEqual(a)||(await yC(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Xw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await $M(n);he(Bs,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Gw(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,a)=>Gw(e.remoteStore,a)),n._onlineComponents=e}async function $M(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(Bs,"Using user provided OfflineComponentProvider");try{await Eg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===te.FAILED_PRECONDITION||a.code===te.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;il("Error using user provided cache. Falling back to memory cache: "+t),await Eg(n,new Xf)}}else he(Bs,"Using default OfflineComponentProvider"),await Eg(n,new KM(void 0));return n._offlineComponents}async function BC(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(Bs,"Using user provided OnlineComponentProvider"),await Xw(n,n._uninitializedComponentsProvider._online)):(he(Bs,"Using default OnlineComponentProvider"),await Xw(n,new C_))),n._onlineComponents}function YM(n){return BC(n).then(e=>e.syncEngine)}async function zC(n){const e=await BC(n),t=e.eventManager;return t.onListen=kM.bind(null,e.syncEngine),t.onUnlisten=LM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=VM.bind(null,e.syncEngine),t}function WM(n,e,t={}){const i=new Nr;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,f,m,p){const y=new jC({next:w=>{y.su(),u.enqueueAndForget(()=>NC(o,E));const S=w.docs.has(f);!S&&w.fromCache?p.reject(new fe(te.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&m&&m.source==="server"?p.reject(new fe(te.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),E=new xC(uy(f.path),y,{includeMetadataChanges:!0,Ta:!0});return IC(o,E)}(await zC(n),n.asyncQueue,e,t,i)),i.promise}function XM(n,e,t={}){const i=new Nr;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,f,m,p){const y=new jC({next:w=>{y.su(),u.enqueueAndForget(()=>NC(o,E)),w.fromCache&&m.source==="server"?p.reject(new fe(te.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),E=new xC(f,y,{includeMetadataChanges:!0,Ta:!0});return IC(o,E)}(await zC(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function FC(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Jw=new Map;/**
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
 */function qC(n,e,t){if(!t)throw new fe(te.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function JM(n,e,t,i){if(e===!0&&i===!0)throw new fe(te.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Zw(n){if(!ve.isDocumentKey(n))throw new fe(te.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function eb(n){if(ve.isDocumentKey(n))throw new fe(te.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":be()}function Mr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vd(n);throw new fe(te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const HC="firestore.googleapis.com",tb=!0;class nb{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=HC,this.ssl=tb}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:tb;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nk)throw new fe(te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FC((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new fe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new fe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new fe(te.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ud{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nb({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nb(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new sO;switch(i.type){case"firstParty":return new uO(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new fe(te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=Jw.get(t);i&&(he("ComponentProvider","Removing Datastore"),Jw.delete(t),i.terminate())}(this),Promise.resolve()}}function ZM(n,e,t,i={}){var a;const o=(n=Mr(n,Ud))._getSettings(),u=`${e}:${t}`;if(o.host!==HC&&o.host!==u&&il("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),i.mockUserToken){let f,m;if(typeof i.mockUserToken=="string")f=i.mockUserToken,m=hn.MOCK_USER;else{f=cA(i.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const p=i.mockUserToken.sub||i.mockUserToken.user_id;if(!p)throw new fe(te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new hn(p)}n._authCredentials=new aO(new IA(f,m))}}/**
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
 */class Rl{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Rl(this.firestore,e,this._query)}}class Tn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ds(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tn(this.firestore,e,this._key)}}class Ds extends Rl{constructor(e,t,i){super(e,t,uy(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tn(this.firestore,null,new ve(e))}withConverter(e){return new Ds(this.firestore,e,this._path)}}function R_(n,e,...t){if(n=ft(n),qC("collection","path",e),n instanceof Ud){const i=ht.fromString(e,...t);return eb(i),new Ds(n,null,i)}{if(!(n instanceof Tn||n instanceof Ds))throw new fe(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ht.fromString(e,...t));return eb(i),new Ds(n.firestore,null,i)}}function gc(n,e,...t){if(n=ft(n),arguments.length===1&&(e=NA.newId()),qC("doc","path",e),n instanceof Ud){const i=ht.fromString(e,...t);return Zw(i),new Tn(n,null,new ve(i))}{if(!(n instanceof Tn||n instanceof Ds))throw new fe(te.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ht.fromString(e,...t));return Zw(i),new Tn(n.firestore,n instanceof Ds?n.converter:null,new ve(i))}}/**
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
 */const ib="AsyncQueue";class rb{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new EC(this,"async_queue_retry"),this.Su=()=>{const i=vg();i&&he(ib,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const t=vg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=vg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Nr;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Al(e))throw e;he(ib,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const a=function(u){let f=u.message||"";return u.stack&&(f=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),f}(i);throw Or("INTERNAL UNHANDLED ERROR: ",a),i}).then(i=>(this.pu=!1,i))));return this.bu=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=wy.createAndSchedule(this,e,t,i,o=>this.Fu(o));return this.fu.push(a),a}Du(){this.gu&&be()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Mc extends Ud{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new rb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rb(e),this._firestoreClient=void 0,await e}}}function jd(n,e){const t=typeof n=="object"?n:Ad(),i=typeof n=="string"?n:Ff,a=Hs(t,"firestore").getImmediate({identifier:i});if(!a._initialized){const o=oA("firestore");o&&ZM(a,...o)}return a}function Ry(n){if(n._terminated)throw new fe(te.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||eP(n),n._firestoreClient}function eP(n){var e,t,i;const a=n._freezeSettings(),o=function(f,m,p,y){return new bO(f,m,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,FC(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new QM(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}}(n._componentsProvider))}/**
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
 */class cl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cl(sn.fromBase64String(e))}catch(t){throw new fe(te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new cl(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class zd{constructor(e){this._methodName=e}}/**
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
 */class Iy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ze(this._lat,e._lat)||ze(this._long,e._long)}}/**
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
 */class Ny{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==a[o])return!1;return!0}(this._values,e._values)}}/**
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
 */const tP=/^__.*__$/;class nP{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ks(e,this.data,this.fieldMask,t,this.fieldTransforms):new xc(e,this.data,t,this.fieldTransforms)}}class GC{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ks(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function KC(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be()}}class Fd{constructor(e,t,i,a,o,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Fd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.$u(e),a}Ku(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Jf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(KC(this.Lu)&&tP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class iP{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Md(e)}ju(e,t,i,a=!1){return new Fd({Lu:e,methodName:t,zu:i,path:rn.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xy(n){const e=n._freezeSettings(),t=Md(n._databaseId);return new iP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rP(n,e,t,i,a,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,e,t,a);Oy("Data must be an object, but it was:",u,i);const f=QC(i,u);let m,p;if(o.merge)m=new Un(u.fieldMask),p=u.fieldTransforms;else if(o.mergeFields){const y=[];for(const E of o.mergeFields){const w=I_(e,E,t);if(!u.contains(w))throw new fe(te.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);YC(y,w)||y.push(w)}m=new Un(y),p=u.fieldTransforms.filter(E=>m.covers(E.field))}else m=null,p=u.fieldTransforms;return new nP(new Cn(f),m,p)}class qd extends zd{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qd}}function sP(n,e,t){return new Fd({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Dy extends zd{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=sP(this,e,!0),i=this.Hu.map(o=>Il(o,t)),a=new ol(i);return new YO(e.path,a)}isEqual(e){return e instanceof Dy&&nl(this.Hu,e.Hu)}}function aP(n,e,t,i){const a=n.ju(1,e,t);Oy("Data must be an object, but it was:",a,i);const o=[],u=Cn.empty();Gs(i,(m,p)=>{const y=ky(e,m,t);p=ft(p);const E=a.Ku(y);if(p instanceof qd)o.push(y);else{const w=Il(p,E);w!=null&&(o.push(y),u.set(y,w))}});const f=new Un(o);return new GC(u,f,a.fieldTransforms)}function oP(n,e,t,i,a,o){const u=n.ju(1,e,t),f=[I_(e,i,t)],m=[a];if(o.length%2!=0)throw new fe(te.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<o.length;w+=2)f.push(I_(e,o[w])),m.push(o[w+1]);const p=[],y=Cn.empty();for(let w=f.length-1;w>=0;--w)if(!YC(p,f[w])){const S=f[w];let D=m[w];D=ft(D);const U=u.Ku(S);if(D instanceof qd)p.push(S);else{const P=Il(D,U);P!=null&&(p.push(S),y.set(S,P))}}const E=new Un(p);return new GC(y,E,u.fieldTransforms)}function lP(n,e,t,i=!1){return Il(t,n.ju(i?4:3,e))}function Il(n,e){if($C(n=ft(n)))return Oy("Unsupported field value:",e,n),QC(n,e);if(n instanceof zd)return function(i,a){if(!KC(a.Lu))throw a.Wu(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(a);o&&a.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,a){const o=[];let u=0;for(const f of i){let m=Il(f,a.Uu(u));m==null&&(m={nullValue:"NULL_VALUE"}),o.push(m),u++}return{arrayValue:{values:o}}}(n,e)}return function(i,a){if((i=ft(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return KO(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const o=jt.fromDate(i);return{timestampValue:$f(a.serializer,o)}}if(i instanceof jt){const o=new jt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:$f(a.serializer,o)}}if(i instanceof Iy)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof cl)return{bytesValue:uC(a.serializer,i._byteString)};if(i instanceof Tn){const o=a.databaseId,u=i.firestore._databaseId;if(!u.isEqual(o))throw a.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:dy(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof Ny)return function(u,f){return{mapValue:{fields:{[VA]:{stringValue:UA},[qf]:{arrayValue:{values:u.toArray().map(p=>{if(typeof p!="number")throw f.Wu("VectorValues must only contain numeric values.");return cy(f.serializer,p)})}}}}}}(i,a);throw a.Wu(`Unsupported field value: ${Vd(i)}`)}(n,e)}function QC(n,e){const t={};return DA(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(n,(i,a)=>{const o=Il(a,e.qu(i));o!=null&&(t[i]=o)}),{mapValue:{fields:t}}}function $C(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof jt||n instanceof Iy||n instanceof cl||n instanceof Tn||n instanceof zd||n instanceof Ny)}function Oy(n,e,t){if(!$C(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const i=Vd(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function I_(n,e,t){if((e=ft(e))instanceof Bd)return e._internalPath;if(typeof e=="string")return ky(n,e);throw Jf("Field path arguments must be of type string or ",n,!1,void 0,t)}const uP=new RegExp("[~\\*/\\[\\]]");function ky(n,e,t){if(e.search(uP)>=0)throw Jf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Bd(...e.split("."))._internalPath}catch{throw Jf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Jf(n,e,t,i,a){const o=i&&!i.isEmpty(),u=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(o||u)&&(m+=" (found",o&&(m+=` in field ${i}`),u&&(m+=` in document ${a}`),m+=")"),new fe(te.INVALID_ARGUMENT,f+n+m)}function YC(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class WC{constructor(e,t,i,a,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Tn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(My("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cP extends WC{data(){return super.data()}}function My(n,e){return typeof e=="string"?ky(n,e):e instanceof Bd?e._internalPath:e._delegate._internalPath}/**
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
 */function hP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(te.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Py{}class fP extends Py{}function dP(n,e,...t){let i=[];e instanceof Py&&i.push(e),i=i.concat(t),function(o){const u=o.filter(m=>m instanceof Ly).length,f=o.filter(m=>m instanceof Hd).length;if(u>1||u>0&&f>0)throw new fe(te.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)n=a._apply(n);return n}class Hd extends fP{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Hd(e,t,i)}_apply(e){const t=this._parse(e);return XC(e._query,t),new Rl(e.firestore,e.converter,g_(e._query,t))}_parse(e){const t=xy(e.firestore);return function(o,u,f,m,p,y,E){let w;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new fe(te.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){ab(E,y);const D=[];for(const U of E)D.push(sb(m,o,U));w={arrayValue:{values:D}}}else w=sb(m,o,E)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||ab(E,y),w=lP(f,u,E,y==="in"||y==="not-in");return xt.create(p,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function mP(n,e,t){const i=e,a=My("where",n);return Hd._create(a,i,t)}class Ly extends Py{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ly(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:_i.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,o){let u=a;const f=o.getFlattenedFilters();for(const m of f)XC(u,m),u=g_(u,m)}(e._query,t),new Rl(e.firestore,e.converter,g_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function sb(n,e,t){if(typeof(t=ft(t))=="string"){if(t==="")throw new fe(te.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!KA(e)&&t.indexOf("/")!==-1)throw new fe(te.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ht.fromString(t));if(!ve.isDocumentKey(i))throw new fe(te.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Tw(n,new ve(i))}if(t instanceof Tn)return Tw(n,t._key);throw new fe(te.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Vd(t)}.`)}function ab(n,e){if(!Array.isArray(n)||n.length===0)throw new fe(te.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function XC(n,e){const t=function(a,o){for(const u of a)for(const f of u.getFlattenedFilters())if(o.indexOf(f.op)>=0)return f.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new fe(te.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(te.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class pP{convertValue(e,t="none"){switch(Us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return At(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw be()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Gs(e,(a,o)=>{i[a]=this.convertValue(o,t)}),i}convertVectorValue(e){var t,i,a;const o=(a=(i=(t=e.fields)===null||t===void 0?void 0:t[qf].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map(u=>At(u.doubleValue));return new Ny(o)}convertGeoPoint(e){return new Iy(At(e.latitude),At(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Id(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(fc(e));default:return null}}convertTimestamp(e){const t=Ls(e);return new jt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ht.fromString(e);et(pC(i));const a=new dc(i.get(1),i.get(3)),o=new ve(i.popFirst(5));return a.isEqual(t)||Or(`Document ${o} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */function gP(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class Yu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JC extends WC{constructor(e,t,i,a,o,u){super(e,t,i,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Nf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(My("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Nf extends JC{data(e={}){return super.data(e)}}class _P{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Yu(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Nf(this._firestore,this._userDataWriter,i.key,i,new Yu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,o){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(f=>{const m=new Nf(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Yu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(f=>o||f.type!==3).map(f=>{const m=new Nf(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Yu(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let p=-1,y=-1;return f.type!==0&&(p=u.indexOf(f.doc.key),u=u.delete(f.doc.key)),f.type!==1&&(u=u.add(f.doc),y=u.indexOf(f.doc.key)),{type:yP(f.type),doc:m,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function yP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be()}}/**
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
 */function vP(n){n=Mr(n,Tn);const e=Mr(n.firestore,Mc);return WM(Ry(e),n._key).then(t=>TP(e,n,t))}class ZC extends pP{constructor(e){super(),this.firestore=e}convertBytes(e){return new cl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tn(this.firestore,null,t)}}function N_(n){n=Mr(n,Rl);const e=Mr(n.firestore,Mc),t=Ry(e),i=new ZC(e);return hP(n._query),XM(t,n._query).then(a=>new _P(e,i,n,a))}function x_(n,e,t){n=Mr(n,Tn);const i=Mr(n.firestore,Mc),a=gP(n.converter,e,t);return eR(i,[rP(xy(i),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Ui.none())])}function EP(n,e,t,...i){n=Mr(n,Tn);const a=Mr(n.firestore,Mc),o=xy(a);let u;return u=typeof(e=ft(e))=="string"||e instanceof Bd?oP(o,"updateDoc",n._key,e,t,i):aP(o,"updateDoc",n._key,e),eR(a,[u.toMutation(n._key,Ui.exists(!0))])}function eR(n,e){return function(i,a){const o=new Nr;return i.asyncQueue.enqueueAndForget(async()=>UM(await YM(i),a,o)),o.promise}(Ry(n),e)}function TP(n,e,t){const i=t.docs.get(e._key),a=new ZC(n);return new JC(n,a,e._key,i,new Yu(t.hasPendingWrites,t.fromCache),e.converter)}function wP(...n){return new Dy("arrayUnion",n)}(function(e,t=!0){(function(a){bl=a})(qa),gi(new si("firestore",(i,{instanceIdentifier:a,options:o})=>{const u=i.getProvider("app").getImmediate(),f=new Mc(new oO(i.getProvider("auth-internal")),new cO(u,i.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new fe(te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dc(p.options.projectId,y)}(u,a),u);return o=Object.assign({useFetchStreams:t},o),f._setSettings(o),f},"PUBLIC").setMultipleInstances(!0)),In(cw,hw,e),In(cw,hw,"esm2017")})();var bP="firebase",SP="11.3.1";/**
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
 */In(bP,SP,"app");const tR="@firebase/installations",Vy="0.6.12";/**
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
 */const nR=1e4,iR=`w:${Vy}`,rR="FIS_v2",AP="https://firebaseinstallations.googleapis.com/v1",CP=60*60*1e3,RP="installations",IP="Installations";/**
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
 */const NP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Pa=new Fa(RP,IP,NP);function sR(n){return n instanceof yi&&n.code.includes("request-failed")}/**
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
 */function aR({projectId:n}){return`${AP}/projects/${n}/installations`}function oR(n){return{token:n.token,requestStatus:2,expiresIn:DP(n.expiresIn),creationTime:Date.now()}}async function lR(n,e){const i=(await e.json()).error;return Pa.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function uR({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function xP(n,{refreshToken:e}){const t=uR(n);return t.append("Authorization",OP(e)),t}async function cR(n){const e=await n();return e.status>=500&&e.status<600?n():e}function DP(n){return Number(n.replace("s","000"))}function OP(n){return`${rR} ${n}`}/**
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
 */async function kP({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=aR(n),a=uR(n),o=e.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={fid:t,authVersion:rR,appId:n.appId,sdkVersion:iR},f={method:"POST",headers:a,body:JSON.stringify(u)},m=await cR(()=>fetch(i,f));if(m.ok){const p=await m.json();return{fid:p.fid||t,registrationStatus:2,refreshToken:p.refreshToken,authToken:oR(p.authToken)}}else throw await lR("Create Installation",m)}/**
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
 */function hR(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function MP(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const PP=/^[cdef][\w-]{21}$/,D_="";function LP(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=VP(n);return PP.test(t)?t:D_}catch{return D_}}function VP(n){return MP(n).substr(0,22)}/**
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
 */function Gd(n){return`${n.appName}!${n.appId}`}/**
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
 */const fR=new Map;function dR(n,e){const t=Gd(n);mR(t,e),UP(t,e)}function mR(n,e){const t=fR.get(n);if(t)for(const i of t)i(e)}function UP(n,e){const t=jP();t&&t.postMessage({key:n,fid:e}),BP()}let Ia=null;function jP(){return!Ia&&"BroadcastChannel"in self&&(Ia=new BroadcastChannel("[Firebase] FID Change"),Ia.onmessage=n=>{mR(n.data.key,n.data.fid)}),Ia}function BP(){fR.size===0&&Ia&&(Ia.close(),Ia=null)}/**
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
 */const zP="firebase-installations-database",FP=1,La="firebase-installations-store";let Tg=null;function Uy(){return Tg||(Tg=yA(zP,FP,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(La)}}})),Tg}async function Zf(n,e){const t=Gd(n),a=(await Uy()).transaction(La,"readwrite"),o=a.objectStore(La),u=await o.get(t);return await o.put(e,t),await a.done,(!u||u.fid!==e.fid)&&dR(n,e.fid),e}async function pR(n){const e=Gd(n),i=(await Uy()).transaction(La,"readwrite");await i.objectStore(La).delete(e),await i.done}async function Kd(n,e){const t=Gd(n),a=(await Uy()).transaction(La,"readwrite"),o=a.objectStore(La),u=await o.get(t),f=e(u);return f===void 0?await o.delete(t):await o.put(f,t),await a.done,f&&(!u||u.fid!==f.fid)&&dR(n,f.fid),f}/**
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
 */async function jy(n){let e;const t=await Kd(n.appConfig,i=>{const a=qP(i),o=HP(n,a);return e=o.registrationPromise,o.installationEntry});return t.fid===D_?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function qP(n){const e=n||{fid:LP(),registrationStatus:0};return gR(e)}function HP(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Pa.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=GP(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KP(n)}:{installationEntry:e}}async function GP(n,e){try{const t=await kP(n,e);return Zf(n.appConfig,t)}catch(t){throw sR(t)&&t.customData.serverCode===409?await pR(n.appConfig):await Zf(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function KP(n){let e=await ob(n.appConfig);for(;e.registrationStatus===1;)await hR(100),e=await ob(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await jy(n);return i||t}return e}function ob(n){return Kd(n,e=>{if(!e)throw Pa.create("installation-not-found");return gR(e)})}function gR(n){return QP(n)?{fid:n.fid,registrationStatus:0}:n}function QP(n){return n.registrationStatus===1&&n.registrationTime+nR<Date.now()}/**
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
 */async function $P({appConfig:n,heartbeatServiceProvider:e},t){const i=YP(n,t),a=xP(n,t),o=e.getImmediate({optional:!0});if(o){const p=await o.getHeartbeatsHeader();p&&a.append("x-firebase-client",p)}const u={installation:{sdkVersion:iR,appId:n.appId}},f={method:"POST",headers:a,body:JSON.stringify(u)},m=await cR(()=>fetch(i,f));if(m.ok){const p=await m.json();return oR(p)}else throw await lR("Generate Auth Token",m)}function YP(n,{fid:e}){return`${aR(n)}/${e}/authTokens:generate`}/**
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
 */async function By(n,e=!1){let t;const i=await Kd(n.appConfig,o=>{if(!_R(o))throw Pa.create("not-registered");const u=o.authToken;if(!e&&JP(u))return o;if(u.requestStatus===1)return t=WP(n,e),o;{if(!navigator.onLine)throw Pa.create("app-offline");const f=eL(o);return t=XP(n,f),f}});return t?await t:i.authToken}async function WP(n,e){let t=await lb(n.appConfig);for(;t.authToken.requestStatus===1;)await hR(100),t=await lb(n.appConfig);const i=t.authToken;return i.requestStatus===0?By(n,e):i}function lb(n){return Kd(n,e=>{if(!_R(e))throw Pa.create("not-registered");const t=e.authToken;return tL(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function XP(n,e){try{const t=await $P(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Zf(n.appConfig,i),t}catch(t){if(sR(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await pR(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zf(n.appConfig,i)}throw t}}function _R(n){return n!==void 0&&n.registrationStatus===2}function JP(n){return n.requestStatus===2&&!ZP(n)}function ZP(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+CP}function eL(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function tL(n){return n.requestStatus===1&&n.requestTime+nR<Date.now()}/**
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
 */async function nL(n){const e=n,{installationEntry:t,registrationPromise:i}=await jy(e);return i?i.catch(console.error):By(e).catch(console.error),t.fid}/**
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
 */async function iL(n,e=!1){const t=n;return await rL(t),(await By(t,e)).token}async function rL(n){const{registrationPromise:e}=await jy(n);e&&await e}/**
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
 */function sL(n){if(!n||!n.options)throw wg("App Configuration");if(!n.name)throw wg("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw wg(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function wg(n){return Pa.create("missing-app-config-values",{valueName:n})}/**
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
 */const yR="installations",aL="installations-internal",oL=n=>{const e=n.getProvider("app").getImmediate(),t=sL(e),i=Hs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},lL=n=>{const e=n.getProvider("app").getImmediate(),t=Hs(e,yR).getImmediate();return{getId:()=>nL(t),getToken:a=>iL(t,a)}};function uL(){gi(new si(yR,oL,"PUBLIC")),gi(new si(aL,lL,"PRIVATE"))}uL();In(tR,Vy);In(tR,Vy,"esm2017");/**
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
 */const ed="analytics",cL="firebase_id",hL="origin",fL=60*1e3,dL="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zy="https://www.googletagmanager.com/gtag/js";/**
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
 */const Nn=new Ic("@firebase/analytics");/**
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
 */const mL={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},jn=new Fa("analytics","Analytics",mL);/**
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
 */function pL(n){if(!n.startsWith(zy)){const e=jn.create("invalid-gtag-resource",{gtagURL:n});return Nn.warn(e.message),""}return n}function vR(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function gL(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function _L(n,e){const t=gL("firebase-js-sdk-policy",{createScriptURL:pL}),i=document.createElement("script"),a=`${zy}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function yL(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function vL(n,e,t,i,a,o){const u=i[a];try{if(u)await e[u];else{const m=(await vR(t)).find(p=>p.measurementId===a);m&&await e[m.appId]}}catch(f){Nn.error(f)}n("config",a,o)}async function EL(n,e,t,i,a){try{let o=[];if(a&&a.send_to){let u=a.send_to;Array.isArray(u)||(u=[u]);const f=await vR(t);for(const m of u){const p=f.find(E=>E.measurementId===m),y=p&&e[p.appId];if(y)o.push(y);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",i,a||{})}catch(o){Nn.error(o)}}function TL(n,e,t,i){async function a(o,...u){try{if(o==="event"){const[f,m]=u;await EL(n,e,t,f,m)}else if(o==="config"){const[f,m]=u;await vL(n,e,t,i,f,m)}else if(o==="consent"){const[f,m]=u;n("consent",f,m)}else if(o==="get"){const[f,m,p]=u;n("get",f,m,p)}else if(o==="set"){const[f]=u;n("set",f)}else n(o,...u)}catch(f){Nn.error(f)}}return a}function wL(n,e,t,i,a){let o=function(...u){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(o=window[a]),window[a]=TL(o,n,e,t),{gtagCore:o,wrappedGtag:window[a]}}function bL(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(zy)&&t.src.includes(n))return t;return null}/**
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
 */const SL=30,AL=1e3;class CL{constructor(e={},t=AL){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ER=new CL;function RL(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function IL(n){var e;const{appId:t,apiKey:i}=n,a={method:"GET",headers:RL(i)},o=dL.replace("{app-id}",t),u=await fetch(o,a);if(u.status!==200&&u.status!==304){let f="";try{const m=await u.json();!((e=m.error)===null||e===void 0)&&e.message&&(f=m.error.message)}catch{}throw jn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:f})}return u.json()}async function NL(n,e=ER,t){const{appId:i,apiKey:a,measurementId:o}=n.options;if(!i)throw jn.create("no-app-id");if(!a){if(o)return{measurementId:o,appId:i};throw jn.create("no-api-key")}const u=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new OL;return setTimeout(async()=>{f.abort()},fL),TR({appId:i,apiKey:a,measurementId:o},u,f,e)}async function TR(n,{throttleEndTimeMillis:e,backoffCount:t},i,a=ER){var o;const{appId:u,measurementId:f}=n;try{await xL(i,e)}catch(m){if(f)return Nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:f};throw m}try{const m=await IL(n);return a.deleteThrottleMetadata(u),m}catch(m){const p=m;if(!DL(p)){if(a.deleteThrottleMetadata(u),f)return Nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:u,measurementId:f};throw m}const y=Number((o=p==null?void 0:p.customData)===null||o===void 0?void 0:o.httpStatus)===503?ew(t,a.intervalMillis,SL):ew(t,a.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return a.setThrottleMetadata(u,E),Nn.debug(`Calling attemptFetch again in ${y} millis`),TR(n,E,i,a)}}function xL(n,e){return new Promise((t,i)=>{const a=Math.max(e-Date.now(),0),o=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(o),i(jn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function DL(n){if(!(n instanceof yi)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class OL{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function kL(n,e,t,i,a){if(a&&a.global){n("event",t,i);return}else{const o=await e,u=Object.assign(Object.assign({},i),{send_to:o});n("event",t,u)}}/**
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
 */async function ML(){if(dA())try{await mA()}catch(n){return Nn.warn(jn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Nn.warn(jn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function PL(n,e,t,i,a,o,u){var f;const m=NL(n);m.then(S=>{t[S.measurementId]=S.appId,n.options.measurementId&&S.measurementId!==n.options.measurementId&&Nn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>Nn.error(S)),e.push(m);const p=ML().then(S=>{if(S)return i.getId()}),[y,E]=await Promise.all([m,p]);bL(o)||_L(o,y.measurementId),a("js",new Date);const w=(f=u==null?void 0:u.config)!==null&&f!==void 0?f:{};return w[hL]="firebase",w.update=!0,E!=null&&(w[cL]=E),a("config",y.measurementId,w),y.measurementId}/**
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
 */class LL{constructor(e){this.app=e}_delete(){return delete tc[this.app.options.appId],Promise.resolve()}}let tc={},ub=[];const cb={};let bg="dataLayer",VL="gtag",hb,wR,fb=!1;function UL(){const n=[];if(hA()&&n.push("This is a browser extension environment."),V2()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,a)=>`(${a+1}) ${i}`).join(" "),t=jn.create("invalid-analytics-context",{errorInfo:e});Nn.warn(t.message)}}function jL(n,e,t){UL();const i=n.options.appId;if(!i)throw jn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw jn.create("no-api-key");if(tc[i]!=null)throw jn.create("already-exists",{id:i});if(!fb){yL(bg);const{wrappedGtag:o,gtagCore:u}=wL(tc,ub,cb,bg,VL);wR=o,hb=u,fb=!0}return tc[i]=PL(n,ub,cb,e,hb,bg,t),new LL(n)}function BL(n=Ad()){n=ft(n);const e=Hs(n,ed);return e.isInitialized()?e.getImmediate():zL(n)}function zL(n,e={}){const t=Hs(n,ed);if(t.isInitialized()){const a=t.getImmediate();if(nl(e,t.getOptions()))return a;throw jn.create("already-initialized")}return t.initialize({options:e})}function FL(n,e,t,i){n=ft(n),kL(wR,tc[n.app.options.appId],e,t,i).catch(a=>Nn.error(a))}const db="@firebase/analytics",mb="0.10.11";function qL(){gi(new si(ed,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return jL(i,a,t)},"PUBLIC")),gi(new si("analytics-internal",n,"PRIVATE")),In(db,mb),In(db,mb,"esm2017");function n(e){try{const t=e.getProvider(ed).getImmediate();return{logEvent:(i,a,o)=>FL(t,i,a,o)}}catch(t){throw jn.create("interop-component-reg-failed",{reason:t})}}}qL();function Fy(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]]);return t}function bR(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HL=bR,SR=new Fa("auth","Firebase",bR());/**
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
 */const td=new Ic("@firebase/auth");function GL(n,...e){td.logLevel<=Le.WARN&&td.warn(`Auth (${qa}): ${n}`,...e)}function xf(n,...e){td.logLevel<=Le.ERROR&&td.error(`Auth (${qa}): ${n}`,...e)}/**
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
 */function qi(n,...e){throw Hy(n,...e)}function mi(n,...e){return Hy(n,...e)}function qy(n,e,t){const i=Object.assign(Object.assign({},HL()),{[e]:t});return new Fa("auth","Firebase",i).create(e,{appName:n.name})}function Oa(n){return qy(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function KL(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&qi(n,"argument-error"),qy(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Hy(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return SR.create(n,...e)}function Se(n,e,...t){if(!n)throw Hy(e,...t)}function Sr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw xf(e),new Error(e)}function Pr(n,e){n||Sr(e)}/**
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
 */function O_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function QL(){return pb()==="http:"||pb()==="https:"}function pb(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function $L(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QL()||hA()||"connection"in navigator)?navigator.onLine:!0}function YL(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Pc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pr(t>e,"Short delay should be less than long delay!"),this.isMobile=ey()||fA()}get(){return $L()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gy(n,e){Pr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class AR{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const WL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XL=new Pc(3e4,6e4);function Ky(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ka(n,e,t,i,a={}){return CR(n,a,async()=>{let o={},u={};i&&(e==="GET"?u=i:o={body:JSON.stringify(i)});const f=wl(Object.assign({key:n.config.apiKey},u)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const p=Object.assign({method:e,headers:m},o);return k2()||(p.referrerPolicy="no-referrer"),AR.fetch()(RR(n,n.config.apiHost,t,f),p)})}async function CR(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},WL),e);try{const a=new ZL(n),o=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await o.json();if("needConfirmation"in u)throw yf(n,"account-exists-with-different-credential",u);if(o.ok&&!("errorMessage"in u))return u;{const f=o.ok?u.errorMessage:u.error.message,[m,p]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw yf(n,"credential-already-in-use",u);if(m==="EMAIL_EXISTS")throw yf(n,"email-already-in-use",u);if(m==="USER_DISABLED")throw yf(n,"user-disabled",u);const y=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw qy(n,y,p);qi(n,y)}}catch(a){if(a instanceof yi)throw a;qi(n,"network-request-failed",{message:String(a)})}}async function JL(n,e,t,i,a={}){const o=await Ka(n,e,t,i,a);return"mfaPendingCredential"in o&&qi(n,"multi-factor-auth-required",{_serverResponse:o}),o}function RR(n,e,t,i){const a=`${e}${t}?${i}`;return n.config.emulator?Gy(n.config,a):`${n.config.apiScheme}://${a}`}class ZL{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mi(this.auth,"network-request-failed")),XL.get())})}}function yf(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=mi(n,e,i);return a.customData._tokenResponse=t,a}/**
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
 */async function e4(n,e){return Ka(n,"POST","/v1/accounts:delete",e)}async function IR(n,e){return Ka(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function nc(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t4(n,e=!1){const t=ft(n),i=await t.getIdToken(e),a=Qy(i);Se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const o=typeof a.firebase=="object"?a.firebase:void 0,u=o==null?void 0:o.sign_in_provider;return{claims:a,token:i,authTime:nc(Sg(a.auth_time)),issuedAtTime:nc(Sg(a.iat)),expirationTime:nc(Sg(a.exp)),signInProvider:u||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Sg(n){return Number(n)*1e3}function Qy(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return xf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Uf(t);return a?JSON.parse(a):(xf("Failed to decode base64 JWT payload"),null)}catch(a){return xf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function gb(n){const e=Qy(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof yi&&n4(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function n4({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class i4{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class k_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nc(this.lastLoginAt),this.creationTime=nc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nd(n){var e;const t=n.auth,i=await n.getIdToken(),a=await hl(n,IR(t,{idToken:i}));Se(a==null?void 0:a.users.length,t,"internal-error");const o=a.users[0];n._notifyReloadListener(o);const u=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?NR(o.providerUserInfo):[],f=s4(n.providerData,u),m=n.isAnonymous,p=!(n.email&&o.passwordHash)&&!(f!=null&&f.length),y=m?p:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new k_(o.createdAt,o.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function r4(n){const e=ft(n);await nd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s4(n,e){return[...n.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function NR(n){return n.map(e=>{var{providerId:t}=e,i=Fy(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function a4(n,e){const t=await CR(n,{},async()=>{const i=wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:o}=n.config,u=RR(n,a,"/v1/token",`key=${o}`),f=await n._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",AR.fetch()(u,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function o4(n,e){return Ka(n,"POST","/v2/accounts:revokeToken",Ky(n,e))}/**
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
 */class Wo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gb(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=gb(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:o}=await a4(e,t);this.updateTokensAndExpiration(i,a,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:o}=t,u=new Wo;return i&&(Se(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),a&&(Se(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),o&&(Se(typeof o=="number","internal-error",{appName:e}),u.expirationTime=o),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function Es(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ar{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,o=Fy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new i4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new k_(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await hl(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return t4(this,e)}reload(){return r4(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await nd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ii(this.auth.app))return Promise.reject(Oa(this.auth));const e=await this.getIdToken();return await hl(this,e4(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,o,u,f,m,p,y;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,S=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,D=(u=t.photoURL)!==null&&u!==void 0?u:void 0,U=(f=t.tenantId)!==null&&f!==void 0?f:void 0,P=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,z=(p=t.createdAt)!==null&&p!==void 0?p:void 0,H=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:G,emailVerified:ne,isAnonymous:se,providerData:W,stsTokenManager:O}=t;Se(G&&O,e,"internal-error");const I=Wo.fromJSON(this.name,O);Se(typeof G=="string",e,"internal-error"),Es(E,e.name),Es(w,e.name),Se(typeof ne=="boolean",e,"internal-error"),Se(typeof se=="boolean",e,"internal-error"),Es(S,e.name),Es(D,e.name),Es(U,e.name),Es(P,e.name),Es(z,e.name),Es(H,e.name);const b=new Ar({uid:G,auth:e,email:w,emailVerified:ne,displayName:E,isAnonymous:se,photoURL:D,phoneNumber:S,tenantId:U,stsTokenManager:I,createdAt:z,lastLoginAt:H});return W&&Array.isArray(W)&&(b.providerData=W.map(x=>Object.assign({},x))),P&&(b._redirectEventId=P),b}static async _fromIdTokenResponse(e,t,i=!1){const a=new Wo;a.updateFromServerResponse(t);const o=new Ar({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await nd(o),o}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];Se(a.localId!==void 0,"internal-error");const o=a.providerUserInfo!==void 0?NR(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(o!=null&&o.length),f=new Wo;f.updateFromIdToken(i);const m=new Ar({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:u}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new k_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(o!=null&&o.length)};return Object.assign(m,p),m}}/**
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
 */const _b=new Map;function Cr(n){Pr(n instanceof Function,"Expected a class definition");let e=_b.get(n);return e?(Pr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_b.set(n,e),e)}/**
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
 */class xR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xR.type="NONE";const yb=xR;/**
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
 */function Df(n,e,t){return`firebase:${n}:${e}:${t}`}class Xo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:o}=this.auth;this.fullUserKey=Df(this.userKey,a.apiKey,o),this.fullPersistenceKey=Df("persistence",a.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Xo(Cr(yb),e,i);const a=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let o=a[0]||Cr(yb);const u=Df(i,e.config.apiKey,e.name);let f=null;for(const p of t)try{const y=await p._get(u);if(y){const E=Ar._fromJSON(e,y);p!==o&&(f=E),o=p;break}}catch{}const m=a.filter(p=>p._shouldAllowMigration);return!o._shouldAllowMigration||!m.length?new Xo(o,e,i):(o=m[0],f&&await o._set(u,f.toJSON()),await Promise.all(t.map(async p=>{if(p!==o)try{await p._remove(u)}catch{}})),new Xo(o,e,i))}}/**
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
 */function vb(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(LR(e))return"Blackberry";if(VR(e))return"Webos";if(OR(e))return"Safari";if((e.includes("chrome/")||kR(e))&&!e.includes("edge/"))return"Chrome";if(PR(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function DR(n=dn()){return/firefox\//i.test(n)}function OR(n=dn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kR(n=dn()){return/crios\//i.test(n)}function MR(n=dn()){return/iemobile/i.test(n)}function PR(n=dn()){return/android/i.test(n)}function LR(n=dn()){return/blackberry/i.test(n)}function VR(n=dn()){return/webos/i.test(n)}function $y(n=dn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function l4(n=dn()){var e;return $y(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u4(){return M2()&&document.documentMode===10}function UR(n=dn()){return $y(n)||PR(n)||VR(n)||LR(n)||/windows phone/i.test(n)||MR(n)}/**
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
 */function jR(n,e=[]){let t;switch(n){case"Browser":t=vb(dn());break;case"Worker":t=`${vb(dn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qa}/${i}`}/**
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
 */class c4{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((u,f)=>{try{const m=e(o);u(m)}catch(m){f(m)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function h4(n,e={}){return Ka(n,"GET","/v2/passwordPolicy",Ky(n,e))}/**
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
 */const f4=6;class d4{constructor(e){var t,i,a,o;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:f4,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,o,u,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(o=m.containsUppercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(u=m.containsNumericCharacter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
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
 */class m4{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Eb(this),this.idTokenSubscription=new Eb(this),this.beforeStateQueue=new c4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=SR,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var i,a;if(!this._deleted&&(this.persistenceManager=await Xo.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await IR(this,{idToken:e}),i=await Ar._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ii(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!u||u===f)&&(m!=null&&m.user)&&(a=m.user,o=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await nd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ii(this.app))return Promise.reject(Oa(this));const t=e?ft(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ii(this.app)?Promise.reject(Oa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ii(this.app)?Promise.reject(Oa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await h4(this),t=new d4(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fa("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await o4(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Xo.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let u=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(f,this,"internal-error"),f.then(()=>{u||o(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,a);return()=>{u=!0,m()}}else{const m=e.addObserver(t);return()=>{u=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ii(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&GL(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Qd(n){return ft(n)}class Eb{constructor(e){this.auth=e,this.observer=null,this.addObserver=H2(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yy={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p4(n){Yy=n}function g4(n){return Yy.loadJS(n)}function _4(){return Yy.gapiScript}function y4(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function v4(n,e){const t=Hs(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),o=t.getOptions();if(nl(o,e??{}))return a;qi(a,"already-initialized")}return t.initialize({options:e})}function E4(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function T4(n,e,t){const i=Qd(n);Se(i._canInitEmulator,i,"emulator-config-failed"),Se(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,o=BR(e),{host:u,port:f}=w4(e),m=f===null?"":`:${f}`;i.config.emulator={url:`${o}//${u}${m}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:f,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),b4()}function BR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function w4(n){const e=BR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const o=a[1];return{host:o,port:Tb(i.substr(o.length+1))}}else{const[o,u]=i.split(":");return{host:o,port:Tb(u)}}}function Tb(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function b4(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class zR{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}/**
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
 */async function Jo(n,e){return JL(n,"POST","/v1/accounts:signInWithIdp",Ky(n,e))}/**
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
 */const S4="http://localhost";class Va extends zR{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Va(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,o=Fy(t,["providerId","signInMethod"]);if(!i||!a)return null;const u=new Va(i,a);return u.idToken=o.idToken||void 0,u.accessToken=o.accessToken||void 0,u.secret=o.secret,u.nonce=o.nonce,u.pendingToken=o.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return Jo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Jo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jo(e,t)}buildRequest(){const e={requestUri:S4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wl(t)}return e}}/**
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
 */class Wy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lc extends Wy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bs extends Lc{constructor(){super("facebook.com")}static credential(e){return Va._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bs.credential(e.oauthAccessToken)}catch{return null}}}bs.FACEBOOK_SIGN_IN_METHOD="facebook.com";bs.PROVIDER_ID="facebook.com";/**
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
 */class Ss extends Lc{constructor(){super("github.com")}static credential(e){return Va._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.GITHUB_SIGN_IN_METHOD="github.com";Ss.PROVIDER_ID="github.com";/**
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
 */class As extends Lc{constructor(){super("twitter.com")}static credential(e,t){return Va._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return As.credential(t,i)}catch{return null}}}As.TWITTER_SIGN_IN_METHOD="twitter.com";As.PROVIDER_ID="twitter.com";/**
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
 */class fl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const o=await Ar._fromIdTokenResponse(e,i,a),u=wb(i);return new fl({user:o,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=wb(i);return new fl({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function wb(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class id extends yi{constructor(e,t,i,a){var o;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,id.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new id(e,t,i,a)}}function FR(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?id._fromErrorAndOperation(n,o,e,i):o})}async function A4(n,e,t=!1){const i=await hl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return fl._forOperation(n,"link",i)}/**
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
 */async function C4(n,e,t=!1){const{auth:i}=n;if(ii(i.app))return Promise.reject(Oa(i));const a="reauthenticate";try{const o=await hl(n,FR(i,a,e,n),t);Se(o.idToken,i,"internal-error");const u=Qy(o.idToken);Se(u,i,"internal-error");const{sub:f}=u;return Se(n.uid===f,i,"user-mismatch"),fl._forOperation(n,a,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&qi(i,"user-mismatch"),o}}/**
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
 */async function R4(n,e,t=!1){if(ii(n.app))return Promise.reject(Oa(n));const i="signIn",a=await FR(n,i,e),o=await fl._fromIdTokenResponse(n,i,a);return t||await n._updateCurrentUser(o.user),o}/**
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
 */async function I4(n,e){return Ka(n,"POST","/v1/accounts:update",e)}/**
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
 */async function N4(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ft(n),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await hl(i,I4(i.auth,o));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const f=i.providerData.find(({providerId:m})=>m==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function x4(n,e,t,i){return ft(n).onIdTokenChanged(e,t,i)}function D4(n,e,t){return ft(n).beforeAuthStateChanged(e,t)}function O4(n){return ft(n).signOut()}const rd="__sak";/**
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
 */class qR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rd,"1"),this.storage.removeItem(rd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const k4=1e3,M4=10;class HR extends qR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=UR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,f,m)=>{this.notifyListeners(u,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},o=this.storage.getItem(i);u4()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,M4):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},k4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}HR.type="LOCAL";const P4=HR;/**
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
 */class GR extends qR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}GR.type="SESSION";const KR=GR;/**
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
 */function L4(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class $d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new $d(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:o}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(u).map(async p=>p(t.origin,o)),m=await L4(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$d.receivers=[];/**
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
 */function Xy(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class V4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let o,u;return new Promise((f,m)=>{const p=Xy("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},i);u={messageChannel:a,onMessage(E){const w=E;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(y),o=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),f(w.data.response);break;default:clearTimeout(y),clearTimeout(o),m(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Bi(){return window}function U4(n){Bi().location.href=n}/**
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
 */function QR(){return typeof Bi().WorkerGlobalScope<"u"&&typeof Bi().importScripts=="function"}async function j4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B4(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function z4(){return QR()?self:null}/**
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
 */const $R="firebaseLocalStorageDb",F4=1,sd="firebaseLocalStorage",YR="fbase_key";class Vc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Yd(n,e){return n.transaction([sd],e?"readwrite":"readonly").objectStore(sd)}function q4(){const n=indexedDB.deleteDatabase($R);return new Vc(n).toPromise()}function M_(){const n=indexedDB.open($R,F4);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(sd,{keyPath:YR})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(sd)?e(i):(i.close(),await q4(),e(await M_()))})})}async function bb(n,e,t){const i=Yd(n,!0).put({[YR]:e,value:t});return new Vc(i).toPromise()}async function H4(n,e){const t=Yd(n,!1).get(e),i=await new Vc(t).toPromise();return i===void 0?null:i.value}function Sb(n,e){const t=Yd(n,!0).delete(e);return new Vc(t).toPromise()}const G4=800,K4=3;class WR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await M_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>K4)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$d._getInstance(z4()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await j4(),!this.activeServiceWorker)return;this.sender=new V4(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await M_();return await bb(e,rd,"1"),await Sb(e,rd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>bb(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>H4(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sb(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const o=Yd(a,!1).getAll();return new Vc(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:o}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(o)&&(this.notifyListeners(a,o),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),G4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}WR.type="LOCAL";const Q4=WR;new Pc(3e4,6e4);/**
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
 */function XR(n,e){return e?Cr(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Jy extends zR{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Jo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $4(n){return R4(n.auth,new Jy(n),n.bypassAuthState)}function Y4(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),C4(t,new Jy(n),n.bypassAuthState)}async function W4(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),A4(t,new Jy(n),n.bypassAuthState)}/**
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
 */class JR{constructor(e,t,i,a,o=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:o,error:u,type:f}=e;if(u){this.reject(u);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $4;case"linkViaPopup":case"linkViaRedirect":return W4;case"reauthViaPopup":case"reauthViaRedirect":return Y4;default:qi(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const X4=new Pc(2e3,1e4);async function J4(n,e,t){if(ii(n.app))return Promise.reject(mi(n,"operation-not-supported-in-this-environment"));const i=Qd(n);KL(n,e,Wy);const a=XR(i,t);return new Na(i,"signInViaPopup",e,a).executeNotNull()}class Na extends JR{constructor(e,t,i,a,o){super(e,t,a,o),this.provider=i,this.authWindow=null,this.pollId=null,Na.currentPopupAction&&Na.currentPopupAction.cancel(),Na.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=Xy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Na.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X4.get())};e()}}Na.currentPopupAction=null;/**
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
 */const Z4="pendingRedirect",Of=new Map;class eV extends JR{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Of.get(this.auth._key());if(!e){try{const i=await tV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Of.set(this.auth._key(),e)}return this.bypassAuthState||Of.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tV(n,e){const t=rV(e),i=iV(n);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}function nV(n,e){Of.set(n._key(),e)}function iV(n){return Cr(n._redirectPersistence)}function rV(n){return Df(Z4,n.config.apiKey,n.name)}async function sV(n,e,t=!1){if(ii(n.app))return Promise.reject(Oa(n));const i=Qd(n),a=XR(i,e),u=await new eV(i,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
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
 */const aV=10*60*1e3;class oV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lV(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ZR(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(mi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aV&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ab(e))}saveEventToCache(e){this.cachedEventUids.add(Ab(e)),this.lastProcessedEventTime=Date.now()}}function Ab(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ZR({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lV(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ZR(n);default:return!1}}/**
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
 */async function uV(n,e={}){return Ka(n,"GET","/v1/projects",e)}/**
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
 */const cV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hV=/^https?/;async function fV(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uV(n);for(const t of e)try{if(dV(t))return}catch{}qi(n,"unauthorized-domain")}function dV(n){const e=O_(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!hV.test(t))return!1;if(cV.test(n))return i===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const mV=new Pc(3e4,6e4);function Cb(){const n=Bi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pV(n){return new Promise((e,t)=>{var i,a,o;function u(){Cb(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cb(),t(mi(n,"network-request-failed"))},timeout:mV.get()})}if(!((a=(i=Bi().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((o=Bi().gapi)===null||o===void 0)&&o.load)u();else{const f=y4("iframefcb");return Bi()[f]=()=>{gapi.load?u():t(mi(n,"network-request-failed"))},g4(`${_4()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw kf=null,e})}let kf=null;function gV(n){return kf=kf||pV(n),kf}/**
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
 */const _V=new Pc(5e3,15e3),yV="__/auth/iframe",vV="emulator/auth/iframe",EV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wV(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Gy(e,vV):`https://${n.config.authDomain}/${yV}`,i={apiKey:e.apiKey,appName:n.name,v:qa},a=TV.get(n.config.apiHost);a&&(i.eid=a);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${wl(i).slice(1)}`}async function bV(n){const e=await gV(n),t=Bi().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:wV(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EV,dontclear:!0},i=>new Promise(async(a,o)=>{await i.restyle({setHideOnLeave:!1});const u=mi(n,"network-request-failed"),f=Bi().setTimeout(()=>{o(u)},_V.get());function m(){Bi().clearTimeout(f),a(i)}i.ping(m).then(m,()=>{o(u)})}))}/**
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
 */const SV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AV=500,CV=600,RV="_blank",IV="http://localhost";class Rb{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NV(n,e,t,i=AV,a=CV){const o=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const m=Object.assign(Object.assign({},SV),{width:i.toString(),height:a.toString(),top:o,left:u}),p=dn().toLowerCase();t&&(f=kR(p)?RV:t),DR(p)&&(e=e||IV,m.scrollbars="yes");const y=Object.entries(m).reduce((w,[S,D])=>`${w}${S}=${D},`,"");if(l4(p)&&f!=="_self")return xV(e||"",f),new Rb(null);const E=window.open(e||"",f,y);Se(E,n,"popup-blocked");try{E.focus()}catch{}return new Rb(E)}function xV(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const DV="__/auth/handler",OV="emulator/auth/handler",kV=encodeURIComponent("fac");async function Ib(n,e,t,i,a,o){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:qa,eventId:a};if(e instanceof Wy){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",r_(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof Lc){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const f=u;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await n._getAppCheckToken(),p=m?`#${kV}=${encodeURIComponent(m)}`:"";return`${MV(n)}?${wl(f).slice(1)}${p}`}function MV({config:n}){return n.emulator?Gy(n,OV):`https://${n.authDomain}/${DV}`}/**
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
 */const Ag="webStorageSupport";class PV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KR,this._completeRedirectFn=sV,this._overrideRedirectResult=nV}async _openPopup(e,t,i,a){var o;Pr((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const u=await Ib(e,t,i,O_(),a);return NV(e,u,Xy())}async _openRedirect(e,t,i,a){await this._originValidation(e);const o=await Ib(e,t,i,O_(),a);return U4(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:o}=this.eventManagers[t];return a?Promise.resolve(a):(Pr(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await bV(e),i=new oV(e);return t.register("authEvent",a=>(Se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ag,{type:Ag},a=>{var o;const u=(o=a==null?void 0:a[0])===null||o===void 0?void 0:o[Ag];u!==void 0&&t(!!u),qi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fV(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return UR()||OR()||$y()}}const LV=PV;var Nb="@firebase/auth",xb="1.9.0";/**
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
 */class VV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UV(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jV(n){gi(new si("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:u,authDomain:f}=i.options;Se(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:u,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jR(n)},p=new m4(i,a,o,m);return E4(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),gi(new si("auth-internal",e=>{const t=Qd(e.getProvider("auth").getImmediate());return(i=>new VV(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Nb,xb,UV(n)),In(Nb,xb,"esm2017")}/**
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
 */const BV=5*60,zV=uA("authIdTokenMaxAge")||BV;let Db=null;const FV=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>zV)return;const a=t==null?void 0:t.token;Db!==a&&(Db=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function Wd(n=Ad()){const e=Hs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=v4(n,{popupRedirectResolver:LV,persistence:[Q4,P4,KR]}),i=uA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const u=FV(o.toString());D4(t,u,()=>u(t.currentUser)),x4(t,f=>u(f))}}const a=aA("auth");return a&&T4(t,`http://${a}`),t}function qV(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}p4({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=a=>{const o=mi("internal-error");o.customData=a,t(o)},i.type="text/javascript",i.charset="UTF-8",qV().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jV("Browser");var Ob={};const kb="@firebase/database",Mb="1.0.12";/**
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
 */let eI="";function HV(n){eI=n}/**
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
 */class GV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:uc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class KV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Qi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tI=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GV(e)}}catch{}return new KV},xa=tI("localStorage"),QV=tI("sessionStorage");/**
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
 */const Zo=new Ic("@firebase/database"),$V=function(){let n=1;return function(){return n++}}(),nI=function(n){const e=Q2(n),t=new q2;t.update(e);const i=t.digest();return Z_.encodeByteArray(i)},Uc=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Uc.apply(null,i):typeof i=="object"?e+=Ut(i):e+=i,e+=" "}return e};let ic=null,Pb=!0;const YV=function(n,e){ae(!0,"Can't turn on custom loggers persistently."),Zo.logLevel=Le.VERBOSE,ic=Zo.log.bind(Zo)},nn=function(...n){if(Pb===!0&&(Pb=!1,ic===null&&QV.get("logging_enabled")===!0&&YV()),ic){const e=Uc.apply(null,n);ic(e)}},jc=function(n){return function(...e){nn(n,...e)}},P_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Uc(...n);Zo.error(e)},Lr=function(...n){const e=`FIREBASE FATAL ERROR: ${Uc(...n)}`;throw Zo.error(e),new Error(e)},xn=function(...n){const e="FIREBASE WARNING: "+Uc(...n);Zo.warn(e)},WV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zy=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},XV=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},dl="[MIN_NAME]",Ua="[MAX_NAME]",Qa=function(n,e){if(n===e)return 0;if(n===dl||e===Ua)return-1;if(e===dl||n===Ua)return 1;{const t=Lb(n),i=Lb(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},JV=function(n,e){return n===e?0:n<e?-1:1},zu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ut(e))},ev=function(n){if(typeof n!="object"||n===null)return Ut(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Ut(e[i]),t+=":",t+=ev(n[e[i]]);return t+="}",t},iI=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let a=0;a<t;a+=e)a+e>t?i.push(n.substring(a,t)):i.push(n.substring(a,a+e));return i};function an(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const rI=function(n){ae(!Zy(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let a,o,u,f,m;n===0?(o=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),i),o=f+i,u=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(o=0,u=Math.round(n/Math.pow(2,1-i-t))));const p=[];for(m=t;m;m-=1)p.push(u%2?1:0),u=Math.floor(u/2);for(m=e;m;m-=1)p.push(o%2?1:0),o=Math.floor(o/2);p.push(a?1:0),p.reverse();const y=p.join("");let E="";for(m=0;m<64;m+=8){let w=parseInt(y.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),E=E+w}return E.toLowerCase()},ZV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function tU(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const nU=new RegExp("^-?(0*)\\d{1,10}$"),iU=-2147483648,rU=2147483647,Lb=function(n){if(nU.test(n)){const e=Number(n);if(e>=iU&&e<=rU)return e}return null},Nl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xn("Exception was thrown by user callback.",t),e},Math.floor(0))}},sU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},rc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class aU{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ii(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){xn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class oU{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(nn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xn(e)}}class Mf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Mf.OWNER="owner";/**
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
 */const tv="5",sI="v",aI="s",oI="r",lI="f",uI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cI="ls",hI="p",L_="ac",fI="websocket",dI="long_polling";/**
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
 */class mI{constructor(e,t,i,a,o=!1,u="",f=!1,m=!1){this.secure=t,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=u,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xa.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function lU(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function pI(n,e,t){ae(typeof e=="string","typeof type must == string"),ae(typeof t=="object","typeof params must == object");let i;if(e===fI)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===dI)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);lU(n)&&(t.ns=n.namespace);const a=[];return an(t,(o,u)=>{a.push(o+"="+u)}),i+a.join("&")}/**
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
 */class uU{constructor(){this.counters_={}}incrementCounter(e,t=1){Qi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return C2(this.counters_)}}/**
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
 */const Cg={},Rg={};function nv(n){const e=n.toString();return Cg[e]||(Cg[e]=new uU),Cg[e]}function cU(n,e){const t=n.toString();return Rg[t]||(Rg[t]=e()),Rg[t]}/**
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
 */class hU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&Nl(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Vb="start",fU="close",dU="pLPCommand",mU="pRTLPCB",gI="id",_I="pw",yI="ser",pU="cb",gU="seg",_U="ts",yU="d",vU="dframe",vI=1870,EI=30,EU=vI-EI,TU=25e3,wU=3e4;class $o{constructor(e,t,i,a,o,u,f){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=u,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=jc(e),this.stats_=nv(t),this.urlFn=m=>(this.appCheckToken&&(m[L_]=this.appCheckToken),pI(t,dI,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new hU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wU)),XV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new iv((...o)=>{const[u,f,m,p,y]=o;if(this.incrementIncomingBytes_(o),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Vb)this.id=f,this.password=m;else if(u===fU)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...o)=>{const[u,f]=o;this.incrementIncomingBytes_(o),this.myPacketOrderer.handleResponse(u,f)},()=>{this.onClosed_()},this.urlFn);const i={};i[Vb]="t",i[yI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[pU]=this.scriptTagHolder.uniqueCallbackIdentifier),i[sI]=tv,this.transportSessionId&&(i[aI]=this.transportSessionId),this.lastSessionId&&(i[cI]=this.lastSessionId),this.applicationId&&(i[hI]=this.applicationId),this.appCheckToken&&(i[L_]=this.appCheckToken),typeof location<"u"&&location.hostname&&uI.test(location.hostname)&&(i[oI]=lI);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$o.forceAllow_=!0}static forceDisallow(){$o.forceDisallow_=!0}static isAvailable(){return $o.forceAllow_?!0:!$o.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ZV()&&!eU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=rA(t),a=iI(i,EU);for(let o=0;o<a.length;o++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[o]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[vU]="t",i[gI]=e,i[_I]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ut(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class iv{constructor(e,t,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$V(),window[dU+this.uniqueCallbackIdentifier]=e,window[mU+this.uniqueCallbackIdentifier]=t,this.myIFrame=iv.createIFrame_();let o="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(o='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(f){nn("frame writing exception"),f.stack&&nn(f.stack),nn(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gI]=this.myID,e[_I]=this.myPW,e[yI]=this.currentSerial;let t=this.urlFn(e),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+EI+i.length<=vI;){const u=this.pendingSegs.shift();i=i+"&"+gU+a+"="+u.seg+"&"+_U+a+"="+u.ts+"&"+yU+a+"="+u.d,a++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(i,Math.floor(TU)),o=()=>{clearTimeout(a),i()};this.addTag(e,o)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{nn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const bU=16384,SU=45e3;let ad=null;typeof MozWebSocket<"u"?ad=MozWebSocket:typeof WebSocket<"u"&&(ad=WebSocket);class fi{constructor(e,t,i,a,o,u,f){this.connId=e,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=jc(this.connId),this.stats_=nv(t),this.connURL=fi.connectionURL_(t,u,f,a,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,a,o){const u={};return u[sI]=tv,typeof location<"u"&&location.hostname&&uI.test(location.hostname)&&(u[oI]=lI),t&&(u[aI]=t),i&&(u[cI]=i),a&&(u[L_]=a),o&&(u[hI]=o),pI(e,fI,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xa.set("previous_websocket_failure",!0);try{let i;P2(),this.mySock=new ad(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){fi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ad!==null&&!fi.forceDisallow_}static previouslyFailed(){return xa.isInMemoryStorage||xa.get("previous_websocket_failure")===!0}markConnectionHealthy(){xa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=uc(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ae(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=iI(t,bU);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(SU))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fi.responsesRequiredToBeHealthy=2;fi.healthyTimeout=3e4;/**
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
 */const AU=6e4,CU=5e3,RU=10*1024,IU=100*1024,Ig="t",Ub="d",NU="s",jb="r",xU="e",Bb="o",zb="a",Fb="n",qb="p",DU="h";class OU{constructor(e,t,i,a,o,u,f,m,p,y){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=u,this.onReady_=f,this.onDisconnect_=m,this.onKill_=p,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=jc("c:"+this.id+":"),this.transportManager_=new _c(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=rc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ig in e){const t=e[Ig];t===zb?this.upgradeIfSecondaryHealthy_():t===jb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Bb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=zu("t",e),i=zu("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:zb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Fb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=zu("t",e),i=zu("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=zu(Ig,e);if(Ub in e){const i=e[Ub];if(t===DU){const a=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===Fb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===NU?this.onConnectionShutdown_(i):t===jb?this.onReset_(i):t===xU?P_("Server Error: "+i):t===Bb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):P_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),tv!==i&&xn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),rc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):rc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(CU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qb,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class TI{put(e,t,i,a){}merge(e,t,i,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class wI{constructor(e){this.allowedEvents_=e,this.listeners_={},ae(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const a=this.getInitialEvent(e);a&&t.apply(i,a)}off(e,t,i){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let o=0;o<a.length;o++)if(a[o].callback===t&&(!i||i===a[o].context)){a.splice(o,1);return}}validateEventType_(e){ae(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class od extends wI{static getInstance(){return new od}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ey()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ae(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Hb=32,Gb=768;class st{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Xe(){return new st("")}function Ve(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function zs(n){return n.pieces_.length-n.pieceNum_}function ct(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new st(n.pieces_,e)}function rv(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function kU(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function yc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function bI(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new st(e,0)}function Tt(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof st)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&t.push(i[a])}return new st(t,0)}function Ue(n){return n.pieceNum_>=n.pieces_.length}function En(n,e){const t=Ve(n),i=Ve(e);if(t===null)return e;if(t===i)return En(ct(n),ct(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function MU(n,e){const t=yc(n,0),i=yc(e,0);for(let a=0;a<t.length&&a<i.length;a++){const o=Qa(t[a],i[a]);if(o!==0)return o}return t.length===i.length?0:t.length<i.length?-1:1}function sv(n,e){if(zs(n)!==zs(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ri(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(zs(n)>zs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class PU{constructor(e,t){this.errorPrefix_=t,this.parts_=yc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Sd(this.parts_[i]);SI(this)}}function LU(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Sd(e),SI(n)}function VU(n){const e=n.parts_.pop();n.byteLength_-=Sd(e),n.parts_.length>0&&(n.byteLength_-=1)}function SI(n){if(n.byteLength_>Gb)throw new Error(n.errorPrefix_+"has a key path longer than "+Gb+" bytes ("+n.byteLength_+").");if(n.parts_.length>Hb)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hb+") or object contains a cycle "+Ca(n))}function Ca(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class av extends wI{static getInstance(){return new av}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return ae(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Fu=1e3,UU=60*5*1e3,Kb=30*1e3,jU=1.3,BU=3e4,zU="server_kill",Qb=3;class xr extends TI{constructor(e,t,i,a,o,u,f,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=o,this.authTokenProvider_=u,this.appCheckTokenProvider_=f,this.authOverride_=m,this.id=xr.nextPersistentConnectionId_++,this.log_=jc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fu,this.maxReconnectDelay_=UU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");av.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&od.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const a=++this.requestNumber_,o={r:a,a:e,b:t};this.log_(Ut(o)),ae(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(o),i&&(this.requestCBHash_[a]=i)}get(e){this.initConnection_();const t=new bd,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const f=u.d;u.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const o=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(o),t.promise}listen(e,t,i,a){this.initConnection_();const o=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+o),this.listens.has(u)||this.listens.set(u,new Map),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ae(!this.listens.get(u).has(o),"listen() called twice for same path/queryId.");const f={onComplete:a,hashFn:t,query:e,tag:i};this.listens.get(u).set(o,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+i+" for "+a);const o={p:i},u="q";e.tag&&(o.q=t._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest(u,o,f=>{const m=f.d,p=f.s;xr.warnOnListenWarnings_(m,t),(this.listens.get(i)&&this.listens.get(i).get(a))===e&&(this.log_("listen response",f),p!=="ok"&&this.removeListen_(i,a),e.onComplete&&e.onComplete(p,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Qi(e,"w")){const i=tl(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',o=t._path.toString();xn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${o} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||F2(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=z2(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,a=>{const o=a.s,u=a.d||"error";this.authToken_===e&&(o==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(o,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),ae(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,e._queryObject,t)}sendUnlisten_(e,t,i,a){this.log_("Unlisten on "+e+" for "+t);const o={p:e},u="n";a&&(o.q=i,o.t=a),this.sendRequest(u,o)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,a){const o={p:t,d:i};this.log_("onDisconnect "+e,o),this.sendRequest(e,o,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,i,a){this.putInternal("p",e,t,i,a)}merge(e,t,i,a){this.putInternal("m",e,t,i,a)}putInternal(e,t,i,a,o){this.initConnection_();const u={p:t,d:i};o!==void 0&&(u.h=o),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,o=>{this.log_(t+" response",o),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(o.s,o.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const o=i.d;this.log_("reportStats","Error sending stats: "+o)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):P_("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ae(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BU&&(this.reconnectDelay_=Fu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*jU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+xr.nextConnectionId_++,o=this.lastSessionId;let u=!1,f=null;const m=function(){f?f.close():(u=!0,i())},p=function(E){ae(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(E)};this.realtime_={close:m,sendRequest:p};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?nn("getToken() completed but was canceled"):(nn("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=w&&w.token,f=new OU(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,S=>{xn(S+" ("+this.repoInfo_.toString()+")"),this.interrupt(zU)},o))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&xn(E),m())}}}interrupt(e){nn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],r_(this.interruptReasons_)&&(this.reconnectDelay_=Fu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(o=>ev(o)).join("$"):i="default";const a=this.removeListen_(e,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const i=new st(e).toString();let a;if(this.listens.has(i)){const o=this.listens.get(i);a=o.get(t),o.delete(t),o.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(e,t){nn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qb&&(this.reconnectDelay_=Kb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){nn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qb&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+eI.replace(/\./g,"-")]=1,ey()?e["framework.cordova"]=1:fA()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=od.getInstance().currentlyOnline();return r_(this.interruptReasons_)&&e}}xr.nextPersistentConnectionId_=0;xr.nextConnectionId_=0;/**
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
 */class Me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Me(e,t)}}/**
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
 */class Xd{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Me(dl,e),a=new Me(dl,t);return this.compare(i,a)!==0}minPost(){return Me.MIN}}/**
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
 */let vf;class AI extends Xd{static get __EMPTY_NODE(){return vf}static set __EMPTY_NODE(e){vf=e}compare(e,t){return Qa(e.name,t.name)}isDefinedOn(e){throw Tl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Me.MIN}maxPost(){return new Me(Ua,vf)}makePost(e,t){return ae(typeof e=="string","KeyIndex indexValue must always be a string."),new Me(e,vf)}toString(){return".key"}}const el=new AI;/**
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
 */class Ef{constructor(e,t,i,a,o=null){this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?i(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,t,i,a,o){this.key=e,this.value=t,this.color=i??Wt.RED,this.left=a??Rn.EMPTY_NODE,this.right=o??Rn.EMPTY_NODE}copy(e,t,i,a,o){return new Wt(e??this.key,t??this.value,i??this.color,a??this.left,o??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const o=i(e,a.key);return o<0?a=a.copy(null,null,null,a.left.insert(e,t,i),null):o===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,a;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Rn.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0;Wt.BLACK=!1;class FU{copy(e,t,i,a,o){return this}insert(e,t,i){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Rn{constructor(e,t=Rn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new Rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,a=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ef(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ef(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ef(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ef(this.root_,null,this.comparator_,!0,e)}}Rn.EMPTY_NODE=new FU;/**
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
 */function qU(n,e){return Qa(n.name,e.name)}function ov(n,e){return Qa(n,e)}/**
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
 */let V_;function HU(n){V_=n}const CI=function(n){return typeof n=="number"?"number:"+rI(n):"string:"+n},RI=function(n){if(n.isLeafNode()){const e=n.val();ae(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qi(e,".sv"),"Priority must be a string or number.")}else ae(n===V_||n.isEmpty(),"priority of unexpected type.");ae(n===V_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $b;class $t{static set __childrenNodeConstructor(e){$b=e}static get __childrenNodeConstructor(){return $b}constructor(e,t=$t.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ae(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $t(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$t.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:Ve(e)===".priority"?this.priorityNode_:$t.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Ve(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ae(i!==".priority"||zs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,$t.__childrenNodeConstructor.EMPTY_NODE.updateChild(ct(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+CI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=rI(this.value_):e+=this.value_,this.lazyHash_=nI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $t.__childrenNodeConstructor?-1:(ae(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,a=$t.VALUE_TYPE_ORDER.indexOf(t),o=$t.VALUE_TYPE_ORDER.indexOf(i);return ae(a>=0,"Unknown leaf type: "+t),ae(o>=0,"Unknown leaf type: "+i),a===o?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:o-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$t.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let II,NI;function GU(n){II=n}function KU(n){NI=n}class QU extends Xd{compare(e,t){const i=e.node.getPriority(),a=t.node.getPriority(),o=i.compareTo(a);return o===0?Qa(e.name,t.name):o}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(Ua,new $t("[PRIORITY-POST]",NI))}makePost(e,t){const i=II(e);return new Me(t,new $t("[PRIORITY-POST]",i))}toString(){return".priority"}}const wt=new QU;/**
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
 */const $U=Math.log(2);class YU{constructor(e){const t=o=>parseInt(Math.log(o)/$U,10),i=o=>parseInt(Array(o+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=i(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ld=function(n,e,t,i){n.sort(e);const a=function(m,p){const y=p-m;let E,w;if(y===0)return null;if(y===1)return E=n[m],w=t?t(E):E,new Wt(w,E.node,Wt.BLACK,null,null);{const S=parseInt(y/2,10)+m,D=a(m,S),U=a(S+1,p);return E=n[S],w=t?t(E):E,new Wt(w,E.node,Wt.BLACK,D,U)}},o=function(m){let p=null,y=null,E=n.length;const w=function(D,U){const P=E-D,z=E;E-=D;const H=a(P+1,z),G=n[P],ne=t?t(G):G;S(new Wt(ne,G.node,U,null,H))},S=function(D){p?(p.left=D,p=D):(y=D,p=D)};for(let D=0;D<m.count;++D){const U=m.nextBitIsOne(),P=Math.pow(2,m.count-(D+1));U?w(P,Wt.BLACK):(w(P,Wt.BLACK),w(P,Wt.RED))}return y},u=new YU(n.length),f=o(u);return new Rn(i||e,f)};/**
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
 */let Ng;const Fo={};class Rr{static get Default(){return ae(Fo&&wt,"ChildrenNode.ts has not been loaded"),Ng=Ng||new Rr({".priority":Fo},{".priority":wt}),Ng}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=tl(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rn?t:null}hasIndex(e){return Qi(this.indexSet_,e.toString())}addIndex(e,t){ae(e!==el,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const o=t.getIterator(Me.Wrap);let u=o.getNext();for(;u;)a=a||e.isDefinedOn(u.node),i.push(u),u=o.getNext();let f;a?f=ld(i,e.getCompare()):f=Fo;const m=e.toString(),p=Object.assign({},this.indexSet_);p[m]=e;const y=Object.assign({},this.indexes_);return y[m]=f,new Rr(y,p)}addToIndexes(e,t){const i=jf(this.indexes_,(a,o)=>{const u=tl(this.indexSet_,o);if(ae(u,"Missing index implementation for "+o),a===Fo)if(u.isDefinedOn(e.node)){const f=[],m=t.getIterator(Me.Wrap);let p=m.getNext();for(;p;)p.name!==e.name&&f.push(p),p=m.getNext();return f.push(e),ld(f,u.getCompare())}else return Fo;else{const f=t.get(e.name);let m=a;return f&&(m=m.remove(new Me(e.name,f))),m.insert(e,e.node)}});return new Rr(i,this.indexSet_)}removeFromIndexes(e,t){const i=jf(this.indexes_,a=>{if(a===Fo)return a;{const o=t.get(e.name);return o?a.remove(new Me(e.name,o)):a}});return new Rr(i,this.indexSet_)}}/**
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
 */let qu;class we{static get EMPTY_NODE(){return qu||(qu=new we(new Rn(ov),null,Rr.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&RI(this.priorityNode_),this.children_.isEmpty()&&ae(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qu}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?qu:t}}getChild(e){const t=Ve(e);return t===null?this:this.getImmediateChild(t).getChild(ct(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ae(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Me(e,t);let a,o;t.isEmpty()?(a=this.children_.remove(e),o=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(e,t),o=this.indexMap_.addToIndexes(i,this.children_));const u=a.isEmpty()?qu:this.priorityNode_;return new we(a,u,o)}}updateChild(e,t){const i=Ve(e);if(i===null)return t;{ae(Ve(e)!==".priority"||zs(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(ct(e),t);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,a=0,o=!0;if(this.forEachChild(wt,(u,f)=>{t[u]=f.val(e),i++,o&&we.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):o=!1}),!e&&o&&a<2*i){const u=[];for(const f in t)u[f]=t[f];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+CI(this.getPriority().val())+":"),this.forEachChild(wt,(t,i)=>{const a=i.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":nI(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const a=this.resolveIndex_(i);if(a){const o=a.getPredecessorKey(new Me(e,t));return o?o.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Me(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Me.Wrap);let o=a.peek();for(;o!=null&&t.compare(o,e)<0;)a.getNext(),o=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let o=a.peek();for(;o!=null&&t.compare(o,e)>0;)a.getNext(),o=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bc?-1:0}withIndex(e){if(e===el||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===el||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(wt),a=t.getIterator(wt);let o=i.getNext(),u=a.getNext();for(;o&&u;){if(o.name!==u.name||!o.node.equals(u.node))return!1;o=i.getNext(),u=a.getNext()}return o===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===el?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class WU extends we{constructor(){super(new Rn(ov),we.EMPTY_NODE,Rr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Bc=new WU;Object.defineProperties(Me,{MIN:{value:new Me(dl,we.EMPTY_NODE)},MAX:{value:new Me(Ua,Bc)}});AI.__EMPTY_NODE=we.EMPTY_NODE;$t.__childrenNodeConstructor=we;HU(Bc);KU(Bc);/**
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
 */const XU=!0;function Xt(n,e=null){if(n===null)return we.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ae(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $t(t,Xt(e))}if(!(n instanceof Array)&&XU){const t=[];let i=!1;if(an(n,(u,f)=>{if(u.substring(0,1)!=="."){const m=Xt(f);m.isEmpty()||(i=i||!m.getPriority().isEmpty(),t.push(new Me(u,m)))}}),t.length===0)return we.EMPTY_NODE;const o=ld(t,qU,u=>u.name,ov);if(i){const u=ld(t,wt.getCompare());return new we(o,Xt(e),new Rr({".priority":u},{".priority":wt}))}else return new we(o,Xt(e),Rr.Default)}else{let t=we.EMPTY_NODE;return an(n,(i,a)=>{if(Qi(n,i)&&i.substring(0,1)!=="."){const o=Xt(a);(o.isLeafNode()||!o.isEmpty())&&(t=t.updateImmediateChild(i,o))}}),t.updatePriority(Xt(e))}}GU(Xt);/**
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
 */class JU extends Xd{constructor(e){super(),this.indexPath_=e,ae(!Ue(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),a=this.extractChild(t.node),o=i.compareTo(a);return o===0?Qa(e.name,t.name):o}makePost(e,t){const i=Xt(e),a=we.EMPTY_NODE.updateChild(this.indexPath_,i);return new Me(t,a)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Bc);return new Me(Ua,e)}toString(){return yc(this.indexPath_,0).join("/")}}/**
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
 */class ZU extends Xd{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Qa(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,t){const i=Xt(e);return new Me(t,i)}toString(){return".value"}}const e6=new ZU;/**
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
 */function xI(n){return{type:"value",snapshotNode:n}}function ml(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ec(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function t6(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class lv{constructor(e){this.index_=e}updateChild(e,t,i,a,o,u){ae(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(a).equals(i.getChild(a))&&f.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?e.hasChild(t)?u.trackChildChange(vc(t,f)):ae(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?u.trackChildChange(ml(t,i)):u.trackChildChange(Ec(t,i,f))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(wt,(a,o)=>{t.hasChild(a)||i.trackChildChange(vc(a,o))}),t.isLeafNode()||t.forEachChild(wt,(a,o)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(o)||i.trackChildChange(Ec(a,o,u))}else i.trackChildChange(ml(a,o))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?we.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Tc{constructor(e){this.indexedFilter_=new lv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tc.getStartPost_(e),this.endPost_=Tc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,a,o,u){return this.matches(new Me(t,i))||(i=we.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,a,o,u)}updateFullNode(e,t,i){t.isLeafNode()&&(t=we.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(we.EMPTY_NODE);const o=this;return t.forEachChild(wt,(u,f)=>{o.matches(new Me(u,f))||(a=a.updateImmediateChild(u,we.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class n6{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Tc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,a,o,u){return this.rangedFilter_.matches(new Me(t,i))||(i=we.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,a,o,u):this.fullLimitUpdateChild_(e,t,i,o,u)}updateFullNode(e,t,i){let a;if(t.isLeafNode()||t.isEmpty())a=we.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=we.EMPTY_NODE.withIndex(this.index_);let o;this.reverse_?o=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):o=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;o.hasNext()&&u<this.limit_;){const f=o.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))a=a.updateImmediateChild(f.name,f.node),u++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(we.EMPTY_NODE);let o;this.reverse_?o=a.getReverseIterator(this.index_):o=a.getIterator(this.index_);let u=0;for(;o.hasNext();){const f=o.getNext();u<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?u++:a=a.updateImmediateChild(f.name,we.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,a,o){let u;if(this.reverse_){const E=this.index_.getCompare();u=(w,S)=>E(S,w)}else u=this.index_.getCompare();const f=e;ae(f.numChildren()===this.limit_,"");const m=new Me(t,i),p=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),y=this.rangedFilter_.matches(m);if(f.hasChild(t)){const E=f.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,p,this.reverse_);for(;w!=null&&(w.name===t||f.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const S=w==null?1:u(w,m);if(y&&!i.isEmpty()&&S>=0)return o!=null&&o.trackChildChange(Ec(t,i,E)),f.updateImmediateChild(t,i);{o!=null&&o.trackChildChange(vc(t,E));const U=f.updateImmediateChild(t,we.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(o!=null&&o.trackChildChange(ml(w.name,w.node)),U.updateImmediateChild(w.name,w.node)):U}}else return i.isEmpty()?e:y&&u(p,m)>=0?(o!=null&&(o.trackChildChange(vc(p.name,p.node)),o.trackChildChange(ml(t,i))),f.updateImmediateChild(t,i).updateImmediateChild(p.name,we.EMPTY_NODE)):e}}/**
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
 */class uv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ae(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ae(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:dl}hasEnd(){return this.endSet_}getIndexEndValue(){return ae(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ae(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ua}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ae(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new uv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function i6(n){return n.loadsAllData()?new lv(n.getIndex()):n.hasLimit()?new n6(n):new Tc(n)}function Yb(n){const e={};if(n.isDefault())return e;let t;if(n.index_===wt?t="$priority":n.index_===e6?t="$value":n.index_===el?t="$key":(ae(n.index_ instanceof JU,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ut(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Ut(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Ut(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Ut(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Ut(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Wb(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==wt&&(e.i=n.index_.toString()),e}/**
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
 */class ud extends TI{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ae(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=jc("p:rest:"),this.listens_={}}listen(e,t,i,a){const o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);const u=ud.getListenId_(e,i),f={};this.listens_[u]=f;const m=Yb(e._queryParams);this.restRequest_(o+".json",m,(p,y)=>{let E=y;if(p===404&&(E=null,p=null),p===null&&this.onDataUpdate_(o,E,!1,i),tl(this.listens_,u)===f){let w;p?p===401?w="permission_denied":w="rest_error:"+p:w="ok",a(w,null)}})}unlisten(e,t){const i=ud.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Yb(e._queryParams),i=e._path.toString(),a=new bd;return this.restRequest_(i+".json",t,(o,u)=>{let f=u;o===404&&(f=null,o=null),o===null?(this.onDataUpdate_(i,f,!1,null),a.resolve(f)):a.reject(new Error(f))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,o])=>{a&&a.accessToken&&(t.auth=a.accessToken),o&&o.token&&(t.ac=o.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wl(t);this.log_("Sending REST request for "+u);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(i&&f.readyState===4){this.log_("REST Response for "+u+" received. status:",f.status,"response:",f.responseText);let m=null;if(f.status>=200&&f.status<300){try{m=uc(f.responseText)}catch{xn("Failed to parse JSON response for "+u+": "+f.responseText)}i(null,m)}else f.status!==401&&f.status!==404&&xn("Got unsuccessful REST response for "+u+" Status: "+f.status),i(f.status);i=null}},f.open("GET",u,!0),f.send()})}}/**
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
 */class r6{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function cd(){return{value:null,children:new Map}}function DI(n,e,t){if(Ue(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=Ve(e);n.children.has(i)||n.children.set(i,cd());const a=n.children.get(i);e=ct(e),DI(a,e,t)}}function U_(n,e,t){n.value!==null?t(e,n.value):s6(n,(i,a)=>{const o=new st(e.toString()+"/"+i);U_(a,o,t)})}function s6(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class a6{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&an(this.last_,(i,a)=>{t[i]=t[i]-a}),this.last_=e,t}}/**
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
 */const Xb=10*1e3,o6=30*1e3,l6=5*60*1e3;class u6{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new a6(e);const i=Xb+(o6-Xb)*Math.random();rc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;an(e,(a,o)=>{o>0&&Qi(this.statsToReport_,a)&&(t[a]=o,i=!0)}),i&&this.server_.reportStats(t),rc(this.reportStats_.bind(this),Math.floor(Math.random()*2*l6))}}/**
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
 */var di;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(di||(di={}));function cv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class hd{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=di.ACK_USER_WRITE,this.source=cv()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return ae(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new st(e));return new hd(Xe(),t,this.revert)}}else return ae(Ve(this.path)===e,"operationForChild called for unrelated child."),new hd(ct(this.path),this.affectedTree,this.revert)}}/**
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
 */class wc{constructor(e,t){this.source=e,this.path=t,this.type=di.LISTEN_COMPLETE}operationForChild(e){return Ue(this.path)?new wc(this.source,Xe()):new wc(this.source,ct(this.path))}}/**
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
 */class ja{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=di.OVERWRITE}operationForChild(e){return Ue(this.path)?new ja(this.source,Xe(),this.snap.getImmediateChild(e)):new ja(this.source,ct(this.path),this.snap)}}/**
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
 */class pl{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=di.MERGE}operationForChild(e){if(Ue(this.path)){const t=this.children.subtree(new st(e));return t.isEmpty()?null:t.value?new ja(this.source,Xe(),t.value):new pl(this.source,Xe(),t)}else return ae(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new pl(this.source,ct(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Fs{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class c6{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function h6(n,e,t,i){const a=[],o=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&o.push(t6(u.childName,u.snapshotNode))}),Hu(n,a,"child_removed",e,i,t),Hu(n,a,"child_added",e,i,t),Hu(n,a,"child_moved",o,i,t),Hu(n,a,"child_changed",e,i,t),Hu(n,a,"value",e,i,t),a}function Hu(n,e,t,i,a,o){const u=i.filter(f=>f.type===t);u.sort((f,m)=>d6(n,f,m)),u.forEach(f=>{const m=f6(n,f,o);a.forEach(p=>{p.respondsTo(f.type)&&e.push(p.createEvent(m,n.query_))})})}function f6(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function d6(n,e,t){if(e.childName==null||t.childName==null)throw Tl("Should only compare child_ events.");const i=new Me(e.childName,e.snapshotNode),a=new Me(t.childName,t.snapshotNode);return n.index_.compare(i,a)}/**
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
 */function Jd(n,e){return{eventCache:n,serverCache:e}}function sc(n,e,t,i){return Jd(new Fs(e,t,i),n.serverCache)}function OI(n,e,t,i){return Jd(n.eventCache,new Fs(e,t,i))}function fd(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ba(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let xg;const m6=()=>(xg||(xg=new Rn(JV)),xg);class ut{static fromObject(e){let t=new ut(null);return an(e,(i,a)=>{t=t.set(new st(i),a)}),t}constructor(e,t=m6()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Xe(),value:this.value};if(Ue(e))return null;{const i=Ve(e),a=this.children.get(i);if(a!==null){const o=a.findRootMostMatchingPathAndValue(ct(e),t);return o!=null?{path:Tt(new st(i),o.path),value:o.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const t=Ve(e),i=this.children.get(t);return i!==null?i.subtree(ct(e)):new ut(null)}}set(e,t){if(Ue(e))return new ut(t,this.children);{const i=Ve(e),o=(this.children.get(i)||new ut(null)).set(ct(e),t),u=this.children.insert(i,o);return new ut(this.value,u)}}remove(e){if(Ue(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=Ve(e),i=this.children.get(t);if(i){const a=i.remove(ct(e));let o;return a.isEmpty()?o=this.children.remove(t):o=this.children.insert(t,a),this.value===null&&o.isEmpty()?new ut(null):new ut(this.value,o)}else return this}}get(e){if(Ue(e))return this.value;{const t=Ve(e),i=this.children.get(t);return i?i.get(ct(e)):null}}setTree(e,t){if(Ue(e))return t;{const i=Ve(e),o=(this.children.get(i)||new ut(null)).setTree(ct(e),t);let u;return o.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,o),new ut(this.value,u)}}fold(e){return this.fold_(Xe(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((a,o)=>{i[a]=o.fold_(Tt(e,a),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,Xe(),t)}findOnPath_(e,t,i){const a=this.value?i(t,this.value):!1;if(a)return a;if(Ue(e))return null;{const o=Ve(e),u=this.children.get(o);return u?u.findOnPath_(ct(e),Tt(t,o),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Xe(),t)}foreachOnPath_(e,t,i){if(Ue(e))return this;{this.value&&i(t,this.value);const a=Ve(e),o=this.children.get(a);return o?o.foreachOnPath_(ct(e),Tt(t,a),i):new ut(null)}}foreach(e){this.foreach_(Xe(),e)}foreach_(e,t){this.children.inorderTraversal((i,a)=>{a.foreach_(Tt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class pi{constructor(e){this.writeTree_=e}static empty(){return new pi(new ut(null))}}function ac(n,e,t){if(Ue(e))return new pi(new ut(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const a=i.path;let o=i.value;const u=En(a,e);return o=o.updateChild(u,t),new pi(n.writeTree_.set(a,o))}else{const a=new ut(t),o=n.writeTree_.setTree(e,a);return new pi(o)}}}function j_(n,e,t){let i=n;return an(t,(a,o)=>{i=ac(i,Tt(e,a),o)}),i}function Jb(n,e){if(Ue(e))return pi.empty();{const t=n.writeTree_.setTree(e,new ut(null));return new pi(t)}}function B_(n,e){return $a(n,e)!=null}function $a(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(En(t.path,e)):null}function Zb(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(wt,(i,a)=>{e.push(new Me(i,a))}):n.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&e.push(new Me(i,a.value))}),e}function Os(n,e){if(Ue(e))return n;{const t=$a(n,e);return t!=null?new pi(new ut(t)):new pi(n.writeTree_.subtree(e))}}function z_(n){return n.writeTree_.isEmpty()}function gl(n,e){return kI(Xe(),n.writeTree_,e)}function kI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((a,o)=>{a===".priority"?(ae(o.value!==null,"Priority writes must always be leaf nodes"),i=o.value):t=kI(Tt(n,a),o,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Tt(n,".priority"),i)),t}}/**
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
 */function Zd(n,e){return VI(e,n)}function p6(n,e,t,i,a){ae(i>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:a}),a&&(n.visibleWrites=ac(n.visibleWrites,e,t)),n.lastWriteId=i}function g6(n,e,t,i){ae(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=j_(n.visibleWrites,e,t),n.lastWriteId=i}function _6(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function y6(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);ae(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let a=i.visible,o=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const f=n.allWrites[u];f.visible&&(u>=t&&v6(f,i.path)?a=!1:ri(i.path,f.path)&&(o=!0)),u--}if(a){if(o)return E6(n),!0;if(i.snap)n.visibleWrites=Jb(n.visibleWrites,i.path);else{const f=i.children;an(f,m=>{n.visibleWrites=Jb(n.visibleWrites,Tt(i.path,m))})}return!0}else return!1}function v6(n,e){if(n.snap)return ri(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ri(Tt(n.path,t),e))return!0;return!1}function E6(n){n.visibleWrites=MI(n.allWrites,T6,Xe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function T6(n){return n.visible}function MI(n,e,t){let i=pi.empty();for(let a=0;a<n.length;++a){const o=n[a];if(e(o)){const u=o.path;let f;if(o.snap)ri(t,u)?(f=En(t,u),i=ac(i,f,o.snap)):ri(u,t)&&(f=En(u,t),i=ac(i,Xe(),o.snap.getChild(f)));else if(o.children){if(ri(t,u))f=En(t,u),i=j_(i,f,o.children);else if(ri(u,t))if(f=En(u,t),Ue(f))i=j_(i,Xe(),o.children);else{const m=tl(o.children,Ve(f));if(m){const p=m.getChild(ct(f));i=ac(i,Xe(),p)}}}else throw Tl("WriteRecord should have .snap or .children")}}return i}function PI(n,e,t,i,a){if(!i&&!a){const o=$a(n.visibleWrites,e);if(o!=null)return o;{const u=Os(n.visibleWrites,e);if(z_(u))return t;if(t==null&&!B_(u,Xe()))return null;{const f=t||we.EMPTY_NODE;return gl(u,f)}}}else{const o=Os(n.visibleWrites,e);if(!a&&z_(o))return t;if(!a&&t==null&&!B_(o,Xe()))return null;{const u=function(p){return(p.visible||a)&&(!i||!~i.indexOf(p.writeId))&&(ri(p.path,e)||ri(e,p.path))},f=MI(n.allWrites,u,e),m=t||we.EMPTY_NODE;return gl(f,m)}}}function w6(n,e,t){let i=we.EMPTY_NODE;const a=$a(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(wt,(o,u)=>{i=i.updateImmediateChild(o,u)}),i;if(t){const o=Os(n.visibleWrites,e);return t.forEachChild(wt,(u,f)=>{const m=gl(Os(o,new st(u)),f);i=i.updateImmediateChild(u,m)}),Zb(o).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const o=Os(n.visibleWrites,e);return Zb(o).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function b6(n,e,t,i,a){ae(i||a,"Either existingEventSnap or existingServerSnap must exist");const o=Tt(e,t);if(B_(n.visibleWrites,o))return null;{const u=Os(n.visibleWrites,o);return z_(u)?a.getChild(t):gl(u,a.getChild(t))}}function S6(n,e,t,i){const a=Tt(e,t),o=$a(n.visibleWrites,a);if(o!=null)return o;if(i.isCompleteForChild(t)){const u=Os(n.visibleWrites,a);return gl(u,i.getNode().getImmediateChild(t))}else return null}function A6(n,e){return $a(n.visibleWrites,e)}function C6(n,e,t,i,a,o,u){let f;const m=Os(n.visibleWrites,e),p=$a(m,Xe());if(p!=null)f=p;else if(t!=null)f=gl(m,t);else return[];if(f=f.withIndex(u),!f.isEmpty()&&!f.isLeafNode()){const y=[],E=u.getCompare(),w=o?f.getReverseIteratorFrom(i,u):f.getIteratorFrom(i,u);let S=w.getNext();for(;S&&y.length<a;)E(S,i)!==0&&y.push(S),S=w.getNext();return y}else return[]}function R6(){return{visibleWrites:pi.empty(),allWrites:[],lastWriteId:-1}}function dd(n,e,t,i){return PI(n.writeTree,n.treePath,e,t,i)}function dv(n,e){return w6(n.writeTree,n.treePath,e)}function eS(n,e,t,i){return b6(n.writeTree,n.treePath,e,t,i)}function md(n,e){return A6(n.writeTree,Tt(n.treePath,e))}function I6(n,e,t,i,a,o){return C6(n.writeTree,n.treePath,e,t,i,a,o)}function mv(n,e,t){return S6(n.writeTree,n.treePath,e,t)}function LI(n,e){return VI(Tt(n.treePath,e),n.writeTree)}function VI(n,e){return{treePath:n,writeTree:e}}/**
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
 */class N6{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;ae(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ae(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const o=a.type;if(t==="child_added"&&o==="child_removed")this.changeMap.set(i,Ec(i,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&o==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&o==="child_changed")this.changeMap.set(i,vc(i,a.oldSnap));else if(t==="child_changed"&&o==="child_added")this.changeMap.set(i,ml(i,e.snapshotNode));else if(t==="child_changed"&&o==="child_changed")this.changeMap.set(i,Ec(i,e.snapshotNode,a.oldSnap));else throw Tl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class x6{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const UI=new x6;class pv{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Fs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mv(this.writes_,e,i)}}getChildAfterChild(e,t,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ba(this.viewCache_),o=I6(this.writes_,a,t,1,i,e);return o.length===0?null:o[0]}}/**
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
 */function D6(n){return{filter:n}}function O6(n,e){ae(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ae(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function k6(n,e,t,i,a){const o=new N6;let u,f;if(t.type===di.OVERWRITE){const p=t;p.source.fromUser?u=F_(n,e,p.path,p.snap,i,a,o):(ae(p.source.fromServer,"Unknown source."),f=p.source.tagged||e.serverCache.isFiltered()&&!Ue(p.path),u=pd(n,e,p.path,p.snap,i,a,f,o))}else if(t.type===di.MERGE){const p=t;p.source.fromUser?u=P6(n,e,p.path,p.children,i,a,o):(ae(p.source.fromServer,"Unknown source."),f=p.source.tagged||e.serverCache.isFiltered(),u=q_(n,e,p.path,p.children,i,a,f,o))}else if(t.type===di.ACK_USER_WRITE){const p=t;p.revert?u=U6(n,e,p.path,i,a,o):u=L6(n,e,p.path,p.affectedTree,i,a,o)}else if(t.type===di.LISTEN_COMPLETE)u=V6(n,e,t.path,i,o);else throw Tl("Unknown operation type: "+t.type);const m=o.getChanges();return M6(e,u,m),{viewCache:u,changes:m}}function M6(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),o=fd(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!i.getNode().equals(o)||!i.getNode().getPriority().equals(o.getPriority()))&&t.push(xI(fd(e)))}}function jI(n,e,t,i,a,o){const u=e.eventCache;if(md(i,t)!=null)return e;{let f,m;if(Ue(t))if(ae(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const p=Ba(e),y=p instanceof we?p:we.EMPTY_NODE,E=dv(i,y);f=n.filter.updateFullNode(e.eventCache.getNode(),E,o)}else{const p=dd(i,Ba(e));f=n.filter.updateFullNode(e.eventCache.getNode(),p,o)}else{const p=Ve(t);if(p===".priority"){ae(zs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();m=e.serverCache.getNode();const E=eS(i,t,y,m);E!=null?f=n.filter.updatePriority(y,E):f=u.getNode()}else{const y=ct(t);let E;if(u.isCompleteForChild(p)){m=e.serverCache.getNode();const w=eS(i,t,u.getNode(),m);w!=null?E=u.getNode().getImmediateChild(p).updateChild(y,w):E=u.getNode().getImmediateChild(p)}else E=mv(i,p,e.serverCache);E!=null?f=n.filter.updateChild(u.getNode(),p,E,y,a,o):f=u.getNode()}}return sc(e,f,u.isFullyInitialized()||Ue(t),n.filter.filtersNodes())}}function pd(n,e,t,i,a,o,u,f){const m=e.serverCache;let p;const y=u?n.filter:n.filter.getIndexedFilter();if(Ue(t))p=y.updateFullNode(m.getNode(),i,null);else if(y.filtersNodes()&&!m.isFiltered()){const S=m.getNode().updateChild(t,i);p=y.updateFullNode(m.getNode(),S,null)}else{const S=Ve(t);if(!m.isCompleteForPath(t)&&zs(t)>1)return e;const D=ct(t),P=m.getNode().getImmediateChild(S).updateChild(D,i);S===".priority"?p=y.updatePriority(m.getNode(),P):p=y.updateChild(m.getNode(),S,P,D,UI,null)}const E=OI(e,p,m.isFullyInitialized()||Ue(t),y.filtersNodes()),w=new pv(a,E,o);return jI(n,E,t,a,w,f)}function F_(n,e,t,i,a,o,u){const f=e.eventCache;let m,p;const y=new pv(a,e,o);if(Ue(t))p=n.filter.updateFullNode(e.eventCache.getNode(),i,u),m=sc(e,p,!0,n.filter.filtersNodes());else{const E=Ve(t);if(E===".priority")p=n.filter.updatePriority(e.eventCache.getNode(),i),m=sc(e,p,f.isFullyInitialized(),f.isFiltered());else{const w=ct(t),S=f.getNode().getImmediateChild(E);let D;if(Ue(w))D=i;else{const U=y.getCompleteChild(E);U!=null?rv(w)===".priority"&&U.getChild(bI(w)).isEmpty()?D=U:D=U.updateChild(w,i):D=we.EMPTY_NODE}if(S.equals(D))m=e;else{const U=n.filter.updateChild(f.getNode(),E,D,w,y,u);m=sc(e,U,f.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function tS(n,e){return n.eventCache.isCompleteForChild(e)}function P6(n,e,t,i,a,o,u){let f=e;return i.foreach((m,p)=>{const y=Tt(t,m);tS(e,Ve(y))&&(f=F_(n,f,y,p,a,o,u))}),i.foreach((m,p)=>{const y=Tt(t,m);tS(e,Ve(y))||(f=F_(n,f,y,p,a,o,u))}),f}function nS(n,e,t){return t.foreach((i,a)=>{e=e.updateChild(i,a)}),e}function q_(n,e,t,i,a,o,u,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,p;Ue(t)?p=i:p=new ut(null).setTree(t,i);const y=e.serverCache.getNode();return p.children.inorderTraversal((E,w)=>{if(y.hasChild(E)){const S=e.serverCache.getNode().getImmediateChild(E),D=nS(n,S,w);m=pd(n,m,new st(E),D,a,o,u,f)}}),p.children.inorderTraversal((E,w)=>{const S=!e.serverCache.isCompleteForChild(E)&&w.value===null;if(!y.hasChild(E)&&!S){const D=e.serverCache.getNode().getImmediateChild(E),U=nS(n,D,w);m=pd(n,m,new st(E),U,a,o,u,f)}}),m}function L6(n,e,t,i,a,o,u){if(md(a,t)!=null)return e;const f=e.serverCache.isFiltered(),m=e.serverCache;if(i.value!=null){if(Ue(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return pd(n,e,t,m.getNode().getChild(t),a,o,f,u);if(Ue(t)){let p=new ut(null);return m.getNode().forEachChild(el,(y,E)=>{p=p.set(new st(y),E)}),q_(n,e,t,p,a,o,f,u)}else return e}else{let p=new ut(null);return i.foreach((y,E)=>{const w=Tt(t,y);m.isCompleteForPath(w)&&(p=p.set(y,m.getNode().getChild(w)))}),q_(n,e,t,p,a,o,f,u)}}function V6(n,e,t,i,a){const o=e.serverCache,u=OI(e,o.getNode(),o.isFullyInitialized()||Ue(t),o.isFiltered());return jI(n,u,t,i,UI,a)}function U6(n,e,t,i,a,o){let u;if(md(i,t)!=null)return e;{const f=new pv(i,e,a),m=e.eventCache.getNode();let p;if(Ue(t)||Ve(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=dd(i,Ba(e));else{const E=e.serverCache.getNode();ae(E instanceof we,"serverChildren would be complete if leaf node"),y=dv(i,E)}y=y,p=n.filter.updateFullNode(m,y,o)}else{const y=Ve(t);let E=mv(i,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=m.getImmediateChild(y)),E!=null?p=n.filter.updateChild(m,y,E,ct(t),f,o):e.eventCache.getNode().hasChild(y)?p=n.filter.updateChild(m,y,we.EMPTY_NODE,ct(t),f,o):p=m,p.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=dd(i,Ba(e)),u.isLeafNode()&&(p=n.filter.updateFullNode(p,u,o)))}return u=e.serverCache.isFullyInitialized()||md(i,Xe())!=null,sc(e,p,u,n.filter.filtersNodes())}}/**
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
 */class j6{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,a=new lv(i.getIndex()),o=i6(i);this.processor_=D6(o);const u=t.serverCache,f=t.eventCache,m=a.updateFullNode(we.EMPTY_NODE,u.getNode(),null),p=o.updateFullNode(we.EMPTY_NODE,f.getNode(),null),y=new Fs(m,u.isFullyInitialized(),a.filtersNodes()),E=new Fs(p,f.isFullyInitialized(),o.filtersNodes());this.viewCache_=Jd(E,y),this.eventGenerator_=new c6(this.query_)}get query(){return this.query_}}function B6(n){return n.viewCache_.serverCache.getNode()}function z6(n){return fd(n.viewCache_)}function F6(n,e){const t=Ba(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ue(e)&&!t.getImmediateChild(Ve(e)).isEmpty())?t.getChild(e):null}function iS(n){return n.eventRegistrations_.length===0}function q6(n,e){n.eventRegistrations_.push(e)}function rS(n,e,t){const i=[];if(t){ae(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(o=>{const u=o.createCancelEvent(t,a);u&&i.push(u)})}if(e){let a=[];for(let o=0;o<n.eventRegistrations_.length;++o){const u=n.eventRegistrations_[o];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(o+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return i}function sS(n,e,t,i){e.type===di.MERGE&&e.source.queryId!==null&&(ae(Ba(n.viewCache_),"We should always have a full cache before handling merges"),ae(fd(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,o=k6(n.processor_,a,e,t,i);return O6(n.processor_,o.viewCache),ae(o.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=o.viewCache,BI(n,o.changes,o.viewCache.eventCache.getNode(),null)}function H6(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(wt,(o,u)=>{i.push(ml(o,u))}),t.isFullyInitialized()&&i.push(xI(t.getNode())),BI(n,i,t.getNode(),e)}function BI(n,e,t,i){const a=i?[i]:n.eventRegistrations_;return h6(n.eventGenerator_,e,t,a)}/**
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
 */let gd;class zI{constructor(){this.views=new Map}}function G6(n){ae(!gd,"__referenceConstructor has already been defined"),gd=n}function K6(){return ae(gd,"Reference.ts has not been loaded"),gd}function Q6(n){return n.views.size===0}function gv(n,e,t,i){const a=e.source.queryId;if(a!==null){const o=n.views.get(a);return ae(o!=null,"SyncTree gave us an op for an invalid query."),sS(o,e,t,i)}else{let o=[];for(const u of n.views.values())o=o.concat(sS(u,e,t,i));return o}}function FI(n,e,t,i,a){const o=e._queryIdentifier,u=n.views.get(o);if(!u){let f=dd(t,a?i:null),m=!1;f?m=!0:i instanceof we?(f=dv(t,i),m=!1):(f=we.EMPTY_NODE,m=!1);const p=Jd(new Fs(f,m,!1),new Fs(i,a,!1));return new j6(e,p)}return u}function $6(n,e,t,i,a,o){const u=FI(n,e,i,a,o);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),q6(u,t),H6(u,t)}function Y6(n,e,t,i){const a=e._queryIdentifier,o=[];let u=[];const f=qs(n);if(a==="default")for(const[m,p]of n.views.entries())u=u.concat(rS(p,t,i)),iS(p)&&(n.views.delete(m),p.query._queryParams.loadsAllData()||o.push(p.query));else{const m=n.views.get(a);m&&(u=u.concat(rS(m,t,i)),iS(m)&&(n.views.delete(a),m.query._queryParams.loadsAllData()||o.push(m.query)))}return f&&!qs(n)&&o.push(new(K6())(e._repo,e._path)),{removed:o,events:u}}function qI(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ks(n,e){let t=null;for(const i of n.views.values())t=t||F6(i,e);return t}function HI(n,e){if(e._queryParams.loadsAllData())return em(n);{const i=e._queryIdentifier;return n.views.get(i)}}function GI(n,e){return HI(n,e)!=null}function qs(n){return em(n)!=null}function em(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let _d;function W6(n){ae(!_d,"__referenceConstructor has already been defined"),_d=n}function X6(){return ae(_d,"Reference.ts has not been loaded"),_d}let J6=1;class aS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=R6(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Z6(n,e,t,i,a){return p6(n.pendingWriteTree_,e,t,i,a),a?xl(n,new ja(cv(),e,t)):[]}function e5(n,e,t,i){g6(n.pendingWriteTree_,e,t,i);const a=ut.fromObject(t);return xl(n,new pl(cv(),e,a))}function Da(n,e,t=!1){const i=_6(n.pendingWriteTree_,e);if(y6(n.pendingWriteTree_,e)){let o=new ut(null);return i.snap!=null?o=o.set(Xe(),!0):an(i.children,u=>{o=o.set(new st(u),!0)}),xl(n,new hd(i.path,o,t))}else return[]}function zc(n,e,t){return xl(n,new ja(hv(),e,t))}function t5(n,e,t){const i=ut.fromObject(t);return xl(n,new pl(hv(),e,i))}function n5(n,e){return xl(n,new wc(hv(),e))}function i5(n,e,t){const i=_v(n,t);if(i){const a=yv(i),o=a.path,u=a.queryId,f=En(o,e),m=new wc(fv(u),f);return vv(n,o,m)}else return[]}function yd(n,e,t,i,a=!1){const o=e._path,u=n.syncPointTree_.get(o);let f=[];if(u&&(e._queryIdentifier==="default"||GI(u,e))){const m=Y6(u,e,t,i);Q6(u)&&(n.syncPointTree_=n.syncPointTree_.remove(o));const p=m.removed;if(f=m.events,!a){const y=p.findIndex(w=>w._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(o,(w,S)=>qs(S));if(y&&!E){const w=n.syncPointTree_.subtree(o);if(!w.isEmpty()){const S=a5(w);for(let D=0;D<S.length;++D){const U=S[D],P=U.query,z=WI(n,U);n.listenProvider_.startListening(oc(P),bc(n,P),z.hashFn,z.onComplete)}}}!E&&p.length>0&&!i&&(y?n.listenProvider_.stopListening(oc(e),null):p.forEach(w=>{const S=n.queryToTagMap.get(tm(w));n.listenProvider_.stopListening(oc(w),S)}))}o5(n,p)}return f}function KI(n,e,t,i){const a=_v(n,i);if(a!=null){const o=yv(a),u=o.path,f=o.queryId,m=En(u,e),p=new ja(fv(f),m,t);return vv(n,u,p)}else return[]}function r5(n,e,t,i){const a=_v(n,i);if(a){const o=yv(a),u=o.path,f=o.queryId,m=En(u,e),p=ut.fromObject(t),y=new pl(fv(f),m,p);return vv(n,u,y)}else return[]}function H_(n,e,t,i=!1){const a=e._path;let o=null,u=!1;n.syncPointTree_.foreachOnPath(a,(w,S)=>{const D=En(w,a);o=o||ks(S,D),u=u||qs(S)});let f=n.syncPointTree_.get(a);f?(u=u||qs(f),o=o||ks(f,Xe())):(f=new zI,n.syncPointTree_=n.syncPointTree_.set(a,f));let m;o!=null?m=!0:(m=!1,o=we.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((S,D)=>{const U=ks(D,Xe());U&&(o=o.updateImmediateChild(S,U))}));const p=GI(f,e);if(!p&&!e._queryParams.loadsAllData()){const w=tm(e);ae(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const S=l5();n.queryToTagMap.set(w,S),n.tagToQueryMap.set(S,w)}const y=Zd(n.pendingWriteTree_,a);let E=$6(f,e,t,y,o,m);if(!p&&!u&&!i){const w=HI(f,e);E=E.concat(u5(n,e,w))}return E}function QI(n,e,t){const a=n.pendingWriteTree_,o=n.syncPointTree_.findOnPath(e,(u,f)=>{const m=En(u,e),p=ks(f,m);if(p)return p});return PI(a,e,o,t,!0)}function s5(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(p,y)=>{const E=En(p,t);i=i||ks(y,E)});let a=n.syncPointTree_.get(t);a?i=i||ks(a,Xe()):(a=new zI,n.syncPointTree_=n.syncPointTree_.set(t,a));const o=i!=null,u=o?new Fs(i,!0,!1):null,f=Zd(n.pendingWriteTree_,e._path),m=FI(a,e,f,o?u.getNode():we.EMPTY_NODE,o);return z6(m)}function xl(n,e){return $I(e,n.syncPointTree_,null,Zd(n.pendingWriteTree_,Xe()))}function $I(n,e,t,i){if(Ue(n.path))return YI(n,e,t,i);{const a=e.get(Xe());t==null&&a!=null&&(t=ks(a,Xe()));let o=[];const u=Ve(n.path),f=n.operationForChild(u),m=e.children.get(u);if(m&&f){const p=t?t.getImmediateChild(u):null,y=LI(i,u);o=o.concat($I(f,m,p,y))}return a&&(o=o.concat(gv(a,n,i,t))),o}}function YI(n,e,t,i){const a=e.get(Xe());t==null&&a!=null&&(t=ks(a,Xe()));let o=[];return e.children.inorderTraversal((u,f)=>{const m=t?t.getImmediateChild(u):null,p=LI(i,u),y=n.operationForChild(u);y&&(o=o.concat(YI(y,f,m,p)))}),a&&(o=o.concat(gv(a,n,i,t))),o}function WI(n,e){const t=e.query,i=bc(n,t);return{hashFn:()=>(B6(e)||we.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return i?i5(n,t._path,i):n5(n,t._path);{const o=tU(a,t);return yd(n,t,null,o)}}}}function bc(n,e){const t=tm(e);return n.queryToTagMap.get(t)}function tm(n){return n._path.toString()+"$"+n._queryIdentifier}function _v(n,e){return n.tagToQueryMap.get(e)}function yv(n){const e=n.indexOf("$");return ae(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new st(n.substr(0,e))}}function vv(n,e,t){const i=n.syncPointTree_.get(e);ae(i,"Missing sync point for query tag that we're tracking");const a=Zd(n.pendingWriteTree_,e);return gv(i,t,a,null)}function a5(n){return n.fold((e,t,i)=>{if(t&&qs(t))return[em(t)];{let a=[];return t&&(a=qI(t)),an(i,(o,u)=>{a=a.concat(u)}),a}})}function oc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(X6())(n._repo,n._path):n}function o5(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const a=tm(i),o=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(o)}}}function l5(){return J6++}function u5(n,e,t){const i=e._path,a=bc(n,e),o=WI(n,t),u=n.listenProvider_.startListening(oc(e),a,o.hashFn,o.onComplete),f=n.syncPointTree_.subtree(i);if(a)ae(!qs(f.value),"If we're adding a query, it shouldn't be shadowed");else{const m=f.fold((p,y,E)=>{if(!Ue(p)&&y&&qs(y))return[em(y).query];{let w=[];return y&&(w=w.concat(qI(y).map(S=>S.query))),an(E,(S,D)=>{w=w.concat(D)}),w}});for(let p=0;p<m.length;++p){const y=m[p];n.listenProvider_.stopListening(oc(y),bc(n,y))}}return u}/**
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
 */class Ev{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ev(t)}node(){return this.node_}}class Tv{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Tt(this.path_,e);return new Tv(this.syncTree_,t)}node(){return QI(this.syncTree_,this.path_)}}const c5=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},oS=function(n,e,t){if(!n||typeof n!="object")return n;if(ae(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return h5(n[".sv"],e,t);if(typeof n[".sv"]=="object")return f5(n[".sv"],e);ae(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},h5=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ae(!1,"Unexpected server value: "+n)}},f5=function(n,e,t){n.hasOwnProperty("increment")||ae(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&ae(!1,"Unexpected increment value: "+i);const a=e.node();if(ae(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const u=a.getValue();return typeof u!="number"?i:u+i},XI=function(n,e,t,i){return wv(e,new Tv(t,n),i)},d5=function(n,e,t){return wv(n,new Ev(e),t)};function wv(n,e,t){const i=n.getPriority().val(),a=oS(i,e.getImmediateChild(".priority"),t);let o;if(n.isLeafNode()){const u=n,f=oS(u.getValue(),e,t);return f!==u.getValue()||a!==u.getPriority().val()?new $t(f,Xt(a)):n}else{const u=n;return o=u,a!==u.getPriority().val()&&(o=o.updatePriority(new $t(a))),u.forEachChild(wt,(f,m)=>{const p=wv(m,e.getImmediateChild(f),t);p!==m&&(o=o.updateImmediateChild(f,p))}),o}}/**
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
 */class bv{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Sv(n,e){let t=e instanceof st?e:new st(e),i=n,a=Ve(t);for(;a!==null;){const o=tl(i.node.children,a)||{children:{},childCount:0};i=new bv(a,i,o),t=ct(t),a=Ve(t)}return i}function Dl(n){return n.node.value}function JI(n,e){n.node.value=e,G_(n)}function ZI(n){return n.node.childCount>0}function m5(n){return Dl(n)===void 0&&!ZI(n)}function nm(n,e){an(n.node.children,(t,i)=>{e(new bv(t,n,i))})}function e1(n,e,t,i){t&&e(n),nm(n,a=>{e1(a,e,!0)})}function p5(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Fc(n){return new st(n.parent===null?n.name:Fc(n.parent)+"/"+n.name)}function G_(n){n.parent!==null&&g5(n.parent,n.name,n)}function g5(n,e,t){const i=m5(t),a=Qi(n.node.children,e);i&&a?(delete n.node.children[e],n.node.childCount--,G_(n)):!i&&!a&&(n.node.children[e]=t.node,n.node.childCount++,G_(n))}/**
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
 */const _5=/[\[\].#$\/\u0000-\u001F\u007F]/,y5=/[\[\].#$\u0000-\u001F\u007F]/,Dg=10*1024*1024,Av=function(n){return typeof n=="string"&&n.length!==0&&!_5.test(n)},t1=function(n){return typeof n=="string"&&n.length!==0&&!y5.test(n)},v5=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),t1(n)},E5=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Zy(n)||n&&typeof n=="object"&&Qi(n,".sv")},Cv=function(n,e,t){const i=t instanceof st?new PU(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ca(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ca(i)+" with contents = "+e.toString());if(Zy(e))throw new Error(n+"contains "+e.toString()+" "+Ca(i));if(typeof e=="string"&&e.length>Dg/3&&Sd(e)>Dg)throw new Error(n+"contains a string greater than "+Dg+" utf8 bytes "+Ca(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,o=!1;if(an(e,(u,f)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(o=!0,!Av(u)))throw new Error(n+" contains an invalid key ("+u+") "+Ca(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);LU(i,u),Cv(n,f,i),VU(i)}),a&&o)throw new Error(n+' contains ".value" child '+Ca(i)+" in addition to actual children.")}},T5=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const o=yc(i);for(let u=0;u<o.length;u++)if(!(o[u]===".priority"&&u===o.length-1)){if(!Av(o[u]))throw new Error(n+"contains an invalid key ("+o[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(MU);let a=null;for(t=0;t<e.length;t++){if(i=e[t],a!==null&&ri(a,i))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+i.toString());a=i}},w5=function(n,e,t,i){const a=ty(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const o=[];an(e,(u,f)=>{const m=new st(u);if(Cv(a,f,Tt(t,m)),rv(m)===".priority"&&!E5(f))throw new Error(a+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");o.push(m)}),T5(a,o)},n1=function(n,e,t,i){if(!t1(t))throw new Error(ty(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},b5=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),n1(n,e,t)},S5=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Av(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!v5(t))throw new Error(ty(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class A5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Rv(n,e){let t=null;for(let i=0;i<e.length;i++){const a=e[i],o=a.getPath();t!==null&&!sv(o,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:o}),t.events.push(a)}t&&n.eventLists_.push(t)}function i1(n,e,t){Rv(n,t),r1(n,i=>sv(i,e))}function Hi(n,e,t){Rv(n,t),r1(n,i=>ri(i,e)||ri(e,i))}function r1(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const a=n.eventLists_[i];if(a){const o=a.path;e(o)?(C5(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function C5(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();ic&&nn("event: "+t.toString()),Nl(i)}}}/**
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
 */const R5="repo_interrupt",I5=25;class N5{constructor(e,t,i,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new A5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cd(),this.transactionQueueTree_=new bv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function x5(n,e,t){if(n.stats_=nv(n.repoInfo_),n.forceRestClient_||sU())n.server_=new ud(n.repoInfo_,(i,a,o,u)=>{lS(n,i,a,o,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>uS(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new xr(n.repoInfo_,e,(i,a,o,u)=>{lS(n,i,a,o,u)},i=>{uS(n,i)},i=>{O5(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=cU(n.repoInfo_,()=>new u6(n.stats_,n.server_)),n.infoData_=new r6,n.infoSyncTree_=new aS({startListening:(i,a,o,u)=>{let f=[];const m=n.infoData_.getNode(i._path);return m.isEmpty()||(f=zc(n.infoSyncTree_,i._path,m),setTimeout(()=>{u("ok")},0)),f},stopListening:()=>{}}),Nv(n,"connected",!1),n.serverSyncTree_=new aS({startListening:(i,a,o,u)=>(n.server_.listen(i,o,a,(f,m)=>{const p=u(f,m);Hi(n.eventQueue_,i._path,p)}),[]),stopListening:(i,a)=>{n.server_.unlisten(i,a)}})}function D5(n){const t=n.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Iv(n){return c5({timestamp:D5(n)})}function lS(n,e,t,i,a){n.dataUpdateCount++;const o=new st(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(i){const m=jf(t,p=>Xt(p));u=r5(n.serverSyncTree_,o,m,a)}else{const m=Xt(t);u=KI(n.serverSyncTree_,o,m,a)}else if(i){const m=jf(t,p=>Xt(p));u=t5(n.serverSyncTree_,o,m)}else{const m=Xt(t);u=zc(n.serverSyncTree_,o,m)}let f=o;u.length>0&&(f=Sc(n,o)),Hi(n.eventQueue_,f,u)}function uS(n,e){Nv(n,"connected",e),e===!1&&P5(n)}function O5(n,e){an(e,(t,i)=>{Nv(n,t,i)})}function Nv(n,e,t){const i=new st("/.info/"+e),a=Xt(t);n.infoData_.updateSnapshot(i,a);const o=zc(n.infoSyncTree_,i,a);Hi(n.eventQueue_,i,o)}function s1(n){return n.nextWriteId_++}function k5(n,e,t){const i=s5(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(a=>{const o=Xt(a).withIndex(e._queryParams.getIndex());H_(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=zc(n.serverSyncTree_,e._path,o);else{const f=bc(n.serverSyncTree_,e);u=KI(n.serverSyncTree_,e._path,o,f)}return Hi(n.eventQueue_,e._path,u),yd(n.serverSyncTree_,e,t,null,!0),o},a=>(im(n,"get for query "+Ut(e)+" failed: "+a),Promise.reject(new Error(a))))}function M5(n,e,t,i){im(n,"update",{path:e.toString(),value:t});let a=!0;const o=Iv(n),u={};if(an(t,(f,m)=>{a=!1,u[f]=XI(Tt(e,f),Xt(m),n.serverSyncTree_,o)}),a)nn("update() called with empty data.  Don't do anything."),cS(n,i,"ok",void 0);else{const f=s1(n),m=e5(n.serverSyncTree_,e,u,f);Rv(n.eventQueue_,m),n.server_.merge(e.toString(),t,(p,y)=>{const E=p==="ok";E||xn("update at "+e+" failed: "+p);const w=Da(n.serverSyncTree_,f,!E),S=w.length>0?Sc(n,e):e;Hi(n.eventQueue_,S,w),cS(n,i,p,y)}),an(t,p=>{const y=h1(n,Tt(e,p));Sc(n,y)}),Hi(n.eventQueue_,e,[])}}function P5(n){im(n,"onDisconnectEvents");const e=Iv(n),t=cd();U_(n.onDisconnect_,Xe(),(a,o)=>{const u=XI(a,o,n.serverSyncTree_,e);DI(t,a,u)});let i=[];U_(t,Xe(),(a,o)=>{i=i.concat(zc(n.serverSyncTree_,a,o));const u=h1(n,a);Sc(n,u)}),n.onDisconnect_=cd(),Hi(n.eventQueue_,Xe(),i)}function L5(n,e,t){let i;Ve(e._path)===".info"?i=H_(n.infoSyncTree_,e,t):i=H_(n.serverSyncTree_,e,t),i1(n.eventQueue_,e._path,i)}function a1(n,e,t){let i;Ve(e._path)===".info"?i=yd(n.infoSyncTree_,e,t):i=yd(n.serverSyncTree_,e,t),i1(n.eventQueue_,e._path,i)}function V5(n){n.persistentConnection_&&n.persistentConnection_.interrupt(R5)}function im(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),nn(t,...e)}function cS(n,e,t,i){e&&Nl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let o=a;i&&(o+=": "+i);const u=new Error(o);u.code=a,e(u)}})}function o1(n,e,t){return QI(n.serverSyncTree_,e,t)||we.EMPTY_NODE}function xv(n,e=n.transactionQueueTree_){if(e||rm(n,e),Dl(e)){const t=u1(n,e);ae(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&U5(n,Fc(e),t)}else ZI(e)&&nm(e,t=>{xv(n,t)})}function U5(n,e,t){const i=t.map(p=>p.currentWriteId),a=o1(n,e,i);let o=a;const u=a.hash();for(let p=0;p<t.length;p++){const y=t[p];ae(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=En(e,y.path);o=o.updateChild(E,y.currentOutputSnapshotRaw)}const f=o.val(!0),m=e;n.server_.put(m.toString(),f,p=>{im(n,"transaction put response",{path:m.toString(),status:p});let y=[];if(p==="ok"){const E=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Da(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&E.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();rm(n,Sv(n.transactionQueueTree_,e)),xv(n,n.transactionQueueTree_),Hi(n.eventQueue_,e,y);for(let w=0;w<E.length;w++)Nl(E[w])}else{if(p==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{xn("transaction at "+m.toString()+" failed: "+p);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=p}Sc(n,e)}},u)}function Sc(n,e){const t=l1(n,e),i=Fc(t),a=u1(n,t);return j5(n,a,i),i}function j5(n,e,t){if(e.length===0)return;const i=[];let a=[];const u=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const m=e[f],p=En(t,m.path);let y=!1,E;if(ae(p!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)y=!0,E=m.abortReason,a=a.concat(Da(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=I5)y=!0,E="maxretry",a=a.concat(Da(n.serverSyncTree_,m.currentWriteId,!0));else{const w=o1(n,m.path,u);m.currentInputSnapshot=w;const S=e[f].update(w.val());if(S!==void 0){Cv("transaction failed: Data returned ",S,m.path);let D=Xt(S);typeof S=="object"&&S!=null&&Qi(S,".priority")||(D=D.updatePriority(w.getPriority()));const P=m.currentWriteId,z=Iv(n),H=d5(D,w,z);m.currentOutputSnapshotRaw=D,m.currentOutputSnapshotResolved=H,m.currentWriteId=s1(n),u.splice(u.indexOf(P),1),a=a.concat(Z6(n.serverSyncTree_,m.path,H,m.currentWriteId,m.applyLocally)),a=a.concat(Da(n.serverSyncTree_,P,!0))}else y=!0,E="nodata",a=a.concat(Da(n.serverSyncTree_,m.currentWriteId,!0))}Hi(n.eventQueue_,t,a),a=[],y&&(e[f].status=2,function(w){setTimeout(w,Math.floor(0))}(e[f].unwatcher),e[f].onComplete&&(E==="nodata"?i.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):i.push(()=>e[f].onComplete(new Error(E),!1,null))))}rm(n,n.transactionQueueTree_);for(let f=0;f<i.length;f++)Nl(i[f]);xv(n,n.transactionQueueTree_)}function l1(n,e){let t,i=n.transactionQueueTree_;for(t=Ve(e);t!==null&&Dl(i)===void 0;)i=Sv(i,t),e=ct(e),t=Ve(e);return i}function u1(n,e){const t=[];return c1(n,e,t),t.sort((i,a)=>i.order-a.order),t}function c1(n,e,t){const i=Dl(e);if(i)for(let a=0;a<i.length;a++)t.push(i[a]);nm(e,a=>{c1(n,a,t)})}function rm(n,e){const t=Dl(e);if(t){let i=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[i]=t[a],i++);t.length=i,JI(e,t.length>0?t:void 0)}nm(e,i=>{rm(n,i)})}function h1(n,e){const t=Fc(l1(n,e)),i=Sv(n.transactionQueueTree_,e);return p5(i,a=>{Og(n,a)}),Og(n,i),e1(i,a=>{Og(n,a)}),t}function Og(n,e){const t=Dl(e);if(t){const i=[];let a=[],o=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(ae(o===u-1,"All SENT items should be at beginning of queue."),o=u,t[u].status=3,t[u].abortReason="set"):(ae(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(Da(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&i.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));o===-1?JI(e,void 0):t.length=o+1,Hi(n.eventQueue_,Fc(e),a);for(let u=0;u<i.length;u++)Nl(i[u])}}/**
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
 */function B5(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let a=t[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function z5(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xn(`Invalid query segment '${t}' in query '${n}'`)}return e}const hS=function(n,e){const t=F5(n),i=t.namespace;t.domain==="firebase.com"&&Lr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Lr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||WV();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new mI(t.host,t.secure,i,a,e,"",i!==t.subdomain),path:new st(t.pathString)}},F5=function(n){let e="",t="",i="",a="",o="",u=!0,f="https",m=443;if(typeof n=="string"){let p=n.indexOf("//");p>=0&&(f=n.substring(0,p-1),n=n.substring(p+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(a=B5(n.substring(y,E)));const w=z5(n.substring(Math.min(n.length,E)));p=e.indexOf(":"),p>=0?(u=f==="https"||f==="wss",m=parseInt(e.substring(p+1),10)):p=e.length;const S=e.slice(0,p);if(S.toLowerCase()==="localhost")t="localhost";else if(S.split(".").length<=2)t=S;else{const D=e.indexOf(".");i=e.substring(0,D).toLowerCase(),t=e.substring(D+1),o=i}"ns"in w&&(o=w.ns)}return{host:e,port:m,domain:t,subdomain:i,secure:u,scheme:f,pathString:a,namespace:o}};/**
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
 */class f1{constructor(e,t,i,a){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class d1{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class m1{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ae(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Dv{constructor(e,t,i,a){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=a}get key(){return Ue(this._path)?null:rv(this._path)}get ref(){return new $i(this._repo,this._path)}get _queryIdentifier(){const e=Wb(this._queryParams),t=ev(e);return t==="{}"?"default":t}get _queryObject(){return Wb(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof Dv))return!1;const t=this._repo===e._repo,i=sv(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+kU(this._path)}}class $i extends Dv{constructor(e,t){super(e,t,new uv,!1)}get parent(){const e=bI(this._path);return e===null?null:new $i(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _l{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new st(e),i=vd(this.ref,e);return new _l(this._node.getChild(t),i,wt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,a)=>e(new _l(a,vd(this.ref,i),wt)))}hasChild(e){const t=new st(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Pf(n,e){return n=ft(n),n._checkNotDeleted("ref"),e!==void 0?vd(n._root,e):n._root}function vd(n,e){return n=ft(n),Ve(n._path)===null?b5("child","path",e):n1("child","path",e),new $i(n._repo,Tt(n._path,e))}function q5(n,e){w5("update",e,n._path);const t=new bd;return M5(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function fS(n){n=ft(n);const e=new m1(()=>{}),t=new qc(e);return k5(n._repo,n,t).then(i=>new _l(i,new $i(n._repo,n._path),n._queryParams.getIndex()))}class qc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new f1("value",this,new _l(e.snapshotNode,new $i(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new d1(this,e,t):null}matches(e){return e instanceof qc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ov{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new d1(this,e,t):null}createEvent(e,t){ae(e.childName!=null,"Child events should have a childName.");const i=vd(new $i(t._repo,t._path),e.childName),a=t._queryParams.getIndex();return new f1(e.type,this,new _l(e.snapshotNode,i,a),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ov?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function H5(n,e,t,i,a){const o=new m1(t,void 0),u=new qc(o);return L5(n._repo,n,u),()=>a1(n._repo,n,u)}function G5(n,e,t,i){return H5(n,"value",e)}function K5(n,e,t){let i=null;const a=null;e==="value"?i=new qc(a):e&&(i=new Ov(e,a)),a1(n._repo,n,i)}G6($i);W6($i);/**
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
 */const Q5="FIREBASE_DATABASE_EMULATOR_HOST",K_={};let $5=!1;function Y5(n,e,t,i){n.repoInfo_=new mI(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function W5(n,e,t,i,a){let o=i||n.options.databaseURL;o===void 0&&(n.options.projectId||Lr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nn("Using default host for project ",n.options.projectId),o=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=hS(o,a),f=u.repoInfo,m;typeof process<"u"&&Ob&&(m=Ob[Q5]),m?(o=`http://${m}?ns=${f.namespace}`,u=hS(o,a),f=u.repoInfo):u.repoInfo.secure;const p=new oU(n.name,n.options,e);S5("Invalid Firebase Database URL",u),Ue(u.path)||Lr("Database URL must point to the root of a Firebase Database (not including a child path).");const y=J5(f,n,p,new aU(n,t));return new Z5(y,n)}function X5(n,e){const t=K_[e];(!t||t[n.key]!==n)&&Lr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),V5(n),delete t[n.key]}function J5(n,e,t,i){let a=K_[e.name];a||(a={},K_[e.name]=a);let o=a[n.toURLString()];return o&&Lr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),o=new N5(n,$5,t,i),a[n.toURLString()]=o,o}class Z5{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(x5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $i(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(X5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lr("Cannot call "+e+" on a deleted database.")}}function kv(n=Ad(),e){const t=Hs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=oA("database");i&&e3(t,...i)}return t}function e3(n,e,t,i={}){n=ft(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Lr("Cannot call useEmulator() after instance has already been initialized.");const a=n._repoInternal;let o;if(a.repoInfo_.nodeAdmin)i.mockUserToken&&Lr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Mf(Mf.OWNER);else if(i.mockUserToken){const u=typeof i.mockUserToken=="string"?i.mockUserToken:cA(i.mockUserToken,n.app.options.projectId);o=new Mf(u)}Y5(a,e,t,o)}/**
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
 */function t3(n){HV(qa),gi(new si("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return W5(i,a,o,t)},"PUBLIC").setMultipleInstances(!0)),In(kb,Mb,n),In(kb,Mb,"esm2017")}xr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};xr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};t3();const n3={apiKey:"AIzaSyDk7mEkayeHxrKerk0hOOCsxmztdYh9uck",authDomain:"final-web-app-5880c.firebaseapp.com",projectId:"final-web-app-5880c",storageBucket:"final-web-app-5880c.firebasestorage.app",messagingSenderId:"725331159486",appId:"1:725331159486:web:3ac104befd96704203b1ef",measurementId:"G-P0380Q8BWN",databaseURL:"https://final-web-app-5880c-default-rtdb.asia-southeast1.firebasedatabase.app"},sm=vA(n3),i3=jd(sm);BL(sm);const r3=Wd(sm);kv(sm);const s3=async()=>{const n=new br;try{const e=await J4(r3,n),t=e.user;if(console.log("User Logged In:",t),t){const{uid:i,displayName:a,email:o,photoURL:u}=t;console.log("Saving to Firestore:",i,a,o);const f=gc(i3,"users",i);return await x_(f,{uid:i,name:a,email:o,photoURL:u},{merge:!0}),console.log("Firestore Saved Successfully!"),e}}catch(e){throw console.error("Error signing in with Google:",e),e}},a3=()=>{const n=El(),[e,t]=$.useState(!1);$.useEffect(()=>{JSON.parse(localStorage.getItem("user"))&&n("/home")},[n]);const i=()=>{t(!0),s3().then(a=>{const o=a.user;localStorage.setItem("user",JSON.stringify(o)),n("/home")}).catch(a=>{console.error("Error during sign in: ",a.message),alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ: "+a.message)}).finally(()=>{t(!1)})};return e?C.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center",children:C.jsxs("div",{className:"p-8 bg-white rounded-xl shadow-xl",children:[C.jsx("div",{className:"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"}),C.jsx("p",{className:"mt-4 text-gray-600 font-medium text-center",children:"กำลังเข้าสู่ระบบ..."})]})}):C.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:C.jsxs("div",{className:"max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl transform transition-all hover:scale-[1.01]",children:[C.jsxs("div",{className:"text-center",children:[C.jsx("div",{className:"flex justify-center mb-8",children:C.jsx("div",{className:"p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full shadow-inner",children:C.jsxs("svg",{className:"w-14 h-14 text-blue-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[C.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),C.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]})})}),C.jsx("h1",{className:"text-4xl font-bold mb-3 text-gray-800 tracking-tight",children:"ระบบจัดการห้องเรียน"}),C.jsx("h2",{className:"text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text",children:"สำหรับอาจารย์"}),C.jsx("p",{className:"text-gray-600 text-lg",children:"กรุณาเข้าสู่ระบบด้วยบัญชี Google ของท่าน"})]}),C.jsx("button",{onClick:i,disabled:e,className:`w-full flex items-center justify-center px-6 py-4 
            text-gray-700 bg-white rounded-xl 
            border-2 border-gray-200
            hover:bg-gray-50 hover:border-blue-300 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
            transform transition-all duration-200 active:scale-95
            shadow-sm hover:shadow-md
            ${e?"opacity-50 cursor-not-allowed":""}`,children:e?C.jsx("div",{className:"w-6 h-6 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"}):C.jsxs(C.Fragment,{children:[C.jsx("svg",{className:"w-6 h-6 mr-3",viewBox:"0 0 24 24"}),C.jsx("span",{className:"text-lg font-medium cursor-pointer",children:"เข้าสู่ระบบด้วย Google"})]})}),C.jsx("div",{className:"mt-8 text-center text-sm text-gray-500",children:C.jsx("span",{className:"bg-yellow-50 px-3 py-1 rounded-full",children:"ระบบนี้รองรับการใช้งานผ่านบัญชี Google เท่านั้น"})})]})})},o3=()=>{const n=El(),e=Wd(),t=jd(),[i,a]=$.useState([]),[o,u]=$.useState(null),[f,m]=$.useState(!1);$.useEffect(()=>{const w=e.currentUser;if(w){u(w);const S=R_(t,"classroom"),D=dP(S,mP("owner","==",w.uid));(async()=>{const z=(await N_(D)).docs.map(H=>{var ne,se,W,O;const G=H.data();return{id:H.id,name:((ne=G.info)==null?void 0:ne.name)||"ไม่มีชื่อวิชา",code:((se=G.info)==null?void 0:se.code)||"ไม่มีรหัสวิชา",room:((W=G.info)==null?void 0:W.room)||"ไม่มีห้องเรียน",photo:((O=G.info)==null?void 0:O.photo)||"https://via.placeholder.com/400x200?text=No+Image"}});a(z)})()}else n("/")},[e,t,n]);const p=()=>{m(!0)},y=async()=>{try{await O4(e),localStorage.removeItem("user"),n("/",{replace:!0})}catch(w){console.error("Logout error:",w)}},E=()=>{m(!1)};return C.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50",children:[C.jsx("header",{className:"bg-white shadow-md",children:C.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:C.jsxs("div",{className:"flex justify-between items-center",children:[C.jsx("div",{className:"flex items-center space-x-3",children:C.jsx("h1",{className:"text-3xl font-bold text-indigo-600",children:"ระบบจัดการห้องเรียน"})}),C.jsxs("div",{className:"flex items-center space-x-6",children:[o&&C.jsxs("div",{className:"flex items-center bg-gray-50 rounded-full px-4 py-2",children:[C.jsx("img",{src:o.photoURL,alt:o.displayName,className:"w-10 h-10 rounded-full border-2 border-indigo-200"}),C.jsxs("div",{className:"ml-3",children:[C.jsx("p",{className:"text-sm font-semibold text-gray-800",children:o.displayName}),C.jsx("p",{className:"text-xs text-gray-500",children:o.email})]})]}),C.jsxs("div",{className:"flex items-center space-x-3",children:[C.jsx(Wu,{to:"/edit-profile",className:"px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-100 transition-colors duration-200",children:"แก้ไขข้อมูลส่วนตัว"}),C.jsx(Wu,{to:"/add-course",className:"px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200",children:"เพิ่มวิชา"}),C.jsx("button",{onClick:p,className:"px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-200",children:"ออกจากระบบ"})]})]})]})})}),C.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[C.jsx("div",{className:"flex justify-between items-center mb-8",children:C.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"รายวิชาที่สอน"})}),i.length===0?C.jsx("div",{className:"bg-white rounded-xl shadow-md p-8 text-center",children:C.jsx("p",{className:"text-gray-500 text-lg",children:"ยังไม่มีรายวิชาที่สอน กรุณาเพิ่มวิชาใหม่"})}):C.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:i.map(w=>C.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200",children:[C.jsx("div",{className:"h-48 bg-cover bg-center",style:{backgroundImage:`url(${w.photo})`}}),C.jsxs("div",{className:"p-6",children:[C.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-2",children:w.name}),C.jsxs("div",{className:"space-y-2 mb-6",children:[C.jsxs("p",{className:"text-gray-600 text-sm flex items-center",children:[C.jsx("span",{className:"font-medium mr-2",children:"รหัสวิชา:"}),w.code]}),C.jsxs("p",{className:"text-gray-600 text-sm flex items-center",children:[C.jsx("span",{className:"font-medium mr-2",children:"ห้องเรียน:"}),w.room]})]}),C.jsx(Wu,{to:`/manage-classroom/${w.id}`,className:"block w-full text-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium",children:"จัดการห้องเรียน"})]})]},w.id))})]}),f&&C.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 popup-logout",children:C.jsxs("div",{className:"bg-white rounded-xl p-8 max-w-sm w-full mx-4 shadow-2xl",children:[C.jsx("h3",{className:"text-xl font-bold text-gray-800 mb-4",children:"ยืนยันการออกจากระบบ"}),C.jsx("p",{className:"text-gray-600 mb-6",children:"คุณต้องการออกจากระบบใช่หรือไม่?"}),C.jsxs("div",{className:"flex justify-end space-x-4",children:[C.jsx("button",{onClick:E,className:"px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium",children:"ยกเลิก"}),C.jsx("button",{onClick:y,className:"px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium",children:"ยืนยัน"})]})]})})]})},l3=()=>{const n=El(),e=Wd(),t=kv(),[i,a]=$.useState(""),[o,u]=$.useState(""),[f,m]=$.useState(""),[p,y]=$.useState(""),[E,w]=$.useState(!1),[S,D]=$.useState(""),[U,P]=$.useState("");$.useEffect(()=>{const H=e.currentUser;if(!H){n("/");return}a(H.displayName||""),u(H.email||""),m(H.photoURL||"");const G=Pf(t,`users/${H.uid}/profile`);fS(G).then(ne=>{if(ne.exists()){const se=ne.val();se.displayName&&a(se.displayName),se.photoURL&&m(se.photoURL)}})},[e,t,n]);const z=async H=>{H.preventDefault(),w(!0),D(""),P("");try{const G=e.currentUser;if(!G)throw new Error("ไม่พบข้อมูลผู้ใช้");let ne=p||f;await N4(G,{displayName:i,photoURL:ne}),P("อัปเดตข้อมูลผู้ใช้ในระบบแล้ว"),w(!1),n("/home"),await q5(Pf(t,`users/${G.uid}/profile`),{displayName:i,email:o,photoURL:ne});const se=Pf(t,`users/${G.uid}/profile`),W=await fS(se);if(W.exists()){const O=W.val();a(O.displayName),m(O.photoURL)}y("")}catch(G){console.error("Error updating profile:",G),D("เกิดข้อผิดพลาดในการอัปเดตข้อมูล: "+G.message),w(!1)}};return C.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100",children:C.jsx("div",{className:"container mx-auto px-4 py-12 sm:px-6 lg:px-8",children:C.jsx("div",{className:"max-w-3xl mx-auto",children:C.jsxs("div",{className:" bg-white/80 rounded-3xl shadow-2xl overflow-hidden border border-white/50",children:[C.jsxs("div",{className:"px-8 py-8 bg-gradient-to-r from-indigo-600 to-purple-600 relative",children:[C.jsx("div",{className:"absolute inset-0 bg-pattern opacity-10"}),C.jsxs("div",{className:"relative z-10",children:[C.jsx("h1",{className:"text-3xl font-bold text-white text-center mb-2",children:"แก้ไขข้อมูลส่วนตัว"}),C.jsx("p",{className:"text-indigo-100 text-center text-sm",children:"ปรับแต่งโปรไฟล์ของคุณให้ตรงกับตัวตน"})]})]}),C.jsxs("form",{onSubmit:z,className:"p-8 sm:p-10",children:[C.jsx("div",{className:"mb-12",children:C.jsxs("div",{className:"relative w-36 h-36 mx-auto",children:[C.jsx("div",{className:"w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 ring-4 ring-indigo-100/50",children:f||p?C.jsx("img",{src:p||f,alt:"Profile",className:"w-full h-full object-cover transition-all duration-300",onError:H=>{H.target.onerror=null,H.target.src="",H.target.className="hidden",H.target.parentElement.innerHTML='<div class="w-full h-full flex items-center justify-center text-sm text-red-500 bg-red-50">ไม่สามารถโหลดรูปได้</div>'}}):C.jsx("div",{className:"w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50",children:C.jsx("span",{className:"text-5xl",children:"👤"})})}),C.jsx("div",{className:"absolute -bottom-2 -right-2 p-2.5 bg-white rounded-full shadow-lg ring-2 ring-indigo-100/50",children:C.jsxs("svg",{className:"w-6 h-6 text-indigo-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"}),C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 13a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})}),S&&C.jsx("div",{className:"mb-8 p-4 bg-red-50/80  border border-red-200 rounded-2xl animate-fadeIn",children:C.jsxs("div",{className:"flex items-center text-red-700",children:[C.jsx("svg",{className:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),C.jsx("p",{className:"text-sm font-medium",children:S})]})}),U&&C.jsx("div",{className:"mb-8 p-4 bg-green-50/80  border border-green-200 rounded-2xl animate-fadeIn",children:C.jsxs("div",{className:"flex items-center text-green-700",children:[C.jsx("svg",{className:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),C.jsx("p",{className:"text-sm font-medium",children:U})]})}),C.jsxs("div",{className:"space-y-8",children:[C.jsxs("div",{children:[C.jsx("label",{htmlFor:"display-name",className:"block text-sm font-medium text-gray-700 mb-2",children:"ชื่อผู้ใช้"}),C.jsx("input",{type:"text",id:"display-name",value:i,onChange:H=>a(H.target.value),className:"w-full px-4 py-3.5 bg-white/50  border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"})]}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"อีเมล"}),C.jsx("input",{type:"email",id:"email",value:o,onChange:H=>u(H.target.value),disabled:!0,className:"w-full px-4 py-3.5 bg-gray-100/80  border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"})]}),C.jsxs("div",{children:[C.jsx("label",{htmlFor:"photo-url",className:"block text-sm font-medium text-gray-700 mb-2",children:"ใส่ลิงก์รูปภาพใหม่"}),C.jsx("input",{type:"text",id:"photo-url",value:p,onChange:H=>y(H.target.value),placeholder:"ใส่ URL รูปภาพ",className:"w-full px-4 py-3.5 bg-white/50  border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"})]})]}),C.jsxs("div",{className:"mt-12 flex justify-end space-x-4",children:[C.jsx("button",{type:"button",onClick:()=>n("/home"),className:"px-6 py-3 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium focus:ring-2 focus:ring-gray-200",children:"ยกเลิก"}),C.jsx("button",{type:"submit",disabled:E,className:"px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed font-medium focus:ring-2 focus:ring-indigo-500 shadow-lg shadow-indigo-500/20",children:E?C.jsxs("span",{className:"flex items-center",children:[C.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[C.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),C.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"กำลังบันทึก..."]}):"บันทึก"})]})]})]})})})})},u3=()=>{const n=El(),e=Wd(),t=jd(),[i,a]=$.useState({courseCode:"",courseName:"",className:"",imageUrl:""}),[o,u]=$.useState(""),[f,m]=$.useState(!1),[p,y]=$.useState(null),[E,w]=$.useState(!1);$.useEffect(()=>{if(i.imageUrl){const P=new Image;P.onload=()=>{y(i.imageUrl),w(!1)},P.onerror=()=>{y(null),w(!0)},P.src=i.imageUrl}else y(null),w(!1)},[i.imageUrl]);const S=P=>{a({...i,[P.target.name]:P.target.value})},D=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),U=async P=>{P.preventDefault(),m(!0),u("");try{const z=e.currentUser;if(!z)throw new Error("ไม่พบข้อมูลผู้ใช้ กรุณาเข้าสู่ระบบใหม่");if(!i.courseCode||!i.courseName||!i.className)throw new Error("กรุณากรอกข้อมูลให้ครบถ้วน");let H=i.imageUrl;(!H||!H.startsWith("http")||E)&&(H="https://via.placeholder.com/400x200?text=No+Image");const G=D();await x_(gc(t,"classroom",G),{owner:z.uid,info:{code:i.courseCode,name:i.courseName,room:i.className,photo:H}}),await x_(gc(t,"users",z.uid,"classroom",G),{status:1,info:{code:i.courseCode,name:i.courseName,room:i.className,photo:H}}),n("/home")}catch(z){console.error("Error adding course:",z),u(z.message)}finally{m(!1)}};return C.jsx("div",{className:"min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-16",children:C.jsx("div",{className:"container mx-auto px-4",children:C.jsx("div",{className:"max-w-4xl mx-auto",children:C.jsxs("div",{className:" bg-white/90 rounded-3xl shadow-2xl overflow-hidden border border-white/50 transform hover:scale-[1.01] transition-all duration-300",children:[C.jsxs("div",{className:"px-8 py-12 bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden",children:[C.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-70"}),C.jsx("div",{className:"absolute -right-20 -top-20 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"}),C.jsx("div",{className:"absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl"}),C.jsxs("div",{className:"relative z-10",children:[C.jsx("h1",{className:"text-4xl font-bold text-white text-center mb-3 tracking-tight",children:"เพิ่มวิชาใหม่"}),C.jsx("p",{className:"text-indigo-100 text-center text-lg font-light",children:"สร้างรายวิชาใหม่สำหรับการเรียนการสอน"})]})]}),C.jsxs("form",{onSubmit:U,className:"p-10 space-y-8",children:[C.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-10",children:[C.jsxs("div",{className:"space-y-6",children:[C.jsxs("div",{className:"group",children:[C.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors",children:"รหัสวิชา"}),C.jsx("input",{type:"text",name:"courseCode",value:i.courseCode,onChange:S,placeholder:"เช่น SC310001",required:!0,className:"w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"})]}),C.jsxs("div",{className:"group",children:[C.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors",children:"ชื่อวิชา"}),C.jsx("input",{type:"text",name:"courseName",value:i.courseName,onChange:S,placeholder:"เช่น Computer Programming",required:!0,className:"w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"})]}),C.jsxs("div",{className:"group",children:[C.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors",children:"ห้องเรียน"}),C.jsx("input",{type:"text",name:"className",value:i.className,onChange:S,placeholder:"เช่น SC5101",required:!0,className:"w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"})]})]}),C.jsxs("div",{className:"space-y-6",children:[C.jsxs("div",{className:"group",children:[C.jsx("label",{className:"block text-base font-medium text-gray-700 mb-2 group-focus-within:text-indigo-600 transition-colors",children:"รูปภาพปก"}),C.jsx("input",{type:"url",name:"imageUrl",value:i.imageUrl,onChange:S,placeholder:"https://example.com/image.jpg",className:"w-full px-5 py-4 bg-white/80  border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300 placeholder:text-gray-400"}),E&&C.jsx("div",{className:"mt-3 p-4 bg-red-50/90  border-2 border-red-100 rounded-2xl animate-pulse",children:C.jsxs("div",{className:"flex items-center text-red-700",children:[C.jsx("svg",{className:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),C.jsx("p",{className:"text-sm font-medium",children:"ไม่สามารถโหลดรูปภาพได้ กรุณาตรวจสอบ URL อีกครั้ง"})]})})]}),C.jsxs("div",{className:"mt-6",children:[C.jsx("p",{className:"text-base font-medium text-gray-700 mb-2",children:"ตัวอย่างรูปภาพ"}),C.jsx("div",{className:"border-2 border-gray-100 rounded-2xl overflow-hidden aspect-video bg-white/80  group hover:border-indigo-200 transition-all duration-300",children:p?C.jsx("img",{src:p,alt:"Course preview",className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}):C.jsx("div",{className:"w-full h-full flex items-center justify-center text-gray-400 text-lg",children:E?"ไม่สามารถโหลดรูปภาพได้":"ไม่มีรูปภาพ"})})]})]})]}),o&&C.jsx("div",{className:"p-4 bg-red-50/90  border-2 border-red-100 rounded-2xl animate-pulse",children:C.jsxs("div",{className:"flex items-center text-red-700",children:[C.jsx("svg",{className:"w-5 h-5 mr-3 flex-shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),C.jsx("p",{className:"text-sm font-medium",children:o})]})}),C.jsxs("div",{className:"flex justify-end space-x-4 pt-8 border-t border-gray-100",children:[C.jsx("button",{type:"button",onClick:()=>n("/home"),className:"px-8 py-4 border-2 border-gray-200 rounded-2xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-medium focus:ring-4 focus:ring-gray-200/50  text-base",children:"ยกเลิก"}),C.jsxs("button",{type:"submit",disabled:f,className:"px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed font-medium focus:ring-4 focus:ring-indigo-500/50 shadow-xl shadow-indigo-500/20 text-base relative overflow-hidden group",children:[C.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.2)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),f?C.jsxs("span",{className:"flex items-center",children:[C.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[C.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),C.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"กำลังบันทึก..."]}):"บันทึก"]})]})]})]})})})})};var qo={},kg,dS;function c3(){return dS||(dS=1,kg=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),kg}var Mg={},Ts={},mS;function Ya(){if(mS)return Ts;mS=1;let n;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Ts.getSymbolSize=function(i){if(!i)throw new Error('"version" cannot be null or undefined');if(i<1||i>40)throw new Error('"version" should be in range from 1 to 40');return i*4+17},Ts.getSymbolTotalCodewords=function(i){return e[i]},Ts.getBCHDigit=function(t){let i=0;for(;t!==0;)i++,t>>>=1;return i},Ts.setToSJISFunction=function(i){if(typeof i!="function")throw new Error('"toSJISFunc" is not a valid function.');n=i},Ts.isKanjiModeEnabled=function(){return typeof n<"u"},Ts.toSJIS=function(i){return n(i)},Ts}var Pg={},pS;function Mv(){return pS||(pS=1,function(n){n.L={bit:1},n.M={bit:0},n.Q={bit:3},n.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return n.L;case"m":case"medium":return n.M;case"q":case"quartile":return n.Q;case"h":case"high":return n.H;default:throw new Error("Unknown EC Level: "+t)}}n.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},n.from=function(i,a){if(n.isValid(i))return i;try{return e(i)}catch{return a}}}(Pg)),Pg}var Lg,gS;function h3(){if(gS)return Lg;gS=1;function n(){this.buffer=[],this.length=0}return n.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Lg=n,Lg}var Vg,_S;function f3(){if(_S)return Vg;_S=1;function n(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return n.prototype.set=function(e,t,i,a){const o=e*this.size+t;this.data[o]=i,a&&(this.reservedBit[o]=!0)},n.prototype.get=function(e,t){return this.data[e*this.size+t]},n.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i},n.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Vg=n,Vg}var Ug={},yS;function d3(){return yS||(yS=1,function(n){const e=Ya().getSymbolSize;n.getRowColCoords=function(i){if(i===1)return[];const a=Math.floor(i/7)+2,o=e(i),u=o===145?26:Math.ceil((o-13)/(2*a-2))*2,f=[o-7];for(let m=1;m<a-1;m++)f[m]=f[m-1]-u;return f.push(6),f.reverse()},n.getPositions=function(i){const a=[],o=n.getRowColCoords(i),u=o.length;for(let f=0;f<u;f++)for(let m=0;m<u;m++)f===0&&m===0||f===0&&m===u-1||f===u-1&&m===0||a.push([o[f],o[m]]);return a}}(Ug)),Ug}var jg={},vS;function m3(){if(vS)return jg;vS=1;const n=Ya().getSymbolSize,e=7;return jg.getPositions=function(i){const a=n(i);return[[0,0],[a-e,0],[0,a-e]]},jg}var Bg={},ES;function p3(){return ES||(ES=1,function(n){n.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};n.isValid=function(a){return a!=null&&a!==""&&!isNaN(a)&&a>=0&&a<=7},n.from=function(a){return n.isValid(a)?parseInt(a,10):void 0},n.getPenaltyN1=function(a){const o=a.size;let u=0,f=0,m=0,p=null,y=null;for(let E=0;E<o;E++){f=m=0,p=y=null;for(let w=0;w<o;w++){let S=a.get(E,w);S===p?f++:(f>=5&&(u+=e.N1+(f-5)),p=S,f=1),S=a.get(w,E),S===y?m++:(m>=5&&(u+=e.N1+(m-5)),y=S,m=1)}f>=5&&(u+=e.N1+(f-5)),m>=5&&(u+=e.N1+(m-5))}return u},n.getPenaltyN2=function(a){const o=a.size;let u=0;for(let f=0;f<o-1;f++)for(let m=0;m<o-1;m++){const p=a.get(f,m)+a.get(f,m+1)+a.get(f+1,m)+a.get(f+1,m+1);(p===4||p===0)&&u++}return u*e.N2},n.getPenaltyN3=function(a){const o=a.size;let u=0,f=0,m=0;for(let p=0;p<o;p++){f=m=0;for(let y=0;y<o;y++)f=f<<1&2047|a.get(p,y),y>=10&&(f===1488||f===93)&&u++,m=m<<1&2047|a.get(y,p),y>=10&&(m===1488||m===93)&&u++}return u*e.N3},n.getPenaltyN4=function(a){let o=0;const u=a.data.length;for(let m=0;m<u;m++)o+=a.data[m];return Math.abs(Math.ceil(o*100/u/5)-10)*e.N4};function t(i,a,o){switch(i){case n.Patterns.PATTERN000:return(a+o)%2===0;case n.Patterns.PATTERN001:return a%2===0;case n.Patterns.PATTERN010:return o%3===0;case n.Patterns.PATTERN011:return(a+o)%3===0;case n.Patterns.PATTERN100:return(Math.floor(a/2)+Math.floor(o/3))%2===0;case n.Patterns.PATTERN101:return a*o%2+a*o%3===0;case n.Patterns.PATTERN110:return(a*o%2+a*o%3)%2===0;case n.Patterns.PATTERN111:return(a*o%3+(a+o)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}n.applyMask=function(a,o){const u=o.size;for(let f=0;f<u;f++)for(let m=0;m<u;m++)o.isReserved(m,f)||o.xor(m,f,t(a,m,f))},n.getBestMask=function(a,o){const u=Object.keys(n.Patterns).length;let f=0,m=1/0;for(let p=0;p<u;p++){o(p),n.applyMask(p,a);const y=n.getPenaltyN1(a)+n.getPenaltyN2(a)+n.getPenaltyN3(a)+n.getPenaltyN4(a);n.applyMask(p,a),y<m&&(m=y,f=p)}return f}}(Bg)),Bg}var Tf={},TS;function p1(){if(TS)return Tf;TS=1;const n=Mv(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return Tf.getBlocksCount=function(a,o){switch(o){case n.L:return e[(a-1)*4+0];case n.M:return e[(a-1)*4+1];case n.Q:return e[(a-1)*4+2];case n.H:return e[(a-1)*4+3];default:return}},Tf.getTotalCodewordsCount=function(a,o){switch(o){case n.L:return t[(a-1)*4+0];case n.M:return t[(a-1)*4+1];case n.Q:return t[(a-1)*4+2];case n.H:return t[(a-1)*4+3];default:return}},Tf}var zg={},Gu={},wS;function g3(){if(wS)return Gu;wS=1;const n=new Uint8Array(512),e=new Uint8Array(256);return function(){let i=1;for(let a=0;a<255;a++)n[a]=i,e[i]=a,i<<=1,i&256&&(i^=285);for(let a=255;a<512;a++)n[a]=n[a-255]}(),Gu.log=function(i){if(i<1)throw new Error("log("+i+")");return e[i]},Gu.exp=function(i){return n[i]},Gu.mul=function(i,a){return i===0||a===0?0:n[e[i]+e[a]]},Gu}var bS;function _3(){return bS||(bS=1,function(n){const e=g3();n.mul=function(i,a){const o=new Uint8Array(i.length+a.length-1);for(let u=0;u<i.length;u++)for(let f=0;f<a.length;f++)o[u+f]^=e.mul(i[u],a[f]);return o},n.mod=function(i,a){let o=new Uint8Array(i);for(;o.length-a.length>=0;){const u=o[0];for(let m=0;m<a.length;m++)o[m]^=e.mul(a[m],u);let f=0;for(;f<o.length&&o[f]===0;)f++;o=o.slice(f)}return o},n.generateECPolynomial=function(i){let a=new Uint8Array([1]);for(let o=0;o<i;o++)a=n.mul(a,new Uint8Array([1,e.exp(o)]));return a}}(zg)),zg}var Fg,SS;function y3(){if(SS)return Fg;SS=1;const n=_3();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(i){this.degree=i,this.genPoly=n.generateECPolynomial(this.degree)},e.prototype.encode=function(i){if(!this.genPoly)throw new Error("Encoder not initialized");const a=new Uint8Array(i.length+this.degree);a.set(i);const o=n.mod(a,this.genPoly),u=this.degree-o.length;if(u>0){const f=new Uint8Array(this.degree);return f.set(o,u),f}return o},Fg=e,Fg}var qg={},Hg={},Gg={},AS;function g1(){return AS||(AS=1,Gg.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Gg}var Pi={},CS;function _1(){if(CS)return Pi;CS=1;const n="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const i="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Pi.KANJI=new RegExp(t,"g"),Pi.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Pi.BYTE=new RegExp(i,"g"),Pi.NUMERIC=new RegExp(n,"g"),Pi.ALPHANUMERIC=new RegExp(e,"g");const a=new RegExp("^"+t+"$"),o=new RegExp("^"+n+"$"),u=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Pi.testKanji=function(m){return a.test(m)},Pi.testNumeric=function(m){return o.test(m)},Pi.testAlphanumeric=function(m){return u.test(m)},Pi}var RS;function Wa(){return RS||(RS=1,function(n){const e=g1(),t=_1();n.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},n.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},n.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},n.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},n.MIXED={bit:-1},n.getCharCountIndicator=function(o,u){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!e.isValid(u))throw new Error("Invalid version: "+u);return u>=1&&u<10?o.ccBits[0]:u<27?o.ccBits[1]:o.ccBits[2]},n.getBestModeForData=function(o){return t.testNumeric(o)?n.NUMERIC:t.testAlphanumeric(o)?n.ALPHANUMERIC:t.testKanji(o)?n.KANJI:n.BYTE},n.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},n.isValid=function(o){return o&&o.bit&&o.ccBits};function i(a){if(typeof a!="string")throw new Error("Param is not a string");switch(a.toLowerCase()){case"numeric":return n.NUMERIC;case"alphanumeric":return n.ALPHANUMERIC;case"kanji":return n.KANJI;case"byte":return n.BYTE;default:throw new Error("Unknown mode: "+a)}}n.from=function(o,u){if(n.isValid(o))return o;try{return i(o)}catch{return u}}}(Hg)),Hg}var IS;function v3(){return IS||(IS=1,function(n){const e=Ya(),t=p1(),i=Mv(),a=Wa(),o=g1(),u=7973,f=e.getBCHDigit(u);function m(w,S,D){for(let U=1;U<=40;U++)if(S<=n.getCapacity(U,D,w))return U}function p(w,S){return a.getCharCountIndicator(w,S)+4}function y(w,S){let D=0;return w.forEach(function(U){const P=p(U.mode,S);D+=P+U.getBitsLength()}),D}function E(w,S){for(let D=1;D<=40;D++)if(y(w,D)<=n.getCapacity(D,S,a.MIXED))return D}n.from=function(S,D){return o.isValid(S)?parseInt(S,10):D},n.getCapacity=function(S,D,U){if(!o.isValid(S))throw new Error("Invalid QR Code version");typeof U>"u"&&(U=a.BYTE);const P=e.getSymbolTotalCodewords(S),z=t.getTotalCodewordsCount(S,D),H=(P-z)*8;if(U===a.MIXED)return H;const G=H-p(U,S);switch(U){case a.NUMERIC:return Math.floor(G/10*3);case a.ALPHANUMERIC:return Math.floor(G/11*2);case a.KANJI:return Math.floor(G/13);case a.BYTE:default:return Math.floor(G/8)}},n.getBestVersionForData=function(S,D){let U;const P=i.from(D,i.M);if(Array.isArray(S)){if(S.length>1)return E(S,P);if(S.length===0)return 1;U=S[0]}else U=S;return m(U.mode,U.getLength(),P)},n.getEncodedBits=function(S){if(!o.isValid(S)||S<7)throw new Error("Invalid QR Code version");let D=S<<12;for(;e.getBCHDigit(D)-f>=0;)D^=u<<e.getBCHDigit(D)-f;return S<<12|D}}(qg)),qg}var Kg={},NS;function E3(){if(NS)return Kg;NS=1;const n=Ya(),e=1335,t=21522,i=n.getBCHDigit(e);return Kg.getEncodedBits=function(o,u){const f=o.bit<<3|u;let m=f<<10;for(;n.getBCHDigit(m)-i>=0;)m^=e<<n.getBCHDigit(m)-i;return(f<<10|m)^t},Kg}var Qg={},$g,xS;function T3(){if(xS)return $g;xS=1;const n=Wa();function e(t){this.mode=n.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(i){return 10*Math.floor(i/3)+(i%3?i%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(i){let a,o,u;for(a=0;a+3<=this.data.length;a+=3)o=this.data.substr(a,3),u=parseInt(o,10),i.put(u,10);const f=this.data.length-a;f>0&&(o=this.data.substr(a),u=parseInt(o,10),i.put(u,f*3+1))},$g=e,$g}var Yg,DS;function w3(){if(DS)return Yg;DS=1;const n=Wa(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(i){this.mode=n.ALPHANUMERIC,this.data=i}return t.getBitsLength=function(a){return 11*Math.floor(a/2)+6*(a%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(a){let o;for(o=0;o+2<=this.data.length;o+=2){let u=e.indexOf(this.data[o])*45;u+=e.indexOf(this.data[o+1]),a.put(u,11)}this.data.length%2&&a.put(e.indexOf(this.data[o]),6)},Yg=t,Yg}var Wg,OS;function b3(){if(OS)return Wg;OS=1;const n=Wa();function e(t){this.mode=n.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(i){return i*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let i=0,a=this.data.length;i<a;i++)t.put(this.data[i],8)},Wg=e,Wg}var Xg,kS;function S3(){if(kS)return Xg;kS=1;const n=Wa(),e=Ya();function t(i){this.mode=n.KANJI,this.data=i}return t.getBitsLength=function(a){return a*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let a;for(a=0;a<this.data.length;a++){let o=e.toSJIS(this.data[a]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[a]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),i.put(o,13)}},Xg=t,Xg}var Jg={exports:{}},MS;function A3(){return MS||(MS=1,function(n){var e={single_source_shortest_paths:function(t,i,a){var o={},u={};u[i]=0;var f=e.PriorityQueue.make();f.push(i,0);for(var m,p,y,E,w,S,D,U,P;!f.empty();){m=f.pop(),p=m.value,E=m.cost,w=t[p]||{};for(y in w)w.hasOwnProperty(y)&&(S=w[y],D=E+S,U=u[y],P=typeof u[y]>"u",(P||U>D)&&(u[y]=D,f.push(y,D),o[y]=p))}if(typeof a<"u"&&typeof u[a]>"u"){var z=["Could not find a path from ",i," to ",a,"."].join("");throw new Error(z)}return o},extract_shortest_path_from_predecessor_list:function(t,i){for(var a=[],o=i;o;)a.push(o),t[o],o=t[o];return a.reverse(),a},find_path:function(t,i,a){var o=e.single_source_shortest_paths(t,i,a);return e.extract_shortest_path_from_predecessor_list(o,a)},PriorityQueue:{make:function(t){var i=e.PriorityQueue,a={},o;t=t||{};for(o in i)i.hasOwnProperty(o)&&(a[o]=i[o]);return a.queue=[],a.sorter=t.sorter||i.default_sorter,a},default_sorter:function(t,i){return t.cost-i.cost},push:function(t,i){var a={value:t,cost:i};this.queue.push(a),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};n.exports=e}(Jg)),Jg.exports}var PS;function C3(){return PS||(PS=1,function(n){const e=Wa(),t=T3(),i=w3(),a=b3(),o=S3(),u=_1(),f=Ya(),m=A3();function p(z){return unescape(encodeURIComponent(z)).length}function y(z,H,G){const ne=[];let se;for(;(se=z.exec(G))!==null;)ne.push({data:se[0],index:se.index,mode:H,length:se[0].length});return ne}function E(z){const H=y(u.NUMERIC,e.NUMERIC,z),G=y(u.ALPHANUMERIC,e.ALPHANUMERIC,z);let ne,se;return f.isKanjiModeEnabled()?(ne=y(u.BYTE,e.BYTE,z),se=y(u.KANJI,e.KANJI,z)):(ne=y(u.BYTE_KANJI,e.BYTE,z),se=[]),H.concat(G,ne,se).sort(function(O,I){return O.index-I.index}).map(function(O){return{data:O.data,mode:O.mode,length:O.length}})}function w(z,H){switch(H){case e.NUMERIC:return t.getBitsLength(z);case e.ALPHANUMERIC:return i.getBitsLength(z);case e.KANJI:return o.getBitsLength(z);case e.BYTE:return a.getBitsLength(z)}}function S(z){return z.reduce(function(H,G){const ne=H.length-1>=0?H[H.length-1]:null;return ne&&ne.mode===G.mode?(H[H.length-1].data+=G.data,H):(H.push(G),H)},[])}function D(z){const H=[];for(let G=0;G<z.length;G++){const ne=z[G];switch(ne.mode){case e.NUMERIC:H.push([ne,{data:ne.data,mode:e.ALPHANUMERIC,length:ne.length},{data:ne.data,mode:e.BYTE,length:ne.length}]);break;case e.ALPHANUMERIC:H.push([ne,{data:ne.data,mode:e.BYTE,length:ne.length}]);break;case e.KANJI:H.push([ne,{data:ne.data,mode:e.BYTE,length:p(ne.data)}]);break;case e.BYTE:H.push([{data:ne.data,mode:e.BYTE,length:p(ne.data)}])}}return H}function U(z,H){const G={},ne={start:{}};let se=["start"];for(let W=0;W<z.length;W++){const O=z[W],I=[];for(let b=0;b<O.length;b++){const x=O[b],k=""+W+b;I.push(k),G[k]={node:x,lastCount:0},ne[k]={};for(let L=0;L<se.length;L++){const N=se[L];G[N]&&G[N].node.mode===x.mode?(ne[N][k]=w(G[N].lastCount+x.length,x.mode)-w(G[N].lastCount,x.mode),G[N].lastCount+=x.length):(G[N]&&(G[N].lastCount=x.length),ne[N][k]=w(x.length,x.mode)+4+e.getCharCountIndicator(x.mode,H))}}se=I}for(let W=0;W<se.length;W++)ne[se[W]].end=0;return{map:ne,table:G}}function P(z,H){let G;const ne=e.getBestModeForData(z);if(G=e.from(H,ne),G!==e.BYTE&&G.bit<ne.bit)throw new Error('"'+z+'" cannot be encoded with mode '+e.toString(G)+`.
 Suggested mode is: `+e.toString(ne));switch(G===e.KANJI&&!f.isKanjiModeEnabled()&&(G=e.BYTE),G){case e.NUMERIC:return new t(z);case e.ALPHANUMERIC:return new i(z);case e.KANJI:return new o(z);case e.BYTE:return new a(z)}}n.fromArray=function(H){return H.reduce(function(G,ne){return typeof ne=="string"?G.push(P(ne,null)):ne.data&&G.push(P(ne.data,ne.mode)),G},[])},n.fromString=function(H,G){const ne=E(H,f.isKanjiModeEnabled()),se=D(ne),W=U(se,G),O=m.find_path(W.map,"start","end"),I=[];for(let b=1;b<O.length-1;b++)I.push(W.table[O[b]].node);return n.fromArray(S(I))},n.rawSplit=function(H){return n.fromArray(E(H,f.isKanjiModeEnabled()))}}(Qg)),Qg}var LS;function R3(){if(LS)return Mg;LS=1;const n=Ya(),e=Mv(),t=h3(),i=f3(),a=d3(),o=m3(),u=p3(),f=p1(),m=y3(),p=v3(),y=E3(),E=Wa(),w=C3();function S(W,O){const I=W.size,b=o.getPositions(O);for(let x=0;x<b.length;x++){const k=b[x][0],L=b[x][1];for(let N=-1;N<=7;N++)if(!(k+N<=-1||I<=k+N))for(let pe=-1;pe<=7;pe++)L+pe<=-1||I<=L+pe||(N>=0&&N<=6&&(pe===0||pe===6)||pe>=0&&pe<=6&&(N===0||N===6)||N>=2&&N<=4&&pe>=2&&pe<=4?W.set(k+N,L+pe,!0,!0):W.set(k+N,L+pe,!1,!0))}}function D(W){const O=W.size;for(let I=8;I<O-8;I++){const b=I%2===0;W.set(I,6,b,!0),W.set(6,I,b,!0)}}function U(W,O){const I=a.getPositions(O);for(let b=0;b<I.length;b++){const x=I[b][0],k=I[b][1];for(let L=-2;L<=2;L++)for(let N=-2;N<=2;N++)L===-2||L===2||N===-2||N===2||L===0&&N===0?W.set(x+L,k+N,!0,!0):W.set(x+L,k+N,!1,!0)}}function P(W,O){const I=W.size,b=p.getEncodedBits(O);let x,k,L;for(let N=0;N<18;N++)x=Math.floor(N/3),k=N%3+I-8-3,L=(b>>N&1)===1,W.set(x,k,L,!0),W.set(k,x,L,!0)}function z(W,O,I){const b=W.size,x=y.getEncodedBits(O,I);let k,L;for(k=0;k<15;k++)L=(x>>k&1)===1,k<6?W.set(k,8,L,!0):k<8?W.set(k+1,8,L,!0):W.set(b-15+k,8,L,!0),k<8?W.set(8,b-k-1,L,!0):k<9?W.set(8,15-k-1+1,L,!0):W.set(8,15-k-1,L,!0);W.set(b-8,8,1,!0)}function H(W,O){const I=W.size;let b=-1,x=I-1,k=7,L=0;for(let N=I-1;N>0;N-=2)for(N===6&&N--;;){for(let pe=0;pe<2;pe++)if(!W.isReserved(x,N-pe)){let tt=!1;L<O.length&&(tt=(O[L]>>>k&1)===1),W.set(x,N-pe,tt),k--,k===-1&&(L++,k=7)}if(x+=b,x<0||I<=x){x-=b,b=-b;break}}}function G(W,O,I){const b=new t;I.forEach(function(pe){b.put(pe.mode.bit,4),b.put(pe.getLength(),E.getCharCountIndicator(pe.mode,W)),pe.write(b)});const x=n.getSymbolTotalCodewords(W),k=f.getTotalCodewordsCount(W,O),L=(x-k)*8;for(b.getLengthInBits()+4<=L&&b.put(0,4);b.getLengthInBits()%8!==0;)b.putBit(0);const N=(L-b.getLengthInBits())/8;for(let pe=0;pe<N;pe++)b.put(pe%2?17:236,8);return ne(b,W,O)}function ne(W,O,I){const b=n.getSymbolTotalCodewords(O),x=f.getTotalCodewordsCount(O,I),k=b-x,L=f.getBlocksCount(O,I),N=b%L,pe=L-N,tt=Math.floor(b/L),le=Math.floor(k/L),Ee=le+1,_e=tt-le,Qe=new m(_e);let V=0;const re=new Array(L),me=new Array(L);let ue=0;const ce=new Uint8Array(W.buffer);for(let nt=0;nt<L;nt++){const Ke=nt<pe?le:Ee;re[nt]=ce.slice(V,V+Ke),me[nt]=Qe.encode(re[nt]),V+=Ke,ue=Math.max(ue,Ke)}const Ce=new Uint8Array(b);let Re=0,Je,xe;for(Je=0;Je<ue;Je++)for(xe=0;xe<L;xe++)Je<re[xe].length&&(Ce[Re++]=re[xe][Je]);for(Je=0;Je<_e;Je++)for(xe=0;xe<L;xe++)Ce[Re++]=me[xe][Je];return Ce}function se(W,O,I,b){let x;if(Array.isArray(W))x=w.fromArray(W);else if(typeof W=="string"){let tt=O;if(!tt){const le=w.rawSplit(W);tt=p.getBestVersionForData(le,I)}x=w.fromString(W,tt||40)}else throw new Error("Invalid data");const k=p.getBestVersionForData(x,I);if(!k)throw new Error("The amount of data is too big to be stored in a QR Code");if(!O)O=k;else if(O<k)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+k+`.
`);const L=G(O,I,x),N=n.getSymbolSize(O),pe=new i(N);return S(pe,O),D(pe),U(pe,O),z(pe,I,0),O>=7&&P(pe,O),H(pe,L),isNaN(b)&&(b=u.getBestMask(pe,z.bind(null,pe,I))),u.applyMask(b,pe),z(pe,I,b),{modules:pe,version:O,errorCorrectionLevel:I,maskPattern:b,segments:x}}return Mg.create=function(O,I){if(typeof O>"u"||O==="")throw new Error("No input text");let b=e.M,x,k;return typeof I<"u"&&(b=e.from(I.errorCorrectionLevel,e.M),x=p.from(I.version),k=u.from(I.maskPattern),I.toSJISFunc&&n.setToSJISFunction(I.toSJISFunc)),se(O,x,b,k)},Mg}var Zg={},e_={},VS;function y1(){return VS||(VS=1,function(n){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let i=t.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+t);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(o){return[o,o]}))),i.length===6&&i.push("F","F");const a=parseInt(i.join(""),16);return{r:a>>24&255,g:a>>16&255,b:a>>8&255,a:a&255,hex:"#"+i.slice(0,6).join("")}}n.getOptions=function(i){i||(i={}),i.color||(i.color={});const a=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,o=i.width&&i.width>=21?i.width:void 0,u=i.scale||4;return{width:o,scale:o?4:u,margin:a,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},n.getScale=function(i,a){return a.width&&a.width>=i+a.margin*2?a.width/(i+a.margin*2):a.scale},n.getImageWidth=function(i,a){const o=n.getScale(i,a);return Math.floor((i+a.margin*2)*o)},n.qrToImageData=function(i,a,o){const u=a.modules.size,f=a.modules.data,m=n.getScale(u,o),p=Math.floor((u+o.margin*2)*m),y=o.margin*m,E=[o.color.light,o.color.dark];for(let w=0;w<p;w++)for(let S=0;S<p;S++){let D=(w*p+S)*4,U=o.color.light;if(w>=y&&S>=y&&w<p-y&&S<p-y){const P=Math.floor((w-y)/m),z=Math.floor((S-y)/m);U=E[f[P*u+z]?1:0]}i[D++]=U.r,i[D++]=U.g,i[D++]=U.b,i[D]=U.a}}}(e_)),e_}var US;function I3(){return US||(US=1,function(n){const e=y1();function t(a,o,u){a.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=u,o.width=u,o.style.height=u+"px",o.style.width=u+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}n.render=function(o,u,f){let m=f,p=u;typeof m>"u"&&(!u||!u.getContext)&&(m=u,u=void 0),u||(p=i()),m=e.getOptions(m);const y=e.getImageWidth(o.modules.size,m),E=p.getContext("2d"),w=E.createImageData(y,y);return e.qrToImageData(w.data,o,m),t(E,p,y),E.putImageData(w,0,0),p},n.renderToDataURL=function(o,u,f){let m=f;typeof m>"u"&&(!u||!u.getContext)&&(m=u,u=void 0),m||(m={});const p=n.render(o,u,m),y=m.type||"image/png",E=m.rendererOpts||{};return p.toDataURL(y,E.quality)}}(Zg)),Zg}var t_={},jS;function N3(){if(jS)return t_;jS=1;const n=y1();function e(a,o){const u=a.a/255,f=o+'="'+a.hex+'"';return u<1?f+" "+o+'-opacity="'+u.toFixed(2).slice(1)+'"':f}function t(a,o,u){let f=a+o;return typeof u<"u"&&(f+=" "+u),f}function i(a,o,u){let f="",m=0,p=!1,y=0;for(let E=0;E<a.length;E++){const w=Math.floor(E%o),S=Math.floor(E/o);!w&&!p&&(p=!0),a[E]?(y++,E>0&&w>0&&a[E-1]||(f+=p?t("M",w+u,.5+S+u):t("m",m,0),m=0,p=!1),w+1<o&&a[E+1]||(f+=t("h",y),y=0)):m++}return f}return t_.render=function(o,u,f){const m=n.getOptions(u),p=o.modules.size,y=o.modules.data,E=p+m.margin*2,w=m.color.light.a?"<path "+e(m.color.light,"fill")+' d="M0 0h'+E+"v"+E+'H0z"/>':"",S="<path "+e(m.color.dark,"stroke")+' d="'+i(y,p,m.margin)+'"/>',D='viewBox="0 0 '+E+" "+E+'"',P='<svg xmlns="http://www.w3.org/2000/svg" '+(m.width?'width="'+m.width+'" height="'+m.width+'" ':"")+D+' shape-rendering="crispEdges">'+w+S+`</svg>
`;return typeof f=="function"&&f(null,P),P},t_}var BS;function x3(){if(BS)return qo;BS=1;const n=c3(),e=R3(),t=I3(),i=N3();function a(o,u,f,m,p){const y=[].slice.call(arguments,1),E=y.length,w=typeof y[E-1]=="function";if(!w&&!n())throw new Error("Callback required as last argument");if(w){if(E<2)throw new Error("Too few arguments provided");E===2?(p=f,f=u,u=m=void 0):E===3&&(u.getContext&&typeof p>"u"?(p=m,m=void 0):(p=m,m=f,f=u,u=void 0))}else{if(E<1)throw new Error("Too few arguments provided");return E===1?(f=u,u=m=void 0):E===2&&!u.getContext&&(m=f,f=u,u=void 0),new Promise(function(S,D){try{const U=e.create(f,m);S(o(U,u,m))}catch(U){D(U)}})}try{const S=e.create(f,m);p(null,o(S,u,m))}catch(S){p(S)}}return qo.create=e.create,qo.toCanvas=a.bind(null,t.render),qo.toDataURL=a.bind(null,t.renderToDataURL),qo.toString=a.bind(null,function(o,u,f){return i.render(o,f)}),qo}var D3=x3();const O3=qN(D3),k3=()=>{var G,ne,se;const{id:n}=Nx(),e=El(),t=jd(),[i,a]=$.useState(null),[o,u]=$.useState([]),[f,m]=$.useState([]),[p,y]=$.useState(!0),[E,w]=$.useState(!1),[S,D]=$.useState(new Date().toISOString().split("T")[0]),U=$.useRef(null);$.useEffect(()=>{const W=kv(),O=Pf(W,`classroom/${n}/students`),I=G5(O,b=>{if(console.log("🔥 Student Data from Firebase:",b.val()),b.exists()){const x=b.val(),k=Object.entries(x).map(([L,N])=>({id:L,name:N.name,stdid:N.stdid}));console.log("📌 Students List:",k),k.length!==o.length&&u(k)}else console.log("❌ No student data found!"),u([]);y(!1)});return()=>{K5(O,I)}},[n,o.length]),$.useEffect(()=>{(async()=>{try{const O=gc(t,"classroom",n),I=await vP(O);I.exists()&&a(I.data());const b=R_(t,"classroom",n,"students"),x=await N_(b);u(x.docs.map(N=>({id:N.id,...N.data()})));const k=R_(t,"classroom",n,"checkin"),L=await N_(k);m(L.docs.map(N=>({id:N.id,...N.data()}))),y(!1)}catch(O){console.error("Error fetching data:",O),y(!1)}})()},[n,t]);const P=S?f.filter(W=>{const O=new Date(W.date).toLocaleDateString("th-TH"),I=new Date(S).toLocaleDateString("th-TH");return O===I}):f,z=async()=>{if(U.current)try{const W=document.createElement("canvas");await O3.toCanvas(W,String(n),{width:256,margin:2,color:{dark:"#000000",light:"#ffffff"}}),U.current.innerHTML="",U.current.appendChild(W)}catch(W){console.error("Error generating QR Code:",W)}},H=async(W,O)=>{try{const I=gc(t,"classroom",n,"checkin",W);await EP(I,{students:wP({studentId:O,status:1})}),m(b=>b.map(x=>x.id===W?{...x,students:x.students.map(k=>k.id===O?{...k,status:1}:k)}:x))}catch(I){console.error("Error updating checkin status:",I)}};return p?C.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center",children:C.jsxs("div",{className:"p-8 bg-white rounded-xl shadow-xl",children:[C.jsx("div",{className:"w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"}),C.jsx("p",{className:"mt-4 text-gray-600 font-medium text-center",children:"กำลังโหลดข้อมูล"})]})}):i?C.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8",children:C.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[C.jsxs("button",{onClick:()=>e("/home"),className:"group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-white transition duration-200 mb-6",children:[C.jsx("svg",{className:"w-5 h-5 transform group-hover:-translate-x-1 transition duration-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})}),C.jsx("span",{className:"font-medium",children:"กลับสู่หน้าหลัก"})]}),C.jsxs("div",{className:"relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl shadow-lg mb-8",children:[C.jsxs("div",{className:"relative z-10 p-8",children:[C.jsx("h1",{className:"text-4xl font-bold text-white mb-4",children:(G=i.info)==null?void 0:G.name}),C.jsxs("div",{className:"space-y-2 text-white/90",children:[C.jsxs("p",{className:"text-lg",children:["รหัสวิชา: ",(ne=i.info)==null?void 0:ne.code]}),C.jsxs("p",{className:"text-lg",children:["ห้องเรียน: ",(se=i.info)==null?void 0:se.room]})]}),C.jsx("button",{onClick:()=>{w(!0),setTimeout(z,100)},className:"mt-6 px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl font-medium backdrop-blur-sm transition duration-200 transform hover:scale-105",children:"แสดง QR Code ลงทะเบียน"})]}),C.jsx("div",{className:"absolute top-0 right-0 -mt-20 -mr-20",children:C.jsx("div",{className:"w-40 h-40 bg-white/10 rounded-full blur-2xl"})})]}),E&&C.jsx("div",{className:"fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50",children:C.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-2xl max-w-md w-full mx-4",children:[C.jsxs("div",{className:"flex justify-between items-start mb-6",children:[C.jsxs("div",{className:"space-y-2",children:[C.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:"QR Code สำหรับลงทะเบียน"}),C.jsx("p",{className:"text-xl font-semibold text-gray-800",children:"Software Engineering"}),C.jsx("p",{className:"text-lg text-gray-700 font-medium",children:"รหัสวิชา: CP3003001"})]}),C.jsx("button",{onClick:()=>w(!1),className:"p-2 hover:bg-gray-100 rounded-full transition-colors duration-200",children:C.jsx("svg",{className:"w-6 h-6 text-gray-400 hover:text-gray-600",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]}),C.jsx("div",{ref:U,className:"bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl flex justify-center items-center min-h-[320px] shadow-inner"}),C.jsx("p",{className:"text-center text-gray-500 text-sm mt-4",children:"สแกน QR Code เพื่อเข้าร่วมห้องเรียน"})]})}),C.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[C.jsx("div",{className:"p-6 border-b border-gray-100",children:C.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"รายชื่อนักเรียนที่ลงทะเบียน"})}),C.jsx("div",{className:"overflow-x-auto",children:C.jsxs("table",{className:"w-full",children:[C.jsx("thead",{children:C.jsxs("tr",{className:"bg-gray-50",children:[C.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"ลำดับ"}),C.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"รหัสนักเรียน"}),C.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"ชื่อนักเรียน"})]})}),C.jsx("tbody",{className:"divide-y divide-gray-100",children:p?C.jsx("tr",{children:C.jsx("td",{colSpan:"3",className:"text-center py-4 text-gray-600",children:"กำลังโหลดข้อมูล..."})}):o.length>0?o.map((W,O)=>C.jsxs("tr",{className:"hover:bg-gray-50/50 transition duration-150",children:[C.jsx("td",{className:"px-6 py-4 text-gray-600",children:O+1}),C.jsx("td",{className:"px-6 py-4 font-medium text-gray-900",children:W.stdid}),C.jsx("td",{className:"px-6 py-4 text-gray-800",children:W.name})]},W.id)):C.jsx("tr",{children:C.jsx("td",{colSpan:"3",className:"text-center py-4 text-gray-600",children:"ไม่พบข้อมูลนักเรียน"})})})]})}),C.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden",children:[C.jsxs("div",{className:"p-6 border-b border-gray-100 flex justify-between items-center",children:[C.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"ประวัติการเช็คชื่อ"}),C.jsxs("div",{className:"flex items-center space-x-4",children:[C.jsx("input",{type:"date",value:S,onChange:W=>D(W.target.value),className:"px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),C.jsx("button",{onClick:()=>e(`/checkin/${n}`),className:"px-6 py-3 bg-blue-500 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition duration-200 transform hover:scale-105",children:"เพิ่มการเช็คชื่อ"})]})]}),C.jsx("div",{className:"overflow-x-auto",children:C.jsxs("table",{className:"w-full",children:[C.jsx("thead",{children:C.jsxs("tr",{className:"bg-gray-50",children:[C.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"ลำดับ"}),C.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"วัน-เวลา"}),C.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"จำนวนคนเข้าเรียน"}),C.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"สถานะ"}),C.jsx("th",{className:"px-6 py-4 text-left text-sm font-semibold text-gray-600",children:"จัดการ"})]})}),C.jsx("tbody",{className:"divide-y divide-gray-100",children:P.map((W,O)=>{var I,b,x;return C.jsxs("tr",{className:"hover:bg-gray-50/50 transition duration-150",children:[C.jsx("td",{className:"px-6 py-4 text-gray-600",children:O+1}),C.jsx("td",{className:"px-6 py-4 text-gray-800",children:new Date(W.date).toLocaleString("th-TH")}),C.jsxs("td",{className:"px-6 py-4 font-medium text-gray-900",children:[((I=W.students)==null?void 0:I.filter(k=>k.status===1).length)||0," ","คน"]}),C.jsx("td",{className:"px-6 py-4",children:C.jsx("span",{className:`inline-flex px-3 py-1 rounded-full text-sm font-medium ${(b=W.students)!=null&&b.every(k=>k.status===1)?"bg-green-50 text-green-700 ring-1 ring-green-600/20":"bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20"}`,children:(x=W.students)!=null&&x.every(k=>k.status===1)?"จบการเช็คชื่อ":"กำลังเรียน"})}),C.jsx("td",{className:"px-6 py-4",children:C.jsx("button",{onClick:()=>H(W.id),className:"text-blue-500 hover:text-blue-700 font-medium transition-colors",children:"เช็คชื่อ"})})]},W.id)})})]})})]})]})]})}):C.jsx("div",{children:"..."})},M3=()=>C.jsx("div",{className:"Question"}),P3=()=>{const[n,e]=$.useState([]),[t,i]=$.useState([]),[a,o]=$.useState(!1),[u,f]=$.useState(!1),[m,p]=$.useState(!1),y={code:"CS101",name:"Introduction to Computer Science",backgroundImage:"/api/placeholder/1200/400",instructor:"Dr. John Smith",semester:"1/2024"},E=()=>{e([{id:1,code:"6401234",name:"John Doe",note:"",timestamp:"2024-02-23 10:00"},{id:2,code:"6401235",name:"Jane Smith",note:"",timestamp:"2024-02-23 10:01"}])},w=()=>{i([{id:1,code:"6401234",name:"John Doe",note:"",timestamp:"2024-02-23 10:00",score:10,status:1},{id:2,code:"6401235",name:"Jane Smith",note:"",timestamp:"2024-02-23 10:01",score:10,status:1}])};$.useEffect(()=>{a&&E(),u&&w()},[a,u]);const S=P=>{e(n.filter(z=>z.id!==P))},D=(P,z,H)=>{i(t.map(G=>G.id===P?{...G,[z]:H}:G))},U=()=>{console.log("Saving scores...",t)};return C.jsxs("div",{className:"min-h-screen bg-gray-50",children:[C.jsxs("div",{className:"relative h-64 mb-16 overflow-hidden",children:[C.jsx("img",{src:y.backgroundImage,alt:"Course background",className:"w-full h-full object-cover brightness-75"}),C.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"}),C.jsx("div",{className:"absolute bottom-0 left-0 right-0 p-8 text-white",children:C.jsxs("div",{className:"max-w-6xl mx-auto",children:[C.jsx("h1",{className:"text-4xl font-bold mb-2",children:y.code}),C.jsx("h2",{className:"text-2xl mb-2",children:y.name}),C.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[C.jsx("span",{children:y.instructor}),C.jsx("span",{children:"•"}),C.jsxs("span",{children:["ภาคการศึกษา ",y.semester]})]})]})})]}),C.jsxs("div",{className:"max-w-6xl mx-auto px-4",children:[C.jsx("div",{className:"bg-white rounded-xl shadow-sm mb-8 p-6",children:C.jsxs("div",{className:"flex items-center justify-between",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-lg font-semibold mb-1",children:"สถานะการเช็คชื่อ"}),C.jsx("p",{className:`text-sm ${m?"text-green-600":"text-red-600"}`,children:m?"🟢 กำลังเปิดรับการเช็คชื่อ":"🔴 ปิดการเช็คชื่อ"})]}),C.jsx("button",{className:`
                px-6 py-2 rounded-lg font-medium transition-all
                ${m?"bg-red-100 text-red-700 hover:bg-red-200":"bg-green-100 text-green-700 hover:bg-green-200"}
              `,onClick:()=>p(!m),children:m?"ปิดเช็คชื่อ":"เปิดเช็คชื่อ"})]})}),C.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4 mb-8",children:[C.jsx("button",{className:"bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg shadow-sm transition-all",children:"บันทึกการเช็คชื่อ"}),C.jsx("button",{className:"bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg shadow-sm transition-all",children:"แสดงรหัสเช็คชื่อ"}),C.jsx("button",{className:"bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-lg shadow-sm transition-all",children:"แสดง QR Code"}),C.jsx("button",{className:"bg-yellow-600 hover:bg-yellow-700 text-white p-4 rounded-lg shadow-sm transition-all",children:"ถาม-ตอบ"}),C.jsx("button",{className:`
              p-4 rounded-lg shadow-sm transition-all
              ${a?"bg-gray-800 text-white":"bg-gray-100 text-gray-800 hover:bg-gray-200"}
            `,onClick:()=>{o(!a),f(!1)},children:"แสดงรายชื่อ"}),C.jsx("button",{className:`
              p-4 rounded-lg shadow-sm transition-all
              ${u?"bg-gray-800 text-white":"bg-gray-100 text-gray-800 hover:bg-gray-200"}
            `,onClick:()=>{f(!u),o(!1)},children:"แสดงคะแนน"})]}),a&&C.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-8 overflow-x-auto",children:[C.jsx("h3",{className:"text-lg font-semibold mb-4",children:"รายชื่อนักศึกษาที่เช็คชื่อ"}),C.jsxs("table",{className:"w-full",children:[C.jsx("thead",{children:C.jsxs("tr",{className:"bg-gray-50",children:[C.jsx("th",{className:"px-4 py-3 text-left",children:"ลำดับ"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"รหัส"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"ชื่อ"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"หมายเหตุ"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"วันเวลา"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"การจัดการ"})]})}),C.jsx("tbody",{className:"divide-y divide-gray-100",children:n.map((P,z)=>C.jsxs("tr",{className:"hover:bg-gray-50",children:[C.jsx("td",{className:"px-4 py-3",children:z+1}),C.jsx("td",{className:"px-4 py-3 font-medium",children:P.code}),C.jsx("td",{className:"px-4 py-3",children:P.name}),C.jsx("td",{className:"px-4 py-3",children:P.note}),C.jsx("td",{className:"px-4 py-3 text-gray-600",children:P.timestamp}),C.jsx("td",{className:"px-4 py-3",children:C.jsx("button",{className:"bg-red-100 text-red-700 hover:bg-red-200 px-3 py-1 rounded-lg transition-all",onClick:()=>S(P.id),children:"ลบ"})})]},P.id))})]})]}),u&&C.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-8",children:[C.jsxs("div",{className:"flex justify-between items-center mb-4",children:[C.jsx("h3",{className:"text-lg font-semibold",children:"คะแนนการเข้าเรียน"}),C.jsx("button",{className:"bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all",onClick:U,children:"บันทึกข้อมูล"})]}),C.jsx("div",{className:"overflow-x-auto",children:C.jsxs("table",{className:"w-full",children:[C.jsx("thead",{children:C.jsxs("tr",{className:"bg-gray-50",children:[C.jsx("th",{className:"px-4 py-3 text-left",children:"ลำดับ"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"รหัส"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"ชื่อ"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"หมายเหตุ"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"วันเวลา"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"คะแนน"}),C.jsx("th",{className:"px-4 py-3 text-left",children:"สถานะ"})]})}),C.jsx("tbody",{className:"divide-y divide-gray-100",children:t.map((P,z)=>C.jsxs("tr",{className:"hover:bg-gray-50",children:[C.jsx("td",{className:"px-4 py-3",children:z+1}),C.jsx("td",{className:"px-4 py-3 font-medium",children:P.code}),C.jsx("td",{className:"px-4 py-3",children:P.name}),C.jsx("td",{className:"px-4 py-3",children:C.jsx("input",{type:"text",value:P.note,onChange:H=>D(P.id,"note",H.target.value),className:"w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"})}),C.jsx("td",{className:"px-4 py-3 text-gray-600",children:P.timestamp}),C.jsx("td",{className:"px-4 py-3",children:C.jsx("input",{type:"number",value:P.score,onChange:H=>D(P.id,"score",H.target.value),className:"w-24 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"})}),C.jsx("td",{className:"px-4 py-3",children:C.jsxs("select",{value:P.status,onChange:H=>D(P.id,"status",H.target.value),className:"w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none",children:[C.jsx("option",{value:"1",children:"เข้าเรียน"}),C.jsx("option",{value:"0",children:"ขาดเรียน"}),C.jsx("option",{value:"2",children:"ลา"})]})})]},P.id))})]})})]})]})]})};function L3(){return C.jsx("div",{children:C.jsxs(Hx,{children:[C.jsx(ws,{path:"/",element:C.jsx(a3,{})}),C.jsx(ws,{path:"/home",element:C.jsx(o3,{})}),C.jsx(ws,{path:"/edit-profile",element:C.jsx(l3,{})}),C.jsx(ws,{path:"/add-course",element:C.jsx(u3,{})}),C.jsx(ws,{path:"/manage-classroom/:id",element:C.jsx(k3,{})}),C.jsx(ws,{path:"/question",element:C.jsx(M3,{})}),C.jsx(ws,{path:"/checkin/:classroomId",element:C.jsx(P3,{})})]})})}console.log("App is being rendered");ZN.createRoot(document.getElementById("root")).render(C.jsx($.StrictMode,{children:C.jsx(m2,{basename:"/final-web-app-SC310006/",children:C.jsx(L3,{})})}));
