(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Up={exports:{}},Au={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function c1(){if(j0)return Au;j0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Au.Fragment=e,Au.jsx=t,Au.jsxs=t,Au}var q0;function h1(){return q0||(q0=1,Up.exports=c1()),Up.exports}var G=h1(),zp={exports:{}},Ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function f1(){if(H0)return Ie;H0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,q={};function z(O,ne,me){this.props=O,this.context=ne,this.refs=q,this.updater=me||R}z.prototype.isReactComponent={},z.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},z.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function $(){}$.prototype=z.prototype;function W(O,ne,me){this.props=O,this.context=ne,this.refs=q,this.updater=me||R}var X=W.prototype=new $;X.constructor=W,x(X,z.prototype),X.isPureReactComponent=!0;var fe=Array.isArray,ae={H:null,A:null,T:null,S:null},ve=Object.prototype.hasOwnProperty;function M(O,ne,me,oe,le,Ne){return me=Ne.ref,{$$typeof:n,type:O,key:ne,ref:me!==void 0?me:null,props:Ne}}function C(O,ne){return M(O.type,ne,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function N(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(me){return ne[me]})}var P=/\/+/g;function F(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?N(""+O.key):ne.toString(36)}function D(){}function xt(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(D,D):(O.status="pending",O.then(function(ne){O.status==="pending"&&(O.status="fulfilled",O.value=ne)},function(ne){O.status==="pending"&&(O.status="rejected",O.reason=ne)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function St(O,ne,me,oe,le){var Ne=typeof O;(Ne==="undefined"||Ne==="boolean")&&(O=null);var Ce=!1;if(O===null)Ce=!0;else switch(Ne){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(O.$$typeof){case n:case e:Ce=!0;break;case y:return Ce=O._init,St(Ce(O._payload),ne,me,oe,le)}}if(Ce)return le=le(O),Ce=oe===""?"."+F(O,0):oe,fe(le)?(me="",Ce!=null&&(me=Ce.replace(P,"$&/")+"/"),St(le,ne,me,"",function(ft){return ft})):le!=null&&(A(le)&&(le=C(le,me+(le.key==null||O&&O.key===le.key?"":(""+le.key).replace(P,"$&/")+"/")+Ce)),ne.push(le)),1;Ce=0;var bt=oe===""?".":oe+":";if(fe(O))for(var He=0;He<O.length;He++)oe=O[He],Ne=bt+F(oe,He),Ce+=St(oe,ne,me,Ne,le);else if(He=w(O),typeof He=="function")for(O=He.call(O),He=0;!(oe=O.next()).done;)oe=oe.value,Ne=bt+F(oe,He++),Ce+=St(oe,ne,me,Ne,le);else if(Ne==="object"){if(typeof O.then=="function")return St(xt(O),ne,me,oe,le);throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function se(O,ne,me){if(O==null)return O;var oe=[],le=0;return St(O,oe,"","",function(Ne){return ne.call(me,Ne,le++)}),oe}function Te(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(me){(O._status===0||O._status===-1)&&(O._status=1,O._result=me)},function(me){(O._status===0||O._status===-1)&&(O._status=2,O._result=me)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var ge=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ye(){}return Ie.Children={map:se,forEach:function(O,ne,me){se(O,function(){ne.apply(this,arguments)},me)},count:function(O){var ne=0;return se(O,function(){ne++}),ne},toArray:function(O){return se(O,function(ne){return ne})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ie.Component=z,Ie.Fragment=t,Ie.Profiler=a,Ie.PureComponent=W,Ie.StrictMode=i,Ie.Suspense=m,Ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Ie.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ie.cache=function(O){return function(){return O.apply(null,arguments)}},Ie.cloneElement=function(O,ne,me){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var oe=x({},O.props),le=O.key,Ne=void 0;if(ne!=null)for(Ce in ne.ref!==void 0&&(Ne=void 0),ne.key!==void 0&&(le=""+ne.key),ne)!ve.call(ne,Ce)||Ce==="key"||Ce==="__self"||Ce==="__source"||Ce==="ref"&&ne.ref===void 0||(oe[Ce]=ne[Ce]);var Ce=arguments.length-2;if(Ce===1)oe.children=me;else if(1<Ce){for(var bt=Array(Ce),He=0;He<Ce;He++)bt[He]=arguments[He+2];oe.children=bt}return M(O.type,le,void 0,void 0,Ne,oe)},Ie.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Ie.createElement=function(O,ne,me){var oe,le={},Ne=null;if(ne!=null)for(oe in ne.key!==void 0&&(Ne=""+ne.key),ne)ve.call(ne,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(le[oe]=ne[oe]);var Ce=arguments.length-2;if(Ce===1)le.children=me;else if(1<Ce){for(var bt=Array(Ce),He=0;He<Ce;He++)bt[He]=arguments[He+2];le.children=bt}if(O&&O.defaultProps)for(oe in Ce=O.defaultProps,Ce)le[oe]===void 0&&(le[oe]=Ce[oe]);return M(O,Ne,void 0,void 0,null,le)},Ie.createRef=function(){return{current:null}},Ie.forwardRef=function(O){return{$$typeof:d,render:O}},Ie.isValidElement=A,Ie.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:Te}},Ie.memo=function(O,ne){return{$$typeof:g,type:O,compare:ne===void 0?null:ne}},Ie.startTransition=function(O){var ne=ae.T,me={};ae.T=me;try{var oe=O(),le=ae.S;le!==null&&le(me,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(Ye,ge)}catch(Ne){ge(Ne)}finally{ae.T=ne}},Ie.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Ie.use=function(O){return ae.H.use(O)},Ie.useActionState=function(O,ne,me){return ae.H.useActionState(O,ne,me)},Ie.useCallback=function(O,ne){return ae.H.useCallback(O,ne)},Ie.useContext=function(O){return ae.H.useContext(O)},Ie.useDebugValue=function(){},Ie.useDeferredValue=function(O,ne){return ae.H.useDeferredValue(O,ne)},Ie.useEffect=function(O,ne){return ae.H.useEffect(O,ne)},Ie.useId=function(){return ae.H.useId()},Ie.useImperativeHandle=function(O,ne,me){return ae.H.useImperativeHandle(O,ne,me)},Ie.useInsertionEffect=function(O,ne){return ae.H.useInsertionEffect(O,ne)},Ie.useLayoutEffect=function(O,ne){return ae.H.useLayoutEffect(O,ne)},Ie.useMemo=function(O,ne){return ae.H.useMemo(O,ne)},Ie.useOptimistic=function(O,ne){return ae.H.useOptimistic(O,ne)},Ie.useReducer=function(O,ne,me){return ae.H.useReducer(O,ne,me)},Ie.useRef=function(O){return ae.H.useRef(O)},Ie.useState=function(O){return ae.H.useState(O)},Ie.useSyncExternalStore=function(O,ne,me){return ae.H.useSyncExternalStore(O,ne,me)},Ie.useTransition=function(){return ae.H.useTransition()},Ie.version="19.0.0",Ie}var G0;function i_(){return G0||(G0=1,zp.exports=f1()),zp.exports}var Q=i_(),Fp={exports:{}},Ru={},Bp={exports:{}},jp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function d1(){return K0||(K0=1,function(n){function e(se,Te){var ge=se.length;se.push(Te);e:for(;0<ge;){var Ye=ge-1>>>1,O=se[Ye];if(0<a(O,Te))se[Ye]=Te,se[ge]=O,ge=Ye;else break e}}function t(se){return se.length===0?null:se[0]}function i(se){if(se.length===0)return null;var Te=se[0],ge=se.pop();if(ge!==Te){se[0]=ge;e:for(var Ye=0,O=se.length,ne=O>>>1;Ye<ne;){var me=2*(Ye+1)-1,oe=se[me],le=me+1,Ne=se[le];if(0>a(oe,ge))le<O&&0>a(Ne,oe)?(se[Ye]=Ne,se[le]=ge,Ye=le):(se[Ye]=oe,se[me]=ge,Ye=me);else if(le<O&&0>a(Ne,ge))se[Ye]=Ne,se[le]=ge,Ye=le;else break e}}return Te}function a(se,Te){var ge=se.sortIndex-Te.sortIndex;return ge!==0?ge:se.id-Te.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var m=[],g=[],y=1,T=null,w=3,R=!1,x=!1,q=!1,z=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function X(se){for(var Te=t(g);Te!==null;){if(Te.callback===null)i(g);else if(Te.startTime<=se)i(g),Te.sortIndex=Te.expirationTime,e(m,Te);else break;Te=t(g)}}function fe(se){if(q=!1,X(se),!x)if(t(m)!==null)x=!0,xt();else{var Te=t(g);Te!==null&&St(fe,Te.startTime-se)}}var ae=!1,ve=-1,M=5,C=-1;function A(){return!(n.unstable_now()-C<M)}function N(){if(ae){var se=n.unstable_now();C=se;var Te=!0;try{e:{x=!1,q&&(q=!1,$(ve),ve=-1),R=!0;var ge=w;try{t:{for(X(se),T=t(m);T!==null&&!(T.expirationTime>se&&A());){var Ye=T.callback;if(typeof Ye=="function"){T.callback=null,w=T.priorityLevel;var O=Ye(T.expirationTime<=se);if(se=n.unstable_now(),typeof O=="function"){T.callback=O,X(se),Te=!0;break t}T===t(m)&&i(m),X(se)}else i(m);T=t(m)}if(T!==null)Te=!0;else{var ne=t(g);ne!==null&&St(fe,ne.startTime-se),Te=!1}}break e}finally{T=null,w=ge,R=!1}Te=void 0}}finally{Te?P():ae=!1}}}var P;if(typeof W=="function")P=function(){W(N)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,D=F.port2;F.port1.onmessage=N,P=function(){D.postMessage(null)}}else P=function(){z(N,0)};function xt(){ae||(ae=!0,P())}function St(se,Te){ve=z(function(){se(n.unstable_now())},Te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){x||R||(x=!0,xt())},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(se){switch(w){case 1:case 2:case 3:var Te=3;break;default:Te=w}var ge=w;w=Te;try{return se()}finally{w=ge}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,Te){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ge=w;w=se;try{return Te()}finally{w=ge}},n.unstable_scheduleCallback=function(se,Te,ge){var Ye=n.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?Ye+ge:Ye):ge=Ye,se){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ge+O,se={id:y++,callback:Te,priorityLevel:se,startTime:ge,expirationTime:O,sortIndex:-1},ge>Ye?(se.sortIndex=ge,e(g,se),t(m)===null&&se===t(g)&&(q?($(ve),ve=-1):q=!0,St(fe,ge-Ye))):(se.sortIndex=O,e(m,se),x||R||(x=!0,xt())),se},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(se){var Te=w;return function(){var ge=w;w=Te;try{return se.apply(this,arguments)}finally{w=ge}}}}(jp)),jp}var Q0;function m1(){return Q0||(Q0=1,Bp.exports=d1()),Bp.exports}var qp={exports:{}},un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function p1(){if($0)return un;$0=1;var n=i_();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:y}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,un.createPortal=function(m,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,y)},un.flushSync=function(m){var g=c.T,y=i.p;try{if(c.T=null,i.p=2,m)return m()}finally{c.T=g,i.p=y,i.d.f()}},un.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(m,g))},un.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},un.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?i.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:R}):y==="script"&&i.d.X(m,{crossOrigin:T,integrity:w,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},un.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);i.d.M(m,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(m)},un.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);i.d.L(m,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},un.preloadModule=function(m,g){if(typeof m=="string")if(g){var y=d(g.as,g.crossOrigin);i.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(m)},un.requestFormReset=function(m){i.d.r(m)},un.unstable_batchedUpdates=function(m,g){return m(g)},un.useFormState=function(m,g,y){return c.H.useFormState(m,g,y)},un.useFormStatus=function(){return c.H.useHostTransitionStatus()},un.version="19.0.0",un}var Y0;function g1(){if(Y0)return qp.exports;Y0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),qp.exports=p1(),qp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function _1(){if(W0)return Ru;W0=1;var n=m1(),e=i_(),t=g1();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),R=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),fe=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function ve(r){return r===null||typeof r!="object"?null:(r=ae&&r[ae]||r["@@iterator"],typeof r=="function"?r:null)}var M=Symbol.for("react.client.reference");function C(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===M?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case m:return"Fragment";case d:return"Portal";case y:return"Profiler";case g:return"StrictMode";case q:return"Suspense";case z:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case R:return(r.displayName||"Context")+".Provider";case w:return(r._context.displayName||"Context")+".Consumer";case x:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case $:return s=r.displayName||null,s!==null?s:C(r.type)||"Memo";case W:s=r._payload,r=r._init;try{return C(r(s))}catch{}}return null}var A=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=Object.assign,P,F;function D(r){if(P===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);P=s&&s[1]||"",F=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+P+r+F}var xt=!1;function St(r,s){if(!r||xt)return"";xt=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(K){var j=K}Reflect.construct(r,[],te)}else{try{te.call()}catch(K){j=K}r.call(te.prototype)}}else{try{throw Error()}catch(K){j=K}(te=r())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(K){if(K&&j&&typeof K.stack=="string")return[K.stack,j.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],S=p[1];if(E&&S){var I=E.split(`
`),L=S.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<L.length&&!L[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===L.length)for(u=I.length-1,f=L.length-1;1<=u&&0<=f&&I[u]!==L[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==L[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==L[f]){var Y=`
`+I[u].replace(" at new "," at ");return r.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",r.displayName)),Y}while(1<=u&&0<=f);break}}}finally{xt=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?D(o):""}function se(r){switch(r.tag){case 26:case 27:case 5:return D(r.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return r=St(r.type,!1),r;case 11:return r=St(r.type.render,!1),r;case 1:return r=St(r.type,!0),r;default:return""}}function Te(r){try{var s="";do s+=se(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function ge(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function Ye(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function O(r){if(ge(r)!==r)throw Error(i(188))}function ne(r){var s=r.alternate;if(!s){if(s=ge(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,u=s;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return O(f),r;if(p===u)return O(f),s;p=p.sibling}throw Error(i(188))}if(o.return!==u.return)o=f,u=p;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=p;break}if(S===u){E=!0,u=f,o=p;break}S=S.sibling}if(!E){for(S=p.child;S;){if(S===o){E=!0,o=p,u=f;break}if(S===u){E=!0,u=p,o=f;break}S=S.sibling}if(!E)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function me(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=me(r),s!==null)return s;r=r.sibling}return null}var oe=Array.isArray,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ne={pending:!1,data:null,method:null,action:null},Ce=[],bt=-1;function He(r){return{current:r}}function ft(r){0>bt||(r.current=Ce[bt],Ce[bt]=null,bt--)}function Ze(r,s){bt++,Ce[bt]=r.current,r.current=s}var mn=He(null),Gi=He(null),Un=He(null),kr=He(null);function Pr(r,s){switch(Ze(Un,s),Ze(Gi,r),Ze(mn,null),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)&&(s=s.namespaceURI)?_0(s):0;break;default:if(r=r===8?s.parentNode:s,s=r.tagName,r=r.namespaceURI)r=_0(r),s=y0(r,s);else switch(s){case"svg":s=1;break;case"math":s=2;break;default:s=0}}ft(mn),Ze(mn,s)}function Ki(){ft(mn),ft(Gi),ft(Un)}function El(r){r.memoizedState!==null&&Ze(kr,r);var s=mn.current,o=y0(s,r.type);s!==o&&(Ze(Gi,r),Ze(mn,o))}function Ga(r){Gi.current===r&&(ft(mn),ft(Gi)),kr.current===r&&(ft(kr),Eu._currentValue=Ne)}var Ka=Object.prototype.hasOwnProperty,Bs=n.unstable_scheduleCallback,Qa=n.unstable_cancelCallback,Fd=n.unstable_shouldYield,Tl=n.unstable_requestPaint,Tn=n.unstable_now,Mc=n.unstable_getCurrentPriorityLevel,Ot=n.unstable_ImmediatePriority,Bt=n.unstable_UserBlockingPriority,Qi=n.unstable_NormalPriority,kc=n.unstable_LowPriority,wl=n.unstable_IdlePriority,Bd=n.log,js=n.unstable_setDisableYieldValue,Lr=null,on=null;function Sl(r){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Lr,r,void 0,(r.current.flags&128)===128)}catch{}}function vi(r){if(typeof Bd=="function"&&js(r),on&&typeof on.setStrictMode=="function")try{on.setStrictMode(Lr,r)}catch{}}var pn=Math.clz32?Math.clz32:Lc,bl=Math.log,Pc=Math.LN2;function Lc(r){return r>>>=0,r===0?32:31-(bl(r)/Pc|0)|0}var Ei=128,Vr=4194304;function si(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function zn(r,s){var o=r.pendingLanes;if(o===0)return 0;var u=0,f=r.suspendedLanes,p=r.pingedLanes,E=r.warmLanes;r=r.finishedLanes!==0;var S=o&134217727;return S!==0?(o=S&~f,o!==0?u=si(o):(p&=S,p!==0?u=si(p):r||(E=S&~E,E!==0&&(u=si(E))))):(S=o&~f,S!==0?u=si(S):p!==0?u=si(p):r||(E=o&~E,E!==0&&(u=si(E)))),u===0?0:s!==0&&s!==u&&!(s&f)&&(f=u&-u,E=s&-s,f>=E||f===32&&(E&4194176)!==0)?s:u}function Ur(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function $a(r,s){switch(r){case 1:case 2:case 4:case 8:return s+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Al(){var r=Ei;return Ei<<=1,!(Ei&4194176)&&(Ei=128),r}function zr(){var r=Vr;return Vr<<=1,!(Vr&62914560)&&(Vr=4194304),r}function Ya(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function vt(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Vc(r,s,o,u,f,p){var E=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,I=r.expirationTimes,L=r.hiddenUpdates;for(o=E&~o;0<o;){var Y=31-pn(o),te=1<<Y;S[Y]=0,I[Y]=-1;var j=L[Y];if(j!==null)for(L[Y]=null,Y=0;Y<j.length;Y++){var K=j[Y];K!==null&&(K.lane&=-536870913)}o&=~te}u!==0&&Fr(r,u,0),p!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=p&~(E&~s))}function Fr(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-pn(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194218}function Br(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-pn(o),f=1<<u;f&s|r[u]&s&&(r[u]|=s),o&=~f}}function Uc(r){return r&=-r,2<r?8<r?r&134217727?32:268435456:8:2}function zc(){var r=le.p;return r!==0?r:(r=window.event,r===void 0?32:L0(r.type))}function jr(r,s){var o=le.p;try{return le.p=r,s()}finally{le.p=o}}var Ti=Math.random().toString(36).slice(2),jt="__reactFiber$"+Ti,Mt="__reactProps$"+Ti,$i="__reactContainer$"+Ti,qs="__reactEvents$"+Ti,Wa="__reactListeners$"+Ti,wi="__reactHandles$"+Ti,Rl="__reactResources$"+Ti,qr="__reactMarker$"+Ti;function Hs(r){delete r[jt],delete r[Mt],delete r[qs],delete r[Wa],delete r[wi]}function ai(r){var s=r[jt];if(s)return s;for(var o=r.parentNode;o;){if(s=o[$i]||o[jt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=T0(r);r!==null;){if(o=r[jt])return o;r=T0(r)}return s}r=o,o=r.parentNode}return null}function Yi(r){if(r=r[jt]||r[$i]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Hr(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function Gr(r){var s=r[Rl];return s||(s=r[Rl]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function lt(r){r[qr]=!0}var Cl=new Set,Xa={};function Nn(r,s){wn(r,s),wn(r+"Capture",s)}function wn(r,s){for(Xa[r]=s,r=0;r<s.length;r++)Cl.add(s[r])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Il={},Nl={};function Fc(r){return Ka.call(Nl,r)?!0:Ka.call(Il,r)?!1:jd.test(r)?Nl[r]=!0:(Il[r]=!0,!1)}function Kr(r,s,o){if(Fc(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Qr(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function Fn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}function gn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Bc(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function qd(r){var s=Bc(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Gs(r){r._valueTracker||(r._valueTracker=qd(r))}function Dl(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=Bc(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function Za(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Wi=/[\n"\\]/g;function dt(r){return r.replace(Wi,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function $r(r,s,o,u,f,p,E,S){r.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.type=E:r.removeAttribute("type"),s!=null?E==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+gn(s)):r.value!==""+gn(s)&&(r.value=""+gn(s)):E!=="submit"&&E!=="reset"||r.removeAttribute("value"),s!=null?Ja(r,E,gn(s)):o!=null?Ja(r,E,gn(o)):u!=null&&r.removeAttribute("value"),f==null&&p!=null&&(r.defaultChecked=!!p),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+gn(S):r.removeAttribute("name")}function Ks(r,s,o,u,f,p,E,S){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(r.type=p),s!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||s!=null))return;o=o!=null?""+gn(o):"",s=s!=null?""+gn(s):o,S||s===r.value||(r.value=s),r.defaultValue=s}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=S?r.checked:!!u,r.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(r.name=E)}function Ja(r,s,o){s==="number"&&Za(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Ge(r,s,o,u){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&u&&(r[o].defaultSelected=!0)}else{for(o=""+gn(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,u&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Qs(r,s,o){if(s!=null&&(s=""+gn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+gn(o):""}function Yr(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(oe(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=gn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function Bn(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var Hd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xl(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||Hd.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function jc(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var f in s)u=s[f],s.hasOwnProperty(f)&&o[f]!==u&&xl(r,f,u)}else for(var p in s)s.hasOwnProperty(p)&&xl(r,p,s[p])}function Ol(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Si(r){return Kd.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var jn=null;function eo(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Xi=null,Zi=null;function Ji(r){var s=Yi(r);if(s&&(r=s.stateNode)){var o=r[Mt]||null;e:switch(r=s.stateNode,s.type){case"input":if($r(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+dt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var f=u[Mt]||null;if(!f)throw Error(i(90));$r(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&Dl(u)}break e;case"textarea":Qs(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&Ge(r,!!o.multiple,s,!1)}}}var Ml=!1;function qc(r,s,o){if(Ml)return r(s,o);Ml=!0;try{var u=r(s);return u}finally{if(Ml=!1,(Xi!==null||Zi!==null)&&(kh(),Xi&&(s=Xi,r=Zi,Zi=Xi=null,Ji(s),r)))for(s=0;s<r.length;s++)Ji(r[s])}}function $s(r,s){var o=r.stateNode;if(o===null)return null;var u=o[Mt]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var qn=!1;if(Dn)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){qn=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{qn=!1}var bi=null,Wr=null,er=null;function kl(){if(er)return er;var r,s=Wr,o=s.length,u,f="value"in bi?bi.value:bi.textContent,p=f.length;for(r=0;r<o&&s[r]===f[r];r++);var E=o-r;for(u=1;u<=E&&s[o-u]===f[p-u];u++);return er=f.slice(r,1<u?1-u:void 0)}function Ai(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Ri(){return!0}function Pl(){return!1}function qt(r){function s(o,u,f,p,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Ri:Pl,this.isPropagationStopped=Pl,this}return N(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),s}var We={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=qt(We),Ws=N({},We,{view:0,detail:0}),Hc=qt(Ws),no,io,Ci,Xs=N({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ea,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ci&&(Ci&&r.type==="mousemove"?(no=r.screenX-Ci.screenX,io=r.screenY-Ci.screenY):io=no=0,Ci=r),no)},movementY:function(r){return"movementY"in r?r.movementY:io}}),Hn=qt(Xs),Gc=N({},Xs,{dataTransfer:0}),Qd=qt(Gc),Zs=N({},Ws,{relatedTarget:0}),ro=qt(Zs),Ll=N({},We,{animationName:0,elapsedTime:0,pseudoElement:0}),so=qt(Ll),Kc=N({},We,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),ao=qt(Kc),$d=N({},We,{data:0}),Vl=qt($d),Js={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$c={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ul(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=$c[r])?!!s[r]:!1}function ea(){return Ul}var Yc=N({},Ws,{key:function(r){if(r.key){var s=Js[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Ai(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Qc[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ea,charCode:function(r){return r.type==="keypress"?Ai(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ai(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),oo=qt(Yc),Wc=N({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zl=qt(Wc),tr=N({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ea}),Xc=qt(tr),Zc=N({},We,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jc=qt(Zc),eh=N({},Xs,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),lo=qt(eh),_n=N({},We,{newState:0,oldState:0}),th=qt(_n),nh=[9,13,27,32],Ii=Dn&&"CompositionEvent"in window,h=null;Dn&&"documentMode"in document&&(h=document.documentMode);var _=Dn&&"TextEvent"in window&&!h,v=Dn&&(!Ii||h&&8<h&&11>=h),b=" ",U=!1;function H(r,s){switch(r){case"keyup":return nh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Fe=!1;function kt(r,s){switch(r){case"compositionend":return re(s);case"keypress":return s.which!==32?null:(U=!0,b);case"textInput":return r=s.data,r===b&&U?null:r;default:return null}}function Be(r,s){if(Fe)return r==="compositionend"||!Ii&&H(r,s)?(r=kl(),er=Wr=bi=null,Fe=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Ht={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Ht[r.type]:s==="textarea"}function nr(r,s,o,u){Xi?Zi?Zi.push(u):Zi=[u]:Xi=u,s=zh(s,"onChange"),0<s.length&&(o=new to("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var Zt=null,Ni=null;function Fl(r){f0(r,0)}function ih(r){var s=Hr(r);if(Dl(s))return r}function By(r,s){if(r==="change")return s}var jy=!1;if(Dn){var Yd;if(Dn){var Wd="oninput"in document;if(!Wd){var qy=document.createElement("div");qy.setAttribute("oninput","return;"),Wd=typeof qy.oninput=="function"}Yd=Wd}else Yd=!1;jy=Yd&&(!document.documentMode||9<document.documentMode)}function Hy(){Zt&&(Zt.detachEvent("onpropertychange",Gy),Ni=Zt=null)}function Gy(r){if(r.propertyName==="value"&&ih(Ni)){var s=[];nr(s,Ni,r,eo(r)),qc(Fl,s)}}function FC(r,s,o){r==="focusin"?(Hy(),Zt=s,Ni=o,Zt.attachEvent("onpropertychange",Gy)):r==="focusout"&&Hy()}function BC(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return ih(Ni)}function jC(r,s){if(r==="click")return ih(s)}function qC(r,s){if(r==="input"||r==="change")return ih(s)}function HC(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var xn=typeof Object.is=="function"?Object.is:HC;function Bl(r,s){if(xn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Ka.call(s,f)||!xn(r[f],s[f]))return!1}return!0}function Ky(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Qy(r,s){var o=Ky(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ky(o)}}function $y(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?$y(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Yy(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=Za(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=Za(r.document)}return s}function Xd(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function GC(r,s){var o=Yy(s);s=r.focusedElem;var u=r.selectionRange;if(o!==s&&s&&s.ownerDocument&&$y(s.ownerDocument.documentElement,s)){if(u!==null&&Xd(s)){if(r=u.start,o=u.end,o===void 0&&(o=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(o,s.value.length);else if(o=(r=s.ownerDocument||document)&&r.defaultView||window,o.getSelection){o=o.getSelection();var f=s.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!o.extend&&p>u&&(f=u,u=p,p=f),f=Qy(s,p);var E=Qy(s,u);f&&E&&(o.rangeCount!==1||o.anchorNode!==f.node||o.anchorOffset!==f.offset||o.focusNode!==E.node||o.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),o.removeAllRanges(),p>u?(o.addRange(r),o.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),o.addRange(r)))}}for(r=[],o=s;o=o.parentNode;)o.nodeType===1&&r.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)o=r[s],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var KC=Dn&&"documentMode"in document&&11>=document.documentMode,uo=null,Zd=null,jl=null,Jd=!1;function Wy(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Jd||uo==null||uo!==Za(u)||(u=uo,"selectionStart"in u&&Xd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),jl&&Bl(jl,u)||(jl=u,u=zh(Zd,"onSelect"),0<u.length&&(s=new to("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=uo)))}function ta(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var co={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionrun:ta("Transition","TransitionRun"),transitionstart:ta("Transition","TransitionStart"),transitioncancel:ta("Transition","TransitionCancel"),transitionend:ta("Transition","TransitionEnd")},em={},Xy={};Dn&&(Xy=document.createElement("div").style,"AnimationEvent"in window||(delete co.animationend.animation,delete co.animationiteration.animation,delete co.animationstart.animation),"TransitionEvent"in window||delete co.transitionend.transition);function na(r){if(em[r])return em[r];if(!co[r])return r;var s=co[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in Xy)return em[r]=s[o];return r}var Zy=na("animationend"),Jy=na("animationiteration"),ev=na("animationstart"),QC=na("transitionrun"),$C=na("transitionstart"),YC=na("transitioncancel"),tv=na("transitionend"),nv=new Map,iv="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function oi(r,s){nv.set(r,s),Nn(s,[r])}var Gn=[],ho=0,tm=0;function rh(){for(var r=ho,s=tm=ho=0;s<r;){var o=Gn[s];Gn[s++]=null;var u=Gn[s];Gn[s++]=null;var f=Gn[s];Gn[s++]=null;var p=Gn[s];if(Gn[s++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}p!==0&&rv(o,f,p)}}function sh(r,s,o,u){Gn[ho++]=r,Gn[ho++]=s,Gn[ho++]=o,Gn[ho++]=u,tm|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function nm(r,s,o,u){return sh(r,s,o,u),ah(r)}function Xr(r,s){return sh(r,null,null,s),ah(r)}function rv(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=r.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(r=p.stateNode,r===null||r._visibility&1||(f=!0)),r=p,p=p.return;f&&s!==null&&r.tag===3&&(p=r.stateNode,f=31-pn(o),p=p.hiddenUpdates,r=p[f],r===null?p[f]=[s]:r.push(s),s.lane=o|536870912)}function ah(r){if(50<du)throw du=0,lp=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var fo={},sv=new WeakMap;function Kn(r,s){if(typeof r=="object"&&r!==null){var o=sv.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Te(s)},sv.set(r,s),s)}return{value:r,source:s,stack:Te(s)}}var mo=[],po=0,oh=null,lh=0,Qn=[],$n=0,ia=null,ir=1,rr="";function ra(r,s){mo[po++]=lh,mo[po++]=oh,oh=r,lh=s}function av(r,s,o){Qn[$n++]=ir,Qn[$n++]=rr,Qn[$n++]=ia,ia=r;var u=ir;r=rr;var f=32-pn(u)-1;u&=~(1<<f),o+=1;var p=32-pn(s)+f;if(30<p){var E=f-f%5;p=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ir=1<<32-pn(s)+f|o<<f|u,rr=p+r}else ir=1<<p|o<<f|u,rr=r}function im(r){r.return!==null&&(ra(r,1),av(r,1,0))}function rm(r){for(;r===oh;)oh=mo[--po],mo[po]=null,lh=mo[--po],mo[po]=null;for(;r===ia;)ia=Qn[--$n],Qn[$n]=null,rr=Qn[--$n],Qn[$n]=null,ir=Qn[--$n],Qn[$n]=null}var yn=null,Jt=null,Ke=!1,li=null,Di=!1,sm=Error(i(519));function sa(r){var s=Error(i(418,""));throw Gl(Kn(s,r)),sm}function ov(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[jt]=r,s[Mt]=u,o){case"dialog":Ve("cancel",s),Ve("close",s);break;case"iframe":case"object":case"embed":Ve("load",s);break;case"video":case"audio":for(o=0;o<pu.length;o++)Ve(pu[o],s);break;case"source":Ve("error",s);break;case"img":case"image":case"link":Ve("error",s),Ve("load",s);break;case"details":Ve("toggle",s);break;case"input":Ve("invalid",s),Ks(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Gs(s);break;case"select":Ve("invalid",s);break;case"textarea":Ve("invalid",s),Yr(s,u.value,u.defaultValue,u.children),Gs(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||g0(s.textContent,o)?(u.popover!=null&&(Ve("beforetoggle",s),Ve("toggle",s)),u.onScroll!=null&&Ve("scroll",s),u.onScrollEnd!=null&&Ve("scrollend",s),u.onClick!=null&&(s.onclick=Fh),s=!0):s=!1,s||sa(r)}function lv(r){for(yn=r.return;yn;)switch(yn.tag){case 3:case 27:Di=!0;return;case 5:case 13:Di=!1;return;default:yn=yn.return}}function ql(r){if(r!==yn)return!1;if(!Ke)return lv(r),Ke=!0,!1;var s=!1,o;if((o=r.tag!==3&&r.tag!==27)&&((o=r.tag===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Ap(r.type,r.memoizedProps)),o=!o),o&&(s=!0),s&&Jt&&sa(r),lv(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Jt=ci(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Jt=null}}else Jt=yn?ci(r.stateNode.nextSibling):null;return!0}function Hl(){Jt=yn=null,Ke=!1}function Gl(r){li===null?li=[r]:li.push(r)}var Kl=Error(i(460)),uv=Error(i(474)),am={then:function(){}};function cv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function uh(){}function hv(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(uh,uh),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r===Kl?Error(i(483)):r;default:if(typeof s.status=="string")s.then(uh,uh);else{if(r=it,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=u}},function(u){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,r===Kl?Error(i(483)):r}throw Ql=s,Kl}}var Ql=null;function fv(){if(Ql===null)throw Error(i(459));var r=Ql;return Ql=null,r}var go=null,$l=0;function ch(r){var s=$l;return $l+=1,go===null&&(go=[]),hv(go,r,s)}function Yl(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function hh(r,s){throw s.$$typeof===l?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function dv(r){var s=r._init;return s(r._payload)}function mv(r){function s(V,k){if(r){var B=V.deletions;B===null?(V.deletions=[k],V.flags|=16):B.push(k)}}function o(V,k){if(!r)return null;for(;k!==null;)s(V,k),k=k.sibling;return null}function u(V){for(var k=new Map;V!==null;)V.key!==null?k.set(V.key,V):k.set(V.index,V),V=V.sibling;return k}function f(V,k){return V=us(V,k),V.index=0,V.sibling=null,V}function p(V,k,B){return V.index=B,r?(B=V.alternate,B!==null?(B=B.index,B<k?(V.flags|=33554434,k):B):(V.flags|=33554434,k)):(V.flags|=1048576,k)}function E(V){return r&&V.alternate===null&&(V.flags|=33554434),V}function S(V,k,B,Z){return k===null||k.tag!==6?(k=ep(B,V.mode,Z),k.return=V,k):(k=f(k,B),k.return=V,k)}function I(V,k,B,Z){var ce=B.type;return ce===m?Y(V,k,B.props.children,Z,B.key):k!==null&&(k.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===W&&dv(ce)===k.type)?(k=f(k,B.props),Yl(k,B),k.return=V,k):(k=Nh(B.type,B.key,B.props,null,V.mode,Z),Yl(k,B),k.return=V,k)}function L(V,k,B,Z){return k===null||k.tag!==4||k.stateNode.containerInfo!==B.containerInfo||k.stateNode.implementation!==B.implementation?(k=tp(B,V.mode,Z),k.return=V,k):(k=f(k,B.children||[]),k.return=V,k)}function Y(V,k,B,Z,ce){return k===null||k.tag!==7?(k=pa(B,V.mode,Z,ce),k.return=V,k):(k=f(k,B),k.return=V,k)}function te(V,k,B){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=ep(""+k,V.mode,B),k.return=V,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case c:return B=Nh(k.type,k.key,k.props,null,V.mode,B),Yl(B,k),B.return=V,B;case d:return k=tp(k,V.mode,B),k.return=V,k;case W:var Z=k._init;return k=Z(k._payload),te(V,k,B)}if(oe(k)||ve(k))return k=pa(k,V.mode,B,null),k.return=V,k;if(typeof k.then=="function")return te(V,ch(k),B);if(k.$$typeof===R)return te(V,Rh(V,k),B);hh(V,k)}return null}function j(V,k,B,Z){var ce=k!==null?k.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return ce!==null?null:S(V,k,""+B,Z);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case c:return B.key===ce?I(V,k,B,Z):null;case d:return B.key===ce?L(V,k,B,Z):null;case W:return ce=B._init,B=ce(B._payload),j(V,k,B,Z)}if(oe(B)||ve(B))return ce!==null?null:Y(V,k,B,Z,null);if(typeof B.then=="function")return j(V,k,ch(B),Z);if(B.$$typeof===R)return j(V,k,Rh(V,B),Z);hh(V,B)}return null}function K(V,k,B,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return V=V.get(B)||null,S(k,V,""+Z,ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case c:return V=V.get(Z.key===null?B:Z.key)||null,I(k,V,Z,ce);case d:return V=V.get(Z.key===null?B:Z.key)||null,L(k,V,Z,ce);case W:var xe=Z._init;return Z=xe(Z._payload),K(V,k,B,Z,ce)}if(oe(Z)||ve(Z))return V=V.get(B)||null,Y(k,V,Z,ce,null);if(typeof Z.then=="function")return K(V,k,B,ch(Z),ce);if(Z.$$typeof===R)return K(V,k,B,Rh(k,Z),ce);hh(k,Z)}return null}function de(V,k,B,Z){for(var ce=null,xe=null,pe=k,ye=k=0,Qt=null;pe!==null&&ye<B.length;ye++){pe.index>ye?(Qt=pe,pe=null):Qt=pe.sibling;var Qe=j(V,pe,B[ye],Z);if(Qe===null){pe===null&&(pe=Qt);break}r&&pe&&Qe.alternate===null&&s(V,pe),k=p(Qe,k,ye),xe===null?ce=Qe:xe.sibling=Qe,xe=Qe,pe=Qt}if(ye===B.length)return o(V,pe),Ke&&ra(V,ye),ce;if(pe===null){for(;ye<B.length;ye++)pe=te(V,B[ye],Z),pe!==null&&(k=p(pe,k,ye),xe===null?ce=pe:xe.sibling=pe,xe=pe);return Ke&&ra(V,ye),ce}for(pe=u(pe);ye<B.length;ye++)Qt=K(pe,V,ye,B[ye],Z),Qt!==null&&(r&&Qt.alternate!==null&&pe.delete(Qt.key===null?ye:Qt.key),k=p(Qt,k,ye),xe===null?ce=Qt:xe.sibling=Qt,xe=Qt);return r&&pe.forEach(function(gs){return s(V,gs)}),Ke&&ra(V,ye),ce}function Ae(V,k,B,Z){if(B==null)throw Error(i(151));for(var ce=null,xe=null,pe=k,ye=k=0,Qt=null,Qe=B.next();pe!==null&&!Qe.done;ye++,Qe=B.next()){pe.index>ye?(Qt=pe,pe=null):Qt=pe.sibling;var gs=j(V,pe,Qe.value,Z);if(gs===null){pe===null&&(pe=Qt);break}r&&pe&&gs.alternate===null&&s(V,pe),k=p(gs,k,ye),xe===null?ce=gs:xe.sibling=gs,xe=gs,pe=Qt}if(Qe.done)return o(V,pe),Ke&&ra(V,ye),ce;if(pe===null){for(;!Qe.done;ye++,Qe=B.next())Qe=te(V,Qe.value,Z),Qe!==null&&(k=p(Qe,k,ye),xe===null?ce=Qe:xe.sibling=Qe,xe=Qe);return Ke&&ra(V,ye),ce}for(pe=u(pe);!Qe.done;ye++,Qe=B.next())Qe=K(pe,V,ye,Qe.value,Z),Qe!==null&&(r&&Qe.alternate!==null&&pe.delete(Qe.key===null?ye:Qe.key),k=p(Qe,k,ye),xe===null?ce=Qe:xe.sibling=Qe,xe=Qe);return r&&pe.forEach(function(u1){return s(V,u1)}),Ke&&ra(V,ye),ce}function gt(V,k,B,Z){if(typeof B=="object"&&B!==null&&B.type===m&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case c:e:{for(var ce=B.key;k!==null;){if(k.key===ce){if(ce=B.type,ce===m){if(k.tag===7){o(V,k.sibling),Z=f(k,B.props.children),Z.return=V,V=Z;break e}}else if(k.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===W&&dv(ce)===k.type){o(V,k.sibling),Z=f(k,B.props),Yl(Z,B),Z.return=V,V=Z;break e}o(V,k);break}else s(V,k);k=k.sibling}B.type===m?(Z=pa(B.props.children,V.mode,Z,B.key),Z.return=V,V=Z):(Z=Nh(B.type,B.key,B.props,null,V.mode,Z),Yl(Z,B),Z.return=V,V=Z)}return E(V);case d:e:{for(ce=B.key;k!==null;){if(k.key===ce)if(k.tag===4&&k.stateNode.containerInfo===B.containerInfo&&k.stateNode.implementation===B.implementation){o(V,k.sibling),Z=f(k,B.children||[]),Z.return=V,V=Z;break e}else{o(V,k);break}else s(V,k);k=k.sibling}Z=tp(B,V.mode,Z),Z.return=V,V=Z}return E(V);case W:return ce=B._init,B=ce(B._payload),gt(V,k,B,Z)}if(oe(B))return de(V,k,B,Z);if(ve(B)){if(ce=ve(B),typeof ce!="function")throw Error(i(150));return B=ce.call(B),Ae(V,k,B,Z)}if(typeof B.then=="function")return gt(V,k,ch(B),Z);if(B.$$typeof===R)return gt(V,k,Rh(V,B),Z);hh(V,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,k!==null&&k.tag===6?(o(V,k.sibling),Z=f(k,B),Z.return=V,V=Z):(o(V,k),Z=ep(B,V.mode,Z),Z.return=V,V=Z),E(V)):o(V,k)}return function(V,k,B,Z){try{$l=0;var ce=gt(V,k,B,Z);return go=null,ce}catch(pe){if(pe===Kl)throw pe;var xe=Zn(29,pe,null,V.mode);return xe.lanes=Z,xe.return=V,xe}finally{}}}var aa=mv(!0),pv=mv(!1),_o=He(null),fh=He(0);function gv(r,s){r=pr,Ze(fh,r),Ze(_o,s),pr=r|s.baseLanes}function om(){Ze(fh,pr),Ze(_o,_o.current)}function lm(){pr=fh.current,ft(_o),ft(fh)}var Yn=He(null),xi=null;function Zr(r){var s=r.alternate;Ze(Lt,Lt.current&1),Ze(Yn,r),xi===null&&(s===null||_o.current!==null||s.memoizedState!==null)&&(xi=r)}function _v(r){if(r.tag===22){if(Ze(Lt,Lt.current),Ze(Yn,r),xi===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(xi=r)}}else Jr()}function Jr(){Ze(Lt,Lt.current),Ze(Yn,Yn.current)}function sr(r){ft(Yn),xi===r&&(xi=null),ft(Lt)}var Lt=He(0);function dh(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var WC=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},XC=n.unstable_scheduleCallback,ZC=n.unstable_NormalPriority,Vt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function um(){return{controller:new WC,data:new Map,refCount:0}}function Wl(r){r.refCount--,r.refCount===0&&XC(ZC,function(){r.controller.abort()})}var Xl=null,cm=0,yo=0,vo=null;function JC(r,s){if(Xl===null){var o=Xl=[];cm=0,yo=gp(),vo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return cm++,s.then(yv,yv),s}function yv(){if(--cm===0&&Xl!==null){vo!==null&&(vo.status="fulfilled");var r=Xl;Xl=null,yo=0,vo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function eI(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var vv=A.S;A.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&JC(r,s),vv!==null&&vv(r,s)};var oa=He(null);function hm(){var r=oa.current;return r!==null?r:it.pooledCache}function mh(r,s){s===null?Ze(oa,oa.current):Ze(oa,s.pool)}function Ev(){var r=hm();return r===null?null:{parent:Vt._currentValue,pool:r}}var es=0,De=null,Je=null,At=null,ph=!1,Eo=!1,la=!1,gh=0,Zl=0,To=null,tI=0;function Et(){throw Error(i(321))}function fm(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!xn(r[o],s[o]))return!1;return!0}function dm(r,s,o,u,f,p){return es=p,De=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,A.H=r===null||r.memoizedState===null?ua:ts,la=!1,p=o(u,f),la=!1,Eo&&(p=wv(s,o,u,f)),Tv(r),p}function Tv(r){A.H=Oi;var s=Je!==null&&Je.next!==null;if(es=0,At=Je=De=null,ph=!1,Zl=0,To=null,s)throw Error(i(300));r===null||Gt||(r=r.dependencies,r!==null&&Ah(r)&&(Gt=!0))}function wv(r,s,o,u){De=r;var f=0;do{if(Eo&&(To=null),Zl=0,Eo=!1,25<=f)throw Error(i(301));if(f+=1,At=Je=null,r.updateQueue!=null){var p=r.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}A.H=ca,p=s(o,u)}while(Eo);return p}function nI(){var r=A.H,s=r.useState()[0];return s=typeof s.then=="function"?Jl(s):s,r=r.useState()[0],(Je!==null?Je.memoizedState:null)!==r&&(De.flags|=1024),s}function mm(){var r=gh!==0;return gh=0,r}function pm(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function gm(r){if(ph){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ph=!1}es=0,At=Je=De=null,Eo=!1,Zl=gh=0,To=null}function Sn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?De.memoizedState=At=r:At=At.next=r,At}function Rt(){if(Je===null){var r=De.alternate;r=r!==null?r.memoizedState:null}else r=Je.next;var s=At===null?De.memoizedState:At.next;if(s!==null)At=s,Je=r;else{if(r===null)throw De.alternate===null?Error(i(467)):Error(i(310));Je=r,r={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},At===null?De.memoizedState=At=r:At=At.next=r}return At}var _h;_h=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Jl(r){var s=Zl;return Zl+=1,To===null&&(To=[]),r=hv(To,r,s),s=De,(At===null?s.memoizedState:At.next)===null&&(s=s.alternate,A.H=s===null||s.memoizedState===null?ua:ts),r}function yh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Jl(r);if(r.$$typeof===R)return ln(r)}throw Error(i(438,String(r)))}function _m(r){var s=null,o=De.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=De.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=_h(),De.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=fe;return s.index++,o}function ar(r,s){return typeof s=="function"?s(r):s}function vh(r){var s=Rt();return ym(s,Je,r)}function ym(r,s,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var f=r.baseQueue,p=u.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}s.baseQueue=f=p,u.pending=null}if(p=r.baseState,f===null)r.memoizedState=p;else{s=f.next;var S=E=null,I=null,L=s,Y=!1;do{var te=L.lane&-536870913;if(te!==L.lane?(je&te)===te:(es&te)===te){var j=L.revertLane;if(j===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),te===yo&&(Y=!0);else if((es&j)===j){L=L.next,j===yo&&(Y=!0);continue}else te={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},I===null?(S=I=te,E=p):I=I.next=te,De.lanes|=j,cs|=j;te=L.action,la&&o(p,te),p=L.hasEagerState?L.eagerState:o(p,te)}else j={lane:te,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},I===null?(S=I=j,E=p):I=I.next=j,De.lanes|=te,cs|=te;L=L.next}while(L!==null&&L!==s);if(I===null?E=p:I.next=S,!xn(p,r.memoizedState)&&(Gt=!0,Y&&(o=vo,o!==null)))throw o;r.memoizedState=p,r.baseState=E,r.baseQueue=I,u.lastRenderedState=p}return f===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function vm(r){var s=Rt(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,f=o.pending,p=s.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do p=r(p,E.action),E=E.next;while(E!==f);xn(p,s.memoizedState)||(Gt=!0),s.memoizedState=p,s.baseQueue===null&&(s.baseState=p),o.lastRenderedState=p}return[p,u]}function Sv(r,s,o){var u=De,f=Rt(),p=Ke;if(p){if(o===void 0)throw Error(i(407));o=o()}else o=s();var E=!xn((Je||f).memoizedState,o);if(E&&(f.memoizedState=o,Gt=!0),f=f.queue,wm(Rv.bind(null,u,f,r),[r]),f.getSnapshot!==s||E||At!==null&&At.memoizedState.tag&1){if(u.flags|=2048,wo(9,Av.bind(null,u,f,o,s),{destroy:void 0},null),it===null)throw Error(i(349));p||es&60||bv(u,s,o)}return o}function bv(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=De.updateQueue,s===null?(s=_h(),De.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function Av(r,s,o,u){s.value=o,s.getSnapshot=u,Cv(s)&&Iv(r)}function Rv(r,s,o){return o(function(){Cv(s)&&Iv(r)})}function Cv(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!xn(r,o)}catch{return!0}}function Iv(r){var s=Xr(r,2);s!==null&&vn(s,r,2)}function Em(r){var s=Sn();if(typeof r=="function"){var o=r;if(r=o(),la){vi(!0);try{o()}finally{vi(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:r},s}function Nv(r,s,o,u){return r.baseState=o,ym(r,Je,typeof u=="function"?u:ar)}function iI(r,s,o,u,f){if(wh(r))throw Error(i(485));if(r=s.action,r!==null){var p={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};A.T!==null?o(!0):p.isTransition=!1,u(p),o=s.pending,o===null?(p.next=s.pending=p,Dv(s,p)):(p.next=o.next,s.pending=o.next=p)}}function Dv(r,s){var o=s.action,u=s.payload,f=r.state;if(s.isTransition){var p=A.T,E={};A.T=E;try{var S=o(f,u),I=A.S;I!==null&&I(E,S),xv(r,s,S)}catch(L){Tm(r,s,L)}finally{A.T=p}}else try{p=o(f,u),xv(r,s,p)}catch(L){Tm(r,s,L)}}function xv(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ov(r,s,u)},function(u){return Tm(r,s,u)}):Ov(r,s,o)}function Ov(r,s,o){s.status="fulfilled",s.value=o,Mv(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,Dv(r,o)))}function Tm(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,Mv(s),s=s.next;while(s!==u)}r.action=null}function Mv(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function kv(r,s){return s}function Pv(r,s){if(Ke){var o=it.formState;if(o!==null){e:{var u=De;if(Ke){if(Jt){t:{for(var f=Jt,p=Di;f.nodeType!==8;){if(!p){f=null;break t}if(f=ci(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Jt=ci(f.nextSibling),u=f.data==="F!";break e}}sa(u)}u=!1}u&&(s=o[0])}}return o=Sn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kv,lastRenderedState:s},o.queue=u,o=Jv.bind(null,De,u),u.dispatch=o,u=Em(!1),p=Cm.bind(null,De,!1,u.queue),u=Sn(),f={state:s,dispatch:null,action:r,pending:null},u.queue=f,o=iI.bind(null,De,f,p,o),f.dispatch=o,u.memoizedState=r,[s,o,!1]}function Lv(r){var s=Rt();return Vv(s,Je,r)}function Vv(r,s,o){s=ym(r,s,kv)[0],r=vh(ar)[0],s=typeof s=="object"&&s!==null&&typeof s.then=="function"?Jl(s):s;var u=Rt(),f=u.queue,p=f.dispatch;return o!==u.memoizedState&&(De.flags|=2048,wo(9,rI.bind(null,f,o),{destroy:void 0},null)),[s,p,r]}function rI(r,s){r.action=s}function Uv(r){var s=Rt(),o=Je;if(o!==null)return Vv(s,o,r);Rt(),s=s.memoizedState,o=Rt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function wo(r,s,o,u){return r={tag:r,create:s,inst:o,deps:u,next:null},s=De.updateQueue,s===null&&(s=_h(),De.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function zv(){return Rt().memoizedState}function Eh(r,s,o,u){var f=Sn();De.flags|=r,f.memoizedState=wo(1|s,o,{destroy:void 0},u===void 0?null:u)}function Th(r,s,o,u){var f=Rt();u=u===void 0?null:u;var p=f.memoizedState.inst;Je!==null&&u!==null&&fm(u,Je.memoizedState.deps)?f.memoizedState=wo(s,o,p,u):(De.flags|=r,f.memoizedState=wo(1|s,o,p,u))}function Fv(r,s){Eh(8390656,8,r,s)}function wm(r,s){Th(2048,8,r,s)}function Bv(r,s){return Th(4,2,r,s)}function jv(r,s){return Th(4,4,r,s)}function qv(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Hv(r,s,o){o=o!=null?o.concat([r]):null,Th(4,4,qv.bind(null,s,r),o)}function Sm(){}function Gv(r,s){var o=Rt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&fm(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function Kv(r,s){var o=Rt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&fm(s,u[1]))return u[0];if(u=r(),la){vi(!0);try{r()}finally{vi(!1)}}return o.memoizedState=[u,s],u}function bm(r,s,o){return o===void 0||es&1073741824?r.memoizedState=s:(r.memoizedState=o,r=$E(),De.lanes|=r,cs|=r,o)}function Qv(r,s,o,u){return xn(o,s)?o:_o.current!==null?(r=bm(r,o,u),xn(r,s)||(Gt=!0),r):es&42?(r=$E(),De.lanes|=r,cs|=r,s):(Gt=!0,r.memoizedState=o)}function $v(r,s,o,u,f){var p=le.p;le.p=p!==0&&8>p?p:8;var E=A.T,S={};A.T=S,Cm(r,!1,s,o);try{var I=f(),L=A.S;if(L!==null&&L(S,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var Y=eI(I,u);eu(r,s,Y,Pn(r))}else eu(r,s,u,Pn(r))}catch(te){eu(r,s,{then:function(){},status:"rejected",reason:te},Pn())}finally{le.p=p,A.T=E}}function sI(){}function Am(r,s,o,u){if(r.tag!==5)throw Error(i(476));var f=Yv(r).queue;$v(r,f,s,Ne,o===null?sI:function(){return Wv(r),o(u)})}function Yv(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:Ne,baseState:Ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:Ne},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ar,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function Wv(r){var s=Yv(r).next.queue;eu(r,s,{},Pn())}function Rm(){return ln(Eu)}function Xv(){return Rt().memoizedState}function Zv(){return Rt().memoizedState}function aI(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=Pn();r=rs(o);var u=ss(s,r,o);u!==null&&(vn(u,s,o),iu(u,s,o)),s={cache:um()},r.payload=s;return}s=s.return}}function oI(r,s,o){var u=Pn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},wh(r)?eE(s,o):(o=nm(r,s,o,u),o!==null&&(vn(o,r,u),tE(o,s,u)))}function Jv(r,s,o){var u=Pn();eu(r,s,o,u)}function eu(r,s,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(wh(r))eE(s,f);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=s.lastRenderedReducer,p!==null))try{var E=s.lastRenderedState,S=p(E,o);if(f.hasEagerState=!0,f.eagerState=S,xn(S,E))return sh(r,s,f,0),it===null&&rh(),!1}catch{}finally{}if(o=nm(r,s,f,u),o!==null)return vn(o,r,u),tE(o,s,u),!0}return!1}function Cm(r,s,o,u){if(u={lane:2,revertLane:gp(),action:u,hasEagerState:!1,eagerState:null,next:null},wh(r)){if(s)throw Error(i(479))}else s=nm(r,o,u,2),s!==null&&vn(s,r,2)}function wh(r){var s=r.alternate;return r===De||s!==null&&s===De}function eE(r,s){Eo=ph=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function tE(r,s,o){if(o&4194176){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Br(r,o)}}var Oi={readContext:ln,use:yh,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useLayoutEffect:Et,useInsertionEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useSyncExternalStore:Et,useId:Et};Oi.useCacheRefresh=Et,Oi.useMemoCache=Et,Oi.useHostTransitionStatus=Et,Oi.useFormState=Et,Oi.useActionState=Et,Oi.useOptimistic=Et;var ua={readContext:ln,use:yh,useCallback:function(r,s){return Sn().memoizedState=[r,s===void 0?null:s],r},useContext:ln,useEffect:Fv,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Eh(4194308,4,qv.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Eh(4194308,4,r,s)},useInsertionEffect:function(r,s){Eh(4,2,r,s)},useMemo:function(r,s){var o=Sn();s=s===void 0?null:s;var u=r();if(la){vi(!0);try{r()}finally{vi(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Sn();if(o!==void 0){var f=o(s);if(la){vi(!0);try{o(s)}finally{vi(!1)}}}else f=s;return u.memoizedState=u.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},u.queue=r,r=r.dispatch=oI.bind(null,De,r),[u.memoizedState,r]},useRef:function(r){var s=Sn();return r={current:r},s.memoizedState=r},useState:function(r){r=Em(r);var s=r.queue,o=Jv.bind(null,De,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:Sm,useDeferredValue:function(r,s){var o=Sn();return bm(o,r,s)},useTransition:function(){var r=Em(!1);return r=$v.bind(null,De,r.queue,!0,!1),Sn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=De,f=Sn();if(Ke){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),it===null)throw Error(i(349));je&60||bv(u,s,o)}f.memoizedState=o;var p={value:o,getSnapshot:s};return f.queue=p,Fv(Rv.bind(null,u,p,r),[r]),u.flags|=2048,wo(9,Av.bind(null,u,p,o,s),{destroy:void 0},null),o},useId:function(){var r=Sn(),s=it.identifierPrefix;if(Ke){var o=rr,u=ir;o=(u&~(1<<32-pn(u)-1)).toString(32)+o,s=":"+s+"R"+o,o=gh++,0<o&&(s+="H"+o.toString(32)),s+=":"}else o=tI++,s=":"+s+"r"+o.toString(32)+":";return r.memoizedState=s},useCacheRefresh:function(){return Sn().memoizedState=aI.bind(null,De)}};ua.useMemoCache=_m,ua.useHostTransitionStatus=Rm,ua.useFormState=Pv,ua.useActionState=Pv,ua.useOptimistic=function(r){var s=Sn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=Cm.bind(null,De,!0,o),o.dispatch=s,[r,s]};var ts={readContext:ln,use:yh,useCallback:Gv,useContext:ln,useEffect:wm,useImperativeHandle:Hv,useInsertionEffect:Bv,useLayoutEffect:jv,useMemo:Kv,useReducer:vh,useRef:zv,useState:function(){return vh(ar)},useDebugValue:Sm,useDeferredValue:function(r,s){var o=Rt();return Qv(o,Je.memoizedState,r,s)},useTransition:function(){var r=vh(ar)[0],s=Rt().memoizedState;return[typeof r=="boolean"?r:Jl(r),s]},useSyncExternalStore:Sv,useId:Xv};ts.useCacheRefresh=Zv,ts.useMemoCache=_m,ts.useHostTransitionStatus=Rm,ts.useFormState=Lv,ts.useActionState=Lv,ts.useOptimistic=function(r,s){var o=Rt();return Nv(o,Je,r,s)};var ca={readContext:ln,use:yh,useCallback:Gv,useContext:ln,useEffect:wm,useImperativeHandle:Hv,useInsertionEffect:Bv,useLayoutEffect:jv,useMemo:Kv,useReducer:vm,useRef:zv,useState:function(){return vm(ar)},useDebugValue:Sm,useDeferredValue:function(r,s){var o=Rt();return Je===null?bm(o,r,s):Qv(o,Je.memoizedState,r,s)},useTransition:function(){var r=vm(ar)[0],s=Rt().memoizedState;return[typeof r=="boolean"?r:Jl(r),s]},useSyncExternalStore:Sv,useId:Xv};ca.useCacheRefresh=Zv,ca.useMemoCache=_m,ca.useHostTransitionStatus=Rm,ca.useFormState=Uv,ca.useActionState=Uv,ca.useOptimistic=function(r,s){var o=Rt();return Je!==null?Nv(o,Je,r,s):(o.baseState=r,[r,o.queue.dispatch])};function Im(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:N({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var Nm={isMounted:function(r){return(r=r._reactInternals)?ge(r)===r:!1},enqueueSetState:function(r,s,o){r=r._reactInternals;var u=Pn(),f=rs(u);f.payload=s,o!=null&&(f.callback=o),s=ss(r,f,u),s!==null&&(vn(s,r,u),iu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=Pn(),f=rs(u);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=ss(r,f,u),s!==null&&(vn(s,r,u),iu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=Pn(),u=rs(o);u.tag=2,s!=null&&(u.callback=s),s=ss(r,u,o),s!==null&&(vn(s,r,o),iu(s,r,o))}};function nE(r,s,o,u,f,p,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,E):s.prototype&&s.prototype.isPureReactComponent?!Bl(o,u)||!Bl(f,p):!0}function iE(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&Nm.enqueueReplaceState(s,s.state,null)}function ha(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=N({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var Sh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function rE(r){Sh(r)}function sE(r){console.error(r)}function aE(r){Sh(r)}function bh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function oE(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Dm(r,s,o){return o=rs(o),o.tag=3,o.payload={element:null},o.callback=function(){bh(r,s)},o}function lE(r){return r=rs(r),r.tag=3,r}function uE(r,s,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;r.payload=function(){return f(p)},r.callback=function(){oE(s,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(r.callback=function(){oE(s,o,u),typeof f!="function"&&(hs===null?hs=new Set([this]):hs.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function lI(r,s,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&nu(s,o,f,!0),o=Yn.current,o!==null){switch(o.tag){case 13:return xi===null?hp():o.alternate===null&&pt===0&&(pt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===am?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),dp(r,u,f)),!1;case 22:return o.flags|=65536,u===am?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),dp(r,u,f)),!1}throw Error(i(435,o.tag))}return dp(r,u,f),hp(),!1}if(Ke)return s=Yn.current,s!==null?(!(s.flags&65536)&&(s.flags|=256),s.flags|=65536,s.lanes=f,u!==sm&&(r=Error(i(422),{cause:u}),Gl(Kn(r,o)))):(u!==sm&&(s=Error(i(423),{cause:u}),Gl(Kn(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,u=Kn(u,o),f=Dm(r.stateNode,u,f),Gm(r,f),pt!==4&&(pt=2)),!1;var p=Error(i(520),{cause:u});if(p=Kn(p,o),hu===null?hu=[p]:hu.push(p),pt!==4&&(pt=2),s===null)return!0;u=Kn(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=Dm(o.stateNode,u,r),Gm(o,r),!1;case 1:if(s=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(hs===null||!hs.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=lE(f),uE(f,r,o,u),Gm(o,f),!1}o=o.return}while(o!==null);return!1}var cE=Error(i(461)),Gt=!1;function en(r,s,o,u){s.child=r===null?pv(s,null,o,u):aa(s,r.child,o,u)}function hE(r,s,o,u,f){o=o.render;var p=s.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return da(s),u=dm(r,s,o,E,p,f),S=mm(),r!==null&&!Gt?(pm(r,s,f),or(r,s,f)):(Ke&&S&&im(s),s.flags|=1,en(r,s,u,f),s.child)}function fE(r,s,o,u,f){if(r===null){var p=o.type;return typeof p=="function"&&!Jm(p)&&p.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=p,dE(r,s,p,u,f)):(r=Nh(o.type,null,u,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(p=r.child,!zm(r,f)){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Bl,o(E,u)&&r.ref===s.ref)return or(r,s,f)}return s.flags|=1,r=us(p,u),r.ref=s.ref,r.return=s,s.child=r}function dE(r,s,o,u,f){if(r!==null){var p=r.memoizedProps;if(Bl(p,u)&&r.ref===s.ref)if(Gt=!1,s.pendingProps=u=p,zm(r,f))r.flags&131072&&(Gt=!0);else return s.lanes=r.lanes,or(r,s,f)}return xm(r,s,o,u,f)}function mE(r,s,o){var u=s.pendingProps,f=u.children,p=(s.stateNode._pendingVisibility&2)!==0,E=r!==null?r.memoizedState:null;if(tu(r,s),u.mode==="hidden"||p){if(s.flags&128){if(u=E!==null?E.baseLanes|o:o,r!==null){for(f=s.child=r.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;s.childLanes=p&~u}else s.childLanes=0,s.child=null;return pE(r,s,u,o)}if(o&536870912)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&mh(s,E!==null?E.cachePool:null),E!==null?gv(s,E):om(),_v(s);else return s.lanes=s.childLanes=536870912,pE(r,s,E!==null?E.baseLanes|o:o,o)}else E!==null?(mh(s,E.cachePool),gv(s,E),Jr(),s.memoizedState=null):(r!==null&&mh(s,null),om(),Jr());return en(r,s,f,o),s.child}function pE(r,s,o,u){var f=hm();return f=f===null?null:{parent:Vt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&mh(s,null),om(),_v(s),r!==null&&nu(r,s,u,!0),null}function tu(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=2097664)}}function xm(r,s,o,u,f){return da(s),o=dm(r,s,o,u,void 0,f),u=mm(),r!==null&&!Gt?(pm(r,s,f),or(r,s,f)):(Ke&&u&&im(s),s.flags|=1,en(r,s,o,f),s.child)}function gE(r,s,o,u,f,p){return da(s),s.updateQueue=null,o=wv(s,u,o,f),Tv(r),u=mm(),r!==null&&!Gt?(pm(r,s,p),or(r,s,p)):(Ke&&u&&im(s),s.flags|=1,en(r,s,o,p),s.child)}function _E(r,s,o,u,f){if(da(s),s.stateNode===null){var p=fo,E=o.contextType;typeof E=="object"&&E!==null&&(p=ln(E)),p=new o(u,p),s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=Nm,s.stateNode=p,p._reactInternals=s,p=s.stateNode,p.props=u,p.state=s.memoizedState,p.refs={},qm(s),E=o.contextType,p.context=typeof E=="object"&&E!==null?ln(E):fo,p.state=s.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Im(s,o,E,u),p.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&Nm.enqueueReplaceState(p,p.state,null),su(s,u,p,f),ru(),p.state=s.memoizedState),typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){p=s.stateNode;var S=s.memoizedProps,I=ha(o,S);p.props=I;var L=p.context,Y=o.contextType;E=fo,typeof Y=="object"&&Y!==null&&(E=ln(Y));var te=o.getDerivedStateFromProps;Y=typeof te=="function"||typeof p.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,Y||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S||L!==E)&&iE(s,p,u,E),is=!1;var j=s.memoizedState;p.state=j,su(s,u,p,f),ru(),L=s.memoizedState,S||j!==L||is?(typeof te=="function"&&(Im(s,o,te,u),L=s.memoizedState),(I=is||nE(s,o,I,u,j,L,E))?(Y||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(s.flags|=4194308)):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=L),p.props=u,p.state=L,p.context=E,u=I):(typeof p.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{p=s.stateNode,Hm(r,s),E=s.memoizedProps,Y=ha(o,E),p.props=Y,te=s.pendingProps,j=p.context,L=o.contextType,I=fo,typeof L=="object"&&L!==null&&(I=ln(L)),S=o.getDerivedStateFromProps,(L=typeof S=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==te||j!==I)&&iE(s,p,u,I),is=!1,j=s.memoizedState,p.state=j,su(s,u,p,f),ru();var K=s.memoizedState;E!==te||j!==K||is||r!==null&&r.dependencies!==null&&Ah(r.dependencies)?(typeof S=="function"&&(Im(s,o,S,u),K=s.memoizedState),(Y=is||nE(s,o,Y,u,j,K,I)||r!==null&&r.dependencies!==null&&Ah(r.dependencies))?(L||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,K,I),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,K,I)),typeof p.componentDidUpdate=="function"&&(s.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=K),p.props=u,p.state=K,p.context=I,u=Y):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(s.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&j===r.memoizedState||(s.flags|=1024),u=!1)}return p=u,tu(r,s),u=(s.flags&128)!==0,p||u?(p=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),s.flags|=1,r!==null&&u?(s.child=aa(s,r.child,null,f),s.child=aa(s,null,o,f)):en(r,s,o,f),s.memoizedState=p.state,r=s.child):r=or(r,s,f),r}function yE(r,s,o,u){return Hl(),s.flags|=256,en(r,s,o,u),s.child}var Om={dehydrated:null,treeContext:null,retryLane:0};function Mm(r){return{baseLanes:r,cachePool:Ev()}}function km(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=Jn),r}function vE(r,s,o){var u=s.pendingProps,f=!1,p=(s.flags&128)!==0,E;if((E=p)||(E=r!==null&&r.memoizedState===null?!1:(Lt.current&2)!==0),E&&(f=!0,s.flags&=-129),E=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ke){if(f?Zr(s):Jr(),Ke){var S=Jt,I;if(I=S){e:{for(I=S,S=Di;I.nodeType!==8;){if(!S){S=null;break e}if(I=ci(I.nextSibling),I===null){S=null;break e}}S=I}S!==null?(s.memoizedState={dehydrated:S,treeContext:ia!==null?{id:ir,overflow:rr}:null,retryLane:536870912},I=Zn(18,null,null,0),I.stateNode=S,I.return=s,s.child=I,yn=s,Jt=null,I=!0):I=!1}I||sa(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return S.data==="$!"?s.lanes=16:s.lanes=536870912,null;sr(s)}return S=u.children,u=u.fallback,f?(Jr(),f=s.mode,S=Lm({mode:"hidden",children:S},f),u=pa(u,f,o,null),S.return=s,u.return=s,S.sibling=u,s.child=S,f=s.child,f.memoizedState=Mm(o),f.childLanes=km(r,E,o),s.memoizedState=Om,u):(Zr(s),Pm(s,S))}if(I=r.memoizedState,I!==null&&(S=I.dehydrated,S!==null)){if(p)s.flags&256?(Zr(s),s.flags&=-257,s=Vm(r,s,o)):s.memoizedState!==null?(Jr(),s.child=r.child,s.flags|=128,s=null):(Jr(),f=u.fallback,S=s.mode,u=Lm({mode:"visible",children:u.children},S),f=pa(f,S,o,null),f.flags|=2,u.return=s,f.return=s,u.sibling=f,s.child=u,aa(s,r.child,null,o),u=s.child,u.memoizedState=Mm(o),u.childLanes=km(r,E,o),s.memoizedState=Om,s=f);else if(Zr(s),S.data==="$!"){if(E=S.nextSibling&&S.nextSibling.dataset,E)var L=E.dgst;E=L,u=Error(i(419)),u.stack="",u.digest=E,Gl({value:u,source:null,stack:null}),s=Vm(r,s,o)}else if(Gt||nu(r,s,o,!1),E=(o&r.childLanes)!==0,Gt||E){if(E=it,E!==null){if(u=o&-o,u&42)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=u&(E.suspendedLanes|o)?0:u,u!==0&&u!==I.retryLane)throw I.retryLane=u,Xr(r,u),vn(E,r,u),cE}S.data==="$?"||hp(),s=Vm(r,s,o)}else S.data==="$?"?(s.flags|=128,s.child=r.child,s=SI.bind(null,r),S._reactRetry=s,s=null):(r=I.treeContext,Jt=ci(S.nextSibling),yn=s,Ke=!0,li=null,Di=!1,r!==null&&(Qn[$n++]=ir,Qn[$n++]=rr,Qn[$n++]=ia,ir=r.id,rr=r.overflow,ia=s),s=Pm(s,u.children),s.flags|=4096);return s}return f?(Jr(),f=u.fallback,S=s.mode,I=r.child,L=I.sibling,u=us(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&31457280,L!==null?f=us(L,f):(f=pa(f,S,o,null),f.flags|=2),f.return=s,u.return=s,u.sibling=f,s.child=u,u=f,f=s.child,S=r.child.memoizedState,S===null?S=Mm(o):(I=S.cachePool,I!==null?(L=Vt._currentValue,I=I.parent!==L?{parent:L,pool:L}:I):I=Ev(),S={baseLanes:S.baseLanes|o,cachePool:I}),f.memoizedState=S,f.childLanes=km(r,E,o),s.memoizedState=Om,u):(Zr(s),o=r.child,r=o.sibling,o=us(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(E=s.deletions,E===null?(s.deletions=[r],s.flags|=16):E.push(r)),s.child=o,s.memoizedState=null,o)}function Pm(r,s){return s=Lm({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Lm(r,s){return GE(r,s,0,null)}function Vm(r,s,o){return aa(s,r.child,null,o),r=Pm(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function EE(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Bm(r.return,s,o)}function Um(r,s,o,u,f){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=s,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function TE(r,s,o){var u=s.pendingProps,f=u.revealOrder,p=u.tail;if(en(r,s,u.children,o),u=Lt.current,u&2)u=u&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&EE(r,o,s);else if(r.tag===19)EE(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(Ze(Lt,u),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&dh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),Um(s,!1,f,o,p);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&dh(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}Um(s,!0,o,null,p);break;case"together":Um(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function or(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),cs|=s.lanes,!(o&s.childLanes))if(r!==null){if(nu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=us(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=us(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function zm(r,s){return r.lanes&s?!0:(r=r.dependencies,!!(r!==null&&Ah(r)))}function uI(r,s,o){switch(s.tag){case 3:Pr(s,s.stateNode.containerInfo),ns(s,Vt,r.memoizedState.cache),Hl();break;case 27:case 5:El(s);break;case 4:Pr(s,s.stateNode.containerInfo);break;case 10:ns(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(Zr(s),s.flags|=128,null):o&s.child.childLanes?vE(r,s,o):(Zr(s),r=or(r,s,o),r!==null?r.sibling:null);Zr(s);break;case 19:var f=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(nu(r,s,o,!1),u=(o&s.childLanes)!==0),f){if(u)return TE(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ze(Lt,Lt.current),u)break;return null;case 22:case 23:return s.lanes=0,mE(r,s,o);case 24:ns(s,Vt,r.memoizedState.cache)}return or(r,s,o)}function wE(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)Gt=!0;else{if(!zm(r,o)&&!(s.flags&128))return Gt=!1,uI(r,s,o);Gt=!!(r.flags&131072)}else Gt=!1,Ke&&s.flags&1048576&&av(s,lh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,f=u._init;if(u=f(u._payload),s.type=u,typeof u=="function")Jm(u)?(r=ha(u,r),s.tag=1,s=_E(null,s,u,r,o)):(s.tag=0,s=xm(null,s,u,r,o));else{if(u!=null){if(f=u.$$typeof,f===x){s.tag=11,s=hE(null,s,u,r,o);break e}else if(f===$){s.tag=14,s=fE(null,s,u,r,o);break e}}throw s=C(u)||u,Error(i(306,s,""))}}return s;case 0:return xm(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,f=ha(u,s.pendingProps),_E(r,s,u,f,o);case 3:e:{if(Pr(s,s.stateNode.containerInfo),r===null)throw Error(i(387));var p=s.pendingProps;f=s.memoizedState,u=f.element,Hm(r,s),su(s,p,null,o);var E=s.memoizedState;if(p=E.cache,ns(s,Vt,p),p!==f.cache&&jm(s,[Vt],o,!0),ru(),p=E.element,f.isDehydrated)if(f={element:p,isDehydrated:!1,cache:E.cache},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){s=yE(r,s,p,o);break e}else if(p!==u){u=Kn(Error(i(424)),s),Gl(u),s=yE(r,s,p,o);break e}else for(Jt=ci(s.stateNode.containerInfo.firstChild),yn=s,Ke=!0,li=null,Di=!0,o=pv(s,null,p,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Hl(),p===u){s=or(r,s,o);break e}en(r,s,p,o)}s=s.child}return s;case 26:return tu(r,s),r===null?(o=A0(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ke||(o=s.type,r=s.pendingProps,u=Bh(Un.current).createElement(o),u[jt]=s,u[Mt]=r,tn(u,o,r),lt(u),s.stateNode=u):s.memoizedState=A0(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return El(s),r===null&&Ke&&(u=s.stateNode=w0(s.type,s.pendingProps,Un.current),yn=s,Di=!0,Jt=ci(u.firstChild)),u=s.pendingProps.children,r!==null||Ke?en(r,s,u,o):s.child=aa(s,null,u,o),tu(r,s),s.child;case 5:return r===null&&Ke&&((f=u=Jt)&&(u=zI(u,s.type,s.pendingProps,Di),u!==null?(s.stateNode=u,yn=s,Jt=ci(u.firstChild),Di=!1,f=!0):f=!1),f||sa(s)),El(s),f=s.type,p=s.pendingProps,E=r!==null?r.memoizedProps:null,u=p.children,Ap(f,p)?u=null:E!==null&&Ap(f,E)&&(s.flags|=32),s.memoizedState!==null&&(f=dm(r,s,nI,null,null,o),Eu._currentValue=f),tu(r,s),en(r,s,u,o),s.child;case 6:return r===null&&Ke&&((r=o=Jt)&&(o=FI(o,s.pendingProps,Di),o!==null?(s.stateNode=o,yn=s,Jt=null,r=!0):r=!1),r||sa(s)),null;case 13:return vE(r,s,o);case 4:return Pr(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=aa(s,null,u,o):en(r,s,u,o),s.child;case 11:return hE(r,s,s.type,s.pendingProps,o);case 7:return en(r,s,s.pendingProps,o),s.child;case 8:return en(r,s,s.pendingProps.children,o),s.child;case 12:return en(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,ns(s,s.type,u.value),en(r,s,u.children,o),s.child;case 9:return f=s.type._context,u=s.pendingProps.children,da(s),f=ln(f),u=u(f),s.flags|=1,en(r,s,u,o),s.child;case 14:return fE(r,s,s.type,s.pendingProps,o);case 15:return dE(r,s,s.type,s.pendingProps,o);case 19:return TE(r,s,o);case 22:return mE(r,s,o);case 24:return da(s),u=ln(Vt),r===null?(f=hm(),f===null&&(f=it,p=um(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),s.memoizedState={parent:u,cache:f},qm(s),ns(s,Vt,f)):(r.lanes&o&&(Hm(r,s),su(s,null,null,o),ru()),f=r.memoizedState,p=s.memoizedState,f.parent!==u?(f={parent:u,cache:u},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),ns(s,Vt,u)):(u=p.cache,ns(s,Vt,u),u!==f.cache&&jm(s,[Vt],o,!0))),en(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}var Fm=He(null),fa=null,lr=null;function ns(r,s,o){Ze(Fm,s._currentValue),s._currentValue=o}function ur(r){r._currentValue=Fm.current,ft(Fm)}function Bm(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function jm(r,s,o,u){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var p=f.dependencies;if(p!==null){var E=f.child;p=p.firstContext;e:for(;p!==null;){var S=p;p=f;for(var I=0;I<s.length;I++)if(S.context===s[I]){p.lanes|=o,S=p.alternate,S!==null&&(S.lanes|=o),Bm(p.return,o,r),u||(E=null);break e}p=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(i(341));E.lanes|=o,p=E.alternate,p!==null&&(p.lanes|=o),Bm(E,o,r),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===r){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function nu(r,s,o,u){r=null;for(var f=s,p=!1;f!==null;){if(!p){if(f.flags&524288)p=!0;else if(f.flags&262144)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var S=f.type;xn(f.pendingProps.value,E.value)||(r!==null?r.push(S):r=[S])}}else if(f===kr.current){if(E=f.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(Eu):r=[Eu])}f=f.return}r!==null&&jm(s,r,o,u),s.flags|=262144}function Ah(r){for(r=r.firstContext;r!==null;){if(!xn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function da(r){fa=r,lr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function ln(r){return SE(fa,r)}function Rh(r,s){return fa===null&&da(r),SE(r,s)}function SE(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},lr===null){if(r===null)throw Error(i(308));lr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else lr=lr.next=s;return o}var is=!1;function qm(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function rs(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function ss(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,ct&2){var f=u.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s,s=ah(r),rv(r,null,o),s}return sh(r,u,s,o),ah(r)}function iu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194176)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,Br(r,o)}}function Gm(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?f=p=s:p=p.next=s}else f=p=s;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Km=!1;function ru(){if(Km){var r=vo;if(r!==null)throw r}}function su(r,s,o,u){Km=!1;var f=r.updateQueue;is=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var I=S,L=I.next;I.next=null,E===null?p=L:E.next=L,E=I;var Y=r.alternate;Y!==null&&(Y=Y.updateQueue,S=Y.lastBaseUpdate,S!==E&&(S===null?Y.firstBaseUpdate=L:S.next=L,Y.lastBaseUpdate=I))}if(p!==null){var te=f.baseState;E=0,Y=L=I=null,S=p;do{var j=S.lane&-536870913,K=j!==S.lane;if(K?(je&j)===j:(u&j)===j){j!==0&&j===yo&&(Km=!0),Y!==null&&(Y=Y.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var de=r,Ae=S;j=s;var gt=o;switch(Ae.tag){case 1:if(de=Ae.payload,typeof de=="function"){te=de.call(gt,te,j);break e}te=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=Ae.payload,j=typeof de=="function"?de.call(gt,te,j):de,j==null)break e;te=N({},te,j);break e;case 2:is=!0}}j=S.callback,j!==null&&(r.flags|=64,K&&(r.flags|=8192),K=f.callbacks,K===null?f.callbacks=[j]:K.push(j))}else K={lane:j,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Y===null?(L=Y=K,I=te):Y=Y.next=K,E|=j;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;K=S,S=K.next,K.next=null,f.lastBaseUpdate=K,f.shared.pending=null}}while(!0);Y===null&&(I=te),f.baseState=I,f.firstBaseUpdate=L,f.lastBaseUpdate=Y,p===null&&(f.shared.lanes=0),cs|=E,r.lanes=E,r.memoizedState=te}}function bE(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function AE(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)bE(o[r],s)}function au(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&r)===r){u=void 0;var p=o.create,E=o.inst;u=p(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){nt(s,s.return,S)}}function as(r,s,o){try{var u=s.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&r)===r){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=s;var I=o;try{S()}catch(L){nt(f,I,L)}}}u=u.next}while(u!==p)}}catch(L){nt(s,s.return,L)}}function RE(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{AE(s,o)}catch(u){nt(r,r.return,u)}}}function CE(r,s,o){o.props=ha(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){nt(r,s,u)}}function ma(r,s){try{var o=r.ref;if(o!==null){var u=r.stateNode;switch(r.tag){case 26:case 27:case 5:var f=u;break;default:f=u}typeof o=="function"?r.refCleanup=o(f):o.current=f}}catch(p){nt(r,s,p)}}function On(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){nt(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){nt(r,s,f)}else o.current=null}function IE(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){nt(r,r.return,f)}}function NE(r,s,o){try{var u=r.stateNode;kI(u,r.type,o,s),u[Mt]=s}catch(f){nt(r,r.return,f)}}function DE(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27||r.tag===4}function Qm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||DE(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==27&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function $m(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.nodeType===8?o.parentNode.insertBefore(r,s):o.insertBefore(r,s):(o.nodeType===8?(s=o.parentNode,s.insertBefore(r,o)):(s=o,s.appendChild(r)),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Fh));else if(u!==4&&u!==27&&(r=r.child,r!==null))for($m(r,s,o),r=r.sibling;r!==null;)$m(r,s,o),r=r.sibling}function Ch(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&u!==27&&(r=r.child,r!==null))for(Ch(r,s,o),r=r.sibling;r!==null;)Ch(r,s,o),r=r.sibling}var cr=!1,mt=!1,Ym=!1,xE=typeof WeakSet=="function"?WeakSet:Set,Kt=null,OE=!1;function cI(r,s){if(r=r.containerInfo,Sp=Qh,r=Yy(r),Xd(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,S=-1,I=-1,L=0,Y=0,te=r,j=null;t:for(;;){for(var K;te!==o||f!==0&&te.nodeType!==3||(S=E+f),te!==p||u!==0&&te.nodeType!==3||(I=E+u),te.nodeType===3&&(E+=te.nodeValue.length),(K=te.firstChild)!==null;)j=te,te=K;for(;;){if(te===r)break t;if(j===o&&++L===f&&(S=E),j===p&&++Y===u&&(I=E),(K=te.nextSibling)!==null)break;te=j,j=te.parentNode}te=K}o=S===-1||I===-1?null:{start:S,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(bp={focusedElem:r,selectionRange:o},Qh=!1,Kt=s;Kt!==null;)if(s=Kt,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,Kt=r;else for(;Kt!==null;){switch(s=Kt,p=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if(r&1024&&p!==null){r=void 0,o=s,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var de=ha(o.type,f,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(de,p),u.__reactInternalSnapshotBeforeUpdate=r}catch(Ae){nt(o,o.return,Ae)}}break;case 3:if(r&1024){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)Ip(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Ip(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(r&1024)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,Kt=r;break}Kt=s.return}return de=OE,OE=!1,de}function ME(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:fr(r,o),u&4&&au(5,o);break;case 1:if(fr(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(S){nt(o,o.return,S)}else{var f=ha(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(S){nt(o,o.return,S)}}u&64&&RE(o),u&512&&ma(o,o.return);break;case 3:if(fr(r,o),u&64&&(u=o.updateQueue,u!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{AE(u,r)}catch(S){nt(o,o.return,S)}}break;case 26:fr(r,o),u&512&&ma(o,o.return);break;case 27:case 5:fr(r,o),s===null&&u&4&&IE(o),u&512&&ma(o,o.return);break;case 12:fr(r,o);break;case 13:fr(r,o),u&4&&LE(r,o);break;case 22:if(f=o.memoizedState!==null||cr,!f){s=s!==null&&s.memoizedState!==null||mt;var p=cr,E=mt;cr=f,(mt=s)&&!E?os(r,o,(o.subtreeFlags&8772)!==0):fr(r,o),cr=p,mt=E}u&512&&(o.memoizedProps.mode==="manual"?ma(o,o.return):On(o,o.return));break;default:fr(r,o)}}function kE(r){var s=r.alternate;s!==null&&(r.alternate=null,kE(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Hs(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var Ct=null,Mn=!1;function hr(r,s,o){for(o=o.child;o!==null;)PE(r,s,o),o=o.sibling}function PE(r,s,o){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Lr,o)}catch{}switch(o.tag){case 26:mt||On(o,s),hr(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:mt||On(o,s);var u=Ct,f=Mn;for(Ct=o.stateNode,hr(r,s,o),o=o.stateNode,s=o.attributes;s.length;)o.removeAttributeNode(s[0]);Hs(o),Ct=u,Mn=f;break;case 5:mt||On(o,s);case 6:f=Ct;var p=Mn;if(Ct=null,hr(r,s,o),Ct=f,Mn=p,Ct!==null)if(Mn)try{r=Ct,u=o.stateNode,r.nodeType===8?r.parentNode.removeChild(u):r.removeChild(u)}catch(E){nt(o,s,E)}else try{Ct.removeChild(o.stateNode)}catch(E){nt(o,s,E)}break;case 18:Ct!==null&&(Mn?(s=Ct,o=o.stateNode,s.nodeType===8?Cp(s.parentNode,o):s.nodeType===1&&Cp(s,o),bu(s)):Cp(Ct,o.stateNode));break;case 4:u=Ct,f=Mn,Ct=o.stateNode.containerInfo,Mn=!0,hr(r,s,o),Ct=u,Mn=f;break;case 0:case 11:case 14:case 15:mt||as(2,o,s),mt||as(4,o,s),hr(r,s,o);break;case 1:mt||(On(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&CE(o,s,u)),hr(r,s,o);break;case 21:hr(r,s,o);break;case 22:mt||On(o,s),mt=(u=mt)||o.memoizedState!==null,hr(r,s,o),mt=u;break;default:hr(r,s,o)}}function LE(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{bu(r)}catch(o){nt(s,s.return,o)}}function hI(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new xE),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new xE),s;default:throw Error(i(435,r.tag))}}function Wm(r,s){var o=hI(r);s.forEach(function(u){var f=bI.bind(null,r,u);o.has(u)||(o.add(u),u.then(f,f))})}function Wn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=r,E=s,S=E;e:for(;S!==null;){switch(S.tag){case 27:case 5:Ct=S.stateNode,Mn=!1;break e;case 3:Ct=S.stateNode.containerInfo,Mn=!0;break e;case 4:Ct=S.stateNode.containerInfo,Mn=!0;break e}S=S.return}if(Ct===null)throw Error(i(160));PE(p,E,f),Ct=null,Mn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)VE(s,r),s=s.sibling}var ui=null;function VE(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Wn(s,r),Xn(r),u&4&&(as(3,r,r.return),au(3,r),as(5,r,r.return));break;case 1:Wn(s,r),Xn(r),u&512&&(mt||o===null||On(o,o.return)),u&64&&cr&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ui;if(Wn(s,r),Xn(r),u&512&&(mt||o===null||On(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[qr]||p[jt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),tn(p,u,o),p[jt]=r,lt(p),u=p;break e;case"link":var E=I0("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(p=E[S],p.getAttribute("href")===(o.href==null?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}p=f.createElement(u),tn(p,u,o),f.head.appendChild(p);break;case"meta":if(E=I0("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(p=E[S],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}p=f.createElement(u),tn(p,u,o),f.head.appendChild(p);break;default:throw Error(i(468,u))}p[jt]=r,lt(p),u=p}r.stateNode=u}else N0(f,r.type,r.stateNode);else r.stateNode=C0(f,u,r.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?N0(f,r.type,r.stateNode):C0(f,u,r.memoizedProps)):u===null&&r.stateNode!==null&&NE(r,r.memoizedProps,o.memoizedProps)}break;case 27:if(u&4&&r.alternate===null){f=r.stateNode,p=r.memoizedProps;try{for(var I=f.firstChild;I;){var L=I.nextSibling,Y=I.nodeName;I[qr]||Y==="HEAD"||Y==="BODY"||Y==="SCRIPT"||Y==="STYLE"||Y==="LINK"&&I.rel.toLowerCase()==="stylesheet"||f.removeChild(I),I=L}for(var te=r.type,j=f.attributes;j.length;)f.removeAttributeNode(j[0]);tn(f,te,p),f[jt]=r,f[Mt]=p}catch(de){nt(r,r.return,de)}}case 5:if(Wn(s,r),Xn(r),u&512&&(mt||o===null||On(o,o.return)),r.flags&32){f=r.stateNode;try{Bn(f,"")}catch(de){nt(r,r.return,de)}}u&4&&r.stateNode!=null&&(f=r.memoizedProps,NE(r,f,o!==null?o.memoizedProps:f)),u&1024&&(Ym=!0);break;case 6:if(Wn(s,r),Xn(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(de){nt(r,r.return,de)}}break;case 3:if(Hh=null,f=ui,ui=jh(s.containerInfo),Wn(s,r),ui=f,Xn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{bu(s.containerInfo)}catch(de){nt(r,r.return,de)}Ym&&(Ym=!1,UE(r));break;case 4:u=ui,ui=jh(r.stateNode.containerInfo),Wn(s,r),Xn(r),ui=u;break;case 12:Wn(s,r),Xn(r);break;case 13:Wn(s,r),Xn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(sp=Tn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Wm(r,u)));break;case 22:if(u&512&&(mt||o===null||On(o,o.return)),I=r.memoizedState!==null,L=o!==null&&o.memoizedState!==null,Y=cr,te=mt,cr=Y||I,mt=te||L,Wn(s,r),mt=te,cr=Y,Xn(r),s=r.stateNode,s._current=r,s._visibility&=-3,s._visibility|=s._pendingVisibility&2,u&8192&&(s._visibility=I?s._visibility&-2:s._visibility|1,I&&(s=cr||mt,o===null||L||s||So(r)),r.memoizedProps===null||r.memoizedProps.mode!=="manual"))e:for(o=null,s=r;;){if(s.tag===5||s.tag===26||s.tag===27){if(o===null){L=o=s;try{if(f=L.stateNode,I)p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{E=L.stateNode,S=L.memoizedProps.style;var K=S!=null&&S.hasOwnProperty("display")?S.display:null;E.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(de){nt(L,L.return,de)}}}else if(s.tag===6){if(o===null){L=s;try{L.stateNode.nodeValue=I?"":L.memoizedProps}catch(de){nt(L,L.return,de)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Wm(r,o))));break;case 19:Wn(s,r),Xn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,Wm(r,u)));break;case 21:break;default:Wn(s,r),Xn(r)}}function Xn(r){var s=r.flags;if(s&2){try{if(r.tag!==27){e:{for(var o=r.return;o!==null;){if(DE(o)){var u=o;break e}o=o.return}throw Error(i(160))}switch(u.tag){case 27:var f=u.stateNode,p=Qm(r);Ch(r,p,f);break;case 5:var E=u.stateNode;u.flags&32&&(Bn(E,""),u.flags&=-33);var S=Qm(r);Ch(r,S,E);break;case 3:case 4:var I=u.stateNode.containerInfo,L=Qm(r);$m(r,L,I);break;default:throw Error(i(161))}}}catch(Y){nt(r,r.return,Y)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function UE(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;UE(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function fr(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)ME(r,s.alternate,s),s=s.sibling}function So(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:as(4,s,s.return),So(s);break;case 1:On(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&CE(s,s.return,o),So(s);break;case 26:case 27:case 5:On(s,s.return),So(s);break;case 22:On(s,s.return),s.memoizedState===null&&So(s);break;default:So(s)}r=r.sibling}}function os(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,f=r,p=s,E=p.flags;switch(p.tag){case 0:case 11:case 15:os(f,p,o),au(4,p);break;case 1:if(os(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(L){nt(u,u.return,L)}if(u=p,f=u.updateQueue,f!==null){var S=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)bE(I[f],S)}catch(L){nt(u,u.return,L)}}o&&E&64&&RE(p),ma(p,p.return);break;case 26:case 27:case 5:os(f,p,o),o&&u===null&&E&4&&IE(p),ma(p,p.return);break;case 12:os(f,p,o);break;case 13:os(f,p,o),o&&E&4&&LE(f,p);break;case 22:p.memoizedState===null&&os(f,p,o),ma(p,p.return);break;default:os(f,p,o)}s=s.sibling}}function Xm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&Wl(o))}function Zm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Wl(r))}function ls(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)zE(r,s,o,u),s=s.sibling}function zE(r,s,o,u){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ls(r,s,o,u),f&2048&&au(9,s);break;case 3:ls(r,s,o,u),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&Wl(r)));break;case 12:if(f&2048){ls(r,s,o,u),r=s.stateNode;try{var p=s.memoizedProps,E=p.id,S=p.onPostCommit;typeof S=="function"&&S(E,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(I){nt(s,s.return,I)}}else ls(r,s,o,u);break;case 23:break;case 22:p=s.stateNode,s.memoizedState!==null?p._visibility&4?ls(r,s,o,u):ou(r,s):p._visibility&4?ls(r,s,o,u):(p._visibility|=4,bo(r,s,o,u,(s.subtreeFlags&10256)!==0)),f&2048&&Xm(s.alternate,s);break;case 24:ls(r,s,o,u),f&2048&&Zm(s.alternate,s);break;default:ls(r,s,o,u)}}function bo(r,s,o,u,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var p=r,E=s,S=o,I=u,L=E.flags;switch(E.tag){case 0:case 11:case 15:bo(p,E,S,I,f),au(8,E);break;case 23:break;case 22:var Y=E.stateNode;E.memoizedState!==null?Y._visibility&4?bo(p,E,S,I,f):ou(p,E):(Y._visibility|=4,bo(p,E,S,I,f)),f&&L&2048&&Xm(E.alternate,E);break;case 24:bo(p,E,S,I,f),f&&L&2048&&Zm(E.alternate,E);break;default:bo(p,E,S,I,f)}s=s.sibling}}function ou(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,f=u.flags;switch(u.tag){case 22:ou(o,u),f&2048&&Xm(u.alternate,u);break;case 24:ou(o,u),f&2048&&Zm(u.alternate,u);break;default:ou(o,u)}s=s.sibling}}var lu=8192;function Ao(r){if(r.subtreeFlags&lu)for(r=r.child;r!==null;)FE(r),r=r.sibling}function FE(r){switch(r.tag){case 26:Ao(r),r.flags&lu&&r.memoizedState!==null&&JI(ui,r.memoizedState,r.memoizedProps);break;case 5:Ao(r);break;case 3:case 4:var s=ui;ui=jh(r.stateNode.containerInfo),Ao(r),ui=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=lu,lu=16777216,Ao(r),lu=s):Ao(r));break;default:Ao(r)}}function BE(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function uu(r){var s=r.deletions;if(r.flags&16){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Kt=u,qE(u,r)}BE(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)jE(r),r=r.sibling}function jE(r){switch(r.tag){case 0:case 11:case 15:uu(r),r.flags&2048&&as(9,r,r.return);break;case 3:uu(r);break;case 12:uu(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&4&&(r.return===null||r.return.tag!==13)?(s._visibility&=-5,Ih(r)):uu(r);break;default:uu(r)}}function Ih(r){var s=r.deletions;if(r.flags&16){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Kt=u,qE(u,r)}BE(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:as(8,s,s.return),Ih(s);break;case 22:o=s.stateNode,o._visibility&4&&(o._visibility&=-5,Ih(s));break;default:Ih(s)}r=r.sibling}}function qE(r,s){for(;Kt!==null;){var o=Kt;switch(o.tag){case 0:case 11:case 15:as(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Wl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Kt=u;else e:for(o=r;Kt!==null;){u=Kt;var f=u.sibling,p=u.return;if(kE(u),u===o){Kt=null;break e}if(f!==null){f.return=p,Kt=f;break e}Kt=p}}}function fI(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(r,s,o,u){return new fI(r,s,o,u)}function Jm(r){return r=r.prototype,!(!r||!r.isReactComponent)}function us(r,s){var o=r.alternate;return o===null?(o=Zn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&31457280,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function HE(r,s){r.flags&=31457282;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Nh(r,s,o,u,f,p){var E=0;if(u=r,typeof r=="function")Jm(r)&&(E=1);else if(typeof r=="string")E=XI(r,o,mn.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case m:return pa(o.children,f,p,s);case g:E=8,f|=24;break;case y:return r=Zn(12,o,s,f|2),r.elementType=y,r.lanes=p,r;case q:return r=Zn(13,o,s,f),r.elementType=q,r.lanes=p,r;case z:return r=Zn(19,o,s,f),r.elementType=z,r.lanes=p,r;case X:return GE(o,f,p,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case T:case R:E=10;break e;case w:E=9;break e;case x:E=11;break e;case $:E=14;break e;case W:E=16,u=null;break e}E=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return s=Zn(E,o,s,f),s.elementType=r,s.type=u,s.lanes=p,s}function pa(r,s,o,u){return r=Zn(7,r,u,s),r.lanes=o,r}function GE(r,s,o,u){r=Zn(22,r,u,s),r.elementType=X,r.lanes=o;var f={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var p=f._current;if(p===null)throw Error(i(456));if(!(f._pendingVisibility&2)){var E=Xr(p,2);E!==null&&(f._pendingVisibility|=2,vn(E,p,2))}},attach:function(){var p=f._current;if(p===null)throw Error(i(456));if(f._pendingVisibility&2){var E=Xr(p,2);E!==null&&(f._pendingVisibility&=-3,vn(E,p,2))}}};return r.stateNode=f,r}function ep(r,s,o){return r=Zn(6,r,null,s),r.lanes=o,r}function tp(r,s,o){return s=Zn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function dr(r){r.flags|=4}function KE(r,s){if(s.type!=="stylesheet"||s.state.loading&4)r.flags&=-16777217;else if(r.flags|=16777216,!D0(s)){if(s=Yn.current,s!==null&&((je&4194176)===je?xi!==null:(je&62914560)!==je&&!(je&536870912)||s!==xi))throw Ql=am,uv;r.flags|=8192}}function Dh(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?zr():536870912,r.lanes|=s,Co|=s)}function cu(r,s){if(!Ke)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function ut(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&31457280,u|=f.flags&31457280,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function dI(r,s,o){var u=s.pendingProps;switch(rm(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(s),null;case 1:return ut(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),ur(Vt),Ki(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(ql(s)?dr(s):r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,li!==null&&(up(li),li=null))),ut(s),null;case 26:return o=s.memoizedState,r===null?(dr(s),o!==null?(ut(s),KE(s,o)):(ut(s),s.flags&=-16777217)):o?o!==r.memoizedState?(dr(s),ut(s),KE(s,o)):(ut(s),s.flags&=-16777217):(r.memoizedProps!==u&&dr(s),ut(s),s.flags&=-16777217),null;case 27:Ga(s),o=Un.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&dr(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ut(s),null}r=mn.current,ql(s)?ov(s):(r=w0(f,u,o),s.stateNode=r,dr(s))}return ut(s),null;case 5:if(Ga(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&dr(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return ut(s),null}if(r=mn.current,ql(s))ov(s);else{switch(f=Bh(Un.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}r[jt]=s,r[Mt]=u;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(tn(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&dr(s)}}return ut(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&dr(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(r=Un.current,ql(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,f=yn,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}r[jt]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||g0(r.nodeValue,o)),r||sa(s)}else r=Bh(r).createTextNode(u),r[jt]=s,s.stateNode=r}return ut(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=ql(s),u!==null&&u.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[jt]=s}else Hl(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;ut(s),f=!1}else li!==null&&(up(li),li=null),f=!0;if(!f)return s.flags&256?(sr(s),s):(sr(s),null)}if(sr(s),s.flags&128)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Dh(s,s.updateQueue),ut(s),null;case 4:return Ki(),r===null&&Ep(s.stateNode.containerInfo),ut(s),null;case 10:return ur(s.type),ut(s),null;case 19:if(ft(Lt),f=s.memoizedState,f===null)return ut(s),null;if(u=(s.flags&128)!==0,p=f.rendering,p===null)if(u)cu(f,!1);else{if(pt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(p=dh(r),p!==null){for(s.flags|=128,cu(f,!1),r=p.updateQueue,s.updateQueue=r,Dh(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)HE(o,r),o=o.sibling;return Ze(Lt,Lt.current&1|2),s.child}r=r.sibling}f.tail!==null&&Tn()>xh&&(s.flags|=128,u=!0,cu(f,!1),s.lanes=4194304)}else{if(!u)if(r=dh(p),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Dh(s,r),cu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!Ke)return ut(s),null}else 2*Tn()-f.renderingStartTime>xh&&o!==536870912&&(s.flags|=128,u=!0,cu(f,!1),s.lanes=4194304);f.isBackwards?(p.sibling=s.child,s.child=p):(r=f.last,r!==null?r.sibling=p:s.child=p,f.last=p)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=Tn(),s.sibling=null,r=Lt.current,Ze(Lt,u?r&1|2:r&1),s):(ut(s),null);case 22:case 23:return sr(s),lm(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?o&536870912&&!(s.flags&128)&&(ut(s),s.subtreeFlags&6&&(s.flags|=8192)):ut(s),o=s.updateQueue,o!==null&&Dh(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&ft(oa),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),ur(Vt),ut(s),null;case 25:return null}throw Error(i(156,s.tag))}function mI(r,s){switch(rm(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return ur(Vt),Ki(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return Ga(s),null;case 13:if(sr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));Hl()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return ft(Lt),null;case 4:return Ki(),null;case 10:return ur(s.type),null;case 22:case 23:return sr(s),lm(),r!==null&&ft(oa),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return ur(Vt),null;case 25:return null;default:return null}}function QE(r,s){switch(rm(s),s.tag){case 3:ur(Vt),Ki();break;case 26:case 27:case 5:Ga(s);break;case 4:Ki();break;case 13:sr(s);break;case 19:ft(Lt);break;case 10:ur(s.type);break;case 22:case 23:sr(s),lm(),r!==null&&ft(oa);break;case 24:ur(Vt)}}var pI={getCacheForType:function(r){var s=ln(Vt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},gI=typeof WeakMap=="function"?WeakMap:Map,ct=0,it=null,Me=null,je=0,rt=0,kn=null,mr=!1,Ro=!1,np=!1,pr=0,pt=0,cs=0,ga=0,ip=0,Jn=0,Co=0,hu=null,Mi=null,rp=!1,sp=0,xh=1/0,Oh=null,hs=null,Mh=!1,_a=null,fu=0,ap=0,op=null,du=0,lp=null;function Pn(){if(ct&2&&je!==0)return je&-je;if(A.T!==null){var r=yo;return r!==0?r:gp()}return zc()}function $E(){Jn===0&&(Jn=!(je&536870912)||Ke?Al():536870912);var r=Yn.current;return r!==null&&(r.flags|=32),Jn}function vn(r,s,o){(r===it&&rt===2||r.cancelPendingCommit!==null)&&(Io(r,0),gr(r,je,Jn,!1)),vt(r,o),(!(ct&2)||r!==it)&&(r===it&&(!(ct&2)&&(ga|=o),pt===4&&gr(r,je,Jn,!1)),ki(r))}function YE(r,s,o){if(ct&6)throw Error(i(327));var u=!o&&(s&60)===0&&(s&r.expiredLanes)===0||Ur(r,s),f=u?vI(r,s):fp(r,s,!0),p=u;do{if(f===0){Ro&&!u&&gr(r,s,0,!1);break}else if(f===6)gr(r,s,0,!mr);else{if(o=r.current.alternate,p&&!_I(o)){f=fp(r,s,!1),p=!1;continue}if(f===2){if(p=s,r.errorRecoveryDisabledLanes&p)var E=0;else E=r.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){s=E;e:{var S=r;f=hu;var I=S.current.memoizedState.isDehydrated;if(I&&(Io(S,E).flags|=256),E=fp(S,E,!1),E!==2){if(np&&!I){S.errorRecoveryDisabledLanes|=p,ga|=p,f=4;break e}p=Mi,Mi=f,p!==null&&up(p)}f=E}if(p=!1,f!==2)continue}}if(f===1){Io(r,0),gr(r,s,0,!0);break}e:{switch(u=r,f){case 0:case 1:throw Error(i(345));case 4:if((s&4194176)===s){gr(u,s,Jn,!mr);break e}break;case 2:Mi=null;break;case 3:case 5:break;default:throw Error(i(329))}if(u.finishedWork=o,u.finishedLanes=s,(s&62914560)===s&&(p=sp+300-Tn(),10<p)){if(gr(u,s,Jn,!mr),zn(u,0)!==0)break e;u.timeoutHandle=v0(WE.bind(null,u,o,Mi,Oh,rp,s,Jn,ga,Co,mr,2,-0,0),p);break e}WE(u,o,Mi,Oh,rp,s,Jn,ga,Co,mr,0,-0,0)}}break}while(!0);ki(r)}function up(r){Mi===null?Mi=r:Mi.push.apply(Mi,r)}function WE(r,s,o,u,f,p,E,S,I,L,Y,te,j){var K=s.subtreeFlags;if((K&8192||(K&16785408)===16785408)&&(vu={stylesheets:null,count:0,unsuspend:ZI},FE(s),s=e1(),s!==null)){r.cancelPendingCommit=s(i0.bind(null,r,o,u,f,E,S,I,1,te,j)),gr(r,p,E,!L);return}i0(r,o,u,f,E,S,I,Y,te,j)}function _I(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!xn(p(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function gr(r,s,o,u){s&=~ip,s&=~ga,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var f=s;0<f;){var p=31-pn(f),E=1<<p;u[p]=-1,f&=~E}o!==0&&Fr(r,o,s)}function kh(){return ct&6?!0:(mu(0),!1)}function cp(){if(Me!==null){if(rt===0)var r=Me.return;else r=Me,lr=fa=null,gm(r),go=null,$l=0,r=Me;for(;r!==null;)QE(r.alternate,r),r=r.return;Me=null}}function Io(r,s){r.finishedWork=null,r.finishedLanes=0;var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,LI(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),cp(),it=r,Me=o=us(r.current,null),je=s,rt=0,kn=null,mr=!1,Ro=Ur(r,s),np=!1,Co=Jn=ip=ga=cs=pt=0,Mi=hu=null,rp=!1,s&8&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var f=31-pn(u),p=1<<f;s|=r[f],u&=~p}return pr=s,rh(),o}function XE(r,s){De=null,A.H=Oi,s===Kl?(s=fv(),rt=3):s===uv?(s=fv(),rt=4):rt=s===cE?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,kn=s,Me===null&&(pt=1,bh(r,Kn(s,r.current)))}function ZE(){var r=A.H;return A.H=Oi,r===null?Oi:r}function JE(){var r=A.A;return A.A=pI,r}function hp(){pt=4,mr||(je&4194176)!==je&&Yn.current!==null||(Ro=!0),!(cs&134217727)&&!(ga&134217727)||it===null||gr(it,je,Jn,!1)}function fp(r,s,o){var u=ct;ct|=2;var f=ZE(),p=JE();(it!==r||je!==s)&&(Oh=null,Io(r,s)),s=!1;var E=pt;e:do try{if(rt!==0&&Me!==null){var S=Me,I=kn;switch(rt){case 8:cp(),E=6;break e;case 3:case 2:case 6:Yn.current===null&&(s=!0);var L=rt;if(rt=0,kn=null,No(r,S,I,L),o&&Ro){E=0;break e}break;default:L=rt,rt=0,kn=null,No(r,S,I,L)}}yI(),E=pt;break}catch(Y){XE(r,Y)}while(!0);return s&&r.shellSuspendCounter++,lr=fa=null,ct=u,A.H=f,A.A=p,Me===null&&(it=null,je=0,rh()),E}function yI(){for(;Me!==null;)e0(Me)}function vI(r,s){var o=ct;ct|=2;var u=ZE(),f=JE();it!==r||je!==s?(Oh=null,xh=Tn()+500,Io(r,s)):Ro=Ur(r,s);e:do try{if(rt!==0&&Me!==null){s=Me;var p=kn;t:switch(rt){case 1:rt=0,kn=null,No(r,s,p,1);break;case 2:if(cv(p)){rt=0,kn=null,t0(s);break}s=function(){rt===2&&it===r&&(rt=7),ki(r)},p.then(s,s);break e;case 3:rt=7;break e;case 4:rt=5;break e;case 7:cv(p)?(rt=0,kn=null,t0(s)):(rt=0,kn=null,No(r,s,p,7));break;case 5:var E=null;switch(Me.tag){case 26:E=Me.memoizedState;case 5:case 27:var S=Me;if(!E||D0(E)){rt=0,kn=null;var I=S.sibling;if(I!==null)Me=I;else{var L=S.return;L!==null?(Me=L,Ph(L)):Me=null}break t}}rt=0,kn=null,No(r,s,p,5);break;case 6:rt=0,kn=null,No(r,s,p,6);break;case 8:cp(),pt=6;break e;default:throw Error(i(462))}}EI();break}catch(Y){XE(r,Y)}while(!0);return lr=fa=null,A.H=u,A.A=f,ct=o,Me!==null?0:(it=null,je=0,rh(),pt)}function EI(){for(;Me!==null&&!Fd();)e0(Me)}function e0(r){var s=wE(r.alternate,r,pr);r.memoizedProps=r.pendingProps,s===null?Ph(r):Me=s}function t0(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=gE(o,s,s.pendingProps,s.type,void 0,je);break;case 11:s=gE(o,s,s.pendingProps,s.type.render,s.ref,je);break;case 5:gm(s);default:QE(o,s),s=Me=HE(s,pr),s=wE(o,s,pr)}r.memoizedProps=r.pendingProps,s===null?Ph(r):Me=s}function No(r,s,o,u){lr=fa=null,gm(s),go=null,$l=0;var f=s.return;try{if(lI(r,f,s,o,je)){pt=1,bh(r,Kn(o,r.current)),Me=null;return}}catch(p){if(f!==null)throw Me=f,p;pt=1,bh(r,Kn(o,r.current)),Me=null;return}s.flags&32768?(Ke||u===1?r=!0:Ro||je&536870912?r=!1:(mr=r=!0,(u===2||u===3||u===6)&&(u=Yn.current,u!==null&&u.tag===13&&(u.flags|=16384))),n0(s,r)):Ph(s)}function Ph(r){var s=r;do{if(s.flags&32768){n0(s,mr);return}r=s.return;var o=dI(s.alternate,s,pr);if(o!==null){Me=o;return}if(s=s.sibling,s!==null){Me=s;return}Me=s=r}while(s!==null);pt===0&&(pt=5)}function n0(r,s){do{var o=mI(r.alternate,r);if(o!==null){o.flags&=32767,Me=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Me=r;return}Me=r=o}while(r!==null);pt=6,Me=null}function i0(r,s,o,u,f,p,E,S,I,L){var Y=A.T,te=le.p;try{le.p=2,A.T=null,TI(r,s,o,u,te,f,p,E,S,I,L)}finally{A.T=Y,le.p=te}}function TI(r,s,o,u,f,p,E,S){do Do();while(_a!==null);if(ct&6)throw Error(i(327));var I=r.finishedWork;if(u=r.finishedLanes,I===null)return null;if(r.finishedWork=null,r.finishedLanes=0,I===r.current)throw Error(i(177));r.callbackNode=null,r.callbackPriority=0,r.cancelPendingCommit=null;var L=I.lanes|I.childLanes;if(L|=tm,Vc(r,u,L,p,E,S),r===it&&(Me=it=null,je=0),!(I.subtreeFlags&10256)&&!(I.flags&10256)||Mh||(Mh=!0,ap=L,op=o,AI(Qi,function(){return Do(),null})),o=(I.flags&15990)!==0,I.subtreeFlags&15990||o?(o=A.T,A.T=null,p=le.p,le.p=2,E=ct,ct|=4,cI(r,I),VE(I,r),GC(bp,r.containerInfo),Qh=!!Sp,bp=Sp=null,r.current=I,ME(r,I.alternate,I),Tl(),ct=E,le.p=p,A.T=o):r.current=I,Mh?(Mh=!1,_a=r,fu=u):r0(r,L),L=r.pendingLanes,L===0&&(hs=null),Sl(I.stateNode),ki(r),s!==null)for(f=r.onRecoverableError,I=0;I<s.length;I++)L=s[I],f(L.value,{componentStack:L.stack});return fu&3&&Do(),L=r.pendingLanes,u&4194218&&L&42?r===lp?du++:(du=0,lp=r):du=0,mu(0),null}function r0(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,Wl(s)))}function Do(){if(_a!==null){var r=_a,s=ap;ap=0;var o=Uc(fu),u=A.T,f=le.p;try{if(le.p=32>o?32:o,A.T=null,_a===null)var p=!1;else{o=op,op=null;var E=_a,S=fu;if(_a=null,fu=0,ct&6)throw Error(i(331));var I=ct;if(ct|=4,jE(E.current),zE(E,E.current,S,o),ct=I,mu(0,!1),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Lr,E)}catch{}p=!0}return p}finally{le.p=f,A.T=u,r0(r,s)}}return!1}function s0(r,s,o){s=Kn(o,s),s=Dm(r.stateNode,s,2),r=ss(r,s,2),r!==null&&(vt(r,2),ki(r))}function nt(r,s,o){if(r.tag===3)s0(r,r,o);else for(;s!==null;){if(s.tag===3){s0(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(hs===null||!hs.has(u))){r=Kn(o,r),o=lE(2),u=ss(s,o,2),u!==null&&(uE(o,u,s,r),vt(u,2),ki(u));break}}s=s.return}}function dp(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new gI;var f=new Set;u.set(s,f)}else f=u.get(s),f===void 0&&(f=new Set,u.set(s,f));f.has(o)||(np=!0,f.add(o),r=wI.bind(null,r,s,o),s.then(r,r))}function wI(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,it===r&&(je&o)===o&&(pt===4||pt===3&&(je&62914560)===je&&300>Tn()-sp?!(ct&2)&&Io(r,0):ip|=o,Co===je&&(Co=0)),ki(r)}function a0(r,s){s===0&&(s=zr()),r=Xr(r,s),r!==null&&(vt(r,s),ki(r))}function SI(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),a0(r,o)}function bI(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),a0(r,o)}function AI(r,s){return Bs(r,s)}var Lh=null,xo=null,mp=!1,Vh=!1,pp=!1,ya=0;function ki(r){r!==xo&&r.next===null&&(xo===null?Lh=xo=r:xo=xo.next=r),Vh=!0,mp||(mp=!0,CI(RI))}function mu(r,s){if(!pp&&Vh){pp=!0;do for(var o=!1,u=Lh;u!==null;){if(r!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var E=u.suspendedLanes,S=u.pingedLanes;p=(1<<31-pn(42|r)+1)-1,p&=f&~(E&~S),p=p&201326677?p&201326677|1:p?p|2:0}p!==0&&(o=!0,u0(u,p))}else p=je,p=zn(u,u===it?p:0),!(p&3)||Ur(u,p)||(o=!0,u0(u,p));u=u.next}while(o);pp=!1}}function RI(){Vh=mp=!1;var r=0;ya!==0&&(PI()&&(r=ya),ya=0);for(var s=Tn(),o=null,u=Lh;u!==null;){var f=u.next,p=o0(u,s);p===0?(u.next=null,o===null?Lh=f:o.next=f,f===null&&(xo=o)):(o=u,(r!==0||p&3)&&(Vh=!0)),u=f}mu(r)}function o0(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,f=r.expirationTimes,p=r.pendingLanes&-62914561;0<p;){var E=31-pn(p),S=1<<E,I=f[E];I===-1?(!(S&o)||S&u)&&(f[E]=$a(S,s)):I<=s&&(r.expiredLanes|=S),p&=~S}if(s=it,o=je,o=zn(r,r===s?o:0),u=r.callbackNode,o===0||r===s&&rt===2||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Qa(u),r.callbackNode=null,r.callbackPriority=0;if(!(o&3)||Ur(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&Qa(u),Uc(o)){case 2:case 8:o=Bt;break;case 32:o=Qi;break;case 268435456:o=wl;break;default:o=Qi}return u=l0.bind(null,r),o=Bs(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&Qa(u),r.callbackPriority=2,r.callbackNode=null,2}function l0(r,s){var o=r.callbackNode;if(Do()&&r.callbackNode!==o)return null;var u=je;return u=zn(r,r===it?u:0),u===0?null:(YE(r,u,s),o0(r,Tn()),r.callbackNode!=null&&r.callbackNode===o?l0.bind(null,r):null)}function u0(r,s){if(Do())return null;YE(r,s,!0)}function CI(r){VI(function(){ct&6?Bs(Ot,r):r()})}function gp(){return ya===0&&(ya=Al()),ya}function c0(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Si(""+r)}function h0(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function II(r,s,o,u,f){if(s==="submit"&&o&&o.stateNode===f){var p=c0((f[Mt]||null).action),E=u.submitter;E&&(s=(s=E[Mt]||null)?c0(s.formAction):E.getAttribute("formAction"),s!==null&&(p=s,E=null));var S=new to("action","action",null,u,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ya!==0){var I=E?h0(f,E):new FormData(f);Am(o,{pending:!0,data:I,method:f.method,action:p},null,I)}}else typeof p=="function"&&(S.preventDefault(),I=E?h0(f,E):new FormData(f),Am(o,{pending:!0,data:I,method:f.method,action:p},p,I))},currentTarget:f}]})}}for(var _p=0;_p<iv.length;_p++){var yp=iv[_p],NI=yp.toLowerCase(),DI=yp[0].toUpperCase()+yp.slice(1);oi(NI,"on"+DI)}oi(Zy,"onAnimationEnd"),oi(Jy,"onAnimationIteration"),oi(ev,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(QC,"onTransitionRun"),oi($C,"onTransitionStart"),oi(YC,"onTransitionCancel"),oi(tv,"onTransitionEnd"),wn("onMouseEnter",["mouseout","mouseover"]),wn("onMouseLeave",["mouseout","mouseover"]),wn("onPointerEnter",["pointerout","pointerover"]),wn("onPointerLeave",["pointerout","pointerover"]),Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xI=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pu));function f0(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],f=u.event;u=u.listeners;e:{var p=void 0;if(s)for(var E=u.length-1;0<=E;E--){var S=u[E],I=S.instance,L=S.currentTarget;if(S=S.listener,I!==p&&f.isPropagationStopped())break e;p=S,f.currentTarget=L;try{p(f)}catch(Y){Sh(Y)}f.currentTarget=null,p=I}else for(E=0;E<u.length;E++){if(S=u[E],I=S.instance,L=S.currentTarget,S=S.listener,I!==p&&f.isPropagationStopped())break e;p=S,f.currentTarget=L;try{p(f)}catch(Y){Sh(Y)}f.currentTarget=null,p=I}}}}function Ve(r,s){var o=s[qs];o===void 0&&(o=s[qs]=new Set);var u=r+"__bubble";o.has(u)||(d0(s,r,2,!1),o.add(u))}function vp(r,s,o){var u=0;s&&(u|=4),d0(o,r,u,s)}var Uh="_reactListening"+Math.random().toString(36).slice(2);function Ep(r){if(!r[Uh]){r[Uh]=!0,Cl.forEach(function(o){o!=="selectionchange"&&(xI.has(o)||vp(o,!1,r),vp(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[Uh]||(s[Uh]=!0,vp("selectionchange",!1,s))}}function d0(r,s,o,u){switch(L0(s)){case 2:var f=i1;break;case 8:f=r1;break;default:f=Mp}o=f.bind(null,s,o,r),f=void 0,!qn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),u?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function Tp(r,s,o,u,f){var p=u;if(!(s&1)&&!(s&2)&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f||S.nodeType===8&&S.parentNode===f)break;if(E===4)for(E=u.return;E!==null;){var I=E.tag;if((I===3||I===4)&&(I=E.stateNode.containerInfo,I===f||I.nodeType===8&&I.parentNode===f))return;E=E.return}for(;S!==null;){if(E=ai(S),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){u=p=E;continue e}S=S.parentNode}}u=u.return}qc(function(){var L=p,Y=eo(o),te=[];e:{var j=nv.get(r);if(j!==void 0){var K=to,de=r;switch(r){case"keypress":if(Ai(o)===0)break e;case"keydown":case"keyup":K=oo;break;case"focusin":de="focus",K=ro;break;case"focusout":de="blur",K=ro;break;case"beforeblur":case"afterblur":K=ro;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Qd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Xc;break;case Zy:case Jy:case ev:K=so;break;case tv:K=Jc;break;case"scroll":case"scrollend":K=Hc;break;case"wheel":K=lo;break;case"copy":case"cut":case"paste":K=ao;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=zl;break;case"toggle":case"beforetoggle":K=th}var Ae=(s&4)!==0,gt=!Ae&&(r==="scroll"||r==="scrollend"),V=Ae?j!==null?j+"Capture":null:j;Ae=[];for(var k=L,B;k!==null;){var Z=k;if(B=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||B===null||V===null||(Z=$s(k,V),Z!=null&&Ae.push(gu(k,Z,B))),gt)break;k=k.return}0<Ae.length&&(j=new K(j,de,null,o,Y),te.push({event:j,listeners:Ae}))}}if(!(s&7)){e:{if(j=r==="mouseover"||r==="pointerover",K=r==="mouseout"||r==="pointerout",j&&o!==jn&&(de=o.relatedTarget||o.fromElement)&&(ai(de)||de[$i]))break e;if((K||j)&&(j=Y.window===Y?Y:(j=Y.ownerDocument)?j.defaultView||j.parentWindow:window,K?(de=o.relatedTarget||o.toElement,K=L,de=de?ai(de):null,de!==null&&(gt=ge(de),Ae=de.tag,de!==gt||Ae!==5&&Ae!==27&&Ae!==6)&&(de=null)):(K=null,de=L),K!==de)){if(Ae=Hn,Z="onMouseLeave",V="onMouseEnter",k="mouse",(r==="pointerout"||r==="pointerover")&&(Ae=zl,Z="onPointerLeave",V="onPointerEnter",k="pointer"),gt=K==null?j:Hr(K),B=de==null?j:Hr(de),j=new Ae(Z,k+"leave",K,o,Y),j.target=gt,j.relatedTarget=B,Z=null,ai(Y)===L&&(Ae=new Ae(V,k+"enter",de,o,Y),Ae.target=B,Ae.relatedTarget=gt,Z=Ae),gt=Z,K&&de)t:{for(Ae=K,V=de,k=0,B=Ae;B;B=Oo(B))k++;for(B=0,Z=V;Z;Z=Oo(Z))B++;for(;0<k-B;)Ae=Oo(Ae),k--;for(;0<B-k;)V=Oo(V),B--;for(;k--;){if(Ae===V||V!==null&&Ae===V.alternate)break t;Ae=Oo(Ae),V=Oo(V)}Ae=null}else Ae=null;K!==null&&m0(te,j,K,Ae,!1),de!==null&&gt!==null&&m0(te,gt,de,Ae,!0)}}e:{if(j=L?Hr(L):window,K=j.nodeName&&j.nodeName.toLowerCase(),K==="select"||K==="input"&&j.type==="file")var ce=By;else if(Pt(j))if(jy)ce=qC;else{ce=BC;var xe=FC}else K=j.nodeName,!K||K.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?L&&Ol(L.elementType)&&(ce=By):ce=jC;if(ce&&(ce=ce(r,L))){nr(te,ce,o,Y);break e}xe&&xe(r,j,L),r==="focusout"&&L&&j.type==="number"&&L.memoizedProps.value!=null&&Ja(j,"number",j.value)}switch(xe=L?Hr(L):window,r){case"focusin":(Pt(xe)||xe.contentEditable==="true")&&(uo=xe,Zd=L,jl=null);break;case"focusout":jl=Zd=uo=null;break;case"mousedown":Jd=!0;break;case"contextmenu":case"mouseup":case"dragend":Jd=!1,Wy(te,o,Y);break;case"selectionchange":if(KC)break;case"keydown":case"keyup":Wy(te,o,Y)}var pe;if(Ii)e:{switch(r){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Fe?H(r,o)&&(ye="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(ye="onCompositionStart");ye&&(v&&o.locale!=="ko"&&(Fe||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Fe&&(pe=kl()):(bi=Y,Wr="value"in bi?bi.value:bi.textContent,Fe=!0)),xe=zh(L,ye),0<xe.length&&(ye=new Vl(ye,r,null,o,Y),te.push({event:ye,listeners:xe}),pe?ye.data=pe:(pe=re(o),pe!==null&&(ye.data=pe)))),(pe=_?kt(r,o):Be(r,o))&&(ye=zh(L,"onBeforeInput"),0<ye.length&&(xe=new Vl("onBeforeInput","beforeinput",null,o,Y),te.push({event:xe,listeners:ye}),xe.data=pe)),II(te,r,L,o,Y)}f0(te,s)})}function gu(r,s,o){return{instance:r,listener:s,currentTarget:o}}function zh(r,s){for(var o=s+"Capture",u=[];r!==null;){var f=r,p=f.stateNode;f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=$s(r,o),f!=null&&u.unshift(gu(r,f,p)),f=$s(r,s),f!=null&&u.push(gu(r,f,p))),r=r.return}return u}function Oo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function m0(r,s,o,u,f){for(var p=s._reactName,E=[];o!==null&&o!==u;){var S=o,I=S.alternate,L=S.stateNode;if(S=S.tag,I!==null&&I===u)break;S!==5&&S!==26&&S!==27||L===null||(I=L,f?(L=$s(o,p),L!=null&&E.unshift(gu(o,L,I))):f||(L=$s(o,p),L!=null&&E.push(gu(o,L,I)))),o=o.return}E.length!==0&&r.push({event:s,listeners:E})}var OI=/\r\n?/g,MI=/\u0000|\uFFFD/g;function p0(r){return(typeof r=="string"?r:""+r).replace(OI,`
`).replace(MI,"")}function g0(r,s){return s=p0(s),p0(r)===s}function Fh(){}function et(r,s,o,u,f,p){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||Bn(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&Bn(r,""+u);break;case"className":Qr(r,"class",u);break;case"tabIndex":Qr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Qr(r,o,u);break;case"style":jc(r,u,p);break;case"data":if(s!=="object"){Qr(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Si(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(s!=="input"&&et(r,s,"name",f.name,f,null),et(r,s,"formEncType",f.formEncType,f,null),et(r,s,"formMethod",f.formMethod,f,null),et(r,s,"formTarget",f.formTarget,f,null)):(et(r,s,"encType",f.encType,f,null),et(r,s,"method",f.method,f,null),et(r,s,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Si(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=Fh);break;case"onScroll":u!=null&&Ve("scroll",r);break;case"onScrollEnd":u!=null&&Ve("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Si(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Ve("beforetoggle",r),Ve("toggle",r),Kr(r,"popover",u);break;case"xlinkActuate":Fn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Fn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Fn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Fn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Fn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Fn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Fn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Fn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Fn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Kr(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Gd.get(o)||o,Kr(r,o,u))}}function wp(r,s,o,u,f,p){switch(o){case"style":jc(r,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?Bn(r,u):(typeof u=="number"||typeof u=="bigint")&&Bn(r,""+u);break;case"onScroll":u!=null&&Ve("scroll",r);break;case"onScrollEnd":u!=null&&Ve("scrollend",r);break;case"onClick":u!=null&&(r.onclick=Fh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xa.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),p=r[Mt]||null,p=p!=null?p[o]:null,typeof p=="function"&&r.removeEventListener(s,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,f);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Kr(r,o,u)}}}function tn(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",r),Ve("load",r);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var E=o[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:et(r,s,p,E,o,null)}}f&&et(r,s,"srcSet",o.srcSet,o,null),u&&et(r,s,"src",o.src,o,null);return;case"input":Ve("invalid",r);var S=p=E=f=null,I=null,L=null;for(u in o)if(o.hasOwnProperty(u)){var Y=o[u];if(Y!=null)switch(u){case"name":f=Y;break;case"type":E=Y;break;case"checked":I=Y;break;case"defaultChecked":L=Y;break;case"value":p=Y;break;case"defaultValue":S=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,s));break;default:et(r,s,u,Y,o,null)}}Ks(r,p,S,I,L,E,f,!1),Gs(r);return;case"select":Ve("invalid",r),u=E=p=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":p=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:et(r,s,f,S,o,null)}s=p,o=E,r.multiple=!!u,s!=null?Ge(r,!!u,s,!1):o!=null&&Ge(r,!!u,o,!0);return;case"textarea":Ve("invalid",r),p=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":p=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:et(r,s,E,S,o,null)}Yr(r,u,f,p),Gs(r);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:et(r,s,I,u,o,null)}return;case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":Ve("load",r);break;case"video":case"audio":for(u=0;u<pu.length;u++)Ve(pu[u],r);break;case"image":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"embed":case"source":case"link":Ve("error",r),Ve("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in o)if(o.hasOwnProperty(L)&&(u=o[L],u!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:et(r,s,L,u,o,null)}return;default:if(Ol(s)){for(Y in o)o.hasOwnProperty(Y)&&(u=o[Y],u!==void 0&&wp(r,s,Y,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&et(r,s,S,u,o,null))}function kI(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,E=null,S=null,I=null,L=null,Y=null;for(K in o){var te=o[K];if(o.hasOwnProperty(K)&&te!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":I=te;default:u.hasOwnProperty(K)||et(r,s,K,null,u,te)}}for(var j in u){var K=u[j];if(te=o[j],u.hasOwnProperty(j)&&(K!=null||te!=null))switch(j){case"type":p=K;break;case"name":f=K;break;case"checked":L=K;break;case"defaultChecked":Y=K;break;case"value":E=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,s));break;default:K!==te&&et(r,s,j,K,u,te)}}$r(r,E,S,I,L,Y,p,f);return;case"select":K=E=S=j=null;for(p in o)if(I=o[p],o.hasOwnProperty(p)&&I!=null)switch(p){case"value":break;case"multiple":K=I;default:u.hasOwnProperty(p)||et(r,s,p,null,u,I)}for(f in u)if(p=u[f],I=o[f],u.hasOwnProperty(f)&&(p!=null||I!=null))switch(f){case"value":j=p;break;case"defaultValue":S=p;break;case"multiple":E=p;default:p!==I&&et(r,s,f,p,u,I)}s=S,o=E,u=K,j!=null?Ge(r,!!o,j,!1):!!u!=!!o&&(s!=null?Ge(r,!!o,s,!0):Ge(r,!!o,o?[]:"",!1));return;case"textarea":K=j=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:et(r,s,S,null,u,f)}for(E in u)if(f=u[E],p=o[E],u.hasOwnProperty(E)&&(f!=null||p!=null))switch(E){case"value":j=f;break;case"defaultValue":K=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==p&&et(r,s,E,f,u,p)}Qs(r,j,K);return;case"option":for(var de in o)if(j=o[de],o.hasOwnProperty(de)&&j!=null&&!u.hasOwnProperty(de))switch(de){case"selected":r.selected=!1;break;default:et(r,s,de,null,u,j)}for(I in u)if(j=u[I],K=o[I],u.hasOwnProperty(I)&&j!==K&&(j!=null||K!=null))switch(I){case"selected":r.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:et(r,s,I,j,u,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in o)j=o[Ae],o.hasOwnProperty(Ae)&&j!=null&&!u.hasOwnProperty(Ae)&&et(r,s,Ae,null,u,j);for(L in u)if(j=u[L],K=o[L],u.hasOwnProperty(L)&&j!==K&&(j!=null||K!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(i(137,s));break;default:et(r,s,L,j,u,K)}return;default:if(Ol(s)){for(var gt in o)j=o[gt],o.hasOwnProperty(gt)&&j!==void 0&&!u.hasOwnProperty(gt)&&wp(r,s,gt,void 0,u,j);for(Y in u)j=u[Y],K=o[Y],!u.hasOwnProperty(Y)||j===K||j===void 0&&K===void 0||wp(r,s,Y,j,u,K);return}}for(var V in o)j=o[V],o.hasOwnProperty(V)&&j!=null&&!u.hasOwnProperty(V)&&et(r,s,V,null,u,j);for(te in u)j=u[te],K=o[te],!u.hasOwnProperty(te)||j===K||j==null&&K==null||et(r,s,te,j,u,K)}var Sp=null,bp=null;function Bh(r){return r.nodeType===9?r:r.ownerDocument}function _0(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y0(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Ap(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Rp=null;function PI(){var r=window.event;return r&&r.type==="popstate"?r===Rp?!1:(Rp=r,!0):(Rp=null,!1)}var v0=typeof setTimeout=="function"?setTimeout:void 0,LI=typeof clearTimeout=="function"?clearTimeout:void 0,E0=typeof Promise=="function"?Promise:void 0,VI=typeof queueMicrotask=="function"?queueMicrotask:typeof E0<"u"?function(r){return E0.resolve(null).then(r).catch(UI)}:v0;function UI(r){setTimeout(function(){throw r})}function Cp(r,s){var o=s,u=0;do{var f=o.nextSibling;if(r.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){r.removeChild(f),bu(s);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);bu(s)}function Ip(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Ip(o),Hs(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function zI(r,s,o,u){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[qr])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(p=r.getAttribute("rel"),p==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(p!==f.rel||r.getAttribute("href")!==(f.href==null?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(p=r.getAttribute("src"),(p!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===p)return r}else return r;if(r=ci(r.nextSibling),r===null)break}return null}function FI(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=ci(r.nextSibling),r===null))return null;return r}function ci(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}function T0(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function w0(r,s,o){switch(s=Bh(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}var ei=new Map,S0=new Set;function jh(r){return typeof r.getRootNode=="function"?r.getRootNode():r.ownerDocument}var _r=le.d;le.d={f:BI,r:jI,D:qI,C:HI,L:GI,m:KI,X:$I,S:QI,M:YI};function BI(){var r=_r.f(),s=kh();return r||s}function jI(r){var s=Yi(r);s!==null&&s.tag===5&&s.type==="form"?Wv(s):_r.r(r)}var Mo=typeof document>"u"?null:document;function b0(r,s,o){var u=Mo;if(u&&typeof s=="string"&&s){var f=dt(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),S0.has(f)||(S0.add(f),r={rel:r,crossOrigin:o,href:s},u.querySelector(f)===null&&(s=u.createElement("link"),tn(s,"link",r),lt(s),u.head.appendChild(s)))}}function qI(r){_r.D(r),b0("dns-prefetch",r,null)}function HI(r,s){_r.C(r,s),b0("preconnect",r,s)}function GI(r,s,o){_r.L(r,s,o);var u=Mo;if(u&&r&&s){var f='link[rel="preload"][as="'+dt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+dt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+dt(o.imageSizes)+'"]')):f+='[href="'+dt(r)+'"]';var p=f;switch(s){case"style":p=ko(r);break;case"script":p=Po(r)}ei.has(p)||(r=N({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),ei.set(p,r),u.querySelector(f)!==null||s==="style"&&u.querySelector(_u(p))||s==="script"&&u.querySelector(yu(p))||(s=u.createElement("link"),tn(s,"link",r),lt(s),u.head.appendChild(s)))}}function KI(r,s){_r.m(r,s);var o=Mo;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+dt(u)+'"][href="'+dt(r)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Po(r)}if(!ei.has(p)&&(r=N({rel:"modulepreload",href:r},s),ei.set(p,r),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(yu(p)))return}u=o.createElement("link"),tn(u,"link",r),lt(u),o.head.appendChild(u)}}}function QI(r,s,o){_r.S(r,s,o);var u=Mo;if(u&&r){var f=Gr(u).hoistableStyles,p=ko(r);s=s||"default";var E=f.get(p);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(_u(p)))S.loading=5;else{r=N({rel:"stylesheet",href:r,"data-precedence":s},o),(o=ei.get(p))&&Np(r,o);var I=E=u.createElement("link");lt(I),tn(I,"link",r),I._p=new Promise(function(L,Y){I.onload=L,I.onerror=Y}),I.addEventListener("load",function(){S.loading|=1}),I.addEventListener("error",function(){S.loading|=2}),S.loading|=4,qh(E,s,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(p,E)}}}function $I(r,s){_r.X(r,s);var o=Mo;if(o&&r){var u=Gr(o).hoistableScripts,f=Po(r),p=u.get(f);p||(p=o.querySelector(yu(f)),p||(r=N({src:r,async:!0},s),(s=ei.get(f))&&Dp(r,s),p=o.createElement("script"),lt(p),tn(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function YI(r,s){_r.M(r,s);var o=Mo;if(o&&r){var u=Gr(o).hoistableScripts,f=Po(r),p=u.get(f);p||(p=o.querySelector(yu(f)),p||(r=N({src:r,async:!0,type:"module"},s),(s=ei.get(f))&&Dp(r,s),p=o.createElement("script"),lt(p),tn(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function A0(r,s,o,u){var f=(f=Un.current)?jh(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=ko(o.href),o=Gr(f).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=ko(o.href);var p=Gr(f).hoistableStyles,E=p.get(r);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(r,E),(p=f.querySelector(_u(r)))&&!p._p&&(E.instance=p,E.state.loading=5),ei.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ei.set(r,o),p||WI(f,r,o,E.state))),s&&u===null)throw Error(i(528,""));return E}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=Po(o),o=Gr(f).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function ko(r){return'href="'+dt(r)+'"'}function _u(r){return'link[rel="stylesheet"]['+r+"]"}function R0(r){return N({},r,{"data-precedence":r.precedence,precedence:null})}function WI(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),tn(s,"link",o),lt(s),r.head.appendChild(s))}function Po(r){return'[src="'+dt(r)+'"]'}function yu(r){return"script[async]"+r}function C0(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+dt(o.href)+'"]');if(u)return s.instance=u,lt(u),u;var f=N({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),lt(u),tn(u,"style",f),qh(u,o.precedence,r),s.instance=u;case"stylesheet":f=ko(o.href);var p=r.querySelector(_u(f));if(p)return s.state.loading|=4,s.instance=p,lt(p),p;u=R0(o),(f=ei.get(f))&&Np(u,f),p=(r.ownerDocument||r).createElement("link"),lt(p);var E=p;return E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),tn(p,"link",u),s.state.loading|=4,qh(p,o.precedence,r),s.instance=p;case"script":return p=Po(o.src),(f=r.querySelector(yu(p)))?(s.instance=f,lt(f),f):(u=o,(f=ei.get(p))&&(u=N({},o),Dp(u,f)),r=r.ownerDocument||r,f=r.createElement("script"),lt(f),tn(f,"link",u),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&!(s.state.loading&4)&&(u=s.instance,s.state.loading|=4,qh(u,o.precedence,r));return s.instance}function qh(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===s)p=S;else if(p!==f)break}p?p.parentNode.insertBefore(r,p.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Np(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Dp(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var Hh=null;function I0(r,s,o){if(Hh===null){var u=new Map,f=Hh=new Map;f.set(o,u)}else f=Hh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var p=o[f];if(!(p[qr]||p[jt]||r==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(s)||"";E=r+E;var S=u.get(E);S?S.push(p):u.set(E,[p])}}return u}function N0(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function XI(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function D0(r){return!(r.type==="stylesheet"&&!(r.state.loading&3))}var vu=null;function ZI(){}function JI(r,s,o){if(vu===null)throw Error(i(475));var u=vu;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&!(s.state.loading&4)){if(s.instance===null){var f=ko(o.href),p=r.querySelector(_u(f));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=Gh.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=p,lt(p);return}p=r.ownerDocument||r,o=R0(o),(f=ei.get(f))&&Np(o,f),p=p.createElement("link"),lt(p);var E=p;E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),tn(p,"link",o),s.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&!(s.state.loading&3)&&(u.count++,s=Gh.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function e1(){if(vu===null)throw Error(i(475));var r=vu;return r.stylesheets&&r.count===0&&xp(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&xp(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function Gh(){if(this.count--,this.count===0){if(this.stylesheets)xp(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Kh=null;function xp(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Kh=new Map,s.forEach(t1,r),Kh=null,Gh.call(r))}function t1(r,s){if(!(s.state.loading&4)){var o=Kh.get(r);if(o)var u=o.get(null);else{o=new Map,Kh.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var E=f[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=s.instance,E=f.getAttribute("data-precedence"),p=o.get(E)||u,p===u&&o.set(null,f),o.set(E,f),this.count++,u=Gh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var Eu={$$typeof:R,Provider:null,Consumer:null,_currentValue:Ne,_currentValue2:Ne,_threadCount:0};function n1(r,s,o,u,f,p,E,S){this.tag=1,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ya(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ya(0),this.hiddenUpdates=Ya(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function x0(r,s,o,u,f,p,E,S,I,L,Y,te){return r=new n1(r,s,o,E,S,I,L,te),s=1,p===!0&&(s|=24),p=Zn(3,null,null,s),r.current=p,p.stateNode=r,s=um(),s.refCount++,r.pooledCache=s,s.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:s},qm(p),r}function O0(r){return r?(r=fo,r):fo}function M0(r,s,o,u,f,p){f=O0(f),u.context===null?u.context=f:u.pendingContext=f,u=rs(s),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=ss(r,u,s),o!==null&&(vn(o,r,s),iu(o,r,s))}function k0(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Op(r,s){k0(r,s),(r=r.alternate)&&k0(r,s)}function P0(r){if(r.tag===13){var s=Xr(r,67108864);s!==null&&vn(s,r,67108864),Op(r,67108864)}}var Qh=!0;function i1(r,s,o,u){var f=A.T;A.T=null;var p=le.p;try{le.p=2,Mp(r,s,o,u)}finally{le.p=p,A.T=f}}function r1(r,s,o,u){var f=A.T;A.T=null;var p=le.p;try{le.p=8,Mp(r,s,o,u)}finally{le.p=p,A.T=f}}function Mp(r,s,o,u){if(Qh){var f=kp(u);if(f===null)Tp(r,s,u,$h,o),V0(r,u);else if(a1(f,r,s,o,u))u.stopPropagation();else if(V0(r,u),s&4&&-1<s1.indexOf(r)){for(;f!==null;){var p=Yi(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=si(p.pendingLanes);if(E!==0){var S=p;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var I=1<<31-pn(E);S.entanglements[1]|=I,E&=~I}ki(p),!(ct&6)&&(xh=Tn()+500,mu(0))}}break;case 13:S=Xr(p,2),S!==null&&vn(S,p,2),kh(),Op(p,2)}if(p=kp(u),p===null&&Tp(r,s,u,$h,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else Tp(r,s,u,null,o)}}function kp(r){return r=eo(r),Pp(r)}var $h=null;function Pp(r){if($h=null,r=ai(r),r!==null){var s=ge(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=Ye(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return $h=r,null}function L0(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mc()){case Ot:return 2;case Bt:return 8;case Qi:case kc:return 32;case wl:return 268435456;default:return 32}default:return 32}}var Lp=!1,fs=null,ds=null,ms=null,Tu=new Map,wu=new Map,ps=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function V0(r,s){switch(r){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":ms=null;break;case"pointerover":case"pointerout":Tu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":wu.delete(s.pointerId)}}function Su(r,s,o,u,f,p){return r===null||r.nativeEvent!==p?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},s!==null&&(s=Yi(s),s!==null&&P0(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function a1(r,s,o,u,f){switch(s){case"focusin":return fs=Su(fs,r,s,o,u,f),!0;case"dragenter":return ds=Su(ds,r,s,o,u,f),!0;case"mouseover":return ms=Su(ms,r,s,o,u,f),!0;case"pointerover":var p=f.pointerId;return Tu.set(p,Su(Tu.get(p)||null,r,s,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,wu.set(p,Su(wu.get(p)||null,r,s,o,u,f)),!0}return!1}function U0(r){var s=ai(r.target);if(s!==null){var o=ge(s);if(o!==null){if(s=o.tag,s===13){if(s=Ye(o),s!==null){r.blockedOn=s,jr(r.priority,function(){if(o.tag===13){var u=Pn(),f=Xr(o,u);f!==null&&vn(f,o,u),Op(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Yh(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=kp(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);jn=u,o.target.dispatchEvent(u),jn=null}else return s=Yi(o),s!==null&&P0(s),r.blockedOn=o,!1;s.shift()}return!0}function z0(r,s,o){Yh(r)&&o.delete(s)}function o1(){Lp=!1,fs!==null&&Yh(fs)&&(fs=null),ds!==null&&Yh(ds)&&(ds=null),ms!==null&&Yh(ms)&&(ms=null),Tu.forEach(z0),wu.forEach(z0)}function Wh(r,s){r.blockedOn===s&&(r.blockedOn=null,Lp||(Lp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,o1)))}var Xh=null;function F0(r){Xh!==r&&(Xh=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Xh===r&&(Xh=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],f=r[s+2];if(typeof u!="function"){if(Pp(u||o)===null)continue;break}var p=Yi(o);p!==null&&(r.splice(s,3),s-=3,Am(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function bu(r){function s(I){return Wh(I,r)}fs!==null&&Wh(fs,r),ds!==null&&Wh(ds,r),ms!==null&&Wh(ms,r),Tu.forEach(s),wu.forEach(s);for(var o=0;o<ps.length;o++){var u=ps[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<ps.length&&(o=ps[0],o.blockedOn===null);)U0(o),o.blockedOn===null&&ps.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],E=f[Mt]||null;if(typeof p=="function")E||F0(o);else if(E){var S=null;if(p&&p.hasAttribute("formAction")){if(f=p,E=p[Mt]||null)S=E.formAction;else if(Pp(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),F0(o)}}}function Vp(r){this._internalRoot=r}Zh.prototype.render=Vp.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Pn();M0(o,u,r,s,null,null)},Zh.prototype.unmount=Vp.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;r.tag===0&&Do(),M0(r.current,2,null,r,null,null),kh(),s[$i]=null}};function Zh(r){this._internalRoot=r}Zh.prototype.unstable_scheduleHydration=function(r){if(r){var s=zc();r={blockedOn:null,target:r,priority:s};for(var o=0;o<ps.length&&s!==0&&s<ps[o].priority;o++);ps.splice(o,0,r),o===0&&U0(r)}};var B0=e.version;if(B0!=="19.0.0")throw Error(i(527,B0,"19.0.0"));le.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=ne(s),r=r!==null?me(r):null,r=r===null?null:r.stateNode,r};var l1={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:A,findFiberByHostInstance:ai,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Lr=Jh.inject(l1),on=Jh}catch{}}return Ru.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,u="",f=rE,p=sE,E=aE,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(p=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=x0(r,1,!1,null,null,o,u,f,p,E,S,null),r[$i]=s.current,Ep(r.nodeType===8?r.parentNode:r),new Vp(s)},Ru.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var u=!1,f="",p=rE,E=sE,S=aE,I=null,L=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(L=o.formState)),s=x0(r,1,!0,s,o??null,u,f,p,E,S,I,L),s.context=O0(null),o=s.current,u=Pn(),f=rs(u),f.callback=null,ss(o,f,u),s.current.lanes=u,vt(s,u),ki(s),r[$i]=s.current,Ep(r),new Zh(s)},Ru.version="19.0.0",Ru}var X0;function y1(){if(X0)return Fp.exports;X0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Fp.exports=_1(),Fp.exports}var v1=y1(),Cu={},Z0;function E1(){if(Z0)return Cu;Z0=1,Object.defineProperty(Cu,"__esModule",{value:!0}),Cu.parse=c,Cu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,R){const x=new l,q=w.length;if(q<2)return x;const z=(R==null?void 0:R.decode)||y;let $=0;do{const W=w.indexOf("=",$);if(W===-1)break;const X=w.indexOf(";",$),fe=X===-1?q:X;if(W>fe){$=w.lastIndexOf(";",W-1)+1;continue}const ae=d(w,$,W),ve=m(w,W,ae),M=w.slice(ae,ve);if(x[M]===void 0){let C=d(w,W+1,fe),A=m(w,fe,C);const N=z(w.slice(C,A));x[M]=N}$=fe+1}while($<q);return x}function d(w,R,x){do{const q=w.charCodeAt(R);if(q!==32&&q!==9)return R}while(++R<x);return x}function m(w,R,x){for(;R>x;){const q=w.charCodeAt(--R);if(q!==32&&q!==9)return R+1}return x}function g(w,R,x){const q=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const z=q(R);if(!e.test(z))throw new TypeError(`argument val is invalid: ${R}`);let $=w+"="+z;if(!x)return $;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);$+="; Max-Age="+x.maxAge}if(x.domain){if(!t.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);$+="; Domain="+x.domain}if(x.path){if(!i.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);$+="; Path="+x.path}if(x.expires){if(!T(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);$+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&($+="; HttpOnly"),x.secure&&($+="; Secure"),x.partitioned&&($+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return $}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function T(w){return a.call(w)==="[object Date]"}return Cu}E1();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var J0="popstate";function T1(n={}){function e(i,a){let{pathname:l,search:c,hash:d}=i.location;return mg("",{pathname:l,search:c,hash:d},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function t(i,a){return typeof a=="string"?a:Yu(a)}return S1(e,t,null,n)}function ht(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function zi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function w1(){return Math.random().toString(36).substring(2,10)}function eT(n,e){return{usr:n.state,key:n.key,idx:e}}function mg(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?ll(e):e,state:t,key:e&&e.key||i||w1()}}function Yu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ll(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function S1(n,e,t,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,c=a.history,d="POP",m=null,g=y();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function y(){return(c.state||{idx:null}).idx}function T(){d="POP";let z=y(),$=z==null?null:z-g;g=z,m&&m({action:d,location:q.location,delta:$})}function w(z,$){d="PUSH";let W=mg(q.location,z,$);g=y()+1;let X=eT(W,g),fe=q.createHref(W);try{c.pushState(X,"",fe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;a.location.assign(fe)}l&&m&&m({action:d,location:q.location,delta:1})}function R(z,$){d="REPLACE";let W=mg(q.location,z,$);g=y();let X=eT(W,g),fe=q.createHref(W);c.replaceState(X,"",fe),l&&m&&m({action:d,location:q.location,delta:0})}function x(z){let $=a.location.origin!=="null"?a.location.origin:a.location.href,W=typeof z=="string"?z:Yu(z);return W=W.replace(/ $/,"%20"),ht($,`No window.location.(origin|href) available to create URL for href: ${W}`),new URL(W,$)}let q={get action(){return d},get location(){return n(a,c)},listen(z){if(m)throw new Error("A history only accepts one active listener");return a.addEventListener(J0,T),m=z,()=>{a.removeEventListener(J0,T),m=null}},createHref(z){return e(a,z)},createURL:x,encodeLocation(z){let $=x(z);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:w,replace:R,go(z){return c.go(z)}};return q}function vS(n,e,t="/"){return b1(n,e,t,!1)}function b1(n,e,t,i){let a=typeof e=="string"?ll(e):e,l=Ds(a.pathname||"/",t);if(l==null)return null;let c=ES(n);A1(c);let d=null;for(let m=0;d==null&&m<c.length;++m){let g=L1(l);d=k1(c[m],g,i)}return d}function ES(n,e=[],t=[],i=""){let a=(l,c,d)=>{let m={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};m.relativePath.startsWith("/")&&(ht(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length));let g=br([i,m.relativePath]),y=t.concat(m);l.children&&l.children.length>0&&(ht(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),ES(l.children,e,y,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:O1(g,l.index),routesMeta:y})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let m of TS(l.path))a(l,c,m)}),e}function TS(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let c=TS(i.join("/")),d=[];return d.push(...c.map(m=>m===""?l:[l,m].join("/"))),a&&d.push(...c),d.map(m=>n.startsWith("/")&&m===""?"/":m)}function A1(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:M1(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var R1=/^:[\w-]+$/,C1=3,I1=2,N1=1,D1=10,x1=-2,tT=n=>n==="*";function O1(n,e){let t=n.split("/"),i=t.length;return t.some(tT)&&(i+=x1),e&&(i+=I1),t.filter(a=>!tT(a)).reduce((a,l)=>a+(R1.test(l)?C1:l===""?N1:D1),i)}function M1(n,e){return n.length===e.length&&n.slice(0,-1).every((i,a)=>i===e[a])?n[n.length-1]-e[e.length-1]:0}function k1(n,e,t=!1){let{routesMeta:i}=n,a={},l="/",c=[];for(let d=0;d<i.length;++d){let m=i[d],g=d===i.length-1,y=l==="/"?e:e.slice(l.length)||"/",T=bf({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},y),w=m.route;if(!T&&g&&t&&!i[i.length-1].route.index&&(T=bf({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!T)return null;Object.assign(a,T.params),c.push({params:a,pathname:br([l,T.pathname]),pathnameBase:F1(br([l,T.pathnameBase])),route:w}),T.pathnameBase!=="/"&&(l=br([l,T.pathnameBase]))}return c}function bf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=P1(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((g,{paramName:y,isOptional:T},w)=>{if(y==="*"){let x=d[w]||"";c=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const R=d[w];return T&&!R?g[y]=void 0:g[y]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function P1(n,e=!1,t=!0){zi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,m)=>(i.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function L1(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ds(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function V1(n,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof n=="string"?ll(n):n;return{pathname:t?t.startsWith("/")?t:U1(t,e):e,search:B1(i),hash:j1(a)}}function U1(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Hp(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z1(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function wS(n){let e=z1(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function SS(n,e,t,i=!1){let a;typeof n=="string"?a=ll(n):(a={...n},ht(!a.pathname||!a.pathname.includes("?"),Hp("?","pathname","search",a)),ht(!a.pathname||!a.pathname.includes("#"),Hp("#","pathname","hash",a)),ht(!a.search||!a.search.includes("#"),Hp("#","search","hash",a)));let l=n===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),T-=1;a.pathname=w.join("/")}d=T>=0?e[T]:"/"}let m=V1(a,d),g=c&&c!=="/"&&c.endsWith("/"),y=(l||c===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||y)&&(m.pathname+="/"),m}var br=n=>n.join("/").replace(/\/\/+/g,"/"),F1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),B1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,j1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function q1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var bS=["POST","PUT","PATCH","DELETE"];new Set(bS);var H1=["GET",...bS];new Set(H1);var ul=Q.createContext(null);ul.displayName="DataRouter";var ad=Q.createContext(null);ad.displayName="DataRouterState";var AS=Q.createContext({isTransitioning:!1});AS.displayName="ViewTransition";var G1=Q.createContext(new Map);G1.displayName="Fetchers";var K1=Q.createContext(null);K1.displayName="Await";var qi=Q.createContext(null);qi.displayName="Navigation";var pc=Q.createContext(null);pc.displayName="Location";var Or=Q.createContext({outlet:null,matches:[],isDataRoute:!1});Or.displayName="Route";var r_=Q.createContext(null);r_.displayName="RouteError";function Q1(n,{relative:e}={}){ht(gc(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=Q.useContext(qi),{hash:a,pathname:l,search:c}=yc(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:br([t,l])),i.createHref({pathname:d,search:c,hash:a})}function gc(){return Q.useContext(pc)!=null}function Pa(){return ht(gc(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(pc).location}var RS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function CS(n){Q.useContext(qi).static||Q.useLayoutEffect(n)}function _c(){let{isDataRoute:n}=Q.useContext(Or);return n?aN():$1()}function $1(){ht(gc(),"useNavigate() may be used only in the context of a <Router> component.");let n=Q.useContext(ul),{basename:e,navigator:t}=Q.useContext(qi),{matches:i}=Q.useContext(Or),{pathname:a}=Pa(),l=JSON.stringify(wS(i)),c=Q.useRef(!1);return CS(()=>{c.current=!0}),Q.useCallback((m,g={})=>{if(zi(c.current,RS),!c.current)return;if(typeof m=="number"){t.go(m);return}let y=SS(m,JSON.parse(l),a,g.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:br([e,y.pathname])),(g.replace?t.replace:t.push)(y,g.state,g)},[e,t,l,a,n])}Q.createContext(null);function yc(n,{relative:e}={}){let{matches:t}=Q.useContext(Or),{pathname:i}=Pa(),a=JSON.stringify(wS(t));return Q.useMemo(()=>SS(n,JSON.parse(a),i,e==="path"),[n,a,i,e])}function Y1(n,e){return IS(n,e)}function IS(n,e,t,i){var W;ht(gc(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:l}=Q.useContext(qi),{matches:c}=Q.useContext(Or),d=c[c.length-1],m=d?d.params:{},g=d?d.pathname:"/",y=d?d.pathnameBase:"/",T=d&&d.route;{let X=T&&T.path||"";NS(g,!T||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let w=Pa(),R;if(e){let X=typeof e=="string"?ll(e):e;ht(y==="/"||((W=X.pathname)==null?void 0:W.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${X.pathname}" was given in the \`location\` prop.`),R=X}else R=w;let x=R.pathname||"/",q=x;if(y!=="/"){let X=y.replace(/^\//,"").split("/");q="/"+x.replace(/^\//,"").split("/").slice(X.length).join("/")}let z=!l&&t&&t.matches&&t.matches.length>0?t.matches:vS(n,{pathname:q});zi(T||z!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),zi(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=eN(z&&z.map(X=>Object.assign({},X,{params:Object.assign({},m,X.params),pathname:br([y,a.encodeLocation?a.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?y:br([y,a.encodeLocation?a.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),c,t,i);return e&&$?Q.createElement(pc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},$):$}function W1(){let n=sN(),e=q1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:l},"ErrorBoundary")," or"," ",Q.createElement("code",{style:l},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),t?Q.createElement("pre",{style:a},t):null,c)}var X1=Q.createElement(W1,null),Z1=class extends Q.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?Q.createElement(Or.Provider,{value:this.props.routeContext},Q.createElement(r_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function J1({routeContext:n,match:e,children:t}){let i=Q.useContext(ul);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(Or.Provider,{value:n},t)}function eN(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let m=a.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);ht(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let c=!1,d=-1;if(t)for(let m=0;m<a.length;m++){let g=a[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=m),g.route.id){let{loaderData:y,errors:T}=t,w=g.route.loader&&!y.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||w){c=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((m,g,y)=>{let T,w=!1,R=null,x=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,R=g.route.errorElement||X1,c&&(d<0&&y===0?(NS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):d===y&&(w=!0,x=g.route.hydrateFallbackElement||null)));let q=e.concat(a.slice(0,y+1)),z=()=>{let $;return T?$=R:w?$=x:g.route.Component?$=Q.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=m,Q.createElement(J1,{match:g,routeContext:{outlet:m,matches:q,isDataRoute:t!=null},children:$})};return t&&(g.route.ErrorBoundary||g.route.errorElement||y===0)?Q.createElement(Z1,{location:t.location,revalidation:t.revalidation,component:R,error:T,children:z(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):z()},null)}function s_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tN(n){let e=Q.useContext(ul);return ht(e,s_(n)),e}function nN(n){let e=Q.useContext(ad);return ht(e,s_(n)),e}function iN(n){let e=Q.useContext(Or);return ht(e,s_(n)),e}function a_(n){let e=iN(n),t=e.matches[e.matches.length-1];return ht(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function rN(){return a_("useRouteId")}function sN(){var i;let n=Q.useContext(r_),e=nN("useRouteError"),t=a_("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function aN(){let{router:n}=tN("useNavigate"),e=a_("useNavigate"),t=Q.useRef(!1);return CS(()=>{t.current=!0}),Q.useCallback(async(a,l={})=>{zi(t.current,RS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var nT={};function NS(n,e,t){!e&&!nT[n]&&(nT[n]=!0,zi(!1,t))}Q.memo(oN);function oN({routes:n,future:e,state:t}){return IS(n,void 0,t,e)}function Mu(n){ht(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function lN({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:l=!1}){ht(!gc(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=Q.useMemo(()=>({basename:c,navigator:a,static:l,future:{}}),[c,a,l]);typeof t=="string"&&(t=ll(t));let{pathname:m="/",search:g="",hash:y="",state:T=null,key:w="default"}=t,R=Q.useMemo(()=>{let x=Ds(m,c);return x==null?null:{location:{pathname:x,search:g,hash:y,state:T,key:w},navigationType:i}},[c,m,g,y,T,w,i]);return zi(R!=null,`<Router basename="${c}"> is not able to match the URL "${m}${g}${y}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:Q.createElement(qi.Provider,{value:d},Q.createElement(pc.Provider,{children:e,value:R}))}function uN({children:n,location:e}){return Y1(pg(n),e)}function pg(n,e=[]){let t=[];return Q.Children.forEach(n,(i,a)=>{if(!Q.isValidElement(i))return;let l=[...e,a];if(i.type===Q.Fragment){t.push.apply(t,pg(i.props.children,l));return}ht(i.type===Mu,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ht(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=pg(i.props.children,l)),t.push(c)}),t}var hf="get",ff="application/x-www-form-urlencoded";function od(n){return n!=null&&typeof n.tagName=="string"}function cN(n){return od(n)&&n.tagName.toLowerCase()==="button"}function hN(n){return od(n)&&n.tagName.toLowerCase()==="form"}function fN(n){return od(n)&&n.tagName.toLowerCase()==="input"}function dN(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function mN(n,e){return n.button===0&&(!e||e==="_self")&&!dN(n)}var ef=null;function pN(){if(ef===null)try{new FormData(document.createElement("form"),0),ef=!1}catch{ef=!0}return ef}var gN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gp(n){return n!=null&&!gN.has(n)?(zi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ff}"`),null):n}function _N(n,e){let t,i,a,l,c;if(hN(n)){let d=n.getAttribute("action");i=d?Ds(d,e):null,t=n.getAttribute("method")||hf,a=Gp(n.getAttribute("enctype"))||ff,l=new FormData(n)}else if(cN(n)||fN(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||d.getAttribute("action");if(i=m?Ds(m,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||hf,a=Gp(n.getAttribute("formenctype"))||Gp(d.getAttribute("enctype"))||ff,l=new FormData(d,n),!pN()){let{name:g,type:y,value:T}=n;if(y==="image"){let w=g?`${g}.`:"";l.append(`${w}x`,"0"),l.append(`${w}y`,"0")}else g&&l.append(g,T)}}else{if(od(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=hf,i=null,a=ff,c=n}return l&&a==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:l,body:c}}function o_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function yN(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vN(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function EN(n,e,t){let i=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let c=await yN(l,t);return c.links?c.links():[]}return[]}));return bN(i.flat(1).filter(vN).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function iT(n,e,t,i,a,l){let c=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,d=(m,g)=>{var y;return t[g].pathname!==m.pathname||((y=t[g].route.path)==null?void 0:y.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,g)=>c(m,g)||d(m,g)):l==="data"?e.filter((m,g)=>{var T;let y=i.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(c(m,g)||d(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function TN(n,e){return wN(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let a=[i.module];return i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function wN(n){return[...new Set(n)]}function SN(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function bN(n,e){let t=new Set;return new Set(e),n.reduce((i,a)=>{let l=JSON.stringify(SN(a));return t.has(l)||(t.add(l),i.push({key:l,link:a})),i},[])}function AN(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function RN(){let n=Q.useContext(ul);return o_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function CN(){let n=Q.useContext(ad);return o_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var l_=Q.createContext(void 0);l_.displayName="FrameworkContext";function DS(){let n=Q.useContext(l_);return o_(n,"You must render this element inside a <HydratedRouter> element"),n}function IN(n,e){let t=Q.useContext(l_),[i,a]=Q.useState(!1),[l,c]=Q.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:g,onMouseLeave:y,onTouchStart:T}=e,w=Q.useRef(null);Q.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let q=$=>{$.forEach(W=>{c(W.isIntersecting)})},z=new IntersectionObserver(q,{threshold:.5});return w.current&&z.observe(w.current),()=>{z.disconnect()}}},[n]),Q.useEffect(()=>{if(i){let q=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(q)}}},[i]);let R=()=>{a(!0)},x=()=>{a(!1),c(!1)};return t?n!=="intent"?[l,w,{}]:[l,w,{onFocus:Iu(d,R),onBlur:Iu(m,x),onMouseEnter:Iu(g,R),onMouseLeave:Iu(y,x),onTouchStart:Iu(T,R)}]:[!1,w,{}]}function Iu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function NN({page:n,...e}){let{router:t}=RN(),i=Q.useMemo(()=>vS(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?Q.createElement(xN,{page:n,matches:i,...e}):null}function DN(n){let{manifest:e,routeModules:t}=DS(),[i,a]=Q.useState([]);return Q.useEffect(()=>{let l=!1;return EN(n,e,t).then(c=>{l||a(c)}),()=>{l=!0}},[n,e,t]),i}function xN({page:n,matches:e,...t}){let i=Pa(),{manifest:a,routeModules:l}=DS(),{loaderData:c,matches:d}=CN(),m=Q.useMemo(()=>iT(n,e,d,a,i,"data"),[n,e,d,a,i]),g=Q.useMemo(()=>iT(n,e,d,a,i,"assets"),[n,e,d,a,i]),y=Q.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let R=new Set,x=!1;if(e.forEach(z=>{var W;let $=a.routes[z.route.id];!$||!$.hasLoader||(!m.some(X=>X.route.id===z.route.id)&&z.route.id in c&&((W=l[z.route.id])!=null&&W.shouldRevalidate)||$.hasClientLoader?x=!0:R.add(z.route.id))}),R.size===0)return[];let q=AN(n);return x&&R.size>0&&q.searchParams.set("_routes",e.filter(z=>R.has(z.route.id)).map(z=>z.route.id).join(",")),[q.pathname+q.search]},[c,i,a,m,e,n,l]),T=Q.useMemo(()=>TN(g,a),[g,a]),w=DN(g);return Q.createElement(Q.Fragment,null,y.map(R=>Q.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...t})),T.map(R=>Q.createElement("link",{key:R,rel:"modulepreload",href:R,...t})),w.map(({key:R,link:x})=>Q.createElement("link",{key:R,...x})))}function ON(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var xS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xS&&(window.__reactRouterVersion="7.1.5")}catch{}function MN({basename:n,children:e,window:t}){let i=Q.useRef();i.current==null&&(i.current=T1({window:t,v5Compat:!0}));let a=i.current,[l,c]=Q.useState({action:a.action,location:a.location}),d=Q.useCallback(m=>{Q.startTransition(()=>c(m))},[c]);return Q.useLayoutEffect(()=>a.listen(d),[a,d]),Q.createElement(lN,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var OS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vu=Q.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:l,replace:c,state:d,target:m,to:g,preventScrollReset:y,viewTransition:T,...w},R){let{basename:x}=Q.useContext(qi),q=typeof g=="string"&&OS.test(g),z,$=!1;if(typeof g=="string"&&q&&(z=g,xS))try{let A=new URL(window.location.href),N=g.startsWith("//")?new URL(A.protocol+g):new URL(g),P=Ds(N.pathname,x);N.origin===A.origin&&P!=null?g=P+N.search+N.hash:$=!0}catch{zi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=Q1(g,{relative:a}),[X,fe,ae]=IN(i,w),ve=VN(g,{replace:c,state:d,target:m,preventScrollReset:y,relative:a,viewTransition:T});function M(A){e&&e(A),A.defaultPrevented||ve(A)}let C=Q.createElement("a",{...w,...ae,href:z||W,onClick:$||l?e:M,ref:ON(R,fe),target:m,"data-discover":!q&&t==="render"?"true":void 0});return X&&!q?Q.createElement(Q.Fragment,null,C,Q.createElement(NN,{page:W})):C});Vu.displayName="Link";var kN=Q.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:d,children:m,...g},y){let T=yc(c,{relative:g.relative}),w=Pa(),R=Q.useContext(ad),{navigator:x,basename:q}=Q.useContext(qi),z=R!=null&&jN(T)&&d===!0,$=x.encodeLocation?x.encodeLocation(T).pathname:T.pathname,W=w.pathname,X=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;t||(W=W.toLowerCase(),X=X?X.toLowerCase():null,$=$.toLowerCase()),X&&q&&(X=Ds(X,q)||X);const fe=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ae=W===$||!a&&W.startsWith($)&&W.charAt(fe)==="/",ve=X!=null&&(X===$||!a&&X.startsWith($)&&X.charAt($.length)==="/"),M={isActive:ae,isPending:ve,isTransitioning:z},C=ae?e:void 0,A;typeof i=="function"?A=i(M):A=[i,ae?"active":null,ve?"pending":null,z?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(M):l;return Q.createElement(Vu,{...g,"aria-current":C,className:A,ref:y,style:N,to:c,viewTransition:d},typeof m=="function"?m(M):m)});kN.displayName="NavLink";var PN=Q.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:l,method:c=hf,action:d,onSubmit:m,relative:g,preventScrollReset:y,viewTransition:T,...w},R)=>{let x=FN(),q=BN(d,{relative:g}),z=c.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&OS.test(d),W=X=>{if(m&&m(X),X.defaultPrevented)return;X.preventDefault();let fe=X.nativeEvent.submitter,ae=(fe==null?void 0:fe.getAttribute("formmethod"))||c;x(fe||X.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:a,state:l,relative:g,preventScrollReset:y,viewTransition:T})};return Q.createElement("form",{ref:R,method:z,action:q,onSubmit:i?m:W,...w,"data-discover":!$&&n==="render"?"true":void 0})});PN.displayName="Form";function LN(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MS(n){let e=Q.useContext(ul);return ht(e,LN(n)),e}function VN(n,{target:e,replace:t,state:i,preventScrollReset:a,relative:l,viewTransition:c}={}){let d=_c(),m=Pa(),g=yc(n,{relative:l});return Q.useCallback(y=>{if(mN(y,e)){y.preventDefault();let T=t!==void 0?t:Yu(m)===Yu(g);d(n,{replace:T,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[m,d,g,t,i,e,n,a,l,c])}var UN=0,zN=()=>`__${String(++UN)}__`;function FN(){let{router:n}=MS("useSubmit"),{basename:e}=Q.useContext(qi),t=rN();return Q.useCallback(async(i,a={})=>{let{action:l,method:c,encType:d,formData:m,body:g}=_N(i,e);if(a.navigate===!1){let y=a.fetcherKey||zN();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||c,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:m,body:g,formMethod:a.method||c,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function BN(n,{relative:e}={}){let{basename:t}=Q.useContext(qi),i=Q.useContext(Or);ht(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...yc(n||".",{relative:e})},c=Pa();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),m=d.getAll("index");if(m.some(y=>y==="")){d.delete("index"),m.filter(T=>T).forEach(T=>d.append("index",T));let y=d.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:br([t,l.pathname])),Yu(l)}function jN(n,e={}){let t=Q.useContext(AS);ht(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=MS("useViewTransitionState"),a=yc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ds(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Ds(t.nextLocation.pathname,i)||t.nextLocation.pathname;return bf(a.pathname,c)!=null||bf(a.pathname,l)!=null}new TextEncoder;var rT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=function(n,e){if(!n)throw cl(e)},cl=function(n){return new Error("Firebase Database ("+kS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},qN=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],c=n[t++],d=n[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},u_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const l=n[a],c=a+1<n.length,d=c?n[a+1]:0,m=a+2<n.length,g=m?n[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,R=g&63;m||(R=64,c||(w=64)),i.push(t[y],t[T],t[w],t[R])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(PS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qN(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const g=a<n.length?t[n.charAt(a)]:64;++a;const T=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new HN;const w=l<<2|d>>4;if(i.push(w),g!==64){const R=d<<4&240|g>>2;if(i.push(R),T!==64){const x=g<<6&192|T;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class HN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LS=function(n){const e=PS(n);return u_.encodeByteArray(e,!0)},Af=function(n){return LS(n).replace(/\./g,"")},Rf=function(n){try{return u_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GN(n){return VS(void 0,n)}function VS(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!KN(t)||(n[t]=VS(n[t],e[t]));return n}function KN(n){return n!=="__proto__"}/**
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
 */function QN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $N=()=>QN().__FIREBASE_DEFAULTS__,YN=()=>{if(typeof process>"u"||typeof rT>"u")return;const n=rT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},WN=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Rf(n[1]);return e&&JSON.parse(e)},ld=()=>{try{return $N()||YN()||WN()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},US=n=>{var e,t;return(t=(e=ld())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zS=n=>{const e=US(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},FS=()=>{var n;return(n=ld())===null||n===void 0?void 0:n.config},BS=n=>{var e;return(e=ld())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function jS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Af(JSON.stringify(t)),Af(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function c_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function XN(){var n;const e=(n=ld())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ZN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function HS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JN(){const n=dn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function eD(){return kS.NODE_ADMIN===!0}function tD(){return!XN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GS(){try{return typeof indexedDB=="object"}catch{return!1}}function KS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function nD(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD="FirebaseError";class yi extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=iD,Object.setPrototypeOf(this,yi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?rD(l,i):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new yi(a,d,i)}}function rD(n,e){return n.replace(sD,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const sD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(n){return JSON.parse(n)}function Ut(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS=function(n){let e={},t={},i={},a="";try{const l=n.split(".");e=Wu(Rf(l[0])||""),t=Wu(Rf(l[1])||""),a=l[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:a}},aD=function(n){const e=QS(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},oD=function(n){const e=QS(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hi(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function $o(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Cf(n,e,t){const i={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=e.call(t,n[a],a,n));return i}function Xu(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=n[a],c=e[a];if(sT(l)&&sT(c)){if(!Xu(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function sT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)i[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)i[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const w=i[T-3]^i[T-8]^i[T-14]^i[T-16];i[T]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],m=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const w=(a<<5|a>>>27)+g+m+y+i[T]&4294967295;m=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=i;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[i]=this.chain_[a]>>l&255,++i;return e}}function uD(n,e){const t=new cD(n,e);return t.subscribe.bind(t)}class cD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");hD(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=Kp),a.error===void 0&&(a.error=Kp),a.complete===void 0&&(a.complete=Kp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hD(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Kp(){}function h_(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);if(a>=55296&&a<=56319){const l=a-55296;i++,ie(i<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(i)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},cd=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const dD=1e3,mD=2,pD=4*60*60*1e3,gD=.5;function aT(n,e=dD,t=mD){const i=e*Math.pow(t,n),a=Math.round(gD*i*(Math.random()-.5)*2);return Math.min(pD,i+a)}/**
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
 */function wt(n){return n&&n._delegate?n._delegate:n}class ri{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const va="[DEFAULT]";/**
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
 */class _D{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ud;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vD(e))try{this.getOrInitializeService({instanceIdentifier:va})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=va){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=va){return this.instances.has(e)}getOptions(e=va){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:yD(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=va){return this.component?this.component.multipleInstances?e:va:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yD(n){return n===va?void 0:n}function vD(n){return n.instantiationMode==="EAGER"}/**
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
 */class ED{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _D(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const TD={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},wD=ke.INFO,SD={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},bD=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=SD[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vc{constructor(e){this.name=e,this._logLevel=wD,this._logHandler=bD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TD[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const AD=(n,e)=>e.some(t=>n instanceof t);let oT,lT;function RD(){return oT||(oT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CD(){return lT||(lT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $S=new WeakMap,_g=new WeakMap,YS=new WeakMap,Qp=new WeakMap,f_=new WeakMap;function ID(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(ws(n.result)),a()},c=()=>{i(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&$S.set(t,n)}).catch(()=>{}),f_.set(e,n),e}function ND(n){if(_g.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});_g.set(n,e)}let yg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _g.get(n);if(e==="objectStoreNames")return n.objectStoreNames||YS.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ws(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function DD(n){yg=n(yg)}function xD(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call($p(this),e,...t);return YS.set(i,e.sort?e.sort():[e]),ws(i)}:CD().includes(n)?function(...e){return n.apply($p(this),e),ws($S.get(this))}:function(...e){return ws(n.apply($p(this),e))}}function OD(n){return typeof n=="function"?xD(n):(n instanceof IDBTransaction&&ND(n),AD(n,RD())?new Proxy(n,yg):n)}function ws(n){if(n instanceof IDBRequest)return ID(n);if(Qp.has(n))return Qp.get(n);const e=OD(n);return e!==n&&(Qp.set(n,e),f_.set(e,n)),e}const $p=n=>f_.get(n);function WS(n,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(n,e),d=ws(c);return i&&c.addEventListener("upgradeneeded",m=>{i(ws(c.result),m.oldVersion,m.newVersion,ws(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const MD=["get","getKey","getAll","getAllKeys","count"],kD=["put","add","delete","clear"],Yp=new Map;function uT(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Yp.get(e))return Yp.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=kD.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||MD.includes(t)))return;const l=async function(c,...d){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&m.done]))[0]};return Yp.set(e,l),l}DD(n=>({...n,get:(e,t,i)=>uT(e,t)||n.get(e,t,i),has:(e,t)=>!!uT(e,t)||n.has(e,t)}));/**
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
 */class PD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(LD(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function LD(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vg="@firebase/app",cT="0.11.1";/**
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
 */const Cr=new vc("@firebase/app"),VD="@firebase/app-compat",UD="@firebase/analytics-compat",zD="@firebase/analytics",FD="@firebase/app-check-compat",BD="@firebase/app-check",jD="@firebase/auth",qD="@firebase/auth-compat",HD="@firebase/database",GD="@firebase/data-connect",KD="@firebase/database-compat",QD="@firebase/functions",$D="@firebase/functions-compat",YD="@firebase/installations",WD="@firebase/installations-compat",XD="@firebase/messaging",ZD="@firebase/messaging-compat",JD="@firebase/performance",ex="@firebase/performance-compat",tx="@firebase/remote-config",nx="@firebase/remote-config-compat",ix="@firebase/storage",rx="@firebase/storage-compat",sx="@firebase/firestore",ax="@firebase/vertexai",ox="@firebase/firestore-compat",lx="firebase",ux="11.3.1";/**
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
 */const Eg="[DEFAULT]",cx={[vg]:"fire-core",[VD]:"fire-core-compat",[zD]:"fire-analytics",[UD]:"fire-analytics-compat",[BD]:"fire-app-check",[FD]:"fire-app-check-compat",[jD]:"fire-auth",[qD]:"fire-auth-compat",[HD]:"fire-rtdb",[GD]:"fire-data-connect",[KD]:"fire-rtdb-compat",[QD]:"fire-fn",[$D]:"fire-fn-compat",[YD]:"fire-iid",[WD]:"fire-iid-compat",[XD]:"fire-fcm",[ZD]:"fire-fcm-compat",[JD]:"fire-perf",[ex]:"fire-perf-compat",[tx]:"fire-rc",[nx]:"fire-rc-compat",[ix]:"fire-gcs",[rx]:"fire-gcs-compat",[sx]:"fire-fst",[ox]:"fire-fst-compat",[ax]:"fire-vertex","fire-js":"fire-js",[lx]:"fire-js-all"};/**
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
 */const If=new Map,hx=new Map,Tg=new Map;function hT(n,e){try{n.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function gi(n){const e=n.name;if(Tg.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;Tg.set(e,n);for(const t of If.values())hT(t,n);for(const t of hx.values())hT(t,n);return!0}function Fs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ti(n){return n==null?!1:n.settings!==void 0}/**
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
 */const fx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ss=new La("app","Firebase",fx);/**
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
 */class dx{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ss.create("app-deleted",{appName:this._name})}}/**
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
 */const Va=ux;function XS(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Eg,automaticDataCollectionEnabled:!1},e),a=i.name;if(typeof a!="string"||!a)throw Ss.create("bad-app-name",{appName:String(a)});if(t||(t=FS()),!t)throw Ss.create("no-options");const l=If.get(a);if(l){if(Xu(t,l.options)&&Xu(i,l.config))return l;throw Ss.create("duplicate-app",{appName:a})}const c=new ED(a);for(const m of Tg.values())c.addComponent(m);const d=new dx(t,i,c);return If.set(a,d),d}function hd(n=Eg){const e=If.get(n);if(!e&&n===Eg&&FS())return XS();if(!e)throw Ss.create("no-app",{appName:n});return e}function Rn(n,e,t){var i;let a=(i=cx[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(d.join(" "));return}gi(new ri(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const mx="firebase-heartbeat-database",px=1,Zu="firebase-heartbeat-store";let Wp=null;function ZS(){return Wp||(Wp=WS(mx,px,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zu)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ss.create("idb-open",{originalErrorMessage:n.message})})),Wp}async function gx(n){try{const t=(await ZS()).transaction(Zu),i=await t.objectStore(Zu).get(JS(n));return await t.done,i}catch(e){if(e instanceof yi)Cr.warn(e.message);else{const t=Ss.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function fT(n,e){try{const i=(await ZS()).transaction(Zu,"readwrite");await i.objectStore(Zu).put(e,JS(n)),await i.done}catch(t){if(t instanceof yi)Cr.warn(t.message);else{const i=Ss.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(i.message)}}}function JS(n){return`${n.name}!${n.options.appId}`}/**
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
 */const _x=1024,yx=30;class vx{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Tx(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=dT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>yx){const c=wx(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Cr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=dT(),{heartbeatsToSend:i,unsentEntries:a}=Ex(this._heartbeatsCache.heartbeats),l=Af(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Cr.warn(t),""}}}function dT(){return new Date().toISOString().substring(0,10)}function Ex(n,e=_x){const t=[];let i=n.slice();for(const a of n){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),mT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),mT(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Tx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GS()?KS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gx(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return fT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return fT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function mT(n){return Af(JSON.stringify({version:2,heartbeats:n})).length}function wx(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
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
 */function Sx(n){gi(new ri("platform-logger",e=>new PD(e),"PRIVATE")),gi(new ri("heartbeat",e=>new vx(e),"PRIVATE")),Rn(vg,cT,n),Rn(vg,cT,"esm2017"),Rn("fire-js","")}Sx("");var pT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bs,eb;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,C){function A(){}A.prototype=C.prototype,M.D=C.prototype,M.prototype=new A,M.prototype.constructor=M,M.C=function(N,P,F){for(var D=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)D[xt-2]=arguments[xt];return C.prototype[P].apply(N,D)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(M,C,A){A||(A=0);var N=Array(16);if(typeof C=="string")for(var P=0;16>P;++P)N[P]=C.charCodeAt(A++)|C.charCodeAt(A++)<<8|C.charCodeAt(A++)<<16|C.charCodeAt(A++)<<24;else for(P=0;16>P;++P)N[P]=C[A++]|C[A++]<<8|C[A++]<<16|C[A++]<<24;C=M.g[0],A=M.g[1],P=M.g[2];var F=M.g[3],D=C+(F^A&(P^F))+N[0]+3614090360&4294967295;C=A+(D<<7&4294967295|D>>>25),D=F+(P^C&(A^P))+N[1]+3905402710&4294967295,F=C+(D<<12&4294967295|D>>>20),D=P+(A^F&(C^A))+N[2]+606105819&4294967295,P=F+(D<<17&4294967295|D>>>15),D=A+(C^P&(F^C))+N[3]+3250441966&4294967295,A=P+(D<<22&4294967295|D>>>10),D=C+(F^A&(P^F))+N[4]+4118548399&4294967295,C=A+(D<<7&4294967295|D>>>25),D=F+(P^C&(A^P))+N[5]+1200080426&4294967295,F=C+(D<<12&4294967295|D>>>20),D=P+(A^F&(C^A))+N[6]+2821735955&4294967295,P=F+(D<<17&4294967295|D>>>15),D=A+(C^P&(F^C))+N[7]+4249261313&4294967295,A=P+(D<<22&4294967295|D>>>10),D=C+(F^A&(P^F))+N[8]+1770035416&4294967295,C=A+(D<<7&4294967295|D>>>25),D=F+(P^C&(A^P))+N[9]+2336552879&4294967295,F=C+(D<<12&4294967295|D>>>20),D=P+(A^F&(C^A))+N[10]+4294925233&4294967295,P=F+(D<<17&4294967295|D>>>15),D=A+(C^P&(F^C))+N[11]+2304563134&4294967295,A=P+(D<<22&4294967295|D>>>10),D=C+(F^A&(P^F))+N[12]+1804603682&4294967295,C=A+(D<<7&4294967295|D>>>25),D=F+(P^C&(A^P))+N[13]+4254626195&4294967295,F=C+(D<<12&4294967295|D>>>20),D=P+(A^F&(C^A))+N[14]+2792965006&4294967295,P=F+(D<<17&4294967295|D>>>15),D=A+(C^P&(F^C))+N[15]+1236535329&4294967295,A=P+(D<<22&4294967295|D>>>10),D=C+(P^F&(A^P))+N[1]+4129170786&4294967295,C=A+(D<<5&4294967295|D>>>27),D=F+(A^P&(C^A))+N[6]+3225465664&4294967295,F=C+(D<<9&4294967295|D>>>23),D=P+(C^A&(F^C))+N[11]+643717713&4294967295,P=F+(D<<14&4294967295|D>>>18),D=A+(F^C&(P^F))+N[0]+3921069994&4294967295,A=P+(D<<20&4294967295|D>>>12),D=C+(P^F&(A^P))+N[5]+3593408605&4294967295,C=A+(D<<5&4294967295|D>>>27),D=F+(A^P&(C^A))+N[10]+38016083&4294967295,F=C+(D<<9&4294967295|D>>>23),D=P+(C^A&(F^C))+N[15]+3634488961&4294967295,P=F+(D<<14&4294967295|D>>>18),D=A+(F^C&(P^F))+N[4]+3889429448&4294967295,A=P+(D<<20&4294967295|D>>>12),D=C+(P^F&(A^P))+N[9]+568446438&4294967295,C=A+(D<<5&4294967295|D>>>27),D=F+(A^P&(C^A))+N[14]+3275163606&4294967295,F=C+(D<<9&4294967295|D>>>23),D=P+(C^A&(F^C))+N[3]+4107603335&4294967295,P=F+(D<<14&4294967295|D>>>18),D=A+(F^C&(P^F))+N[8]+1163531501&4294967295,A=P+(D<<20&4294967295|D>>>12),D=C+(P^F&(A^P))+N[13]+2850285829&4294967295,C=A+(D<<5&4294967295|D>>>27),D=F+(A^P&(C^A))+N[2]+4243563512&4294967295,F=C+(D<<9&4294967295|D>>>23),D=P+(C^A&(F^C))+N[7]+1735328473&4294967295,P=F+(D<<14&4294967295|D>>>18),D=A+(F^C&(P^F))+N[12]+2368359562&4294967295,A=P+(D<<20&4294967295|D>>>12),D=C+(A^P^F)+N[5]+4294588738&4294967295,C=A+(D<<4&4294967295|D>>>28),D=F+(C^A^P)+N[8]+2272392833&4294967295,F=C+(D<<11&4294967295|D>>>21),D=P+(F^C^A)+N[11]+1839030562&4294967295,P=F+(D<<16&4294967295|D>>>16),D=A+(P^F^C)+N[14]+4259657740&4294967295,A=P+(D<<23&4294967295|D>>>9),D=C+(A^P^F)+N[1]+2763975236&4294967295,C=A+(D<<4&4294967295|D>>>28),D=F+(C^A^P)+N[4]+1272893353&4294967295,F=C+(D<<11&4294967295|D>>>21),D=P+(F^C^A)+N[7]+4139469664&4294967295,P=F+(D<<16&4294967295|D>>>16),D=A+(P^F^C)+N[10]+3200236656&4294967295,A=P+(D<<23&4294967295|D>>>9),D=C+(A^P^F)+N[13]+681279174&4294967295,C=A+(D<<4&4294967295|D>>>28),D=F+(C^A^P)+N[0]+3936430074&4294967295,F=C+(D<<11&4294967295|D>>>21),D=P+(F^C^A)+N[3]+3572445317&4294967295,P=F+(D<<16&4294967295|D>>>16),D=A+(P^F^C)+N[6]+76029189&4294967295,A=P+(D<<23&4294967295|D>>>9),D=C+(A^P^F)+N[9]+3654602809&4294967295,C=A+(D<<4&4294967295|D>>>28),D=F+(C^A^P)+N[12]+3873151461&4294967295,F=C+(D<<11&4294967295|D>>>21),D=P+(F^C^A)+N[15]+530742520&4294967295,P=F+(D<<16&4294967295|D>>>16),D=A+(P^F^C)+N[2]+3299628645&4294967295,A=P+(D<<23&4294967295|D>>>9),D=C+(P^(A|~F))+N[0]+4096336452&4294967295,C=A+(D<<6&4294967295|D>>>26),D=F+(A^(C|~P))+N[7]+1126891415&4294967295,F=C+(D<<10&4294967295|D>>>22),D=P+(C^(F|~A))+N[14]+2878612391&4294967295,P=F+(D<<15&4294967295|D>>>17),D=A+(F^(P|~C))+N[5]+4237533241&4294967295,A=P+(D<<21&4294967295|D>>>11),D=C+(P^(A|~F))+N[12]+1700485571&4294967295,C=A+(D<<6&4294967295|D>>>26),D=F+(A^(C|~P))+N[3]+2399980690&4294967295,F=C+(D<<10&4294967295|D>>>22),D=P+(C^(F|~A))+N[10]+4293915773&4294967295,P=F+(D<<15&4294967295|D>>>17),D=A+(F^(P|~C))+N[1]+2240044497&4294967295,A=P+(D<<21&4294967295|D>>>11),D=C+(P^(A|~F))+N[8]+1873313359&4294967295,C=A+(D<<6&4294967295|D>>>26),D=F+(A^(C|~P))+N[15]+4264355552&4294967295,F=C+(D<<10&4294967295|D>>>22),D=P+(C^(F|~A))+N[6]+2734768916&4294967295,P=F+(D<<15&4294967295|D>>>17),D=A+(F^(P|~C))+N[13]+1309151649&4294967295,A=P+(D<<21&4294967295|D>>>11),D=C+(P^(A|~F))+N[4]+4149444226&4294967295,C=A+(D<<6&4294967295|D>>>26),D=F+(A^(C|~P))+N[11]+3174756917&4294967295,F=C+(D<<10&4294967295|D>>>22),D=P+(C^(F|~A))+N[2]+718787259&4294967295,P=F+(D<<15&4294967295|D>>>17),D=A+(F^(P|~C))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+C&4294967295,M.g[1]=M.g[1]+(P+(D<<21&4294967295|D>>>11))&4294967295,M.g[2]=M.g[2]+P&4294967295,M.g[3]=M.g[3]+F&4294967295}i.prototype.u=function(M,C){C===void 0&&(C=M.length);for(var A=C-this.blockSize,N=this.B,P=this.h,F=0;F<C;){if(P==0)for(;F<=A;)a(this,M,F),F+=this.blockSize;if(typeof M=="string"){for(;F<C;)if(N[P++]=M.charCodeAt(F++),P==this.blockSize){a(this,N),P=0;break}}else for(;F<C;)if(N[P++]=M[F++],P==this.blockSize){a(this,N),P=0;break}}this.h=P,this.o+=C},i.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var C=1;C<M.length-8;++C)M[C]=0;var A=8*this.o;for(C=M.length-8;C<M.length;++C)M[C]=A&255,A/=256;for(this.u(M),M=Array(16),C=A=0;4>C;++C)for(var N=0;32>N;N+=8)M[A++]=this.g[C]>>>N&255;return M};function l(M,C){var A=d;return Object.prototype.hasOwnProperty.call(A,M)?A[M]:A[M]=C(M)}function c(M,C){this.h=C;for(var A=[],N=!0,P=M.length-1;0<=P;P--){var F=M[P]|0;N&&F==C||(A[P]=F,N=!1)}this.g=A}var d={};function m(M){return-128<=M&&128>M?l(M,function(C){return new c([C|0],0>C?-1:0)}):new c([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return T;if(0>M)return z(g(-M));for(var C=[],A=1,N=0;M>=A;N++)C[N]=M/A|0,A*=4294967296;return new c(C,0)}function y(M,C){if(M.length==0)throw Error("number format error: empty string");if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(M.charAt(0)=="-")return z(y(M.substring(1),C));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=g(Math.pow(C,8)),N=T,P=0;P<M.length;P+=8){var F=Math.min(8,M.length-P),D=parseInt(M.substring(P,P+F),C);8>F?(F=g(Math.pow(C,F)),N=N.j(F).add(g(D))):(N=N.j(A),N=N.add(g(D)))}return N}var T=m(0),w=m(1),R=m(16777216);n=c.prototype,n.m=function(){if(q(this))return-z(this).m();for(var M=0,C=1,A=0;A<this.g.length;A++){var N=this.i(A);M+=(0<=N?N:4294967296+N)*C,C*=4294967296}return M},n.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(x(this))return"0";if(q(this))return"-"+z(this).toString(M);for(var C=g(Math.pow(M,6)),A=this,N="";;){var P=fe(A,C).g;A=$(A,P.j(C));var F=((0<A.g.length?A.g[0]:A.h)>>>0).toString(M);if(A=P,x(A))return F+N;for(;6>F.length;)F="0"+F;N=F+N}},n.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function x(M){if(M.h!=0)return!1;for(var C=0;C<M.g.length;C++)if(M.g[C]!=0)return!1;return!0}function q(M){return M.h==-1}n.l=function(M){return M=$(this,M),q(M)?-1:x(M)?0:1};function z(M){for(var C=M.g.length,A=[],N=0;N<C;N++)A[N]=~M.g[N];return new c(A,~M.h).add(w)}n.abs=function(){return q(this)?z(this):this},n.add=function(M){for(var C=Math.max(this.g.length,M.g.length),A=[],N=0,P=0;P<=C;P++){var F=N+(this.i(P)&65535)+(M.i(P)&65535),D=(F>>>16)+(this.i(P)>>>16)+(M.i(P)>>>16);N=D>>>16,F&=65535,D&=65535,A[P]=D<<16|F}return new c(A,A[A.length-1]&-2147483648?-1:0)};function $(M,C){return M.add(z(C))}n.j=function(M){if(x(this)||x(M))return T;if(q(this))return q(M)?z(this).j(z(M)):z(z(this).j(M));if(q(M))return z(this.j(z(M)));if(0>this.l(R)&&0>M.l(R))return g(this.m()*M.m());for(var C=this.g.length+M.g.length,A=[],N=0;N<2*C;N++)A[N]=0;for(N=0;N<this.g.length;N++)for(var P=0;P<M.g.length;P++){var F=this.i(N)>>>16,D=this.i(N)&65535,xt=M.i(P)>>>16,St=M.i(P)&65535;A[2*N+2*P]+=D*St,W(A,2*N+2*P),A[2*N+2*P+1]+=F*St,W(A,2*N+2*P+1),A[2*N+2*P+1]+=D*xt,W(A,2*N+2*P+1),A[2*N+2*P+2]+=F*xt,W(A,2*N+2*P+2)}for(N=0;N<C;N++)A[N]=A[2*N+1]<<16|A[2*N];for(N=C;N<2*C;N++)A[N]=0;return new c(A,0)};function W(M,C){for(;(M[C]&65535)!=M[C];)M[C+1]+=M[C]>>>16,M[C]&=65535,C++}function X(M,C){this.g=M,this.h=C}function fe(M,C){if(x(C))throw Error("division by zero");if(x(M))return new X(T,T);if(q(M))return C=fe(z(M),C),new X(z(C.g),z(C.h));if(q(C))return C=fe(M,z(C)),new X(z(C.g),C.h);if(30<M.g.length){if(q(M)||q(C))throw Error("slowDivide_ only works with positive integers.");for(var A=w,N=C;0>=N.l(M);)A=ae(A),N=ae(N);var P=ve(A,1),F=ve(N,1);for(N=ve(N,2),A=ve(A,2);!x(N);){var D=F.add(N);0>=D.l(M)&&(P=P.add(A),F=D),N=ve(N,1),A=ve(A,1)}return C=$(M,P.j(C)),new X(P,C)}for(P=T;0<=M.l(C);){for(A=Math.max(1,Math.floor(M.m()/C.m())),N=Math.ceil(Math.log(A)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),F=g(A),D=F.j(C);q(D)||0<D.l(M);)A-=N,F=g(A),D=F.j(C);x(F)&&(F=w),P=P.add(F),M=$(M,D)}return new X(P,M)}n.A=function(M){return fe(this,M).h},n.and=function(M){for(var C=Math.max(this.g.length,M.g.length),A=[],N=0;N<C;N++)A[N]=this.i(N)&M.i(N);return new c(A,this.h&M.h)},n.or=function(M){for(var C=Math.max(this.g.length,M.g.length),A=[],N=0;N<C;N++)A[N]=this.i(N)|M.i(N);return new c(A,this.h|M.h)},n.xor=function(M){for(var C=Math.max(this.g.length,M.g.length),A=[],N=0;N<C;N++)A[N]=this.i(N)^M.i(N);return new c(A,this.h^M.h)};function ae(M){for(var C=M.g.length+1,A=[],N=0;N<C;N++)A[N]=M.i(N)<<1|M.i(N-1)>>>31;return new c(A,M.h)}function ve(M,C){var A=C>>5;C%=32;for(var N=M.g.length-A,P=[],F=0;F<N;F++)P[F]=0<C?M.i(F+A)>>>C|M.i(F+A+1)<<32-C:M.i(F+A);return new c(P,M.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,eb=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,bs=c}).apply(typeof pT<"u"?pT:typeof self<"u"?self:typeof window<"u"?window:{});var tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tb,ku,nb,df,wg,ib,rb,sb;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof tf=="object"&&tf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var v=i;h=h.split(".");for(var b=0;b<h.length-1;b++){var U=h[b];if(!(U in v))break e;v=v[U]}h=h[h.length-1],b=v[h],_=_(b),_!=b&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,b=!1,U={next:function(){if(!b&&v<h.length){var H=v++;return{value:_(H,h[H]),done:!1}}return b=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,b),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,w.apply(null,arguments)}function R(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var b=v.slice();return b.push.apply(b,arguments),h.apply(this,b)}}function x(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(b,U,H){for(var re=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)re[Fe-2]=arguments[Fe];return _.prototype[U].apply(b,re)}}function q(h){const _=h.length;if(0<_){const v=Array(_);for(let b=0;b<_;b++)v[b]=h[b];return v}return[]}function z(h,_){for(let v=1;v<arguments.length;v++){const b=arguments[v];if(m(b)){const U=h.length||0,H=b.length||0;h.length=U+H;for(let re=0;re<H;re++)h[U+re]=b[re]}else h.push(b)}}class ${constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function W(h){return/^[\s\xa0]*$/.test(h)}function X(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function fe(h){return fe[" "](h),h}fe[" "]=function(){};var ae=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function ve(h,_,v){for(const b in h)_.call(v,h[b],b,h)}function M(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function C(h){const _={};for(const v in h)_[v]=h[v];return _}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let v,b;for(let U=1;U<arguments.length;U++){b=arguments[U];for(v in b)h[v]=b[v];for(let H=0;H<A.length;H++)v=A[H],Object.prototype.hasOwnProperty.call(b,v)&&(h[v]=b[v])}}function P(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function F(h){d.setTimeout(()=>{throw h},0)}function D(){var h=Ye;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class xt{constructor(){this.h=this.g=null}add(_,v){const b=St.get();b.set(_,v),this.h?this.h.next=b:this.g=b,this.h=b}}var St=new $(()=>new se,h=>h.reset());class se{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ge=!1,Ye=new xt,O=()=>{const h=d.Promise.resolve(void 0);Te=()=>{h.then(ne)}};var ne=()=>{for(var h;h=D();){try{h.h.call(h.g)}catch(v){F(v)}var _=St;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ge=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var le=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function Ne(h,_){if(oe.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,b=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ae){e:{try{fe(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ce[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ne.aa.h.call(this)}}x(Ne,oe);var Ce={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var bt="closure_listenable_"+(1e6*Math.random()|0),He=0;function ft(h,_,v,b,U){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!b,this.ha=U,this.key=++He,this.da=this.fa=!1}function Ze(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function mn(h){this.src=h,this.g={},this.h=0}mn.prototype.add=function(h,_,v,b,U){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var re=Un(h,_,b,U);return-1<re?(_=h[re],v||(_.fa=!1)):(_=new ft(_,this.src,H,!!b,U),_.fa=v,h.push(_)),_};function Gi(h,_){var v=_.type;if(v in h.g){var b=h.g[v],U=Array.prototype.indexOf.call(b,_,void 0),H;(H=0<=U)&&Array.prototype.splice.call(b,U,1),H&&(Ze(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Un(h,_,v,b){for(var U=0;U<h.length;++U){var H=h[U];if(!H.da&&H.listener==_&&H.capture==!!v&&H.ha==b)return U}return-1}var kr="closure_lm_"+(1e6*Math.random()|0),Pr={};function Ki(h,_,v,b,U){if(Array.isArray(_)){for(var H=0;H<_.length;H++)Ki(h,_[H],v,b,U);return null}return v=Mc(v),h&&h[bt]?h.K(_,v,g(b)?!!b.capture:!1,U):El(h,_,v,!1,b,U)}function El(h,_,v,b,U,H){if(!_)throw Error("Invalid event type");var re=g(U)?!!U.capture:!!U,Fe=Tl(h);if(Fe||(h[kr]=Fe=new mn(h)),v=Fe.add(_,v,b,re,H),v.proxy)return v;if(b=Ga(),v.proxy=b,b.src=h,b.listener=v,h.addEventListener)le||(U=re),U===void 0&&(U=!1),h.addEventListener(_.toString(),b,U);else if(h.attachEvent)h.attachEvent(Qa(_.toString()),b);else if(h.addListener&&h.removeListener)h.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ga(){function h(v){return _.call(h.src,h.listener,v)}const _=Fd;return h}function Ka(h,_,v,b,U){if(Array.isArray(_))for(var H=0;H<_.length;H++)Ka(h,_[H],v,b,U);else b=g(b)?!!b.capture:!!b,v=Mc(v),h&&h[bt]?(h=h.i,_=String(_).toString(),_ in h.g&&(H=h.g[_],v=Un(H,v,b,U),-1<v&&(Ze(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete h.g[_],h.h--)))):h&&(h=Tl(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Un(_,v,b,U)),(v=-1<h?_[h]:null)&&Bs(v))}function Bs(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[bt])Gi(_.i,h);else{var v=h.type,b=h.proxy;_.removeEventListener?_.removeEventListener(v,b,h.capture):_.detachEvent?_.detachEvent(Qa(v),b):_.addListener&&_.removeListener&&_.removeListener(b),(v=Tl(_))?(Gi(v,h),v.h==0&&(v.src=null,_[kr]=null)):Ze(h)}}}function Qa(h){return h in Pr?Pr[h]:Pr[h]="on"+h}function Fd(h,_){if(h.da)h=!0;else{_=new Ne(_,this);var v=h.listener,b=h.ha||h.src;h.fa&&Bs(h),h=v.call(b,_)}return h}function Tl(h){return h=h[kr],h instanceof mn?h:null}var Tn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mc(h){return typeof h=="function"?h:(h[Tn]||(h[Tn]=function(_){return h.handleEvent(_)}),h[Tn])}function Ot(){me.call(this),this.i=new mn(this),this.M=this,this.F=null}x(Ot,me),Ot.prototype[bt]=!0,Ot.prototype.removeEventListener=function(h,_,v,b){Ka(this,h,_,v,b)};function Bt(h,_){var v,b=h.F;if(b)for(v=[];b;b=b.F)v.push(b);if(h=h.M,b=_.type||_,typeof _=="string")_=new oe(_,h);else if(_ instanceof oe)_.target=_.target||h;else{var U=_;_=new oe(b,h),N(_,U)}if(U=!0,v)for(var H=v.length-1;0<=H;H--){var re=_.g=v[H];U=Qi(re,b,!0,_)&&U}if(re=_.g=h,U=Qi(re,b,!0,_)&&U,U=Qi(re,b,!1,_)&&U,v)for(H=0;H<v.length;H++)re=_.g=v[H],U=Qi(re,b,!1,_)&&U}Ot.prototype.N=function(){if(Ot.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],b=0;b<v.length;b++)Ze(v[b]);delete h.g[_],h.h--}}this.F=null},Ot.prototype.K=function(h,_,v,b){return this.i.add(String(h),_,!1,v,b)},Ot.prototype.L=function(h,_,v,b){return this.i.add(String(h),_,!0,v,b)};function Qi(h,_,v,b){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,H=0;H<_.length;++H){var re=_[H];if(re&&!re.da&&re.capture==v){var Fe=re.listener,kt=re.ha||re.src;re.fa&&Gi(h.i,re),U=Fe.call(kt,b)!==!1&&U}}return U&&!b.defaultPrevented}function kc(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function wl(h){h.g=kc(()=>{h.g=null,h.i&&(h.i=!1,wl(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class Bd extends me{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:wl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function js(h){me.call(this),this.h=h,this.g={}}x(js,me);var Lr=[];function on(h){ve(h.g,function(_,v){this.g.hasOwnProperty(v)&&Bs(_)},h),h.g={}}js.prototype.N=function(){js.aa.N.call(this),on(this)},js.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Sl=d.JSON.stringify,vi=d.JSON.parse,pn=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function bl(){}bl.prototype.h=null;function Pc(h){return h.h||(h.h=h.i())}function Lc(){}var Ei={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vr(){oe.call(this,"d")}x(Vr,oe);function si(){oe.call(this,"c")}x(si,oe);var zn={},Ur=null;function $a(){return Ur=Ur||new Ot}zn.La="serverreachability";function Al(h){oe.call(this,zn.La,h)}x(Al,oe);function zr(h){const _=$a();Bt(_,new Al(_))}zn.STAT_EVENT="statevent";function Ya(h,_){oe.call(this,zn.STAT_EVENT,h),this.stat=_}x(Ya,oe);function vt(h){const _=$a();Bt(_,new Ya(_,h))}zn.Ma="timingevent";function Vc(h,_){oe.call(this,zn.Ma,h),this.size=_}x(Vc,oe);function Fr(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Br(){this.g=!0}Br.prototype.xa=function(){this.g=!1};function Uc(h,_,v,b,U,H){h.info(function(){if(h.g)if(H)for(var re="",Fe=H.split("&"),kt=0;kt<Fe.length;kt++){var Be=Fe[kt].split("=");if(1<Be.length){var Ht=Be[0];Be=Be[1];var Pt=Ht.split("_");re=2<=Pt.length&&Pt[1]=="type"?re+(Ht+"="+Be+"&"):re+(Ht+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+b+") [attempt "+U+"]: "+_+`
`+v+`
`+re})}function zc(h,_,v,b,U,H,re){h.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+U+"]: "+_+`
`+v+`
`+H+" "+re})}function jr(h,_,v,b){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+jt(h,v)+(b?" "+b:"")})}function Ti(h,_){h.info(function(){return"TIMEOUT: "+_})}Br.prototype.info=function(){};function jt(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var b=v[h];if(!(2>b.length)){var U=b[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<U.length;re++)U[re]=""}}}}return Sl(v)}catch{return _}}var Mt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$i={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qs;function Wa(){}x(Wa,bl),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},qs=new Wa;function wi(h,_,v,b){this.j=h,this.i=_,this.l=v,this.R=b||1,this.U=new js(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rl}function Rl(){this.i=null,this.g="",this.h=!1}var qr={},Hs={};function ai(h,_,v){h.L=1,h.v=Qs(dt(_)),h.m=v,h.P=!0,Yi(h,null)}function Yi(h,_){h.F=Date.now(),lt(h),h.A=dt(h.v);var v=h.A,b=h.R;Array.isArray(b)||(b=[String(b)]),Zi(v.i,"t",b),h.C=0,v=h.j.J,h.h=new Rl,h.g=Jc(h.j,v?_:null,!h.m),0<h.O&&(h.M=new Bd(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,b=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(Lr[0]=U.toString()),U=Lr);for(var H=0;H<U.length;H++){var re=Ki(v,U[H],b||_.handleEvent,!1,_.h||_);if(!re)break;_.g[re.key]=re}_=h.H?C(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),zr(),Uc(h.i,h.u,h.A,h.l,h.R,h.m)}wi.prototype.ca=function(h){h=h.target;const _=this.M;_&&Hn(h)==3?_.j():this.Y(h)},wi.prototype.Y=function(h){try{if(h==this.g)e:{const Pt=Hn(this.g);var _=this.g.Ba();const nr=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||Gc(this.g)))){this.J||Pt!=4||_==7||(_==8||0>=nr?zr(3):zr(2)),Xa(this);var v=this.g.Z();this.X=v;t:if(Hr(this)){var b=Gc(this.g);h="";var U=b.length,H=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wn(this),Nn(this);var re="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(b[_],{stream:!(H&&_==U-1)});b.length=0,this.h.g+=h,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,zc(this.i,this.u,this.A,this.l,this.R,Pt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,kt=this.g;if((Fe=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Fe)){var Be=Fe;break t}}Be=null}if(v=Be)jr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Dn(this,v);else{this.o=!1,this.s=3,vt(12),wn(this),Nn(this);break e}}if(this.P){v=!0;let Zt;for(;!this.J&&this.C<re.length;)if(Zt=Gr(this,re),Zt==Hs){Pt==4&&(this.s=4,vt(14),v=!1),jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Zt==qr){this.s=4,vt(15),jr(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else jr(this.i,this.l,Zt,null),Dn(this,Zt);if(Hr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||re.length!=0||this.h.h||(this.s=1,vt(16),v=!1),this.o=this.o&&v,!v)jr(this.i,this.l,re,"[Invalid Chunked Response]"),wn(this),Nn(this);else if(0<re.length&&!this.W){this.W=!0;var Ht=this.j;Ht.g==this&&Ht.ba&&!Ht.M&&(Ht.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),ea(Ht),Ht.M=!0,vt(11))}}else jr(this.i,this.l,re,null),Dn(this,re);Pt==4&&wn(this),this.o&&!this.J&&(Pt==4?Wc(this.j,this):(this.o=!1,lt(this)))}else Qd(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),wn(this),Nn(this)}}}catch{}finally{}};function Hr(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Gr(h,_){var v=h.C,b=_.indexOf(`
`,v);return b==-1?Hs:(v=Number(_.substring(v,b)),isNaN(v)?qr:(b+=1,b+v>_.length?Hs:(_=_.slice(b,b+v),h.C=b+v,_)))}wi.prototype.cancel=function(){this.J=!0,wn(this)};function lt(h){h.S=Date.now()+h.I,Cl(h,h.I)}function Cl(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Fr(w(h.ba,h),_)}function Xa(h){h.B&&(d.clearTimeout(h.B),h.B=null)}wi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Ti(this.i,this.A),this.L!=2&&(zr(),vt(17)),wn(this),this.s=2,Nn(this)):Cl(this,this.S-h)};function Nn(h){h.j.G==0||h.J||Wc(h.j,h)}function wn(h){Xa(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,on(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Dn(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Kr(v.h,h))){if(!h.K&&Kr(v.h,h)&&v.G==3){try{var b=v.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var U=b;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)oo(v),so(v);else break e;Ul(v),vt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Fr(w(v.Za,v),6e3));if(1>=Fc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else tr(v,11)}else if((h.K||v.g==h)&&oo(v),!W(_))for(U=v.Da.g.parse(_),_=0;_<U.length;_++){let Be=U[_];if(v.T=Be[0],Be=Be[1],v.G==2)if(Be[0]=="c"){v.K=Be[1],v.ia=Be[2];const Ht=Be[3];Ht!=null&&(v.la=Ht,v.j.info("VER="+v.la));const Pt=Be[4];Pt!=null&&(v.Aa=Pt,v.j.info("SVER="+v.Aa));const nr=Be[5];nr!=null&&typeof nr=="number"&&0<nr&&(b=1.5*nr,v.L=b,v.j.info("backChannelRequestTimeoutMs_="+b)),b=v;const Zt=h.g;if(Zt){const Ni=Zt.g?Zt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var H=b.h;H.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Qr(H,H.h),H.h=null))}if(b.D){const Fl=Zt.g?Zt.g.getResponseHeader("X-HTTP-Session-Id"):null;Fl&&(b.ya=Fl,Ge(b.I,b.D,Fl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),b=v;var re=h;if(b.qa=Zc(b,b.J?b.ia:null,b.W),re.K){Fn(b.h,re);var Fe=re,kt=b.L;kt&&(Fe.I=kt),Fe.B&&(Xa(Fe),lt(Fe)),b.g=re}else $c(b);0<v.i.length&&ao(v)}else Be[0]!="stop"&&Be[0]!="close"||tr(v,7);else v.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?tr(v,7):Ll(v):Be[0]!="noop"&&v.l&&v.l.ta(Be),v.v=0)}}zr(4)}catch{}}var jd=class{constructor(h,_){this.g=h,this.map=_}};function Il(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nl(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Fc(h){return h.h?1:h.g?h.g.size:0}function Kr(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Qr(h,_){h.g?h.g.add(_):h.h=_}function Fn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Il.prototype.cancel=function(){if(this.i=gn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function gn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return q(h.i)}function Bc(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,b=0;b<v;b++)_.push(h[b]);return _}_=[],v=0;for(b in h)_[v++]=h[b];return _}function qd(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const b in h)_[v++]=b;return _}}}function Gs(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=qd(h),b=Bc(h),U=b.length,H=0;H<U;H++)_.call(void 0,b[H],v&&v[H],h)}var Dl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Za(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var b=h[v].indexOf("="),U=null;if(0<=b){var H=h[v].substring(0,b);U=h[v].substring(b+1)}else H=h[v];_(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function Wi(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Wi){this.h=h.h,$r(this,h.j),this.o=h.o,this.g=h.g,Ks(this,h.s),this.l=h.l;var _=h.i,v=new Si;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),Ja(this,v),this.m=h.m}else h&&(_=String(h).match(Dl))?(this.h=!1,$r(this,_[1]||"",!0),this.o=Yr(_[2]||""),this.g=Yr(_[3]||"",!0),Ks(this,_[4]),this.l=Yr(_[5]||"",!0),Ja(this,_[6]||"",!0),this.m=Yr(_[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Wi.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Bn(_,xl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Bn(_,xl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Bn(v,v.charAt(0)=="/"?Ol:jc,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Bn(v,Kd)),h.join("")};function dt(h){return new Wi(h)}function $r(h,_,v){h.j=v?Yr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ks(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Ja(h,_,v){_ instanceof Si?(h.i=_,Ml(h.i,h.h)):(v||(_=Bn(_,Gd)),h.i=new Si(_,h.h))}function Ge(h,_,v){h.i.set(_,v)}function Qs(h){return Ge(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Yr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Bn(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Hd),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Hd(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var xl=/[#\/\?@]/g,jc=/[#\?:]/g,Ol=/[#\?]/g,Gd=/[#\?@]/g,Kd=/#/g;function Si(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function jn(h){h.g||(h.g=new Map,h.h=0,h.i&&Za(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=Si.prototype,n.add=function(h,_){jn(this),this.i=null,h=Ji(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function eo(h,_){jn(h),_=Ji(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Xi(h,_){return jn(h),_=Ji(h,_),h.g.has(_)}n.forEach=function(h,_){jn(this),this.g.forEach(function(v,b){v.forEach(function(U){h.call(_,U,b,this)},this)},this)},n.na=function(){jn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let b=0;b<_.length;b++){const U=h[b];for(let H=0;H<U.length;H++)v.push(_[b])}return v},n.V=function(h){jn(this);let _=[];if(typeof h=="string")Xi(this,h)&&(_=_.concat(this.g.get(Ji(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return jn(this),this.i=null,h=Ji(this,h),Xi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Zi(h,_,v){eo(h,_),0<v.length&&(h.i=null,h.g.set(Ji(h,_),q(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var b=_[v];const H=encodeURIComponent(String(b)),re=this.V(b);for(b=0;b<re.length;b++){var U=H;re[b]!==""&&(U+="="+encodeURIComponent(String(re[b]))),h.push(U)}}return this.i=h.join("&")};function Ji(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Ml(h,_){_&&!h.j&&(jn(h),h.i=null,h.g.forEach(function(v,b){var U=b.toLowerCase();b!=U&&(eo(this,b),Zi(this,U,v))},h)),h.j=_}function qc(h,_){const v=new Br;if(d.Image){const b=new Image;b.onload=R(qn,v,"TestLoadImage: loaded",!0,_,b),b.onerror=R(qn,v,"TestLoadImage: error",!1,_,b),b.onabort=R(qn,v,"TestLoadImage: abort",!1,_,b),b.ontimeout=R(qn,v,"TestLoadImage: timeout",!1,_,b),d.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=h}else _(!1)}function $s(h,_){const v=new Br,b=new AbortController,U=setTimeout(()=>{b.abort(),qn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:b.signal}).then(H=>{clearTimeout(U),H.ok?qn(v,"TestPingServer: ok",!0,_):qn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),qn(v,"TestPingServer: error",!1,_)})}function qn(h,_,v,b,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),b(v)}catch{}}function Ys(){this.g=new pn}function bi(h,_,v){const b=v||"";try{Gs(h,function(U,H){let re=U;g(U)&&(re=Sl(U)),_.push(b+H+"="+encodeURIComponent(re))})}catch(U){throw _.push(b+"type="+encodeURIComponent("_badmap")),U}}function Wr(h){this.l=h.Ub||null,this.j=h.eb||!1}x(Wr,bl),Wr.prototype.g=function(){return new er(this.l,this.j)},Wr.prototype.i=function(h){return function(){return h}}({});function er(h,_){Ot.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(er,Ot),n=er.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ri(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ri(this)),this.g&&(this.readyState=3,Ri(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;kl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function kl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ai(this):Ri(this),this.readyState==3&&kl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Ai(this))},n.Qa=function(h){this.g&&(this.response=h,Ai(this))},n.ga=function(){this.g&&Ai(this)};function Ai(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ri(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ri(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(er.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Pl(h){let _="";return ve(h,function(v,b){_+=b,_+=":",_+=v,_+=`\r
`}),_}function qt(h,_,v){e:{for(b in v){var b=!1;break e}b=!0}b||(v=Pl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Ge(h,_,v))}function We(h){Ot.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(We,Ot);var to=/^https?$/i,Ws=["POST","PUT"];n=We.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qs.g(),this.v=this.o?Pc(this.o):Pc(qs),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){Hc(this,H);return}if(h=v||"",v=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var U in b)v.set(U,b[U]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const H of b.keys())v.set(H,b.get(H));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ws,_,void 0))||b||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of v)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xs(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){Hc(this,H)}};function Hc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,no(h),Ci(h)}function no(h){h.A||(h.A=!0,Bt(h,"complete"),Bt(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Bt(this,"complete"),Bt(this,"abort"),Ci(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ci(this,!0)),We.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?io(this):this.bb())},n.bb=function(){io(this)};function io(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Hn(h)!=4||h.Z()!=2)){if(h.u&&Hn(h)==4)kc(h.Ea,0,h);else if(Bt(h,"readystatechange"),Hn(h)==4){h.h=!1;try{const re=h.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var b;if(b=re===0){var U=String(h.D).match(Dl)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),b=!to.test(U?U.toLowerCase():"")}v=b}if(v)Bt(h,"complete"),Bt(h,"success");else{h.m=6;try{var H=2<Hn(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",no(h)}}finally{Ci(h)}}}}function Ci(h,_){if(h.g){Xs(h);const v=h.g,b=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Bt(h,"ready");try{v.onreadystatechange=b}catch{}}}function Xs(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Hn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),vi(_)}};function Gc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Qd(h){const _={};h=(h.g&&2<=Hn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<h.length;b++){if(W(h[b]))continue;var v=P(h[b]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=_[U]||[];_[U]=H,H.push(v)}M(_,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zs(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function ro(h){this.Aa=0,this.i=[],this.j=new Br,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zs("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zs("baseRetryDelayMs",5e3,h),this.cb=Zs("retryDelaySeedMs",1e4,h),this.Wa=Zs("forwardChannelMaxRetries",2,h),this.wa=Zs("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Il(h&&h.concurrentRequestLimit),this.Da=new Ys,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ro.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,b){vt(0),this.W=h,this.H=_||{},v&&b!==void 0&&(this.H.OSID=v,this.H.OAID=b),this.F=this.X,this.I=Zc(this,null,this.W),ao(this)};function Ll(h){if(Kc(h),h.G==3){var _=h.U++,v=dt(h.I);if(Ge(v,"SID",h.K),Ge(v,"RID",_),Ge(v,"TYPE","terminate"),Js(h,v),_=new wi(h,h.j,_),_.L=2,_.v=Qs(dt(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=Jc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),lt(_)}Xc(h)}function so(h){h.g&&(ea(h),h.g.cancel(),h.g=null)}function Kc(h){so(h),h.u&&(d.clearTimeout(h.u),h.u=null),oo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function ao(h){if(!Nl(h.h)&&!h.s){h.s=!0;var _=h.Ga;Te||O(),ge||(Te(),ge=!0),Ye.add(_,h),h.B=0}}function $d(h,_){return Fc(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Fr(w(h.Ga,h,_),zl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new wi(this,this.j,h);let H=this.o;if(this.S&&(H?(H=C(H),N(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var b=this.i[v];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Qc(this,U,_),v=dt(this.I),Ge(v,"RID",h),Ge(v,"CVER",22),this.D&&Ge(v,"X-HTTP-Session-Id",this.D),Js(this,v),H&&(this.O?_="headers="+encodeURIComponent(String(Pl(H)))+"&"+_:this.m&&qt(v,this.m,H)),Qr(this.h,U),this.Ua&&Ge(v,"TYPE","init"),this.P?(Ge(v,"$req",_),Ge(v,"SID","null"),U.T=!0,ai(U,v,null)):ai(U,v,_),this.G=2}}else this.G==3&&(h?Vl(this,h):this.i.length==0||Nl(this.h)||Vl(this))};function Vl(h,_){var v;_?v=_.l:v=h.U++;const b=dt(h.I);Ge(b,"SID",h.K),Ge(b,"RID",v),Ge(b,"AID",h.T),Js(h,b),h.m&&h.o&&qt(b,h.m,h.o),v=new wi(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Qc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Qr(h.h,v),ai(v,b,_)}function Js(h,_){h.H&&ve(h.H,function(v,b){Ge(_,b,v)}),h.l&&Gs({},function(v,b){Ge(_,b,v)})}function Qc(h,_,v){v=Math.min(h.i.length,v);var b=h.l?w(h.l.Na,h.l,h):null;e:{var U=h.i;let H=-1;for(;;){const re=["count="+v];H==-1?0<v?(H=U[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let Fe=!0;for(let kt=0;kt<v;kt++){let Be=U[kt].g;const Ht=U[kt].map;if(Be-=H,0>Be)H=Math.max(0,U[kt].g-100),Fe=!1;else try{bi(Ht,re,"req"+Be+"_")}catch{b&&b(Ht)}}if(Fe){b=re.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,b}function $c(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;Te||O(),ge||(Te(),ge=!0),Ye.add(_,h),h.v=0}}function Ul(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Fr(w(h.Fa,h),zl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,Yc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Fr(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),so(this),Yc(this))};function ea(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Yc(h){h.g=new wi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=dt(h.qa);Ge(_,"RID","rpc"),Ge(_,"SID",h.K),Ge(_,"AID",h.T),Ge(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ge(_,"TO",h.ja),Ge(_,"TYPE","xmlhttp"),Js(h,_),h.m&&h.o&&qt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Qs(dt(_)),v.m=null,v.P=!0,Yi(v,h)}n.Za=function(){this.C!=null&&(this.C=null,so(this),Ul(this),vt(19))};function oo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Wc(h,_){var v=null;if(h.g==_){oo(h),ea(h),h.g=null;var b=2}else if(Kr(h.h,_))v=_.D,Fn(h.h,_),b=1;else return;if(h.G!=0){if(_.o)if(b==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;b=$a(),Bt(b,new Vc(b,v)),ao(h)}else $c(h);else if(U=_.s,U==3||U==0&&0<_.X||!(b==1&&$d(h,_)||b==2&&Ul(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),U){case 1:tr(h,5);break;case 4:tr(h,10);break;case 3:tr(h,6);break;default:tr(h,2)}}}function zl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function tr(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),b=h.Xa;const U=!b;b=new Wi(b||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||$r(b,"https"),Qs(b),U?qc(b.toString(),v):$s(b.toString(),v)}else vt(2);h.G=0,h.l&&h.l.sa(_),Xc(h),Kc(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Xc(h){if(h.G=0,h.ka=[],h.l){const _=gn(h.h);(_.length!=0||h.i.length!=0)&&(z(h.ka,_),z(h.ka,h.i),h.h.i.length=0,q(h.i),h.i.length=0),h.l.ra()}}function Zc(h,_,v){var b=v instanceof Wi?dt(v):new Wi(v);if(b.g!="")_&&(b.g=_+"."+b.g),Ks(b,b.s);else{var U=d.location;b=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var H=new Wi(null);b&&$r(H,b),_&&(H.g=_),U&&Ks(H,U),v&&(H.l=v),b=H}return v=h.D,_=h.ya,v&&_&&Ge(b,v,_),Ge(b,"VER",h.la),Js(h,b),b}function Jc(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new We(new Wr({eb:v})):new We(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function eh(){}n=eh.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function lo(){}lo.prototype.g=function(h,_){return new _n(h,_)};function _n(h,_){Ot.call(this),this.g=new ro(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!W(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!W(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ii(this)}x(_n,Ot),_n.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_n.prototype.close=function(){Ll(this.g)},_n.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=Sl(h),h=v);_.i.push(new jd(_.Ya++,h)),_.G==3&&ao(_)},_n.prototype.N=function(){this.g.l=null,delete this.j,Ll(this.g),delete this.g,_n.aa.N.call(this)};function th(h){Vr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}x(th,Vr);function nh(){si.call(this),this.status=1}x(nh,si);function Ii(h){this.g=h}x(Ii,eh),Ii.prototype.ua=function(){Bt(this.g,"a")},Ii.prototype.ta=function(h){Bt(this.g,new th(h))},Ii.prototype.sa=function(h){Bt(this.g,new nh)},Ii.prototype.ra=function(){Bt(this.g,"b")},lo.prototype.createWebChannel=lo.prototype.g,_n.prototype.send=_n.prototype.o,_n.prototype.open=_n.prototype.m,_n.prototype.close=_n.prototype.close,sb=function(){return new lo},rb=function(){return $a()},ib=zn,wg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mt.NO_ERROR=0,Mt.TIMEOUT=8,Mt.HTTP_ERROR=6,df=Mt,$i.COMPLETE="complete",nb=$i,Lc.EventType=Ei,Ei.OPEN="a",Ei.CLOSE="b",Ei.ERROR="c",Ei.MESSAGE="d",Ot.prototype.listen=Ot.prototype.K,ku=Lc,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,tb=We}).apply(typeof tf<"u"?tf:typeof self<"u"?self:typeof window<"u"?window:{});const gT="@firebase/firestore",_T="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let fl="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=new vc("@firebase/firestore");function Vo(){return Ca.logLevel}function ue(n,...e){if(Ca.logLevel<=ke.DEBUG){const t=e.map(d_);Ca.debug(`Firestore (${fl}): ${n}`,...t)}}function Ir(n,...e){if(Ca.logLevel<=ke.ERROR){const t=e.map(d_);Ca.error(`Firestore (${fl}): ${n}`,...t)}}function Yo(n,...e){if(Ca.logLevel<=ke.WARN){const t=e.map(d_);Ca.warn(`Firestore (${fl}): ${n}`,...t)}}function d_(n){if(typeof n=="string")return n;try{/**
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
 */function we(n="Unexpected state"){const e=`FIRESTORE (${fl}) INTERNAL ASSERTION FAILED: `+n;throw Ir(e),new Error(e)}function Xe(n,e){n||we()}function Re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends yi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(hn.UNAUTHENTICATED))}shutdown(){}}class Ax{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Rx{constructor(e){this.t=e,this.currentUser=hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0);let i=this.i;const a=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new As;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new As,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},d=m=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new As)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Xe(typeof i.accessToken=="string"),new ab(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new hn(e)}}class Cx{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=hn.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Ix{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new Cx(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(hn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class yT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nx{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ti(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0);const i=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new yT(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Xe(typeof t.token=="string"),this.R=t.token,new yT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dx(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=Dx(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%62))}return i}}function Ue(n,e){return n<e?-1:n>e?1:0}function Wo(n,e,t){return n.length===e.length&&n.every((i,a)=>t(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=-62135596800,ET=1e6;class zt{static now(){return zt.fromMillis(Date.now())}static fromDate(e){return zt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*ET);return new zt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new he(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new he(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<vT)throw new he(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ET}_compareTo(e){return this.seconds===e.seconds?Ue(this.nanoseconds,e.nanoseconds):Ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-vT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new zt(0,0))}static max(){return new be(new zt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT="__name__";class Pi{constructor(e,t,i){t===void 0?t=0:t>e.length&&we(),i===void 0?i=e.length-t:i>e.length-t&&we(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=Pi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const i=Pi.isNumericId(e),a=Pi.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?Pi.extractNumericId(e).compare(Pi.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bs.fromString(e.substring(4,e.length-2))}}class ot extends Pi{construct(e,t,i){return new ot(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new he(ee.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(a=>a.length>0))}return new ot(t)}static emptyPath(){return new ot([])}}const xx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rn extends Pi{construct(e,t,i){return new rn(e,t,i)}static isValidIdentifier(e){return xx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===TT}static keyField(){return new rn([TT])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new he(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new he(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new he(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(i+=d,a++):(l(),a++)}if(l(),c)throw new he(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rn(t)}static emptyPath(){return new rn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(ot.fromString(e))}static fromName(e){return new _e(ot.fromString(e).popFirst(5))}static empty(){return new _e(ot.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ot.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ot.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new ot(e.slice()))}}/**
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
 */const Ju=-1;function Ox(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,a=be.fromTimestamp(i===1e9?new zt(t+1,0):new zt(t,i));return new xs(a,_e.empty(),e)}function Mx(n){return new xs(n.readTime,n.key,Ju)}class xs{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new xs(be.min(),_e.empty(),Ju)}static max(){return new xs(be.max(),_e.empty(),Ju)}}function kx(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const Px="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==Px)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,i)=>{t(e)})}static reject(e){return new J((t,i)=>{i(e)})}static waitFor(e){return new J((t,i)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},m=>i(m))}),c=!0,l===a&&t()})}static or(e){let t=J.resolve(!1);for(const i of e)t=t.next(a=>a?J.resolve(a):i());return t}static forEach(e,t){const i=[];return e.forEach((a,l)=>{i.push(t.call(this,a,l))}),this.waitFor(i)}static mapArray(e,t){return new J((i,a)=>{const l=e.length,c=new Array(l);let d=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next(y=>{c[g]=y,++d,d===l&&i(c)},y=>a(y))}})}static doWhile(e,t){return new J((i,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):i()};l()})}}function Vx(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ml(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}fd.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=-1;function dd(n){return n==null}function Nf(n){return n===0&&1/n==-1/0}function Ux(n){return typeof n=="number"&&Number.isInteger(n)&&!Nf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="";function zx(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=wT(e)),e=Fx(n.get(t),e);return wT(e)}function Fx(n,e){let t=e;const i=n.length;for(let a=0;a<i;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case lb:t+="";break;default:t+=l}}return t}function wT(n){return n+lb+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ua(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ub(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dt=class Sg{constructor(e,t){this.comparator=e,this.root=t||Rs.EMPTY}insert(e,t){return new Sg(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Rs.BLACK,null,null))}remove(e){return new Sg(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Rs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nf(this.root,e,this.comparator,!1)}getReverseIterator(){return new nf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nf(this.root,e,this.comparator,!0)}},nf=class{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Rs=class yr{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??yr.RED,this.left=a??yr.EMPTY,this.right=l??yr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new yr(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return yr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return yr.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,yr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,yr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}};Rs.EMPTY=null,Rs.RED=!0,Rs.BLACK=!1;Rs.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,i,a,l){return this}insert(e,t,i){return new Rs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bT(this.data.getIterator())}getIteratorFrom(e){return new bT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ft(this.comparator);return t.data=e,t}}class bT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class fi{constructor(e){this.fields=e,e.sort(rn.comparator)}static empty(){return new fi([])}unionWith(e){let t=new Ft(rn.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new fi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Wo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class cb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class sn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new cb("Invalid base64 string: "+l):l}}(e);return new sn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new sn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}sn.EMPTY_BYTE_STRING=new sn("");const Bx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Os(n){if(Xe(!!n),typeof n=="string"){let e=0;const t=Bx.exec(n);if(Xe(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Tt(n.seconds),nanos:Tt(n.nanos)}}function Tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ms(n){return typeof n=="string"?sn.fromBase64String(n):sn.fromUint8Array(n)}/**
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
 */const hb="server_timestamp",fb="__type__",db="__previous_value__",mb="__local_write_time__";function p_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[fb])===null||t===void 0?void 0:t.stringValue)===hb}function md(n){const e=n.mapValue.fields[db];return p_(e)?md(e):e}function ec(n){const e=Os(n.mapValue.fields[mb].timestampValue);return new zt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e,t,i,a,l,c,d,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=g}}const Df="(default)";class tc{constructor(e,t){this.projectId=e,this.database=t||Df}static empty(){return new tc("","")}get isDefaultDatabase(){return this.database===Df}isEqual(e){return e instanceof tc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pb="__type__",qx="__max__",rf={mapValue:{}},gb="__vector__",xf="value";function ks(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?p_(n)?4:Gx(n)?9007199254740991:Hx(n)?10:11:we()}function Fi(n,e){if(n===e)return!0;const t=ks(n);if(t!==ks(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ec(n).isEqual(ec(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Os(a.timestampValue),d=Os(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Ms(a.bytesValue).isEqual(Ms(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return Tt(a.geoPointValue.latitude)===Tt(l.geoPointValue.latitude)&&Tt(a.geoPointValue.longitude)===Tt(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return Tt(a.integerValue)===Tt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=Tt(a.doubleValue),d=Tt(l.doubleValue);return c===d?Nf(c)===Nf(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Wo(n.arrayValue.values||[],e.arrayValue.values||[],Fi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(ST(c)!==ST(d))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(d[m]===void 0||!Fi(c[m],d[m])))return!1;return!0}(n,e);default:return we()}}function nc(n,e){return(n.values||[]).find(t=>Fi(t,e))!==void 0}function Xo(n,e){if(n===e)return 0;const t=ks(n),i=ks(e);if(t!==i)return Ue(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ue(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=Tt(l.integerValue||l.doubleValue),m=Tt(c.integerValue||c.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(n,e);case 3:return AT(n.timestampValue,e.timestampValue);case 4:return AT(ec(n),ec(e));case 5:return Ue(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Ms(l),m=Ms(c);return d.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),m=c.split("/");for(let g=0;g<d.length&&g<m.length;g++){const y=Ue(d[g],m[g]);if(y!==0)return y}return Ue(d.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ue(Tt(l.latitude),Tt(c.latitude));return d!==0?d:Ue(Tt(l.longitude),Tt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return RT(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,m,g,y;const T=l.fields||{},w=c.fields||{},R=(d=T[xf])===null||d===void 0?void 0:d.arrayValue,x=(m=w[xf])===null||m===void 0?void 0:m.arrayValue,q=Ue(((g=R==null?void 0:R.values)===null||g===void 0?void 0:g.length)||0,((y=x==null?void 0:x.values)===null||y===void 0?void 0:y.length)||0);return q!==0?q:RT(R,x)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===rf.mapValue&&c===rf.mapValue)return 0;if(l===rf.mapValue)return 1;if(c===rf.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),g=c.fields||{},y=Object.keys(g);m.sort(),y.sort();for(let T=0;T<m.length&&T<y.length;++T){const w=Ue(m[T],y[T]);if(w!==0)return w;const R=Xo(d[m[T]],g[y[T]]);if(R!==0)return R}return Ue(m.length,y.length)}(n.mapValue,e.mapValue);default:throw we()}}function AT(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ue(n,e);const t=Os(n),i=Os(e),a=Ue(t.seconds,i.seconds);return a!==0?a:Ue(t.nanos,i.nanos)}function RT(n,e){const t=n.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=Xo(t[a],i[a]);if(l)return l}return Ue(t.length,i.length)}function Zo(n){return bg(n)}function bg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Os(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ms(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return _e.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=bg(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${bg(t.fields[c])}`;return a+"}"}(n.mapValue):we()}function mf(n){switch(ks(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=md(n);return e?16+mf(e):16;case 5:return 2*n.stringValue.length;case 6:return Ms(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+mf(l),0)}(n.arrayValue);case 10:case 11:return function(i){let a=0;return Ua(i.fields,(l,c)=>{a+=l.length+mf(c)}),a}(n.mapValue);default:throw we()}}function CT(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ag(n){return!!n&&"integerValue"in n}function g_(n){return!!n&&"arrayValue"in n}function IT(n){return!!n&&"nullValue"in n}function NT(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function pf(n){return!!n&&"mapValue"in n}function Hx(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pb])===null||t===void 0?void 0:t.stringValue)===gb}function Uu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ua(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Uu(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Uu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Gx(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===qx}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this.value=e}static empty(){return new ni({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!pf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Uu(t)}setAll(e){let t=rn.emptyPath(),i={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,i,a),i={},a=[],t=d.popLast()}c?i[d.lastSegment()]=Uu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());pf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];pf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){Ua(t,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new ni(Uu(this.value))}}function _b(n){const e=[];return Ua(n.fields,(t,i)=>{const a=new rn([t]);if(pf(i)){const l=_b(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new fi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,i,a,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new fn(e,0,be.min(),be.min(),be.min(),ni.empty(),0)}static newFoundDocument(e,t,i,a){return new fn(e,1,t,be.min(),i,a,0)}static newNoDocument(e,t){return new fn(e,2,t,be.min(),be.min(),ni.empty(),0)}static newUnknownDocument(e,t){return new fn(e,3,t,be.min(),be.min(),ni.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ni.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ni.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof fn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new fn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Of{constructor(e,t){this.position=e,this.inclusive=t}}function DT(n,e,t){let i=0;for(let a=0;a<n.position.length;a++){const l=e[a],c=n.position[a];if(l.field.isKeyField()?i=_e.comparator(_e.fromName(c.referenceValue),t.key):i=Xo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function xT(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Fi(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mf{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kx(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class yb{}class Nt extends yb{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new $x(e,t,i):t==="array-contains"?new Xx(e,i):t==="in"?new Zx(e,i):t==="not-in"?new Jx(e,i):t==="array-contains-any"?new eO(e,i):new Nt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Yx(e,i):new Wx(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Xo(t,this.value)):t!==null&&ks(this.value)===ks(t)&&this.matchesComparison(Xo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _i extends yb{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new _i(e,t)}matches(e){return vb(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function vb(n){return n.op==="and"}function Eb(n){return Qx(n)&&vb(n)}function Qx(n){for(const e of n.filters)if(e instanceof _i)return!1;return!0}function Rg(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+Zo(n.value);if(Eb(n))return n.filters.map(e=>Rg(e)).join(",");{const e=n.filters.map(t=>Rg(t)).join(",");return`${n.op}(${e})`}}function Tb(n,e){return n instanceof Nt?function(i,a){return a instanceof Nt&&i.op===a.op&&i.field.isEqual(a.field)&&Fi(i.value,a.value)}(n,e):n instanceof _i?function(i,a){return a instanceof _i&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,c,d)=>l&&Tb(c,a.filters[d]),!0):!1}(n,e):void we()}function wb(n){return n instanceof Nt?function(t){return`${t.field.canonicalString()} ${t.op} ${Zo(t.value)}`}(n):n instanceof _i?function(t){return t.op.toString()+" {"+t.getFilters().map(wb).join(" ,")+"}"}(n):"Filter"}class $x extends Nt{constructor(e,t,i){super(e,t,i),this.key=_e.fromName(i.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yx extends Nt{constructor(e,t){super(e,"in",t),this.keys=Sb("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Wx extends Nt{constructor(e,t){super(e,"not-in",t),this.keys=Sb("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Sb(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>_e.fromName(i.referenceValue))}class Xx extends Nt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return g_(t)&&nc(t.arrayValue,this.value)}}class Zx extends Nt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nc(this.value.arrayValue,t)}}class Jx extends Nt{constructor(e,t){super(e,"not-in",t)}matches(e){if(nc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!nc(this.value.arrayValue,t)}}class eO extends Nt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!g_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>nc(this.value.arrayValue,i))}}/**
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
 */class tO{constructor(e,t=null,i=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function OT(n,e=null,t=[],i=[],a=null,l=null,c=null){return new tO(n,e,t,i,a,l,c)}function __(n){const e=Re(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Rg(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),dd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Zo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Zo(i)).join(",")),e.le=t}return e.le}function y_(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Kx(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Tb(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!xT(n.startAt,e.startAt)&&xT(n.endAt,e.endAt)}function Cg(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t=null,i=[],a=[],l=null,c="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function nO(n,e,t,i,a,l,c,d){return new Ec(n,e,t,i,a,l,c,d)}function bb(n){return new Ec(n)}function MT(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ab(n){return n.collectionGroup!==null}function zu(n){const e=Re(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Ft(rn.comparator);return c.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new Mf(l,i))}),t.has(rn.keyField().canonicalString())||e.he.push(new Mf(rn.keyField(),i))}return e.he}function Li(n){const e=Re(n);return e.Pe||(e.Pe=iO(e,zu(n))),e.Pe}function iO(n,e){if(n.limitType==="F")return OT(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new Mf(a.field,l)});const t=n.endAt?new Of(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Of(n.startAt.position,n.startAt.inclusive):null;return OT(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ig(n,e){const t=n.filters.concat([e]);return new Ec(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ng(n,e,t){return new Ec(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function pd(n,e){return y_(Li(n),Li(e))&&n.limitType===e.limitType}function Rb(n){return`${__(Li(n))}|lt:${n.limitType}`}function Uo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(a=>wb(a)).join(", ")}]`),dd(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>Zo(a)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>Zo(a)).join(",")),`Target(${i})`}(Li(n))}; limitType=${n.limitType})`}function gd(n,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):_e.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,a){for(const l of zu(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(i,a){return!(i.startAt&&!function(c,d,m){const g=DT(c,d,m);return c.inclusive?g<=0:g<0}(i.startAt,zu(i),a)||i.endAt&&!function(c,d,m){const g=DT(c,d,m);return c.inclusive?g>=0:g>0}(i.endAt,zu(i),a))}(n,e)}function rO(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Cb(n){return(e,t)=>{let i=!1;for(const a of zu(n)){const l=sO(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function sO(n,e,t){const i=n.field.isKeyField()?_e.comparator(e.key,t.key):function(l,c,d){const m=c.data.field(l),g=d.data.field(l);return m!==null&&g!==null?Xo(m,g):we()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ua(this.inner,(t,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return ub(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aO=new Dt(_e.comparator);function Nr(){return aO}const Ib=new Dt(_e.comparator);function Pu(...n){let e=Ib;for(const t of n)e=e.insert(t.key,t);return e}function Nb(n){let e=Ib;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Ta(){return Fu()}function Db(){return Fu()}function Fu(){return new za(n=>n.toString(),(n,e)=>n.isEqual(e))}const oO=new Dt(_e.comparator),lO=new Ft(_e.comparator);function Le(...n){let e=lO;for(const t of n)e=e.add(t);return e}const uO=new Ft(Ue);function cO(){return uO}/**
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
 */function v_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nf(e)?"-0":e}}function xb(n){return{integerValue:""+n}}function hO(n,e){return Ux(e)?xb(e):v_(n,e)}/**
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
 */class _d{constructor(){this._=void 0}}function fO(n,e,t){return n instanceof kf?function(a,l){const c={fields:{[fb]:{stringValue:hb},[mb]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&p_(l)&&(l=md(l)),l&&(c.fields[db]=l),{mapValue:c}}(t,e):n instanceof ic?Mb(n,e):n instanceof rc?kb(n,e):function(a,l){const c=Ob(a,l),d=kT(c)+kT(a.Ie);return Ag(c)&&Ag(a.Ie)?xb(d):v_(a.serializer,d)}(n,e)}function dO(n,e,t){return n instanceof ic?Mb(n,e):n instanceof rc?kb(n,e):t}function Ob(n,e){return n instanceof Pf?function(i){return Ag(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class kf extends _d{}class ic extends _d{constructor(e){super(),this.elements=e}}function Mb(n,e){const t=Pb(e);for(const i of n.elements)t.some(a=>Fi(a,i))||t.push(i);return{arrayValue:{values:t}}}class rc extends _d{constructor(e){super(),this.elements=e}}function kb(n,e){let t=Pb(e);for(const i of n.elements)t=t.filter(a=>!Fi(a,i));return{arrayValue:{values:t}}}class Pf extends _d{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function kT(n){return Tt(n.integerValue||n.doubleValue)}function Pb(n){return g_(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function mO(n,e){return n.field.isEqual(e.field)&&function(i,a){return i instanceof ic&&a instanceof ic||i instanceof rc&&a instanceof rc?Wo(i.elements,a.elements,Fi):i instanceof Pf&&a instanceof Pf?Fi(i.Ie,a.Ie):i instanceof kf&&a instanceof kf}(n.transform,e.transform)}class pO{constructor(e,t){this.version=e,this.transformResults=t}}class Ar{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ar}static exists(e){return new Ar(void 0,e)}static updateTime(e){return new Ar(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function gf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class yd{}function Lb(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ub(n.key,Ar.none()):new Tc(n.key,n.data,Ar.none());{const t=n.data,i=ni.empty();let a=new Ft(rn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new Fa(n.key,i,new fi(a.toArray()),Ar.none())}}function gO(n,e,t){n instanceof Tc?function(a,l,c){const d=a.value.clone(),m=LT(a.fieldTransforms,l,c.transformResults);d.setAll(m),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Fa?function(a,l,c){if(!gf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=LT(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(Vb(a)),m.setAll(d),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(n,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Bu(n,e,t,i){return n instanceof Tc?function(l,c,d,m){if(!gf(l.precondition,c))return d;const g=l.value.clone(),y=VT(l.fieldTransforms,m,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,i):n instanceof Fa?function(l,c,d,m){if(!gf(l.precondition,c))return d;const g=VT(l.fieldTransforms,m,c),y=c.data;return y.setAll(Vb(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return gf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function _O(n,e){let t=null;for(const i of n.fieldTransforms){const a=e.data.field(i.field),l=Ob(i.transform,a||null);l!=null&&(t===null&&(t=ni.empty()),t.set(i.field,l))}return t||null}function PT(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&Wo(i,a,(l,c)=>mO(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Tc extends yd{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Fa extends yd{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Vb(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function LT(n,e,t){const i=new Map;Xe(n.length===t.length);for(let a=0;a<t.length;a++){const l=n[a],c=l.transform,d=e.data.field(l.field);i.set(l.field,dO(c,d,t[a]))}return i}function VT(n,e,t){const i=new Map;for(const a of n){const l=a.transform,c=t.data.field(a.field);i.set(a.field,fO(l,c,e))}return i}class Ub extends yd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yO extends yd{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&gO(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Bu(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Bu(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Db();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const m=Lb(c,d);m!==null&&i.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(be.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Wo(this.mutations,e.mutations,(t,i)=>PT(t,i))&&Wo(this.baseMutations,e.baseMutations,(t,i)=>PT(t,i))}}class E_{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){Xe(e.mutations.length===i.length);let a=function(){return oO}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new E_(e,t,i,a)}}/**
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
 */class EO{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,qe;function wO(n){switch(n){case ee.OK:return we();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return we()}}function zb(n){if(n===void 0)return Ir("GRPC error has no .code"),ee.UNKNOWN;switch(n){case It.OK:return ee.OK;case It.CANCELLED:return ee.CANCELLED;case It.UNKNOWN:return ee.UNKNOWN;case It.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case It.INTERNAL:return ee.INTERNAL;case It.UNAVAILABLE:return ee.UNAVAILABLE;case It.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case It.NOT_FOUND:return ee.NOT_FOUND;case It.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case It.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case It.ABORTED:return ee.ABORTED;case It.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case It.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case It.DATA_LOSS:return ee.DATA_LOSS;default:return we()}}(qe=It||(It={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function SO(){return new TextEncoder}/**
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
 */const bO=new bs([4294967295,4294967295],0);function UT(n){const e=SO().encode(n),t=new eb;return t.update(e),new Uint8Array(t.digest())}function zT(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new bs([t,i],0),new bs([a,l],0)]}class T_{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Lu(`Invalid padding: ${t}`);if(i<0)throw new Lu(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Lu(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Lu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=bs.fromNumber(this.Ee)}Ae(e,t,i){let a=e.add(t.multiply(bs.fromNumber(i)));return a.compare(bO)===1&&(a=new bs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=UT(e),[i,a]=zT(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,a,l);if(!this.Re(c))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new T_(l,a,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=UT(e),[i,a]=zT(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,a,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Lu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,wc.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new vd(be.min(),a,new Dt(Ue),Nr(),Le())}}class wc{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new wc(i,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,i,a){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=a}}class Fb{constructor(e,t){this.targetId=e,this.ge=t}}class Bb{constructor(e,t,i=sn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class FT{constructor(){this.pe=0,this.ye=BT(),this.we=sn.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Le(),t=Le(),i=Le();return this.ye.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:we()}}),new wc(this.we,this.Se,e,t,i)}Me(){this.be=!1,this.ye=BT()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Xe(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class AO{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Nr(),this.$e=sf(),this.Ke=sf(),this.Ue=new Dt(Ue)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,a)=>{this.Je(a)&&t(a)})}Ze(e){const t=e.targetId,i=e.ge.count,a=this.Xe(t);if(a){const l=a.target;if(Cg(l))if(i===0){const c=new _e(l.path);this.ze(t,c,fn.newNoDocument(c,be.min()))}else Xe(i===1);else{const c=this.et(t);if(c!==i){const d=this.tt(e),m=d?this.nt(d,e,c):1;if(m!==0){this.Ye(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Ms(i).toUint8Array()}catch(m){if(m instanceof cb)return Yo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new T_(c,a,l)}catch(m){return Yo(m instanceof Lu?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.Ee===0?null:d}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let a=0;return i.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),a++)}),a}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&Cg(d.target)){const m=new _e(d.target.path);this._t(m).has(c)||this.ut(c,m)||this.ze(c,m,fn.newNoDocument(m,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let i=Le();this.Ke.forEach((l,c)=>{let d=!0;c.forEachWhile(m=>{const g=this.Xe(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const a=new vd(e,t,this.Ue,this.Qe,i);return this.Qe=Nr(),this.$e=sf(),this.Ke=sf(),this.Ue=new Dt(Ue),a}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const a=this.He(e);this.ut(e,t)?a.xe(t,1):a.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new FT,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Ft(Ue),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ft(Ue),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new FT),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function sf(){return new Dt(_e.comparator)}function BT(){return new Dt(_e.comparator)}const RO={asc:"ASCENDING",desc:"DESCENDING"},CO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IO={and:"AND",or:"OR"};class NO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dg(n,e){return n.useProto3Json||dd(e)?e:{value:e}}function Lf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function DO(n,e){return Lf(n,e.toTimestamp())}function Vi(n){return Xe(!!n),be.fromTimestamp(function(t){const i=Os(t);return new zt(i.seconds,i.nanos)}(n))}function w_(n,e){return xg(n,e).canonicalString()}function xg(n,e){const t=function(a){return new ot(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function qb(n){const e=ot.fromString(n);return Xe($b(e)),e}function Og(n,e){return w_(n.databaseId,e.path)}function Xp(n,e){const t=qb(e);if(t.get(1)!==n.databaseId.projectId)throw new he(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new he(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(Gb(t))}function Hb(n,e){return w_(n.databaseId,e)}function xO(n){const e=qb(n);return e.length===4?ot.emptyPath():Gb(e)}function Mg(n){return new ot(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gb(n){return Xe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function jT(n,e,t){return{name:Og(n,e),fields:t.value.mapValue.fields}}function OO(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(Xe(y===void 0||typeof y=="string"),sn.fromBase64String(y||"")):(Xe(y===void 0||y instanceof Buffer||y instanceof Uint8Array),sn.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?ee.UNKNOWN:zb(g.code);return new he(y,g.message||"")}(c);t=new Bb(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=Xp(n,i.document.name),l=Vi(i.document.updateTime),c=i.document.createTime?Vi(i.document.createTime):be.min(),d=new ni({mapValue:{fields:i.document.fields}}),m=fn.newFoundDocument(a,l,c,d),g=i.targetIds||[],y=i.removedTargetIds||[];t=new _f(g,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=Xp(n,i.document),l=i.readTime?Vi(i.readTime):be.min(),c=fn.newNoDocument(a,l),d=i.removedTargetIds||[];t=new _f([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=Xp(n,i.document),l=i.removedTargetIds||[];t=new _f([],l,a,null)}else{if(!("filter"in e))return we();{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new TO(a,l),d=i.targetId;t=new Fb(d,c)}}return t}function MO(n,e){let t;if(e instanceof Tc)t={update:jT(n,e.key,e.value)};else if(e instanceof Ub)t={delete:Og(n,e.key)};else if(e instanceof Fa)t={update:jT(n,e.key,e.data),updateMask:jO(e.fieldMask)};else{if(!(e instanceof yO))return we();t={verify:Og(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof kf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ic)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof rc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Pf)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw we()}(0,i))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:DO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()}(n,e.precondition)),t}function kO(n,e){return n&&n.length>0?(Xe(e!==void 0),n.map(t=>function(a,l){let c=a.updateTime?Vi(a.updateTime):Vi(l);return c.isEqual(be.min())&&(c=Vi(l)),new pO(c,a.transformResults||[])}(t,e))):[]}function PO(n,e){return{documents:[Hb(n,e.path)]}}function LO(n,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Hb(n,a);const l=function(g){if(g.length!==0)return Qb(_i.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(w){return{field:zo(w.field),direction:zO(w.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Dg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:a}}function VO(n){let e=xO(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){Xe(i===1);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const w=Kb(T);return w instanceof _i&&Eb(w)?w.getFilters():[w]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(w=>function(x){return new Mf(Fo(x.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(T){let w;return w=typeof T=="object"?T.value:T,dd(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(T){const w=!!T.before,R=T.values||[];return new Of(R,w)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const w=!T.before,R=T.values||[];return new Of(R,w)}(t.endAt)),nO(e,a,c,l,d,"F",m,g)}function UO(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Kb(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Fo(t.unaryFilter.field);return Nt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=Fo(t.unaryFilter.field);return Nt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Fo(t.unaryFilter.field);return Nt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Fo(t.unaryFilter.field);return Nt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(n):n.fieldFilter!==void 0?function(t){return Nt.create(Fo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return _i.create(t.compositeFilter.filters.map(i=>Kb(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(n):we()}function zO(n){return RO[n]}function FO(n){return CO[n]}function BO(n){return IO[n]}function zo(n){return{fieldPath:n.canonicalString()}}function Fo(n){return rn.fromServerFormat(n.fieldPath)}function Qb(n){return n instanceof Nt?function(t){if(t.op==="=="){if(NT(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NAN"}};if(IT(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(NT(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NOT_NAN"}};if(IT(t.value))return{unaryFilter:{field:zo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zo(t.field),op:FO(t.op),value:t.value}}}(n):n instanceof _i?function(t){const i=t.getFilters().map(a=>Qb(a));return i.length===1?i[0]:{compositeFilter:{op:BO(t.op),filters:i}}}(n):we()}function jO(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function $b(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,i,a,l=be.min(),c=be.min(),d=sn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new Ts(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ts(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e){this.Tt=e}}function HO(n){const e=VO({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ng(e,e.limit,"L"):e}/**
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
 */class GO{constructor(){this.Tn=new KO}addToCollectionParentIndex(e,t){return this.Tn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(xs.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(xs.min())}updateCollectionGroup(e,t,i){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class KO{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new Ft(ot.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Ft(ot.comparator)).toArray()}}/**
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
 */const qT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yb=41943040;class bn{static withCacheSize(e){return new bn(e,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn.DEFAULT_COLLECTION_PERCENTILE=10,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,bn.DEFAULT=new bn(Yb,bn.DEFAULT_COLLECTION_PERCENTILE,bn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),bn.DISABLED=new bn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Jo(0)}static Un(){return new Jo(-1)}}/**
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
 */const HT="LruGarbageCollector",QO=1048576;function GT([n,e],[t,i]){const a=Ue(n,t);return a===0?Ue(e,i):a}class $O{constructor(e){this.Hn=e,this.buffer=new Ft(GT),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();GT(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class YO{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ue(HT,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ml(t)?ue(HT,"Ignoring IndexedDB error during garbage collection: ",t):await dl(t)}await this.er(3e5)})}}class WO{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return J.resolve(fd.ae);const i=new $O(t);return this.tr.forEachTarget(e,a=>i.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>i.Zn(a))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(qT)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qT):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,a,l,c,d,m,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(g=Date.now(),Vo()<=ke.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function XO(n,e){return new WO(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.changes=new za(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,fn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?J.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class JO{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(i!==null&&Bu(i.mutation,a,fi.empty(),zt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Le()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Le()){const a=Ta();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,i).next(l=>{let c=Pu();return l.forEach((d,m)=>{c=c.insert(d,m.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Ta();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Le()))}populateOverlays(e,t,i){const a=[];return i.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,a){let l=Nr();const c=Fu(),d=function(){return Fu()}();return t.forEach((m,g)=>{const y=i.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Fa)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Bu(y.mutation,g,y.mutation.getFieldMask(),zt.now())):c.set(g.key,fi.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return d.set(g,new JO(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=Fu();let a=new Dt((c,d)=>c-d),l=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let y=i.get(m)||fi.empty();y=d.applyToLocalView(g,y),i.set(m,y);const T=(a.get(d.batchId)||Le()).add(m);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),g=m.key,y=m.value,T=Db();y.forEach(w=>{if(!l.has(w)){const R=Lb(t.get(w),i.get(w));R!==null&&T.set(w,R),l=l.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return J.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,a){return function(c){return _e.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ab(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):J.resolve(Ta());let d=Ju,m=l;return c.next(g=>J.forEach(g,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{m=m.insert(y,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,m,g,Le())).next(y=>({batchId:d,changes:Nb(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(i=>{let a=Pu();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let c=Pu();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,m=>{const g=function(T,w){return new Ec(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next(y=>{y.forEach((T,w)=>{c=c.insert(T,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a))).next(c=>{l.forEach((m,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,fn.newInvalidDocument(y)))});let d=Pu();return c.forEach((m,g)=>{const y=l.get(m);y!==void 0&&Bu(y.mutation,g,fi.empty(),zt.now()),gd(t,g)&&(d=d.insert(m,g))}),d})}}/**
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
 */class t2{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return J.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Vi(a.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(a){return{name:a.name,query:HO(a.bundledQuery),readTime:Vi(a.readTime)}}(t)),J.resolve()}}/**
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
 */class n2{constructor(){this.overlays=new Dt(_e.comparator),this.Rr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ta();return J.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((a,l)=>{this.Et(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Rr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(i)),J.resolve()}getOverlaysForCollection(e,t,i){const a=Ta(),l=t.length+1,c=new _e(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const m=d.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>i&&a.set(m.getKey(),m)}return J.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new Dt((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let y=l.get(g.largestBatchId);y===null&&(y=Ta(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=Ta(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return J.resolve(d)}Et(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.Rr.get(a.largestBatchId).delete(i.key);this.Rr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new EO(t,i));let l=this.Rr.get(t);l===void 0&&(l=Le(),this.Rr.set(t,l)),this.Rr.set(t,l.add(i.key))}}/**
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
 */class i2{constructor(){this.sessionToken=sn.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.Vr=new Ft(Yt.mr),this.gr=new Ft(Yt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new Yt(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new Yt(e,t))}Sr(e,t){e.forEach(i=>this.removeReference(i,t))}br(e){const t=new _e(new ot([])),i=new Yt(t,e),a=new Yt(t,e+1),l=[];return this.gr.forEachInRange([i,a],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new _e(new ot([])),i=new Yt(t,e),a=new Yt(t,e+1);let l=Le();return this.gr.forEachInRange([i,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Yt(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Yt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return _e.comparator(e.key,t.key)||Ue(e.Cr,t.Cr)}static pr(e,t){return Ue(e.Cr,t.Cr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Ft(Yt.mr)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new vO(l,t,i,a);this.mutationQueue.push(c);for(const d of a)this.Mr=this.Mr.add(new Yt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.Nr(i),l=a<0?0:a;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?m_:this.Fr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Yt(t,0),a=new Yt(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([i,a],c=>{const d=this.Or(c.Cr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ft(Ue);return t.forEach(a=>{const l=new Yt(a,0),c=new Yt(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{i=i.add(d.Cr)})}),J.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;_e.isDocumentKey(l)||(l=l.child(""));const c=new Yt(new _e(l),0);let d=new Ft(Ue);return this.Mr.forEachWhile(m=>{const g=m.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(d=d.add(m.Cr)),!0)},c),J.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(i=>{const a=this.Or(i);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Xe(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return J.forEach(t.mutations,a=>{const l=new Yt(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new Yt(t,0),a=this.Mr.firstAfterOrEqual(i);return J.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.kr=e,this.docs=function(){return new Dt(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,c=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return J.resolve(i?i.document.mutableCopy():fn.newInvalidDocument(t))}getEntries(e,t){let i=Nr();return t.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():fn.newInvalidDocument(a))}),J.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=Nr();const c=t.path,d=new _e(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:g,value:{document:y}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||kx(Mx(y),i)<=0||(a.has(y.key)||gd(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,i,a){we()}qr(e,t){return J.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new a2(this)}getSize(e){return J.resolve(this.size)}}class a2 extends ZO{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?t.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(i)}),J.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.persistence=e,this.Qr=new za(t=>__(t),y_),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.$r=0,this.Kr=new S_,this.targetCount=0,this.Ur=Jo.Kn()}forEachTarget(e,t){return this.Qr.forEach((i,a)=>t(a)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),J.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Jo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.zn(t),J.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),J.waitFor(l).next(()=>a)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return J.resolve(i)}addMatchingKeys(e,t,i){return this.Kr.yr(t,i),J.resolve()}removeMatchingKeys(e,t,i){this.Kr.Sr(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),J.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Kr.vr(t);return J.resolve(i)}containsKey(e,t){return J.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new fd(0),this.zr=!1,this.zr=!0,this.jr=new i2,this.referenceDelegate=e(this),this.Hr=new o2(this),this.indexManager=new GO,this.remoteDocumentCache=function(a){return new s2(a)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new qO(t),this.Yr=new t2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new r2(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){ue("MemoryPersistence","Starting transaction:",e);const a=new l2(this.Gr.next());return this.referenceDelegate.Zr(),i(a).next(l=>this.referenceDelegate.Xr(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}ei(e,t){return J.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class l2 extends Lx{constructor(e){super(),this.currentSequenceNumber=e}}class b_{constructor(e){this.persistence=e,this.ti=new S_,this.ni=null}static ri(e){return new b_(e)}get ii(){if(this.ni)return this.ni;throw we()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),J.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),J.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(a=>this.ii.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.ii.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.ii,i=>{const a=_e.fromPath(i);return this.si(e,a).next(l=>{l||t.removeEntry(a,be.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return J.or([()=>J.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Vf{constructor(e,t){this.persistence=e,this.oi=new za(i=>zx(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=XO(this,t)}static ri(e,t){return new Vf(e,t)}Zr(){}Xr(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return J.forEach(this.oi,(i,a)=>this.ar(e,i,a).next(l=>l?J.resolve():t(a)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.qr(e,c=>this.ar(e,c,t).next(d=>{d||(i++,l.removeEntry(c,be.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),J.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mf(e.data.value)),t}ar(e,t,i){return J.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.oi.get(t);return J.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=a}static Yi(e,t){let i=Le(),a=Le();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new A_(e,t.fromCache,i,a)}}/**
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
 */class u2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class c2{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return tD()?8:Vx(dn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,a,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new u2;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,i,a){return i.documentReadCount<this.es?(Vo()<=ke.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Uo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),J.resolve()):(Vo()<=ke.DEBUG&&ue("QueryEngine","Query:",Uo(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.ts*a?(Vo()<=ke.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Uo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Li(t))):J.resolve())}rs(e,t){if(MT(t))return J.resolve(null);let i=Li(t);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=Ng(t,null,"F"),i=Li(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Le(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(m=>{const g=this.cs(t,d);return this.ls(t,g,c,m.readTime)?this.rs(e,Ng(t,null,"F")):this.hs(e,g,t,m)}))})))}ss(e,t,i,a){return MT(t)||a.isEqual(be.min())?J.resolve(null):this.ns.getDocuments(e,i).next(l=>{const c=this.cs(t,l);return this.ls(t,c,i,a)?J.resolve(null):(Vo()<=ke.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Uo(t)),this.hs(e,c,t,Ox(a,Ju)).next(d=>d))})}cs(e,t){let i=new Ft(Cb(e));return t.forEach((a,l)=>{gd(e,l)&&(i=i.add(l))}),i}ls(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}_s(e,t,i){return Vo()<=ke.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Uo(t)),this.ns.getDocumentsMatchingQuery(e,t,xs.min(),i)}hs(e,t,i,a){return this.ns.getDocumentsMatchingQuery(e,i,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const R_="LocalStore",h2=3e8;class f2{constructor(e,t,i,a){this.persistence=e,this.Ps=t,this.serializer=a,this.Ts=new Dt(Ue),this.Is=new za(l=>__(l),y_),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new e2(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function d2(n,e,t,i){return new f2(n,e,t,i)}async function Xb(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let m=Le();for(const g of a){c.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(i,m).next(g=>({Rs:g,removedBatchIds:c,addedBatchIds:d}))})})}function m2(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,m,g,y){const T=g.batch,w=T.keys();let R=J.resolve();return w.forEach(x=>{R=R.next(()=>y.getEntry(m,x)).next(q=>{const z=g.docVersions.get(x);Xe(z!==null),q.version.compareTo(z)<0&&(T.applyToRemoteDocument(q,g),q.isValidDocument()&&(q.setReadTime(g.commitVersion),y.addEntry(q)))})}),R.next(()=>d.mutationQueue.removeMutationBatch(m,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let m=Le();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(m=m.add(d.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(i,a))})}function Zb(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function p2(n,e){const t=Re(n),i=e.snapshotVersion;let a=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});a=t.Ts;const d=[];e.targetChanges.forEach((y,T)=>{const w=a.get(T);if(!w)return;d.push(t.Hr.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,y.addedDocuments,T)));let R=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?R=R.withResumeToken(sn.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):y.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(y.resumeToken,i)),a=a.insert(T,R),function(q,z,$){return q.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=h2?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(w,R,y)&&d.push(t.Hr.updateTargetData(l,R))});let m=Nr(),g=Le();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(g2(l,c,e.documentUpdates).next(y=>{m=y.Vs,g=y.fs})),!i.isEqual(be.min())){const y=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(y)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,g)).next(()=>m)}).then(l=>(t.Ts=a,l))}function g2(n,e,t){let i=Le(),a=Le();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Nr();return t.forEach((d,m)=>{const g=l.get(d);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),m.isNoDocument()&&m.version.isEqual(be.min())?(e.removeEntry(d,m.readTime),c=c.insert(d,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(d,m)):ue(R_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",m.version)}),{Vs:c,fs:a}})}function _2(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=m_),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function y2(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return t.Hr.getTargetData(i,e).next(l=>l?(a=l,J.resolve(a)):t.Hr.allocateTargetId(i).next(c=>(a=new Ts(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=t.Ts.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function kg(n,e,t){const i=Re(n),a=i.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!ml(c))throw c;ue(R_,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ts=i.Ts.remove(e),i.Is.delete(a.target)}function KT(n,e,t){const i=Re(n);let a=be.min(),l=Le();return i.persistence.runTransaction("Execute query","readwrite",c=>function(m,g,y){const T=Re(m),w=T.Is.get(y);return w!==void 0?J.resolve(T.Ts.get(w)):T.Hr.getTargetData(g,y)}(i,c,Li(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(c,d.targetId).next(m=>{l=m})}).next(()=>i.Ps.getDocumentsMatchingQuery(c,e,t?a:be.min(),t?l:Le())).next(d=>(v2(i,rO(e),d),{documents:d,gs:l})))}function v2(n,e,t){let i=n.Es.get(e)||be.min();t.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Es.set(e,i)}class QT{constructor(){this.activeTargetIds=cO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class E2{constructor(){this.ho=new QT,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new QT,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class T2{To(e){}shutdown(){}}/**
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
 */const $T="ConnectivityMonitor";class YT{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ue($T,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ue($T,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let af=null;function Pg(){return af===null?af=function(){return 268435456+Math.round(2147483648*Math.random())}():af++,"0x"+af.toString(16)}/**
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
 */const Zp="RestConnection",w2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class S2{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${a}`,this.wo=this.databaseId.database===Df?`project_id=${i}`:`project_id=${i}&database_id=${a}`}So(e,t,i,a,l){const c=Pg(),d=this.bo(e,t.toUriEncodedString());ue(Zp,`Sending RPC '${e}' ${c}:`,d,i);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,a,l),this.vo(e,d,m,i).then(g=>(ue(Zp,`Received RPC '${e}' ${c}: `,g),g),g=>{throw Yo(Zp,`RPC '${e}' ${c} failed with error: `,g,"url: ",d,"request:",i),g})}Co(e,t,i,a,l,c){return this.So(e,t,i,a,l)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}bo(e,t){const i=w2[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="WebChannelConnection";class A2 extends S2{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,a){const l=Pg();return new Promise((c,d)=>{const m=new tb;m.setWithCredentials(!0),m.listenOnce(nb.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case df.NO_ERROR:const y=m.getResponseJson();ue(cn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(y)),c(y);break;case df.TIMEOUT:ue(cn,`RPC '${e}' ${l} timed out`),d(new he(ee.DEADLINE_EXCEEDED,"Request time out"));break;case df.HTTP_ERROR:const T=m.getStatus();if(ue(cn,`RPC '${e}' ${l} failed with status:`,T,"response text:",m.getResponseText()),T>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const R=w==null?void 0:w.error;if(R&&R.status&&R.message){const x=function(z){const $=z.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf($)>=0?$:ee.UNKNOWN}(R.status);d(new he(x,R.message))}else d(new he(ee.UNKNOWN,"Server responded with status "+m.getStatus()))}else d(new he(ee.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ue(cn,`RPC '${e}' ${l} completed.`)}});const g=JSON.stringify(a);ue(cn,`RPC '${e}' ${l} sending request:`,a),m.send(t,"POST",g,i,15)})}Wo(e,t,i){const a=Pg(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=sb(),d=rb(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const y=l.join("");ue(cn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const T=c.createWebChannel(y,m);let w=!1,R=!1;const x=new b2({Fo:z=>{R?ue(cn,`Not sending because RPC '${e}' stream ${a} is closed:`,z):(w||(ue(cn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),ue(cn,`RPC '${e}' stream ${a} sending:`,z),T.send(z))},Mo:()=>T.close()}),q=(z,$,W)=>{z.listen($,X=>{try{W(X)}catch(fe){setTimeout(()=>{throw fe},0)}})};return q(T,ku.EventType.OPEN,()=>{R||(ue(cn,`RPC '${e}' stream ${a} transport opened.`),x.Qo())}),q(T,ku.EventType.CLOSE,()=>{R||(R=!0,ue(cn,`RPC '${e}' stream ${a} transport closed`),x.Ko())}),q(T,ku.EventType.ERROR,z=>{R||(R=!0,Yo(cn,`RPC '${e}' stream ${a} transport errored:`,z),x.Ko(new he(ee.UNAVAILABLE,"The operation could not be completed")))}),q(T,ku.EventType.MESSAGE,z=>{var $;if(!R){const W=z.data[0];Xe(!!W);const X=W,fe=(X==null?void 0:X.error)||(($=X[0])===null||$===void 0?void 0:$.error);if(fe){ue(cn,`RPC '${e}' stream ${a} received error:`,fe);const ae=fe.status;let ve=function(A){const N=It[A];if(N!==void 0)return zb(N)}(ae),M=fe.message;ve===void 0&&(ve=ee.INTERNAL,M="Unknown error status: "+ae+" with message "+fe.message),R=!0,x.Ko(new he(ve,M)),T.close()}else ue(cn,`RPC '${e}' stream ${a} received:`,W),x.Uo(W)}}),q(d,ib.STAT_EVENT,z=>{z.stat===wg.PROXY?ue(cn,`RPC '${e}' stream ${a} detected buffering proxy`):z.stat===wg.NOPROXY&&ue(cn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{x.$o()},0),x}}function Jp(){return typeof document<"u"?document:null}/**
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
 */function Ed(n){return new NO(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e,t,i=1e3,a=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=a,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),a=Math.max(0,t-i);a>0&&ue("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="PersistentStream";class eA{constructor(e,t,i,a,l,c,d,m){this.Ti=e,this.n_=i,this.r_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Jb(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(Ir(t.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.i_===t&&this.V_(i,a)},i=>{e(()=>{const a=new he(ee.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(a)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{i(()=>this.m_(a))}),this.stream.onMessage(a=>{i(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ue(WT,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ue(WT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class R2 extends eA{constructor(e,t,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=OO(this.serializer,e),i=function(l){if(!("targetChange"in l))return be.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?be.min():c.readTime?Vi(c.readTime):be.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=Mg(this.serializer),t.addTarget=function(l,c){let d;const m=c.target;if(d=Cg(m)?{documents:PO(l,m)}:{query:LO(l,m).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=jb(l,c.resumeToken);const g=Dg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(be.min())>0){d.readTime=Lf(l,c.snapshotVersion.toTimestamp());const g=Dg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=UO(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=Mg(this.serializer),t.removeTarget=e,this.I_(t)}}class C2 extends eA{constructor(e,t,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=kO(e.writeResults,e.commitTime),i=Vi(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=Mg(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>MO(this.serializer,i))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{}class N2 extends I2{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new he(ee.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,i,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.So(e,xg(t,i),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new he(ee.UNKNOWN,l.toString())})}Co(e,t,i,a,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,xg(t,i),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new he(ee.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class D2{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ir(t),this.N_=!1):ue("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="RemoteStore";class x2{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{i.enqueueAndForget(async()=>{Ba(this)&&(ue(Ia,"Restarting streams for network reachability change."),await async function(m){const g=Re(m);g.W_.add(4),await Sc(g),g.j_.set("Unknown"),g.W_.delete(4),await Td(g)}(this))})}),this.j_=new D2(i,a)}}async function Td(n){if(Ba(n))for(const e of n.G_)await e(!0)}async function Sc(n){for(const e of n.G_)await e(!1)}function tA(n,e){const t=Re(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),D_(t)?N_(t):pl(t).c_()&&I_(t,e))}function C_(n,e){const t=Re(n),i=pl(t);t.U_.delete(e),i.c_()&&nA(t,e),t.U_.size===0&&(i.c_()?i.P_():Ba(t)&&t.j_.set("Unknown"))}function I_(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}pl(n).y_(e)}function nA(n,e){n.H_.Ne(e),pl(n).w_(e)}function N_(n){n.H_=new AO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),pl(n).start(),n.j_.B_()}function D_(n){return Ba(n)&&!pl(n).u_()&&n.U_.size>0}function Ba(n){return Re(n).W_.size===0}function iA(n){n.H_=void 0}async function O2(n){n.j_.set("Online")}async function M2(n){n.U_.forEach((e,t)=>{I_(n,e)})}async function k2(n,e){iA(n),D_(n)?(n.j_.q_(e),N_(n)):n.j_.set("Unknown")}async function P2(n,e,t){if(n.j_.set("Online"),e instanceof Bb&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.U_.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.U_.delete(d),a.H_.removeTarget(d))}(n,e)}catch(i){ue(Ia,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Uf(n,i)}else if(e instanceof _f?n.H_.We(e):e instanceof Fb?n.H_.Ze(e):n.H_.je(e),!t.isEqual(be.min()))try{const i=await Zb(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const y=l.U_.get(g);y&&l.U_.set(g,y.withResumeToken(m.resumeToken,c))}}),d.targetMismatches.forEach((m,g)=>{const y=l.U_.get(m);if(!y)return;l.U_.set(m,y.withResumeToken(sn.EMPTY_BYTE_STRING,y.snapshotVersion)),nA(l,m);const T=new Ts(y.target,m,g,y.sequenceNumber);I_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){ue(Ia,"Failed to raise snapshot:",i),await Uf(n,i)}}async function Uf(n,e,t){if(!ml(e))throw e;n.W_.add(1),await Sc(n),n.j_.set("Offline"),t||(t=()=>Zb(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ue(Ia,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Td(n)})}function rA(n,e){return e().catch(t=>Uf(n,t,e))}async function wd(n){const e=Re(n),t=Ps(e);let i=e.K_.length>0?e.K_[e.K_.length-1].batchId:m_;for(;L2(e);)try{const a=await _2(e.localStore,i);if(a===null){e.K_.length===0&&t.P_();break}i=a.batchId,V2(e,a)}catch(a){await Uf(e,a)}sA(e)&&aA(e)}function L2(n){return Ba(n)&&n.K_.length<10}function V2(n,e){n.K_.push(e);const t=Ps(n);t.c_()&&t.S_&&t.b_(e.mutations)}function sA(n){return Ba(n)&&!Ps(n).u_()&&n.K_.length>0}function aA(n){Ps(n).start()}async function U2(n){Ps(n).C_()}async function z2(n){const e=Ps(n);for(const t of n.K_)e.b_(t.mutations)}async function F2(n,e,t){const i=n.K_.shift(),a=E_.from(i,e,t);await rA(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await wd(n)}async function B2(n,e){e&&Ps(n).S_&&await async function(i,a){if(function(c){return wO(c)&&c!==ee.ABORTED}(a.code)){const l=i.K_.shift();Ps(i).h_(),await rA(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await wd(i)}}(n,e),sA(n)&&aA(n)}async function XT(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ue(Ia,"RemoteStore received new credentials");const i=Ba(t);t.W_.add(3),await Sc(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Td(t)}async function j2(n,e){const t=Re(n);e?(t.W_.delete(2),await Td(t)):e||(t.W_.add(2),await Sc(t),t.j_.set("Unknown"))}function pl(n){return n.J_||(n.J_=function(t,i,a){const l=Re(t);return l.M_(),new R2(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:O2.bind(null,n),No:M2.bind(null,n),Lo:k2.bind(null,n),p_:P2.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),D_(n)?N_(n):n.j_.set("Unknown")):(await n.J_.stop(),iA(n))})),n.J_}function Ps(n){return n.Y_||(n.Y_=function(t,i,a){const l=Re(t);return l.M_(),new C2(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:U2.bind(null,n),Lo:B2.bind(null,n),D_:z2.bind(null,n),v_:F2.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await wd(n)):(await n.Y_.stop(),n.K_.length>0&&(ue(Ia,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new As,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const c=Date.now()+i,d=new x_(e,t,c,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function O_(n,e){if(Ir("AsyncQueue",`${e}: ${n}`),ml(n))return new he(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{static emptySet(e){return new jo(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||_e.comparator(t.key,i.key):(t,i)=>_e.comparator(t.key,i.key),this.keyedMap=Pu(),this.sortedSet=new Dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new jo;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.Z_=new Dt(_e.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):we():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class el{constructor(e,t,i,a,l,c,d,m,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new el(e,t,jo.emptySet(t),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class H2{constructor(){this.queries=JT(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const a=Re(t),l=a.queries;a.queries=JT(),l.forEach((c,d)=>{for(const m of d.ta)m.onError(i)})})(this,new he(ee.ABORTED,"Firestore shutting down"))}}function JT(){return new za(n=>Rb(n),pd)}async function G2(n,e){const t=Re(n);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.na()&&e.ra()&&(i=2):(l=new q2,i=e.ra()?0:1);try{switch(i){case 0:l.ea=await t.onListen(a,!0);break;case 1:l.ea=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=O_(c,`Initialization of query '${Uo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&M_(t)}async function K2(n,e){const t=Re(n),i=e.query;let a=3;const l=t.queries.get(i);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?a=e.ra()?0:1:!l.na()&&e.ra()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Q2(n,e){const t=Re(n);let i=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(a)&&(i=!0);c.ea=a}}i&&M_(t)}function $2(n,e,t){const i=Re(n),a=i.queries.get(e);if(a)for(const l of a.ta)l.onError(t);i.queries.delete(e)}function M_(n){n.ia.forEach(e=>{e.next()})}var Lg,ew;(ew=Lg||(Lg={}))._a="default",ew.Cache="cache";class Y2{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new el(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=el.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Lg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.key=e}}class lA{constructor(e){this.key=e}}class W2{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Le(),this.mutatedKeys=Le(),this.ya=Cb(e),this.wa=new jo(this.ya)}get Sa(){return this.fa}ba(e,t){const i=t?t.Da:new ZT,a=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const w=a.get(y),R=gd(this.query,T)?T:null,x=!!w&&this.mutatedKeys.has(w.key),q=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let z=!1;w&&R?w.data.isEqual(R.data)?x!==q&&(i.track({type:3,doc:R}),z=!0):this.va(w,R)||(i.track({type:2,doc:R}),z=!0,(m&&this.ya(R,m)>0||g&&this.ya(R,g)<0)&&(d=!0)):!w&&R?(i.track({type:0,doc:R}),z=!0):w&&!R&&(i.track({type:1,doc:w}),z=!0,(m||g)&&(d=!0)),z&&(R?(c=c.add(R),l=q?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),i.track({type:1,doc:y})}return{wa:c,Da:i,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((y,T)=>function(R,x){const q=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return q(R)-q(x)}(y.type,T.type)||this.ya(y.doc,T.doc)),this.Ca(i),a=a!=null&&a;const d=t&&!a?this.Fa():[],m=this.pa.size===0&&this.current&&!a?1:0,g=m!==this.ga;return this.ga=m,c.length!==0||g?{snapshot:new el(this.query,e.wa,l,c,e.mutatedKeys,m===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new ZT,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Le(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new lA(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new oA(i))}),t}Oa(e){this.fa=e.gs,this.pa=Le();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return el.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const k_="SyncEngine";class X2{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Z2{constructor(e){this.key=e,this.Ba=!1}}class J2{constructor(e,t,i,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new za(d=>Rb(d),pd),this.qa=new Map,this.Qa=new Set,this.$a=new Dt(_e.comparator),this.Ka=new Map,this.Ua=new S_,this.Wa={},this.Ga=new Map,this.za=Jo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function eM(n,e,t=!0){const i=mA(n);let a;const l=i.ka.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.Na()):a=await uA(i,e,t,!0),a}async function tM(n,e){const t=mA(n);await uA(t,e,!0,!1)}async function uA(n,e,t,i){const a=await y2(n.localStore,Li(e)),l=a.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await nM(n,e,l,c==="current",a.resumeToken)),n.isPrimaryClient&&t&&tA(n.remoteStore,a),d}async function nM(n,e,t,i,a){n.Ha=(T,w,R)=>async function(q,z,$,W){let X=z.view.ba($);X.ls&&(X=await KT(q.localStore,z.query,!1).then(({documents:M})=>z.view.ba(M,X)));const fe=W&&W.targetChanges.get(z.targetId),ae=W&&W.targetMismatches.get(z.targetId)!=null,ve=z.view.applyChanges(X,q.isPrimaryClient,fe,ae);return nw(q,z.targetId,ve.Ma),ve.snapshot}(n,T,w,R);const l=await KT(n.localStore,e,!0),c=new W2(e,l.gs),d=c.ba(l.documents),m=wc.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",a),g=c.applyChanges(d,n.isPrimaryClient,m);nw(n,t,g.Ma);const y=new X2(e,t,c);return n.ka.set(e,y),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),g.snapshot}async function iM(n,e,t){const i=Re(n),a=i.ka.get(e),l=i.qa.get(a.targetId);if(l.length>1)return i.qa.set(a.targetId,l.filter(c=>!pd(c,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await kg(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),t&&C_(i.remoteStore,a.targetId),Vg(i,a.targetId)}).catch(dl)):(Vg(i,a.targetId),await kg(i.localStore,a.targetId,!0))}async function rM(n,e){const t=Re(n),i=t.ka.get(e),a=t.qa.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),C_(t.remoteStore,i.targetId))}async function sM(n,e,t){const i=fM(n);try{const a=await function(c,d){const m=Re(c),g=zt.now(),y=d.reduce((R,x)=>R.add(x.key),Le());let T,w;return m.persistence.runTransaction("Locally write mutations","readwrite",R=>{let x=Nr(),q=Le();return m.ds.getEntries(R,y).next(z=>{x=z,x.forEach(($,W)=>{W.isValidDocument()||(q=q.add($))})}).next(()=>m.localDocuments.getOverlayedDocuments(R,x)).next(z=>{T=z;const $=[];for(const W of d){const X=_O(W,T.get(W.key).overlayedDocument);X!=null&&$.push(new Fa(W.key,X,_b(X.value.mapValue),Ar.exists(!0)))}return m.mutationQueue.addMutationBatch(R,g,$,d)}).next(z=>{w=z;const $=z.applyToLocalDocumentSet(T,q);return m.documentOverlayCache.saveOverlays(R,z.batchId,$)})}).then(()=>({batchId:w.batchId,changes:Nb(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(c,d,m){let g=c.Wa[c.currentUser.toKey()];g||(g=new Dt(Ue)),g=g.insert(d,m),c.Wa[c.currentUser.toKey()]=g}(i,a.batchId,t),await bc(i,a.changes),await wd(i.remoteStore)}catch(a){const l=O_(a,"Failed to persist write");t.reject(l)}}async function cA(n,e){const t=Re(n);try{const i=await p2(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Ka.get(l);c&&(Xe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.Ba=!0:a.modifiedDocuments.size>0?Xe(c.Ba):a.removedDocuments.size>0&&(Xe(c.Ba),c.Ba=!1))}),await bc(t,i,e)}catch(i){await dl(i)}}function tw(n,e,t){const i=Re(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const m=Re(c);m.onlineState=d;let g=!1;m.queries.forEach((y,T)=>{for(const w of T.ta)w.sa(d)&&(g=!0)}),g&&M_(m)}(i.eventManager,e),a.length&&i.La.p_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function aM(n,e,t){const i=Re(n);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Ka.get(e),l=a&&a.key;if(l){let c=new Dt(_e.comparator);c=c.insert(l,fn.newNoDocument(l,be.min()));const d=Le().add(l),m=new vd(be.min(),new Map,new Dt(Ue),c,d);await cA(i,m),i.$a=i.$a.remove(l),i.Ka.delete(e),P_(i)}else await kg(i.localStore,e,!1).then(()=>Vg(i,e,t)).catch(dl)}async function oM(n,e){const t=Re(n),i=e.batch.batchId;try{const a=await m2(t.localStore,e);fA(t,i,null),hA(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await bc(t,a)}catch(a){await dl(a)}}async function lM(n,e,t){const i=Re(n);try{const a=await function(c,d){const m=Re(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return m.mutationQueue.lookupMutationBatch(g,d).next(T=>(Xe(T!==null),y=T.keys(),m.mutationQueue.removeMutationBatch(g,T))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>m.localDocuments.getDocuments(g,y))})}(i.localStore,e);fA(i,e,t),hA(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await bc(i,a)}catch(a){await dl(a)}}function hA(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function fA(n,e,t){const i=Re(n);let a=i.Wa[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.Wa[i.currentUser.toKey()]=a}}function Vg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach(i=>{n.Ua.containsKey(i)||dA(n,i)})}function dA(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(C_(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),P_(n))}function nw(n,e,t){for(const i of t)i instanceof oA?(n.Ua.addReference(i.key,e),uM(n,i)):i instanceof lA?(ue(k_,"Document no longer in limbo: "+i.key),n.Ua.removeReference(i.key,e),n.Ua.containsKey(i.key)||dA(n,i.key)):we()}function uM(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(ue(k_,"New document in limbo: "+t),n.Qa.add(i),P_(n))}function P_(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new _e(ot.fromString(e)),i=n.za.next();n.Ka.set(i,new Z2(t)),n.$a=n.$a.insert(t,i),tA(n.remoteStore,new Ts(Li(bb(t.path)),i,"TargetPurposeLimboResolution",fd.ae))}}async function bc(n,e,t){const i=Re(n),a=[],l=[],c=[];i.ka.isEmpty()||(i.ka.forEach((d,m)=>{c.push(i.Ha(m,e,t).then(g=>{var y;if((g||t)&&i.isPrimaryClient){const T=g?!g.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=A_.Yi(m.targetId,g);l.push(T)}}))}),await Promise.all(c),i.La.p_(a),await async function(m,g){const y=Re(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>J.forEach(g,w=>J.forEach(w.Hi,R=>y.persistence.referenceDelegate.addReference(T,w.targetId,R)).next(()=>J.forEach(w.Ji,R=>y.persistence.referenceDelegate.removeReference(T,w.targetId,R)))))}catch(T){if(!ml(T))throw T;ue(R_,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const R=y.Ts.get(w),x=R.snapshotVersion,q=R.withLastLimboFreeSnapshotVersion(x);y.Ts=y.Ts.insert(w,q)}}}(i.localStore,l))}async function cM(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ue(k_,"User change. New user:",e.toKey());const i=await Xb(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(m=>{m.reject(new he(ee.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await bc(t,i.Rs)}}function hM(n,e){const t=Re(n),i=t.Ka.get(e);if(i&&i.Ba)return Le().add(i.key);{let a=Le();const l=t.qa.get(e);if(!l)return a;for(const c of l){const d=t.ka.get(c);a=a.unionWith(d.view.Sa)}return a}}function mA(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=cA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=hM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aM.bind(null,e),e.La.p_=Q2.bind(null,e.eventManager),e.La.Ja=$2.bind(null,e.eventManager),e}function fM(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lM.bind(null,e),e}class zf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ed(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return d2(this.persistence,new c2,e.initialUser,this.serializer)}Xa(e){return new Wb(b_.ri,this.serializer)}Za(e){return new E2}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zf.provider={build:()=>new zf};class dM extends zf{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Xe(this.persistence.referenceDelegate instanceof Vf);const i=this.persistence.referenceDelegate.garbageCollector;return new YO(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?bn.withCacheSize(this.cacheSizeBytes):bn.DEFAULT;return new Wb(i=>Vf.ri(i,t),this.serializer)}}class Ug{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>tw(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=cM.bind(null,this.syncEngine),await j2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new H2}()}createDatastore(e){const t=Ed(e.databaseInfo.databaseId),i=function(l){return new A2(l)}(e.databaseInfo);return function(l,c,d,m){return new N2(l,c,d,m)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,a,l,c,d){return new x2(i,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>tw(this.syncEngine,t,0),function(){return YT.D()?new YT:new T2}())}createSyncEngine(e,t){return function(a,l,c,d,m,g,y){const T=new J2(a,l,c,d,m,g);return y&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Re(a);ue(Ia,"RemoteStore shutting down."),l.W_.add(5),await Sc(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ug.provider={build:()=>new Ug};/**
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
 */class mM{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Ir("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="FirestoreClient";class pM{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=hn.UNAUTHENTICATED,this.clientId=ob.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{ue(Ls,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(ue(Ls,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new As;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=O_(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function eg(n,e){n.asyncQueue.verifyOperationInProgress(),ue(Ls,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async a=>{i.isEqual(a)||(await Xb(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function iw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await gM(n);ue(Ls,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>XT(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,a)=>XT(e.remoteStore,a)),n._onlineComponents=e}async function gM(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(Ls,"Using user provided OfflineComponentProvider");try{await eg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ee.FAILED_PRECONDITION||a.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Yo("Error using user provided cache. Falling back to memory cache: "+t),await eg(n,new zf)}}else ue(Ls,"Using default OfflineComponentProvider"),await eg(n,new dM(void 0));return n._offlineComponents}async function pA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(Ls,"Using user provided OnlineComponentProvider"),await iw(n,n._uninitializedComponentsProvider._online)):(ue(Ls,"Using default OnlineComponentProvider"),await iw(n,new Ug))),n._onlineComponents}function _M(n){return pA(n).then(e=>e.syncEngine)}async function yM(n){const e=await pA(n),t=e.eventManager;return t.onListen=eM.bind(null,e.syncEngine),t.onUnlisten=iM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rM.bind(null,e.syncEngine),t}function vM(n,e,t={}){const i=new As;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,m,g){const y=new mM({next:w=>{y.su(),c.enqueueAndForget(()=>K2(l,T)),w.fromCache&&m.source==="server"?g.reject(new he(ee.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Y2(d,y,{includeMetadataChanges:!0,Ta:!0});return G2(l,T)}(await yM(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function gA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const rw=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(n,e,t){if(!t)throw new he(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function EM(n,e,t,i){if(e===!0&&i===!0)throw new he(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sw(n){if(!_e.isDocumentKey(n))throw new he(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function aw(n){if(_e.isDocumentKey(n))throw new he(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Sd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function sc(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new he(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Sd(n);throw new he(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const yA="firestore.googleapis.com",ow=!0;class lw{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new he(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yA,this.ssl=ow}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:ow;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<QO)throw new he(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}EM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gA((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new he(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new he(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new he(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bd{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lw({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lw(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new bx;switch(i.type){case"firstParty":return new Ix(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new he(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=rw.get(t);i&&(ue("ComponentProvider","Removing Datastore"),rw.delete(t),i.terminate())}(this),Promise.resolve()}}function TM(n,e,t,i={}){var a;const l=(n=sc(n,bd))._getSettings(),c=`${e}:${t}`;if(l.host!==yA&&l.host!==c&&Yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let d,m;if(typeof i.mockUserToken=="string")d=i.mockUserToken,m=hn.MOCK_USER;else{d=jS(i.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new he(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new hn(g)}n._authCredentials=new Ax(new ab(d,m))}}/**
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
 */class gl{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new gl(this.firestore,e,this._query)}}class Ln{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ln(this.firestore,e,this._key)}}class Cs extends gl{constructor(e,t,i){super(e,t,bb(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ln(this.firestore,null,new _e(e))}withConverter(e){return new Cs(this.firestore,e,this._path)}}function wM(n,e,...t){if(n=wt(n),_A("collection","path",e),n instanceof bd){const i=ot.fromString(e,...t);return aw(i),new Cs(n,null,i)}{if(!(n instanceof Ln||n instanceof Cs))throw new he(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ot.fromString(e,...t));return aw(i),new Cs(n.firestore,null,i)}}function zg(n,e,...t){if(n=wt(n),arguments.length===1&&(e=ob.newId()),_A("doc","path",e),n instanceof bd){const i=ot.fromString(e,...t);return sw(i),new Ln(n,null,new _e(i))}{if(!(n instanceof Ln||n instanceof Cs))throw new he(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ot.fromString(e,...t));return sw(i),new Ln(n.firestore,n instanceof Cs?n.converter:null,new _e(i))}}/**
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
 */const uw="AsyncQueue";class cw{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Jb(this,"async_queue_retry"),this.Su=()=>{const i=Jp();i&&ue(uw,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const t=Jp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Jp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new As;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ml(e))throw e;ue(uw,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const a=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Ir("INTERNAL UNHANDLED ERROR: ",a),i}).then(i=>(this.pu=!1,i))));return this.bu=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const a=x_.createAndSchedule(this,e,t,i,l=>this.Fu(l));return this.fu.push(a),a}Du(){this.gu&&we()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class L_ extends bd{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new cw,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cw(e),this._firestoreClient=void 0,await e}}}function V_(n,e){const t=typeof n=="object"?n:hd(),i=typeof n=="string"?n:Df,a=Fs(t,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=zS("firestore");l&&TM(a,...l)}return a}function vA(n){if(n._terminated)throw new he(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||SM(n),n._firestoreClient}function SM(n){var e,t,i;const a=n._freezeSettings(),l=function(d,m,g,y){return new jx(d,m,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,gA(y.experimentalLongPollingOptions),y.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new pM(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const m=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(m),_online:m}}(n._componentsProvider))}/**
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
 */class tl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tl(sn.fromBase64String(e))}catch(t){throw new he(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new tl(sn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class U_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new he(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class EA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new he(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new he(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ue(this._lat,e._lat)||Ue(this._long,e._long)}}/**
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
 */class F_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM=/^__.*__$/;class AM{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Fa(e,this.data,this.fieldMask,t,this.fieldTransforms):new Tc(e,this.data,t,this.fieldTransforms)}}function TA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class B_{constructor(e,t,i,a,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new B_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.$u(e),a}Ku(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.ku({path:i,Qu:!1});return a.Bu(),a}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ff(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(TA(this.Lu)&&bM.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class RM{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Ed(e)}ju(e,t,i,a=!1){return new B_({Lu:e,methodName:t,zu:i,path:rn.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wA(n){const e=n._freezeSettings(),t=Ed(n._databaseId);return new RM(n._databaseId,!!e.ignoreUndefinedProperties,t)}function CM(n,e,t,i,a,l={}){const c=n.ju(l.merge||l.mergeFields?2:0,e,t,a);AA("Data must be an object, but it was:",c,i);const d=SA(i,c);let m,g;if(l.merge)m=new fi(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const w=NM(e,T,t);if(!c.contains(w))throw new he(ee.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);xM(y,w)||y.push(w)}m=new fi(y),g=c.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,g=c.fieldTransforms;return new AM(new ni(d),m,g)}function IM(n,e,t,i=!1){return j_(t,n.ju(i?4:3,e))}function j_(n,e){if(bA(n=wt(n)))return AA("Unsupported field value:",e,n),SA(n,e);if(n instanceof EA)return function(i,a){if(!TA(a.Lu))throw a.Wu(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,a){const l=[];let c=0;for(const d of i){let m=j_(d,a.Uu(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,a){if((i=wt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return hO(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=zt.fromDate(i);return{timestampValue:Lf(a.serializer,l)}}if(i instanceof zt){const l=new zt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Lf(a.serializer,l)}}if(i instanceof z_)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof tl)return{bytesValue:jb(a.serializer,i._byteString)};if(i instanceof Ln){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:w_(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof F_)return function(c,d){return{mapValue:{fields:{[pb]:{stringValue:gb},[xf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Wu("VectorValues must only contain numeric values.");return v_(d.serializer,g)})}}}}}}(i,a);throw a.Wu(`Unsupported field value: ${Sd(i)}`)}(n,e)}function SA(n,e){const t={};return ub(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ua(n,(i,a)=>{const l=j_(a,e.qu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function bA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof zt||n instanceof z_||n instanceof tl||n instanceof Ln||n instanceof EA||n instanceof F_)}function AA(n,e,t){if(!bA(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const i=Sd(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function NM(n,e,t){if((e=wt(e))instanceof U_)return e._internalPath;if(typeof e=="string")return RA(n,e);throw Ff("Field path arguments must be of type string or ",n,!1,void 0,t)}const DM=new RegExp("[~\\*/\\[\\]]");function RA(n,e,t){if(e.search(DM)>=0)throw Ff(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new U_(...e.split("."))._internalPath}catch{throw Ff(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ff(n,e,t,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${i}`),c&&(m+=` in document ${a}`),m+=")"),new he(ee.INVALID_ARGUMENT,d+n+m)}function xM(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class CA{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(q_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OM extends CA{data(){return super.data()}}function q_(n,e){return typeof e=="string"?RA(n,e):e instanceof U_?e._internalPath:e._delegate._internalPath}/**
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
 */function MM(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new he(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class H_{}class kM extends H_{}function PM(n,e,...t){let i=[];e instanceof H_&&i.push(e),i=i.concat(t),function(l){const c=l.filter(m=>m instanceof G_).length,d=l.filter(m=>m instanceof Ad).length;if(c>1||c>0&&d>0)throw new he(ee.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const a of i)n=a._apply(n);return n}class Ad extends kM{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Ad(e,t,i)}_apply(e){const t=this._parse(e);return IA(e._query,t),new gl(e.firestore,e.converter,Ig(e._query,t))}_parse(e){const t=wA(e.firestore);return function(l,c,d,m,g,y,T){let w;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new he(ee.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){fw(T,y);const x=[];for(const q of T)x.push(hw(m,l,q));w={arrayValue:{values:x}}}else w=hw(m,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||fw(T,y),w=IM(d,c,T,y==="in"||y==="not-in");return Nt.create(g,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function LM(n,e,t){const i=e,a=q_("where",n);return Ad._create(a,i,t)}class G_ extends H_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new G_(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:_i.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const m of d)IA(c,m),c=Ig(c,m)}(e._query,t),new gl(e.firestore,e.converter,Ig(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function hw(n,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new he(ee.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ab(e)&&t.indexOf("/")!==-1)throw new he(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(ot.fromString(t));if(!_e.isDocumentKey(i))throw new he(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return CT(n,new _e(i))}if(t instanceof Ln)return CT(n,t._key);throw new he(ee.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sd(t)}.`)}function fw(n,e){if(!Array.isArray(n)||n.length===0)throw new he(ee.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function IA(n,e){const t=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new he(ee.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new he(ee.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class VM{convertValue(e,t="none"){switch(ks(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ua(e,(a,l)=>{i[a]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,a;const l=(a=(i=(t=e.fields)===null||t===void 0?void 0:t[xf].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map(c=>Tt(c.doubleValue));return new F_(l)}convertGeoPoint(e){return new z_(Tt(e.latitude),Tt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=md(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ec(e));default:return null}}convertTimestamp(e){const t=Os(e);return new zt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ot.fromString(e);Xe($b(i));const a=new tc(i.get(1),i.get(3)),l=new _e(i.popFirst(5));return a.isEqual(t)||Ir(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function UM(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
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
 */class of{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zM extends CA{constructor(e,t,i,a,l,c){super(e,t,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new yf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(q_("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class yf extends zM{data(e={}){return super.data(e)}}class FM{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new of(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new yf(this._firestore,this._userDataWriter,i.key,i,new of(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new he(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const m=new yf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new of(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const m=new yf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new of(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:BM(d.type),doc:m,oldIndex:g,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function BM(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}class jM extends VM{constructor(e){super(),this.firestore=e}convertBytes(e){return new tl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ln(this.firestore,null,t)}}function qM(n){n=sc(n,gl);const e=sc(n.firestore,L_),t=vA(e),i=new jM(e);return MM(n._query),vM(t,n._query).then(a=>new FM(e,i,n,a))}function Fg(n,e,t){n=sc(n,Ln);const i=sc(n.firestore,L_),a=UM(n.converter,e,t);return HM(i,[CM(wA(i),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Ar.none())])}function HM(n,e){return function(i,a){const l=new As;return i.asyncQueue.enqueueAndForget(async()=>sM(await _M(i),a,l)),l.promise}(vA(n),e)}(function(e,t=!0){(function(a){fl=a})(Va),gi(new ri("firestore",(i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new L_(new Rx(i.getProvider("auth-internal")),new Nx(c,i.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new he(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tc(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Rn(gT,_T,e),Rn(gT,_T,"esm2017")})();var GM="firebase",KM="11.3.1";/**
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
 */Rn(GM,KM,"app");const NA="@firebase/installations",K_="0.6.12";/**
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
 */const DA=1e4,xA=`w:${K_}`,OA="FIS_v2",QM="https://firebaseinstallations.googleapis.com/v1",$M=60*60*1e3,YM="installations",WM="Installations";/**
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
 */const XM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Na=new La(YM,WM,XM);function MA(n){return n instanceof yi&&n.code.includes("request-failed")}/**
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
 */function kA({projectId:n}){return`${QM}/projects/${n}/installations`}function PA(n){return{token:n.token,requestStatus:2,expiresIn:JM(n.expiresIn),creationTime:Date.now()}}async function LA(n,e){const i=(await e.json()).error;return Na.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function VA({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ZM(n,{refreshToken:e}){const t=VA(n);return t.append("Authorization",ek(e)),t}async function UA(n){const e=await n();return e.status>=500&&e.status<600?n():e}function JM(n){return Number(n.replace("s","000"))}function ek(n){return`${OA} ${n}`}/**
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
 */async function tk({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=kA(n),a=VA(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={fid:t,authVersion:OA,appId:n.appId,sdkVersion:xA},d={method:"POST",headers:a,body:JSON.stringify(c)},m=await UA(()=>fetch(i,d));if(m.ok){const g=await m.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:PA(g.authToken)}}else throw await LA("Create Installation",m)}/**
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
 */function zA(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function nk(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ik=/^[cdef][\w-]{21}$/,Bg="";function rk(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=sk(n);return ik.test(t)?t:Bg}catch{return Bg}}function sk(n){return nk(n).substr(0,22)}/**
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
 */function Rd(n){return`${n.appName}!${n.appId}`}/**
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
 */const FA=new Map;function BA(n,e){const t=Rd(n);jA(t,e),ak(t,e)}function jA(n,e){const t=FA.get(n);if(t)for(const i of t)i(e)}function ak(n,e){const t=ok();t&&t.postMessage({key:n,fid:e}),lk()}let wa=null;function ok(){return!wa&&"BroadcastChannel"in self&&(wa=new BroadcastChannel("[Firebase] FID Change"),wa.onmessage=n=>{jA(n.data.key,n.data.fid)}),wa}function lk(){FA.size===0&&wa&&(wa.close(),wa=null)}/**
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
 */const uk="firebase-installations-database",ck=1,Da="firebase-installations-store";let tg=null;function Q_(){return tg||(tg=WS(uk,ck,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Da)}}})),tg}async function Bf(n,e){const t=Rd(n),a=(await Q_()).transaction(Da,"readwrite"),l=a.objectStore(Da),c=await l.get(t);return await l.put(e,t),await a.done,(!c||c.fid!==e.fid)&&BA(n,e.fid),e}async function qA(n){const e=Rd(n),i=(await Q_()).transaction(Da,"readwrite");await i.objectStore(Da).delete(e),await i.done}async function Cd(n,e){const t=Rd(n),a=(await Q_()).transaction(Da,"readwrite"),l=a.objectStore(Da),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await a.done,d&&(!c||c.fid!==d.fid)&&BA(n,d.fid),d}/**
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
 */async function $_(n){let e;const t=await Cd(n.appConfig,i=>{const a=hk(i),l=fk(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===Bg?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function hk(n){const e=n||{fid:rk(),registrationStatus:0};return HA(e)}function fk(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Na.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=dk(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mk(n)}:{installationEntry:e}}async function dk(n,e){try{const t=await tk(n,e);return Bf(n.appConfig,t)}catch(t){throw MA(t)&&t.customData.serverCode===409?await qA(n.appConfig):await Bf(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function mk(n){let e=await dw(n.appConfig);for(;e.registrationStatus===1;)await zA(100),e=await dw(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await $_(n);return i||t}return e}function dw(n){return Cd(n,e=>{if(!e)throw Na.create("installation-not-found");return HA(e)})}function HA(n){return pk(n)?{fid:n.fid,registrationStatus:0}:n}function pk(n){return n.registrationStatus===1&&n.registrationTime+DA<Date.now()}/**
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
 */async function gk({appConfig:n,heartbeatServiceProvider:e},t){const i=_k(n,t),a=ZM(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&a.append("x-firebase-client",g)}const c={installation:{sdkVersion:xA,appId:n.appId}},d={method:"POST",headers:a,body:JSON.stringify(c)},m=await UA(()=>fetch(i,d));if(m.ok){const g=await m.json();return PA(g)}else throw await LA("Generate Auth Token",m)}function _k(n,{fid:e}){return`${kA(n)}/${e}/authTokens:generate`}/**
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
 */async function Y_(n,e=!1){let t;const i=await Cd(n.appConfig,l=>{if(!GA(l))throw Na.create("not-registered");const c=l.authToken;if(!e&&Ek(c))return l;if(c.requestStatus===1)return t=yk(n,e),l;{if(!navigator.onLine)throw Na.create("app-offline");const d=wk(l);return t=vk(n,d),d}});return t?await t:i.authToken}async function yk(n,e){let t=await mw(n.appConfig);for(;t.authToken.requestStatus===1;)await zA(100),t=await mw(n.appConfig);const i=t.authToken;return i.requestStatus===0?Y_(n,e):i}function mw(n){return Cd(n,e=>{if(!GA(e))throw Na.create("not-registered");const t=e.authToken;return Sk(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function vk(n,e){try{const t=await gk(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Bf(n.appConfig,i),t}catch(t){if(MA(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await qA(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Bf(n.appConfig,i)}throw t}}function GA(n){return n!==void 0&&n.registrationStatus===2}function Ek(n){return n.requestStatus===2&&!Tk(n)}function Tk(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+$M}function wk(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Sk(n){return n.requestStatus===1&&n.requestTime+DA<Date.now()}/**
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
 */async function bk(n){const e=n,{installationEntry:t,registrationPromise:i}=await $_(e);return i?i.catch(console.error):Y_(e).catch(console.error),t.fid}/**
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
 */async function Ak(n,e=!1){const t=n;return await Rk(t),(await Y_(t,e)).token}async function Rk(n){const{registrationPromise:e}=await $_(n);e&&await e}/**
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
 */function Ck(n){if(!n||!n.options)throw ng("App Configuration");if(!n.name)throw ng("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw ng(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function ng(n){return Na.create("missing-app-config-values",{valueName:n})}/**
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
 */const KA="installations",Ik="installations-internal",Nk=n=>{const e=n.getProvider("app").getImmediate(),t=Ck(e),i=Fs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Dk=n=>{const e=n.getProvider("app").getImmediate(),t=Fs(e,KA).getImmediate();return{getId:()=>bk(t),getToken:a=>Ak(t,a)}};function xk(){gi(new ri(KA,Nk,"PUBLIC")),gi(new ri(Ik,Dk,"PRIVATE"))}xk();Rn(NA,K_);Rn(NA,K_,"esm2017");/**
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
 */const jf="analytics",Ok="firebase_id",Mk="origin",kk=60*1e3,Pk="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",W_="https://www.googletagmanager.com/gtag/js";/**
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
 */const Cn=new vc("@firebase/analytics");/**
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
 */const Lk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vn=new La("analytics","Analytics",Lk);/**
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
 */function Vk(n){if(!n.startsWith(W_)){const e=Vn.create("invalid-gtag-resource",{gtagURL:n});return Cn.warn(e.message),""}return n}function QA(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Uk(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function zk(n,e){const t=Uk("firebase-js-sdk-policy",{createScriptURL:Vk}),i=document.createElement("script"),a=`${W_}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function Fk(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Bk(n,e,t,i,a,l){const c=i[a];try{if(c)await e[c];else{const m=(await QA(t)).find(g=>g.measurementId===a);m&&await e[m.appId]}}catch(d){Cn.error(d)}n("config",a,l)}async function jk(n,e,t,i,a){try{let l=[];if(a&&a.send_to){let c=a.send_to;Array.isArray(c)||(c=[c]);const d=await QA(t);for(const m of c){const g=d.find(T=>T.measurementId===m),y=g&&e[g.appId];if(y)l.push(y);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,a||{})}catch(l){Cn.error(l)}}function qk(n,e,t,i){async function a(l,...c){try{if(l==="event"){const[d,m]=c;await jk(n,e,t,d,m)}else if(l==="config"){const[d,m]=c;await Bk(n,e,t,i,d,m)}else if(l==="consent"){const[d,m]=c;n("consent",d,m)}else if(l==="get"){const[d,m,g]=c;n("get",d,m,g)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){Cn.error(d)}}return a}function Hk(n,e,t,i,a){let l=function(...c){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=qk(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function Gk(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(W_)&&t.src.includes(n))return t;return null}/**
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
 */const Kk=30,Qk=1e3;class $k{constructor(e={},t=Qk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $A=new $k;function Yk(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Wk(n){var e;const{appId:t,apiKey:i}=n,a={method:"GET",headers:Yk(i)},l=Pk.replace("{app-id}",t),c=await fetch(l,a);if(c.status!==200&&c.status!==304){let d="";try{const m=await c.json();!((e=m.error)===null||e===void 0)&&e.message&&(d=m.error.message)}catch{}throw Vn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function Xk(n,e=$A,t){const{appId:i,apiKey:a,measurementId:l}=n.options;if(!i)throw Vn.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:i};throw Vn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new eP;return setTimeout(async()=>{d.abort()},kk),YA({appId:i,apiKey:a,measurementId:l},c,d,e)}async function YA(n,{throttleEndTimeMillis:e,backoffCount:t},i,a=$A){var l;const{appId:c,measurementId:d}=n;try{await Zk(i,e)}catch(m){if(d)return Cn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:d};throw m}try{const m=await Wk(n);return a.deleteThrottleMetadata(c),m}catch(m){const g=m;if(!Jk(g)){if(a.deleteThrottleMetadata(c),d)return Cn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:d};throw m}const y=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?aT(t,a.intervalMillis,Kk):aT(t,a.intervalMillis),T={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return a.setThrottleMetadata(c,T),Cn.debug(`Calling attemptFetch again in ${y} millis`),YA(n,T,i,a)}}function Zk(n,e){return new Promise((t,i)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),i(Vn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Jk(n){if(!(n instanceof yi)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class eP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function tP(n,e,t,i,a){if(a&&a.global){n("event",t,i);return}else{const l=await e,c=Object.assign(Object.assign({},i),{send_to:l});n("event",t,c)}}/**
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
 */async function nP(){if(GS())try{await KS()}catch(n){return Cn.warn(Vn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Cn.warn(Vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function iP(n,e,t,i,a,l,c){var d;const m=Xk(n);m.then(R=>{t[R.measurementId]=R.appId,n.options.measurementId&&R.measurementId!==n.options.measurementId&&Cn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${R.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(R=>Cn.error(R)),e.push(m);const g=nP().then(R=>{if(R)return i.getId()}),[y,T]=await Promise.all([m,g]);Gk(l)||zk(l,y.measurementId),a("js",new Date);const w=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return w[Mk]="firebase",w.update=!0,T!=null&&(w[Ok]=T),a("config",y.measurementId,w),y.measurementId}/**
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
 */class rP{constructor(e){this.app=e}_delete(){return delete ju[this.app.options.appId],Promise.resolve()}}let ju={},pw=[];const gw={};let ig="dataLayer",sP="gtag",_w,WA,yw=!1;function aP(){const n=[];if(qS()&&n.push("This is a browser extension environment."),nD()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,a)=>`(${a+1}) ${i}`).join(" "),t=Vn.create("invalid-analytics-context",{errorInfo:e});Cn.warn(t.message)}}function oP(n,e,t){aP();const i=n.options.appId;if(!i)throw Vn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Cn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vn.create("no-api-key");if(ju[i]!=null)throw Vn.create("already-exists",{id:i});if(!yw){Fk(ig);const{wrappedGtag:l,gtagCore:c}=Hk(ju,pw,gw,ig,sP);WA=l,_w=c,yw=!0}return ju[i]=iP(n,pw,gw,e,_w,ig,t),new rP(n)}function lP(n=hd()){n=wt(n);const e=Fs(n,jf);return e.isInitialized()?e.getImmediate():uP(n)}function uP(n,e={}){const t=Fs(n,jf);if(t.isInitialized()){const a=t.getImmediate();if(Xu(e,t.getOptions()))return a;throw Vn.create("already-initialized")}return t.initialize({options:e})}function cP(n,e,t,i){n=wt(n),tP(WA,ju[n.app.options.appId],e,t,i).catch(a=>Cn.error(a))}const vw="@firebase/analytics",Ew="0.10.11";function hP(){gi(new ri(jf,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return oP(i,a,t)},"PUBLIC")),gi(new ri("analytics-internal",n,"PRIVATE")),Rn(vw,Ew),Rn(vw,Ew,"esm2017");function n(e){try{const t=e.getProvider(jf).getImmediate();return{logEvent:(i,a,l)=>cP(t,i,a,l)}}catch(t){throw Vn.create("interop-component-reg-failed",{reason:t})}}}hP();function X_(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]]);return t}function XA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fP=XA,ZA=new La("auth","Firebase",XA());/**
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
 */const qf=new vc("@firebase/auth");function dP(n,...e){qf.logLevel<=ke.WARN&&qf.warn(`Auth (${Va}): ${n}`,...e)}function vf(n,...e){qf.logLevel<=ke.ERROR&&qf.error(`Auth (${Va}): ${n}`,...e)}/**
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
 */function Bi(n,...e){throw J_(n,...e)}function mi(n,...e){return J_(n,...e)}function Z_(n,e,t){const i=Object.assign(Object.assign({},fP()),{[e]:t});return new La("auth","Firebase",i).create(e,{appName:n.name})}function Ra(n){return Z_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mP(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Bi(n,"argument-error"),Z_(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function J_(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ZA.create(n,...e)}function Se(n,e,...t){if(!n)throw J_(e,...t)}function Er(n){const e="INTERNAL ASSERTION FAILED: "+n;throw vf(e),new Error(e)}function Dr(n,e){n||Er(e)}/**
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
 */function jg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function pP(){return Tw()==="http:"||Tw()==="https:"}function Tw(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function gP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pP()||qS()||"connection"in navigator)?navigator.onLine:!0}function _P(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ac{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=c_()||HS()}get(){return gP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ey(n,e){Dr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class JA{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vP=new Ac(3e4,6e4);function ty(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ja(n,e,t,i,a={}){return eR(n,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=hl(Object.assign({key:n.config.apiKey},c)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:m},l);return ZN()||(g.referrerPolicy="no-referrer"),JA.fetch()(tR(n,n.config.apiHost,t,d),g)})}async function eR(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},yP),e);try{const a=new TP(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw lf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[m,g]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw lf(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw lf(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw lf(n,"user-disabled",c);const y=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Z_(n,y,g);Bi(n,y)}}catch(a){if(a instanceof yi)throw a;Bi(n,"network-request-failed",{message:String(a)})}}async function EP(n,e,t,i,a={}){const l=await ja(n,e,t,i,a);return"mfaPendingCredential"in l&&Bi(n,"multi-factor-auth-required",{_serverResponse:l}),l}function tR(n,e,t,i){const a=`${e}${t}?${i}`;return n.config.emulator?ey(n.config,a):`${n.config.apiScheme}://${a}`}class TP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mi(this.auth,"network-request-failed")),vP.get())})}}function lf(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=mi(n,e,i);return a.customData._tokenResponse=t,a}/**
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
 */async function wP(n,e){return ja(n,"POST","/v1/accounts:delete",e)}async function nR(n,e){return ja(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function qu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SP(n,e=!1){const t=wt(n),i=await t.getIdToken(e),a=ny(i);Se(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:qu(rg(a.auth_time)),issuedAtTime:qu(rg(a.iat)),expirationTime:qu(rg(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function rg(n){return Number(n)*1e3}function ny(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return vf("JWT malformed, contained fewer than 3 sections"),null;try{const a=Rf(t);return a?JSON.parse(a):(vf("Failed to decode base64 JWT payload"),null)}catch(a){return vf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function ww(n){const e=ny(n);return Se(e,"internal-error"),Se(typeof e.exp<"u","internal-error"),Se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function nl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof yi&&bP(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function bP({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class AP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qu(this.lastLoginAt),this.creationTime=qu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hf(n){var e;const t=n.auth,i=await n.getIdToken(),a=await nl(n,nR(t,{idToken:i}));Se(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?iR(l.providerUserInfo):[],d=CP(n.providerData,c),m=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=m?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new qg(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,T)}async function RP(n){const e=wt(n);await Hf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CP(n,e){return[...n.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function iR(n){return n.map(e=>{var{providerId:t}=e,i=X_(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function IP(n,e){const t=await eR(n,{},async()=>{const i=hl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,c=tR(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",JA.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function NP(n,e){return ja(n,"POST","/v2/accounts:revokeToken",ty(n,e))}/**
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
 */class qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Se(e.idToken,"internal-error"),Se(typeof e.idToken<"u","internal-error"),Se(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ww(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Se(e.length!==0,"internal-error");const t=ww(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await IP(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,c=new qo;return i&&(Se(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(Se(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Se(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qo,this.toJSON())}_performRefresh(){return Er("not implemented")}}/**
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
 */function _s(n,e){Se(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tr{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,l=X_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new qg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await nl(this,this.stsTokenManager.getToken(this.auth,e));return Se(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return SP(this,e)}reload(){return RP(this)}_assign(e){this!==e&&(Se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Hf(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ti(this.auth.app))return Promise.reject(Ra(this.auth));const e=await this.getIdToken();return await nl(this,wP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,l,c,d,m,g,y;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,R=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,x=(c=t.photoURL)!==null&&c!==void 0?c:void 0,q=(d=t.tenantId)!==null&&d!==void 0?d:void 0,z=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,$=(g=t.createdAt)!==null&&g!==void 0?g:void 0,W=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:X,emailVerified:fe,isAnonymous:ae,providerData:ve,stsTokenManager:M}=t;Se(X&&M,e,"internal-error");const C=qo.fromJSON(this.name,M);Se(typeof X=="string",e,"internal-error"),_s(T,e.name),_s(w,e.name),Se(typeof fe=="boolean",e,"internal-error"),Se(typeof ae=="boolean",e,"internal-error"),_s(R,e.name),_s(x,e.name),_s(q,e.name),_s(z,e.name),_s($,e.name),_s(W,e.name);const A=new Tr({uid:X,auth:e,email:w,emailVerified:fe,displayName:T,isAnonymous:ae,photoURL:x,phoneNumber:R,tenantId:q,stsTokenManager:C,createdAt:$,lastLoginAt:W});return ve&&Array.isArray(ve)&&(A.providerData=ve.map(N=>Object.assign({},N))),z&&(A._redirectEventId=z),A}static async _fromIdTokenResponse(e,t,i=!1){const a=new qo;a.updateFromServerResponse(t);const l=new Tr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await Hf(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];Se(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?iR(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new qo;d.updateFromIdToken(i);const m=new Tr({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new qg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
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
 */const Sw=new Map;function wr(n){Dr(n instanceof Function,"Expected a class definition");let e=Sw.get(n);return e?(Dr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sw.set(n,e),e)}/**
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
 */class rR{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rR.type="NONE";const bw=rR;/**
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
 */function Ef(n,e,t){return`firebase:${n}:${e}:${t}`}class Ho{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Ef(this.userKey,a.apiKey,l),this.fullPersistenceKey=Ef("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ho(wr(bw),e,i);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||wr(bw);const c=Ef(i,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){const T=Tr._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Ho(l,e,i):(l=m[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Ho(l,e,i))}}/**
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
 */function Aw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sR(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cR(e))return"Blackberry";if(hR(e))return"Webos";if(aR(e))return"Safari";if((e.includes("chrome/")||oR(e))&&!e.includes("edge/"))return"Chrome";if(uR(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sR(n=dn()){return/firefox\//i.test(n)}function aR(n=dn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oR(n=dn()){return/crios\//i.test(n)}function lR(n=dn()){return/iemobile/i.test(n)}function uR(n=dn()){return/android/i.test(n)}function cR(n=dn()){return/blackberry/i.test(n)}function hR(n=dn()){return/webos/i.test(n)}function iy(n=dn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function DP(n=dn()){var e;return iy(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xP(){return JN()&&document.documentMode===10}function fR(n=dn()){return iy(n)||uR(n)||hR(n)||cR(n)||/windows phone/i.test(n)||lR(n)}/**
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
 */function dR(n,e=[]){let t;switch(n){case"Browser":t=Aw(dn());break;case"Worker":t=`${Aw(dn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Va}/${i}`}/**
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
 */class OP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const m=e(l);c(m)}catch(m){d(m)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function MP(n,e={}){return ja(n,"GET","/v2/passwordPolicy",ty(n,e))}/**
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
 */const kP=6;class PP{constructor(e){var t,i,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:kP,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,l,c,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class LP{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rw(this),this.idTokenSubscription=new Rw(this),this.beforeStateQueue=new OP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=wr(t)),this._initializationPromise=this.queue(async()=>{var i,a;if(!this._deleted&&(this.persistenceManager=await Ho.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await nR(this,{idToken:e}),i=await Tr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ti(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&(m!=null&&m.user)&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hf(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_P()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ti(this.app))return Promise.reject(Ra(this));const t=e?wt(e):null;return t&&Se(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ti(this.app)?Promise.reject(Ra(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ti(this.app)?Promise.reject(Ra(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MP(this),t=new PP(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new La("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await NP(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&wr(e)||this._popupRedirectResolver;Se(t,this,"argument-error"),this.redirectPersistenceManager=await Ho.create(this,[wr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Se(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ti(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Id(n){return wt(n)}class Rw{constructor(e){this.auth=e,this.observer=null,this.addObserver=uD(t=>this.observer=t)}get next(){return Se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ry={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VP(n){ry=n}function UP(n){return ry.loadJS(n)}function zP(){return ry.gapiScript}function FP(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function BP(n,e){const t=Fs(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Xu(l,e??{}))return a;Bi(a,"already-initialized")}return t.initialize({options:e})}function jP(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(wr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function qP(n,e,t){const i=Id(n);Se(i._canInitEmulator,i,"emulator-config-failed"),Se(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=mR(e),{host:c,port:d}=HP(e),m=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${c}${m}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})}),GP()}function mR(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function HP(n){const e=mR(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:Cw(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Cw(c)}}}function Cw(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function GP(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class pR{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Er("not implemented")}_getIdTokenResponse(e){return Er("not implemented")}_linkToIdToken(e,t){return Er("not implemented")}_getReauthenticationResolver(e){return Er("not implemented")}}/**
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
 */async function Go(n,e){return EP(n,"POST","/v1/accounts:signInWithIdp",ty(n,e))}/**
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
 */const KP="http://localhost";class xa extends pR{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xa(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,l=X_(t,["providerId","signInMethod"]);if(!i||!a)return null;const c=new xa(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Go(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Go(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Go(e,t)}buildRequest(){const e={requestUri:KP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hl(t)}return e}}/**
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
 */class sy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rc extends sy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ys extends Rc{constructor(){super("facebook.com")}static credential(e){return xa._fromParams({providerId:ys.PROVIDER_ID,signInMethod:ys.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ys.credentialFromTaggedObject(e)}static credentialFromError(e){return ys.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ys.credential(e.oauthAccessToken)}catch{return null}}}ys.FACEBOOK_SIGN_IN_METHOD="facebook.com";ys.PROVIDER_ID="facebook.com";/**
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
 */class vr extends Rc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xa._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return vr.credential(t,i)}catch{return null}}}vr.GOOGLE_SIGN_IN_METHOD="google.com";vr.PROVIDER_ID="google.com";/**
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
 */class vs extends Rc{constructor(){super("github.com")}static credential(e){return xa._fromParams({providerId:vs.PROVIDER_ID,signInMethod:vs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vs.credentialFromTaggedObject(e)}static credentialFromError(e){return vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vs.credential(e.oauthAccessToken)}catch{return null}}}vs.GITHUB_SIGN_IN_METHOD="github.com";vs.PROVIDER_ID="github.com";/**
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
 */class Es extends Rc{constructor(){super("twitter.com")}static credential(e,t){return xa._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Es.credential(t,i)}catch{return null}}}Es.TWITTER_SIGN_IN_METHOD="twitter.com";Es.PROVIDER_ID="twitter.com";/**
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
 */class il{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await Tr._fromIdTokenResponse(e,i,a),c=Iw(i);return new il({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=Iw(i);return new il({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function Iw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Gf extends yi{constructor(e,t,i,a){var l;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,Gf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new Gf(e,t,i,a)}}function gR(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Gf._fromErrorAndOperation(n,l,e,i):l})}async function QP(n,e,t=!1){const i=await nl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return il._forOperation(n,"link",i)}/**
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
 */async function $P(n,e,t=!1){const{auth:i}=n;if(ti(i.app))return Promise.reject(Ra(i));const a="reauthenticate";try{const l=await nl(n,gR(i,a,e,n),t);Se(l.idToken,i,"internal-error");const c=ny(l.idToken);Se(c,i,"internal-error");const{sub:d}=c;return Se(n.uid===d,i,"user-mismatch"),il._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Bi(i,"user-mismatch"),l}}/**
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
 */async function YP(n,e,t=!1){if(ti(n.app))return Promise.reject(Ra(n));const i="signIn",a=await gR(n,i,e),l=await il._fromIdTokenResponse(n,i,a);return t||await n._updateCurrentUser(l.user),l}/**
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
 */async function WP(n,e){return ja(n,"POST","/v1/accounts:update",e)}/**
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
 */async function XP(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=wt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await nl(i,WP(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:m})=>m==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function ZP(n,e,t,i){return wt(n).onIdTokenChanged(e,t,i)}function JP(n,e,t){return wt(n).beforeAuthStateChanged(e,t)}function eL(n){return wt(n).signOut()}const Kf="__sak";/**
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
 */class _R{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kf,"1"),this.storage.removeItem(Kf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tL=1e3,nL=10;class yR extends _R{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,m)=>{this.notifyListeners(c,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);xP()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,nL):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},tL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yR.type="LOCAL";const iL=yR;/**
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
 */class vR extends _R{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vR.type="SESSION";const ER=vR;/**
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
 */function rL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Nd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new Nd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),m=await rL(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nd.receivers=[];/**
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
 */function ay(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class sL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,m)=>{const g=ay("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Ui(){return window}function aL(n){Ui().location.href=n}/**
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
 */function TR(){return typeof Ui().WorkerGlobalScope<"u"&&typeof Ui().importScripts=="function"}async function oL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lL(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function uL(){return TR()?self:null}/**
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
 */const wR="firebaseLocalStorageDb",cL=1,Qf="firebaseLocalStorage",SR="fbase_key";class Cc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dd(n,e){return n.transaction([Qf],e?"readwrite":"readonly").objectStore(Qf)}function hL(){const n=indexedDB.deleteDatabase(wR);return new Cc(n).toPromise()}function Hg(){const n=indexedDB.open(wR,cL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Qf,{keyPath:SR})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Qf)?e(i):(i.close(),await hL(),e(await Hg()))})})}async function Nw(n,e,t){const i=Dd(n,!0).put({[SR]:e,value:t});return new Cc(i).toPromise()}async function fL(n,e){const t=Dd(n,!1).get(e),i=await new Cc(t).toPromise();return i===void 0?null:i.value}function Dw(n,e){const t=Dd(n,!0).delete(e);return new Cc(t).toPromise()}const dL=800,mL=3;class bR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>mL)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return TR()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nd._getInstance(uL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oL(),!this.activeServiceWorker)return;this.sender=new sL(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hg();return await Nw(e,Kf,"1"),await Dw(e,Kf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Nw(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>fL(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Dd(a,!1).getAll();return new Cc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bR.type="LOCAL";const pL=bR;new Ac(3e4,6e4);/**
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
 */function AR(n,e){return e?wr(e):(Se(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class oy extends pR{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Go(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Go(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Go(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gL(n){return YP(n.auth,new oy(n),n.bypassAuthState)}function _L(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),$P(t,new oy(n),n.bypassAuthState)}async function yL(n){const{auth:e,user:t}=n;return Se(t,e,"internal-error"),QP(t,new oy(n),n.bypassAuthState)}/**
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
 */class RR{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gL;case"linkViaPopup":case"linkViaRedirect":return yL;case"reauthViaPopup":case"reauthViaRedirect":return _L;default:Bi(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const vL=new Ac(2e3,1e4);async function EL(n,e,t){if(ti(n.app))return Promise.reject(mi(n,"operation-not-supported-in-this-environment"));const i=Id(n);mP(n,e,sy);const a=AR(i,t);return new Sa(i,"signInViaPopup",e,a).executeNotNull()}class Sa extends RR{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,Sa.currentPopupAction&&Sa.currentPopupAction.cancel(),Sa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Se(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=ay();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vL.get())};e()}}Sa.currentPopupAction=null;/**
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
 */const TL="pendingRedirect",Tf=new Map;class wL extends RR{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Tf.get(this.auth._key());if(!e){try{const i=await SL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Tf.set(this.auth._key(),e)}return this.bypassAuthState||Tf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SL(n,e){const t=RL(e),i=AL(n);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}function bL(n,e){Tf.set(n._key(),e)}function AL(n){return wr(n._redirectPersistence)}function RL(n){return Ef(TL,n.config.apiKey,n.name)}async function CL(n,e,t=!1){if(ti(n.app))return Promise.reject(Ra(n));const i=Id(n),a=AR(i,e),c=await new wL(i,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
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
 */const IL=10*60*1e3;class NL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DL(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!CR(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(mi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IL&&this.cachedEventUids.clear(),this.cachedEventUids.has(xw(e))}saveEventToCache(e){this.cachedEventUids.add(xw(e)),this.lastProcessedEventTime=Date.now()}}function xw(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function CR({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DL(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return CR(n);default:return!1}}/**
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
 */async function xL(n,e={}){return ja(n,"GET","/v1/projects",e)}/**
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
 */const OL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ML=/^https?/;async function kL(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xL(n);for(const t of e)try{if(PL(t))return}catch{}Bi(n,"unauthorized-domain")}function PL(n){const e=jg(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!ML.test(t))return!1;if(OL.test(n))return i===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
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
 */const LL=new Ac(3e4,6e4);function Ow(){const n=Ui().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function VL(n){return new Promise((e,t)=>{var i,a,l;function c(){Ow(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ow(),t(mi(n,"network-request-failed"))},timeout:LL.get()})}if(!((a=(i=Ui().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Ui().gapi)===null||l===void 0)&&l.load)c();else{const d=FP("iframefcb");return Ui()[d]=()=>{gapi.load?c():t(mi(n,"network-request-failed"))},UP(`${zP()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw wf=null,e})}let wf=null;function UL(n){return wf=wf||VL(n),wf}/**
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
 */const zL=new Ac(5e3,15e3),FL="__/auth/iframe",BL="emulator/auth/iframe",jL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HL(n){const e=n.config;Se(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ey(e,BL):`https://${n.config.authDomain}/${FL}`,i={apiKey:e.apiKey,appName:n.name,v:Va},a=qL.get(n.config.apiHost);a&&(i.eid=a);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${hl(i).slice(1)}`}async function GL(n){const e=await UL(n),t=Ui().gapi;return Se(t,n,"internal-error"),e.open({where:document.body,url:HL(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jL,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=mi(n,"network-request-failed"),d=Ui().setTimeout(()=>{l(c)},zL.get());function m(){Ui().clearTimeout(d),a(i)}i.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const KL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QL=500,$L=600,YL="_blank",WL="http://localhost";class Mw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XL(n,e,t,i=QL,a=$L){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const m=Object.assign(Object.assign({},KL),{width:i.toString(),height:a.toString(),top:l,left:c}),g=dn().toLowerCase();t&&(d=oR(g)?YL:t),sR(g)&&(e=e||WL,m.scrollbars="yes");const y=Object.entries(m).reduce((w,[R,x])=>`${w}${R}=${x},`,"");if(DP(g)&&d!=="_self")return ZL(e||"",d),new Mw(null);const T=window.open(e||"",d,y);Se(T,n,"popup-blocked");try{T.focus()}catch{}return new Mw(T)}function ZL(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const JL="__/auth/handler",eV="emulator/auth/handler",tV=encodeURIComponent("fac");async function kw(n,e,t,i,a,l){Se(n.config.authDomain,n,"auth-domain-config-required"),Se(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Va,eventId:a};if(e instanceof sy){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",gg(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof Rc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const m=await n._getAppCheckToken(),g=m?`#${tV}=${encodeURIComponent(m)}`:"";return`${nV(n)}?${hl(d).slice(1)}${g}`}function nV({config:n}){return n.emulator?ey(n,eV):`https://${n.authDomain}/${JL}`}/**
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
 */const sg="webStorageSupport";class iV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ER,this._completeRedirectFn=CL,this._overrideRedirectResult=bL}async _openPopup(e,t,i,a){var l;Dr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await kw(e,t,i,jg(),a);return XL(e,c,ay())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await kw(e,t,i,jg(),a);return aL(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Dr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await GL(e),i=new NL(e);return t.register("authEvent",a=>(Se(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sg,{type:sg},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[sg];c!==void 0&&t(!!c),Bi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kL(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fR()||aR()||iy()}}const rV=iV;var Pw="@firebase/auth",Lw="1.9.0";/**
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
 */class sV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function aV(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oV(n){gi(new ri("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;Se(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dR(n)},g=new LP(i,a,l,m);return jP(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),gi(new ri("auth-internal",e=>{const t=Id(e.getProvider("auth").getImmediate());return(i=>new sV(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Pw,Lw,aV(n)),Rn(Pw,Lw,"esm2017")}/**
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
 */const lV=5*60,uV=BS("authIdTokenMaxAge")||lV;let Vw=null;const cV=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>uV)return;const a=t==null?void 0:t.token;Vw!==a&&(Vw=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function xd(n=hd()){const e=Fs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=BP(n,{popupRedirectResolver:rV,persistence:[pL,iL,ER]}),i=BS("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=cV(l.toString());JP(t,c,()=>c(t.currentUser)),ZP(t,d=>c(d))}}const a=US("auth");return a&&qP(t,`http://${a}`),t}function hV(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}VP({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=a=>{const l=mi("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",hV().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oV("Browser");const fV={apiKey:"AIzaSyDk7mEkayeHxrKerk0hOOCsxmztdYh9uck",authDomain:"final-web-app-5880c.firebaseapp.com",projectId:"final-web-app-5880c",storageBucket:"final-web-app-5880c.firebasestorage.app",messagingSenderId:"725331159486",appId:"1:725331159486:web:3ac104befd96704203b1ef",measurementId:"G-P0380Q8BWN"},ly=XS(fV),dV=V_(ly);lP(ly);const mV=xd(ly),pV=async()=>{const n=new vr;try{const e=await EL(mV,n),t=e.user;if(console.log("User Logged In:",t),t){const{uid:i,displayName:a,email:l,photoURL:c}=t;console.log("Saving to Firestore:",i,a,l);const d=zg(dV,"users",i);return await Fg(d,{uid:i,name:a,email:l,photoURL:c},{merge:!0}),console.log("Firestore Saved Successfully!"),e}}catch(e){throw console.error("Error signing in with Google:",e),e}},gV=()=>{const n=_c();Q.useEffect(()=>{JSON.parse(localStorage.getItem("user"))&&n("/home")},[n]);const e=()=>{pV().then(t=>{const i=t.user;localStorage.setItem("user",JSON.stringify(i)),n("/home")}).catch(t=>{console.error("Error during sign in: ",t.message),alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ: "+t.message)})};return G.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",children:G.jsxs("div",{className:"max-w-md w-full space-y-8 p-10 bg-white rounded-2xl shadow-xl transform transition-all hover:scale-[1.01]",children:[G.jsxs("div",{className:"text-center",children:[G.jsx("div",{className:"flex justify-center mb-8",children:G.jsx("div",{className:"p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full shadow-inner",children:G.jsxs("svg",{className:"w-14 h-14 text-blue-600",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[G.jsx("path",{d:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20"}),G.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"})]})})}),G.jsx("h1",{className:"text-4xl font-bold mb-3 text-gray-800 tracking-tight",children:"ระบบจัดการห้องเรียน"}),G.jsx("h2",{className:"text-xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text",children:"สำหรับอาจารย์"}),G.jsx("p",{className:"text-gray-600 text-lg",children:"กรุณาเข้าสู่ระบบด้วยบัญชี Google ของท่าน"})]}),G.jsxs("button",{onClick:e,className:`w-full flex items-center justify-center px-6 py-4 \r
                   text-gray-700 bg-white rounded-xl \r
                   border-2 border-gray-200\r
                   hover:bg-gray-50 hover:border-blue-300 \r
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500\r
                   transform transition-all duration-200 active:scale-95\r
                   shadow-sm hover:shadow-md`,children:[G.jsxs("svg",{className:"w-6 h-6 mr-3",viewBox:"0 0 24 24",children:[G.jsx("path",{d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",fill:"#4285F4"}),G.jsx("path",{d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",fill:"#34A853"}),G.jsx("path",{d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",fill:"#FBBC05"}),G.jsx("path",{d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",fill:"#EA4335"})]}),G.jsx("span",{className:"text-lg font-medium cursor-pointer",children:"เข้าสู่ระบบด้วย Google"})]}),G.jsx("div",{className:"mt-8 text-center text-sm text-gray-500",children:G.jsx("span",{className:"bg-yellow-50 px-3 py-1 rounded-full",children:"ระบบนี้รองรับการใช้งานผ่านบัญชี Google เท่านั้น"})})]})})},_V=()=>{const n=_c(),e=xd(),t=V_(),[i,a]=Q.useState([]),[l,c]=Q.useState(null),[d,m]=Q.useState(!1);Q.useEffect(()=>{const w=e.currentUser;if(w){c(w);const R=wM(t,"classroom"),x=PM(R,LM("owner","==",w.uid));(async()=>{const $=(await qM(x)).docs.map(W=>{var fe,ae,ve,M;const X=W.data();return{id:W.id,name:((fe=X.info)==null?void 0:fe.name)||"ไม่มีชื่อวิชา",code:((ae=X.info)==null?void 0:ae.code)||"ไม่มีรหัสวิชา",room:((ve=X.info)==null?void 0:ve.room)||"ไม่มีห้องเรียน",photo:((M=X.info)==null?void 0:M.photo)||"https://via.placeholder.com/400x200?text=No+Image"}});a($)})()}else n("/")},[e,t,n]);const g=()=>{m(!0)},y=async()=>{try{await eL(e),localStorage.removeItem("user"),n("/",{replace:!0})}catch(w){console.error("Logout error:",w)}},T=()=>{m(!1)};return G.jsxs("div",{className:"min-h-screen bg-gray-100",children:[G.jsx("header",{className:"bg-white shadow",children:G.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center",children:[G.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"ระบบจัดการห้องเรียน"}),G.jsxs("div",{className:"flex items-center",children:[l&&G.jsxs("div",{className:"flex items-center mr-4",children:[G.jsx("img",{src:l.photoURL,alt:l.displayName,className:"w-10 h-10 rounded-full mr-2"}),G.jsxs("div",{children:[G.jsx("p",{className:"text-sm font-medium",children:l.displayName}),G.jsx("p",{className:"text-xs text-gray-500",children:l.email})]})]}),G.jsxs("div",{className:"flex space-x-2",children:[G.jsx(Vu,{to:"/edit-profile",className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600",children:"แก้ไขข้อมูลส่วนตัว"}),G.jsx(Vu,{to:"/add-course",className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600",children:"เพิ่มวิชา"}),G.jsx("button",{onClick:g,className:"px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600",children:"ออกจากระบบ"})]})]})]})}),G.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6",children:[G.jsx("h2",{className:"text-xl font-semibold mb-4",children:"รายวิชาที่สอน"}),i.length===0?G.jsx("p",{className:"text-gray-500",children:"ยังไม่มีรายวิชาที่สอน กรุณาเพิ่มวิชาใหม่"}):G.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:i.map(w=>G.jsxs("div",{className:"bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow",children:[G.jsx("div",{className:"h-40 bg-cover bg-center",style:{backgroundImage:`url(${w.photo||"https://via.placeholder.com/400x200?text=No+Image"})`}}),G.jsxs("div",{className:"p-4",children:[G.jsx("h3",{className:"text-lg font-medium",children:w.name}),G.jsxs("p",{className:"text-gray-600 text-sm",children:["รหัสวิชา: ",w.code]}),G.jsxs("p",{className:"text-gray-600 text-sm mb-4",children:["ห้องเรียน: ",w.room]}),G.jsx(Vu,{to:`/manage-classroom/${w.id}`,className:"block w-full text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:"จัดการห้องเรียน"})]})]},w.id))})]}),d&&G.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 popup-logout",children:G.jsxs("div",{className:"bg-white rounded-lg p-6 max-w-sm w-full mx-4",children:[G.jsx("h3",{className:"text-lg font-semibold mb-2",children:"ยืนยันการออกจากระบบ"}),G.jsx("p",{className:"text-gray-600 mb-4",children:"คุณต้องการออกจากระบบใช่หรือไม่?"}),G.jsxs("div",{className:"flex justify-end space-x-2",children:[G.jsx("button",{onClick:T,className:"px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300",children:"ยกเลิก"}),G.jsx("button",{onClick:y,className:"px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",children:"ยืนยัน"})]})]})})]})};var Uw={};const zw="@firebase/database",Fw="1.0.12";/**
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
 */let IR="";function yV(n){IR=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ut(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Wu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Hi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vV(e)}}catch{}return new EV},ba=NR("localStorage"),TV=NR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new vc("@firebase/database"),wV=function(){let n=1;return function(){return n++}}(),DR=function(n){const e=fD(n),t=new lD;t.update(e);const i=t.digest();return u_.encodeByteArray(i)},Ic=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ic.apply(null,i):typeof i=="object"?e+=Ut(i):e+=i,e+=" "}return e};let Hu=null,Bw=!0;const SV=function(n,e){ie(!0,"Can't turn on custom loggers persistently."),Ko.logLevel=ke.VERBOSE,Hu=Ko.log.bind(Ko)},nn=function(...n){if(Bw===!0&&(Bw=!1,Hu===null&&TV.get("logging_enabled")===!0&&SV()),Hu){const e=Ic.apply(null,n);Hu(e)}},Nc=function(n){return function(...e){nn(n,...e)}},Gg=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ic(...n);Ko.error(e)},xr=function(...n){const e=`FIREBASE FATAL ERROR: ${Ic(...n)}`;throw Ko.error(e),new Error(e)},In=function(...n){const e="FIREBASE WARNING: "+Ic(...n);Ko.warn(e)},bV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&In("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uy=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},AV=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},rl="[MIN_NAME]",Oa="[MAX_NAME]",qa=function(n,e){if(n===e)return 0;if(n===rl||e===Oa)return-1;if(e===rl||n===Oa)return 1;{const t=jw(n),i=jw(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},RV=function(n,e){return n===e?0:n<e?-1:1},Nu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Ut(e))},cy=function(n){if(typeof n!="object"||n===null)return Ut(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Ut(e[i]),t+=":",t+=cy(n[e[i]]);return t+="}",t},xR=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let a=0;a<t;a+=e)a+e>t?i.push(n.substring(a,t)):i.push(n.substring(a,a+e));return i};function an(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const OR=function(n){ie(!uy(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let a,l,c,d,m;n===0?(l=0,c=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),i),l=d+i,c=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(n/Math.pow(2,1-i-t))));const g=[];for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(m=0;m<64;m+=8){let w=parseInt(y.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),T=T+w}return T.toLowerCase()},CV=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},IV=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function NV(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const DV=new RegExp("^-?(0*)\\d{1,10}$"),xV=-2147483648,OV=2147483647,jw=function(n){if(DV.test(n)){const e=Number(n);if(e>=xV&&e<=OV)return e}return null},_l=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw In("Exception was thrown by user callback.",t),e},Math.floor(0))}},MV=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gu=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class kV{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ti(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){In(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(nn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',In(e)}}class Sf{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sf.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="5",MR="v",kR="s",PR="r",LR="f",VR=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,UR="ls",zR="p",Kg="ac",FR="websocket",BR="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,t,i,a,l=!1,c="",d=!1,m=!1){this.secure=t,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ba.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ba.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function LV(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function qR(n,e,t){ie(typeof e=="string","typeof type must == string"),ie(typeof t=="object","typeof params must == object");let i;if(e===FR)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===BR)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);LV(n)&&(t.ns=n.namespace);const a=[];return an(t,(l,c)=>{a.push(l+"="+c)}),i+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(){this.counters_={}}incrementCounter(e,t=1){Hi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return GN(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={},og={};function fy(n){const e=n.toString();return ag[e]||(ag[e]=new VV),ag[e]}function UV(n,e){const t=n.toString();return og[t]||(og[t]=e()),og[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&_l(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="start",FV="close",BV="pLPCommand",jV="pRTLPCB",HR="id",GR="pw",KR="ser",qV="cb",HV="seg",GV="ts",KV="d",QV="dframe",QR=1870,$R=30,$V=QR-$R,YV=25e3,WV=3e4;class Bo{constructor(e,t,i,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Nc(e),this.stats_=fy(t),this.urlFn=m=>(this.appCheckToken&&(m[Kg]=this.appCheckToken),qR(t,BR,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new zV(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WV)),AV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new dy((...l)=>{const[c,d,m,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===qw)this.id=d,this.password=m;else if(c===FV)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const i={};i[qw]="t",i[KR]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[qV]=this.scriptTagHolder.uniqueCallbackIdentifier),i[MR]=hy,this.transportSessionId&&(i[kR]=this.transportSessionId),this.lastSessionId&&(i[UR]=this.lastSessionId),this.applicationId&&(i[zR]=this.applicationId),this.appCheckToken&&(i[Kg]=this.appCheckToken),typeof location<"u"&&location.hostname&&VR.test(location.hostname)&&(i[PR]=LR);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bo.forceAllow_=!0}static forceDisallow(){Bo.forceDisallow_=!0}static isAvailable(){return Bo.forceAllow_?!0:!Bo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CV()&&!IV()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=LS(t),a=xR(i,$V);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[QV]="t",i[HR]=e,i[GR]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ut(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class dy{constructor(e,t,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=wV(),window[BV+this.uniqueCallbackIdentifier]=e,window[jV+this.uniqueCallbackIdentifier]=t,this.myIFrame=dy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){nn("frame writing exception"),d.stack&&nn(d.stack),nn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[HR]=this.myID,e[GR]=this.myPW,e[KR]=this.currentSerial;let t=this.urlFn(e),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+$R+i.length<=QR;){const c=this.pendingSegs.shift();i=i+"&"+HV+a+"="+c.seg+"&"+GV+a+"="+c.ts+"&"+KV+a+"="+c.d,a++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(i,Math.floor(YV)),l=()=>{clearTimeout(a),i()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{nn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XV=16384,ZV=45e3;let $f=null;typeof MozWebSocket<"u"?$f=MozWebSocket:typeof WebSocket<"u"&&($f=WebSocket);class hi{constructor(e,t,i,a,l,c,d){this.connId=e,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Nc(this.connId),this.stats_=fy(t),this.connURL=hi.connectionURL_(t,c,d,a,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,a,l){const c={};return c[MR]=hy,typeof location<"u"&&location.hostname&&VR.test(location.hostname)&&(c[PR]=LR),t&&(c[kR]=t),i&&(c[UR]=i),a&&(c[Kg]=a),l&&(c[zR]=l),qR(e,FR,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ba.set("previous_websocket_failure",!0);try{let i;eD(),this.mySock=new $f(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){hi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&$f!==null&&!hi.forceDisallow_}static previouslyFailed(){return ba.isInMemoryStorage||ba.get("previous_websocket_failure")===!0}markConnectionHealthy(){ba.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Wu(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ie(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Ut(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=xR(t,XV);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ZV))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hi.responsesRequiredToBeHealthy=2;hi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{static get ALL_TRANSPORTS(){return[Bo,hi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=hi&&hi.isAvailable();let i=t&&!hi.previouslyFailed();if(e.webSocketOnly&&(t||In("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[hi];else{const a=this.transports_=[];for(const l of ac.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);ac.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ac.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JV=6e4,eU=5e3,tU=10*1024,nU=100*1024,lg="t",Hw="d",iU="s",Gw="r",rU="e",Kw="o",Qw="a",$w="n",Yw="p",sU="h";class aU{constructor(e,t,i,a,l,c,d,m,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Nc("c:"+this.id+":"),this.transportManager_=new ac(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Gu(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(lg in e){const t=e[lg];t===Qw?this.upgradeIfSecondaryHealthy_():t===Gw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Kw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Nu("t",e),i=Nu("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$w,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Nu("t",e),i=Nu("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Nu(lg,e);if(Hw in e){const i=e[Hw];if(t===sU){const a=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===$w){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===iU?this.onConnectionShutdown_(i):t===Gw?this.onReset_(i):t===rU?Gg("Server Error: "+i):t===Kw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),hy!==i&&In("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Gu(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(JV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gu(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(eU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ba.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{put(e,t,i,a){}merge(e,t,i,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.allowedEvents_=e,this.listeners_={},ie(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const a=this.getInitialEvent(e);a&&t.apply(i,a)}off(e,t,i){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!i||i===a[l].context)){a.splice(l,1);return}}validateEventType_(e){ie(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf extends WR{static getInstance(){return new Yf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!c_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return ie(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=32,Xw=768;class tt{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function $e(){return new tt("")}function ze(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Vs(n){return n.pieces_.length-n.pieceNum_}function at(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new tt(n.pieces_,e)}function my(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function oU(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function oc(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function XR(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new tt(e,0)}function _t(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof tt)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&t.push(i[a])}return new tt(t,0)}function Pe(n){return n.pieceNum_>=n.pieces_.length}function En(n,e){const t=ze(n),i=ze(e);if(t===null)return e;if(t===i)return En(at(n),at(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function lU(n,e){const t=oc(n,0),i=oc(e,0);for(let a=0;a<t.length&&a<i.length;a++){const l=qa(t[a],i[a]);if(l!==0)return l}return t.length===i.length?0:t.length<i.length?-1:1}function ZR(n,e){if(Vs(n)!==Vs(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ii(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Vs(n)>Vs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class uU{constructor(e,t){this.errorPrefix_=t,this.parts_=oc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=cd(this.parts_[i]);JR(this)}}function cU(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=cd(e),JR(n)}function hU(n){const e=n.parts_.pop();n.byteLength_-=cd(e),n.parts_.length>0&&(n.byteLength_-=1)}function JR(n){if(n.byteLength_>Xw)throw new Error(n.errorPrefix_+"has a key path longer than "+Xw+" bytes ("+n.byteLength_+").");if(n.parts_.length>Ww)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ww+") or object contains a cycle "+Ea(n))}function Ea(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py extends WR{static getInstance(){return new py}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return ie(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=1e3,fU=60*5*1e3,Zw=30*1e3,dU=1.3,mU=3e4,pU="server_kill",Jw=3;class Rr extends YR{constructor(e,t,i,a,l,c,d,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=m,this.id=Rr.nextPersistentConnectionId_++,this.log_=Nc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Du,this.maxReconnectDelay_=fU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");py.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(Ut(l)),ie(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[a]=i)}get(e){this.initConnection_();const t=new ud,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,i,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ie(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:i};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+i+" for "+a);const l={p:i},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const m=d.d,g=d.s;Rr.warnOnListenWarnings_(m,t),(this.listens.get(i)&&this.listens.get(i).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(i,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Hi(e,"w")){const i=$o(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();In(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||oD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=aD(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),ie(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,e._queryObject,t)}sendUnlisten_(e,t,i,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=i,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,a){const l={p:t,d:i};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,i,a){this.putInternal("p",e,t,i,a)}merge(e,t,i,a){this.putInternal("m",e,t,i,a)}putInternal(e,t,i,a,l){this.initConnection_();const c={p:t,d:i};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ut(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Gg("Unrecognized action received from server: "+Ut(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ie(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Du,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Du,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mU&&(this.reconnectDelay_=Du),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Rr.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const m=function(){d?d.close():(c=!0,i())},g=function(T){ie(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:m,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?nn("getToken() completed but was canceled"):(nn("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=w&&w.token,d=new aU(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,R=>{In(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(pU)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&In(T),m())}}}interrupt(e){nn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gg(this.interruptReasons_)&&(this.reconnectDelay_=Du,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(l=>cy(l)).join("$"):i="default";const a=this.removeListen_(e,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const i=new tt(e).toString();let a;if(this.listens.has(i)){const l=this.listens.get(i);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(e,t){nn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Jw&&(this.reconnectDelay_=Zw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){nn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Jw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+IR.replace(/\./g,"-")]=1,c_()?e["framework.cordova"]=1:HS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yf.getInstance().currentlyOnline();return gg(this.interruptReasons_)&&e}}Rr.nextPersistentConnectionId_=0;Rr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Oe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Oe(rl,e),a=new Oe(rl,t);return this.compare(i,a)!==0}minPost(){return Oe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uf;class eC extends Od{static get __EMPTY_NODE(){return uf}static set __EMPTY_NODE(e){uf=e}compare(e,t){return qa(e.name,t.name)}isDefinedOn(e){throw cl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Oe.MIN}maxPost(){return new Oe(Oa,uf)}makePost(e,t){return ie(typeof e=="string","KeyIndex indexValue must always be a string."),new Oe(e,uf)}toString(){return".key"}}const Qo=new eC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,t,i,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?i(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Wt{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??Wt.RED,this.left=a??An.EMPTY_NODE,this.right=l??An.EMPTY_NODE}copy(e,t,i,a,l){return new Wt(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return An.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,a;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return An.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Wt.RED=!0;Wt.BLACK=!1;class gU{copy(e,t,i,a,l){return this}insert(e,t,i){return new Wt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class An{constructor(e,t=An.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new An(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Wt.BLACK,null,null))}remove(e){return new An(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Wt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,a=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new cf(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new cf(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new cf(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new cf(this.root_,null,this.comparator_,!0,e)}}An.EMPTY_NODE=new gU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _U(n,e){return qa(n.name,e.name)}function gy(n,e){return qa(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qg;function yU(n){Qg=n}const tC=function(n){return typeof n=="number"?"number:"+OR(n):"string:"+n},nC=function(n){if(n.isLeafNode()){const e=n.val();ie(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Hi(e,".sv"),"Priority must be a string or number.")}else ie(n===Qg||n.isEmpty(),"priority of unexpected type.");ie(n===Qg||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eS;class $t{static set __childrenNodeConstructor(e){eS=e}static get __childrenNodeConstructor(){return eS}constructor(e,t=$t.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ie(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nC(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $t(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$t.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Pe(e)?this:ze(e)===".priority"?this.priorityNode_:$t.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=ze(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(ie(i!==".priority"||Vs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,$t.__childrenNodeConstructor.EMPTY_NODE.updateChild(at(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tC(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=OR(this.value_):e+=this.value_,this.lazyHash_=DR(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $t.__childrenNodeConstructor?-1:(ie(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,a=$t.VALUE_TYPE_ORDER.indexOf(t),l=$t.VALUE_TYPE_ORDER.indexOf(i);return ie(a>=0,"Unknown leaf type: "+t),ie(l>=0,"Unknown leaf type: "+i),a===l?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$t.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iC,rC;function vU(n){iC=n}function EU(n){rC=n}class TU extends Od{compare(e,t){const i=e.node.getPriority(),a=t.node.getPriority(),l=i.compareTo(a);return l===0?qa(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Oe.MIN}maxPost(){return new Oe(Oa,new $t("[PRIORITY-POST]",rC))}makePost(e,t){const i=iC(e);return new Oe(t,new $t("[PRIORITY-POST]",i))}toString(){return".priority"}}const yt=new TU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wU=Math.log(2);class SU{constructor(e){const t=l=>parseInt(Math.log(l)/wU,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=i(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Wf=function(n,e,t,i){n.sort(e);const a=function(m,g){const y=g-m;let T,w;if(y===0)return null;if(y===1)return T=n[m],w=t?t(T):T,new Wt(w,T.node,Wt.BLACK,null,null);{const R=parseInt(y/2,10)+m,x=a(m,R),q=a(R+1,g);return T=n[R],w=t?t(T):T,new Wt(w,T.node,Wt.BLACK,x,q)}},l=function(m){let g=null,y=null,T=n.length;const w=function(x,q){const z=T-x,$=T;T-=x;const W=a(z+1,$),X=n[z],fe=t?t(X):X;R(new Wt(fe,X.node,q,null,W))},R=function(x){g?(g.left=x,g=x):(y=x,g=x)};for(let x=0;x<m.count;++x){const q=m.nextBitIsOne(),z=Math.pow(2,m.count-(x+1));q?w(z,Wt.BLACK):(w(z,Wt.BLACK),w(z,Wt.RED))}return y},c=new SU(n.length),d=l(c);return new An(i||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ug;const Lo={};class Sr{static get Default(){return ie(Lo&&yt,"ChildrenNode.ts has not been loaded"),ug=ug||new Sr({".priority":Lo},{".priority":yt}),ug}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=$o(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof An?t:null}hasIndex(e){return Hi(this.indexSet_,e.toString())}addIndex(e,t){ie(e!==Qo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const l=t.getIterator(Oe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),i.push(c),c=l.getNext();let d;a?d=Wf(i,e.getCompare()):d=Lo;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const y=Object.assign({},this.indexes_);return y[m]=d,new Sr(y,g)}addToIndexes(e,t){const i=Cf(this.indexes_,(a,l)=>{const c=$o(this.indexSet_,l);if(ie(c,"Missing index implementation for "+l),a===Lo)if(c.isDefinedOn(e.node)){const d=[],m=t.getIterator(Oe.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&d.push(g),g=m.getNext();return d.push(e),Wf(d,c.getCompare())}else return Lo;else{const d=t.get(e.name);let m=a;return d&&(m=m.remove(new Oe(e.name,d))),m.insert(e,e.node)}});return new Sr(i,this.indexSet_)}removeFromIndexes(e,t){const i=Cf(this.indexes_,a=>{if(a===Lo)return a;{const l=t.get(e.name);return l?a.remove(new Oe(e.name,l)):a}});return new Sr(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu;class Ee{static get EMPTY_NODE(){return xu||(xu=new Ee(new An(gy),null,Sr.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&nC(this.priorityNode_),this.children_.isEmpty()&&ie(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||xu}updatePriority(e){return this.children_.isEmpty()?this:new Ee(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?xu:t}}getChild(e){const t=ze(e);return t===null?this:this.getImmediateChild(t).getChild(at(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(ie(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Oe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(i,this.children_));const c=a.isEmpty()?xu:this.priorityNode_;return new Ee(a,c,l)}}updateChild(e,t){const i=ze(e);if(i===null)return t;{ie(ze(e)!==".priority"||Vs(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(at(e),t);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,a=0,l=!0;if(this.forEachChild(yt,(c,d)=>{t[c]=d.val(e),i++,l&&Ee.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*i){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tC(this.getPriority().val())+":"),this.forEachChild(yt,(t,i)=>{const a=i.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":DR(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const a=this.resolveIndex_(i);if(a){const l=a.getPredecessorKey(new Oe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Oe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Oe(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Oe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Dc?-1:0}withIndex(e){if(e===Qo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ee(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Qo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(yt),a=t.getIterator(yt);let l=i.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=i.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Qo?null:this.indexMap_.get(e.toString())}}Ee.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bU extends Ee{constructor(){super(new An(gy),Ee.EMPTY_NODE,Sr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ee.EMPTY_NODE}isEmpty(){return!1}}const Dc=new bU;Object.defineProperties(Oe,{MIN:{value:new Oe(rl,Ee.EMPTY_NODE)},MAX:{value:new Oe(Oa,Dc)}});eC.__EMPTY_NODE=Ee.EMPTY_NODE;$t.__childrenNodeConstructor=Ee;yU(Dc);EU(Dc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU=!0;function Xt(n,e=null){if(n===null)return Ee.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),ie(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $t(t,Xt(e))}if(!(n instanceof Array)&&AU){const t=[];let i=!1;if(an(n,(c,d)=>{if(c.substring(0,1)!=="."){const m=Xt(d);m.isEmpty()||(i=i||!m.getPriority().isEmpty(),t.push(new Oe(c,m)))}}),t.length===0)return Ee.EMPTY_NODE;const l=Wf(t,_U,c=>c.name,gy);if(i){const c=Wf(t,yt.getCompare());return new Ee(l,Xt(e),new Sr({".priority":c},{".priority":yt}))}else return new Ee(l,Xt(e),Sr.Default)}else{let t=Ee.EMPTY_NODE;return an(n,(i,a)=>{if(Hi(n,i)&&i.substring(0,1)!=="."){const l=Xt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(i,l))}}),t.updatePriority(Xt(e))}}vU(Xt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU extends Od{constructor(e){super(),this.indexPath_=e,ie(!Pe(e)&&ze(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),a=this.extractChild(t.node),l=i.compareTo(a);return l===0?qa(e.name,t.name):l}makePost(e,t){const i=Xt(e),a=Ee.EMPTY_NODE.updateChild(this.indexPath_,i);return new Oe(t,a)}maxPost(){const e=Ee.EMPTY_NODE.updateChild(this.indexPath_,Dc);return new Oe(Oa,e)}toString(){return oc(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU extends Od{compare(e,t){const i=e.node.compareTo(t.node);return i===0?qa(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Oe.MIN}maxPost(){return Oe.MAX}makePost(e,t){const i=Xt(e);return new Oe(t,i)}toString(){return".value"}}const IU=new CU;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(n){return{type:"value",snapshotNode:n}}function sl(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function lc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function uc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function NU(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.index_=e}updateChild(e,t,i,a,l,c){ie(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(i.getChild(a))&&d.isEmpty()===i.isEmpty()||(c!=null&&(i.isEmpty()?e.hasChild(t)?c.trackChildChange(lc(t,d)):ie(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?c.trackChildChange(sl(t,i)):c.trackChildChange(uc(t,i,d))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(yt,(a,l)=>{t.hasChild(a)||i.trackChildChange(lc(a,l))}),t.isLeafNode()||t.forEachChild(yt,(a,l)=>{if(e.hasChild(a)){const c=e.getImmediateChild(a);c.equals(l)||i.trackChildChange(uc(a,l,c))}else i.trackChildChange(sl(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ee.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e){this.indexedFilter_=new _y(e.getIndex()),this.index_=e.getIndex(),this.startPost_=cc.getStartPost_(e),this.endPost_=cc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,a,l,c){return this.matches(new Oe(t,i))||(i=Ee.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,a,l,c)}updateFullNode(e,t,i){t.isLeafNode()&&(t=Ee.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(Ee.EMPTY_NODE);const l=this;return t.forEachChild(yt,(c,d)=>{l.matches(new Oe(c,d))||(a=a.updateImmediateChild(c,Ee.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new cc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,a,l,c){return this.rangedFilter_.matches(new Oe(t,i))||(i=Ee.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,a,l,c):this.fullLimitUpdateChild_(e,t,i,l,c)}updateFullNode(e,t,i){let a;if(t.isLeafNode()||t.isEmpty())a=Ee.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=Ee.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;l.hasNext()&&c<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),c++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(Ee.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let c=0;for(;l.hasNext();){const d=l.getNext();c<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?c++:a=a.updateImmediateChild(d.name,Ee.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,a,l){let c;if(this.reverse_){const T=this.index_.getCompare();c=(w,R)=>T(R,w)}else c=this.index_.getCompare();const d=e;ie(d.numChildren()===this.limit_,"");const m=new Oe(t,i),g=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(m);if(d.hasChild(t)){const T=d.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,g,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const R=w==null?1:c(w,m);if(y&&!i.isEmpty()&&R>=0)return l!=null&&l.trackChildChange(uc(t,i,T)),d.updateImmediateChild(t,i);{l!=null&&l.trackChildChange(lc(t,T));const q=d.updateImmediateChild(t,Ee.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l!=null&&l.trackChildChange(sl(w.name,w.node)),q.updateImmediateChild(w.name,w.node)):q}}else return i.isEmpty()?e:y&&c(g,m)>=0?(l!=null&&(l.trackChildChange(lc(g.name,g.node)),l.trackChildChange(sl(t,i))),d.updateImmediateChild(t,i).updateImmediateChild(g.name,Ee.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=yt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ie(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ie(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rl}hasEnd(){return this.endSet_}getIndexEndValue(){return ie(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ie(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Oa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ie(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===yt}copy(){const e=new yy;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xU(n){return n.loadsAllData()?new _y(n.getIndex()):n.hasLimit()?new DU(n):new cc(n)}function tS(n){const e={};if(n.isDefault())return e;let t;if(n.index_===yt?t="$priority":n.index_===IU?t="$value":n.index_===Qo?t="$key":(ie(n.index_ instanceof RU,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Ut(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Ut(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Ut(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Ut(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Ut(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function nS(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==yt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf extends YR{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(ie(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=Nc("p:rest:"),this.listens_={}}listen(e,t,i,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=Xf.getListenId_(e,i),d={};this.listens_[c]=d;const m=tS(e._queryParams);this.restRequest_(l+".json",m,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,i),$o(this.listens_,c)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const i=Xf.getListenId_(e,t);delete this.listens_[i]}get(e){const t=tS(e._queryParams),i=e._path.toString(),a=new ud;return this.restRequest_(i+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(i,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hl(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(i&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let m=null;if(d.status>=200&&d.status<300){try{m=Wu(d.responseText)}catch{In("Failed to parse JSON response for "+c+": "+d.responseText)}i(null,m)}else d.status!==401&&d.status!==404&&In("Got unsuccessful REST response for "+c+" Status: "+d.status),i(d.status);i=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OU{constructor(){this.rootNode_=Ee.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(){return{value:null,children:new Map}}function aC(n,e,t){if(Pe(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=ze(e);n.children.has(i)||n.children.set(i,Zf());const a=n.children.get(i);e=at(e),aC(a,e,t)}}function $g(n,e,t){n.value!==null?t(e,n.value):MU(n,(i,a)=>{const l=new tt(e.toString()+"/"+i);$g(a,l,t)})}function MU(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&an(this.last_,(i,a)=>{t[i]=t[i]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=10*1e3,PU=30*1e3,LU=5*60*1e3;class VU{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new kU(e);const i=iS+(PU-iS)*Math.random();Gu(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;an(e,(a,l)=>{l>0&&Hi(this.statsToReport_,a)&&(t[a]=l,i=!0)}),i&&this.server_.reportStats(t),Gu(this.reportStats_.bind(this),Math.floor(Math.random()*2*LU))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(di||(di={}));function vy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ey(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ty(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=di.ACK_USER_WRITE,this.source=vy()}operationForChild(e){if(Pe(this.path)){if(this.affectedTree.value!=null)return ie(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new tt(e));return new Jf($e(),t,this.revert)}}else return ie(ze(this.path)===e,"operationForChild called for unrelated child."),new Jf(at(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t){this.source=e,this.path=t,this.type=di.LISTEN_COMPLETE}operationForChild(e){return Pe(this.path)?new hc(this.source,$e()):new hc(this.source,at(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=di.OVERWRITE}operationForChild(e){return Pe(this.path)?new Ma(this.source,$e(),this.snap.getImmediateChild(e)):new Ma(this.source,at(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=di.MERGE}operationForChild(e){if(Pe(this.path)){const t=this.children.subtree(new tt(e));return t.isEmpty()?null:t.value?new Ma(this.source,$e(),t.value):new al(this.source,$e(),t)}else return ie(ze(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new al(this.source,at(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Pe(e))return this.isFullyInitialized()&&!this.filtered_;const t=ze(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function zU(n,e,t,i){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(NU(c.childName,c.snapshotNode))}),Ou(n,a,"child_removed",e,i,t),Ou(n,a,"child_added",e,i,t),Ou(n,a,"child_moved",l,i,t),Ou(n,a,"child_changed",e,i,t),Ou(n,a,"value",e,i,t),a}function Ou(n,e,t,i,a,l){const c=i.filter(d=>d.type===t);c.sort((d,m)=>BU(n,d,m)),c.forEach(d=>{const m=FU(n,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(m,n.query_))})})}function FU(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function BU(n,e,t){if(e.childName==null||t.childName==null)throw cl("Should only compare child_ events.");const i=new Oe(e.childName,e.snapshotNode),a=new Oe(t.childName,t.snapshotNode);return n.index_.compare(i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,e){return{eventCache:n,serverCache:e}}function Ku(n,e,t,i){return Md(new Us(e,t,i),n.serverCache)}function oC(n,e,t,i){return Md(n.eventCache,new Us(e,t,i))}function ed(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ka(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cg;const jU=()=>(cg||(cg=new An(RV)),cg);class st{static fromObject(e){let t=new st(null);return an(e,(i,a)=>{t=t.set(new tt(i),a)}),t}constructor(e,t=jU()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:$e(),value:this.value};if(Pe(e))return null;{const i=ze(e),a=this.children.get(i);if(a!==null){const l=a.findRootMostMatchingPathAndValue(at(e),t);return l!=null?{path:_t(new tt(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Pe(e))return this;{const t=ze(e),i=this.children.get(t);return i!==null?i.subtree(at(e)):new st(null)}}set(e,t){if(Pe(e))return new st(t,this.children);{const i=ze(e),l=(this.children.get(i)||new st(null)).set(at(e),t),c=this.children.insert(i,l);return new st(this.value,c)}}remove(e){if(Pe(e))return this.children.isEmpty()?new st(null):new st(null,this.children);{const t=ze(e),i=this.children.get(t);if(i){const a=i.remove(at(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new st(null):new st(this.value,l)}else return this}}get(e){if(Pe(e))return this.value;{const t=ze(e),i=this.children.get(t);return i?i.get(at(e)):null}}setTree(e,t){if(Pe(e))return t;{const i=ze(e),l=(this.children.get(i)||new st(null)).setTree(at(e),t);let c;return l.isEmpty()?c=this.children.remove(i):c=this.children.insert(i,l),new st(this.value,c)}}fold(e){return this.fold_($e(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((a,l)=>{i[a]=l.fold_(_t(e,a),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,$e(),t)}findOnPath_(e,t,i){const a=this.value?i(t,this.value):!1;if(a)return a;if(Pe(e))return null;{const l=ze(e),c=this.children.get(l);return c?c.findOnPath_(at(e),_t(t,l),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,$e(),t)}foreachOnPath_(e,t,i){if(Pe(e))return this;{this.value&&i(t,this.value);const a=ze(e),l=this.children.get(a);return l?l.foreachOnPath_(at(e),_t(t,a),i):new st(null)}}foreach(e){this.foreach_($e(),e)}foreach_(e,t){this.children.inorderTraversal((i,a)=>{a.foreach_(_t(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.writeTree_=e}static empty(){return new pi(new st(null))}}function Qu(n,e,t){if(Pe(e))return new pi(new st(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const a=i.path;let l=i.value;const c=En(a,e);return l=l.updateChild(c,t),new pi(n.writeTree_.set(a,l))}else{const a=new st(t),l=n.writeTree_.setTree(e,a);return new pi(l)}}}function Yg(n,e,t){let i=n;return an(t,(a,l)=>{i=Qu(i,_t(e,a),l)}),i}function rS(n,e){if(Pe(e))return pi.empty();{const t=n.writeTree_.setTree(e,new st(null));return new pi(t)}}function Wg(n,e){return Ha(n,e)!=null}function Ha(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(En(t.path,e)):null}function sS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(yt,(i,a)=>{e.push(new Oe(i,a))}):n.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&e.push(new Oe(i,a.value))}),e}function Is(n,e){if(Pe(e))return n;{const t=Ha(n,e);return t!=null?new pi(new st(t)):new pi(n.writeTree_.subtree(e))}}function Xg(n){return n.writeTree_.isEmpty()}function ol(n,e){return lC($e(),n.writeTree_,e)}function lC(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(ie(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):t=lC(_t(n,a),l,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(_t(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(n,e){return fC(e,n)}function qU(n,e,t,i,a){ie(i>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:a}),a&&(n.visibleWrites=Qu(n.visibleWrites,e,t)),n.lastWriteId=i}function HU(n,e,t,i){ie(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Yg(n.visibleWrites,e,t),n.lastWriteId=i}function GU(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function KU(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);ie(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let a=i.visible,l=!1,c=n.allWrites.length-1;for(;a&&c>=0;){const d=n.allWrites[c];d.visible&&(c>=t&&QU(d,i.path)?a=!1:ii(i.path,d.path)&&(l=!0)),c--}if(a){if(l)return $U(n),!0;if(i.snap)n.visibleWrites=rS(n.visibleWrites,i.path);else{const d=i.children;an(d,m=>{n.visibleWrites=rS(n.visibleWrites,_t(i.path,m))})}return!0}else return!1}function QU(n,e){if(n.snap)return ii(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ii(_t(n.path,t),e))return!0;return!1}function $U(n){n.visibleWrites=uC(n.allWrites,YU,$e()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function YU(n){return n.visible}function uC(n,e,t){let i=pi.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const c=l.path;let d;if(l.snap)ii(t,c)?(d=En(t,c),i=Qu(i,d,l.snap)):ii(c,t)&&(d=En(c,t),i=Qu(i,$e(),l.snap.getChild(d)));else if(l.children){if(ii(t,c))d=En(t,c),i=Yg(i,d,l.children);else if(ii(c,t))if(d=En(c,t),Pe(d))i=Yg(i,$e(),l.children);else{const m=$o(l.children,ze(d));if(m){const g=m.getChild(at(d));i=Qu(i,$e(),g)}}}else throw cl("WriteRecord should have .snap or .children")}}return i}function cC(n,e,t,i,a){if(!i&&!a){const l=Ha(n.visibleWrites,e);if(l!=null)return l;{const c=Is(n.visibleWrites,e);if(Xg(c))return t;if(t==null&&!Wg(c,$e()))return null;{const d=t||Ee.EMPTY_NODE;return ol(c,d)}}}else{const l=Is(n.visibleWrites,e);if(!a&&Xg(l))return t;if(!a&&t==null&&!Wg(l,$e()))return null;{const c=function(g){return(g.visible||a)&&(!i||!~i.indexOf(g.writeId))&&(ii(g.path,e)||ii(e,g.path))},d=uC(n.allWrites,c,e),m=t||Ee.EMPTY_NODE;return ol(d,m)}}}function WU(n,e,t){let i=Ee.EMPTY_NODE;const a=Ha(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(yt,(l,c)=>{i=i.updateImmediateChild(l,c)}),i;if(t){const l=Is(n.visibleWrites,e);return t.forEachChild(yt,(c,d)=>{const m=ol(Is(l,new tt(c)),d);i=i.updateImmediateChild(c,m)}),sS(l).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}else{const l=Is(n.visibleWrites,e);return sS(l).forEach(c=>{i=i.updateImmediateChild(c.name,c.node)}),i}}function XU(n,e,t,i,a){ie(i||a,"Either existingEventSnap or existingServerSnap must exist");const l=_t(e,t);if(Wg(n.visibleWrites,l))return null;{const c=Is(n.visibleWrites,l);return Xg(c)?a.getChild(t):ol(c,a.getChild(t))}}function ZU(n,e,t,i){const a=_t(e,t),l=Ha(n.visibleWrites,a);if(l!=null)return l;if(i.isCompleteForChild(t)){const c=Is(n.visibleWrites,a);return ol(c,i.getNode().getImmediateChild(t))}else return null}function JU(n,e){return Ha(n.visibleWrites,e)}function e4(n,e,t,i,a,l,c){let d;const m=Is(n.visibleWrites,e),g=Ha(m,$e());if(g!=null)d=g;else if(t!=null)d=ol(m,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),w=l?d.getReverseIteratorFrom(i,c):d.getIteratorFrom(i,c);let R=w.getNext();for(;R&&y.length<a;)T(R,i)!==0&&y.push(R),R=w.getNext();return y}else return[]}function t4(){return{visibleWrites:pi.empty(),allWrites:[],lastWriteId:-1}}function td(n,e,t,i){return cC(n.writeTree,n.treePath,e,t,i)}function wy(n,e){return WU(n.writeTree,n.treePath,e)}function aS(n,e,t,i){return XU(n.writeTree,n.treePath,e,t,i)}function nd(n,e){return JU(n.writeTree,_t(n.treePath,e))}function n4(n,e,t,i,a,l){return e4(n.writeTree,n.treePath,e,t,i,a,l)}function Sy(n,e,t){return ZU(n.writeTree,n.treePath,e,t)}function hC(n,e){return fC(_t(n.treePath,e),n.writeTree)}function fC(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;ie(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),ie(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(i,uc(i,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(i,lc(i,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(i,sl(i,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(i,uc(i,e.snapshotNode,a.oldSnap));else throw cl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const dC=new r4;class by{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Us(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sy(this.writes_,e,i)}}getChildAfterChild(e,t,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ka(this.viewCache_),l=n4(this.writes_,a,t,1,i,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(n){return{filter:n}}function a4(n,e){ie(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),ie(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function o4(n,e,t,i,a){const l=new i4;let c,d;if(t.type===di.OVERWRITE){const g=t;g.source.fromUser?c=Zg(n,e,g.path,g.snap,i,a,l):(ie(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Pe(g.path),c=id(n,e,g.path,g.snap,i,a,d,l))}else if(t.type===di.MERGE){const g=t;g.source.fromUser?c=u4(n,e,g.path,g.children,i,a,l):(ie(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=Jg(n,e,g.path,g.children,i,a,d,l))}else if(t.type===di.ACK_USER_WRITE){const g=t;g.revert?c=f4(n,e,g.path,i,a,l):c=c4(n,e,g.path,g.affectedTree,i,a,l)}else if(t.type===di.LISTEN_COMPLETE)c=h4(n,e,t.path,i,l);else throw cl("Unknown operation type: "+t.type);const m=l.getChanges();return l4(e,c,m),{viewCache:c,changes:m}}function l4(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=ed(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&t.push(sC(ed(e)))}}function mC(n,e,t,i,a,l){const c=e.eventCache;if(nd(i,t)!=null)return e;{let d,m;if(Pe(t))if(ie(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=ka(e),y=g instanceof Ee?g:Ee.EMPTY_NODE,T=wy(i,y);d=n.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=td(i,ka(e));d=n.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=ze(t);if(g===".priority"){ie(Vs(t)===1,"Can't have a priority with additional path components");const y=c.getNode();m=e.serverCache.getNode();const T=aS(i,t,y,m);T!=null?d=n.filter.updatePriority(y,T):d=c.getNode()}else{const y=at(t);let T;if(c.isCompleteForChild(g)){m=e.serverCache.getNode();const w=aS(i,t,c.getNode(),m);w!=null?T=c.getNode().getImmediateChild(g).updateChild(y,w):T=c.getNode().getImmediateChild(g)}else T=Sy(i,g,e.serverCache);T!=null?d=n.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return Ku(e,d,c.isFullyInitialized()||Pe(t),n.filter.filtersNodes())}}function id(n,e,t,i,a,l,c,d){const m=e.serverCache;let g;const y=c?n.filter:n.filter.getIndexedFilter();if(Pe(t))g=y.updateFullNode(m.getNode(),i,null);else if(y.filtersNodes()&&!m.isFiltered()){const R=m.getNode().updateChild(t,i);g=y.updateFullNode(m.getNode(),R,null)}else{const R=ze(t);if(!m.isCompleteForPath(t)&&Vs(t)>1)return e;const x=at(t),z=m.getNode().getImmediateChild(R).updateChild(x,i);R===".priority"?g=y.updatePriority(m.getNode(),z):g=y.updateChild(m.getNode(),R,z,x,dC,null)}const T=oC(e,g,m.isFullyInitialized()||Pe(t),y.filtersNodes()),w=new by(a,T,l);return mC(n,T,t,a,w,d)}function Zg(n,e,t,i,a,l,c){const d=e.eventCache;let m,g;const y=new by(a,e,l);if(Pe(t))g=n.filter.updateFullNode(e.eventCache.getNode(),i,c),m=Ku(e,g,!0,n.filter.filtersNodes());else{const T=ze(t);if(T===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),i),m=Ku(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=at(t),R=d.getNode().getImmediateChild(T);let x;if(Pe(w))x=i;else{const q=y.getCompleteChild(T);q!=null?my(w)===".priority"&&q.getChild(XR(w)).isEmpty()?x=q:x=q.updateChild(w,i):x=Ee.EMPTY_NODE}if(R.equals(x))m=e;else{const q=n.filter.updateChild(d.getNode(),T,x,w,y,c);m=Ku(e,q,d.isFullyInitialized(),n.filter.filtersNodes())}}}return m}function oS(n,e){return n.eventCache.isCompleteForChild(e)}function u4(n,e,t,i,a,l,c){let d=e;return i.foreach((m,g)=>{const y=_t(t,m);oS(e,ze(y))&&(d=Zg(n,d,y,g,a,l,c))}),i.foreach((m,g)=>{const y=_t(t,m);oS(e,ze(y))||(d=Zg(n,d,y,g,a,l,c))}),d}function lS(n,e,t){return t.foreach((i,a)=>{e=e.updateChild(i,a)}),e}function Jg(n,e,t,i,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;Pe(t)?g=i:g=new st(null).setTree(t,i);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,w)=>{if(y.hasChild(T)){const R=e.serverCache.getNode().getImmediateChild(T),x=lS(n,R,w);m=id(n,m,new tt(T),x,a,l,c,d)}}),g.children.inorderTraversal((T,w)=>{const R=!e.serverCache.isCompleteForChild(T)&&w.value===null;if(!y.hasChild(T)&&!R){const x=e.serverCache.getNode().getImmediateChild(T),q=lS(n,x,w);m=id(n,m,new tt(T),q,a,l,c,d)}}),m}function c4(n,e,t,i,a,l,c){if(nd(a,t)!=null)return e;const d=e.serverCache.isFiltered(),m=e.serverCache;if(i.value!=null){if(Pe(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return id(n,e,t,m.getNode().getChild(t),a,l,d,c);if(Pe(t)){let g=new st(null);return m.getNode().forEachChild(Qo,(y,T)=>{g=g.set(new tt(y),T)}),Jg(n,e,t,g,a,l,d,c)}else return e}else{let g=new st(null);return i.foreach((y,T)=>{const w=_t(t,y);m.isCompleteForPath(w)&&(g=g.set(y,m.getNode().getChild(w)))}),Jg(n,e,t,g,a,l,d,c)}}function h4(n,e,t,i,a){const l=e.serverCache,c=oC(e,l.getNode(),l.isFullyInitialized()||Pe(t),l.isFiltered());return mC(n,c,t,i,dC,a)}function f4(n,e,t,i,a,l){let c;if(nd(i,t)!=null)return e;{const d=new by(i,e,a),m=e.eventCache.getNode();let g;if(Pe(t)||ze(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=td(i,ka(e));else{const T=e.serverCache.getNode();ie(T instanceof Ee,"serverChildren would be complete if leaf node"),y=wy(i,T)}y=y,g=n.filter.updateFullNode(m,y,l)}else{const y=ze(t);let T=Sy(i,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=m.getImmediateChild(y)),T!=null?g=n.filter.updateChild(m,y,T,at(t),d,l):e.eventCache.getNode().hasChild(y)?g=n.filter.updateChild(m,y,Ee.EMPTY_NODE,at(t),d,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=td(i,ka(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||nd(i,$e())!=null,Ku(e,g,c,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d4{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,a=new _y(i.getIndex()),l=xU(i);this.processor_=s4(l);const c=t.serverCache,d=t.eventCache,m=a.updateFullNode(Ee.EMPTY_NODE,c.getNode(),null),g=l.updateFullNode(Ee.EMPTY_NODE,d.getNode(),null),y=new Us(m,c.isFullyInitialized(),a.filtersNodes()),T=new Us(g,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=Md(T,y),this.eventGenerator_=new UU(this.query_)}get query(){return this.query_}}function m4(n){return n.viewCache_.serverCache.getNode()}function p4(n){return ed(n.viewCache_)}function g4(n,e){const t=ka(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Pe(e)&&!t.getImmediateChild(ze(e)).isEmpty())?t.getChild(e):null}function uS(n){return n.eventRegistrations_.length===0}function _4(n,e){n.eventRegistrations_.push(e)}function cS(n,e,t){const i=[];if(t){ie(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const c=l.createCancelEvent(t,a);c&&i.push(c)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const c=n.eventRegistrations_[l];if(!c.matches(e))a.push(c);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return i}function hS(n,e,t,i){e.type===di.MERGE&&e.source.queryId!==null&&(ie(ka(n.viewCache_),"We should always have a full cache before handling merges"),ie(ed(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=o4(n.processor_,a,e,t,i);return a4(n.processor_,l.viewCache),ie(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,pC(n,l.changes,l.viewCache.eventCache.getNode(),null)}function y4(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(yt,(l,c)=>{i.push(sl(l,c))}),t.isFullyInitialized()&&i.push(sC(t.getNode())),pC(n,i,t.getNode(),e)}function pC(n,e,t,i){const a=i?[i]:n.eventRegistrations_;return zU(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rd;class gC{constructor(){this.views=new Map}}function v4(n){ie(!rd,"__referenceConstructor has already been defined"),rd=n}function E4(){return ie(rd,"Reference.ts has not been loaded"),rd}function T4(n){return n.views.size===0}function Ay(n,e,t,i){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return ie(l!=null,"SyncTree gave us an op for an invalid query."),hS(l,e,t,i)}else{let l=[];for(const c of n.views.values())l=l.concat(hS(c,e,t,i));return l}}function _C(n,e,t,i,a){const l=e._queryIdentifier,c=n.views.get(l);if(!c){let d=td(t,a?i:null),m=!1;d?m=!0:i instanceof Ee?(d=wy(t,i),m=!1):(d=Ee.EMPTY_NODE,m=!1);const g=Md(new Us(d,m,!1),new Us(i,a,!1));return new d4(e,g)}return c}function w4(n,e,t,i,a,l){const c=_C(n,e,i,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),_4(c,t),y4(c,t)}function S4(n,e,t,i){const a=e._queryIdentifier,l=[];let c=[];const d=zs(n);if(a==="default")for(const[m,g]of n.views.entries())c=c.concat(cS(g,t,i)),uS(g)&&(n.views.delete(m),g.query._queryParams.loadsAllData()||l.push(g.query));else{const m=n.views.get(a);m&&(c=c.concat(cS(m,t,i)),uS(m)&&(n.views.delete(a),m.query._queryParams.loadsAllData()||l.push(m.query)))}return d&&!zs(n)&&l.push(new(E4())(e._repo,e._path)),{removed:l,events:c}}function yC(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ns(n,e){let t=null;for(const i of n.views.values())t=t||g4(i,e);return t}function vC(n,e){if(e._queryParams.loadsAllData())return Pd(n);{const i=e._queryIdentifier;return n.views.get(i)}}function EC(n,e){return vC(n,e)!=null}function zs(n){return Pd(n)!=null}function Pd(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sd;function b4(n){ie(!sd,"__referenceConstructor has already been defined"),sd=n}function A4(){return ie(sd,"Reference.ts has not been loaded"),sd}let R4=1;class fS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new st(null),this.pendingWriteTree_=t4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function C4(n,e,t,i,a){return qU(n.pendingWriteTree_,e,t,i,a),a?yl(n,new Ma(vy(),e,t)):[]}function I4(n,e,t,i){HU(n.pendingWriteTree_,e,t,i);const a=st.fromObject(t);return yl(n,new al(vy(),e,a))}function Aa(n,e,t=!1){const i=GU(n.pendingWriteTree_,e);if(KU(n.pendingWriteTree_,e)){let l=new st(null);return i.snap!=null?l=l.set($e(),!0):an(i.children,c=>{l=l.set(new tt(c),!0)}),yl(n,new Jf(i.path,l,t))}else return[]}function xc(n,e,t){return yl(n,new Ma(Ey(),e,t))}function N4(n,e,t){const i=st.fromObject(t);return yl(n,new al(Ey(),e,i))}function D4(n,e){return yl(n,new hc(Ey(),e))}function x4(n,e,t){const i=Ry(n,t);if(i){const a=Cy(i),l=a.path,c=a.queryId,d=En(l,e),m=new hc(Ty(c),d);return Iy(n,l,m)}else return[]}function TC(n,e,t,i,a=!1){const l=e._path,c=n.syncPointTree_.get(l);let d=[];if(c&&(e._queryIdentifier==="default"||EC(c,e))){const m=S4(c,e,t,i);T4(c)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const g=m.removed;if(d=m.events,!a){const y=g.findIndex(w=>w._queryParams.loadsAllData())!==-1,T=n.syncPointTree_.findOnPath(l,(w,R)=>zs(R));if(y&&!T){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const R=P4(w);for(let x=0;x<R.length;++x){const q=R[x],z=q.query,$=RC(n,q);n.listenProvider_.startListening($u(z),fc(n,z),$.hashFn,$.onComplete)}}}!T&&g.length>0&&!i&&(y?n.listenProvider_.stopListening($u(e),null):g.forEach(w=>{const R=n.queryToTagMap.get(Ld(w));n.listenProvider_.stopListening($u(w),R)}))}L4(n,g)}return d}function wC(n,e,t,i){const a=Ry(n,i);if(a!=null){const l=Cy(a),c=l.path,d=l.queryId,m=En(c,e),g=new Ma(Ty(d),m,t);return Iy(n,c,g)}else return[]}function O4(n,e,t,i){const a=Ry(n,i);if(a){const l=Cy(a),c=l.path,d=l.queryId,m=En(c,e),g=st.fromObject(t),y=new al(Ty(d),m,g);return Iy(n,c,y)}else return[]}function M4(n,e,t,i=!1){const a=e._path;let l=null,c=!1;n.syncPointTree_.foreachOnPath(a,(w,R)=>{const x=En(w,a);l=l||Ns(R,x),c=c||zs(R)});let d=n.syncPointTree_.get(a);d?(c=c||zs(d),l=l||Ns(d,$e())):(d=new gC,n.syncPointTree_=n.syncPointTree_.set(a,d));let m;l!=null?m=!0:(m=!1,l=Ee.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((R,x)=>{const q=Ns(x,$e());q&&(l=l.updateImmediateChild(R,q))}));const g=EC(d,e);if(!g&&!e._queryParams.loadsAllData()){const w=Ld(e);ie(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const R=V4();n.queryToTagMap.set(w,R),n.tagToQueryMap.set(R,w)}const y=kd(n.pendingWriteTree_,a);let T=w4(d,e,t,y,l,m);if(!g&&!c&&!i){const w=vC(d,e);T=T.concat(U4(n,e,w))}return T}function SC(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(c,d)=>{const m=En(c,e),g=Ns(d,m);if(g)return g});return cC(a,e,l,t,!0)}function k4(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(g,y)=>{const T=En(g,t);i=i||Ns(y,T)});let a=n.syncPointTree_.get(t);a?i=i||Ns(a,$e()):(a=new gC,n.syncPointTree_=n.syncPointTree_.set(t,a));const l=i!=null,c=l?new Us(i,!0,!1):null,d=kd(n.pendingWriteTree_,e._path),m=_C(a,e,d,l?c.getNode():Ee.EMPTY_NODE,l);return p4(m)}function yl(n,e){return bC(e,n.syncPointTree_,null,kd(n.pendingWriteTree_,$e()))}function bC(n,e,t,i){if(Pe(n.path))return AC(n,e,t,i);{const a=e.get($e());t==null&&a!=null&&(t=Ns(a,$e()));let l=[];const c=ze(n.path),d=n.operationForChild(c),m=e.children.get(c);if(m&&d){const g=t?t.getImmediateChild(c):null,y=hC(i,c);l=l.concat(bC(d,m,g,y))}return a&&(l=l.concat(Ay(a,n,i,t))),l}}function AC(n,e,t,i){const a=e.get($e());t==null&&a!=null&&(t=Ns(a,$e()));let l=[];return e.children.inorderTraversal((c,d)=>{const m=t?t.getImmediateChild(c):null,g=hC(i,c),y=n.operationForChild(c);y&&(l=l.concat(AC(y,d,m,g)))}),a&&(l=l.concat(Ay(a,n,i,t))),l}function RC(n,e){const t=e.query,i=fc(n,t);return{hashFn:()=>(m4(e)||Ee.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return i?x4(n,t._path,i):D4(n,t._path);{const l=NV(a,t);return TC(n,t,null,l)}}}}function fc(n,e){const t=Ld(e);return n.queryToTagMap.get(t)}function Ld(n){return n._path.toString()+"$"+n._queryIdentifier}function Ry(n,e){return n.tagToQueryMap.get(e)}function Cy(n){const e=n.indexOf("$");return ie(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new tt(n.substr(0,e))}}function Iy(n,e,t){const i=n.syncPointTree_.get(e);ie(i,"Missing sync point for query tag that we're tracking");const a=kd(n.pendingWriteTree_,e);return Ay(i,t,a,null)}function P4(n){return n.fold((e,t,i)=>{if(t&&zs(t))return[Pd(t)];{let a=[];return t&&(a=yC(t)),an(i,(l,c)=>{a=a.concat(c)}),a}})}function $u(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(A4())(n._repo,n._path):n}function L4(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const a=Ld(i),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function V4(){return R4++}function U4(n,e,t){const i=e._path,a=fc(n,e),l=RC(n,t),c=n.listenProvider_.startListening($u(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(i);if(a)ie(!zs(d.value),"If we're adding a query, it shouldn't be shadowed");else{const m=d.fold((g,y,T)=>{if(!Pe(g)&&y&&zs(y))return[Pd(y).query];{let w=[];return y&&(w=w.concat(yC(y).map(R=>R.query))),an(T,(R,x)=>{w=w.concat(x)}),w}});for(let g=0;g<m.length;++g){const y=m[g];n.listenProvider_.stopListening($u(y),fc(n,y))}}return c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ny(t)}node(){return this.node_}}class Dy{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new Dy(this.syncTree_,t)}node(){return SC(this.syncTree_,this.path_)}}const z4=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},dS=function(n,e,t){if(!n||typeof n!="object")return n;if(ie(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return F4(n[".sv"],e,t);if(typeof n[".sv"]=="object")return B4(n[".sv"],e);ie(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},F4=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:ie(!1,"Unexpected server value: "+n)}},B4=function(n,e,t){n.hasOwnProperty("increment")||ie(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&ie(!1,"Unexpected increment value: "+i);const a=e.node();if(ie(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const c=a.getValue();return typeof c!="number"?i:c+i},CC=function(n,e,t,i){return xy(e,new Dy(t,n),i)},j4=function(n,e,t){return xy(n,new Ny(e),t)};function xy(n,e,t){const i=n.getPriority().val(),a=dS(i,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const c=n,d=dS(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new $t(d,Xt(a)):n}else{const c=n;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new $t(a))),c.forEachChild(yt,(d,m)=>{const g=xy(m,e.getImmediateChild(d),t);g!==m&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function My(n,e){let t=e instanceof tt?e:new tt(e),i=n,a=ze(t);for(;a!==null;){const l=$o(i.node.children,a)||{children:{},childCount:0};i=new Oy(a,i,l),t=at(t),a=ze(t)}return i}function vl(n){return n.node.value}function IC(n,e){n.node.value=e,e_(n)}function NC(n){return n.node.childCount>0}function q4(n){return vl(n)===void 0&&!NC(n)}function Vd(n,e){an(n.node.children,(t,i)=>{e(new Oy(t,n,i))})}function DC(n,e,t,i){t&&e(n),Vd(n,a=>{DC(a,e,!0)})}function H4(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Oc(n){return new tt(n.parent===null?n.name:Oc(n.parent)+"/"+n.name)}function e_(n){n.parent!==null&&G4(n.parent,n.name,n)}function G4(n,e,t){const i=q4(t),a=Hi(n.node.children,e);i&&a?(delete n.node.children[e],n.node.childCount--,e_(n)):!i&&!a&&(n.node.children[e]=t.node,n.node.childCount++,e_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=/[\[\].#$\/\u0000-\u001F\u007F]/,Q4=/[\[\].#$\u0000-\u001F\u007F]/,hg=10*1024*1024,ky=function(n){return typeof n=="string"&&n.length!==0&&!K4.test(n)},xC=function(n){return typeof n=="string"&&n.length!==0&&!Q4.test(n)},$4=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xC(n)},Y4=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!uy(n)||n&&typeof n=="object"&&Hi(n,".sv")},Py=function(n,e,t){const i=t instanceof tt?new uU(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ea(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ea(i)+" with contents = "+e.toString());if(uy(e))throw new Error(n+"contains "+e.toString()+" "+Ea(i));if(typeof e=="string"&&e.length>hg/3&&cd(e)>hg)throw new Error(n+"contains a string greater than "+hg+" utf8 bytes "+Ea(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(an(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!ky(c)))throw new Error(n+" contains an invalid key ("+c+") "+Ea(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);cU(i,c),Py(n,d,i),hU(i)}),a&&l)throw new Error(n+' contains ".value" child '+Ea(i)+" in addition to actual children.")}},W4=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const l=oc(i);for(let c=0;c<l.length;c++)if(!(l[c]===".priority"&&c===l.length-1)){if(!ky(l[c]))throw new Error(n+"contains an invalid key ("+l[c]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(lU);let a=null;for(t=0;t<e.length;t++){if(i=e[t],a!==null&&ii(a,i))throw new Error(n+"contains a path "+a.toString()+" that is ancestor of another path "+i.toString());a=i}},X4=function(n,e,t,i){const a=h_(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(a+" must be an object containing the children to replace.");const l=[];an(e,(c,d)=>{const m=new tt(c);if(Py(a,d,_t(t,m)),my(m)===".priority"&&!Y4(d))throw new Error(a+"contains an invalid value for '"+m.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(m)}),W4(a,l)},OC=function(n,e,t,i){if(!xC(t))throw new Error(h_(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Z4=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),OC(n,e,t)},J4=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ky(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!$4(t))throw new Error(h_(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function MC(n,e){let t=null;for(let i=0;i<e.length;i++){const a=e[i],l=a.getPath();t!==null&&!ZR(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function ji(n,e,t){MC(n,t),t6(n,i=>ii(i,e)||ii(e,i))}function t6(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const a=n.eventLists_[i];if(a){const l=a.path;e(l)?(n6(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function n6(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Hu&&nn("event: "+t.toString()),_l(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i6="repo_interrupt",r6=25;class s6{constructor(e,t,i,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new e6,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Zf(),this.transactionQueueTree_=new Oy,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function a6(n,e,t){if(n.stats_=fy(n.repoInfo_),n.forceRestClient_||MV())n.server_=new Xf(n.repoInfo_,(i,a,l,c)=>{mS(n,i,a,l,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>pS(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ut(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Rr(n.repoInfo_,e,(i,a,l,c)=>{mS(n,i,a,l,c)},i=>{pS(n,i)},i=>{l6(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=UV(n.repoInfo_,()=>new VU(n.stats_,n.server_)),n.infoData_=new OU,n.infoSyncTree_=new fS({startListening:(i,a,l,c)=>{let d=[];const m=n.infoData_.getNode(i._path);return m.isEmpty()||(d=xc(n.infoSyncTree_,i._path,m),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),Vy(n,"connected",!1),n.serverSyncTree_=new fS({startListening:(i,a,l,c)=>(n.server_.listen(i,l,a,(d,m)=>{const g=c(d,m);ji(n.eventQueue_,i._path,g)}),[]),stopListening:(i,a)=>{n.server_.unlisten(i,a)}})}function o6(n){const t=n.infoData_.getNode(new tt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ly(n){return z4({timestamp:o6(n)})}function mS(n,e,t,i,a){n.dataUpdateCount++;const l=new tt(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(i){const m=Cf(t,g=>Xt(g));c=O4(n.serverSyncTree_,l,m,a)}else{const m=Xt(t);c=wC(n.serverSyncTree_,l,m,a)}else if(i){const m=Cf(t,g=>Xt(g));c=N4(n.serverSyncTree_,l,m)}else{const m=Xt(t);c=xc(n.serverSyncTree_,l,m)}let d=l;c.length>0&&(d=dc(n,l)),ji(n.eventQueue_,d,c)}function pS(n,e){Vy(n,"connected",e),e===!1&&h6(n)}function l6(n,e){an(e,(t,i)=>{Vy(n,t,i)})}function Vy(n,e,t){const i=new tt("/.info/"+e),a=Xt(t);n.infoData_.updateSnapshot(i,a);const l=xc(n.infoSyncTree_,i,a);ji(n.eventQueue_,i,l)}function kC(n){return n.nextWriteId_++}function u6(n,e,t){const i=k4(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(a=>{const l=Xt(a).withIndex(e._queryParams.getIndex());M4(n.serverSyncTree_,e,t,!0);let c;if(e._queryParams.loadsAllData())c=xc(n.serverSyncTree_,e._path,l);else{const d=fc(n.serverSyncTree_,e);c=wC(n.serverSyncTree_,e._path,l,d)}return ji(n.eventQueue_,e._path,c),TC(n.serverSyncTree_,e,t,null,!0),l},a=>(Ud(n,"get for query "+Ut(e)+" failed: "+a),Promise.reject(new Error(a))))}function c6(n,e,t,i){Ud(n,"update",{path:e.toString(),value:t});let a=!0;const l=Ly(n),c={};if(an(t,(d,m)=>{a=!1,c[d]=CC(_t(e,d),Xt(m),n.serverSyncTree_,l)}),a)nn("update() called with empty data.  Don't do anything."),gS(n,i,"ok",void 0);else{const d=kC(n),m=I4(n.serverSyncTree_,e,c,d);MC(n.eventQueue_,m),n.server_.merge(e.toString(),t,(g,y)=>{const T=g==="ok";T||In("update at "+e+" failed: "+g);const w=Aa(n.serverSyncTree_,d,!T),R=w.length>0?dc(n,e):e;ji(n.eventQueue_,R,w),gS(n,i,g,y)}),an(t,g=>{const y=zC(n,_t(e,g));dc(n,y)}),ji(n.eventQueue_,e,[])}}function h6(n){Ud(n,"onDisconnectEvents");const e=Ly(n),t=Zf();$g(n.onDisconnect_,$e(),(a,l)=>{const c=CC(a,l,n.serverSyncTree_,e);aC(t,a,c)});let i=[];$g(t,$e(),(a,l)=>{i=i.concat(xc(n.serverSyncTree_,a,l));const c=zC(n,a);dc(n,c)}),n.onDisconnect_=Zf(),ji(n.eventQueue_,$e(),i)}function f6(n){n.persistentConnection_&&n.persistentConnection_.interrupt(i6)}function Ud(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),nn(t,...e)}function gS(n,e,t,i){e&&_l(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;i&&(l+=": "+i);const c=new Error(l);c.code=a,e(c)}})}function PC(n,e,t){return SC(n.serverSyncTree_,e,t)||Ee.EMPTY_NODE}function Uy(n,e=n.transactionQueueTree_){if(e||zd(n,e),vl(e)){const t=VC(n,e);ie(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&d6(n,Oc(e),t)}else NC(e)&&Vd(e,t=>{Uy(n,t)})}function d6(n,e,t){const i=t.map(g=>g.currentWriteId),a=PC(n,e,i);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];ie(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=En(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),m=e;n.server_.put(m.toString(),d,g=>{Ud(n,"transaction put response",{path:m.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Aa(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&T.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();zd(n,My(n.transactionQueueTree_,e)),Uy(n,n.transactionQueueTree_),ji(n.eventQueue_,e,y);for(let w=0;w<T.length;w++)_l(T[w])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{In("transaction at "+m.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}dc(n,e)}},c)}function dc(n,e){const t=LC(n,e),i=Oc(t),a=VC(n,t);return m6(n,a,i),i}function m6(n,e,t){if(e.length===0)return;const i=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const m=e[d],g=En(t,m.path);let y=!1,T;if(ie(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)y=!0,T=m.abortReason,a=a.concat(Aa(n.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=r6)y=!0,T="maxretry",a=a.concat(Aa(n.serverSyncTree_,m.currentWriteId,!0));else{const w=PC(n,m.path,c);m.currentInputSnapshot=w;const R=e[d].update(w.val());if(R!==void 0){Py("transaction failed: Data returned ",R,m.path);let x=Xt(R);typeof R=="object"&&R!=null&&Hi(R,".priority")||(x=x.updatePriority(w.getPriority()));const z=m.currentWriteId,$=Ly(n),W=j4(x,w,$);m.currentOutputSnapshotRaw=x,m.currentOutputSnapshotResolved=W,m.currentWriteId=kC(n),c.splice(c.indexOf(z),1),a=a.concat(C4(n.serverSyncTree_,m.path,W,m.currentWriteId,m.applyLocally)),a=a.concat(Aa(n.serverSyncTree_,z,!0))}else y=!0,T="nodata",a=a.concat(Aa(n.serverSyncTree_,m.currentWriteId,!0))}ji(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(w){setTimeout(w,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?i.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):i.push(()=>e[d].onComplete(new Error(T),!1,null))))}zd(n,n.transactionQueueTree_);for(let d=0;d<i.length;d++)_l(i[d]);Uy(n,n.transactionQueueTree_)}function LC(n,e){let t,i=n.transactionQueueTree_;for(t=ze(e);t!==null&&vl(i)===void 0;)i=My(i,t),e=at(e),t=ze(e);return i}function VC(n,e){const t=[];return UC(n,e,t),t.sort((i,a)=>i.order-a.order),t}function UC(n,e,t){const i=vl(e);if(i)for(let a=0;a<i.length;a++)t.push(i[a]);Vd(e,a=>{UC(n,a,t)})}function zd(n,e){const t=vl(e);if(t){let i=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[i]=t[a],i++);t.length=i,IC(e,t.length>0?t:void 0)}Vd(e,i=>{zd(n,i)})}function zC(n,e){const t=Oc(LC(n,e)),i=My(n.transactionQueueTree_,e);return H4(i,a=>{fg(n,a)}),fg(n,i),DC(i,a=>{fg(n,a)}),t}function fg(n,e){const t=vl(e);if(t){const i=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(ie(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(ie(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Aa(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&i.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?IC(e,void 0):t.length=l+1,ji(n.eventQueue_,Oc(e),a);for(let c=0;c<i.length;c++)_l(i[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p6(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let a=t[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function g6(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):In(`Invalid query segment '${t}' in query '${n}'`)}return e}const _S=function(n,e){const t=_6(n),i=t.namespace;t.domain==="firebase.com"&&xr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&xr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||bV();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new jR(t.host,t.secure,i,a,e,"",i!==t.subdomain),path:new tt(t.pathString)}},_6=function(n){let e="",t="",i="",a="",l="",c=!0,d="https",m=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(d=n.substring(0,g-1),n=n.substring(g+2));let y=n.indexOf("/");y===-1&&(y=n.length);let T=n.indexOf("?");T===-1&&(T=n.length),e=n.substring(0,Math.min(y,T)),y<T&&(a=p6(n.substring(y,T)));const w=g6(n.substring(Math.min(n.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const x=e.indexOf(".");i=e.substring(0,x).toLowerCase(),t=e.substring(x+1),l=i}"ns"in w&&(l=w.ns)}return{host:e,port:m,domain:t,subdomain:i,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y6{constructor(e,t,i,a){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ut(this.snapshot.exportVal())}}class v6{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E6{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return ie(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class zy{constructor(e,t,i,a){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=a}get key(){return Pe(this._path)?null:my(this._path)}get ref(){return new Mr(this._repo,this._path)}get _queryIdentifier(){const e=nS(this._queryParams),t=cy(e);return t==="{}"?"default":t}get _queryObject(){return nS(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof zy))return!1;const t=this._repo===e._repo,i=ZR(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+oU(this._path)}}class Mr extends zy{constructor(e,t){super(e,t,new yy,!1)}get parent(){const e=XR(this._path);return e===null?null:new Mr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class mc{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new tt(e),i=t_(this.ref,e);return new mc(this._node.getChild(t),i,yt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,a)=>e(new mc(a,t_(this.ref,i),yt)))}hasChild(e){const t=new tt(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dg(n,e){return n=wt(n),n._checkNotDeleted("ref"),e!==void 0?t_(n._root,e):n._root}function t_(n,e){return n=wt(n),ze(n._path)===null?Z4("child","path",e):OC("child","path",e),new Mr(n._repo,_t(n._path,e))}function T6(n,e){X4("update",e,n._path);const t=new ud;return c6(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function yS(n){n=wt(n);const e=new E6(()=>{}),t=new Fy(e);return u6(n._repo,n,t).then(i=>new mc(i,new Mr(n._repo,n._path),n._queryParams.getIndex()))}class Fy{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new y6("value",this,new mc(e.snapshotNode,new Mr(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new v6(this,e,t):null}matches(e){return e instanceof Fy?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}v4(Mr);b4(Mr);/**
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
 */const w6="FIREBASE_DATABASE_EMULATOR_HOST",n_={};let S6=!1;function b6(n,e,t,i){n.repoInfo_=new jR(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function A6(n,e,t,i,a){let l=i||n.options.databaseURL;l===void 0&&(n.options.projectId||xr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=_S(l,a),d=c.repoInfo,m;typeof process<"u"&&Uw&&(m=Uw[w6]),m?(l=`http://${m}?ns=${d.namespace}`,c=_S(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new PV(n.name,n.options,e);J4("Invalid Firebase Database URL",c),Pe(c.path)||xr("Database URL must point to the root of a Firebase Database (not including a child path).");const y=C6(d,n,g,new kV(n,t));return new I6(y,n)}function R6(n,e){const t=n_[e];(!t||t[n.key]!==n)&&xr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),f6(n),delete t[n.key]}function C6(n,e,t,i){let a=n_[e.name];a||(a={},n_[e.name]=a);let l=a[n.toURLString()];return l&&xr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new s6(n,S6,t,i),a[n.toURLString()]=l,l}class I6{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(a6(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mr(this._repo,$e())),this._rootInternal}_delete(){return this._rootInternal!==null&&(R6(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xr("Cannot call "+e+" on a deleted database.")}}function N6(n=hd(),e){const t=Fs(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=zS("database");i&&D6(t,...i)}return t}function D6(n,e,t,i={}){n=wt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&xr("Cannot call useEmulator() after instance has already been initialized.");const a=n._repoInternal;let l;if(a.repoInfo_.nodeAdmin)i.mockUserToken&&xr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new Sf(Sf.OWNER);else if(i.mockUserToken){const c=typeof i.mockUserToken=="string"?i.mockUserToken:jS(i.mockUserToken,n.app.options.projectId);l=new Sf(c)}b6(a,e,t,l)}/**
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
 */function x6(n){yV(Va),gi(new ri("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return A6(i,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Rn(zw,Fw,n),Rn(zw,Fw,"esm2017")}Rr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Rr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};x6();const O6=()=>{const n=_c(),e=xd(),t=N6(),[i,a]=Q.useState(""),[l,c]=Q.useState(""),[d,m]=Q.useState(""),[g,y]=Q.useState(""),[T,w]=Q.useState(!1),[R,x]=Q.useState(""),[q,z]=Q.useState("");Q.useEffect(()=>{const W=e.currentUser;if(!W){n("/");return}a(W.displayName||""),c(W.email||""),m(W.photoURL||"");const X=dg(t,`users/${W.uid}/profile`);yS(X).then(fe=>{if(fe.exists()){const ae=fe.val();ae.displayName&&a(ae.displayName),ae.photoURL&&m(ae.photoURL)}})},[e,t,n]);const $=async W=>{W.preventDefault(),w(!0),x(""),z("");try{const X=e.currentUser;if(!X)throw new Error("ไม่พบข้อมูลผู้ใช้");let fe=g||d;await XP(X,{displayName:i,photoURL:fe}),z("อัปเดตข้อมูลผู้ใช้ในระบบแล้ว"),w(!1),n("/home"),await T6(dg(t,`users/${X.uid}/profile`),{displayName:i,email:l,photoURL:fe});const ae=dg(t,`users/${X.uid}/profile`),ve=await yS(ae);if(ve.exists()){const M=ve.val();a(M.displayName),m(M.photoURL)}y("")}catch(X){console.error("Error updating profile:",X),x("เกิดข้อผิดพลาดในการอัปเดตข้อมูล: "+X.message),w(!1)}};return G.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50",children:G.jsx("div",{className:"container mx-auto px-4 py-16",children:G.jsx("div",{className:"max-w-2xl mx-auto",children:G.jsxs("div",{className:"bg-white rounded-3xl shadow-xl overflow-hidden",children:[G.jsxs("div",{className:"px-8 py-6 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden",children:[G.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(40deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.1)_100%)]"}),G.jsx("h1",{className:"text-3xl font-bold text-white text-center relative z-10",children:"แก้ไขข้อมูลส่วนตัว"})]}),G.jsxs("form",{onSubmit:$,className:"p-8",children:[G.jsx("div",{className:"mb-10",children:G.jsxs("div",{className:"relative w-32 h-32 mx-auto",children:[G.jsx("div",{className:"w-full h-full rounded-full border-4 border-white shadow-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100",children:d||g?G.jsx("img",{src:g||d,alt:"Profile",className:"w-full h-full object-cover transition-all duration-300",onError:W=>{W.target.onerror=null,W.target.src="",W.target.className="hidden",W.target.parentElement.innerHTML='<div class="w-full h-full flex items-center justify-center text-sm text-red-500 bg-red-50">ไม่สามารถโหลดรูปได้</div>'}}):G.jsx("div",{className:"w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100",children:G.jsx("span",{className:"text-4xl text-blue-300",children:"👤"})})}),G.jsx("div",{className:"absolute -bottom-2 -right-2 p-2 bg-white rounded-full shadow-lg",children:G.jsxs("svg",{className:"w-5 h-5 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[G.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"}),G.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 13a3 3 0 11-6 0 3 3 0 016 0z"})]})})]})}),R&&G.jsx("div",{className:"mb-6 p-4 bg-red-50 border border-red-100 rounded-xl animate-fadeIn",children:G.jsxs("div",{className:"flex items-center text-red-700",children:[G.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:G.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),G.jsx("p",{className:"text-sm font-medium",children:R})]})}),q&&G.jsx("div",{className:"mb-6 p-4 bg-green-50 border border-green-100 rounded-xl animate-fadeIn",children:G.jsxs("div",{className:"flex items-center text-green-700",children:[G.jsx("svg",{className:"w-5 h-5 mr-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:G.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})}),G.jsx("p",{className:"text-sm font-medium",children:q})]})}),G.jsxs("div",{className:"space-y-6",children:[G.jsxs("div",{children:[G.jsx("label",{htmlFor:"display-name",className:"block text-sm font-medium text-gray-700 mb-2",children:"ชื่อผู้ใช้"}),G.jsx("input",{type:"text",id:"display-name",value:i,onChange:W=>a(W.target.value),className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"})]}),G.jsxs("div",{children:[G.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"อีเมล"}),G.jsx("input",{type:"email",id:"email",value:l,onChange:W=>c(W.target.value),disabled:!0,className:"w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-gray-500 cursor-not-allowed"})]}),G.jsxs("div",{children:[G.jsx("label",{htmlFor:"photo-url",className:"block text-sm font-medium text-gray-700 mb-2",children:"ใส่ลิงก์รูปภาพใหม่"}),G.jsx("input",{type:"text",id:"photo-url",value:g,onChange:W=>y(W.target.value),placeholder:"ใส่ URL รูปภาพ",className:"w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"})]})]}),G.jsxs("div",{className:"mt-10 flex justify-end space-x-4",children:[G.jsx("button",{type:"button",onClick:()=>n("/home"),className:"px-6 py-2.5 border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium focus:ring-2 focus:ring-gray-200",children:"ยกเลิก"}),G.jsx("button",{type:"submit",disabled:T,className:"px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed font-medium focus:ring-2 focus:ring-blue-500",children:T?G.jsxs("span",{className:"flex items-center",children:[G.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[G.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),G.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"กำลังบันทึก..."]}):"บันทึก"})]})]})]})})})})},M6=()=>{const n=_c(),e=xd(),t=V_(),[i,a]=Q.useState({courseCode:"",courseName:"",className:"",imageUrl:""}),[l,c]=Q.useState(""),[d,m]=Q.useState(!1),g=w=>{a({...i,[w.target.name]:w.target.value})},y=()=>Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),T=async w=>{w.preventDefault(),m(!0),c("");try{const R=e.currentUser;if(!R)throw new Error("ไม่พบข้อมูลผู้ใช้ กรุณาเข้าสู่ระบบใหม่");if(!i.courseCode||!i.courseName||!i.className)throw new Error("กรุณากรอกข้อมูลให้ครบถ้วน");let x=i.imageUrl;(!x||!x.startsWith("http"))&&(x="https://via.placeholder.com/400x200?text=No+Image");const q=y();await Fg(zg(t,"classroom",q),{owner:R.uid,info:{code:i.courseCode,name:i.courseName,room:i.className,photo:x}}),await Fg(zg(t,"users",R.uid,"classroom",q),{status:1,info:{code:i.courseCode,name:i.courseName,room:i.className,photo:x}}),n("/home")}catch(R){console.error("Error adding course:",R),c(R.message)}finally{m(!1)}};return G.jsx("div",{className:"min-h-screen bg-gray-100 py-8",children:G.jsx("div",{className:"max-w-2xl mx-auto px-4",children:G.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[G.jsx("h2",{className:"text-2xl font-bold mb-6",children:"เพิ่มวิชาใหม่"}),G.jsxs("form",{onSubmit:T,className:"space-y-4",children:[G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"รหัสวิชา"}),G.jsx("input",{type:"text",name:"courseCode",value:i.courseCode,onChange:g,placeholder:"เช่น SC310001",required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"ชื่อวิชา"}),G.jsx("input",{type:"text",name:"courseName",value:i.courseName,onChange:g,placeholder:"เช่น Computer Programming",required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"ห้องเรียน"}),G.jsx("input",{type:"text",name:"className",value:i.className,onChange:g,placeholder:"เช่น SC5101",required:!0,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),G.jsxs("div",{children:[G.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"URL รูปภาพ"}),G.jsx("input",{type:"url",name:"imageUrl",value:i.imageUrl,onChange:g,placeholder:"https://example.com/image.jpg",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),l&&G.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded",children:l}),G.jsxs("div",{className:"flex justify-end space-x-4 mt-6",children:[G.jsx("button",{type:"button",onClick:()=>n("/home"),className:"px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50",children:"ยกเลิก"}),G.jsx("button",{type:"submit",disabled:d,className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300",children:d?"กำลังบันทึก...":"บันทึก"})]})]})]})})})};function k6(){return G.jsx("div",{children:G.jsxs(uN,{children:[G.jsx(Mu,{path:"/",element:G.jsx(gV,{})}),G.jsx(Mu,{path:"/home",element:G.jsx(_V,{})}),G.jsx(Mu,{path:"/edit-profile",element:G.jsx(O6,{})}),G.jsx(Mu,{path:"/add-course",element:G.jsx(M6,{})})]})})}console.log("App is being rendered");v1.createRoot(document.getElementById("root")).render(G.jsx(Q.StrictMode,{children:G.jsx(MN,{basename:"/final-web-app-SC310006/",children:G.jsx(k6,{})})}));
